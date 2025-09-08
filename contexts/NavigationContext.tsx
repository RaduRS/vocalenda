'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  DashboardSkeleton,
  AppointmentsSkeleton,
  CustomersSkeleton,
  CallLogsSkeleton,
  BusinessSettingsSkeleton,
  IntegrationsSkeleton
} from '@/components/ui/skeleton-loading';

interface NavigationContextType {
  isNavigating: boolean;
  targetRoute: string | null;
  currentSkeleton: ReactNode | null;
  navigateWithSkeleton: (href: string) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false);
  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const [currentSkeleton, setCurrentSkeleton] = useState<ReactNode | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithSkeleton = (href: string) => {
    // Don't navigate if already on the target route
    if (pathname === href) {
      return;
    }

    // Set navigation state immediately for instant UI feedback
    setIsNavigating(true);
    setTargetRoute(href);
    setCurrentSkeleton(getSkeletonForRoute(href));
    
    // Navigate immediately
    router.push(href);
    
    // Reset navigation state after a longer delay to allow skeleton to show
    // This gives time for the skeleton to be visible and new page to load
    setTimeout(() => {
      setIsNavigating(false);
      setTargetRoute(null);
      setCurrentSkeleton(null);
    }, 1500);
  };

  return (
    <NavigationContext.Provider value={{
      isNavigating,
      targetRoute,
      currentSkeleton,
      navigateWithSkeleton
    }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}

// Helper function to determine which skeleton to show based on route
export function getSkeletonForRoute(route: string): ReactNode {
  if (route === '/dashboard') return <DashboardSkeleton />;
  if (route === '/dashboard/appointments') return <AppointmentsSkeleton />;
  if (route === '/dashboard/customers') return <CustomersSkeleton />;
  if (route === '/dashboard/call-logs') return <CallLogsSkeleton />;
  if (route === '/dashboard/business-settings') return <BusinessSettingsSkeleton />;
  if (route === '/dashboard/integrations') return <IntegrationsSkeleton />;
  return <DashboardSkeleton />; // default
}