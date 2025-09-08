# Database Optimization Guide

## Recommended Supabase Indexes

To improve query performance for the appointments system, add these indexes in your Supabase dashboard:

### 1. Appointments Table Indexes

```sql
-- Composite index for business_id + appointment_date (most common query pattern)
CREATE INDEX idx_appointments_business_date ON appointments (business_id, appointment_date);

-- Index for business_id + status (for filtering by status)
CREATE INDEX idx_appointments_business_status ON appointments (business_id, status);

-- Composite index for business_id + appointment_date + status (optimal for stats queries)
CREATE INDEX idx_appointments_business_date_status ON appointments (business_id, appointment_date, status);
```

### 2. Customers Table Indexes

```sql
-- Index for business_id (for customer count queries)
CREATE INDEX idx_customers_business_id ON customers (business_id);
```

### 3. Services Table Indexes

```sql
-- Index for business_id (for service lookups in appointments)
CREATE INDEX idx_services_business_id ON services (business_id);
```

## Query Optimization Benefits

- **Before**: 4 separate database queries (appointments + 3 stats queries)
- **After**: 2 database queries (appointments + customers count)
- **Performance Improvement**: ~50% reduction in database round trips

## How to Add Indexes in Supabase

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Run each CREATE INDEX statement above
4. Monitor query performance in the Database > Logs section

## Additional Recommendations

- Consider adding pagination for large appointment datasets
- Implement proper error boundaries for better UX
- Use React Query's background refetch for real-time updates
- Add database connection pooling if experiencing high load