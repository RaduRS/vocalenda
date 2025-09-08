"use client";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10 * 60 * 1000, // 10 minutes - increased for better performance
            gcTime: 30 * 60 * 1000, // 30 minutes - keep data in cache longer
            retry: (failureCount, error: unknown) => {
              // Don't retry on 4xx errors
              const errorWithStatus = error as { status?: number };
              if (errorWithStatus?.status && errorWithStatus.status >= 400 && errorWithStatus.status < 500) {
                return false;
              }
              return failureCount < 2; // Reduce retry attempts for faster failure
            },
            refetchOnWindowFocus: false,
            refetchOnReconnect: false, // Prevent unnecessary refetches
            refetchOnMount: false, // Use cached data when available
          },
          mutations: {
            retry: 1, // Limit mutation retries
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}