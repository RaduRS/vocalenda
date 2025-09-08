import { useQuery } from '@tanstack/react-query';

export interface Business {
  id: string;
  name: string;
  slug: string;
  phone_number: string;
  email: string;
  address: string;
  status: string;
  google_calendar_connected?: boolean;
}

export interface DashboardStats {
  totalAppointments: number;
  todayAppointments: number;
  totalCustomers: number;
  totalCalls: number;
}

export interface DashboardData {
  business: Business | null;
  stats: DashboardStats;
}

const fetchDashboardData = async (): Promise<DashboardData> => {
  const response = await fetch('/api/dashboard', {
    headers: {
      'Cache-Control': 'max-age=30, stale-while-revalidate=60',
    },
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch dashboard data');
  }
  
  const data = await response.json();
  return {
    business: data.business,
    stats: data.stats || {
      totalAppointments: 0,
      todayAppointments: 0,
      totalCustomers: 0,
      totalCalls: 0,
    }
  };
};

export const useDashboard = () => {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: fetchDashboardData,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};