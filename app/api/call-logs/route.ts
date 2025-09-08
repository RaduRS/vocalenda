import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    const { userId } = await auth();
    
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

    // Fetch all call logs for this business, ordered by most recent first
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
        transcript,
        customers (
          first_name,
          last_name,
          phone
        )
      `)
      .eq('business_id', businessId)
      .order('started_at', { ascending: false });

    if (callLogsError) {
      console.error('Error fetching call logs:', callLogsError);
      return NextResponse.json({ error: 'Failed to fetch call logs' }, { status: 500 });
    }

    // Process call logs data to match expected format
    const processedCallLogs = (callLogs || []).map(call => ({
      id: call.id,
      caller_phone: call.caller_phone,
      status: call.status,
      started_at: call.started_at,
      ended_at: call.ended_at,
      duration: call.started_at && call.ended_at 
        ? Math.round((new Date(call.ended_at).getTime() - new Date(call.started_at).getTime()) / 1000)
        : call.duration_seconds,
      customer_name: call.customers 
        ? `${call.customers.first_name || ''} ${call.customers.last_name || ''}`.trim() || null
        : null,
      twilio_call_sid: call.twilio_call_sid,
      transcript: call.transcript
    }));

    return NextResponse.json({
      callLogs: processedCallLogs
    });

  } catch (error) {
    console.error('Error in call-logs API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}