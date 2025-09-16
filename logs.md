
}
[2025-09-16T11:04:29.919Z] 🏢 Business config: Gents Barbershop
[2025-09-16T11:04:29.919Z] 📋 Services count: 2
[2025-09-16T11:04:29.919Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-16T11:04:29.919Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-17"
}
📅 Business open on Wednesday
📋 Using default service: haircut (Duration: 30 minutes)
[2025-09-16T11:04:29.919Z] 🌐 About to make API call:
[2025-09-16T11:04:29.919Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/availability?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-17
[2025-09-16T11:04:29.919Z] 🔑 Secret exists: true
[2025-09-16T11:04:29.919Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-16T11:04:29.919Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-16T11:04:29.919Z] 📅 Date: 2025-09-17
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM..."}...
Message string: {"type":"ConversationText","role":"assistant","content":"One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM..."}
[2025-09-16T11:04:30.198Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM..."}
[2025-09-16T11:04:30.198Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM..."
}
[2025-09-16T11:04:30.198Z] === END PARSED JSON ===
[2025-09-16T11:04:30.198Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:04:30.198Z] 💭 CONVERSATION_TEXT: One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM...
[2025-09-16T11:04:30.198Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM...
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM..."}...
Message string: {"type":"History","role":"assistant","content":"One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM..."}
[2025-09-16T11:04:30.198Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM..."}
[2025-09-16T11:04:30.198Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM..."
}
[2025-09-16T11:04:30.198Z] === END PARSED JSON ===
[2025-09-16T11:04:30.198Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:30.198Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:30.198Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM...
[2025-09-16T11:04:30.198Z] 📝 Added transcript: [AI] One moment while I check the availability for a haircut on Wednesday, the 17th at 3 PM...
[2025-09-16T11:04:30.198Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T11:04:29.919Z] 📡 API Response status: 200
[2025-09-16T11:04:29.919Z] 📡 API Response ok: true
[2025-09-16T11:04:29.919Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-17T08:00:00.000Z",
      "end": "2025-09-17T08:30:00.000Z",
      "startTime": "09:00",
      "endTime": "09:30",
      "startTimeConversational": "9:00 AM",
      "endTimeConversational": "9:30 AM"
    },
    {
      "start": "2025-09-17T08:15:00.000Z",
      "end": "2025-09-17T08:45:00.000Z",
      "startTime": "09:15",
      "endTime": "09:45",
      "startTimeConversational": "9:15 AM",
      "endTimeConversational": "9:45 AM"
    },
    {
      "start": "2025-09-17T08:30:00.000Z",
      "end": "2025-09-17T09:00:00.000Z",
      "startTime": "09:30",
      "endTime": "10:00",
      "startTimeConversational": "9:30 AM",
      "endTimeConversational": "10:00 AM"
    },
    {
      "start": "2025-09-17T08:45:00.000Z",
      "end": "2025-09-17T09:15:00.000Z",
      "startTime": "09:45",
      "endTime": "10:15",
      "startTimeConversational": "9:45 AM",
      "endTimeConversational": "10:15 AM"
    },
    {
      "start": "2025-09-17T09:00:00.000Z",
      "end": "2025-09-17T09:30:00.000Z",
      "startTime": "10:00",
      "endTime": "10:30",
      "startTimeConversational": "10:00 AM",
      "endTimeConversational": "10:30 AM"
    },
    {
      "start": "2025-09-17T09:15:00.000Z",
      "end": "2025-09-17T09:45:00.000Z",
      "startTime": "10:15",
      "endTime": "10:45",
      "startTimeConversational": "10:15 AM",
      "endTimeConversational": "10:45 AM"
    },
    {
      "start": "2025-09-17T09:30:00.000Z",
      "end": "2025-09-17T10:00:00.000Z",
      "startTime": "10:30",
      "endTime": "11:00",
      "startTimeConversational": "10:30 AM",
      "endTimeConversational": "11:00 AM"
    },
    {
      "start": "2025-09-17T09:45:00.000Z",
      "end": "2025-09-17T10:15:00.000Z",
      "startTime": "10:45",
      "endTime": "11:15",
      "startTimeConversational": "10:45 AM",
      "endTimeConversational": "11:15 AM"
    },
    {
      "start": "2025-09-17T10:00:00.000Z",
      "end": "2025-09-17T10:30:00.000Z",
      "startTime": "11:00",
      "endTime": "11:30",
      "startTimeConversational": "11:00 AM",
      "endTimeConversational": "11:30 AM"
    },
    {
      "start": "2025-09-17T10:15:00.000Z",
      "end": "2025-09-17T10:45:00.000Z",
      "startTime": "11:15",
      "endTime": "11:45",
      "startTimeConversational": "11:15 AM",
      "endTimeConversational": "11:45 AM"
    },
    {
      "start": "2025-09-17T10:30:00.000Z",
      "end": "2025-09-17T11:00:00.000Z",
      "startTime": "11:30",
      "endTime": "12:00",
      "startTimeConversational": "11:30 AM",
      "endTimeConversational": "12:00 PM"
    },
    {
      "start": "2025-09-17T10:45:00.000Z",
      "end": "2025-09-17T11:15:00.000Z",
      "startTime": "11:45",
      "endTime": "12:15",
      "startTimeConversational": "11:45 AM",
      "endTimeConversational": "12:15 PM"
    },
    {
      "start": "2025-09-17T11:00:00.000Z",
      "end": "2025-09-17T11:30:00.000Z",
      "startTime": "12:00",
      "endTime": "12:30",
      "startTimeConversational": "12:00 PM",
      "endTimeConversational": "12:30 PM"
    },
    {
      "start": "2025-09-17T11:15:00.000Z",
      "end": "2025-09-17T11:45:00.000Z",
      "startTime": "12:15",
      "endTime": "12:45",
      "startTimeConversational": "12:15 PM",
      "endTimeConversational": "12:45 PM"
    },
    {
      "start": "2025-09-17T12:00:00.000Z",
      "end": "2025-09-17T12:30:00.000Z",
      "startTime": "13:00",
      "endTime": "13:30",
      "startTimeConversational": "1:00 PM",
      "endTimeConversational": "1:30 PM"
    },
    {
      "start": "2025-09-17T12:15:00.000Z",
      "end": "2025-09-17T12:45:00.000Z",
      "startTime": "13:15",
      "endTime": "13:45",
      "startTimeConversational": "1:15 PM",
      "endTimeConversational": "1:45 PM"
    },
    {
      "start": "2025-09-17T12:30:00.000Z",
      "end": "2025-09-17T13:00:00.000Z",
      "startTime": "13:30",
      "endTime": "14:00",
      "startTimeConversational": "1:30 PM",
      "endTimeConversational": "2:00 PM"
    },
    {
      "start": "2025-09-17T14:30:00.000Z",
      "end": "2025-09-17T15:00:00.000Z",
      "startTime": "15:30",
      "endTime": "16:00",
      "startTimeConversational": "3:30 PM",
      "endTimeConversational": "4:00 PM"
    },
    {
      "start": "2025-09-17T14:45:00.000Z",
      "end": "2025-09-17T15:15:00.000Z",
      "startTime": "15:45",
      "endTime": "16:15",
      "startTimeConversational": "3:45 PM",
      "endTimeConversational": "4:15 PM"
    }
  ],
  "date": "2025-09-17",
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-16T11:04:29.919Z] 📊 Response type: object
[2025-09-16T11:04:29.919Z] 📊 Has slots: true
[2025-09-16T11:04:29.919Z] 📊 Slots count: 19
✅ Available time slots: [
  '09:00', '09:15', '09:30',
  '09:45', '10:00', '10:15',
  '10:30', '10:45', '11:00',
  '11:15', '11:30', '11:45',
  '12:00', '12:15', '13:00',
  '13:15', '13:30', '15:30',
  '15:45'
]
📝 Session updated for call CA00d6818c2d333242403066de235d7e6b: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T11:04:33.029Z'
}
📅 Stored checked date in session: 2025-09-17
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_z8C02Z13QCd85m7DqpHNs3q2","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-17\"}","response":"{\"available_slots\":[\"09...
Message string: {"type":"History","function_calls":[{"id":"call_z8C02Z13QCd85m7DqpHNs3q2","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-17\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"13:00\",\"13:15\",\"13:30\",\"15:30\",\"15:45\"]}"}]}
[2025-09-16T11:04:33.179Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_z8C02Z13QCd85m7DqpHNs3q2","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-17\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"13:00\",\"13:15\",\"13:30\",\"15:30\",\"15:45\"]}"}]}
[2025-09-16T11:04:33.179Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_z8C02Z13QCd85m7DqpHNs3q2",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-17\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"13:00\",\"13:15\",\"13:30\",\"15:30\",\"15:45\"]}"
    }
  ]
}
[2025-09-16T11:04:33.179Z] === END PARSED JSON ===
[2025-09-16T11:04:33.179Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:33.179Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:32.912Z] 🔇 Audio stream ended (timeout)
[2025-09-16T11:04:29.918Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-16T11:04:34.029Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T11:04:29.918Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-16T11:04:36.381Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open."}...
Message string: {"type":"ConversationText","role":"assistant","content":"3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open."}
[2025-09-16T11:04:36.839Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open."}
[2025-09-16T11:04:36.839Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open."
}
[2025-09-16T11:04:36.839Z] === END PARSED JSON ===
[2025-09-16T11:04:36.839Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:04:36.839Z] 💭 CONVERSATION_TEXT: 3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open.
[2025-09-16T11:04:36.839Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: 3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open."}...
Message string: {"type":"History","role":"assistant","content":"3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open."}
[2025-09-16T11:04:36.859Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open."}
[2025-09-16T11:04:36.859Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open."
}
[2025-09-16T11:04:36.859Z] === END PARSED JSON ===
[2025-09-16T11:04:36.859Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:36.859Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:36.859Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: 3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open.
[2025-09-16T11:04:36.859Z] 📝 Added transcript: [AI] 3 PM on Wednesday, the 17th is not available, but I do have 3:30 PM or 3:45 PM open.
[2025-09-16T11:04:36.859Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T11:04:37.028Z] 🔇 Audio stream ended (timeout)
[2025-09-16T11:04:40.381Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would either of those times work for you instead?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would either of those times work for you instead?"}
[2025-09-16T11:04:43.920Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would either of those times work for you instead?"}
[2025-09-16T11:04:43.920Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would either of those times work for you instead?"
}
[2025-09-16T11:04:43.920Z] === END PARSED JSON ===
[2025-09-16T11:04:43.920Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:04:43.920Z] 💭 CONVERSATION_TEXT: Would either of those times work for you instead?
[2025-09-16T11:04:43.920Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Would either of those times work for you instead?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would either of those times work for you instead?"}...
Message string: {"type":"History","role":"assistant","content":"Would either of those times work for you instead?"}
[2025-09-16T11:04:43.927Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would either of those times work for you instead?"}
[2025-09-16T11:04:43.927Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would either of those times work for you instead?"
}
[2025-09-16T11:04:43.927Z] === END PARSED JSON ===
[2025-09-16T11:04:43.927Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:43.927Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:43.927Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Would either of those times work for you instead?
[2025-09-16T11:04:43.927Z] 📝 Added transcript: [AI] Would either of those times work for you instead?
[2025-09-16T11:04:43.928Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-16T11:04:43.944Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-16T11:04:43.944Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T11:04:43.944Z] === END PARSED JSON ===
[2025-09-16T11:04:43.944Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T11:04:43.944Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T11:04:43.944Z] 🔇 SILENCE: Started tracking
[2025-09-16T11:04:43.944Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-16T11:04:44.381Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T11:04:43.944Z] 🔇 SILENCE_CHECK: 1000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-16T11:04:45.395Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-16T11:04:45.395Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-16T11:04:45.395Z] === END PARSED JSON ===
[2025-09-16T11:04:45.395Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-16T11:04:45.395Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-16T11:04:45.395Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-16T11:04:45.395Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty then."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty then."}
[2025-09-16T11:04:48.137Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty then."}
[2025-09-16T11:04:48.137Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes. Let's go with three thirty then."
}
[2025-09-16T11:04:48.137Z] === END PARSED JSON ===
[2025-09-16T11:04:48.137Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:04:48.137Z] 💭 CONVERSATION_TEXT: Yes. Let's go with three thirty then.
[2025-09-16T11:04:48.137Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes. Let's go with three tON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T11:04:43.944Z] === END PARSED JSON ===
[2025-09-16T11:04:43.944Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T11:04:43.944Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T11:04:43.944Z] 🔇 SILENCE: Started tracking
[2025-09-16T11:04:43.944Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-16T11:04:44.381Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T11:04:43.944Z] 🔇 SILENCE_CHECK: 1000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-16T11:04:45.395Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-16T11:04:45.395Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-16T11:04:45.395Z] === END PARSED JSON ===
[2025-09-16T11:04:45.395Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-16T11:04:45.395Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-16T11:04:45.395Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-16T11:04:45.395Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty then."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty then."}
[2025-09-16T11:04:48.137Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty then."}
[2025-09-16T11:04:48.137Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes. Let's go with three thirty then."
}
[2025-09-16T11:04:48.137Z] === END PARSED JSON ===
[2025-09-16T11:04:48.137Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:04:48.137Z] 💭 CONVERSATION_TEXT: Yes. Let's go with three thirty then.
[2025-09-16T11:04:48.137Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes. Let's go with three thirty then.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes. Let's go with three thirty then."}...
Message string: {"type":"History","role":"user","content":"Yes. Let's go with three thirty then."}
[2025-09-16T11:04:48.144Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes. Let's go with three thirty then."}
[2025-09-16T11:04:48.144Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes. Let's go with three thirty then."
}
[2025-09-16T11:04:48.144Z] === END PARSED JSON ===
[2025-09-16T11:04:48.144Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:48.144Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:48.144Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes. Let's go with three thirty then.
[2025-09-16T11:04:48.144Z] 📝 Added transcript: [User] Yes. Let's go with three thirty then.
[2025-09-16T11:04:48.382Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_OwifBVlzg3yyS4jmSvB0RXmX","name":"update_booking","arguments":"{\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_OwifBVlzg3yyS4jmSvB0RXmX","name":"update_booking","arguments":"{\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T11:04:49.579Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_OwifBVlzg3yyS4jmSvB0RXmX","name":"update_booking","arguments":"{\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T11:04:49.579Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_OwifBVlzg3yyS4jmSvB0RXmX",
      "name": "update_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-16T11:04:49.579Z] === END PARSED JSON ===
[2025-09-16T11:04:49.579Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-16T11:04:49.579Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-16T11:04:49.579Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-16T11:04:49.579Z] 📋 Functions: [
  {
    "id": "call_OwifBVlzg3yyS4jmSvB0RXmX",
    "name": "update_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
    "client_side": true
  }
]
[2025-09-16T11:04:49.579Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-16T11:04:49.579Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-16T11:04:49.579Z] 🔧 Processing function: update_booking
[2025-09-16T11:04:49.579Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA00d6818c2d333242403066de235d7e6b: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T11:04:33.029Z'
}
[2025-09-16T11:04:49.579Z] 🚀 STARTING handleFunctionCall
[2025-09-16T11:04:49.579Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_OwifBVlzg3yyS4jmSvB0RXmX",
  "parameters": {
    "customer_name": "Marco",
    "new_date": "2025-09-17",
    "new_time": "15:30"
  }
}
[2025-09-16T11:04:49.579Z] 📋 Function name: update_booking
[2025-09-16T11:04:49.579Z] 📊 Parameters: {
  "customer_name": "Marco",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
[2025-09-16T11:04:49.579Z] 🏢 Business config exists: true
[2025-09-16T11:04:49.579Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_OwifBVlzg3yyS4jmSvB0RXmX",
  "parameters": {
    "customer_name": "Marco",
    "new_date": "2025-09-17",
    "new_time": "15:30"
  }
}
📝 updateBooking called with params: {
  "customer_name": "Marco",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
📋 Session data: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T11:04:33.029Z'
}
⚠️ Using fallback session data - this may update the wrong appointment
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: undefined,
  currentTime: undefined
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: undefined at undefined
📝 Session updated for call CA00d6818c2d333242403066de235d7e6b: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T11:04:33.029Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: undefined,
      currentTime: undefined,
      newDate: '2025-09-17',
      newTime: '15:30',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '15:30'
}
📦 Update request body: {
  "business_id": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "customer_name": "Marco",
  "caller_phone": "+447468306825",
  "sessionId": "CA00d6818c2d333242403066de235d7e6b",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
❌ Update booking API error: 400 {"error":"Missing required parameters: business_id, customer_name, current_date, current_time"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_OwifBVlzg3yyS4jmSvB0RXmX","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\",\"customer_name\":...
Message string: {"type":"History","function_calls":[{"id":"call_OwifBVlzg3yyS4jmSvB0RXmX","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\",\"customer_name\":\"Marco\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"Missing required parameters: business_id, customer_name, current_date, current_time\\\"}\"}"}]}
[2025-09-16T11:04:50.259Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_OwifBVlzg3yyS4jmSvB0RXmX","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\",\"customer_name\":\"Marco\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"Missing required parameters: business_id, customer_name, current_date, current_time\\\"}\"}"}]}
[2025-09-16T11:04:50.259Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_OwifBVlzg3yyS4jmSvB0RXmX",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\",\"customer_name\":\"Marco\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"Missing required parameters: business_id, customer_name, current_date, current_time\\\"}\"}"
    }
  ]
}
[2025-09-16T11:04:50.259Z] === END PARSED JSON ===
[2025-09-16T11:04:50.259Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:50.259Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:49.579Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-16T11:04:51.110Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T11:04:49.579Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems I need to confirm a couple more details before updating your booking."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems I need to confirm a couple more details before updating your booking."}
[2025-09-16T11:04:51.166Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems I need to confirm a couple more details before updating your booking."}
[2025-09-16T11:04:51.166Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems I need to confirm a couple more details before updating your booking."
}
[2025-09-16T11:04:51.166Z] === END PARSED JSON ===
[2025-09-16T11:04:51.166Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:04:51.166Z] 💭 CONVERSATION_TEXT: It seems I need to confirm a couple more details before updating your booking.
[2025-09-16T11:04:51.166Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems I need to confirm a couple more details before updating your booking.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems I need to confirm a couple more details before updating your booking."}...
Message string: {"type":"History","role":"assistant","content":"It seems I need to confirm a couple more details before updating your booking."}
[2025-09-16T11:04:51.169Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems I need to confirm a couple more details before updating your booking."}
[2025-09-16T11:04:51.169Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems I need to confirm a couple more details before updating your booking."
}
[2025-09-16T11:04:51.169Z] === END PARSED JSON ===
[2025-09-16T11:04:51.169Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:51.169Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:51.169Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems I need to confirm a couple more details before updating your booking.
[2025-09-16T11:04:51.169Z] 📝 Added transcript: [AI] It seems I need to confirm a couple more details before updating your booking.
[2025-09-16T11:04:51.170Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T11:04:52.382Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T11:04:52.789Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Could you please confirm the current appointment time once more?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Could you please confirm the current appointment time once more?"}
[2025-09-16T11:04:55.367Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Could you please confirm the current appointment time once more?"}
[2025-09-16T11:04:55.367Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Could you please confirm the current appointment time once more?"
}
[2025-09-16T11:04:55.367Z] === END PARSED JSON ===
[2025-09-16T11:04:55.367Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:04:55.367Z] 💭 CONVERSATION_TEXT: Could you please confirm the current appointment time once more?
[2025-09-16T11:04:55.367Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Could you please confirm the current appointment time once more?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Could you please confirm the current appointment time once more?"}...
Message string: {"type":"History","role":"assistant","content":"Could you please confirm the current appointment time once more?"}
[2025-09-16T11:04:55.368Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Could you please confirm the current appointment time once more?"}
[2025-09-16T11:04:55.368Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Could you please confirm the current appointment time once more?"
}
[2025-09-16T11:04:55.368Z] === END PARSED JSON ===
[2025-09-16T11:04:55.368Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:55.368Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:55.368Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Could you please confirm the current appointment time once more?
[2025-09-16T11:04:55.368Z] 📝 Added transcript: [AI] Could you please confirm the current appointment time once more?
[2025-09-16T11:04:55.368Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T11:04:55.400Z] 🔇 Audio stream ended (timeout)
[2025-09-16T11:04:56.382Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"You mentioned 10:30 AM on Thursday, the 18th—is that correct?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"You mentioned 10:30 AM on Thursday, the 18th—is that correct?"}
[2025-09-16T11:04:58.849Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"You mentioned 10:30 AM on Thursday, the 18th—is that correct?"}
[2025-09-16T11:04:58.849Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "You mentioned 10:30 AM on Thursday, the 18th—is that correct?"
}
[2025-09-16T11:04:58.849Z] === END PARSED JSON ===
[2025-09-16T11:04:58.849Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:04:58.849Z] 💭 CONVERSATION_TEXT: You mentioned 10:30 AM on Thursday, the 18th—is that correct?
[2025-09-16T11:04:58.849Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: You mentioned 10:30 AM on Thursday, the 18th—is that correct?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"You mentioned 10:30 AM on Thursday, the 18th—is that correct?"}...
Message string: {"type":"History","role":"assistant","content":"You mentioned 10:30 AM on Thursday, the 18th—is that correct?"}
[2025-09-16T11:04:58.850Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"You mentioned 10:30 AM on Thursday, the 18th—is that correct?"}
[2025-09-16T11:04:58.850Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "You mentioned 10:30 AM on Thursday, the 18th—is that correct?"
}
[2025-09-16T11:04:58.850Z] === END PARSED JSON ===
[2025-09-16T11:04:58.850Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:04:58.850Z] 📜 HISTORY: Message logged
[2025-09-16T11:04:58.850Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: You mentioned 10:30 AM on Thursday, the 18th—is that correct?
[2025-09-16T11:04:58.850Z] 📝 Added transcript: [AI] You mentioned 10:30 AM on Thursday, the 18th—is that correct?
[2025-09-16T11:04:58.850Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-16T11:04:58.890Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-16T11:04:58.890Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T11:04:58.890Z] === END PARSED JSON ===
[2025-09-16T11:04:58.890Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T11:04:58.890Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T11:04:58.890Z] 🔇 SILENCE: Started tracking
[2025-09-16T11:04:58.890Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-16T11:04:58.890Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-16T11:05:00.382Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T11:04:58.890Z] 🔇 SILENCE_CHECK: 2001ms of silence
[2025-09-16T11:04:58.890Z] 🔇 SILENCE_CHECK: 3001ms of silence
[2025-09-16T11:04:58.890Z] 🔇 SILENCE_CHECK: 4001ms of silence
[2025-09-16T11:04:58.890Z] 🔇 SILENCE_CHECK: 5001ms of silence
[2025-09-16T11:05:04.382Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T11:04:58.890Z] 🔇 SILENCE_CHECK: 6001ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-16T11:05:05.073Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-16T11:05:05.073Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-16T11:05:05.073Z] === END PARSED JSON ===
[2025-09-16T11:05:05.073Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-16T11:05:05.073Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-16T11:05:05.073Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-16T11:05:05.073Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-16T11:05:05.098Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-16T11:05:05.098Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-16T11:05:05.098Z] === END PARSED JSON ===
[2025-09-16T11:05:05.098Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:05:05.098Z] 💭 CONVERSATION_TEXT: Yes.
[2025-09-16T11:05:05.098Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-16T11:05:05.104Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-16T11:05:05.104Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-16T11:05:05.104Z] === END PARSED JSON ===
[2025-09-16T11:05:05.104Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:05:05.104Z] 📜 HISTORY: Message logged
[2025-09-16T11:05:05.104Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes.
[2025-09-16T11:05:05.104Z] 📝 Added transcript: [User] Yes.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_2Zjc6TRWQWNoFw3QaibQMabT","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Ma...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_2Zjc6TRWQWNoFw3QaibQMabT","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T11:05:06.614Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_2Zjc6TRWQWNoFw3QaibQMabT","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T11:05:06.614Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_2Zjc6TRWQWNoFw3QaibQMabT",
      "name": "update_booking",
      "arguments": "{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-16T11:05:06.614Z] === END PARSED JSON ===
[2025-09-16T11:05:06.614Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-16T11:05:06.614Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-16T11:05:06.614Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-16T11:05:06.614Z] 📋 Functions: [
  {
    "id": "call_2Zjc6TRWQWNoFw3QaibQMabT",
    "name": "update_booking",
    "arguments": "{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
    "client_side": true
  }
]
[2025-09-16T11:05:06.614Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-16T11:05:06.615Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-16T11:05:06.614Z] 🔧 Processing function: update_booking
[2025-09-16T11:05:06.614Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA00d6818c2d333242403066de235d7e6b: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T11:04:33.029Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: undefined,
      currentTime: undefined,
      newDate: '2025-09-17',
      newTime: '15:30',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '15:30'
}
[2025-09-16T11:05:06.615Z] 🚀 STARTING handleFunctionCall
[2025-09-16T11:05:06.615Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_2Zjc6TRWQWNoFw3QaibQMabT",
  "parameters": {
    "current_date": "2025-09-18",
    "current_time": "10:30",
    "customer_name": "Marco",
    "new_date": "2025-09-17",
    "new_time": "15:30"
  }
}
[2025-09-16T11:05:06.615Z] 📋 Function name: update_booking
[2025-09-16T11:05:06.615Z] 📊 Parameters: {
  "current_date": "2025-09-18",
  "current_time": "10:30",
  "customer_name": "Marco",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
[2025-09-16T11:05:06.615Z] 🏢 Business config exists: true
[2025-09-16T11:05:06.615Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_2Zjc6TRWQWNoFw3QaibQMabT",
  "parameters": {
    "current_date": "2025-09-18",
    "current_time": "10:30",
    "customer_name": "Marco",
    "new_date": "2025-09-17",
    "new_time": "15:30"
  }
}
📝 updateBooking called with params: {
  "current_date": "2025-09-18",
  "current_time": "10:30",
  "customer_name": "Marco",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
📋 Session data: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T11:04:33.029Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: undefined,
      currentTime: undefined,
      newDate: '2025-09-17',
      newTime: '15:30',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '15:30'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-18',
  currentTime: '10:30'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-18 at 10:30
📝 Session updated for call CA00d6818c2d333242403066de235d7e6b: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T11:04:33.029Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: undefined,
      currentTime: undefined,
      newDate: '2025-09-17',
      newTime: '15:30',
      newServiceId: undefined,
      type: 'update'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-18',
      currentTime: '10:30',
      newDate: '2025-09-17',
      newTime: '15:30',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '15:30'
}
📦 Update request body: {
  "business_id": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "customer_name": "Marco",
  "current_date": "2025-09-18",
  "current_time": "10:30",
  "caller_phone": "+447468306825",
  "sessionId": "CA00d6818c2d333242403066de235d7e6b",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
❌ Update booking API error: 409 {"error":"The new time slot 2025-09-17 at 15:30 is not available"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_2Zjc6TRWQWNoFw3QaibQMabT","name":"update_booking","client_side":true,"arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer...
Message string: {"type":"History","function_calls":[{"id":"call_2Zjc6TRWQWNoFw3QaibQMabT","name":"update_booking","client_side":true,"arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"}]}
[2025-09-16T11:05:09.207Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_2Zjc6TRWQWNoFw3QaibQMabT","name":"update_booking","client_side":true,"arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"}]}
[2025-09-16T11:05:09.207Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_2Zjc6TRWQWNoFw3QaibQMabT",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"
    }
  ]
}
[2025-09-16T11:05:09.207Z] === END PARSED JSON ===
[2025-09-16T11:05:09.207Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:05:09.207Z] 📜 HISTORY: Message logged
[2025-09-16T11:05:06.614Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-16T11:05:10.063Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T11:05:06.614Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available."}
[2025-09-16T11:05:10.398Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available."}
[2025-09-16T11:05:10.398Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available."
}
[2025-09-16T11:05:10.398Z] === END PARSED JSON ===
[2025-09-16T11:05:10.398Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:05:10.398Z] 💭 CONVERSATION_TEXT: I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available.
[2025-09-16T11:05:10.398Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available."}...
Message string: {"type":"History","role":"assistant","content":"I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available."}
[2025-09-16T11:05:10.398Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available."}
[2025-09-16T11:05:10.398Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available."
}
[2025-09-16T11:05:10.398Z] === END PARSED JSON ===
[2025-09-16T11:05:10.398Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T11:05:10.398Z] 📜 HISTORY: Message logged
[2025-09-16T11:05:10.398Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available.
[2025-09-16T11:05:10.398Z] 📝 Added transcript: [AI] I tried to update your appointment to 3:30 PM on Wednesday, the 17th, but that slot is actually not available.
[2025-09-16T11:05:10.398Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T11:05:12.382Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T11:05:13.564Z] 🔇 Audio stream ended (timeout)
[2025-09-16T11:05:16.382Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken."}...
Message string: {"type":"ConversationText","role":"assistant","content":"The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken."}
[2025-09-16T11:05:17.999Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken."}
[2025-09-16T11:05:17.999Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken."
}
[2025-09-16T11:05:17.999Z] === END PARSED JSON ===
[2025-09-16T11:05:17.999Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T11:05:17.999Z] 💭 CONVERSATION_TEXT: The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken.
[2025-09-16T11:05:17.999Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken."}...
Message string: {"type":"History","role":"assistant","content":"The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken."}
[2025-09-16T11:05:18.006Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken."}
[2025-09-16T11:05:18.006Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "The options I have for that day are 3:30 PM and 3:45 PM, but it seems 3:30 PM just got taken."
}
[2025-09-16T11:05:18.006Z] === END PARSED JSON ===
[2025-09-16T11:05:18.006Z] 🎯 DEEPGRAM EVENT TYPE: History