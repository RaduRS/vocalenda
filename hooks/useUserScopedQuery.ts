import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';

/**
 * Custom hook that provides user-scoped caching for React Query
 * This ensures data is cached per user and prevents cross-user data leaks
 */
export function useUserScopedQuery<TData = unknown, TError = Error>(
  baseQueryKey: (string | number)[],
  queryFn: () => Promise<TData>,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
) {
  const { user } = useUser();
  
  // Include user ID in query key to scope cache per user
  const userScopedQueryKey = user?.id 
    ? ['user', user.id, ...baseQueryKey]
    : ['anonymous', ...baseQueryKey];

  return useQuery({
    queryKey: userScopedQueryKey,
    queryFn,
    // Enable caching but scope it to the user
    staleTime: 2 * 60 * 1000, // 2 minutes - good balance between performance and freshness
    gcTime: 10 * 60 * 1000, // 10 minutes - keep in cache for reasonable time
    // Only run query if user is loaded
    enabled: !!user,
    ...options,
  });
}

/**
 * Hook for dashboard data with user-scoped caching
 */
export function useUserScopedDashboard(weekOffset: number = 0) {
  const { user } = useUser();
  
  const fetchDashboardData = async () => {
    const url = weekOffset !== 0 ? `/api/dashboard?weekOffset=${weekOffset}` : '/api/dashboard';
    const response = await fetch(url, {
      headers: {
        'Cache-Control': 'max-age=60, stale-while-revalidate=120', // Allow some browser caching
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch dashboard data');
    }
    
    return response.json();
  };

  return useUserScopedQuery(
    ['dashboard', weekOffset],
    fetchDashboardData,
    {
      staleTime: 1 * 60 * 1000, // 1 minute for dashboard (more frequent updates)
      gcTime: 5 * 60 * 1000, // 5 minutes cache time
    }
  );
}

/**
 * Hook for appointments data with user-scoped caching
 */
export function useUserScopedAppointments() {
  const fetchAppointments = async () => {
    const response = await fetch('/api/appointments', {
      headers: {
        'Cache-Control': 'max-age=120, stale-while-revalidate=240', // 2 min cache, 4 min stale
      },
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch appointments: ${response.status} ${response.statusText}`);
    }
    
    return response.json();
  };

  return useUserScopedQuery(
    ['appointments'],
    fetchAppointments,
    {
      staleTime: 3 * 60 * 1000, // 3 minutes
      gcTime: 15 * 60 * 1000, // 15 minutes
    }
  );
}

/**
 * Hook for customers data with user-scoped caching
 */
export function useUserScopedCustomers() {
  const fetchCustomers = async () => {
    const response = await fetch('/api/customers', {
      headers: {
        'Cache-Control': 'max-age=300, stale-while-revalidate=600', // 5 min cache, 10 min stale
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch customers');
    }
    
    return response.json();
  };

  return useUserScopedQuery(
    ['customers'],
    fetchCustomers,
    {
      staleTime: 10 * 60 * 1000, // 10 minutes - customers change less frequently
      gcTime: 30 * 60 * 1000, // 30 minutes
    }
  );
}

/**
 * Hook for call logs data with user-scoped caching
 */
export function useUserScopedCallLogs(page: number = 1, limit: number = 10) {
  const fetchCallLogs = async () => {
    const response = await fetch(`/api/call-logs?page=${page}&limit=${limit}`, {
      headers: {
        'Cache-Control': 'max-age=180, stale-while-revalidate=360', // 3 min cache, 6 min stale
      },
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch call logs');
    }
    
    const data = await response.json();
    return {
      callLogs: data.callLogs || [],
      totalCount: data.totalCount || 0,
      currentPage: data.currentPage || 1,
      totalPages: data.totalPages || 0,
      hasNextPage: data.hasNextPage || false,
      hasPreviousPage: data.hasPreviousPage || false
    };
  };

  return useUserScopedQuery(
    ['call-logs', page, limit],
    fetchCallLogs,
    {
      staleTime: 2 * 60 * 1000, // 2 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    }
  );
}