'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';
import { ComprehensiveBusinessData, UpdateBusinessPayload } from '@/lib/types';

export function useBusinessSettings() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  const businessQuery = useQuery({
    queryKey: ['user', user?.id, 'business-comprehensive'],
    queryFn: async (): Promise<ComprehensiveBusinessData> => {
      const response = await fetch('/api/business/comprehensive');
      if (!response.ok) throw new Error('Failed to fetch business data');
      return response.json();
    },
    enabled: !!user?.id,
    staleTime: 5 * 60 * 1000, // 5 minutes - business settings change less frequently
    gcTime: 10 * 60 * 1000, // 10 minutes
  });

  const updateBusinessMutation = useMutation({
    mutationFn: async (updatedData: UpdateBusinessPayload) => {
      const response = await fetch('/api/business/comprehensive', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      });
      if (!response.ok) throw new Error('Failed to update business data');
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch business data
      queryClient.invalidateQueries({
        queryKey: ['user', user?.id, 'business-comprehensive']
      });
    },
  });

  return {
    businessData: businessQuery.data,
    isLoading: businessQuery.isLoading,
    isError: businessQuery.isError,
    error: businessQuery.error,
    updateBusiness: updateBusinessMutation.mutate,
    isUpdating: updateBusinessMutation.isPending,
    updateError: updateBusinessMutation.error,
    refetch: businessQuery.refetch,
  };
}