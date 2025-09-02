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

    // Phone validation removed - phone numbers are managed by admin
    if (phone) {
      return NextResponse.json(
        { message: 'Phone numbers are managed by admin and cannot be validated through this endpoint.' },
        { status: 400 }
      );
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