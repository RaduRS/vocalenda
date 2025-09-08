"use client";

import dynamic from "next/dynamic";

// Dynamically import client-side only components to prevent hydration issues
const WebVitals = dynamic(() => import("@/components/WebVitals"), {
  ssr: false,
});

const ServiceWorkerRegistration = dynamic(() => import("@/components/ServiceWorkerRegistration"), {
  ssr: false,
});

export function ClientOnlyComponents() {
  return (
    <>
      <WebVitals />
      <ServiceWorkerRegistration />
    </>
  );
}