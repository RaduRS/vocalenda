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
    staleTime: 5 * 60 * 1000, // 5 minutes - balance between freshness and performance
    // Use global defaults for gcTime, retry, and refetch settings for consistency
  });
};

export type { Appointment, AppointmentStats, Customer, Service };