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
      date,
      time,
      reason
    } = await request.json();

    console.log('❌ Cancel booking request:', {
      business_id,
      customer_name,
      date,
      time,
      reason
    });

    // Validate required parameters
    if (!business_id || !customer_name || !date || !time) {
      return NextResponse.json(
        { error: 'Missing required parameters: business_id, customer_name, date, time' },
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
    const dateTime = `${date}T${time}:00`;
    
    const { data: existingBookings, error: findError } = await supabaseAdmin
      .from('appointments')
      .select(`
        *,
        customers!inner(*),
        services(*)
      `)
      .eq('business_id', business_id)
      .eq('start_time', dateTime)
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
      console.error('Booking not found for:', { customer_name, date, time });
      return NextResponse.json(
        { error: `No booking found for ${customer_name} on ${date} at ${time}. Please check the exact name, date, and time.` },
        { status: 404 }
      );
    }

    console.log('✅ Found existing booking to cancel:', existingBooking.id);

    // Update the booking status to cancelled
    const { data: cancelledBooking, error: updateError } = await supabaseAdmin
      .from('appointments')
      .update({
        status: 'cancelled',
        notes: reason ? `Cancelled: ${reason}` : 'Cancelled by customer',
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
      console.error('Error cancelling booking:', updateError);
      return NextResponse.json(
        { error: 'Failed to cancel booking in database' },
        { status: 500 }
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
        customer_name: `${cancelledBooking.customers.first_name} ${cancelledBooking.customers.last_name}`.trim(),
        service_name: cancelledBooking.services?.name,
        date: cancelledBooking.appointment_date,
        start_time: cancelledBooking.start_time,
        end_time: cancelledBooking.end_time,
        status: cancelledBooking.status,
        cancellation_reason: reason
      }
    });

  } catch (error) {
    console.error('❌ Cancel booking error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}