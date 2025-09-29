"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import {
  CreditCard,
  Calendar,
  Clock,
  AlertCircle,
  CheckCircle,
  XCircle,
  Loader2,
  RefreshCw,
} from "lucide-react";

interface Subscription {
  id: string;
  business_id: string;
  stripe_subscription_id: string;
  stripe_customer_id: string;
  stripe_price_id: string;
  plan: 'business_pro';
  plan_name: string; // Added by API mapping
  status: 'active' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'trialing' | 'unpaid' | 'paused';
  current_period_start: string;
  current_period_end: string;
  trial_start: string | null;
  trial_end: string | null;
  cancel_at_period_end: boolean;
  canceled_at: string | null;
  monthly_minutes_included: number;
  monthly_minutes_used: number;
  minutes_reset_date: string | null;
  amount_per_month: number;
  currency: string;
  setup_fee: number;
  setup_fee_paid: boolean;
  metadata: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}

export function SubscriptionTab() {
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchSubscription();
    
    // Check for success/cancel parameters from Stripe redirect
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      toast.success('Payment successful! Your subscription is now active.');
      // Clean up URL parameters
      window.history.replaceState({}, '', window.location.pathname);
    } else if (urlParams.get('canceled') === 'true') {
      toast.error('Payment was canceled. You can try again anytime.');
      // Clean up URL parameters
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const fetchSubscription = async () => {
    try {
      const response = await fetch('/api/subscriptions');
      const data = await response.json();
      
      if (response.ok) {
        setSubscription(data.subscription);
      } else {
        console.error('Error fetching subscription:', data.error);
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
      toast.error('Failed to load subscription details');
    } finally {
      setLoading(false);
    }
  };

  const handleManageSubscription = async () => {
    if (!subscription) return;
    
    setActionLoading(true);
    try {
      const response = await fetch('/api/subscriptions/portal', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (response.ok && data.url) {
        // Redirect to Stripe customer portal
        window.location.href = data.url;
      } else {
        toast.error(data.error || 'Failed to open subscription management');
      }
    } catch (error) {
      console.error('Error opening subscription management:', error);
      toast.error('Failed to open subscription management');
    } finally {
      setActionLoading(false);
    }
  };



  const getStatusBadge = (status: string, cancelAtPeriodEnd: boolean) => {
    if (cancelAtPeriodEnd) {
      return <Badge variant="destructive" className="flex items-center gap-1">
        <XCircle className="w-3 h-3" />
        Cancelled
      </Badge>;
    }

    switch (status) {
      case 'active':
        return <Badge variant="default" className="flex items-center gap-1 bg-green-500">
          <CheckCircle className="w-3 h-3" />
          Active
        </Badge>;
      case 'trialing':
        return <Badge variant="secondary" className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          Trial
        </Badge>;
      case 'past_due':
        return <Badge variant="destructive" className="flex items-center gap-1">
          <AlertCircle className="w-3 h-3" />
          Past Due
        </Badge>;
      case 'canceled':
        return <Badge variant="outline" className="flex items-center gap-1">
          <XCircle className="w-3 h-3" />
          Canceled
        </Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatCurrency = (amount: number, currency: string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency.toUpperCase(),
    }).format(amount / 100);
  };

  const createCheckoutSession = async () => {
    setCheckoutLoading(true);
    try {
      const response = await fetch('/api/subscriptions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_PRO_PRICE_ID,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || 'Failed to create checkout session');
      }

      const { url } = await response.json();
      
      if (url) {
        // Redirect to Stripe's hosted checkout page
        window.location.href = url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error(error instanceof Error ? error.message : 'Failed to start checkout');
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (loading) {
    return (
      <Card className="p-8 bg-white shadow-sm border border-gray-200">
        <div className="flex items-center justify-center py-12">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      </Card>
    );
  }

  if (!subscription) {
    return (
      <Card className="p-8 bg-white shadow-sm border border-gray-200">
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            No Active Subscription
          </h3>
          <p className="text-gray-600 mb-6">
            You don&apos;t have an active subscription yet. Subscribe to unlock premium features and get more minutes for your AI assistant.
          </p>
          <Button 
            className="bg-blue-600 hover:bg-blue-700"
            onClick={createCheckoutSession}
            disabled={checkoutLoading}
          >
            {checkoutLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <CreditCard className="w-4 h-4 mr-2" />
            )}
            {checkoutLoading ? 'Creating Subscription...' : 'Choose a Plan'}
          </Button>
        </div>
      </Card>
    );
  }

  const minutesUsagePercentage = (subscription.monthly_minutes_used / subscription.monthly_minutes_included) * 100;

  return (
    <div className="space-y-6">
      {/* Subscription Overview */}
      <Card className="p-8 bg-white shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Subscription</h3>
              <p className="text-gray-600">Manage your subscription and billing</p>
            </div>
          </div>
          {getStatusBadge(subscription.status, subscription.cancel_at_period_end)}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Plan Details */}
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <CreditCard className="w-4 h-4 mr-2" />
              Current Plan
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {subscription.plan_name}
            </div>
          </div>

          {/* Current Period */}
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              Current Period
            </div>
            <div className="text-sm font-medium text-gray-900">
              {formatDate(subscription.current_period_start)} - {formatDate(subscription.current_period_end)}
            </div>
          </div>

          {/* Next Billing */}
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              {subscription.cancel_at_period_end ? 'Expires' : 'Next Billing'}
            </div>
            <div className="text-sm font-medium text-gray-900">
              {subscription.cancel_at_period_end ? '—' : formatDate(subscription.current_period_end)}
            </div>
          </div>
        </div>
      </Card>

      {/* Cancellation Notice */}
      {subscription.cancel_at_period_end && (
        <Card className="p-6 bg-amber-50 border border-amber-200">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div>
              <h4 className="text-lg font-semibold text-amber-800 mb-2">Subscription Cancelled</h4>
              <p className="text-amber-700 mb-2">
                 Your subscription has been cancelled and will not renew. You&apos;ll continue to have access to all features until the end of your current billing period.
               </p>
              <p className="text-sm text-amber-600">
                <strong>Access expires:</strong> {formatDate(subscription.current_period_end)}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Subscription Actions */}
      <Card className="p-8 bg-white shadow-sm border border-gray-200">
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Subscription Actions</h4>
          <p className="text-gray-600">Manage your subscription settings</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            onClick={handleManageSubscription}
            disabled={actionLoading}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {actionLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <CreditCard className="w-4 h-4 mr-2" />
            )}
            Manage Subscription
          </Button>
          
          <Button
            onClick={async () => {
              setActionLoading(true);
              try {
                // First sync with Stripe
                const syncResponse = await fetch('/api/subscriptions', {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ action: 'sync' }),
                });

                if (syncResponse.ok) {
                  toast.success('Subscription synced with Stripe');
                  // Then fetch updated data
                  await fetchSubscription();
                } else {
                  const errorData = await syncResponse.json();
                  toast.error(errorData.error || 'Failed to sync subscription');
                }
              } catch (error) {
                console.error('Error syncing subscription:', error);
                toast.error('Failed to sync subscription');
              } finally {
                setActionLoading(false);
              }
            }}
            disabled={loading || actionLoading}
            variant="outline"
            className="border-gray-300 hover:bg-gray-50"
          >
            {actionLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 mr-2" />
            )}
            Refresh
          </Button>
        </div>


      </Card>
    </div>
  );
}