"use client";

import { useUser } from "@clerk/nextjs";
import { useState, useMemo, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
import { format, parseISO } from 'date-fns';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
} from 'chart.js';
import { Line, Doughnut, Bar } from 'react-chartjs-2';

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DashboardSkeleton } from "@/components/ui/skeleton-loading";

import { useDashboard, type RecentCall } from "@/hooks/useDashboard";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

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
  const [weekOffset, setWeekOffset] = useState(0);
  const { data, isLoading, error } = useDashboard(weekOffset);
  const business = data?.business;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const maxItems = 10;

  const navigateWeek = useCallback((direction: 'prev' | 'next') => {
    setWeekOffset(prev => direction === 'prev' ? prev - 1 : prev + 1);
  }, []);

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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-brand-primary-1"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-red-500">Error loading dashboard data</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-500">No data available</div>
      </div>
    );
  }

  // Process call status data for chart
  const callStatusData = data.recentCalls?.reduce((acc, call) => {
    acc[call.status] = (acc[call.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>) || {};

  const callStatusLabels = ['completed', 'failed', 'in_progress', 'incoming'];
  const callStatusValues = callStatusLabels.map(status => callStatusData[status] || 0);

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



        {/* Charts Section */}
        <div className="space-y-6">
          {/* Weekly Activity Overview - Full width */}
          <div>
              <Card className="p-6 h-96">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <h3 className="text-lg font-semibold text-brand-primary-1">
                  Weekly Activity Overview
                </h3>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateWeek('prev')}
                    className="p-2 h-8 w-8"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </Button>
                  {data?.stats?.weeklyActivity && data.stats.weeklyActivity.length > 0 && (
                    <p className="text-sm text-gray-600 px-2">
                      {format(parseISO(data.stats.weeklyActivity[0].date), 'MMM d')} - {format(parseISO(data.stats.weeklyActivity[data.stats.weeklyActivity.length - 1].date), 'MMM d, yyyy')}
                    </p>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => navigateWeek('next')}
                    className="p-2 h-8 w-8"
                    disabled={weekOffset >= 0}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="h-48 sm:h-56 md:h-64">
                <Line
                  data={{
                    labels: data?.stats?.weeklyActivity?.map(day => {
                      const date = parseISO(day.date);
                      return format(date, 'EEE');
                    }) || ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                      {
                        label: 'Appointments',
                        data: data.stats?.weeklyActivity?.map(day => day.appointments) || [0, 0, 0, 0, 0, 0, 0],
                        borderColor: 'rgb(147, 51, 234)',
                        backgroundColor: 'rgba(147, 51, 234, 0.1)',
                        tension: 0.4,
                      },
                      {
                        label: 'Calls',
                        data: data.stats?.weeklyActivity?.map(day => day.calls) || [0, 0, 0, 0, 0, 0, 0],
                        borderColor: 'rgb(59, 130, 246)',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        tension: 0.4,
                      },
                    ],
                  }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        position: 'top' as const,
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </Card>
          </div>

          {/* Bottom Charts Row - Equal Heights */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Call Status Distribution */}
            <div>
            <Card className="p-6 h-96">
              <h3 className="text-lg font-semibold mb-4 text-brand-primary-1">
                Call Status
              </h3>
              <div className="h-48 sm:h-56 md:h-64">
                <Bar
                   data={{
                     labels: ['Completed', 'Failed'],
                     datasets: [
                       {
                         label: 'Calls',
                         data: [
                           callStatusValues[0] || 0, // Completed
                           callStatusValues[1] || 0  // Failed
                         ],
                         backgroundColor: [
                           'rgba(34, 197, 94, 0.8)',
                           'rgba(239, 68, 68, 0.8)',
                         ],
                         borderColor: [
                           'rgba(34, 197, 94, 1)',
                           'rgba(239, 68, 68, 1)',
                         ],
                         borderWidth: 2,
                       },
                     ],
                   }}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                      },
                    },
                  }}
                />
              </div>
            </Card>
          </div>

          {/* Appointment Status Distribution */}
           <div>
             <Card className="p-6 h-96">
               <h3 className="text-lg font-semibold mb-4 text-brand-primary-1">
                 Appointment Status
               </h3>
               <div className="h-48 sm:h-56 md:h-64">
                 <Doughnut
                   data={{
                     labels: ['Confirmed', 'Cancelled'],
                     datasets: [
                       {
                         data: [
                           data.stats?.appointmentStatusCounts?.confirmed || 0,
                           data.stats?.appointmentStatusCounts?.cancelled || 0
                         ],
                         backgroundColor: [
                           'rgba(34, 197, 94, 0.8)',
                           'rgba(239, 68, 68, 0.8)',
                         ],
                         borderColor: [
                           'rgba(34, 197, 94, 1)',
                           'rgba(239, 68, 68, 1)',
                         ],
                         borderWidth: 2,
                       },
                     ],
                   }}
                   options={{
                     responsive: true,
                     maintainAspectRatio: false,
                     plugins: {
                       legend: {
                          position: 'bottom' as const,
                        },
                     },
                   }}
                 />
               </div>
             </Card>
           </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <Card className="p-6 h-96">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-brand-primary-1">
                  Recent Activity
                </h3>
                {data?.recentCalls && data.recentCalls.length > itemsPerPage && (
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(1)}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </Button>
                    <span className="text-sm text-gray-600 flex items-center px-2">
                      Page {currentPage} of 2
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setCurrentPage(2)}
                      disabled={currentPage === 2}
                    >
                      Next
                    </Button>
                  </div>
                )}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Name</th>
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Phone</th>
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Duration</th>
                      <th className="text-left py-2 px-1 font-medium text-gray-700">Call Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(() => {
                      const recentCalls = (data?.recentCalls || []).slice(0, maxItems);
                      const startIndex = (currentPage - 1) * itemsPerPage;
                      const endIndex = startIndex + itemsPerPage;
                      const paginatedCalls = recentCalls.slice(startIndex, endIndex);
                      
                      return paginatedCalls.map((call: RecentCall, index: number) => (
                      <tr key={call.id || index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-1">
                          <p className="font-medium text-gray-900 truncate">
                            {call.customer_name || 'Unknown Caller'}
                          </p>
                        </td>
                        <td className="py-3 px-1">
                          <p className="text-gray-600 truncate">
                            {call.caller_phone}
                          </p>
                        </td>
                        <td className="py-3 px-1">
                          <p className="text-gray-600">
                            {(() => {
                              const duration = call.duration_seconds || call.duration;
                              return duration ? `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}` : '--';
                            })()}
                          </p>
                        </td>
                        <td className="py-3 px-1">
                          <p className="text-gray-600">
                            {call.created_at ? new Date(call.created_at).toLocaleTimeString('en-US', { 
                              hour: '2-digit', 
                              minute: '2-digit',
                              hour12: true 
                            }) : call.started_at ? new Date(call.started_at).toLocaleTimeString('en-US', { 
                              hour: '2-digit', 
                              minute: '2-digit',
                              hour12: true 
                            }) : '--'}
                          </p>
                          <p className="text-xs text-gray-400">
                            {call.created_at ? new Date(call.created_at).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            }) : call.started_at ? new Date(call.started_at).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric' 
                            }) : '--'}
                          </p>
                        </td>
                      </tr>
                      ));
                    })() || (
                      <tr>
                        <td colSpan={4} className="text-center py-8 text-brand-primary-2">
                          <p>No recent activity</p>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(Dashboard);
