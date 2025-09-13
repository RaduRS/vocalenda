[2025-09-13T09:40:15.129Z] === END PARSED JSON ===
[2025-09-13T09:40:15.129Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T09:40:15.129Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T09:40:15.129Z] 🔇 SILENCE: Started tracking
[2025-09-13T09:40:15.129Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T09:40:15.129Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T09:40:15.129Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-13T09:40:17.421Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T09:40:15.129Z] 🔇 SILENCE_CHECK: 3000ms of silence
[2025-09-13T09:40:15.129Z] 🔇 SILENCE_CHECK: 4000ms of silence
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Okay. What about two PM? Can I do two PM? Hello? Stop talking over me."}...
Message string: {"type":"ConversationText","role":"user","content":"Okay. What about two PM? Can I do two PM? Hello? Stop talking over me."}
[2025-09-13T09:40:20.037Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Okay. What about two PM? Can I do two PM? Hello? Stop talking over me."}
[2025-09-13T09:40:20.037Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Okay. What about two PM? Can I do two PM? Hello? Stop talking over me."
}
[2025-09-13T09:40:20.037Z] === END PARSED JSON ===
[2025-09-13T09:40:20.037Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:40:20.037Z] 💭 CONVERSATION_TEXT: Okay. What about two PM? Can I do two PM? Hello? Stop talking over me.
[2025-09-13T09:40:20.037Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Okay. What about two PM? Can I do two PM? Hello? Stop talking over me.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Okay. What about two PM? Can I do two PM? Hello? Stop talking over me."}...
Message string: {"type":"History","role":"user","content":"Okay. What about two PM? Can I do two PM? Hello? Stop talking over me."}
[2025-09-13T09:40:20.049Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Okay. What about two PM? Can I do two PM? Hello? Stop talking over me."}
[2025-09-13T09:40:20.049Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Okay. What about two PM? Can I do two PM? Hello? Stop talking over me."
}
[2025-09-13T09:40:20.049Z] === END PARSED JSON ===
[2025-09-13T09:40:20.049Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:40:20.049Z] 📜 HISTORY: Message logged
[2025-09-13T09:40:20.049Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Okay. What about two PM? Can I do two PM? Hello? Stop talking over me.
[2025-09-13T09:40:20.049Z] 📝 Added transcript: [User] Okay. What about two PM? Can I do two PM? Hello? Stop talking over me.
[2025-09-13T09:40:15.129Z] 🔇 SILENCE_CHECK: 5001ms of silence
[2025-09-13T09:40:15.129Z] 🔇 SILENCE_CHECK: 6001ms of silence
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_I6I2amG4grSY9L49uGYAsOJI","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_I6I2amG4grSY9L49uGYAsOJI","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","client_side":true}]}
[2025-09-13T09:40:21.253Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_I6I2amG4grSY9L49uGYAsOJI","name":"get_available_slots","arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","client_side":true}]}
[2025-09-13T09:40:21.253Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_I6I2amG4grSY9L49uGYAsOJI",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T09:40:21.253Z] === END PARSED JSON ===
[2025-09-13T09:40:21.253Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T09:40:21.253Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T09:40:21.253Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T09:40:21.253Z] 📋 Functions: [
  {
    "id": "call_I6I2amG4grSY9L49uGYAsOJI",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
    "client_side": true
  }
]
[2025-09-13T09:40:21.253Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T09:40:21.253Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T09:40:21.253Z] 🔧 Processing function: get_available_slots
[2025-09-13T09:40:21.253Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA9f77d254c72664f4083020bbfe22ef9a: { callerPhone: '+447469735254' }
[2025-09-13T09:40:21.253Z] 🚀 STARTING handleFunctionCall
[2025-09-13T09:40:21.253Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_I6I2amG4grSY9L49uGYAsOJI",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
  }
}
[2025-09-13T09:40:21.253Z] 📋 Function name: get_available_slots
[2025-09-13T09:40:21.253Z] 📊 Parameters: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T09:40:21.253Z] 🏢 Business config exists: true
[2025-09-13T09:40:21.253Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_I6I2amG4grSY9L49uGYAsOJI",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
  }
}
[2025-09-13T09:40:21.253Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T09:40:21.253Z] 🏢 Business config: Gents Barbershop
[2025-09-13T09:40:21.253Z] 📋 Services count: 2
[2025-09-13T09:40:21.253Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-13T09:40:21.253Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
📅 Business open on Saturday
📋 Using service: haircut (Duration: 30 minutes)
[2025-09-13T09:40:21.253Z] 🌐 About to make API call:
[2025-09-13T09:40:21.253Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/availability?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-13
[2025-09-13T09:40:21.253Z] 🔑 Secret exists: true
[2025-09-13T09:40:21.253Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-13T09:40:21.253Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-13T09:40:21.253Z] 📅 Date: 2025-09-13
[2025-09-13T09:40:21.253Z] 📡 API Response status: 200
[2025-09-13T09:40:21.253Z] 📡 API Response ok: true
[2025-09-13T09:40:21.253Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-13T11:00:00.000Z",
      "end": "2025-09-13T11:30:00.000Z",
      "startTime": "12:00",
      "endTime": "12:30"
    },
    {
      "start": "2025-09-13T11:15:00.000Z",
      "end": "2025-09-13T11:45:00.000Z",
      "startTime": "12:15",
      "endTime": "12:45"
    },
    {
      "start": "2025-09-13T11:30:00.000Z",
      "end": "2025-09-13T12:00:00.000Z",
      "startTime": "12:30",
      "endTime": "13:00"
    },
    {
      "start": "2025-09-13T11:45:00.000Z",
      "end": "2025-09-13T12:15:00.000Z",
      "startTime": "12:45",
      "endTime": "13:15"
    },
    {
      "start": "2025-09-13T12:00:00.000Z",
      "end": "2025-09-13T12:30:00.000Z",
      "startTime": "13:00",
      "endTime": "13:30"
    },
    {
      "start": "2025-09-13T12:15:00.000Z",
      "end": "2025-09-13T12:45:00.000Z",
      "startTime": "13:15",
      "endTime": "13:45"
    },
    {
      "start": "2025-09-13T12:30:00.000Z",
      "end": "2025-09-13T13:00:00.000Z",
      "startTime": "13:30",
      "endTime": "14:00"
    },
    {
      "start": "2025-09-13T12:45:00.000Z",
      "end": "2025-09-13T13:15:00.000Z",
      "startTime": "13:45",
      "endTime": "14:15"
    },
    {
      "start": "2025-09-13T13:00:00.000Z",
      "end": "2025-09-13T13:30:00.000Z",
      "startTime": "14:00",
      "endTime": "14:30"
    },
    {
      "start": "2025-09-13T13:15:00.000Z",
      "end": "2025-09-13T13:45:00.000Z",
      "startTime": "14:15",
      "endTime": "14:45"
    },
    {
      "start": "2025-09-13T13:30:00.000Z",
      "end": "2025-09-13T14:00:00.000Z",
      "startTime": "14:30",
      "endTime": "15:00"
    }
  ],
  "date": "2025-09-13",
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T09:40:21.253Z] 📊 Response type: object
[2025-09-13T09:40:21.253Z] 📊 Has slots: true
[2025-09-13T09:40:21.253Z] 📊 Slots count: 11
✅ Available time slots: [
  '12:00', '12:15',
  '12:30', '12:45',
  '13:00', '13:15',
  '13:30', '13:45',
  '14:00', '14:15',
  '14:30'
]
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_I6I2amG4grSY9L49uGYAsOJI","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425...
Message string: {"type":"History","function_calls":[{"id":"call_I6I2amG4grSY9L49uGYAsOJI","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"14:30\"]}"}]}
[2025-09-13T09:40:22.709Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_I6I2amG4grSY9L49uGYAsOJI","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"14:30\"]}"}]}
[2025-09-13T09:40:22.709Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_I6I2amG4grSY9L49uGYAsOJI",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
      "response": "{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"14:30\"]}"
    }
  ]
}
[2025-09-13T09:40:22.709Z] === END PARSED JSON ===
[2025-09-13T09:40:22.709Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:40:22.709Z] 📜 HISTORY: Message logged
[2025-09-13T09:40:21.253Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T09:40:23.562Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T09:40:21.253Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Yes, Elena, 2 PM is available for your haircut today."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Yes, Elena, 2 PM is available for your haircut today."}
[2025-09-13T09:40:23.643Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Yes, Elena, 2 PM is available for your haircut today."}
[2025-09-13T09:40:23.643Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Yes, Elena, 2 PM is available for your haircut today."
}
[2025-09-13T09:40:23.643Z] === END PARSED JSON ===
[2025-09-13T09:40:23.643Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:40:23.643Z] 💭 CONVERSATION_TEXT: Yes, Elena, 2 PM is available for your haircut today.
[2025-09-13T09:40:23.643Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Yes, Elena, 2 PM is available for your haircut today.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Yes, Elena, 2 PM is available for your haircut today."}...
Message string: {"type":"History","role":"assistant","content":"Yes, Elena, 2 PM is available for your haircut today."}
[2025-09-13T09:40:23.644Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Yes, Elena, 2 PM is available for your haircut today."}
[2025-09-13T09:40:23.644Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Yes, Elena, 2 PM is available for your haircut today."
}
[2025-09-13T09:40:23.644Z] === END PARSED JSON ===
[2025-09-13T09:40:23.644Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:40:23.644Z] 📜 HISTORY: Message logged
[2025-09-13T09:40:23.644Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Yes, Elena, 2 PM is available for your haircut today.
[2025-09-13T09:40:23.644Z] 📝 Added transcript: [AI] Yes, Elena, 2 PM is available for your haircut today.
[2025-09-13T09:40:23.644Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T09:40:25.421Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T09:40:25.180Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would you like me to book that time for you?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would you like me to book that time for you?"}
[2025-09-13T09:40:27.605Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would you like me to book that time for you?"}
[2025-09-13T09:40:27.605Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would you like me to book that time for you?"
}
[2025-09-13T09:40:27.605Z] === END PARSED JSON ===
[2025-09-13T09:40:27.605Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:40:27.605Z] 💭 CONVERSATION_TEXT: Would you like me to book that time for you?
[2025-09-13T09:40:27.605Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Would you like me to book that time for you?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would you like me to book that time for you?"}...
Message string: {"type":"History","role":"assistant","content":"Would you like me to book that time for you?"}
[2025-09-13T09:40:27.753Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would you like me to book that time for you?"}
[2025-09-13T09:40:27.753Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would you like me to book that time for you?"
}
[2025-09-13T09:40:27.753Z] === END PARSED JSON ===
[2025-09-13T09:40:27.753Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:40:27.753Z] 📜 HISTORY: Message logged
[2025-09-13T09:40:27.753Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Would you like me to book that time for you?
[2025-09-13T09:40:27.753Z] 📝 Added transcript: [AI] Would you like me to book that time for you?
[2025-09-13T09:40:27.753Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T09:40:27.754Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T09:40:27.754Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T09:40:27.754Z] === END PARSED JSON ===
[2025-09-13T09:40:27.754Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T09:40:27.754Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T09:40:27.754Z] 🔇 SILENCE: Started tracking
[2025-09-13T09:40:27.754Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T09:40:27.754Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T09:40:29.421Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T09:40:27.754Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-13T09:40:27.754Z] 🔇 SILENCE_CHECK: 3000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T09:40:30.900Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T09:40:30.900Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T09:40:30.900Z] === END PARSED JSON ===
[2025-09-13T09:40:30.900Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T09:40:30.900Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T09:40:30.900Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T09:40:30.900Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T09:40:31.140Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T09:40:31.140Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T09:40:31.140Z] === END PARSED JSON ===
[2025-09-13T09:40:31.140Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:40:31.140Z] 💭 CONVERSATION_TEXT: Yes.
[2025-09-13T09:40:31.140Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T09:40:31.152Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T09:40:31.152Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T09:40:31.152Z] === END PARSED JSON ===
[2025-09-13T09:40:31.152Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:40:31.152Z] 📜 HISTORY: Message logged
[2025-09-13T09:40:31.152Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes.
[2025-09-13T09:40:31.152Z] 📝 Added transcript: [User] Yes.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_ZYdWEpb1Fmo7I8giU0TImlzo","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa8...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_ZYdWEpb1Fmo7I8giU0TImlzo","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"14:00\"}","client_side":true}]}
[2025-09-13T09:40:32.120Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_ZYdWEpb1Fmo7I8giU0TImlzo","name":"create_booking","arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"14:00\"}","client_side":true}]}
[2025-09-13T09:40:32.120Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_ZYdWEpb1Fmo7I8giU0TImlzo",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"14:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T09:40:32.120Z] === END PARSED JSON ===
[2025-09-13T09:40:32.120Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T09:40:32.120Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T09:40:32.120Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T09:40:32.120Z] 📋 Functions: [
  {
    "id": "call_ZYdWEpb1Fmo7I8giU0TImlzo",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"14:00\"}",
    "client_side": true
  }
]
[2025-09-13T09:40:32.120Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T09:40:32.121Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T09:40:32.120Z] 🔧 Processing function: create_booking
[2025-09-13T09:40:32.120Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CA9f77d254c72664f4083020bbfe22ef9a: { callerPhone: '+447469735254' }
[2025-09-13T09:40:32.121Z] 🚀 STARTING handleFunctionCall
[2025-09-13T09:40:32.121Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_ZYdWEpb1Fmo7I8giU0TImlzo",
  "parameters": {
    "customer_name": "Elena",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "14:00"
  }
}
[2025-09-13T09:40:32.121Z] 📋 Function name: create_booking
[2025-09-13T09:40:32.121Z] 📊 Parameters: {
  "customer_name": "Elena",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "14:00"
}
[2025-09-13T09:40:32.121Z] 🏢 Business config exists: true
[2025-09-13T09:40:32.121Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_ZYdWEpb1Fmo7I8giU0TImlzo",
  "parameters": {
    "customer_name": "Elena",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "14:00"
  }
}
✅ TRACKING: Added function call ID call_ZYdWEpb1Fmo7I8giU0TImlzo to processed set
🎯 createBooking called with params: {
  "customer_name": "Elena",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "14:00"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CA9f77d254c72664f4083020bbfe22ef9a: {
  callerPhone: '+447469735254',
  customerName: 'Elena',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '14:00',
  lastServiceId: '4395775e-fa81-4a69-8425-e46c3853dea4',
  lastServiceName: 'haircut',
  lastServiceDuration: 30
}
🕐 Creating appointment for 2025-09-13 at 14:00 in timezone: Europe/London
📅 Parsed date: 2025-09-13 (Saturday)
🕐 Appointment datetime (UK local): 14:00:00
🕐 Business timezone: Europe/London
🕐 Start time: 14:00:00
🕐 End time: 14:30:00
📅 Day of week: Saturday
🔍 Checking slot availability before booking...
📋 Availability check result: {
  "available": false,
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "appointmentDate": "2025-09-13",
  "startTime": "14:00:00",
  "endTime": "14:30:00",
  "message": "Slot is not available - conflicts with existing appointment"
}
❌ Slot not available - preventing double booking
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_ZYdWEpb1Fmo7I8giU0TImlzo","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"...
Message string: {"type":"History","function_calls":[{"id":"call_ZYdWEpb1Fmo7I8giU0TImlzo","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"14:00\"}","response":"{\"error\":\"Sorry, the 14:00 slot on 2025-09-13 is no longer available. Please choose a different time.\"}"}]}
[2025-09-13T09:40:33.727Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_ZYdWEpb1Fmo7I8giU0TImlzo","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"14:00\"}","response":"{\"error\":\"Sorry, the 14:00 slot on 2025-09-13 is no longer available. Please choose a different time.\"}"}]}
[2025-09-13T09:40:33.727Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_ZYdWEpb1Fmo7I8giU0TImlzo",
      "name": "create_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Elena\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"14:00\"}",
      "response": "{\"error\":\"Sorry, the 14:00 slot on 2025-09-13 is no longer available. Please choose a different time.\"}"
    }
  ]
}
[2025-09-13T09:40:33.727Z] === END PARSED JSON ===
[2025-09-13T09:40:33.727Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:40:33.727Z] 📜 HISTORY: Message logged
[2025-09-13T09:40:32.120Z] ✅ COMPLETED: handleFunctionCall for create_booking
[2025-09-13T09:40:34.579Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T09:40:32.120Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems the 2 PM slot just got booked by someone else."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems the 2 PM slot just got booked by someone else."}
[2025-09-13T09:40:34.643Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems the 2 PM slot just got booked by someone else."}
[2025-09-13T09:40:34.643Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems the 2 PM slot just got booked by someone else."
}
[2025-09-13T09:40:34.643Z] === END PARSED JSON ===
[2025-09-13T09:40:34.643Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:40:34.643Z] 💭 CONVERSATION_TEXT: It seems the 2 PM slot just got booked by someone else.
[2025-09-13T09:40:34.643Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems the 2 PM slot just got booked by someone else.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems the 2 PM slot just got booked by someone else."}...
Message string: {"type":"History","role":"assistant","content":"It seems the 2 PM slot just got booked by someone else."}
[2025-09-13T09:40:34.644Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems the 2 PM slot just got booked by someone else."}
[2025-09-13T09:40:34.644Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems the 2 PM slot just got booked by someone else."
}
[2025-09-13T09:40:34.644Z] === END PARSED JSON ===
[2025-09-13T09:40:34.644Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:40:34.644Z] 📜 HISTORY: Message logged
[2025-09-13T09:40:34.644Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems the 2 PM slot just got booked by someone else.
[2025-09-13T09:40:34.644Z] 📝 Added transcript: [AI] It seems the 2 PM slot just got booked by someone else.
[2025-09-13T09:40:34.644Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T09:40:36.180Z] 🔇 Audio stream ended (timeout)
[2025-09-13T09:40:37.421Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today."}...
Message string: {"type":"ConversationText","role":"assistant","content":"The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today."}
[2025-09-13T09:40:38.606Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today."}
[2025-09-13T09:40:38.606Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today."
}
[2025-09-13T09:40:38.606Z] === END PARSED JSON ===
[2025-09-13T09:40:38.606Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:40:38.606Z] 💭 CONVERSATION_TEXT: The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today.
[2025-09-13T09:40:38.606Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today."}...
Message string: {"type":"History","role":"assistant","content":"The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today."}
[2025-09-13T09:40:38.606Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today."}
[2025-09-13T09:40:38.606Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today."
}
[2025-09-13T09:40:38.606Z] === END PARSED JSON ===
[2025-09-13T09:40:38.606Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:40:38.606Z] 📜 HISTORY: Message logged
[2025-09-13T09:40:38.606Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today.
[2025-09-13T09:40:38.606Z] 📝 Added transcript: [AI] The closest available times I can offer are 12:00 PM, 12:15 PM, 12:30 PM, or 12:45 PM today.
[2025-09-13T09:40:38.606Z] 🎵 Starting audio stream - feeding buffer
Media stream stopped