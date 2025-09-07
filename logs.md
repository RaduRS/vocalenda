Business config exists: true
[2025-09-07T09:07:17.497Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_yEmRop2JY4D8ucV84tXmkj0G",
  "parameters": {
    "date": "2025-09-09",
    "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b"
  }
}
[2025-09-07T09:07:17.497Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-09",
  "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b"
}
[2025-09-07T09:07:17.497Z] 🏢 Business config: Gents Barbershop
[2025-09-07T09:07:17.497Z] 📋 Services count: 2
[2025-09-07T09:07:17.497Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-07T09:07:17.497Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-09",
  "service_id": "19377edc-76fe-4d97-92b2-3bc7a21c8b5b"
}
📅 Business open on Tuesday
📋 Using service: bread trim (Duration: 20 minutes)
[2025-09-07T09:07:17.497Z] 🌐 About to make API call:
[2025-09-07T09:07:17.497Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/slots?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=19377edc-76fe-4d97-92b2-3bc7a21c8b5b&date=2025-09-09
[2025-09-07T09:07:17.497Z] 🔑 Secret exists: true
[2025-09-07T09:07:17.497Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-07T09:07:17.497Z] 📋 Service ID: 19377edc-76fe-4d97-92b2-3bc7a21c8b5b
[2025-09-07T09:07:17.497Z] 📅 Date: 2025-09-09
[2025-09-07T09:07:17.497Z] 📡 API Response status: 200
[2025-09-07T09:07:17.497Z] 📡 API Response ok: true
[2025-09-07T09:07:17.497Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-09T09:00:00.000Z",
      "end": "2025-09-09T09:20:00.000Z",
      "startTime": "09:00",
      "endTime": "09:20"
    },
    {
      "start": "2025-09-09T09:30:00.000Z",
      "end": "2025-09-09T09:50:00.000Z",
      "startTime": "09:30",
      "endTime": "09:50"
    },
    {
      "start": "2025-09-09T10:00:00.000Z",
      "end": "2025-09-09T10:20:00.000Z",
      "startTime": "10:00",
      "endTime": "10:20"
    },
    {
      "start": "2025-09-09T10:30:00.000Z",
      "end": "2025-09-09T10:50:00.000Z",
      "startTime": "10:30",
      "endTime": "10:50"
    },
    {
      "start": "2025-09-09T11:00:00.000Z",
      "end": "2025-09-09T11:20:00.000Z",
      "startTime": "11:00",
      "endTime": "11:20"
    },
    {
      "start": "2025-09-09T11:30:00.000Z",
      "end": "2025-09-09T11:50:00.000Z",
      "startTime": "11:30",
      "endTime": "11:50"
    },
    {
      "start": "2025-09-09T12:00:00.000Z",
      "end": "2025-09-09T12:20:00.000Z",
      "startTime": "12:00",
      "endTime": "12:20"
    },
    {
      "start": "2025-09-09T12:30:00.000Z",
      "end": "2025-09-09T12:50:00.000Z",
      "startTime": "12:30",
      "endTime": "12:50"
    },
    {
      "start": "2025-09-09T13:00:00.000Z",
      "end": "2025-09-09T13:20:00.000Z",
      "startTime": "13:00",
      "endTime": "13:20"
    },
    {
      "start": "2025-09-09T13:30:00.000Z",
      "end": "2025-09-09T13:50:00.000Z",
      "startTime": "13:30",
      "endTime": "13:50"
    },
    {
      "start": "2025-09-09T14:00:00.000Z",
      "end": "2025-09-09T14:20:00.000Z",
      "startTime": "14:00",
      "endTime": "14:20"
    },
    {
      "start": "2025-09-09T14:30:00.000Z",
      "end": "2025-09-09T14:50:00.000Z",
      "startTime": "14:30",
      "endTime": "14:50"
    },
    {
      "start": "2025-09-09T15:00:00.000Z",
      "end": "2025-09-09T15:20:00.000Z",
      "startTime": "15:00",
      "endTime": "15:20"
    },
    {
      "start": "2025-09-09T15:30:00.000Z",
      "end": "2025-09-09T15:50:00.000Z",
      "startTime": "15:30",
      "endTime": "15:50"
    },
    {
      "start": "2025-09-09T16:00:00.000Z",
      "end": "2025-09-09T16:20:00.000Z",
      "startTime": "16:00",
      "endTime": "16:20"
    },
    {
      "start": "2025-09-09T16:30:00.000Z",
      "end": "2025-09-09T16:50:00.000Z",
      "startTime": "16:30",
      "endTime": "16:50"
    }
  ]
}
[2025-09-07T09:07:17.497Z] 📊 Response type: object
[2025-09-07T09:07:17.497Z] 📊 Has slots: true
[2025-09-07T09:07:17.497Z] 📊 Slots count: 16
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
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_yEmRop2JY4D8ucV84tXmkj0G","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76fe-4d97-92b2...
Message string: {"type":"History","function_calls":[{"id":"call_yEmRop2JY4D8ucV84tXmkj0G","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\"}","response":"{\"available_slots\":[\"09:00\",\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"}]}
[2025-09-07T09:07:17.847Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_yEmRop2JY4D8ucV84tXmkj0G","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\"}","response":"{\"available_slots\":[\"09:00\",\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"}]}
[2025-09-07T09:07:17.847Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_yEmRop2JY4D8ucV84tXmkj0G",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"
    }
  ]
}
[2025-09-07T09:07:17.847Z] === END PARSED JSON ===
[2025-09-07T09:07:17.847Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:07:17.847Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:07:17.847Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_yEmRop2JY4D8ucV84tXmkj0G",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:30\",\"10:00\",\"10:30\",\"11:00\",\"11:30\",\"12:00\",\"12:30\",\"13:00\",\"13:30\",\"14:00\",\"14:30\",\"15:00\",\"15:30\",\"16:00\",\"16:30\"]}"
    }
  ]
}
[2025-09-07T09:07:17.497Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-07T09:07:18.699Z] ▶️ KEEPALIVE: Resumed after function processing
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"10 AM is available for your beard trim on Tuesday, September 9th."}...
Message string: {"type":"ConversationText","role":"assistant","content":"10 AM is available for your beard trim on Tuesday, September 9th."}
[2025-09-07T09:07:18.910Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"10 AM is available for your beard trim on Tuesday, September 9th."}
[2025-09-07T09:07:18.910Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "10 AM is available for your beard trim on Tuesday, September 9th."
}
[2025-09-07T09:07:18.910Z] === END PARSED JSON ===
[2025-09-07T09:07:18.910Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:07:18.910Z] 💭 CONVERSATION_TEXT: 10 AM is available for your beard trim on Tuesday, September 9th.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"10 AM is available for your beard trim on Tuesday, September 9th."}...
Message string: {"type":"History","role":"assistant","content":"10 AM is available for your beard trim on Tuesday, September 9th."}
[2025-09-07T09:07:18.910Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"10 AM is available for your beard trim on Tuesday, September 9th."}
[2025-09-07T09:07:18.910Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "10 AM is available for your beard trim on Tuesday, September 9th."
}
[2025-09-07T09:07:18.910Z] === END PARSED JSON ===
[2025-09-07T09:07:18.910Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:07:18.910Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:07:18.910Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "10 AM is available for your beard trim on Tuesday, September 9th."
}
[2025-09-07T09:07:18.910Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:07:20.533Z] 🔇 Audio stream ended (timeout)
[2025-09-07T09:07:21.897Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for you?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for you?"}
[2025-09-07T09:07:23.031Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for you?"}
[2025-09-07T09:07:23.031Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I confirm that appointment for you?"
}
[2025-09-07T09:07:23.031Z] === END PARSED JSON ===
[2025-09-07T09:07:23.031Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:07:23.031Z] 💭 CONVERSATION_TEXT: Shall I confirm that appointment for you?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for you?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for you?"}
[2025-09-07T09:07:23.032Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for you?"}
[2025-09-07T09:07:23.032Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that appointment for you?"
}
[2025-09-07T09:07:23.032Z] === END PARSED JSON ===
[2025-09-07T09:07:23.032Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:07:23.032Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:07:23.032Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that appointment for you?"
}
[2025-09-07T09:07:23.032Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-07T09:07:23.181Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-07T09:07:23.181Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-07T09:07:23.181Z] === END PARSED JSON ===
[2025-09-07T09:07:23.181Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-07T09:07:23.181Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-07T09:07:23.181Z] ⏰ SILENCE_START: Beginning silence tracking after AI speech
[2025-09-07T09:07:23.181Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-07T09:07:23.181Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-07T09:07:23.181Z] 🔇 SILENCE_CHECK: 2001ms of silence
[2025-09-07T09:07:25.898Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-07T09:07:23.181Z] 🔇 SILENCE_CHECK: 3002ms of silence
[2025-09-07T09:07:23.181Z] 🔇 SILENCE_CHECK: 4002ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-07T09:07:27.202Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-07T09:07:27.202Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-07T09:07:27.202Z] === END PARSED JSON ===
[2025-09-07T09:07:27.202Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-07T09:07:27.202Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-07T09:07:27.202Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-07T09:07:28.687Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-07T09:07:28.687Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-07T09:07:28.687Z] === END PARSED JSON ===
[2025-09-07T09:07:28.687Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:07:28.687Z] 💭 CONVERSATION_TEXT: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-07T09:07:28.694Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-07T09:07:28.694Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-07T09:07:28.694Z] === END PARSED JSON ===
[2025-09-07T09:07:28.694Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:07:28.694Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:07:28.694Z] 📦 Full message: {
  "type": "History",
  "role": "user",
  "content": "Yes."
}
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_LTnKyxE2VGjT4F63kZY0n4RF","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76f...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_LTnKyxE2VGjT4F63kZY0n4RF","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\",\"time\":\"10:00\"}","client_side":true}]}
[2025-09-07T09:07:29.692Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_LTnKyxE2VGjT4F63kZY0n4RF","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\",\"time\":\"10:00\"}","client_side":true}]}
[2025-09-07T09:07:29.692Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_LTnKyxE2VGjT4F63kZY0n4RF",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-09\",\"service_id\":\"19377edc-76fe-4d97-92b2-3bc7a21c8b5b\",\"time\":\"10:00\"}",
      "client_side": true
    }
  ]