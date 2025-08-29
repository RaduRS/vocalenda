import { google } from 'googleapis';
import type { calendar_v3 } from 'googleapis';
import type { OAuth2Client } from 'google-auth-library';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

interface GoogleTokens {
  access_token: string;
  refresh_token: string;
  token_type: string;
  expiry_date: number;
}

interface CalendarEvent {
  id?: string;
  summary: string;
  description?: string;
  start: {
    dateTime: string;
    timeZone: string;
  };
  end: {
    dateTime: string;
    timeZone: string;
  };
  attendees?: Array<{
    email: string;
    displayName?: string;
  }>;
}

class CalendarService {
  private oauth2Client: OAuth2Client;
  private calendar: calendar_v3.Calendar;

  constructor(tokens: GoogleTokens) {
    this.oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_REDIRECT_URI
    );
    
    this.oauth2Client.setCredentials(tokens);
    this.calendar = google.calendar({ version: 'v3', auth: this.oauth2Client });
  }

  // Check if a time slot is available
  async isTimeSlotAvailable(
    calendarId: string,
    startTime: Date,
    endTime: Date,
    timezone: string
  ): Promise<boolean> {
    try {
      const response = await this.calendar.freebusy.query({
        requestBody: {
          timeMin: startTime.toISOString(),
          timeMax: endTime.toISOString(),
          timeZone: timezone,
          items: [{ id: calendarId }]
        }
      });

      const busyTimes = response.data.calendars?.[calendarId]?.busy || [];
      return busyTimes.length === 0;
    } catch (error) {
      console.error('Error checking calendar availability:', error);
      throw new Error('Failed to check calendar availability');
    }
  }

  // Get available time slots for a given day
  async getAvailableSlots(
    calendarId: string,
    date: Date,
    serviceDuration: number,
    businessHours: { start: string; end: string },
    timezone: string
  ): Promise<Array<{ start: Date; end: Date }>> {
    try {
      const dayStart = new Date(date);
      const [startHour, startMinute] = businessHours.start.split(':').map(Number);
      dayStart.setHours(startHour, startMinute, 0, 0);

      const dayEnd = new Date(date);
      const [endHour, endMinute] = businessHours.end.split(':').map(Number);
      dayEnd.setHours(endHour, endMinute, 0, 0);

      // Get busy times for the day
      const response = await this.calendar.freebusy.query({
        requestBody: {
          timeMin: dayStart.toISOString(),
          timeMax: dayEnd.toISOString(),
          timeZone: timezone,
          items: [{ id: calendarId }]
        }
      });

      const busyTimes = response.data.calendars?.[calendarId]?.busy || [];
      const availableSlots: Array<{ start: Date; end: Date }> = [];

      // Generate potential slots every 30 minutes
      const slotInterval = 30; // minutes
      let currentTime = new Date(dayStart);

      while (currentTime < dayEnd) {
        const slotEnd = new Date(currentTime.getTime() + serviceDuration * 60000);
        
        if (slotEnd <= dayEnd) {
          // Check if this slot conflicts with any busy time
          const isAvailable = !busyTimes.some((busy: calendar_v3.Schema$TimePeriod) => {
            const busyStart = new Date(busy.start!);
            const busyEnd = new Date(busy.end!);
            
            return (
              (currentTime >= busyStart && currentTime < busyEnd) ||
              (slotEnd > busyStart && slotEnd <= busyEnd) ||
              (currentTime <= busyStart && slotEnd >= busyEnd)
            );
          });

          if (isAvailable) {
            availableSlots.push({
              start: new Date(currentTime),
              end: new Date(slotEnd)
            });
          }
        }

        currentTime = new Date(currentTime.getTime() + slotInterval * 60000);
      }

      return availableSlots;
    } catch (error) {
      console.error('Error getting available slots:', error);
      throw new Error('Failed to get available slots');
    }
  }

  // Create a calendar event
  async createEvent(
    calendarId: string,
    event: CalendarEvent
  ): Promise<string> {
    try {
      const response = await this.calendar.events.insert({
        calendarId,
        requestBody: event
      });

      if (!response.data.id) {
        throw new Error('Failed to create calendar event');
      }

      return response.data.id;
    } catch (error) {
      console.error('Error creating calendar event:', error);
      throw new Error('Failed to create calendar event');
    }
  }

  // Update a calendar event
  async updateEvent(
    calendarId: string,
    eventId: string,
    event: Partial<CalendarEvent>
  ): Promise<void> {
    try {
      await this.calendar.events.patch({
        calendarId,
        eventId,
        requestBody: event
      });
    } catch (error) {
      console.error('Error updating calendar event:', error);
      throw new Error('Failed to update calendar event');
    }
  }

  // Delete a calendar event
  async deleteEvent(calendarId: string, eventId: string): Promise<void> {
    try {
      await this.calendar.events.delete({
        calendarId,
        eventId
      });
    } catch (error) {
      console.error('Error deleting calendar event:', error);
      throw new Error('Failed to delete calendar event');
    }
  }
}

// Helper function to get calendar service for a business
export async function getCalendarService(businessId: string): Promise<CalendarService | null> {
  try {
    const { data: config, error } = await supabase
      .from('business_config')
      .select('integration_settings')
      .eq('business_id', businessId)
      .single();

    if (error || !config?.integration_settings?.google) {
      return null;
    }

    const googleTokens = config.integration_settings.google;
    return new CalendarService(googleTokens);
  } catch (error) {
    console.error('Error getting calendar service:', error);
    return null;
  }
}

export { CalendarService };
export type { CalendarEvent, GoogleTokens };