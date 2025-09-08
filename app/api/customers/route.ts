import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

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

    // Fetch customers with appointment count
    const { data: customers, error: customersError } = await supabaseAdmin
      .from('customers')
      .select(`
        id,
        first_name,
        last_name,
        phone,
        email,
        notes,
        created_at,
        updated_at
      `)
      .eq('business_id', businessId)
      .order('created_at', { ascending: false });

    if (customersError) {
      console.error('Error fetching customers:', customersError);
      return NextResponse.json({ error: 'Failed to fetch customers' }, { status: 500 });
    }

    // Get stats for each customer
    const customerIds = (customers || []).map(c => c.id);
    
    let appointmentCounts: { [key: string]: number } = {};
    if (customerIds.length > 0) {
      const { data: appointmentStats, error: statsError } = await supabaseAdmin
        .from('appointments')
        .select('customer_id')
        .in('customer_id', customerIds)
        .neq('status', 'cancelled');
      
      if (!statsError && appointmentStats) {
        appointmentCounts = appointmentStats.reduce((acc, appointment) => {
          acc[appointment.customer_id] = (acc[appointment.customer_id] || 0) + 1;
          return acc;
        }, {} as { [key: string]: number });
      }
    }

    // Get overall stats
    const [totalCustomersResult, phoneContactsResult, emailContactsResult] = await Promise.all([
      // Total customers
      supabaseAdmin
        .from('customers')
        .select('id', { count: 'exact' })
        .eq('business_id', businessId),
      
      // Phone contacts
      supabaseAdmin
        .from('customers')
        .select('id', { count: 'exact' })
        .eq('business_id', businessId)
        .not('phone', 'is', null),
      
      // Email contacts
      supabaseAdmin
        .from('customers')
        .select('id', { count: 'exact' })
        .eq('business_id', businessId)
        .not('email', 'is', null)
    ]);

    const stats = {
      totalCustomers: totalCustomersResult.count || 0,
      phoneContacts: phoneContactsResult.count || 0,
      emailContacts: emailContactsResult.count || 0,
      localCustomers: totalCustomersResult.count || 0 // All customers are considered local
    };

    // Process customers data
    const processedCustomers = (customers || []).map(customer => ({
      id: customer.id,
      name: `${customer.first_name || ''} ${customer.last_name || ''}`.trim() || 'Unknown',
      firstName: customer.first_name,
      lastName: customer.last_name,
      phone: customer.phone,
      email: customer.email,
      notes: customer.notes,
      appointmentCount: appointmentCounts[customer.id] || 0,
      createdAt: customer.created_at,
      updatedAt: customer.updated_at
    }));

    return NextResponse.json({
      customers: processedCustomers,
      stats
    });

  } catch (error) {
    console.error('Error in customers API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}