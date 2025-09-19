import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { auth } from '@clerk/nextjs/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's business
    const { data: user, error: userError } = await supabase
      .from('users')
      .select(`
        business_id,
        businesses (
          id,
          google_calendar_id
        )
      `)
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user?.businesses) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    const businessId = user.business_id;
    const business = Array.isArray(user.businesses) ? user.businesses[0] : user.businesses;

    // Check Google Calendar connection status
    let googleCalendarConnected = false;
    
    if (business?.google_calendar_id) {
      // Check if we have valid Google tokens in business_config
      const { data: config } = await supabase
        .from('business_config')
        .select('integration_settings')
        .eq('business_id', businessId)
        .single();
      
      if (config?.integration_settings) {
        let integrationSettings;
        
        // Parse JSON string if needed
        if (typeof config.integration_settings === 'string') {
          try {
            integrationSettings = JSON.parse(config.integration_settings);
          } catch (e) {
            console.error('Failed to parse integration_settings JSON:', e);
            integrationSettings = null;
          }
        } else {
          integrationSettings = config.integration_settings;
        }
        
        const hasGoogleTokens = !!(integrationSettings && 
            typeof integrationSettings === 'object' && 
            integrationSettings !== null &&
            'google' in integrationSettings &&
            typeof integrationSettings.google === 'object' &&
            integrationSettings.google !== null &&
            'access_token' in integrationSettings.google);
            
        // Both google_calendar_id AND valid tokens are required for connection
        googleCalendarConnected = !!(business?.google_calendar_id && hasGoogleTokens);
      }
    }

    return NextResponse.json({
      isConnected: googleCalendarConnected,
      google_calendar_id: business?.google_calendar_id || null
    });

  } catch (error) {
    console.error('Google Calendar status API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}