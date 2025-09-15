import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';
import { google } from 'googleapis';
import { parseISODate, getDayOfWeekName, formatUKTime, createUKDateTime } from '@/lib/date-utils';
import { toZonedTime } from 'date-fns-tz';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * GET /api/calendar/availability
 * 
 * Simple, clean endpoint that only checks Google Calendar for availability.
 * Returns available time slots for a given date and service.
 * 
 * Query params:
 * - businessId: Business UUID
 * - serviceId: Service UUID  
 * - date: Date in YYYY-MM-DD format
 */
export async function GET(request: NextRequest) {
  try {
    // Check for internal API call first
    const internalSecret = request.headers.get('x-internal-secret');
    const isInternalCall = internalSecret === process.env.INTERNAL_API_SECRET;
    
    // If not internal call, require authentication
    if (!isInternalCall) {
      const { userId } = await auth();
      if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const { searchParams } = new URL(request.url);
    const businessId = searchParams.get('businessId');
    const date = searchParams.get('date');
    const serviceId = searchParams.get('serviceId');
    
    if (!businessId || !date || !serviceId) {
      return NextResponse.json(
        { error: 'Business ID, date, and service ID are required' },
        { status: 400 }
      );
    }

    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      return NextResponse.json(
        { error: 'Invalid date format. Use YYYY-MM-DD' },
        { status: 400 }
      );
    }

    // Get business details
    const { data: business, error: businessError } = await supabase
      .from('businesses')
      .select('google_calendar_id, timezone, business_hours')
      .eq('id', businessId)
      .single();

    if (businessError || !business) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    if (!business.google_calendar_id) {
      return NextResponse.json(
        { error: 'Google Calendar not connected' },
        { status: 400 }
      );
    }

    // Get service details
    const { data: service, error: serviceError } = await supabase
      .from('services')
      .select('duration_minutes')
      .eq('id', serviceId)
      .eq('business_id', businessId)
      .eq('is_active', true)
      .single();

    if (serviceError || !service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    // Parse business hours
    const businessHours = business.business_hours as Record<string, { open: string; close: string; closed?: boolean }>;
    if (!businessHours || typeof businessHours !== 'object') {
      return NextResponse.json(
        { error: 'Business hours not configured' },
        { status: 500 }
      );
    }

    const requestDate = parseISODate(date);
    const dayOfWeek = getDayOfWeekName(requestDate).toLowerCase();
    const dayHours = businessHours[dayOfWeek];
    
    if (!dayHours || dayHours.closed === true || !dayHours.open || !dayHours.close) {
      return NextResponse.json(
        { error: `Business is closed on ${dayOfWeek}s` },
        { status: 400 }
      );
    }

    // Get Google Calendar tokens from business config
    const { data: config, error: configError } = await supabase
      .from('business_config')
      .select('integration_settings')
      .eq('business_id', businessId)
      .single();

    if (configError || !config?.integration_settings?.google) {
      return NextResponse.json(
        { error: 'Google Calendar tokens not found' },
        { status: 400 }
      );
    }

    const googleTokens = config.integration_settings.google;
    if (!googleTokens.access_token) {
      return NextResponse.json(
        { error: 'Google Calendar access token not found' },
        { status: 400 }
      );
    }

    // Set up Google Calendar API
    const oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      access_token: googleTokens.access_token,
      refresh_token: googleTokens.refresh_token,
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Calculate day boundaries using proper timezone handling
    const businessTimezone = business.timezone || 'Europe/London';
    
    // Create timezone-aware day boundaries using UK date utilities
    const dayStart = createUKDateTime(date, dayHours.open);
    const dayEnd = createUKDateTime(date, dayHours.close);

    // Get busy times from Google Calendar
    let googleBusyTimes: Array<{ start?: string | null; end?: string | null }> = [];
    try {
      const response = await calendar.freebusy.query({
        requestBody: {
          timeMin: dayStart.toISOString(),
          timeMax: dayEnd.toISOString(),
          timeZone: businessTimezone,
          items: [{ id: business.google_calendar_id }]
        }
      });
      googleBusyTimes = response.data.calendars?.[business.google_calendar_id]?.busy || [];
      console.log('🔍 Google Calendar raw response:', JSON.stringify(response.data.calendars?.[business.google_calendar_id], null, 2));
      console.log('🔍 Google Calendar busy times:', JSON.stringify(googleBusyTimes, null, 2));

    } catch (calendarError) {
      console.error('Google Calendar API error:', calendarError);
      return NextResponse.json(
        { error: 'Failed to check calendar availability' },
        { status: 500 }
      );
    }

    // Use only Google Calendar busy times since database syncs instantly
    const allBusyTimes = googleBusyTimes;

    // Convert busy times to proper format and sort
    const sortedBusyTimes = allBusyTimes
      .filter((busy): busy is { start: string; end: string } => 
        busy.start != null && busy.end != null
      )
      .map((busy: { start: string; end: string }) => ({
         start: new Date(busy.start),
         end: new Date(busy.end)
       }))
      .sort((a: { start: Date; end: Date }, b: { start: Date; end: Date }) => a.start.getTime() - b.start.getTime());
    


    // Merge overlapping busy times
    const mergedBusyTimes: Array<{ start: Date; end: Date }> = [];
    for (const busyTime of sortedBusyTimes) {
      if (mergedBusyTimes.length === 0) {
        mergedBusyTimes.push(busyTime);
      } else {
        const lastMerged = mergedBusyTimes[mergedBusyTimes.length - 1];
        if (busyTime.start <= lastMerged.end) {
          lastMerged.end = new Date(Math.max(lastMerged.end.getTime(), busyTime.end.getTime()));
        } else {
          mergedBusyTimes.push(busyTime);
        }
      }
    }

    // Debug: Log merged busy times
    console.log('🔍 Merged busy times:', mergedBusyTimes.map(bt => ({
      start: bt.start.toISOString(),
      end: bt.end.toISOString(),
      startBST: bt.start.toLocaleString('en-GB', { timeZone: 'Europe/London' }),
      endBST: bt.end.toLocaleString('en-GB', { timeZone: 'Europe/London' })
    })));
    console.log('🔍 Day boundaries:', {
      dayStart: dayStart.toISOString(),
      dayEnd: dayEnd.toISOString(),
      dayStartBST: dayStart.toLocaleString('en-GB', { timeZone: 'Europe/London' }),
      dayEndBST: dayEnd.toLocaleString('en-GB', { timeZone: 'Europe/London' })
    });

    // Generate available slots
    const availableSlots: Array<{ start: Date; end: Date }> = [];
    const serviceDurationMs = service.duration_minutes * 60000;
    const slotInterval = 15; // 15-minute intervals
    const slotIntervalMs = slotInterval * 60000;
    




    let currentGapStart = new Date(dayStart);
    
    for (const busyTime of mergedBusyTimes) {
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
      
      currentGapStart = new Date(Math.max(busyTime.end.getTime(), currentGapStart.getTime()));
    }
    
    // Generate slots in the final gap
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

    // Format slots for response
    const formattedSlots = availableSlots.map(slot => {
      // Convert UTC times to UK timezone for display
      const startUK = toZonedTime(slot.start, businessTimezone);
      const endUK = toZonedTime(slot.end, businessTimezone);
      
      return {
        start: slot.start.toISOString(),
        end: slot.end.toISOString(),
        startTime: formatUKTime(startUK),
        endTime: formatUKTime(endUK)
      };
    });

    return NextResponse.json({ 
      slots: formattedSlots,
      date,
      businessId,
      serviceId
    });

  } catch (error) {
    console.error('Error getting calendar availability:', error);
    return NextResponse.json(
      { error: 'Failed to get calendar availability' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/calendar/availability
 * 
 * Check if a specific time slot is available.
 * 
 * Body:
 * - businessId: Business UUID
 * - serviceId: Service UUID
 * - appointmentDate: Date in YYYY-MM-DD format
 * - startTime: Time in HH:mm format
 * - endTime: Time in HH:mm format
 */
export async function POST(request: NextRequest) {
  try {
    // Check for internal API call first
    const internalSecret = request.headers.get('x-internal-secret');
    const isInternalCall = internalSecret === process.env.INTERNAL_API_SECRET;
    
    // If not internal call, require authentication
    if (!isInternalCall) {
      const { userId } = await auth();
      if (!userId) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
      }
    }

    const body = await request.json();
    const { businessId, serviceId, appointmentDate, startTime, endTime } = body;

    if (!businessId || !serviceId || !appointmentDate || !startTime || !endTime) {
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    // Get business details
    const { data: business, error: businessError } = await supabase
      .from('businesses')
      .select('google_calendar_id, timezone, business_hours')
      .eq('id', businessId)
      .single();

    if (businessError || !business) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    if (!business.google_calendar_id) {
      return NextResponse.json(
        { error: 'Google Calendar not connected' },
        { status: 400 }
      );
    }

    // Get Google Calendar tokens from business config
    const { data: config, error: configError } = await supabase
      .from('business_config')
      .select('integration_settings')
      .eq('business_id', businessId)
      .single();

    if (configError || !config?.integration_settings?.google) {
      return NextResponse.json(
        { error: 'Google Calendar tokens not found' },
        { status: 400 }
      );
    }

    const googleTokens = config.integration_settings.google;
    if (!googleTokens.access_token) {
      return NextResponse.json(
        { error: 'Google Calendar access token not found' },
        { status: 400 }
      );
    }

    // Validate business hours are configured
    if (!business?.business_hours) {
      return NextResponse.json(
        { error: 'Business hours not configured' },
        { status: 400 }
      );
    }

    const businessHours = business.business_hours;

    // Parse appointment datetime with proper timezone handling
    // Strip seconds from time strings if present (createUKDateTime expects HH:mm format)
    const startTimeFormatted = startTime.substring(0, 5); // "14:00:00" -> "14:00"
    const endTimeFormatted = endTime.substring(0, 5); // "14:30:00" -> "14:30"
    
    // Create timezone-aware start and end times
    const dayStart = createUKDateTime(appointmentDate, startTimeFormatted);
    const dayEnd = createUKDateTime(appointmentDate, endTimeFormatted);
    
    const startDateTime = dayStart;
    const endDateTime = dayEnd;

    // Check if the requested time is within business hours
    const dayOfWeek = getDayOfWeekName(parseISODate(appointmentDate));
    const dayHours = businessHours[dayOfWeek.toLowerCase()];
    
    if (!dayHours || dayHours.closed) {
      return NextResponse.json({
        available: false,
        businessId,
        serviceId,
        appointmentDate,
        startTime,
        endTime,
        message: `Business is closed on ${dayOfWeek}`
      });
    }

    // Check if requested time is within business hours
    const businessOpen = dayHours.open;
    const businessClose = dayHours.close;
    
    if (startTimeFormatted < businessOpen || endTimeFormatted > businessClose) {
      return NextResponse.json({
        available: false,
        businessId,
        serviceId,
        appointmentDate,
        startTime,
        endTime,
        message: `Requested time is outside business hours (${businessOpen}-${businessClose})`
      });
    }

    // Set up Google Calendar API
    const oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET
    );

    oauth2Client.setCredentials({
      access_token: googleTokens.access_token,
      refresh_token: googleTokens.refresh_token,
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    // Check Google Calendar for conflicts
    let googleBusyTimes: Array<{ start?: string | null; end?: string | null }> = [];
    try {
      const response = await calendar.freebusy.query({
        requestBody: {
          timeMin: startDateTime.toISOString(),
          timeMax: endDateTime.toISOString(),
          timeZone: business.timezone || 'Europe/London',
          items: [{ id: business.google_calendar_id }]
        }
      });

      googleBusyTimes = response.data.calendars?.[business.google_calendar_id]?.busy || [];
    } catch (calendarError) {
      console.error('Google Calendar API error:', calendarError);
      return NextResponse.json(
        { error: 'Failed to check calendar availability' },
        { status: 500 }
      );
    }

    // Use only Google Calendar busy times since database syncs instantly
    const allBusyTimes = googleBusyTimes;
      
    // Check if the requested time slot conflicts with any busy time
    const hasConflict = allBusyTimes.some(busy => {
      if (!busy.start || !busy.end) return false;
      
      const busyStart = new Date(busy.start);
      const busyEnd = new Date(busy.end);
      
      return (
        (startDateTime >= busyStart && startDateTime < busyEnd) ||
        (endDateTime > busyStart && endDateTime <= busyEnd) ||
        (startDateTime <= busyStart && endDateTime >= busyEnd)
      );
    });

      const isAvailable = !hasConflict;

    return NextResponse.json({
      available: isAvailable,
      businessId,
      serviceId,
      appointmentDate,
      startTime,
      endTime,
      message: isAvailable 
        ? 'Slot is available' 
        : 'Slot is not available - conflicts with existing appointment'
    });

  } catch (error) {
    console.error('Error checking availability:', error);
    return NextResponse.json(
      { error: 'Internal server error while checking availability' },
      { status: 500 }
    );
  }
}