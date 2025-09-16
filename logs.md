lookup_customer function call
🔍 Looking up existing bookings for phone: +447468306825
📝 Session updated for call CA662de520de3ef34613b753423f449ce3: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 2,
  allFutureBookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      appointment_date: '2025-09-18',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      appointment_date: '2025-09-18',
      start_time: '14:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ]
}
✅ Stored existing bookings in session: {
  customer: 'Marco',
  totalFutureBookings: 2,
  bookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      date: '2025-09-18',
      time: '14:00:00',
      service: 'haircut'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      date: '2025-09-18',
      time: '14:30:00',
      service: 'haircut'
    }
  ]
}
✅ Sending lookup_customer response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_T7SEFJptwsyPlAnhOnlfveUT","name":"lookup_customer","client_side":true,"arguments":"{\"reason\":\"customer wants to update appointment\"}","response":"{\...
Message string: {"type":"History","function_calls":[{"id":"call_T7SEFJptwsyPlAnhOnlfveUT","name":"lookup_customer","client_side":true,"arguments":"{\"reason\":\"customer wants to update appointment\"}","response":"{\"success\":true,\"message\":\"Found 2 future bookings for Marco. Please specify which appointment you'd like to modify by mentioning the date, time, or service.\",\"multiple_bookings\":true,\"bookings\":[{\"id\":\"6caaf8a2-d65c-42d7-99b8-11bf6c65aa10\",\"customer_name\":\"Marco\",\"appointment_date\":\"2025-09-18\",\"start_time\":\"14:00:00\",\"service_name\":\"haircut\",\"formatted_info\":\"haircut on 2025-09-18 at 14:00:00\"},{\"id\":\"3d1d9d42-4e54-4f42-aeff-e6a24f889f87\",\"customer_name\":\"Marco\",\"appointment_date\":\"2025-09-18\",\"start_time\":\"14:30:00\",\"service_name\":\"haircut\",\"formatted_info\":\"haircut on 2025-09-18 at 14:30:00\"}]}"}]}
[2025-09-16T14:30:02.576Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_T7SEFJptwsyPlAnhOnlfveUT","name":"lookup_customer","client_side":true,"arguments":"{\"reason\":\"customer wants to update appointment\"}","response":"{\"success\":true,\"message\":\"Found 2 future bookings for Marco. Please specify which appointment you'd like to modify by mentioning the date, time, or service.\",\"multiple_bookings\":true,\"bookings\":[{\"id\":\"6caaf8a2-d65c-42d7-99b8-11bf6c65aa10\",\"customer_name\":\"Marco\",\"appointment_date\":\"2025-09-18\",\"start_time\":\"14:00:00\",\"service_name\":\"haircut\",\"formatted_info\":\"haircut on 2025-09-18 at 14:00:00\"},{\"id\":\"3d1d9d42-4e54-4f42-aeff-e6a24f889f87\",\"customer_name\":\"Marco\",\"appointment_date\":\"2025-09-18\",\"start_time\":\"14:30:00\",\"service_name\":\"haircut\",\"formatted_info\":\"haircut on 2025-09-18 at 14:30:00\"}]}"}]}
[2025-09-16T14:30:02.576Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_T7SEFJptwsyPlAnhOnlfveUT",
      "name": "lookup_customer",
      "client_side": true,
      "arguments": "{\"reason\":\"customer wants to update appointment\"}",
      "response": "{\"success\":true,\"message\":\"Found 2 future bookings for Marco. Please specify which appointment you'd like to modify by mentioning the date, time, or service.\",\"multiple_bookings\":true,\"bookings\":[{\"id\":\"6caaf8a2-d65c-42d7-99b8-11bf6c65aa10\",\"customer_name\":\"Marco\",\"appointment_date\":\"2025-09-18\",\"start_time\":\"14:00:00\",\"service_name\":\"haircut\",\"formatted_info\":\"haircut on 2025-09-18 at 14:00:00\"},{\"id\":\"3d1d9d42-4e54-4f42-aeff-e6a24f889f87\",\"customer_name\":\"Marco\",\"appointment_date\":\"2025-09-18\",\"start_time\":\"14:30:00\",\"service_name\":\"haircut\",\"formatted_info\":\"haircut on 2025-09-18 at 14:30:00\"}]}"
    }
  ]
}
[2025-09-16T14:30:02.576Z] === END PARSED JSON ===
[2025-09-16T14:30:02.576Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:02.576Z] 📜 HISTORY: Message logged
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th."}...
Message string: {"type":"ConversationText","role":"assistant","content":"Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th."}
[2025-09-16T14:30:03.428Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th."}
[2025-09-16T14:30:03.428Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th."
}
[2025-09-16T14:30:03.428Z] === END PARSED JSON ===
[2025-09-16T14:30:03.428Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:30:03.428Z] 💭 CONVERSATION_TEXT: Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th.
[2025-09-16T14:30:03.428Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th.
[2025-09-16T14:30:01.490Z] ✅ COMPLETED: handleFunctionCall for lookup_customer
[2025-09-16T14:30:03.428Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T14:30:01.490Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th."}...
Message string: {"type":"History","role":"assistant","content":"Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th."}
[2025-09-16T14:30:03.429Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th."}
[2025-09-16T14:30:03.429Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th."
}
[2025-09-16T14:30:03.429Z] === END PARSED JSON ===
[2025-09-16T14:30:03.429Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:03.429Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:03.429Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th.
[2025-09-16T14:30:03.429Z] 📝 Added transcript: [AI] Marco, I found two future bookings for you, both are haircuts on Thursday, the 18th.
[2025-09-16T14:30:03.429Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T14:30:04.550Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T14:30:06.192Z] 🔇 Audio stream ended (timeout)
[2025-09-16T14:30:08.550Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"One is at 2 PM and the other at 2:30 PM."}...
Message string: {"type":"ConversationText","role":"assistant","content":"One is at 2 PM and the other at 2:30 PM."}
[2025-09-16T14:30:10.070Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"One is at 2 PM and the other at 2:30 PM."}
[2025-09-16T14:30:10.070Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "One is at 2 PM and the other at 2:30 PM."
}
[2025-09-16T14:30:10.070Z] === END PARSED JSON ===
[2025-09-16T14:30:10.070Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:30:10.070Z] 💭 CONVERSATION_TEXT: One is at 2 PM and the other at 2:30 PM.
[2025-09-16T14:30:10.070Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: One is at 2 PM and the other at 2:30 PM.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"One is at 2 PM and the other at 2:30 PM."}...
Message string: {"type":"History","role":"assistant","content":"One is at 2 PM and the other at 2:30 PM."}
[2025-09-16T14:30:10.071Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"One is at 2 PM and the other at 2:30 PM."}
[2025-09-16T14:30:10.071Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "One is at 2 PM and the other at 2:30 PM."
}
[2025-09-16T14:30:10.071Z] === END PARSED JSON ===
[2025-09-16T14:30:10.071Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:10.071Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:10.071Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: One is at 2 PM and the other at 2:30 PM.
[2025-09-16T14:30:10.071Z] 📝 Added transcript: [AI] One is at 2 PM and the other at 2:30 PM.
[2025-09-16T14:30:10.071Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T14:30:10.219Z] 🔇 Audio stream ended (timeout)
[2025-09-16T14:30:12.549Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Could you please specify which one you'd like to update?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Could you please specify which one you'd like to update?"}
[2025-09-16T14:30:14.032Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Could you please specify which one you'd like to update?"}
[2025-09-16T14:30:14.032Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Could you please specify which one you'd like to update?"
}
[2025-09-16T14:30:14.032Z] === END PARSED JSON ===
[2025-09-16T14:30:14.032Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:30:14.032Z] 💭 CONVERSATION_TEXT: Could you please specify which one you'd like to update?
[2025-09-16T14:30:14.032Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Could you please specify which one you'd like to update?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Could you please specify which one you'd like to update?"}...
Message string: {"type":"History","role":"assistant","content":"Could you please specify which one you'd like to update?"}
[2025-09-16T14:30:14.180Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Could you please specify which one you'd like to update?"}
[2025-09-16T14:30:14.180Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Could you please specify which one you'd like to update?"
}
[2025-09-16T14:30:14.180Z] === END PARSED JSON ===
[2025-09-16T14:30:14.180Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:14.180Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:14.180Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Could you please specify which one you'd like to update?
[2025-09-16T14:30:14.180Z] 📝 Added transcript: [AI] Could you please specify which one you'd like to update?
[2025-09-16T14:30:14.180Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-16T14:30:14.181Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-16T14:30:14.181Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T14:30:14.181Z] === END PARSED JSON ===
[2025-09-16T14:30:14.181Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T14:30:14.181Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T14:30:14.181Z] 🔇 SILENCE: Started tracking
[2025-09-16T14:30:14.181Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-16T14:30:14.181Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-16T14:30:14.181Z] 🔇 SILENCE_CHECK: 2000ms of silence
[2025-09-16T14:30:16.549Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T14:30:14.181Z] 🔇 SILENCE_CHECK: 3001ms of silence
[2025-09-16T14:30:14.181Z] 🔇 SILENCE_CHECK: 4000ms of silence
[2025-09-16T14:30:14.181Z] 🔇 SILENCE_CHECK: 5001ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-16T14:30:19.634Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-16T14:30:19.634Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-16T14:30:19.634Z] === END PARSED JSON ===
[2025-09-16T14:30:19.634Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-16T14:30:19.634Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-16T14:30:19.634Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-16T14:30:19.634Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-16T14:30:20.549Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"But the one that two PM, I want to move it to Wednesday at twelve."}...
Message string: {"type":"ConversationText","role":"user","content":"But the one that two PM, I want to move it to Wednesday at twelve."}
[2025-09-16T14:30:24.132Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"But the one that two PM, I want to move it to Wednesday at twelve."}
[2025-09-16T14:30:24.132Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "But the one that two PM, I want to move it to Wednesday at twelve."
}
[2025-09-16T14:30:24.132Z] === END PARSED JSON ===
[2025-09-16T14:30:24.132Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:30:24.132Z] 💭 CONVERSATION_TEXT: But the one that two PM, I want to move it to Wednesday at twelve.
[2025-09-16T14:30:24.132Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: But the one that two PM, I want to move it to Wednesday at twelve.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"But the one that two PM, I want to move it to Wednesday at twelve."}...
Message string: {"type":"History","role":"user","content":"But the one that two PM, I want to move it to Wednesday at twelve."}
[2025-09-16T14:30:24.145Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"But the one that two PM, I want to move it to Wednesday at twelve."}
[2025-09-16T14:30:24.145Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "But the one that two PM, I want to move it to Wednesday at twelve."
}
[2025-09-16T14:30:24.145Z] === END PARSED JSON ===
[2025-09-16T14:30:24.145Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:24.145Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:24.145Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: But the one that two PM, I want to move it to Wednesday at twelve.
[2025-09-16T14:30:24.145Z] 📝 Added transcript: [User] But the one that two PM, I want to move it to Wednesday at twelve.
[2025-09-16T14:30:24.549Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_YFe2VhzJQpNPeNZgXC1JEf2N","name":"get_day_of_week","arguments":"{\"date\":\"17/09/2025\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_YFe2VhzJQpNPeNZgXC1JEf2N","name":"get_day_of_week","arguments":"{\"date\":\"17/09/2025\"}","client_side":true}]}
[2025-09-16T14:30:25.774Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_YFe2VhzJQpNPeNZgXC1JEf2N","name":"get_day_of_week","arguments":"{\"date\":\"17/09/2025\"}","client_side":true}]}
[2025-09-16T14:30:25.774Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_YFe2VhzJQpNPeNZgXC1JEf2N",
      "name": "get_day_of_week",
      "arguments": "{\"date\":\"17/09/2025\"}",
      "client_side": true
    }
  ]
}
[2025-09-16T14:30:25.774Z] === END PARSED JSON ===
[2025-09-16T14:30:25.774Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-16T14:30:25.774Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-16T14:30:25.774Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-16T14:30:25.774Z] 📋 Functions: [
  {
    "id": "call_YFe2VhzJQpNPeNZgXC1JEf2N",
    "name": "get_day_of_week",
    "arguments": "{\"date\":\"17/09/2025\"}",
    "client_side": true
  }
]
[2025-09-16T14:30:25.774Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-16T14:30:25.774Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-16T14:30:25.774Z] 🔧 Processing function: get_day_of_week
[2025-09-16T14:30:25.774Z] 🔧 CALLING: handleFunctionCall for get_day_of_week...
📝 Session updated for call CA662de520de3ef34613b753423f449ce3: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 2,
  allFutureBookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      appointment_date: '2025-09-18',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      appointment_date: '2025-09-18',
      start_time: '14:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ]
}
[2025-09-16T14:30:25.775Z] 🚀 STARTING handleFunctionCall
[2025-09-16T14:30:25.775Z] 🔧 Function call received: {
  "function_name": "get_day_of_week",
  "function_call_id": "call_YFe2VhzJQpNPeNZgXC1JEf2N",
  "parameters": {
    "date": "17/09/2025"
  }
}
[2025-09-16T14:30:25.775Z] 📋 Function name: get_day_of_week
[2025-09-16T14:30:25.775Z] 📊 Parameters: {
  "date": "17/09/2025"
}
[2025-09-16T14:30:25.775Z] 🏢 Business config exists: true
[2025-09-16T14:30:25.775Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_day_of_week",
  "function_call_id": "call_YFe2VhzJQpNPeNZgXC1JEf2N",
  "parameters": {
    "date": "17/09/2025"
  }
}
📅 Getting day of week for: 17/09/2025
✅ 17/09/2025 is a Wednesday
✅ Sending get_day_of_week response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_YFe2VhzJQpNPeNZgXC1JEf2N","name":"get_day_of_week","client_side":true,"arguments":"{\"date\": \"17/09/2025\"}","response":"{\"date\":\"17/09/2025\",\"da...
Message string: {"type":"History","function_calls":[{"id":"call_YFe2VhzJQpNPeNZgXC1JEf2N","name":"get_day_of_week","client_side":true,"arguments":"{\"date\": \"17/09/2025\"}","response":"{\"date\":\"17/09/2025\",\"day_of_week\":\"Wednesday\",\"day_number\":3,\"formatted\":\"Wednesday, 17 September 2025\"}"}]}
[2025-09-16T14:30:25.925Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_YFe2VhzJQpNPeNZgXC1JEf2N","name":"get_day_of_week","client_side":true,"arguments":"{\"date\": \"17/09/2025\"}","response":"{\"date\":\"17/09/2025\",\"day_of_week\":\"Wednesday\",\"day_number\":3,\"formatted\":\"Wednesday, 17 September 2025\"}"}]}
[2025-09-16T14:30:25.925Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_YFe2VhzJQpNPeNZgXC1JEf2N",
      "name": "get_day_of_week",
      "client_side": true,
      "arguments": "{\"date\": \"17/09/2025\"}",
      "response": "{\"date\":\"17/09/2025\",\"day_of_week\":\"Wednesday\",\"day_number\":3,\"formatted\":\"Wednesday, 17 September 2025\"}"
    }
  ]
}
[2025-09-16T14:30:25.925Z] === END PARSED JSON ===
[2025-09-16T14:30:25.925Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:25.925Z] 📜 HISTORY: Message logged
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_hEyBF8GOWnle4GqFVMVieMag","name":"get_available_slots","arguments":"{\"date\":\"2025-09-17\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_hEyBF8GOWnle4GqFVMVieMag","name":"get_available_slots","arguments":"{\"date\":\"2025-09-17\"}","client_side":true}]}
[2025-09-16T14:30:25.925Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_hEyBF8GOWnle4GqFVMVieMag","name":"get_available_slots","arguments":"{\"date\":\"2025-09-17\"}","client_side":true}]}
[2025-09-16T14:30:25.925Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_hEyBF8GOWnle4GqFVMVieMag",
      "name": "get_available_slots",
      "arguments": "{\"date\":\"2025-09-17\"}",
      "client_side": true
    }
  ]
}
[2025-09-16T14:30:25.925Z] === END PARSED JSON ===
[2025-09-16T14:30:25.925Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-16T14:30:25.925Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-16T14:30:25.925Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-16T14:30:25.925Z] 📋 Functions: [
  {
    "id": "call_hEyBF8GOWnle4GqFVMVieMag",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-17\"}",
    "client_side": true
  }
]
[2025-09-16T14:30:25.925Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-16T14:30:25.925Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-16T14:30:25.925Z] 🔧 Processing function: get_available_slots
[2025-09-16T14:30:25.925Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CA662de520de3ef34613b753423f449ce3: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 2,
  allFutureBookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      appointment_date: '2025-09-18',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      appointment_date: '2025-09-18',
      start_time: '14:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ]
}
[2025-09-16T14:30:25.926Z] 🚀 STARTING handleFunctionCall
[2025-09-16T14:30:25.926Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_hEyBF8GOWnle4GqFVMVieMag",
  "parameters": {
    "date": "2025-09-17"
  }
}
[2025-09-16T14:30:25.926Z] 📋 Function name: get_available_slots
[2025-09-16T14:30:25.926Z] 📊 Parameters: {
  "date": "2025-09-17"
}
[2025-09-16T14:30:25.926Z] 🏢 Business config exists: true
[2025-09-16T14:30:25.926Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_hEyBF8GOWnle4GqFVMVieMag",
  "parameters": {
    "date": "2025-09-17"
  }
}
[2025-09-16T14:30:25.926Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-17"
}
[2025-09-16T14:30:25.926Z] 🏢 Business config: Gents Barbershop
[2025-09-16T14:30:25.926Z] 📋 Services count: 2
[2025-09-16T14:30:25.926Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-16T14:30:25.926Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-17"
}
📅 Business open on Wednesday
📋 Using default service: haircut (Duration: 30 minutes)
[2025-09-16T14:30:25.926Z] 🌐 About to make API call:
[2025-09-16T14:30:25.926Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/availability?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-17
[2025-09-16T14:30:25.926Z] 🔑 Secret exists: true
[2025-09-16T14:30:25.926Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-16T14:30:25.926Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-16T14:30:25.926Z] 📅 Date: 2025-09-17
[2025-09-16T14:30:25.774Z] ✅ COMPLETED: handleFunctionCall for get_day_of_week
[2025-09-16T14:30:26.777Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T14:30:25.774Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-16T14:30:28.550Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T14:30:25.926Z] 📡 API Response status: 200
[2025-09-16T14:30:25.926Z] 📡 API Response ok: true
[2025-09-16T14:30:25.926Z] 📅 Calendar API response: {
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
      "start": "2025-09-17T11:30:00.000Z",
      "end": "2025-09-17T12:00:00.000Z",
      "startTime": "12:30",
      "endTime": "13:00",
      "startTimeConversational": "12:30 PM",
      "endTimeConversational": "1:00 PM"
    },
    {
      "start": "2025-09-17T11:45:00.000Z",
      "end": "2025-09-17T12:15:00.000Z",
      "startTime": "12:45",
      "endTime": "13:15",
      "startTimeConversational": "12:45 PM",
      "endTimeConversational": "1:15 PM"
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
      "start": "2025-09-17T12:45:00.000Z",
      "end": "2025-09-17T13:15:00.000Z",
      "startTime": "13:45",
      "endTime": "14:15",
      "startTimeConversational": "1:45 PM",
      "endTimeConversational": "2:15 PM"
    },
    {
      "start": "2025-09-17T13:00:00.000Z",
      "end": "2025-09-17T13:30:00.000Z",
      "startTime": "14:00",
      "endTime": "14:30",
      "startTimeConversational": "2:00 PM",
      "endTimeConversational": "2:30 PM"
    },
    {
      "start": "2025-09-17T13:15:00.000Z",
      "end": "2025-09-17T13:45:00.000Z",
      "startTime": "14:15",
      "endTime": "14:45",
      "startTimeConversational": "2:15 PM",
      "endTimeConversational": "2:45 PM"
    },
    {
      "start": "2025-09-17T13:30:00.000Z",
      "end": "2025-09-17T14:00:00.000Z",
      "startTime": "14:30",
      "endTime": "15:00",
      "startTimeConversational": "2:30 PM",
      "endTimeConversational": "3:00 PM"
    },
    {
      "start": "2025-09-17T13:45:00.000Z",
      "end": "2025-09-17T14:15:00.000Z",
      "startTime": "14:45",
      "endTime": "15:15",
      "startTimeConversational": "2:45 PM",
      "endTimeConversational": "3:15 PM"
    },
    {
      "start": "2025-09-17T14:00:00.000Z",
      "end": "2025-09-17T14:30:00.000Z",
      "startTime": "15:00",
      "endTime": "15:30",
      "startTimeConversational": "3:00 PM",
      "endTimeConversational": "3:30 PM"
    },
    {
      "start": "2025-09-17T14:15:00.000Z",
      "end": "2025-09-17T14:45:00.000Z",
      "startTime": "15:15",
      "endTime": "15:45",
      "startTimeConversational": "3:15 PM",
      "endTimeConversational": "3:45 PM"
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
    },
    {
      "start": "2025-09-17T15:00:00.000Z",
      "end": "2025-09-17T15:30:00.000Z",
      "startTime": "16:00",
      "endTime": "16:30",
      "startTimeConversational": "4:00 PM",
      "endTimeConversational": "4:30 PM"
    },
    {
      "start": "2025-09-17T15:15:00.000Z",
      "end": "2025-09-17T15:45:00.000Z",
      "startTime": "16:15",
      "endTime": "16:45",
      "startTimeConversational": "4:15 PM",
      "endTimeConversational": "4:45 PM"
    },
    {
      "start": "2025-09-17T15:30:00.000Z",
      "end": "2025-09-17T16:00:00.000Z",
      "startTime": "16:30",
      "endTime": "17:00",
      "startTimeConversational": "4:30 PM",
      "endTimeConversational": "5:00 PM"
    }
  ],
  "date": "2025-09-17",
  "businessId": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "serviceId": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-16T14:30:25.926Z] 📊 Response type: object
