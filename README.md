# vocalenda - Voice Booking Platform

## What we're building

A multi-tenant voice booking platform: each business gets a dedicated Twilio phone number; callers speak naturally with an AI agent that can answer business questions from stored config and book/reschedule/cancel on the business's Google Calendar; SMS confirmations are sent from the same number.

## Tech Stack

- **Frontend/Backend**: Next.js (App Router) for UI/APIs
- **Authentication**: Clerk for user authentication
- **Database**: Supabase (Postgres/Storage) for multi-tenant data
- **Design**: shadcn - slate as default
- **Voice**: Twilio Voice Media Streams for real-time phone audio
- **Calendar**: Google Calendar OAuth per shop (platform-owned OAuth client)
- **AI**: OpenAI GPT-4o-mini for dialog + tool-calling
- **SMS**: Twilio Messaging

## High-level call flow

1. **Incoming Call**: Caller dials the shop's Twilio number
2. **Stream Setup**: Inbound webhook responds with TwiML that starts a real-time media stream to a WSS endpoint with custom parameters (e.g., shop_id)
3. **AI Session**: AI session starts with shop context (loaded from Supabase) and converses with barge‑in
4. **Tool Calling**: Tools are called to list services, compute availability on the shop's Google Calendar, and book/reschedule/cancel
5. **Confirmation**: Write to Postgres, create/update/delete the Google Calendar event, and send SMS from the same number
6. **Analytics**: Store transcript and events for QA/analytics

## Key constraints honored

- ❌ No PDFs/URLs or RAG in MVP; all shop facts live in the database
- 📅 Single Google Calendar per shop for MVP; 15‑minute slot grid; fixed service durations
- ⏰ No buffers; no policy cutoffs; 24/7 operation
- 📞 Caller ID used as default customer phone
- 💬 SMS confirmations always from the same E.164 number the caller dialed
- 🛠️ IDE: Trae; model: GPT-4o-mini for real-time dialog + tool-calling

## Implementation Phases

### Phase 1: Project setup
Next.js app with TypeScript, App Router, API route handlers, WSS server, strict env validation.

Clerk setup for user authentication and session management.

Supabase project for Postgres/Storage with RLS for multi-tenant isolation.

Environment:

Clerk: publishable key, secret key for user authentication.

Twilio: account SID, auth token, messaging sender, and a purchased number per shop; enable signature validation middleware.

Media stream WSS public URL.

Google OAuth client (platform-owned) with calendar.readonly + calendar.events and offline access for calendar integration.

Supabase URL/keys and service role key.

LLM keys and model identifiers (GPT-4o-mini).

### Phase 2: Data model (MVP)
```sql
-- Core tenant structure
tenants(id, name, slug, created_at)
users(id, email, role, tenant_id, created_at)
shops(id, tenant_id, name, address, phone_display, timezone, created_at)

-- Communication infrastructure
phone_numbers(id, shop_id, twilio_sid, e164_number, inbound_region, status)
services(id, shop_id, name, duration_min, price_minor, description)

-- OAuth and calendar integration
oauth_connections(id, shop_id, provider='google_calendar', access_token, refresh_token, expires_at, account_email, scopes) -- encrypted at rest
calendars(id, shop_id, provider_calendar_id, summary, is_primary=true)

-- Booking and analytics
appointments(id, shop_id, calendar_id, external_event_id, customer_name, customer_phone, service_id, start_utc, end_utc, status='confirmed'|'cancelled'|'tentative', source='phone'|'web'|'manual', notes)
transcripts(id, shop_id, call_sid, started_at, ended_at, tokens_in, tokens_out, cost_minor, summary, raw_json)
audit_events(id, shop_id, actor='agent'|'system'|'owner', type, payload_json, created_at)
```

**Notes:**
- RLS on shop_id/tenant_id across tables
- Single booking calendar per shop

### Phase 3: Auth and onboarding (owner portal)
App login with Clerk Auth for user authentication.

Setup wizard: shop profile (name, timezone, address), services (fixed durations), "Connect Google Calendar" (Google OAuth consent for calendar access → store tokens → select primary calendar), number linking (enter Twilio number provided by platform to bind to shop).

