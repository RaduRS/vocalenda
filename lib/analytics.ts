"use client";

import Analytics from "analytics";
// @ts-expect-error - No types available for @analytics/google-analytics
import googleAnalytics from "@analytics/google-analytics";

// Google Analytics configuration
export const GA_TRACKING_ID = 'G-V5TDZDW6VK';

// Initialize Analytics with Google Analytics plugin
let analyticsInstance: ReturnType<typeof Analytics> | null = null;

const initializeAnalytics = () => {
  if (analyticsInstance) {
    return analyticsInstance;
  }

  try {
    analyticsInstance = Analytics({
      app: "Vocalenda",
      plugins: [
        googleAnalytics({
          measurementIds: [GA_TRACKING_ID],
        }),
      ],
    });
    return analyticsInstance;
  } catch (error) {
    console.error(
      "Failed to initialize analytics with Google Analytics:",
      error
    );
    return null;
  }
};

// Initialize immediately
const analytics = initializeAnalytics();

// Get analytics instance
export const getAnalytics = () => {
  return analytics;
};

// Track page views
export const pageview = (url: string) => {
  if (!analytics || typeof window === "undefined") return;

  try {
    analytics.page({
      path: url,
      url: window.location.origin + url,
      title: document.title,
    });
  } catch (error) {
    console.warn("Failed to track page view:", error);
  }
};

// Track custom events
export const event = (
  action: string,
  properties: Record<string, string | number | boolean>
) => {
  if (!analytics) return;

  try {
    analytics.track(action, properties);
  } catch (error) {
    console.warn("Failed to track event:", error);
  }
};

// Track button clicks
export const trackButtonClick = (buttonText: string, location: string) => {
  if (!analytics) return;

  try {
    analytics.track("Button Clicked", {
      category: "Engagement",
      label: buttonText,
      location: location,
      buttonText: buttonText,
    });
  } catch (error) {
    console.warn("Failed to track button click:", error);
  }
};

// Track sign ups
export const trackSignUp = (method?: string) => {
  event('Sign Up', { method: method || 'unknown' });
};

// Track sign ins
export const trackSignIn = (method?: string) => {
  event('Sign In', { method: method || 'unknown' });
};

// Track business setup
export const trackBusinessSetup = (step: string) => {
  event('Business Setup', { step });
};

// Track booking created
export const trackBookingCreated = (serviceType?: string) => {
  event('Booking Created', { serviceType: serviceType || 'unknown' });
};

// Track calendar connected
export const trackCalendarConnected = () => {
  event('Calendar Connected', { category: 'Integration' });
};

// Track voice call events
export const trackVoiceCallStarted = () => {
  event('Voice Call Started', { category: 'Voice AI' });
};

export const trackVoiceCallCompleted = (duration?: number) => {
  event('Voice Call Completed', { 
    category: 'Voice AI',
    duration: duration || 0
  });
};

// Identify users
export const identify = (
  userId: string,
  traits: Record<string, string | number | boolean>
) => {
  if (!analytics) return;

  try {
    analytics.identify(userId, traits);
  } catch (error) {
    console.warn("Failed to identify user:", error);
  }
};

export default analytics;