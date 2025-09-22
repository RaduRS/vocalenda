import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Simple check: does user have a business_id and does that business exist?
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single();

    if (userError || !user?.business_id) {
      return NextResponse.json({ hasBusiness: false });
    }

    // Verify the business actually exists and is active
    const { data: business, error: businessError } = await supabaseAdmin
      .from('businesses')
      .select('id, status')
      .eq('id', user.business_id)
      .single();

    if (businessError || !business || business.status !== 'active') {
      return NextResponse.json({ hasBusiness: false });
    }

    return NextResponse.json({ hasBusiness: true });

  } catch (error) {
    console.error('Business status check error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}