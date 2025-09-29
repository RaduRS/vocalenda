import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
const businessProPriceId = process.env.NEXT_PUBLIC_STRIPE_BUSINESS_PRO_PRICE_ID!

// Extend Stripe types to include timestamp properties that are sometimes missing from the official types
interface ExtendedStripeSubscription extends Omit<Stripe.Subscription, 'trial_start' | 'trial_end' | 'canceled_at'> {
  current_period_start: number
  current_period_end: number
  trial_start: number | null
  trial_end: number | null
  canceled_at: number | null
}

interface ExtendedStripeInvoice extends Stripe.Invoice {
  subscription?: string | null
}

// Define proper types for subscription status
type SubscriptionStatus = 
  | 'active'
  | 'past_due'
  | 'canceled'
  | 'unpaid'
  | 'incomplete'
  | 'incomplete_expired'
  | 'trialing'
  | 'paused'

// Define event types for subscription events
type SubscriptionEventType = 
  | 'subscription_created'
  | 'subscription_updated'
  | 'subscription_deleted'
  | 'payment_succeeded'
  | 'payment_failed'
  | 'trial_will_end'

// Union type for webhook event data
type WebhookEventData = Stripe.Subscription | Stripe.Invoice

export async function POST(req: NextRequest) {
  console.log('🔔 Webhook received at:', new Date().toISOString())
  
  try {
    const body = await req.text()
    const signature = req.headers.get('stripe-signature')

    if (!signature) {
      console.error('❌ No Stripe signature found in request headers')
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
      console.log(`📨 Processing webhook event: ${event.type} (ID: ${event.id})`)
    } catch (err) {
      console.error('Webhook signature verification failed:', err)
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
    }

    // Handle the event
    switch (event.type) {
      case 'customer.subscription.created':
        console.log('🆕 Processing subscription created event')
        await handleSubscriptionChange(event.data.object as Stripe.Subscription)
        break
      case 'customer.subscription.updated':
        console.log('🔄 Processing subscription updated event')
        await handleSubscriptionChange(event.data.object as Stripe.Subscription)
        break
      case 'customer.subscription.deleted':
        console.log('🗑️ Processing subscription deleted event')
        await handleSubscriptionDeleted(event.data.object as Stripe.Subscription)
        break
      case 'invoice.payment_succeeded':
        console.log('💰 Processing payment succeeded event')
        await handlePaymentSucceeded(event.data.object as Stripe.Invoice)
        break
      case 'invoice.payment_failed':
        console.log('❌ Processing payment failed event')
        await handlePaymentFailed(event.data.object as Stripe.Invoice)
        break
      case 'customer.subscription.trial_will_end':
        console.log('⏰ Processing trial will end event')
        await handleTrialWillEnd(event.data.object as Stripe.Subscription)
        break
      default:
        console.log(`⚠️ Unhandled event type: ${event.type}`)
    }

    console.log(`✅ Successfully processed webhook event: ${event.type}`)
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('💥 Webhook error:', error)
    return NextResponse.json({ error: 'Webhook handler failed' }, { status: 500 })
  }
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  console.log(`🔄 handleSubscriptionChange called for subscription: ${subscription.id}`)
  console.log(`📊 Subscription status: ${subscription.status}`)
  console.log(`👤 Customer ID: ${subscription.customer}`)
  
  try {
    // Get business ID from customer metadata or find by customer ID
    console.log('🔍 Retrieving customer from Stripe...')
    const customer = await stripe.customers.retrieve(subscription.customer as string)
    console.log(`👤 Customer retrieved: ${customer.id}`)
    console.log(`📋 Customer metadata:`, (customer as Stripe.Customer).metadata)
    
    const businessId = (customer as Stripe.Customer).metadata?.business_id

    if (!businessId) {
      console.error('❌ No business_id found in customer metadata')
      console.error('Available metadata keys:', Object.keys((customer as Stripe.Customer).metadata || {}))
      return
    }

    console.log(`🏢 Business ID found: ${businessId}`)

    const extendedSubscription = subscription as ExtendedStripeSubscription
    const priceId = subscription.items.data[0]?.price.id || ''
    console.log(`💰 Price ID: ${priceId}`)
    console.log(`🎯 Expected price ID: ${businessProPriceId}`)
    
    // Validate that this is our expected business pro price
    if (priceId !== businessProPriceId) {
      console.warn(`⚠️ Unexpected price ID in subscription: ${priceId}, expected: ${businessProPriceId}`)
    }
    
    // Call the RPC function with the correct parameters that match the database function signature
    console.log('📝 Calling create_or_update_subscription RPC with parameters:')
    console.log(`  - business_id: ${businessId}`)
    console.log(`  - stripe_subscription_id: ${subscription.id}`)
    console.log(`  - stripe_customer_id: ${subscription.customer}`)
    console.log(`  - stripe_price_id: ${priceId}`)
    console.log(`  - status: ${subscription.status}`)
    console.log(`  - current_period_start: ${new Date(extendedSubscription.current_period_start * 1000).toISOString()}`)
    console.log(`  - current_period_end: ${new Date(extendedSubscription.current_period_end * 1000).toISOString()}`)
    console.log(`  - amount_per_month: ${(subscription.items.data[0]?.price.unit_amount || 0)}`) // Keep in cents for database
    console.log(`  - currency: ${subscription.items.data[0]?.price.currency || 'gbp'}`)
     
     const { error } = await supabaseAdmin.rpc('create_or_update_subscription', {
       p_business_id: businessId,
       p_stripe_subscription_id: subscription.id,
       p_stripe_customer_id: subscription.customer as string,
       p_stripe_price_id: priceId,
       p_status: subscription.status as SubscriptionStatus,
       p_current_period_start: new Date(extendedSubscription.current_period_start * 1000).toISOString(),
       p_current_period_end: new Date(extendedSubscription.current_period_end * 1000).toISOString(),
       p_amount_per_month: subscription.items.data[0]?.price.unit_amount || 0, // Keep in cents
       p_currency: subscription.items.data[0]?.price.currency || 'gbp'
     })

    if (error) {
      console.error('❌ Error creating/updating subscription:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
    } else {
      console.log('✅ Successfully created/updated subscription in Supabase')
    }

    // Update business with subscription_id
    console.log(`🏢 Updating business ${businessId} with subscription_id: ${subscription.id}`)
    const { error: businessError } = await supabaseAdmin
      .from('businesses')
      .update({ subscription_id: subscription.id })
      .eq('id', businessId)

    if (businessError) {
      console.error('❌ Error updating business subscription_id:', businessError)
    } else {
      console.log('✅ Successfully updated business with subscription_id')
    }

    // Log the event
    console.log('📝 Logging subscription event...')
    await logSubscriptionEvent(subscription.id, businessId, 'subscription_updated', subscription.status, subscription)
    console.log('✅ Successfully logged subscription event')

  } catch (error) {
    console.error('💥 Error handling subscription change:', error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace available')
  }
}

async function handleSubscriptionDeleted(subscription: Stripe.Subscription) {
  try {
    const { error } = await supabaseAdmin
      .from('subscriptions')
      .update({ 
        status: 'canceled',
        canceled_at: new Date().toISOString()
      })
      .eq('stripe_subscription_id', subscription.id)

    if (error) {
      console.error('Error updating deleted subscription:', error)
    }

    // Log the event
    const { data: subData } = await supabaseAdmin
      .from('subscriptions')
      .select('business_id')
      .eq('stripe_subscription_id', subscription.id)
      .single()

    if (subData) {
      await logSubscriptionEvent(subscription.id, subData.business_id, 'subscription_deleted', 'canceled', subscription)
    }

  } catch (error) {
    console.error('Error handling subscription deletion:', error)
  }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  try {
    const extendedInvoice = invoice as ExtendedStripeInvoice
    const subscriptionId = extendedInvoice.subscription
    if (subscriptionId && typeof subscriptionId === 'string') {
      // Reset monthly usage if this is a recurring payment
      const { data: subscription } = await supabaseAdmin
        .from('subscriptions')
        .select('business_id')
        .eq('stripe_subscription_id', subscriptionId)
        .single()

      if (subscription) {
        await supabaseAdmin.rpc('reset_monthly_usage', {
          p_business_id: subscription.business_id
        })

        // Log the event
        await logSubscriptionEvent(
          subscriptionId, 
          subscription.business_id, 
          'payment_succeeded', 
          null, 
          invoice
        )
      }
    }
  } catch (error) {
    console.error('Error handling payment succeeded:', error)
  }
}

async function handlePaymentFailed(invoice: Stripe.Invoice) {
  try {
    const subscriptionId = (invoice as Stripe.Invoice & { subscription?: string }).subscription
    if (subscriptionId && typeof subscriptionId === 'string') {
      // Update subscription status to past_due
      const { error } = await supabaseAdmin
        .from('subscriptions')
        .update({ status: 'past_due' })
        .eq('stripe_subscription_id', subscriptionId)

      if (error) {
        console.error('Error updating subscription for failed payment:', error)
      }

      // Log the event
      const { data: subscription } = await supabaseAdmin
        .from('subscriptions')
        .select('business_id')
        .eq('stripe_subscription_id', subscriptionId)
        .single()

      if (subscription) {
        await logSubscriptionEvent(
          subscriptionId, 
          subscription.business_id, 
          'payment_failed', 
          'past_due', 
          invoice
        )
      }
    }
  } catch (error) {
    console.error('Error handling payment failed:', error)
  }
}

async function handleTrialWillEnd(subscription: Stripe.Subscription) {
  try {
    // Log the event for notification purposes
    const { data: subData } = await supabaseAdmin
      .from('subscriptions')
      .select('business_id')
      .eq('stripe_subscription_id', subscription.id)
      .single()

    if (subData) {
      await logSubscriptionEvent(
        subscription.id, 
        subData.business_id, 
        'trial_will_end', 
        null, 
        subscription
      )
    }
  } catch (error) {
    console.error('Error handling trial will end:', error)
  }
}



async function logSubscriptionEvent(
  subscriptionId: string,
  businessId: string,
  eventType: SubscriptionEventType,
  newStatus: SubscriptionStatus | null,
  eventData: WebhookEventData
) {
  try {
    const { error } = await supabaseAdmin
      .from('subscription_events')
      .insert({
        subscription_id: subscriptionId,
        business_id: businessId,
        event_type: eventType,
        stripe_event_id: eventData.id || null,
        new_status: newStatus,
        event_data: JSON.parse(JSON.stringify(eventData)),
        occurred_at: new Date().toISOString(),
        processed_at: new Date().toISOString()
      })

    if (error) {
      console.error('Error logging subscription event:', error)
    }
  } catch (error) {
    console.error('Error in logSubscriptionEvent:', error)
  }
}