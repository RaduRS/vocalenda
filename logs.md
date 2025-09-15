ON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-15T10:13:49.549Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-15T10:13:49.549Z] === END PARSED JSON ===
[2025-09-15T10:13:49.549Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-15T10:13:49.549Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-15T10:13:49.549Z] 🔇 SILENCE: Started tracking
[2025-09-15T10:13:49.549Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-15T10:13:49.549Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-15T10:13:49.549Z] 🔇 SILENCE_CHECK: 1999ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T10:13:51.893Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T10:13:51.893Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T10:13:51.893Z] === END PARSED JSON ===
[2025-09-15T10:13:51.893Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T10:13:51.893Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T10:13:51.893Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T10:13:51.893Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-15T10:13:52.708Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Move it move it on Thursday at three thirty."}...
Message string: {"type":"ConversationText","role":"user","content":"Move it move it on Thursday at three thirty."}
[2025-09-15T10:13:54.257Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Move it move it on Thursday at three thirty."}
[2025-09-15T10:13:54.257Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Move it move it on Thursday at three thirty."
}
[2025-09-15T10:13:54.257Z] === END PARSED JSON ===
[2025-09-15T10:13:54.257Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T10:13:54.257Z] 💭 CONVERSATION_TEXT: Move it move it on Thursday at three thirty.
[2025-09-15T10:13:54.257Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Move it move it on Thursday at three thirty.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Move it move it on Thursday at three thirty."}...
Message string: {"type":"History","role":"user","content":"Move it move it on Thursday at three thirty."}
[2025-09-15T10:13:54.263Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Move it move it on Thursday at three thirty."}
[2025-09-15T10:13:54.263Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Move it move it on Thursday at three thirty."
}
[2025-09-15T10:13:54.263Z] === END PARSED JSON ===
[2025-09-15T10:13:54.263Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T10:13:54.263Z] 📜 HISTORY: Message logged
[2025-09-15T10:13:54.263Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Move it move it on Thursday at three thirty.
[2025-09-15T10:13:54.263Z] 📝 Added transcript: [User] Move it move it on Thursday at three thirty.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_hcpKekwQMPLrLXjTLDHAXjvW","name":"update_booking","arguments":"{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_hcpKekwQMPLrLXjTLDHAXjvW","name":"update_booking","arguments":"{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-15T10:13:55.319Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_hcpKekwQMPLrLXjTLDHAXjvW","name":"update_booking","arguments":"{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-15T10:13:55.319Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_hcpKekwQMPLrLXjTLDHAXjvW",
      "name": "update_booking",
      "arguments": "{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-15T10:13:55.319Z] === END PARSED JSON ===
[2025-09-15T10:13:55.319Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-15T10:13:55.319Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-15T10:13:55.319Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-15T10:13:55.319Z] 📋 Functions: [
  {
    "id": "call_hcpKekwQMPLrLXjTLDHAXjvW",
    "name": "update_booking",
    "arguments": "{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}",
    "client_side": true
  }
]
[2025-09-15T10:13:55.319Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-15T10:13:55.320Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-15T10:13:55.319Z] 🔧 Processing function: update_booking
[2025-09-15T10:13:55.319Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA430788b987553e45b911189147c0e35a: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '15:00',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '13:30',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: '7b1b206e-f6b2-4d65-8d31-9af86508181d',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '13:30',
      newDate: undefined,
      newTime: '15:00',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastAppointmentId: '7b1b206e-f6b2-4d65-8d31-9af86508181d'
}
[2025-09-15T10:13:55.320Z] 🚀 STARTING handleFunctionCall
[2025-09-15T10:13:55.320Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_hcpKekwQMPLrLXjTLDHAXjvW",
  "parameters": {
    "new_date": "2025-09-18",
    "new_time": "15:30"
  }
}
[2025-09-15T10:13:55.320Z] 📋 Function name: update_booking
[2025-09-15T10:13:55.320Z] 📊 Parameters: {
  "new_date": "2025-09-18",
  "new_time": "15:30"
}
[2025-09-15T10:13:55.320Z] 🏢 Business config exists: true
[2025-09-15T10:13:55.320Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_hcpKekwQMPLrLXjTLDHAXjvW",
  "parameters": {
    "new_date": "2025-09-18",
    "new_time": "15:30"
  }
}
📝 updateBooking called with params: {
  "new_date": "2025-09-18",
  "new_time": "15:30"
}
📋 Session data: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-17',
  lastBookingTime: '15:00',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '13:30',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: '7b1b206e-f6b2-4d65-8d31-9af86508181d',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '13:30',
      newDate: undefined,
      newTime: '15:00',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastAppointmentId: '7b1b206e-f6b2-4d65-8d31-9af86508181d'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-17',
  currentTime: '15:00'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-17 at 15:00
📝 Session updated for call CA430788b987553e45b911189147c0e35a: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-18',
  lastBookingTime: '15:30',
  lastServiceId: 'haircut',
  lastServiceName: 'haircut',
  lastServiceDuration: 30,
  bookings: [
    {
      customerName: 'Marco',
      date: '2025-09-17',
      time: '13:30',
      serviceId: 'haircut',
      serviceName: 'haircut',
      serviceDuration: 30,
      appointmentId: '7b1b206e-f6b2-4d65-8d31-9af86508181d',
      type: 'create'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '13:30',
      newDate: undefined,
      newTime: '15:00',
      newServiceId: undefined,
      type: 'update'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-17',
      currentTime: '15:00',
      newDate: '2025-09-18',
      newTime: '15:30',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastAppointmentId: '7b1b206e-f6b2-4d65-8d31-9af86508181d'
}
📦 Update request body: {
  "business_id": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "customer_name": "Marco",
  "current_date": "2025-09-17",
  "current_time": "15:00",
  "caller_phone": "+447468306825",
  "new_date": "2025-09-18",
  "new_time": "15:30"
}
❌ Update booking API error: 409 {"error":"The new time slot 2025-09-18 at 15:30 is not available"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_hcpKekwQMPLrLXjTLDHAXjvW","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}","response":"{\"e...
Message string: {"type":"History","function_calls":[{"id":"call_hcpKekwQMPLrLXjTLDHAXjvW","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-18 at 15:30 is not available\\\"}\"}"}]}
[2025-09-15T10:13:57.182Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_hcpKekwQMPLrLXjTLDHAXjvW","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-18 at 15:30 is not available\\\"}\"}"}]}
[2025-09-15T10:13:57.182Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_hcpKekwQMPLrLXjTLDHAXjvW",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_date\":\"2025-09-18\",\"new_time\":\"15:30\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The new time slot 2025-09-18 at 15:30 is not available\\\"}\"}"
    }
  ]
}
[2025-09-15T10:13:57.182Z] === END PARSED JSON ===
[2025-09-15T10:13:57.182Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T10:13:57.182Z] 📜 HISTORY: Message logged
[2025-09-15T10:13:55.319Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-15T10:13:58.035Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-15T10:13:55.319Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"3:30 PM on Thursday, the 18th of September is also not available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"3:30 PM on Thursday, the 18th of September is also not available."}
[2025-09-15T10:13:58.292Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"3:30 PM on Thursday, the 18th of September is also not available."}
[2025-09-15T10:13:58.292Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "3:30 PM on Thursday, the 18th of September is also not available."
}
[2025-09-15T10:13:58.292Z] === END PARSED JSON ===
[2025-09-15T10:13:58.292Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T10:13:58.292Z] 💭 CONVERSATION_TEXT: 3:30 PM on Thursday, the 18th of September is also not available.
[2025-09-15T10:13:58.292Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: 3:30 PM on Thursday, the 18th of September is also not available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"3:30 PM on Thursday, the 18th of September is also not available."}...
Message string: {"type":"History","role":"assistant","content":"3:30 PM on Thursday, the 18th of September is also not available."}
[2025-09-15T10:13:58.292Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"3:30 PM on Thursday, the 18th of September is also not available."}
[2025-09-15T10:13:58.292Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "3:30 PM on Thursday, the 18th of September is also not available."
}
[2025-09-15T10:13:58.292Z] === END PARSED JSON ===
[2025-09-15T10:13:58.292Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T10:13:58.292Z] 📜 HISTORY: Message logged
[2025-09-15T10:13:58.292Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: 3:30 PM on Thursday, the 18th of September is also not available.
[2025-09-15T10:13:58.292Z] 📝 Added transcript: [AI] 3:30 PM on Thursday, the 18th of September is also not available.
[2025-09-15T10:13:58.292Z] 🎵 Starting audio stream - feeding buffer
[2025-09-15T10:14:00.708Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T10:14:00.497Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?"}
[2025-09-15T10:14:03.574Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?"}
[2025-09-15T10:14:03.574Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?"
}
[2025-09-15T10:14:03.574Z] === END PARSED JSON ===
[2025-09-15T10:14:03.574Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T10:14:03.574Z] 💭 CONVERSATION_TEXT: Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?
[2025-09-15T10:14:03.574Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?"}...
Message string: {"type":"History","role":"assistant","content":"Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?"}
[2025-09-15T10:14:03.574Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?"}
[2025-09-15T10:14:03.574Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?"
}
[2025-09-15T10:14:03.574Z] === END PARSED JSON ===
[2025-09-15T10:14:03.574Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-15T10:14:03.574Z] 📜 HISTORY: Message logged
[2025-09-15T10:14:03.574Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?
[2025-09-15T10:14:03.574Z] 📝 Added transcript: [AI] Would you like to try a different time on Thursday, or keep your original appointment at 1:30 PM on Wednesday?
[2025-09-15T10:14:03.575Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-15T10:14:03.870Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-15T10:14:03.870Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-15T10:14:03.870Z] === END PARSED JSON ===
[2025-09-15T10:14:03.870Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-15T10:14:03.870Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-15T10:14:03.870Z] 🔇 SILENCE: Started tracking
[2025-09-15T10:14:03.870Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-15T10:14:04.708Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-15T10:14:03.870Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-15T10:14:03.870Z] 🔇 SILENCE_CHECK: 1999ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-15T10:14:06.475Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-15T10:14:06.475Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-15T10:14:06.475Z] === END PARSED JSON ===
[2025-09-15T10:14:06.475Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-15T10:14:06.475Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-15T10:14:06.475Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-15T10:14:06.475Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"That's"}...
Message string: {"type":"ConversationText","role":"user","content":"That's"}
[2025-09-15T10:14:06.484Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"That's"}
[2025-09-15T10:14:06.484Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "That's"
}
[2025-09-15T10:14:06.484Z] === END PARSED JSON ===
[2025-09-15T10:14:06.484Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-15T10:14:06.484Z] 💭 CONVERSATION_TEXT: That's
[2025-09-15T10:14:06.484Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: That's
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"That's"}...
Message string: {"type":"History","role":"user","content":"That's"}
[2025-09-15T10:14:06.484Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"That's"}
[2025-09-15T10:14:06.484Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "That's"
}