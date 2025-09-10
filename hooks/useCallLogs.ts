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
  currentPage: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

const fetchCallLogs = async (page: number = 1, limit: number = 10): Promise<CallLogsData> => {
  const response = await fetch(`/api/call-logs?page=${page}&limit=${limit}`);
  
  if (!response.ok) {
    throw new Error('Failed to fetch call logs');
  }
  
  const data = await response.json();
  return {
    callLogs: data.callLogs || [],
    totalCount: data.totalCount || 0,
    currentPage: data.currentPage || 1,
    totalPages: data.totalPages || 0,
    hasNextPage: data.hasNextPage || false,
    hasPreviousPage: data.hasPreviousPage || false
  };
};

export const useCallLogs = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryKey: ['call-logs', page, limit],
    queryFn: () => fetchCallLogs(page, limit),
    staleTime: 2 * 60 * 1000, // 2 minutes - call logs update less frequently than real-time data
    // Use global defaults for better performance and consistency
  });
};