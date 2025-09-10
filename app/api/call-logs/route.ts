import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET(request: Request) {
  try {
    const { userId } = await auth();
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get the user's business by finding the user record first
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user || !user.business_id) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    const businessId = user.business_id;

    // Get total count for pagination
    const { count: totalCount, error: countError } = await supabaseAdmin
      .from('call_logs')
      .select('*', { count: 'exact', head: true })
      .eq('business_id', businessId);

    if (countError) {
      console.error('Error counting call logs:', countError);
      return NextResponse.json({ error: 'Failed to count call logs' }, { status: 500 });
    }

    // Fetch paginated call logs for this business, ordered by most recent first
    const { data: callLogs, error: callLogsError } = await supabaseAdmin
      .from('call_logs')
      .select(`
        id,
        caller_phone,
        status,
        started_at,
        ended_at,
        duration_seconds,
        twilio_call_sid,
        transcript
      `)
      .eq('business_id', businessId)
      .order('started_at', { ascending: false })
      .range(offset, offset + limit - 1);

    if (callLogsError) {
      console.error('Error fetching call logs:', callLogsError);
      return NextResponse.json({ error: 'Failed to fetch call logs' }, { status: 500 });
    }

    // Get all customers for this business to match by phone number
    const { data: customers, error: customersError } = await supabaseAdmin
      .from('customers')
      .select('phone, first_name, last_name')
      .eq('business_id', businessId);

    if (customersError) {
      console.error('Error fetching customers:', customersError);
    }

    // Create a phone number to customer mapping
    const phoneToCustomer = new Map();
    if (customers) {
      customers.forEach(customer => {
        if (customer.phone) {
          phoneToCustomer.set(customer.phone, customer);
        }
      });
    }

    // Process call logs data to match expected format
    const processedCallLogs = (callLogs || []).map(call => {
      // Find customer by matching phone number
      const customer = phoneToCustomer.get(call.caller_phone);
      
      return {
        id: call.id,
        caller_phone: call.caller_phone,
        status: call.status,
        started_at: call.started_at,
        ended_at: call.ended_at,
        duration: call.started_at && call.ended_at 
          ? Math.round((new Date(call.ended_at).getTime() - new Date(call.started_at).getTime()) / 1000)
          : call.duration_seconds,
        customer_name: customer 
          ? `${customer.first_name || ''} ${customer.last_name || ''}`.trim() || null
          : null,
        twilio_call_sid: call.twilio_call_sid,
        transcript: call.transcript
      };
    });

    return NextResponse.json({
      callLogs: processedCallLogs,
      totalCount: totalCount || 0,
      currentPage: page,
      totalPages: Math.ceil((totalCount || 0) / limit),
      hasNextPage: page < Math.ceil((totalCount || 0) / limit),
      hasPreviousPage: page > 1
    });

  } catch (error) {
    console.error('Error in call-logs API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}