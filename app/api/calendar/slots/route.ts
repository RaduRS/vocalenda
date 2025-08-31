import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { createClient } from '@supabase/supabase-js';
import { getCalendarService } from '@/lib/calendar';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Get available time slots for a business
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

    // Get business and service details
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

    // Get calendar service
    const calendarService = await getCalendarService(businessId);
    if (!calendarService) {
      return NextResponse.json(
        { error: 'Calendar service not available' },
        { status: 500 }
      );
    }

    // Validate date format
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
      console.error(`Invalid date format: ${date}`);
      return NextResponse.json(
        { error: 'Invalid date format. Use YYYY-MM-DD' },
        { status: 400 }
      );
    }

    // Parse business hours with enhanced validation
    const businessHours = business.business_hours as Record<string, { start: string; end: string; closed?: boolean }>;
    if (!businessHours || typeof businessHours !== 'object') {
      console.error(`Invalid business hours format for business ${businessId}:`, businessHours);
      return NextResponse.json(
        { error: 'Business hours not configured' },
        { status: 500 }
      );
    }

    const requestDate = new Date(date + 'T00:00:00'); // Ensure proper date parsing
    if (isNaN(requestDate.getTime())) {
      console.error(`Invalid date: ${date}`);
      return NextResponse.json(
        { error: 'Invalid date provided' },
        { status: 400 }
      );
    }

    // UK format: Monday is first day of week (index 0)
    const dayNames = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const jsDay = requestDate.getDay(); // JavaScript: 0=Sunday, 1=Monday, ..., 6=Saturday
    const ukDay = jsDay === 0 ? 6 : jsDay - 1; // Convert to UK format: 0=Monday, 1=Tuesday, ..., 6=Sunday
    const dayOfWeek = dayNames[ukDay];
    console.log(`Date: ${date}, Day of week: ${dayOfWeek}, JS getDay(): ${jsDay}, UK day index: ${ukDay}`);
    
    const dayHours = businessHours[dayOfWeek];
    if (!dayHours || dayHours.closed === true || !dayHours.start || !dayHours.end) {
      console.log(`Business closed on ${dayOfWeek}. Hours:`, dayHours);
      return NextResponse.json(
        { error: `Business is closed on ${dayOfWeek}s` },
        { status: 400 }
      );
    }

    console.log(`Business hours for ${dayOfWeek}:`, dayHours);

    // Get available slots
    const availableSlots = await calendarService.getAvailableSlots(
      business.google_calendar_id,
      requestDate,
      service.duration_minutes,
      { start: dayHours.start, end: dayHours.end },
      business.timezone
    );

    // Format slots for response
    const formattedSlots = availableSlots.map(slot => ({
      start: slot.start.toISOString(),
      end: slot.end.toISOString(),
      startTime: slot.start.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: business.timezone
      }),
      endTime: slot.end.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: business.timezone
      })
    }));

    return NextResponse.json({ slots: formattedSlots });
  } catch (error) {
    console.error('Error getting available slots:', error);
    return NextResponse.json(
      { error: 'Failed to get available slots' },
      { status: 500 }
    );
  }
}

// Create a booking (calendar event)
export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {
      businessId,
      serviceId,
      startTime,
      endTime,
      customerName,
      customerEmail,
      customerPhone,
      notes
    } = await request.json();

    if (!businessId || !serviceId || !startTime || !endTime || !customerName) {
      return NextResponse.json(
        { error: 'Missing required booking information' },
        { status: 400 }
      );
    }

    // Get business details
    const { data: business, error: businessError } = await supabase
      .from('businesses')
      .select('id, name, google_calendar_id, timezone')
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
      .select('name, price, currency')
      .eq('id', serviceId)
      .eq('business_id', businessId)
      .single();

    if (serviceError || !service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    // Get calendar service
    const calendarService = await getCalendarService(businessId);
    if (!calendarService) {
      return NextResponse.json(
        { error: 'Calendar service not available' },
        { status: 500 }
      );
    }

    // Check if slot is still available
    const isAvailable = await calendarService.isTimeSlotAvailable(
      business.google_calendar_id,
      new Date(startTime),
      new Date(endTime),
      business.timezone
    );

    if (!isAvailable) {
      return NextResponse.json(
        { error: 'Time slot is no longer available' },
        { status: 409 }
      );
    }

    // Create customer record if doesn't exist
    let customerId;
    const { data: existingCustomer } = await supabase
      .from('customers')
      .select('id')
      .eq('email', customerEmail)
      .eq('business_id', businessId)
      .single();

    if (existingCustomer) {
      customerId = existingCustomer.id;
    } else {
      const { data: newCustomer, error: customerError } = await supabase
        .from('customers')
        .insert({
          business_id: businessId,
          name: customerName,
          email: customerEmail,
          phone: customerPhone
        })
        .select('id')
        .single();

      if (customerError || !newCustomer) {
        return NextResponse.json(
          { error: 'Failed to create customer record' },
          { status: 500 }
        );
      }
      customerId = newCustomer.id;
    }

    // Create calendar event
    const eventDescription = `
Service: ${service.name}
Customer: ${customerName}
Email: ${customerEmail}
Phone: ${customerPhone || 'Not provided'}
Price: ${service.price ? `${service.currency} ${service.price}` : 'Not specified'}
${notes ? `\nNotes: ${notes}` : ''}
    `.trim();

    const calendarEventId = await calendarService.createEvent(
      business.google_calendar_id,
      {
        summary: `${service.name} - ${customerName}`,
        description: eventDescription,
        start: {
          dateTime: startTime,
          timeZone: business.timezone
        },
        end: {
          dateTime: endTime,
          timeZone: business.timezone
        },
        attendees: customerEmail ? [{
          email: customerEmail,
          displayName: customerName
        }] : undefined
      }
    );

    // Create appointment record
    const { data: appointment, error: appointmentError } = await supabase
      .from('appointments')
      .insert({
        business_id: businessId,
        customer_id: customerId,
        service_id: serviceId,
        start_time: startTime,
        end_time: endTime,
        status: 'confirmed',
        notes,
        calendar_event_id: calendarEventId
      })
      .select('id')
      .single();

    if (appointmentError || !appointment) {
      // Try to delete the calendar event if appointment creation failed
      try {
        await calendarService.deleteEvent(business.google_calendar_id, calendarEventId);
      } catch (deleteError) {
        console.error('Failed to cleanup calendar event:', deleteError);
      }
      
      return NextResponse.json(
        { error: 'Failed to create appointment' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      appointmentId: appointment.id,
      calendarEventId
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}