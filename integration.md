The Integration Method: WebSockets (WSS)
You are correct, the entire real-time integration is handled using WebSockets. The architecture involves your Next.js application acting as a smart "proxy" or "middleman" that connects Twilio's audio stream to Deepgram's Voice Agent stream.

This is how you achieve a fast, real-time, and shop-specific conversation.

The Technical Flow
Here is the precise journey of the conversation, from the moment a user calls to the moment they hear the AI's response:

Caller Dials, Twilio Connects to You:

A customer calls the Twilio phone number assigned to a specific barbershop.

Twilio receives the call and sends an HTTP POST request to your app's webhook (e.g., /api/voice/inbound).

Your app identifies the shop_id from the phone number and responds with TwiML: <Connect><Stream url="wss://vocalenda.com:8080">.

Twilio then opens a WebSocket connection to your app and starts streaming the caller's audio in real-time.

Your App Connects to Deepgram:

As soon as your WebSocket server receives the connection from Twilio, it immediately opens a second WebSocket connection to Deepgram's Voice Agent API endpoint: wss://agent.deepgram.com/agent.

Making it Shop-Specific (Injecting Knowledge):

On the new connection to Deepgram, the very first thing your app does is send a configuration message. This message contains the system prompt and any other context for that specific shop.

Example system_prompt: "You are a friendly and efficient receptionist for 'Dave's Barbershop'. Their services include a Men's Haircut for £25 (30 minutes) and a Beard Trim for £15 (15 minutes). Their address is 123 High Street. Your goal is to help the user book an appointment."

This is how each call is tailored to the specific shop—your app provides the unique "knowledge" at the start of every session.

The Real-Time Loop:

Your app receives an audio chunk from the Twilio WebSocket.

It immediately forwards that audio chunk to the Deepgram WebSocket.

Deepgram's unified API handles everything internally: Speech-to-Text, LLM processing, and Text-to-Speech.

Deepgram streams the AI's generated voice response back to your app.

Your app immediately forwards that voice response back to the Twilio WebSocket, which plays it to the caller.

Handling Tool Calls (Booking an Appointment):

When the AI needs to check availability, Deepgram sends a FunctionCall event over the WebSocket to your app.

Your app receives this event, pauses the stream briefly, and executes the required function (e.g., querying your Supabase DB and the shop's Google Calendar).

Your app sends a FunctionResponse message back to Deepgram with the results (e.g., "The next available slot is 3:15 PM").

Deepgram's AI then uses this information to continue the conversation naturally.

How Long Will It Take to Respond? (Latency)
This is where the Deepgram stack excels. Because they have a single, vertically integrated system, the latency is extremely low.

Time to First Audio: Deepgram's Aura TTS model is optimized for speed, with a "time-to-first-byte" of under 200 milliseconds.

Total Round-Trip Latency: From the moment the user stops speaking to the moment they hear the AI's voice, the total delay is typically between 500 and 800 milliseconds.

This is well below the 1-2 second threshold of a typical phone conversation and results in a very fluid and natural-feeling interaction, with no awkward pauses. Deepgram's built-in intelligence for turn-taking and interruption handling ("barge-in") further enhances this natural flow.