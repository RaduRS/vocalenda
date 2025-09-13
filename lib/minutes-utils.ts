/**
 * Utility functions for calculating and managing voice call minutes
 */

/**
 * Calculate minutes from call duration in seconds, always rounding up
 * Examples:
 * - 2:56 (176 seconds) = 3 minutes
 * - 2:02 (122 seconds) = 3 minutes
 * - 1:00 (60 seconds) = 1 minute
 * - 0:30 (30 seconds) = 1 minute
 * 
 * @param durationSeconds - Duration in seconds
 * @returns Minutes rounded up to nearest whole number
 */
export function calculateMinutesFromDuration(durationSeconds: number | null | undefined): number {
  if (durationSeconds == null || durationSeconds <= 0) {
    return 0;
  }
  
  // Always round up using Math.ceil
  return Math.ceil(durationSeconds / 60);
}

/**
 * Calculate total minutes used from an array of call durations
 * 
 * @param callDurations - Array of duration in seconds
 * @returns Total minutes used (sum of all rounded up durations)
 */
export function calculateTotalMinutesUsed(callDurations: (number | null | undefined)[]): number {
  return callDurations.reduce((total: number, duration) => {
    if (duration == null || duration <= 0) return total;
    return total + calculateMinutesFromDuration(duration);
  }, 0);
}

/**
 * Calculate minutes left from allowed and used minutes
 * 
 * @param minutesAllowed - Total minutes allocated
 * @param minutesUsed - Minutes already consumed
 * @returns Minutes remaining (cannot be negative)
 */
export function calculateMinutesLeft(minutesAllowed: number, minutesUsed: number): number {
  const remaining = minutesAllowed - minutesUsed;
  return Math.max(0, remaining); // Ensure it never goes negative
}

/**
 * Format minutes for display
 * 
 * @param minutes - Number of minutes
 * @returns Formatted string (e.g., "450 min" or "1 min")
 */
export function formatMinutesDisplay(minutes: number): string {
  if (minutes === 1) {
    return "1 min";
  }
  return `${minutes} min`;
}

/**
 * Check if business has exceeded their minute allowance
 * 
 * @param minutesAllowed - Total minutes allocated
 * @param minutesUsed - Minutes already consumed
 * @returns True if over limit
 */
export function isOverMinuteLimit(minutesAllowed: number, minutesUsed: number): boolean {
  return minutesUsed > minutesAllowed;
}

/**
 * Get usage percentage
 * 
 * @param minutesAllowed - Total minutes allocated
 * @param minutesUsed - Minutes already consumed
 * @returns Percentage used (0-100)
 */
export function getMinutesUsagePercentage(minutesAllowed: number, minutesUsed: number): number {
  if (minutesAllowed === 0) return 0;
  return Math.min(100, Math.round((minutesUsed / minutesAllowed) * 100));
}