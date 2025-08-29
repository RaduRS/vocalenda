'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface BusinessData {
  name: string;
  slug: string;
  phone: string;
  email: string;
  address: string;
  timezone: string;
}

export default function SetupWizard() {
  const { user } = useUser();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [businessData, setBusinessData] = useState<BusinessData>({
    name: '',
    slug: '',
    phone: '',
    email: user?.primaryEmailAddress?.emailAddress || '',
    address: '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
  });

  // Check if user already has a business and redirect to dashboard
  useEffect(() => {
    const checkBusinessStatus = async () => {
      if (user) {
        try {
          const response = await fetch('/api/dashboard');
          if (response.ok) {
            const data = await response.json();
            if (data.business) {
              router.push('/dashboard');
              return;
            }
          }
        } catch (error) {
          console.error('Failed to check business status:', error);
        }
        setIsLoading(false);
      }
    };

    checkBusinessStatus();
  }, [user, router]);

  const handleInputChange = (field: keyof BusinessData, value: string) => {
    setBusinessData(prev => ({ ...prev, [field]: value }));
    
    // Auto-generate slug from business name
    if (field === 'name') {
      const slug = value.toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      setBusinessData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/business/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clerkUserId: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          ...businessData
        })
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Business created:', result);
        // Redirect to dashboard
        window.location.href = result.redirectTo || '/dashboard';
      } else {
        const error = await response.json();
        console.error('Failed to create business:', error);
        alert('Failed to create business. Please try again.');
      }
    } catch (error) {
      console.error('Setup failed:', error);
      alert('Failed to complete setup. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return businessData.name.trim() && businessData.slug.trim();
      case 2:
        return businessData.phone.trim() && businessData.email.trim();
      case 3:
        return businessData.address.trim();
      default:
        return false;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-2">Welcome to Vocalenda!</h1>
          <p className="text-gray-600 text-center">Let&apos;s set up your voice booking business</p>
          
          {/* Progress indicator */}
          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i <= step ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Business Information</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">Business Name *</label>
              <input
                type="text"
                value={businessData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="e.g., City Barbershop"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Business URL Slug *</label>
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0">
                <span className="text-gray-500 sm:mr-2 text-sm sm:text-base">vocalenda.com/</span>
                <input
                  type="text"
                  value={businessData.slug}
                  onChange={(e) => handleInputChange('slug', e.target.value)}
                  className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="city-barbershop"
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">This will be your unique booking URL</p>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">Business Phone Number *</label>
              <input
                type="tel"
                value={businessData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+44 20 1234 5678"
              />
              <p className="text-sm text-gray-500 mt-1">This will be your Twilio phone number for voice bookings</p>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Business Email *</label>
              <input
                type="email"
                value={businessData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="contact@citybarbershop.com"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Business Location</h2>
            
            <div>
              <label className="block text-sm font-medium mb-2">Business Address *</label>
              <textarea
                value={businessData.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
                placeholder="123 High Street, London, UK"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Timezone</label>
              <select
                value={businessData.timezone}
                onChange={(e) => handleInputChange('timezone', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Europe/London">London (GMT)</option>
                <option value="Europe/Paris">Paris (CET)</option>
                <option value="America/New_York">New York (EST)</option>
                <option value="America/Los_Angeles">Los Angeles (PST)</option>
                <option value="Asia/Tokyo">Tokyo (JST)</option>
                <option value="Australia/Sydney">Sydney (AEST)</option>
              </select>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row justify-between mt-8 space-y-3 sm:space-y-0">
          <Button
            variant="outline"
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
            className="w-full sm:w-auto px-6"
          >
            Previous
          </Button>
          
          {step < 3 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={!isStepValid()}
              className="w-full sm:w-auto px-6"
            >
              Next
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={!isStepValid() || loading}
              className="w-full sm:w-auto px-6"
            >
              {loading ? 'Creating...' : 'Complete Setup'}
            </Button>
          )}
        </div>
      </Card>
    </div>
  );
}