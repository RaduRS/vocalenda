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
            staleTime: 5 * 60 * 1000, // 5 minutes - reduced for fresher data
            gcTime: 15 * 60 * 1000, // 15 minutes - reduced cache time
            retry: (failureCount, error: unknown) => {
              // Don't retry on 4xx errors
              const errorWithStatus = error as { status?: number };
              if (errorWithStatus?.status && errorWithStatus.status >= 400 && errorWithStatus.status < 500) {
                return false;
              }
              return failureCount < 2; // Reduce retry attempts for faster failure
            },
            refetchOnWindowFocus: true, // Enable for OAuth returns
            refetchOnReconnect: false, // Prevent unnecessary refetches
            refetchOnMount: true, // Always fetch fresh data on mount for better UX
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