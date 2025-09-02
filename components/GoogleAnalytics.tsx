'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export function GoogleAnalytics() {
  useEffect(() => {
    // Check if cookies are accepted before loading analytics
    if (typeof window !== 'undefined' && localStorage.getItem('cookies-accepted') === 'true') {
      // Get nonce from meta tag
      const nonceMeta = document.querySelector('meta[name="csp-nonce"]');
      const nonce = nonceMeta?.getAttribute('content') || '';
      
      // Load Google Analytics script
      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-V5TDZDW6VK';
      script.async = true;
      if (nonce) {
        script.nonce = nonce;
      }
      document.head.appendChild(script);
      
      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      
      // Create and execute gtag initialization script with nonce
      const initScript = document.createElement('script');
      if (nonce) {
        initScript.nonce = nonce;
      }
      initScript.textContent = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-V5TDZDW6VK');
      `;
      document.head.appendChild(initScript);
    }
  }, []);

  return null;
}

// Extend window type for TypeScript
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}