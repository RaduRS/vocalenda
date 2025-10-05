 would you prefer for your haircut?
[10:56:20] 🎵 Starting audio stream - feeding buffer
📨 Message string: {"type":"AgentAudioDone"}
[10:56:20] 🎯 DEEPGRAM: AgentAudioDone
[10:56:20] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[10:56:20] 🔇 SILENCE: Started tracking
[10:56:20] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[10:56:20] 🔇 SILENCE_CHECK: 1000ms of silence
[10:56:20] 🔇 SILENCE_CHECK: 2000ms of silence
[10:56:23] 💓 KEEPALIVE: Sent to Deepgram
[10:56:20] 🔇 SILENCE_CHECK: 3001ms of silence
[10:56:20] 🔇 SILENCE_CHECK: 4002ms of silence
[10:56:20] 🔇 SILENCE_CHECK: 5003ms of silence
📨 Message string: {"type":"UserStartedSpeaking"}
[10:56:26] 🎯 DEEPGRAM: UserStartedSpeaking
[10:56:26] 🎤 USER_STARTED_SPEAKING: User began speaking
[10:56:26] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[10:56:26] 🔄 BARGE_IN: Cleared local audio buffer and stopped streaming
[10:56:26] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Message string: {"type":"ConversationText","role":"user","content":"I open today."}
[10:56:27] 🎯 DEEPGRAM: ConversationText
[10:56:27] 💭 CONVERSATION_TEXT: I open today.
📨 Message string: {"type":"History","role":"user","content":"I open today."}
[10:56:27] 🎯 DEEPGRAM: History
[10:56:27] 📜 HISTORY: Message logged
[10:56:27] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: I open today.
[10:56:27] 💓 KEEPALIVE: Sent to Deepgram
📨 Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_4sCyTo78ueA7t3ohf2lKRyCa","name":"get_current_time","arguments":"{}","client_side":true}]}
[10:56:28] 🎯 DEEPGRAM: FunctionCallRequest
[10:56:28] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[10:56:28] ✅ SUCCESS: AI requesting function calls!
[10:56:28] 🕐 TIMING: Function call request received at 10:56:28
[10:56:28] 📊 FUNCTION COUNT: 1 functions in request
[10:56:28] 📋 Functions: [
  {
    "id": "call_4sCyTo78ueA7t3ohf2lKRyCa",
    "name": "get_current_time",
    "arguments": "{}",
    "client_side": true
  }
]
[10:56:28] 🔍 FUNCTION 1:
[10:56:28]   - Name: get_current_time
[10:56:28]   - ID: call_4sCyTo78ueA7t3ohf2lKRyCa
[10:56:28]   - Arguments: {}
[10:56:28] ⏸️ SILENCE: Pausing timer - Processing function calls
[10:56:28] ⏸️ KEEPALIVE: Paused for function processing
[10:56:28] 🔧 Processing function: get_current_time
[10:56:28] 🆔 Function ID: call_4sCyTo78ueA7t3ohf2lKRyCa
[10:56:28] 📝 Function arguments: {}
[10:56:28] 📦 Created function call data: {
  "function_name": "get_current_time",
  "function_call_id": "call_4sCyTo78ueA7t3ohf2lKRyCa",
  "parameters": {}
}
[10:56:28] 🔧 CALLING: handleFunctionCall for get_current_time with ID call_4sCyTo78ueA7t3ohf2lKRyCa...
📝 Session updated for call CA027dcf6a50dbc4e2974ead3f3a2709ac: { callerPhone: '+447344121941' }
[10:56:28] 🚀 FUNCTION: get_current_time
🕐 Getting current time
✅ Current UK time: 10:56 (10:56 am)
✅ Sending get_current_time response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_t1KLFetvhmb9QW4TTVulNTXG","name":"check_business_status","arguments":"{}","client_side":true}]}
[10:56:28] 🎯 DEEPGRAM: FunctionCallRequest
[10:56:28] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[10:56:28] ✅ SUCCESS: AI requesting function calls!
[10:56:28] 🕐 TIMING: Function call request received at 10:56:28
[10:56:28] 📊 FUNCTION COUNT: 1 functions in request
[10:56:28] 📋 Functions: [
  {
    "id": "call_t1KLFetvhmb9QW4TTVulNTXG",
    "name": "check_business_status",
    "arguments": "{}",
    "client_side": true
  }
]
[10:56:28] 🔍 FUNCTION 1:
[10:56:28]   - Name: check_business_status
[10:56:28]   - ID: call_t1KLFetvhmb9QW4TTVulNTXG
[10:56:28]   - Arguments: {}
[10:56:28] ⏸️ SILENCE: Pausing timer - Processing function calls
[10:56:28] ⏸️ KEEPALIVE: Paused for function processing
[10:56:28] 🔧 Processing function: check_business_status
[10:56:28] 🆔 Function ID: call_t1KLFetvhmb9QW4TTVulNTXG
[10:56:28] 📝 Function arguments: {}
[10:56:28] 📦 Created function call data: {
  "function_name": "check_business_status",
  "function_call_id": "call_t1KLFetvhmb9QW4TTVulNTXG",
  "parameters": {}
}
[10:56:28] 🔧 CALLING: handleFunctionCall for check_business_status with ID call_t1KLFetvhmb9QW4TTVulNTXG...
📝 Session updated for call CA027dcf6a50dbc4e2974ead3f3a2709ac: { callerPhone: '+447344121941' }
[10:56:28] 🚀 FUNCTION: check_business_status
[10:56:28] 🏢 CHECK_BUSINESS_STATUS called
🕐 Current business time: 10:56, Current date: 2025-10-05
📅 Checking status for date: 2025-10-05
✅ Business is open on Sunday
✅ Sending check_business_status response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Let me check if we're open today for you..."}
[10:56:28] 🎯 DEEPGRAM: ConversationText
[10:56:28] 💭 CONVERSATION_TEXT: Let me check if we're open today for you...
📨 Message string: {"type":"History","role":"assistant","content":"Let me check if we're open today for you..."}
[10:56:28] 🎯 DEEPGRAM: History
[10:56:28] 📜 HISTORY: Message logged
[10:56:28] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Let me check if we're open today for you...
[10:56:28] 🎵 Starting audio stream - feeding buffer
📨 Message string: {"type":"History","function_calls":[{"id":"call_4sCyTo78ueA7t3ohf2lKRyCa","name":"get_current_time","client_side":false,"arguments":"{}","response":"{\"current_time_24h\":\"10:56\",\"current_time_12h\":\"10:56 am\",\"timezone\":\"Europe/London\",\"timestamp\":\"2025-10-05T10:56:28.000Z\",\"formatted\":\"It is currently 10:56 am UK time\"}"},{"id":"call_t1KLFetvhmb9QW4TTVulNTXG","name":"check_business_status","client_side":false,"arguments":"{}","response":"{\"isOpen\":true,\"message\":\"We are open on Sundays\",\"dayName\":\"Sunday\",\"date\":\"2025-10-05\",\"isToday\":true,\"currentTime\":\"10:56\"}"}]}
[10:56:28] 🎯 DEEPGRAM: History
[10:56:28] 📜 HISTORY: Message logged
[10:56:28] ✅ COMPLETED: handleFunctionCall for get_current_time with ID call_4sCyTo78ueA7t3ohf2lKRyCa (took 1002ms)
[10:56:29] ▶️ KEEPALIVE: Resumed after function processing
[10:56:28] ▶️ SILENCE: Resuming timer - Function processing completed
[10:56:28] ✅ COMPLETED: handleFunctionCall for check_business_status with ID call_t1KLFetvhmb9QW4TTVulNTXG (took 1003ms)
[10:56:29] ▶️ KEEPALIVE: Resumed after function processing
[10:56:28] ▶️ SILENCE: Resuming timer - Function processing completed
[10:56:29] 🔇 Audio stream ended (timeout)
📨 Message string: {"type":"ConversationText","role":"assistant","content":"Yes, Marco, we are open today, Sunday."}
[10:56:30] 🎯 DEEPGRAM: ConversationText
[10:56:30] 💭 CONVERSATION_TEXT: Yes, Marco, we are open today, Sunday.
📨 Message string: {"type":"History","role":"assistant","content":"Yes, Marco, we are open today, Sunday."}
[10:56:30] 🎯 DEEPGRAM: History
[10:56:30] 📜 HISTORY: Message logged
[10:56:30] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Yes, Marco, we are open today, Sunday.
[10:56:30] 🎵 Starting audio stream - feeding buffer
[10:56:31] 💓 KEEPALIVE: Sent to Deepgram
[10:56:30] 🔇 Audio stream ended (timeout)
📨 Message string: {"type":"ConversationText","role":"assistant","content":"What time would you like to book your haircut?"}
[10:56:33] 🎯 DEEPGRAM: ConversationText
[10:56:33] 💭 CONVERSATION_TEXT: What time would you like to book your haircut?
📨 Message string: {"type":"History","role":"assistant","content":"What time would you like to book your haircut?"}
[10:56:33] 🎯 DEEPGRAM: History
[10:56:33] 📜 HISTORY: Message logged
[10:56:33] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: What time would you like to book your haircut?
[10:56:33] 🎵 Starting audio stream - feeding buffer
📨 Message string: {"type":"AgentAudioDone"}
[10:56:33] 🎯 DEEPGRAM: AgentAudioDone
[10:56:33] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[10:56:33] 🔇 SILENCE: Started tracking
[10:56:33] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[10:56:33] 🔇 SILENCE_CHECK: 1000ms of silence
[10:56:35] 💓 KEEPALIVE: Sent to Deepgram
[10:56:33] 🔇 SILENCE_CHECK: 2001ms of silence
[10:56:33] 🔇 SILENCE_CHECK: 3001ms of silence
Media stream stopped
📞 Logging call completion: CA027dcf6a50dbc4e2974ead3f3a2709ac
✅ Call completion logged: CA027dcf6a50dbc4e2974ead3f3a2709ac
✅ Saved transcript for call CA027dcf6a50dbc4e2974ead3f3a2709ac (8 entries)
🔌 Closing Deepgram connection and cleaning up resources
🔇 Persistent pacer cleaned up
🔇 Silence tracking cleaned up
🧹 CLEANUP: Cleaning up connection state for call CA027dcf6a50dbc4e2974ead3f3a2709ac
✅ Deepgram connection closed successfully
Deepgram WebSocket closed in initializeDeepgram. Code: 1000, Reason: Call ended
Deepgram WebSocket closed. Code: 1000, Reason: Call ended
Twilio WebSocket connection closed