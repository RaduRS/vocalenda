import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getCurrentUKDate, formatISODate } from '@/lib/date-utils';

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's business ID
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user || !user.business_id) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    const businessId = user.business_id;
    const today = formatISODate(getCurrentUKDate());

    // Fetch appointments with related data
    const { data: appointments, error: appointmentsError } = await supabaseAdmin
      .from('appointments')
      .select(`
        id,
        appointment_date,
        start_time,
        end_time,
        status,
        notes,
        created_at,
        customers (
          id,
          first_name,
          last_name,
          phone,
          email
        ),
        services (
          id,
          name,
          duration_minutes,
          price,
          currency
        )
      `)
      .eq('business_id', businessId)
      .order('appointment_date', { ascending: false })
      .order('start_time', { ascending: true });

    if (appointmentsError) {
      console.error('Error fetching appointments:', appointmentsError);
      return NextResponse.json({ error: 'Failed to fetch appointments' }, { status: 500 });
    }

    // Calculate stats from the fetched appointments to reduce database queries
    const todayAppointments = appointments?.filter(apt => 
      apt.appointment_date === today && apt.status !== 'cancelled'
    ).length || 0;
    
    const weekAgo = formatISODate(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000));
    const thisWeekAppointments = appointments?.filter(apt => 
      apt.appointment_date >= weekAgo && apt.status !== 'cancelled'
    ).length || 0;
    
    // Only fetch total customers separately as it's not in appointments data
    const { count: totalCustomers } = await supabaseAdmin
      .from('customers')
      .select('id', { count: 'exact' })
      .eq('business_id', businessId);

    const stats = {
      todayAppointments,
      thisWeekAppointments,
      totalCustomers: totalCustomers || 0
    };

    // Process appointments data
    const processedAppointments = (appointments || []).map(appointment => ({
      id: appointment.id,
      date: appointment.appointment_date,
      startTime: appointment.start_time,
      endTime: appointment.end_time,
      status: appointment.status,
      notes: appointment.notes,
      createdAt: appointment.created_at,
      customer: appointment.customers ? {
        id: appointment.customers.id,
        name: `${appointment.customers.first_name || ''} ${appointment.customers.last_name || ''}`.trim() || 'Unknown',
        phone: appointment.customers.phone,
        email: appointment.customers.email
      } : null,
      service: appointment.services ? {
        id: appointment.services.id,
        name: appointment.services.name,
        duration: appointment.services.duration_minutes,
        price: appointment.services.price,
        currency: appointment.services.currency
      } : null
    }));

    return NextResponse.json({
      appointments: processedAppointments,
      stats
    });

  } catch (error) {
    console.error('Error in appointments API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}