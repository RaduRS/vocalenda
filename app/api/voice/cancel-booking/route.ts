import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { getCalendarService } from '@/lib/calendar';
import { findBookingByFuzzyName, extractCustomerPhone } from '@/lib/fuzzy-matching';
import { getCurrentUKDateTime } from '@/lib/date-utils';
import { getFillerPhrase, FillerContext } from '@/lib/conversation-utils';

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
      date,
      time,
      reason,
      caller_phone,
      sessionId
    } = await request.json();

    console.log('❌ Cancel booking request:', {
      business_id,
      customer_name,
      date,
      time,
      reason,
      caller_phone
    });

    // Validate required parameters
    if (!business_id || !customer_name || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required parameters: business_id, customer_name, date, time' },
        { status: 400 }
      );
    }

    // Validate caller phone for voice bookings security
    if (!caller_phone) {
      return NextResponse.json(
        { error: 'Phone number verification required for cancellations' },
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

    // Generate filler phrase for conversational response (Core Rule D: Filler Strategy)
    // This phrase should be spoken by the AI immediately while background processing occurs
    const fillerPhrase = (customer_name && sessionId) ? getFillerPhrase({
      customerName: customer_name,
      serviceName: '', // Will be filled after finding the booking
      requestedDate: date,
      requestedTime: time,
      operation: 'cancel'
    }) : undefined;

    // Find the existing booking by exact customer name, date, and time
    // Note: start_time is stored as just the time (e.g., "13:00:00") and appointment_date as date
    const timeWithSeconds = time.includes(':') && time.split(':').length === 3 ? time.substring(0, 5) : time;
    
    const { data: existingBookings, error: findError } = await supabaseAdmin
      .from('appointments')
      .select(`
        *,
        customers(*),
        services(*)
      `)
      .eq('business_id', business_id)
      .eq('appointment_date', date)
      .eq('start_time', timeWithSeconds)
      .neq('status', 'cancelled');

    if (findError) {
      console.error('Error finding booking:', findError);
      return NextResponse.json(
        { error: 'Error finding booking' },
        { status: 500 }
      );
    }

    console.log('📋 Found bookings for date/time:', existingBookings?.length || 0);
    if (existingBookings && existingBookings.length > 0) {
      existingBookings.forEach((booking, index) => {
        console.log(`📝 Booking ${index + 1}:`, {
          id: booking.id,
          notes: booking.notes,
          customer_name: booking.customers ? `${booking.customers.first_name} ${booking.customers.last_name}` : 'No customer record'
        });
      });
    }

    // Find booking using fuzzy name matching
    const existingBooking = findBookingByFuzzyName(existingBookings || [], customer_name);

    if (!existingBooking) {
      console.error('Booking not found for:', { customer_name, date, time });
      return NextResponse.json(
        { error: `No booking found for ${customer_name} on ${date} at ${time}. Please check the exact name, date, and time.` },
        { status: 404 }
      );
    }

    console.log('✅ Found existing booking to cancel:', existingBooking.id);

    // Verify caller phone matches the customer's phone number
    const customerPhone = extractCustomerPhone(existingBooking);
    if (customerPhone !== caller_phone) {
      console.error('Phone verification failed:', {
        customer_phone: customerPhone,
        caller_phone
      });
      return NextResponse.json(
        { error: 'Phone number verification failed. You must call from the same number used to make the booking.' },
        { status: 403 }
      );
    }

    console.log('✅ Phone verification successful');

    // Atomic update: only cancel if status is still 'confirmed' to prevent race conditions
    const { data: cancelledBooking, error: updateError } = await supabaseAdmin
      .from('appointments')
      .update({
        status: 'cancelled',
        notes: reason ? `Cancelled: ${reason}` : 'Cancelled by customer',
        updated_at: getCurrentUKDateTime().toISOString()
      })
      .eq('id', existingBooking.id)
      .eq('status', 'confirmed') // Only update if still confirmed
      .select(`
        *,
        customers(*),
        services(*)
      `)
      .single();

    if (updateError) {
      console.error('Error cancelling booking:', updateError);
      return NextResponse.json(
        { error: 'Failed to cancel booking in database' },
        { status: 500 }
      );
    }

    // Check if the booking was actually updated (race condition check)
    if (!cancelledBooking) {
      console.log('⚠️ Booking was already cancelled by another request');
      return NextResponse.json(
        { 
          success: true, 
          message: 'Booking was already cancelled',
          booking: {
            id: existingBooking.id,
            customer_name: customer_name,
            service_name: existingBooking.services?.name,
            date: existingBooking.appointment_date,
            start_time: existingBooking.start_time,
            end_time: existingBooking.end_time,
            status: 'cancelled'
          },
          ...(fillerPhrase && { fillerPhrase }),
          ...(sessionId && { sessionId })
        },
        { status: 200 }
      );
    }

    // Delete Google Calendar event
    if (existingBooking.google_calendar_event_id) {
      try {
        const calendarService = await getCalendarService(business_id);
        if (calendarService) {
          await calendarService.deleteEvent(
            business.google_calendar_id,
            existingBooking.google_calendar_event_id
          );
          console.log('✅ Google Calendar event deleted');
        }
      } catch (calendarError) {
        console.error('⚠️ Failed to delete Google Calendar event:', calendarError);
        // Don't fail the entire operation if calendar deletion fails
      }
    }

    console.log('✅ Booking cancelled successfully:', cancelledBooking.id);

    return NextResponse.json({
      success: true,
      message: 'Booking cancelled successfully',
      booking: {
        id: cancelledBooking.id,
        customer_name: cancelledBooking.customers 
          ? `${cancelledBooking.customers.first_name} ${cancelledBooking.customers.last_name}`.trim()
          : customer_name, // Use the provided customer name for voice bookings
        service_name: cancelledBooking.services?.name,
        date: cancelledBooking.appointment_date,
        start_time: cancelledBooking.start_time,
        end_time: cancelledBooking.end_time,
        status: cancelledBooking.status,
        cancellation_reason: reason
      },
      ...(fillerPhrase && { fillerPhrase }),
      ...(sessionId && { sessionId })
    });

  } catch (error) {
    console.error('❌ Cancel booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}