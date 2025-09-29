import { createClient } from "@supabase/supabase-js";
import { getConfig } from "./config.js";

/**
 * Initialize and export Supabase client
 */
function createSupabaseClient() {
  const config = getConfig();

  if (!config.supabase.url || !config.supabase.serviceRoleKey) {
    throw new Error(
      "Supabase configuration is missing. Please check your environment variables."
    );
  }

  return createClient(config.supabase.url, config.supabase.serviceRoleKey);
}

// Export the initialized Supabase client
export const supabase = createSupabaseClient();

/**
 * Database utility functions
 */
export const db = {
  /**
   * Get a business configuration by ID
   */
  async getBusinessConfig(businessId) {
    const { data, error } = await supabase
      .from("businesses")
      .select("*")
      .eq("id", businessId)
      .single();

    if (error) {
      throw new Error(`Failed to load business config: ${error.message}`);
    }

    return data;
  },

  /**
   * Create a new booking record
   */
  async createBooking(bookingData) {
    const { data, error } = await supabase
      .from("bookings")
      .insert(bookingData)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to create booking: ${error.message}`);
    }

    return data;
  },

  /**
   * Update a booking record
   */
  async updateBooking(bookingId, updates) {
    const { data, error } = await supabase
      .from("bookings")
      .update(updates)
      .eq("id", bookingId)
      .select()
      .single();

    if (error) {
      throw new Error(`Failed to update booking: ${error.message}`);
    }

    return data;
  },

  /**
   * Get bookings for a business within a date range
   */
  async getBookings(businessId, startDate, endDate) {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .eq("business_id", businessId)
      .gte("start_time", startDate)
      .lte("start_time", endDate)
      .order("start_time", { ascending: true });

    if (error) {
      throw new Error(`Failed to get bookings: ${error.message}`);
    }

    return data || [];
  },

  /**
   * Log an incoming call
   */
  async logIncomingCall(businessId, callerPhone, businessPhone, twilioCallSid) {
    // Check subscription status before allowing the call
    try {
      const { canMakeCall } = await import('./subscription-utils.js');
      const canProceed = await canMakeCall(businessId);
      
      if (!canProceed.allowed) {
        console.error(`🚫 Call blocked for business ${businessId}: ${canProceed.reason}`);
        throw new Error(`Call not allowed: ${canProceed.reason}`);
      }
      
      console.log(`✅ Subscription check passed for business ${businessId}`);
    } catch (subscriptionError) {
      console.error('❌ Subscription check failed:', subscriptionError);
      throw new Error(`Subscription check failed: ${subscriptionError.message}`);
    }

    const { data, error } = await supabase
      .from("call_logs")
      .insert({
        business_id: businessId,
        caller_phone: callerPhone,
        business_phone: businessPhone,
        twilio_call_sid: twilioCallSid,
        status: "incoming",
        started_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (error) {
      console.error("Failed to log incoming call:", error);
      throw new Error(`Failed to log incoming call: ${error.message}`);
    }

    return data;
  },

  /**
   * Update call status and end time
   */
  async updateCallStatus(
    twilioCallSid,
    status,
    endedAt = null,
    duration = null
  ) {
    const updates = { status };
    if (endedAt) updates.ended_at = endedAt;
    if (duration !== null) updates.duration_seconds = duration;

    const { data, error } = await supabase
      .from("call_logs")
      .update(updates)
      .eq("twilio_call_sid", twilioCallSid)
      .select()
      .single();

    if (error) {
      console.error("Failed to update call status:", error);
      throw new Error(`Failed to update call status: ${error.message}`);
    }

    // Track minutes usage for completed calls
    if (status === 'completed' && duration && data) {
      try {
        const { updateMinutesUsage, logSubscriptionUsage, calculateMinutesFromDuration } = await import('./subscription-utils.js');
        
        const minutesUsed = calculateMinutesFromDuration(duration);
        if (minutesUsed > 0) {
          console.log(`📊 Tracking ${minutesUsed} minutes for call ${twilioCallSid}`);
          
          // Update business minutes usage
          await updateMinutesUsage(data.business_id, minutesUsed);
          
          // Log subscription usage if business has a subscription
          const { data: business } = await supabase
            .from('businesses')
            .select('subscription_id')
            .eq('id', data.business_id)
            .single();
            
          if (business?.subscription_id) {
            await logSubscriptionUsage(
              business.subscription_id,
              data.business_id,
              data.id,
              minutesUsed
            );
          }
          
          console.log(`✅ Minutes tracking completed for call ${twilioCallSid}`);
        }
      } catch (minutesError) {
        console.error('❌ Error tracking minutes usage:', minutesError);
        // Don't throw - we don't want to fail the call completion for tracking errors
      }
    }

    return data;
  },

  /**
   * Update call with customer information
   */
  async updateCallCustomer(twilioCallSid, customerName) {
    const { data, error } = await supabase
      .from("call_logs")
      .update({ customer_name: customerName })
      .eq("twilio_call_sid", twilioCallSid)
      .select()
      .single();

    if (error) {
      console.error("Failed to update call customer:", error);
      // Don't throw error for customer name updates as it's not critical
      return null;
    }

    return data;
  },

  /**
   * Update call transcript
   */
  async updateCallTranscript(twilioCallSid, transcript) {
    const { data, error } = await supabase
      .from("call_logs")
      .update({ transcript })
      .eq("twilio_call_sid", twilioCallSid)
      .select()
      .single();

    if (error) {
      console.error("Failed to update call transcript:", error);
      throw new Error(`Failed to update call transcript: ${error.message}`);
    }

    return data;
  },
};
