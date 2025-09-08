'use client';

import { usePathname, useRouter } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Calendar, 
  Users, 
  Phone, 
  Settings,
  Puzzle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  className?: string;
}

interface SidebarButtonProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
}

function SidebarButton({ href, icon: Icon, label, isActive }: SidebarButtonProps) {
  const router = useRouter();
  
  const handleClick = () => {
    router.push(href);
  };
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        variant={isActive ? "default" : "ghost"}
        className={cn(
          "w-full justify-start h-12 px-4 text-left transition-all duration-200",
          isActive 
            ? "bg-brand-primary-1 text-white shadow-md" 
            : "text-gray-700 hover:bg-gray-100 hover:text-brand-primary-1"
        )}
        onClick={handleClick}
      >
        <Icon className={cn(
          "mr-3 h-5 w-5",
          isActive ? "text-white" : "text-gray-500"
        )} />
        <span className="font-medium text-sm">{label}</span>
      </Button>
    </motion.div>
  );
}

const navigationItems = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    description: '📊 Overview'
  },
  {
    name: 'Appointments',
    href: '/dashboard/appointments',
    icon: Calendar,
    description: 'View All Appointments'
  },
  {
    name: 'Customers',
    href: '/dashboard/customers',
    icon: Users,
    description: 'Customer Directory'
  },
  {
    name: 'Call History',
    href: '/dashboard/call-logs',
    icon: Phone,
    description: 'AI Call History'
  },
  {
    name: 'Settings',
    href: '/dashboard/business-settings',
    icon: Settings,
    description: 'Business Settings'
  },
  {
    name: 'Integrations',
    href: '/dashboard/integrations',
    icon: Puzzle,
    description: 'Manage Integrations'
  }
];

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
  };

  return (
    <div className={cn(
      "flex flex-col h-full bg-white border-r border-gray-200 w-64",
      className
    )}>
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-brand-primary-1 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">V</span>
          </div>
          <span className="text-xl font-bold text-brand-primary-1">Vocalenda</span>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="flex-1 px-4 py-6">
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
            📊 Manage Your Business
          </h3>
          
          <SidebarButton
            href="/dashboard"
            icon={LayoutDashboard}
            label="Dashboard"
            isActive={pathname === '/dashboard'}
          />
          
          <SidebarButton
            href="/dashboard/appointments"
            icon={Calendar}
            label="Appointments"
            isActive={pathname === '/dashboard/appointments'}
          />
          
          <SidebarButton
            href="/dashboard/customers"
            icon={Users}
            label="Customers"
            isActive={pathname === '/dashboard/customers'}
          />
          
          <SidebarButton
            href="/dashboard/call-history"
            icon={Phone}
            label="Call History"
            isActive={pathname === '/dashboard/call-history'}
          />
          
          <SidebarButton
            href="/dashboard/integrations"
            icon={Puzzle}
            label="Integrations"
            isActive={pathname === '/dashboard/integrations'}
          />
          
          <SidebarButton
            href="/dashboard/settings"
            icon={Settings}
            label="Settings"
            isActive={pathname === '/dashboard/settings'}
          />
        </div>
      </nav>

      {/* User Profile Section */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'w-10 h-10',
                userButtonPopoverCard:
                  'shadow-lg border border-slate-200',
                userButtonPopoverActionButton:
                  'hover:bg-slate-50',
              },
            }}
          />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              Profile
            </p>
            <p className="text-xs text-gray-500">
              Account settings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}