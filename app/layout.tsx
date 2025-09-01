import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vocalenda - Multi-Tenant Voice Booking Automation",
  description:
    "Multi-tenant voice booking platform that helps businesses automate appointments and free up valuable time. Dedicated phone numbers and isolated data for each business.",
  keywords:
    "voice booking, appointment automation, AI phone calls, business automation, calendar booking, voice AI, appointment scheduling, multi-tenant, dedicated phone numbers",
  authors: [{ name: "Vocalenda" }],
  creator: "Vocalenda",
  publisher: "Vocalenda",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vocalenda.com",
    title: "Vocalenda - Voice Booking Automation",
    description:
      "Voice booking platform that helps businesses automate appointments and free up valuable time. Let customers book naturally through AI-powered phone conversations.",
    siteName: "Vocalenda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocalenda - Voice Booking Automation",
    description:
      "Voice booking platform that helps businesses automate appointments and free up valuable time. Let customers book naturally through AI-powered phone conversations.",
    creator: "@vocalenda",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      afterSignInUrl="/setup"
        afterSignUpUrl="/setup"
        signInUrl="/sign-in"
        signUpUrl="/sign-up"
    >
      <html lang="en">

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  Vocalenda
                </h1>
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
                        userButtonPopoverCard: "shadow-lg border border-slate-200 dark:border-slate-700",
                        userButtonPopoverActionButton: "hover:bg-slate-50 dark:hover:bg-slate-800",
                      },
                    }}
                  />
                </SignedIn>
              </div>
            </div>
          </header>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
