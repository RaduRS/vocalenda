 USER_STARTED_SPEAKING: User began speaking
[2025-09-08T13:24:58.807Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-08T13:24:59.190Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Actually, forget about it. Bye."}...
Message string: {"type":"ConversationText","role":"user","content":"Actually, forget about it. Bye."}
[2025-09-08T13:25:00.105Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Actually, forget about it. Bye."}
[2025-09-08T13:25:00.105Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Actually, forget about it. Bye."
}
[2025-09-08T13:25:00.105Z] === END PARSED JSON ===
[2025-09-08T13:25:00.105Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-08T13:25:00.105Z] 💭 CONVERSATION_TEXT: Actually, forget about it. Bye.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Actually, forget about it. Bye."}...
Message string: {"type":"History","role":"user","content":"Actually, forget about it. Bye."}
[2025-09-08T13:25:00.123Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Actually, forget about it. Bye."}
[2025-09-08T13:25:00.123Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Actually, forget about it. Bye."
}
[2025-09-08T13:25:00.123Z] === END PARSED JSON ===
[2025-09-08T13:25:00.123Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-08T13:25:00.123Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-08T13:25:00.123Z] 📦 Full message: {
  "type": "History",
  "role": "user",
  "content": "Actually, forget about it. Bye."
}
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Thank you for calling Gents Barbershop, have a great day!"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Thank you for calling Gents Barbershop, have a great day!"}
[2025-09-08T13:25:01.306Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Thank you for calling Gents Barbershop, have a great day!"}
[2025-09-08T13:25:01.306Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Thank you for calling Gents Barbershop, have a great day!"
}
[2025-09-08T13:25:01.306Z] === END PARSED JSON ===
[2025-09-08T13:25:01.306Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-08T13:25:01.306Z] 💭 CONVERSATION_TEXT: Thank you for calling Gents Barbershop, have a great day!
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Thank you for calling Gents Barbershop, have a great day!"}...
Message string: {"type":"History","role":"assistant","content":"Thank you for calling Gents Barbershop, have a great day!"}
[2025-09-08T13:25:01.306Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Thank you for calling Gents Barbershop, have a great day!"}
[2025-09-08T13:25:01.306Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Thank you for calling Gents Barbershop, have a great day!"
}
[2025-09-08T13:25:01.306Z] === END PARSED JSON ===
[2025-09-08T13:25:01.306Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-08T13:25:01.306Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-08T13:25:01.306Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "Thank you for calling Gents Barbershop, have a great day!"
}
[2025-09-08T13:25:01.306Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-08T13:25:02.543Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-08T13:25:02.543Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-08T13:25:02.543Z] === END PARSED JSON ===
[2025-09-08T13:25:02.543Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-08T13:25:02.543Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-08T13:25:02.543Z] ⏰ SILENCE_START: Beginning silence tracking after AI speech
[2025-09-08T13:25:02.543Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-08T13:25:03.190Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-08T13:25:02.543Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-08T13:25:02.543Z] 🔇 SILENCE_CHECK: 2001ms of silence
[2025-09-08T13:25:02.543Z] 🔇 SILENCE_CHECK: 3002ms of silence
[2025-09-08T13:25:02.543Z] 🔇 SILENCE_CHECK: 4001ms of silence
[2025-09-08T13:25:07.190Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-08T13:25:02.543Z] 🔇 SILENCE_CHECK: 5002ms of silence
[2025-09-08T13:25:02.543Z] 🔇 SILENCE_CHECK: 6003ms of silence
[2025-09-08T13:25:02.543Z] 🔇 SILENCE_CHECK: 7003ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-08T13:25:09.696Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-08T13:25:09.696Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-08T13:25:09.696Z] === END PARSED JSON ===
[2025-09-08T13:25:09.696Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-08T13:25:09.696Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-08T13:25:09.696Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"End call."}...
Message string: {"type":"ConversationText","role":"user","content":"End call."}
[2025-09-08T13:25:10.402Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"End call."}
[2025-09-08T13:25:10.402Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "End call."
}
[2025-09-08T13:25:10.402Z] === END PARSED JSON ===
[2025-09-08T13:25:10.402Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-08T13:25:10.402Z] 💭 CONVERSATION_TEXT: End call.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"End call."}...
Message string: {"type":"History","role":"user","content":"End call."}
[2025-09-08T13:25:10.403Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"End call."}
[2025-09-08T13:25:10.403Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "End call."
}
[2025-09-08T13:25:10.403Z] === END PARSED JSON ===
[2025-09-08T13:25:10.403Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-08T13:25:10.403Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-08T13:25:10.403Z] 📦 Full message: {
  "type": "History",
  "role": "user",
  "content": "End call."
}
[2025-09-08T13:25:11.190Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_n3Tb4ye92HfkHsNmhHJzHe6i","name":"end_call","arguments":"{\"reason\":\"customer said goodbye\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_n3Tb4ye92HfkHsNmhHJzHe6i","name":"end_call","arguments":"{\"reason\":\"customer said goodbye\"}","client_side":true}]}
[2025-09-08T13:25:11.311Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_n3Tb4ye92HfkHsNmhHJzHe6i","name":"end_call","arguments":"{\"reason\":\"customer said goodbye\"}","client_side":true}]}
[2025-09-08T13:25:11.311Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_n3Tb4ye92HfkHsNmhHJzHe6i",
      "name": "end_call",
      "arguments": "{\"reason\":\"customer said goodbye\"}",
      "client_side": true
    }
  ]
}
[2025-09-08T13:25:11.311Z] === END PARSED JSON ===
[2025-09-08T13:25:11.311Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-08T13:25:11.311Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-08T13:25:11.311Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-08T13:25:11.311Z] 📋 Functions: [
  {
    "id": "call_n3Tb4ye92HfkHsNmhHJzHe6i",
    "name": "end_call",
    "arguments": "{\"reason\":\"customer said goodbye\"}",
    "client_side": true
  }
]
[2025-09-08T13:25:11.311Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-08T13:25:11.311Z] 🔧 Processing function: end_call
[2025-09-08T13:25:11.311Z] 🔧 CALLING: handleFunctionCall for end_call...
📝 Session updated for call CA9ecc116f8732b94ec38513fd0d5f6b14: { callerPhone: '+447468306825' }
[2025-09-08T13:25:11.312Z] 🚀 STARTING handleFunctionCall
[2025-09-08T13:25:11.312Z] 🔧 Function call received: {
  "function_name": "end_call",
  "function_call_id": "call_n3Tb4ye92HfkHsNmhHJzHe6i",
  "parameters": {
    "reason": "customer said goodbye"
  }
}
[2025-09-08T13:25:11.312Z] 📋 Function name: end_call
[2025-09-08T13:25:11.312Z] 📊 Parameters: {
  "reason": "customer said goodbye"
}
[2025-09-08T13:25:11.312Z] 🏢 Business config exists: true
[2025-09-08T13:25:11.312Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "end_call",
  "function_call_id": "call_n3Tb4ye92HfkHsNmhHJzHe6i",
  "parameters": {
    "reason": "customer said goodbye"
  }
}
📞 endCall called with params: {
  "reason": "customer said goodbye"
}
📞 Call SID: CA9ecc116f8732b94ec38513fd0d5f6b14
📞 Attempting to end call with SID: CA9ecc116f8732b94ec38513fd0d5f6b14
📝 Reason: customer said goodbye
✅ Call ended successfully: completed
🗑️ Session cleared for call CA9ecc116f8732b94ec38513fd0d5f6b14
✅ Sending end_call response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
Media stream stopped
📞 Logging call completion: CA9ecc116f8732b94ec38513fd0d5f6b14
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_n3Tb4ye92HfkHsNmhHJzHe6i","name":"end_call","client_side":true,"arguments":"{\"reason\":\"customer said goodbye\"}","response":"{\"success\":true,\"mess...
Message string: {"type":"History","function_calls":[{"id":"call_n3Tb4ye92HfkHsNmhHJzHe6i","name":"end_call","client_side":true,"arguments":"{\"reason\":\"customer said goodbye\"}","response":"{\"success\":true,\"message\":\"Call ended: customer said goodbye\",\"callSid\":\"CA9ecc116f8732b94ec38513fd0d5f6b14\",\"status\":\"completed\"}"}]}
[2025-09-08T13:25:11.908Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_n3Tb4ye92HfkHsNmhHJzHe6i","name":"end_call","client_side":true,"arguments":"{\"reason\":\"customer said goodbye\"}","response":"{\"success\":true,\"message\":\"Call ended: customer said goodbye\",\"callSid\":\"CA9ecc116f8732b94ec38513fd0d5f6b14\",\"status\":\"completed\"}"}]}
[2025-09-08T13:25:11.908Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_n3Tb4ye92HfkHsNmhHJzHe6i",
      "name": "end_call",
      "client_side": true,
      "arguments": "{\"reason\":\"customer said goodbye\"}",
      "response": "{\"success\":true,\"message\":\"Call ended: customer said goodbye\",\"callSid\":\"CA9ecc116f8732b94ec38513fd0d5f6b14\",\"status\":\"completed\"}"
    }
  ]
}
[2025-09-08T13:25:11.908Z] === END PARSED JSON ===
[2025-09-08T13:25:11.908Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-08T13:25:11.908Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-08T13:25:11.908Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_n3Tb4ye92HfkHsNmhHJzHe6i",
      "name": "end_call",
      "client_side": true,
      "arguments": "{\"reason\":\"customer said goodbye\"}",
      "response": "{\"success\":true,\"message\":\"Call ended: customer said goodbye\",\"callSid\":\"CA9ecc116f8732b94ec38513fd0d5f6b14\",\"status\":\"completed\"}"
    }
  ]
}
✅ Call completion logged: CA9ecc116f8732b94ec38513fd0d5f6b14
🔌 Closing Deepgram connection and cleaning up resources
🔇 Persistent pacer cleaned up
🔇 Silence tracking cleaned up
✅ Deepgram connection closed successfully
Deepgram WebSocket closed in initializeDeepgram. Code: 1000, Reason: Call ended
Deepgram WebSocket closed. Code: 1000, Reason: Call ended
[2025-09-08T13:25:11.311Z] ✅ COMPLETED: handleFunctionCall for end_call
[2025-09-08T13:25:12.759Z] ▶️ KEEPALIVE: Resumed after function processing
Twilio WebSocket connection closed
📞 Logging call completion on close: CA9ecc116f8732b94ec38513fd0d5f6b14
✅ Call completion logged on close: CA9ecc116f8732b94ec38513fd0d5f6b14
🔌 Closing Deepgram connection and cleaning up resources
🔇 Silence tracking cleaned up
ℹ️ Deepgram connection already closed or not open