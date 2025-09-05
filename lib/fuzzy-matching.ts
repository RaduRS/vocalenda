/**
 * Fuzzy name matching utilities for voice booking operations
 * Handles minor spelling variations in customer names
 */

/**
 * Normalizes a name by converting to lowercase, trimming whitespace,
 * and replacing multiple spaces with single spaces
 */
export const normalizeName = (name: string): string => {
  return name.toLowerCase().trim().replace(/\s+/g, ' ');
};

/**
 * Calculates the Levenshtein distance between two strings
 */
const levenshteinDistance = (str1: string, str2: string): number => {
  const matrix = [];
  for (let i = 0; i <= str2.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= str1.length; j++) {
    matrix[0][j] = j;
  }
  for (let i = 1; i <= str2.length; i++) {
    for (let j = 1; j <= str1.length; j++) {
      if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j] + 1
        );
      }
    }
  }
  return matrix[str2.length][str1.length];
};

/**
 * Calculates similarity between two strings using Levenshtein distance
 * Returns a value between 0 and 1, where 1 is identical
 */
export const calculateSimilarity = (str1: string, str2: string): number => {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  const editDistance = levenshteinDistance(longer, shorter);
  return (longer.length - editDistance) / longer.length;
};

/**
 * Booking record type for fuzzy matching
 */
export type BookingRecord = {
  id: string;
  customers?: {
    first_name: string;
    last_name: string;
    phone?: string;
  } | null;
  notes?: string | null;
  services?: {
    name: string;
    duration_minutes?: number;
  } | null;
  appointment_date: string;
  start_time: string;
  end_time: string;
  google_calendar_event_id?: string | null;
  status: string;
};

/**
 * Extracts customer name from a booking record
 * Handles both regular customer bookings and voice bookings stored in notes
 */
export const extractCustomerName = (booking: BookingRecord): string => {
  if (booking.customers) {
    // Regular booking with customer record
    return `${booking.customers.first_name} ${booking.customers.last_name}`.trim();
  } else if (booking.notes) {
    // Voice booking - extract name from notes
    const nameMatch = booking.notes.match(/Customer: ([^\n-]+)/);
    if (nameMatch) {
      return nameMatch[1].trim();
    }
  }
  return '';
};

/**
 * Extracts customer phone from a booking record
 * Handles both regular customer bookings and voice bookings stored in notes
 */
export const extractCustomerPhone = (booking: BookingRecord): string => {
  if (booking.customers?.phone) {
    // Regular booking with customer record
    return booking.customers.phone;
  } else if (booking.notes) {
    // Voice booking - extract phone from notes
    const phoneMatch = booking.notes.match(/Phone: ([^\n]+)/);
    if (phoneMatch) {
      return phoneMatch[1].trim();
    }
  }
  return '';
};

/**
 * Finds a booking using fuzzy name matching
 * First attempts exact match, then falls back to fuzzy matching
 * 
 * @param bookings - Array of booking records to search
 * @param searchName - Customer name to search for
 * @param similarityThreshold - Minimum similarity score (default: 0.8)
 * @param maxLengthDiff - Maximum character length difference (default: 2)
 * @returns The best matching booking or null if no match found
 */
export const findBookingByFuzzyName = (
  bookings: BookingRecord[],
  searchName: string,
  similarityThreshold: number = 0.8,
  maxLengthDiff: number = 2
): BookingRecord | null => {
  if (!bookings || bookings.length === 0) {
    console.log('🔍 No bookings to search through');
    return null;
  }

  console.log(`🔍 Searching for customer: "${searchName}" in ${bookings.length} bookings`);

  // First try exact match
  const exactMatch = bookings.find(booking => {
    const bookingName = extractCustomerName(booking);
    console.log(`📝 Extracted name: "${bookingName}" from booking ${booking.id}`);
    console.log(`📝 Notes: ${booking.notes}`);
    return bookingName.toLowerCase() === searchName.toLowerCase();
  });

  if (exactMatch) {
    console.log('✅ Found exact match!');
    return exactMatch;
  }

  // If no exact match, try fuzzy matching
  console.log('❌ No exact match found, trying fuzzy matching...');
  
  const normalizedSearchName = normalizeName(searchName);
  let bestMatch = null;
  let bestSimilarity = 0;
  
  for (const booking of bookings) {
    const bookingName = extractCustomerName(booking);
    
    if (bookingName) {
      const normalizedBookingName = normalizeName(bookingName);
      const similarity = calculateSimilarity(normalizedSearchName, normalizedBookingName);
      const lengthDiff = Math.abs(normalizedSearchName.length - normalizedBookingName.length);
      
      console.log(`🔍 Comparing "${searchName}" vs "${bookingName}" - similarity: ${Math.round(similarity * 100)}%, length diff: ${lengthDiff}`);
      
      // Use fuzzy matching with configurable thresholds
      if (similarity > similarityThreshold && lengthDiff <= maxLengthDiff && similarity > bestSimilarity) {
        bestMatch = booking;
        bestSimilarity = similarity;
        console.log(`✅ New best match found with ${Math.round(bestSimilarity * 100)}% similarity`);
      }
    } else {
      console.log(`❌ No name extracted from booking ${booking.id}`);
    }
  }
  
  if (bestMatch) {
    console.log(`🎯 Final fuzzy match with ${Math.round(bestSimilarity * 100)}% similarity`);
  } else {
    console.log('❌ No fuzzy match found');
  }
  
  return bestMatch;
};