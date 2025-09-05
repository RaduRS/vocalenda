-09-05T13:15:09.397Z] 🏢 Business config: barber shop
[2025-09-05T13:15:09.397Z] 📋 Services count: 2
[2025-09-05T13:15:09.397Z] 🌐 Site URL: https://www.vocalenda.com
[2025-09-05T13:15:09.397Z] 🔑 Secret exists: true
🗓️ Getting available slots for: {
  "date": "2025-09-07",
  "service_id": "haircut"
}
📋 Found service by name 'haircut' -> ID: 94903f35-83a4-4627-af8e-0b19eaa3edcf
📋 Using service: haircut (Duration: 30 minutes)
[2025-09-05T13:15:09.397Z] 🌐 About to make API call:
[2025-09-05T13:15:09.397Z] 🔗 API URL: https://www.vocalenda.com/api/calendar/slots?businessId=1bb3c552-053f-40c4-b3f2-bdb51af87b52&serviceId=94903f35-83a4-4627-af8e-0b19eaa3edcf&date=2025-09-07
[2025-09-05T13:15:09.397Z] 🔑 Secret exists: true
[2025-09-05T13:15:09.397Z] 🏢 Business ID: 1bb3c552-053f-40c4-b3f2-bdb51af87b52
[2025-09-05T13:15:09.397Z] 📋 Service ID: 94903f35-83a4-4627-af8e-0b19eaa3edcf
[2025-09-05T13:15:09.397Z] 📅 Date: 2025-09-07
[2025-09-05T13:15:10.484Z] 🔇 Audio stream ended (timeout)
[2025-09-05T13:15:09.397Z] 📡 API Response status: 400
[2025-09-05T13:15:09.397Z] 📡 API Response ok: false
[2025-09-05T13:15:09.397Z] 📅 Calendar API response: {
  "error": "Business is closed on sundays"
}
[2025-09-05T13:15:09.397Z] 📊 Response type: object
[2025-09-05T13:15:09.397Z] 📊 Has slots: false
[2025-09-05T13:15:09.397Z] 📊 Slots count: 0
❌ Calendar API error: { error: 'Business is closed on sundays' }
✅ Sending get_available_slots response to Deepgram
✅ Function response sent successfully to Deepgram
🔄 Waiting for Deepgram to process the response...
📨 Received Deepgram JSON message: {"type":"History","function_calls":[{"id":"call_GGS55PkSGAqgf3GQBKGURUBb","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-07\",\"service_id\":\"haircut\"}","response":...
Message string: {"type":"History","function_calls":[{"id":"call_GGS55PkSGAqgf3GQBKGURUBb","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-07\",\"service_id\":\"haircut\"}","response":"{\"error\":\"Business is closed on sundays\"}"}]}
[2025-09-05T13:15:12.096Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","function_calls":[{"id":"call_GGS55PkSGAqgf3GQBKGURUBb","name":"get_available_slots","client_side":true,"arguments":"{\"date\":\"2025-09-07\",\"service_id\":\"haircut\"}","response":"{\"error\":\"Business is closed on sundays\"}"}]}
[2025-09-05T13:15:12.096Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "function_calls": [
    {
      "id": "call_GGS55PkSGAqgf3GQBKGURUBb",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-07\",\"service_id\":\"haircut\"}",
      "response": "{\"error\":\"Business is closed on sundays\"}"
    }
  ]
}
[2025-09-05T13:15:12.096Z] === END PARSED JSON ===
[2025-09-05T13:15:12.096Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-05T13:15:12.096Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-05T13:15:12.096Z] 📦 Full message: {
  "type": "History",
  "function_calls": [
    {
      "id": "call_GGS55PkSGAqgf3GQBKGURUBb",
      "name": "get_available_slots",
      "client_side": true,
      "arguments": "{\"date\":\"2025-09-07\",\"service_id\":\"haircut\"}",
      "response": "{\"error\":\"Business is closed on sundays\"}"
    }
  ]
}
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"One moment, please!"}...
Message string: {"type":"ConversationText","role":"assistant","content":"One moment, please!"}
[2025-09-05T13:15:12.647Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"One moment, please!"}
[2025-09-05T13:15:12.647Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "One moment, please!"
}
[2025-09-05T13:15:12.647Z] === END PARSED JSON ===
[2025-09-05T13:15:12.647Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-05T13:15:12.647Z] 💭 CONVERSATION_TEXT: One moment, please!
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"One moment, please!"}...
Message string: {"type":"History","role":"assistant","content":"One moment, please!"}
[2025-09-05T13:15:12.647Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"One moment, please!"}
[2025-09-05T13:15:12.647Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "One moment, please!"
}
[2025-09-05T13:15:12.647Z] === END PARSED JSON ===
[2025-09-05T13:15:12.647Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-05T13:15:12.647Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-05T13:15:12.647Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "One moment, please!"
}
[2025-09-05T13:15:12.647Z] 🎵 Starting audio stream - feeding buffer
[2025-09-05T13:15:09.395Z] ✅ COMPLETED: handleFunctionCall for get_available_slots
[2025-09-05T13:15:12.953Z] ▶️ KEEPALIVE: Resumed after function processing
[2025-09-05T13:15:12.677Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"[Checking availability...]"}...
Message string: {"type":"ConversationText","role":"assistant","content":"[Checking availability...]"}
[2025-09-05T13:15:14.048Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"[Checking availability...]"}
[2025-09-05T13:15:14.048Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "[Checking availability...]"
}
[2025-09-05T13:15:14.048Z] === END PARSED JSON ===
[2025-09-05T13:15:14.048Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-05T13:15:14.048Z] 💭 CONVERSATION_TEXT: [Checking availability...]
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"[Checking availability...]"}...
Message string: {"type":"History","role":"assistant","content":"[Checking availability...]"}
[2025-09-05T13:15:14.048Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"[Checking availability...]"}
[2025-09-05T13:15:14.048Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "[Checking availability...]"
}
[2025-09-05T13:15:14.048Z] === END PARSED JSON ===
[2025-09-05T13:15:14.048Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-05T13:15:14.048Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-05T13:15:14.048Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "[Checking availability...]"
}
[2025-09-05T13:15:14.049Z] 🎵 Starting audio stream - feeding buffer
[2025-09-05T13:15:14.079Z] 🔇 Audio stream ended (timeout)
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"It seems there was a misunderstanding."}...
Message string: {"type":"ConversationText","role":"assistant","content":"It seems there was a misunderstanding."}
[2025-09-05T13:15:15.450Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"It seems there was a misunderstanding."}
[2025-09-05T13:15:15.450Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "It seems there was a misunderstanding."
}
[2025-09-05T13:15:15.450Z] === END PARSED JSON ===
[2025-09-05T13:15:15.450Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-05T13:15:15.450Z] 💭 CONVERSATION_TEXT: It seems there was a misunderstanding.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"It seems there was a misunderstanding."}...
Message string: {"type":"History","role":"assistant","content":"It seems there was a misunderstanding."}
[2025-09-05T13:15:15.450Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"It seems there was a misunderstanding."}
[2025-09-05T13:15:15.450Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "It seems there was a misunderstanding."
}
[2025-09-05T13:15:15.450Z] === END PARSED JSON ===
[2025-09-05T13:15:15.450Z] 🎯 DEEPGRAM EVENT TYPE: History
[2025-09-05T13:15:15.450Z] ❓ UNKNOWN_EVENT_TYPE: History
[2025-09-05T13:15:15.450Z] 📦 Full message: {
  "type": "History",
  "role": "assistant",
  "content": "It seems there was a misunderstanding."
}
[2025-09-05T13:15:15.450Z] 🎵 Starting audio stream - feeding buffer
[2025-09-05T13:15:15.502Z] 🔇 Audio stream ended (timeout)
[2025-09-05T13:15:16.537Z] 💓 KEEPALIVE: Sent to Deepgram
📨 Received Deepgram JSON message: {"type":"ConversationText","role":"assistant","content":"This Thursday is September 7th, and the barber shop is closed that day."}...
Message string: {"type":"ConversationText","role":"assistant","content":"This Thursday is September 7th, and the barber shop is closed that day."}
[2025-09-05T13:15:17.691Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"ConversationText","role":"assistant","content":"This Thursday is September 7th, and the barber shop is closed that day."}
[2025-09-05T13:15:17.691Z] === PARSED DEEPGRAM JSON ===
{
  "type": "ConversationText",
  "role": "assistant",
  "content": "This Thursday is September 7th, and the barber shop is closed that day."
}
[2025-09-05T13:15:17.691Z] === END PARSED JSON ===
[2025-09-05T13:15:17.691Z] 🎯 DEEPGRAM EVENT TYPE: ConversationText
[2025-09-05T13:15:17.691Z] 💭 CONVERSATION_TEXT: This Thursday is September 7th, and the barber shop is closed that day.
📨 Received Deepgram JSON message: {"type":"History","role":"assistant","content":"This Thursday is September 7th, and the barber shop is closed that day."}...
Message string: {"type":"History","role":"assistant","content":"This Thursday is September 7th, and the barber shop is closed that day."}
[2025-09-05T13:15:17.691Z] 📨 JSON MESSAGE FROM DEEPGRAM: {"type":"History","role":"assistant","content":"This Thursday is September 7th, and the barber shop is closed that day."}
[2025-09-05T13:15:17.691Z] === PARSED DEEPGRAM JSON ===
{
  "type": "History",
  "role": "assistant",
  "content": "This Thursday is September 7th, and the barber shop is closed that day."
}
[2025-09-05T13:15:17.691Z] === END PARSED JSON ===
[2025-09-05T13:15:17.691Z] 🎯 DEEPGRAM EVENT TYPE: History