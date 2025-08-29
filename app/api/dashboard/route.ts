import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

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
          status
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
    const today = new Date().toISOString().split('T')[0];
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

    return NextResponse.json({
      business: user.businesses,
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