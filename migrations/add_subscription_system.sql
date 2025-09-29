-- Subscription System Migration for Stripe Integration
-- This migration adds subscription management to the Vocalenda platform
-- Run this in your Supabase SQL Editor

-- Create subscription status enum
CREATE TYPE subscription_status AS ENUM (
    'active',
    'past_due', 
    'canceled',
    'unpaid',
    'incomplete',
    'incomplete_expired',
    'trialing',
    'paused'
);

-- Create subscription plan enum
CREATE TYPE subscription_plan AS ENUM (
    'business_pro'
);

-- Create subscriptions table
CREATE TABLE subscriptions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE UNIQUE,
    
    -- Stripe identifiers
    stripe_subscription_id VARCHAR(255) UNIQUE NOT NULL,
    stripe_customer_id VARCHAR(255) NOT NULL,
    stripe_price_id VARCHAR(255) NOT NULL,
    
    -- Subscription details
    plan subscription_plan NOT NULL DEFAULT 'business_pro',
    status subscription_status NOT NULL DEFAULT 'incomplete',
    
    -- Billing information
    current_period_start TIMESTAMP WITH TIME ZONE NOT NULL,
    current_period_end TIMESTAMP WITH TIME ZONE NOT NULL,
    trial_start TIMESTAMP WITH TIME ZONE,
    trial_end TIMESTAMP WITH TIME ZONE,
    cancel_at_period_end BOOLEAN DEFAULT false,
    canceled_at TIMESTAMP WITH TIME ZONE,
    
    -- Usage tracking
    monthly_minutes_included INTEGER DEFAULT 500,
    monthly_minutes_used INTEGER DEFAULT 0,
    minutes_reset_date TIMESTAMP WITH TIME ZONE,
    
    -- Pricing
    amount_per_month INTEGER NOT NULL, -- Amount in cents
    currency VARCHAR(3) DEFAULT 'GBP',
    setup_fee INTEGER DEFAULT 0, -- One-time setup fee in cents
    setup_fee_paid BOOLEAN DEFAULT false,
    
    -- Metadata
    metadata JSONB DEFAULT '{}',
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add subscription_id to business table
ALTER TABLE businesses 
ADD COLUMN subscription_id UUID REFERENCES subscriptions(id) ON DELETE SET NULL;

-- Create subscription events table for audit trail
CREATE TABLE subscription_events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    
    -- Event details
    event_type VARCHAR(100) NOT NULL, -- e.g., 'subscription.created', 'subscription.updated'
    stripe_event_id VARCHAR(255) UNIQUE,
    
    -- Event data
    previous_status subscription_status,
    new_status subscription_status,
    event_data JSONB DEFAULT '{}',
    
    -- Timestamps
    occurred_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    processed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create usage tracking table for detailed minutes usage
