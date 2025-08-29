import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  description: "Multi-tenant voice booking platform that helps businesses automate appointments and free up valuable time. Dedicated phone numbers and isolated data for each business.",
  keywords: "voice booking, appointment automation, AI phone calls, business automation, calendar booking, voice AI, appointment scheduling, multi-tenant, dedicated phone numbers",
  authors: [{ name: "Vocalenda" }],
  creator: "Vocalenda",
  publisher: "Vocalenda",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vocalenda.com",
    title: "Vocalenda - Voice Booking Automation",
    description: "Voice booking platform that helps businesses automate appointments and free up valuable time. Let customers book naturally through AI-powered phone conversations.",
    siteName: "Vocalenda",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocalenda - Voice Booking Automation",
    description: "Voice booking platform that helps businesses automate appointments and free up valuable time. Let customers book naturally through AI-powered phone conversations.",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
