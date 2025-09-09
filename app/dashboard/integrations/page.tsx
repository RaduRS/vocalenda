"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState, useCallback, memo } from "react";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IntegrationsSkeleton } from "@/components/ui/skeleton-loading";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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

function Integrations() {
  const { user } = useUser();
  const router = useRouter();
  const [business, setBusiness] = useState<Business | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [connectingCalendar, setConnectingCalendar] = useState(false);
  const [disconnectingCalendar, setDisconnectingCalendar] = useState(false);
  const [showDisconnectModal, setShowDisconnectModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const fetchBusinessData = useCallback(async (bypassCache = false) => {
    try {
      const response = await fetch('/api/dashboard', {
        next: { revalidate: bypassCache ? 0 : 30 },
        headers: {
          'Cache-Control': bypassCache ? 'no-cache' : 'max-age=30, stale-while-revalidate=60',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        setBusiness(data.business);

        if (!data.business) {
          router.push("/setup");
          return;
        }
      }
    } catch (error) {
      console.error("Failed to fetch business data:", error);
    }
  }, [router]);

  const checkGoogleCalendarStatus = useCallback(async () => {
    try {
      setRefreshing(true);
      const response = await fetch('/api/integrations/google/status');
      if (!response.ok) {
        throw new Error('Failed to fetch Google Calendar status');
      }
      
      const data = await response.json();
      setBusiness(prev => prev ? {
        ...prev,
        google_calendar_connected: data.google_calendar_connected,
        google_calendar_id: data.google_calendar_id
      } : null);
    } catch (error) {
      console.error('Error checking Google Calendar status:', error);
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const loadData = async () => {
      try {
        await fetchBusinessData();
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      loadData();
    }
  }, [user, fetchBusinessData]);

  // Enhanced focus and visibility change listeners for OAuth detection
  useEffect(() => {
    const handleFocus = () => {
      if (user && !loading) {
        // Check if we have recent OAuth activity
        const lastActivity = sessionStorage.getItem('lastOAuthActivity');
        const now = Date.now();
        
        if (lastActivity && (now - parseInt(lastActivity)) < 120000) { // 2 minutes
          console.log('Focus detected with recent OAuth activity, refreshing after delay...');
          setTimeout(() => {
            checkGoogleCalendarStatus();
          }, 2000); // 2 second delay
          sessionStorage.removeItem('lastOAuthActivity');
        } else {
          checkGoogleCalendarStatus(); // Regular refresh on focus
        }
      }
    };
    
    const handleVisibilityChange = () => {
      if (!document.hidden && user && !loading) {
        const lastActivity = sessionStorage.getItem('lastOAuthActivity');
        const now = Date.now();
        
        if (lastActivity && (now - parseInt(lastActivity)) < 120000) { // 2 minutes
          console.log('Page became visible with recent OAuth activity, refreshing after delay...');
          setTimeout(() => {
            checkGoogleCalendarStatus();
          }, 2000); // 2 second delay
          sessionStorage.removeItem('lastOAuthActivity');
        }
      }
    };

    window.addEventListener('focus', handleFocus);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      window.removeEventListener('focus', handleFocus);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [user, loading, checkGoogleCalendarStatus]);

  // OAuth success detection and page refresh
  useEffect(() => {
    if (user && !loading) {
      // Check for OAuth success in sessionStorage
      const oauthSuccess = sessionStorage.getItem('oauthSuccess');
      if (oauthSuccess) {
        try {
          const { service, timestamp } = JSON.parse(oauthSuccess);
          const now = Date.now();
          
          // If OAuth success was recent (within 60 seconds)
          if (service === 'google_calendar' && (now - timestamp) < 60000) {
            console.log('Detected OAuth success, refreshing after delay...');
            
            // Add delay then refresh to allow backend processing
            setTimeout(() => {
              checkGoogleCalendarStatus();
            }, 3000); // 3 second delay
            
            // Clean up
            sessionStorage.removeItem('oauthSuccess');
            sessionStorage.removeItem('lastOAuthActivity');
          }
        } catch (error) {
          console.error('Error parsing OAuth success data:', error);
          sessionStorage.removeItem('oauthSuccess');
        }
      }
      
      // Check URL parameters for OAuth return
      const urlParams = new URLSearchParams(window.location.search);
      const hasCalendarParam = urlParams.has('calendar');
      
      if (hasCalendarParam) {
        console.log('Detected OAuth return via URL params, refreshing after delay...');
        
        // Add delay then refresh to allow backend processing
        setTimeout(() => {
          checkGoogleCalendarStatus();
        }, 3000); // 3 second delay
        
        // Clean up URL parameters
        const newUrl = window.location.pathname;
        window.history.replaceState({}, '', newUrl);
        
        // Clear OAuth activity flag
        sessionStorage.removeItem('lastOAuthActivity');
      }
    }
  }, [user, loading, checkGoogleCalendarStatus]);

  
  // Listen for OAuth success messages from popup
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      
      if (event.data.type === 'OAUTH_SUCCESS' && event.data.service === 'google_calendar') {
        console.log('Received OAuth success message, updating state...');
        
        // Immediately update state
        setBusiness(prev => prev ? { ...prev, google_calendar_connected: true } : null);
        
        // Force refresh from server
        fetchBusinessData(true);
        
        // Clean up
        sessionStorage.removeItem('lastOAuthActivity');
      }
    };
    
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [fetchBusinessData]);

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
        // Store timestamp for OAuth activity detection
        sessionStorage.setItem('lastOAuthActivity', Date.now().toString());
        
        // Set up a listener for when the user returns
        const handleFocusAfterOAuth = () => {
          console.log('Page focused after OAuth, checking connection...');
          setTimeout(() => {
            checkGoogleCalendarStatus();
          }, 3000); // 3 second delay to allow backend processing
          window.removeEventListener('focus', handleFocusAfterOAuth);
        };
        
        window.addEventListener('focus', handleFocusAfterOAuth);
        window.location.href = data.authUrl;
      } else {
        throw new Error(data.error || "Failed to get OAuth URL");
      }
    } catch (error) {
      console.error("Failed to connect calendar:", error);
      alert("Failed to connect Google Calendar. Please try again.");
      setConnectingCalendar(false);
    }
  }, [business?.id, fetchBusinessData]);
  
  const handleManualRefresh = useCallback(() => {
    console.log('Manual refresh triggered');
    checkGoogleCalendarStatus();
  }, [checkGoogleCalendarStatus]);

  const handleDisconnectCalendar = useCallback(async () => {
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
        // Add delay then refresh to allow backend processing
        setTimeout(() => {
          checkGoogleCalendarStatus();
        }, 2000); // 2 second delay
        
        setSuccessMessage("Google Calendar disconnected successfully!");
        setShowSuccessModal(true);
      } else {
        throw new Error(data.error || "Failed to disconnect Google Calendar");
      }
    } catch (error) {
      console.error("Failed to disconnect calendar:", error);
      alert("Failed to disconnect Google Calendar. Please try again.");
    } finally {
      setDisconnectingCalendar(false);
      setShowDisconnectModal(false);
    }
  }, [business?.id, fetchBusinessData]);

  if (loading) {
    return <IntegrationsSkeleton />;
  }

  if (!business) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
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
                Integrations
              </h1>
              <p className="text-brand-primary-2">
                Connect and manage your third-party integrations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Google Calendar Integration */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 text-brand-primary-1">
            Calendar & Scheduling
          </h2>
          
          <Card className="p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-brand-primary-1">
                    Google Calendar
                  </h3>
                </div>
                <p className="text-brand-primary-2">
                  {business.google_calendar_connected
                    ? "Your calendar is synced! Customers can only book when you're available, and new appointments automatically appear in your Google Calendar."
                    : "Connect your Google Calendar so customers can only book when you're free. All appointments will automatically sync to your calendar."}
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
                      onClick={handleManualRefresh}
                      disabled={refreshing}
                      className="text-xs"
                    >
                      {refreshing ? (
                        <>
                          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-600 mr-1"></div>
                          Checking...
                        </>
                      ) : (
                        <>
                          <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Refresh
                        </>
                      )}
                    </Button>
                    <Dialog open={showDisconnectModal} onOpenChange={setShowDisconnectModal}>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          disabled={disconnectingCalendar}
                        >
                          Disconnect
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Disconnect Google Calendar</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to disconnect Google Calendar? This will revoke all permissions and remove the integration.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => setShowDisconnectModal(false)}>
                            Cancel
                          </Button>
                          <Button
                            variant="destructive"
                            onClick={handleDisconnectCalendar}
                            disabled={disconnectingCalendar}
                          >
                            {disconnectingCalendar ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                Disconnecting...
                              </>
                            ) : (
                              "Disconnect"
                            )}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                   </div>
                 ) : (
                   <div className="flex items-center space-x-3">
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
                     <Button
                       variant="outline"
                       size="sm"
                       onClick={handleManualRefresh}
                       disabled={refreshing}
                       className="text-xs"
                     >
                       {refreshing ? (
                         <>
                           <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-600 mr-1"></div>
                           Checking...
                         </>
                       ) : (
                         <>
                           <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                           </svg>
                           Check Status
                         </>
                       )}
                     </Button>
                   </div>
                 )}
               </div>
             </div>
           </Card>
         </div>

         {/* Success Modal */}
         <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
           <DialogContent>
             <DialogHeader>
               <DialogTitle>Success</DialogTitle>
               <DialogDescription>
                 {successMessage}
               </DialogDescription>
             </DialogHeader>
             <DialogFooter>
               <Button onClick={() => setShowSuccessModal(false)}>
                 OK
               </Button>
             </DialogFooter>
           </DialogContent>
         </Dialog>

       </div>
     </div>
   );
 }

export default memo(Integrations);