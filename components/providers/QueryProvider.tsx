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
            staleTime: 2 * 60 * 1000, // 2 minutes - balanced for performance and freshness
            gcTime: 10 * 60 * 1000, // 10 minutes - reasonable cache time
            retry: (failureCount, error: unknown) => {
              // Don't retry on 4xx errors
              const errorWithStatus = error as { status?: number };
              if (errorWithStatus?.status && errorWithStatus.status >= 400 && errorWithStatus.status < 500) {
                return false;
              }
              return failureCount < 2; // Reduce retry attempts for faster failure
            },
            refetchOnWindowFocus: false, // Disable to prevent unnecessary refetches
            refetchOnReconnect: false, // Prevent unnecessary refetches
            refetchOnMount: false, // Use cached data when available for better performance
            // Enable background refetching for better UX
            refetchInterval: false, // Disable automatic refetching
            refetchIntervalInBackground: false,
            // Network mode optimizations
            networkMode: 'online', // Only run queries when online
          },
          mutations: {
            retry: 1, // Limit mutation retries
            // Network mode for mutations
            networkMode: 'online',
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