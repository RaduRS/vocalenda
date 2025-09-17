import { useUserScopedCustomers } from './useUserScopedQuery';

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string | null;
  notes: string | null;
  createdAt: string;
  updatedAt: string;
  appointmentCount?: number;
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

export const useCustomers = () => {
  return useUserScopedCustomers();
};