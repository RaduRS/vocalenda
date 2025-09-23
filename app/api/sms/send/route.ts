import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';
import { getCurrentUKDateTime } from '@/lib/date-utils';

interface SMSRequest {
  businessId: string;
  customerPhone: string;
  message: string;
  type: 'confirmation' | 'reminder' | 'cancellation';
  appointmentId?: string;
}

export async function POST(request: NextRequest) {
  try {
    const { businessId, customerPhone, message, type, appointmentId }: SMSRequest = await request.json();

    if (!businessId || !customerPhone || !message || !type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get business details and phone number
    const { data: business, error: businessError } = await supabaseAdmin
      .from('businesses')
      .select('id, name, phone_number')
      .eq('id', businessId)
      .eq('status', 'active')
      .single();

    if (businessError || !business) {
      return NextResponse.json(
        { error: 'Business not found' },
        { status: 404 }
      );
    }

    // Check if SMS is enabled for this business
    const { data: businessConfig, error: configError } = await supabaseAdmin
      .from('business_config')
      .select('sms_enabled')
      .eq('business_id', businessId)
      .single();

    // If SMS is explicitly disabled, don't send SMS
    if (businessConfig && businessConfig.sms_enabled === false) {
      console.log(`SMS disabled for business ${businessId}, skipping SMS send`);
      return NextResponse.json({
        success: true,
        skipped: true,
        reason: 'SMS disabled for business'
      });
    }

    // Initialize Twilio client
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    
    if (!accountSid || !authToken) {
      return NextResponse.json(
        { error: 'Twilio credentials not configured' },
        { status: 500 }
      );
    }

    const twilio = (await import('twilio')).default(accountSid, authToken);

    // Send SMS
    const smsResponse = await twilio.messages.create({
      body: message,
      from: business.phone_number,
      to: customerPhone
    });

    // Get customer ID if we have appointment ID
    let customerId = null;
    if (appointmentId) {
      const { data: appointment } = await supabaseAdmin
        .from('appointments')
        .select('customer_id')
        .eq('id', appointmentId)
        .single();
      customerId = appointment?.customer_id;
    }

    // If no customer ID from appointment, try to find by phone
    if (!customerId) {
      const { data: customer } = await supabaseAdmin
        .from('customers')
        .select('id')
        .eq('business_id', businessId)
        .eq('phone', customerPhone)
        .single();
      customerId = customer?.id;
    }

    // Log SMS in database (only if we have a customer_id)
    if (customerId) {
      const { error: logError } = await supabaseAdmin
        .from('sms_messages')
        .insert({
          business_id: businessId,
          customer_id: customerId,
          appointment_id: appointmentId,
          phone_from: business.phone_number,
          phone_to: customerPhone,
          message_body: message,
          message_type: type,
          twilio_message_sid: smsResponse.sid,
          status: 'sent'
        });

      if (logError) {
        console.error('Failed to log SMS:', logError);
      }
    }



    // Update appointment confirmation status if applicable
    if (appointmentId && type === 'confirmation') {
      await supabaseAdmin
        .from('appointments')
        .update({ confirmation_sent_at: getCurrentUKDateTime().toISOString() })
        .eq('id', appointmentId);
    }

    return NextResponse.json({
      success: true,
      messageSid: smsResponse.sid,
      status: smsResponse.status
    });

  } catch (error) {
    console.error('Error sending SMS:', error);
    return NextResponse.json(
      { error: 'Failed to send SMS' },
      { status: 500 }
    );
  }
}