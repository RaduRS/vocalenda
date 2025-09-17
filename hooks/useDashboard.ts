import { useUserScopedDashboard } from './useUserScopedQuery';

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
  minutesAllowed: number;
  minutesUsed: number;
  minutesLeft: number;
  appointmentStatusCounts?: {
    confirmed: number;
    pending: number;
    completed: number;
    cancelled: number;
    no_show: number;
  };
  weeklyActivity?: Array<{
    date: string;
    appointments: number;
    calls: number;
  }>;
}

export interface RecentCall {
  id: string;
  customer_name?: string | null;
  caller_phone: string;
  business_phone?: string;
  status: 'incoming' | 'in_progress' | 'completed' | 'failed';
  duration_seconds?: number | null;
  duration?: number | null;
  intent_detected?: string;
  started_at?: string;
  ended_at?: string;
  created_at?: string;
  twilio_call_sid?: string;
}

export interface DashboardData {
  business: Business | null;
  stats: DashboardStats;
  recentCalls?: RecentCall[];
}

export const useDashboard = (weekOffset: number = 0) => {
  return useUserScopedDashboard(weekOffset);
};