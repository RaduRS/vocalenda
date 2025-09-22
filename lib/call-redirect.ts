/**
 * Shared utility for generating TwiML to redirect calls to bypass phone numbers
 * Used for both AI-to-human transfers and minutes exhaustion scenarios
 */

export interface RedirectOptions {
  bypassPhone: string;
  reason?: string;
  message?: string;
}

/**
 * Generate TwiML for redirecting calls to a bypass phone number
 * @param options - Redirect configuration
 * @returns TwiML string for call redirection
 */
export function generateRedirectTwiML(options: RedirectOptions): string {
  const { bypassPhone, reason = 'Call redirect', message } = options;
  
  // Default message based on context
  const defaultMessage = message || 'Please hold while I connect you to our team.';
  
  const twiml = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="aura-2-thalia-en">${defaultMessage}</Say>
  <Dial timeout="30" record="record-from-ringing">
    <Number>${bypassPhone}</Number>
  </Dial>
  <Say voice="aura-2-thalia-en">I'm sorry, but no one is available to take your call right now. Please try calling back later.</Say>
</Response>`;
  
  console.log(`📞 Generated redirect TwiML for ${bypassPhone}, reason: ${reason}`);
  
  return twiml;
}

/**
 * Generate TwiML for minutes exhaustion scenario
 * @param bypassPhone - The bypass phone number to redirect to
 * @param minutesUsed - Minutes used by the business
 * @param minutesAllowed - Minutes allowed for the business
 * @returns TwiML string for minutes exhaustion redirect
 */
export function generateMinutesExhaustedTwiML(
  bypassPhone: string,
  minutesUsed: number,
  minutesAllowed: number
): string {
  return generateRedirectTwiML({
    bypassPhone,
    reason: `No minutes remaining (${minutesUsed}/${minutesAllowed} used)`,
    message: 'Please hold while I connect you to our team.'
  });
}

/**
 * Generate TwiML for AI-to-human transfer scenario
 * @param bypassPhone - The bypass phone number to redirect to
 * @param reason - Reason for the transfer
 * @returns TwiML string for human transfer
 */
export function generateHumanTransferTwiML(
  bypassPhone: string,
  reason: string = 'Customer requested human assistance'
): string {
  return generateRedirectTwiML({
    bypassPhone,
    reason,
    message: 'Please hold while I transfer you to a human representative.'
  });
}