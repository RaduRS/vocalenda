import { useUserScopedAppointments } from './useUserScopedQuery';

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

export const useAppointments = () => {
  return useUserScopedAppointments();
};

export type { Appointment, AppointmentStats, Customer, Service };