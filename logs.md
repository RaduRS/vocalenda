
  2:22:22.446Z] 📊 Response type: object
[2025-09-16T12:22:22.446Z] 📊 Has slots: true
[2025-09-16T12:22:22.446Z] 📊 Slots count: 19
✅ Available time slots: [
  '09:00', '09:15', '09:30',
  '09:45', '10:00', '10:15',
  '10:30', '10:45', '11:00',
  '11:15', '11:30', '11:45',
  '12:00', '12:15', '13:00',
  '13:15', '13:30', '15:30',
  '15:45'
]
📝 Session updated for call CA9f1a678dd3d062859644ac8fa404b0b6: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T12:22:25.353Z'
}
📅 Stored checked date in session: 2025-09-17
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
[2025-09-16T12:22:24.963Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_EI9lHvTkeCO7FJFInjqrXbH6","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-17\"}","response":"{\"available_slots\":[\"09...
Message string: {"type":"History","function_calls":[{"id":"call_EI9lHvTkeCO7FJFInjqrXbH6","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-17\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"13:00\",\"13:15\",\"13:30\",\"15:30\",\"15:45\"]}"}]}"type": "History",
  "role": "assistant",
  "content": "I checked availability on Wednesday, the 17th."
}
[2025-09-16T12:22:31.904Z] === END PARSED JSON ===
[2025-09-16T12:22:31.904Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:22:31.904Z] 📜 HISTORY: Message logged
[2025-09-16T12:22:31.904Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I checked availability on Wednesday, the 17th.
[2025-09-16T12:22:31.904Z] 📝 Added transcript: [AI] I checked availability on Wednesday, the 17th.
[2025-09-16T12:22:31.904Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T12:22:32.057Z] 🔇 Audio stream ended (timeout)
[2025-09-16T12:22:32.978Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open."}...
Message string: {"type":"ConversationText","role":"assistant","content":"The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open."}
[2025-09-16T12:22:36.426Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open."}
[2025-09-16T12:22:36.426Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open."
}
[2025-09-16T12:22:36.426Z] === END PARSED JSON ===
[2025-09-16T12:22:36.426Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:22:36.426Z] 💭 CONVERSATION_TEXT: The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open.
[2025-09-16T12:22:36.426Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open."}...
Message string: {"type":"History","role":"assistant","content":"The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open."}
[2025-09-16T12:22:36.426Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open."}
[2025-09-16T12:22:36.426Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open."
}
[2025-09-16T12:22:36.426Z] === END PARSED JSON ===
[2025-09-16T12:22:36.426Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:22:36.426Z] 📜 HISTORY: Message logged
[2025-09-16T12:22:36.426Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open.
[2025-09-16T12:22:36.426Z] 📝 Added transcript: [AI] The 3 PM slot isn't available, but I do have 3:30 PM or 3:45 PM open.
[2025-09-16T12:22:36.426Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T12:22:36.978Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T12:22:36.733Z] 🔇 Audio stream ended (timeout)
[2025-09-16T12:22:40.979Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would either of those times work for you?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would either of those times work for you?"}
[2025-09-16T12:22:43.747Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would either of those times work for you?"}
[2025-09-16T12:22:43.747Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would either of those times work for you?"
}
[2025-09-16T12:22:43.747Z] === END PARSED JSON ===
[2025-09-16T12:22:43.747Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:22:43.747Z] 💭 CONVERSATION_TEXT: Would either of those times work for you?
[2025-09-16T12:22:43.747Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Would either of those times work for you?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would either of those times work for you?"}...
Message string: {"type":"History","role":"assistant","content":"Would either of those times work for you?"}
[2025-09-16T12:22:43.900Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would either of those times work for you?"}
[2025-09-16T12:22:43.900Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would either of those times work for you?"
}
[2025-09-16T12:22:43.900Z] === END PARSED JSON ===
[2025-09-16T12:22:43.900Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:22:43.900Z] 📜 HISTORY: Message logged
[2025-09-16T12:22:43.900Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Would either of those times work for you?
[2025-09-16T12:22:43.900Z] 📝 Added transcript: [AI] Would either of those times work for you?
[2025-09-16T12:22:43.900Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-16T12:22:43.900Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-16T12:22:43.900Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T12:22:43.900Z] === END PARSED JSON ===
[2025-09-16T12:22:43.900Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T12:22:43.900Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T12:22:43.900Z] 🔇 SILENCE: Started tracking
[2025-09-16T12:22:43.900Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-16T12:22:43.900Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-16T12:22:44.979Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T12:22:43.900Z] 🔇 SILENCE_CHECK: 2001ms of silence
[2025-09-16T12:22:43.900Z] 🔇 SILENCE_CHECK: 3002ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-16T12:22:47.414Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-16T12:22:47.414Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-16T12:22:47.414Z] === END PARSED JSON ===
[2025-09-16T12:22:47.414Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-16T12:22:47.414Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-16T12:22:47.414Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-16T12:22:47.414Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-16T12:22:48.979Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty."}
[2025-09-16T12:22:49.052Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes. Let's go with three thirty."}
[2025-09-16T12:22:49.052Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes. Let's go with three thirty."
}
[2025-09-16T12:22:49.052Z] === END PARSED JSON ===
[2025-09-16T12:22:49.052Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:22:49.052Z] 💭 CONVERSATION_TEXT: Yes. Let's go with three thirty.
[2025-09-16T12:22:49.052Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes. Let's go with three thirty.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes. Let's go with three thirty."}...
Message string: {"type":"History","role":"user","content":"Yes. Let's go with three thirty."}
[2025-09-16T12:22:49.065Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes. Let's go with three thirty."}
[2025-09-16T12:22:49.065Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes. Let's go with three thirty."
}
[2025-09-16T12:22:49.065Z] === END PARSED JSON ===
[2025-09-16T12:22:49.065Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:22:49.065Z] 📜 HISTORY: Message logged
[2025-09-16T12:22:49.065Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes. Let's go with three thirty.
[2025-09-16T12:22:49.065Z] 📝 Added transcript: [User] Yes. Let's go with three thirty.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_X4tMIAeiq8q4DYX7AdHeg6bL","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Ma...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_X4tMIAeiq8q4DYX7AdHeg6bL","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T12:22:50.646Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_X4tMIAeiq8q4DYX7AdHeg6bL","name":"update_booking","arguments":"{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T12:22:50.646Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_X4tMIAeiq8q4DYX7AdHeg6bL",
      "name": "update_booking",
      "arguments": "{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-16T12:22:50.646Z] === END PARSED JSON ===
[2025-09-16T12:22:50.646Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-16T12:22:50.646Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-16T12:22:50.646Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-16T12:22:50.646Z] 📋 Functions: [
  {
    "id": "call_X4tMIAeiq8q4DYX7AdHeg6bL",
    "name": "update_booking",
    "arguments": "{\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\",\"customer_name\":\"Marco\",\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
    "client_side": true
  }
]
[2025-09-16T12:22:50.646Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-16T12:22:50.647Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-16T12:22:50.646Z] 🔧 Processing function: update_booking
[2025-09-16T12:22:50.646Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA9f1a678dd3d062859644ac8fa404b0b6: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T12:22:25.353Z'
}
[2025-09-16T12:22:50.647Z] 🚀 STARTING handleFunctionCall
[2025-09-16T12:22:50.647Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_X4tMIAeiq8q4DYX7AdHeg6bL",
  "parameters": {
    "current_date": "2025-09-18",
    "current_time": "10:30",
    "customer_name": "Marco",
    "new_date": "2025-09-17",
    "new_time": "15:30"
  }
}
[2025-09-16T12:22:50.647Z] 📋 Function name: update_booking
[2025-09-16T12:22:50.647Z] 📊 Parameters: {
  "current_date": "2025-09-18",
  "current_time": "10:30",
  "customer_name": "Marco",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
[2025-09-16T12:22:50.647Z] 🏢 Business config exists: true
[2025-09-16T12:22:50.647Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_X4tMIAeiq8q4DYX7AdHeg6bL",
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
  lastCheckedTimestamp: '2025-09-16T12:22:25.353Z'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-18',
  currentTime: '10:30'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-18 at 10:30
📝 Session updated for call CA9f1a678dd3d062859644ac8fa404b0b6: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T12:22:25.353Z',
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
  "sessionId": "CA9f1a678dd3d062859644ac8fa404b0b6",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
❌ Update booking API error: 409 {"error":"The new time slot 2025-09-17 at 15:30 is not available"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_X4tMIAeiq8q4DYX7AdHeg6bL","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\",\"customer_name\":...
Message string: {"type":"History","function_calls":[{"id":"call_X4tMIAeiq8q4DYX7AdHeg6bL","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\",\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"}]}
[2025-09-16T12:22:54.406Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_X4tMIAeiq8q4DYX7AdHeg6bL","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\",\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"}]}
[2025-09-16T12:22:54.406Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_X4tMIAeiq8q4DYX7AdHeg6bL",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\",\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"10:30\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-17 at 15:30 is not available\\\"}\"}"
    }
  ]
}
[2025-09-16T12:22:54.406Z] === END PARSED JSON ===
[2025-09-16T12:22:54.406Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T12:22:54.406Z] 📜 HISTORY: Message logged
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It looks like 3:30 PM on Wednesday, the 17th is no longer available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It looks like 3:30 PM on Wednesday, the 17th is no longer available."}
[2025-09-16T12:22:55.239Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It looks like 3:30 PM on Wednesday, the 17th is no longer available."}
[2025-09-16T12:22:55.239Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It looks like 3:30 PM on Wednesday, the 17th is no longer available."
}
[2025-09-16T12:22:55.239Z] === END PARSED JSON ===
[2025-09-16T12:22:55.239Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T12:22:55.239Z] 💭 CONVERSATION_TEXT: It looks like 3:30 PM on Wednesday, the 17th is no longer available.
[2025-09-16T12:22:55.239Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It looks like 3:30 PM on Wednesday, the 17th is no longer available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It looks like 3:30 PM on Wednesday, the 17th is no longer available."}...
Message string: {"type":"History","role":"assistant","content":"It looks like 3:30 PM on Wednesday, the 17th is no longer available."}
[2025-09-16T12:22:55.239Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It looks like 3:30 PM on Wednesday, the 17th is no longer available."}
[2025-09-16T12:22:55.239Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It looks like 3:30 PM on Wednesday, the 17th is no longer available."