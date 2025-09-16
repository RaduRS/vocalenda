import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { findBookingByFuzzyName } from '@/lib/fuzzy-matching';

// Type for database appointment with joined tables (Supabase returns arrays for joins)
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
    const internalSecret = request.headers.get('x-internal-secret');
    if (internalSecret !== process.env.INTERNAL_API_SECRET) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const {
      business_id,
      customer_name,
      caller_phone
    } = await request.json();

    console.log('🔍 Looking up customer bookings:', {
      business_id,
      customer_name,
      caller_phone
    });

    // Validate required parameters
    if (!business_id || !customer_name) {
      return NextResponse.json(
        { error: 'Missing required parameters: business_id, customer_name' },
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
      console.error('❌ Business not found:', businessError);
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    // Get all future appointments for this business
    const { data: appointments, error: appointmentsError } = await supabaseAdmin
      .from('appointments')
      .select(`
        id,
        customer_id,
        service_id,
        appointment_date,
        start_time,
        end_time,
        google_calendar_event_id,
        notes,
        status,
        customers (
          id,
          first_name,
          last_name,
          phone
        ),
        services (
          id,
          name,
          duration_minutes
        )
      `)
      .eq('business_id', business_id)
      .eq('status', 'confirmed')
      .gte('appointment_date', new Date().toISOString().split('T')[0])
      .order('appointment_date', { ascending: true })
      .order('start_time', { ascending: true });

    if (appointmentsError) {
      console.error('❌ Error fetching appointments:', appointmentsError);
      return NextResponse.json(
        { error: 'Failed to fetch appointments' },
        { status: 500 }
      );
    }

    if (!appointments || appointments.length === 0) {
      console.log('❌ No future appointments found for business');
      return NextResponse.json({
        success: false,
        message: 'No future appointments found',
        bookings: []
      });
    }

    // Cast to proper type and convert to BookingRecord format for fuzzy matching
    const typedAppointments = appointments as unknown as AppointmentWithRelations[];
    const bookingRecords = typedAppointments.map(apt => ({
      id: apt.id,
      customers: apt.customers ? {
        first_name: apt.customers.first_name || '',
        last_name: apt.customers.last_name || '',
        phone: apt.customers.phone
      } : null,
      notes: apt.notes,
      services: apt.services ? {
        name: apt.services.name,
        duration_minutes: apt.services.duration_minutes
      } : null,
      appointment_date: apt.appointment_date,
      start_time: apt.start_time,
      end_time: apt.end_time,
      google_calendar_event_id: apt.google_calendar_event_id,
      status: apt.status
    }));

    // Find customer bookings using fuzzy matching
    const matchedBooking = findBookingByFuzzyName(bookingRecords, customer_name);

    if (!matchedBooking) {
      console.log('❌ No bookings found for customer:', customer_name);
      return NextResponse.json({
        success: false,
        message: `No bookings found for customer: ${customer_name}`,
        bookings: []
      });
    }

    // Find the original appointment to get customer_id
    const originalAppointment = typedAppointments.find(apt => apt.id === matchedBooking.id);
    if (!originalAppointment) {
      console.log('❌ Could not find original appointment');
      return NextResponse.json({
        success: false,
        message: 'Could not find original appointment',
        bookings: []
      });
    }

    // Get all bookings for this customer
    const customerBookings = typedAppointments.filter(apt => 
      apt.customer_id === originalAppointment.customer_id
    );

    // Format the appointments for response
    const formattedBookings = customerBookings.map(apt => ({
      id: apt.id,
      appointment_date: apt.appointment_date,
      start_time: apt.start_time,
      end_time: apt.end_time,
      service_name: apt.services?.name || 'Unknown Service',
      service_id: apt.service_id,
      customer_name: `${apt.customers?.first_name || ''} ${apt.customers?.last_name || ''}`.trim(),
      customer_phone: apt.customers?.phone,
      status: apt.status
    }));

    console.log(`✅ Found ${formattedBookings.length} future bookings for ${customer_name}`);

    return NextResponse.json({
      success: true,
      customer: {
        id: originalAppointment.customers?.id,
        name: `${originalAppointment.customers?.first_name || ''} ${originalAppointment.customers?.last_name || ''}`.trim(),
        phone: originalAppointment.customers?.phone
      },
      bookings: formattedBookings
    });

  } catch (error) {
    console.error('❌ Error in lookup-customer-bookings:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}