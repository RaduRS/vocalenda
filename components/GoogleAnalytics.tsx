'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    // Check if cookies are accepted
    const accepted = localStorage.getItem('cookies-accepted') === 'true';
    setCookiesAccepted(accepted);
  }, []);

  if (!cookiesAccepted) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V5TDZDW6VK"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-V5TDZDW6VK');
        `}
      </Script>
    </>
  );
}

// Extend window type for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}