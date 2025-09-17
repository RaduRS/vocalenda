/**
 * Conversation Utilities for Vocalenda AI Receptionist
 * 
 * Implements Core Rule D from Master Conversational Flow:
 * "Filler" Conversation Strategy for silent background operations
 */

export interface FillerContext {
  customerName?: string;
  serviceName?: string;
  requestedDate?: string;
  requestedTime?: string;
  operation?: 'availability' | 'booking' | 'update' | 'cancel';
}

/**
 * Dynamic filler phrases for availability checks
 * These phrases fill the 5-8 second gap during silent API calls
 */
const AVAILABILITY_FILLER_PHRASES = [
  // Standard availability checks
  "Perfect, let me see if we have that time available for you now...",
  "One moment while I check that for you...",
  "Let me just pull up the schedule for you...",
  "Great, let me check our availability for that time...",
  "Alright, checking if that slot is open...",
  
  // Personalized with customer details
  "Okay, a {service} on {date} at {time} for {name}, got it. Let me just pull up the schedule for you...",
  "Perfect {name}, let me check if we have {time} available for your {service} on {date}...",
  "Alright {name}, checking our {date} schedule for a {time} {service} appointment...",
  "One moment {name}, let me see what we have available for {service} on {date}...",
  
  // Time-specific variations
  "Let me check our {date} availability...",
  "Checking if {time} is still open on {date}...",
  "One second, pulling up {date} to see what's available...",
  
  // Service-specific variations
  "Great choice on the {service}! Let me check our availability...",
  "Perfect, checking our {service} schedule for you...",
];

/**
 * Filler phrases for booking operations
 */
const BOOKING_FILLER_PHRASES = [
  "Excellent! Let me get that booked for you right now...",
  "Perfect, securing that appointment for you...",
  "Great, I'm booking that in for you now...",
  "Wonderful, let me lock that in for you...",
  "Alright, getting that scheduled for you...",
  
  // Personalized booking phrases
  "Excellent {name}! Getting your {service} appointment booked for {date} at {time}...",
  "Perfect {name}, securing your {time} slot on {date}...",
  "Great {name}, I'm booking your {service} for {date} at {time}...",
];

/**
 * Filler phrases for update operations
 */
const UPDATE_FILLER_PHRASES = [
  "No problem, let me update that for you...",
  "Of course, making that change now...",
  "Absolutely, updating your appointment...",
  "Sure thing, let me make that adjustment...",
  "Perfect, changing that for you now...",
  
  // Personalized update phrases
  "No problem {name}, updating your appointment to {time} on {date}...",
  "Of course {name}, changing your {service} to {time}...",
  "Absolutely {name}, moving your appointment to {date} at {time}...",
];

/**
 * Filler phrases for cancellation operations
 */
const CANCEL_FILLER_PHRASES = [
  "I understand, let me cancel that for you...",
  "No problem at all, cancelling your appointment...",
  "Of course, taking care of that cancellation...",
  "Absolutely, removing that from the schedule...",
  "Sure thing, cancelling that appointment...",
  
  // Personalized cancellation phrases
  "I understand {name}, cancelling your {service} appointment for {date}...",
  "No problem at all {name}, removing your {time} appointment...",
  "Of course {name}, cancelling your {date} {service} booking...",
];

/**
 * Get a random filler phrase based on operation type and context
 */
export function getFillerPhrase(context: FillerContext): string {
  let phrases: string[] = [];
  
  switch (context.operation) {
    case 'availability':
      phrases = AVAILABILITY_FILLER_PHRASES;
      break;
    case 'booking':
      phrases = BOOKING_FILLER_PHRASES;
      break;
    case 'update':
      phrases = UPDATE_FILLER_PHRASES;
      break;
    case 'cancel':
      phrases = CANCEL_FILLER_PHRASES;
      break;
    default:
      phrases = AVAILABILITY_FILLER_PHRASES;
  }
  
  // Select a random phrase
  const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
  
  // Replace placeholders with actual values
  return replacePlaceholders(randomPhrase, context);
}

/**
 * Replace placeholders in filler phrases with actual context values
 */
function replacePlaceholders(phrase: string, context: FillerContext): string {
  let result = phrase;
  
  if (context.customerName) {
    result = result.replace(/{name}/g, context.customerName);
  }
  
  if (context.serviceName) {
    result = result.replace(/{service}/g, context.serviceName);
  }
  
  if (context.requestedDate) {
    result = result.replace(/{date}/g, formatDateForSpeech(context.requestedDate));
  }
  
  if (context.requestedTime) {
    result = result.replace(/{time}/g, context.requestedTime);
  }
  
  // Remove any remaining placeholders if context is missing
  result = result.replace(/{[^}]+}/g, '');
  
  // Clean up any double spaces or awkward phrasing
  result = result.replace(/\s+/g, ' ').trim();
  
  return result;
}

/**
 * Format date string for natural speech
 * Converts "2024-01-15" to "Monday, January 15th"
 */
function formatDateForSpeech(dateString: string): string {
  try {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    };
    
    let formatted = date.toLocaleDateString('en-GB', options);
    
    // Add ordinal suffix to day
    const day = date.getDate();
    const suffix = getOrdinalSuffix(day);
    formatted = formatted.replace(/\d+/, `${day}${suffix}`);
    
    return formatted;
  } catch (error) {
    // Fallback to original string if parsing fails
    console.error('Error formatting date for speech:', error);
    return dateString;
  }
}

/**
 * Get ordinal suffix for day numbers (1st, 2nd, 3rd, 4th, etc.)
 */
function getOrdinalSuffix(day: number): string {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

/**
 * Race condition handling phrases
 * Used when a time slot becomes unavailable during booking confirmation
 */
export const RACE_CONDITION_PHRASES = [
  "My apologies, it seems that slot was just filled while we were speaking.",
  "I'm sorry, that time was just taken by another booking.",
  "Unfortunately, that slot was just booked by someone else.",
  "I apologize, but that time just became unavailable.",
];

/**
 * Get a race condition phrase with alternative options
 */
export function getRaceConditionPhrase(nextAvailableTime?: string): string {
  const basePhrase = RACE_CONDITION_PHRASES[Math.floor(Math.random() * RACE_CONDITION_PHRASES.length)];
  
  if (nextAvailableTime) {
    return `${basePhrase} The next available time is ${nextAvailableTime}. Would you like to book that instead?`;
  }
  
  return `${basePhrase} Let me check what other times are available for you.`;
}

/**
 * Confirmation phrases for successful operations
 */
export const CONFIRMATION_PHRASES = {
  booking: [
    "Perfect! Your appointment is confirmed.",
    "Excellent! I've got you booked in.",
    "Great! Your appointment is all set.",
    "Wonderful! That's confirmed for you.",
  ],
  update: [
    "Perfect! Your appointment has been updated.",
    "Excellent! I've made that change for you.",
    "Great! Your appointment is now updated.",
    "Wonderful! That change is confirmed.",
  ],
  cancel: [
    "Your appointment has been cancelled.",
    "That's been cancelled for you.",
    "Your appointment is now cancelled.",
    "I've cancelled that appointment for you.",
  ]
};

/**
 * Get a confirmation phrase for successful operations
 */
export function getConfirmationPhrase(operation: 'booking' | 'update' | 'cancel'): string {
  const phrases = CONFIRMATION_PHRASES[operation];
  return phrases[Math.floor(Math.random() * phrases.length)];
}