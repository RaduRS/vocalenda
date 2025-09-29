-- Fix the create_or_update_subscription function
-- The original function had incorrect parameter mapping in the VALUES clause

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
        p_stripe_subscription_id,  -- This was mapped incorrectly in the original
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