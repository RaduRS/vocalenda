59.697Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:13:59.697Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:13:59.697Z] 📋 Functions: [
  {
    "id": "call_gNNCbcKr438XoKVTtzCSFUZM",
    "name": "get_available_slots",
    "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
    "client_side": true
  }
]
[2025-09-13T08:13:59.697Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:13:59.698Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:13:59.697Z] 🔧 Processing function: get_available_slots
[2025-09-13T08:13:59.697Z] 🔧 CALLING: handleFunctionCall for get_available_slots...
📝 Session updated for call CAb25988b6a20a9ba657fad91a0e282afd: { callerPhone: '+447468306825' }
[2025-09-13T08:13:59.698Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:13:59.698Z] 🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_gNNCbcKr438XoKVTtzCSFUZM",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
  }
}
[2025-09-13T08:13:59.698Z] 📋 Function name: get_available_slots
[2025-09-13T08:13:59.698Z] 📊 Parameters: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T08:13:59.698Z] 🏢 Business config exists: true
[2025-09-13T08:13:59.698Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_gNNCbcKr438XoKVTtzCSFUZM",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
  }
}
[2025-09-13T08:13:59.698Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T08:13:59.698Z] 🏢 Business config: Gents Barbershop
[2025-09-13T08:13:59.698Z] 📋 Services count: 2
[2025-09-13T08:13:59.698Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-13T08:13:59.698Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
📅 Business open on Saturday
📋 Using service: haircut (Duration: 30 minutes)
[2025-09-13T08:13:59.698Z] 🌐 About to make API call:
[2025-09-13T08:13:59.698Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/slots?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-13
[2025-09-13T08:13:59.698Z] 🔑 Secret exists: true
[2025-09-13T08:13:59.698Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-13T08:13:59.698Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-13T08:13:59.698Z] 📅 Date: 2025-09-13
[2025-09-13T08:13:59.698Z] 📡 API Response status: 200
[2025-09-13T08:13:59.698Z] 📡 API Response ok: true
[2025-09-13T08:13:59.698Z] 📅 Calendar API response: {
  "slots": [
    {
      "start": "2025-09-13T12:00:00.000Z",
      "end": "2025-09-13T12:30:00.000Z",
      "startTime": "12:00",
      "endTime": "12:30"
    },
    {
      "start": "2025-09-13T12:15:00.000Z",
      "end": "2025-09-13T12:45:00.000Z",
      "startTime": "12:15",
      "endTime": "12:45"
    },
    {
      "start": "2025-09-13T12:30:00.000Z",
      "end": "2025-09-13T13:00:00.000Z",
      "startTime": "12:30",
      "endTime": "13:00"
    },
    {
      "start": "2025-09-13T12:45:00.000Z",
      "end": "2025-09-13T13:15:00.000Z",
      "startTime": "12:45",
      "endTime": "13:15"
    },
    {
      "start": "2025-09-13T13:00:00.000Z",
      "end": "2025-09-13T13:30:00.000Z",
      "startTime": "13:00",
      "endTime": "13:30"
    },
    {
      "start": "2025-09-13T13:15:00.000Z",
      "end": "2025-09-13T13:45:00.000Z",
      "startTime": "13:15",
      "endTime": "13:45"
    },
    {
      "start": "2025-09-13T13:30:00.000Z",
      "end": "2025-09-13T14:00:00.000Z",
      "startTime": "13:30",
      "endTime": "14:00"
    },
    {
      "start": "2025-09-13T14:45:00.000Z",
      "end": "2025-09-13T15:15:00.000Z",
      "startTime": "14:45",
      "endTime": "15:15"
    },
    {
      "start": "2025-09-13T15:00:00.000Z",
      "end": "2025-09-13T15:30:00.000Z",
      "startTime": "15:00",
      "endTime": "15:30"
    },
    {
      "start": "2025-09-13T15:15:00.000Z",
      "end": "2025-09-13T15:45:00.000Z",
      "startTime": "15:15",
      "endTime": "15:45"
    },
    {
      "start": "2025-09-13T15:30:00.000Z",
      "end": "2025-09-13T16:00:00.000Z",
      "startTime": "15:30",
      "endTime": "16:00"
    }
  ]
}
[2025-09-13T08:13:59.698Z] 📊 Response type: object
[2025-09-13T08:13:59.698Z] 📊 Has slots: true
[2025-09-13T08:13:59.698Z] 📊 Slots count: 11
✅ Available time slots: [
  '12:00', '12:15',
  '12:30', '12:45',
  '13:00', '13:15',
  '13:30', '14:45',
  '15:00', '15:15',
  '15:30'
]
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_gNNCbcKr438XoKVTtzCSFUZM","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425...
Message string: {"type":"History","function_calls":[{"id":"call_gNNCbcKr438XoKVTtzCSFUZM","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T08:14:03.091Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_gNNCbcKr438XoKVTtzCSFUZM","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"}]}
[2025-09-13T08:14:03.091Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_gNNCbcKr438XoKVTtzCSFUZM",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
      "response": "{\"available_slots\":[\"12:00\",\"12:15\",\"12:30\",\"12:45\",\"13:00\",\"13:15\",\"13:30\",\"14:45\",\"15:00\",\"15:15\",\"15:30\"]}"
    }
  ]
}
[2025-09-13T08:14:03.091Z] === END PARSED JSON ===
[2025-09-13T08:14:03.091Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:14:03.091Z] 📜 HISTORY: Message logged
[2025-09-13T08:13:59.697Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T08:14:03.947Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T08:13:59.697Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I can book you for a haircut today at 3 PM."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I can book you for a haircut today at 3 PM."}
[2025-09-13T08:14:04.057Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I can book you for a haircut today at 3 PM."}
[2025-09-13T08:14:04.057Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I can book you for a haircut today at 3 PM."
}
[2025-09-13T08:14:04.057Z] === END PARSED JSON ===
[2025-09-13T08:14:04.057Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:14:04.057Z] 💭 CONVERSATION_TEXT: I can book you for a haircut today at 3 PM.
[2025-09-13T08:14:04.057Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I can book you for a haircut today at 3 PM.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I can book you for a haircut today at 3 PM."}...
Message string: {"type":"History","role":"assistant","content":"I can book you for a haircut today at 3 PM."}
[2025-09-13T08:14:04.057Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I can book you for a haircut today at 3 PM."}
[2025-09-13T08:14:04.057Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I can book you for a haircut today at 3 PM."
}
[2025-09-13T08:14:04.057Z] === END PARSED JSON ===
[2025-09-13T08:14:04.057Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:14:04.057Z] 📜 HISTORY: Message logged
[2025-09-13T08:14:04.057Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I can book you for a haircut today at 3 PM.
[2025-09-13T08:14:04.057Z] 📝 Added transcript: [AI] I can book you for a haircut today at 3 PM.
[2025-09-13T08:14:04.058Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T08:14:05.540Z] 🔇 Audio stream ended (timeout)
[2025-09-13T08:14:06.707Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T08:14:07.898Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T08:14:07.898Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-13T08:14:07.898Z] === END PARSED JSON ===
[2025-09-13T08:14:07.898Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:14:07.898Z] 💭 CONVERSATION_TEXT: Shall I confirm that?
[2025-09-13T08:14:07.898Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Shall I confirm that?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Shall I confirm that?"}...
Message string: {"type":"History","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T08:14:07.899Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Shall I confirm that?"}
[2025-09-13T08:14:07.899Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Shall I confirm that?"
}
[2025-09-13T08:14:07.899Z] === END PARSED JSON ===
[2025-09-13T08:14:07.899Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:14:07.899Z] 📜 HISTORY: Message logged
[2025-09-13T08:14:07.899Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Shall I confirm that?
[2025-09-13T08:14:07.899Z] 📝 Added transcript: [AI] Shall I confirm that?
[2025-09-13T08:14:07.899Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-13T08:14:07.934Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-13T08:14:07.934Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-13T08:14:07.934Z] === END PARSED JSON ===
[2025-09-13T08:14:07.934Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-13T08:14:07.934Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-13T08:14:07.934Z] 🔇 SILENCE: Started tracking
[2025-09-13T08:14:07.934Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-13T08:14:07.934Z] 🔇 SILENCE_CHECK: 1000ms of silence
[2025-09-13T08:14:07.934Z] 🔇 SILENCE_CHECK: 2000ms of silence
📨 Received Deepgram JSON message: {"type":"UserStartedSpeaking"}...
Message string: {"type":"UserStartedSpeaking"}
[2025-09-13T08:14:10.599Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"UserStartedSpeaking"}
[2025-09-13T08:14:10.599Z] === PARSED DEEPGRAM JSON ===
{
  "type": "UserStartedSpeaking"
}
[2025-09-13T08:14:10.599Z] === END PARSED JSON ===
[2025-09-13T08:14:10.599Z] 🎯 DEEPGRAM EVENT TYPE: UserStartedSpeaking
[2025-09-13T08:14:10.599Z] 🎤 USER_STARTED_SPEAKING: User began speaking
[2025-09-13T08:14:10.599Z] 🔄 BARGE_IN: Cleared Twilio audio queue for user speech
[2025-09-13T08:14:10.599Z] 🔄 SILENCE_RESET: User speaking, silence tracking reset
[2025-09-13T08:14:10.707Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Yes."}...
Message string: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T08:14:11.615Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Yes."}
[2025-09-13T08:14:11.615Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T08:14:11.615Z] === END PARSED JSON ===
[2025-09-13T08:14:11.615Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T08:14:11.615Z] 💭 CONVERSATION_TEXT: Yes.
[2025-09-13T08:14:11.615Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Yes.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Yes."}...
Message string: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T08:14:11.626Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Yes."}
[2025-09-13T08:14:11.626Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Yes."
}
[2025-09-13T08:14:11.626Z] === END PARSED JSON ===
[2025-09-13T08:14:11.626Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T08:14:11.626Z] 📜 HISTORY: Message logged
[2025-09-13T08:14:11.626Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Yes.
[2025-09-13T08:14:11.626Z] 📝 Added transcript: [User] Yes.
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_Jcr6oU71AaXXcVldhzplHQDw","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa8...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_Jcr6oU71AaXXcVldhzplHQDw","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:14:12.764Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_Jcr6oU71AaXXcVldhzplHQDw","name":"create_booking","arguments":"{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}","client_side":true}]}
[2025-09-13T08:14:12.764Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_Jcr6oU71AaXXcVldhzplHQDw",
      "name": "create_booking",
      "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
      "client_side": true
    }
  ]
}
[2025-09-13T08:14:12.764Z] === END PARSED JSON ===
[2025-09-13T08:14:12.764Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-13T08:14:12.764Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-13T08:14:12.764Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-13T08:14:12.764Z] 📋 Functions: [
  {
    "id": "call_Jcr6oU71AaXXcVldhzplHQDw",
    "name": "create_booking",
    "arguments": "{\"customer_name\":\"Marco\",\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\",\"time\":\"15:00\"}",
    "client_side": true
  }
]
[2025-09-13T08:14:12.764Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-13T08:14:12.764Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-13T08:14:12.764Z] 🔧 Processing function: create_booking
[2025-09-13T08:14:12.764Z] 🔧 CALLING: handleFunctionCall for create_booking...
📝 Session updated for call CAb25988b6a20a9ba657fad91a0e282afd: { callerPhone: '+447468306825' }
[2025-09-13T08:14:12.765Z] 🚀 STARTING handleFunctionCall
[2025-09-13T08:14:12.765Z] 🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_Jcr6oU71AaXXcVldhzplHQDw",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "15:00"
  }
}
[2025-09-13T08:14:12.765Z] 📋 Function name: create_booking
[2025-09-13T08:14:12.765Z] 📊 Parameters: {
  "customer_name": "Marco",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "15:00"
}
[2025-09-13T08:14:12.765Z] 🏢 Business config exists: true
[2025-09-13T08:14:12.765Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "create_booking",
  "function_call_id": "call_Jcr6oU71AaXXcVldhzplHQDw",
  "parameters": {
    "customer_name": "Marco",
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
    "time": "15:00"
  }
}
✅ TRACKING: Added function call ID call_Jcr6oU71AaXXcVldhzplHQDw to processed set
🎯 createBooking called with params: {
  "customer_name": "Marco",
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4",
  "time": "15:00"
}
📋 Available services: [
  { id: '4395775e-fa81-4a69-8425-e46c3853dea4', name: 'haircut' },
  { id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4', name: 'beard trim' }
]
✅ Booking - Service found: haircut (ID: 4395775e-fa81-4a69-8425-e46c3853dea4 )
📝 Session updated for call CAb25988b6a20a9ba657fad91a0e282afd: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  lastBookingDate: '2025-09-13',
  lastBookingTime: '15:00',
  lastServiceId: '4395775e-fa81-4a69-8425-e46c3853dea4',
  lastServiceName: 'haircut',
  lastServiceDuration: 30
}
🕐 Creating appointment for 2025-09-13 at 15:00 in timezone: Europe/London
📅 Parsed date: 2025-09-13 (Saturday)
🕐 Appointment datetime (UK local): 15:00:00
🕐 Business timezone: Europe/London
🕐 Start time: 15:00:00
🕐 End time: 15:30:00
📅 Day of week: Saturday
🔍 Checking slot availability before booking...