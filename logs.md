8:01:50.346Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:01:50.346Z] 📜 HISTORY: Message logged
[2025-09-13T08:01:50.346Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Now
[2025-09-13T08:01:50.346Z] 📝 Added transcript: [User] Now
[2025-09-13T08:01:47.332Z] 📡 API Response status: 200
[2025-09-13T08:01:47.332Z] 📡 API Response ok: true
[2025-09-13T08:01:47.332Z] 📅 Calendar API response: {
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
  ]
}
[2025-09-13T08:01:47.332Z] 📊 Response type: object
[2025-09-13T08:01:47.332Z] 📊 Has slots: true
[2025-09-13T08:01:47.332Z] 📊 Slots count: 11
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
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_GfjJXlYszY5WG8cJPjVJGajQ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_GfjJXlYszY5WG8cJPjVJGajQ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\"}","client_side":true}]}
[2025-09-13T08:01:51.199Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_GfjJXlYszY5WG8cJPjVJGajQ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\"}","client_side":true}]}
[2025-09-13T08:01:51.199Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_GfjJXlYszY5WG8cJPjVJGajQ",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-13\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:01:51.199Z] === END PARSED JSON ===
[2025-09-13T08:01:51.199Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:01:51.199Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:01:51.199Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:01:51.199Z] 📋 Functions: [
  {
    "id": "call_GfjJXlYszY5WG8cJPjVJGajQ",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-13\"}",
    "client_side": true
  }
]
[2025-09-13T08:01:51.199Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:01:51.199Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:01:51.199Z] 🔧 Processing function: get_available_slots
[2025-09-13T08:01:51.199Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA39ba8f002c1a2d1e81c472054795fff6: { callerPhone: '+447468306825' }
[2025-09-13T08:01:51.200Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:01:51.200Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_GfjJXlYszY5WG8cJPjVJGajQ",
  "parameters": {
    "date": "2025-09-13"
  }
}
[2025-09-13T08:01:51.200Z] 📋 Function name: get_available_slots
[2025-09-13T08:01:51.200Z] 📊 Parameters: {
  "date": "2025-09-13"
}
[2025-09-13T08:01:51.200Z] 🏢 Business config exists: true
[2025-09-13T08:01:51.200Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_GfjJXlYszY5WG8cJPjVJGajQ",
  "parameters": {
    "date": "2025-09-13"
  }
}
[2025-09-13T08:01:51.200Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-13"
}
[2025-09-13T08:01:51.200Z] 🏢 Business config: Gents Barbershop
[2025-09-13T08:01:51.200Z] 📋 Services count: 2
[2025-09-13T08:01:51.200Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-13T08:01:51.200Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-13"
}
📅 Business open on Saturday
📋 Using default service: haircut (Duration: 30 minutes)
[2025-09-13T08:01:51.200Z] 🌐 About to make API call:
[2025-09-13T08:01:51.200Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/slots?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-13
[2025-09-13T08:01:51.200Z] 🔑 Secret exists: true
[2025-09-13T08:01:51.200Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-13T08:01:51.200Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-13T08:01:51.200Z] 📅 Date: 2025-09-13
[2025-09-13T08:01:50.228Z] ✅ COMPLETED: handleFunctionCall for get_services
[2025-09-13T08:01:51.228Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:01:50.228Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-13T08:01:47.332Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T08:01:51.595Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:01:47.332Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-13T08:01:51.200Z] 📡 API Response status: 200
[2025-09-13T08:01:51.200Z] 📡 API Response ok: true
[2025-09-13T08:01:51.200Z
[2025-09-13T08:01:54.011Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:01:54.011Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can book you for 3 PM today."
}
[2025-09-13T08:01:54.011Z] === END PARSED JSON ===
[2025-09-13T08:01:54.011Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:01:54.011Z] 📜 HISTORY: Message logged
[2025-09-13T08:01:54.011Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I can book you for 3 PM today.
[2025-09-13T08:01:54.011Z] 📝 Added transcript: [AI] I can book you for 3 PM today.
[2025-09-13T08:01:54.011Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:01:51.199Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T08:01:54.040Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:01:51.199Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-13T08:01:54.725Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for your haircut?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for your haircut?"}
[2025-09-13T08:01:56.093Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for your haircut?"}
[2025-09-13T08:01:56.093Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I confirm that appointment for your haircut?"
}
[2025-09-13T08:01:56.093Z] === END PARSED JSON ===
[2025-09-13T08:01:56.093Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:01:56.093Z] 💭 CONVERSATION_TEXT: Shall I confirm that appointment for your haircut?
[2025-09-13T08:01:56.093Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Shall I confirm that appointment for your haircut?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for your haircut?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for your haircut?"}
[2025-09-13T08:01:56.246Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for your haircut?"}
[2025-09-13T08:01:56.246Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that appointment for your haircut?"
}
[2025-09-13T08:01:56.246Z] === END PARSED JSON ===
[2025-09-13T08:01:56.246Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:01:56.246Z] 📜 HISTORY: Message logged
[2025-09-13T08:01:56.246Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Shall I confirm that appointment for your haircut?
[2025-09-13T08:01:56.246Z] 📝 Added transcript: [AI] Shall I confirm that appointment for your haircut?
[2025-09-13T08:01:56.246Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T08:01:56.246Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T08:01:56.246Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T08:01:56.246Z] === END PARSED JSON ===
[2025-09-13T08:01:56.246Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T08:01:56.246Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T08:01:56.246Z] 🔇 SILENCE: Started tracking
[2025-09-13T08:01:56.246Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T08:01:56.246Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T08:01:57.948Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T08:01:56.246Z] 🔇 SILENCE_CHECK: 2001ms of silence
[2025-09-13T08:01:56.246Z] 🔇 SILENCE_CHECK: 3000ms of silence
[2025-09-13T08:01:56.246Z] 🔇 SILENCE_CHECK: 4000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:02:00.355Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:02:00.355Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:02:00.355Z] === END PARSED JSON ===
[2025-09-13T08:02:00.355Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:02:00.355Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:02:00.355Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:02:00.355Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes, please."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes, please."}
[2025-09-13T08:02:01.834Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes, please."}
[2025-09-13T08:02:01.834Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes, please."
}
[2025-09-13T08:02:01.834Z] === END PARSED JSON ===
[2025-09-13T08:02:01.834Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:02:01.834Z] 💭 CONVERSATION_TEXT: Yes, please.

[2025-09-13T08:02:02.881Z] 🔧 Processing function: create_booking
[2025-09-13T08:02:02.881Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA39ba8f002c1a2d1e81c472054795fff6: { callerPhone: '+447468306825' }
[2025-09-13T08:02:02.882Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:02:02.882Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_OF4jEKqsW39x6HofBtLWHIme",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "haircut",
    "time": "15:00"
  }
}
[2025-09-13T08:02:02.882Z] 📋 Function name: create_booking
[2025-09-13T08:02:02.882Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-13",
  "service_id": "haircut",
  "time": "15:00"
}
[2025-09-13T08:02:02.882Z] 🏢 Business config exists: true
[2025-09-13T08:02:02.882Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_OF4jEKqsW39x6HofBtLWHIme",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "haircut",
    "time": "15:00"
  }
}
✅ TRACKING: Added function call ID call_OF4jEKqsW39x6HofBtLWHIme to processed set
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-13",
  "service_id": "haircut",
  "time": "15:00"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
📋 Booking - Found service by name 'haircut' -> ID: 4395775e-fa81-4a69-8425-e46c3853dea4
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CA39ba8f002c1a2d1e81c472054795fff6: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: 'haircut',
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
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "fae104da-40bb-4d4a-9670-8b5a1035b8f6",
  "calendarEventId": "meg30t929mecv37a31uiqvl3jc"
}
✅ Appointment created successfully via API: fae104da-40bb-4d4a-9670-8b5a1035b8f6
📅 Calendar event ID: meg30t929mecv37a31uiqvl3jc
📞 Updating call log with customer name: Marco
Failed to update call customer: {
✅ Call log updated with customer name: CA39ba8f002c1a2d1e81c472054795fff6
📝 Session updated for call CA39ba8f002c1a2d1e81c472054795fff6: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: 'fae104da-40bb-4d4a-9670-8b5a1035b8f6'
}
📋 Stored appointment ID in session: fae104da-40bb-4d4a-9670-8b5a1035b8f6
✅ Sending create_booking response to Deepgram
  code: 'PGRST204',
  details: null,
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
}
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_OF4jEKqsW39x6HofBtLWHIme","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_OF4jEKqsW39x6HofBtLWHIme","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","response":"{\"success\":true,\"appointment_id\":\"fae104da-40bb-4d4a-9670-8b5a1035b8f6\",\"calendar_event_id\":\"meg30t929mecv37a31uiqvl3jc\",\"message\":\"Appointment booked for Marco on 2025-09-13 at 15:00 for haircut Event has been added to your Google Calendar.\"}"}]}
[2025-09-13T08:02:05.857Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_OF4jEKqsW39x6HofBtLWHIme","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","response":"{\"success\":true,\"appointment_id\":\"fae104da-40bb-4d4a-9670-8b5a1035b8f6\",\"calendar_event_id\":\"meg30t929mecv37a31uiqvl3jc\",\"message\":\"Appointment booked for Marco on 2025-09-13 at 15:00 for haircut Event has been added to your Google Calendar.\"}"}]}
[2025-09-13T08:02:05.857Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_OF4jEKqsW39x6HofBtLWHIme",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
      "response": "{\"success\":true,\"appointment_id\":\"fae104da-40bb-4d4a-9670-8b5a1035b8f6\",\"calendar_event_id\":\"meg30t929mecv37a31uiqvl3jc\",\"message\":\"Appointment booked for Marco on 2025-09-13 at 15:00 for haircut Event has been added to your Google Calendar.\"}"
    }
  ]
}
[2025-09-13T08:02:05.857Z] === END PARSED JSON ===
[2025-09-13T08:02:05.857Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:02:05.857Z] 📜 HISTORY: Message logged
[2025-09-13T08:02:02.881Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T08:02:06.704Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:02:02.881Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:02:06.914Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:02:06.914Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:02:06.914Z] === END PARSED JSON ===
[2025-09-13T08:02:06.914Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:02:06.914Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:02:06.914Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:02:06.914Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"No. Just go a bit more forward."}...
Message string: {"type":"ConversationText","role":"user","content":"No. Just go a bit more forward."}
[2025-09-13T08:02:08.443Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"No. Just go a bit more forward."}
[2025-09-13T08:02:08.443Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "No. Just go a bit more forward."
}
[2025-09-13T08:02:08.443Z] === END PARSED JSON ===
[2025-09-13T08:02:08.443Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:02:08.443Z] 💭 CONVERSATION_TEXT: No. Just go a bit more forward.
[2025-09-13T08:02:08.443Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: No. Just go a bit more forward.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"No. Just go a bit more forward."}...
Message string: {"type":"History","role":"user","content":"No. Just go a bit more forward."}
[2025-09-13T08:02:08.448Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"No. Just go a bit more forward."}
[2025-09-13T08:02:08.448Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "No. Just go a bit more forward."
}
[2025-09-13T08:02:08.448Z] === END PARSED JSON ===
[2025-09-13T08:02:08.448Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:02:08.448Z] 📜 HISTORY: Message logged