import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const {
      clerkUserId,
      firstName,
      lastName,
      name: businessName,
      slug: businessSlug,
      phone: phoneNumber,
      email,
      address,
      timezone
    } = body;

    // Validate required fields
    if (!businessName || !businessSlug || !phoneNumber || !email) {
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

    // Check if phone number is already taken
    const { data: existingPhone } = await supabaseAdmin
      .from('businesses')
      .select('id')
      .eq('phone_number', phoneNumber)
      .single();

    if (existingPhone) {
      return NextResponse.json(
        { error: 'Phone number already registered to another business' },
        { status: 409 }
      );
    }

    // Create business first
    const { data: businessData, error: businessError } = await supabaseAdmin
      .from('businesses')
      .insert({
        name: businessName,
        slug: businessSlug,
        phone_number: phoneNumber,
        email: email
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

    const data = businessData.id;

    // Update the business with additional details
    const { error: updateError } = await supabaseAdmin
      .from('businesses')
      .update({
        address,
        timezone
      })
      .eq('id', data);

    if (updateError) {
      console.error('Failed to update business details:', updateError);
    }

    return NextResponse.json({
      message: 'Business created successfully',
      success: true,
      businessId: data,
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