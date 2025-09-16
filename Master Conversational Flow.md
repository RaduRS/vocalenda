## **Vocalenda AI Receptionist: Master Conversational Flow Specification**

**Objective:** To create a seamless and intelligent voice booking experience. The AI should handle new bookings, updates, and cancellations efficiently while maintaining a friendly and professional tone.

**Guiding Principles:**

- **Efficiency:** Minimize questions and get to the user's goal as quickly as possible.
- **Clarity:** The user should always understand what is happening and what is needed from them.
- **Robustness:** Gracefully handle errors, unavailability, and complex user requests.

---

## **Part 1: Core System Rules & Definitions**

**A. Endpoints:** The system will use four primary API endpoints:

- `GET /bookings/availability`: Checks for open time slots. (google calendar ONLY)
- `POST /bookings/create`: Creates a new appointment.
- `PUT /bookings/update`: Updates an existing appointment. On the backend, this single endpoint will handle creating the new appointment and cancelling the old one atomically.
- `DELETE /bookings/cancel`: Cancels an existing appointment.

**B. Security Protocol (New Calls):** To update or cancel an appointment via a *new* phone call, the user **must** be calling from the phone number used to make the original booking. The AI will verify the user's identity by asking for their name, the service booked, and the original date and time of the appointment. The AI will never suggest correct answers.

**C. Session Memory (Same-Call Operations):** The AI **must** remember all details (name, service, date, time) of a booking made *within the same call*. If a user wants to update or cancel an appointment they just made, the AI will use this stored session data and **will not** ask for verification details again.

**D. "Filler" Conversation Strategy:** When the AI needs to perform a silent background check (e.g., calling `GET /bookings/availability`), it must immediately say a conversational phrase to fill the 5-8 second gap. The AI can dynamically choose from a set of phrases to sound more natural.

- **Examples:** "Okay, a [Service] on [Date] at [Time] for [Name], got it. Let me just pull up the schedule for you...", "Perfect, let me see if we have that time available for you now...", "One moment while I check that for you..."

---

## **Part 2: The Unified Call Flow**

This unified flow handles all scenarios based on user intent, which is inferred from their opening statements.

**Step 0: Call Start**

- User calls the business number.
- AI answers promptly.

**Step 1: Uninterruptible Greeting**

- AI delivers the custom greeting configured in the business's dashboard (e.g., "Thanks for calling Gents Barbershop, what can I get you booked in for?"). This initial audio cannot be interrupted by the user.

**Step 2: Intent Recognition & Information Gathering**

- The AI listens to the user's request.
    - **If the user provides details for a new booking** (e.g., "I need a haircut," "Do you have anything on Wednesday?"), the AI proceeds to the **`CREATE` Sub-Flow**.
    - **If the user explicitly states they want to change, move, or reschedule an appointment**, the AI proceeds to the **`UPDATE` Sub-Flow**.
    - **If the user explicitly states they want to cancel an appointment**, the AI proceeds to the **`CANCEL` Sub-Flow**.

---

## **Sub-Flow 1: CREATE Appointment**

**C-1. Information Gathering:**

- AI continues the conversation to gather the three key pieces of information: **Customer's First Name**, **Service Requested**, and **Desired Date & Time**.

**C-2. Silent Availability Check:**

- Once the AI has a specific date and time, it immediately initiates the "Filler" Conversation Strategy (per Core Rule D).
- In the background, the AI makes a silent call to `GET /bookings/availability` for the requested date.

**C-3. Presenting Options & Confirmation:**

- **If the requested slot IS available:** The AI stops the filler talk and asks for confirmation.
    - *AI:* "Good news, 10 AM is available. Shall I go ahead and book that for you?"
- **If the requested slot IS NOT available:** The AI presents the next 2-3 available options.
    - *AI:* "It looks like 10 AM is already taken, but I have 10:30 AM or 2 PM available. Would either of those work for you?"
    - The flow then returns to the beginning of this step (C-3) with the user's new time choice.

**C-4. Final Booking & Race Condition Handling:**

- **If the user confirms (e.g., "Yes, please"):**
    1. The AI makes a **second, final call** to `GET /bookings/availability` to ensure the slot wasn't taken in the last few seconds.
    2. **If still available:** The AI immediately calls `POST /bookings/create` to lock in the appointment.
    3. **If now taken:** The AI gracefully handles the race condition.
        - *AI:* "My apologies, it seems that slot was just filled while we were speaking. The next available time is [Next Slot]. Would you like to book that instead?"
        - The flow then returns to step C-3.

**C-5. Conclude and SMS:**

