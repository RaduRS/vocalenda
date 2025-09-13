[2025-09-13T08:37:39.552Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"What time would you prefer for your haircut today, Saturday?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"What time would you prefer for your haircut today, Saturday?"}
[2025-09-13T08:37:40.922Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"What time would you prefer for your haircut today, Saturday?"}
[2025-09-13T08:37:40.922Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "What time would you prefer for your haircut today, Saturday?"
}
[2025-09-13T08:37:40.922Z] === END PARSED JSON ===
[2025-09-13T08:37:40.922Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:37:40.922Z] 💭 CONVERSATION_TEXT: What time would you prefer for your haircut today, Saturday?
[2025-09-13T08:37:40.922Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: What time would you prefer for your haircut today, Saturday?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"What time would you prefer for your haircut today, Saturday?"}...
Message string: {"type":"History","role":"assistant","content":"What time would you prefer for your haircut today, Saturday?"}
[2025-09-13T08:37:40.933Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"What time would you prefer for your haircut today, Saturday?"}
[2025-09-13T08:37:40.933Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "What time would you prefer for your haircut today, Saturday?"
}
[2025-09-13T08:37:40.933Z] === END PARSED JSON ===
[2025-09-13T08:37:40.933Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:37:40.933Z] 📜 HISTORY: Message logged
[2025-09-13T08:37:40.933Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: What time would you prefer for your haircut today, Saturday?
[2025-09-13T08:37:40.933Z] 📝 Added transcript: [AI] What time would you prefer for your haircut today, Saturday?
[2025-09-13T08:37:40.933Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T08:37:41.005Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T08:37:41.005Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T08:37:41.005Z] === END PARSED JSON ===
[2025-09-13T08:37:41.005Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T08:37:41.005Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T08:37:41.005Z] 🔇 SILENCE: Started tracking
[2025-09-13T08:37:41.005Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T08:37:41.283Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T08:37:41.005Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T08:37:41.005Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-13T08:37:41.005Z] 🔇 SILENCE_CHECK: 2999ms of silence
[2025-09-13T08:37:41.005Z] 🔇 SILENCE_CHECK: 4000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:37:45.148Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:37:45.148Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:37:45.148Z] === END PARSED JSON ===
[2025-09-13T08:37:45.148Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:37:45.148Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:37:45.148Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:37:45.148Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-13T08:37:45.283Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"I want to be at three PM."}...
Message string: {"type":"ConversationText","role":"user","content":"I want to be at three PM."}
[2025-09-13T08:37:47.265Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"I want to be at three PM."}
[2025-09-13T08:37:47.265Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "I want to be at three PM."
}
[2025-09-13T08:37:47.265Z] === END PARSED JSON ===
[2025-09-13T08:37:47.265Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:37:47.265Z] 💭 CONVERSATION_TEXT: I want to be at three PM.
[2025-09-13T08:37:47.265Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: I want to be at three PM.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"I want to be at three PM."}...
Message string: {"type":"History","role":"user","content":"I want to be at three PM."}
[2025-09-13T08:37:47.272Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"I want to be at three PM."}
[2025-09-13T08:37:47.272Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "I want to be at three PM."
}
[2025-09-13T08:37:47.272Z] === END PARSED JSON ===
[2025-09-13T08:37:47.272Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:37:47.272Z] 📜 HISTORY: Message logged
[2025-09-13T08:37:47.272Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: I want to be at three PM.
[2025-09-13T08:37:47.272Z] 📝 Added transcript: [User] I want to be at three PM.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_l4eoWLUFScrBy5YZ3NA0AeBJ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_l4eoWLUFScrBy5YZ3NA0AeBJ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\"}","client_side":true}]}
[2025-09-13T08:37:48.025Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_l4eoWLUFScrBy5YZ3NA0AeBJ","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\"}","client_side":true}]}
[2025-09-13T08:37:48.025Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_l4eoWLUFScrBy5YZ3NA0AeBJ",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-13\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:37:48.025Z] === END PARSED JSON ===
[2025-09-13T08:37:48.025Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:37:48.025Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:37:48.025Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:37:48.025Z] 📋 Functions: [
  {
    "id": "call_l4eoWLUFScrBy5YZ3NA0AeBJ",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-13\"}",
    "client_side": true
  }
]
[2025-09-13T08:37:48.025Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:37:48.026Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:37:48.025Z] 🔧 Processing function: get_available_slots
[2025-09-13T08:37:48.025Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA9be095ec0bbc3c23c29d32b0d62636e7: { callerPhone: '+447469735254' }
[2025-09-13T08:37:48.026Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:37:48.026Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_l4eoWLUFScrBy5YZ3NA0AeBJ",
  "parameters": {
    "date": "2025-09-13"
  }
}
[2025-09-13T08:37:48.026Z] 📋 Function name: get_available_slots
[2025-09-13T08:37:48.026Z] 📊 Parameters: {
  "date": "2025-09-13"
}
[2025-09-13T08:37:48.026Z] 🏢 Business config exists: true
[2025-09-13T08:37:48.026Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_l4eoWLUFScrBy5YZ3NA0AeBJ",
  "parameters": {
    "date": "2025-09-13"
  }
}
[2025-09-13T08:37:48.026Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-13"
}
[2025-09-13T08:37:48.026Z] 🏢 Business config: Gents Barbershop
[2025-09-13T08:37:48.026Z] 📋 Services count: 2
[2025-09-13T08:37:48.026Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-13T08:37:48.026Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-13"
}
📅 Business open on Saturday
📋 Using default service: haircut (Duration: 30 minutes)
[2025-09-13T08:37:48.026Z] 🌐 About to make API call:
[2025-09-13T08:37:48.026Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/slots?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-13
[2025-09-13T08:37:48.026Z] 🔑 Secret exists: true
[2025-09-13T08:37:48.026Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-13T08:37:48.026Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-13T08:37:48.026Z] 📅 Date: 2025-09-13
[2025-09-13T08:37:48.026Z] 📡 API Response status: 200
[2025-09-13T08:37:48.026Z] 📡 API Response ok: true
[2025-09-13T08:37:48.026Z] 📅 Calendar API response: {
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
[2025-09-13T08:37:48.026Z] 📊 Response type: object
[2025-09-13T08:37:48.026Z] 📊 Has slots: true
[2025-09-13T08:37:48.026Z] 📊 Slots count: 11
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
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_l4eoWLUFScrBy5YZ3NA0AeBJ","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\"}","response":"{\"available_slots\":[\"12...
Message string: {"type":"History","function_calls":[{"id":"call_l4eoWLUFScrBy5YZ3NA0AeBJ","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T08:37:51.910Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_l4eoWLUFScrBy5YZ3NA0AeBJ","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T08:37:51.910Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_l4eoWLUFScrBy5YZ3NA0AeBJ",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-13\"}",
      "response": "{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"
    }
  ]
}
[2025-09-13T08:37:51.910Z] === END PARSED JSON ===
[2025-09-13T08:37:51.910Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:37:51.910Z] 📜 HISTORY: Message logged
[2025-09-13T08:37:48.025Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T08:37:52.761Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:37:48.025Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Perfect!"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Perfect!"}
[2025-09-13T08:37:52.871Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Perfect!"}
[2025-09-13T08:37:52.871Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Perfect!"
}
[2025-09-13T08:37:52.871Z] === END PARSED JSON ===
[2025-09-13T08:37:52.871Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:37:52.871Z] 💭 CONVERSATION_TEXT: Perfect!
[2025-09-13T08:37:52.871Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Perfect!
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Perfect!"}...
Message string: {"type":"History","role":"assistant","content":"Perfect!"}
[2025-09-13T08:37:52.880Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Perfect!"}
[2025-09-13T08:37:52.880Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Perfect!"
}
[2025-09-13T08:37:52.880Z] === END PARSED JSON ===
[2025-09-13T08:37:52.880Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:37:52.880Z] 📜 HISTORY: Message logged
[2025-09-13T08:37:52.880Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Perfect!
[2025-09-13T08:37:52.880Z] 📝 Added transcript: [AI] Perfect!
[2025-09-13T08:37:52.880Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:37:53.284Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T08:37:53.042Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:37:53.752Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:37:53.752Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can book you for 3 PM today."
}
[2025-09-13T08:37:53.752Z] === END PARSED JSON ===
[2025-09-13T08:37:53.752Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:37:53.752Z] 💭 CONVERSATION_TEXT: I can book you for 3 PM today.
[2025-09-13T08:37:53.752Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I can book you for 3 PM today.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}...
Message string: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:37:53.753Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T08:37:53.753Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can book you for 3 PM today."
}
[2025-09-13T08:37:53.753Z] === END PARSED JSON ===
[2025-09-13T08:37:53.753Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:37:53.753Z] 📜 HISTORY: Message logged
[2025-09-13T08:37:53.753Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I can book you for 3 PM today.
[2025-09-13T08:37:53.753Z] 📝 Added transcript: [AI] I can book you for 3 PM today.
[2025-09-13T08:37:53.753Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:37:54.052Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for your haircut, Elena?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for your haircut, Elena?"}
[2025-09-13T08:37:55.913Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that appointment for your haircut, Elena?"}
[2025-09-13T08:37:55.913Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I confirm that appointment for your haircut, Elena?"
}
[2025-09-13T08:37:55.913Z] === END PARSED JSON ===
[2025-09-13T08:37:55.913Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:37:55.913Z] 💭 CONVERSATION_TEXT: Shall I confirm that appointment for your haircut, Elena?
[2025-09-13T08:37:55.913Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Shall I confirm that appointment for your haircut, Elena?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for your haircut, Elena?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for your haircut, Elena?"}
[2025-09-13T08:37:55.922Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I confirm that appointment for your haircut, Elena?"}
[2025-09-13T08:37:55.922Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that appointment for your haircut, Elena?"
}
[2025-09-13T08:37:55.922Z] === END PARSED JSON ===
[2025-09-13T08:37:55.922Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:37:55.922Z] 📜 HISTORY: Message logged
[2025-09-13T08:37:55.922Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Shall I confirm that appointment for your haircut, Elena?
[2025-09-13T08:37:55.922Z] 📝 Added transcript: [AI] Shall I confirm that appointment for your haircut, Elena?
[2025-09-13T08:37:55.922Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T08:37:55.978Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T08:37:55.978Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T08:37:55.978Z] === END PARSED JSON ===
[2025-09-13T08:37:55.978Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T08:37:55.978Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T08:37:55.978Z] 🔇 SILENCE: Started tracking
[2025-09-13T08:37:55.978Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T08:37:55.978Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T08:37:57.283Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T08:37:55.978Z] 🔇 SILENCE_CHECK: 2001ms of silence
[2025-09-13T08:37:55.978Z] 🔇 SILENCE_CHECK: 3001ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:37:59.918Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:37:59.918Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:37:59.918Z] === END PARSED JSON ===
[2025-09-13T08:37:59.918Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:37:59.918Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:37:59.918Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:37:59.918Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T08:38:00.302Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T08:38:00.302Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T08:38:00.302Z] === END PARSED JSON ===
[2025-09-13T08:38:00.302Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:38:00.302Z] 💭 CONVERSATION_TEXT: Yes.
[2025-09-13T08:38:00.302Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T08:38:00.313Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T08:38:00.313Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T08:38:00.313Z] === END PARSED JSON ===
[2025-09-13T08:38:00.313Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:38:00.313Z] 📜 HISTORY: Message logged
[2025-09-13T08:38:00.313Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes.
[2025-09-13T08:38:00.313Z] 📝 Added transcript: [User] Yes.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_rg49uQaS2oHsEyQ1YaLzYCtL","name":"get_services","arguments":"{}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_rg49uQaS2oHsEyQ1YaLzYCtL","name":"get_services","arguments":"{}","client_side":true}]}
[2025-09-13T08:38:01.008Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_rg49uQaS2oHsEyQ1YaLzYCtL","name":"get_services","arguments":"{}","client_side":true}]}
[2025-09-13T08:38:01.008Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_rg49uQaS2oHsEyQ1YaLzYCtL",
      "name": "get_services",
      "arguments": "{}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:38:01.008Z] === END PARSED JSON ===
[2025-09-13T08:38:01.008Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:38:01.008Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:38:01.008Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:38:01.008Z] 📋 Functions: [
  {
    "id": "call_rg49uQaS2oHsEyQ1YaLzYCtL",
    "name": "get_services",
    "arguments": "{}",
    "client_side": true
  }
]
[2025-09-13T08:38:01.008Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:38:01.008Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:38:01.008Z] 🔧 Processing function: get_services
[2025-09-13T08:38:01.008Z] 🔧 CALLING: handleFunctionCall for get_services...
📝 Session updated for call CA9be095ec0bbc3c23c29d32b0d62636e7: { callerPhone: '+447469735254' }
[2025-09-13T08:38:01.008Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:38:01.008Z] 🔧 Function call received: {
  "function_name": "get_services",
  "function_call_id": "call_rg49uQaS2oHsEyQ1YaLzYCtL",
  "parameters": {}
}
[2025-09-13T08:38:01.008Z] 📋 Function name: get_services
[2025-09-13T08:38:01.008Z] 📊 Parameters: {}
[2025-09-13T08:38:01.008Z] 🏢 Business config exists: true
[2025-09-13T08:38:01.008Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_services",
  "function_call_id": "call_rg49uQaS2oHsEyQ1YaLzYCtL",
  "parameters": {}
}
🔧 Processing get_services function call
📊 Raw services from config: 2 services found
📋 Mapped services result: [
  {
    "id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "name": "haircut",
    "duration": 30,
    "price": 20,
    "description": null
  },
  {
    "id": "63555ab0-f0ac-48c3-a2b2-766356aeb8f4",
    "name": "beard trim",
    "duration": 15,
    "price": 15,
    "description": null
  }
]
✅ get_services processing complete
✅ Sending get_services response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_rg49uQaS2oHsEyQ1YaLzYCtL","name":"get_services","client_side":true,"arguments":"{}","response":"[{\"id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"name...
Message string: {"type":"History","function_calls":[{"id":"call_rg49uQaS2oHsEyQ1YaLzYCtL","name":"get_services","client_side":true,"arguments":"{}","response":"[{\"id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"name\":\"haircut\",\"duration\":30,\"price\":20,\"description\":null},{\"id\":\"63555ab0-f0ac-48c3-a2b2-766356aeb8f4\",\"name\":\"beard trim\",\"duration\":15,\"price\":15,\"description\":null}]"}]}
[2025-09-13T08:38:01.157Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_rg49uQaS2oHsEyQ1YaLzYCtL","name":"get_services","client_side":true,"arguments":"{}","response":"[{\"id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"name\":\"haircut\",\"duration\":30,\"price\":20,\"description\":null},{\"id\":\"63555ab0-f0ac-48c3-a2b2-766356aeb8f4\",\"name\":\"beard trim\",\"duration\":15,\"price\":15,\"description\":null}]"}]}
[2025-09-13T08:38:01.157Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_rg49uQaS2oHsEyQ1YaLzYCtL",
      "name": "get_services",
      "client_side": true,
      "arguments": "{}",
      "response": "[{\"id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"name\":\"haircut\",\"duration\":30,\"price\":20,\"description\":null},{\"id\":\"63555ab0-f0ac-48c3-a2b2-766356aeb8f4\",\"name\":\"beard trim\",\"duration\":15,\"price\":15,\"description\":null}]"
    }
  ]
}
[2025-09-13T08:38:01.157Z] === END PARSED JSON ===
[2025-09-13T08:38:01.157Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:38:01.157Z] 📜 HISTORY: Message logged
[2025-09-13T08:38:01.008Z] ✅ COMPLETED: handleFunctionCall for get_services
[2025-09-13T08:38:02.009Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:38:01.008Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_pdRdYJVliZzidY8yJ3JQpPVZ","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa8...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_pdRdYJVliZzidY8yJ3JQpPVZ","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:38:02.445Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_pdRdYJVliZzidY8yJ3JQpPVZ","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:38:02.445Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_pdRdYJVliZzidY8yJ3JQpPVZ",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:38:02.445Z] === END PARSED JSON ===
[2025-09-13T08:38:02.445Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:38:02.445Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:38:02.445Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:38:02.445Z] 📋 Functions: [
  {
    "id": "call_pdRdYJVliZzidY8yJ3JQpPVZ",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
    "client_side": true
  }
]
[2025-09-13T08:38:02.445Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:38:02.445Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:38:02.445Z] 🔧 Processing function: create_booking
[2025-09-13T08:38:02.445Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA9be095ec0bbc3c23c29d32b0d62636e7: { callerPhone: '+447469735254' }
[2025-09-13T08:38:02.445Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:38:02.445Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_pdRdYJVliZzidY8yJ3JQpPVZ",
  "parameters": {
    "customer_name": "Elena",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "15:00"
  }
}
[2025-09-13T08:38:02.445Z] 📋 Function name: create_booking
[2025-09-13T08:38:02.445Z] 📊 Parameters: {
  "customer_name": "Elena",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "15:00"
}
[2025-09-13T08:38:02.445Z] 🏢 Business config exists: true
[2025-09-13T08:38:02.445Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_pdRdYJVliZzidY8yJ3JQpPVZ",
  "parameters": {
    "customer_name": "Elena",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "15:00"
  }
}
✅ TRACKING: Added function call ID call_pdRdYJVliZzidY8yJ3JQpPVZ to processed set
🎯 createBooking called with params: {
  "customer_name": "Elena",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "15:00"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CA9be095ec0bbc3c23c29d32b0d62636e7: {
  callerPhone: '+447469735254',
  customerName: 'Elena',
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
❌ Failed to check availability: 400
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_pdRdYJVliZzidY8yJ3JQpPVZ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_pdRdYJVliZzidY8yJ3JQpPVZ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","response":"{\"error\":\"Unable to verify slot availability. Please try again.\"}"}]}
[2025-09-13T08:38:03.994Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_pdRdYJVliZzidY8yJ3JQpPVZ","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","response":"{\"error\":\"Unable to verify slot availability. Please try again.\"}"}]}
[2025-09-13T08:38:03.994Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_pdRdYJVliZzidY8yJ3JQpPVZ",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
      "response": "{\"error\":\"Unable to verify slot availability. Please try again.\"}"
    }
  ]
}
[2025-09-13T08:38:03.994Z] === END PARSED JSON ===
[2025-09-13T08:38:03.994Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:38:03.994Z] 📜 HISTORY: Message logged
[2025-09-13T08:38:02.445Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T08:38:04.845Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:38:02.445Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems there was an issue confirming the 3 PM slot for your haircut today."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems there was an issue confirming the 3 PM slot for your haircut today."}
[2025-09-13T08:38:05.027Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems there was an issue confirming the 3 PM slot for your haircut today."}
[2025-09-13T08:38:05.027Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems there was an issue confirming the 3 PM slot for your haircut today."
}
[2025-09-13T08:38:05.027Z] === END PARSED JSON ===
[2025-09-13T08:38:05.027Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:38:05.027Z] 💭 CONVERSATION_TEXT: It seems there was an issue confirming the 3 PM slot for your haircut today.
[2025-09-13T08:38:05.027Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems there was an issue confirming the 3 PM slot for your haircut today.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems there was an issue confirming the 3 PM slot for your haircut today."}...
Message string: {"type":"History","role":"assistant","content":"It seems there was an issue confirming the 3 PM slot for your haircut today."}
[2025-09-13T08:38:05.027Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems there was an issue confirming the 3 PM slot for your haircut today."}
[2025-09-13T08:38:05.027Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems there was an issue confirming the 3 PM slot for your haircut today."
}
[2025-09-13T08:38:05.027Z] === END PARSED JSON ===
[2025-09-13T08:38:05.027Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:38:05.027Z] 📜 HISTORY: Message logged
[2025-09-13T08:38:05.027Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems there was an issue confirming the 3 PM slot for your haircut today.
[2025-09-13T08:38:05.027Z] 📝 Added transcript: [AI] It seems there was an issue confirming the 3 PM slot for your haircut today.
[2025-09-13T08:38:05.027Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:38:05.285Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:38:05.714Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:38:05.714Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:38:05.714Z] === END PARSED JSON ===
[2025-09-13T08:38:05.714Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:38:05.714Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:38:05.714Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:38:05.714Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"I said they're upset. No? They're upset? No."}...
Message string: {"type":"ConversationText","role":"user","content":"I said they're upset. No? They're upset? No."}
[2025-09-13T08:38:05.733Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"I said they're upset. No? They're upset? No."}
[2025-09-13T08:38:05.733Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "I said they're upset. No? They're upset? No."
}
[2025-09-13T08:38:05.733Z] === END PARSED JSON ===
[2025-09-13T08:38:05.733Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:38:05.733Z] 💭 CONVERSATION_TEXT: I said they're upset. No? They're upset? No.
[2025-09-13T08:38:05.733Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: I said they're upset. No? They're upset? No.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"I said they're upset. No? They're upset? No."}...
Message string: {"type":"History","role":"user","content":"I said they're upset. No? They're upset? No."}
[2025-09-13T08:38:05.733Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"I said they're upset. No? They're upset? No."}
[2025-09-13T08:38:05.733Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "I said they're upset. No? They're upset? No."
}
[2025-09-13T08:38:05.733Z] === END PARSED JSON ===
[2025-09-13T08:38:05.733Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:38:05.733Z] 📜 HISTORY: Message logged
[2025-09-13T08:38:05.733Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: I said they're upset. No? They're upset? No.
[2025-09-13T08:38:05.733Z] 📝 Added transcript: [User] I said they're upset. No? They're upset? No.
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T08:38:05.883Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T08:38:05.883Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T08:38:05.883Z] === END PARSED JSON ===
[2025-09-13T08:38:05.883Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T08:38:05.883Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T08:38:05.883Z] 🔇 SILENCE: Started tracking
[2025-09-13T08:38:05.883Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I understand you want the haircut booked at 3 PM today."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I understand you want the haircut booked at 3 PM today."}
[2025-09-13T08:38:06.851Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I understand you want the haircut booked at 3 PM today."}
[2025-09-13T08:38:06.851Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I understand you want the haircut booked at 3 PM today."
}
[2025-09-13T08:38:06.851Z] === END PARSED JSON ===
[2025-09-13T08:38:06.851Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:38:06.851Z] 💭 CONVERSATION_TEXT: I understand you want the haircut booked at 3 PM today.
[2025-09-13T08:38:06.851Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I understand you want the haircut booked at 3 PM today.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I understand you want the haircut booked at 3 PM today."}...
Message string: {"type":"History","role":"assistant","content":"I understand you want the haircut booked at 3 PM today."}
[2025-09-13T08:38:06.859Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I understand you want the haircut booked at 3 PM today."}
[2025-09-13T08:38:06.859Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I understand you want the haircut booked at 3 PM today."
}
[2025-09-13T08:38:06.859Z] === END PARSED JSON ===
[2025-09-13T08:38:06.859Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:38:06.859Z] 📜 HISTORY: Message logged
[2025-09-13T08:38:06.859Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I understand you want the haircut booked at 3 PM today.
[2025-09-13T08:38:06.859Z] 📝 Added transcript: [AI] I understand you want the haircut booked at 3 PM today.
[2025-09-13T08:38:06.859Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:38:05.883Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T08:38:05.883Z] 🔇 SILENCE_CHECK: 2000ms of silence
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_tH2EbiuLS1KvErVAVP4uiVt2","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa8...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_tH2EbiuLS1KvErVAVP4uiVt2","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:38:08.007Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_tH2EbiuLS1KvErVAVP4uiVt2","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:38:08.007Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_tH2EbiuLS1KvErVAVP4uiVt2",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:38:08.007Z] === END PARSED JSON ===
[2025-09-13T08:38:08.007Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:38:08.007Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:38:08.007Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:38:08.007Z] 📋 Functions: [
  {
    "id": "call_tH2EbiuLS1KvErVAVP4uiVt2",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
    "client_side": true
  }
]
[2025-09-13T08:38:08.007Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:38:08.007Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:38:08.007Z] 🔧 Processing function: create_booking
[2025-09-13T08:38:08.007Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA9be095ec0bbc3c23c29d32b0d62636e7: {
  callerPhone: '+447469735254',
  customerName: 'Elena',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: '4395775e-fa81-4a69-8425-e46c3853dea4',
  lastServiceName: 'haircut',
  lastServiceDuration: 30
}
[2025-09-13T08:38:08.008Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:38:08.008Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_tH2EbiuLS1KvErVAVP4uiVt2",
  "parameters": {
    "customer_name": "Elena",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "15:00"
  }
}
[2025-09-13T08:38:08.008Z] 📋 Function name: create_booking
[2025-09-13T08:38:08.008Z] 📊 Parameters: {
  "customer_name": "Elena",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "15:00"
}
[2025-09-13T08:38:08.008Z] 🏢 Business config exists: true
[2025-09-13T08:38:08.008Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_tH2EbiuLS1KvErVAVP4uiVt2",
  "parameters": {
    "customer_name": "Elena",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "15:00"
  }
}
✅ TRACKING: Added function call ID call_tH2EbiuLS1KvErVAVP4uiVt2 to processed set
🎯 createBooking called with params: {
  "customer_name": "Elena",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "15:00"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CA9be095ec0bbc3c23c29d32b0d62636e7: {
  callerPhone: '+447469735254',
  customerName: 'Elena',
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