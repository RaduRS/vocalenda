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
          google_calendar_id,
          business_hours
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
    
    const [appointmentsResult, customersResult, callsResult, todayAppointmentsResult] = await Promise.all([
      // Total appointments
      supabase.from('appointments').select('id', { count: 'exact' }).eq('business_id', businessId),
      // Total customers  
      supabase.from('customers').select('id', { count: 'exact' }).eq('business_id', businessId),
      // Total calls
      supabase.from('call_logs').select('id', { count: 'exact' }).eq('business_id', businessId),
      // Today's appointments (excluding cancelled)
      supabase.from('appointments').select('id', { count: 'exact' }).eq('business_id', businessId).eq('appointment_date', today).neq('status', 'cancelled')
    ]);

    // Get recent call logs and customers separately to match by phone
    const [recentCallsResult, dashboardCustomersResult] = await Promise.all([
      supabase
        .from('call_logs')
        .select(`
          id,
          caller_phone,
          status,
          started_at,
          ended_at,
          duration_seconds,
          intent_detected,
          twilio_call_sid
        `)
        .eq('business_id', businessId)
        .order('started_at', { ascending: false })
        .limit(8),
      supabase
        .from('customers')
        .select('phone, first_name, last_name')
        .eq('business_id', businessId)
    ]);

    // Create a phone number to customer mapping
    const phoneToCustomer = new Map();
    if (dashboardCustomersResult.data) {
      dashboardCustomersResult.data.forEach(customer => {
        if (customer.phone) {
          phoneToCustomer.set(customer.phone, customer);
        }
      });
    }

    // Process recent calls data
    const recentCalls = (recentCallsResult.data || []).map(call => {
      // Find customer by matching phone number
      const customer = phoneToCustomer.get(call.caller_phone);
      
      return {
        id: call.id,
        caller_phone: call.caller_phone,
        status: call.status,
        started_at: call.started_at,
        ended_at: call.ended_at,
        duration_seconds: call.duration_seconds,
        duration: call.started_at && call.ended_at 
          ? Math.round((new Date(call.ended_at).getTime() - new Date(call.started_at).getTime()) / 1000)
          : call.duration_seconds,
        customer_name: customer 
          ? `${customer.first_name || ''} ${customer.last_name || ''}`.trim() || null
          : null,
        intent_detected: call.intent_detected,
        twilio_call_sid: call.twilio_call_sid,
        created_at: call.started_at
      };
    });

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
    const businessHours = user.businesses?.business_hours as Record<string, { closed?: boolean; open?: string; close?: string }> | null;
    
    // Day name mapping
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
    for (let i = 6; i >= 0; i--) {
       const date = new Date(currentDate);
       date.setDate(date.getDate() - i);
      const dateStr = formatISODate(date);
      const dayName = dayNames[date.getDay()];
      
      // Check if business is closed on this day
      const isDayClosed = businessHours && businessHours[dayName] && businessHours[dayName].closed === true;
      
      let dayAppointments, dayCalls;
      
      if (isDayClosed) {
        // If business is closed, set appointments to 0 and still get calls
        dayAppointments = { count: 0 };
        const callsResult = await supabase.from('call_logs').select('id', { count: 'exact' })
          .eq('business_id', businessId)
          .gte('started_at', `${dateStr}T00:00:00Z`)
          .lt('started_at', `${dateStr}T23:59:59Z`);
        dayCalls = callsResult;
      } else {
        // Business is open, get both appointments and calls
        const [appointmentsResult, callsResult] = await Promise.all([
          supabase.from('appointments').select('id', { count: 'exact' })
            .eq('business_id', businessId)
            .eq('appointment_date', dateStr),
          supabase.from('call_logs').select('id', { count: 'exact' })
            .eq('business_id', businessId)
            .gte('started_at', `${dateStr}T00:00:00Z`)
            .lt('started_at', `${dateStr}T23:59:59Z`)
        ]);
        dayAppointments = appointmentsResult;
        dayCalls = callsResult;
      }
      
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