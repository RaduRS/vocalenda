
[2025-09-15T09:23:54.100Z] === END PARSED JSON ===
[2025-09-15T09:23:54.100Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:23:54.100Z] 📜 HISTORY: Message logged
[2025-09-15T09:23:54.100Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Lip
[2025-09-15T09:23:54.100Z] 📝 Added transcript: [User] Lip
[2025-09-15T09:23:54.778Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:23:55.068Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:23:55.068Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:23:55.068Z] === END PARSED JSON ===
[2025-09-15T09:23:55.068Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:23:55.068Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:23:55.068Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:23:55.068Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"let's go with two thirty PM."}...
Message string: {"type":"ConversationText","role":"user","content":"let's go with two thirty PM."}
[2025-09-15T09:23:56.932Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"let's go with two thirty PM."}
[2025-09-15T09:23:56.932Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "let's go with two thirty PM."
}
[2025-09-15T09:23:56.932Z] === END PARSED JSON ===
[2025-09-15T09:23:56.932Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:23:56.932Z] 💭 CONVERSATION_TEXT: let's go with two thirty PM.
[2025-09-15T09:23:56.932Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: let's go with two thirty PM.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"let's go with two thirty PM."}...
Message string: {"type":"History","role":"user","content":"let's go with two thirty PM."}
[2025-09-15T09:23:56.939Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"let's go with two thirty PM."}
[2025-09-15T09:23:56.939Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "let's go with two thirty PM."
}
[2025-09-15T09:23:56.939Z] === END PARSED JSON ===
[2025-09-15T09:23:56.939Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:23:56.939Z] 📜 HISTORY: Message logged
[2025-09-15T09:23:56.939Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: let's go with two thirty PM.
[2025-09-15T09:23:56.939Z] 📝 Added transcript: [User] let's go with two thirty PM.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_SKvT4X7BDwUE8g6Nacdv7UII","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"beard trim\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_SKvT4X7BDwUE8g6Nacdv7UII","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"beard trim\",\"time\":\"14:30\"}","client_side":true}]}
[2025-09-15T09:23:57.958Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_SKvT4X7BDwUE8g6Nacdv7UII","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"beard trim\",\"time\":\"14:30\"}","client_side":true}]}
[2025-09-15T09:23:57.958Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_SKvT4X7BDwUE8g6Nacdv7UII",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"beard trim\",\"time\":\"14:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T09:23:57.958Z] === END PARSED JSON ===
[2025-09-15T09:23:57.958Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T09:23:57.958Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T09:23:57.958Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T09:23:57.958Z] 📋 Functions: [
  {
    "id": "call_SKvT4X7BDwUE8g6Nacdv7UII",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"beard trim\",\"time\":\"14:30\"}",
    "client_side": true
  }
]
[2025-09-15T09:23:57.958Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T09:23:57.958Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T09:23:57.958Z] 🔧 Processing function: create_booking
[2025-09-15T09:23:57.958Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: { callerPhone: '+447468306825' }
[2025-09-15T09:23:57.959Z] 🚀 STARTING handleFunctionCall
[2025-09-15T09:23:57.959Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_SKvT4X7BDwUE8g6Nacdv7UII",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-17",
    "service_id": "beard trim",
    "time": "14:30"
  }
}
[2025-09-15T09:23:57.959Z] 📋 Function name: create_booking
[2025-09-15T09:23:57.959Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-17",
  "service_id": "beard trim",
  "time": "14:30"
}
[2025-09-15T09:23:57.959Z] 🏢 Business config exists: true
[2025-09-15T09:23:57.959Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_SKvT4X7BDwUE8g6Nacdv7UII",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-17",
    "service_id": "beard trim",
    "time": "14:30"
  }
}
✅ TRACKING: Added function call ID call_SKvT4X7BDwUE8g6Nacdv7UII to processed set
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-17",
  "service_id": "beard trim",
  "time": "14:30"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
📋 Booking - Found service by name 'beard trim' -> ID: 63555ab0-f0ac-48c3-a2b2-766356aeb8f4
✅ Booking - Service found: beard trim (ID: 63555ab0-f0ac-48c3-a2b2-766356aeb8f4 )
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '14:30',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: null,
      type: 'create'
    }
  ]
}
🕐 Creating appointment for 2025-09-17 at 14:30 in timezone: Europe/London
📅 Parsed date: 2025-09-17 (Wednesday)
🕐 Appointment datetime (UK local): 14:30:00
🕐 Business timezone: Europe/London
🕐 Start time: 14:30:00
🕐 End time: 14:45:00
📅 Day of week: Wednesday
🔍 Checking slot availability before booking...
📋 Availability check result: {
  "available": true,
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "63555ab0-f0ac-48c3-a2b2-766356aeb8f4",
  "appointmentDate": "2025-09-17",
  "startTime": "14:30:00",
  "endTime": "14:45:00",
  "message": "Slot is available"
}
✅ Slot is available - proceeding with booking
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "63555ab0-f0ac-48c3-a2b2-766356aeb8f4",
  "appointmentDate": "2025-09-17",
  "startTime": "14:30:00",
  "endTime": "14:45:00",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825"
}
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "8b2b6291-e2ec-4e84-853b-6935a359ce14",
  "calendarEventId": "aqv4mep5jgh9aa1dj4a26efu34"
}
✅ Appointment created successfully via API: 8b2b6291-e2ec-4e84-853b-6935a359ce14
📅 Calendar event ID: aqv4mep5jgh9aa1dj4a26efu34
📞 Updating call log with customer name: Marco
Failed to update call customer: {
✅ Call log updated with customer name: CA98feaa55b63aa444676689f0d216c5a0
  code: 'PGRST204',
  details: null,
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
}
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '14:30',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
📋 Stored appointment ID in session: 8b2b6291-e2ec-4e84-853b-6935a359ce14
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_SKvT4X7BDwUE8g6Nacdv7UII","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_SKvT4X7BDwUE8g6Nacdv7UII","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"beard trim\",\"time\":\"14:30\"}","response":"{\"success\":true,\"appointment_id\":\"8b2b6291-e2ec-4e84-853b-6935a359ce14\",\"calendar_event_id\":\"aqv4mep5jgh9aa1dj4a26efu34\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-17 at 14:30 for beard trim. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"}]}
[2025-09-15T09:24:02.528Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_SKvT4X7BDwUE8g6Nacdv7UII","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"beard trim\",\"time\":\"14:30\"}","response":"{\"success\":true,\"appointment_id\":\"8b2b6291-e2ec-4e84-853b-6935a359ce14\",\"calendar_event_id\":\"aqv4mep5jgh9aa1dj4a26efu34\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-17 at 14:30 for beard trim. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"}]}
[2025-09-15T09:24:02.528Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_SKvT4X7BDwUE8g6Nacdv7UII",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-17\",\"service_id\":\"beard trim\",\"time\":\"14:30\"}",
      "response": "{\"success\":true,\"appointment_id\":\"8b2b6291-e2ec-4e84-853b-6935a359ce14\",\"calendar_event_id\":\"aqv4mep5jgh9aa1dj4a26efu34\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-17 at 14:30 for beard trim. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"
    }
  ]
}
[2025-09-15T09:24:02.528Z] === END PARSED JSON ===
[2025-09-15T09:24:02.528Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:02.528Z] 📜 HISTORY: Message logged
[2025-09-15T09:23:57.958Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-15T09:24:03.376Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T09:23:57.958Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025."}
[2025-09-15T09:24:03.619Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025."}
[2025-09-15T09:24:03.619Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025."
}
[2025-09-15T09:24:03.619Z] === END PARSED JSON ===
[2025-09-15T09:24:03.619Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:03.619Z] 💭 CONVERSATION_TEXT: Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025.
[2025-09-15T09:24:03.619Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025."}...
Message string: {"type":"History","role":"assistant","content":"Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025."}
[2025-09-15T09:24:03.619Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025."}
[2025-09-15T09:24:03.619Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025."
}
[2025-09-15T09:24:03.619Z] === END PARSED JSON ===
[2025-09-15T09:24:03.619Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:03.619Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:03.619Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025.
[2025-09-15T09:24:03.619Z] 📝 Added transcript: [AI] Your beard trim appointment is confirmed for 2:30 PM on Wednesday, 17 September 2025.
[2025-09-15T09:24:03.620Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:24:06.778Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:24:07.069Z] 🔇 Audio stream ended (timeout)
[2025-09-15T09:24:10.779Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Is there anything else I can help you with today?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Is there anything else I can help you with today?"}
[2025-09-15T09:24:11.821Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Is there anything else I can help you with today?"}
[2025-09-15T09:24:11.821Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Is there anything else I can help you with today?"
}
[2025-09-15T09:24:11.821Z] === END PARSED JSON ===
[2025-09-15T09:24:11.821Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:11.821Z] 💭 CONVERSATION_TEXT: Is there anything else I can help you with today?
[2025-09-15T09:24:11.821Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Is there anything else I can help you with today?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Is there anything else I can help you with today?"}...
Message string: {"type":"History","role":"assistant","content":"Is there anything else I can help you with today?"}
[2025-09-15T09:24:11.822Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Is there anything else I can help you with today?"}
[2025-09-15T09:24:11.822Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Is there anything else I can help you with today?"
}
[2025-09-15T09:24:11.822Z] === END PARSED JSON ===
[2025-09-15T09:24:11.822Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:11.822Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:11.822Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Is there anything else I can help you with today?
[2025-09-15T09:24:11.822Z] 📝 Added transcript: [AI] Is there anything else I can help you with today?
[2025-09-15T09:24:11.822Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-15T09:24:11.974Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-15T09:24:11.974Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-15T09:24:11.974Z] === END PARSED JSON ===
[2025-09-15T09:24:11.974Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-15T09:24:11.974Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-15T09:24:11.974Z] 🔇 SILENCE: Started tracking
[2025-09-15T09:24:11.974Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-15T09:24:11.974Z] 🔇 SILENCE_CHECK: 1000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:13.109Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:13.109Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:24:13.109Z] === END PARSED JSON ===
[2025-09-15T09:24:13.109Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:24:13.109Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:24:13.109Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:24:13.109Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-15T09:24:14.779Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Actually, can you can you move it to"}...
Message string: {"type":"ConversationText","role":"user","content":"Actually, can you can you move it to"}
[2025-09-15T09:24:15.214Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Actually, can you can you move it to"}
[2025-09-15T09:24:15.214Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Actually, can you can you move it to"
}
[2025-09-15T09:24:15.214Z] === END PARSED JSON ===
[2025-09-15T09:24:15.214Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:15.214Z] 💭 CONVERSATION_TEXT: Actually, can you can you move it to
[2025-09-15T09:24:15.214Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Actually, can you can you move it to
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Actually, can you can you move it to"}...
Message string: {"type":"History","role":"user","content":"Actually, can you can you move it to"}
[2025-09-15T09:24:15.225Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Actually, can you can you move it to"}
[2025-09-15T09:24:15.225Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Actually, can you can you move it to"
}
[2025-09-15T09:24:15.225Z] === END PARSED JSON ===
[2025-09-15T09:24:15.225Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:15.225Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:15.225Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Actually, can you can you move it to
[2025-09-15T09:24:15.225Z] 📝 Added transcript: [User] Actually, can you can you move it to
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:15.989Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:15.989Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:24:15.989Z] === END PARSED JSON ===
[2025-09-15T09:24:15.989Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:24:15.989Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:24:15.989Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:24:15.989Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Thursday at twelve PM?"}...
Message string: {"type":"ConversationText","role":"user","content":"Thursday at twelve PM?"}
[2025-09-15T09:24:17.523Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Thursday at twelve PM?"}
[2025-09-15T09:24:17.523Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Thursday at twelve PM?"
}
[2025-09-15T09:24:17.523Z] === END PARSED JSON ===
[2025-09-15T09:24:17.523Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:17.523Z] 💭 CONVERSATION_TEXT: Thursday at twelve PM?
[2025-09-15T09:24:17.523Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Thursday at twelve PM?
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Thursday at twelve PM?"}...
Message string: {"type":"History","role":"user","content":"Thursday at twelve PM?"}
[2025-09-15T09:24:17.539Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Thursday at twelve PM?"}
[2025-09-15T09:24:17.539Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Thursday at twelve PM?"
}
[2025-09-15T09:24:17.539Z] === END PARSED JSON ===
[2025-09-15T09:24:17.539Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:17.539Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:17.539Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Thursday at twelve PM?
[2025-09-15T09:24:17.539Z] 📝 Added transcript: [User] Thursday at twelve PM?
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_dqy6wZhnY0maNEGi6iVTseSa","name":"get_day_of_week","arguments":"{\"date\":\"18/09/2025\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_dqy6wZhnY0maNEGi6iVTseSa","name":"get_day_of_week","arguments":"{\"date\":\"18/09/2025\"}","client_side":true}]}
[2025-09-15T09:24:18.648Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_dqy6wZhnY0maNEGi6iVTseSa","name":"get_day_of_week","arguments":"{\"date\":\"18/09/2025\"}","client_side":true}]}
[2025-09-15T09:24:18.648Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_dqy6wZhnY0maNEGi6iVTseSa",
      "name": "get_day_of_week",
      "arguments": "{\"date\":\"18/09/2025\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T09:24:18.648Z] === END PARSED JSON ===
[2025-09-15T09:24:18.648Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T09:24:18.648Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T09:24:18.648Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T09:24:18.648Z] 📋 Functions: [
  {
    "id": "call_dqy6wZhnY0maNEGi6iVTseSa",
    "name": "get_day_of_week",
    "arguments": "{\"date\":\"18/09/2025\"}",
    "client_side": true
  }
]
[2025-09-15T09:24:18.648Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T09:24:18.648Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T09:24:18.648Z] 🔧 Processing function: get_day_of_week
[2025-09-15T09:24:18.648Z] 🔧 CALLING: handleFunctionCall for get_day_of_week...
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '14:30',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
[2025-09-15T09:24:18.648Z] 🚀 STARTING handleFunctionCall
[2025-09-15T09:24:18.648Z] 🔧 Function call received: {
  "function_name": "get_day_of_week",
  "function_call_id": "call_dqy6wZhnY0maNEGi6iVTseSa",
  "parameters": {
    "date": "18/09/2025"
  }
}
[2025-09-15T09:24:18.648Z] 📋 Function name: get_day_of_week
[2025-09-15T09:24:18.648Z] 📊 Parameters: {
  "date": "18/09/2025"
}
[2025-09-15T09:24:18.648Z] 🏢 Business config exists: true
[2025-09-15T09:24:18.648Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_day_of_week",
  "function_call_id": "call_dqy6wZhnY0maNEGi6iVTseSa",
  "parameters": {
    "date": "18/09/2025"
  }
}
📅 Getting day of week for: 18/09/2025
✅ 18/09/2025 is a Thursday
✅ Sending get_day_of_week response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_dqy6wZhnY0maNEGi6iVTseSa","name":"get_day_of_week","client_side":true,"arguments":"{\"date\":\"18/09/2025\"}","response":"{\"date\":\"18/09/2025\",\"day...
Message string: {"type":"History","function_calls":[{"id":"call_dqy6wZhnY0maNEGi6iVTseSa","name":"get_day_of_week","client_side":true,"arguments":"{\"date\":\"18/09/2025\"}","response":"{\"date\":\"18/09/2025\",\"day_of_week\":\"Thursday\",\"day_number\":4,\"formatted\":\"Thursday, 18 September 2025\"}"}]}
[2025-09-15T09:24:18.801Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_dqy6wZhnY0maNEGi6iVTseSa","name":"get_day_of_week","client_side":true,"arguments":"{\"date\":\"18/09/2025\"}","response":"{\"date\":\"18/09/2025\",\"day_of_week\":\"Thursday\",\"day_number\":4,\"formatted\":\"Thursday, 18 September 2025\"}"}]}
[2025-09-15T09:24:18.801Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_dqy6wZhnY0maNEGi6iVTseSa",
      "name": "get_day_of_week",
      "client_side": true,
      "arguments": "{\"date\":\"18/09/2025\"}",
      "response": "{\"date\":\"18/09/2025\",\"day_of_week\":\"Thursday\",\"day_number\":4,\"formatted\":\"Thursday, 18 September 2025\"}"
    }
  ]
}
[2025-09-15T09:24:18.801Z] === END PARSED JSON ===
[2025-09-15T09:24:18.801Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:18.801Z] 📜 HISTORY: Message logged
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_0CWDHirfZZRABFTonVl3IOAH","name":"get_available_slots","arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}","client_side":true}]...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_0CWDHirfZZRABFTonVl3IOAH","name":"get_available_slots","arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}","client_side":true}]}
[2025-09-15T09:24:19.586Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_0CWDHirfZZRABFTonVl3IOAH","name":"get_available_slots","arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}","client_side":true}]}
[2025-09-15T09:24:19.586Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_0CWDHirfZZRABFTonVl3IOAH",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T09:24:19.586Z] === END PARSED JSON ===
[2025-09-15T09:24:19.586Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T09:24:19.586Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T09:24:19.586Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T09:24:19.586Z] 📋 Functions: [
  {
    "id": "call_0CWDHirfZZRABFTonVl3IOAH",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}",
    "client_side": true
  }
]
[2025-09-15T09:24:19.586Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T09:24:19.586Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T09:24:19.586Z] 🔧 Processing function: get_available_slots
[2025-09-15T09:24:19.586Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '14:30',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
[2025-09-15T09:24:19.586Z] 🚀 STARTING handleFunctionCall
[2025-09-15T09:24:19.586Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_0CWDHirfZZRABFTonVl3IOAH",
  "parameters": {
    "date": "2025-09-18",
    "service_id": "beard trim"
  }
}
[2025-09-15T09:24:19.586Z] 📋 Function name: get_available_slots
[2025-09-15T09:24:19.586Z] 📊 Parameters: {
  "date": "2025-09-18",
  "service_id": "beard trim"
}
[2025-09-15T09:24:19.586Z] 🏢 Business config exists: true
[2025-09-15T09:24:19.586Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_0CWDHirfZZRABFTonVl3IOAH",
  "parameters": {
    "date": "2025-09-18",
    "service_id": "beard trim"
  }
}
[2025-09-15T09:24:19.586Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-18",
  "service_id": "beard trim"
}
[2025-09-15T09:24:19.586Z] 🏢 Business config: Gents Barbershop
[2025-09-15T09:24:19.586Z] 📋 Services count: 2
[2025-09-15T09:24:19.586Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-15T09:24:19.586Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-18",
  "service_id": "beard trim"
}
📅 Business open on Thursday
📋 Found service by name 'beard trim' -> ID: 63555ab0-f0ac-48c3-a2b2-766356aeb8f4
📋 Using service: beard trim (Duration: 15 minutes)
[2025-09-15T09:24:19.586Z] 🌐 About to make API call:
[2025-09-15T09:24:19.586Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/availability?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=63555ab0-f0ac-48c3-a2b2-766356aeb8f4&date=2025-09-18
[2025-09-15T09:24:19.586Z] 🔑 Secret exists: true
[2025-09-15T09:24:19.586Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-15T09:24:19.586Z] 📋 Service ID: 63555ab0-f0ac-48c3-a2b2-766356aeb8f4
[2025-09-15T09:24:19.586Z] 📅 Date: 2025-09-18
[2025-09-15T09:24:18.648Z] ✅ COMPLETED: handleFunctionCall for get_day_of_week
[2025-09-15T09:24:19.649Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T09:24:18.648Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-15T09:24:19.586Z] 📡 API Response status: 200
[2025-09-15T09:24:19.586Z] 📡 API Response ok: true
[2025-09-15T09:24:19.586Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-18T08:00:00.000Z",
      "end": "2025-09-18T08:15:00.000Z",
      "startTime": "09:00",
      "endTime": "09:15"
    },
    {
      "start": "2025-09-18T08:15:00.000Z",
      "end": "2025-09-18T08:30:00.000Z",
      "startTime": "09:15",
      "endTime": "09:30"
    },
    {
      "start": "2025-09-18T08:30:00.000Z",
      "end": "2025-09-18T08:45:00.000Z",
      "startTime": "09:30",
      "endTime": "09:45"
    },
    {
      "start": "2025-09-18T08:45:00.000Z",
      "end": "2025-09-18T09:00:00.000Z",
      "startTime": "09:45",
      "endTime": "10:00"
    },
    {
      "start": "2025-09-18T09:00:00.000Z",
      "end": "2025-09-18T09:15:00.000Z",
      "startTime": "10:00",
      "endTime": "10:15"
    },
    {
      "start": "2025-09-18T09:15:00.000Z",
      "end": "2025-09-18T09:30:00.000Z",
      "startTime": "10:15",
      "endTime": "10:30"
    },
    {
      "start": "2025-09-18T09:30:00.000Z",
      "end": "2025-09-18T09:45:00.000Z",
      "startTime": "10:30",
      "endTime": "10:45"
    },
    {
      "start": "2025-09-18T09:45:00.000Z",
      "end": "2025-09-18T10:00:00.000Z",
      "startTime": "10:45",
      "endTime": "11:00"
    },
    {
      "start": "2025-09-18T10:00:00.000Z",
      "end": "2025-09-18T10:15:00.000Z",
      "startTime": "11:00",
      "endTime": "11:15"
    },
    {
      "start": "2025-09-18T10:15:00.000Z",
      "end": "2025-09-18T10:30:00.000Z",
      "startTime": "11:15",
      "endTime": "11:30"
    },
    {
      "start": "2025-09-18T10:30:00.000Z",
      "end": "2025-09-18T10:45:00.000Z",
      "startTime": "11:30",
      "endTime": "11:45"
    },
    {
      "start": "2025-09-18T10:45:00.000Z",
      "end": "2025-09-18T11:00:00.000Z",
      "startTime": "11:45",
      "endTime": "12:00"
    },
    {
      "start": "2025-09-18T11:30:00.000Z",
      "end": "2025-09-18T11:45:00.000Z",
      "startTime": "12:30",
      "endTime": "12:45"
    },
    {
      "start": "2025-09-18T11:45:00.000Z",
      "end": "2025-09-18T12:00:00.000Z",
      "startTime": "12:45",
      "endTime": "13:00"
    },
    {
      "start": "2025-09-18T12:00:00.000Z",
      "end": "2025-09-18T12:15:00.000Z",
      "startTime": "13:00",
      "endTime": "13:15"
    },
    {
      "start": "2025-09-18T12:15:00.000Z",
      "end": "2025-09-18T12:30:00.000Z",
      "startTime": "13:15",
      "endTime": "13:30"
    },
    {
      "start": "2025-09-18T12:30:00.000Z",
      "end": "2025-09-18T12:45:00.000Z",
      "startTime": "13:30",
      "endTime": "13:45"
    },
    {
      "start": "2025-09-18T12:45:00.000Z",
      "end": "2025-09-18T13:00:00.000Z",
      "startTime": "13:45",
      "endTime": "14:00"
    },
    {
      "start": "2025-09-18T13:30:00.000Z",
      "end": "2025-09-18T13:45:00.000Z",
      "startTime": "14:30",
      "endTime": "14:45"
    },
    {
      "start": "2025-09-18T13:45:00.000Z",
      "end": "2025-09-18T14:00:00.000Z",
      "startTime": "14:45",
      "endTime": "15:00"
    },
    {
      "start": "2025-09-18T14:00:00.000Z",
      "end": "2025-09-18T14:15:00.000Z",
      "startTime": "15:00",
      "endTime": "15:15"
    },
    {
      "start": "2025-09-18T14:15:00.000Z",
      "end": "2025-09-18T14:30:00.000Z",
      "startTime": "15:15",
      "endTime": "15:30"
    },
    {
      "start": "2025-09-18T14:30:00.000Z",
      "end": "2025-09-18T14:45:00.000Z",
      "startTime": "15:30",
      "endTime": "15:45"
    },
    {
      "start": "2025-09-18T14:45:00.000Z",
      "end": "2025-09-18T15:00:00.000Z",
      "startTime": "15:45",
      "endTime": "16:00"
    },
    {
      "start": "2025-09-18T15:00:00.000Z",
      "end": "2025-09-18T15:15:00.000Z",
      "startTime": "16:00",
      "endTime": "16:15"
    },
    {
      "start": "2025-09-18T15:15:00.000Z",
      "end": "2025-09-18T15:30:00.000Z",
      "startTime": "16:15",
      "endTime": "16:30"
    },
    {
      "start": "2025-09-18T15:30:00.000Z",
      "end": "2025-09-18T15:45:00.000Z",
      "startTime": "16:30",
      "endTime": "16:45"
    },
    {
      "start": "2025-09-18T15:45:00.000Z",
      "end": "2025-09-18T16:00:00.000Z",
      "startTime": "16:45",
      "endTime": "17:00"
    }
  ],
  "date": "2025-09-18",
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "63555ab0-f0ac-48c3-a2b2-766356aeb8f4"
}
[2025-09-15T09:24:19.586Z] 📊 Response type: object
[2025-09-15T09:24:19.586Z] 📊 Has slots: true
[2025-09-15T09:24:19.586Z] 📊 Slots count: 28
✅ Available time slots: [
  '09:00', '09:15', '09:30',
  '09:45', '10:00', '10:15',
  '10:30', '10:45', '11:00',
  '11:15', '11:30', '11:45',
  '12:30', '12:45', '13:00',
  '13:15', '13:30', '13:45',
  '14:30', '14:45', '15:00',
  '15:15', '15:30', '15:45',
  '16:00', '16:15', '16:30',
  '16:45'
]
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_0CWDHirfZZRABFTonVl3IOAH","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}","respons...
Message string: {"type":"History","function_calls":[{"id":"call_0CWDHirfZZRABFTonVl3IOAH","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\",\"16:45\"]}"}]}
[2025-09-15T09:24:21.135Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_0CWDHirfZZRABFTonVl3IOAH","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\",\"16:45\"]}"}]}
[2025-09-15T09:24:21.135Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_0CWDHirfZZRABFTonVl3IOAH",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-18\",\"service_id\":\"beard trim\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\",\"16:45\"]}"
    }
  ]
}
[2025-09-15T09:24:21.135Z] === END PARSED JSON ===
[2025-09-15T09:24:21.135Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:21.135Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:19.586Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-15T09:24:21.983Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T09:24:19.586Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-15T09:24:22.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open."}...
Message string: {"type":"ConversationText","role":"assistant","content":"12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open."}
[2025-09-15T09:24:23.007Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open."}
[2025-09-15T09:24:23.007Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open."
}
[2025-09-15T09:24:23.007Z] === END PARSED JSON ===
[2025-09-15T09:24:23.007Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:23.007Z] 💭 CONVERSATION_TEXT: 12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open.
[2025-09-15T09:24:23.007Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: 12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open."}...
Message string: {"type":"History","role":"assistant","content":"12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open."}
[2025-09-15T09:24:23.007Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open."}
[2025-09-15T09:24:23.007Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open."
}
[2025-09-15T09:24:23.007Z] === END PARSED JSON ===
[2025-09-15T09:24:23.007Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:23.007Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:23.007Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: 12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open.
[2025-09-15T09:24:23.007Z] 📝 Added transcript: [AI] 12 PM on Thursday, 18 September 2025 is not available for your beard trim, but I have 12:30 PM or 12:45 PM open.
[2025-09-15T09:24:23.007Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:24:26.780Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:24:27.999Z] 🔇 Audio stream ended (timeout)
[2025-09-15T09:24:30.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Which one would you like?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Which one would you like?"}
[2025-09-15T09:24:34.689Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Which one would you like?"}
[2025-09-15T09:24:34.689Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Which one would you like?"
}
[2025-09-15T09:24:34.689Z] === END PARSED JSON ===
[2025-09-15T09:24:34.689Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:34.689Z] 💭 CONVERSATION_TEXT: Which one would you like?
[2025-09-15T09:24:34.689Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Which one would you like?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Which one would you like?"}...
Message string: {"type":"History","role":"assistant","content":"Which one would you like?"}
[2025-09-15T09:24:34.690Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Which one would you like?"}
[2025-09-15T09:24:34.690Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Which one would you like?"
}
[2025-09-15T09:24:34.690Z] === END PARSED JSON ===
[2025-09-15T09:24:34.690Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:34.690Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:34.690Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Which one would you like?
[2025-09-15T09:24:34.690Z] 📝 Added transcript: [AI] Which one would you like?
[2025-09-15T09:24:34.690Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-15T09:24:34.690Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-15T09:24:34.690Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-15T09:24:34.690Z] === END PARSED JSON ===
[2025-09-15T09:24:34.690Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-15T09:24:34.690Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-15T09:24:34.690Z] 🔇 SILENCE: Started tracking
[2025-09-15T09:24:34.690Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-15T09:24:34.780Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:24:34.690Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-15T09:24:34.690Z] 🔇 SILENCE_CHECK: 2000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:37.309Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:37.309Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:24:37.309Z] === END PARSED JSON ===
[2025-09-15T09:24:37.309Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:24:37.309Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:24:37.309Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:24:37.309Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-15T09:24:38.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Let's go with twelve forty five."}...
Message string: {"type":"ConversationText","role":"user","content":"Let's go with twelve forty five."}
[2025-09-15T09:24:38.791Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Let's go with twelve forty five."}
[2025-09-15T09:24:38.791Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Let's go with twelve forty five."
}
[2025-09-15T09:24:38.791Z] === END PARSED JSON ===
[2025-09-15T09:24:38.791Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:38.791Z] 💭 CONVERSATION_TEXT: Let's go with twelve forty five.
[2025-09-15T09:24:38.791Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Let's go with twelve forty five.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Let's go with twelve forty five."}...
Message string: {"type":"History","role":"user","content":"Let's go with twelve forty five."}
[2025-09-15T09:24:38.800Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Let's go with twelve forty five."}
[2025-09-15T09:24:38.800Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Let's go with twelve forty five."
}
[2025-09-15T09:24:38.800Z] === END PARSED JSON ===
[2025-09-15T09:24:38.800Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:38.800Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:38.800Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Let's go with twelve forty five.
[2025-09-15T09:24:38.800Z] 📝 Added transcript: [User] Let's go with twelve forty five.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_WVAPaOS5lZOXtSzfQnVTz9XZ","name":"update_booking","arguments":"{\"new_time\":\"12:45\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_WVAPaOS5lZOXtSzfQnVTz9XZ","name":"update_booking","arguments":"{\"new_time\":\"12:45\"}","client_side":true}]}
[2025-09-15T09:24:39.823Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_WVAPaOS5lZOXtSzfQnVTz9XZ","name":"update_booking","arguments":"{\"new_time\":\"12:45\"}","client_side":true}]}
[2025-09-15T09:24:39.823Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_WVAPaOS5lZOXtSzfQnVTz9XZ",
      "name": "update_booking",
      "arguments": "{\"new_time\":\"12:45\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T09:24:39.823Z] === END PARSED JSON ===
[2025-09-15T09:24:39.823Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T09:24:39.823Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T09:24:39.823Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T09:24:39.823Z] 📋 Functions: [
  {
    "id": "call_WVAPaOS5lZOXtSzfQnVTz9XZ",
    "name": "update_booking",
    "arguments": "{\"new_time\":\"12:45\"}",
    "client_side": true
  }
]
[2025-09-15T09:24:39.823Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T09:24:39.823Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T09:24:39.823Z] 🔧 Processing function: update_booking
[2025-09-15T09:24:39.823Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '14:30',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
[2025-09-15T09:24:39.823Z] 🚀 STARTING handleFunctionCall
[2025-09-15T09:24:39.823Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_WVAPaOS5lZOXtSzfQnVTz9XZ",
  "parameters": {
    "new_time": "12:45"
  }
}
[2025-09-15T09:24:39.823Z] 📋 Function name: update_booking
[2025-09-15T09:24:39.823Z] 📊 Parameters: {
  "new_time": "12:45"
}
[2025-09-15T09:24:39.823Z] 🏢 Business config exists: true
[2025-09-15T09:24:39.823Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_WVAPaOS5lZOXtSzfQnVTz9XZ",
  "parameters": {
    "new_time": "12:45"
  }
}
📝 updateBooking called with params: {
  "new_time": "12:45"
}
📋 Session data: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '14:30',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-17',
  currentTime: '14:30'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-17 at 14:30
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '12:45',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: undefined,
      newTime: '12:45',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
📦 Update request body: {
  "business_id": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "customer_name": "Marco",
  "current_date": "2025-09-17",
  "current_time": "14:30",
  "caller_phone": "+447468306825",
  "new_time": "12:45"
}
✅ Booking updated successfully: {
  success: true,
  message: 'Booking updated successfully',
  booking: {
    id: '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
    customer_name: 'Marco',
    service_name: 'beard trim',
    date: '2025-09-17',
    start_time: '12:45:00',
    end_time: '12:00:00',
    status: 'confirmed'
  }
}
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '12:45',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: undefined,
      newTime: '12:45',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:45:00',
      appointmentId: '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
      serviceName: 'beard trim'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_WVAPaOS5lZOXtSzfQnVTz9XZ","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"12:45\"}","response":"{\"success\":true,\"message\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_WVAPaOS5lZOXtSzfQnVTz9XZ","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"12:45\"}","response":"{\"success\":true,\"message\":\"Booking updated successfully for undefined\",\"booking\":{\"id\":\"052078ac-5500-4b51-b7e7-bcabe0ea5ab7\",\"customer_name\":\"Marco\",\"service_name\":\"beard trim\",\"date\":\"2025-09-17\",\"start_time\":\"12:45:00\",\"end_time\":\"12:00:00\",\"status\":\"confirmed\"}}"}]}
[2025-09-15T09:24:43.842Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_WVAPaOS5lZOXtSzfQnVTz9XZ","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"12:45\"}","response":"{\"success\":true,\"message\":\"Booking updated successfully for undefined\",\"booking\":{\"id\":\"052078ac-5500-4b51-b7e7-bcabe0ea5ab7\",\"customer_name\":\"Marco\",\"service_name\":\"beard trim\",\"date\":\"2025-09-17\",\"start_time\":\"12:45:00\",\"end_time\":\"12:00:00\",\"status\":\"confirmed\"}}"}]}
[2025-09-15T09:24:43.842Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_WVAPaOS5lZOXtSzfQnVTz9XZ",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_time\":\"12:45\"}",
      "response": "{\"success\":true,\"message\":\"Booking updated successfully for undefined\",\"booking\":{\"id\":\"052078ac-5500-4b51-b7e7-bcabe0ea5ab7\",\"customer_name\":\"Marco\",\"service_name\":\"beard trim\",\"date\":\"2025-09-17\",\"start_time\":\"12:45:00\",\"end_time\":\"12:00:00\",\"status\":\"confirmed\"}}"
    }
  ]
}
[2025-09-15T09:24:43.842Z] === END PARSED JSON ===
[2025-09-15T09:24:43.842Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:43.842Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:39.823Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-15T09:24:44.690Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T09:24:39.823Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025."}
[2025-09-15T09:24:45.215Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025."}
[2025-09-15T09:24:45.215Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025."
}
[2025-09-15T09:24:45.215Z] === END PARSED JSON ===
[2025-09-15T09:24:45.215Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:45.215Z] 💭 CONVERSATION_TEXT: Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025.
[2025-09-15T09:24:45.215Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025."}...
Message string: {"type":"History","role":"assistant","content":"Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025."}
[2025-09-15T09:24:45.215Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025."}
[2025-09-15T09:24:45.215Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025."
}
[2025-09-15T09:24:45.215Z] === END PARSED JSON ===
[2025-09-15T09:24:45.215Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:45.215Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:45.215Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025.
[2025-09-15T09:24:45.215Z] 📝 Added transcript: [AI] Your beard trim appointment has been moved to 12:45 PM on Thursday, 18 September 2025.
[2025-09-15T09:24:45.216Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:24:46.780Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:24:48.179Z] 🔇 Audio stream ended (timeout)
[2025-09-15T09:24:50.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Is there anything else I can assist you with?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Is there anything else I can assist you with?"}
[2025-09-15T09:24:52.337Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Is there anything else I can assist you with?"}
[2025-09-15T09:24:52.337Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Is there anything else I can assist you with?"
}
[2025-09-15T09:24:52.337Z] === END PARSED JSON ===
[2025-09-15T09:24:52.337Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:52.337Z] 💭 CONVERSATION_TEXT: Is there anything else I can assist you with?
[2025-09-15T09:24:52.337Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Is there anything else I can assist you with?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Is there anything else I can assist you with?"}...
Message string: {"type":"History","role":"assistant","content":"Is there anything else I can assist you with?"}
[2025-09-15T09:24:52.338Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Is there anything else I can assist you with?"}
[2025-09-15T09:24:52.338Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Is there anything else I can assist you with?"
}
[2025-09-15T09:24:52.338Z] === END PARSED JSON ===
[2025-09-15T09:24:52.338Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:52.338Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:52.338Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Is there anything else I can assist you with?
[2025-09-15T09:24:52.338Z] 📝 Added transcript: [AI] Is there anything else I can assist you with?
[2025-09-15T09:24:52.338Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-15T09:24:52.490Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-15T09:24:52.490Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-15T09:24:52.490Z] === END PARSED JSON ===
[2025-09-15T09:24:52.490Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-15T09:24:52.490Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-15T09:24:52.490Z] 🔇 SILENCE: Started tracking
[2025-09-15T09:24:52.490Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-15T09:24:52.490Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-15T09:24:52.490Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-15T09:24:54.780Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:24:52.490Z] 🔇 SILENCE_CHECK: 3000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:55.748Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:55.748Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:24:55.748Z] === END PARSED JSON ===
[2025-09-15T09:24:55.748Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:24:55.748Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:24:55.748Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:24:55.748Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Can I do another booking for a haircut?"}...
Message string: {"type":"ConversationText","role":"user","content":"Can I do another booking for a haircut?"}
[2025-09-15T09:24:57.772Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Can I do another booking for a haircut?"}
[2025-09-15T09:24:57.772Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Can I do another booking for a haircut?"
}
[2025-09-15T09:24:57.772Z] === END PARSED JSON ===
[2025-09-15T09:24:57.772Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:57.772Z] 💭 CONVERSATION_TEXT: Can I do another booking for a haircut?
[2025-09-15T09:24:57.772Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Can I do another booking for a haircut?
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Can I do another booking for a haircut?"}...
Message string: {"type":"History","role":"user","content":"Can I do another booking for a haircut?"}
[2025-09-15T09:24:57.779Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Can I do another booking for a haircut?"}
[2025-09-15T09:24:57.779Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Can I do another booking for a haircut?"
}
[2025-09-15T09:24:57.779Z] === END PARSED JSON ===
[2025-09-15T09:24:57.779Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:57.779Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:57.779Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Can I do another booking for a haircut?
[2025-09-15T09:24:57.779Z] 📝 Added transcript: [User] Can I do another booking for a haircut?
[2025-09-15T09:24:58.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:59.029Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:59.029Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:24:59.029Z] === END PARSED JSON ===
[2025-09-15T09:24:59.029Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:24:59.029Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:24:59.029Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:24:59.029Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"On Thursday,"}...
Message string: {"type":"ConversationText","role":"user","content":"On Thursday,"}
[2025-09-15T09:24:59.733Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"On Thursday,"}
[2025-09-15T09:24:59.733Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "On Thursday,"
}
[2025-09-15T09:24:59.733Z] === END PARSED JSON ===
[2025-09-15T09:24:59.733Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:24:59.733Z] 💭 CONVERSATION_TEXT: On Thursday,
[2025-09-15T09:24:59.733Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: On Thursday,
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"On Thursday,"}...
Message string: {"type":"History","role":"user","content":"On Thursday,"}
[2025-09-15T09:24:59.739Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"On Thursday,"}
[2025-09-15T09:24:59.739Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "On Thursday,"
}
[2025-09-15T09:24:59.739Z] === END PARSED JSON ===
[2025-09-15T09:24:59.739Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:24:59.739Z] 📜 HISTORY: Message logged
[2025-09-15T09:24:59.739Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: On Thursday,
[2025-09-15T09:24:59.739Z] 📝 Added transcript: [User] On Thursday,
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:59.848Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:24:59.848Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:24:59.848Z] === END PARSED JSON ===
[2025-09-15T09:24:59.848Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:24:59.848Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:24:59.848Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:24:59.848Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"twelve forty five."}...
Message string: {"type":"ConversationText","role":"user","content":"twelve forty five."}
[2025-09-15T09:25:01.313Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"twelve forty five."}
[2025-09-15T09:25:01.313Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "twelve forty five."
}
[2025-09-15T09:25:01.313Z] === END PARSED JSON ===
[2025-09-15T09:25:01.313Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:01.313Z] 💭 CONVERSATION_TEXT: twelve forty five.
[2025-09-15T09:25:01.313Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: twelve forty five.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"twelve forty five."}...
Message string: {"type":"History","role":"user","content":"twelve forty five."}
[2025-09-15T09:25:01.319Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"twelve forty five."}
[2025-09-15T09:25:01.319Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "twelve forty five."
}
[2025-09-15T09:25:01.319Z] === END PARSED JSON ===
[2025-09-15T09:25:01.319Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:01.319Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:01.319Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: twelve forty five.
[2025-09-15T09:25:01.319Z] 📝 Added transcript: [User] twelve forty five.
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim."}...
Message string: {"type":"ConversationText","role":"assistant","content":"For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim."}
[2025-09-15T09:25:02.535Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim."}
[2025-09-15T09:25:02.535Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim."
}
[2025-09-15T09:25:02.535Z] === END PARSED JSON ===
[2025-09-15T09:25:02.535Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:02.535Z] 💭 CONVERSATION_TEXT: For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim.
[2025-09-15T09:25:02.535Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim."}...
Message string: {"type":"History","role":"assistant","content":"For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim."}
[2025-09-15T09:25:02.535Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim."}
[2025-09-15T09:25:02.535Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim."
}
[2025-09-15T09:25:02.535Z] === END PARSED JSON ===
[2025-09-15T09:25:02.535Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:02.535Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:02.535Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim.
[2025-09-15T09:25:02.535Z] 📝 Added transcript: [AI] For 12:45 PM on Thursday, 18 September 2025, we already updated your beard trim.
[2025-09-15T09:25:02.535Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:25:02.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_2m9uJ0BG4mpzJHsX1qw7Q6gy","name":"get_available_slots","arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_2m9uJ0BG4mpzJHsX1qw7Q6gy","name":"get_available_slots","arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}","client_side":true}]}
[2025-09-15T09:25:03.544Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_2m9uJ0BG4mpzJHsX1qw7Q6gy","name":"get_available_slots","arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}","client_side":true}]}
[2025-09-15T09:25:03.544Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_2m9uJ0BG4mpzJHsX1qw7Q6gy",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T09:25:03.544Z] === END PARSED JSON ===
[2025-09-15T09:25:03.544Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T09:25:03.544Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T09:25:03.544Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T09:25:03.544Z] 📋 Functions: [
  {
    "id": "call_2m9uJ0BG4mpzJHsX1qw7Q6gy",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}",
    "client_side": true
  }
]
[2025-09-15T09:25:03.544Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T09:25:03.544Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T09:25:03.544Z] 🔧 Processing function: get_available_slots
[2025-09-15T09:25:03.544Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '12:45',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: undefined,
      newTime: '12:45',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:45:00',
      appointmentId: '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
      serviceName: 'beard trim'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
[2025-09-15T09:25:03.545Z] 🚀 STARTING handleFunctionCall
[2025-09-15T09:25:03.545Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_2m9uJ0BG4mpzJHsX1qw7Q6gy",
  "parameters": {
    "date": "2025-09-18",
    "service_id": "haircut"
  }
}
[2025-09-15T09:25:03.545Z] 📋 Function name: get_available_slots
[2025-09-15T09:25:03.545Z] 📊 Parameters: {
  "date": "2025-09-18",
  "service_id": "haircut"
}
[2025-09-15T09:25:03.545Z] 🏢 Business config exists: true
[2025-09-15T09:25:03.545Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_2m9uJ0BG4mpzJHsX1qw7Q6gy",
  "parameters": {
    "date": "2025-09-18",
    "service_id": "haircut"
  }
}
[2025-09-15T09:25:03.545Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-18",
  "service_id": "haircut"
}
[2025-09-15T09:25:03.545Z] 🏢 Business config: Gents Barbershop
[2025-09-15T09:25:03.545Z] 📋 Services count: 2
[2025-09-15T09:25:03.545Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-15T09:25:03.545Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-18",
  "service_id": "haircut"
}
📅 Business open on Thursday
📋 Found service by name 'haircut' -> ID: 4395775e-fa81-4a69-8425-e46c3853dea4
📋 Using service: haircut (Duration: 30 minutes)
[2025-09-15T09:25:03.545Z] 🌐 About to make API call:
[2025-09-15T09:25:03.545Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/availability?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-18
[2025-09-15T09:25:03.545Z] 🔑 Secret exists: true
[2025-09-15T09:25:03.545Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-15T09:25:03.545Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-15T09:25:03.545Z] 📅 Date: 2025-09-18
[2025-09-15T09:25:03.545Z] 📡 API Response status: 200
[2025-09-15T09:25:03.545Z] 📡 API Response ok: true
[2025-09-15T09:25:03.545Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-18T08:00:00.000Z",
      "end": "2025-09-18T08:30:00.000Z",
      "startTime": "09:00",
      "endTime": "09:30"
    },
    {
      "start": "2025-09-18T08:15:00.000Z",
      "end": "2025-09-18T08:45:00.000Z",
      "startTime": "09:15",
      "endTime": "09:45"
    },
    {
      "start": "2025-09-18T08:30:00.000Z",
      "end": "2025-09-18T09:00:00.000Z",
      "startTime": "09:30",
      "endTime": "10:00"
    },
    {
      "start": "2025-09-18T08:45:00.000Z",
      "end": "2025-09-18T09:15:00.000Z",
      "startTime": "09:45",
      "endTime": "10:15"
    },
    {
      "start": "2025-09-18T09:00:00.000Z",
      "end": "2025-09-18T09:30:00.000Z",
      "startTime": "10:00",
      "endTime": "10:30"
    },
    {
      "start": "2025-09-18T09:15:00.000Z",
      "end": "2025-09-18T09:45:00.000Z",
      "startTime": "10:15",
      "endTime": "10:45"
    },
    {
      "start": "2025-09-18T09:30:00.000Z",
      "end": "2025-09-18T10:00:00.000Z",
      "startTime": "10:30",
      "endTime": "11:00"
    },
    {
      "start": "2025-09-18T09:45:00.000Z",
      "end": "2025-09-18T10:15:00.000Z",
      "startTime": "10:45",
      "endTime": "11:15"
    },
    {
      "start": "2025-09-18T10:00:00.000Z",
      "end": "2025-09-18T10:30:00.000Z",
      "startTime": "11:00",
      "endTime": "11:30"
    },
    {
      "start": "2025-09-18T10:15:00.000Z",
      "end": "2025-09-18T10:45:00.000Z",
      "startTime": "11:15",
      "endTime": "11:45"
    },
    {
      "start": "2025-09-18T10:30:00.000Z",
      "end": "2025-09-18T11:00:00.000Z",
      "startTime": "11:30",
      "endTime": "12:00"
    },
    {
      "start": "2025-09-18T11:30:00.000Z",
      "end": "2025-09-18T12:00:00.000Z",
      "startTime": "12:30",
      "endTime": "13:00"
    },
    {
      "start": "2025-09-18T11:45:00.000Z",
      "end": "2025-09-18T12:15:00.000Z",
      "startTime": "12:45",
      "endTime": "13:15"
    },
    {
      "start": "2025-09-18T12:00:00.000Z",
      "end": "2025-09-18T12:30:00.000Z",
      "startTime": "13:00",
      "endTime": "13:30"
    },
    {
      "start": "2025-09-18T12:15:00.000Z",
      "end": "2025-09-18T12:45:00.000Z",
      "startTime": "13:15",
      "endTime": "13:45"
    },
    {
      "start": "2025-09-18T12:30:00.000Z",
      "end": "2025-09-18T13:00:00.000Z",
      "startTime": "13:30",
      "endTime": "14:00"
    },
    {
      "start": "2025-09-18T13:30:00.000Z",
      "end": "2025-09-18T14:00:00.000Z",
      "startTime": "14:30",
      "endTime": "15:00"
    },
    {
      "start": "2025-09-18T13:45:00.000Z",
      "end": "2025-09-18T14:15:00.000Z",
      "startTime": "14:45",
      "endTime": "15:15"
    },
    {
      "start": "2025-09-18T14:00:00.000Z",
      "end": "2025-09-18T14:30:00.000Z",
      "startTime": "15:00",
      "endTime": "15:30"
    },
    {
      "start": "2025-09-18T14:15:00.000Z",
      "end": "2025-09-18T14:45:00.000Z",
      "startTime": "15:15",
      "endTime": "15:45"
    },
    {
      "start": "2025-09-18T14:30:00.000Z",
      "end": "2025-09-18T15:00:00.000Z",
      "startTime": "15:30",
      "endTime": "16:00"
    },
    {
      "start": "2025-09-18T14:45:00.000Z",
      "end": "2025-09-18T15:15:00.000Z",
      "startTime": "15:45",
      "endTime": "16:15"
    },
    {
      "start": "2025-09-18T15:00:00.000Z",
      "end": "2025-09-18T15:30:00.000Z",
      "startTime": "16:00",
      "endTime": "16:30"
    },
    {
      "start": "2025-09-18T15:15:00.000Z",
      "end": "2025-09-18T15:45:00.000Z",
      "startTime": "16:15",
      "endTime": "16:45"
    },
    {
      "start": "2025-09-18T15:30:00.000Z",
      "end": "2025-09-18T16:00:00.000Z",
      "startTime": "16:30",
      "endTime": "17:00"
    }
  ],
  "date": "2025-09-18",
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-15T09:25:03.545Z] 📊 Response type: object
[2025-09-15T09:25:03.545Z] 📊 Has slots: true
[2025-09-15T09:25:03.545Z] 📊 Slots count: 25
✅ Available time slots: [
  '09:00', '09:15', '09:30',
  '09:45', '10:00', '10:15',
  '10:30', '10:45', '11:00',
  '11:15', '11:30', '12:30',
  '12:45', '13:00', '13:15',
  '13:30', '14:30', '14:45',
  '15:00', '15:15', '15:30',
  '15:45', '16:00', '16:15',
  '16:30'
]
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_2m9uJ0BG4mpzJHsX1qw7Q6gy","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}","response":...
Message string: {"type":"History","function_calls":[{"id":"call_2m9uJ0BG4mpzJHsX1qw7Q6gy","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"}]}
[2025-09-15T09:25:04.975Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_2m9uJ0BG4mpzJHsX1qw7Q6gy","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"}]}
[2025-09-15T09:25:04.975Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_2m9uJ0BG4mpzJHsX1qw7Q6gy",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-18\",\"service_id\":\"haircut\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"
    }
  ]
}
[2025-09-15T09:25:04.975Z] === END PARSED JSON ===
[2025-09-15T09:25:04.975Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:04.975Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:03.544Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-15T09:25:05.824Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T09:25:03.544Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-15T09:25:05.599Z] 🔇 Audio stream ended (timeout)
[2025-09-15T09:25:06.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can check availability for a haircut at that time."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can check availability for a haircut at that time."}
[2025-09-15T09:25:09.897Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can check availability for a haircut at that time."}
[2025-09-15T09:25:09.897Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can check availability for a haircut at that time."
}
[2025-09-15T09:25:09.897Z] === END PARSED JSON ===
[2025-09-15T09:25:09.897Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:09.897Z] 💭 CONVERSATION_TEXT: I can check availability for a haircut at that time.
[2025-09-15T09:25:09.897Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I can check availability for a haircut at that time.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can check availability for a haircut at that time."}...
Message string: {"type":"History","role":"assistant","content":"I can check availability for a haircut at that time."}
[2025-09-15T09:25:09.898Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can check availability for a haircut at that time."}
[2025-09-15T09:25:09.898Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can check availability for a haircut at that time."
}
[2025-09-15T09:25:09.898Z] === END PARSED JSON ===
[2025-09-15T09:25:09.898Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:09.898Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:09.898Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I can check availability for a haircut at that time.
[2025-09-15T09:25:09.898Z] 📝 Added transcript: [AI] I can check availability for a haircut at that time.
[2025-09-15T09:25:09.898Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:25:10.050Z] 🔇 Audio stream ended (timeout)
[2025-09-15T09:25:10.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Please hold on."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Please hold on."}
[2025-09-15T09:25:13.420Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Please hold on."}
[2025-09-15T09:25:13.420Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Please hold on."
}
[2025-09-15T09:25:13.420Z] === END PARSED JSON ===
[2025-09-15T09:25:13.420Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:13.420Z] 💭 CONVERSATION_TEXT: Please hold on.
[2025-09-15T09:25:13.420Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Please hold on.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Please hold on."}...
Message string: {"type":"History","role":"assistant","content":"Please hold on."}
[2025-09-15T09:25:13.420Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Please hold on."}
[2025-09-15T09:25:13.420Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Please hold on."
}
[2025-09-15T09:25:13.420Z] === END PARSED JSON ===
[2025-09-15T09:25:13.420Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:13.420Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:13.420Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Please hold on.
[2025-09-15T09:25:13.420Z] 📝 Added transcript: [AI] Please hold on.
[2025-09-15T09:25:13.420Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:25:13.420Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Good news!"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Good news!"}
[2025-09-15T09:25:14.501Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Good news!"}
[2025-09-15T09:25:14.501Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Good news!"
}
[2025-09-15T09:25:14.501Z] === END PARSED JSON ===
[2025-09-15T09:25:14.501Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:14.501Z] 💭 CONVERSATION_TEXT: Good news!
[2025-09-15T09:25:14.501Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Good news!
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Good news!"}...
Message string: {"type":"History","role":"assistant","content":"Good news!"}
[2025-09-15T09:25:14.502Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Good news!"}
[2025-09-15T09:25:14.502Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Good news!"
}
[2025-09-15T09:25:14.502Z] === END PARSED JSON ===
[2025-09-15T09:25:14.502Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:14.502Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:14.502Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Good news!
[2025-09-15T09:25:14.502Z] 📝 Added transcript: [AI] Good news!
[2025-09-15T09:25:14.502Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:25:14.780Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:25:14.519Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well."}...
Message string: {"type":"ConversationText","role":"assistant","content":"12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well."}
[2025-09-15T09:25:15.424Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well."}
[2025-09-15T09:25:15.424Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well."
}
[2025-09-15T09:25:15.424Z] === END PARSED JSON ===
[2025-09-15T09:25:15.424Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:15.424Z] 💭 CONVERSATION_TEXT: 12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well.
[2025-09-15T09:25:15.424Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: 12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well."}...
Message string: {"type":"History","role":"assistant","content":"12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well."}
[2025-09-15T09:25:15.424Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well."}
[2025-09-15T09:25:15.424Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well."
}
[2025-09-15T09:25:15.424Z] === END PARSED JSON ===
[2025-09-15T09:25:15.424Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:15.424Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:15.424Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: 12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well.
[2025-09-15T09:25:15.424Z] 📝 Added transcript: [AI] 12:45 PM on Thursday, 18 September 2025 is available for a haircut appointment as well.
[2025-09-15T09:25:15.424Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:25:17.819Z] 🔇 Audio stream ended (timeout)
[2025-09-15T09:25:18.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"May I have your name for this booking?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"May I have your name for this booking?"}
[2025-09-15T09:25:22.745Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"May I have your name for this booking?"}
[2025-09-15T09:25:22.745Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "May I have your name for this booking?"
}
[2025-09-15T09:25:22.745Z] === END PARSED JSON ===
[2025-09-15T09:25:22.745Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:22.745Z] 💭 CONVERSATION_TEXT: May I have your name for this booking?
[2025-09-15T09:25:22.745Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: May I have your name for this booking?
[2025-09-15T09:25:22.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"May I have your name for this booking?"}...
Message string: {"type":"History","role":"assistant","content":"May I have your name for this booking?"}
[2025-09-15T09:25:22.897Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"May I have your name for this booking?"}
[2025-09-15T09:25:22.897Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "May I have your name for this booking?"
}
[2025-09-15T09:25:22.897Z] === END PARSED JSON ===
[2025-09-15T09:25:22.897Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:22.897Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:22.897Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: May I have your name for this booking?
[2025-09-15T09:25:22.897Z] 📝 Added transcript: [AI] May I have your name for this booking?
[2025-09-15T09:25:22.897Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-15T09:25:22.898Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-15T09:25:22.898Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-15T09:25:22.898Z] === END PARSED JSON ===
[2025-09-15T09:25:22.898Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-15T09:25:22.898Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-15T09:25:22.898Z] 🔇 SILENCE: Started tracking
[2025-09-15T09:25:22.898Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-15T09:25:22.898Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-15T09:25:22.898Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-15T09:25:22.898Z] 🔇 SILENCE_CHECK: 3000ms of silence
[2025-09-15T09:25:26.780Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:25:22.898Z] 🔇 SILENCE_CHECK: 4000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:25:26.908Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:25:26.908Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:25:26.908Z] === END PARSED JSON ===
[2025-09-15T09:25:26.908Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:25:26.908Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:25:26.908Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:25:26.908Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"You should remember Marco."}...
Message string: {"type":"ConversationText","role":"user","content":"You should remember Marco."}
[2025-09-15T09:25:28.510Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"You should remember Marco."}
[2025-09-15T09:25:28.510Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "You should remember Marco."
}
[2025-09-15T09:25:28.510Z] === END PARSED JSON ===
[2025-09-15T09:25:28.510Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:28.510Z] 💭 CONVERSATION_TEXT: You should remember Marco.
[2025-09-15T09:25:28.510Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: You should remember Marco.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"You should remember Marco."}...
Message string: {"type":"History","role":"user","content":"You should remember Marco."}
[2025-09-15T09:25:28.519Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"You should remember Marco."}
[2025-09-15T09:25:28.519Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "You should remember Marco."
}
[2025-09-15T09:25:28.519Z] === END PARSED JSON ===
[2025-09-15T09:25:28.519Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:28.519Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:28.519Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: You should remember Marco.
[2025-09-15T09:25:28.519Z] 📝 Added transcript: [User] You should remember Marco.
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Thank you for confirming, Marco."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Thank you for confirming, Marco."}
[2025-09-15T09:25:29.655Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Thank you for confirming, Marco."}
[2025-09-15T09:25:29.655Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Thank you for confirming, Marco."
}
[2025-09-15T09:25:29.655Z] === END PARSED JSON ===
[2025-09-15T09:25:29.655Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:29.655Z] 💭 CONVERSATION_TEXT: Thank you for confirming, Marco.
[2025-09-15T09:25:29.655Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Thank you for confirming, Marco.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Thank you for confirming, Marco."}...
Message string: {"type":"History","role":"assistant","content":"Thank you for confirming, Marco."}
[2025-09-15T09:25:29.656Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Thank you for confirming, Marco."}
[2025-09-15T09:25:29.656Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Thank you for confirming, Marco."
}
[2025-09-15T09:25:29.656Z] === END PARSED JSON ===
[2025-09-15T09:25:29.656Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:29.656Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:29.656Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Thank you for confirming, Marco.
[2025-09-15T09:25:29.656Z] 📝 Added transcript: [AI] Thank you for confirming, Marco.
[2025-09-15T09:25:29.656Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_YS2YhXxm6BRpPfawFUl97IXJ","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"haircut\",\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_YS2YhXxm6BRpPfawFUl97IXJ","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"haircut\",\"time\":\"12:45\"}","client_side":true}]}
[2025-09-15T09:25:30.448Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_YS2YhXxm6BRpPfawFUl97IXJ","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"haircut\",\"time\":\"12:45\"}","client_side":true}]}
[2025-09-15T09:25:30.448Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_YS2YhXxm6BRpPfawFUl97IXJ",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"haircut\",\"time\":\"12:45\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T09:25:30.448Z] === END PARSED JSON ===
[2025-09-15T09:25:30.448Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T09:25:30.448Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T09:25:30.448Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T09:25:30.448Z] 📋 Functions: [
  {
    "id": "call_YS2YhXxm6BRpPfawFUl97IXJ",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"haircut\",\"time\":\"12:45\"}",
    "client_side": true
  }
]
[2025-09-15T09:25:30.448Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T09:25:30.448Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T09:25:30.448Z] 🔧 Processing function: create_booking
[2025-09-15T09:25:30.448Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '12:45',
  lastServiceId: 'beard trim',
  lastServiceName: 'beard trim',
  lastServiceDuration: 15,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: undefined,
      newTime: '12:45',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:45:00',
      appointmentId: '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
      serviceName: 'beard trim'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
[2025-09-15T09:25:30.449Z] 🚀 STARTING handleFunctionCall
[2025-09-15T09:25:30.449Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_YS2YhXxm6BRpPfawFUl97IXJ",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-18",
    "service_id": "haircut",
    "time": "12:45"
  }
}
[2025-09-15T09:25:30.449Z] 📋 Function name: create_booking
[2025-09-15T09:25:30.449Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-18",
  "service_id": "haircut",
  "time": "12:45"
}
[2025-09-15T09:25:30.449Z] 🏢 Business config exists: true
[2025-09-15T09:25:30.449Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_YS2YhXxm6BRpPfawFUl97IXJ",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-18",
    "service_id": "haircut",
    "time": "12:45"
  }
}
✅ TRACKING: Added function call ID call_YS2YhXxm6BRpPfawFUl97IXJ to processed set
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-18",
  "service_id": "haircut",
  "time": "12:45"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
📋 Booking - Found service by name 'haircut' -> ID: 4395775e-fa81-4a69-8425-e46c3853dea4
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-18',
  lastBookingTime: '12:45',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: undefined,
      newTime: '12:45',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:45:00',
      appointmentId: '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
      serviceName: 'beard trim'
    },
    {
      customerName: 'Marco',
      date: '2025-09-18',
      time: '12:45',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: null,
      type: 'create'
    }
  ],
  lastAppointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14'
}
🕐 Creating appointment for 2025-09-18 at 12:45 in timezone: Europe/London
📅 Parsed date: 2025-09-18 (Thursday)
🕐 Appointment datetime (UK local): 12:45:00
🕐 Business timezone: Europe/London
🕐 Start time: 12:45:00
🕐 End time: 13:15:00
📅 Day of week: Thursday
🔍 Checking slot availability before booking...
[2025-09-15T09:25:30.298Z] 🔇 Audio stream ended (timeout)
📋 Availability check result: {
  "available": true,
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-18",
  "startTime": "12:45:00",
  "endTime": "13:15:00",
  "message": "Slot is available"
}
✅ Slot is available - proceeding with booking
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-18",
  "startTime": "12:45:00",
  "endTime": "13:15:00",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825"
}
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now."}
[2025-09-15T09:25:31.577Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now."}
[2025-09-15T09:25:31.577Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now."
}
[2025-09-15T09:25:31.577Z] === END PARSED JSON ===
[2025-09-15T09:25:31.577Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:31.577Z] 💭 CONVERSATION_TEXT: I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now.
[2025-09-15T09:25:31.577Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now."}...
Message string: {"type":"History","role":"assistant","content":"I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now."}
[2025-09-15T09:25:31.729Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now."}
[2025-09-15T09:25:31.729Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now."
}
[2025-09-15T09:25:31.729Z] === END PARSED JSON ===
[2025-09-15T09:25:31.729Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:31.729Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:31.729Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now.
[2025-09-15T09:25:31.729Z] 📝 Added transcript: [AI] I will book your haircut for 12:45 PM on Thursday, 18 September 2025 now.
[2025-09-15T09:25:31.729Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:25:33.317Z] 🔇 Audio stream ended (timeout)
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "e7f7be75-9baf-480f-8627-881d147402d5",
  "calendarEventId": "42almce8svicrc63gncc8dput8"
}
✅ Appointment created successfully via API: e7f7be75-9baf-480f-8627-881d147402d5
📅 Calendar event ID: 42almce8svicrc63gncc8dput8
📞 Updating call log with customer name: Marco
Failed to update call customer: {
  code: 'PGRST204',
  details: null,
✅ Call log updated with customer name: CA98feaa55b63aa444676689f0d216c5a0
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
}
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-18',
  lastBookingTime: '12:45',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: undefined,
      newTime: '12:45',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:45:00',
      appointmentId: '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
      serviceName: 'beard trim'
    },
    {
      customerName: 'Marco',
      date: '2025-09-18',
      time: '12:45',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: 'e7f7be75-9baf-480f-8627-881d147402d5',
      type: 'create'
    }
  ],
  lastAppointmentId: 'e7f7be75-9baf-480f-8627-881d147402d5'
}
📋 Stored appointment ID in session: e7f7be75-9baf-480f-8627-881d147402d5
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_YS2YhXxm6BRpPfawFUl97IXJ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_YS2YhXxm6BRpPfawFUl97IXJ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"haircut\",\"time\":\"12:45\"}","response":"{\"success\":true,\"appointment_id\":\"e7f7be75-9baf-480f-8627-881d147402d5\",\"calendar_event_id\":\"42almce8svicrc63gncc8dput8\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-18 at 12:45 for haircut. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"}]}
[2025-09-15T09:25:34.211Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_YS2YhXxm6BRpPfawFUl97IXJ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"haircut\",\"time\":\"12:45\"}","response":"{\"success\":true,\"appointment_id\":\"e7f7be75-9baf-480f-8627-881d147402d5\",\"calendar_event_id\":\"42almce8svicrc63gncc8dput8\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-18 at 12:45 for haircut. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"}]}
[2025-09-15T09:25:34.211Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_YS2YhXxm6BRpPfawFUl97IXJ",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-18\",\"service_id\":\"haircut\",\"time\":\"12:45\"}",
      "response": "{\"success\":true,\"appointment_id\":\"e7f7be75-9baf-480f-8627-881d147402d5\",\"calendar_event_id\":\"42almce8svicrc63gncc8dput8\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-18 at 12:45 for haircut. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"
    }
  ]
}
[2025-09-15T09:25:34.211Z] === END PARSED JSON ===
[2025-09-15T09:25:34.211Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:34.211Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:30.448Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-15T09:25:35.060Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T09:25:30.448Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025."}
[2025-09-15T09:25:37.899Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025."}
[2025-09-15T09:25:37.899Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025."
}
[2025-09-15T09:25:37.899Z] === END PARSED JSON ===
[2025-09-15T09:25:37.899Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:37.899Z] 💭 CONVERSATION_TEXT: Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025.
[2025-09-15T09:25:37.899Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025."}...
Message string: {"type":"History","role":"assistant","content":"Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025."}
[2025-09-15T09:25:38.051Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025."}
[2025-09-15T09:25:38.051Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025."
}
[2025-09-15T09:25:38.051Z] === END PARSED JSON ===
[2025-09-15T09:25:38.051Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:38.051Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:38.051Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025.
[2025-09-15T09:25:38.051Z] 📝 Added transcript: [AI] Your haircut appointment is also confirmed for 12:45 PM on Thursday, 18 September 2025.
[2025-09-15T09:25:38.051Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T09:25:38.279Z] 🔇 Audio stream ended (timeout)
[2025-09-15T09:25:38.780Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:25:42.780Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T09:25:44.949Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T09:25:44.949Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T09:25:44.949Z] === END PARSED JSON ===
[2025-09-15T09:25:44.949Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T09:25:44.949Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T09:25:44.949Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T09:25:44.949Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-15T09:25:44.959Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-15T09:25:44.959Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-15T09:25:44.959Z] === END PARSED JSON ===
[2025-09-15T09:25:44.959Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-15T09:25:44.959Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-15T09:25:44.959Z] 🔇 SILENCE: Started tracking
[2025-09-15T09:25:44.959Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"That's it. Thanks. Bye."}...
Message string: {"type":"ConversationText","role":"user","content":"That's it. Thanks. Bye."}
[2025-09-15T09:25:45.752Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"That's it. Thanks. Bye."}
[2025-09-15T09:25:45.752Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "That's it. Thanks. Bye."
}
[2025-09-15T09:25:45.752Z] === END PARSED JSON ===
[2025-09-15T09:25:45.752Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T09:25:45.752Z] 💭 CONVERSATION_TEXT: That's it. Thanks. Bye.
[2025-09-15T09:25:45.752Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: That's it. Thanks. Bye.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"That's it. Thanks. Bye."}...
Message string: {"type":"History","role":"user","content":"That's it. Thanks. Bye."}
[2025-09-15T09:25:45.760Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"That's it. Thanks. Bye."}
[2025-09-15T09:25:45.760Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "That's it. Thanks. Bye."
}
[2025-09-15T09:25:45.760Z] === END PARSED JSON ===
[2025-09-15T09:25:45.760Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T09:25:45.760Z] 📜 HISTORY: Message logged
[2025-09-15T09:25:45.760Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: That's it. Thanks. Bye.
[2025-09-15T09:25:45.760Z] 📝 Added transcript: [User] That's it. Thanks. Bye.
[2025-09-15T09:25:44.959Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-15T09:25:46.780Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T09:25:44.959Z] 🔇 SILENCE_CHECK: 2000ms of silence
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_b6TokCNo8Fgri5CrcgJixHHB","name":"end_call","arguments":"{\"reason\":\"customer said goodbye\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_b6TokCNo8Fgri5CrcgJixHHB","name":"end_call","arguments":"{\"reason\":\"customer said goodbye\"}","client_side":true}]}
[2025-09-15T09:25:47.219Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_b6TokCNo8Fgri5CrcgJixHHB","name":"end_call","arguments":"{\"reason\":\"customer said goodbye\"}","client_side":true}]}
[2025-09-15T09:25:47.219Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_b6TokCNo8Fgri5CrcgJixHHB",
      "name": "end_call",
      "arguments": "{\"reason\":\"customer said goodbye\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T09:25:47.219Z] === END PARSED JSON ===
[2025-09-15T09:25:47.219Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T09:25:47.219Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T09:25:47.219Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T09:25:47.219Z] 📋 Functions: [
  {
    "id": "call_b6TokCNo8Fgri5CrcgJixHHB",
    "name": "end_call",
    "arguments": "{\"reason\":\"customer said goodbye\"}",
    "client_side": true
  }
]
[2025-09-15T09:25:47.219Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T09:25:47.220Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T09:25:47.219Z] 🔧 Processing function: end_call
[2025-09-15T09:25:47.219Z] 🔧 CALLING: handleFunctionCall for end_call...
📝 Session updated for call CA98feaa55b63aa444676689f0d216c5a0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-18',
  lastBookingTime: '12:45',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: undefined,
      newTime: '12:45',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:45:00',
      appointmentId: '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
      serviceName: 'beard trim'
    },
    {
      customerName: 'Marco',
      date: '2025-09-18',
      time: '12:45',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: 'e7f7be75-9baf-480f-8627-881d147402d5',
      type: 'create'
    }
  ],
  lastAppointmentId: 'e7f7be75-9baf-480f-8627-881d147402d5'
}
[2025-09-15T09:25:47.220Z] 🚀 STARTING handleFunctionCall
[2025-09-15T09:25:47.220Z] 🔧 Function call received: {
  "function_name": "end_call",
  "function_call_id": "call_b6TokCNo8Fgri5CrcgJixHHB",
  "parameters": {
    "reason": "customer said goodbye"
  }
}
[2025-09-15T09:25:47.220Z] 📋 Function name: end_call
[2025-09-15T09:25:47.220Z] 📊 Parameters: {
  "reason": "customer said goodbye"
}
[2025-09-15T09:25:47.220Z] 🏢 Business config exists: true
[2025-09-15T09:25:47.220Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "end_call",
  "function_call_id": "call_b6TokCNo8Fgri5CrcgJixHHB",
  "parameters": {
    "reason": "customer said goodbye"
  }
}
📞 endCall called with params: {
  "reason": "customer said goodbye"
}
📞 Call SID: CA98feaa55b63aa444676689f0d216c5a0
📋 Session data before ending call: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-18',
  lastBookingTime: '12:45',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'beard trim',
      serviceName: 'beard trim',
      serviceDuration: 15,
      appointmentId: '8b2b6291-e2ec-4e84-853b-6935a359ce14',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: undefined,
      newTime: '12:45',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:45:00',
      appointmentId: '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
      serviceName: 'beard trim'
    },
    {
      customerName: 'Marco',
      date: '2025-09-18',
      time: '12:45',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: 'e7f7be75-9baf-480f-8627-881d147402d5',
      type: 'create'
    }
  ],
  lastAppointmentId: 'e7f7be75-9baf-480f-8627-881d147402d5'
}
📱 Sending consolidated SMS confirmation for bookings: [
  '8b2b6291-e2ec-4e84-853b-6935a359ce14',
  '052078ac-5500-4b51-b7e7-bcabe0ea5ab7',
  'e7f7be75-9baf-480f-8627-881d147402d5'
]
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Thank you for calling Gents Barbershop, have a great day!"}...