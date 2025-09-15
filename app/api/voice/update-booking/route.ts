import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCalendarService } from '@/lib/calendar';
import { findBookingByFuzzyName } from '@/lib/fuzzy-matching';
import { createUKDateTime, formatISOTime, getCurrentUKDateTime } from '@/lib/date-utils';
import { parseISO, addMinutes } from 'date-fns';

// Type for database appointment with joined tables
type AppointmentWithRelations = {
  id: string;
  customer_id: string;
  service_id: string | null;
  appointment_date: string;
  start_time: string;
  end_time: string;
  google_calendar_event_id: string | null;
  notes: string | null;
  status: string;
  customers: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    phone: string;
  } | null;
  services: {
    id: string;
    name: string;
    duration_minutes: number;
  } | null;
};

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

export async function POST(request: NextRequest) {
  try {
    // Verify internal API secret
    const internalSecret = request.headers.get('X-Internal-Secret');
    if (internalSecret !== process.env.INTERNAL_API_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const {
      business_id,
      customer_name,
      current_date,
      current_time,
      new_date,
      new_time,
      new_service_id,
      caller_phone
    } = await request.json();

    console.log('📝 Update booking request:', {
      business_id,
      customer_name,
      current_date,
      current_time,
      new_date,
      new_time,
      new_service_id,
      caller_phone
    });

    // Validate required parameters
    if (!business_id || !customer_name || !current_date || !current_time) {
      return NextResponse.json(
        { error: 'Missing required parameters: business_id, customer_name, current_date, current_time' },
        { status: 400 }
      );
    }

    // Validate caller phone for voice bookings security
    if (!caller_phone) {
      return NextResponse.json(
        { error: 'Phone number verification required for updates' },
        { status: 400 }
      );
    }

    // At least one new value must be provided
    if (!new_date && !new_time && !new_service_id) {
      return NextResponse.json(
        { error: 'At least one update field must be provided: new_date, new_time, or new_service_id' },
        { status: 400 }
      );
    }

    // Get business details
    const { data: business, error: businessError } = await supabaseAdmin
      .from('businesses')
      .select('*')
      .eq('id', business_id)
      .single();

    if (businessError || !business) {
      console.error('Business not found:', businessError);
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    // Find the existing booking by exact customer name, date, and time
    // Note: start_time can be stored as "13:30" or "13:30:00" depending on how it was created
    const currentTimeWithSeconds = current_time.includes(':') && current_time.split(':').length === 2 ? `${current_time}:00` : current_time;
    const currentTimeWithoutSeconds = current_time.includes(':') && current_time.split(':').length === 3 ? current_time.substring(0, 5) : current_time;
    
    const { data: existingBookings, error: findError } = await supabaseAdmin
      .from('appointments')
      .select(`
        *,
        customers(*),
        services(*)
      `)
      .eq('business_id', business_id)
      .eq('appointment_date', current_date)
      .or(`start_time.eq.${currentTimeWithSeconds},start_time.eq.${currentTimeWithoutSeconds}`)
      .neq('status', 'cancelled');

    if (findError) {
      console.error('Error finding booking:', findError);
      return NextResponse.json(
        { error: 'Error finding booking' },
        { status: 500 }
      );
    }

    // Find booking using fuzzy name matching
    const existingBooking = findBookingByFuzzyName(existingBookings || [], customer_name) as AppointmentWithRelations;

    if (!existingBooking) {
      console.error('Booking not found for:', { customer_name, current_date, current_time });
      return NextResponse.json(
        { error: `No booking found for ${customer_name} on ${current_date} at ${current_time}. Please check the exact name, date, and time.` },
        { status: 404 }
      );
    }

    console.log('✅ Found existing booking:', existingBooking.id);

    // Verify caller phone matches the customer's phone number
    if (existingBooking.customers?.phone !== caller_phone) {
      console.error('Phone verification failed:', {
        customer_phone: existingBooking.customers?.phone,
        caller_phone
      });
      return NextResponse.json(
        { error: 'Phone number verification failed. You must call from the same number used to make the booking.' },
        { status: 403 }
      );
    }

    console.log('✅ Phone verification successful');

    // Prepare update data
    const updates: {
      service_id?: string;
      appointment_date?: string;
      start_time?: string;
      end_time?: string;
      updated_at?: string;
    } = {};
    let newStartTime = existingBooking.start_time;
    let newEndTime = existingBooking.end_time;
    let serviceDuration = existingBooking.services?.duration_minutes || 60;

    // Handle service change
    if (new_service_id) {
      const { data: newService, error: serviceError } = await supabaseAdmin
        .from('services')
        .select('*')
        .eq('id', new_service_id)
        .eq('business_id', business_id)
        .single();

      if (serviceError || !newService) {
        return NextResponse.json(
          { error: 'New service not found' },
          { status: 404 }
        );
      }

      updates.service_id = new_service_id;
      serviceDuration = newService.duration_minutes;
    }

    // Handle date/time changes
    if (new_date || new_time) {
      const finalDate = new_date || existingBooking.appointment_date;
      const finalTime = new_time || existingBooking.start_time;
      
      console.log('🔧 Input values:', { finalDate, finalTime, serviceDuration });
      
      // Ensure time format is correct (HH:MM)
      const normalizedTime = finalTime.includes(':') && finalTime.split(':').length === 2 ? finalTime : `${finalTime}:00`;
      
      // Create datetime for calendar operations
      const startDateTime = createUKDateTime(finalDate, normalizedTime);
      const endDateTime = addMinutes(startDateTime, serviceDuration);
      
      console.log('🔧 DateTime objects:', {
        startDateTime: startDateTime.toISOString(),
        endDateTime: endDateTime.toISOString(),
        startDateTimeLocal: startDateTime.toString(),
        endDateTimeLocal: endDateTime.toString()
      });
      
      // Store just the time part in start_time field (matching database schema)
      const finalTimeWithSeconds = normalizedTime.includes(':') && normalizedTime.split(':').length === 2 ? `${normalizedTime}:00` : normalizedTime;
      const calculatedEndTime = formatISOTime(endDateTime);
      
      newStartTime = startDateTime.toISOString(); // For calendar operations
      newEndTime = endDateTime.toISOString(); // For calendar operations

      updates.appointment_date = finalDate;
      updates.start_time = finalTimeWithSeconds; // Store just time, not datetime
      updates.end_time = calculatedEndTime; // Store just time, not datetime
      
      console.log('🔧 Final update values:', {
        'updates.appointment_date': updates.appointment_date,
        'updates.start_time': updates.start_time,
        'updates.end_time': updates.end_time,
        calculatedEndTime
      });
    }

    // Check availability for new time slot (if time is changing)
    if (new_date || new_time) {
      const calendarService = await getCalendarService(business_id);
      if (!calendarService) {
        return NextResponse.json(
          { error: 'Calendar service unavailable' },
          { status: 500 }
        );
      }

      // Check availability by querying Google Calendar directly
      // Use UK local time for the availability check, not UTC
      const finalDate = new_date || current_date;
      const finalTime = new_time || current_time;
      const normalizedTime = finalTime.includes(':') && finalTime.split(':').length === 2 ? finalTime : `${finalTime}:00`;
      const finalTimeWithSeconds = normalizedTime.includes(':') && normalizedTime.split(':').length === 2 ? `${normalizedTime}:00` : normalizedTime;
      
      // Calculate end time in UK local time
      const startDateTime = createUKDateTime(finalDate, normalizedTime);
      const endDateTime = addMinutes(startDateTime, serviceDuration);
      const endTimeFormatted = formatISOTime(endDateTime);
      
      console.log('🔧 Availability check params:', {
        finalDate,
        startTime: finalTimeWithSeconds,
        endTime: endTimeFormatted,
        originalNewTime: new_time,
        normalizedTime,
        serviceDuration
      });

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/calendar/availability`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-internal-secret': process.env.INTERNAL_API_SECRET!,
          },
          body: JSON.stringify({
            businessId: business.id,
            serviceId: existingBooking.service_id,
            appointmentDate: finalDate,
            startTime: finalTimeWithSeconds,
            endTime: endTimeFormatted,
          }),
        }
      );

      const availabilityResult = await response.json();
      const isAvailable = availabilityResult.available === true;

      if (!isAvailable) {
        return NextResponse.json(
          { error: `The new time slot ${new_date || current_date} at ${new_time || current_time} is not available` },
          { status: 409 }
        );
      }
    }

    // Create new booking with updated details
    const newBookingData = {
      business_id: business_id,
      customer_id: existingBooking.customer_id,
      service_id: updates.service_id || existingBooking.service_id,
      appointment_date: updates.appointment_date || existingBooking.appointment_date,
      start_time: updates.start_time || existingBooking.start_time,
      end_time: updates.end_time || existingBooking.end_time,
      status: 'confirmed',
      notes: existingBooking.notes,
      created_at: getCurrentUKDateTime().toISOString(),
      updated_at: getCurrentUKDateTime().toISOString()
    };

    const { data: newBooking, error: createError } = await supabaseAdmin
      .from('appointments')
      .insert(newBookingData)
      .select(`
        *,
        customers(*),
        services(*)
      `)
      .single() as { data: AppointmentWithRelations | null; error: Error | null };

    if (createError || !newBooking) {
      console.error('Error creating new booking:', createError);
      return NextResponse.json(
        { error: 'Failed to create new booking in database' },
        { status: 500 }
      );
    }

    console.log('✅ Created new booking:', newBooking.id);

    // Create new Google Calendar event
    let newCalendarEventId = null;
    try {
      const calendarService = await getCalendarService(business_id);
      if (calendarService) {
        const serviceName = newBooking.services?.name;
        
        // Format datetime for Google Calendar with proper timezone handling
        const startTimeForCalendar = newStartTime.endsWith('Z') ? newStartTime : `${newStartTime}.000`;
        const endTimeForCalendar = newEndTime.endsWith('Z') ? newEndTime : `${newEndTime}.000`;

        const calendarEvent = await calendarService.createEvent(
          business.google_calendar_id,
          {
            summary: `${serviceName} - ${customer_name}`,
            description: `Service: ${serviceName}\nCustomer: ${customer_name}\nPhone: ${newBooking.customers?.phone || 'Not provided'}`,
            start: {
              dateTime: startTimeForCalendar,
              timeZone: business.timezone
            },
            end: {
              dateTime: endTimeForCalendar,
              timeZone: business.timezone
            }
          }
        );
        
        newCalendarEventId = calendarEvent || null;
        console.log('✅ New Google Calendar event created:', newCalendarEventId);
        
        // Update the new booking with the calendar event ID
        await supabaseAdmin
          .from('appointments')
          .update({ google_calendar_event_id: newCalendarEventId })
          .eq('id', newBooking!.id);
      }
    } catch (calendarError) {
      console.error('⚠️ Failed to create new Google Calendar event:', calendarError);
      // Continue with deletion of old booking even if calendar creation fails
    }

    // Delete old Google Calendar event
    if (existingBooking.google_calendar_event_id) {
      try {
        const calendarService = await getCalendarService(business_id);
        if (calendarService) {
          await calendarService.deleteEvent(
            business.google_calendar_id,
            existingBooking.google_calendar_event_id
          );
          console.log('✅ Old Google Calendar event deleted');
        }
      } catch (calendarError) {
        console.error('⚠️ Failed to delete old Google Calendar event:', calendarError);
        // Don't fail the entire operation if calendar deletion fails
      }
    }

    // Delete old booking from database
    const { error: deleteError } = await supabaseAdmin
      .from('appointments')
      .delete()
      .eq('id', existingBooking.id);

    if (deleteError) {
      console.error('⚠️ Failed to delete old booking:', deleteError);
      // Don't fail the entire operation if old booking deletion fails
      // The new booking is already created successfully
    } else {
      console.log('✅ Old booking deleted:', existingBooking.id);
    }

    console.log('✅ Booking updated successfully:', newBooking.id);

    return NextResponse.json({
      success: true,
      message: 'Booking updated successfully',
      booking: {
        id: newBooking.id,
        customer_name: newBooking.customers 
          ? `${newBooking.customers.first_name} ${newBooking.customers.last_name}`.trim()
          : customer_name, // Use the provided customer name for voice bookings
        service_name: newBooking.services?.name,
        date: newBooking.appointment_date,
        start_time: newBooking.start_time,
        end_time: newBooking.end_time,
        status: newBooking.status
      }
    });

  } catch (error) {
    console.error('❌ Update booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}