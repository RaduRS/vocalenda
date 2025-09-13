
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T09:02:32.208Z] 🏢 Business config exists: true
[2025-09-13T09:02:32.208Z] 🌐 WebSocket state: 1
🔧 Function call received: {
  "function_name": "get_available_slots",
  "function_call_id": "call_9BZW9GhI6psjaOiUXD7YwTL7",
  "parameters": {
    "date": "2025-09-13",
    "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
  }
}
[2025-09-13T09:02:32.208Z] 🚀 STARTING getAvailableSlots with params: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
[2025-09-13T09:02:32.208Z] 🏢 Business config: Gents Barbershop
[2025-09-13T09:02:32.208Z] 📋 Services count: 2
[2025-09-13T09:02:32.208Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-13T09:02:32.208Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-13",
  "service_id": "4395775e-fa81-4a69-8425-e46c3853dea4"
}
📅 Business open on Saturday
📋 Using service: haircut (Duration: 30 minutes)
[2025-09-13T09:02:32.208Z] 🌐 About to make API call:
[2025-09-13T09:02:32.208Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/availability?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=4395775e-fa81-4a69-8425-e46c3853dea4&date=2025-09-13
[2025-09-13T09:02:32.208Z] 🔑 Secret exists: true
[2025-09-13T09:02:32.208Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-13T09:02:32.208Z] 📋 Service ID: 4395775e-fa81-4a69-8425-e46c3853dea4
[2025-09-13T09:02:32.208Z] 📅 Date: 2025-09-13
[2025-09-13T09:02:32.208Z] 📡 API Response status: 404
[2025-09-13T09:02:32.208Z] 📡 API Response ok: false
[2025-09-13T09:02:32.208Z] 📅 Calendar API response: {
  "error": "Business not found"
}
[2025-09-13T09:02:32.208Z] 📊 Response type: object
[2025-09-13T09:02:32.208Z] 📊 Has slots: false
[2025-09-13T09:02:32.208Z] 📊 Slots count: 0
❌ Calendar API error: { error: 'Business not found' }
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_9BZW9GhI6psjaOiUXD7YwTL7","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425...
Message string: {"type":"History","function_calls":[{"id":"call_9BZW9GhI6psjaOiUXD7YwTL7","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"error\":\"Business not found\"}"}]}
[2025-09-13T09:02:33.991Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_9BZW9GhI6psjaOiUXD7YwTL7","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}","response":"{\"error\":\"Business not found\"}"}]}
[2025-09-13T09:02:33.991Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_9BZW9GhI6psjaOiUXD7YwTL7",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-13\",\"service_id\":\"4395775e-fa81-4a69-8425-e46c3853dea4\"}",
      "response": "{\"error\":\"Business not found\"}"
    }
  ]
}
[2025-09-13T09:02:33.991Z] === END PARSED JSON ===
[2025-09-13T09:02:33.991Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:02:33.991Z] 📜 HISTORY: Message logged
[2025-09-13T09:02:32.207Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-13T09:02:34.848Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-13T09:02:32.207Z] ▶️ SILENCE: Resuming timer - Function processing completed
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems there is an issue with the system checking availability for today."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems there is an issue with the system checking availability for today."}
[2025-09-13T09:02:34.907Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems there is an issue with the system checking availability for today."}
[2025-09-13T09:02:34.907Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems there is an issue with the system checking availability for today."
}
[2025-09-13T09:02:34.907Z] === END PARSED JSON ===
[2025-09-13T09:02:34.907Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-13T09:02:34.907Z] 💭 CONVERSATION_TEXT: It seems there is an issue with the system checking availability for today.
[2025-09-13T09:02:34.907Z] 🔍 ConversationText role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Added AI: It seems there is an issue with the system checking availability for today.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems there is an issue with the system checking availability for today."}...
Message string: {"type":"History","role":"assistant","content":"It seems there is an issue with the system checking availability for today."}
[2025-09-13T09:02:34.908Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems there is an issue with the system checking availability for today."}
[2025-09-13T09:02:34.908Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems there is an issue with the system checking availability for today."
}
[2025-09-13T09:02:34.908Z] === END PARSED JSON ===
[2025-09-13T09:02:34.908Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-13T09:02:34.908Z] 📜 HISTORY: Message logged
[2025-09-13T09:02:34.908Z] 🔍 History role: 'assistant' -> Speaker: 'AI'
📝 TRANSCRIPT: Skipping duplicate AI: It seems there is an issue with the system checking availability for today.
[2025-09-13T09:02:34.908Z] 📝 Added transcript: [AI] It seems there is an issue with the system checking availability for today.
[2025-09-13T09:02:34.908Z] 🎵 Starting audio stream - feeding buffer
[2025-09-13T09:02:36.603Z] 💓 KEEPALIVE: Sent to Deepgram
[2025-09-13T09:02:36.538Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"Could you please provide another time you prefer for your haircut?"}...
Message string: {"type":"ConversationText","role":"assistant","content":"Could you please provide another time you prefer for your haircut?"}
[2025-09-13T09:02:39.070Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"Could you please provide another time you prefer for your haircut?"}
[2025-09-13T09:02:39.070Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "Could you please provide anothe