}
[2025-09-16T13:06:56.441Z] === END PARSED JSON ===
[2025-09-16T13:06:56.441Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T13:06:56.441Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T13:06:56.441Z] 🔇 SILENCE: Started tracking
[2025-09-16T13:06:56.441Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
[2025-09-16T13:06:56.441Z] 🔇 SILENCE_CHECK: 1000ms of silence
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"user","content":"Okay. Let's go with three thirty PM then."}...
Message string: {"type":"ConversationText","role":"user","content":"Okay. Let's go with three thirty PM then."}
[2025-09-16T13:06:58.259Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"user","content":"Okay. Let's go with three thirty PM then."}
[2025-09-16T13:06:58.259Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "user",
  "content": "Okay. Let's go with three thirty PM then."
}
[2025-09-16T13:06:58.259Z] === END PARSED JSON ===
[2025-09-16T13:06:58.259Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T13:06:58.259Z] 💭 CONVERSATION_TEXT: Okay. Let's go with three thirty PM then.
[2025-09-16T13:06:58.259Z] 🔍 ConversationText role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Added User: Okay. Let's go with three thirty PM then.
📨 Received Deepgram JSON message: {"type":"History","role":"user","content":"Okay. Let's go with three thirty PM then."}...
Message string: {"type":"History","role":"user","content":"Okay. Let's go with three thirty PM then."}
[2025-09-16T13:06:58.262Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"user","content":"Okay. Let's go with three thirty PM then."}
[2025-09-16T13:06:58.262Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "user",
  "content": "Okay. Let's go with three thirty PM then."
}
[2025-09-16T13:06:58.262Z] === END PARSED JSON ===
[2025-09-16T13:06:58.262Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T13:06:58.262Z] 📜 HISTORY: Message logged
[2025-09-16T13:06:58.262Z] 🔍 History role: 'user' -> Speaker: 'User'
📝 TRANSCRIPT: Skipping duplicate User: Okay. Let's go with three thirty PM then.
[2025-09-16T13:06:58.262Z] 📝 Added transcript: [User] Okay. Let's go with three thirty PM then.
[2025-09-16T13:06:56.441Z] 🔇 SILENCE_CHECK: 2000ms of silence
📨 Received Deepgram JSON message: {"type":"FunctionCallRequest","functions":[{"id":"call_HnuFSj5PgBITRqESd5JvlyXa","name":"update_booking","arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}...
Message string: {"type":"FunctionCallRequest","functions":[{"id":"call_HnuFSj5PgBITRqESd5JvlyXa","name":"update_booking","arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T13:06:59.182Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"FunctionCallRequest","functions":[{"id":"call_HnuFSj5PgBITRqESd5JvlyXa","name":"update_booking","arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","client_side":true}]}
[2025-09-16T13:06:59.182Z] === PARSED DEEPGRAM JSON ===
{
  "type": "FunctionCallRequest",
  "functions": [
    {
      "id": "call_HnuFSj5PgBITRqESd5JvlyXa",
      "name": "update_booking",
      "arguments": "{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
      "client_side": true
    }
  ]
}
[2025-09-16T13:06:59.182Z] === END PARSED JSON ===
[2025-09-16T13:06:59.182Z] 🎯 DEEPGRAM EVENT TYPE: FunctionCallRequest
[2025-09-16T13:06:59.182Z] 🚨🚨 FUNCTION_CALL_REQUEST DETECTED! 🚨🚨
[2025-09-16T13:06:59.182Z] ✅ SUCCESS: AI requesting function calls!
[2025-09-16T13:06:59.182Z] 📋 Functions: [
  {
    "id": "call_HnuFSj5PgBITRqESd5JvlyXa",
    "name": "update_booking",
    "arguments": "{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
    "client_side": true
  }
]
[2025-09-16T13:06:59.182Z] ⏸️ SILENCE: Pausing timer - Processing function calls
[2025-09-16T13:06:59.182Z] ⏸️ KEEPALIVE: Paused for function processing
[2025-09-16T13:06:59.182Z] 🔧 Processing function: update_booking
[2025-09-16T13:06:59.182Z] 🔧 CALLING: handleFunctionCall for update_booking...
📝 Session updated for call CA7a1c38b7f1a2163f6cfc8482910614c1: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 15,
  allFutureBookings: [
    {
      id: '58e05e60-5d80-40c3-8f41-661665a82dc9',
      appointment_date: '2025-09-16',
      start_time: '14:45:00',
      end_time: '14:00:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'ee2b24b5-eff8-463b-ac9e-bfcf8d803a5a',
      appointment_date: '2025-09-17',
      start_time: '12:45:00',
      end_time: '12:00:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '7b1b206e-f6b2-4d65-8d31-9af86508181d',
      appointment_date: '2025-09-17',
      start_time: '13:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'adaf6700-7750-45e7-86cb-9e42707b4654',
      appointment_date: '2025-09-17',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '4ca68442-2f04-486e-998f-9e945845cc4b',
      appointment_date: '2025-09-17',
      start_time: '14:00:00',
      end_time: '13:15:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169',
      appointment_date: '2025-09-17',
      start_time: '14:30:00',
      end_time: '15:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '8eef65c2-b5f0-4a68-bfcf-5f38060af28e',
      appointment_date: '2025-09-17',
      start_time: '15:00:00',
      end_time: '15:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '549d88af-78a4-46be-9c62-e6802ed98d58',
      appointment_date: '2025-09-17',
      start_time: '16:15:00',
      end_time: '16:45:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '2c8e4ef5-4171-474f-82ed-6ec2cdeb7a44',
      appointment_date: '2025-09-18',
      start_time: '10:30:00',
      end_time: '10:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '01f99044-3ad7-464a-a805-9f8bbe64262d',
      appointment_date: '2025-09-18',
      start_time: '12:30:00',
      end_time: '11:45:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'e7f7be75-9baf-480f-8627-881d147402d5',
      appointment_date: '2025-09-18',
      start_time: '12:45:00',
      end_time: '13:15:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'e0f0cf83-ddaa-40b9-aa2d-4005aa012b2d',
      appointment_date: '2025-09-18',
      start_time: '13:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '99de44fe-c940-4b73-a60d-93c0d1ca6712',
      appointment_date: '2025-09-18',
      start_time: '14:45:00',
      end_time: '15:15:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'f75e398f-07d2-4881-921c-4cf625546104',
      appointment_date: '2025-09-18',
      start_time: '15:30:00',
      end_time: '16:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '564c89b4-9357-4831-bd83-f695445e586b',
      appointment_date: '2025-09-18',
      start_time: '16:00:00',
      end_time: '16:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T13:06:37.370Z'
}
[2025-09-16T13:06:59.183Z] 🚀 STARTING handleFunctionCall
[2025-09-16T13:06:59.183Z] 🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_HnuFSj5PgBITRqESd5JvlyXa",
  "parameters": {
    "new_date": "2025-09-17",
    "new_time": "15:30"
  }
}
[2025-09-16T13:06:59.183Z] 📋 Function name: update_booking
[2025-09-16T13:06:59.183Z] 📊 Parameters: {
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
[2025-09-16T13:06:59.183Z] 🏢 Business config exists: true
[2025-09-16T13:06:59.183Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "update_booking",
  "function_call_id": "call_HnuFSj5PgBITRqESd5JvlyXa",
  "parameters": {
    "new_date": "2025-09-17",
    "new_time": "15:30"
  }
}
📝 updateBooking called with params: {
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
📋 Session data: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 15,
  allFutureBookings: [
    {
      id: '58e05e60-5d80-40c3-8f41-661665a82dc9',
      appointment_date: '2025-09-16',
      start_time: '14:45:00',
      end_time: '14:00:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'ee2b24b5-eff8-463b-ac9e-bfcf8d803a5a',
      appointment_date: '2025-09-17',
      start_time: '12:45:00',
      end_time: '12:00:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '7b1b206e-f6b2-4d65-8d31-9af86508181d',
      appointment_date: '2025-09-17',
      start_time: '13:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'adaf6700-7750-45e7-86cb-9e42707b4654',
      appointment_date: '2025-09-17',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '4ca68442-2f04-486e-998f-9e945845cc4b',
      appointment_date: '2025-09-17',
      start_time: '14:00:00',
      end_time: '13:15:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169',
      appointment_date: '2025-09-17',
      start_time: '14:30:00',
      end_time: '15:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '8eef65c2-b5f0-4a68-bfcf-5f38060af28e',
      appointment_date: '2025-09-17',
      start_time: '15:00:00',
      end_time: '15:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '549d88af-78a4-46be-9c62-e6802ed98d58',
      appointment_date: '2025-09-17',
      start_time: '16:15:00',
      end_time: '16:45:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '2c8e4ef5-4171-474f-82ed-6ec2cdeb7a44',
      appointment_date: '2025-09-18',
      start_time: '10:30:00',
      end_time: '10:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '01f99044-3ad7-464a-a805-9f8bbe64262d',
      appointment_date: '2025-09-18',
      start_time: '12:30:00',
      end_time: '11:45:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'e7f7be75-9baf-480f-8627-881d147402d5',
      appointment_date: '2025-09-18',
      start_time: '12:45:00',
      end_time: '13:15:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'e0f0cf83-ddaa-40b9-aa2d-4005aa012b2d',
      appointment_date: '2025-09-18',
      start_time: '13:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '99de44fe-c940-4b73-a60d-93c0d1ca6712',
      appointment_date: '2025-09-18',
      start_time: '14:45:00',
      end_time: '15:15:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'f75e398f-07d2-4881-921c-4cf625546104',
      appointment_date: '2025-09-18',
      start_time: '15:30:00',
      end_time: '16:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '564c89b4-9357-4831-bd83-f695445e586b',
      appointment_date: '2025-09-18',
      start_time: '16:00:00',
      end_time: '16:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T13:06:37.370Z'
}
⚠️ Using fallback session data - this may update the wrong appointment
🔍 Current booking details missing, attempting database lookup...
✅ Found existing booking from database: { date: '2025-09-16', time: '14:45:00', service: 'beard trim' }
🔄 Using customer info: {
  customerName: 'Marco',
  currentDate: '2025-09-16',
  currentTime: '14:45:00'
}
📞 Caller phone: +447468306825
👤 Customer: Marco
📅 Booking: 2025-09-16 at 14:45:00
📝 Session updated for call CA7a1c38b7f1a2163f6cfc8482910614c1: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 15,
  allFutureBookings: [
    {
      id: '58e05e60-5d80-40c3-8f41-661665a82dc9',
      appointment_date: '2025-09-16',
      start_time: '14:45:00',
      end_time: '14:00:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'ee2b24b5-eff8-463b-ac9e-bfcf8d803a5a',
      appointment_date: '2025-09-17',
      start_time: '12:45:00',
      end_time: '12:00:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '7b1b206e-f6b2-4d65-8d31-9af86508181d',
      appointment_date: '2025-09-17',
      start_time: '13:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'adaf6700-7750-45e7-86cb-9e42707b4654',
      appointment_date: '2025-09-17',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '4ca68442-2f04-486e-998f-9e945845cc4b',
      appointment_date: '2025-09-17',
      start_time: '14:00:00',
      end_time: '13:15:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169',
      appointment_date: '2025-09-17',
      start_time: '14:30:00',
      end_time: '15:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '8eef65c2-b5f0-4a68-bfcf-5f38060af28e',
      appointment_date: '2025-09-17',
      start_time: '15:00:00',
      end_time: '15:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '549d88af-78a4-46be-9c62-e6802ed98d58',
      appointment_date: '2025-09-17',
      start_time: '16:15:00',
      end_time: '16:45:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '2c8e4ef5-4171-474f-82ed-6ec2cdeb7a44',
      appointment_date: '2025-09-18',
      start_time: '10:30:00',
      end_time: '10:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '01f99044-3ad7-464a-a805-9f8bbe64262d',
      appointment_date: '2025-09-18',
      start_time: '12:30:00',
      end_time: '11:45:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'e7f7be75-9baf-480f-8627-881d147402d5',
      appointment_date: '2025-09-18',
      start_time: '12:45:00',
      end_time: '13:15:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'e0f0cf83-ddaa-40b9-aa2d-4005aa012b2d',
      appointment_date: '2025-09-18',
      start_time: '13:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '99de44fe-c940-4b73-a60d-93c0d1ca6712',
      appointment_date: '2025-09-18',
      start_time: '14:45:00',
      end_time: '15:15:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'f75e398f-07d2-4881-921c-4cf625546104',
      appointment_date: '2025-09-18',
      start_time: '15:30:00',
      end_time: '16:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '564c89b4-9357-4831-bd83-f695445e586b',
      appointment_date: '2025-09-18',
      start_time: '16:00:00',
      end_time: '16:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T13:06:37.370Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: '2025-09-16',
      currentTime: '14:45:00',
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
  "current_date": "2025-09-16",
  "current_time": "14:45:00",
  "caller_phone": "+447468306825",
  "sessionId": "CA7a1c38b7f1a2163f6cfc8482910614c1",
  "new_date": "2025-09-17",
  "new_time": "15:30"
}
❌ Update booking API error: 409 {"error":"The time slot 2025-09-17 at 15:30 is not available. Please select another time.","fillerPhrase":"No problem, let me update that for you...","sessionId":"CA7a1c38b7f1a2163f6cfc8482910614c1"}
✅ Sending update_booking response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_HnuFSj5PgBITRqESd5JvlyXa","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","response":"{\"e...
Message string: {"type":"History","function_calls":[{"id":"call_HnuFSj5PgBITRqESd5JvlyXa","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The time slot 2025-09-17 at 15:30 is not available. Please select another time.\\\",\\\"fillerPhrase\\\":\\\"No problem, let me update that for you...\\\",\\\"sessionId\\\":\\\"CA7a1c38b7f1a2163f6cfc8482910614c1\\\"}\"}"}]}
[2025-09-16T13:07:02.973Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_HnuFSj5PgBITRqESd5JvlyXa","name":"update_booking","client_side":true,"arguments":"{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}","response":"{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The time slot 2025-09-17 at 15:30 is not available. Please select another time.\\\",\\\"fillerPhrase\\\":\\\"No problem, let me update that for you...\\\",\\\"sessionId\\\":\\\"CA7a1c38b7f1a2163f6cfc8482910614c1\\\"}\"}"}]}
[2025-09-16T13:07:02.973Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_HnuFSj5PgBITRqESd5JvlyXa",
      "name": "update_booking",
      "client_side": true,
      "arguments": "{\"new_date\":\"2025-09-17\",\"new_time\":\"15:30\"}",
      "response": "{\"error\":\"Failed to update booking: {\\\"error\\\":\\\"The time slot 2025-09-17 at 15:30 is not available. Please select another time.\\\",\\\"fillerPhrase\\\":\\\"No problem, let me update that for you...\\\",\\\"sessionId\\\":\\\"CA7a1c38b7f1a2163f6cfc8482910614c1\\\"}\"}"
    }
  ]
}
[2025-09-16T13:07:02.973Z] === END PARSED JSON ===
[2025-09-16T13:07:02.973Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T13:07:02.973Z] 📜 HISTORY: Message logged
[2025-09-16T13:06:59.182Z] ✅ COMPLETED: handleFunctionCall for update_booking
[2025-09-16T13:07:03.826Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-16T13:06:59.182Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems 3:30 PM on Wednesday, the 17th just got taken."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems 3:30 PM on Wednesday, the 17th just got taken."}
[2025-09-16T13:07:04.104Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems 3:30 PM on Wednesday, the 17th just got taken."}
[2025-09-16T13:07:04.104Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems 3:30 PM on Wednesday, the 17th just got taken."
}
[2025-09-16T13:07:04.104Z] === END PARSED JSON ===
[2025-09-16T13:07:04.104Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T13:07:04.104Z] 💭 CONVERSATION_TEXT: It seems 3:30 PM on Wednesday, the 17th just got taken.
[2025-09-16T13:07:04.104Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems 3:30 PM on Wednesday, the 17th just got taken.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems 3:30 PM on Wednesday, the 17th just got taken."}...
Message string: {"type":"History","role":"assistant","content":"It seems 3:30 PM on Wednesday, the 17th just got taken."}
[2025-09-16T13:07:04.104Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems 3:30 PM on Wednesday, the 17th just got taken."}
[2025-09-16T13:07:04.104Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems 3:30 PM on Wednesday, the 17th just got taken."
}
[2025-09-16T13:07:04.104Z] === END PARSED JSON ===
[2025-09-16T13:07:04.104Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T13:07:04.104Z] 📜 HISTORY: Message logged
[2025-09-16T13:07:04.104Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems 3:30 PM on Wednesday, the 17th just got taken.
[2025-09-16T13:07:04.104Z] 📝 Added transcript: [AI] It seems 3:30 PM on Wednesday, the 17th just got taken.
[2025-09-16T13:07:04.104Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T13:07:05.990Z] 🔇 Audio stream ended (timeout)
[2025-09-16T13:07:07.639Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"I still see 3:45 PM available on that day."}...
Message string: {"type":"ConversationText","role":"assistant","content":"I still see 3:45 PM available on that day."}
[2025-09-16T13:07:08.745Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"I still see 3:45 PM available on that day."}
[2025-09-16T13:07:08.745Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "I still see 3:45 PM available on that day."
}
[2025-09-16T13:07:08.745Z] === END PARSED JSON ===
[2025-09-16T13:07:08.745Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T13:07:08.745Z] 💭 CONVERSATION_TEXT: I still see 3:45 PM available on that day.
[2025-09-16T13:07:08.745Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: I still see 3:45 PM available on that day.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"I still see 3:45 PM available on that day."}...
Message string: {"type":"History","role":"assistant","content":"I still see 3:45 PM available on that day."}
[2025-09-16T13:07:08.745Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"I still see 3:45 PM available on that day."}
[2025-09-16T13:07:08.745Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "I still see 3:45 PM available on that day."
}
[2025-09-16T13:07:08.745Z] === END PARSED JSON ===
[2025-09-16T13:07:08.745Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T13:07:08.745Z] 📜 HISTORY: Message logged
[2025-09-16T13:07:08.745Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: I still see 3:45 PM available on that day.
[2025-09-16T13:07:08.745Z] 📝 Added transcript: [AI] I still see 3:45 PM available on that day.
[2025-09-16T13:07:08.746Z] 🎵 Starting audio stream - feeding buffer
[2025-09-16T13:07:08.894Z] 🔇 Audio stream ended (timeout)
[2025-09-16T13:07:11.640Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Would you like to book 3:45 PM instead?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Would you like to book 3:45 PM instead?"}
[2025-09-16T13:07:12.187Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Would you like to book 3:45 PM instead?"}
[2025-09-16T13:07:12.187Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Would you like to book 3:45 PM instead?"
}
[2025-09-16T13:07:12.187Z] === END PARSED JSON ===
[2025-09-16T13:07:12.187Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-16T13:07:12.187Z] 💭 CONVERSATION_TEXT: Would you like to book 3:45 PM instead?
[2025-09-16T13:07:12.187Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: Would you like to book 3:45 PM instead?
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"Would you like to book 3:45 PM instead?"}...
Message string: {"type":"History","role":"assistant","content":"Would you like to book 3:45 PM instead?"}
[2025-09-16T13:07:12.188Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"Would you like to book 3:45 PM instead?"}
[2025-09-16T13:07:12.188Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "Would you like to book 3:45 PM instead?"
}
[2025-09-16T13:07:12.188Z] === END PARSED JSON ===
[2025-09-16T13:07:12.188Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-16T13:07:12.188Z] 📜 HISTORY: Message logged
[2025-09-16T13:07:12.188Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: Would you like to book 3:45 PM instead?
[2025-09-16T13:07:12.188Z] 📝 Added transcript: [AI] Would you like to book 3:45 PM instead?
[2025-09-16T13:07:12.188Z] 🎵 Starting audio stream - feeding buffer
📨 Received Deepgram JSON message: {"type":"AgentAudioDone"}...
Message string: {"type":"AgentAudioDone"}
[2025-09-16T13:07:12.336Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"AgentAudioDone"}
[2025-09-16T13:07:12.336Z] === PARSED DEEPGRAM JSON ===
{
  "type": "AgentAudioDone"
}
[2025-09-16T13:07:12.336Z] === END PARSED JSON ===
[2025-09-16T13:07:12.336Z] 🎯 DEEPGRAM EVENT TYPE: AgentAudioDone
[2025-09-16T13:07:12.336Z] 🔇 AGENT_AUDIO_DONE: AI finished sending audio
[2025-09-16T13:07:12.336Z] 🔇 SILENCE: Started tracking
[2025-09-16T13:07:12.336Z] ✅ Agent speech ended. Pacer will now send silence until next utterance.
Media stream stopped
📞 Logging call completion: CA7a1c38b7f1a2163f6cfc8482910614c1
✅ Call completion logged: CA7a1c38b7f1a2163f6cfc8482910614c1
📱 Media stream stopped - sending SMS confirmations for CA7a1c38b7f1a2163f6cfc8482910614c1
📞 endCall called with params: {
  "reason": "media stream stopped"
}
📞 Call SID: CA7a1c38b7f1a2163f6cfc8482910614c1
📋 Session data before ending call: {
  callerPhone: '+447468306825',
  customerName: 'Marco',
  hasExistingBookings: true,
  existingBookingsCount: 15,
  allFutureBookings: [
    {
      id: '58e05e60-5d80-40c3-8f41-661665a82dc9',
      appointment_date: '2025-09-16',
      start_time: '14:45:00',
      end_time: '14:00:00',
⚠️ Could not link update to any appointment: {
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
  customerName: 'Marco',
  currentDate: '2025-09-16',
  currentTime: '14:45:00',
  newDate: '2025-09-17',
  newTime: '15:30',
  newServiceId: undefined,
  type: 'update'
}
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'ee2b24b5-eff8-463b-ac9e-bfcf8d803a5a',
      appointment_date: '2025-09-17',
      start_time: '12:45:00',
      end_time: '12:00:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '7b1b206e-f6b2-4d65-8d31-9af86508181d',
      appointment_date: '2025-09-17',
      start_time: '13:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'adaf6700-7750-45e7-86cb-9e42707b4654',
      appointment_date: '2025-09-17',
      start_time: '14:00:00',
      end_time: '13:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '4ca68442-2f04-486e-998f-9e945845cc4b',
      appointment_date: '2025-09-17',
      start_time: '14:00:00',
      end_time: '13:15:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'ca3962db-ec7f-42b3-a85e-bd0d508ec169',
      appointment_date: '2025-09-17',
      start_time: '14:30:00',
      end_time: '15:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '8eef65c2-b5f0-4a68-bfcf-5f38060af28e',
      appointment_date: '2025-09-17',
      start_time: '15:00:00',
      end_time: '15:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '549d88af-78a4-46be-9c62-e6802ed98d58',
      appointment_date: '2025-09-17',
      start_time: '16:15:00',
      end_time: '16:45:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '2c8e4ef5-4171-474f-82ed-6ec2cdeb7a44',
      appointment_date: '2025-09-18',
      start_time: '10:30:00',
      end_time: '10:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '01f99044-3ad7-464a-a805-9f8bbe64262d',
      appointment_date: '2025-09-18',
      start_time: '12:30:00',
      end_time: '11:45:00',
      service_name: 'beard trim',
      service_id: '63555ab0-f0ac-48c3-a2b2-766356aeb8f4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'e7f7be75-9baf-480f-8627-881d147402d5',
      appointment_date: '2025-09-18',
      start_time: '12:45:00',
      end_time: '13:15:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'e0f0cf83-ddaa-40b9-aa2d-4005aa012b2d',
      appointment_date: '2025-09-18',
      start_time: '13:30:00',
      end_time: '14:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '99de44fe-c940-4b73-a60d-93c0d1ca6712',
      appointment_date: '2025-09-18',
      start_time: '14:45:00',
      end_time: '15:15:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: 'f75e398f-07d2-4881-921c-4cf625546104',
      appointment_date: '2025-09-18',
      start_time: '15:30:00',
      end_time: '16:00:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    },
    {
      id: '564c89b4-9357-4831-bd83-f695445e586b',
      appointment_date: '2025-09-18',
      start_time: '16:00:00',
      end_time: '16:30:00',
      service_name: 'haircut',
      service_id: '4395775e-fa81-4a69-8425-e46c3853dea4',
      customer_name: 'Marco',
      customer_phone: '+447468306825',
      status: 'confirmed'
    }
  ],
  lastCheckedDate: '2025-09-17',
  lastCheckedTimestamp: '2025-09-16T13:06:37.370Z',
  bookings: [
    {
      customerName: 'Marco',
      currentDate: '2025-09-16',
      currentTime: '14:45:00',
      newDate: '2025-09-17',
      newTime: '15:30',
      newServiceId: undefined,
      type: 'update'
    }
  ],
  lastBookingDate: '2025-09-17',
  lastBookingTime: '15:30'
}
📞 Attempting to end call with SID: CA7a1c38b7f1a2163f6cfc8482910614c1
📝 Reason: media stream stopped
[2025-09-16T13:07:12.336Z] 🔇 SILENCE_CHECK: 1000ms of silence
✅ Call ended successfully: completed
🗑️ Session cleared for call CA7a1c38b7f1a2163f6cfc8482910614c1
✅ SMS confirmations sent on media stop: CA7a1c38b7f1a2163f6cfc8482910614c1
✅ Saved transcript for call CA7a1c38b7f1a2163f6cfc8482910614c1 (22 entries)
🔌 Closing Deepgram connection and cleaning up resources