import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const transferTo = searchParams.get('to');
    const reason = searchParams.get('reason') || 'Customer requested human assistance';
    
    if (!transferTo) {
      return new NextResponse('Missing transfer number', { status: 400 });
    }
    
    // Generate TwiML to dial the transfer number
    const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">Please hold while I transfer you to a human representative.</Say>
  <Dial timeout="30" record="record-from-ringing">
    <Number>${transferTo}</Number>
  </Dial>
  <Say voice="alice">I'm sorry, but no one is available to take your call right now. Please try calling back later or leave a message.</Say>
</Response>`;
    
    console.log(`📞 Transfer TwiML generated for ${transferTo}, reason: ${reason}`);
    
    return new NextResponse(twiml, {
      status: 200,
      headers: {
        'Content-Type': 'text/xml',
      },
    });
    
  } catch (error) {
    console.error('Error in transfer webhook:', error);
    
    // Return TwiML error response
    const errorTwiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">I'm sorry, but we encountered an error while transferring your call. Please try calling back later.</Say>
  <Hangup/>
</Response>`;
    
    return new NextResponse(errorTwiml, {
      status: 200,
      headers: {
        'Content-Type': 'text/xml',
      },
    });
  }
}