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
  private businessId: string;

  constructor(tokens: GoogleTokens, businessId: string) {
    this.businessId = businessId;
    this.oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
      // No redirect URI needed for API calls with existing tokens
    );
    
    this.oauth2Client.setCredentials(tokens);
    
    // Set up automatic token refresh
    this.oauth2Client.on('tokens', async (tokens) => {
      console.log('🔄 Refreshing Google tokens for business:', this.businessId);
      await this.saveRefreshedTokens({
        access_token: tokens.access_token || '',
        refresh_token: tokens.refresh_token || '',
        token_type: tokens.token_type || 'Bearer',
        expiry_date: tokens.expiry_date || Date.now() + 3600000
      });
    });
    
    this.calendar = google.calendar({ version: 'v3', auth: this.oauth2Client });
  }

  // Save refreshed tokens back to the database
  private async saveRefreshedTokens(tokens: Partial<GoogleTokens>): Promise<void> {
    try {
      // Get current integration settings
      const { data: config } = await supabase
        .from('business_config')
        .select('integration_settings')
        .eq('business_id', this.businessId)
        .single();

      if (config?.integration_settings) {
        const integrationSettings = config.integration_settings as Record<string, unknown>;
        const currentGoogle = (integrationSettings.google as GoogleTokens) || {} as GoogleTokens;
        
        // Update with new tokens while preserving other data
        const updatedGoogle = {
          ...currentGoogle,
          access_token: tokens.access_token || currentGoogle.access_token,
          refresh_token: tokens.refresh_token || currentGoogle.refresh_token,
          expiry_date: tokens.expiry_date || currentGoogle.expiry_date,
          token_type: tokens.token_type || currentGoogle.token_type
        };

        const updatedSettings = {
          ...integrationSettings,
          google: updatedGoogle
        };

        await supabase
          .from('business_config')
          .update({ integration_settings: updatedSettings })
          .eq('business_id', this.businessId);

        console.log('✅ Google tokens refreshed and saved successfully');
      }
    } catch (error) {
      console.error('❌ Failed to save refreshed Google tokens:', error);
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

      // Get busy times from Google Calendar
      console.log(`🔍 getAvailableSlots: About to query Google Calendar for ${calendarId}`);
      let busyTimes: Array<{ start?: string | null; end?: string | null }> = [];
      try {
        const response = await this.calendar.freebusy.query({
          requestBody: {
            timeMin: dayStart.toISOString(),
            timeMax: dayEnd.toISOString(),
            timeZone: timezone,
            items: [{ id: calendarId }]
          }
        });
        busyTimes = response.data.calendars?.[calendarId]?.busy || [];
        console.log(`🔍 getAvailableSlots: Google Calendar returned ${busyTimes.length} busy times`);
      } catch (calendarError) {
        console.error('🔍 getAvailableSlots: Google Calendar API error:', calendarError);
        // Continue with empty busy times from Google Calendar, rely on database
        busyTimes = [];
      }

      // Use only Google Calendar busy times
      type BusyTime = { start: string; end: string };
      const allBusyTimes: BusyTime[] = busyTimes
        .filter((busy): busy is { start: string; end: string } => 
          busy.start != null && busy.end != null
        )
        .map(busy => ({ start: busy.start!, end: busy.end! }));
      
      // Sort busy times by start time for gap analysis
      const sortedBusyTimes = allBusyTimes
        .map(busy => ({
          start: new Date(busy.start),
          end: new Date(busy.end)
        }))
        .sort((a, b) => a.start.getTime() - b.start.getTime());

      // Merge overlapping busy times to create clean gaps
      const mergedBusyTimes: Array<{ start: Date; end: Date }> = [];
      for (const busyTime of sortedBusyTimes) {
        if (mergedBusyTimes.length === 0) {
          mergedBusyTimes.push(busyTime);
        } else {
          const lastMerged = mergedBusyTimes[mergedBusyTimes.length - 1];
          // If current busy time overlaps or is adjacent to the last one, merge them
          if (busyTime.start <= lastMerged.end) {
            lastMerged.end = new Date(Math.max(lastMerged.end.getTime(), busyTime.end.getTime()));
          } else {
            mergedBusyTimes.push(busyTime);
          }
        }
      }

      const availableSlots: Array<{ start: Date; end: Date }> = [];
      const serviceDurationMs = serviceDuration * 60000; // Convert to milliseconds
      const slotInterval = 15; // Generate slots every 15 minutes for more flexibility
      const slotIntervalMs = slotInterval * 60000;

      // Generate slots in gaps between busy times
      let currentGapStart = new Date(dayStart);
      
      for (const busyTime of mergedBusyTimes) {
        // Generate slots in the gap before this busy time
        const gapEnd = new Date(Math.min(busyTime.start.getTime(), dayEnd.getTime()));
        
        // Generate slots within this gap
        let slotStart = new Date(currentGapStart);
        while (slotStart.getTime() + serviceDurationMs <= gapEnd.getTime()) {
          const slotEnd = new Date(slotStart.getTime() + serviceDurationMs);
          
          availableSlots.push({
            start: new Date(slotStart),
            end: new Date(slotEnd)
          });
          
          slotStart = new Date(slotStart.getTime() + slotIntervalMs);
        }
        
        // Move to the end of this busy time for the next gap
        currentGapStart = new Date(Math.max(busyTime.end.getTime(), currentGapStart.getTime()));
      }
      
      // Generate slots in the final gap (after the last busy time until end of day)
      if (currentGapStart < dayEnd) {
        let slotStart = new Date(currentGapStart);
        while (slotStart.getTime() + serviceDurationMs <= dayEnd.getTime()) {
          const slotEnd = new Date(slotStart.getTime() + serviceDurationMs);
          
          availableSlots.push({
            start: new Date(slotStart),
            end: new Date(slotEnd)
          });
          
          slotStart = new Date(slotStart.getTime() + slotIntervalMs);
        }
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
    return new CalendarService(googleTokens, businessId);
  } catch (error) {
    console.error('Error getting calendar service:', error);
    return null;
  }
}

export { CalendarService };
export type { CalendarEvent, GoogleTokens };