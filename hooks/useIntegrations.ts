'use client';

import { useQuery } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';

interface Business {
  id: string;
  name: string;
  slug: string;
  phone_number: string;
  email: string;
  address: string;
  status: string;
  google_calendar_connected?: boolean;
  google_calendar_id?: string;
}

interface DashboardData {
  business: Business | null;
  stats: {
    totalAppointments: number;
    totalCustomers: number;
    totalCalls: number;
    todayAppointments: number;
    minutesAllowed: number;
    minutesUsed: number;
    minutesLeft: number;
  };
  recentCalls?: Array<{
    id: string;
    customer_name?: string;
    caller_phone: string;
    status: string;
    duration_seconds?: number;
    started_at?: string;
  }>;
}

interface GoogleIntegrationStatus {
  isConnected: boolean;
  email?: string;
  error?: string;
}

export function useIntegrations() {
  const { user } = useUser();

  const dashboardQuery = useQuery({
    queryKey: ['user', user?.id, 'integrations-dashboard'],
    queryFn: async (): Promise<DashboardData> => {
      const response = await fetch('/api/dashboard', {
        headers: {
          'Cache-Control': 'max-age=30, stale-while-revalidate=60',
        },
      });
      if (!response.ok) throw new Error('Failed to fetch dashboard data');
      return response.json();
    },
    enabled: !!user?.id,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
  });

  const googleStatusQuery = useQuery({
    queryKey: ['user', user?.id, 'google-integration-status'],
    queryFn: async (): Promise<GoogleIntegrationStatus> => {
      const response = await fetch('/api/integrations/google/status');
      if (!response.ok) throw new Error('Failed to fetch Google integration status');
      return response.json();
    },
    enabled: !!user?.id,
    staleTime: 60 * 1000, // 1 minute
    gcTime: 5 * 60 * 1000, // 5 minutes
  });

  return {
    dashboardData: dashboardQuery.data,
    googleStatus: googleStatusQuery.data,
    isLoading: dashboardQuery.isLoading || googleStatusQuery.isLoading,
    isError: dashboardQuery.isError || googleStatusQuery.isError,
    error: dashboardQuery.error || googleStatusQuery.error,
    refetch: () => {
      dashboardQuery.refetch();
      googleStatusQuery.refetch();
    }
  };
}