- Once the booking is successfully created, the AI proceeds to the master **`CONCLUDE CALL` Flow (Part 3)**.
- After the call ends, the system sends a confirmation SMS with the booked appointment details.

---

## **Sub-Flow 2: UPDATE Appointment**

**U-1. Session Check:**

- The AI first determines if a booking was made earlier *in the same call*.
    - **If YES (Same-Call Update):** Proceed directly to **Step U-3**, using stored session data.
    - **If NO (New Call Update):** Proceed to **Step U-2**.

**U-2. Verification (New Call Only):**

- The AI enforces the Security Protocol (Core Rule B).
    - *AI:* "Okay, I can help with that. To find your appointment, could you please tell me the name you booked under, the service, and the original date and time?"
- The AI gathers all details. If the user cannot provide them, the AI cannot proceed with the update.

**U-3. Gather New Details:**

- The AI asks for the **new desired Date & Time**.
- This sub-flow then merges with the **`CREATE` Sub-Flow, starting at Step C-2 (Silent Availability Check)**.

**U-4. Final Update:**

- When the user confirms a new, available slot (as in Step C-4), the AI makes a single call to `PUT /bookings/update`, providing the old booking identifiers and the new booking details.

**U-5. Conclude and SMS:**

- Once the update is successful, the AI proceeds to the master **`CONCLUDE CALL` Flow (Part 3)**.
- After the call ends, the system sends a confirmation SMS with the **new, updated** appointment details.

---

## **Sub-Flow 3: CANCEL Appointment**

**CN-1. Session Check:**

- The AI first determines if a booking was made earlier *in the same call*.
    - **If YES (Same-Call Cancel):** Proceed directly to **Step CN-3**, using stored session data.
    - **If NO (New Call Cancel):** Proceed to **Step CN-2**.

**CN-2. Verification (New Call Only):**

- The AI enforces the Security Protocol (Core Rule B), gathering the name, service, date, and time.

**CN-3. Execute Cancellation:**

- The AI makes a single call to `DELETE /bookings/cancel`.

**CN-4. Confirmation & Conclusion:**

- *AI:* "Okay, I have now cancelled your appointment. Is there anything else I can help you with today?"
- The AI then proceeds to the master **`CONCLUDE CALL` Flow (Part 3)**. No SMS is sent for cancellations.

---

## **Part 3: Master `CONCLUDE CALL` Flow**

- After any primary task (Create, Update, Cancel) is completed, the AI **must** ask: "Is there anything else I can help you with today?"
- **If the user has another request,** the flow returns to **Step 2 (Intent Recognition)**.
- **If the user indicates they are finished** (e.g., "No, that's all," "Goodbye"), the AI delivers the final farewell.
    - *AI:* "Thank you for calling [Business Name]. Have a great day!"
- Immediately after the AI finishes speaking the farewell, your server-side logic terminates the call.

---

## **Part 4: AI Implementation Guide for Filler Phrases**

**Important:** The booking APIs now return `fillerPhrase` and `sessionId` in their responses to support conversational flow during background operations.

**A. Filler Phrase Usage Pattern:**

When the AI needs to perform any booking operation (create, update, cancel, or availability check), it should:

1. **Immediately speak a filler phrase** to fill the 5-8 second processing gap
2. **Then call the appropriate API function** 
3. **Process the API response** and continue the conversation

**B. API Response Structure:**

All booking APIs now include these additional fields when `sessionId` is provided:
```json
{
  "success": true,
  "fillerPhrase": "Perfect, let me check our availability for that time...",
  "sessionId": "call_session_123",
  // ... other response data
}
```

**C. Implementation Example:**

```
User: "I'd like to cancel my appointment on Wednesday at 2 PM"
AI: "I understand, let me cancel that for you..." [SPEAKS IMMEDIATELY]
    [THEN calls cancelBooking API with sessionId]
    [API returns with fillerPhrase and result]
AI: "Your appointment has been cancelled. Is there anything else I can help you with?"
```

**D. Session Memory Integration:**

- Always pass `sessionId` to booking APIs to enable filler phrase generation
- The `sessionId` should be consistent throughout the entire call
- APIs use session data to personalize filler phrases with customer name, service, date, and time

**E. Filler Phrase Categories:**

- **Availability checks:** "Let me check our availability...", "One moment while I pull up the schedule..."
- **Booking creation:** "Perfect, securing that appointment for you...", "Great, I'm booking that in for you now..."
- **Updates:** "No problem, updating that for you...", "Of course, making that change now..."
- **Cancellations:** "I understand, let me cancel that for you...", "No problem at all, cancelling your appointment..."

The AI should use these filler phrases to maintain natural conversation flow during all background operations.