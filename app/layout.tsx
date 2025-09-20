import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import Navbar from "@/components/ui/navbar";
import DashboardLayout from "@/components/ui/dashboard-layout";
import { ClientOnlyComponents } from "@/components/ClientComponents";
import QueryProvider from "@/components/providers/QueryProvider";
import { NavigationProvider } from "@/contexts/NavigationContext";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Improve font loading performance
  weight: ["400", "600", "700"], // Only load needed weights
  preload: true, // Preload for critical text
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  preload: true,
});

export const metadata: Metadata = {
  title: "AI Receptionist & 24/7 Call Answering Service UK | Vocalenda",
  description:
    "Professional AI receptionist service for UK businesses. 24/7 call answering, voice appointment scheduling, and virtual receptionist that never misses a call. Multi-tenant platform with dedicated phone numbers.",
  keywords:
    "AI receptionist, 24/7 call answering, virtual receptionist, AI phone answering service, voice appointment scheduler, AI receptionist UK, automated receptionist, business phone AI, AI call handler, frontdesk AI, multi-tenant voice booking, voice booking automation, appointment automation, AI phone calls, business automation, calendar booking, voice AI, appointment scheduling",
  authors: [{ name: "Vocalenda" }],
  creator: "Vocalenda",
  publisher: "Vocalenda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vocalenda.com"),
  alternates: {
    canonical: "https://vocalenda.com/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  applicationName: "Vocalenda",
  category: "Business",
  classification: "Voice Booking Automation Platform",
  icons: {
    icon: [
      { url: "/vocalenda-logo.jpg", sizes: "512x512", type: "image/jpeg" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/vocalenda-logo.jpg",
    apple: [
      { url: "/vocalenda-logo.jpg", sizes: "180x180", type: "image/jpeg" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vocalenda.com",
    title: "AI Receptionist & 24/7 Call Answering Service UK | Vocalenda",
    description:
      "Professional AI receptionist service for UK businesses. 24/7 call answering, voice appointment scheduling, and virtual receptionist that never misses a call. Multi-tenant platform with dedicated phone numbers.",
    siteName: "Vocalenda",
    images: [
      {
        url: "https://vocalenda.com/vocalenda-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Vocalenda - Multi-Tenant Voice Booking Automation Platform Logo",
        type: "image/jpeg",
      },
      {
        url: "https://vocalenda.com/vocalenda-logo.jpg",
        width: 512,
        height: 512,
        alt: "Vocalenda Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@vocalenda_app",
    creator: "@vocalenda_app",
    title: "AI Receptionist & 24/7 Call Answering Service UK | Vocalenda",
    description:
      "Professional AI receptionist service for UK businesses. 24/7 call answering, voice appointment scheduling, and virtual receptionist that never misses a call. Multi-tenant platform with dedicated phone numbers.",
    images: ["https://vocalenda.com/vocalenda-logo.jpg"],
  },
  other: {
    "google-site-verification": "", // Add your Google Search Console verification code here
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      signInFallbackRedirectUrl="/dashboard"
      signUpFallbackRedirectUrl="/dashboard"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <html lang="en">
        <head>
          <GoogleAnalytics />
        </head>

        <body className={`${inter.variable} ${poppins.variable} antialiased`}>
          <QueryProvider>
            <NavigationProvider>
              <Navbar />
              <ClientOnlyComponents />
              <DashboardLayout>
                {children}
              </DashboardLayout>
              <CookieBanner />
            </NavigationProvider>
          </QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
