import { useQuery } from '@tanstack/react-query';

interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
}

interface Service {
  id: string;
  name: string;
  duration: number;
  price: number;
  currency: string;
}

interface Appointment {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  status: string;
  notes?: string;
  createdAt: string;
  customer: Customer | null;
  service: Service | null;
}

interface AppointmentStats {
  todayAppointments: number;
  thisWeekAppointments: number;
  totalCustomers: number;
}

interface AppointmentsResponse {
  appointments: Appointment[];
  stats: AppointmentStats;
}

const fetchAppointments = async (): Promise<AppointmentsResponse> => {
  const response = await fetch('/api/appointments');
  
  if (!response.ok) {
    throw new Error(`Failed to fetch appointments: ${response.status} ${response.statusText}`);
  }
  
  return response.json();
};

export const useAppointments = () => {
  return useQuery({
    queryKey: ['appointments'],
    queryFn: fetchAppointments,
    staleTime: 2 * 60 * 1000, // 2 minutes - appointments change frequently
    gcTime: 5 * 60 * 1000, // 5 minutes cache time
    refetchOnWindowFocus: true, // Refetch when user returns to tab
    retry: (failureCount, error) => {
      // Don't retry on 4xx errors (client errors)
      const errorWithStatus = error as { message?: string };
      if (errorWithStatus?.message?.includes('4')) {
        return false;
      }
      return failureCount < 2; // Retry up to 2 times for other errors
    },
  });
};

export type { Appointment, AppointmentStats, Customer, Service };