import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import { createClient } from '@supabase/supabase-js';
import { auth } from '@clerk/nextjs/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { businessId } = await request.json();
    
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

    // Check if user has any Google Calendar connection (either tokens or calendar ID)
    const { data: business, error: businessError } = await supabase
      .from('businesses')
      .select('google_calendar_id')
      .eq('id', businessId)
      .single();

    const { data: config, error: configError } = await supabase
      .from('business_config')
      .select('integration_settings')
      .eq('business_id', businessId)
      .single();

    const hasGoogleCalendarId = business?.google_calendar_id;
    const hasGoogleTokens = config?.integration_settings?.google;
    
    // If user has no Google Calendar connection at all, return error
    if (!hasGoogleCalendarId && !hasGoogleTokens) {
      return NextResponse.json({ error: 'Google Calendar not connected' }, { status: 400 });
    }

    // Attempt to revoke Google tokens if they exist
    if (hasGoogleTokens) {
      try {
        const oauth2Client = new google.auth.OAuth2(
          process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          process.env.GOOGLE_CLIENT_SECRET
        );
        
        oauth2Client.setCredentials({
          access_token: hasGoogleTokens.access_token,
          refresh_token: hasGoogleTokens.refresh_token
        });

        // Revoke the tokens with Google
        await oauth2Client.revokeCredentials();
        console.log('Successfully revoked Google tokens');
      } catch (revokeError) {
        console.error('Failed to revoke Google tokens:', revokeError);
        // Continue with cleanup even if revocation fails
      }
    } else {
      console.log('No Google tokens found to revoke, proceeding with cleanup');
    }

    // Remove Google integration from business config (if it exists)
    if (config?.integration_settings) {
      const updatedSettings = { ...config.integration_settings };
      delete updatedSettings.google;

      const { error: updateConfigError } = await supabase
        .from('business_config')
        .update({
          integration_settings: Object.keys(updatedSettings).length > 0 ? updatedSettings : null
        })
        .eq('business_id', businessId);

      if (updateConfigError) {
        console.error('Failed to update business config:', updateConfigError);
        return NextResponse.json(
          { error: 'Failed to disconnect Google Calendar' },
          { status: 500 }
        );
      }
    } else {
      console.log('No business config found to clean up');
    }

    // Clear Google Calendar ID from business
    const { error: updateBusinessError } = await supabase
      .from('businesses')
      .update({ google_calendar_id: null })
      .eq('id', businessId);

    if (updateBusinessError) {
      console.error('Failed to update business:', updateBusinessError);
    }

    return NextResponse.json({
      success: true,
      message: 'Google Calendar disconnected successfully'
    });
  } catch (error) {
    console.error('Google Calendar disconnect error:', error);
    return NextResponse.json(
      { error: 'Failed to disconnect Google Calendar' },
      { status: 500 }
    );
  }
}