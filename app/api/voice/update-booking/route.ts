import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCalendarService } from '@/lib/calendar';
import { findBookingByFuzzyName } from '@/lib/fuzzy-matching';
import { createUKDateTime, formatISOTime } from '@/lib/date-utils';
import { addMinutes } from 'date-fns';
import { getFillerPhrase, FillerContext } from '@/lib/conversation-utils';

// Type for database appointment with joined tables
type AppointmentWithRelations = {
  id: string;
  customer_id: string;
  service_id: string;
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
    const internalSecret = request.headers.get('x-internal-secret');
    if (internalSecret !== process.env.INTERNAL_API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {
      business_id,
      customer_name,
      current_date,
      current_time,
      new_date,
      new_time,
      new_service_id,
      caller_phone,
      sessionId
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

    if (!caller_phone) {
      return NextResponse.json(
        { error: 'Phone number verification required for updates' },
        { status: 400 }
      );
    }

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
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    // Generate filler phrase for voice calls
    let fillerPhrase = '';
    if (customer_name && sessionId) {
      const fillerContext: FillerContext = {
        customerName: customer_name,
        serviceName: '',
        requestedDate: new_date || current_date,
        requestedTime: new_time || current_time,
        operation: 'update'
      };
      fillerPhrase = getFillerPhrase(fillerContext);
    }

    // STEP 1: Find the existing booking
    console.log('🔍 Step 1: Finding existing booking...');
    
    const currentTimeFormatted = current_time.includes(':') && current_time.split(':').length === 3 ? current_time.substring(0, 5) : current_time;
    
    const { data: existingBookings, error: findError } = await supabaseAdmin
      .from('appointments')
      .select(`
        *,
        customers(*),
        services(*)
      `)
      .eq('business_id', business_id)
      .eq('appointment_date', current_date)
      .or(`start_time.eq.${currentTimeFormatted},start_time.eq.${current_time}`)
      .neq('status', 'cancelled');

    if (findError) {
      console.error('Error finding booking:', findError);
      return NextResponse.json({ error: 'Error finding booking' }, { status: 500 });
    }

    const existingBooking = findBookingByFuzzyName(existingBookings || [], customer_name) as AppointmentWithRelations;

    if (!existingBooking) {
      console.error('Booking not found for:', { customer_name, current_date, current_time });
      return NextResponse.json(
        { error: `No booking found for ${customer_name} on ${current_date} at ${current_time}. Please check the exact name, date, and time.` },
        { status: 404 }
      );
    }

    // Verify caller phone matches
    if (existingBooking.customers?.phone !== caller_phone) {
      console.error('Phone verification failed');
      return NextResponse.json(
        { error: 'Phone number verification failed. You must call from the same number used to make the booking.' },
        { status: 403 }
      );
    }

    console.log('✅ Found existing booking:', existingBooking.id);

    // Validate that existing booking has a valid service_id
    if (!existingBooking.service_id) {
      console.error('❌ Existing booking has null service_id:', existingBooking.id);
      return NextResponse.json(
        { error: 'This booking has an invalid service configuration. Please contact support.' },
        { status: 400 }
      );
    }

    // Validate new service_id if provided
    if (new_service_id) {
      const { data: newService, error: serviceError } = await supabaseAdmin
        .from('services')
        .select('id, name, duration_minutes')
        .eq('id', new_service_id)
        .eq('business_id', business_id)
        .single();

      if (serviceError || !newService) {
        console.error('❌ Invalid new service_id:', new_service_id);
        return NextResponse.json(
          { error: 'Invalid service selected. Please choose a valid service.' },
          { status: 400 }
        );
      }
    }

    // STEP 2: Check availability for new time (if changing date/time)
    const finalDate = new_date || current_date;
    const finalTime = new_time || current_time;
    const finalServiceId = new_service_id || existingBooking.service_id;

    if (new_date || new_time) {
      console.log('🔍 Step 2: Checking availability for new time...');
      
      // Get service duration
      let serviceDuration = 60; // default
      if (finalServiceId) {
        const { data: service } = await supabaseAdmin
          .from('services')
          .select('duration_minutes')
          .eq('id', finalServiceId)
          .single();
        serviceDuration = service?.duration_minutes || 60;
      }

      // Calculate end time
      const startDateTime = createUKDateTime(finalDate, finalTime);
      const endDateTime = addMinutes(startDateTime, serviceDuration);
      const endTimeFormatted = formatISOTime(endDateTime);

      // Check availability using the existing availability API
      const availabilityResponse = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/calendar/availability`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-internal-secret': process.env.INTERNAL_API_SECRET!,
          },
          body: JSON.stringify({
            businessId: business_id,
            serviceId: finalServiceId,
            appointmentDate: finalDate,
            startTime: finalTime,
            endTime: endTimeFormatted,
            excludeBookingId: existingBooking.id, // Exclude current booking from conflict check
            customerName: customer_name,
            sessionId,
          }),
        }
      );

      const availabilityResult = await availabilityResponse.json();
      
      if (!availabilityResult.available) {
        console.log('❌ New time slot not available');
        return NextResponse.json(
          { 
            error: `The time slot ${finalDate} at ${finalTime} is not available. Please select another time.`,
            fillerPhrase: fillerPhrase || undefined,
            sessionId: sessionId || undefined
          },
          { status: 409 }
        );
      }

      console.log('✅ New time slot is available');
    }

    // STEP 3: Create new booking (just like create booking)
    console.log('🔄 Step 3: Creating new booking...');

    // Get service duration for new booking
    let serviceDuration = 60;
    if (finalServiceId) {
      const { data: service } = await supabaseAdmin
        .from('services')
        .select('duration_minutes')
        .eq('id', finalServiceId)
        .single();
      serviceDuration = service?.duration_minutes || 60;
    }

    // Calculate new booking times
    const newStartDateTime = createUKDateTime(finalDate, finalTime);
    const newEndDateTime = addMinutes(newStartDateTime, serviceDuration);
    const newEndTimeFormatted = formatISOTime(newEndDateTime);

    // Create new booking data
    const newBookingData = {
      business_id: business_id,
      customer_id: existingBooking.customer_id,
      service_id: finalServiceId,
      appointment_date: finalDate,
      start_time: finalTime,
      end_time: newEndTimeFormatted,
      status: 'confirmed',
      notes: existingBooking.notes,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };

    // Insert new booking
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
      console.error('❌ Error creating new booking:', createError);
      
      // Check if this is a conflict error
      if (createError?.message?.includes('Appointment time slot conflicts') || 
          createError?.message?.includes('duplicate') || 
          createError?.message?.includes('conflict')) {
        return NextResponse.json(
          { 
            error: `The time slot ${finalDate} at ${finalTime} was just booked by someone else. Please select another time.`,
            fillerPhrase: fillerPhrase || undefined,
            sessionId: sessionId || undefined
          },
          { status: 409 }
        );
      }
      
      return NextResponse.json({ error: 'Failed to create new booking' }, { status: 500 });
    }

    console.log('✅ Created new booking:', newBooking.id);

    // STEP 4: Create Google Calendar event for new booking
    console.log('📅 Step 4: Creating Google Calendar event...');
    
    let newCalendarEventId = null;
    try {
      const calendarService = await getCalendarService(business_id);
      if (calendarService) {
        const event = {
          summary: `${customer_name} - ${newBooking.services?.name || 'Appointment'}`,
          start: {
            dateTime: newStartDateTime.toISOString(),
            timeZone: business.timezone || 'Europe/London',
          },
          end: {
            dateTime: newEndDateTime.toISOString(),
            timeZone: business.timezone || 'Europe/London',
          },
          description: `Customer: ${customer_name}\nPhone: ${existingBooking.customers?.phone}\nService: ${newBooking.services?.name || 'N/A'}${newBooking.notes ? `\nNotes: ${newBooking.notes}` : ''}`,
        };

        newCalendarEventId = await calendarService.createEvent(business.google_calendar_id, event);
        console.log('✅ Created Google Calendar event:', newCalendarEventId);

        // Update new booking with calendar event ID
        await supabaseAdmin
          .from('appointments')
          .update({ google_calendar_event_id: newCalendarEventId })
          .eq('id', newBooking.id);
      }
    } catch (calendarError) {
      console.error('⚠️ Google Calendar error (continuing anyway):', calendarError);
    }

    // STEP 5: Delete old booking and its calendar event
    console.log('🗑️ Step 5: Deleting old booking...');

    // Delete old Google Calendar event first
    if (existingBooking.google_calendar_event_id) {
      try {
        const calendarService = await getCalendarService(business_id);
        if (calendarService) {
          await calendarService.deleteEvent(
            business.google_calendar_id,
            existingBooking.google_calendar_event_id
          );
          console.log('✅ Deleted old Google Calendar event');
        }
      } catch (calendarError) {
        console.error('⚠️ Error deleting old calendar event (continuing anyway):', calendarError);
      }
    }

    // Delete old booking from database
    const { error: deleteError } = await supabaseAdmin
      .from('appointments')
      .delete()
      .eq('id', existingBooking.id);

    if (deleteError) {
      console.error('❌ Error deleting old booking:', deleteError);
      // Don't fail the whole operation - new booking is already created
    } else {
      console.log('✅ Deleted old booking:', existingBooking.id);
    }

    // Return success response
    return NextResponse.json({
      success: true,
      message: `Booking updated successfully! ${customer_name}'s appointment has been moved to ${finalDate} at ${finalTime}.`,
      booking: {
        id: newBooking.id,
        customer_name: customer_name,
        appointment_date: finalDate,
        start_time: finalTime,
        end_time: newEndTimeFormatted,
        service_name: newBooking.services?.name || 'N/A',
        google_calendar_event_id: newCalendarEventId
      },
      fillerPhrase: fillerPhrase || undefined,
      sessionId: sessionId || undefined
    });

  } catch (error) {
    console.error('❌ Unexpected error in update booking:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}