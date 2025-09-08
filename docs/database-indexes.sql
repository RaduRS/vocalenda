-- Database Optimization Indexes for Vocalenda
-- Run these queries in your Supabase SQL Editor to improve performance

-- ============================================
-- APPOINTMENTS TABLE INDEXES
-- ============================================

-- Index for filtering appointments by business_id (most common query)
CREATE INDEX IF NOT EXISTS idx_appointments_business_id 
ON appointments (business_id);

-- Index for filtering by appointment date and time
CREATE INDEX IF NOT EXISTS idx_appointments_datetime 
ON appointments (appointment_date, start_time);

-- Index for filtering by status
CREATE INDEX IF NOT EXISTS idx_appointments_status 
ON appointments (status);

-- Composite index for business appointments by date (dashboard queries)
CREATE INDEX IF NOT EXISTS idx_appointments_business_date 
ON appointments (business_id, appointment_date);

-- Index for customer appointments lookup
CREATE INDEX IF NOT EXISTS idx_appointments_customer_id 
ON appointments (customer_id);



-- ============================================
-- SERVICES TABLE INDEXES
-- ============================================

-- Index for filtering services by business_id
CREATE INDEX IF NOT EXISTS idx_services_business_id 
ON services (business_id);

-- Index for active services
CREATE INDEX IF NOT EXISTS idx_services_active 
ON services (is_active) WHERE is_active = true;

-- Index for service duration lookups
CREATE INDEX IF NOT EXISTS idx_services_duration 
ON services (duration_minutes);

-- ============================================
-- CUSTOMERS TABLE INDEXES
-- ============================================

-- Index for filtering customers by business_id
CREATE INDEX IF NOT EXISTS idx_customers_business_id 
ON customers (business_id);

-- Index for phone number lookups
CREATE INDEX IF NOT EXISTS idx_customers_phone 
ON customers (phone);

-- Index for email lookups
CREATE INDEX IF NOT EXISTS idx_customers_email 
ON customers (email);

-- ============================================
-- CONVERSATION CONTEXT TABLE INDEXES
-- ============================================

-- Index for filtering by business_id
CREATE INDEX IF NOT EXISTS idx_conversation_context_business_id 
ON conversation_context (business_id);

-- Index for call log lookups
CREATE INDEX IF NOT EXISTS idx_conversation_context_call_log 
ON conversation_context (call_log_id);

-- Index for recent conversations
CREATE INDEX IF NOT EXISTS idx_conversation_context_updated 
ON conversation_context (updated_at DESC);

-- ============================================
-- SMS MESSAGES TABLE INDEXES
-- ============================================

-- Index for filtering by business_id
CREATE INDEX IF NOT EXISTS idx_sms_messages_business_id 
ON sms_messages (business_id);

-- Index for phone from lookups
CREATE INDEX IF NOT EXISTS idx_sms_messages_phone_from 
ON sms_messages (phone_from);

-- Index for phone to lookups
CREATE INDEX IF NOT EXISTS idx_sms_messages_phone_to 
ON sms_messages (phone_to);

-- Index for message type filtering
CREATE INDEX IF NOT EXISTS idx_sms_messages_type 
ON sms_messages (message_type);

-- Index for recent messages
CREATE INDEX IF NOT EXISTS idx_sms_messages_created 
ON sms_messages (created_at DESC);

-- ============================================
-- CALL LOGS TABLE INDEXES
-- ============================================

-- Index for filtering call logs by business_id
CREATE INDEX IF NOT EXISTS idx_call_logs_business_id 
ON call_logs (business_id);

-- Index for caller phone number lookups
CREATE INDEX IF NOT EXISTS idx_call_logs_caller_phone 
ON call_logs (caller_phone);

-- Index for call status filtering
CREATE INDEX IF NOT EXISTS idx_call_logs_status 
ON call_logs (status);

-- Index for call start time (for sorting and date filtering)
CREATE INDEX IF NOT EXISTS idx_call_logs_started_at 
ON call_logs (started_at);

-- Composite index for business call logs by date
CREATE INDEX IF NOT EXISTS idx_call_logs_business_date 
ON call_logs (business_id, started_at);

