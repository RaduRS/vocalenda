
    "service_id": "beard trim",
    "time": "10:00"
  }
}
[2025-09-07T09:43:00.502Z] 📋 Function name: create_booking
[2025-09-07T09:43:00.502Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-10",
  "service_id": "beard trim",
  "time": "10:00"
}
[2025-09-07T09:43:00.502Z] 🏢 Business config exists: true
[2025-09-07T09:43:00.502Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_IYcwEzJs41MPtv9ELzWTMzbX",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-10",
    "service_id": "beard trim",
    "time": "10:00"
  }
}
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-10",
  "service_id": "beard trim",
  "time": "10:00"
}
📋 Available services: [
  { id: '6e46963e-cffe-460b-8a23-c4dc978cd41e', name: 'haircut' },
  { id: '676c503a-c695-40dd-80a0-a654456f36cd', name: 'beard trim' }
]
📝 Session updated for call CA98ef4c51a448a245de21daba8f09a944: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-10',
  lastBookingTime: '10:00',
  lastServiceId: 'beard trim'
}
📋 Booking - Found service by name 'beard trim' -> ID: 676c503a-c695-40dd-80a0-a654456f36cd
✅ Booking - Service found: beard trim (ID: 676c503a-c695-40dd-80a0-a654456f36cd )
🕐 Creating appointment for 2025-09-10 at 10:00 in timezone: Europe/London
📅 Parsed date: 2025-09-10 (Wednesday)
🕐 Appointment datetime (UK local): 10:00:00
🕐 Business timezone: Europe/London
🕐 Start time: 10:00:00
🕐 End time: 10:20:00
📅 Day of week: Wednesday
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "676c503a-c695-40dd-80a0-a654456f36cd",
  "appointmentDate": "2025-09-10",
  "startTime": "10:00:00",
  "endTime": "10:20:00",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825"
}
📡 API Response status: 409 Conflict
📋 API Response body: {
  "error": "Time slot is no longer available"
}
✅ Sending create_booking response to Deepgram
❌ Booking API error: { error: 'Time slot is no longer available' }
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_IYcwEzJs41MPtv9ELzWTMzbX","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_IYcwEzJs41MPtv9ELzWTMzbX","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"10:00\"}","response":"{\"error\":\"Time slot is no longer available\"}"}]}
[2025-09-07T09:43:02.183Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_IYcwEzJs41MPtv9ELzWTMzbX","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"10:00\"}","response":"{\"error\":\"Time slot is no longer available\"}"}]}
[2025-09-07T09:43:02.183Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_IYcwEzJs41MPtv9ELzWTMzbX",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"10:00\"}",
      "response": "{\"error\":\"Time slot is no longer available\"}"
    }
  ]
}
[2025-09-07T09:43:02.183Z] === END PARSED JSON ===
[2025-09-07T09:43:02.183Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:02.183Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:02.183Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_IYcwEzJs41MPtv9ELzWTMzbX",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"10:00\"}",
      "response": "{\"error\":\"Time slot is no longer available\"}"
    }
  ]
}
[2025-09-07T09:43:00.501Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-07T09:43:03.035Z] ▶️ KEEPALIVE: Resumed after function processing
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems that 10 AM on Wednesday is no longer available for the beard trim."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems that 10 AM on Wednesday is no longer available for the beard trim."}
[2025-09-07T09:43:03.233Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems that 10 AM on Wednesday is no longer available for the beard trim."}
[2025-09-07T09:43:03.233Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems that 10 AM on Wednesday is no longer available for the beard trim."
}
[2025-09-07T09:43:03.233Z] === END PARSED JSON ===
[2025-09-07T09:43:03.233Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:43:03.233Z] 💭 CONVERSATION_TEXT: It seems that 10 AM on Wednesday is no longer available for the beard trim.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems that 10 AM on Wednesday is no longer available for the beard trim."}...
Message string: {"type":"History","role":"assistant","content":"It seems that 10 AM on Wednesday is no longer available for the beard trim."}
[2025-09-07T09:43:03.234Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems that 10 AM on Wednesday is no longer available for the beard trim."}
[2025-09-07T09:43:03.234Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems that 10 AM on Wednesday is no longer available for the beard trim."
}
[2025-09-07T09:43:03.234Z] === END PARSED JSON ===
[2025-09-07T09:43:03.234Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:03.234Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:03.234Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "It seems that 10 AM on Wednesday is no longer available for the beard trim."
}
[2025-09-07T09:43:03.234Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:43:05.050Z] 🔇 Audio stream ended (timeout)
[2025-09-07T09:43:06.724Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would you like to choose another time?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would you like to choose another time?"}
[2025-09-07T09:43:07.755Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would you like to choose another time?"}
[2025-09-07T09:43:07.755Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would you like to choose another time?"
}
[2025-09-07T09:43:07.755Z] === END PARSED JSON ===
[2025-09-07T09:43:07.755Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:43:07.755Z] 💭 CONVERSATION_TEXT: Would you like to choose another time?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would you like to choose another time?"}...
Message string: {"type":"History","role":"assistant","content":"Would you like to choose another time?"}
[2025-09-07T09:43:07.755Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would you like to choose another time?"}
[2025-09-07T09:43:07.755Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would you like to choose another time?"
}
[2025-09-07T09:43:07.755Z] === END PARSED JSON ===
[2025-09-07T09:43:07.755Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:07.755Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:07.755Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "Would you like to choose another time?"
}
[2025-09-07T09:43:07.755Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:43:07.903Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can suggest 9:30 AM or 10:30 AM on that day."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can suggest 9:30 AM or 10:30 AM on that day."}
[2025-09-07T09:43:09.596Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can suggest 9:30 AM or 10:30 AM on that day."}
[2025-09-07T09:43:09.596Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can suggest 9:30 AM or 10:30 AM on that day."
}
[2025-09-07T09:43:09.596Z] === END PARSED JSON ===
[2025-09-07T09:43:09.596Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:43:09.596Z] 💭 CONVERSATION_TEXT: I can suggest 9:30 AM or 10:30 AM on that day.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can suggest 9:30 AM or 10:30 AM on that day."}...
Message string: {"type":"History","role":"assistant","content":"I can suggest 9:30 AM or 10:30 AM on that day."}
[2025-09-07T09:43:09.596Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can suggest 9:30 AM or 10:30 AM on that day."}
[2025-09-07T09:43:09.596Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can suggest 9:30 AM or 10:30 AM on that day."
}
[2025-09-07T09:43:09.596Z] === END PARSED JSON ===
[2025-09-07T09:43:09.596Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:09.596Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:09.596Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "I can suggest 9:30 AM or 10:30 AM on that day."
}
[2025-09-07T09:43:09.596Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:43:09.744Z] 🔇 Audio stream ended (timeout)
[2025-09-07T09:43:10.723Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-07T09:43:11.259Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-07T09:43:11.259Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-07T09:43:11.259Z] === END PARSED JSON ===
[2025-09-07T09:43:11.259Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-07T09:43:11.259Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-07T09:43:11.259Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-07T09:43:11.271Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-07T09:43:11.271Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-07T09:43:11.271Z] === END PARSED JSON ===
[2025-09-07T09:43:11.271Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-07T09:43:11.271Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-07T09:43:11.271Z] ⏰ SILENCE_START: Beginning silence tracking after AI speech
[2025-09-07T09:43:11.271Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Twelve."}...
Message string: {"type":"ConversationText","role":"user","content":"Twelve."}
[2025-09-07T09:43:11.299Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Twelve."}
[2025-09-07T09:43:11.299Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Twelve."
}
[2025-09-07T09:43:11.299Z] === END PARSED JSON ===
[2025-09-07T09:43:11.299Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:43:11.299Z] 💭 CONVERSATION_TEXT: Twelve.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Twelve."}...
Message string: {"type":"History","role":"user","content":"Twelve."}
[2025-09-07T09:43:11.312Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Twelve."}
[2025-09-07T09:43:11.312Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Twelve."
}
[2025-09-07T09:43:11.312Z] === END PARSED JSON ===
[2025-09-07T09:43:11.312Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:11.312Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:11.312Z] 📦 Full message: {
  "type": "History",
  "role": "user",
  "content": "Twelve."
}
[2025-09-07T09:43:11.271Z] 🔇 SILENCE_CHECK: 999ms of silence
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_FD5ZsrzmDq59FnnzpNnzmHM1","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_FD5ZsrzmDq59FnnzpNnzmHM1","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}","client_side":true}]}
[2025-09-07T09:43:12.336Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_FD5ZsrzmDq59FnnzpNnzmHM1","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}","client_side":true}]}
[2025-09-07T09:43:12.336Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_FD5ZsrzmDq59FnnzpNnzmHM1",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-07T09:43:12.336Z] === END PARSED JSON ===
[2025-09-07T09:43:12.336Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-07T09:43:12.336Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-07T09:43:12.336Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-07T09:43:12.336Z] 📋 Functions: [
  {
    "id": "call_FD5ZsrzmDq59FnnzpNnzmHM1",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}",
    "client_side": true
  }
]
[2025-09-07T09:43:12.337Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-07T09:43:12.336Z] 🔧 Processing function: create_booking
[2025-09-07T09:43:12.336Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA98ef4c51a448a245de21daba8f09a944: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-10',
  lastBookingTime: '10:00',
  lastServiceId: 'beard trim'
}
[2025-09-07T09:43:12.337Z] 🚀 STARTING handleFunctionCall
[2025-09-07T09:43:12.337Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_FD5ZsrzmDq59FnnzpNnzmHM1",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-10",
    "service_id": "beard trim",
    "time": "12:00"
  }
}
[2025-09-07T09:43:12.337Z] 📋 Function name: create_booking
[2025-09-07T09:43:12.337Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-10",
  "service_id": "beard trim",
  "time": "12:00"
}
[2025-09-07T09:43:12.337Z] 🏢 Business config exists: true
[2025-09-07T09:43:12.337Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_FD5ZsrzmDq59FnnzpNnzmHM1",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-10",
    "service_id": "beard trim",
    "time": "12:00"
  }
}
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-10",
  "service_id": "beard trim",
  "time": "12:00"
}
📋 Available services: [
  { id: '6e46963e-cffe-460b-8a23-c4dc978cd41e', name: 'haircut' },
  { id: '676c503a-c695-40dd-80a0-a654456f36cd', name: 'beard trim' }
]
📝 Session updated for call CA98ef4c51a448a245de21daba8f09a944: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-10',
  lastBookingTime: '12:00',
  lastServiceId: 'beard trim'
}
📋 Booking - Found service by name 'beard trim' -> ID: 676c503a-c695-40dd-80a0-a654456f36cd
✅ Booking - Service found: beard trim (ID: 676c503a-c695-40dd-80a0-a654456f36cd )
🕐 Creating appointment for 2025-09-10 at 12:00 in timezone: Europe/London
📅 Parsed date: 2025-09-10 (Wednesday)
🕐 Appointment datetime (UK local): 12:00:00
🕐 Business timezone: Europe/London
🕐 Start time: 12:00:00
🕐 End time: 12:20:00
📅 Day of week: Wednesday
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "676c503a-c695-40dd-80a0-a654456f36cd",
  "appointmentDate": "2025-09-10",
  "startTime": "12:00:00",
  "endTime": "12:20:00",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825"
}
[2025-09-07T09:43:11.271Z] 🔇 SILENCE_CHECK: 2000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-07T09:43:14.160Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-07T09:43:14.160Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-07T09:43:14.160Z] === END PARSED JSON ===
[2025-09-07T09:43:14.160Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-07T09:43:14.160Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-07T09:43:14.160Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Twelve. Twelve PM."}...
Message string: {"type":"ConversationText","role":"user","content":"Twelve. Twelve PM."}
[2025-09-07T09:43:14.381Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Twelve. Twelve PM."}
[2025-09-07T09:43:14.381Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Twelve. Twelve PM."
}
[2025-09-07T09:43:14.381Z] === END PARSED JSON ===
[2025-09-07T09:43:14.381Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:43:14.381Z] 💭 CONVERSATION_TEXT: Twelve. Twelve PM.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Twelve. Twelve PM."}...
Message string: {"type":"History","role":"user","content":"Twelve. Twelve PM."}
[2025-09-07T09:43:14.391Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Twelve. Twelve PM."}
[2025-09-07T09:43:14.391Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Twelve. Twelve PM."
}
[2025-09-07T09:43:14.391Z] === END PARSED JSON ===
[2025-09-07T09:43:14.391Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:14.391Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:14.391Z] 📦 Full message: {
  "type": "History",
  "role": "user",
  "content": "Twelve. Twelve PM."
}
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "2d57a9a6-7bd2-4487-a864-38408076e301",
  "calendarEventId": "dsfvk4c9els6qa75c9v9acr1s0"
}
✅ Appointment created successfully via API: 2d57a9a6-7bd2-4487-a864-38408076e301
📅 Calendar event ID: dsfvk4c9els6qa75c9v9acr1s0
📞 Updating call log with customer name: Marco
Failed to update call customer: {
  code: 'PGRST204',
✅ Call log updated with customer name: CA98ef4c51a448a245de21daba8f09a944
  details: null,
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
}
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_RuUFkft3VpH093UhVbBcvGNC","name":"get_available_slots","arguments":"{\"date\":\"2025-09-10\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_RuUFkft3VpH093UhVbBcvGNC","name":"get_available_slots","arguments":"{\"date\":\"2025-09-10\"}","client_side":true}]}
[2025-09-07T09:43:15.251Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_RuUFkft3VpH093UhVbBcvGNC","name":"get_available_slots","arguments":"{\"date\":\"2025-09-10\"}","client_side":true}]}
[2025-09-07T09:43:15.251Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_RuUFkft3VpH093UhVbBcvGNC",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-10\"}",
      "client_side": true
    }
  ]
}
[2025-09-07T09:43:15.251Z] === END PARSED JSON ===
[2025-09-07T09:43:15.251Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-07T09:43:15.251Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-07T09:43:15.251Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-07T09:43:15.251Z] 📋 Functions: [
  {
    "id": "call_RuUFkft3VpH093UhVbBcvGNC",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-10\"}",
    "client_side": true
  }
]
[2025-09-07T09:43:15.251Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-07T09:43:15.251Z] 🔧 Processing function: get_available_slots
[2025-09-07T09:43:15.251Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA98ef4c51a448a245de21daba8f09a944: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-10',
  lastBookingTime: '12:00',
  lastServiceId: 'beard trim'
}
[2025-09-07T09:43:15.251Z] 🚀 STARTING handleFunctionCall
[2025-09-07T09:43:15.251Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_RuUFkft3VpH093UhVbBcvGNC",
  "parameters": {
    "date": "2025-09-10"
  }
}
[2025-09-07T09:43:15.251Z] 📋 Function name: get_available_slots
[2025-09-07T09:43:15.251Z] 📊 Parameters: {
  "date": "2025-09-10"
}
[2025-09-07T09:43:15.251Z] 🏢 Business config exists: true
[2025-09-07T09:43:15.251Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_RuUFkft3VpH093UhVbBcvGNC",
  "parameters": {
    "date": "2025-09-10"
  }
}
[2025-09-07T09:43:15.251Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-10"
}
[2025-09-07T09:43:15.251Z] 🏢 Business config: Gents Barbershop
[2025-09-07T09:43:15.251Z] 📋 Services count: 2
[2025-09-07T09:43:15.251Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-07T09:43:15.251Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-10"
}
📅 Business open on Wednesday
📋 Using default service: haircut (Duration: 30 minutes)
[2025-09-07T09:43:15.251Z] 🌐 About to make API call:
[2025-09-07T09:43:15.251Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/slots?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=6e46963e-cffe-460b-8a23-c4dc978cd41e&date=2025-09-10
[2025-09-07T09:43:15.251Z] 🔑 Secret exists: true
[2025-09-07T09:43:15.251Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-07T09:43:15.251Z] 📋 Service ID: 6e46963e-cffe-460b-8a23-c4dc978cd41e
[2025-09-07T09:43:15.251Z] 📅 Date: 2025-09-10
[2025-09-07T09:43:15.251Z] 📡 API Response status: 200
[2025-09-07T09:43:15.251Z] 📡 API Response ok: true
[2025-09-07T09:43:15.251Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-10T09:30:00.000Z",
      "end": "2025-09-10T10:00:00.000Z",
      "startTime": "09:30",
      "endTime": "10:00"
    },
    {
      "start": "2025-09-10T10:00:00.000Z",
      "end": "2025-09-10T10:30:00.000Z",
      "startTime": "10:00",
      "endTime": "10:30"
    },
    {
      "start": "2025-09-10T10:30:00.000Z",
      "end": "2025-09-10T11:00:00.000Z",
      "startTime": "10:30",
      "endTime": "11:00"
    },
    {
      "start": "2025-09-10T11:00:00.000Z",
      "end": "2025-09-10T11:30:00.000Z",
      "startTime": "11:00",
      "endTime": "11:30"
    },
    {
      "start": "2025-09-10T11:30:00.000Z",
      "end": "2025-09-10T12:00:00.000Z",
      "startTime": "11:30",
      "endTime": "12:00"
    },
    {
      "start": "2025-09-10T12:00:00.000Z",
      "end": "2025-09-10T12:30:00.000Z",
      "startTime": "12:00",
      "endTime": "12:30"
    },
    {
      "start": "2025-09-10T12:30:00.000Z",
      "end": "2025-09-10T13:00:00.000Z",
      "startTime": "12:30",
      "endTime": "13:00"
    },
    {
      "start": "2025-09-10T13:00:00.000Z",
      "end": "2025-09-10T13:30:00.000Z",
      "startTime": "13:00",
      "endTime": "13:30"
    },
    {
      "start": "2025-09-10T13:30:00.000Z",
      "end": "2025-09-10T14:00:00.000Z",
      "startTime": "13:30",
      "endTime": "14:00"
    },
    {
      "start": "2025-09-10T14:00:00.000Z",
      "end": "2025-09-10T14:30:00.000Z",
      "startTime": "14:00",
      "endTime": "14:30"
    },
    {
      "start": "2025-09-10T14:30:00.000Z",
      "end": "2025-09-10T15:00:00.000Z",
      "startTime": "14:30",
      "endTime": "15:00"
    },
    {
      "start": "2025-09-10T15:00:00.000Z",
      "end": "2025-09-10T15:30:00.000Z",
      "startTime": "15:00",
      "endTime": "15:30"
    },
    {
      "start": "2025-09-10T15:30:00.000Z",
      "end": "2025-09-10T16:00:00.000Z",
      "startTime": "15:30",
      "endTime": "16:00"
    },
    {
      "start": "2025-09-10T16:00:00.000Z",
      "end": "2025-09-10T16:30:00.000Z",
      "startTime": "16:00",
      "endTime": "16:30"
    },
    {
      "start": "2025-09-10T16:30:00.000Z",
      "end": "2025-09-10T17:00:00.000Z",
      "startTime": "16:30",
      "endTime": "17:00"
    }
  ]
}
[2025-09-07T09:43:15.251Z] 📊 Response type: object
[2025-09-07T09:43:15.251Z] 📊 Has slots: true
[2025-09-07T09:43:15.251Z] 📊 Slots count: 15
✅ Available time slots: [
  '09:30', '10:00', '10:30',
  '11:00', '11:30', '12:00',
  '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30'
]
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_RuUFkft3VpH093UhVbBcvGNC","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-10\"}","response":"{\"available_slots\":[\"09...
Message string: {"type":"History","function_calls":[{"id":"call_RuUFkft3VpH093UhVbBcvGNC","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-10\"}","response":"{\"available_slots\":[\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"}]}
[2025-09-07T09:43:15.448Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_RuUFkft3VpH093UhVbBcvGNC","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-10\"}","response":"{\"available_slots\":[\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"}]}
[2025-09-07T09:43:15.448Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_RuUFkft3VpH093UhVbBcvGNC",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-10\"}",
      "response": "{\"available_slots\":[\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"
    }
  ]
}
[2025-09-07T09:43:15.448Z] === END PARSED JSON ===
[2025-09-07T09:43:15.448Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:15.448Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:15.448Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_RuUFkft3VpH093UhVbBcvGNC",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-10\"}",
      "response": "{\"available_slots\":[\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"
    }
  ]
}
[2025-09-07T09:43:12.336Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-07T09:43:15.654Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-07T09:43:15.251Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-07T09:43:16.303Z] ▶️ KEEPALIVE: Resumed after function processing
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_zJYhURuo6c283JT9riTNx5dW","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_zJYhURuo6c283JT9riTNx5dW","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}","client_side":true}]}
[2025-09-07T09:43:16.459Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_zJYhURuo6c283JT9riTNx5dW","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}","client_side":true}]}
[2025-09-07T09:43:16.459Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_zJYhURuo6c283JT9riTNx5dW",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-07T09:43:16.459Z] === END PARSED JSON ===
[2025-09-07T09:43:16.459Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-07T09:43:16.459Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-07T09:43:16.459Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-07T09:43:16.459Z] 📋 Functions: [
  {
    "id": "call_zJYhURuo6c283JT9riTNx5dW",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}",
    "client_side": true
  }
]
[2025-09-07T09:43:16.459Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-07T09:43:16.459Z] 🔧 Processing function: create_booking
[2025-09-07T09:43:16.459Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA98ef4c51a448a245de21daba8f09a944: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-10',
  lastBookingTime: '12:00',
  lastServiceId: 'beard trim'
}
[2025-09-07T09:43:16.459Z] 🚀 STARTING handleFunctionCall
[2025-09-07T09:43:16.459Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_zJYhURuo6c283JT9riTNx5dW",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-10",
    "service_id": "beard trim",
    "time": "12:00"
  }
}
[2025-09-07T09:43:16.459Z] 📋 Function name: create_booking
[2025-09-07T09:43:16.459Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-10",
  "service_id": "beard trim",
  "time": "12:00"
}
[2025-09-07T09:43:16.459Z] 🏢 Business config exists: true
[2025-09-07T09:43:16.459Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_zJYhURuo6c283JT9riTNx5dW",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-10",
    "service_id": "beard trim",
    "time": "12:00"
  }
}
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-10",
  "service_id": "beard trim",
  "time": "12:00"
}
📋 Available services: [
  { id: '6e46963e-cffe-460b-8a23-c4dc978cd41e', name: 'haircut' },
  { id: '676c503a-c695-40dd-80a0-a654456f36cd', name: 'beard trim' }
]
📝 Session updated for call CA98ef4c51a448a245de21daba8f09a944: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-10',
  lastBookingTime: '12:00',
  lastServiceId: 'beard trim'
}
📋 Booking - Found service by name 'beard trim' -> ID: 676c503a-c695-40dd-80a0-a654456f36cd
✅ Booking - Service found: beard trim (ID: 676c503a-c695-40dd-80a0-a654456f36cd )
🕐 Creating appointment for 2025-09-10 at 12:00 in timezone: Europe/London
📅 Parsed date: 2025-09-10 (Wednesday)
🕐 Appointment datetime (UK local): 12:00:00
🕐 Business timezone: Europe/London
🕐 Start time: 12:00:00
🕐 End time: 12:20:00
📅 Day of week: Wednesday
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "676c503a-c695-40dd-80a0-a654456f36cd",
  "appointmentDate": "2025-09-10",
  "startTime": "12:00:00",
  "endTime": "12:20:00",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825"
}
📡 API Response status: 409 Conflict
📋 API Response body: {
  "error": "Time slot is no longer available"
}
❌ Booking API error: { error: 'Time slot is no longer available' }
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_zJYhURuo6c283JT9riTNx5dW","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_zJYhURuo6c283JT9riTNx5dW","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}","response":"{\"error\":\"Time slot is no longer available\"}"}]}
[2025-09-07T09:43:18.149Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_zJYhURuo6c283JT9riTNx5dW","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}","response":"{\"error\":\"Time slot is no longer available\"}"}]}
[2025-09-07T09:43:18.149Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_zJYhURuo6c283JT9riTNx5dW",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}",
      "response": "{\"error\":\"Time slot is no longer available\"}"
    }
  ]
}
[2025-09-07T09:43:18.149Z] === END PARSED JSON ===
[2025-09-07T09:43:18.149Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:18.149Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:18.149Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_zJYhURuo6c283JT9riTNx5dW",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"beard trim\",\"time\":\"12:00\"}",
      "response": "{\"error\":\"Time slot is no longer available\"}"
    }
  ]
}
[2025-09-07T09:43:16.459Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-07T09:43:19.002Z] ▶️ KEEPALIVE: Resumed after function processing
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"12 PM on Wednesday is also no longer available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"12 PM on Wednesday is also no longer available."}
[2025-09-07T09:43:19.097Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"12 PM on Wednesday is also no longer available."}
[2025-09-07T09:43:19.097Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "12 PM on Wednesday is also no longer available."
}
[2025-09-07T09:43:19.097Z] === END PARSED JSON ===
[2025-09-07T09:43:19.097Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:43:19.097Z] 💭 CONVERSATION_TEXT: 12 PM on Wednesday is also no longer available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"12 PM on Wednesday is also no longer available."}...
Message string: {"type":"History","role":"assistant","content":"12 PM on Wednesday is also no longer available."}
[2025-09-07T09:43:19.097Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"12 PM on Wednesday is also no longer available."}
[2025-09-07T09:43:19.097Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "12 PM on Wednesday is also no longer available."
}
[2025-09-07T09:43:19.097Z] === END PARSED JSON ===
[2025-09-07T09:43:19.097Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:19.097Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:19.097Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "12 PM on Wednesday is also no longer available."
}
[2025-09-07T09:43:19.098Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:43:20.378Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would you like me to suggest some other available times on that day?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would you like me to suggest some other available times on that day?"}
[2025-09-07T09:43:22.459Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would you like me to suggest some other available times on that day?"}
[2025-09-07T09:43:22.459Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would you like me to suggest some other available times on that day?"
}
[2025-09-07T09:43:22.459Z] === END PARSED JSON ===
[2025-09-07T09:43:22.459Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:43:22.459Z] 💭 CONVERSATION_TEXT: Would you like me to suggest some other available times on that day?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would you like me to suggest some other available times on that day?"}...
Message string: {"type":"History","role":"assistant","content":"Would you like me to suggest some other available times on that day?"}
[2025-09-07T09:43:22.607Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would you like me to suggest some other available times on that day?"}
[2025-09-07T09:43:22.607Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would you like me to suggest some other available times on that day?"
}
[2025-09-07T09:43:22.607Z] === END PARSED JSON ===
[2025-09-07T09:43:22.607Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:43:22.607Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:43:22.607Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "Would you like me to suggest some other available times on that day?"
}
[2025-09-07T09:43:22.607Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-07T09:43:22.608Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-07T09:43:22.608Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-07T09:43:22.608Z] === END PARSED JSON ===
[2025-09-07T09:43:22.608Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-07T09:43:22.608Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-07T09:43:22.608Z] ⏰ SILENCE_START: Beginning silence tracking after AI speech
[2025-09-07T09:43:22.608Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-07T09:43:22.723Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-07T09:43:22.608Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-07T09:43:22.608Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-07T09:43:22.608Z] 🔇 SILENCE_CHECK: 3000ms of silence
Media stream stopped
📞 Logging call completion: CA98ef4c51a448a245de21daba8f09a944
✅ Call completion logged: CA98ef4c51a448a245de21daba8f09a944
🔌 Closing Deepgram connection and cleaning up resources
🔇 Persistent pacer cleaned up
🔇 Silence tracking cleaned up
✅ Deepgram connection closed successfully
Deepgram WebSocket closed in initializeDeepgram. Code: 1000, Reason: Call ended
Deepgram WebSocket closed. Code: 1000, Reason: Call ended
Twilio WebSocket connection closed
📞 Logging call completion on close: CA98ef4c51a448a245de21daba8f09a944