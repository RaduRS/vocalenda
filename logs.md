STARTING getAvailableSlots with params: {
  "date": "2025-09-10",
  "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b"
}
[2025-09-07T08:05:16.475Z] 🏢 Business config: Gents Barbershop
[2025-09-07T08:05:16.475Z] 📋 Services count: 2
[2025-09-07T08:05:16.475Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-07T08:05:16.475Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-10",
  "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b"
}
📅 Business open on Wednesday
📋 Using service: bread trim (Duration: 20 minutes)
[2025-09-07T08:05:16.475Z] 🌐 About to make API call:
[2025-09-07T08:05:16.475Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/slots?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=19377edc-76fe-4d97-92b2-3bc7a21c8b5b&date=2025-09-10
[2025-09-07T08:05:16.475Z] 🔑 Secret exists: true
[2025-09-07T08:05:16.475Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-07T08:05:16.475Z] 📋 Service ID: 19377edc-76fe-4d97-92b2-3bc7a21c8b5b
[2025-09-07T08:05:16.475Z] 📅 Date: 2025-09-10
[2025-09-07T08:05:16.475Z] 📡 API Response status: 200
[2025-09-07T08:05:16.475Z] 📡 API Response ok: true
[2025-09-07T08:05:16.475Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-10T09:00:00.000Z",
      "end": "2025-09-10T09:20:00.000Z",
      "startTime": "09:00",
      "endTime": "09:20"
    },
    {
      "start": "2025-09-10T09:30:00.000Z",
      "end": "2025-09-10T09:50:00.000Z",
      "startTime": "09:30",
      "endTime": "09:50"
    },
    {
      "start": "2025-09-10T10:00:00.000Z",
      "end": "2025-09-10T10:20:00.000Z",
      "startTime": "10:00",
      "endTime": "10:20"
    },
    {
      "start": "2025-09-10T10:30:00.000Z",
      "end": "2025-09-10T10:50:00.000Z",
      "startTime": "10:30",
      "endTime": "10:50"
    },
    {
      "start": "2025-09-10T11:00:00.000Z",
      "end": "2025-09-10T11:20:00.000Z",
      "startTime": "11:00",
      "endTime": "11:20"
    },
    {
      "start": "2025-09-10T11:30:00.000Z",
      "end": "2025-09-10T11:50:00.000Z",
      "startTime": "11:30",
      "endTime": "11:50"
    },
    {
      "start": "2025-09-10T12:00:00.000Z",
      "end": "2025-09-10T12:20:00.000Z",
      "startTime": "12:00",
      "endTime": "12:20"
    },
    {
      "start": "2025-09-10T12:30:00.000Z",
      "end": "2025-09-10T12:50:00.000Z",
      "startTime": "12:30",
      "endTime": "12:50"
    },
    {
      "start": "2025-09-10T13:00:00.000Z",
      "end": "2025-09-10T13:20:00.000Z",
      "startTime": "13:00",
      "endTime": "13:20"
    },
    {
      "start": "2025-09-10T13:30:00.000Z",
      "end": "2025-09-10T13:50:00.000Z",
      "startTime": "13:30",
      "endTime": "13:50"
    },
    {
      "start": "2025-09-10T14:00:00.000Z",
      "end": "2025-09-10T14:20:00.000Z",
      "startTime": "14:00",
      "endTime": "14:20"
    },
    {
      "start": "2025-09-10T14:30:00.000Z",
      "end": "2025-09-10T14:50:00.000Z",
      "startTime": "14:30",
      "endTime": "14:50"
    },
    {
      "start": "2025-09-10T15:00:00.000Z",
      "end": "2025-09-10T15:20:00.000Z",
      "startTime": "15:00",
      "endTime": "15:20"
    },
    {
      "start": "2025-09-10T15:30:00.000Z",
      "end": "2025-09-10T15:50:00.000Z",
      "startTime": "15:30",
      "endTime": "15:50"
    },
    {
      "start": "2025-09-10T16:00:00.000Z",
      "end": "2025-09-10T16:20:00.000Z",
      "startTime": "16:00",
      "endTime": "16:20"
    },
    {
      "start": "2025-09-10T16:30:00.000Z",
      "end": "2025-09-10T16:50:00.000Z",
      "startTime": "16:30",
      "endTime": "16:50"
    }
  ]
}
[2025-09-07T08:05:16.475Z] 📊 Response type: object
[2025-09-07T08:05:16.475Z] 📊 Has slots: true
[2025-09-07T08:05:16.475Z] 📊 Slots count: 16
✅ Available time slots: [
  '09:00', '09:30', '10:00',
  '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00',
  '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00',
  '16:30'
]
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_Wnu1b9kLzoSYwE8CFS3ST0nS","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2...
Message string: {"type":"History","function_calls":[{"id":"call_Wnu1b9kLzoSYwE8CFS3ST0nS","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\"}","response":"{\"available_slots\":[\"09:00\",\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"}]}
[2025-09-07T08:05:16.705Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_Wnu1b9kLzoSYwE8CFS3ST0nS","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\"}","response":"{\"available_slots\":[\"09:00\",\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"}]}
[2025-09-07T08:05:16.705Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_Wnu1b9kLzoSYwE8CFS3ST0nS",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"
    }
  ]
}
[2025-09-07T08:05:16.705Z] === END PARSED JSON ===
[2025-09-07T08:05:16.705Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T08:05:16.705Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T08:05:16.705Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_Wnu1b9kLzoSYwE8CFS3ST0nS",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"
    }
  ]
}
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Wednesday, September 10th is available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Wednesday, September 10th is available."}
[2025-09-07T08:05:17.376Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Wednesday, September 10th is available."}
[2025-09-07T08:05:17.376Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Wednesday, September 10th is available."
}
[2025-09-07T08:05:17.376Z] === END PARSED JSON ===
[2025-09-07T08:05:17.376Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T08:05:17.376Z] 💭 CONVERSATION_TEXT: Wednesday, September 10th is available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Wednesday, September 10th is available."}...
Message string: {"type":"History","role":"assistant","content":"Wednesday, September 10th is available."}
[2025-09-07T08:05:17.376Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Wednesday, September 10th is available."}
[2025-09-07T08:05:17.376Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Wednesday, September 10th is available."
}
[2025-09-07T08:05:17.376Z] === END PARSED JSON ===
[2025-09-07T08:05:17.376Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T08:05:17.376Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T08:05:17.376Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "Wednesday, September 10th is available."
}
[2025-09-07T08:05:17.376Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T08:05:16.474Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-07T08:05:17.561Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-07T08:05:18.303Z] 🔇 Audio stream ended (timeout)
Shutting down server...
HTTP server closed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can book you for your beard trim at 10 AM."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can book you for your beard trim at 10 AM."}
[2025-09-07T08:05:19.933Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can book you for your beard trim at 10 AM."}
[2025-09-07T08:05:19.933Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can book you for your beard trim at 10 AM."
}
[2025-09-07T08:05:19.933Z] === END PARSED JSON ===
[2025-09-07T08:05:19.933Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T08:05:19.933Z] 💭 CONVERSATION_TEXT: I can book you for your beard trim at 10 AM.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can book you for your beard trim at 10 AM."}...
Message string: {"type":"History","role":"assistant","content":"I can book you for your beard trim at 10 AM."}
[2025-09-07T08:05:19.941Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can book you for your beard trim at 10 AM."}
[2025-09-07T08:05:19.941Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can book you for your beard trim at 10 AM."
}
[2025-09-07T08:05:19.941Z] === END PARSED JSON ===
[2025-09-07T08:05:19.941Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T08:05:19.941Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T08:05:19.941Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "I can book you for your beard trim at 10 AM."
}
[2025-09-07T08:05:19.941Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T08:05:19.985Z] 🔇 Audio stream ended (timeout)
[2025-09-07T08:05:21.118Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}
[2025-09-07T08:05:22.734Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}
[2025-09-07T08:05:22.734Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-07T08:05:22.734Z] === END PARSED JSON ===
[2025-09-07T08:05:22.734Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T08:05:22.734Z] 💭 CONVERSATION_TEXT: Shall I confirm that?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I confirm that?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I confirm that?"}
[2025-09-07T08:05:22.734Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I confirm that?"}
[2025-09-07T08:05:22.734Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-07T08:05:22.734Z] === END PARSED JSON ===
[2025-09-07T08:05:22.734Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T08:05:22.734Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T08:05:22.734Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-07T08:05:22.735Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-07T08:05:22.762Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-07T08:05:22.762Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-07T08:05:22.762Z] === END PARSED JSON ===
[2025-09-07T08:05:22.762Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-07T08:05:22.762Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-07T08:05:22.762Z] ⏰ SILENCE_START: Beginning silence tracking after AI speech
[2025-09-07T08:05:22.762Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-07T08:05:22.762Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-07T08:05:22.762Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-07T08:05:25.118Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-07T08:05:22.762Z] 🔇 SILENCE_CHECK: 3000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-07T08:05:25.971Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-07T08:05:25.971Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-07T08:05:25.971Z] === END PARSED JSON ===
[2025-09-07T08:05:25.971Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-07T08:05:25.971Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-07T08:05:25.971Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes, please."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes, please."}
[2025-09-07T08:05:26.824Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes, please."}
[2025-09-07T08:05:26.824Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes, please."
}
[2025-09-07T08:05:26.824Z] === END PARSED JSON ===
[2025-09-07T08:05:26.824Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T08:05:26.824Z] 💭 CONVERSATION_TEXT: Yes, please.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes, please."}...
Message string: {"type":"History","role":"user","content":"Yes, please."}
[2025-09-07T08:05:26.844Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes, please."}
[2025-09-07T08:05:26.844Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes, please."
}
[2025-09-07T08:05:26.844Z] === END PARSED JSON ===
[2025-09-07T08:05:26.844Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T08:05:26.844Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T08:05:26.844Z] 📦 Full message: {
  "type": "History",
  "role": "user",
  "content": "Yes, please."
}
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_02kEYMDkQooMOnk6eYy9Qpce","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76f...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_02kEYMDkQooMOnk6eYy9Qpce","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\",\"time\":\"10:00\"}","client_side":true}]}
[2025-09-07T08:05:27.947Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_02kEYMDkQooMOnk6eYy9Qpce","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\",\"time\":\"10:00\"}","client_side":true}]}
[2025-09-07T08:05:27.947Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_02kEYMDkQooMOnk6eYy9Qpce",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\",\"time\":\"10:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-07T08:05:27.947Z] === END PARSED JSON ===
[2025-09-07T08:05:27.947Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-07T08:05:27.947Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-07T08:05:27.947Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-07T08:05:27.947Z] 📋 Functions: [
  {
    "id": "call_02kEYMDkQooMOnk6eYy9Qpce",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-10\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\",\"time\":\"10:00\"}",
    "client_side": true
  }
]
[2025-09-07T08:05:27.947Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-07T08:05:27.947Z] 🔧 Processing function: create_booking
[2025-09-07T08:05:27.947Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA263bb968de6416e1394e2ee8c11f18a6: { callerPhone: '+447468306825' }
[2025-09-07T08:05:27.948Z] 🚀 STARTING handleFunctionCall
[2025-09-07T08:05:27.948Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_02kEYMDkQooMOnk6eYy9Qpce",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-10",
    "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b",
    "time": "10:00"
  }
}
[2025-09-07T08:05:27.948Z] 📋 Function name: create_booking
[2025-09-07T08:05:27.948Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-10",
  "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b",
  "time": "10:00"
}
[2025-09-07T08:05:27.948Z] 🏢 Business config exists: true
[2025-09-07T08:05:27.948Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_02kEYMDkQooMOnk6eYy9Qpce",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-10",
    "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b",
    "time": "10:00"
  }
}
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-10",
  "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b",
  "time": "10:00"
}
📋 Available services: [
  { id: 'e5d2c688-d01f-4085-8b4e-97215b48be75', name: 'haircut' },
  { id: '19377edc-76fe-4d97-92b2-3bc7a21c8b5b', name: 'bread trim' }
]
📝 Session updated for call CA263bb968de6416e1394e2ee8c11f18a6: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-10',
  lastBookingTime: '10:00',
  lastServiceId: '19377edc-76fe-4d97-92b2-3bc7a21c8b5b'
}
✅ Booking - Service found: bread trim (ID: 19377edc-76fe-4d97-92b2-3bc7a21c8b5b )
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
  "serviceId": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b",
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
❌ Booking API error: { error: 'Time slot is no longer available' }
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-07T08:05:30.803Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-07T08:05:30.803Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-07T08:05:30.803Z] === END PARSED JSON ===
[2025-09-07T08:05:30.803Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-07T08:05:30.803Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-07T08:05:30.803Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Don't"}...
Message string: {"type":"ConversationText","role":"user","content":"Don't"}
[2025-09-07T08:05:30.804Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Don't"}
[2025-09-07T08:05:30.804Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",