import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { CookieBanner } from "@/components/ui/cookie-banner";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import WebVitals from "@/components/WebVitals";
import Image from "next/image";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Improve font loading performance
  weight: ["400", "600", "700"], // Only load needed weights
  preload: true, // Preload for critical text
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap", // Improve font loading performance
  preload: false, // Don't preload since it's only used in typewriter component
});

export const metadata: Metadata = {
  title: "Vocalenda - Multi-Tenant Voice Booking Automation",
  description:
    "Multi-tenant voice booking platform that helps businesses automate appointments and free up valuable time. Dedicated phone numbers and isolated data for each business.",
  keywords:
    "multi-tenant voice booking, voice booking automation, appointment automation, AI phone calls, business automation, calendar booking, voice AI, appointment scheduling, 24/7 booking, automated receptionist, multi-tenant platform",
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
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" }
    ],
    shortcut: "/vocalenda-logo.jpg",
    apple: [
      { url: "/vocalenda-logo.jpg", sizes: "180x180", type: "image/jpeg" }
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vocalenda.com",
    title: "Vocalenda - Multi-Tenant Voice Booking Automation",
    description:
      "Multi-tenant voice booking platform that helps businesses automate appointments and free up valuable time. Dedicated phone numbers and isolated data for each business.",
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
    title: "Vocalenda - Multi-Tenant Voice Booking Automation",
    description:
      "Multi-tenant voice booking platform that helps businesses automate appointments and free up valuable time. Dedicated phone numbers and isolated data for each business.",
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
      signInFallbackRedirectUrl="/setup"
      signUpFallbackRedirectUrl="/setup"
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
    >
      <html lang="en">
        <head>
          <GoogleAnalytics />
          <meta name="csp-nonce" content="" id="csp-nonce" />
        </head>

        <body
          className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
        >
          <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2">
                <Image
                  src="/vocalenda-logo.jpg"
                  alt="Vocalenda Logo"
                  width={32}
                  height={32}
                  className="rounded-md"
                />
                <div className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Vocalenda
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <SignedOut>
                  <SignInButton>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-slate-100"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton>
                    <Button
                      size="sm"
                      className="bg-[#6c47ff] hover:bg-[#5a3dd9] text-white font-medium transition-colors duration-200"
                    >
                      Get Started
                    </Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                        userButtonPopoverCard:
                          "shadow-lg border border-slate-200 dark:border-slate-700",
                        userButtonPopoverActionButton:
                          "hover:bg-slate-50 dark:hover:bg-slate-800",
                      },
                    }}
                  />
                </SignedIn>
              </div>
            </div>
          </header>
          <WebVitals />
          {children}
          <CookieBanner />
        </body>
      </html>
    </ClerkProvider>
  );
}
