// IP Access Control Configuration
// Add or remove IP addresses that should have access to the main application

export const ALLOWED_IPS = [
  // Localhost addresses
  '127.0.0.1',        // localhost IPv4
  '::1',              // localhost IPv6
  
  // Your current IP addresses
  '2.220.85.236',     // Your current IPv4
  '2001:4860:7:1633::f9', // Your current IPv6
  
  // Add more allowed IPs here
  // Example:
  // '192.168.1.100',    // Office IP
  // '203.0.113.45',     // Home IP
  // '2001:db8::1',      // IPv6 address
];

// Environment-based IP checking
// In development, you might want to allow all IPs
export const isIPCheckEnabled = () => {
  // Disable IP checking in development environment
  if (process.env.NODE_ENV === 'development') {
    return false;
  }
  
  // You can also use an environment variable to control this
  return process.env.ENABLE_IP_RESTRICTION !== 'false';
};

// Function to check if an IP is allowed
export const isIPAllowed = (ip: string): boolean => {
  if (!isIPCheckEnabled()) {
    return true;
  }
  
  return ALLOWED_IPS.includes(ip);
};

// Function to get client IP from request headers
export const getClientIP = (request: Request): string => {
  // Check various headers for the real IP
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfConnectingIP = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    // x-forwarded-for can contain multiple IPs, get the first one
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  if (cfConnectingIP) {
    return cfConnectingIP;
  }
  
  // Fallback - this might not be the real client IP in production
  return 'unknown';
};