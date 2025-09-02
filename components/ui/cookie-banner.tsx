'use client';

import { useState, useEffect } from 'react';
import { Button } from './button';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookies-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600 text-center sm:text-left">
          We use cookies to track and improve your experience on our website.
        </p>
        <Button 
          onClick={handleAccept}
          className="whitespace-nowrap"
        >
          Accept
        </Button>
      </div>
    </div>
  );
}