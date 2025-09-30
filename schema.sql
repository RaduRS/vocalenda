-- Vocalenda Database Schema with Clerk Authentication
-- Multi-tenant voice booking platform
-- Run these queries in your Supabase SQL Editor

-- Enable Row Level Security
-- Note: This schema is designed to work with Clerk authentication
-- Clerk user IDs will be stored as clerk_user_id (string)

-- Create custom types
CREATE TYPE appointment_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed', 'no_show');
CREATE TYPE business_status AS ENUM ('active', 'inactive', 'suspended');
CREATE TYPE call_status AS ENUM ('incoming', 'in_progress', 'completed', 'failed');
CREATE TYPE user_role AS ENUM ('owner', 'admin', 'staff', 'customer');

-- Businesses table (multi-tenant)
CREATE TABLE businesses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    slug VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    phone_number VARCHAR(20) UNIQUE NOT NULL, -- Twilio phone number
    email VARCHAR(255),
    address TEXT,
    timezone VARCHAR(50) DEFAULT 'UTC',
    business_hours JSONB, -- Store opening hours
    status business_status DEFAULT 'active',
    settings JSONB DEFAULT '{}', -- Business-specific settings
    google_calendar_id VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table (adapted for Clerk)
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    clerk_user_id VARCHAR(255) UNIQUE NOT NULL, -- Clerk user ID
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    role user_role DEFAULT 'customer',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services table
CREATE TABLE services (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    duration_minutes INTEGER NOT NULL,
    price DECIMAL(10,2),
    currency VARCHAR(3) DEFAULT 'GBP',
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Staff members table
CREATE TABLE staff_members (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    phone VARCHAR(20),
    specialties TEXT[], -- Array of service specialties
    working_hours JSONB, -- Weekly schedule
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Customers table
CREATE TABLE customers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    phone VARCHAR(20) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    notes TEXT,
    preferences JSONB DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(business_id, phone)
);

-- Appointments table
CREATE TABLE appointments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    service_id UUID NOT NULL REFERENCES services(id) ON DELETE RESTRICT,
    staff_member_id UUID REFERENCES staff_members(id) ON DELETE SET NULL,
    appointment_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    status appointment_status DEFAULT 'pending',
    notes TEXT,
    google_calendar_event_id VARCHAR(255),
    confirmation_sent_at TIMESTAMP WITH TIME ZONE,
    reminder_sent_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Call logs table
CREATE TABLE call_logs (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
    appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
    twilio_call_sid VARCHAR(255) UNIQUE,
    caller_phone VARCHAR(20) NOT NULL,
    business_phone VARCHAR(20) NOT NULL,
    status call_status DEFAULT 'incoming',
    duration_seconds INTEGER,
    recording_url TEXT,
    transcript TEXT,
    ai_summary TEXT,
    intent_detected VARCHAR(100), -- 'book', 'reschedule', 'cancel', 'inquiry'
    started_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ended_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- AI conversation context table
CREATE TABLE conversation_context (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    call_log_id UUID REFERENCES call_logs(id) ON DELETE CASCADE,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    context_data JSONB NOT NULL, -- Store conversation state
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Business configuration table
CREATE TABLE business_config (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE UNIQUE,
    ai_prompt TEXT, -- Custom AI instructions
    booking_rules JSONB, -- Booking constraints and rules
    faq_data JSONB, -- Frequently asked questions
    integration_settings JSONB, -- API keys, webhooks, etc.
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- SMS messages table
CREATE TABLE sms_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
    twilio_message_sid VARCHAR(255) UNIQUE,
    phone_from VARCHAR(20) NOT NULL,
    phone_to VARCHAR(20) NOT NULL,
    message_body TEXT NOT NULL,
    message_type VARCHAR(50), -- 'confirmation', 'reminder', 'cancellation'
    status VARCHAR(50), -- Twilio status
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX idx_businesses_phone ON businesses(phone_number);
CREATE INDEX idx_businesses_slug ON businesses(slug);
CREATE INDEX idx_users_business_id ON users(business_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_clerk_id ON users(clerk_user_id);
CREATE INDEX idx_customers_business_phone ON customers(business_id, phone);
CREATE INDEX idx_appointments_business_date ON appointments(business_id, appointment_date);
CREATE INDEX idx_appointments_customer ON appointments(customer_id);
CREATE INDEX idx_call_logs_business ON call_logs(business_id);
CREATE INDEX idx_call_logs_twilio_sid ON call_logs(twilio_call_sid);
CREATE INDEX idx_sms_messages_business ON sms_messages(business_id);

-- Create updated_at triggers
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_businesses_updated_at BEFORE UPDATE ON businesses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_staff_members_updated_at BEFORE UPDATE ON staff_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_customers_updated_at BEFORE UPDATE ON customers FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON appointments FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_conversation_context_updated_at BEFORE UPDATE ON conversation_context FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_business_config_updated_at BEFORE UPDATE ON business_config FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Helper function to get current user's Clerk ID from JWT
-- This function extracts the Clerk user ID from the JWT token
CREATE OR REPLACE FUNCTION get_current_clerk_user_id()
RETURNS TEXT AS $$
BEGIN
    -- Extract Clerk user ID from JWT claims
    -- Clerk typically stores the user ID in the 'sub' claim
    RETURN COALESCE(
        current_setting('request.jwt.claims', true)::json->>'sub',
        current_setting('request.jwt.claims', true)::json->>'user_id'
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to get current user's business ID
CREATE OR REPLACE FUNCTION get_current_user_business_id()
RETURNS UUID AS $$
BEGIN
    RETURN (
        SELECT business_id 
        FROM users 
        WHERE clerk_user_id = get_current_clerk_user_id()
        LIMIT 1
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Helper function to check if current user has role in business
CREATE OR REPLACE FUNCTION current_user_has_role(required_roles user_role[])
RETURNS BOOLEAN AS $$
BEGIN
    RETURN EXISTS (
        SELECT 1 
        FROM users 
        WHERE clerk_user_id = get_current_clerk_user_id()
        AND role = ANY(required_roles)
        AND is_active = true
    );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Enable Row Level Security (RLS)
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE call_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE conversation_context ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE sms_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies for Clerk Authentication
-- These policies avoid the infinite recursion issues by using helper functions

-- Users table policies
CREATE POLICY "users_select_own_business" ON users
    FOR SELECT USING (
        business_id = get_current_user_business_id() OR
        clerk_user_id = get_current_clerk_user_id()
    );

CREATE POLICY "users_insert_own" ON users
    FOR INSERT WITH CHECK (clerk_user_id = get_current_clerk_user_id());

CREATE POLICY "users_update_own_or_admin" ON users
    FOR UPDATE USING (
        clerk_user_id = get_current_clerk_user_id() OR
        (business_id = get_current_user_business_id() AND current_user_has_role(ARRAY['owner'::user_role, 'admin'::user_role]))
    );

CREATE POLICY "users_delete_admin_only" ON users
    FOR DELETE USING (
        business_id = get_current_user_business_id() AND 
        current_user_has_role(ARRAY['owner'::user_role, 'admin'::user_role])
    );

-- Businesses table policies
CREATE POLICY "businesses_select_own" ON businesses
    FOR SELECT USING (id = get_current_user_business_id());

CREATE POLICY "businesses_insert_authenticated" ON businesses
    FOR INSERT WITH CHECK (get_current_clerk_user_id() IS NOT NULL);

CREATE POLICY "businesses_update_owner_admin" ON businesses
    FOR UPDATE USING (
        id = get_current_user_business_id() AND 
        current_user_has_role(ARRAY['owner'::user_role, 'admin'::user_role])
    );

CREATE POLICY "businesses_delete_owner_only" ON businesses
    FOR DELETE USING (
        id = get_current_user_business_id() AND 
        current_user_has_role(ARRAY['owner'::user_role])
    );

-- Services table policies
CREATE POLICY "services_business_access" ON services
    FOR ALL USING (business_id = get_current_user_business_id());

-- Staff members table policies
CREATE POLICY "staff_members_business_access" ON staff_members
    FOR ALL USING (business_id = get_current_user_business_id());

-- Customers table policies
CREATE POLICY "customers_business_access" ON customers
    FOR ALL USING (business_id = get_current_user_business_id());

-- Appointments table policies
CREATE POLICY "appointments_business_access" ON appointments
    FOR ALL USING (business_id = get_current_user_business_id());

-- Call logs table policies
CREATE POLICY "call_logs_business_access" ON call_logs
    FOR ALL USING (business_id = get_current_user_business_id());

-- Conversation context table policies
CREATE POLICY "conversation_context_business_access" ON conversation_context
    FOR ALL USING (business_id = get_current_user_business_id());

-- Business config table policies
CREATE POLICY "business_config_business_access" ON business_config
    FOR ALL USING (business_id = get_current_user_business_id());

-- SMS messages table policies
CREATE POLICY "sms_messages_business_access" ON sms_messages
    FOR ALL USING (business_id = get_current_user_business_id());

-- Create a function to get business by phone number (for Twilio webhooks)
-- This function bypasses RLS for system operations
CREATE OR REPLACE FUNCTION get_business_by_phone(phone_number TEXT)
RETURNS TABLE(business_id UUID, business_name TEXT, business_slug TEXT) AS $$
BEGIN
    RETURN QUERY
    SELECT b.id, b.name, b.slug
    FROM businesses b
    WHERE b.phone_number = phone_number AND b.status = 'active';
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create a function to log incoming calls
-- This function bypasses RLS for system operations
CREATE OR REPLACE FUNCTION log_incoming_call(
    p_business_phone TEXT,
    p_caller_phone TEXT,
    p_twilio_call_sid TEXT
)
RETURNS UUID AS $$
DECLARE
    v_business_id UUID;
    v_customer_id UUID;
    v_call_log_id UUID;
BEGIN
    -- Get business ID
    SELECT id INTO v_business_id FROM businesses WHERE phone_number = p_business_phone;
    
    IF v_business_id IS NULL THEN
        RAISE EXCEPTION 'Business not found for phone number: %', p_business_phone;
    END IF;
    
    -- Get or create customer
    SELECT id INTO v_customer_id FROM customers 
    WHERE business_id = v_business_id AND phone = p_caller_phone;
    
    IF v_customer_id IS NULL THEN
        INSERT INTO customers (business_id, phone) 
        VALUES (v_business_id, p_caller_phone)
        RETURNING id INTO v_customer_id;
    END IF;
    
    -- Create call log
    INSERT INTO call_logs (business_id, customer_id, twilio_call_sid, caller_phone, business_phone)
    VALUES (v_business_id, v_customer_id, p_twilio_call_sid, p_caller_phone, p_business_phone)
    RETURNING id INTO v_call_log_id;
    
    RETURN v_call_log_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to create a new business with owner user
CREATE OR REPLACE FUNCTION create_business_with_owner(
    p_clerk_user_id TEXT,
    p_email TEXT,
    p_first_name TEXT,
    p_last_name TEXT,
    p_business_name TEXT,
    p_business_slug TEXT,
    p_phone_number TEXT
)
RETURNS UUID AS $$
DECLARE
    v_business_id UUID;
    v_user_id UUID;
BEGIN
    -- Create business
    INSERT INTO businesses (name, slug, phone_number, email)
    VALUES (p_business_name, p_business_slug, p_phone_number, p_email)
    RETURNING id INTO v_business_id;
    
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

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;

-- Insert sample data (optional)
INSERT INTO businesses (name, slug, phone_number, email, address, timezone) VALUES
('Demo Barbershop', 'demo-barbershop', '+441234567890', 'demo@barbershop.com', '123 High Street, London', 'Europe/London'),
('City Salon', 'city-salon', '+441234567891', 'info@citysalon.com', '456 Main Road, Manchester', 'Europe/London');

INSERT INTO services (business_id, name, description, duration_minutes, price, currency) VALUES
((SELECT id FROM businesses WHERE slug = 'demo-barbershop'), 'Haircut', 'Professional haircut and styling', 30, 25.00, 'GBP'),
((SELECT id FROM businesses WHERE slug = 'demo-barbershop'), 'Beard Trim', 'Beard trimming and shaping', 15, 15.00, 'GBP'),
((SELECT id FROM businesses WHERE slug = 'city-salon'), 'Cut & Blow Dry', 'Hair cut with blow dry styling', 60, 45.00, 'GBP');

-- Comments for documentation
COMMENT ON TABLE businesses IS 'Multi-tenant businesses using the voice booking platform';
COMMENT ON TABLE users IS 'Users associated with businesses (owners, staff, customers) - uses Clerk authentication';
COMMENT ON TABLE services IS 'Services offered by each business';
COMMENT ON TABLE staff_members IS 'Staff members who can provide services';
COMMENT ON TABLE customers IS 'Customers who book appointments';
COMMENT ON TABLE appointments IS 'Scheduled appointments';
COMMENT ON TABLE call_logs IS 'Log of all voice calls handled by the AI';
COMMENT ON TABLE conversation_context IS 'AI conversation state and context';
COMMENT ON TABLE business_config IS 'Business-specific AI and system configuration';
COMMENT ON TABLE sms_messages IS 'SMS confirmations and notifications';
COMMENT ON FUNCTION get_current_clerk_user_id() IS 'Helper function to extract Clerk user ID from JWT token';
COMMENT ON FUNCTION get_current_user_business_id() IS 'Helper function to get current user business ID';
COMMENT ON FUNCTION current_user_has_role(user_role[]) IS 'Helper function to check user roles';
COMMENT ON FUNCTION create_business_with_owner(TEXT, TEXT, TEXT, TEXT, TEXT, TEXT, TEXT) IS 'Function to create business with owner user for onboarding';