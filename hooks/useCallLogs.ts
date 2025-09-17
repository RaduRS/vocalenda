import { useUserScopedCallLogs } from './useUserScopedQuery';

export interface CallLog {
  id: string;
  caller_phone: string;
  status: "incoming" | "in_progress" | "completed" | "failed";
  started_at: string;
  ended_at: string | null;
  duration: number | null;
  customer_name: string | null;
  twilio_call_sid: string | null;
  transcript: string | null;
}

export interface CallLogsData {
  callLogs: CallLog[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export const useCallLogs = (page: number = 1, limit: number = 10) => {
  return useUserScopedCallLogs(page, limit);
};