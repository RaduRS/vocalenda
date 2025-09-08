import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

// Handle GET requests for Twilio webhook verification
export async function GET() {
  // Twilio sometimes sends GET requests to verify the webhook URL
  return new NextResponse('Webhook endpoint is active', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}

export async function POST(request: NextRequest) {
  try {
    // Get the incoming phone number from Twilio
    // Parse Twilio webhook data (application/x-www-form-urlencoded)
    const body = await request.text();
    const params = new URLSearchParams(body);
    
    const to = params.get('To') || '';
    const from = params.get('From') || '';
    const callSid = params.get('CallSid') || '';

    console.log('Incoming call:', { to, from, callSid });

    // Look up the business by phone number
    const { data: business, error } = await supabaseAdmin
      .from('businesses')
      .select('id, name, timezone, status')
      .eq('phone_number', to)
      .eq('status', 'active')
      .single();

    if (error || !business) {
      console.error('Business not found for phone number:', to, error);
      // Return TwiML to play a message and hang up
      const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Sorry, this number is not configured for voice bookings. Please try again later.</Say>
  <Hangup/>
</Response>`;
      
      return new NextResponse(twiml, {
        headers: { 'Content-Type': 'text/xml' },
      });
    }

    // Get the WebSocket URL for streaming
    const streamUrl = process.env.WEBSOCKET_URL || 'ws://localhost:8080';

    // Return TwiML to start media stream
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Connect>
    <Stream url="${streamUrl}">
      <Parameter name="business_id" value="${business.id}" />
      <Parameter name="call_sid" value="${callSid}" />
      <Parameter name="caller_phone" value="${from}" />
      <Parameter name="business_phone" value="${to}" />
      <Parameter name="timezone" value="${business.timezone || 'UTC'}" />
    </Stream>
  </Connect>
</Response>`;

    return new NextResponse(twiml, {
      headers: { 'Content-Type': 'text/xml' },
    });

  } catch (error) {
    console.error('Voice webhook error:', error);
    
    // Return error TwiML
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Sorry, we're experiencing technical difficulties. Please try again later.</Say>
  <Hangup/>
</Response>`;
    
    return new NextResponse(twiml, {
      headers: { 'Content-Type': 'text/xml' },
      status: 500,
    });
  }
}