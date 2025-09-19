SON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that for you?"
}
[2025-09-18T15:28:02.619Z] === END PARSED JSON ===
[2025-09-18T15:28:02.619Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-18T15:28:02.619Z] 📜 HISTORY: Message logged
[2025-09-18T15:28:02.619Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Shall I confirm that for you?
[2025-09-18T15:28:02.619Z] 📝 Added transcript: [AI] Shall I confirm that for you?
[2025-09-18T15:28:02.620Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-18T15:28:02.620Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-18T15:28:02.620Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-18T15:28:02.620Z] === END PARSED JSON ===
[2025-09-18T15:28:02.620Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-18T15:28:02.620Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-18T15:28:02.620Z] 🔇 SILENCE: Started tracking
[2025-09-18T15:28:02.620Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-18T15:28:02.620Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-18T15:28:04.458Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-18T15:28:02.620Z] 🔇 SILENCE_CHECK: 2000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-18T15:28:05.604Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-18T15:28:05.604Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-18T15:28:05.604Z] === END PARSED JSON ===
[2025-09-18T15:28:05.604Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-18T15:28:05.604Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-18T15:28:05.604Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-18T15:28:05.604Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-18T15:28:05.924Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-18T15:28:05.924Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-18T15:28:05.924Z] === END PARSED JSON ===
[2025-09-18T15:28:05.924Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-18T15:28:05.924Z] 💭 CONVERSATION_TEXT: Yes.
[2025-09-18T15:28:05.924Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-18T15:28:05.934Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-18T15:28:05.934Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-18T15:28:05.934Z] === END PARSED JSON ===
[2025-09-18T15:28:05.934Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-18T15:28:05.934Z] 📜 HISTORY: Message logged
[2025-09-18T15:28:05.934Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes.
[2025-09-18T15:28:05.934Z] 📝 Added transcript: [User] Yes.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_gFNWso5rDSHukx7Hojewd35D","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"haircut\",\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_gFNWso5rDSHukx7Hojewd35D","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"haircut\",\"time\":\"12:00\"}","client_side":true}]}
[2025-09-18T15:28:07.239Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_gFNWso5rDSHukx7Hojewd35D","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"haircut\",\"time\":\"12:00\"}","client_side":true}]}
[2025-09-18T15:28:07.239Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_gFNWso5rDSHukx7Hojewd35D",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"haircut\",\"time\":\"12:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-18T15:28:07.239Z] === END PARSED JSON ===
[2025-09-18T15:28:07.239Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-18T15:28:07.239Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-18T15:28:07.239Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-18T15:28:07.239Z] 🕐 TIMING: Function call request received at 2025-09-18T15:28:07.239Z
[2025-09-18T15:28:07.239Z] 📊 FUNCTION COUNT: 1 functions in request
[2025-09-18T15:28:07.239Z] 📋 Functions: [
  {
    "id": "call_gFNWso5rDSHukx7Hojewd35D",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"haircut\",\"time\":\"12:00\"}",
    "client_side": true
  }
]
[2025-09-18T15:28:07.239Z] 🔍 FUNCTION 1:
[2025-09-18T15:28:07.239Z]   - Name: create_booking
[2025-09-18T15:28:07.239Z]   - ID: call_gFNWso5rDSHukx7Hojewd35D
[2025-09-18T15:28:07.239Z]   - Arguments: {"customer_name":"Marco","date":"2025-09-19","service_id":"haircut","time":"12:00"}
[2025-09-18T15:28:07.239Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-18T15:28:07.240Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-18T15:28:07.240Z] 🔧 Processing function: create_booking
[2025-09-18T15:28:07.240Z] 🆔 Function ID: call_gFNWso5rDSHukx7Hojewd35D
[2025-09-18T15:28:07.240Z] 📝 Function arguments: {"customer_name":"Marco","date":"2025-09-19","service_id":"haircut","time":"12:00"}
[2025-09-18T15:28:07.240Z] 📦 Created function call data: {
  "function_name": "create_booking",
  "function_call_id": "call_gFNWso5rDSHukx7Hojewd35D",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-19",
    "service_id": "haircut",
    "time": "12:00"
  }
}
[2025-09-18T15:28:07.240Z] 🔧 CALLING: handleFunctionCall for create_booking with ID call_gFNWso5rDSHukx7Hojewd35D...
📝 Session updated for call CAa952a78b3069db386c16d0ccd4ed3564: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-19',
  lastCheckedTimestamp: '2025-09-18T15:27:56.390Z'
}
[2025-09-18T15:28:07.240Z] 🚀 STARTING handleFunctionCall
[2025-09-18T15:28:07.240Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_gFNWso5rDSHukx7Hojewd35D",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-19",
    "service_id": "haircut",
    "time": "12:00"
  }
}
[2025-09-18T15:28:07.240Z] 📋 Function name: create_booking
[2025-09-18T15:28:07.240Z] 📊 Parameters: undefined
[2025-09-18T15:28:07.240Z] 🏢 Business config exists: true
[2025-09-18T15:28:07.240Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_gFNWso5rDSHukx7Hojewd35D",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-19",
    "service_id": "haircut",
    "time": "12:00"
  }
}
🔍 DEDUP CHECK: Checking function call ID call_gFNWso5rDSHukx7Hojewd35D
🔍 DEDUP CHECK: Current processed calls: []
🔍 DEDUP CHECK: Function parameters: {
  "customer_name": "Marco",
  "date": "2025-09-19",
  "service_id": "haircut",
  "time": "12:00"
}
🔍 DEDUP CHECK: Timestamp: 2025-09-18T15:28:07.240Z
✅ TRACKING: Added function call ID call_gFNWso5rDSHukx7Hojewd35D to processed set
✅ TRACKING: Updated processed calls: [ 'call_gFNWso5rDSHukx7Hojewd35D' ]
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-19",
  "service_id": "haircut",
  "time": "12:00"
}
📋 Available services: [
  { id: '89f199c8-c4ee-4f42-91a7-1f8bd70cff4a', name: 'haircut' },
  { id: '754eb430-291c-42b7-8f26-2d8a99828ee5', name: 'beard trim' }
]
📋 Booking - Found service by name 'haircut' -> ID: 89f199c8-c4ee-4f42-91a7-1f8bd70cff4a
✅ Booking - Service found: haircut (ID: 89f199c8-c4ee-4f42-91a7-1f8bd70cff4a )
📝 Session updated for call CAa952a78b3069db386c16d0ccd4ed3564: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-19',
  lastCheckedTimestamp: '2025-09-18T15:27:56.390Z',
  customerName: 'Marco',
  lastBookingDate: '2025-09-19',
  lastBookingTime: '12:00',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-19',
      time: '12:00',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: null,
      type: 'create'
    }
  ]
}
🕐 Creating appointment for 2025-09-19 at 12:00 in timezone: Europe/London
📅 Parsed date: 2025-09-19 (Friday)
🕐 Appointment datetime (UK local): 12:00
🕐 Business timezone: Europe/London
🕐 Start time: 12:00
🕐 End time: 12:30
📅 Day of week: Friday
🔍 Checking slot availability before booking...
📋 Availability check result: {
  "available": true,
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "89f199c8-c4ee-4f42-91a7-1f8bd70cff4a",
  "appointmentDate": "2025-09-19",
  "startTime": "12:00",
  "endTime": "12:30",
  "message": "Slot is available"
}
✅ Slot is available - proceeding with booking
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "89f199c8-c4ee-4f42-91a7-1f8bd70cff4a",
  "appointmentDate": "2025-09-19",
  "startTime": "12:00",
  "endTime": "12:30",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825",
  "sessionId": "CAa952a78b3069db386c16d0ccd4ed3564"
}
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "a0a6fc4d-9258-49d7-9366-8dcab543084b",
  "calendarEventId": "f3i9jg614o084sq5aft7ibgaqk",
  "fillerPhrase": "Alright, getting that scheduled for you...",
  "sessionId": "CAa952a78b3069db386c16d0ccd4ed3564"
}
✅ Appointment created successfully via API: a0a6fc4d-9258-49d7-9366-8dcab543084b
📅 Calendar event ID: f3i9jg614o084sq5aft7ibgaqk
📞 Updating call log with customer name: Marco
Failed to update call customer: {
  code: 'PGRST204',
  details: null,
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
}
✅ Call log updated with customer name: CAa952a78b3069db386c16d0ccd4ed3564
📝 Session updated for call CAa952a78b3069db386c16d0ccd4ed3564: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-19',
  lastCheckedTimestamp: '2025-09-18T15:27:56.390Z',
  customerName: 'Marco',
  lastBookingDate: '2025-09-19',
  lastBookingTime: '12:00',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-19',
      time: '12:00',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: 'a0a6fc4d-9258-49d7-9366-8dcab543084b',
      type: 'create'
    }
  ],
  lastAppointmentId: 'a0a6fc4d-9258-49d7-9366-8dcab543084b'
}
📋 Stored appointment ID in session: a0a6fc4d-9258-49d7-9366-8dcab543084b
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_gFNWso5rDSHukx7Hojewd35D","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_gFNWso5rDSHukx7Hojewd35D","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"haircut\",\"time\":\"12:00\"}","response":"{\"success\":true,\"appointment_id\":\"a0a6fc4d-9258-49d7-9366-8dcab543084b\",\"calendar_event_id\":\"f3i9jg614o084sq5aft7ibgaqk\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-19 at 12:00 for haircut. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"}]}
[2025-09-18T15:28:11.580Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_gFNWso5rDSHukx7Hojewd35D","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"haircut\",\"time\":\"12:00\"}","response":"{\"success\":true,\"appointment_id\":\"a0a6fc4d-9258-49d7-9366-8dcab543084b\",\"calendar_event_id\":\"f3i9jg614o084sq5aft7ibgaqk\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-19 at 12:00 for haircut. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"}]}
[2025-09-18T15:28:11.580Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_gFNWso5rDSHukx7Hojewd35D",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-19\",\"service_id\":\"haircut\",\"time\":\"12:00\"}",
      "response": "{\"success\":true,\"appointment_id\":\"a0a6fc4d-9258-49d7-9366-8dcab543084b\",\"calendar_event_id\":\"f3i9jg614o084sq5aft7ibgaqk\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-09-19 at 12:00 for haircut. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"
    }
  ]
}
[2025-09-18T15:28:11.580Z] === END PARSED JSON ===
[2025-09-18T15:28:11.580Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-18T15:28:11.580Z] 📜 HISTORY: Message logged
[2025-09-18T15:28:07.240Z] ✅ COMPLETED: handleFunctionCall for create_booking with ID call_gFNWso5rDSHukx7Hojewd35D (took 5188ms)
[2025-09-18T15:28:12.428Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-18T15:28:07.239Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-18T15:28:12.458Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th."}
[2025-09-18T15:28:12.732Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th."}
[2025-09-18T15:28:12.732Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th."
}
[2025-09-18T15:28:12.732Z] === END PARSED JSON ===
[2025-09-18T15:28:12.732Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-18T15:28:12.732Z] 💭 CONVERSATION_TEXT: Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th.
[2025-09-18T15:28:12.732Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th."}...
Message string: {"type":"History","role":"assistant","content":"Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th."}
[2025-09-18T15:28:12.732Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th."}
[2025-09-18T15:28:12.732Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Your appointment for a haircut is confirmed for 12 PM tomorrow, Friday, the 19th."
}
[2025-09-18T15:28:12.732Z] === END PARSED JSON ===
[2025-09-18T15:28:12.732Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-18T15:28:12.732Z] 📜 HISTORY: Message logged
[2025-09-18T15:28:12.732Z] 🔍 History role: 'assistant' 