[2025-09-16T14:30:25.926Z] 📊 Has slots: true
[2025-09-16T14:30:25.926Z] 📊 Slots count: 31
✅ Available time slots: [
  '09:00', '09:15', '09:30', '09:45',
  '10:00', '10:15', '10:30', '10:45',
  '11:00', '11:15', '11:30', '11:45',
  '12:00', '12:15', '12:30', '12:45',
  '13:00', '13:15', '13:30', '13:45',
  '14:00', '14:15', '14:30', '14:45',
  '15:00', '15:15', '15:30', '15:45',
  '16:00', '16:15', '16:30'
]
📝 Session updated for call CA662de520de3ef34613b753423f449ce3: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 2,
  allFutureBookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      appointment_date: '2025-09-18',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      appointment_date: '2025-09-18',
      start_time: '14:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T14:30:28.940Z'
}
📅 Stored checked date in session: 2025-09-17
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_hEyBF8GOWnle4GqFVMVieMag","name":"get_available_slots","client_side":true,"arguments":"{\"date\": \"2025-09-17\"}","response":"{\"available_slots\":[\"0...
Message string: {"type":"History","function_calls":[{"id":"call_hEyBF8GOWnle4GqFVMVieMag","name":"get_available_slots","client_side":true,"arguments":"{\"date\": \"2025-09-17\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"}]}
[2025-09-16T14:30:29.088Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_hEyBF8GOWnle4GqFVMVieMag","name":"get_available_slots","client_side":true,"arguments":"{\"date\": \"2025-09-17\"}","response":"{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"}]}
[2025-09-16T14:30:29.088Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_hEyBF8GOWnle4GqFVMVieMag",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\": \"2025-09-17\"}",
      "response": "{\"available_slots\":[\"09:00\",\"09:15\",\"09:30\",\"09:45\",\"10:00\",\"10:15\",\"10:30\",\"10:45\",\"11:00\",\"11:15\",\"11:30\",\"11:45\",\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"13:45\",\"14:00\",\"14:15\",\"14:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\",\"15:45\",\"16:00\",\"16:15\",\"16:30\"]}"
    }
  ]
}
[2025-09-16T14:30:29.088Z] === END PARSED JSON ===
[2025-09-16T14:30:29.088Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:29.088Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:25.925Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-16T14:30:29.942Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T14:30:25.925Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM."}
[2025-09-16T14:30:30.124Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM."}
[2025-09-16T14:30:30.124Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM."
}
[2025-09-16T14:30:30.124Z] === END PARSED JSON ===
[2025-09-16T14:30:30.124Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:30:30.124Z] 💭 CONVERSATION_TEXT: I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM.
[2025-09-16T14:30:30.124Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM."}...
Message string: {"type":"History","role":"assistant","content":"I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM."}
[2025-09-16T14:30:30.125Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM."}
[2025-09-16T14:30:30.125Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM."
}
[2025-09-16T14:30:30.125Z] === END PARSED JSON ===
[2025-09-16T14:30:30.125Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:30.125Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:30.125Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM.
[2025-09-16T14:30:30.125Z] 📝 Added transcript: [AI] I can move your 2 PM haircut appointment to Wednesday, the 17th at 12 PM.
[2025-09-16T14:30:30.125Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T14:30:32.549Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-16T14:30:32.324Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"That time is available."}...
Message string: {"type":"ConversationText","role":"assistant","content":"That time is available."}
[2025-09-16T14:30:35.446Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"That time is available."}
[2025-09-16T14:30:35.446Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "That time is available."
}
[2025-09-16T14:30:35.446Z] === END PARSED JSON ===
[2025-09-16T14:30:35.446Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:30:35.446Z] 💭 CONVERSATION_TEXT: That time is available.
[2025-09-16T14:30:35.446Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: That time is available.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"That time is available."}...
Message string: {"type":"History","role":"assistant","content":"That time is available."}
[2025-09-16T14:30:35.594Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"That time is available."}
[2025-09-16T14:30:35.594Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "That time is available."
}
[2025-09-16T14:30:35.594Z] === END PARSED JSON ===
[2025-09-16T14:30:35.594Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:35.594Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:35.594Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: That time is available.
[2025-09-16T14:30:35.594Z] 📝 Added transcript: [AI] That time is available.
[2025-09-16T14:30:35.594Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T14:30:35.595Z] 🔇 Audio stream ended (timeout)
[2025-09-16T14:30:36.549Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I go ahead and confirm this update for you?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I go ahead and confirm this update for you?"}
[2025-09-16T14:30:37.408Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I go ahead and confirm this update for you?"}
[2025-09-16T14:30:37.408Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I go ahead and confirm this update for you?"
}
[2025-09-16T14:30:37.408Z] === END PARSED JSON ===
[2025-09-16T14:30:37.408Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:30:37.408Z] 💭 CONVERSATION_TEXT: Shall I go ahead and confirm this update for you?
[2025-09-16T14:30:37.408Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Shall I go ahead and confirm this update for you?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I go ahead and confirm this update for you?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I go ahead and confirm this update for you?"}
[2025-09-16T14:30:37.556Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I go ahead and confirm this update for you?"}
[2025-09-16T14:30:37.556Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I go ahead and confirm this update for you?"
}
[2025-09-16T14:30:37.556Z] === END PARSED JSON ===
[2025-09-16T14:30:37.556Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:37.556Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:37.556Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Shall I go ahead and confirm this update for you?
[2025-09-16T14:30:37.556Z] 📝 Added transcript: [AI] Shall I go ahead and confirm this update for you?
[2025-09-16T14:30:37.556Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-16T14:30:37.557Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-16T14:30:37.557Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T14:30:37.557Z] === END PARSED JSON ===
[2025-09-16T14:30:37.557Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T14:30:37.557Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T14:30:37.557Z] 🔇 SILENCE: Started tracking
[2025-09-16T14:30:37.557Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-16T14:30:54.879Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA662de520de3ef34613b753423f449ce3: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 2,
  allFutureBookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      appointment_date: '2025-09-18',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      appointment_date: '2025-09-18',
      start_time: '14:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T14:30:28.940Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: '2025-09-18',
      currentTime: '14:00',
      newDate: '2025-09-17',
      newTime: '12:00',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:00',
      appointmentId: 'f6e61568-1c46-4246-955a-058ea9885ba6',
      serviceName: 'haircut'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '12:00'
}
[2025-09-16T14:30:54.880Z] 🚀 STARTING handleFunctionCall
[2025-09-16T14:30:54.880Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_HYhPqwLuQrJ4rnmgSrr8rsMt",
  "parameters": {
    "current_date": "2025-09-18",
    "current_time": "14:00",
    "customer_name": "Marco",
    "new_date": "2025-09-17",
    "new_time": "12:00"
  }
}
[2025-09-16T14:30:54.880Z] 📋 Function name: update_booking
[2025-09-16T14:30:54.880Z] 📊 Parameters: {
  "current_date": "2025-09-18",
  "current_time": "14:00",
  "customer_name": "Marco",
  "new_date": "2025-09-17",
  "new_time": "12:00"
}
[2025-09-16T14:30:54.880Z] 🏢 Business config exists: true
[2025-09-16T14:30:54.880Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_HYhPqwLuQrJ4rnmgSrr8rsMt",
  "parameters": {
    "current_date": "2025-09-18",
    "current_time": "14:00",
    "customer_name": "Marco",
    "new_date": "2025-09-17",
    "new_time": "12:00"
  }
}
📝 updateBooking called with params: {
  "current_date": "2025-09-18",
  "current_time": "14:00",
  "customer_name": "Marco",
  "new_date": "2025-09-17",
  "new_time": "12:00"
}
📋 Session data: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 2,
  allFutureBookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      appointment_date: '2025-09-18',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      appointment_date: '2025-09-18',
      start_time: '14:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T14:30:28.940Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: '2025-09-18',
      currentTime: '14:00',
      newDate: '2025-09-17',
      newTime: '12:00',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:00',
      appointmentId: 'f6e61568-1c46-4246-955a-058ea9885ba6',
      serviceName: 'haircut'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '12:00'
}
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-18',
  currentTime: '14:00'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-18 at 14:00
📝 Session updated for call CA662de520de3ef34613b753423f449ce3: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 2,
  allFutureBookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      appointment_date: '2025-09-18',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      appointment_date: '2025-09-18',
      start_time: '14:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T14:30:28.940Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: '2025-09-18',
      currentTime: '14:00',
      newDate: '2025-09-17',
      newTime: '12:00',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:00',
      appointmentId: 'f6e61568-1c46-4246-955a-058ea9885ba6',
      serviceName: 'haircut'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-18',
      currentTime: '14:00',
      newDate: '2025-09-17',
      newTime: '12:00',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '12:00'
}
📦 Update request body: {
  "business_id": "1bb3c552-053f-40c4-b3f2-bdb51af87b52",
  "customer_name": "Marco",
  "current_date": "2025-09-18",
  "current_time": "14:00",
  "caller_phone": "+447468306825",
  "sessionId": "CA662de520de3ef34613b753423f449ce3",
  "new_date": "2025-09-17",
  "new_time": "12:00"
}
❌ Update booking API error: 404 {"error":"No booking found for Marco on 2025-09-18 at 14:00. Please check the exact name, date, and time."}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_HYhPqwLuQrJ4rnmgSrr8rsMt","name":"update_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current...
Message string: {"type":"History","function_calls":[{"id":"call_HYhPqwLuQrJ4rnmgSrr8rsMt","name":"update_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"14:00\",\"new_date\":\"2025-09-17\",\"new_time\":\"12:00\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"No booking found for Marco on 2025-09-18 at 14:00. Please check the exact name, date, and time.\\\"}\"}"}]}
[2025-09-16T14:30:55.633Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_HYhPqwLuQrJ4rnmgSrr8rsMt","name":"update_booking","client_side":true,"arguments":"{\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"14:00\",\"new_date\":\"2025-09-17\",\"new_time\":\"12:00\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"No booking found for Marco on 2025-09-18 at 14:00. Please check the exact name, date, and time.\\\"}\"}"}]}
[2025-09-16T14:30:55.633Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_HYhPqwLuQrJ4rnmgSrr8rsMt",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"customer_name\":\"Marco\",\"current_date\":\"2025-09-18\",\"current_time\":\"14:00\",\"new_date\":\"2025-09-17\",\"new_time\":\"12:00\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"No booking found for Marco on 2025-09-18 at 14:00. Please check the exact name, date, and time.\\\"}\"}"
    }
  ]
}
[2025-09-16T14:30:55.633Z] === END PARSED JSON ===
[2025-09-16T14:30:55.633Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:55.633Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:54.879Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-16T14:30:56.486Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T14:30:54.879Z] ▶️ SILENCE: Resuming timer - Function processing completed
[2025-09-16T14:30:56.551Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco."}
[2025-09-16T14:30:56.908Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco."}
[2025-09-16T14:30:56.908Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco."
}
[2025-09-16T14:30:56.908Z] === END PARSED JSON ===
[2025-09-16T14:30:56.908Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:30:56.908Z] 💭 CONVERSATION_TEXT: It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco.
[2025-09-16T14:30:56.908Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco."}...
Message string: {"type":"History","role":"assistant","content":"It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco."}
[2025-09-16T14:30:56.908Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco."}
[2025-09-16T14:30:56.908Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco."
}
[2025-09-16T14:30:56.908Z] === END PARSED JSON ===
[2025-09-16T14:30:56.908Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:30:56.908Z] 📜 HISTORY: Message logged
[2025-09-16T14:30:56.908Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco.
[2025-09-16T14:30:56.908Z] 📝 Added transcript: [AI] It seems I couldn't find the booking to update at 2 PM on Thursday, the 18th under your name Marco.
[2025-09-16T14:30:56.908Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T14:30:59.406Z] 🔇 Audio stream ended (timeout)
[2025-09-16T14:31:00.551Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?"}
[2025-09-16T14:31:02.870Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?"}
[2025-09-16T14:31:02.870Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?"
}
[2025-09-16T14:31:02.870Z] === END PARSED JSON ===
[2025-09-16T14:31:02.870Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:31:02.870Z] 💭 CONVERSATION_TEXT: Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?
[2025-09-16T14:31:02.870Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?"}...
Message string: {"type":"History","role":"assistant","content":"Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?"}
[2025-09-16T14:31:02.871Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?"}
[2025-09-16T14:31:02.871Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?"
}
[2025-09-16T14:31:02.871Z] === END PARSED JSON ===
[2025-09-16T14:31:02.871Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:31:02.871Z] 📜 HISTORY: Message logged
[2025-09-16T14:31:02.871Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?
[2025-09-16T14:31:02.871Z] 📝 Added transcript: [AI] Could you please confirm if the appointment was exactly at 2 PM or if there might be another detail?
[2025-09-16T14:31:02.871Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T14:31:03.167Z] 🔇 Audio stream ended (timeout)
[2025-09-16T14:31:04.552Z] 💓 KEEPALIVE: Sent to Deepgram
Media stream stopped
📞 Logging call completion: CA662de520de3ef34613b753423f449ce3
✅ Call completion logged: CA662de520de3ef34613b753423f449ce3
📱 Media stream stopped - sending SMS confirmations for CA662de520de3ef34613b753423f449ce3
📞 endCall called with params: {
  "reason": "media stream stopped"
}
📞 Call SID: CA662de520de3ef34613b753423f449ce3
📋 Session data before ending call: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 2,
  allFutureBookings: [
    {
      id: '6caaf8a2-d65c-42d7-99b8-11bf6c65aa10',
      appointment_date: '2025-09-18',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '3d1d9d42-4e54-4f42-aeff-e6a24f889f87',
      appointment_date: '2025-09-18',
      start_time: '14:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T14:30:28.940Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: '2025-09-18',
      currentTime: '14:00',
      newDate: '2025-09-17',
      newTime: '12:00',
      newServiceId: undefined,
      type: 'update',
      finalDate: '2025-09-17',
      finalTime: '12:00',
      appointmentId: 'f6e61568-1c46-4246-955a-058ea9885ba6',
      serviceName: 'haircut'
    },
    {
      customerName: 'Marco',
      currentDate: '2025-09-18',
      currentTime: '14:00',
      newDate: '2025-09-17',
      newTime: '12:00',
⚠️ Could not link update to any appointment: {
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '12:00'
}
  customerName: 'Marco',
  currentDate: '2025-09-18',
  currentTime: '14:00',
  newDate: '2025-09-17',
  newTime: '12:00',
  newServiceId: undefined,
  type: 'update'
}
📞 Attempting to end call with SID: CA662de520de3ef34613b753423f449ce3
📝 Reason: media stream stopped
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"This will help me update it correctly."}...
Message string: {"type":"ConversationText","role":"assistant","content":"This will help me update it correctly."}
[2025-09-16T14:31:08.473Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"This will help me update it correctly."}
[2025-09-16T14:31:08.473Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "This will help me update it correctly."
}
[2025-09-16T14:31:08.473Z] === END PARSED JSON ===
[2025-09-16T14:31:08.473Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T14:31:08.473Z] 💭 CONVERSATION_TEXT: This will help me update it correctly.
[2025-09-16T14:31:08.473Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: This will help me update it correctly.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"This will help me update it correctly."}...
Message string: {"type":"History","role":"assistant","content":"This will help me update it correctly."}
[2025-09-16T14:31:08.473Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"This will help me update it correctly."}
[2025-09-16T14:31:08.473Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "This will help me update it correctly."
}
[2025-09-16T14:31:08.473Z] === END PARSED JSON ===
[2025-09-16T14:31:08.473Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T14:31:08.473Z] 📜 HISTORY: Message logged
[2025-09-16T14:31:08.473Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: This will help me update it correctly.
[2025-09-16T14:31:08.473Z] 📝 Added transcript: [AI] This will help me update it correctly.
[2025-09-16T14:31:08.473Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T14:31:08.552Z] 💓 KEEPALIVE: Sent to Deepgram
✅ Call ended successfully: completed
❌ Error ending call: ReferenceError: smsSuccess is not defined
    at endCall (file:///opt/render/project/src/functionHandlers.js:1636:5)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async WebSocket.<anonymous> (file:///opt/render/project/src/server.js:279:21)
✅ SMS confirmations sent on media stop: CA662de520de3ef34613b753423f449ce3
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-16T14:31:08.621Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-16T14:31:08.621Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T14:31:08.621Z] === END PARSED JSON ===
[2025-09-16T14:31:08.621Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T14:31:08.621Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T14:31:08.621Z] 🔇 SILENCE: Started tracking
[2025-09-16T14:31:08.621Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
✅ Saved transcript for call CA662de520de3ef34613b753423f449ce3 (14 entries)
🔌 Closing Deepgram connection and cleaning up resources
🔇 Persistent pacer cleaned up
🔇 Silence tracking cleaned up
🧹 CLEANUP: Cleaning up connection state for call CA662de520de3ef34613b753423f449ce3
✅ Deepgram connection closed successfully
Twilio WebSocket connection closed
📞 Logging call completion on close: CA662de520de3ef34613b753423f449ce3
Deepgram WebSocket closed in initializeDeepgram. Code: 1000, Reason: Call ended
Deepgram WebSocket closed. Code: 1000, Reason: Call ended
📊 Call duration calculated: 81 seconds
✅ Call completion logged on close: CA662de520de3ef34613b753423f449ce3
🔌 Closing Deepgram connection and cleaning up resources
🔇 Silence tracking cleaned up
🧹 CLEANUP: Cleaning up connection state for call CA662de520de3ef34613b753423f449ce3
ℹ️ Deepgram connection already closed or not open
🗑️ Session cleared for call CA662de520de3ef34613b753423f449ce3