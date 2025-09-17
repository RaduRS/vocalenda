"use client";

import { usePathname } from "next/navigation";
import { UserButton, useUser } from "@clerk/nextjs";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback, memo } from "react";
import Image from "next/image";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Phone,
  Settings,
  Puzzle,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigation } from "@/contexts/NavigationContext";
import { usePrefetch } from "@/hooks/usePrefetch";

interface SidebarProps {
  className?: string;
  isMobileOpen?: boolean;
  onMobileToggle?: () => void;
}

interface Business {
  id: string;
  name: string;
  slug: string;
  phone_number: string;
  email: string;
  address: string;
  status: string;
}

interface SidebarButtonProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  isActive: boolean;
  onMobileClick?: () => void;
}

const SidebarButton = memo(function SidebarButton({
  href,
  icon: Icon,
  label,
  isActive,
  onMobileClick,
}: SidebarButtonProps) {
  const { navigateWithSkeleton } = useNavigation();
  const { prefetchRoute } = usePrefetch();
  
  const handleClick = useCallback(() => {
    // Use navigateWithSkeleton for instant skeleton loading
    navigateWithSkeleton(href);
    
    if (onMobileClick) {
      onMobileClick();
    }
  }, [navigateWithSkeleton, href, onMobileClick]);

  const handleMouseEnter = useCallback(() => {
    // Prefetch data on hover for instant loading
    if (!isActive) {
      prefetchRoute(href);
    }
  }, [isActive, prefetchRoute, href]);

  return (
    <Button
      variant={isActive ? "default" : "ghost"}
      className={cn(
        "w-full justify-start h-12 px-4 text-left transition-colors duration-150",
        isActive
          ? "bg-brand-primary-1 text-white shadow-md"
          : "text-gray-700 hover:bg-gray-100 hover:text-brand-primary-1"
      )}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
    >
      <Icon
        className={cn(
          "mr-3 h-5 w-5",
          isActive ? "text-white" : "text-gray-500"
        )}
      />
      <span className="font-medium text-sm">{label}</span>
    </Button>
  );
});



export default function Sidebar({
  className,
  isMobileOpen = false,
  onMobileToggle,
}: SidebarProps) {
  const pathname = usePathname();
  const { user } = useUser();
  const [business, setBusiness] = useState<Business | null>(null);

  useEffect(() => {
    const fetchBusinessData = async () => {
      try {
        const response = await fetch("/api/dashboard", {
          cache: 'no-store'
        });
        if (response.ok) {
          const data = await response.json();
          setBusiness(data.business);
        }
      } catch (error) {
        console.error("Failed to fetch business data:", error);
      }
    };

    if (user && !business) {
      fetchBusinessData();
    }
  }, [user, business]);

  // handleNavigation function removed - using navigation context instead

  const handleNavClick = () => {
    if (onMobileToggle && window.innerWidth < 768) {
      onMobileToggle();
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        className={cn(
          "hidden md:flex flex-col h-full bg-white border-r border-gray-200 w-64",
          className
        )}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <Image
                src="/vocalenda-logo.jpg"
                alt="Vocalenda Logo"
                width={32}
                height={32}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-xl font-bold text-brand-primary-1">
              Vocalenda
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-2">
            <SidebarButton
              href="/dashboard"
              icon={LayoutDashboard}
              label="Dashboard"
              isActive={pathname === "/dashboard"}
            />

            <SidebarButton
              href="/dashboard/appointments"
              icon={Calendar}
              label="Appointments"
              isActive={pathname === "/dashboard/appointments"}
            />

            <SidebarButton
              href="/dashboard/customers"
              icon={Users}
              label="Customers"
              isActive={pathname === "/dashboard/customers"}
            />

            <SidebarButton
              href="/dashboard/call-logs"
              icon={Phone}
              label="Call History"
              isActive={pathname === "/dashboard/call-logs"}
            />

            <SidebarButton
              href="/dashboard/integrations"
              icon={Puzzle}
              label="Integrations"
              isActive={pathname === "/dashboard/integrations"}
            />

            <SidebarButton
              href="/dashboard/business-settings"
              icon={Settings}
              label="Settings"
              isActive={pathname === "/dashboard/business-settings"}
            />
          </div>
        </nav>

        {/* User Profile Section */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-lg border border-slate-200",
                  userButtonPopoverActionButton: "hover:bg-slate-50",
                },
              }}
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {user?.firstName || user?.username || user?.primaryEmailAddress?.emailAddress || "User"}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {business?.name || "Loading business..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onMobileToggle}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            />

            {/* Mobile Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 z-50 md:hidden flex flex-col"
            >
              {/* Mobile Header with Close Button */}
              <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg overflow-hidden">
                    <Image
                      src="/vocalenda-logo.jpg"
                      alt="Vocalenda Logo"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xl font-bold text-brand-primary-1">
                    Vocalenda
                  </span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onMobileToggle}
                  className="p-2"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-2">
                  <SidebarButton
                    href="/dashboard"
                    icon={LayoutDashboard}
                    label="Dashboard"
                    isActive={pathname === "/dashboard"}
                    onMobileClick={handleNavClick}
                  />

                  <SidebarButton
                    href="/dashboard/appointments"
                    icon={Calendar}
                    label="Appointments"
                    isActive={pathname === "/dashboard/appointments"}
                    onMobileClick={handleNavClick}
                  />

                  <SidebarButton
                    href="/dashboard/customers"
                    icon={Users}
                    label="Customers"
                    isActive={pathname === "/dashboard/customers"}
                    onMobileClick={handleNavClick}
                  />

                  <SidebarButton
                    href="/dashboard/call-logs"
                    icon={Phone}
                    label="Call History"
                    isActive={pathname === "/dashboard/call-logs"}
                    onMobileClick={handleNavClick}
                  />

                  <SidebarButton
                    href="/dashboard/integrations"
                    icon={Puzzle}
                    label="Integrations"
                    isActive={pathname === "/dashboard/integrations"}
                    onMobileClick={handleNavClick}
                  />

                  <SidebarButton
                    href="/dashboard/business-settings"
                    icon={Settings}
                    label="Settings"
                    isActive={pathname === "/dashboard/business-settings"}
                    onMobileClick={handleNavClick}
                  />
                </div>
              </nav>

              {/* Mobile User Profile Section */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10",
                        userButtonPopoverCard:
                          "shadow-lg border border-slate-200",
                        userButtonPopoverActionButton: "hover:bg-slate-50",
                      },
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {user?.firstName || user?.username || user?.primaryEmailAddress?.emailAddress || "User"}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {business?.name || "Loading business..."}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
