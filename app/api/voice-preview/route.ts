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

    // Generate speech using Deepgram TTS API directly
    const response = await fetch(`https://api.deepgram.com/v1/speak?model=${voice}`, {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.DEEPGRAM_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Deepgram API error details:', {
        status: response.status,
        statusText: response.statusText,
        body: errorText
      });
      throw new Error(`Deepgram API error: ${response.statusText}`);
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