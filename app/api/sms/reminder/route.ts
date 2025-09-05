import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { generateReminderMessage } from '@/lib/sms-templates';
import { getCurrentUKDateTime } from '@/lib/date-utils';

export async function POST(request: NextRequest) {
  try {
    const { appointmentId } = await request.json();

    if (!appointmentId) {
      return NextResponse.json(
        { error: 'Appointment ID is required' },
        { status: 400 }
      );
    }

    // Get appointment details with related data
    const { data: appointment, error: appointmentError } = await supabaseAdmin
      .from('appointments')
      .select(`
        id,
        appointment_date,
        start_time,
        reminder_sent_at,
        customers!inner(
          first_name,
          last_name,
          phone
        ),
        services!inner(
          name,
          duration_minutes,
          price
        ),
        businesses!inner(
          id,
          name,
          phone_number,
          address
        )
      `)
      .eq('id', appointmentId)
      .eq('status', 'confirmed')
      .single();

    if (appointmentError || !appointment) {
      return NextResponse.json(
        { error: 'Appointment not found' },
        { status: 404 }
      );
    }

    // Check if reminder already sent
    if (appointment.reminder_sent_at) {
      return NextResponse.json(
        { error: 'Reminder already sent for this appointment' },
        { status: 400 }
      );
    }

    const customer = appointment.customers;
    const service = appointment.services;
    const business = appointment.businesses;
    const customerName = `${customer.first_name} ${customer.last_name}`.trim();

    // Generate reminder message
    const reminderMessage = generateReminderMessage(
      {
        name: business.name,
        phone_number: business.phone_number,
        address: business.address
      },
      {
        customer_name: customerName,
        date: appointment.appointment_date,
        time: appointment.start_time,
        service: {
          name: service.name,
          duration_minutes: service.duration_minutes,
          price: service.price
        }
      }
    );

    // Send SMS via our SMS API
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const smsResponse = await fetch(`${baseUrl}/api/sms/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        businessId: business.id,
        customerPhone: customer.phone,
        message: reminderMessage,
        type: 'reminder',
        appointmentId: appointment.id
      })
    });

    if (!smsResponse.ok) {
      const errorData = await smsResponse.json();
      return NextResponse.json(
        { error: `Failed to send SMS: ${errorData.error}` },
        { status: 500 }
      );
    }

    // Update appointment to mark reminder as sent
    const { error: updateError } = await supabaseAdmin
      .from('appointments')
      .update({ reminder_sent_at: getCurrentUKDateTime().toISOString() })
      .eq('id', appointmentId);

    if (updateError) {
      console.error('Failed to update reminder status:', updateError);
    }

    const smsData = await smsResponse.json();
    return NextResponse.json({
      success: true,
      message: 'Reminder sent successfully',
      messageSid: smsData.messageSid
    });

  } catch (error) {
    console.error('Error sending reminder:', error);
    return NextResponse.json(
      { error: 'Failed to send reminder' },
      { status: 500 }
    );
  }
}