import { NextRequest, NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

const businessProPriceId = process.env.NEXT_PUBLIC_STRIPE_BUSINESS_PRO_PRICE_ID!

// GET - Get subscription details for the current business
export async function GET() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user's business
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single()

    if (userError || !user?.business_id) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 })
    }

    // Get subscription details
    const { data: subscription, error: subscriptionError } = await supabaseAdmin
      .from('subscriptions')
      .select('*')
      .eq('business_id', user.business_id)
      .single()

    if (subscriptionError) {
      // No subscription found
      return NextResponse.json({ subscription: null })
    }

    return NextResponse.json({ subscription })
  } catch (error) {
    console.error('Error fetching subscription:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// POST - Create a new subscription
export async function POST(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { priceId, customerEmail } = await req.json()

    if (!priceId) {
      return NextResponse.json({ error: 'Price ID is required' }, { status: 400 })
    }

    // Validate that the price ID matches our business pro plan
    if (priceId !== businessProPriceId) {
      return NextResponse.json({ error: 'Invalid price ID' }, { status: 400 })
    }

    // Get user's business
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single()

    if (userError || !user?.business_id) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 })
    }

    // Get business details
    const { data: business, error: businessError } = await supabaseAdmin
      .from('businesses')
      .select('name, email')
      .eq('id', user.business_id)
      .single()

    if (businessError || !business) {
      return NextResponse.json({ error: 'Business details not found' }, { status: 404 })
    }

    // Check if subscription already exists
    const { data: existingSubscription } = await supabaseAdmin
      .from('subscriptions')
      .select('id')
      .eq('business_id', user.business_id)
      .single()

    if (existingSubscription) {
      return NextResponse.json({ error: 'Subscription already exists' }, { status: 400 })
    }

    // Create or retrieve Stripe customer
    let customer: Stripe.Customer
    const customers = await stripe.customers.list({
      email: customerEmail || business.email || '',
      limit: 1
    })

    if (customers.data.length > 0) {
      customer = customers.data[0]
      // Update customer metadata with business_id
      await stripe.customers.update(customer.id, {
        metadata: {
          business_id: user.business_id
        }
      })
    } else {
      customer = await stripe.customers.create({
        email: customerEmail || business.email || '',
        name: business.name,
        metadata: {
          business_id: user.business_id
        }
      })
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      customer: customer.id,
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vocalenda.com'}/dashboard/business-settings?tab=subscription&success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.vocalenda.com'}/dashboard/business-settings?tab=subscription&canceled=true`,
      metadata: {
        business_id: user.business_id
      },
      subscription_data: {
        metadata: {
          business_id: user.business_id
        }
      }
    })

    return NextResponse.json({
      sessionId: session.id,
      url: session.url
    })
  } catch (error) {
    console.error('Error creating subscription:', error)
    
    // Provide more specific error messages
    if (error instanceof Error) {
      if (error.message.includes('No such price')) {
        return NextResponse.json({ error: 'Invalid price ID. Please contact support.' }, { status: 400 })
      }
      if (error.message.includes('customer')) {
        return NextResponse.json({ error: 'Customer creation failed. Please try again.' }, { status: 400 })
      }
    }
    
    return NextResponse.json({ 
      error: 'Failed to create subscription. Please try again or contact support.',
      details: process.env.NODE_ENV === 'development' ? error instanceof Error ? error.message : 'Unknown error' : undefined
    }, { status: 500 })
  }
}

// PATCH - Update subscription (e.g., cancel, change plan)
export async function PATCH(req: NextRequest) {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { action, priceId } = await req.json()

    if (!action) {
      return NextResponse.json({ error: 'Action is required' }, { status: 400 })
    }

    // Get user's business
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single()

    if (userError || !user?.business_id) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 })
    }

    // Get subscription
    const { data: subscriptionData, error: subscriptionError } = await supabaseAdmin
      .from('subscriptions')
      .select('stripe_subscription_id')
      .eq('business_id', user.business_id)
      .single()

    if (subscriptionError || !subscriptionData) {
      return NextResponse.json({ error: 'Subscription not found' }, { status: 404 })
    }

    let result
    switch (action) {
      case 'cancel':
        result = await stripe.subscriptions.update(subscriptionData.stripe_subscription_id, {
          cancel_at_period_end: true
        })
        break
      
      case 'reactivate':
        result = await stripe.subscriptions.update(subscriptionData.stripe_subscription_id, {
          cancel_at_period_end: false
        })
        break
      
      case 'change_plan':
        if (!priceId) {
          return NextResponse.json({ error: 'Price ID is required for plan change' }, { status: 400 })
        }
        
        const subscription = await stripe.subscriptions.retrieve(subscriptionData.stripe_subscription_id)
        result = await stripe.subscriptions.update(subscriptionData.stripe_subscription_id, {
          items: [{
            id: subscription.items.data[0].id,
            price: priceId
          }]
        })
        break
      
      default:
        return NextResponse.json({ error: 'Invalid action' }, { status: 400 })
    }

    return NextResponse.json({ success: true, subscription: result })
  } catch (error) {
    console.error('Error updating subscription:', error)
    return NextResponse.json({ error: 'Failed to update subscription' }, { status: 500 })
  }
}

// DELETE - Cancel subscription immediately
export async function DELETE() {
  try {
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    // Get user's business
    const { data: user, error: userError } = await supabaseAdmin
      .from('users')
      .select('business_id')
      .eq('clerk_user_id', userId)
      .single()

    if (userError || !user?.business_id) {
      return NextResponse.json({ error: 'Business not found' }, { status: 404 })
    }

    // Get subscription
    const { data: subscriptionData, error: subscriptionError } = await supabaseAdmin
      .from('subscriptions')
      .select('stripe_subscription_id')
      .eq('business_id', user.business_id)
      .single()

    if (subscriptionError || !subscriptionData) {
      return NextResponse.json({ error: 'Subscription not found' }, { status: 404 })
    }

    // Cancel subscription immediately
    const result = await stripe.subscriptions.cancel(subscriptionData.stripe_subscription_id)

    return NextResponse.json({ success: true, subscription: result })
  } catch (error) {
    console.error('Error canceling subscription:', error)
    return NextResponse.json({ error: 'Failed to cancel subscription' }, { status: 500 })
  }
}