“Test call” action to verify availability lookup and booking end-to-end.

### Phase 4: Twilio voice entrypoint and streaming
Voice webhook (POST /api/voice/inbound):

Verify signature; look up shop by dialed To number.

Return TwiML `<Connect><Stream url="wss://…/api/voice/stream">` with custom parameters: shop_id, call_sid; optionally tenant_id and timezone.

Twilio Console: set the number’s voice webhook to that route; optionally set inbound processing region for latency/data locality.

### Phase 5: AI session and tool-calling
On WSS connect: parse custom parameters; load ShopConfig from Supabase (name, address, timezone, services, calendar_id, SMS number).

Initialize GPT-4o-mini with a concise system prompt:

Persona: professional, warm, concise, UK English.

Rules: use caller ID as customer_phone; confirm before booking; offer nearest 2–3 15‑minute slots; operate 24/7; never claim success without tool result.

Real-time loop: forward inbound audio → ASR/LLM; stream back TTS audio; support barge‑in; maintain per‑call state (intent, service, date/time, name, chosen slot, confirmation).

On end: persist transcript + metrics.

### Phase 6: Availability and booking tools (deterministic)
get_services(shop_id): return services and durations.

get_available_slots(shop_id, date_range, service_id):

Pull busy intervals from the selected Google Calendar.

Produce free slots on a 15‑minute grid with duration_min; no buffers; back‑to‑back allowed.

create_booking(shop_id, service_id, start_utc, customer_name, customer_phone):

end_utc = start_utc + duration_min.

Create Google Calendar event; persist appointments with external_event_id; return confirmation.

reschedule_booking(appointment_id, new_start_utc) → update Google event + DB.

cancel_booking(appointment_id) → delete Google event + update DB.

send_sms(shop_id, to_e164, message) → send via the same shop number.

get_current_time(tz) → timezone-aware resolution for “tomorrow at 4”.

Implementation details:

Idempotency keys for create/reschedule/cancel.

Conflict check right before writes to avoid race conditions.

Normalize times in UTC; convert to shop timezone for prompts/SMS.

### Phase 7: SMS confirmations (same number)
On create/reschedule/cancel, send a concise SMS from the shop’s number containing: service_name, date/time localized to shop timezone, shop_name/address, and basic instructions (“Reply to reschedule or call this number”).

Track delivery status for observability.

### Phase 8: Owner dashboard
Overview: calls today, successful bookings, average call length, conversion rate.

Appointments: list/search, open in Google Calendar via external_event_id.

Services: CRUD names and fixed durations.

Numbers: show assigned number, webhook health check, test call helper.

Integrations: Google OAuth status, reconnect, choose primary calendar.

Transcripts: searchable summaries for QA.

### Phase 9: Ops, security, and quality
Verify webhook signatures; rate-limit per number and per caller.

Encrypt Google tokens at rest; auto-refresh tokens; handle revocations by prompting reconnect.

Regional hosting near Twilio media region for latency; G.711 μ‑law audio both ways.

Robust error handling: if availability fails, apologize and propose manual callback; instrument retries and alerts.

24/7 behavior; if requested time is busy, propose nearest free options.

## Migration path to per-staff calendars (later)
Add staff and staff_services; allow multiple calendars per shop; update availability function to filter by staff; prompt for “preferred barber” and route accordingly.

No breaking schema changes needed; extend UI and tools.

## Developer notes for Trae + GPT-4o-mini
Keep the system prompt parameterized with shop fields injected at session start; keep it short to reduce latency.

Strongly type tool I/O; validate inputs before writing to Google Calendar; never let the model “assume” a booking.

Keep media pipeline minimal (no unnecessary transcoding) to preserve barge‑in responsiveness.

This is ready to hand to implementation: one platform-owned Google OAuth app for Calendar access per shop, one Twilio number per shop mapped in the database and configured to the same webhook, shop context passed via stream parameters and loaded from Supabase so the AI session is always shop‑aware.