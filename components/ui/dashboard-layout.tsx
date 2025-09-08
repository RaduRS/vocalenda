'use client';

import { usePathname } from 'next/navigation';
import Sidebar from './sidebar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const pathname = usePathname();
  
  // Only show dashboard layout for dashboard routes
  const isDashboardRoute = pathname?.startsWith('/dashboard');
  
  if (!isDashboardRoute) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar className="fixed left-0 top-0 z-40" />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Content */}
        <main className={cn(
          "flex-1 overflow-auto",
          className
        )}>
          {children}
        </main>
      </div>
    </div>
  );
}