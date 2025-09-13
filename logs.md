
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_rxu9NOi66zQ41urBfHZdBoXq","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425...
Message string: {"type":"History","function_calls":[{"id":"call_rxu9NOi66zQ41urBfHZdBoXq","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T09:25:55.056Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_rxu9NOi66zQ41urBfHZdBoXq","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T09:25:55.056Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_rxu9NOi66zQ41urBfHZdBoXq",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
      "response": "{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"
    }
  ]
}
[2025-09-13T09:25:55.056Z] === END PARSED JSON ===
[2025-09-13T09:25:55.056Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:25:55.056Z] 📜 HISTORY: Message logged
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Perfect, Marco!"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Perfect, Marco!"}
[2025-09-13T09:25:55.775Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Perfect, Marco!"}
[2025-09-13T09:25:55.775Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Perfect, Marco!"
}
[2025-09-13T09:25:55.775Z] === END PARSED JSON ===
[2025-09-13T09:25:55.775Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:25:55.775Z] 💭 CONVERSATION_TEXT: Perfect, Marco!
[2025-09-13T09:25:55.775Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Perfect, Marco!
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Perfect, Marco!"}...
Message string: {"type":"History","role":"assistant","content":"Perfect, Marco!"}
[2025-09-13T09:25:55.776Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Perfect, Marco!"}
[2025-09-13T09:25:55.776Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Perfect, Marco!"
}
[2025-09-13T09:25:55.776Z] === END PARSED JSON ===
[2025-09-13T09:25:55.776Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:25:55.776Z] 📜 HISTORY: Message logged
[2025-09-13T09:25:55.776Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Perfect, Marco!
[2025-09-13T09:25:55.776Z] 📝 Added transcript: [AI] Perfect, Marco!
[2025-09-13T09:25:55.776Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T09:25:52.197Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T09:25:55.905Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T09:25:52.197Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-13T09:25:56.116Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can book you for a haircut today at 3 PM."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can book you for a haircut today at 3 PM."}
[2025-09-13T09:25:57.057Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can book you for a haircut today at 3 PM."}
[2025-09-13T09:25:57.057Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can book you for a haircut today at 3 PM."
}
[2025-09-13T09:25:57.057Z] === END PARSED JSON ===
[2025-09-13T09:25:57.057Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:25:57.057Z] 💭 CONVERSATION_TEXT: I can book you for a haircut today at 3 PM.
[2025-09-13T09:25:57.057Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I can book you for a haircut today at 3 PM.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can book you for a haircut today at 3 PM."}...
Message string: {"type":"History","role":"assistant","content":"I can book you for a haircut today at 3 PM."}
[2025-09-13T09:25:57.058Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can book you for a haircut today at 3 PM."}
[2025-09-13T09:25:57.058Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can book you for a haircut today at 3 PM."
}
[2025-09-13T09:25:57.058Z] === END PARSED JSON ===
[2025-09-13T09:25:57.058Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:25:57.058Z] 📜 HISTORY: Message logged
[2025-09-13T09:25:57.058Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I can book you for a haircut today at 3 PM.
[2025-09-13T09:25:57.058Z] 📝 Added transcript: [AI] I can book you for a haircut today at 3 PM.
[2025-09-13T09:25:57.058Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T09:25:57.499Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T09:25:57.623Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T09:26:00.339Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T09:26:00.339Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-13T09:26:00.339Z] === END PARSED JSON ===
[2025-09-13T09:26:00.339Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:26:00.339Z] 💭 CONVERSATION_TEXT: Shall I confirm that?
[2025-09-13T09:26:00.339Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Shall I confirm that?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I confirm that?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T09:26:00.339Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T09:26:00.339Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-13T09:26:00.339Z] === END PARSED JSON ===
[2025-09-13T09:26:00.339Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:26:00.339Z] 📜 HISTORY: Message logged
[2025-09-13T09:26:00.339Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Shall I confirm that?
[2025-09-13T09:26:00.339Z] 📝 Added transcript: [AI] Shall I confirm that?
[2025-09-13T09:26:00.340Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T09:26:00.340Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T09:26:00.340Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T09:26:00.340Z] === END PARSED JSON ===
[2025-09-13T09:26:00.340Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T09:26:00.340Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T09:26:00.340Z] 🔇 SILENCE: Started tracking
[2025-09-13T09:26:00.340Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T09:26:01.271Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T09:26:01.271Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T09:26:01.271Z] === END PARSED JSON ===
[2025-09-13T09:26:01.271Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T09:26:01.271Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T09:26:01.271Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T09:26:01.271Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"PM."}...
Message string: {"type":"ConversationText","role":"user","content":"PM."}
[2025-09-13T09:26:01.283Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"PM."}
[2025-09-13T09:26:01.283Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "PM."
}
[2025-09-13T09:26:01.283Z] === END PARSED JSON ===
[2025-09-13T09:26:01.283Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:26:01.283Z] 💭 CONVERSATION_TEXT: PM.
[2025-09-13T09:26:01.283Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: PM.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"PM."}...
Message string: {"type":"History","role":"user","content":"PM."}
[2025-09-13T09:26:01.283Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"PM."}
[2025-09-13T09:26:01.283Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "PM."
}
[2025-09-13T09:26:01.283Z] === END PARSED JSON ===
[2025-09-13T09:26:01.283Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:26:01.283Z] 📜 HISTORY: Message logged
[2025-09-13T09:26:01.283Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: PM.
[2025-09-13T09:26:01.283Z] 📝 Added transcript: [User] PM.
[2025-09-13T09:26:01.499Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_pjs3hBHSkhdwRDjSZeBNkNeG","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa8...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_pjs3hBHSkhdwRDjSZeBNkNeG","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T09:26:02.474Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_pjs3hBHSkhdwRDjSZeBNkNeG","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T09:26:02.474Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_pjs3hBHSkhdwRDjSZeBNkNeG",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T09:26:02.474Z] === END PARSED JSON ===
[2025-09-13T09:26:02.474Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T09:26:02.474Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T09:26:02.474Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T09:26:02.474Z] 📋 Functions: [
  {
    "id": "call_pjs3hBHSkhdwRDjSZeBNkNeG",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
    "client_side": true
  }
]
[2025-09-13T09:26:02.474Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T09:26:02.474Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T09:26:02.474Z] 🔧 Processing function: create_booking
[2025-09-13T09:26:02.474Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA1bc4daac7ee7be22cc8ffee77e091bc7: { callerPhone: '+447468306825' }
[2025-09-13T09:26:02.474Z] 🚀 STARTING handleFunctionCall
[2025-09-13T09:26:02.474Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_pjs3hBHSkhdwRDjSZeBNkNeG",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "15:00"
  }
}
[2025-09-13T09:26:02.474Z] 📋 Function name: create_booking
[2025-09-13T09:26:02.474Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "15:00"
}
[2025-09-13T09:26:02.474Z] 🏢 Business config exists: true
[2025-09-13T09:26:02.474Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_pjs3hBHSkhdwRDjSZeBNkNeG",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "15:00"
  }
}
✅ TRACKING: Added function call ID call_pjs3hBHSkhdwRDjSZeBNkNeG to processed set
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "15:00"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CA1bc4daac7ee7be22cc8ffee77e091bc7: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: '4395775e-fa81-4a69-8425-e46c3853dea4',
  lastServiceName: 'haircut',
  lastServiceDuration: 30
}
🕐 Creating appointment for 2025-09-13 at 15:00 in timezone: Europe/London
📅 Parsed date: 2025-09-13 (Saturday)
🕐 Appointment datetime (UK local): 15:00:00
🕐 Business timezone: Europe/London
🕐 Start time: 15:00:00
🕐 End time: 15:30:00
📅 Day of week: Saturday
🔍 Checking slot availability before booking...
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T09:26:03.191Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T09:26:03.191Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T09:26:03.191Z] === END PARSED JSON ===
[2025-09-13T09:26:03.191Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T09:26:03.191Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T09:26:03.191Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T09:26:03.191Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📋 Availability check result: {
  "available": true,
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-13",
  "startTime": "15:00:00",
  "endTime": "15:30:00",
  "message": "Slot is available"
}
✅ Slot is available - proceeding with booking
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-13",
  "startTime": "15:00:00",
  "endTime": "15:30:00",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825"
}
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"What about today at two PM?"}...
Message string: {"type":"ConversationText","role":"user","content":"What about today at two PM?"}
[2025-09-13T09:26:05.115Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"What about today at two PM?"}
[2025-09-13T09:26:05.115Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "What about today at two PM?"
}
[2025-09-13T09:26:05.115Z] === END PARSED JSON ===
[2025-09-13T09:26:05.115Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:26:05.115Z] 💭 CONVERSATION_TEXT: What about today at two PM?
[2025-09-13T09:26:05.115Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: What about today at two PM?
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"What about today at two PM?"}...
Message string: {"type":"History","role":"user","content":"What about today at two PM?"}
[2025-09-13T09:26:05.123Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"What about today at two PM?"}
[2025-09-13T09:26:05.123Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "What about today at two PM?"
}
[2025-09-13T09:26:05.123Z] === END PARSED JSON ===
[2025-09-13T09:26:05.123Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:26:05.123Z] 📜 HISTORY: Message logged
[2025-09-13T09:26:05.123Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: What about today at two PM?
[2025-09-13T09:26:05.123Z] 📝 Added transcript: [User] What about today at two PM?
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "3bd9f678-8cb5-4dcd-a0cb-8282502ae8c7",
  "calendarEventId": "02spvsugkqavu5rlkq9souat34"
}
✅ Appointment created successfully via API: 3bd9f678-8cb5-4dcd-a0cb-8282502ae8c7
📅 Calendar event ID: 02spvsugkqavu5rlkq9souat34
📞 Updating call log with customer name: Marco
Failed to update call customer: {
✅ Call log updated with customer name: CA1bc4daac7ee7be22cc8ffee77e091bc7
  code: 'PGRST204',
📝 Session updated for call CA1bc4daac7ee7be22cc8ffee77e091bc7: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: '4395775e-fa81-4a69-8425-e46c3853dea4',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: '3bd9f678-8cb5-4dcd-a0cb-8282502ae8c7'
}
📋 Stored appointment ID in session: 3bd9f678-8cb5-4dcd-a0cb-8282502ae8c7
  details: null,
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
}
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_AqyiwpslDXFVXirebNqt6IIJ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_AqyiwpslDXFVXirebNqt6IIJ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","client_side":true}]}
[2025-09-13T09:26:06.439Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_AqyiwpslDXFVXirebNqt6IIJ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","client_side":true}]}
[2025-09-13T09:26:06.439Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_AqyiwpslDXFVXirebNqt6IIJ",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T09:26:06.439Z] === END PARSED JSON ===
[2025-09-13T09:26:06.439Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T09:26:06.439Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T09:26:06.439Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T09:26:06.439Z] 📋 Functions: [
  {
    "id": "call_AqyiwpslDXFVXirebNqt6IIJ",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
    "client_side": true
  }
]
[2025-09-13T09:26:06.439Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T09:26:06.440Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T09:26:06.439Z] 🔧 Processing function: get_available_slots
[2025-09-13T09:26:06.439Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA1bc4daac7ee7be22cc8ffee77e091bc7: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: '4395775e-fa81-4a69-8425-e46c3853dea4',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: '3bd9f678-8cb5-4dcd-a0cb-8282502ae8c7'
}
[2025-09-13T09:26:06.440Z] 🚀 STARTING handleFunctionCall
[2025-09-13T09:26:06.440Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_AqyiwpslDXFVXirebNqt6IIJ",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
  }
}
[2025-09-13T09:26:06.440Z] 📋 Function name: get_available_slots
[2025-09-13T09:26:06.440Z] 📊 Parameters: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T09:26:06.440Z] 🏢 Business config exists: true
[2025-09-13T09:26:06.440Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_AqyiwpslDXFVXirebNqt6IIJ",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
  }
}
[2025-09-13T09:26:06.440Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T09:26:06.440Z] 🏢 Business config: Gents Barbershop
[2025-09-13T09:26:06.440Z] 📋 Services count: 2
[2025-09-13T09:26:06.440Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-13T09:26:06.440Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
📅 Business open on Saturday
📋 Using service: haircut (Duration: 30 minutes)
[2025-09-13T09:26:06.440Z] 🌐 About to make API call:
[2025-09-13T09:26:06.440Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/availability?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-13
[2025-09-13T09:26:06.440Z] 🔑 Secret exists: true
[2025-09-13T09:26:06.440Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-13T09:26:06.440Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-13T09:26:06.440Z] 📅 Date: 2025-09-13
[2025-09-13T09:26:02.474Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T09:26:06.966Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T09:26:02.474Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-13T09:26:06.440Z] 📡 API Response status: 200
[2025-09-13T09:26:06.440Z] 📡 API Response ok: true
[2025-09-13T09:26:06.440Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-13T12:00:00.000Z",
      "end": "2025-09-13T12:30:00.000Z",
      "startTime": "12:00",
      "endTime": "12:30"
    },
    {
      "start": "2025-09-13T12:15:00.000Z",
      "end": "2025-09-13T12:45:00.000Z",
      "startTime": "12:15",
      "endTime": "12:45"
    },
    {
      "start": "2025-09-13T12:30:00.000Z",
      "end": "2025-09-13T13:00:00.000Z",
      "startTime": "12:30",
      "endTime": "13:00"
    },
    {
      "start": "2025-09-13T12:45:00.000Z",
      "end": "2025-09-13T13:15:00.000Z",
      "startTime": "12:45",
      "endTime": "13:15"
    },
    {
      "start": "2025-09-13T13:00:00.000Z",
      "end": "2025-09-13T13:30:00.000Z",
      "startTime": "13:00",
      "endTime": "13:30"
    },
    {
      "start": "2025-09-13T13:15:00.000Z",
      "end": "2025-09-13T13:45:00.000Z",
      "startTime": "13:15",
      "endTime": "13:45"
    },
    {
      "start": "2025-09-13T13:30:00.000Z",
      "end": "2025-09-13T14:00:00.000Z",
      "startTime": "13:30",
      "endTime": "14:00"
    },
    {
      "start": "2025-09-13T14:45:00.000Z",
      "end": "2025-09-13T15:15:00.000Z",
      "startTime": "14:45",
      "endTime": "15:15"
    },
    {
      "start": "2025-09-13T15:00:00.000Z",
      "end": "2025-09-13T15:30:00.000Z",
      "startTime": "15:00",
      "endTime": "15:30"
    },
    {
      "start": "2025-09-13T15:15:00.000Z",
      "end": "2025-09-13T15:45:00.000Z",
      "startTime": "15:15",
      "endTime": "15:45"
    },
    {
      "start": "2025-09-13T15:30:00.000Z",
      "end": "2025-09-13T16:00:00.000Z",
      "startTime": "15:30",
      "endTime": "16:00"
    }
  ],
  "date": "2025-09-13",
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T09:26:06.440Z] 📊 Response type: object
[2025-09-13T09:26:06.440Z] 📊 Has slots: true
[2025-09-13T09:26:06.440Z] 📊 Slots count: 11
✅ Available time slots: [
  '12:00', '12:15',
  '12:30', '12:45',
  '13:00', '13:15',
  '13:30', '14:45',
  '15:00', '15:15',
  '15:30'
]
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_AqyiwpslDXFVXirebNqt6IIJ","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425...
Message string: {"type":"History","function_calls":[{"id":"call_AqyiwpslDXFVXirebNqt6IIJ","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T09:26:07.407Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_AqyiwpslDXFVXirebNqt6IIJ","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T09:26:07.407Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_AqyiwpslDXFVXirebNqt6IIJ",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
      "response": "{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"
    }
  ]
}
[2025-09-13T09:26:07.407Z] === END PARSED JSON ===
[2025-09-13T09:26:07.407Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:26:07.407Z] 📜 HISTORY: Message logged
[2025-09-13T09:26:06.439Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T09:26:08.256Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T09:26:06.439Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Two PM today is not available, but I do have 2:45 PM or 3 PM open."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Two PM today is not available, but I do have 2:45 PM or 3 PM open."}
[2025-09-13T09:26:08.467Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Two PM today is not available, but I do have 2:45 PM or 3 PM open."}
[2025-09-13T09:26:08.467Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Two PM today is not available, but I do have 2:45 PM or 3 PM open."
}
[2025-09-13T09:26:08.467Z] === END PARSED JSON ===
[2025-09-13T09:26:08.467Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:26:08.467Z] 💭 CONVERSATION_TEXT: Two PM today is not available, but I do have 2:45 PM or 3 PM open.
[2025-09-13T09:26:08.467Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Two PM today is not available, but I do have 2:45 PM or 3 PM open.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Two PM today is not available, but I do have 2:45 PM or 3 PM open."}...
Message string: {"type":"History","role":"assistant","content":"Two PM today is not available, but I do have 2:45 PM or 3 PM open."}
[2025-09-13T09:26:08.468Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Two PM today is not available, but I do have 2:45 PM or 3 PM open."}
[2025-09-13T09:26:08.468Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Two PM today is not available, but I do have 2:45 PM or 3 PM open."
}
[2025-09-13T09:26:08.468Z] === END PARSED JSON ===
[2025-09-13T09:26:08.468Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:26:08.468Z] 📜 HISTORY: Message logged
[2025-09-13T09:26:08.468Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Two PM today is not available, but I do have 2:45 PM or 3 PM open.
[2025-09-13T09:26:08.468Z] 📝 Added transcript: [AI] Two PM today is not available, but I do have 2:45 PM or 3 PM open.
[2025-09-13T09:26:08.468Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T09:26:09.499Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T09:26:11.260Z] 🔇 Audio stream ended (timeout)