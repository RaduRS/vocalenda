'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect, useState, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CallLogsSection } from '@/components/ui/call-logs-section';

interface Business {
  id: string;
  name: string;
  slug: string;
  phone_number: string;
  email: string;
  address: string;
  status: string;
  google_calendar_connected?: boolean;
}

interface DashboardStats {
  totalAppointments: number;
  todayAppointments: number;
  totalCustomers: number;
  totalCalls: number;
}

interface CallLog {
  id: string;
  caller_phone: string;
  status: 'incoming' | 'in_progress' | 'completed' | 'failed';
  started_at: string;
  ended_at: string | null;
  duration: number | null;
  customer_name: string | null;
  twilio_call_sid: string | null;
}

export default function Dashboard() {
  const { user } = useUser();
  const router = useRouter();
  const [business, setBusiness] = useState<Business | null>(null);
  const [stats, setStats] = useState<DashboardStats>({
    totalAppointments: 0,
    todayAppointments: 0,
    totalCustomers: 0,
    totalCalls: 0
  });
  const [recentCalls, setRecentCalls] = useState<CallLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [connectingCalendar, setConnectingCalendar] = useState(false);
  const [disconnectingCalendar, setDisconnectingCalendar] = useState(false);

  const fetchDashboardData = useCallback(async () => {
    try {
      // Add timestamp to prevent any caching
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/dashboard?t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      });
      if (response.ok) {
        const data = await response.json();
        setBusiness(data.business);
        setStats(data.stats);
        setRecentCalls(data.recentCalls || []);
        
        // If no business found, redirect to setup
        if (!data.business) {
          router.push('/setup');
          return;
        }
      }
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    }
  }, [router]);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        await fetchDashboardData();
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadDashboard();
    }
  }, [user, fetchDashboardData]);

  const handleConnectCalendar = useCallback(async () => {
    setConnectingCalendar(true);
    try {
      if (!business?.id) {
        alert('Business information not available. Please refresh the page.');
        return;
      }

      const response = await fetch(`/api/auth/google?businessId=${business.id}`);
      const data = await response.json();
      
      if (data.authUrl) {
        // Redirect to Google OAuth
        window.location.href = data.authUrl;
      } else {
        throw new Error(data.error || 'Failed to get OAuth URL');
      }
    } catch (error) {
      console.error('Failed to connect calendar:', error);
      alert('Failed to connect Google Calendar. Please try again.');
    } finally {
      setConnectingCalendar(false);
    }
  }, [business?.id]);

  const handleDisconnectCalendar = useCallback(async () => {
    if (!confirm('Are you sure you want to disconnect Google Calendar? This will revoke all permissions and remove the integration.')) {
      return;
    }

    setDisconnectingCalendar(true);
    try {
      if (!business?.id) {
        alert('Business information not available. Please refresh the page.');
        return;
      }

      const response = await fetch('/api/auth/google/disconnect', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ businessId: business.id }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Small delay to ensure database changes are committed
        await new Promise(resolve => setTimeout(resolve, 500));
        // Refetch dashboard data to get the updated connection status
        await fetchDashboardData();
        alert('Google Calendar disconnected successfully!');
      } else {
        throw new Error(data.error || 'Failed to disconnect Google Calendar');
      }
    } catch (error) {
      console.error('Failed to disconnect calendar:', error);
      alert('Failed to disconnect Google Calendar. Please try again.');
    } finally {
      setDisconnectingCalendar(false);
    }
  }, [business?.id, fetchDashboardData]);

  // Memoize stats cards to prevent unnecessary re-renders
  const statsCards = useMemo(() => [
    {
      title: 'Total Appointments',
      value: stats.totalAppointments,
      icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
      color: 'blue'
    },
    {
      title: 'Today\'s Appointments',
      value: stats.todayAppointments,
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
      color: 'green'
    },
    {
      title: 'Total Customers',
      value: stats.totalCustomers,
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
      color: 'purple'
    },
    {
      title: 'Total Calls',
      value: stats.totalCalls,
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      color: 'orange'
    }
  ], [stats]);

  const getColorClasses = useCallback((color: string) => {
    const colorMap = {
      blue: 'bg-brand-secondary-1/10 text-brand-secondary-1',
      green: 'bg-brand-secondary-1/10 text-brand-secondary-1',
      purple: 'bg-brand-primary-1/10 text-brand-primary-1',
      orange: 'bg-brand-primary-2/10 text-brand-primary-2'
    };
    return colorMap[color as keyof typeof colorMap] || 'bg-brand-primary-2/10 text-brand-primary-2';
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        {/* Header Skeleton */}
        <div className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 space-y-4 sm:space-y-0">
              <div>
                <div className="h-8 bg-brand-primary-2/20 rounded w-48 mb-2 animate-pulse"></div>
                <div className="h-5 bg-brand-primary-2/20 rounded w-32 animate-pulse"></div>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="h-10 bg-brand-primary-2/20 rounded w-24 animate-pulse"></div>
                <div className="h-10 bg-brand-primary-2/20 rounded w-32 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Skeleton */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Stats Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="p-6">
                <div className="flex items-center">
                  <div className="p-2 bg-brand-primary-2/20 rounded-lg w-12 h-12 animate-pulse"></div>
                  <div className="ml-4 flex-1">
                    <div className="h-4 bg-brand-primary-2/20 rounded w-24 mb-2 animate-pulse"></div>
                    <div className="h-8 bg-brand-primary-2/20 rounded w-16 animate-pulse"></div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Calendar Integration Skeleton */}
          <Card className="p-6 mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0 flex-1">
                <div className="h-6 bg-brand-primary-2/20 rounded w-48 mb-2 animate-pulse"></div>
                <div className="h-4 bg-brand-primary-2/20 rounded w-full max-w-md animate-pulse"></div>
              </div>
              <div className="h-10 bg-brand-primary-2/20 rounded w-32 animate-pulse"></div>
            </div>
          </Card>
          
          {/* Business Info Cards Skeleton */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="h-6 bg-brand-primary-2/20 rounded w-40 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i}>
                    <div className="h-4 bg-brand-primary-2/20 rounded w-24 mb-1 animate-pulse"></div>
                    <div className="h-5 bg-brand-primary-2/20 rounded w-full animate-pulse"></div>
                  </div>
                ))}
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="h-6 bg-brand-primary-2/20 rounded w-32 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 bg-brand-primary-2/20 rounded w-full animate-pulse"></div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <Card className="p-8 text-center">
          <h2 className="text-xl font-semibold mb-4 text-brand-primary-1">No Business Found</h2>
          <p className="text-brand-primary-2 mb-6">It looks like you haven&apos;t set up your business yet.</p>
          <Button onClick={() => router.push('/setup')}>
            Set Up Business
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-6 space-y-4 sm:space-y-0">
            <div>
              <h1 className="text-2xl font-bold text-brand-primary-1">{business.name}</h1>
              <p className="text-brand-primary-2">Welcome back, {user?.firstName}!</p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <Button variant="outline" className="w-full sm:w-auto">Settings</Button>
              <Button className="w-full sm:w-auto">New Appointment</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsCards.map((card, index) => (
            <Card key={card.title} className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg ${getColorClasses(card.color)}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-brand-primary-2">{card.title}</p>
                  <p className="text-2xl font-bold text-brand-primary-1">{card.value}</p>
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
                <h3 className="text-lg font-semibold mb-2 text-brand-primary-1">Calendar Sync</h3>
                <p className="text-brand-primary-2">
                  {business.google_calendar_connected 
                    ? '✅ Your calendar is synced! Customers can only book when you\'re available, and new appointments automatically appear in your Google Calendar.'
                    : '🔗 Connect your Google Calendar so customers can only book when you\'re free. All appointments will automatically sync to your calendar.'
                  }
                </p>
              </div>
              <div className="flex-shrink-0">
                {business.google_calendar_connected ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center text-brand-secondary-1">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Connected
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={handleDisconnectCalendar}
                      disabled={disconnectingCalendar}
                    >
                      {disconnectingCalendar ? 'Disconnecting...' : 'Disconnect'}
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
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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

        {/* Recent Call Logs */}
        <div className="mb-8">
          <CallLogsSection recentCalls={recentCalls} />
        </div>

        {/* Business Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-brand-primary-1">Business Information</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-brand-primary-2">Business Name</p>
                <p className="text-brand-primary-1">{business.name}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-primary-2">Phone Number</p>
                <p className="text-brand-primary-1">{business.phone_number}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-primary-2">Email</p>
                <p className="text-brand-primary-1">{business.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-primary-2">Address</p>
                <p className="text-brand-primary-1">{business.address}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-brand-primary-2">Your AI Booking Number</p>
                <p className="text-brand-primary-1 font-mono text-lg">{business.phone_number}</p>
                <p className="text-sm text-brand-primary-2 mt-1">Customers call this number to book appointments 24/7</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-brand-primary-1">📊 Manage Your Business</h3>
            <div className="space-y-3">
              <Button className="w-full justify-start" variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                View All Appointments
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Customer Directory
              </Button>
              <Button className="w-full justify-start" variant="outline">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                AI Call History
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => router.push('/dashboard/business-settings')}
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Business Settings
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}