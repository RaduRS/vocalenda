import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';
import { ComprehensiveBusinessData, PaymentMethod, BusinessHours, Holiday } from '@/lib/types';
import { Json } from '@/lib/database.types';
import { getCurrentUKDateTime } from '@/lib/date-utils';

// GET - Fetch comprehensive business data
export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's business ID and user UUID
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('id, business_id')
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user?.business_id) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    // Fetch business data
    const { data: business, error: businessError } = await supabaseAdmin
      .from('businesses')
      .select(`
        *,
        business_config(*),
        services(*),
        staff_members(*)
      `)
      .eq('id', user.business_id)
      .single();

    if (businessError) {
      console.error('Failed to fetch business data:', businessError);
      return NextResponse.json({ error: 'Failed to fetch business data' }, { status: 500 });
    }

    // Transform database data to match ComprehensiveBusinessData interface
    const comprehensiveData: ComprehensiveBusinessData = {
      name: business.name || '',
      slug: business.slug || '',
      phone: business.phone_number || '',
      email: business.email || '',
      address: business.address || '',
      business_type: business.business_type || '',
      timezone: business.timezone || 'UTC',
      payment_methods: (Array.isArray(business.payment_methods) ? business.payment_methods as PaymentMethod[] : ['cash']),
      business_hours: (business.business_hours && typeof business.business_hours === 'object' && !Array.isArray(business.business_hours) ? business.business_hours as unknown as BusinessHours : {
        monday: { open: '09:00', close: '17:00', closed: false },
        tuesday: { open: '09:00', close: '17:00', closed: false },
        wednesday: { open: '09:00', close: '17:00', closed: false },
        thursday: { open: '09:00', close: '17:00', closed: false },
        friday: { open: '09:00', close: '17:00', closed: false },
        saturday: { open: '09:00', close: '17:00', closed: false },
        sunday: { open: '09:00', close: '17:00', closed: true }
      }),
      holidays: (Array.isArray(business.holidays) ? business.holidays as unknown as Holiday[] : []),
      services: business.services?.map((service: {
        id: string;
        business_id: string;
        name: string;
        description: string | null;
        duration_minutes: number;
        price: number | null;
        currency: string;
        is_active: boolean;
        created_at: string;
        updated_at: string;
      }) => ({
        id: service.id,
        name: service.name,
        duration: service.duration_minutes,
        price: service.price || 0,
        description: service.description || undefined,
        is_active: service.is_active
      })) || [],
      staff_members: business.staff_members?.map((staff: {
        id: string;
        business_id: string;
        user_id: string;
        name: string;
        email: string | null;
        phone: string | null;
        specialties: string[] | null;
        working_hours: Json | null;
        is_active: boolean;
        created_at: string;
        updated_at: string;
      }) => ({
        id: staff.id,
        name: staff.name,
        email: staff.email || undefined,
        phone: staff.phone || undefined,
        specialties: staff.specialties || [],
        is_active: staff.is_active
      })) || [],
      ai_configuration: {
        greeting: (Array.isArray(business.business_config) ? business.business_config[0]?.greeting_message : business.business_config?.greeting_message) || business.ai_greeting || '',
        key_information: business.key_information || '',
        response_mode: ((Array.isArray(business.business_config) ? business.business_config[0]?.ai_response_mode : business.business_config?.ai_response_mode) || 'flexible') as 'flexible' | 'restricted',
        allowed_topics: (Array.isArray(business.business_config) ? business.business_config[0]?.allowed_ai_topics : business.business_config?.allowed_ai_topics) || [],
        restricted_topics: (Array.isArray(business.business_config) ? business.business_config[0]?.restricted_ai_topics : business.business_config?.restricted_ai_topics) || [],
        custom_prompt: (Array.isArray(business.business_config) ? business.business_config[0]?.ai_prompt : business.business_config?.ai_prompt) || ''
      },
      customer_notes_enabled: business.customer_notes_enabled ?? true,
      booking_policies: (business.booking_policies && typeof business.booking_policies === 'object' && !Array.isArray(business.booking_policies) ? business.booking_policies as unknown as { cancellation_policy: string; advance_booking_days: number; min_advance_hours: number } : {
        cancellation_policy: 'Appointments can be cancelled up to 24 hours in advance',
        advance_booking_days: 30,
        min_advance_hours: 2
      })
    };

    return NextResponse.json(comprehensiveData);

  } catch (error) {
    console.error('Failed to fetch comprehensive business data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT - Update comprehensive business data
export async function PUT(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user's business ID
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('id, business_id')
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user?.business_id) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 });
    }

    const businessData: ComprehensiveBusinessData = await request.json();

    // Update businesses table
    const { error: businessError } = await supabaseAdmin
      .from('businesses')
      .update({
        name: businessData.name,
        slug: businessData.slug,
        phone_number: businessData.phone,
        email: businessData.email,
        address: businessData.address,
        business_type: businessData.business_type,
        timezone: businessData.timezone,
        payment_methods: businessData.payment_methods,
        business_hours: businessData.business_hours as unknown as Json,
        holidays: businessData.holidays as unknown as Json,
        ai_greeting: businessData.ai_configuration.greeting,
        key_information: businessData.ai_configuration.key_information,
        customer_notes_enabled: businessData.customer_notes_enabled,
        booking_policies: businessData.booking_policies as unknown as Json,
        updated_at: getCurrentUKDateTime().toISOString()
      })
      .eq('id', user.business_id);

    if (businessError) {
      console.error('Failed to update business:', businessError);
      return NextResponse.json({ error: 'Failed to update business' }, { status: 500 });
    }

    // Update or create business_config
    const { error: configError } = await supabaseAdmin
      .from('business_config')
      .upsert({
        business_id: user.business_id,
        ai_response_mode: businessData.ai_configuration.response_mode,
        allowed_ai_topics: businessData.ai_configuration.allowed_topics,
        restricted_ai_topics: businessData.ai_configuration.restricted_topics,
        ai_prompt: businessData.ai_configuration.custom_prompt,
        greeting_message: businessData.ai_configuration.greeting,
        updated_at: getCurrentUKDateTime().toISOString()
      }, {
        onConflict: 'business_id'
      });

    if (configError) {
      console.error('Failed to update business config:', configError);
      return NextResponse.json({ error: 'Failed to update AI configuration' }, { status: 500 });
    }

    // Update services - delete existing and insert new ones
    const { error: deleteServicesError } = await supabaseAdmin
      .from('services')
      .delete()
      .eq('business_id', user.business_id);

    if (deleteServicesError) {
      console.error('Failed to delete existing services:', deleteServicesError);
    }

    if (businessData.services && businessData.services.length > 0) {
      const servicesToInsert = businessData.services.map(service => ({
        business_id: user.business_id!,
        name: service.name,
        duration_minutes: service.duration,
        price: service.price,
        description: service.description || null,
        is_active: service.is_active ?? true
      }));

      const { error: servicesError } = await supabaseAdmin
        .from('services')
        .insert(servicesToInsert);

      if (servicesError) {
        console.error('Failed to insert services:', servicesError);
        return NextResponse.json({ error: 'Failed to update services' }, { status: 500 });
      }
    }

    // Update staff members - delete existing and insert new ones
    const { error: deleteStaffError } = await supabaseAdmin
      .from('staff_members')
      .delete()
      .eq('business_id', user.business_id);

    if (deleteStaffError) {
      console.error('Failed to delete existing staff:', deleteStaffError);
    }

    if (businessData.staff_members && businessData.staff_members.length > 0) {
      const staffToInsert = businessData.staff_members.map(staff => ({
        business_id: user.business_id!,
        user_id: user.id,
        name: staff.name,
        email: staff.email || null,
        phone: staff.phone || null,
        specialties: staff.specialties || null,
        is_active: staff.is_active ?? true
      }));

      const { error: staffError } = await supabaseAdmin
        .from('staff_members')
        .insert(staffToInsert);

      if (staffError) {
        console.error('Failed to insert staff members:', staffError);
        return NextResponse.json({ error: 'Failed to update staff members' }, { status: 500 });
      }
    }

    return NextResponse.json({
      message: 'Business settings updated successfully',
      success: true
    });

  } catch (error) {
    console.error('Failed to update comprehensive business data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}