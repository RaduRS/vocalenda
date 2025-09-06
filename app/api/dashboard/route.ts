import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getCurrentUKDate, formatISODate } from '@/lib/date-utils';

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const supabase = supabaseAdmin;

    // Get user's business
    const { data: user, error: userError } = await supabase
      .from('users')
      .select(`
        business_id,
        businesses (
          id,
          name,
          slug,
          phone_number,
          email,
          address,
          status,
          google_calendar_id
        )
      `)
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user?.business_id) {
      return NextResponse.json({ 
        business: null,
        stats: {
          totalAppointments: 0,
          todayAppointments: 0,
          totalCustomers: 0,
          totalCalls: 0
        }
      });
    }

    const businessId = user.business_id;

    // Get dashboard stats
    const [appointmentsResult, customersResult, callsResult] = await Promise.all([
      // Total appointments
      supabase
        .from('appointments')
        .select('id', { count: 'exact' })
        .eq('business_id', businessId),
      
      // Total customers
      supabase
        .from('customers')
        .select('id', { count: 'exact' })
        .eq('business_id', businessId),
      
      // Total calls
      supabase
        .from('call_logs')
        .select('id', { count: 'exact' })
        .eq('business_id', businessId)
    ]);

    // Today's appointments
    const today = formatISODate(getCurrentUKDate());
    const { count: todayAppointments } = await supabase
      .from('appointments')
      .select('id', { count: 'exact' })
      .eq('business_id', businessId)
      .eq('appointment_date', today);

    const stats = {
      totalAppointments: appointmentsResult.count || 0,
      todayAppointments: todayAppointments || 0,
      totalCustomers: customersResult.count || 0,
      totalCalls: callsResult.count || 0
    };

    // Check Google Calendar connection status more thoroughly
    let googleCalendarConnected = false;
    
    if (user.businesses?.google_calendar_id) {
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
         googleCalendarConnected = !!(user.businesses?.google_calendar_id && hasGoogleTokens);
      }
    }
    
    const businessWithCalendarStatus = {
      ...user.businesses,
      google_calendar_connected: googleCalendarConnected
    };

    return NextResponse.json({
      business: businessWithCalendarStatus,
      stats
    });

  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}