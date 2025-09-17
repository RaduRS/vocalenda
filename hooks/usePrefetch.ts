import { useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';

export function usePrefetch() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const prefetchRoute = (href: string) => {
    if (!user?.id) return;

    // Prefetch with proper queryFn functions for instant loading
    switch (href) {
      case '/dashboard':
        queryClient.prefetchQuery({
          queryKey: ['user', user.id, 'dashboard', 0],
          queryFn: async () => {
            const response = await fetch('/api/dashboard', {
              headers: {
                'Cache-Control': 'max-age=60, stale-while-revalidate=120',
              },
            });
            if (!response.ok) throw new Error('Failed to fetch dashboard data');
            return response.json();
          },
          staleTime: 1 * 60 * 1000, // 1 minute
        });
        break;
      case '/dashboard/appointments':
        queryClient.prefetchQuery({
          queryKey: ['user', user.id, 'appointments'],
          queryFn: async () => {
            const response = await fetch('/api/appointments', {
              headers: {
                'Cache-Control': 'max-age=120, stale-while-revalidate=240',
              },
            });
            if (!response.ok) throw new Error('Failed to fetch appointments');
            return response.json();
          },
          staleTime: 3 * 60 * 1000, // 3 minutes
        });
        break;
      case '/dashboard/customers':
        queryClient.prefetchQuery({
          queryKey: ['user', user.id, 'customers'],
          queryFn: async () => {
            const response = await fetch('/api/customers', {
              headers: {
                'Cache-Control': 'max-age=300, stale-while-revalidate=600',
              },
            });
            if (!response.ok) throw new Error('Failed to fetch customers');
            return response.json();
          },
          staleTime: 10 * 60 * 1000, // 10 minutes
        });
        break;
      case '/dashboard/call-logs':
        queryClient.prefetchQuery({
          queryKey: ['user', user.id, 'call-logs', 1, 10],
          queryFn: async () => {
            const response = await fetch('/api/call-logs?page=1&limit=10', {
              headers: {
                'Cache-Control': 'max-age=180, stale-while-revalidate=360',
              },
            });
            if (!response.ok) throw new Error('Failed to fetch call logs');
            const data = await response.json();
            return {
              callLogs: data.callLogs || [],
              totalCount: data.totalCount || 0,
              currentPage: data.currentPage || 1,
              totalPages: data.totalPages || 0,
              hasNextPage: data.hasNextPage || false,
              hasPreviousPage: data.hasPreviousPage || false
            };
          },
          staleTime: 2 * 60 * 1000, // 2 minutes
        });
        break;
      case '/dashboard/integrations':
        // Prefetch both dashboard data and Google integration status
        queryClient.prefetchQuery({
          queryKey: ['user', user.id, 'integrations-dashboard'],
          queryFn: async () => {
            const response = await fetch('/api/dashboard', {
              headers: {
                'Cache-Control': 'max-age=30, stale-while-revalidate=60',
              },
            });
            if (!response.ok) throw new Error('Failed to fetch dashboard data');
            return response.json();
          },
          staleTime: 30 * 1000, // 30 seconds
        });
        queryClient.prefetchQuery({
          queryKey: ['user', user.id, 'google-integration-status'],
          queryFn: async () => {
            const response = await fetch('/api/integrations/google/status');
            if (!response.ok) throw new Error('Failed to fetch Google integration status');
            return response.json();
          },
          staleTime: 60 * 1000, // 1 minute
        });
        break;
      case '/dashboard/business-settings':
        queryClient.prefetchQuery({
          queryKey: ['user', user.id, 'business-comprehensive'],
          queryFn: async () => {
            const response = await fetch('/api/business/comprehensive');
            if (!response.ok) throw new Error('Failed to fetch business data');
            return response.json();
          },
          staleTime: 5 * 60 * 1000, // 5 minutes - business settings change less frequently
        });
        break;
    }
  };

  return { prefetchRoute };
}