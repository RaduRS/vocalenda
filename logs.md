","content":"Ten AM."}...
Message string: {"type":"History","role":"user","content":"Ten AM."}
[2025-09-07T09:27:35.836Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Ten AM."}
[2025-09-07T09:27:35.836Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Ten AM."
}
[2025-09-07T09:27:35.836Z] === END PARSED JSON ===
[2025-09-07T09:27:35.836Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:27:35.836Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:27:35.836Z] 📦 Full message: {
  "type": "History",
  "role": "user",
  "content": "Ten AM."
}
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_2Bozz5ovYNqqEUcbM0McdSm0","name":"update_booking","arguments":"{\"new_time\":\"10:00\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_2Bozz5ovYNqqEUcbM0McdSm0","name":"update_booking","arguments":"{\"new_time\":\"10:00\"}","client_side":true}]}
[2025-09-07T09:27:36.491Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_2Bozz5ovYNqqEUcbM0McdSm0","name":"update_booking","arguments":"{\"new_time\":\"10:00\"}","client_side":true}]}
[2025-09-07T09:27:36.491Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_2Bozz5ovYNqqEUcbM0McdSm0",
      "name": "update_booking",
      "arguments": "{\"new_time\":\"10:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-07T09:27:36.491Z] === END PARSED JSON ===
[2025-09-07T09:27:36.491Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-07T09:27:36.491Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-07T09:27:36.491Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-07T09:27:36.491Z] 📋 Functions: [
  {
    "id": "call_2Bozz5ovYNqqEUcbM0McdSm0",
    "name": "update_booking",
    "arguments": "{\"new_time\":\"10:00\"}",
    "client_side": true
  }
]
[2025-09-07T09:27:36.492Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-07T09:27:36.491Z] 🔧 Processing function: update_booking
[2025-09-07T09:27:36.491Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA91bdf27988c1ad84a96e84ed6ee8d053: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-08',
  lastBookingTime: '10:00',
  lastServiceId: '676c503a-c695-40dd-80a0-a654456f36cd'
}
[2025-09-07T09:27:36.492Z] 🚀 STARTING handleFunctionCall
[2025-09-07T09:27:36.492Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_2Bozz5ovYNqqEUcbM0McdSm0",
  "parameters": {
    "new_time": "10:00"
  }
}
[2025-09-07T09:27:36.492Z] 📋 Function name: update_booking
[2025-09-07T09:27:36.492Z] 📊 Parameters: {
  "new_time": "10:00"
}
[2025-09-07T09:27:36.492Z] 🏢 Business config exists: true
[2025-09-07T09:27:36.492Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_2Bozz5ovYNqqEUcbM0McdSm0",
  "parameters": {
    "new_time": "10:00"
  }
}
📝 updateBooking called with params: {
  "new_time": "10:00"
}
📋 Session data: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-08',
  lastBookingTime: '10:00',
  lastServiceId: '676c503a-c695-40dd-80a0-a654456f36cd'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-08',
  currentTime: '10:00'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-08 at 10:00
📝 Session updated for call CA91bdf27988c1ad84a96e84ed6ee8d053: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-08',
  lastBookingTime: '10:00',
  lastServiceId: '676c503a-c695-40dd-80a0-a654456f36cd'
}
📦 Update request body: {
  "business_id": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "customer_name": "Marco",
  "current_date": "2025-09-08",
  "current_time": "10:00",
  "caller_phone": "+447468306825",
  "new_time": "10:00"
}
✅ Booking updated successfully: {
  success: true,
  message: 'Booking updated successfully',
  booking: {
    id: 'ce5ff157-a864-44d7-8f97-5edc4a5d67b0',
    customer_name: 'Marco',
    service_name: 'beard trim',
    date: '2025-09-08',
    start_time: '10:00:00',
    end_time: '09:20:00',
    status: 'confirmed'
  }
}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
❌ Update booking API error: 409 {"error":"The new time slot 2025-09-08 at 10:00 is not available"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_2Bozz5ovYNqqEUcbM0McdSm0","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"10:00\"}","response":"{\"error\":\"Failed to update bo...
Message string: {"type":"History","function_calls":[{"id":"call_2Bozz5ovYNqqEUcbM0McdSm0","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"10:00\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-08 at 10:00 is not available\\\"}\"}"}]}
[2025-09-07T09:27:37.960Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_2Bozz5ovYNqqEUcbM0McdSm0","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"10:00\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-08 at 10:00 is not available\\\"}\"}"}]}
[2025-09-07T09:27:37.960Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_2Bozz5ovYNqqEUcbM0McdSm0",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_time\":\"10:00\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-08 at 10:00 is not available\\\"}\"}"
    }
  ]
}
[2025-09-07T09:27:37.960Z] === END PARSED JSON ===
[2025-09-07T09:27:37.960Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:27:37.960Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:27:37.960Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_2Bozz5ovYNqqEUcbM0McdSm0",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_time\":\"10:00\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-08 at 10:00 is not available\\\"}\"}"
    }
  ]
}
[2025-09-07T09:27:33.191Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-07T09:27:38.182Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-07T09:27:36.491Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-07T09:27:38.811Z] ▶️ KEEPALIVE: Resumed after function processing
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."}
[2025-09-07T09:27:39.051Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."}
[2025-09-07T09:27:39.051Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."
}
[2025-09-07T09:27:39.051Z] === END PARSED JSON ===
[2025-09-07T09:27:39.051Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:27:39.051Z] 💭 CONVERSATION_TEXT: I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."}...
Message string: {"type":"History","role":"assistant","content":"I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."}
[2025-09-07T09:27:39.051Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."}
[2025-09-07T09:27:39.051Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."
}
[2025-09-07T09:27:39.051Z] === END PARSED JSON ===
[2025-09-07T09:27:39.051Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:27:39.051Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:27:39.051Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "I apologize, but it seems 10 AM is no longer available for your beard trim on Monday, 8th September 2025."
}
[2025-09-07T09:27:39.051Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:27:41.485Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-07T09:27:42.236Z] 🔇 Audio stream ended (timeout)
[2025-09-07T09:27:45.484Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-07T09:27:45.825Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-07T09:27:45.825Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-07T09:27:45.825Z] === END PARSED JSON ===
[2025-09-07T09:27:45.825Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-07T09:27:45.825Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-07T09:27:45.825Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-07T09:27:45.836Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-07T09:27:45.836Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-07T09:27:45.836Z] === END PARSED JSON ===
[2025-09-07T09:27:45.836Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-07T09:27:45.836Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-07T09:27:45.836Z] ⏰ SILENCE_START: Beginning silence tracking after AI speech
[2025-09-07T09:27:45.836Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 999ms of silence
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 1999ms of silence
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 2998ms of silence
[2025-09-07T09:27:49.484Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 3999ms of silence
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"You just moved it, man. I can see it in the calendar. You already done it for me right now."}...
Message string: {"type":"ConversationText","role":"user","content":"You just moved it, man. I can see it in the calendar. You already done it for me right now."}
[2025-09-07T09:27:50.492Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"You just moved it, man. I can see it in the calendar. You already done it for me right now."}
[2025-09-07T09:27:50.492Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "You just moved it, man. I can see it in the calendar. You already done it for me right now."
}
[2025-09-07T09:27:50.492Z] === END PARSED JSON ===
[2025-09-07T09:27:50.492Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:27:50.492Z] 💭 CONVERSATION_TEXT: You just moved it, man. I can see it in the calendar. You already done it for me right now.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"You just moved it, man. I can see it in the calendar. You already done it for me right now."}...
Message string: {"type":"History","role":"user","content":"You just moved it, man. I can see it in the calendar. You already done it for me right now."}
[2025-09-07T09:27:50.497Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"You just moved it, man. I can see it in the calendar. You already done it for me right now."}
[2025-09-07T09:27:50.497Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "You just moved it, man. I can see it in the calendar. You already done it for me right now."
}
[2025-09-07T09:27:50.497Z] === END PARSED JSON ===
[2025-09-07T09:27:50.497Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:27:50.497Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:27:50.497Z] 📦 Full message: {
  "type": "History",
  "role": "user",
  "content": "You just moved it, man. I can see it in the calendar. You already done it for me right now."
}
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 4999ms of silence
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I apologize for the confusion."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I apologize for the confusion."}
[2025-09-07T09:27:51.475Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I apologize for the confusion."}
[2025-09-07T09:27:51.475Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I apologize for the confusion."
}
[2025-09-07T09:27:51.475Z] === END PARSED JSON ===
[2025-09-07T09:27:51.475Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:27:51.475Z] 💭 CONVERSATION_TEXT: I apologize for the confusion.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I apologize for the confusion."}...
Message string: {"type":"History","role":"assistant","content":"I apologize for the confusion."}
[2025-09-07T09:27:51.475Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I apologize for the confusion."}
[2025-09-07T09:27:51.475Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I apologize for the confusion."
}
[2025-09-07T09:27:51.475Z] === END PARSED JSON ===
[2025-09-07T09:27:51.475Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:27:51.475Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:27:51.475Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "I apologize for the confusion."
}
[2025-09-07T09:27:51.475Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 5999ms of silence
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_dKHmp5cyIV8gayXeLNfjy7ZI","name":"update_booking","arguments":"{\"new_time\":\"10:00\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_dKHmp5cyIV8gayXeLNfjy7ZI","name":"update_booking","arguments":"{\"new_time\":\"10:00\"}","client_side":true}]}
[2025-09-07T09:27:52.031Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_dKHmp5cyIV8gayXeLNfjy7ZI","name":"update_booking","arguments":"{\"new_time\":\"10:00\"}","client_side":true}]}
[2025-09-07T09:27:52.031Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_dKHmp5cyIV8gayXeLNfjy7ZI",
      "name": "update_booking",
      "arguments": "{\"new_time\":\"10:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-07T09:27:52.031Z] === END PARSED JSON ===
[2025-09-07T09:27:52.031Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-07T09:27:52.031Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-07T09:27:52.031Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-07T09:27:52.031Z] 📋 Functions: [
  {
    "id": "call_dKHmp5cyIV8gayXeLNfjy7ZI",
    "name": "update_booking",
    "arguments": "{\"new_time\":\"10:00\"}",
    "client_side": true
  }
]
[2025-09-07T09:27:52.031Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-07T09:27:52.031Z] 🔧 Processing function: update_booking
[2025-09-07T09:27:52.031Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA91bdf27988c1ad84a96e84ed6ee8d053: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-08',
  lastBookingTime: '10:00',
  lastServiceId: '676c503a-c695-40dd-80a0-a654456f36cd'
}
[2025-09-07T09:27:52.031Z] 🚀 STARTING handleFunctionCall
[2025-09-07T09:27:52.031Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_dKHmp5cyIV8gayXeLNfjy7ZI",
  "parameters": {
    "new_time": "10:00"
  }
}
[2025-09-07T09:27:52.031Z] 📋 Function name: update_booking
[2025-09-07T09:27:52.031Z] 📊 Parameters: {
  "new_time": "10:00"
}
[2025-09-07T09:27:52.031Z] 🏢 Business config exists: true
[2025-09-07T09:27:52.031Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_dKHmp5cyIV8gayXeLNfjy7ZI",
  "parameters": {
    "new_time": "10:00"
  }
}
📝 updateBooking called with params: {
  "new_time": "10:00"
}
📋 Session data: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-08',
  lastBookingTime: '10:00',
  lastServiceId: '676c503a-c695-40dd-80a0-a654456f36cd'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-08',
  currentTime: '10:00'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-08 at 10:00
📝 Session updated for call CA91bdf27988c1ad84a96e84ed6ee8d053: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-08',
  lastBookingTime: '10:00',
  lastServiceId: '676c503a-c695-40dd-80a0-a654456f36cd'
}
📦 Update request body: {
  "business_id": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "customer_name": "Marco",
  "current_date": "2025-09-08",
  "current_time": "10:00",
  "caller_phone": "+447468306825",
  "new_time": "10:00"
}
[2025-09-07T09:27:52.114Z] 🔇 Audio stream ended (timeout)
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 6999ms of silence
❌ Update booking API error: 409 {"error":"The new time slot 2025-09-08 at 10:00 is not available"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_dKHmp5cyIV8gayXeLNfjy7ZI","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"10:00\"}","response":"{\"error\":\"Failed to update bo...
Message string: {"type":"History","function_calls":[{"id":"call_dKHmp5cyIV8gayXeLNfjy7ZI","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"10:00\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-08 at 10:00 is not available\\\"}\"}"}]}
[2025-09-07T09:27:53.259Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_dKHmp5cyIV8gayXeLNfjy7ZI","name":"update_booking","client_side":true,"arguments":"{\"new_time\":\"10:00\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-08 at 10:00 is not available\\\"}\"}"}]}
[2025-09-07T09:27:53.259Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_dKHmp5cyIV8gayXeLNfjy7ZI",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_time\":\"10:00\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-08 at 10:00 is not available\\\"}\"}"
    }
  ]
}
[2025-09-07T09:27:53.259Z] === END PARSED JSON ===
[2025-09-07T09:27:53.259Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:27:53.259Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:27:53.259Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_dKHmp5cyIV8gayXeLNfjy7ZI",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_time\":\"10:00\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-08 at 10:00 is not available\\\"}\"}"
    }
  ]
}
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I will update your appointment now to 10 AM tomorrow."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I will update your appointment now to 10 AM tomorrow."}
[2025-09-07T09:27:53.396Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I will update your appointment now to 10 AM tomorrow."}
[2025-09-07T09:27:53.396Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I will update your appointment now to 10 AM tomorrow."
}
[2025-09-07T09:27:53.396Z] === END PARSED JSON ===
[2025-09-07T09:27:53.396Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:27:53.396Z] 💭 CONVERSATION_TEXT: I will update your appointment now to 10 AM tomorrow.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I will update your appointment now to 10 AM tomorrow."}...
Message string: {"type":"History","role":"assistant","content":"I will update your appointment now to 10 AM tomorrow."}
[2025-09-07T09:27:53.417Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I will update your appointment now to 10 AM tomorrow."}
[2025-09-07T09:27:53.417Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I will update your appointment now to 10 AM tomorrow."
}
[2025-09-07T09:27:53.417Z] === END PARSED JSON ===
[2025-09-07T09:27:53.417Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:27:53.417Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:27:53.417Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "I will update your appointment now to 10 AM tomorrow."
}
[2025-09-07T09:27:53.417Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 8000ms of silence
[2025-09-07T09:27:52.031Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-07T09:27:54.106Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-07T09:27:53.622Z] 🔇 Audio stream ended (timeout)
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 8999ms of silence
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 9999ms of silence
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems I am unable to move the appointment to 10 AM as the slot is currently not available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems I am unable to move the appointment to 10 AM as the slot is currently not available."}
[2025-09-07T09:27:56.677Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems I am unable to move the appointment to 10 AM as the slot is currently not available."}
[2025-09-07T09:27:56.677Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems I am unable to move the appointment to 10 AM as the slot is currently not available."
}
[2025-09-07T09:27:56.677Z] === END PARSED JSON ===
[2025-09-07T09:27:56.677Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-07T09:27:56.677Z] 💭 CONVERSATION_TEXT: It seems I am unable to move the appointment to 10 AM as the slot is currently not available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems I am unable to move the appointment to 10 AM as the slot is currently not available."}...
Message string: {"type":"History","role":"assistant","content":"It seems I am unable to move the appointment to 10 AM as the slot is currently not available."}
[2025-09-07T09:27:56.830Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems I am unable to move the appointment to 10 AM as the slot is currently not available."}
[2025-09-07T09:27:56.830Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems I am unable to move the appointment to 10 AM as the slot is currently not available."
}
[2025-09-07T09:27:56.830Z] === END PARSED JSON ===
[2025-09-07T09:27:56.830Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-07T09:27:56.830Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-07T09:27:56.830Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "It seems I am unable to move the appointment to 10 AM as the slot is currently not available."
}
[2025-09-07T09:27:56.830Z] 🎵 Starting audio stream - feeding buffer
[2025-09-07T09:27:45.836Z] 🔇 SILENCE_CHECK: 11000ms of silence
[2025-09-07T09:27:45.836Z] 📞 SILENCE_DISCONNECT: Auto-disconnecting after 10s
[2025-09-07T09:27:56.982Z] 🔇 Audio stream ended (timeout)
[2025-09-07T09:27:57.484Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-07T09:27:45.836Z] 📞 ENDING_CALL: Terminating call after silence timeout
📞 endCall called with params: {
  "reason": "silence timeout - auto disconnect"
}
📞 Call SID: CA91bdf27988c1ad84a96e84ed6ee8d053
📞 Attempting to end call with SID: CA91bdf27988c1ad84a96e84ed6ee8d053
📝 Reason: silence timeout - auto disconnect
✅ Call ended successfully: completed
🗑️ Session cleared for call CA91bdf27988c1ad84a96e84ed6ee8d053
Media stream stopped
📞 Logging call completion: CA91bdf27988c1ad84a96e84ed6ee8d053
✅ Call completion logged: CA91bdf27988c1ad84a96e84ed6ee8d053
🔌 Closing Deepgram connection and cleaning up resources
🔇 Persistent pacer cleaned up
🔇 Silence tracking cleaned up
✅ Deepgram connection closed successfully
Deepgram WebSocket closed in initializeDeepgram. Code: 1000, Reason: Call ended
Deepgram WebSocket closed. Code: 1000, Reason: Call ended