import { useQuery } from '@tanstack/react-query';

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
}

const fetchCallLogs = async (): Promise<CallLogsData> => {
  const response = await fetch('/api/call-logs');
  
  if (!response.ok) {
    throw new Error('Failed to fetch call logs');
  }
  
  const data = await response.json();
  return {
    callLogs: data.callLogs || [],
    totalCount: data.totalCount || 0
  };
};

export const useCallLogs = () => {
  return useQuery({
    queryKey: ['call-logs'],
    queryFn: fetchCallLogs,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};