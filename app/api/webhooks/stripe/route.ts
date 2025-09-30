import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { supabaseAdmin } from '@/lib/supabase'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!
const businessProPriceId = process.env.NEXT_PUBLIC_STRIPE_BUSINESS_PRO_PRICE_ID!
const businessProSetupFeeId = process.env.NEXT_PUBLIC_STRIPE_BUSINESS_PRO_FLAT_FEE_PRICE_ID!

const relevantEvents = new Set([
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated", 
  "customer.subscription.deleted",
  "invoice.paid",
])

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
  console.log('📋 Request headers:', Object.fromEntries(req.headers.entries()))
  
  // Validate environment variables first
  const requiredEnvVars = {
    'STRIPE_WEBHOOK_SECRET': webhookSecret,
    'STRIPE_SECRET_KEY': process.env.STRIPE_SECRET_KEY,
    'SUPABASE_SERVICE_ROLE_KEY': process.env.SUPABASE_SERVICE_ROLE_KEY,
    'NEXT_PUBLIC_SUPABASE_URL': process.env.NEXT_PUBLIC_SUPABASE_URL,
    'NEXT_PUBLIC_STRIPE_BUSINESS_PRO_PRICE_ID': businessProPriceId
  }
  
  const missingVars = Object.entries(requiredEnvVars)
    .filter(([key, value]) => !value)
    .map(([key]) => key)
  
  if (missingVars.length > 0) {
    console.error('❌ Missing required environment variables:', missingVars)
    return NextResponse.json({ 
      error: 'Missing required environment variables',
      missing: missingVars 
    }, { status: 500 })
  }
  
  console.log('✅ All required environment variables are configured')
  
  try {
    const body = await req.text()
    console.log('📦 Request body length:', body.length)
    console.log('📦 Request body preview:', body.substring(0, 200))
    
    const signature = req.headers.get('stripe-signature')

    if (!signature) {
      console.error('❌ No Stripe signature found in request headers')
      return NextResponse.json({ error: 'No signature' }, { status: 400 })
    }

    console.log('🔐 Stripe signature found:', signature.substring(0, 50) + '...')
    console.log('🔑 Webhook secret configured:', webhookSecret ? 'YES' : 'NO')
    console.log('🔑 Webhook secret preview:', webhookSecret ? webhookSecret.substring(0, 10) + '...' : 'MISSING')

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
      console.log(`📨 Processing webhook event: ${event.type} (ID: ${event.id})`)
    } catch (err) {
      console.error('❌ Webhook signature verification failed:', err)
      console.error('❌ Error details:', err instanceof Error ? err.message : String(err))
      
      // TEMPORARY: Try to parse the event anyway for debugging
      try {
        console.log('🔧 TEMPORARY: Attempting to parse event without signature verification...')
        event = JSON.parse(body) as Stripe.Event
        console.log(`🔧 TEMPORARY: Parsed event type: ${event.type} (ID: ${event.id})`)
        console.log('⚠️ WARNING: Processing webhook without signature verification - REMOVE IN PRODUCTION!')
      } catch (parseErr) {
        console.error('❌ Failed to parse event body:', parseErr)
        return NextResponse.json({ error: 'Invalid signature and unparseable body' }, { status: 400 })
      }
    }

    // Handle the event only if it's relevant
    if (relevantEvents.has(event.type)) {
      try {
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
        case 'checkout.session.completed':
          console.log('🛒 Processing checkout session completed...')
          await handleCheckoutSessionCompleted(event.data.object as Stripe.Checkout.Session)
          break
        case 'invoice.paid':
          console.log('📧 Processing invoice paid...')
          await handlePaymentSucceeded(event.data.object as Stripe.Invoice)
          break
        default:
          console.log(`⚠️ Unhandled relevant event type: ${event.type}`)
        }
      } catch (handlerError) {
        console.error(`💥 CRITICAL: Event handler failed for ${event.type}:`, handlerError)
        console.error('💥 Handler error details:', handlerError instanceof Error ? handlerError.message : String(handlerError))
        console.error('💥 Handler error stack:', handlerError instanceof Error ? handlerError.stack : 'No stack trace')
        
        // Return error response to Stripe so it retries
        return NextResponse.json({ 
          error: 'Event handler failed',
          event_type: event.type,
          event_id: event.id,
          message: handlerError instanceof Error ? handlerError.message : String(handlerError),
          timestamp: new Date().toISOString()
        }, { status: 500 })
      }
    } else {
      console.log(`⚠️ Ignoring irrelevant event type: ${event.type}`)
    }

    console.log(`✅ Successfully processed webhook event: ${event.type}`)
    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('💥 Webhook error:', error)
    console.error('💥 Error stack:', error instanceof Error ? error.stack : 'No stack trace')
    console.error('💥 Error message:', error instanceof Error ? error.message : String(error))
    
    // Return a more detailed error response for debugging
    return NextResponse.json({ 
      error: 'Webhook handler failed',
      message: error instanceof Error ? error.message : String(error),
      timestamp: new Date().toISOString()
    }, { status: 500 })
  }
}

