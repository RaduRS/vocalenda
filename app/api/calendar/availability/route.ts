import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';
import { google } from 'googleapis';
import { parseISODate, getDayOfWeekName, formatUKTime, createUKDateTime, formatConversationalTime } from '@/lib/date-utils';
import { toZonedTime } from 'date-fns-tz';
import { getFillerPhrase, FillerContext } from '@/lib/conversation-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * GET /api/calendar/availability
 * 
 * Master Conversational Flow Specification:
 * Checks Google Calendar for availability and returns filler phrases for voice calls.
 * Supports Core Rule D: "Filler" Conversation Strategy for 5-8 second gaps.
 * 
 * Query params:
 * - businessId: Business UUID
 * - serviceId: Service UUID  
 * - date: Date in YYYY-MM-DD format
 * - customerName: Customer name (optional, for filler phrases)
 * - sessionId: Session ID (optional, for same-call tracking)
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
    const customerName = searchParams.get('customerName');
    const sessionId = searchParams.get('sessionId');
    
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

    // Get service details for filler phrases
    const { data: service, error: serviceError } = await supabase
      .from('services')
      .select('duration_minutes, name')
      .eq('id', serviceId)
      .eq('business_id', businessId)
      .eq('is_active', true)
      .single();

    if (serviceError || !service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    // Generate filler phrase for voice calls (Core Rule D)
    let fillerPhrase = '';
    if (isInternalCall && customerName) {
      const fillerContext: FillerContext = {
        customerName,
        serviceName: service.name,
        requestedDate: date,
        requestedTime: '', // Will be filled when specific time is requested
        operation: 'availability'
      };
      fillerPhrase = getFillerPhrase(fillerContext);
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
      console.log('📅 Google Calendar busy times retrieved:', googleBusyTimes.length, 'events');
      console.log('🔍 Google Calendar raw response:', JSON.stringify(response.data.calendars?.[business.google_calendar_id], null, 2));
      console.log('🔍 Google Calendar busy times:', JSON.stringify(googleBusyTimes, null, 2));

    } catch (calendarError) {
      console.error('❌ Error querying Google Calendar:', calendarError);
      // Continue with empty busy times array - this will allow the booking but log the error
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
        startTime: formatUKTime(startUK), // Keep 24-hour for internal processing
        endTime: formatUKTime(endUK), // Keep 24-hour for internal processing
        startTimeConversational: formatConversationalTime(startUK), // 12-hour for AI responses
        endTimeConversational: formatConversationalTime(endUK) // 12-hour for AI responses
      };
    });

    const response = { 
      slots: formattedSlots,
      date,
      businessId,
      serviceId,
      ...(fillerPhrase && {
        fillerPhrase,
        sessionId
      })
    };

    return NextResponse.json(response);

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
 * Master Conversational Flow Specification:
 * Checks if a specific time slot is available for booking with filler phrase support.
 * Supports Core Rule D: "Filler" Conversation Strategy for 5-8 second gaps.
 * 
 * Body params:
 * - businessId: Business UUID
 * - serviceId: Service UUID
 * - appointmentDate: Date in YYYY-MM-DD format
 * - startTime: Time in HH:mm format
 * - endTime: Time in HH:mm format
 * - customerName: Customer name (optional, for filler phrases)
 * - sessionId: Session ID (optional, for same-call tracking)
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
    const { businessId, serviceId, appointmentDate, startTime, endTime, excludeBookingId, customerName, sessionId } = body;

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

    // Get service details for filler phrases
    const { data: postService, error: postServiceError } = await supabase
      .from('services')
      .select('name')
      .eq('id', serviceId)
      .eq('business_id', businessId)
      .eq('is_active', true)
      .single();

    if (postServiceError || !postService) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    // Parse appointment datetime with proper timezone handling
    // Strip seconds from time strings if present (createUKDateTime expects HH:mm format)
    const startTimeFormatted = startTime.substring(0, 5); // "14:00:00" -> "14:00"
    const endTimeFormatted = endTime.substring(0, 5); // "14:30:00" -> "14:30"

    // Generate filler phrase for voice calls (Core Rule D)
    let fillerPhrase = '';
    if (isInternalCall && customerName) {
      const fillerContext: FillerContext = {
        customerName,
        serviceName: postService.name,
        requestedDate: appointmentDate,
        requestedTime: startTimeFormatted,
        operation: 'availability'
      };
      fillerPhrase = getFillerPhrase(fillerContext);
    }
    
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

    // Get the Google Calendar event ID of the booking being excluded (if any)
    let excludeEventId = null;
    if (excludeBookingId) {
      const { data: excludeBooking, error: excludeError } = await supabase
        .from('appointments')
        .select('google_calendar_event_id, appointment_date, start_time, end_time')
        .eq('id', excludeBookingId)
        .single();
      
      if (excludeError) {
        console.error('❌ Error fetching booking to exclude:', excludeError);
      } else {
        excludeEventId = excludeBooking?.google_calendar_event_id;
        console.log('🔄 Excluding booking from conflict check:', { 
          excludeBookingId, 
          excludeEventId,
          excludeBookingDetails: {
            date: excludeBooking?.appointment_date,
            startTime: excludeBooking?.start_time,
            endTime: excludeBooking?.end_time
          }
        });
      }
    }

    // Check Google Calendar for conflicts - use same time range as GET method for consistency
    // Query the entire business day, not just the specific slot
    const businessDayStart = createUKDateTime(appointmentDate, dayHours.open);
    const businessDayEnd = createUKDateTime(appointmentDate, dayHours.close);
    
    let googleBusyTimes: Array<{ start?: string | null; end?: string | null }> = [];
    try {
      const response = await calendar.freebusy.query({
          requestBody: {
            timeMin: businessDayStart.toISOString(),
            timeMax: businessDayEnd.toISOString(),
            timeZone: business.timezone || 'Europe/London',
            items: [{ id: business.google_calendar_id }]
          }
        });

      googleBusyTimes = response.data.calendars?.[business.google_calendar_id]?.busy || [];
      console.log('📅 Google Calendar busy times retrieved:', googleBusyTimes.length, 'events');
      console.log('🔍 POST method - Google Calendar busy times:', JSON.stringify(googleBusyTimes, null, 2));
    } catch (calendarError) {
      console.error('❌ Error querying Google Calendar:', calendarError);
      // Continue with empty busy times array - this will allow the booking but log the error
    }

    // If we have an event to exclude, get its details and filter it out
    let filteredBusyTimes = googleBusyTimes;
    if (excludeEventId) {
      console.log('🔍 Attempting to exclude event:', excludeEventId);
      try {
        const excludeEvent = await calendar.events.get({
          calendarId: business.google_calendar_id,
          eventId: excludeEventId
        });
        
        const excludeStart = excludeEvent.data.start?.dateTime;
        const excludeEnd = excludeEvent.data.end?.dateTime;
        
        console.log('🔍 Event to exclude details:', {
          eventId: excludeEventId,
          start: excludeStart,
          end: excludeEnd,
          summary: excludeEvent.data.summary
        });
        
        if (excludeStart && excludeEnd) {
          const originalCount = googleBusyTimes.length;
          filteredBusyTimes = googleBusyTimes.filter(busy => {
            const isMatch = busy.start === excludeStart && busy.end === excludeEnd;
            if (isMatch) {
              console.log('✅ Found and excluding matching event:', { start: excludeStart, end: excludeEnd });
            }
            return !isMatch;
          });
          console.log(`🔍 Filtered busy times: ${originalCount} -> ${filteredBusyTimes.length}`);
        } else {
          console.warn('⚠️ Event to exclude has no start/end time');
        }
      } catch (eventError) {
        console.error('❌ Error fetching event to exclude:', eventError);
        // Continue with original busy times if we can't get the event
      }
    } else {
      console.log('🔍 No event to exclude (excludeEventId is null)');
    }

    // STEP 1: Check database appointments for conflicts
    console.log('🔍 POST method - Checking database appointments...');
    const { data: dbAppointments, error: dbError } = await supabase
      .from('appointments')
      .select('id, appointment_date, start_time, end_time, google_calendar_event_id')
      .eq('business_id', businessId)
      .eq('appointment_date', appointmentDate)
      .neq('status', 'cancelled');

    if (dbError) {
      console.error('❌ Error fetching database appointments:', dbError);
    }

    // Convert database appointments to busy times format, excluding the booking being updated
    const dbBusyTimes: Array<{ start: Date; end: Date }> = [];
    if (dbAppointments) {
      for (const apt of dbAppointments) {
        // Skip the appointment being excluded
        if (excludeBookingId && apt.id === excludeBookingId) {
          console.log('🔄 Excluding database appointment from conflict check:', {
            appointmentId: apt.id,
            date: apt.appointment_date,
            startTime: apt.start_time,
            endTime: apt.end_time
          });
          continue;
        }

        try {
          const aptStart = createUKDateTime(apt.appointment_date, apt.start_time);
          const aptEnd = createUKDateTime(apt.appointment_date, apt.end_time);
          
          // Filter out appointments with invalid time ranges (end_time before start_time)
          if (aptEnd <= aptStart) {
            console.warn('🚨 Filtered out invalid appointment:', {
              appointmentId: apt.id,
              date: apt.appointment_date,
              start: apt.start_time,
              end: apt.end_time,
              reason: 'end_time before or equal to start_time'
            });
            continue;
          }
          
          dbBusyTimes.push({ start: aptStart, end: aptEnd });
        } catch (dateError) {
          console.error('❌ Error parsing appointment time:', dateError, apt);
        }
      }
    }

    console.log('📊 Database appointments found:', {
      total: dbAppointments?.length || 0,
      conflicts: dbBusyTimes.length,
      excluded: excludeBookingId ? 1 : 0
    });

    // STEP 2: Use filtered Google Calendar busy times and apply same logic as GET method
    const allBusyTimes = filteredBusyTimes;

    // Convert Google Calendar busy times to proper format and sort (same as GET method)
    const calendarBusyTimes = allBusyTimes
      .filter((busy): busy is { start: string; end: string } => 
        busy.start != null && busy.end != null
      )
      .map((busy: { start: string; end: string }) => ({
         start: new Date(busy.start),
         end: new Date(busy.end)
       }))
      .sort((a: { start: Date; end: Date }, b: { start: Date; end: Date }) => a.start.getTime() - b.start.getTime());

    // STEP 3: Combine database and Google Calendar busy times
    const combinedBusyTimes = [...dbBusyTimes, ...calendarBusyTimes]
      .sort((a: { start: Date; end: Date }, b: { start: Date; end: Date }) => a.start.getTime() - b.start.getTime());

    // Merge overlapping busy times (same as GET method)
    const mergedBusyTimes: Array<{ start: Date; end: Date }> = [];
    for (const busyTime of combinedBusyTimes) {
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
      
    // Check if the requested time slot conflicts with any merged busy time
    console.log('🔍 POST method - Checking conflicts for:', {
      requestedStart: startDateTime.toISOString(),
      requestedEnd: endDateTime.toISOString(),
      requestedStartLocal: startDateTime.toLocaleString('en-GB', { timeZone: 'Europe/London' }),
      requestedEndLocal: endDateTime.toLocaleString('en-GB', { timeZone: 'Europe/London' }),
      databaseBusyTimesCount: dbBusyTimes.length,
      googleCalendarBusyTimesCount: calendarBusyTimes.length,
      combinedBusyTimesCount: combinedBusyTimes.length,
      mergedBusyTimesCount: mergedBusyTimes.length,
      excludeBookingId,
      excludeEventId,
      mergedBusyTimes: mergedBusyTimes.map(bt => ({
        start: bt.start.toISOString(),
        end: bt.end.toISOString(),
        startLocal: bt.start.toLocaleString('en-GB', { timeZone: 'Europe/London' }),
        endLocal: bt.end.toLocaleString('en-GB', { timeZone: 'Europe/London' })
      }))
    });

    const hasConflict = mergedBusyTimes.some(busy => {
      const conflict = (
        (startDateTime >= busy.start && startDateTime < busy.end) ||
        (endDateTime > busy.start && endDateTime <= busy.end) ||
        (startDateTime <= busy.start && endDateTime >= busy.end)
      );
      
      if (conflict) {
        console.log('🔍 POST method - Found conflict with:', {
          busyStart: busy.start.toISOString(),
          busyEnd: busy.end.toISOString(),
          busyStartLocal: busy.start.toLocaleString('en-GB', { timeZone: 'Europe/London' }),
          busyEndLocal: busy.end.toLocaleString('en-GB', { timeZone: 'Europe/London' })
        });
      }
      
      return conflict;
    });

    const isAvailable = !hasConflict;
    console.log('🔍 POST method - Final result:', { isAvailable, hasConflict });

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