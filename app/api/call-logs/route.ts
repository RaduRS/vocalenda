import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get the user's business
    const { data: business, error: businessError } = await supabase
      .from('businesses')
      .select('id')
      .eq('user_id', userId)
      .single();

    if (businessError || !business) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    // Fetch all call logs for this business, ordered by most recent first
    const { data: callLogs, error: callLogsError } = await supabase
      .from('call_logs')
      .select(`
        id,
        caller_phone,
        status,
        started_at,
        ended_at,
        duration,
        customer_name,
        twilio_call_sid,
        transcript
      `)
      .eq('business_id', business.id)
      .order('started_at', { ascending: false });

    if (callLogsError) {
      console.error('Error fetching call logs:', callLogsError);
      return NextResponse.json({ error: 'Failed to fetch call logs' }, { status: 500 });
    }

    return NextResponse.json({
      callLogs: callLogs || []
    });

  } catch (error) {
    console.error('Error in call-logs API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}