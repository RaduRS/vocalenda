-- Comprehensive Setup Wizard Database Migration
-- Add new fields to support all setup wizard requirements from setup_wizard.md

-- Add new columns to businesses table
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS business_type VARCHAR(100);
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS payment_methods TEXT[];
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS holidays JSONB DEFAULT '[]';
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS ai_greeting TEXT;
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS key_information TEXT;
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS customer_notes_enabled BOOLEAN DEFAULT true;
ALTER TABLE businesses ADD COLUMN IF NOT EXISTS booking_policies JSONB DEFAULT '{}';

-- Update business_hours to be more structured (if not already JSONB)
-- business_hours will store: {"monday": {"open": "09:00", "close": "17:00", "closed": false}, ...}
COMMENT ON COLUMN businesses.business_hours IS 'Weekly operating hours in format: {"monday": {"open": "09:00", "close": "17:00", "closed": false}}';
COMMENT ON COLUMN businesses.holidays IS 'Array of holiday dates and descriptions: [{"date": "2024-12-25", "description": "Christmas Day"}]';
COMMENT ON COLUMN businesses.payment_methods IS 'Array of accepted payment methods: ["cash", "card", "apple_pay", "bank_transfer"]';
COMMENT ON COLUMN businesses.ai_greeting IS 'Custom AI greeting message for phone calls';
COMMENT ON COLUMN businesses.key_information IS 'Important information AI should mention to customers';
COMMENT ON COLUMN businesses.customer_notes_enabled IS 'Whether customers can add special requests/notes to bookings';
COMMENT ON COLUMN businesses.booking_policies IS 'Booking and cancellation policies: {"cancellation_policy": "...", "booking_rules": "..."}';

-- Update business_config table to include AI response limitations
ALTER TABLE business_config ADD COLUMN IF NOT EXISTS ai_response_mode VARCHAR(50) DEFAULT 'flexible';
ALTER TABLE business_config ADD COLUMN IF NOT EXISTS allowed_ai_topics TEXT[];
ALTER TABLE business_config ADD COLUMN IF NOT EXISTS restricted_ai_topics TEXT[];

COMMENT ON COLUMN business_config.ai_response_mode IS 'AI response mode: "flexible" allows general responses, "restricted" limits to specific topics';
COMMENT ON COLUMN business_config.allowed_ai_topics IS 'Topics AI is allowed to discuss when in restricted mode';
COMMENT ON COLUMN business_config.restricted_ai_topics IS 'Topics AI should avoid discussing';

-- Add indexes for new columns
CREATE INDEX IF NOT EXISTS idx_businesses_business_type ON businesses(business_type);
CREATE INDEX IF NOT EXISTS idx_business_config_ai_mode ON business_config(ai_response_mode);

-- Update the create_business_with_owner function to include new fields
CREATE OR REPLACE FUNCTION create_business_with_owner(
    p_clerk_user_id TEXT,
    p_email TEXT,
    p_first_name TEXT,
    p_last_name TEXT,
    p_business_name TEXT,
    p_business_slug TEXT,
    p_phone_number TEXT,
    p_business_type TEXT DEFAULT NULL,
    p_address TEXT DEFAULT NULL,
    p_timezone TEXT DEFAULT 'UTC'
)
RETURNS UUID AS $$
DECLARE
    v_business_id UUID;
    v_user_id UUID;
BEGIN
    -- Create business with new fields
    INSERT INTO businesses (
        name, slug, phone_number, email, business_type, 
        address, timezone, customer_notes_enabled
    )
    VALUES (
        p_business_name, p_business_slug, p_phone_number, p_email, 
        p_business_type, p_address, p_timezone, true
    )
    RETURNING id INTO v_business_id;
    
    -- Create default business config
    INSERT INTO business_config (business_id, ai_response_mode)
    VALUES (v_business_id, 'flexible')
    ON CONFLICT (business_id) DO NOTHING;
    
    -- Update existing user or create new one
    INSERT INTO users (business_id, clerk_user_id, email, first_name, last_name, role)
    VALUES (v_business_id, p_clerk_user_id, p_email, p_first_name, p_last_name, 'owner')
    ON CONFLICT (clerk_user_id) 
    DO UPDATE SET 
        business_id = EXCLUDED.business_id,
        email = EXCLUDED.email,
        first_name = EXCLUDED.first_name,
        last_name = EXCLUDED.last_name,
        role = EXCLUDED.role
    RETURNING id INTO v_user_id;
    
    RETURN v_business_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update business comprehensive settings
