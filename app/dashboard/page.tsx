"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useMemo, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
// RefreshCw import removed as it's no longer used

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DashboardSkeleton } from "@/components/ui/skeleton-loading";

import { useDashboard } from "@/hooks/useDashboard";

// Memoized stats card component
const StatsCard = memo(({ title, value, description }: { title: string; value: number; description: string }) => (
  <Card className="p-6">
    <div className="flex flex-row items-center justify-between space-y-0 pb-2">
      <h3 className="text-sm font-medium">{title}</h3>
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <p className="text-xs text-muted-foreground">{description}</p>
  </Card>
));

StatsCard.displayName = 'StatsCard';

function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const { data, isLoading, refetch } = useDashboard();
  const business = data?.business;
  const [connectingCalendar, setConnectingCalendar] = useState(false);
  const [disconnectingCalendar, setDisconnectingCalendar] = useState(false);

  const handleConnectCalendar = useCallback(async () => {
    setConnectingCalendar(true);
    try {
      if (!business?.id) {
        alert("Business information not available. Please refresh the page.");
        return;
      }

      const response = await fetch(
        `/api/auth/google?businessId=${business.id}`
      );
      const data = await response.json();

      if (data.authUrl) {
        // Redirect to Google OAuth
        window.location.href = data.authUrl;
      } else {
        throw new Error(data.error || "Failed to get OAuth URL");
      }
    } catch (error) {
      console.error("Failed to connect calendar:", error);
      alert("Failed to connect Google Calendar. Please try again.");
    } finally {
      setConnectingCalendar(false);
    }
  }, [business?.id]);

  const handleDisconnectCalendar = useCallback(async () => {
    if (
      !confirm(
        "Are you sure you want to disconnect Google Calendar? This will revoke all permissions and remove the integration."
      )
    ) {
      return;
    }

    setDisconnectingCalendar(true);
    try {
      if (!business?.id) {
        alert("Business information not available. Please refresh the page.");
        return;
      }

      const response = await fetch("/api/auth/google/disconnect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ businessId: business.id }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Small delay to ensure database changes are committed
        await new Promise((resolve) => setTimeout(resolve, 500));
        // Refetch dashboard data to get the updated connection status
        await refetch();
        alert("Google Calendar disconnected successfully!");
      } else {
        throw new Error(data.error || "Failed to disconnect Google Calendar");
      }
    } catch (error) {
      console.error("Failed to disconnect calendar:", error);
      alert("Failed to disconnect Google Calendar. Please try again.");
    } finally {
      setDisconnectingCalendar(false);
    }
  }, [business?.id, refetch]);



  // Memoize stats cards to prevent unnecessary re-renders
  const statsCards = useMemo(
    () => {
      const currentStats = data?.stats || {
        totalAppointments: 0,
        todayAppointments: 0,
        totalCustomers: 0,
        totalCalls: 0,
      };
      
      return [
        {
          title: "Total Appointments",
          value: currentStats.totalAppointments,
          icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
          color: "blue",
        },
        {
          title: "Today's Appointments",
          value: currentStats.todayAppointments,
          icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
          color: "green",
        },
        {
          title: "Total Customers",
          value: currentStats.totalCustomers,
          icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
          color: "purple",
        },
        {
          title: "Total Calls",
          value: currentStats.totalCalls,
          icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
          color: "orange",
        },
      ];
    },
    [data?.stats]
  );

  const getColorClasses = useCallback((color: string) => {
    const colorMap = {
      blue: "bg-brand-secondary-1/10 text-brand-secondary-1",
      green: "bg-brand-secondary-1/10 text-brand-secondary-1",
      purple: "bg-brand-primary-1/10 text-brand-primary-1",
      orange: "bg-brand-primary-2/10 text-brand-primary-2",
    };
    return (
      colorMap[color as keyof typeof colorMap] ||
      "bg-brand-primary-2/10 text-brand-primary-2"
    );
  }, []);

  // Redirect to setup if no business found
  if (data && !data.business) {
    router.push("/setup");
    return null;
  }

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold mb-4 text-brand-primary-1">
            No Business Found
          </h2>
          <p className="text-brand-primary-2 mb-6">
            It looks like you haven&apos;t set up your business yet.
          </p>
          <Button onClick={() => router.push("/setup")}>Set Up Business</Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-brand-primary-1">
                {business.name}
              </h1>
              <p className="text-brand-primary-2">
                Welcome back, {user?.firstName}!
              </p>
            </div>
            {/* Refresh button removed as requested */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card) => (
            <Card
              key={card.title}
              className="p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center">
                <div
                  className={`p-2 rounded-lg ${getColorClasses(card.color)}`}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={card.icon}
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-brand-primary-2">
                    {card.title}
                  </p>
                  <p className="text-2xl font-bold text-brand-primary-1">
                    {card.value}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Google Calendar Integration */}
        <div className="mb-8">
          <Card className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-lg font-semibold mb-2 text-brand-primary-1">
                  Calendar Sync
                </h3>
                <p className="text-brand-primary-2">
                  {business.google_calendar_connected
                    ? "✅ Your calendar is synced! Customers can only book when you're available, and new appointments automatically appear in your Google Calendar."
                    : "🔗 Connect your Google Calendar so customers can only book when you're free. All appointments will automatically sync to your calendar."}
                </p>
              </div>
              <div className="flex-shrink-0">
                {business.google_calendar_connected ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center text-brand-secondary-1">
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Connected
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleDisconnectCalendar}
                      disabled={disconnectingCalendar}
                    >
                      {disconnectingCalendar
                        ? "Disconnecting..."
                        : "Disconnect"}
                    </Button>
                  </div>
                ) : (
                  <Button
                    onClick={handleConnectCalendar}
                    disabled={connectingCalendar}
                    className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90"
                  >
                    {connectingCalendar ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Connecting...
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-4 h-4 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        Connect Google Calendar
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Business Info */}
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-brand-primary-1">
              Business Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-brand-primary-2">
                  Business Name
                </p>
                <p className="text-brand-primary-1">{business.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-primary-2">
                  Phone Number
                </p>
                <p className="text-brand-primary-1">{business.phone_number}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-primary-2">
                  Email
                </p>
                <p className="text-brand-primary-1">{business.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-primary-2">
                  Address
                </p>
                <p className="text-brand-primary-1">{business.address}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default memo(Dashboard);
