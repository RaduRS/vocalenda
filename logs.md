
[2025-09-13T08:23:25.588Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:25.443Z] ✅ COMPLETED: handleFunctionCall for get_day_of_week
[2025-09-13T08:23:26.445Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:23:25.443Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_Zx7GR8UVZQAG2xB0J3eUbV72","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_Zx7GR8UVZQAG2xB0J3eUbV72","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","client_side":true}]}
[2025-09-13T08:23:26.550Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_Zx7GR8UVZQAG2xB0J3eUbV72","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","client_side":true}]}
[2025-09-13T08:23:26.550Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_Zx7GR8UVZQAG2xB0J3eUbV72",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:23:26.550Z] === END PARSED JSON ===
[2025-09-13T08:23:26.550Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:23:26.550Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:23:26.550Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:23:26.550Z] 📋 Functions: [
  {
    "id": "call_Zx7GR8UVZQAG2xB0J3eUbV72",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}",
    "client_side": true
  }
]
[2025-09-13T08:23:26.550Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:23:26.550Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:23:26.550Z] 🔧 Processing function: get_available_slots
[2025-09-13T08:23:26.550Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA4e38b9cf500eb5ac036d7e88a52c87d0: { callerPhone: '+447468306825' }
[2025-09-13T08:23:26.550Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:23:26.550Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_Zx7GR8UVZQAG2xB0J3eUbV72",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "haircut"
  }
}
[2025-09-13T08:23:26.550Z] 📋 Function name: get_available_slots
[2025-09-13T08:23:26.550Z] 📊 Parameters: {
  "date": "2025-09-13",
  "service_id": "haircut"
}
[2025-09-13T08:23:26.550Z] 🏢 Business config exists: true
[2025-09-13T08:23:26.550Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_Zx7GR8UVZQAG2xB0J3eUbV72",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "haircut"
  }
}
[2025-09-13T08:23:26.550Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-13",
  "service_id": "haircut"
}
[2025-09-13T08:23:26.550Z] 🏢 Business config: Gents Barbershop
[2025-09-13T08:23:26.550Z] 📋 Services count: 2
[2025-09-13T08:23:26.550Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-13T08:23:26.550Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-13",
  "service_id": "haircut"
}
📅 Business open on Saturday
📋 Found service by name 'haircut' -> ID: 4395775e-fa81-4a69-8425-e46c3853dea4
📋 Using service: haircut (Duration: 30 minutes)
[2025-09-13T08:23:26.550Z] 🌐 About to make API call:
[2025-09-13T08:23:26.550Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/slots?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-13
[2025-09-13T08:23:26.550Z] 🔑 Secret exists: true
[2025-09-13T08:23:26.550Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-13T08:23:26.550Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-13T08:23:26.550Z] 📅 Date: 2025-09-13
[2025-09-13T08:23:26.550Z] 📡 API Response status: 200
[2025-09-13T08:23:26.550Z] 📡 API Response ok: true
[2025-09-13T08:23:26.550Z] 📅 Calendar API response: {
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
[2025-09-13T08:23:26.550Z] 📊 Response type: object
[2025-09-13T08:23:26.550Z] 📊 Has slots: true
[2025-09-13T08:23:26.550Z] 📊 Slots count: 11
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
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_Zx7GR8UVZQAG2xB0J3eUbV72","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","response":...
Message string: {"type":"History","function_calls":[{"id":"call_Zx7GR8UVZQAG2xB0J3eUbV72","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T08:23:29.405Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_Zx7GR8UVZQAG2xB0J3eUbV72","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T08:23:29.405Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_Zx7GR8UVZQAG2xB0J3eUbV72",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}",
      "response": "{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"
    }
  ]
}
[2025-09-13T08:23:29.405Z] === END PARSED JSON ===
[2025-09-13T08:23:29.405Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:29.405Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:26.550Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T08:23:30.261Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:23:26.550Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:23:30.450Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:23:30.450Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can book you for 3 PM today."
}
[2025-09-13T08:23:30.450Z] === END PARSED JSON ===
[2025-09-13T08:23:30.450Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:23:30.450Z] 💭 CONVERSATION_TEXT: I can book you for 3 PM today.
[2025-09-13T08:23:30.450Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I can book you for 3 PM today.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}...
Message string: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:23:30.459Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:23:30.459Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can book you for 3 PM today."
}
[2025-09-13T08:23:30.459Z] === END PARSED JSON ===
[2025-09-13T08:23:30.459Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:30.459Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:30.459Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I can book you for 3 PM today.
[2025-09-13T08:23:30.459Z] 📝 Added transcript: [AI] I can book you for 3 PM today.
[2025-09-13T08:23:30.459Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:23:31.638Z] 🔇 Audio stream ended (timeout)
[2025-09-13T08:23:32.563Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T08:23:33.617Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T08:23:33.617Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-13T08:23:33.617Z] === END PARSED JSON ===
[2025-09-13T08:23:33.617Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:23:33.617Z] 💭 CONVERSATION_TEXT: Shall I confirm that?
[2025-09-13T08:23:33.617Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Shall I confirm that?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I confirm that?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T08:23:33.617Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T08:23:33.617Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-13T08:23:33.617Z] === END PARSED JSON ===
[2025-09-13T08:23:33.617Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:33.617Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:33.617Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Shall I confirm that?
[2025-09-13T08:23:33.617Z] 📝 Added transcript: [AI] Shall I confirm that?
[2025-09-13T08:23:33.617Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T08:23:33.635Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T08:23:33.635Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T08:23:33.635Z] === END PARSED JSON ===
[2025-09-13T08:23:33.635Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T08:23:33.635Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T08:23:33.635Z] 🔇 SILENCE: Started tracking
[2025-09-13T08:23:33.635Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T08:23:33.635Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T08:23:33.635Z] 🔇 SILENCE_CHECK: 2000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:23:36.208Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:23:36.208Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:23:36.208Z] === END PARSED JSON ===
[2025-09-13T08:23:36.208Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:23:36.208Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:23:36.208Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:23:36.208Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-13T08:23:36.563Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T08:23:36.822Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T08:23:36.822Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T08:23:36.822Z] === END PARSED JSON ===
[2025-09-13T08:23:36.822Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:23:36.822Z] 💭 CONVERSATION_TEXT: Yes.
[2025-09-13T08:23:36.822Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T08:23:36.838Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T08:23:36.838Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T08:23:36.838Z] === END PARSED JSON ===
[2025-09-13T08:23:36.838Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:36.838Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:36.838Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes.
[2025-09-13T08:23:36.838Z] 📝 Added transcript: [User] Yes.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_fmEASCa9FY1TT4ETQEIboF2N","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_fmEASCa9FY1TT4ETQEIboF2N","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:23:37.695Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_fmEASCa9FY1TT4ETQEIboF2N","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:23:37.695Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_fmEASCa9FY1TT4ETQEIboF2N",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:23:37.695Z] === END PARSED JSON ===
[2025-09-13T08:23:37.695Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:23:37.695Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:23:37.695Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:23:37.695Z] 📋 Functions: [
  {
    "id": "call_fmEASCa9FY1TT4ETQEIboF2N",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
    "client_side": true
  }
]
[2025-09-13T08:23:37.695Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:23:37.695Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:23:37.695Z] 🔧 Processing function: create_booking
[2025-09-13T08:23:37.695Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA4e38b9cf500eb5ac036d7e88a52c87d0: { callerPhone: '+447468306825' }
[2025-09-13T08:23:37.695Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:23:37.695Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_fmEASCa9FY1TT4ETQEIboF2N",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "haircut",
    "time": "15:00"
  }
}
[2025-09-13T08:23:37.695Z] 📋 Function name: create_booking
[2025-09-13T08:23:37.695Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-13",
  "service_id": "haircut",
  "time": "15:00"
}
[2025-09-13T08:23:37.695Z] 🏢 Business config exists: true
[2025-09-13T08:23:37.695Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_fmEASCa9FY1TT4ETQEIboF2N",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "haircut",
    "time": "15:00"
  }
}
✅ TRACKING: Added function call ID call_fmEASCa9FY1TT4ETQEIboF2N to processed set
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
📝 Session updated for call CA4e38b9cf500eb5ac036d7e88a52c87d0: {
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
🔍 Checking slot availability before booking...
✅ Sending create_booking response to Deepgram
❌ Failed to check availability: 400
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_fmEASCa9FY1TT4ETQEIboF2N","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_fmEASCa9FY1TT4ETQEIboF2N","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","response":"{\"error\":\"Unable to verify slot availability. Please try again.\"}"}]}
[2025-09-13T08:23:39.275Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_fmEASCa9FY1TT4ETQEIboF2N","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","response":"{\"error\":\"Unable to verify slot availability. Please try again.\"}"}]}
[2025-09-13T08:23:39.275Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_fmEASCa9FY1TT4ETQEIboF2N",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
      "response": "{\"error\":\"Unable to verify slot availability. Please try again.\"}"
    }
  ]
}
[2025-09-13T08:23:39.275Z] === END PARSED JSON ===
[2025-09-13T08:23:39.275Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:39.275Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:37.695Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T08:23:40.131Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:23:37.695Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems there was a problem confirming your 3 PM haircut appointment."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems there was a problem confirming your 3 PM haircut appointment."}
[2025-09-13T08:23:40.166Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems there was a problem confirming your 3 PM haircut appointment."}
[2025-09-13T08:23:40.166Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems there was a problem confirming your 3 PM haircut appointment."
}
[2025-09-13T08:23:40.166Z] === END PARSED JSON ===
[2025-09-13T08:23:40.166Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:23:40.166Z] 💭 CONVERSATION_TEXT: It seems there was a problem confirming your 3 PM haircut appointment.
[2025-09-13T08:23:40.166Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems there was a problem confirming your 3 PM haircut appointment.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems there was a problem confirming your 3 PM haircut appointment."}...
Message string: {"type":"History","role":"assistant","content":"It seems there was a problem confirming your 3 PM haircut appointment."}
[2025-09-13T08:23:40.167Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems there was a problem confirming your 3 PM haircut appointment."}
[2025-09-13T08:23:40.167Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems there was a problem confirming your 3 PM haircut appointment."
}
[2025-09-13T08:23:40.167Z] === END PARSED JSON ===
[2025-09-13T08:23:40.167Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:40.167Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:40.167Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems there was a problem confirming your 3 PM haircut appointment.
[2025-09-13T08:23:40.167Z] 📝 Added transcript: [AI] It seems there was a problem confirming your 3 PM haircut appointment.
[2025-09-13T08:23:40.167Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:23:40.563Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:23:41.548Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:23:41.548Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:23:41.548Z] === END PARSED JSON ===
[2025-09-13T08:23:41.548Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:23:41.548Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:23:41.548Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:23:41.548Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T08:23:41.666Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T08:23:41.666Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T08:23:41.666Z] === END PARSED JSON ===
[2025-09-13T08:23:41.666Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T08:23:41.666Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T08:23:41.666Z] 🔇 SILENCE: Started tracking
[2025-09-13T08:23:41.666Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T08:23:41.666Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T08:23:41.666Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-13T08:23:44.563Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T08:23:41.666Z] 🔇 SILENCE_CHECK: 3000ms of silence
[2025-09-13T08:23:41.666Z] 🔇 SILENCE_CHECK: 4000ms of silence
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":""}...
Message string: {"type":"ConversationText","role":"user","content":""}
[2025-09-13T08:23:46.467Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":""}
[2025-09-13T08:23:46.467Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": ""
}
[2025-09-13T08:23:46.467Z] === END PARSED JSON ===
[2025-09-13T08:23:46.467Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:23:46.467Z] 💭 CONVERSATION_TEXT: 
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":""}...
Message string: {"type":"History","role":"user","content":""}
[2025-09-13T08:23:46.478Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":""}
[2025-09-13T08:23:46.478Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": ""
}
[2025-09-13T08:23:46.478Z] === END PARSED JSON ===
[2025-09-13T08:23:46.478Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:46.478Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:41.666Z] 🔇 SILENCE_CHECK: 5000ms of silence
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?"}
[2025-09-13T08:23:47.611Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?"}
[2025-09-13T08:23:47.611Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?"
}
[2025-09-13T08:23:47.611Z] === END PARSED JSON ===
[2025-09-13T08:23:47.611Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:23:47.611Z] 💭 CONVERSATION_TEXT: Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?
[2025-09-13T08:23:47.611Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?"}...
Message string: {"type":"History","role":"assistant","content":"Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?"}
[2025-09-13T08:23:47.611Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?"}
[2025-09-13T08:23:47.611Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?"
}
[2025-09-13T08:23:47.611Z] === END PARSED JSON ===
[2025-09-13T08:23:47.611Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:47.611Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:47.611Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?
[2025-09-13T08:23:47.611Z] 📝 Added transcript: [AI] Would you like me to try booking the 3 PM haircut appointment again for you, or would you prefer a different time?
[2025-09-13T08:23:47.612Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:23:41.666Z] 🔇 SILENCE_CHECK: 6000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:23:48.507Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:23:48.507Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:23:48.507Z] === END PARSED JSON ===
[2025-09-13T08:23:48.507Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:23:48.507Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:23:48.507Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:23:48.507Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-13T08:23:48.562Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T08:23:48.686Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T08:23:48.686Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T08:23:48.686Z] === END PARSED JSON ===
[2025-09-13T08:23:48.686Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T08:23:48.686Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T08:23:48.686Z] 🔇 SILENCE: Started tracking
[2025-09-13T08:23:48.686Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Go on. Where you stop?"}...
Message string: {"type":"ConversationText","role":"user","content":"Go on. Where you stop?"}
[2025-09-13T08:23:49.130Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Go on. Where you stop?"}
[2025-09-13T08:23:49.130Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Go on. Where you stop?"
}
[2025-09-13T08:23:49.130Z] === END PARSED JSON ===
[2025-09-13T08:23:49.130Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:23:49.130Z] 💭 CONVERSATION_TEXT: Go on. Where you stop?
[2025-09-13T08:23:49.130Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Go on. Where you stop?
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Go on. Where you stop?"}...
Message string: {"type":"History","role":"user","content":"Go on. Where you stop?"}
[2025-09-13T08:23:49.138Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Go on. Where you stop?"}
[2025-09-13T08:23:49.138Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Go on. Where you stop?"
}
[2025-09-13T08:23:49.138Z] === END PARSED JSON ===
[2025-09-13T08:23:49.138Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:49.138Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:49.138Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Go on. Where you stop?
[2025-09-13T08:23:49.138Z] 📝 Added transcript: [User] Go on. Where you stop?
[2025-09-13T08:23:48.686Z] 🔇 SILENCE_CHECK: 1000ms of silence
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_RuekpscaExjq85zd746ph5XJ","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_RuekpscaExjq85zd746ph5XJ","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:23:50.071Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_RuekpscaExjq85zd746ph5XJ","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:23:50.071Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_RuekpscaExjq85zd746ph5XJ",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:23:50.071Z] === END PARSED JSON ===
[2025-09-13T08:23:50.071Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:23:50.071Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:23:50.071Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:23:50.071Z] 📋 Functions: [
  {
    "id": "call_RuekpscaExjq85zd746ph5XJ",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
    "client_side": true
  }
]
[2025-09-13T08:23:50.071Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:23:50.072Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:23:50.071Z] 🔧 Processing function: create_booking
[2025-09-13T08:23:50.071Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA4e38b9cf500eb5ac036d7e88a52c87d0: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30
}
[2025-09-13T08:23:50.072Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:23:50.072Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_RuekpscaExjq85zd746ph5XJ",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "haircut",
    "time": "15:00"
  }
}
[2025-09-13T08:23:50.072Z] 📋 Function name: create_booking
[2025-09-13T08:23:50.072Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-13",
  "service_id": "haircut",
  "time": "15:00"
}
[2025-09-13T08:23:50.072Z] 🏢 Business config exists: true
[2025-09-13T08:23:50.072Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_RuekpscaExjq85zd746ph5XJ",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "haircut",
    "time": "15:00"
  }
}
✅ TRACKING: Added function call ID call_RuekpscaExjq85zd746ph5XJ to processed set
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
📝 Session updated for call CA4e38b9cf500eb5ac036d7e88a52c87d0: {
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
🔍 Checking slot availability before booking...
❌ Failed to check availability: 400
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_RuekpscaExjq85zd746ph5XJ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_RuekpscaExjq85zd746ph5XJ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","response":"{\"error\":\"Unable to verify slot availability. Please try again.\"}"}]}
[2025-09-13T08:23:51.112Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_RuekpscaExjq85zd746ph5XJ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","response":"{\"error\":\"Unable to verify slot availability. Please try again.\"}"}]}
[2025-09-13T08:23:51.112Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_RuekpscaExjq85zd746ph5XJ",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
      "response": "{\"error\":\"Unable to verify slot availability. Please try again.\"}"
    }
  ]
}
[2025-09-13T08:23:51.112Z] === END PARSED JSON ===
[2025-09-13T08:23:51.112Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:23:51.112Z] 📜 HISTORY: Message logged
[2025-09-13T08:23:50.071Z] ✅ COMPLETED: handleFunctionCall for create_booking