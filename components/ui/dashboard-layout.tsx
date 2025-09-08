'use client';

import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Sidebar from './sidebar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Only show dashboard layout for dashboard routes
  const isDashboardRoute = pathname?.startsWith('/dashboard');
  
  if (!isDashboardRoute) {
    return <>{children}</>;
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar 
        className="fixed left-0 top-0 z-40" 
        isMobileOpen={isMobileMenuOpen}
        onMobileToggle={toggleMobileMenu}
      />
      
      {/* Main Content Area */}
      <div className="flex-1 md:ml-64">
        {/* Mobile Header */}
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="p-2"
          >
            <Menu className="w-6 h-6" />
          </Button>
          <h1 className="text-lg font-semibold text-brand-primary-1">Vocalenda</h1>
          <div className="w-10" /> {/* Spacer for centering */}
        </div>
        
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