CREATE TABLE subscription_usage (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    subscription_id UUID REFERENCES subscriptions(id) ON DELETE CASCADE,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    call_log_id UUID REFERENCES call_logs(id) ON DELETE SET NULL,
    
    -- Usage details
    minutes_used INTEGER NOT NULL,
    usage_date DATE NOT NULL DEFAULT CURRENT_DATE,
    usage_month INTEGER NOT NULL DEFAULT EXTRACT(MONTH FROM NOW()),
    usage_year INTEGER NOT NULL DEFAULT EXTRACT(YEAR FROM NOW()),
    
    -- Metadata
    metadata JSONB DEFAULT '{}',
    
    -- Timestamps
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_subscriptions_business_id ON subscriptions(business_id);
CREATE INDEX idx_subscriptions_stripe_subscription_id ON subscriptions(stripe_subscription_id);
CREATE INDEX idx_subscriptions_stripe_customer_id ON subscriptions(stripe_customer_id);
CREATE INDEX idx_subscriptions_status ON subscriptions(status);
CREATE INDEX idx_subscriptions_current_period ON subscriptions(current_period_start, current_period_end);

CREATE INDEX idx_subscription_events_subscription_id ON subscription_events(subscription_id);
CREATE INDEX idx_subscription_events_stripe_event_id ON subscription_events(stripe_event_id);
CREATE INDEX idx_subscription_events_event_type ON subscription_events(event_type);
CREATE INDEX idx_subscription_events_occurred_at ON subscription_events(occurred_at);

CREATE INDEX idx_subscription_usage_subscription_id ON subscription_usage(subscription_id);
CREATE INDEX idx_subscription_usage_business_id ON subscription_usage(business_id);
CREATE INDEX idx_subscription_usage_date ON subscription_usage(usage_date);
CREATE INDEX idx_subscription_usage_month_year ON subscription_usage(usage_month, usage_year);

-- Add updated_at triggers
CREATE TRIGGER update_subscriptions_updated_at 
    BEFORE UPDATE ON subscriptions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscription_usage ENABLE ROW LEVEL SECURITY;

-- RLS Policies for subscriptions
CREATE POLICY "subscriptions_business_access" ON subscriptions
    FOR ALL USING (business_id = get_current_user_business_id());

CREATE POLICY "subscription_events_business_access" ON subscription_events
    FOR ALL USING (business_id = get_current_user_business_id());

CREATE POLICY "subscription_usage_business_access" ON subscription_usage
    FOR ALL USING (business_id = get_current_user_business_id());

-- Helper function to get subscription by business ID
CREATE OR REPLACE FUNCTION get_business_subscription(p_business_id UUID)
RETURNS TABLE(
    subscription_id UUID,
    stripe_subscription_id VARCHAR,
    plan subscription_plan,
    status subscription_status,
    current_period_end TIMESTAMP WITH TIME ZONE,
    monthly_minutes_included INTEGER,
    monthly_minutes_used INTEGER,
    cancel_at_period_end BOOLEAN
) AS $$
BEGIN
    RETURN QUERY
    SELECT 
        s.id,
        s.stripe_subscription_id,
        s.plan,
        s.status,
        s.current_period_end,
        s.monthly_minutes_included,
        s.monthly_minutes_used,
        s.cancel_at_period_end
    FROM subscriptions s
    WHERE s.business_id = p_business_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to track minutes usage
CREATE OR REPLACE FUNCTION track_minutes_usage(
    p_business_id UUID,
    p_call_log_id UUID,
    p_minutes_used INTEGER
)
RETURNS BOOLEAN AS $$
DECLARE
    v_subscription_id UUID;
    v_current_usage INTEGER;
    v_monthly_limit INTEGER;
BEGIN
    -- Get subscription info
    SELECT id, monthly_minutes_used, monthly_minutes_included 
    INTO v_subscription_id, v_current_usage, v_monthly_limit
    FROM subscriptions 
    WHERE business_id = p_business_id AND status = 'active';
    
    IF v_subscription_id IS NULL THEN
        RAISE EXCEPTION 'No active subscription found for business: %', p_business_id;
    END IF;
    
    -- Check if usage would exceed limit
    IF (v_current_usage + p_minutes_used) > v_monthly_limit THEN
        RAISE EXCEPTION 'Usage would exceed monthly limit. Current: %, Limit: %, Requested: %', 
            v_current_usage, v_monthly_limit, p_minutes_used;
    END IF;
    
    -- Record usage
    INSERT INTO subscription_usage (subscription_id, business_id, call_log_id, minutes_used)
    VALUES (v_subscription_id, p_business_id, p_call_log_id, p_minutes_used);
    
    -- Update subscription usage
    UPDATE subscriptions 
    SET monthly_minutes_used = monthly_minutes_used + p_minutes_used,
        updated_at = NOW()
    WHERE id = v_subscription_id;
    
    RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to reset monthly usage (to be called by cron job)
CREATE OR REPLACE FUNCTION reset_monthly_usage()
RETURNS INTEGER AS $$
DECLARE
    v_reset_count INTEGER := 0;
BEGIN
    UPDATE subscriptions 
    SET 
        monthly_minutes_used = 0,
        minutes_reset_date = NOW(),
        updated_at = NOW()
    WHERE 
        status = 'active' 
        AND (
            minutes_reset_date IS NULL 
            OR minutes_reset_date < date_trunc('month', NOW())
        );
    
    GET DIAGNOSTICS v_reset_count = ROW_COUNT;
    RETURN v_reset_count;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create subscription from Stripe webhook
CREATE OR REPLACE FUNCTION create_or_update_subscription(
    p_business_id UUID,
    p_stripe_subscription_id VARCHAR,
    p_stripe_customer_id VARCHAR,
    p_stripe_price_id VARCHAR,
    p_status subscription_status,
    p_current_period_start TIMESTAMP WITH TIME ZONE,
    p_current_period_end TIMESTAMP WITH TIME ZONE,
    p_amount_per_month INTEGER,
    p_currency VARCHAR DEFAULT 'GBP'
)
RETURNS UUID AS $$
DECLARE
    v_subscription_id UUID;
BEGIN
    INSERT INTO subscriptions (
        business_id,
        stripe_subscription_id,
        stripe_customer_id,
        stripe_price_id,
        status,
        current_period_start,
        current_period_end,
        amount_per_month,
        currency
    ) VALUES (
        p_business_id,
        p_stripe_subscription_id,
        p_stripe_customer_id,
        p_stripe_price_id,
        p_status,
        p_current_period_start,
        p_current_period_end,
        p_amount_per_month,
        p_currency
    )
    ON CONFLICT (stripe_subscription_id) 
    DO UPDATE SET
        status = EXCLUDED.status,
        current_period_start = EXCLUDED.current_period_start,
        current_period_end = EXCLUDED.current_period_end,
        amount_per_month = EXCLUDED.amount_per_month,
        currency = EXCLUDED.currency,
        updated_at = NOW()
    RETURNING id INTO v_subscription_id;
    
    -- Update business table with subscription reference
    UPDATE businesses 
    SET subscription_id = v_subscription_id 
    WHERE id = p_business_id;
    
    RETURN v_subscription_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant permissions
GRANT ALL ON subscriptions TO anon, authenticated;
GRANT ALL ON subscription_events TO anon, authenticated;
GRANT ALL ON subscription_usage TO anon, authenticated;
GRANT EXECUTE ON FUNCTION get_business_subscription(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION track_minutes_usage(UUID, UUID, INTEGER) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION reset_monthly_usage() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION create_or_update_subscription(UUID, VARCHAR, VARCHAR, VARCHAR, subscription_status, TIMESTAMP WITH TIME ZONE, TIMESTAMP WITH TIME ZONE, INTEGER, VARCHAR) TO anon, authenticated;

-- Comments for documentation
COMMENT ON TABLE subscriptions IS 'Stripe subscription management for businesses';
COMMENT ON TABLE subscription_events IS 'Audit trail for subscription events from Stripe webhooks';
COMMENT ON TABLE subscription_usage IS 'Detailed tracking of minutes usage per call';
COMMENT ON FUNCTION get_business_subscription(UUID) IS 'Get subscription details for a business';
COMMENT ON FUNCTION track_minutes_usage(UUID, UUID, INTEGER) IS 'Track minutes usage for a call and update subscription';
COMMENT ON FUNCTION reset_monthly_usage() IS 'Reset monthly usage counters (run monthly via cron)';
COMMENT ON FUNCTION create_or_update_subscription(UUID, VARCHAR, VARCHAR, VARCHAR, subscription_status, TIMESTAMP WITH TIME ZONE, TIMESTAMP WITH TIME ZONE, INTEGER, VARCHAR) IS 'Create or update subscription from Stripe webhook data';