async function handleSubscriptionChange(subscription: Stripe.Subscription) {
  console.log(`🔄 handleSubscriptionChange called for subscription: ${subscription.id}`)
  console.log(`📊 Subscription status: ${subscription.status}`)
  console.log(`👤 Customer ID: ${subscription.customer}`)
  
  try {
    // Validate Supabase admin client
    if (!supabaseAdmin) {
      console.error('❌ CRITICAL: supabaseAdmin client is not initialized!')
      throw new Error('Supabase admin client not available')
    }
    
    // Test Supabase connection
    console.log('🔍 Testing Supabase connection...')
    const { data: testData, error: testError } = await supabaseAdmin
      .from('businesses')
      .select('id')
      .limit(1)
    
    if (testError) {
      console.error('❌ CRITICAL: Supabase connection test failed:', testError)
      console.error('❌ Error code:', testError.code)
      console.error('❌ Error message:', testError.message)
      console.error('❌ Error details:', testError.details)
      throw new Error(`Supabase connection failed: ${testError.message}`)
    }
    console.log('✅ Supabase connection test successful')
    
    // Get business ID from customer metadata or find by customer ID
    console.log('🔍 Retrieving customer from Stripe...')
    const customer = await stripe.customers.retrieve(subscription.customer as string)
    console.log(`👤 Customer retrieved: ${customer.id}`)
    console.log(`📋 Customer metadata:`, (customer as Stripe.Customer).metadata)
    
    let businessId = (customer as Stripe.Customer).metadata?.business_id

    if (!businessId) {
      console.log('⚠️ No business_id found in customer metadata, trying to find by customer ID...')
      console.log('Available metadata keys:', Object.keys((customer as Stripe.Customer).metadata || {}))
      
      // Fallback: try to find business by stripe_customer_id
      const { data: businessData, error: lookupError } = await supabaseAdmin
        .from('businesses')
        .select('id')
        .eq('stripe_customer_id', customer.id)
        .single()
      
      if (lookupError || !businessData) {
        console.error('❌ Could not find business by customer ID either:', lookupError)
        throw new Error(`No business found for customer ${customer.id}`)
      }
      
      businessId = businessData.id
      console.log(`✅ Found business via customer ID lookup: ${businessId}`)
    }

    console.log(`🏢 Business ID found: ${businessId}`)
    
    // Validate business exists
    console.log('🔍 Verifying business exists in database...')
    const { data: businessData, error: businessCheckError } = await supabaseAdmin
      .from('businesses')
      .select('id, name')
      .eq('id', businessId)
      .single()
    
    if (businessCheckError) {
      console.error('❌ Error checking business existence:', businessCheckError)
      throw new Error(`Business verification failed: ${businessCheckError.message}`)
    }
    
    if (!businessData) {
      console.error('❌ Business not found in database:', businessId)
      throw new Error(`Business ${businessId} not found in database`)
    }
    
    console.log(`✅ Business verified: ${businessData.name} (${businessData.id})`)

    // Extract period dates from subscription items (where they actually exist in Stripe webhooks)
    const subscriptionItem = subscription.items.data[0]
    const current_period_start = subscriptionItem?.current_period_start
    const current_period_end = subscriptionItem?.current_period_end

    // Debug subscription structure and timestamps
    console.log('🔍 Debug subscription structure:', {
      subscription_id: subscription.id,
      subscription_status: subscription.status,
      has_items: !!subscription.items?.data?.length,
      first_item_id: subscriptionItem?.id,
      current_period_start: current_period_start,
      current_period_end: current_period_end,
      current_period_start_type: typeof current_period_start,
      current_period_end_type: typeof current_period_end,
      subscription_start_date: subscription.start_date,
      subscription_created: subscription.created
    })

    // Validate that required timestamps are present
    if (current_period_start === undefined || current_period_start === null) {
      console.error('❌ current_period_start is undefined/null in subscription item:', subscription.id)
      throw new Error(`Invalid current_period_start: ${current_period_start}`)
    }

    if (current_period_end === undefined || current_period_end === null) {
      console.error('❌ current_period_end is undefined/null in subscription item:', subscription.id)
      throw new Error(`Invalid current_period_end: ${current_period_end}`)
    }

    // Create extended subscription with correct period dates
    const extendedSubscription: ExtendedStripeSubscription = {
      ...subscription,
      current_period_start: current_period_start,
      current_period_end: current_period_end,
      trial_start: subscription.trial_start,
      trial_end: subscription.trial_end,
      canceled_at: subscription.canceled_at
    }

    // Idempotency check: Check if this subscription update was already processed
    console.log('🔍 Checking for existing subscription...')
    const { data: existingSubscription } = await supabaseAdmin
      .from('subscriptions')
      .select('id, status, stripe_subscription_id, current_period_start, current_period_end, cancel_at_period_end, setup_fee_paid')
      .eq('stripe_subscription_id', subscription.id)
      .single()

    if (existingSubscription) {
      console.log('🔍 Debug existing subscription data:', {
        current_period_start: existingSubscription.current_period_start,
        type: typeof existingSubscription.current_period_start,
        value: existingSubscription.current_period_start
      })
      
      let existingPeriodStart: number
      
      // Handle null or undefined current_period_start
      if (!existingSubscription.current_period_start) {
        console.log('⚠️ Existing subscription has no current_period_start, proceeding with update')
        existingPeriodStart = 0 // Force update by using 0
      } else {
        try {
          existingPeriodStart = new Date(existingSubscription.current_period_start).getTime()
          
          // Check if the date is valid
          if (isNaN(existingPeriodStart)) {
            console.error('❌ Invalid date from database:', {
              current_period_start: existingSubscription.current_period_start,
              type: typeof existingSubscription.current_period_start
            })
            existingPeriodStart = 0 // Force update by using 0
          }
        } catch (error) {
          console.error('❌ Invalid time value error in existing subscription:', {
            error: error instanceof Error ? error.message : String(error),
            current_period_start: existingSubscription.current_period_start,
            type: typeof existingSubscription.current_period_start
          })
          existingPeriodStart = 0 // Force update by using 0
        }
      }
      const newPeriodStart = extendedSubscription.current_period_start * 1000
      
      // Skip if the subscription already has the same status, period, and cancel_at_period_end
      const existingCancelAtPeriodEnd = Boolean(existingSubscription.cancel_at_period_end)
      const newCancelAtPeriodEnd = Boolean(subscription.cancel_at_period_end)
      
      if (existingSubscription.status === subscription.status && 
          existingPeriodStart === newPeriodStart &&
          existingCancelAtPeriodEnd === newCancelAtPeriodEnd) {
        console.log('✅ Subscription already up to date, skipping processing:', subscription.id)
        return
      }
      
      // Log what changed to help with debugging
      const changes = []
      if (existingSubscription.status !== subscription.status) {
        changes.push(`status: ${existingSubscription.status} → ${subscription.status}`)
      }
      if (existingPeriodStart !== newPeriodStart) {
        changes.push(`period: ${new Date(existingPeriodStart).toISOString()} → ${new Date(newPeriodStart).toISOString()}`)
      }
      if (existingCancelAtPeriodEnd !== newCancelAtPeriodEnd) {
        changes.push(`cancel_at_period_end: ${existingCancelAtPeriodEnd} → ${newCancelAtPeriodEnd}`)
      }
      console.log(`🔄 Subscription needs updating. Changes: ${changes.join(', ')}`);
      console.log('🔄 Subscription exists but needs updating')
    } else {
      console.log('🆕 New subscription, proceeding with creation')
    }
    const priceId = subscription.items.data[0]?.price.id || ''
    console.log(`💰 Price ID: ${priceId}`)
    console.log(`🎯 Expected price ID: ${businessProPriceId}`)
    
    // Validate that this is our expected business pro price
    if (priceId !== businessProPriceId) {
      console.warn(`⚠️ Unexpected price ID in subscription: ${priceId}, expected: ${businessProPriceId}`)
    }
    
    // Prepare RPC parameters
    // Safely convert timestamps with validation
    const safeConvertTimestamp = (timestamp: number | null | undefined, fieldName: string): string => {
      if (!timestamp || typeof timestamp !== 'number') {
        console.error(`❌ Invalid ${fieldName}:`, timestamp)
        throw new Error(`Invalid ${fieldName}: ${timestamp}`)
      }
      
      try {
        const date = new Date(timestamp * 1000)
        if (isNaN(date.getTime())) {
          throw new Error(`Invalid date from timestamp: ${timestamp}`)
        }
        return date.toISOString()
      } catch (error) {
        console.error(`❌ Error converting ${fieldName}:`, error)
        throw error
      }
    }

    // Ensure cancel_at_period_end is properly set as boolean
    const cancelAtPeriodEnd = Boolean(subscription.cancel_at_period_end)

    // Preserve existing setup_fee_paid value - once paid, it should stay true
    const currentSetupFeePaid = existingSubscription?.setup_fee_paid || false

    const rpcParams = {
      p_business_id: businessId,
      p_stripe_subscription_id: subscription.id,
      p_stripe_customer_id: subscription.customer as string,
      p_stripe_price_id: priceId,
      p_status: subscription.status as SubscriptionStatus,
      p_current_period_start: safeConvertTimestamp(extendedSubscription.current_period_start, 'current_period_start'),
      p_current_period_end: safeConvertTimestamp(extendedSubscription.current_period_end, 'current_period_end'),
      p_amount_per_month: subscription.items.data[0]?.price.unit_amount || 0,
      p_currency: subscription.items.data[0]?.price.currency || 'gbp',
      p_cancel_at_period_end: cancelAtPeriodEnd,
      p_setup_fee_paid: currentSetupFeePaid, // Preserve existing value - once paid, stays true
      p_monthly_minutes_included: undefined // Explicitly set to undefined since we're not using this field
    }
    
    // Call the RPC function with the correct parameters that match the database function signature
    console.log('📝 Calling create_or_update_subscription RPC with parameters:')
    console.log(JSON.stringify(rpcParams, null, 2))
     
    const { data: rpcResult, error: rpcError } = await supabaseAdmin.rpc('create_or_update_subscription', rpcParams)

    if (rpcError) {
      console.error('❌ RPC Error creating/updating subscription:', rpcError)
      console.error('❌ RPC Error code:', rpcError.code)
      console.error('❌ RPC Error message:', rpcError.message)
      console.error('❌ RPC Error details:', rpcError.details)
      console.error('❌ RPC Error hint:', rpcError.hint)
      
      // Handle unique constraint violation specifically
      if (rpcError.message && rpcError.message.includes('duplicate key value violates unique constraint "subscriptions_business_id_key"')) {
        console.log('🔄 Unique constraint violation detected, attempting to update existing subscription by business_id')
        
        // Find the existing subscription by business_id and update it
        const { data: existingByBusiness } = await supabaseAdmin
          .from('subscriptions')
          .select('id')
          .eq('business_id', businessId)
          .single()
        
        if (existingByBusiness) {
          console.log('🔄 Found existing subscription by business_id, updating:', existingByBusiness.id)
          
          const { error: updateError } = await supabaseAdmin
            .from('subscriptions')
            .update({
              stripe_subscription_id: subscription.id,
              stripe_customer_id: subscription.customer as string,
              stripe_price_id: priceId,
              status: subscription.status as SubscriptionStatus,
              current_period_start: safeConvertTimestamp(extendedSubscription.current_period_start, 'current_period_start'),
              current_period_end: safeConvertTimestamp(extendedSubscription.current_period_end, 'current_period_end'),
              amount_per_month: subscriptionItem?.price.unit_amount || 0,
              currency: subscriptionItem?.price.currency || 'gbp',
              cancel_at_period_end: cancelAtPeriodEnd,
              setup_fee_paid: currentSetupFeePaid,
              updated_at: new Date().toISOString()
            })
            .eq('id', existingByBusiness.id)
          
          if (updateError) {
            console.error('❌ Error updating existing subscription by business_id:', updateError)
            throw new Error(`Failed to update existing subscription: ${updateError.message}`)
          }
          
          console.log('✅ Successfully updated existing subscription by business_id')
          // Use the existing subscription ID for business update
          const rpcResult = existingByBusiness.id
        } else {
          throw new Error(`RPC call failed: ${rpcError.message}`)
        }
      } else {
        throw new Error(`RPC call failed: ${rpcError.message}`)
      }
    } else {
      console.log('✅ Successfully created/updated subscription in Supabase')
      console.log('📋 RPC Result:', rpcResult)
    }



    // Update business with subscription_id (using the UUID returned by RPC)
    console.log(`🏢 Updating business ${businessId} with subscription_id: ${rpcResult}`)
    const { data: updateData, error: businessError } = await supabaseAdmin
      .from('businesses')
      .update({ subscription_id: rpcResult })
      .eq('id', businessId)
      .select()

    if (businessError) {
      console.error('❌ Error updating business subscription_id:', businessError)
      console.error('❌ Business update error code:', businessError.code)
      console.error('❌ Business update error message:', businessError.message)
      throw new Error(`Business update failed: ${businessError.message}`)
    } else {
      console.log('✅ Successfully updated business with subscription_id')
      console.log('📋 Updated business data:', updateData)
    }

    // Log the event
    console.log('📝 Logging subscription event...')
    try {
      await logSubscriptionEvent(subscription.id, businessId, 'subscription_updated', subscription.status, subscription)
      console.log('✅ Successfully logged subscription event')
    } catch (eventError) {
      console.error('⚠️ Warning: Failed to log subscription event:', eventError)
      // Don't throw here as the main operation succeeded
    }

  } catch (error) {
    console.error('💥 CRITICAL ERROR in handleSubscriptionChange:', error)
    console.error('💥 Error type:', typeof error)
    console.error('💥 Error name:', error instanceof Error ? error.name : 'Unknown')
    console.error('💥 Error message:', error instanceof Error ? error.message : String(error))
    console.error('💥 Error stack:', error instanceof Error ? error.stack : 'No stack trace available')
    
    // Re-throw to ensure webhook returns error status
    throw error
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

async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
  try {
    console.log('🛒 Processing checkout session completed:', session.id)
    
    if (!session.subscription) {
      console.log('⚠️ No subscription found in checkout session')
      return
    }

    // Get the subscription details from Stripe
    const subscription = await stripe.subscriptions.retrieve(session.subscription as string)
    console.log('📋 Retrieved subscription from Stripe:', {
      id: subscription.id,
      status: subscription.status,
      customer: subscription.customer
    })

    // Find business by customer ID
    const { data: business, error: businessError } = await supabaseAdmin
      .from('businesses')
      .select('id')
      .eq('stripe_customer_id', session.customer as string)
      .single()

    if (businessError || !business) {
      console.error('❌ Business not found for customer:', session.customer, businessError)
      return
    }

    const businessId = business.id
    console.log('🏢 Found business:', businessId)

    // Find existing subscription by business_id and update it
    const { data: existingSubscription, error: existingError } = await supabaseAdmin
      .from('subscriptions')
      .select('id')
      .eq('business_id', businessId)
      .single()

    if (existingError) {
      console.error('❌ No existing subscription found for business:', businessId, existingError)
      return
    }

    console.log('🔍 Found existing subscription:', existingSubscription.id)

    // Helper function to safely convert timestamps
    const safeConvertTimestamp = (timestamp: number | null, fieldName: string): string => {
      if (!timestamp) {
        throw new Error(`Missing required timestamp: ${fieldName}`)
      }
        
      try {
        const date = new Date(timestamp * 1000)
        if (isNaN(date.getTime())) {
          throw new Error(`Invalid date from timestamp: ${timestamp}`)
        }
        return date.toISOString()
      } catch (error) {
        console.error(`❌ Error converting ${fieldName}:`, error)
        throw error
      }
    }

    // Extract timestamps from subscription items
    const subscriptionItem = subscription.items.data[0]
    if (!subscriptionItem) {
      throw new Error('No subscription items found in checkout session')
    }

    console.log('🔍 Extracting timestamps from subscription item:', {
      current_period_start: subscriptionItem.current_period_start,
      current_period_end: subscriptionItem.current_period_end
    })

    // Update the existing subscription with missing info from Stripe
    const { error: updateError } = await supabaseAdmin
      .from('subscriptions')
      .update({
        stripe_subscription_id: subscription.id,
        stripe_customer_id: session.customer as string,
        stripe_price_id: subscription.items.data[0].price.id,
        status: subscription.status as SubscriptionStatus,
        current_period_start: safeConvertTimestamp(subscriptionItem.current_period_start, 'current_period_start'),
        current_period_end: safeConvertTimestamp(subscriptionItem.current_period_end, 'current_period_end'),
        amount_per_month: subscription.items.data[0].price.unit_amount || 0,
        currency: subscription.currency,
        cancel_at_period_end: false,
        setup_fee_paid: true, // Checkout completed means setup fee was paid
        updated_at: new Date().toISOString()
      })
      .eq('id', existingSubscription.id)

    if (updateError) {
      console.error('❌ Error updating existing subscription:', updateError)
      throw updateError
    }

    console.log('✅ Existing subscription updated with checkout info')

    // Update business to link it to the subscription
    const { error: businessUpdateError } = await supabaseAdmin
      .from('businesses')
      .update({ 
        subscription_id: existingSubscription.id,
        updated_at: new Date().toISOString()
      })
      .eq('id', businessId)

    if (businessUpdateError) {
      console.error('❌ Error linking business to subscription:', businessUpdateError)
    } else {
      console.log('✅ Business linked to subscription')
    }

  } catch (error) {
    console.error('❌ Error in handleCheckoutSessionCompleted:', error)
    throw error
  }
}

async function handlePaymentSucceeded(invoice: Stripe.Invoice) {
  try {
    const extendedInvoice = invoice as ExtendedStripeInvoice
    const subscriptionId = extendedInvoice.subscription
    if (subscriptionId && typeof subscriptionId === 'string') {
      // Get subscription details
      const { data: subscription } = await supabaseAdmin
        .from('subscriptions')
        .select('business_id, setup_fee_paid')
        .eq('stripe_subscription_id', subscriptionId)
        .single()

      if (subscription) {
        // Check if this invoice contains the setup fee by examining line items
        let hasSetupFee = false
        if (invoice.lines?.data) {
          for (const line of invoice.lines.data) {
            // Type assertion to access price/plan properties and additional fields
            const lineItem = line as Stripe.InvoiceLineItem & { 
              price?: { id: string }
              plan?: { id: string }
              type?: string
              proration?: boolean
              period?: { start: number; end: number } | null
            }
            
            // Primary detection: Check if the line item price ID matches our setup fee price ID
            const priceId = lineItem.price?.id || lineItem.plan?.id
            if (priceId === businessProSetupFeeId) {
              hasSetupFee = true
              console.log('🎯 Setup fee detected by price ID:', priceId)
              break
            }
            
            // Fallback detection: Look for setup fee patterns in description and amount
            // Setup fees often appear as "BUSINESS PRO" without monthly indicators
            const isBusinessProSetupFee = line.description === 'BUSINESS PRO' && 
                                         line.amount > 0 && 
                                         !line.description.includes('month') &&
                                         !line.description.includes('×')
            
            // Additional fallback: Check for one-time charges with setup fee indicators
            const isOneTimeCharge = lineItem.type === 'invoiceitem' || 
                                   (lineItem.proration === false && !lineItem.period)
            
            const hasSetupFeeIndicators = line.description?.toLowerCase().includes('setup') ||
                                         line.description?.toLowerCase().includes('onboarding') ||
                                         line.description?.toLowerCase().includes('initial') ||
                                         line.description?.toLowerCase().includes('activation')
            
            if (isBusinessProSetupFee || (isOneTimeCharge && hasSetupFeeIndicators)) {
              hasSetupFee = true
              console.log('🎯 Setup fee detected by pattern matching:', {
                description: line.description,
                amount: line.amount / 100,
                detectionMethod: isBusinessProSetupFee ? 'business_pro_pattern' : 'one_time_charge_with_indicators',
                type: lineItem.type,
                proration: lineItem.proration,
                period: lineItem.period
              })
              break
            }
          }
        }

        // If setup fee is present or this is the first payment, mark setup fee as paid
        if ((hasSetupFee || !subscription.setup_fee_paid) && !subscription.setup_fee_paid) {
          console.log('🎯 Setup fee payment detected, marking as paid for subscription:', subscriptionId)
          await supabaseAdmin
            .from('subscriptions')
            .update({ setup_fee_paid: true })
            .eq('stripe_subscription_id', subscriptionId)

          // Grant activation bonus minutes (+500) once when setup fee becomes paid
          try {
            console.log('🎁 Granting activation bonus minutes on invoice payment: +500')
            const { data: businessMinutes, error: minutesFetchError } = await supabaseAdmin
              .from('businesses')
              .select('minutes_allowed')
              .eq('id', subscription.business_id)
              .single()

            if (minutesFetchError) {
              console.error('⚠️ Failed to fetch current minutes_allowed:', minutesFetchError)
            } else {
              const currentAllowed = businessMinutes?.minutes_allowed || 0
              const updatedAllowed = currentAllowed + 500
              const { error: minutesUpdateError } = await supabaseAdmin
                .from('businesses')
                .update({ 
                  minutes_allowed: updatedAllowed,
                  updated_at: new Date().toISOString()
                })
                .eq('id', subscription.business_id)

              if (minutesUpdateError) {
                console.error('⚠️ Failed to grant activation bonus minutes:', minutesUpdateError)
              } else {
                console.log(`✅ Activation bonus applied on invoice. minutes_allowed: ${currentAllowed} → ${updatedAllowed}`)
              }
            }
          } catch (bonusError) {
            console.error('⚠️ Error applying activation bonus minutes on invoice:', bonusError)
          }
        }

        // Reset monthly usage if this is a recurring payment
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