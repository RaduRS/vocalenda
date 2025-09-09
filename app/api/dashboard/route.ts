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

    // Optimize database queries with fewer parallel requests
    const today = formatISODate(getCurrentUKDate());
    
    const [appointmentsResult, customersResult, callsResult, todayAppointmentsResult, recentCallsResult] = await Promise.all([
      // Total appointments
      supabase.from('appointments').select('id', { count: 'exact' }).eq('business_id', businessId),
      // Total customers  
      supabase.from('customers').select('id', { count: 'exact' }).eq('business_id', businessId),
      // Total calls
      supabase.from('call_logs').select('id', { count: 'exact' }).eq('business_id', businessId),
      // Today's appointments (excluding cancelled)
      supabase.from('appointments').select('id', { count: 'exact' }).eq('business_id', businessId).eq('appointment_date', today).neq('status', 'cancelled'),
      // Recent call logs with customer info joined by phone number
      supabase
        .from('call_logs')
        .select(`
          id,
          caller_phone,
          status,
          started_at,
          ended_at,
          twilio_call_sid,
          duration_seconds,
          intent_detected
        `)
        .eq('business_id', businessId)
        .order('started_at', { ascending: false })
        .limit(8)
    ]);

    // Get customers for phone number lookup
    const { data: customersData } = await supabase
      .from('customers')
      .select('phone, first_name, last_name')
      .eq('business_id', businessId);

    // Create phone to customer name mapping
    const phoneToCustomer = new Map();
    (customersData || []).forEach(customer => {
      if (customer.phone) {
        phoneToCustomer.set(customer.phone, `${customer.first_name || ''} ${customer.last_name || ''}`.trim() || null);
      }
    });

    // Process recent calls data with customer name lookup
     const recentCalls = (recentCallsResult.data || []).map(call => ({
       id: call.id,
       caller_phone: call.caller_phone,
       status: call.status,
       started_at: call.started_at,
       ended_at: call.ended_at,
       duration_seconds: call.duration_seconds,
       duration: call.started_at && call.ended_at 
         ? Math.round((new Date(call.ended_at).getTime() - new Date(call.started_at).getTime()) / 1000)
         : call.duration_seconds,
       customer_name: phoneToCustomer.get(call.caller_phone) || null,
       intent_detected: call.intent_detected,
       twilio_call_sid: call.twilio_call_sid,
       created_at: call.started_at
     }));

    // Get appointment status distribution
    const { data: appointmentStatusData } = await supabase
      .from('appointments')
      .select('status')
      .eq('business_id', businessId);

    const appointmentStatusCounts = {
      confirmed: 0,
      pending: 0,
      completed: 0,
      cancelled: 0,
      no_show: 0
    };

    (appointmentStatusData || []).forEach(appointment => {
      if (appointment.status in appointmentStatusCounts) {
        appointmentStatusCounts[appointment.status as keyof typeof appointmentStatusCounts]++;
      }
    });

    // Get weekly activity data (last 7 days)
    const weeklyActivityData = [];
    const currentDate = new Date();
    
    for (let i = 6; i >= 0; i--) {
       const date = new Date(currentDate);
       date.setDate(date.getDate() - i);
      const dateStr = formatISODate(date);
      
      const [dayAppointments, dayCalls] = await Promise.all([
        supabase.from('appointments').select('id', { count: 'exact' })
          .eq('business_id', businessId)
          .eq('appointment_date', dateStr),
        supabase.from('call_logs').select('id', { count: 'exact' })
          .eq('business_id', businessId)
          .gte('started_at', `${dateStr}T00:00:00Z`)
          .lt('started_at', `${dateStr}T23:59:59Z`)
      ]);
      
      weeklyActivityData.push({
        date: dateStr,
        appointments: dayAppointments.count || 0,
        calls: dayCalls.count || 0
      });
    }

    const stats = {
      totalAppointments: appointmentsResult.count || 0,
      todayAppointments: todayAppointmentsResult.count || 0,
      totalCustomers: customersResult.count || 0,
      totalCalls: callsResult.count || 0,
      appointmentStatusCounts,
      weeklyActivity: weeklyActivityData
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