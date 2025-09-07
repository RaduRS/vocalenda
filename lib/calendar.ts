import { google } from 'googleapis';
import type { calendar_v3 } from 'googleapis';
import type { OAuth2Client } from 'google-auth-library';
import { createClient } from '@supabase/supabase-js';
import {
  formatISODate,
  createUKDateTime
} from './date-utils';

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

  // Check if a time slot is available
  async isTimeSlotAvailable(
    calendarId: string,
    startTime: Date,
    endTime: Date,
    timezone: string,
    excludeBookingId?: string
  ): Promise<boolean> {
    try {
      // Check Google Calendar busy times
      const response = await this.calendar.freebusy.query({
        requestBody: {
          timeMin: startTime.toISOString(),
          timeMax: endTime.toISOString(),
          timeZone: timezone,
          items: [{ id: calendarId }]
        }
      });

      let busyTimes = response.data.calendars?.[calendarId]?.busy || [];
      
      // If we're updating an existing booking, get its Google Calendar event ID and exclude it
      if (excludeBookingId) {
        const { data: existingBooking } = await supabase
          .from('appointments')
          .select('google_calendar_event_id')
          .eq('id', excludeBookingId)
          .single();
          
        if (existingBooking?.google_calendar_event_id) {

          // Filter out busy times that match the existing booking's event
          // Note: Google Calendar freebusy doesn't return event IDs, so we need to filter by time
          const existingEventStart = startTime.toISOString();
          const existingEventEnd = endTime.toISOString();
          
          busyTimes = busyTimes.filter(busy => {
            const busyStart = new Date(busy.start!).toISOString();
            const busyEnd = new Date(busy.end!).toISOString();
            // Exclude if this busy time exactly matches our existing booking time
            return !(busyStart === existingEventStart && busyEnd === existingEventEnd);
          });
          

        }
      }
      
      // Also check database for confirmed bookings (in case Google Calendar sync is delayed)
      const startDate = formatISODate(startTime);
      let query = supabase
        .from('appointments')
        .select('id, start_time, end_time, appointment_date')
        .eq('business_id', this.businessId)
        .eq('status', 'confirmed')
        .eq('appointment_date', startDate);
      
      // Exclude the current booking if updating
      if (excludeBookingId) {
        query = query.neq('id', excludeBookingId);
      }
      
      const { data: dbBookings } = await query;

      // Convert database bookings to busy times format
      const dbBusyTimes = (dbBookings || []).map(booking => ({
        start: `${booking.appointment_date}T${booking.start_time}`,
        end: `${booking.appointment_date}T${booking.end_time}`
      }));



      // Combine Google Calendar and database busy times
      type BusyTime = { start: string; end: string };
      const calendarBusyTimes: BusyTime[] = busyTimes
        .filter((busy): busy is { start: string; end: string } => 
          busy.start != null && busy.end != null
        )
        .map(busy => ({ start: busy.start!, end: busy.end! }));
      const allBusyTimes: BusyTime[] = [...calendarBusyTimes, ...dbBusyTimes];
      


      // Check if the requested time slot conflicts with any busy time
      const hasConflict = allBusyTimes.some((busy: BusyTime) => {
        const busyStart = new Date(busy.start!);
        const busyEnd = new Date(busy.end!);
        

        
        return (
          (startTime >= busyStart && startTime < busyEnd) ||
          (endTime > busyStart && endTime <= busyEnd) ||
          (startTime <= busyStart && endTime >= busyEnd)
        );
      });

      return !hasConflict;
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

      // Get busy times from Google Calendar
      const response = await this.calendar.freebusy.query({
        requestBody: {
          timeMin: dayStart.toISOString(),
          timeMax: dayEnd.toISOString(),
          timeZone: timezone,
          items: [{ id: calendarId }]
        }
      });

      const busyTimes = response.data.calendars?.[calendarId]?.busy || [];

      // Also get existing bookings from database to prevent double bookings
      // when Google Calendar sync is delayed
      const dateString = formatISODate(date);
      
      // Add a small delay to ensure any recently created bookings are visible
      // This prevents race conditions where get_available_slots is called immediately after booking creation
      await new Promise(resolve => setTimeout(resolve, 100));
      
      console.log(`🔍 Checking calendar availability for business ${this.businessId} on ${dateString}`);
      
      // Force a fresh read from the database by adding a timestamp to prevent caching
      const { data: existingBookings, error: dbError } = await supabase
        .from('appointments')
        .select('start_time, end_time, status, appointment_date, created_at')
        .eq('business_id', this.businessId)
        .eq('appointment_date', dateString)
        .eq('status', 'confirmed')
        .order('created_at', { ascending: false });
        
      console.log(`📊 Found ${existingBookings?.length || 0} existing bookings for ${dateString}:`, existingBookings?.map(b => `${b.start_time}-${b.end_time}`));

      // Convert database bookings to busy time format
      const dbBusyTimes = (existingBookings || []).map(booking => {
        // Convert HH:mm:ss to HH:mm format for createUKDateTime
        const startTime = booking.start_time.substring(0, 5); // "10:00:00" -> "10:00"
        const endTime = booking.end_time.substring(0, 5); // "10:20:00" -> "10:20"
        const startDateTime = createUKDateTime(dateString, startTime);
        const endDateTime = createUKDateTime(dateString, endTime);
        return {
          start: startDateTime.toISOString(),
          end: endDateTime.toISOString()
        };
      });

      // Combine Google Calendar and database busy times
      type BusyTime = { start: string; end: string };
      const calendarBusyTimes: BusyTime[] = busyTimes
        .filter((busy): busy is { start: string; end: string } => 
          busy.start != null && busy.end != null
        )
        .map(busy => ({ start: busy.start!, end: busy.end! }));
      const allBusyTimes: BusyTime[] = [...calendarBusyTimes, ...dbBusyTimes];
      const availableSlots: Array<{ start: Date; end: Date }> = [];

      // Generate potential slots every 30 minutes
      const slotInterval = 30; // minutes
      let currentTime = new Date(dayStart);

      while (currentTime < dayEnd) {
        const slotEnd = new Date(currentTime.getTime() + serviceDuration * 60000);
        
        if (slotEnd <= dayEnd) {
          // Check if this slot conflicts with any busy time (Google Calendar + Database)
          const isAvailable = !allBusyTimes.some((busy: BusyTime) => {
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
    return new CalendarService(googleTokens, businessId);
  } catch (error) {
    console.error('Error getting calendar service:', error);
    return null;
  }
}

export { CalendarService };
export type { CalendarEvent, GoogleTokens };