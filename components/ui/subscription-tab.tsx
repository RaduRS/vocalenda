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
  DollarSign,
  AlertCircle,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";

interface Subscription {
  id: string;
  stripe_subscription_id: string;
  stripe_customer_id: string;
  status: 'active' | 'canceled' | 'incomplete' | 'incomplete_expired' | 'past_due' | 'trialing' | 'unpaid';
  plan_name: string;
  plan_id: string;
  amount: number;
  currency: string;
  interval: 'month' | 'year';
  current_period_start: string;
  current_period_end: string;
  cancel_at_period_end: boolean;
  monthly_minutes_included: number;
  monthly_minutes_used: number;
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

  const handleCancelSubscription = async () => {
    if (!subscription) return;
    
    setActionLoading(true);
    try {
      const response = await fetch('/api/subscriptions', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'cancel' }),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success('Subscription will be canceled at the end of the current period');
        fetchSubscription(); // Refresh subscription data
      } else {
        toast.error(data.error || 'Failed to cancel subscription');
      }
    } catch (error) {
      console.error('Error canceling subscription:', error);
      toast.error('Failed to cancel subscription');
    } finally {
      setActionLoading(false);
    }
  };

  const handleReactivateSubscription = async () => {
    if (!subscription) return;
    
    setActionLoading(true);
    try {
      const response = await fetch('/api/subscriptions', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'reactivate' }),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success('Subscription reactivated successfully');
        fetchSubscription(); // Refresh subscription data
      } else {
        toast.error(data.error || 'Failed to reactivate subscription');
      }
    } catch (error) {
      console.error('Error reactivating subscription:', error);
      toast.error('Failed to reactivate subscription');
    } finally {
      setActionLoading(false);
    }
  };

  const getStatusBadge = (status: string, cancelAtPeriodEnd: boolean) => {
    if (cancelAtPeriodEnd) {
      return <Badge variant="destructive" className="flex items-center gap-1">
        <XCircle className="w-3 h-3" />
        Canceling
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

      const { clientSecret } = await response.json();
      
      if (clientSecret) {
        // Redirect to Stripe's hosted checkout page
        const stripe = await import('@stripe/stripe-js').then(mod => 
          mod.loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)
        );
        
        if (stripe) {
          // For payment intents, we would typically redirect to a payment confirmation page
          // For now, let's show a success message and refresh the subscription data
          toast.success('Subscription created! Please complete payment.');
          fetchSubscription(); // Refresh subscription data
        }
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

          {/* Billing Amount */}
          <div className="space-y-2">
            <div className="flex items-center text-sm text-gray-500">
              <DollarSign className="w-4 h-4 mr-2" />
              Billing Amount
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {formatCurrency(subscription.amount, subscription.currency)}
              <span className="text-sm text-gray-500 ml-1">
                /{subscription.interval}
              </span>
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
              {formatDate(subscription.current_period_end)}
            </div>
          </div>
        </div>
      </Card>

      {/* Usage Overview */}
      <Card className="p-8 bg-white shadow-sm border border-gray-200">
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Monthly Usage</h4>
          <p className="text-gray-600">Track your AI assistant minute usage for this billing period</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Minutes Used</span>
            <span className="text-sm text-gray-600">
              {subscription.monthly_minutes_used} / {subscription.monthly_minutes_included} minutes
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                minutesUsagePercentage > 90
                  ? 'bg-red-500'
                  : minutesUsagePercentage > 75
                  ? 'bg-yellow-500'
                  : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(minutesUsagePercentage, 100)}%` }}
            />
          </div>
          
          {minutesUsagePercentage > 90 && (
            <div className="flex items-center text-sm text-red-600 bg-red-50 p-3 rounded-lg">
            <AlertCircle className="w-4 h-4 mr-2" />
            You&apos;re approaching your monthly minute limit. Consider upgrading your plan.
          </div>
          )}
        </div>
      </Card>

      {/* Subscription Actions */}
      <Card className="p-8 bg-white shadow-sm border border-gray-200">
        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-2">Subscription Actions</h4>
          <p className="text-gray-600">Manage your subscription settings</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {subscription.cancel_at_period_end ? (
            <Button
              onClick={handleReactivateSubscription}
              disabled={actionLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              {actionLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <CheckCircle className="w-4 h-4 mr-2" />
              )}
              Reactivate Subscription
            </Button>
          ) : (
            <Button
              onClick={handleCancelSubscription}
              disabled={actionLoading}
              variant="destructive"
            >
              {actionLoading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <XCircle className="w-4 h-4 mr-2" />
              )}
              Cancel Subscription
            </Button>
          )}
          
          <Button variant="outline" disabled>
            <CreditCard className="w-4 h-4 mr-2" />
            Change Plan (Coming Soon)
          </Button>
          
          <Button variant="outline" disabled>
            Update Payment Method (Coming Soon)
          </Button>
        </div>

        {subscription.cancel_at_period_end && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <div className="flex items-center text-yellow-800">
              <AlertCircle className="w-4 h-4 mr-2" />
              <span className="text-sm">
                Your subscription will be canceled on {formatDate(subscription.current_period_end)}. 
                You&apos;ll continue to have access until then.
              </span>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}