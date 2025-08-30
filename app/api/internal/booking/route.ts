import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCalendarService } from '@/lib/calendar';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Internal booking endpoint for server-to-server calls (no auth required)
export async function POST(request: NextRequest) {
  try {
    // Verify this is an internal call by checking for a secret header
    const internalSecret = request.headers.get('x-internal-secret');
    if (internalSecret !== process.env.INTERNAL_API_SECRET) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const {
      businessId,
      serviceId,
      startTime,
      endTime,
      customerName,
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
      .select('name, price, currency, duration_minutes')
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
    if (customerPhone) {
      const { data: existingCustomer } = await supabase
        .from('customers')
        .select('id')
        .eq('phone', customerPhone)
        .eq('business_id', businessId)
        .single();

      if (existingCustomer) {
        customerId = existingCustomer.id;
      } else {
        // Split customer name into first and last name
        const nameParts = customerName.trim().split(' ');
        const firstName = nameParts[0] || customerName;
        const lastName = nameParts.slice(1).join(' ') || null;
        
        const { data: newCustomer, error: customerError } = await supabase
          .from('customers')
          .insert({
            business_id: businessId,
            first_name: firstName,
            last_name: lastName,
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
    }

    // Create calendar event
    const eventDescription = `
Service: ${service.name}
Customer: ${customerName}
Phone: ${customerPhone || 'Not provided'}
Price: ${service.price ? `${service.currency || '$'} ${service.price}` : 'Not specified'}
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
        }
      }
    );

    // Create appointment record
    const { data: appointment, error: appointmentError } = await supabase
      .from('appointments')
      .insert({
        business_id: businessId,
        customer_id: customerId || null,
        service_id: serviceId,
        appointment_date: new Date(startTime).toISOString().split('T')[0],
        start_time: new Date(startTime).toTimeString().slice(0, 5),
        end_time: new Date(endTime).toTimeString().slice(0, 5),
        status: 'confirmed',
        notes,
        google_calendar_event_id: calendarEventId
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
    console.error('Error creating internal booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}