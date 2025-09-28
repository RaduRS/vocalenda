
[10:46:22] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yeah. That's correct. Can we can I go for Wednesday at ten, please?
📨 Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_GukVjgZqykgZjwKUIUjDGsAh","name":"get_day_of_week","arguments":"{\"date\":\"01/10/2025\"}","client_side":true}]}
[10:46:24] 🎯 DEEPGRAM: FunctionCallRequest
[10:46:24] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[10:46:24] ✅ SUCCESS: AI requesting function calls!
[10:46:24] 🕐 TIMING: Function call request received at 10:46:24
[10:46:24] 📊 FUNCTION COUNT: 1 functions in request
[10:46:24] 📋 Functions: [
  {
    "id": "call_GukVjgZqykgZjwKUIUjDGsAh",
    "name": "get_day_of_week",
    "arguments": "{\"date\":\"01/10/2025\"}",
    "client_side": true
  }
]
[10:46:24] 🔍 FUNCTION 1:
[10:46:24]   - Name: get_day_of_week
[10:46:24]   - ID: call_GukVjgZqykgZjwKUIUjDGsAh
[10:46:24]   - Arguments: {"date":"01/10/2025"}
[10:46:24] ⏸️ SILENCE: Pausing timer - Processing function calls
[10:46:24] ⏸️ KEEPALIVE: Paused for function processing
[10:46:24] 🔧 Processing function: get_day_of_week
[10:46:24] 🆔 Function ID: call_GukVjgZqykgZjwKUIUjDGsAh
[10:46:24] 📝 Function arguments: {"date":"01/10/2025"}
[10:46:24] 📦 Created function call data: {
  "function_name": "get_day_of_week",
  "function_call_id": "call_GukVjgZqykgZjwKUIUjDGsAh",
  "parameters": {
    "date": "01/10/2025"
  }
}
[10:46:24] 🔧 CALLING: handleFunctionCall for get_day_of_week with ID call_GukVjgZqykgZjwKUIUjDGsAh...
📝 Session updated for call CA40814d60d08c9f0f86a5de306efa3712: { callerPhone: '+447468306825' }
[10:46:24] 🚀 FUNCTION: get_day_of_week
📅 Function call data: {
  "function_name": "get_day_of_week",
  "function_call_id": "call_GukVjgZqykgZjwKUIUjDGsAh",
  "parameters": {
    "date": "01/10/2025"
  }
}
📅 Extracted params: {
  "date": "01/10/2025"
}
📅 Getting day of week for: 01/10/2025
📅 Date type: string
📅 Date value: "01/10/2025"
📅 Parsed date successfully: 2025-10-01T00:00:00.000Z
✅ 01/10/2025 is a Wednesday
✅ Sending get_day_of_week response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Message string: {"type":"History","function_calls":[{"id":"call_GukVjgZqykgZjwKUIUjDGsAh","name":"get_day_of_week","client_side":true,"arguments":"{\"date\":\"01/10/2025\"}","response":"{\"date\":\"01/10/2025\",\"day_of_week\":\"Wednesday\",\"day_number\":3,\"formatted\":\"Wednesday, 1 October 2025\"}"}]}
[10:46:24] 🎯 DEEPGRAM: History
[10:46:24] 📜 HISTORY: Message logged
[10:46:24] ✅ COMPLETED: handleFunctionCall for get_day_of_week with ID call_GukVjgZqykgZjwKUIUjDGsAh (took 1001ms)
[10:46:25] ▶️ KEEPALIVE: Resumed after function processing
[10:46:24] ▶️ SILENCE: Resuming timer - Function processing completed
[10:46:25] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_YPiJlca65GpxLtKXYShaKCcl","name":"get_current_time","arguments":"{}","client_side":true}]}
[10:46:26] 🎯 DEEPGRAM: FunctionCallRequest
[10:46:26] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[10:46:26] ✅ SUCCESS: AI requesting function calls!
[10:46:26] 🕐 TIMING: Function call request received at 10:46:26
[10:46:26] 📊 FUNCTION COUNT: 1 functions in request
[10:46:26] 📋 Functions: [
  {
    "id": "call_YPiJlca65GpxLtKXYShaKCcl",
    "name": "get_current_time",
    "arguments": "{}",
    "client_side": true
  }
]
[10:46:26] 🔍 FUNCTION 1:
[10:46:26]   - Name: get_current_time
[10:46:26]   - ID: call_YPiJlca65GpxLtKXYShaKCcl
[10:46:26]   - Arguments: {}
[10:46:26] ⏸️ SILENCE: Pausing timer - Processing function calls
[10:46:26] ⏸️ KEEPALIVE: Paused for function processing
[10:46:26] 🔧 Processing function: get_current_time
[10:46:26] 🆔 Function ID: call_YPiJlca65GpxLtKXYShaKCcl
[10:46:26] 📝 Function arguments: {}
[10:46:26] 📦 Created function call data: {
  "function_name": "get_current_time",
  "function_call_id": "call_YPiJlca65GpxLtKXYShaKCcl",
  "parameters": {}
}
[10:46:26] 🔧 CALLING: handleFunctionCall for get_current_time with ID call_YPiJlca65GpxLtKXYShaKCcl...
📝 Session updated for call CA40814d60d08c9f0f86a5de306efa3712: { callerPhone: '+447468306825' }
[10:46:26] 🚀 FUNCTION: get_current_time
🕐 Getting current time
✅ Current UK time: 10:46 (10:46 am)
✅ Sending get_current_time response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Message string: {"type":"History","function_calls":[{"id":"call_YPiJlca65GpxLtKXYShaKCcl","name":"get_current_time","client_side":true,"arguments":"{}","response":"{\"current_time_24h\":\"10:46\",\"current_time_12h\":\"10:46 am\",\"timezone\":\"Europe/London\",\"timestamp\":\"2025-09-28T10:46:26.000Z\",\"formatted\":\"It is currently 10:46 am UK time\"}"}]}
[10:46:26] 🎯 DEEPGRAM: History
[10:46:26] 📜 HISTORY: Message logged
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Let me check what times are available on Wednesday, the 1st of October for you..."}
[10:46:26] 🎯 DEEPGRAM: ConversationText
[10:46:26] 💭 CONVERSATION_TEXT: Let me check what times are available on Wednesday, the 1st of October for you...
📨 Message string: {"type":"History","role":"assistant","content":"Let me check what times are available on Wednesday, the 1st of October for you..."}
[10:46:26] 🎯 DEEPGRAM: History
[10:46:26] 📜 HISTORY: Message logged
[10:46:26] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Let me check what times are available on Wednesday, the 1st of October for you...
[10:46:26] 🎵 Starting audio stream - feeding buffer
[10:46:26] ✅ COMPLETED: handleFunctionCall for get_current_time with ID call_YPiJlca65GpxLtKXYShaKCcl (took 1000ms)
[10:46:27] ▶️ KEEPALIVE: Resumed after function processing
[10:46:26] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_Stjub7L3WLeK7ytcfeXjrZnw","name":"get_available_slots","arguments":"{\"date\":\"2025-10-01\"}","client_side":true}]}
[10:46:28] 🎯 DEEPGRAM: FunctionCallRequest
[10:46:28] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[10:46:28] ✅ SUCCESS: AI requesting function calls!
[10:46:28] 🕐 TIMING: Function call request received at 10:46:28
[10:46:28] 📊 FUNCTION COUNT: 1 functions in request
[10:46:28] 📋 Functions: [
  {
    "id": "call_Stjub7L3WLeK7ytcfeXjrZnw",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-10-01\"}",
    "client_side": true
  }
]
[10:46:28] 🔍 FUNCTION 1:
[10:46:28]   - Name: get_available_slots
[10:46:28]   - ID: call_Stjub7L3WLeK7ytcfeXjrZnw
[10:46:28]   - Arguments: {"date":"2025-10-01"}
[10:46:28] ⏸️ SILENCE: Pausing timer - Processing function calls
[10:46:28] ⏸️ KEEPALIVE: Paused for function processing
[10:46:28] 🔧 Processing function: get_available_slots
[10:46:28] 🆔 Function ID: call_Stjub7L3WLeK7ytcfeXjrZnw
[10:46:28] 📝 Function arguments: {"date":"2025-10-01"}
[10:46:28] 📦 Created function call data: {
  "function_name": "get_available_slots",
  "function_call_id": "call_Stjub7L3WLeK7ytcfeXjrZnw",
  "parameters": {
    "date": "2025-10-01"
  }
}
[10:46:28] 🔧 CALLING: handleFunctionCall for get_available_slots with ID call_Stjub7L3WLeK7ytcfeXjrZnw...
📝 Session updated for call CA40814d60d08c9f0f86a5de306efa3712: { callerPhone: '+447468306825' }
[10:46:28] 🚀 FUNCTION: get_available_slots
🕐 Current UK time: 10:46, Current date: 2025-09-28
📅 Validating request for date: 2025-10-01, time: not specified
✅ FUNCTION_CALL_VALIDATION: get_available_slots passed all checks - proceeding with API call
[10:46:28] 🗓️ GET_SLOTS: 2025-10-01 service:undefined
📅 Business open on Wednesday
📋 Using default service: Haircut (Duration: 30 minutes)
🔍 Including customer context for availability check: +447468306825
[10:46:28] 🔇 Audio stream ended (timeout)
[10:46:28] 📡 API: 200 - 26 slots
✅ Available time slots: [
  '09:00', '09:15', '09:30',
  '11:00', '11:15', '11:30',
  '11:45', '12:00', '12:15',
  '12:30', '12:45', '13:00',
  '13:15', '13:30', '13:45',
  '14:00', '14:15', '14:30',
  '14:45', '15:00', '15:15',
  '15:30', '15:45', '16:00',
  '16:15', '16:30'
]
✅ Available slots (12-hour): [
  '9:00 AM',  '9:15 AM',  '9:30 AM',
  '11:00 AM', '11:15 AM', '11:30 AM',
  '11:45 AM', '12:00 PM', '12:15 PM',
  '12:30 PM', '12:45 PM', '1:00 PM',
  '1:15 PM',  '1:30 PM',  '1:45 PM',
  '2:00 PM',  '2:15 PM',  '2:30 PM',
  '2:45 PM',  '3:00 PM',  '3:15 PM',
  '3:30 PM',  '3:45 PM',  '4:00 PM',
  '4:15 PM',  '4:30 PM'
]
📝 Session updated for call CA40814d60d08c9f0f86a5de306efa3712: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-10-01',
  lastCheckedTimestamp: '10:46:29'
}
📅 Stored checked date in session: 2025-10-01
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Message string: {"type":"History","function_calls":[{"id":"call_Stjub7L3WLeK7ytcfeXjrZnw","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-10-01\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"],\"available_slots_12hour\":[\"9:00 AM\",\"9:15 AM\",\"9:30 AM\",\"11:00 AM\",\"11:15 AM\",\"11:30 AM\",\"11:45 AM\",\"12:00 PM\",\"12:15 PM\",\"12:30 PM\",\"12:45 PM\",\"1:00 PM\",\"1:15 PM\",\"1:30 PM\",\"1:45 PM\",\"2:00 PM\",\"2:15 PM\",\"2:30 PM\",\"2:45 PM\",\"3:00 PM\",\"3:15 PM\",\"3:30 PM\",\"3:45 PM\",\"4:00 PM\",\"4:15 PM\",\"4:30 PM\"],\"conversion_map\":{\"9:00 AM\":\"09:00\",\"9:15 AM\":\"09:15\",\"9:30 AM\":\"09:30\",\"11:00 AM\":\"11:00\",\"11:15 AM\":\"11:15\",\"11:30 AM\":\"11:30\",\"11:45 AM\":\"11:45\",\"12:00 PM\":\"12:00\",\"12:15 PM\":\"12:15\",\"12:30 PM\":\"12:30\",\"12:45 PM\":\"12:45\",\"1:00 PM\":\"13:00\",\"1:15 PM\":\"13:15\",\"1:30 PM\":\"13:30\",\"1:45 PM\":\"13:45\",\"2:00 PM\":\"14:00\",\"2:15 PM\":\"14:15\",\"2:30 PM\":\"14:30\",\"2:45 PM\":\"14:45\",\"3:00 PM\":\"15:00\",\"3:15 PM\":\"15:15\",\"3:30 PM\":\"15:30\",\"3:45 PM\":\"15:45\",\"4:00 PM\":\"16:00\",\"4:15 PM\":\"16:15\",\"4:30 PM\":\"16:30\"},\"checked_at\":\"2025-09-28T09:46:29.185Z\",\"freshness_warning\":\"⚠️ Availability data may change. Always validate before booking.\"}"}]}
[10:46:29] 🎯 DEEPGRAM: History
[10:46:29] 📜 HISTORY: Message logged
[10:46:28] ✅ COMPLETED: handleFunctionCall for get_available_slots with ID call_Stjub7L3WLeK7ytcfeXjrZnw (took 2148ms)
[10:46:30] ▶️ KEEPALIVE: Resumed after function processing
[10:46:28] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Let me check what's available for you on Wednesday, the 1st of October at 10 AM..."}
[10:46:31] 🎯 DEEPGRAM: ConversationText
[10:46:31] 💭 CONVERSATION_TEXT: Let me check what's available for you on Wednesday, the 1st of October at 10 AM...
📨 Message string: {"type":"History","role":"assistant","content":"Let me check what's available for you on Wednesday, the 1st of October at 10 AM..."}
[10:46:31] 🎯 DEEPGRAM: History
[10:46:31] 📜 HISTORY: Message logged
[10:46:31] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Let me check what's available for you on Wednesday, the 1st of October at 10 AM...
[10:46:31] 🎵 Starting audio stream - feeding buffer
[10:46:31] 🔇 Audio stream ended (timeout)
[10:46:33] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"ConversationText","role":"assistant","content":"10 AM on Wednesday, the 1st of October isn't available, but I have 9 AM, 9:15 AM, or 9:30 AM available that morning, or if you prefer later, I can offer times starting from 11 AM onwards."}
[10:46:37] 🎯 DEEPGRAM: ConversationText
[10:46:37] 💭 CONVERSATION_TEXT: 10 AM on Wednesday, the 1st of October isn't available, but I have 9 AM, 9:15 AM, or 9:30 AM available that morning, or if you prefer later, I can offer times starting from 11 AM onwards.
📨 Message string: {"type":"History","role":"assistant","content":"10 AM on Wednesday, the 1st of October isn't available, but I have 9 AM, 9:15 AM, or 9:30 AM available that morning, or if you prefer later, I can offer times starting from 11 AM onwards."}
[10:46:37] 🎯 DEEPGRAM: History
[10:46:37] 📜 HISTORY: Message logged
[10:46:37] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: 10 AM on Wednesday, the 1st of October isn't available, but I have 9 AM, 9:15 AM, or 9:30 AM available that morning, or if you prefer later, I can offer times starting from 11 AM onwards.
[10:46:37] 🎵 Starting audio stream - feeding buffer
[10:46:37] 💓 KEEPALIVE: Sent to Deepgram
[10:46:39] 🔇 Audio stream ended (timeout)
[10:46:41] 💓 KEEPALIVE: Sent to Deepgram
[10:46:45] 💓 KEEPALIVE: Sent to Deepgram
[10:46:49] 💓 KEEPALIVE: Sent to Deepgram
[10:46:53] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Which time works best for you?"}
[10:46:56] 🎯 DEEPGRAM: ConversationText
[10:46:56] 💭 CONVERSATION_TEXT: Which time works best for you?
📨 Message string: {"type":"History","role":"assistant","content":"Which time works best for you?"}
[10:46:56] 🎯 DEEPGRAM: History
[10:46:56] 📜 HISTORY: Message logged
[10:46:56] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Which time works best for you?
[10:46:56] 🎵 Starting audio stream - feeding buffer
📨 Message string: {"type":"AgentAudioDone"}
[10:46:56] 🎯 DEEPGRAM: AgentAudioDone
[10:46:56] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[10:46:56] 🔇 SILENCE: Started tracking
[10:46:56] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[10:46:56] 🔇 SILENCE_CHECK: 1001ms of silence
[10:46:57] 💓 KEEPALIVE: Sent to Deepgram
[10:46:56] 🔇 SILENCE_CHECK: 2000ms of silence
[10:46:56] 🔇 SILENCE_CHECK: 3001ms of silence
📨 Message string: {"type":"UserStartedSpeaking"}
[10:47:00] 🎯 DEEPGRAM: UserStartedSpeaking
[10:47:00] 🎤 USER_STARTED_SPEAKING: User began speaking
[10:47:00] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[10:47:00] 🔄 BARGE_IN: Cleared local audio buffer and stopped streaming
[10:47:00] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Message string: {"type":"ConversationText","role":"user","content":"Let's go with nine thirty, please."}
[10:47:01] 🎯 DEEPGRAM: ConversationText
[10:47:01] 💭 CONVERSATION_TEXT: Let's go with nine thirty, please.
📨 Message string: {"type":"History","role":"user","content":"Let's go with nine thirty, please."}
[10:47:01] 🎯 DEEPGRAM: History
[10:47:01] 📜 HISTORY: Message logged
[10:47:01] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Let's go with nine thirty, please.
[10:47:01] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Perfect, I can book you for 9:30 AM on Wednesday, the 1st of October."}
[10:47:03] 🎯 DEEPGRAM: ConversationText
[10:47:03] 💭 CONVERSATION_TEXT: Perfect, I can book you for 9:30 AM on Wednesday, the 1st of October.
📨 Message string: {"type":"History","role":"assistant","content":"Perfect, I can book you for 9:30 AM on Wednesday, the 1st of October."}
[10:47:03] 🎯 DEEPGRAM: History
[10:47:03] 📜 HISTORY: Message logged
[10:47:03] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Perfect, I can book you for 9:30 AM on Wednesday, the 1st of October.
[10:47:03] 🎵 Starting audio stream - feeding buffer
[10:47:05] 💓 KEEPALIVE: Sent to Deepgram
[10:47:05] 🔇 Audio stream ended (timeout)
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that for you?"}
[10:47:09] 🎯 DEEPGRAM: ConversationText
[10:47:09] 💭 CONVERSATION_TEXT: Shall I confirm that for you?
📨 Message string: {"type":"History","role":"assistant","content":"Shall I confirm that for you?"}
[10:47:09] 🎯 DEEPGRAM: History
[10:47:09] 📜 HISTORY: Message logged
[10:47:09] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Shall I confirm that for you?
[10:47:09] 🎵 Starting audio stream - feeding buffer
📨 Message string: {"type":"AgentAudioDone"}
[10:47:09] 🎯 DEEPGRAM: AgentAudioDone
[10:47:09] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[10:47:09] 🔇 SILENCE: Started tracking
[10:47:09] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[10:47:09] 💓 KEEPALIVE: Sent to Deepgram
[10:47:09] 🔇 SILENCE_CHECK: 1001ms of silence
[10:47:09] 🔇 SILENCE_CHECK: 2001ms of silence
📨 Message string: {"type":"UserStartedSpeaking"}
[10:47:12] 🎯 DEEPGRAM: UserStartedSpeaking
[10:47:12] 🎤 USER_STARTED_SPEAKING: User began speaking
[10:47:12] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[10:47:12] 🔄 BARGE_IN: Cleared local audio buffer and stopped streaming
[10:47:12] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[10:47:12] 🎯 DEEPGRAM: ConversationText
[10:47:12] 💭 CONVERSATION_TEXT: Yes.
📨 Message string: {"type":"History","role":"user","content":"Yes."}
[10:47:12] 🎯 DEEPGRAM: History
[10:47:12] 📜 HISTORY: Message logged
[10:47:12] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
[10:47:13] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_AEe2U4prxyqqCDbm5RcvnEdq","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-10-01\",\"service_id\":\"Haircut\",\"time\":\"09:30\"}","client_side":true}]}
[10:47:13] 🎯 DEEPGRAM: FunctionCallRequest
[10:47:13] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[10:47:13] ✅ SUCCESS: AI requesting function calls!
[10:47:13] 🕐 TIMING: Function call request received at 10:47:13
[10:47:13] 📊 FUNCTION COUNT: 1 functions in request
[10:47:13] 📋 Functions: [
  {
    "id": "call_AEe2U4prxyqqCDbm5RcvnEdq",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-10-01\",\"service_id\":\"Haircut\",\"time\":\"09:30\"}",
    "client_side": true
  }
]
[10:47:13] 🔍 FUNCTION 1:
[10:47:13]   - Name: create_booking
[10:47:13]   - ID: call_AEe2U4prxyqqCDbm5RcvnEdq
[10:47:13]   - Arguments: {"customer_name":"Marco","date":"2025-10-01","service_id":"Haircut","time":"09:30"}
[10:47:13] ⏸️ SILENCE: Pausing timer - Processing function calls
[10:47:13] ⏸️ KEEPALIVE: Paused for function processing
[10:47:13] 🔧 Processing function: create_booking
[10:47:13] 🆔 Function ID: call_AEe2U4prxyqqCDbm5RcvnEdq
[10:47:13] 📝 Function arguments: {"customer_name":"Marco","date":"2025-10-01","service_id":"Haircut","time":"09:30"}
[10:47:13] 📦 Created function call data: {
  "function_name": "create_booking",
  "function_call_id": "call_AEe2U4prxyqqCDbm5RcvnEdq",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-10-01",
    "service_id": "Haircut",
    "time": "09:30"
  }
}
[10:47:13] 🔧 CALLING: handleFunctionCall for create_booking with ID call_AEe2U4prxyqqCDbm5RcvnEdq...
📝 Session updated for call CA40814d60d08c9f0f86a5de306efa3712: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-10-01',
  lastCheckedTimestamp: '10:46:29'
}
[10:47:13] 🚀 FUNCTION: create_booking
🔍 DEDUP CHECK: Checking function call ID call_AEe2U4prxyqqCDbm5RcvnEdq
🔍 DEDUP CHECK: Current processed calls: [ 'call_MAGH4iTt7yoauJgzLpwQmiRa' ]
🔍 DEDUP CHECK: Function parameters: {
  "customer_name": "Marco",
  "date": "2025-10-01",
  "service_id": "Haircut",
  "time": "09:30"
}
🔍 DEDUP CHECK: Timestamp: 10:47:13
✅ TRACKING: Added function call ID call_AEe2U4prxyqqCDbm5RcvnEdq to processed set
✅ TRACKING: Updated processed calls: [ 'call_MAGH4iTt7yoauJgzLpwQmiRa', 'call_AEe2U4prxyqqCDbm5RcvnEdq' ]
🕐 Current UK time: 10:47, Current date: 2025-09-28
📅 Validating request for date: 2025-10-01, time: 09:30
✅ FUNCTION_CALL_VALIDATION: create_booking passed all checks - proceeding with API call
[10:47:13] 📅 CREATE_BOOKING: Marco - Haircut on 2025-10-01 at 09:30
📋 Booking - Found service by name 'Haircut' -> ID: 3013d2c2-043d-4489-9e24-7ca773baf90d
✅ Booking - Service found: Haircut (ID: 3013d2c2-043d-4489-9e24-7ca773baf90d )
📝 Session updated for call CA40814d60d08c9f0f86a5de306efa3712: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-10-01',
  lastCheckedTimestamp: '10:46:29',
  customerName: 'Marco',
  lastBookingDate: '2025-10-01',
  lastBookingTime: '09:30',
  lastServiceId: 'Haircut',
  lastServiceName: 'Haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      bookingReference: 'BK833871T2',
      customerName: 'Marco',
      date: '2025-10-01',
      time: '09:30',
      serviceId: 'Haircut',
      serviceName: 'Haircut',
      serviceDuration: 30,
      appointmentId: null,
      type: 'create'
    }
  ]
}
🕐 Creating appointment for 2025-10-01 at 09:30 in timezone: Europe/London
📅 Parsed date: 2025-10-01 (Wednesday)
🕐 Appointment datetime (UK local): 09:30
🕐 Business timezone: Europe/London
🕐 Start time: 09:30
🕐 End time: 10:00
📅 Day of week: Wednesday
🔍 Checking slot availability before booking...
📋 Availability check result: {
  "available": true,
  "businessId": "044ef74c-1513-47c0-ac8f-8e4b5a083345",
  "serviceId": "3013d2c2-043d-4489-9e24-7ca773baf90d",
  "appointmentDate": "2025-10-01",
  "startTime": "09:30",
  "endTime": "10:00",
  "message": "Slot is available"
}
✅ Slot is available - proceeding with booking
📞 Calling internal Next.js booking API...
🔗 API URL: https://www.vocalenda.com/api/internal/booking
📦 Booking data: {
  "businessId": "044ef74c-1513-47c0-ac8f-8e4b5a083345",
  "serviceId": "3013d2c2-043d-4489-9e24-7ca773baf90d",
  "appointmentDate": "2025-10-01",
  "startTime": "09:30",
  "endTime": "10:00",
  "customerName": "Marco",
  "customerPhone": "+447468306825",
  "customerEmail": null,
  "notes": "Voice booking - Customer: Marco - Phone: +447468306825",
  "sessionId": "CA40814d60d08c9f0f86a5de306efa3712"
}
📡 API Response status: 200 OK
📋 API Response body: {
  "success": true,
  "appointmentId": "ee6379b8-2660-4ea6-8136-76da950439c1",
  "calendarEventId": "gnbmva1tjdp5j47ld5etqijbt4",
  "fillerPhrase": "Great Marco, I'm booking your Haircut for Wednesday 1st October at 09:30...",
  "sessionId": "CA40814d60d08c9f0f86a5de306efa3712"
}
✅ Appointment created successfully via API: ee6379b8-2660-4ea6-8136-76da950439c1
📅 Calendar event ID: gnbmva1tjdp5j47ld5etqijbt4
📞 Updating call log with customer name: Marco
Failed to update call customer: {
  code: 'PGRST204',
  details: null,
✅ Call log updated with customer name: CA40814d60d08c9f0f86a5de306efa3712
  hint: null,
  message: "Could not find the 'customer_name' column of 'call_logs' in the schema cache"
}
📝 Session updated for call CA40814d60d08c9f0f86a5de306efa3712: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-10-01',
  lastCheckedTimestamp: '10:46:29',
  customerName: 'Marco',
  lastBookingDate: '2025-10-01',
  lastBookingTime: '09:30',
  lastServiceId: 'Haircut',
  lastServiceName: 'Haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      bookingReference: 'BK833871T2',
      customerName: 'Marco',
      date: '2025-10-01',
      time: '09:30',
      serviceId: 'Haircut',
      serviceName: 'Haircut',
      serviceDuration: 30,
      appointmentId: 'ee6379b8-2660-4ea6-8136-76da950439c1',
      type: 'create'
    }
  ],
  lastAppointmentId: 'ee6379b8-2660-4ea6-8136-76da950439c1'
}
📋 Stored appointment ID in session: ee6379b8-2660-4ea6-8136-76da950439c1
✅ Sending create_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Message string: {"type":"History","function_calls":[{"id":"call_AEe2U4prxyqqCDbm5RcvnEdq","name":"create_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-10-01\",\"service_id\":\"Haircut\",\"time\":\"09:30\"}","response":"{\"success\":true,\"appointment_id\":\"ee6379b8-2660-4ea6-8136-76da950439c1\",\"calendar_event_id\":\"gnbmva1tjdp5j47ld5etqijbt4\",\"message\":\"✅ BOOKING CONFIRMED: Appointment successfully booked for Marco on 2025-10-01 at 09:30 for Haircut. Your appointment is confirmed and secured. Event has been added to your Google Calendar.\"}"}]}
[10:47:18] 🎯 DEEPGRAM: History
[10:47:18] 📜 HISTORY: Message logged
[10:47:13] ✅ COMPLETED: handleFunctionCall for create_booking with ID call_AEe2U4prxyqqCDbm5RcvnEdq (took 5003ms)
[10:47:18] ▶️ KEEPALIVE: Resumed after function processing
[10:47:13] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Great!"}
[10:47:19] 🎯 DEEPGRAM: ConversationText
[10:47:19] 💭 CONVERSATION_TEXT: Great!
📨 Message string: {"type":"History","role":"assistant","content":"Great!"}
[10:47:19] 🎯 DEEPGRAM: History
[10:47:19] 📜 HISTORY: Message logged
[10:47:19] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Great!
[10:47:19] 🎵 Starting audio stream - feeding buffer
[10:47:19] 🔇 Audio stream ended (timeout)
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Your appointment is confirmed for 9:30 AM on Wednesday, the 1st of October."}
[10:47:19] 🎯 DEEPGRAM: ConversationText
[10:47:19] 💭 CONVERSATION_TEXT: Your appointment is confirmed for 9:30 AM on Wednesday, the 1st of October.
📨 Message string: {"type":"History","role":"assistant","content":"Your appointment is confirmed for 9:30 AM on Wednesday, the 1st of October."}
[10:47:19] 🎯 DEEPGRAM: History
[10:47:19] 📜 HISTORY: Message logged
[10:47:19] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Your appointment is confirmed for 9:30 AM on Wednesday, the 1st of October.
[10:47:19] 🎵 Starting audio stream - feeding buffer
[10:47:21] 💓 KEEPALIVE: Sent to Deepgram
[10:47:22] 🔇 Audio stream ended (timeout)
[10:47:25] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Is there anything else I can help you with today?"}
[10:47:26] 🎯 DEEPGRAM: ConversationText
[10:47:26] 💭 CONVERSATION_TEXT: Is there anything else I can help you with today?
📨 Message string: {"type":"History","role":"assistant","content":"Is there anything else I can help you with today?"}
[10:47:26] 🎯 DEEPGRAM: History
[10:47:26] 📜 HISTORY: Message logged
[10:47:26] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Is there anything else I can help you with today?
[10:47:26] 🎵 Starting audio stream - feeding buffer
📨 Message string: {"type":"AgentAudioDone"}
[10:47:26] 🎯 DEEPGRAM: AgentAudioDone
[10:47:26] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[10:47:26] 🔇 SILENCE: Started tracking
[10:47:26] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[10:47:26] 🔇 SILENCE_CHECK: 1000ms of silence
[10:47:26] 🔇 SILENCE_CHECK: 2001ms of silence
[10:47:26] 🔇 SILENCE_CHECK: 3001ms of silence
[10:47:29] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"UserStartedSpeaking"}
[10:47:30] 🎯 DEEPGRAM: UserStartedSpeaking
[10:47:30] 🎤 USER_STARTED_SPEAKING: User began speaking
[10:47:30] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[10:47:30] 🔄 BARGE_IN: Cleared local audio buffer and stopped streaming
[10:47:30] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Message string: {"type":"ConversationText","role":"user","content":"No. Thanks. Bye."}
[10:47:30] 🎯 DEEPGRAM: ConversationText
[10:47:30] 💭 CONVERSATION_TEXT: No. Thanks. Bye.
📨 Message string: {"type":"History","role":"user","content":"No. Thanks. Bye."}
[10:47:30] 🎯 DEEPGRAM: History
[10:47:30] 📜 HISTORY: Message logged
[10:47:30] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: No. Thanks. Bye.
[10:47:33] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Thanks for calling Masters Cut, Have a great day!"}
[10:47:34] 🎯 DEEPGRAM: ConversationText
[10:47:34] 💭 CONVERSATION_TEXT: Thanks for calling Masters Cut, Have a great day!
[10:47:34] 👋 FAREWELL_DETECTED: AI said 'Have a great day' - triggering call end
📨 Message string: {"type":"History","role":"assistant","content":"Thanks for calling Masters Cut, Have a great day!"}
[10:47:34] 🎯 DEEPGRAM: History
[10:47:34] 📜 HISTORY: Message logged
[10:47:34] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Thanks for calling Masters Cut, Have a great day!
[10:47:34] 🎵 Starting audio stream - feeding buffer
📨 Message string: {"type":"AgentAudioDone"}
[10:47:34] 🎯 DEEPGRAM: AgentAudioDone
[10:47:34] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[10:47:34] 🔇 SILENCE: Started tracking
[10:47:34] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[10:47:34] 🔇 SILENCE_CHECK: 1000ms of silence
[10:47:34] 🔇 SILENCE_CHECK: 2000ms of silence
[10:47:34] 🔇 SILENCE_CHECK: 3001ms of silence
[10:47:37] 💓 KEEPALIVE: Sent to Deepgram
[10:47:34] 🔇 SILENCE_CHECK: 4001ms of silence
[10:47:34] ⏰ FAREWELL_TIMEOUT: Ending call after 5 seconds
📞 endCall called with params: {
  "reason": "AI farewell timeout after 5 seconds"
}
📞 Call SID: CA40814d60d08c9f0f86a5de306efa3712
📋 Session data before ending call: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-10-01',
  lastCheckedTimestamp: '10:46:29',
  customerName: 'Marco',
  lastBookingDate: '2025-10-01',
  lastBookingTime: '09:30',
  lastServiceId: 'Haircut',
  lastServiceName: 'Haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      bookingReference: 'BK833871T2',
      customerName: 'Marco',
      date: '2025-10-01',
      time: '09:30',
      serviceId: 'Haircut',
      serviceName: 'Haircut',
      serviceDuration: 30,
      appointmentId: 'ee6379b8-2660-4ea6-8136-76da950439c1',
      type: 'create'
    }
  ],
  lastAppointmentId: 'ee6379b8-2660-4ea6-8136-76da950439c1'
}
📱 Sending consolidated SMS confirmation for unique bookings: [
  'ee6379b8-2660-4ea6-8136-76da950439c1 (Haircut on 2025-10-01 at 09:30)'
]
[10:47:34] 🔇 SILENCE_CHECK: 5001ms of silence
✅ Consolidated SMS sent successfully
✅ Consolidated SMS confirmation sent successfully
📝 Session updated for call CA40814d60d08c9f0f86a5de306efa3712: {
  callerPhone: '+447468306825',
  lastCheckedDate: '2025-10-01',
  lastCheckedTimestamp: '10:46:29',
  customerName: 'Marco',
  lastBookingDate: '2025-10-01',
  lastBookingTime: '09:30',
  lastServiceId: 'Haircut',
  lastServiceName: 'Haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      bookingReference: 'BK833871T2',
      customerName: 'Marco',
      date: '2025-10-01',
      time: '09:30',
      serviceId: 'Haircut',
      serviceName: 'Haircut',
      serviceDuration: 30,
      appointmentId: 'ee6379b8-2660-4ea6-8136-76da950439c1',
      type: 'create'
    }
  ],
  lastAppointmentId: 'ee6379b8-2660-4ea6-8136-76da950439c1',
  smsConfirmationSent: true
}
📞 Attempting to end call with SID: CA40814d60d08c9f0f86a5de306efa3712
📝 Reason: AI farewell timeout after 5 seconds
✅ Call ended successfully: completed
🗑️ Session cleared for call CA40814d60d08c9f0f86a5de306efa3712
🧹 Session cleared for call CA40814d60d08c9f0f86a5de306efa3712 after successful SMS handli