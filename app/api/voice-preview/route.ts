import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { voice, text } = await request.json();

    if (!voice || !text) {
      return NextResponse.json(
        { error: 'Voice and text are required' },
        { status: 400 }
      );
    }

    // Validate API key
    if (!process.env.DEEPGRAM_API_KEY) {
      console.error('DEEPGRAM_API_KEY is not configured');
      return NextResponse.json(
        { error: 'TTS service not configured' },
        { status: 500 }
      );
    }

    // Generate speech using Deepgram TTS API directly
    const response = await fetch(`https://api.deepgram.com/v1/speak?model=${voice}`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.DEEPGRAM_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: text
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Deepgram API error details:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText,
        voice: voice,
        text: text
      });
      
      // Try to parse error response as JSON
      let errorMessage = 'Failed to generate voice preview';
      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorMessage;
      } catch {
        errorMessage = errorText || errorMessage;
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    // Get the audio buffer
    const audioBuffer = await response.arrayBuffer();

    // Return the audio as a response
    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': audioBuffer.byteLength.toString(),
      },
    });
  } catch (error) {
    console.error('Voice preview error:', error);
    return NextResponse.json(
      { error: 'Failed to generate voice preview' },
      { status: 500 }
    );
  }
}