import { useQuery } from '@tanstack/react-query';

export interface Customer {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string | null;
  notes: string | null;
  created_at: string;
  updated_at: string;
  appointment_count?: number;
}

export interface CustomerStats {
  totalCustomers: number;
  phoneContacts: number;
  emailContacts: number;
  localCustomers: number;
}

export interface CustomersData {
  customers: Customer[];
  stats: CustomerStats;
}

const fetchCustomers = async (): Promise<CustomersData> => {
  const response = await fetch('/api/customers');
  
  if (!response.ok) {
    throw new Error('Failed to fetch customers');
  }
  
  const data = await response.json();
  return {
    customers: data.customers || [],
    stats: data.stats || {
      totalCustomers: 0,
      phoneContacts: 0,
      emailContacts: 0,
      localCustomers: 0
    }
  };
};

export const useCustomers = () => {
  return useQuery({
    queryKey: ['customers'],
    queryFn: fetchCustomers,
    staleTime: 30 * 1000, // 30 seconds
    gcTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};