CREATE OR REPLACE FUNCTION update_business_settings(
    p_business_id UUID,
    p_business_type TEXT DEFAULT NULL,
    p_payment_methods TEXT[] DEFAULT NULL,
    p_business_hours JSONB DEFAULT NULL,
    p_holidays JSONB DEFAULT NULL,
    p_ai_greeting TEXT DEFAULT NULL,
    p_key_information TEXT DEFAULT NULL,
    p_customer_notes_enabled BOOLEAN DEFAULT NULL,
    p_booking_policies JSONB DEFAULT NULL
)
RETURNS BOOLEAN AS $$
BEGIN
    UPDATE businesses SET
        business_type = COALESCE(p_business_type, business_type),
        payment_methods = COALESCE(p_payment_methods, payment_methods),
        business_hours = COALESCE(p_business_hours, business_hours),
        holidays = COALESCE(p_holidays, holidays),
        ai_greeting = COALESCE(p_ai_greeting, ai_greeting),
        key_information = COALESCE(p_key_information, key_information),
        customer_notes_enabled = COALESCE(p_customer_notes_enabled, customer_notes_enabled),
        booking_policies = COALESCE(p_booking_policies, booking_policies),
        updated_at = NOW()
    WHERE id = p_business_id;
    
    RETURN FOUND;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to update AI configuration
CREATE OR REPLACE FUNCTION update_ai_configuration(
    p_business_id UUID,
    p_ai_response_mode VARCHAR(50) DEFAULT NULL,
    p_allowed_topics TEXT[] DEFAULT NULL,
    p_restricted_topics TEXT[] DEFAULT NULL,
    p_ai_prompt TEXT DEFAULT NULL,
    p_booking_rules JSONB DEFAULT NULL,
    p_faq_data JSONB DEFAULT NULL
)
RETURNS BOOLEAN AS $$
BEGIN
    INSERT INTO business_config (
        business_id, ai_response_mode, allowed_ai_topics, 
        restricted_ai_topics, ai_prompt, 
        booking_rules, faq_data
    )
    VALUES (
        p_business_id, 
        COALESCE(p_ai_response_mode, 'flexible'),
        p_allowed_topics,
        p_restricted_topics,
        p_ai_prompt,
        p_booking_rules,
        p_faq_data
    )
    ON CONFLICT (business_id) DO UPDATE SET
        ai_response_mode = COALESCE(p_ai_response_mode, business_config.ai_response_mode),
        allowed_ai_topics = COALESCE(p_allowed_topics, business_config.allowed_ai_topics),
        restricted_ai_topics = COALESCE(p_restricted_topics, business_config.restricted_ai_topics),
        ai_prompt = COALESCE(p_ai_prompt, business_config.ai_prompt),
        booking_rules = COALESCE(p_booking_rules, business_config.booking_rules),
        faq_data = COALESCE(p_faq_data, business_config.faq_data),
        updated_at = NOW();
    
    RETURN TRUE;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Grant permissions for new functions
GRANT EXECUTE ON FUNCTION update_business_settings(UUID, TEXT, TEXT[], JSONB, JSONB, TEXT, TEXT, BOOLEAN, JSONB) TO authenticated;
GRANT EXECUTE ON FUNCTION update_ai_configuration(UUID, VARCHAR(50), TEXT[], TEXT[], TEXT, TEXT, JSONB, JSONB) TO authenticated;

-- Add sample data for business types
COMMENT ON COLUMN businesses.business_type IS 'Business category examples: "Barbershop", "Dental Office", "Car Repair Shop", "Pet Grooming", etc.';

-- Default payment methods array examples
-- ['cash', 'card', 'apple_pay', 'google_pay', 'bank_transfer']

-- Default business hours structure example:
-- {
--   "monday": {"open": "09:00", "close": "17:00", "closed": false},
--   "tuesday": {"open": "09:00", "close": "17:00", "closed": false},
--   "wednesday": {"open": "09:00", "close": "17:00", "closed": false},
--   "thursday": {"open": "09:00", "close": "17:00", "closed": false},
--   "friday": {"open": "09:00", "close": "17:00", "closed": false},
--   "saturday": {"open": "10:00", "close": "16:00", "closed": false},
--   "sunday": {"closed": true}
-- }

-- Default holidays structure example:
-- [
--   {"date": "2024-12-25", "description": "Christmas Day"},
--   {"date": "2024-01-01", "description": "New Year's Day"}
-- ]

-- Default booking policies structure example:
-- {
--   "cancellation_policy": "Appointments can be cancelled up to 24 hours in advance",
--   "no_show_policy": "No-show appointments may incur a fee",
--   "advance_booking_days": 30,
--   "min_advance_hours": 2
-- }