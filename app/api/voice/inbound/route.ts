import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { generateMinutesExhaustedTwiML } from '@/lib/call-redirect';

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
      .select('id, name, timezone, status, minutes_allowed, minutes_used')
      .eq('phone_number', to)
      .eq('status', 'active')
      .single();

    // Get business config separately (might not exist)
    let businessConfig = null;
    if (business) {
      const { data: config } = await supabaseAdmin
        .from('business_config')
        .select('bypass_phone_number')
        .eq('business_id', business.id)
        .single();
      businessConfig = config;
    }

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

    // Check minutes remaining
    const minutesAllowed = business.minutes_allowed || 0;
    const minutesUsed = business.minutes_used || 0;
    const minutesRemaining = minutesAllowed - minutesUsed;
    
    console.log(`📊 Minutes check for business ${business.id}: ${minutesUsed}/${minutesAllowed} used, ${minutesRemaining} remaining`);
    
    if (minutesRemaining <= 0) {
      const bypassPhone = businessConfig?.bypass_phone_number;
      
      if (bypassPhone) {
        console.log(`🔄 Redirecting call to bypass number: ${bypassPhone}`);
        
        // Log the redirected call (using 'failed' status since 'redirected' doesn't exist)
        try {
          await supabaseAdmin
            .from('call_logs')
            .insert({
              business_id: business.id,
              caller_phone: from,
              business_phone: to,
              status: 'failed',
              ai_summary: `Call redirected to ${bypassPhone} - No minutes remaining (${minutesUsed}/${minutesAllowed} used)`,
              started_at: new Date().toISOString()
            });
        } catch (logError) {
          console.error('❌ Failed to log redirected call:', logError);
        }
        
        // Return TwiML to redirect to bypass number using shared utility
        const twiml = generateMinutesExhaustedTwiML(bypassPhone, minutesUsed, minutesAllowed);
        
        return new NextResponse(twiml, {
          headers: { 'Content-Type': 'text/xml' },
        });
      } else {
        console.log(`⚠️ No minutes remaining and no bypass phone configured for business ${business.id}`);
        
        // Log the rejected call
        try {
          await supabaseAdmin
            .from('call_logs')
            .insert({
              business_id: business.id,
              caller_phone: from,
              business_phone: to,
              status: 'failed',
              ai_summary: `Call rejected - No minutes remaining and no bypass phone configured (${minutesUsed}/${minutesAllowed} used)`,
              started_at: new Date().toISOString()
            });
        } catch (logError) {
          console.error('❌ Failed to log rejected call:', logError);
        }
        
        // Return TwiML to politely decline the call
        const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Thank you for calling. We are currently at capacity and cannot take your call at this time. Please try calling back later or visit our website to book online.</Say>
  <Hangup/>
</Response>`;
        
        return new NextResponse(twiml, {
          headers: { 'Content-Type': 'text/xml' },
        });
      }
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