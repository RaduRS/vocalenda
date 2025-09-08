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
import dynamic from "next/dynamic";

// Lazy load non-critical sections
const StatsSection = dynamic(() => import("@/components/ui/stats-section").then(mod => ({ default: mod.StatsSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false
});
const ServicesSection = dynamic(() => import("@/components/ui/services-section").then(mod => ({ default: mod.ServicesSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false
});
const ProcessSection = dynamic(() => import("@/components/ui/process-section").then(mod => ({ default: mod.ProcessSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false
});
const TeamSection = dynamic(() => import("@/components/ui/team-section").then(mod => ({ default: mod.TeamSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false
});
const DemoSection = dynamic(() => import("@/components/ui/demo-section").then(mod => ({ default: mod.DemoSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false
});
const FAQSection = dynamic(() => import("@/components/ui/faq-section").then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false
});
const RoadmapSection = dynamic(() => import("@/components/ui/roadmap-section").then(mod => ({ default: mod.RoadmapSection })), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse" />,
  ssr: false
});
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
        price: "139",
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
                {/* The Hook: Your new, powerful H1 - Optimized for LCP */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-white leading-tight">
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
        <section className="py-16 sm:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
                Everything You Need to Automate Bookings
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Our comprehensive platform handles every aspect of appointment
                scheduling, from initial contact to confirmation.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
              <Card className="border-blue-200 dark:border-slate-800 hover:border-blue-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">Voice AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Natural conversations that feel human. Your customers book
                    appointments as easily as talking to your staff.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 dark:border-slate-800 hover:border-emerald-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Calendar className="h-6 w-6 text-emerald-600" />
                  </div>
                  <CardTitle className="text-lg">Google Calendar</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Real-time availability checking and automatic appointment
                    scheduling
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-purple-200 dark:border-slate-800 hover:border-purple-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg">SMS Confirmations</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Automatic SMS confirmations sent from the same number
                    customers called
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-orange-200 dark:border-slate-800 hover:border-orange-300 transition-colors">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-lg">Multi-Tenant</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Dedicated phone numbers and isolated data for each business
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <StatsSection />

        <ServicesSection />

        <ProcessSection />

        <TeamSection />

        <DemoSection />

        <FAQSection />

        <RoadmapSection />

        <Footer />
      </main>
    </>
  );
}
