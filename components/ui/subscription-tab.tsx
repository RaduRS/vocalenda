"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  CreditCard,
  Loader2,
} from "lucide-react";

interface Subscription {
  id: string;
  business_id: string;
  stripe_subscription_id: string;
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
        // Only set subscription if it has a valid stripe_subscription_id
        if (data.subscription?.stripe_subscription_id) {
          setSubscription(data.subscription);
        } else {
          setSubscription(null);
        }
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

  return (
    <div className="space-y-6">
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
        </div>
      </Card>
    </div>
  );
}