-- Index for Twilio call SID lookups
CREATE INDEX IF NOT EXISTS idx_call_logs_twilio_sid 
ON call_logs (twilio_call_sid);

-- ============================================
-- BUSINESS CONFIG TABLE INDEXES
-- ============================================

-- Index for business config by business_id (primary lookup)
CREATE INDEX IF NOT EXISTS idx_business_config_business_id 
ON business_config (business_id);

-- Index for AI response mode filtering
CREATE INDEX IF NOT EXISTS idx_business_config_ai_mode 
ON business_config (ai_response_mode);

-- ============================================
-- USERS/BUSINESS TABLE INDEXES
-- ============================================

-- Index for business name searches
CREATE INDEX IF NOT EXISTS idx_businesses_name 
ON businesses (name);

-- Index for business slug lookups
CREATE INDEX IF NOT EXISTS idx_businesses_slug 
ON businesses (slug);

-- Index for active businesses
CREATE INDEX IF NOT EXISTS idx_businesses_status 
ON businesses (status) WHERE status = 'active';

-- Index for phone number lookups (already exists in schema but adding for completeness)
CREATE INDEX IF NOT EXISTS idx_businesses_phone 
ON businesses (phone_number);

-- ============================================
-- USERS TABLE INDEXES
-- ============================================

-- Index for Clerk user ID lookups
CREATE INDEX IF NOT EXISTS idx_users_clerk_id 
ON users (clerk_user_id);

-- Index for business users
CREATE INDEX IF NOT EXISTS idx_users_business_id 
ON users (business_id);

-- Index for email lookups
CREATE INDEX IF NOT EXISTS idx_users_email 
ON users (email);

-- ============================================
-- STAFF MEMBERS TABLE INDEXES
-- ============================================

-- Index for filtering staff by business_id
CREATE INDEX IF NOT EXISTS idx_staff_members_business_id 
ON staff_members (business_id);

-- Index for active staff members
CREATE INDEX IF NOT EXISTS idx_staff_members_active 
ON staff_members (is_active) WHERE is_active = true;

-- Index for staff user lookups
CREATE INDEX IF NOT EXISTS idx_staff_members_user_id 
ON staff_members (user_id);

-- ============================================
-- PERFORMANCE MONITORING QUERIES
-- ============================================

-- Query to check index usage (run after creating indexes)
SELECT 
    schemaname,
    relname as tablename,
    indexrelname as indexname,
    idx_scan as index_scans,
    idx_tup_read as tuples_read,
    idx_tup_fetch as tuples_fetched
FROM pg_stat_user_indexes 
WHERE schemaname = 'public'
ORDER BY idx_scan DESC;

-- Query to identify slow queries (for monitoring)
SELECT 
    query,
    calls,
    total_exec_time,
    mean_exec_time,
    rows
FROM pg_stat_statements 
WHERE query LIKE '%appointments%' 
   OR query LIKE '%customers%' 
   OR query LIKE '%call_logs%'
ORDER BY mean_exec_time DESC
LIMIT 10;

-- ============================================
-- MAINTENANCE COMMANDS
-- ============================================

-- Analyze tables to update statistics (run periodically)
ANALYZE appointments;
ANALYZE customers;
ANALYZE services;
ANALYZE call_logs;
ANALYZE business_config;
ANALYZE businesses;
ANALYZE users;
ANALYZE staff_members;
ANALYZE conversation_context;
ANALYZE sms_messages;

-- Vacuum tables to reclaim space (run periodically)
-- Note: Supabase handles this automatically, but you can run manually if needed
-- VACUUM ANALYZE appointments;
-- VACUUM ANALYZE customers;
-- VACUUM ANALYZE services;
-- VACUUM ANALYZE call_logs;
-- VACUUM ANALYZE business_config;
-- VACUUM ANALYZE businesses;
-- VACUUM ANALYZE users;
-- VACUUM ANALYZE staff_members;
-- VACUUM ANALYZE conversation_context;
-- VACUUM ANALYZE sms_messages;