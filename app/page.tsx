"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Footer } from "@/components/ui/footer";
import { Phone, Calendar, MessageSquare, Zap } from "lucide-react";
import { SignUpButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
export default function Home() {

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vocalenda",
      alternateName: "Vocalenda Voice Booking",
      description:
        "Multi-tenant voice booking platform that helps businesses automate appointments and free up valuable time. Dedicated phone numbers and isolated data for each business.",
      url: "https://vocalenda.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vocalenda.com/vocalenda-logo.jpg",
        width: 512,
        height: 512,
      },
      foundingDate: "2025",
      sameAs: ["https://vocalenda.com"],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@vocalenda.com",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Vocalenda",
      description:
        "Transform your business with automated voice booking. Your customers call, we handle everything - from checking availability to confirming appointments. Never miss a booking again.",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GBP",
      },
      featureList: [
        "24/7 AI voice booking",
        "Real-time calendar integration",
        "Automatic SMS confirmations",
        "Natural conversation AI",
        "Zero double bookings",
      ],
      publisher: {
        "@type": "Organization",
        name: "Vocalenda",
        logo: {
          "@type": "ImageObject",
          url: "https://vocalenda.com/vocalenda-logo.jpg",
        },
      },
    },
  ];

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/ai-agent-landscape-optimized.jpeg"
              alt="Professional AI voice agent representative"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/30 dark:from-slate-950/95 dark:via-slate-950/80 dark:to-slate-950/40"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-32">
            <div className="w-full max-w-4xl mx-auto text-center lg:text-left lg:max-w-2xl lg:mx-0">
              {/* Main Headline */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
                {/* The Hook: Your new, powerful H1 */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white leading-tight">
                  Stop losing customers to your voicemail
                </h1>
                {/* The Solution: Your new, clear H2 */}
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-slate-200 leading-relaxed">
                  Our AI agent books them for you
                </h2>
              </div>

              {/* Key Benefits */}
              <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
                {/* Key Benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 text-sm sm:text-base lg:text-lg text-slate-300">
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Phone className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span>24/7 Availability</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Calendar className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span>Real-time Booking</span>
                  </div>
                  <div className="flex items-center gap-3 justify-center lg:justify-start">
                    <Zap className="w-5 h-5 text-brand-accent flex-shrink-0" />
                    <span>Instant Setup</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                <SignUpButton>
                  <Button
                    size="lg"
                    className="bg-brand-secondary-1 hover:bg-brand-secondary-1/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto cursor-pointer"
                  >
                    Get Started
                  </Button>
                </SignUpButton>
                <SignInButton>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-200 w-full sm:w-auto cursor-pointer"
                  >
                    Sign In
                  </Button>
                </SignInButton>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 pb-12 sm:pb-16 pt-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 mx-auto text-brand-secondary-1 mb-2" />
                <CardTitle className="text-lg">Voice AI</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Natural conversations that feel human. Your customers book
                  appointments as easily as talking to your staff.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 mx-auto text-brand-secondary-1 mb-2" />
                <CardTitle className="text-lg">Google Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time availability checking and automatic appointment
                  scheduling
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="text-center">
                <MessageSquare className="h-8 w-8 mx-auto text-brand-secondary-1 mb-2" />
                <CardTitle className="text-lg">SMS Confirmations</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatic SMS confirmations sent from the same number
                  customers called
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="text-center">
                <Zap className="h-8 w-8 mx-auto text-brand-secondary-1 mb-2" />
                <CardTitle className="text-lg">Multi-Tenant</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicated phone numbers and isolated data for each business
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-white dark:bg-slate-800/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-brand-primary-1">
                Why Businesses Choose Vocalenda
              </h2>
              <p className="text-lg text-brand-primary-2 max-w-2xl mx-auto">
                Join thousands of businesses that have transformed their booking
                process
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-secondary-1 to-brand-secondary-1/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary-1 mb-3">
                  Always Available
                </h3>
                <p className="text-brand-primary-2 leading-relaxed">
                  Never miss a booking opportunity, even after hours. Your AI
                  agent works around the clock.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-secondary-1 to-brand-secondary-1/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">90%</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary-1 mb-3">
                  Time Saved
                </h3>
                <p className="text-brand-primary-2 leading-relaxed">
                  Massive reduction in time spent on phone bookings. Focus on
                  what matters most.
                </p>
              </div>
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-secondary-1 to-brand-secondary-1/80 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">Zero</span>
                </div>
                <h3 className="text-xl font-semibold text-brand-primary-1 mb-3">
                  Double Bookings
                </h3>
                <p className="text-brand-primary-2 leading-relaxed">
                  Eliminate conflicts with real-time calendar sync and
                  intelligent scheduling.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-brand-secondary-1 to-brand-accent py-16 sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Join the AI revolution and never miss another booking. Get
                started in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <SignUpButton>
                  <Button
                    size="lg"
                    className="bg-white text-brand-secondary-1 hover:bg-slate-50 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto cursor-pointer"
                  >
                    Get Started
                  </Button>
                </SignUpButton>
                <a
                  href="https://www.tiktok.com/@vocalenda.app/video/7545573537944276246"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-transparent text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-200 w-full cursor-pointer"
                  >
                    Watch Demo
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
