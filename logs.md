
[2025-09-15T11:02:13.654Z] 📊 Response type: object
[2025-09-15T11:02:13.654Z] 📊 Has slots: true
[2025-09-15T11:02:13.654Z] 📊 Slots count: 26
✅ Available time slots: [
  '09:00', '09:15', '09:30',
  '09:45', '10:00', '10:15',
  '10:30', '10:45', '11:00',
  '11:15', '11:30', '12:30',
  '12:45', '13:00', '13:15',
  '13:30', '13:45', '14:00',
  '14:15', '15:00', '15:15',
  '15:30', '15:45', '16:00',
  '16:15', '16:30'
]
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_didnqY6OcxKAwSN0kENEnIEh","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-16\"}","response":"{\"available_slots\":[\"09...
Message string: {"type":"History","function_calls":[{"id":"call_didnqY6OcxKAwSN0kENEnIEh","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-16\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"}]}
[2025-09-15T11:02:15.165Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_didnqY6OcxKAwSN0kENEnIEh","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-16\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"}]}
[2025-09-15T11:02:15.165Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_didnqY6OcxKAwSN0kENEnIEh",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-16\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"
    }
  ]
}
[2025-09-15T11:02:15.165Z] === END PARSED JSON ===
[2025-09-15T11:02:15.165Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T11:02:15.165Z] 📜 HISTORY: Message logged
[2025-09-15T11:02:13.653Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-15T11:02:16.015Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T11:02:13.653Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"12 PM on Tuesday, 16 September 2025 is not available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"12 PM on Tuesday, 16 September 2025 is not available."}
[2025-09-15T11:02:16.471Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"12 PM on Tuesday, 16 September 2025 is not available."}
[2025-09-15T11:02:16.471Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "12 PM on Tuesday, 16 September 2025 is not available."
}
[2025-09-15T11:02:16.471Z] === END PARSED JSON ===
[2025-09-15T11:02:16.471Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T11:02:16.471Z] 💭 CONVERSATION_TEXT: 12 PM on Tuesday, 16 September 2025 is not available.
[2025-09-15T11:02:16.471Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: 12 PM on Tuesday, 16 September 2025 is not available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"12 PM on Tuesday, 16 September 2025 is not available."}...
Message string: {"type":"History","role":"assistant","content":"12 PM on Tuesday, 16 September 2025 is not available."}
[2025-09-15T11:02:16.471Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"12 PM on Tuesday, 16 September 2025 is not available."}
[2025-09-15T11:02:16.471Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "12 PM on Tuesday, 16 September 2025 is not available."
}
[2025-09-15T11:02:16.471Z] === END PARSED JSON ===
[2025-09-15T11:02:16.471Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T11:02:16.471Z] 📜 HISTORY: Message logged
[2025-09-15T11:02:16.471Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: 12 PM on Tuesday, 16 September 2025 is not available.
[2025-09-15T11:02:16.471Z] 📝 Added transcript: [AI] 12 PM on Tuesday, 16 September 2025 is not available.
[2025-09-15T11:02:16.471Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T11:02:18.603Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T11:02:18.704Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"However, 12:30 PM or 1 PM are available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"However, 12:30 PM or 1 PM are available."}
[2025-09-15T11:02:21.913Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"However, 12:30 PM or 1 PM are available."}
[2025-09-15T11:02:21.913Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "However, 12:30 PM or 1 PM are available."
}
[2025-09-15T11:02:21.913Z] === END PARSED JSON ===
[2025-09-15T11:02:21.913Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T11:02:21.913Z] 💭 CONVERSATION_TEXT: However, 12:30 PM or 1 PM are available.
[2025-09-15T11:02:21.913Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: However, 12:30 PM or 1 PM are available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"However, 12:30 PM or 1 PM are available."}...
Message string: {"type":"History","role":"assistant","content":"However, 12:30 PM or 1 PM are available."}
[2025-09-15T11:02:21.914Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"However, 12:30 PM or 1 PM are available."}
[2025-09-15T11:02:21.914Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "However, 12:30 PM or 1 PM are available."
}
[2025-09-15T11:02:21.914Z] === END PARSED JSON ===
[2025-09-15T11:02:21.914Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T11:02:21.914Z] 📜 HISTORY: Message logged
[2025-09-15T11:02:21.914Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: However, 12:30 PM or 1 PM are available.
[2025-09-15T11:02:21.914Z] 📝 Added transcript: [AI] However, 12:30 PM or 1 PM are available.
[2025-09-15T11:02:21.914Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T11:02:22.062Z] 🔇 Audio stream ended (timeout)
[2025-09-15T11:02:22.604Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Which one would you prefer?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Which one would you prefer?"}
[2025-09-15T11:02:25.995Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Which one would you prefer?"}
[2025-09-15T11:02:25.995Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Which one would you prefer?"
}
[2025-09-15T11:02:25.995Z] === END PARSED JSON ===
[2025-09-15T11:02:25.995Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T11:02:25.995Z] 💭 CONVERSATION_TEXT: Which one would you prefer?
[2025-09-15T11:02:25.995Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Which one would you prefer?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Which one would you prefer?"}...
Message string: {"type":"History","role":"assistant","content":"Which one would you prefer?"}
[2025-09-15T11:02:25.996Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Which one would you prefer?"}
[2025-09-15T11:02:25.996Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Which one would you prefer?"
}
[2025-09-15T11:02:25.996Z] === END PARSED JSON ===
[2025-09-15T11:02:25.996Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T11:02:25.996Z] 📜 HISTORY: Message logged
[2025-09-15T11:02:25.996Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Which one would you prefer?
[2025-09-15T11:02:25.996Z] 📝 Added transcript: [AI] Which one would you prefer?
[2025-09-15T11:02:25.996Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-15T11:02:26.143Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-15T11:02:26.143Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-15T11:02:26.143Z] === END PARSED JSON ===
[2025-09-15T11:02:26.143Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-15T11:02:26.143Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-15T11:02:26.143Z] 🔇 SILENCE: Started tracking
[2025-09-15T11:02:26.143Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-15T11:02:26.604Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T11:02:26.143Z] 🔇 SILENCE_CHECK: 1001ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T11:02:28.091Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T11:02:28.091Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T11:02:28.091Z] === END PARSED JSON ===
[2025-09-15T11:02:28.091Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T11:02:28.091Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T11:02:28.091Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T11:02:28.091Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"I"}...
Message string: {"type":"ConversationText","role":"user","content":"I"}
[2025-09-15T11:02:28.105Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"I"}
[2025-09-15T11:02:28.105Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "I"
}
[2025-09-15T11:02:28.105Z] === END PARSED JSON ===
[2025-09-15T11:02:28.105Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T11:02:28.105Z] 💭 CONVERSATION_TEXT: I
[2025-09-15T11:02:28.105Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: I
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"I"}...
Message string: {"type":"History","role":"user","content":"I"}
[2025-09-15T11:02:28.105Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"I"}
[2025-09-15T11:02:28.105Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "I"
}
[2025-09-15T11:02:28.105Z] === END PARSED JSON ===
[2025-09-15T11:02:28.105Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T11:02:28.105Z] 📜 HISTORY: Message logged
[2025-09-15T11:02:28.105Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: I
[2025-09-15T11:02:28.105Z] 📝 Added transcript: [User] I
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T11:02:29.013Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T11:02:29.013Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T11:02:29.013Z] === END PARSED JSON ===
[2025-09-15T11:02:29.013Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T11:02:29.013Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T11:02:29.013Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T11:02:29.013Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Move it to one PM."}...
Message string: {"type":"ConversationText","role":"user","content":"Move it to one PM."}
[2025-09-15T11:02:30.196Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Move it to one PM."}
[2025-09-15T11:02:30.196Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Move it to one PM."
}
[2025-09-15T11:02:30.196Z] === END PARSED JSON ===
[2025-09-15T11:02:30.196Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T11:02:30.196Z] 💭 CONVERSATION_TEXT: Move it to one PM.
[2025-09-15T11:02:30.196Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Move it to one PM.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Move it to one PM."}...
Message string: {"type":"History","role":"user","content":"Move it to one PM."}
[2025-09-15T11:02:30.204Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Move it to one PM."}
[2025-09-15T11:02:30.204Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Move it to one PM."
}
[2025-09-15T11:02:30.204Z] === END PARSED JSON ===
[2025-09-15T11:02:30.204Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T11:02:30.204Z] 📜 HISTORY: Message logged
[2025-09-15T11:02:30.204Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Move it to one PM.
[2025-09-15T11:02:30.204Z] 📝 Added transcript: [User] Move it to one PM.
[2025-09-15T11:02:30.604Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_Ek6XGLr9QXc9ZjA2SN2fAaic","name":"update_booking","arguments":"{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_Ek6XGLr9QXc9ZjA2SN2fAaic","name":"update_booking","arguments":"{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}","client_side":true}]}
[2025-09-15T11:02:30.929Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_Ek6XGLr9QXc9ZjA2SN2fAaic","name":"update_booking","arguments":"{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}","client_side":true}]}
[2025-09-15T11:02:30.929Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_Ek6XGLr9QXc9ZjA2SN2fAaic",
      "name": "update_booking",
      "arguments": "{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T11:02:30.929Z] === END PARSED JSON ===
[2025-09-15T11:02:30.929Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T11:02:30.929Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T11:02:30.929Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T11:02:30.929Z] 📋 Functions: [
  {
    "id": "call_Ek6XGLr9QXc9ZjA2SN2fAaic",
    "name": "update_booking",
    "arguments": "{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}",
    "client_side": true
  }
]
[2025-09-15T11:02:30.929Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T11:02:30.930Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T11:02:30.929Z] 🔧 Processing function: update_booking
[2025-09-15T11:02:30.929Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CAef27483c9880bf9bed441b2a3a409b98: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '14:30',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169',
      type: 'create'
    }
  ],
  lastAppointmentId: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169'
}
[2025-09-15T11:02:30.930Z] 🚀 STARTING handleFunctionCall
[2025-09-15T11:02:30.930Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_Ek6XGLr9QXc9ZjA2SN2fAaic",
  "parameters": {
    "new_date": "2025-09-16",
    "new_time": "13:00"
  }
}
[2025-09-15T11:02:30.930Z] 📋 Function name: update_booking
[2025-09-15T11:02:30.930Z] 📊 Parameters: {
  "new_date": "2025-09-16",
  "new_time": "13:00"
}
[2025-09-15T11:02:30.930Z] 🏢 Business config exists: true
[2025-09-15T11:02:30.930Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_Ek6XGLr9QXc9ZjA2SN2fAaic",
  "parameters": {
    "new_date": "2025-09-16",
    "new_time": "13:00"
  }
}
📝 updateBooking called with params: {
  "new_date": "2025-09-16",
  "new_time": "13:00"
}
📋 Session data: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '14:30',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169',
      type: 'create'
    }
  ],
  lastAppointmentId: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169'
}
🎯 Identified target booking: {
  appointmentId: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169',
  service: 'haircut',
  date: '2025-09-17',
  time: '14:30'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-17',
  currentTime: '14:30'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-17 at 14:30
📝 Session updated for call CAef27483c9880bf9bed441b2a3a409b98: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-16',
  lastBookingTime: '13:00',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '14:30',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '14:30',
      newDate: '2025-09-16',
      newTime: '13:00',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastAppointmentId: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169'
}
📦 Update request body: {
  "business_id": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "customer_name": "Marco",
  "current_date": "2025-09-17",
  "current_time": "14:30",
  "caller_phone": "+447468306825",
  "new_date": "2025-09-16",
  "new_time": "13:00"
}
❌ Update booking API error: 409 {"error":"The new time slot 2025-09-16 at 13:00 is not available"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_Ek6XGLr9QXc9ZjA2SN2fAaic","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}","response":"{\"e...
Message string: {"type":"History","function_calls":[{"id":"call_Ek6XGLr9QXc9ZjA2SN2fAaic","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-16 at 13:00 is not available\\\"}\"}"}]}
[2025-09-15T11:02:33.320Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_Ek6XGLr9QXc9ZjA2SN2fAaic","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-16 at 13:00 is not available\\\"}\"}"}]}
[2025-09-15T11:02:33.320Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_Ek6XGLr9QXc9ZjA2SN2fAaic",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_date\":\"2025-09-16\",\"new_time\":\"13:00\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-16 at 13:00 is not available\\\"}\"}"
    }
  ]
}
[2025-09-15T11:02:33.320Z] === END PARSED JSON ===
[2025-09-15T11:02:33.320Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T11:02:33.320Z] 📜 HISTORY: Message logged
[2025-09-15T11:02:30.929Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-15T11:02:34.173Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T11:02:30.929Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-15T11:02:34.605Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available."}
[2025-09-15T11:02:34.915Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available."}
[2025-09-15T11:02:34.915Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available."
}
[2025-09-15T11:02:34.915Z] === END PARSED JSON ===
[2025-09-15T11:02:34.915Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T11:02:34.915Z] 💭 CONVERSATION_TEXT: I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available.
[2025-09-15T11:02:34.915Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available."}...
Message string: {"type":"History","role":"assistant","content":"I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available."}
[2025-09-15T11:02:34.915Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available."}
[2025-09-15T11:02:34.915Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I apologize, but 1 PM on Tuesday, 16 September 2025 is unfortunately not available."
}
[2025-09-15T11:02:34.915Z] === END PARSED JSON ===
[2025-09-15T11:02:34.915Z] 🎯 DEEPGRAM EVENT TYPE: History
