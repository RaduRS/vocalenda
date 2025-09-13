}
[2025-09-13T09:10:44.585Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-13",
  "service_id": "haircut"
}
[2025-09-13T09:10:44.585Z] 🏢 Business config: Gents Barbershop
[2025-09-13T09:10:44.585Z] 📋 Services count: 2
[2025-09-13T09:10:44.585Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-13T09:10:44.585Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-13",
  "service_id": "haircut"
}
📅 Business open on Saturday
📋 Found service by name 'haircut' -> ID: 4395775e-fa81-4a69-8425-e46c3853dea4
📋 Using service: haircut (Duration: 30 minutes)
[2025-09-13T09:10:44.585Z] 🌐 About to make API call:
[2025-09-13T09:10:44.585Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/availability?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-13
[2025-09-13T09:10:44.585Z] 🔑 Secret exists: true
[2025-09-13T09:10:44.585Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-13T09:10:44.585Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-13T09:10:44.585Z] 📅 Date: 2025-09-13
[2025-09-13T09:10:44.585Z] 📡 API Response status: 200
[2025-09-13T09:10:44.585Z] 📡 API Response ok: true
[2025-09-13T09:10:44.585Z] 📅 Calendar API response: {
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
[2025-09-13T09:10:44.585Z] 📊 Response type: object
[2025-09-13T09:10:44.585Z] 📊 Has slots: true
[2025-09-13T09:10:44.585Z] 📊 Slots count: 11
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
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_rmb0IjO8cYkwDIP3ZVsCsbk7","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","response":...
Message string: {"type":"History","function_calls":[{"id":"call_rmb0IjO8cYkwDIP3ZVsCsbk7","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T09:10:47.490Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_rmb0IjO8cYkwDIP3ZVsCsbk7","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T09:10:47.490Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_rmb0IjO8cYkwDIP3ZVsCsbk7",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"haircut\"}",
      "response": "{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"
    }
  ]
}
[2025-09-13T09:10:47.490Z] === END PARSED JSON ===
[2025-09-13T09:10:47.490Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:10:47.490Z] 📜 HISTORY: Message logged
[2025-09-13T09:10:44.584Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T09:10:48.338Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T09:10:44.584Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Perfect!"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Perfect!"}
[2025-09-13T09:10:48.604Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Perfect!"}
[2025-09-13T09:10:48.604Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Perfect!"
}
[2025-09-13T09:10:48.604Z] === END PARSED JSON ===
[2025-09-13T09:10:48.604Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:10:48.604Z] 💭 CONVERSATION_TEXT: Perfect!
[2025-09-13T09:10:48.604Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Perfect!
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Perfect!"}...
Message string: {"type":"History","role":"assistant","content":"Perfect!"}
[2025-09-13T09:10:48.604Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Perfect!"}
[2025-09-13T09:10:48.604Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Perfect!"
}
[2025-09-13T09:10:48.604Z] === END PARSED JSON ===
[2025-09-13T09:10:48.604Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:10:48.604Z] 📜 HISTORY: Message logged
[2025-09-13T09:10:48.604Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Perfect!
[2025-09-13T09:10:48.604Z] 📝 Added transcript: [AI] Perfect!
[2025-09-13T09:10:48.604Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T09:10:48.754Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T09:10:49.445Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T09:10:49.445Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can book you for 3 PM today."
}
[2025-09-13T09:10:49.445Z] === END PARSED JSON ===
[2025-09-13T09:10:49.445Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:10:49.445Z] 💭 CONVERSATION_TEXT: I can book you for 3 PM today.
[2025-09-13T09:10:49.445Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I can book you for 3 PM today.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}...
Message string: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T09:10:49.446Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can book you for 3 PM today."}
[2025-09-13T09:10:49.446Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can book you for 3 PM today."
}
[2025-09-13T09:10:49.446Z] === END PARSED JSON ===
[2025-09-13T09:10:49.446Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:10:49.446Z] 📜 HISTORY: Message logged
[2025-09-13T09:10:49.446Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I can book you for 3 PM today.
[2025-09-13T09:10:49.446Z] 📝 Added transcript: [AI] I can book you for 3 PM today.
[2025-09-13T09:10:49.446Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T09:10:49.907Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T09:10:49.907Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T09:10:49.907Z] === END PARSED JSON ===
[2025-09-13T09:10:49.907Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T09:10:49.907Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T09:10:49.907Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T09:10:49.907Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T09:10:49.964Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T09:10:49.964Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T09:10:49.964Z] === END PARSED JSON ===
[2025-09-13T09:10:49.964Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T09:10:49.964Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T09:10:49.964Z] 🔇 SILENCE: Started tracking
[2025-09-13T09:10:49.964Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Hello?"}...
Message string: {"type":"ConversationText","role":"user","content":"Hello?"}
[2025-09-13T09:10:50.146Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Hello?"}
[2025-09-13T09:10:50.146Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Hello?"
}
[2025-09-13T09:10:50.146Z] === END PARSED JSON ===
[2025-09-13T09:10:50.146Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:10:50.146Z] 💭 CONVERSATION_TEXT: Hello?
[2025-09-13T09:10:50.146Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Hello?
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Hello?"}...
Message string: {"type":"History","role":"user","content":"Hello?"}
[2025-09-13T09:10:50.158Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Hello?"}
[2025-09-13T09:10:50.158Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Hello?"
}
[2025-09-13T09:10:50.158Z] === END PARSED JSON ===
[2025-09-13T09:10:50.158Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:10:50.158Z] 📜 HISTORY: Message logged
[2025-09-13T09:10:50.158Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Hello?
[2025-09-13T09:10:50.158Z] 📝 Added transcript: [User] Hello?
[2025-09-13T09:10:49.964Z] 🔇 SILENCE_CHECK: 1000ms of silence
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I confirm your haircut appointment for 3 PM today, Elena?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm your haircut appointment for 3 PM today, Elena?"}
[2025-09-13T09:10:51.048Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I confirm your haircut appointment for 3 PM today, Elena?"}
[2025-09-13T09:10:51.048Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I confirm your haircut appointment for 3 PM today, Elena?"
}
[2025-09-13T09:10:51.048Z] === END PARSED JSON ===
[2025-09-13T09:10:51.048Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:10:51.048Z] 💭 CONVERSATION_TEXT: Shall I confirm your haircut appointment for 3 PM today, Elena?
[2025-09-13T09:10:51.048Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Shall I confirm your haircut appointment for 3 PM today, Elena?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I confirm your haircut appointment for 3 PM today, Elena?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I confirm your haircut appointment for 3 PM today, Elena?"}
[2025-09-13T09:10:51.048Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I confirm your haircut appointment for 3 PM today, Elena?"}
[2025-09-13T09:10:51.048Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm your haircut appointment for 3 PM today, Elena?"
}
[2025-09-13T09:10:51.048Z] === END PARSED JSON ===
[2025-09-13T09:10:51.048Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:10:51.048Z] 📜 HISTORY: Message logged
[2025-09-13T09:10:51.048Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Shall I confirm your haircut appointment for 3 PM today, Elena?
[2025-09-13T09:10:51.048Z] 📝 Added transcript: [AI] Shall I confirm your haircut appointment for 3 PM today, Elena?
[2025-09-13T09:10:51.048Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T09:10:51.349Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T09:10:49.964Z] 🔇 SILENCE_CHECK: 1999ms of silence
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T09:10:52.616Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T09:10:52.616Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T09:10:52.616Z] === END PARSED JSON ===
[2025-09-13T09:10:52.616Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T09:10:52.616Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T09:10:52.616Z] 🔇 SILENCE: Started tracking
[2025-09-13T09:10:52.616Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T09:10:52.616Z] 🔇 SILENCE_CHECK: 999ms of silence
[2025-09-13T09:10:52.616Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-13T09:10:55.349Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T09:10:52.616Z] 🔇 SILENCE_CHECK: 2999ms of silence
[2025-09-13T09:10:52.616Z] 🔇 SILENCE_CHECK: 4001ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T09:10:56.885Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T09:10:56.885Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T09:10:56.885Z] === END PARSED JSON ===
[2025-09-13T09:10:56.885Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T09:10:56.885Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T09:10:56.885Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T09:10:56.885Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-13T09:10:59.349Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T09:10:59.444Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T09:10:59.444Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T09:10:59.444Z] === END PARSED JSON ===
[2025-09-13T09:10:59.444Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:10:59.444Z] 💭 CONVERSATION_TEXT: Yes.
[2025-09-13T09:10:59.444Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T09:10:59.456Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T09:10:59.456Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T09:10:59.456Z] === END PARSED JSON ===
[2025-09-13T09:10:59.456Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:10:59.456Z] 📜 HISTORY: Message logged
[2025-09-13T09:10:59.456Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes.
[2025-09-13T09:10:59.456Z] 📝 Added transcript: [User] Yes.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_lmM1DSlb1epFCaSm3M3Gp67I","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_lmM1DSlb1epFCaSm3M3Gp67I","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T09:11:00.264Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_lmM1DSlb1epFCaSm3M3Gp67I","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T09:11:00.264Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_lmM1DSlb1epFCaSm3M3Gp67I",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T09:11:00.264Z] === END PARSED JSON ===
[2025-09-13T09:11:00.264Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T09:11:00.264Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T09:11:00.264Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T09:11:00.264Z] 📋 Functions: [
  {
    "id": "call_lmM1DSlb1epFCaSm3M3Gp67I",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
    "client_side": true
  }
]
[2025-09-13T09:11:00.264Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T09:11:00.264Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T09:11:00.264Z] 🔧 Processing function: create_booking
[2025-09-13T09:11:00.264Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CAf59827c515a8bf634e7f15f8cf0c38ce: { callerPhone: '+447469735254' }
[2025-09-13T09:11:00.265Z] 🚀 STARTING handleFunctionCall
[2025-09-13T09:11:00.265Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_lmM1DSlb1epFCaSm3M3Gp67I",
  "parameters": {
    "customer_name": "Elena",
    "date": "2025-09-13",
    "service_id": "haircut",
    "time": "15:00"
  }
}
[2025-09-13T09:11:00.265Z] 📋 Function name: create_booking
[2025-09-13T09:11:00.265Z] 📊 Parameters: {
  "customer_name": "Elena",
  "date": "2025-09-13",
  "service_id": "haircut",
  "time": "15:00"
}
[2025-09-13T09:11:00.265Z] 🏢 Business config exists: true
[2025-09-13T09:11:00.265Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_lmM1DSlb1epFCaSm3M3Gp67I",
  "parameters": {
    "customer_name": "Elena",
    "date": "2025-09-13",
    "service_id": "haircut",
    "time": "15:00"
  }
}
✅ TRACKING: Added function call ID call_lmM1DSlb1epFCaSm3M3Gp67I to processed set
🎯 createBooking called with params: {
  "customer_name": "Elena",
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
📝 Session updated for call CAf59827c515a8bf634e7f15f8cf0c38ce: {
  callerPhone: '+447469735254',
  customerName: 'Elena',
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
  "customerName": "Elena",
  "customerPhone": "+447469735254",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Elena - Phone: +447469735254"
}
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "b2164545-409d-492b-b83c-284405bab9ba",
  "calendarEventId": "04hjdrasdopo7bgjlme88dsj54"
}
✅ Appointment created successfully via API: b2164545-409d-492b-b83c-284405bab9ba
📅 Calendar event ID: 04hjdrasdopo7bgjlme88dsj54
📞 Updating call log with customer name: Elena
Failed to update call customer: {
✅ Call log updated with customer name: CAf59827c515a8bf634e7f15f8cf0c38ce
  code: 'PGRST204',
  details: null,
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
}
📝 Session updated for call CAf59827c515a8bf634e7f15f8cf0c38ce: {
  callerPhone: '+447469735254',
  customerName: 'Elena',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  lastAppointmentId: 'b2164545-409d-492b-b83c-284405bab9ba'
}
📋 Stored appointment ID in session: b2164545-409d-492b-b83c-284405bab9ba
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_lmM1DSlb1epFCaSm3M3Gp67I","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_lmM1DSlb1epFCaSm3M3Gp67I","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","response":"{\"success\":true,\"appointment_id\":\"b2164545-409d-492b-b83c-284405bab9ba\",\"calendar_event_id\":\"04hjdrasdopo7bgjlme88dsj54\",\"message\":\"Appointment booked for Elena on 2025-09-13 at 15:00 for haircut Event has been added to your Google Calendar.\"}"}]}
[2025-09-13T09:11:04.554Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_lmM1DSlb1epFCaSm3M3Gp67I","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}","response":"{\"success\":true,\"appointment_id\":\"b2164545-409d-492b-b83c-284405bab9ba\",\"calendar_event_id\":\"04hjdrasdopo7bgjlme88dsj54\",\"message\":\"Appointment booked for Elena on 2025-09-13 at 15:00 for haircut Event has been added to your Google Calendar.\"}"}]}
[2025-09-13T09:11:04.554Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_lmM1DSlb1epFCaSm3M3Gp67I",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"haircut\",\"time\":\"15:00\"}",
      "response": "{\"success\":true,\"appointment_id\":\"b2164545-409d-492b-b83c-284405bab9ba\",\"calendar_event_id\":\"04hjdrasdopo7bgjlme88dsj54\",\"message\":\"Appointment booked for Elena on 2025-09-13 at 15:00 for haircut Event has been added to your Google Calendar.\"}"
    }
  ]
}
[2025-09-13T09:11:04.554Z] === END PARSED JSON ===
[2025-09-13T09:11:04.554Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:11:04.554Z] 📜 HISTORY: Message logged
[2025-09-13T09:11:00.264Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T09:11:05.401Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T09:11:00.264Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Your appointment is confirmed for a haircut at 3 PM today!"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Your appointment is confirmed for a haircut at 3 PM today!"}
[2025-09-13T09:11:07.324Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Your appointment is confirmed for a haircut at 3 PM today!"}
[2025-09-13T09:11:07.324Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Your appointment is confirmed for a haircut at 3 PM today!"
}
[2025-09-13T09:11:07.324Z] === END PARSED JSON ===
[2025-09-13T09:11:07.324Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:11:07.324Z] 💭 CONVERSATION_TEXT: Your appointment is confirmed for a haircut at 3 PM today!
[2025-09-13T09:11:07.324Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Your appointment is confirmed for a haircut at 3 PM today!
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Your appointment is confirmed for a haircut at 3 PM today!"}...
Message string: {"type":"History","role":"assistant","content":"Your appointment is confirmed for a haircut at 3 PM today!"}
[2025-09-13T09:11:07.324Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Your appointment is confirmed for a haircut at 3 PM today!"}
[2025-09-13T09:11:07.324Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Your appointment is confirmed for a haircut at 3 PM today!"
}