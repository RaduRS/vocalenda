import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import type { calendar_v3 } from 'googleapis';
import { createClient } from '@supabase/supabase-js';
import { auth } from '@clerk/nextjs/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const oauth2Client = new google.auth.OAuth2(
  process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Generate Google OAuth URL
export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get business ID from query params
    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get('businessId');
    
    if (!businessId) {
      return NextResponse.json({ error: 'Business ID required' }, { status: 400 });
    }

    // Verify user owns this business
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user || user.business_id !== businessId) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    // Generate OAuth URL with state containing business ID
    const scopes = [
      'https://www.googleapis.com/auth/calendar',
      'https://www.googleapis.com/auth/calendar.events'
    ];

    const authUrl = oauth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      state: businessId, // Pass business ID in state
      prompt: 'consent', // Force consent to get refresh token
      redirect_uri: process.env.GOOGLE_REDIRECT_URI
    });

    return NextResponse.json({ authUrl });
  } catch (error) {
    console.error('Google OAuth URL generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate OAuth URL' },
      { status: 500 }
    );
  }
}

// Handle OAuth callback
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { code, state } = await request.json();
    const businessId = state;

    if (!code || !businessId) {
      return NextResponse.json(
        { error: 'Authorization code and business ID required' },
        { status: 400 }
      );
    }

    // Verify user owns this business
    const { data: user, error: userError } = await supabase
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user || user.business_id !== businessId) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);

    // Get user's calendar list to find primary calendar
    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });
    const calendarList = await calendar.calendarList.list();
    
    const primaryCalendar = calendarList.data.items?.find(
      (cal: calendar_v3.Schema$CalendarListEntry) => cal.primary === true
    );

    if (!primaryCalendar?.id) {
      return NextResponse.json(
        { error: 'Primary calendar not found' },
        { status: 400 }
      );
    }

    // Store tokens and calendar ID in business config
    const { error: configError } = await supabase
      .from('business_config')
      .upsert({
        business_id: businessId,
        integration_settings: {
          google: {
            access_token: tokens.access_token,
            refresh_token: tokens.refresh_token,
            token_type: tokens.token_type,
            expiry_date: tokens.expiry_date,
            calendar_id: primaryCalendar.id
          }
        }
      }, {
        onConflict: 'business_id'
      });

    if (configError) {
      console.error('Failed to store Google tokens:', configError);
      return NextResponse.json(
        { error: 'Failed to store calendar integration' },
        { status: 500 }
      );
    }

    // Update business with calendar ID
    const { error: updateError } = await supabase
      .from('businesses')
      .update({ google_calendar_id: primaryCalendar.id })
      .eq('id', businessId);

    if (updateError) {
      console.error('Failed to update business calendar ID:', updateError);
    }

    return NextResponse.json({
      success: true,
      calendarId: primaryCalendar.id,
      calendarName: primaryCalendar.summary
    });
  } catch (error) {
    console.error('Google OAuth callback error:', error);
    return NextResponse.json(
      { error: 'Failed to complete OAuth flow' },
      { status: 500 }
    );
  }
}