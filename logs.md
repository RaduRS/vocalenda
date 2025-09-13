8:56.115Z] 💭 CONVERSATION_TEXT: Okay.
[2025-09-13T11:08:56.115Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Okay.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Okay."}...
Message string: {"type":"History","role":"user","content":"Okay."}
[2025-09-13T11:08:56.128Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Okay."}
[2025-09-13T11:08:56.128Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Okay."
}
[2025-09-13T11:08:56.128Z] === END PARSED JSON ===
[2025-09-13T11:08:56.128Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:08:56.128Z] 📜 HISTORY: Message logged
[2025-09-13T11:08:56.128Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Okay.
[2025-09-13T11:08:56.128Z] 📝 Added transcript: [User] Okay.
[2025-09-13T11:08:56.781Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_MWlFBgr3gBFVZrgzLRvDShJh","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_MWlFBgr3gBFVZrgzLRvDShJh","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}","client_side":true}]}
[2025-09-13T11:08:57.207Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_MWlFBgr3gBFVZrgzLRvDShJh","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}","client_side":true}]}
[2025-09-13T11:08:57.207Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_MWlFBgr3gBFVZrgzLRvDShJh",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T11:08:57.207Z] === END PARSED JSON ===
[2025-09-13T11:08:57.207Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T11:08:57.207Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T11:08:57.207Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T11:08:57.207Z] 📋 Functions: [
  {
    "id": "call_MWlFBgr3gBFVZrgzLRvDShJh",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}",
    "client_side": true
  }
]
[2025-09-13T11:08:57.207Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T11:08:57.207Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T11:08:57.207Z] 🔧 Processing function: create_booking
[2025-09-13T11:08:57.207Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CAee20755c8862544cb2a3179e6ab083a2: { callerPhone: '+447468306825' }
[2025-09-13T11:08:57.207Z] 🚀 STARTING handleFunctionCall
[2025-09-13T11:08:57.207Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_MWlFBgr3gBFVZrgzLRvDShJh",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-16",
    "service_id": "haircut",
    "time": "12:30"
  }
}
[2025-09-13T11:08:57.207Z] 📋 Function name: create_booking
[2025-09-13T11:08:57.207Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-16",
  "service_id": "haircut",
  "time": "12:30"
}
[2025-09-13T11:08:57.207Z] 🏢 Business config exists: true
[2025-09-13T11:08:57.207Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_MWlFBgr3gBFVZrgzLRvDShJh",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-16",
    "service_id": "haircut",
    "time": "12:30"
  }
}
✅ TRACKING: Added function call ID call_MWlFBgr3gBFVZrgzLRvDShJh to processed set
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-16",
  "service_id": "haircut",
  "time": "12:30"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
📋 Booking - Found service by name 'haircut' -> ID: 4395775e-fa81-4a69-8425-e46c3853dea4
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CAee20755c8862544cb2a3179e6ab083a2: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-16',
  lastBookingTime: '12:30',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30
}
🕐 Creating appointment for 2025-09-16 at 12:30 in timezone: Europe/London
📅 Parsed date: 2025-09-16 (Tuesday)
🕐 Appointment datetime (UK local): 12:30:00
🕐 Business timezone: Europe/London
🕐 Start time: 12:30:00
🕐 End time: 13:00:00
📅 Day of week: Tuesday
🔍 Checking slot availability before booking...
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T11:08:57.296Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T11:08:57.296Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T11:08:57.296Z] === END PARSED JSON ===
[2025-09-13T11:08:57.296Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T11:08:57.296Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T11:08:57.296Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T11:08:57.296Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📋 Availability check result: {
  "available": true,
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-16",
  "startTime": "12:30:00",
  "endTime": "13:00:00",
  "message": "Slot is available"
}
✅ Slot is available - proceeding with booking
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-16",
  "startTime": "12:30:00",
  "endTime": "13:00:00",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825"
}
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "52235a45-c3d7-415b-a99a-0860a923d321",
  "calendarEventId": "654sdj2jdt4b0mk5uupn1rv2jc"
}
✅ Appointment created successfully via API: 52235a45-c3d7-415b-a99a-0860a923d321
📅 Calendar event ID: 654sdj2jdt4b0mk5uupn1rv2jc
📞 Updating call log with customer name: Marco
Failed to update call customer: {
  code: 'PGRST204',
✅ Call log updated with customer name: CAee20755c8862544cb2a3179e6ab083a2
  details: null,
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
📝 Session updated for call CAee20755c8862544cb2a3179e6ab083a2: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-16',
  lastBookingTime: '12:30',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: '52235a45-c3d7-415b-a99a-0860a923d321'
}
📋 Stored appointment ID in session: 52235a45-c3d7-415b-a99a-0860a923d321
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
}
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Twelve thirty PM. Let's do it."}...
Message string: {"type":"ConversationText","role":"user","content":"Twelve thirty PM. Let's do it."}
[2025-09-13T11:09:01.395Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Twelve thirty PM. Let's do it."}
[2025-09-13T11:09:01.395Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Twelve thirty PM. Let's do it."
}
[2025-09-13T11:09:01.395Z] === END PARSED JSON ===
[2025-09-13T11:09:01.395Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T11:09:01.395Z] 💭 CONVERSATION_TEXT: Twelve thirty PM. Let's do it.
[2025-09-13T11:09:01.395Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Twelve thirty PM. Let's do it.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Twelve thirty PM. Let's do it."}...
Message string: {"type":"History","role":"user","content":"Twelve thirty PM. Let's do it."}
[2025-09-13T11:09:01.408Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Twelve thirty PM. Let's do it."}
[2025-09-13T11:09:01.408Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Twelve thirty PM. Let's do it."
}
[2025-09-13T11:09:01.408Z] === END PARSED JSON ===
[2025-09-13T11:09:01.408Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:09:01.408Z] 📜 HISTORY: Message logged
[2025-09-13T11:09:01.408Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Twelve thirty PM. Let's do it.
[2025-09-13T11:09:01.408Z] 📝 Added transcript: [User] Twelve thirty PM. Let's do it.
[2025-09-13T11:08:57.207Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T11:09:01.972Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T11:08:57.207Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_yW8uW0pI5JdETRGpgzChNW89","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_yW8uW0pI5JdETRGpgzChNW89","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}","client_side":true}]}
[2025-09-13T11:09:02.418Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_yW8uW0pI5JdETRGpgzChNW89","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}","client_side":true}]}
[2025-09-13T11:09:02.418Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_yW8uW0pI5JdETRGpgzChNW89",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T11:09:02.418Z] === END PARSED JSON ===
[2025-09-13T11:09:02.418Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T11:09:02.418Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T11:09:02.418Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T11:09:02.418Z] 📋 Functions: [
  {
    "id": "call_yW8uW0pI5JdETRGpgzChNW89",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}",
    "client_side": true
  }
]
[2025-09-13T11:09:02.418Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T11:09:02.419Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T11:09:02.418Z] 🔧 Processing function: create_booking
[2025-09-13T11:09:02.418Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CAee20755c8862544cb2a3179e6ab083a2: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-16',
  lastBookingTime: '12:30',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: '52235a45-c3d7-415b-a99a-0860a923d321'
}
[2025-09-13T11:09:02.419Z] 🚀 STARTING handleFunctionCall
[2025-09-13T11:09:02.419Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_yW8uW0pI5JdETRGpgzChNW89",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-16",
    "service_id": "haircut",
    "time": "12:30"
  }
}
[2025-09-13T11:09:02.419Z] 📋 Function name: create_booking
[2025-09-13T11:09:02.419Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-16",
  "service_id": "haircut",
  "time": "12:30"
}
[2025-09-13T11:09:02.419Z] 🏢 Business config exists: true
[2025-09-13T11:09:02.419Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_yW8uW0pI5JdETRGpgzChNW89",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-16",
    "service_id": "haircut",
    "time": "12:30"
  }
}
✅ TRACKING: Added function call ID call_yW8uW0pI5JdETRGpgzChNW89 to processed set
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-16",
  "service_id": "haircut",
  "time": "12:30"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
📋 Booking - Found service by name 'haircut' -> ID: 4395775e-fa81-4a69-8425-e46c3853dea4
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CAee20755c8862544cb2a3179e6ab083a2: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-16',
  lastBookingTime: '12:30',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: '52235a45-c3d7-415b-a99a-0860a923d321'
}
🕐 Creating appointment for 2025-09-16 at 12:30 in timezone: Europe/London
📅 Parsed date: 2025-09-16 (Tuesday)
🕐 Appointment datetime (UK local): 12:30:00
🕐 Business timezone: Europe/London
🕐 Start time: 12:30:00
🕐 End time: 13:00:00
📅 Day of week: Tuesday
🔍 Checking slot availability before booking...
📋 Availability check result: {
  "available": false,
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-16",
  "startTime": "12:30:00",
  "endTime": "13:00:00",
  "message": "Slot is not available - conflicts with existing appointment"
}
❌ Slot not available - preventing double booking
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_yW8uW0pI5JdETRGpgzChNW89","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_yW8uW0pI5JdETRGpgzChNW89","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}","response":"{\"error\":\"Sorry, the 12:30 slot on 2025-09-16 is no longer available. Please choose a different time.\"}"}]}
[2025-09-13T11:09:03.495Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_yW8uW0pI5JdETRGpgzChNW89","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}","response":"{\"error\":\"Sorry, the 12:30 slot on 2025-09-16 is no longer available. Please choose a different time.\"}"}]}
[2025-09-13T11:09:03.495Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_yW8uW0pI5JdETRGpgzChNW89",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:30\"}",
      "response": "{\"error\":\"Sorry, the 12:30 slot on 2025-09-16 is no longer available. Please choose a different time.\"}"
    }
  ]
}
[2025-09-13T11:09:03.495Z] === END PARSED JSON ===
[2025-09-13T11:09:03.495Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:09:03.495Z] 📜 HISTORY: Message logged
[2025-09-13T11:09:02.418Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T11:09:04.344Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T11:09:02.418Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available."}
[2025-09-13T11:09:04.687Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available."}
[2025-09-13T11:09:04.687Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available."
}
[2025-09-13T11:09:04.687Z] === END PARSED JSON ===
[2025-09-13T11:09:04.687Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T11:09:04.687Z] 💭 CONVERSATION_TEXT: It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available.
[2025-09-13T11:09:04.687Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available."}...
Message string: {"type":"History","role":"assistant","content":"It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available."}
[2025-09-13T11:09:04.687Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available."}
[2025-09-13T11:09:04.687Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available."
}
[2025-09-13T11:09:04.687Z] === END PARSED JSON ===
[2025-09-13T11:09:04.687Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:09:04.687Z] 📜 HISTORY: Message logged
[2025-09-13T11:09:04.687Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available.
[2025-09-13T11:09:04.687Z] 📝 Added transcript: [AI] It seems the 12:30 PM slot on Tuesday, September 16th, just got booked and is no longer available.
[2025-09-13T11:09:04.687Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T11:09:04.781Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T11:09:07.905Z] 🔇 Audio stream ended (timeout)
[2025-09-13T11:09:08.781Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"The next closest available time is 12:45 PM."}...
Message string: {"type":"ConversationText","role":"assistant","content":"The next closest available time is 12:45 PM."}
[2025-09-13T11:09:12.249Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"The next closest available time is 12:45 PM."}
[2025-09-13T11:09:12.249Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "The next closest available time is 12:45 PM."
}
[2025-09-13T11:09:12.249Z] === END PARSED JSON ===
[2025-09-13T11:09:12.249Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T11:09:12.249Z] 💭 CONVERSATION_TEXT: The next closest available time is 12:45 PM.
[2025-09-13T11:09:12.249Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: The next closest available time is 12:45 PM.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"The next closest available time is 12:45 PM."}...
Message string: {"type":"History","role":"assistant","content":"The next closest available time is 12:45 PM."}
[2025-09-13T11:09:12.401Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"The next closest available time is 12:45 PM."}
[2025-09-13T11:09:12.401Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "The next closest available time is 12:45 PM."
}
[2025-09-13T11:09:12.401Z] === END PARSED JSON ===
[2025-09-13T11:09:12.401Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:09:12.401Z] 📜 HISTORY: Message logged
[2025-09-13T11:09:12.401Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: The next closest available time is 12:45 PM.
[2025-09-13T11:09:12.401Z] 📝 Added transcript: [AI] The next closest available time is 12:45 PM.
[2025-09-13T11:09:12.401Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T11:09:12.781Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T11:09:12.402Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would you like to book your haircut then?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would you like to book your haircut then?"}
[2025-09-13T11:09:16.251Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would you like to book your haircut then?"}
[2025-09-13T11:09:16.251Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would you like to book your haircut then?"
}
[2025-09-13T11:09:16.251Z] === END PARSED JSON ===
[2025-09-13T11:09:16.251Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T11:09:16.251Z] 💭 CONVERSATION_TEXT: Would you like to book your haircut then?
[2025-09-13T11:09:16.251Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Would you like to book your haircut then?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would you like to book your haircut then?"}...
Message string: {"type":"History","role":"assistant","content":"Would you like to book your haircut then?"}
[2025-09-13T11:09:16.403Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would you like to book your haircut then?"}
[2025-09-13T11:09:16.403Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would you like to book your haircut then?"
}
[2025-09-13T11:09:16.403Z] === END PARSED JSON ===
[2025-09-13T11:09:16.403Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:09:16.403Z] 📜 HISTORY: Message logged
[2025-09-13T11:09:16.403Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Would you like to book your haircut then?
[2025-09-13T11:09:16.403Z] 📝 Added transcript: [AI] Would you like to book your haircut then?
[2025-09-13T11:09:16.403Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T11:09:16.404Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T11:09:16.404Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T11:09:16.404Z] === END PARSED JSON ===
[2025-09-13T11:09:16.404Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T11:09:16.404Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T11:09:16.404Z] 🔇 SILENCE: Started tracking
[2025-09-13T11:09:16.404Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T11:09:16.781Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T11:09:16.404Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T11:09:16.404Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-13T11:09:16.404Z] 🔇 SILENCE_CHECK: 3000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T11:09:19.856Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T11:09:19.856Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T11:09:19.856Z] === END PARSED JSON ===
[2025-09-13T11:09:19.856Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T11:09:19.856Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T11:09:19.856Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T11:09:19.856Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T11:09:20.236Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T11:09:20.236Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T11:09:20.236Z] === END PARSED JSON ===
[2025-09-13T11:09:20.236Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T11:09:20.236Z] 💭 CONVERSATION_TEXT: Yes.
[2025-09-13T11:09:20.236Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T11:09:20.248Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T11:09:20.248Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T11:09:20.248Z] === END PARSED JSON ===
[2025-09-13T11:09:20.248Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:09:20.248Z] 📜 HISTORY: Message logged
[2025-09-13T11:09:20.248Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes.
[2025-09-13T11:09:20.248Z] 📝 Added transcript: [User] Yes.
[2025-09-13T11:09:20.781Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_WBq4lEVznriqSPXEvhZKAV91","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_WBq4lEVznriqSPXEvhZKAV91","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:45\"}","client_side":true}]}
[2025-09-13T11:09:21.397Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_WBq4lEVznriqSPXEvhZKAV91","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:45\"}","client_side":true}]}
[2025-09-13T11:09:21.397Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_WBq4lEVznriqSPXEvhZKAV91",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:45\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T11:09:21.397Z] === END PARSED JSON ===
[2025-09-13T11:09:21.397Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T11:09:21.397Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T11:09:21.397Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T11:09:21.397Z] 📋 Functions: [
  {
    "id": "call_WBq4lEVznriqSPXEvhZKAV91",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:45\"}",
    "client_side": true
  }
]
[2025-09-13T11:09:21.397Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T11:09:21.397Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T11:09:21.397Z] 🔧 Processing function: create_booking
[2025-09-13T11:09:21.397Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CAee20755c8862544cb2a3179e6ab083a2: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-16',
  lastBookingTime: '12:30',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: '52235a45-c3d7-415b-a99a-0860a923d321'
}
[2025-09-13T11:09:21.397Z] 🚀 STARTING handleFunctionCall
[2025-09-13T11:09:21.397Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_WBq4lEVznriqSPXEvhZKAV91",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-16",
    "service_id": "haircut",
    "time": "12:45"
  }
}
[2025-09-13T11:09:21.397Z] 📋 Function name: create_booking
[2025-09-13T11:09:21.397Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-16",
  "service_id": "haircut",
  "time": "12:45"
}
[2025-09-13T11:09:21.397Z] 🏢 Business config exists: true
[2025-09-13T11:09:21.397Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_WBq4lEVznriqSPXEvhZKAV91",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-16",
    "service_id": "haircut",
    "time": "12:45"
  }
}
✅ TRACKING: Added function call ID call_WBq4lEVznriqSPXEvhZKAV91 to processed set
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-16",
  "service_id": "haircut",
  "time": "12:45"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
📋 Booking - Found service by name 'haircut' -> ID: 4395775e-fa81-4a69-8425-e46c3853dea4
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CAee20755c8862544cb2a3179e6ab083a2: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-16',
  lastBookingTime: '12:45',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: '52235a45-c3d7-415b-a99a-0860a923d321'
}
🕐 Creating appointment for 2025-09-16 at 12:45 in timezone: Europe/London
📅 Parsed date: 2025-09-16 (Tuesday)
🕐 Appointment datetime (UK local): 12:45:00
🕐 Business timezone: Europe/London
🕐 Start time: 12:45:00
🕐 End time: 13:15:00
📅 Day of week: Tuesday
🔍 Checking slot availability before booking...
📋 Availability check result: {
  "available": false,
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-16",
  "startTime": "12:45:00",
  "endTime": "13:15:00",
  "message": "Slot is not available - conflicts with existing appointment"
}
❌ Slot not available - preventing double booking
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_WBq4lEVznriqSPXEvhZKAV91","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_WBq4lEVznriqSPXEvhZKAV91","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:45\"}","response":"{\"error\":\"Sorry, the 12:45 slot on 2025-09-16 is no longer available. Please choose a different time.\"}"}]}
[2025-09-13T11:09:22.351Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_WBq4lEVznriqSPXEvhZKAV91","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:45\"}","response":"{\"error\":\"Sorry, the 12:45 slot on 2025-09-16 is no longer available. Please choose a different time.\"}"}]}
[2025-09-13T11:09:22.351Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_WBq4lEVznriqSPXEvhZKAV91",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-16\",\"service_id\":\"haircut\",\"time\":\"12:45\"}",
      "response": "{\"error\":\"Sorry, the 12:45 slot on 2025-09-16 is no longer available. Please choose a different time.\"}"
    }
  ]
}
[2025-09-13T11:09:22.351Z] === END PARSED JSON ===
[2025-09-13T11:09:22.351Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:09:22.351Z] 📜 HISTORY: Message logged
[2025-09-13T11:09:21.397Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T11:09:23.200Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T11:09:21.397Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore."}
[2025-09-13T11:09:23.435Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore."}
[2025-09-13T11:09:23.435Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore."
}
[2025-09-13T11:09:23.435Z] === END PARSED JSON ===
[2025-09-13T11:09:23.435Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T11:09:23.435Z] 💭 CONVERSATION_TEXT: It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore.
[2025-09-13T11:09:23.435Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore."}...
Message string: {"type":"History","role":"assistant","content":"It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore."}
[2025-09-13T11:09:23.435Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore."}
[2025-09-13T11:09:23.435Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore."
}
[2025-09-13T11:09:23.435Z] === END PARSED JSON ===
[2025-09-13T11:09:23.435Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T11:09:23.435Z] 📜 HISTORY: Message logged
[2025-09-13T11:09:23.435Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore.
[2025-09-13T11:09:23.435Z] 📝 Added transcript: [AI] It looks like 12:45 PM on Tuesday, September 16th, is also just booked and not available anymore.
[2025-09-13T11:09:23.436Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T11:09:24.781Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T11:09:26.608Z] 🔇 Audio stream ended (timeout)
[2025-09-13T11:09:28.781Z] 💓 KEEPALIVE: Sent to Deepgram
Media stream stopped
📞 Logging call completion: CAee20755c8862544cb2a3179e6ab083a2
✅ Call completion logged: CAee20755c8862544cb2a3179e6ab083a2
✅ Saved transcript for call CAee20755c8862544cb2a3179e6ab083a2 (40 entries)
🔌 Closing Deepgram connection and cleaning up resources
🔇 Persistent pacer cleaned up
🔇 Silence tracking cleaned up
🧹 CLEANUP: Cleaning up connection state for call CAee20755c8862544cb2a3179e6ab083a2
✅ Deepgram connection closed successfully
Deepgram WebSocket closed in initializeDeepgram. Code: 1000, Reason: Call ended
Deepgram WebSocket closed. Code: 1000, Reason: Call ended
Twilio WebSocket connection closed
📞 Logging call completion on close: CAee20755c88625