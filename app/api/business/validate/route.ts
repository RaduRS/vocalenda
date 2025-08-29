import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { slug, phone } = body;

    // Validate slug if provided
    if (slug) {
      const { data: existingBusiness } = await supabase
        .from('businesses')
        .select('id')
        .eq('slug', slug)
        .single();

      if (existingBusiness) {
        return NextResponse.json(
          { message: 'This business URL is already taken. Please choose a different one.' },
          { status: 409 }
        );
      }
    }

    // Validate phone if provided
    if (phone) {
      const { data: existingPhone } = await supabase
        .from('businesses')
        .select('id')
        .eq('phone_number', phone)
        .single();

      if (existingPhone) {
        return NextResponse.json(
          { message: 'This phone number is already registered. Please use a different number.' },
          { status: 409 }
        );
      }
    }

    // If we get here, validation passed
    return NextResponse.json({ valid: true });

  } catch (error) {
    console.error('Validation error:', error);
    return NextResponse.json(
      { message: 'Validation failed. Please try again.' },
      { status: 500 }
    );
  }
}