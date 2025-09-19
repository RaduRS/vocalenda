import { NextRequest, NextResponse } from 'next/server';
import { auth, clerkClient } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user data from Clerk to ensure we use the correct email
    const clerk = await clerkClient();
    const user = await clerk.users.getUser(userId);
    const primaryEmail = user.emailAddresses.find(email => email.id === user.primaryEmailAddressId);
    
    if (!primaryEmail) {
      return NextResponse.json({ error: 'No primary email found' }, { status: 400 });
    }

    const body = await request.json();
    const {
      clerkUserId,
      firstName,
      lastName,
      name: businessName,
      slug: businessSlug,
      phone: phoneNumber,
      address,
      timezone,
      business_type,
      payment_methods,
      business_hours,
      holidays,
      services,
      staff_members,
      ai_configuration,
      customer_notes_enabled,
      booking_policies
    } = body;
    
    // Use the email from Clerk, not from the request body
    const email = primaryEmail.emailAddress;

    // Validate required fields (phone number is managed by admin)
    if (!businessName || !businessSlug) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if business slug is already taken
    const { data: existingBusiness } = await supabaseAdmin
      .from('businesses')
      .select('id')
      .eq('slug', businessSlug)
      .single();

    if (existingBusiness) {
      return NextResponse.json(
        { error: 'Business slug already taken' },
        { status: 409 }
      );
    }

    // Phone numbers are managed by admin, skip validation
    // Note: Phone number uniqueness will be enforced at database level when admin assigns numbers

    // Create business with comprehensive data
    const { data: businessData, error: businessError } = await supabaseAdmin
      .from('businesses')
      .insert({
        name: businessName,
        slug: businessSlug,
        phone_number: (phoneNumber && phoneNumber !== 'Admin will assign') ? phoneNumber : null, // Phone numbers assigned by admin
        email: email,
        address,
        timezone,
        business_type,
        payment_methods,
        business_hours,
        holidays,
        ai_greeting: ai_configuration?.greeting,
        key_information: ai_configuration?.key_information,
        customer_notes_enabled: customer_notes_enabled ?? true,
        booking_policies
      })
      .select('id')
      .single();

    if (businessError) {
      console.error('Failed to create business:', businessError);
      return NextResponse.json(
        { error: 'Failed to create business' },
        { status: 500 }
      );
    }

    // Update or create user with business association
    const { error: userError } = await supabaseAdmin
      .from('users')
      .upsert({
        clerk_user_id: clerkUserId,
        business_id: businessData.id,
        email: email,
        first_name: firstName || '',
        last_name: lastName || '',
        role: 'owner'
      }, {
        onConflict: 'clerk_user_id'
      });

    if (userError) {
      console.error('Failed to create/update user:', userError);
      return NextResponse.json(
        { error: 'Failed to create business owner' },
        { status: 500 }
      );
    }

    const businessId = businessData.id;

    // Create business config for AI settings
    if (ai_configuration) {
      const { error: configError } = await supabaseAdmin
        .from('business_config')
        .insert({
          business_id: businessId,
          ai_response_mode: ai_configuration.response_mode || 'flexible',
          allowed_ai_topics: ai_configuration.allowed_topics || [],
          restricted_ai_topics: ai_configuration.restricted_topics || [],
          ai_prompt: ai_configuration.custom_prompt
        });

      if (configError) {
        console.error('Failed to create business config:', configError);
      }
    }

    // Create services
    if (services && services.length > 0) {
      const servicesToInsert = services.map((service: { name: string; duration: number; price: number; description?: string; is_active?: boolean }) => ({
        business_id: businessId,
        name: service.name,
        duration_minutes: service.duration,
        price: service.price,
        description: service.description,
        is_active: service.is_active ?? true
      }));

      const { error: servicesError } = await supabaseAdmin
        .from('services')
        .insert(servicesToInsert);

      if (servicesError) {
        console.error('Failed to create services:', servicesError);
      }
    }

    // Create staff members
    if (staff_members && staff_members.length > 0) {
      const staffToInsert = staff_members.map((staff: { name: string; email?: string; phone?: string; specialties?: string[]; is_active?: boolean }) => ({
        business_id: businessId,
        name: staff.name,
        email: staff.email,
        phone: staff.phone,
        specialties: staff.specialties || [],
        is_active: staff.is_active ?? true
      }));

      const { error: staffError } = await supabaseAdmin
        .from('staff_members')
        .insert(staffToInsert);

      if (staffError) {
        console.error('Failed to create staff members:', staffError);
      }
    }

    return NextResponse.json({
      message: 'Business created successfully',
      success: true,
      businessId: businessId,
      redirectTo: '/dashboard'
    }, { status: 201 });

  } catch (error) {
    console.error('Business creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}