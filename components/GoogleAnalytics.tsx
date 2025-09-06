'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);
  const [nonce, setNonce] = useState('');

  useEffect(() => {
    // Check if cookies are accepted
    const accepted = localStorage.getItem('cookies-accepted') === 'true';
    setCookiesAccepted(accepted);
    
    // Get nonce from meta tag
    const nonceMeta = document.querySelector('meta[name="csp-nonce"]');
    const nonceValue = nonceMeta?.getAttribute('content') || '';
    setNonce(nonceValue);
  }, []);

  if (!cookiesAccepted) {
    return null;
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-V5TDZDW6VK"
        strategy="afterInteractive"
        nonce={nonce}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        nonce={nonce}
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