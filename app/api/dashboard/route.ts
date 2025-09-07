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
        },
        recentCalls: []
      });
    }

    const businessId = user.business_id;

    // Get dashboard stats and recent call logs
    const [appointmentsResult, customersResult, callsResult, recentCallsResult] = await Promise.all([
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
        .eq('business_id', businessId),
      
      // Recent call logs with customer info
      supabase
        .from('call_logs')
        .select(`
          id,
          caller_phone,
          status,
          started_at,
          ended_at,
          twilio_call_sid,
          customers (
            first_name,
            last_name,
            phone
          )
        `)
        .eq('business_id', businessId)
        .order('started_at', { ascending: false })
        .limit(10)
    ]);

    // Today's appointments
    const today = formatISODate(getCurrentUKDate());
    const { count: todayAppointments } = await supabase
      .from('appointments')
      .select('id', { count: 'exact' })
      .eq('business_id', businessId)
      .eq('appointment_date', today);

    // Process recent calls data
    const recentCalls = (recentCallsResult.data || []).map(call => ({
      id: call.id,
      caller_phone: call.caller_phone,
      status: call.status,
      started_at: call.started_at,
      ended_at: call.ended_at,
      duration: call.started_at && call.ended_at 
        ? Math.round((new Date(call.ended_at).getTime() - new Date(call.started_at).getTime()) / 1000)
        : null,
      customer_name: call.customers 
        ? `${call.customers.first_name || ''} ${call.customers.last_name || ''}`.trim() || null
        : null,
      twilio_call_sid: call.twilio_call_sid
    }));

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
      stats,
      recentCalls
    });

  } catch (error) {
    console.error('Dashboard API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}