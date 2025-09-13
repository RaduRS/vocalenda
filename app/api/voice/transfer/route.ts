import { NextRequest, NextResponse } from 'next/server';
import { generateHumanTransferTwiML } from '@/lib/call-redirect';

export async function POST(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const transferTo = searchParams.get('to');
    const reason = searchParams.get('reason') || 'Customer requested human assistance';
    
    if (!transferTo) {
      return new NextResponse('Missing transfer number', { status: 400 });
    }
    
    // Generate TwiML to dial the transfer number using shared utility
    const twiml = generateHumanTransferTwiML(transferTo, reason);
    
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