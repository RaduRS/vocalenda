import { supabaseAdmin } from '@/lib/supabase';
import { calculateMinutesFromDuration } from '@/lib/minutes-utils';

export interface SubscriptionStatus {
  hasActiveSubscription: boolean;
  minutesAllowed: number;
  minutesUsed: number;
  minutesRemaining: number;
  isOverLimit: boolean;
  subscriptionId: string | null;
  planName?: string;
  status?: string;
}

/**
 * Check subscription status and minutes usage for a business
 */
export async function checkSubscriptionStatus(businessId: string): Promise<SubscriptionStatus> {
  try {
    // Get business subscription info
    const { data: business, error: businessError } = await supabaseAdmin
      .from('businesses')
      .select('minutes_allowed, minutes_used, subscription_id')
      .eq('id', businessId)
      .single();

    if (businessError) {
      console.error('Error fetching business subscription info:', businessError);
      return {
        hasActiveSubscription: false,
        minutesAllowed: 0,
        minutesUsed: 0,
        minutesRemaining: 0,
        isOverLimit: true,
        subscriptionId: null,
      };
    }

    const minutesAllowed = business.minutes_allowed || 0;
    const minutesUsed = business.minutes_used || 0;
    const minutesRemaining = Math.max(0, minutesAllowed - minutesUsed);
    const hasActiveSubscription = business.subscription_id !== null && minutesAllowed > 0;
    const isOverLimit = minutesUsed >= minutesAllowed;

    let planName: string | undefined;
    let status: string | undefined;

    // If there's a subscription, get additional details
    if (business.subscription_id) {
      const { data: subscription } = await supabaseAdmin
        .from('subscriptions')
        .select('plan, status')
        .eq('id', business.subscription_id)
        .single();

      if (subscription) {
        planName = subscription.plan;
        status = subscription.status;
      }
    }

    return {
      hasActiveSubscription,
      minutesAllowed,
      minutesUsed,
      minutesRemaining,
      isOverLimit,
      subscriptionId: business.subscription_id,
      planName,
      status,
    };
  } catch (error) {
    console.error('Error checking subscription status:', error);
    return {
      hasActiveSubscription: false,
      minutesAllowed: 0,
      minutesUsed: 0,
      minutesRemaining: 0,
      isOverLimit: true,
      subscriptionId: null,
    };
  }
}

export async function updateMinutesUsage(businessId: string, minutesUsed: number): Promise<void> {
  try {
    // Get current minutes_used
    const { data: business } = await supabaseAdmin
      .from('businesses')
      .select('minutes_used')
      .eq('id', businessId)
      .single();

    if (business) {
      const newMinutesUsed = (business.minutes_used || 0) + minutesUsed;
      
      // Update the business minutes_used counter
      await supabaseAdmin
        .from('businesses')
        .update({ minutes_used: newMinutesUsed })
        .eq('id', businessId);
    }
  } catch (error) {
    console.error('Error updating minutes usage:', error);
    throw error;
  }
}

/**
 * Check if a business can make calls (has remaining minutes)
 */
export async function canMakeCall(businessId: string): Promise<{ canCall: boolean; reason?: string }> {
  const status = await checkSubscriptionStatus(businessId);
  
  if (!status.hasActiveSubscription) {
    return { 
      canCall: false, 
      reason: 'No active subscription found' 
    };
  }
  
  if (status.isOverLimit) {
    return { 
      canCall: false, 
      reason: 'Monthly minute limit exceeded' 
    };
  }
  
  return { canCall: true };
}

/**
 * Log subscription usage event
 */
export async function logSubscriptionUsage(
  businessId: string,
  subscriptionId: string,
  minutesUsed: number,
  callId?: string
): Promise<void> {
  try {
    await supabaseAdmin
      .from('subscription_usage')
      .insert({
        subscription_id: subscriptionId,
        business_id: businessId,
        call_log_id: callId,
        minutes_used: minutesUsed,
        usage_date: new Date().toISOString().split('T')[0],
        usage_month: new Date().getMonth() + 1,
        usage_year: new Date().getFullYear(),
      });

    console.log(`✅ Logged subscription usage: ${minutesUsed} minutes for business ${businessId}`);
  } catch (error) {
    console.error('Error logging subscription usage:', error);
    // Don't throw error as this is just logging
  }
}