import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCalendarService } from '@/lib/calendar';
import { createUKDateTime } from '@/lib/date-utils';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

/**
 * POST /api/calendar/slots/check-availability
 * 
 * Checks if a specific time slot is available for booking.
 * This endpoint is used by the voice booking system to prevent double bookings.
 */
export async function POST(request: NextRequest) {
  try {
    // Verify internal API secret
    const internalSecret = request.headers.get('x-internal-secret');
    if (!internalSecret || internalSecret !== process.env.INTERNAL_API_SECRET) {
      console.error('❌ Unauthorized access to availability check endpoint');
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { businessId, serviceId, appointmentDate, startTime, endTime } = body;

    // Validate required parameters
    if (!businessId || !serviceId || !appointmentDate || !startTime || !endTime) {
      console.error('❌ Missing required parameters for availability check:', {
        businessId: !!businessId,
        serviceId: !!serviceId,
        appointmentDate: !!appointmentDate,
        startTime: !!startTime,
        endTime: !!endTime,
      });
      return NextResponse.json(
        { error: 'Missing required parameters' },
        { status: 400 }
      );
    }

    console.log('🔍 Checking availability for:', {
      businessId,
      serviceId,
      appointmentDate,
      startTime,
      endTime,
    });

    // Fetch business details
    const { data: business, error: businessError } = await supabase
      .from('businesses')
      .select('*')
      .eq('id', businessId)
      .single();

    if (businessError || !business) {
      console.error('❌ Business not found:', businessError);
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    // Fetch service details
    const { data: service, error: serviceError } = await supabase
      .from('services')
      .select('*')
      .eq('id', serviceId)
      .eq('business_id', businessId)
      .single();

    if (serviceError || !service) {
      console.error('❌ Service not found:', serviceError);
      return NextResponse.json(
        { error: 'Service not found' },
        { status: 404 }
      );
    }

    // Initialize calendar service
    const calendarService = await getCalendarService(businessId);
    if (!calendarService) {
      console.error('❌ Failed to initialize calendar service');
      return NextResponse.json(
        { error: 'Calendar service unavailable' },
        { status: 503 }
      );
    }

    // Parse the appointment date and time
    // Handle both ISO format (YYYY-MM-DD) and UK format (DD/MM/YYYY)
    let appointmentDateTime;
    try {
      if (appointmentDate.includes('-') && appointmentDate.length === 10) {
        // ISO format: YYYY-MM-DD
        const [year, month, day] = appointmentDate.split('-');
        const ukDate = `${day}/${month}/${year}`;
        appointmentDateTime = createUKDateTime(ukDate, startTime);
      } else {
        // UK format: DD/MM/YYYY
        appointmentDateTime = createUKDateTime(appointmentDate, startTime);
      }
    } catch (dateError) {
      console.error('❌ Date parsing error:', dateError);
      return NextResponse.json(
        { error: 'Invalid date format. Expected YYYY-MM-DD or DD/MM/YYYY' },
        { status: 400 }
      );
    }
    
    const endDateTime = new Date(appointmentDateTime.getTime() + (service.duration_minutes * 60 * 1000));

    // Check if the time slot is available
    const isAvailable = await calendarService.isTimeSlotAvailable(
      business.google_calendar_id,
      appointmentDateTime,
      endDateTime,
      business.timezone || 'Europe/London'
    );

    console.log('📋 Availability check result:', {
      available: isAvailable,
      slot: `${appointmentDate} ${startTime}-${endTime}`,
    });

    return NextResponse.json({
      available: isAvailable,
      businessId,
      serviceId,
      appointmentDate,
      startTime,
      endTime,
      message: isAvailable 
        ? 'Slot is available' 
        : 'Slot is not available - already booked or conflicts with existing appointment',
    });

  } catch (error) {
    console.error('❌ Error checking availability:', error);
    return NextResponse.json(
      { error: 'Internal server error while checking availability' },
      { status: 500 }
    );
  }
}