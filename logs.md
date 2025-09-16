
[2025-09-16T12:33:03.198Z] 📊 Response type: object
[2025-09-16T12:33:03.198Z] 📊 Has slots: true
[2025-09-16T12:33:03.198Z] 📊 Slots count: 19
✅ Available time slots: [
  '09:00', '09:15', '09:30',
  '09:45', '10:00', '10:15',
  '10:30', '10:45', '11:00',
  '11:15', '11:30', '11:45',
  '12:00', '12:15', '13:00',
  '13:15', '13:30', '15:30',
  '15:45'
]
📝 Session updated for call CA21593c61284c5207eec2825ed62615cd: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T12:33:06.081Z'
}
📅 Stored checked date in session: 2025-09-17
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_VNHFoc8QxiJzbvR4zuhpT3nP","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-17\"}","response":"{\"available_slots\":[\"09...
Message string: {"type":"History","function_calls":[{"id":"call_VNHFoc8QxiJzbvR4zuhpT3nP","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-17\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"13:00\",\"13:15\",\"13:30\",\"15:30\",\"15:45\"]}"}]}
[2025-09-16T12:33:06.234Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_VNHFoc8QxiJzbvR4zuhpT3nP","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-17\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"13:00\",\"13:15\",\"13:30\",\"15:30\",\"15:45\"]}"}]}
[2025-09-16T12:33:06.234Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_VNHFoc8QxiJzbvR4zuhpT3nP",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-17\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"13:00\",\"13:15\",\"13:30\",\"15:30\",\"15:45\"]}"
    }
  ]
}
[2025-09-16T12:33:06.234Z] === END PARSED JSON ===
[2025-09-16T12:33:06.234Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:06.234Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:03.198Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-16T12:33:07.082Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T12:33:03.198Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"One moment while I check availability for that time..."}...
Message string: {"type":"ConversationText","role":"assistant","content":"One moment while I check availability for that time..."}
[2025-09-16T12:33:08.150Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"One moment while I check availability for that time..."}
[2025-09-16T12:33:08.150Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "One moment while I check availability for that time..."
}
[2025-09-16T12:33:08.150Z] === END PARSED JSON ===
[2025-09-16T12:33:08.150Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:33:08.150Z] 💭 CONVERSATION_TEXT: One moment while I check availability for that time...
[2025-09-16T12:33:08.150Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: One moment while I check availability for that time...
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"One moment while I check availability for that time..."}...
Message string: {"type":"History","role":"assistant","content":"One moment while I check availability for that time..."}
[2025-09-16T12:33:08.150Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"One moment while I check availability for that time..."}
[2025-09-16T12:33:08.150Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "One moment while I check availability for that time..."
}
[2025-09-16T12:33:08.150Z] === END PARSED JSON ===
[2025-09-16T12:33:08.150Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:08.150Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:08.150Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: One moment while I check availability for that time...
[2025-09-16T12:33:08.150Z] 📝 Added transcript: [AI] One moment while I check availability for that time...
[2025-09-16T12:33:08.151Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T12:33:08.303Z] 🔇 Audio stream ended (timeout)
[2025-09-16T12:33:09.197Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available."}
[2025-09-16T12:33:10.871Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available."}
[2025-09-16T12:33:10.871Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available."
}
[2025-09-16T12:33:10.871Z] === END PARSED JSON ===
[2025-09-16T12:33:10.871Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:33:10.871Z] 💭 CONVERSATION_TEXT: I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available.
[2025-09-16T12:33:10.871Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available."}...
Message string: {"type":"History","role":"assistant","content":"I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available."}
[2025-09-16T12:33:11.024Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available."}
[2025-09-16T12:33:11.024Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available."
}
[2025-09-16T12:33:11.024Z] === END PARSED JSON ===
[2025-09-16T12:33:11.024Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:11.024Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:11.024Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available.
[2025-09-16T12:33:11.024Z] 📝 Added transcript: [AI] I checked for availability on Wednesday, the 17th of September at 3 PM, and that time slot is unfortunately not available.
[2025-09-16T12:33:11.024Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T12:33:12.018Z] 🔇 Audio stream ended (timeout)
[2025-09-16T12:33:13.198Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T12:33:17.197Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"However, I do have openings at 3:30 PM or 3:45 PM on that day."}...
Message string: {"type":"ConversationText","role":"assistant","content":"However, I do have openings at 3:30 PM or 3:45 PM on that day."}
[2025-09-16T12:33:18.753Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"However, I do have openings at 3:30 PM or 3:45 PM on that day."}
[2025-09-16T12:33:18.753Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "However, I do have openings at 3:30 PM or 3:45 PM on that day."
}
[2025-09-16T12:33:18.753Z] === END PARSED JSON ===
[2025-09-16T12:33:18.753Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:33:18.753Z] 💭 CONVERSATION_TEXT: However, I do have openings at 3:30 PM or 3:45 PM on that day.
[2025-09-16T12:33:18.753Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: However, I do have openings at 3:30 PM or 3:45 PM on that day.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"However, I do have openings at 3:30 PM or 3:45 PM on that day."}...
Message string: {"type":"History","role":"assistant","content":"However, I do have openings at 3:30 PM or 3:45 PM on that day."}
[2025-09-16T12:33:18.753Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"However, I do have openings at 3:30 PM or 3:45 PM on that day."}
[2025-09-16T12:33:18.753Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "However, I do have openings at 3:30 PM or 3:45 PM on that day."
}
[2025-09-16T12:33:18.753Z] === END PARSED JSON ===
[2025-09-16T12:33:18.753Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:18.753Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:18.753Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: However, I do have openings at 3:30 PM or 3:45 PM on that day.
[2025-09-16T12:33:18.753Z] 📝 Added transcript: [AI] However, I do have openings at 3:30 PM or 3:45 PM on that day.
[2025-09-16T12:33:18.753Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T12:33:19.059Z] 🔇 Audio stream ended (timeout)
[2025-09-16T12:33:21.198Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would either of these work for you?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would either of these work for you?"}
[2025-09-16T12:33:24.434Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would either of these work for you?"}
[2025-09-16T12:33:24.434Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would either of these work for you?"
}
[2025-09-16T12:33:24.434Z] === END PARSED JSON ===
[2025-09-16T12:33:24.434Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:33:24.434Z] 💭 CONVERSATION_TEXT: Would either of these work for you?
[2025-09-16T12:33:24.434Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Would either of these work for you?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would either of these work for you?"}...
Message string: {"type":"History","role":"assistant","content":"Would either of these work for you?"}
[2025-09-16T12:33:24.435Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would either of these work for you?"}
[2025-09-16T12:33:24.435Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would either of these work for you?"
}
[2025-09-16T12:33:24.435Z] === END PARSED JSON ===
[2025-09-16T12:33:24.435Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:24.435Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:24.435Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Would either of these work for you?
[2025-09-16T12:33:24.435Z] 📝 Added transcript: [AI] Would either of these work for you?
[2025-09-16T12:33:24.435Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-16T12:33:24.588Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-16T12:33:24.588Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T12:33:24.588Z] === END PARSED JSON ===
[2025-09-16T12:33:24.588Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T12:33:24.588Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T12:33:24.588Z] 🔇 SILENCE: Started tracking
[2025-09-16T12:33:24.588Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-16T12:33:25.198Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T12:33:24.588Z] 🔇 SILENCE_CHECK: 1000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-16T12:33:25.887Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-16T12:33:25.887Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-16T12:33:25.887Z] === END PARSED JSON ===
[2025-09-16T12:33:25.887Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-16T12:33:25.887Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-16T12:33:25.887Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-16T12:33:25.887Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yeah. Let's go with three thirty."}...
Message string: {"type":"ConversationText","role":"user","content":"Yeah. Let's go with three thirty."}
[2025-09-16T12:33:27.758Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yeah. Let's go with three thirty."}
[2025-09-16T12:33:27.758Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yeah. Let's go with three thirty."
}
[2025-09-16T12:33:27.758Z] === END PARSED JSON ===
[2025-09-16T12:33:27.758Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:33:27.758Z] 💭 CONVERSATION_TEXT: Yeah. Let's go with three thirty.
[2025-09-16T12:33:27.758Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yeah. Let's go with three thirty.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yeah. Let's go with three thirty."}...
Message string: {"type":"History","role":"user","content":"Yeah. Let's go with three thirty."}
[2025-09-16T12:33:27.759Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yeah. Let's go with three thirty."}
[2025-09-16T12:33:27.759Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yeah. Let's go with three thirty."
}
[2025-09-16T12:33:27.759Z] === END PARSED JSON ===
[2025-09-16T12:33:27.759Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:27.759Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:27.759Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yeah. Let's go with three thirty.
[2025-09-16T12:33:27.759Z] 📝 Added transcript: [User] Yeah. Let's go with three thirty.
[2025-09-16T12:33:29.198Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_quqFhIUx93SgbeLqRmfCjs2V","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Ma...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_quqFhIUx93SgbeLqRmfCjs2V","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T12:33:29.684Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_quqFhIUx93SgbeLqRmfCjs2V","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T12:33:29.684Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_quqFhIUx93SgbeLqRmfCjs2V",
      "name": "update_booking",
      "arguments": "{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-16T12:33:29.684Z] === END PARSED JSON ===
[2025-09-16T12:33:29.684Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-16T12:33:29.684Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-16T12:33:29.684Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-16T12:33:29.684Z] 📋 Functions: [
  {
    "id": "call_quqFhIUx93SgbeLqRmfCjs2V",
    "name": "update_booking",
    "arguments": "{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
    "client_side": true
  }
]
[2025-09-16T12:33:29.684Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-16T12:33:29.684Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-16T12:33:29.684Z] 🔧 Processing function: update_booking
[2025-09-16T12:33:29.684Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA21593c61284c5207eec2825ed62615cd: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T12:33:06.081Z'
}
[2025-09-16T12:33:29.684Z] 🚀 STARTING handleFunctionCall
[2025-09-16T12:33:29.684Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_quqFhIUx93SgbeLqRmfCjs2V",
  "parameters": {
    "current_date": "2025-09-18",
    "current_time": "10:30",
    "customer_name": "Marco",
    "new_date": "2025-09-17",
    "new_time": "15:30"
  }
}
[2025-09-16T12:33:29.684Z] 📋 Function name: update_booking
[2025-09-16T12:33:29.684Z] 📊 Parameters: {
  "current_date": "2025-09-18",
  "current_time": "10:30",
  "customer_name": "Marco",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
[2025-09-16T12:33:29.684Z] 🏢 Business config exists: true
[2025-09-16T12:33:29.684Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_quqFhIUx93SgbeLqRmfCjs2V",
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
  lastCheckedTimestamp: '2025-09-16T12:33:06.081Z'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-18',
  currentTime: '10:30'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-18 at 10:30
📝 Session updated for call CA21593c61284c5207eec2825ed62615cd: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T12:33:06.081Z',
  bookings: [
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
  "sessionId": "CA21593c61284c5207eec2825ed62615cd",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
❌ Update booking API error: 409 {"error":"The new time slot 2025-09-17 at 15:30 is not available"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_quqFhIUx93SgbeLqRmfCjs2V","name":"update_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current...
Message string: {"type":"History","function_calls":[{"id":"call_quqFhIUx93SgbeLqRmfCjs2V","name":"update_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"}]}
[2025-09-16T12:33:32.958Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_quqFhIUx93SgbeLqRmfCjs2V","name":"update_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"}]}
[2025-09-16T12:33:32.958Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_quqFhIUx93SgbeLqRmfCjs2V",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"
    }
  ]
}
[2025-09-16T12:33:32.958Z] === END PARSED JSON ===
[2025-09-16T12:33:32.958Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:32.958Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:29.684Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-16T12:33:33.805Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T12:33:29.684Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems that 3:30 PM on Wednesday, the 17th is no longer available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems that 3:30 PM on Wednesday, the 17th is no longer available."}
[2025-09-16T12:33:34.201Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems that 3:30 PM on Wednesday, the 17th is no longer available."}
[2025-09-16T12:33:34.201Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems that 3:30 PM on Wednesday, the 17th is no longer available."
}
[2025-09-16T12:33:34.201Z] === END PARSED JSON ===
[2025-09-16T12:33:34.201Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:33:34.201Z] 💭 CONVERSATION_TEXT: It seems that 3:30 PM on Wednesday, the 17th is no longer available.
[2025-09-16T12:33:34.201Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems that 3:30 PM on Wednesday, the 17th is no longer available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems that 3:30 PM on Wednesday, the 17th is no longer available."}...
Message string: {"type":"History","role":"assistant","content":"It seems that 3:30 PM on Wednesday, the 17th is no longer available."}
[2025-09-16T12:33:34.202Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems that 3:30 PM on Wednesday, the 17th is no longer available."}
[2025-09-16T12:33:34.202Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems that 3:30 PM on Wednesday, the 17th is no longer available."
}
[2025-09-16T12:33:34.202Z] === END PARSED JSON ===
[2025-09-16T12:33:34.202Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:34.202Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:34.202Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems that 3:30 PM on Wednesday, the 17th is no longer available.
[2025-09-16T12:33:34.202Z] 📝 Added transcript: [AI] It seems that 3:30 PM on Wednesday, the 17th is no longer available.
[2025-09-16T12:33:34.202Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T12:33:36.340Z] 🔇 Audio stream ended (timeout)
[2025-09-16T12:33:37.197Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"The next closest opening is at 3:45 PM."}...
Message string: {"type":"ConversationText","role":"assistant","content":"The next closest opening is at 3:45 PM."}
[2025-09-16T12:33:39.440Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"The next closest opening is at 3:45 PM."}
[2025-09-16T12:33:39.440Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "The next closest opening is at 3:45 PM."
}
[2025-09-16T12:33:39.440Z] === END PARSED JSON ===
[2025-09-16T12:33:39.440Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:33:39.440Z] 💭 CONVERSATION_TEXT: The next closest opening is at 3:45 PM.
[2025-09-16T12:33:39.440Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: The next closest opening is at 3:45 PM.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"The next closest opening is at 3:45 PM."}...
Message string: {"type":"History","role":"assistant","content":"The next closest opening is at 3:45 PM."}
[2025-09-16T12:33:39.441Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"The next closest opening is at 3:45 PM."}
[2025-09-16T12:33:39.441Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "The next closest opening is at 3:45 PM."
}
[2025-09-16T12:33:39.441Z] === END PARSED JSON ===
[2025-09-16T12:33:39.441Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:33:39.441Z] 📜 HISTORY: Message logged
[2025-09-16T12:33:39.441Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: The next closest opening is at 3:45 PM.
[2025-09-16T12:33:39.441Z] 📝 Added transcript: [AI] The next closest opening is at 3:45 PM.
[2025-09-16T12:33:39.441Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T12:33:39.594Z] 🔇 Audio stream ended (timeout)
Media stream stopped
📞 Logging call completion: CA21593c61284c5207eec2825ed62615cd
✅ Call completion logged: CA21593c61284c5207eec2825ed62615cd
📱 Media stream stopped - sending SMS confirmations for CA21593c61284c5207eec2825ed62615cd
📞 endCall called with params: {
  "reason": "media stream stopped"
}
📞 Call SID: CA21593c61284c5207eec2825ed62615cd
📋 Session data before ending call: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T12:33:06.081Z',
  bookings: [
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
⚠️ Could not link update to any appointment: {
  customerName: 'Marco',
  currentDate: '2025-09-18',
  currentTime: '10:30',
  newDate: '2025-09-17',
  newTime: '15:30',
  newServiceId: undefined,
  type: 'update'
}
📞 Attempting to end call with SID: CA21593c61284c5207eec2825ed62615cd
📝 Reason: media stream stopped
✅ Call ended successfully: completed