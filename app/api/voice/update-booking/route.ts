import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCalendarService } from '@/lib/calendar';

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
      new_service_id
    } = await request.json();

    console.log('📝 Update booking request:', {
      business_id,
      customer_name,
      current_date,
      current_time,
      new_date,
      new_time,
      new_service_id
    });

    // Validate required parameters
    if (!business_id || !customer_name || !current_date || !current_time) {
      return NextResponse.json(
        { error: 'Missing required parameters: business_id, customer_name, current_date, current_time' },
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
    const currentDateTime = `${current_date}T${current_time}:00`;
    
    const { data: existingBookings, error: findError } = await supabaseAdmin
      .from('appointments')
      .select(`
        *,
        customers!inner(*),
        services(*)
      `)
      .eq('business_id', business_id)
      .eq('start_time', currentDateTime)
      .neq('status', 'cancelled');

    if (findError) {
      console.error('Error finding booking:', findError);
      return NextResponse.json(
        { error: 'Error finding booking' },
        { status: 500 }
      );
    }

    // Find booking with exact customer name match
    const existingBooking = existingBookings?.find(booking => {
      const fullName = `${booking.customers.first_name} ${booking.customers.last_name}`.trim();
      return fullName.toLowerCase() === customer_name.toLowerCase();
    });

    if (!existingBooking) {
      console.error('Booking not found for:', { customer_name, current_date, current_time });
      return NextResponse.json(
        { error: `No booking found for ${customer_name} on ${current_date} at ${current_time}. Please check the exact name, date, and time.` },
        { status: 404 }
      );
    }

    console.log('✅ Found existing booking:', existingBooking.id);

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
      const finalDate = new_date || current_date;
      const finalTime = new_time || current_time;
      
      newStartTime = `${finalDate}T${finalTime}:00`;
      const startDateTime = new Date(newStartTime);
      const endDateTime = new Date(startDateTime.getTime() + serviceDuration * 60000);
      newEndTime = endDateTime.toISOString().slice(0, 19);

      updates.appointment_date = finalDate;
      updates.start_time = newStartTime;
      updates.end_time = newEndTime;
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

      const startDateTime = new Date(newStartTime);
      const endDateTime = new Date(newEndTime);

      const isAvailable = await calendarService.isTimeSlotAvailable(
        business.google_calendar_id,
        startDateTime,
        endDateTime,
        business.timezone
      );

      if (!isAvailable) {
        return NextResponse.json(
          { error: `The new time slot ${new_date || current_date} at ${new_time || current_time} is not available` },
          { status: 409 }
        );
      }
    }

    // Update the booking in database
    const { data: updatedBooking, error: updateError } = await supabaseAdmin
      .from('appointments')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', existingBooking.id)
      .select(`
        *,
        customers(*),
        services(*)
      `)
      .single();

    if (updateError) {
      console.error('Error updating booking:', updateError);
      return NextResponse.json(
        { error: 'Failed to update booking in database' },
        { status: 500 }
      );
    }

    // Update Google Calendar event
    if (existingBooking.google_calendar_event_id) {
      try {
        const calendarService = await getCalendarService(business_id);
        if (calendarService) {
          const serviceName = updates.service_id ? 
            (await supabaseAdmin.from('services').select('name').eq('id', updates.service_id).single()).data?.name :
            existingBooking.services?.name;

          await calendarService.updateEvent(
            business.google_calendar_id,
            existingBooking.google_calendar_event_id,
            {
              summary: `${serviceName} - ${customer_name}`,
              description: `Service: ${serviceName}\nCustomer: ${customer_name}\nPhone: ${existingBooking.customers.phone || 'Not provided'}`,
              start: {
                dateTime: new Date(newStartTime).toISOString(),
                timeZone: business.timezone
              },
              end: {
                dateTime: new Date(newEndTime).toISOString(),
                timeZone: business.timezone
              }
            }
          );
          console.log('✅ Google Calendar event updated');
        }
      } catch (calendarError) {
        console.error('⚠️ Failed to update Google Calendar event:', calendarError);
        // Don't fail the entire operation if calendar update fails
      }
    }

    console.log('✅ Booking updated successfully:', updatedBooking.id);

    return NextResponse.json({
      success: true,
      message: 'Booking updated successfully',
      booking: {
        id: updatedBooking.id,
        customer_name: `${updatedBooking.customers.first_name} ${updatedBooking.customers.last_name}`.trim(),
        service_name: updatedBooking.services?.name,
        date: updatedBooking.appointment_date,
        start_time: updatedBooking.start_time,
        end_time: updatedBooking.end_time,
        status: updatedBooking.status
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