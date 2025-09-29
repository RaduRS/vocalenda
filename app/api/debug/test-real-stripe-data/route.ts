import { NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST() {
  try {
    console.log('🧪 Testing with REAL Stripe webhook data...')
    
    // This is the EXACT subscription data from your Stripe webhook
    const stripeSubscriptionData = {
      id: "sub_1SChZJBoBOrptQeDftzPFine",
      object: "subscription",
      cancel_at_period_end: true, // This is TRUE in Stripe
      status: "active",
      customer: "cus_T8zYlBE7MJLeyG",
      current_period_start: 1759154203,
      current_period_end: 1761746203,
      items: {
        data: [{
          price: {
            id: "price_1SCbtFBoBOrptQeDXwXZNi9T",
            unit_amount: 13900,
            currency: "gbp"
          }
        }]
      }
    }
    
    console.log('📋 Stripe data:', {
      id: stripeSubscriptionData.id,
      cancel_at_period_end: stripeSubscriptionData.cancel_at_period_end,
      status: stripeSubscriptionData.status
    })
    
    // Get the existing subscription from database
    const { data: existingSubscription, error: subError } = await supabaseAdmin
      .from('subscriptions')
      .select('id, status, stripe_subscription_id, current_period_start, current_period_end, cancel_at_period_end, business_id')
      .eq('stripe_subscription_id', stripeSubscriptionData.id)
      .single()
    
    if (subError || !existingSubscription) {
      return NextResponse.json({ 
        success: false, 
        error: 'Subscription not found in database',
        stripeId: stripeSubscriptionData.id
      }, { status: 404 })
    }
    
    console.log('📋 Database subscription before update:', {
      id: existingSubscription.id,
      cancel_at_period_end: existingSubscription.cancel_at_period_end,
      status: existingSubscription.status
    })
    
    // Test the FIXED idempotency logic
    const existingPeriodStart = new Date(existingSubscription.current_period_start).getTime()
    const newPeriodStart = stripeSubscriptionData.current_period_start * 1000
    const newCancelAtPeriodEnd = Boolean(stripeSubscriptionData.cancel_at_period_end)
    
    const shouldSkipUpdate = (
      existingSubscription.status === stripeSubscriptionData.status && 
      existingPeriodStart === newPeriodStart &&
      existingSubscription.cancel_at_period_end === newCancelAtPeriodEnd
    )
    
    console.log('🔍 Idempotency check:', {
      statusMatch: existingSubscription.status === stripeSubscriptionData.status,
      periodMatch: existingPeriodStart === newPeriodStart,
      cancelAtPeriodEndMatch: existingSubscription.cancel_at_period_end === newCancelAtPeriodEnd,
      shouldSkipUpdate: shouldSkipUpdate,
      existingCancelAtPeriodEnd: existingSubscription.cancel_at_period_end,
      newCancelAtPeriodEnd: newCancelAtPeriodEnd
    })
    
    if (shouldSkipUpdate) {
      return NextResponse.json({
        success: false,
        message: 'Update would be skipped by idempotency logic',
        reason: 'All values match - no update needed',
        idempotencyCheck: {
          statusMatch: existingSubscription.status === stripeSubscriptionData.status,
          periodMatch: existingPeriodStart === newPeriodStart,
          cancelAtPeriodEndMatch: existingSubscription.cancel_at_period_end === newCancelAtPeriodEnd
        }
      })
    }
    
    // Proceed with the update using the exact same logic as the webhook
    const safeConvertTimestamp = (timestamp: number): string => {
      const date = new Date(timestamp * 1000)
      return date.toISOString()
    }
    
    const rpcParams = {
      p_business_id: existingSubscription.business_id,
      p_stripe_subscription_id: stripeSubscriptionData.id,
      p_stripe_customer_id: stripeSubscriptionData.customer,
      p_stripe_price_id: stripeSubscriptionData.items.data[0].price.id,
      p_status: stripeSubscriptionData.status as 'active',
      p_current_period_start: safeConvertTimestamp(stripeSubscriptionData.current_period_start),
      p_current_period_end: safeConvertTimestamp(stripeSubscriptionData.current_period_end),
      p_amount_per_month: stripeSubscriptionData.items.data[0].price.unit_amount,
      p_currency: stripeSubscriptionData.items.data[0].price.currency,
      p_cancel_at_period_end: newCancelAtPeriodEnd, // This should be TRUE
      p_setup_fee_paid: true // Assuming it's already paid
    }
    
    console.log('📝 RPC Parameters:', rpcParams)
    
    const { data: rpcResult, error: rpcError } = await supabaseAdmin.rpc('create_or_update_subscription', rpcParams)
    
    if (rpcError) {
      console.error('❌ RPC Error:', rpcError)
      return NextResponse.json({ 
        success: false, 
        error: 'RPC call failed',
        rpcError: rpcError.message,
        rpcParams
      }, { status: 500 })
    }
    
    // Verify the update
    const { data: updatedSubscription } = await supabaseAdmin
      .from('subscriptions')
      .select('cancel_at_period_end, status')
      .eq('stripe_subscription_id', stripeSubscriptionData.id)
      .single()
    
    console.log('📋 Database subscription after update:', {
      cancel_at_period_end: updatedSubscription?.cancel_at_period_end,
      status: updatedSubscription?.status
    })
    
    return NextResponse.json({
      success: true,
      message: 'Real Stripe data test completed',
      stripeData: {
        id: stripeSubscriptionData.id,
        cancel_at_period_end: stripeSubscriptionData.cancel_at_period_end,
        status: stripeSubscriptionData.status
      },
      beforeUpdate: {
        cancel_at_period_end: existingSubscription.cancel_at_period_end,
        status: existingSubscription.status
      },
      afterUpdate: {
        cancel_at_period_end: updatedSubscription?.cancel_at_period_end,
        status: updatedSubscription?.status
      },
      wasUpdated: updatedSubscription?.cancel_at_period_end === newCancelAtPeriodEnd,
      rpcParams
    })
    
  } catch (error) {
    console.error('❌ Error testing real Stripe data:', error)
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, { status: 500 })
  }
}