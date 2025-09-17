import { useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';

export function usePrefetch() {
  const queryClient = useQueryClient();
  const { user } = useUser();

  const prefetchRoute = (href: string) => {
    if (!user?.id) return;

    // Simple prefetching without complex configuration
    switch (href) {
      case '/dashboard':
        queryClient.prefetchQuery({
          queryKey: ['dashboard', user.id, 0],
          staleTime: 60 * 1000, // 1 minute
        });
        break;
      case '/dashboard/appointments':
        queryClient.prefetchQuery({
          queryKey: ['appointments', user.id],
          staleTime: 60 * 1000,
        });
        break;
      case '/dashboard/customers':
        queryClient.prefetchQuery({
          queryKey: ['customers', user.id],
          staleTime: 2 * 60 * 1000, // 2 minutes
        });
        break;
      case '/dashboard/call-logs':
        queryClient.prefetchQuery({
          queryKey: ['call-logs', user.id, 1, 10],
          staleTime: 60 * 1000,
        });
        break;
    }
  };

  return { prefetchRoute };
}