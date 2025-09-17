'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback, useMemo } from 'react';
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

  // Reset navigation state when pathname actually changes
  useEffect(() => {
    if (isNavigating && targetRoute && pathname === targetRoute) {
      // Route change completed, reset navigation state immediately
      setIsNavigating(false);
      setTargetRoute(null);
      setCurrentSkeleton(null);
    }
  }, [pathname, isNavigating, targetRoute]);

  // Clear any existing timeout when navigation state changes
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    if (isNavigating) {
      // Reduced timeout for faster navigation feedback
      timeoutId = setTimeout(() => {
        if (isNavigating) {
          setIsNavigating(false);
          setTargetRoute(null);
          setCurrentSkeleton(null);
        }
      }, 500); // Reduced from 1000ms to 500ms
    }
    
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isNavigating]);

  const navigateWithSkeleton = useCallback((href: string) => {
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
  }, [pathname, router]);

  const contextValue = useMemo(() => ({
    isNavigating,
    targetRoute,
    currentSkeleton,
    navigateWithSkeleton
  }), [isNavigating, targetRoute, currentSkeleton, navigateWithSkeleton]);

  return (
    <NavigationContext.Provider value={contextValue}>
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