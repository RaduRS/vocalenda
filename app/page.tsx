import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Phone, Calendar, MessageSquare, Zap } from "lucide-react";
import { SignUpButton, SignInButton } from "@clerk/nextjs";

export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Vocalenda",
      alternateName: "Vocalenda Voice Booking",
      description: "Multi-tenant voice booking platform that helps businesses automate appointments and free up valuable time. Dedicated phone numbers and isolated data for each business.",
      url: "https://vocalenda.com",
      logo: {
        "@type": "ImageObject",
        url: "https://vocalenda.com/vocalenda-logo.jpg",
        width: 512,
        height: 512
      },
      foundingDate: "2024",
      sameAs: [
        "https://vocalenda.com"
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: "support@vocalenda.com"
      }
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
          url: "https://vocalenda.com/vocalenda-logo.jpg"
        }
      }
    }
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
        <section className="container mx-auto px-4 py-12 sm:py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            {/* Main Headline */}
            <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight px-2">
                Vocalenda
              </h1>
              <h2 className="text-lg sm:text-2xl lg:text-3xl font-medium text-[#6c47ff] dark:text-[#8b7aff] leading-relaxed px-2">
                AI Voice Agent That Never Sleeps
              </h2>
            </div>
            
            {/* Value Proposition */}
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed px-4">
                Your customers call, AI handles everything. Zero missed bookings.
              </p>
              
              {/* Key Benefits */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-slate-500 dark:text-slate-400 px-4">
                <div className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4 text-[#6c47ff] flex-shrink-0" />
                  <span>24/7 Availability</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Calendar className="w-4 h-4 text-[#6c47ff] flex-shrink-0" />
                  <span>Real-time Booking</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-[#6c47ff] flex-shrink-0" />
                  <span>Instant Setup</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <SignUpButton>
                <Button
                  size="lg"
                  className="bg-[#6c47ff] hover:bg-[#5a3dd9] text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
                >
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#6c47ff]/20 text-[#6c47ff] hover:bg-[#6c47ff]/5 dark:border-[#8b7aff]/30 dark:text-[#8b7aff] dark:hover:bg-[#6c47ff]/10 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-200 w-full sm:w-auto"
                >
                  Sign In
                </Button>
              </SignInButton>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container mx-auto px-4 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 mx-auto text-blue-600 dark:text-blue-400 mb-2" />
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
                <Calendar className="h-8 w-8 mx-auto text-green-600 dark:text-green-400 mb-2" />
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
                <MessageSquare className="h-8 w-8 mx-auto text-purple-600 dark:text-purple-400 mb-2" />
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
                <Zap className="h-8 w-8 mx-auto text-orange-600 dark:text-orange-400 mb-2" />
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
        <section className="container mx-auto px-4 pb-12 sm:pb-16">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-slate-100">
              Why Businesses Choose Vocalenda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  24/7
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Never miss a booking opportunity, even after hours
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                  90%
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Reduction in time spent on phone bookings
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  Zero
                </div>
                <p className="text-slate-600 dark:text-slate-400">
                  Double bookings with real-time calendar sync
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-100 dark:bg-slate-900 py-8 sm:py-12">
          <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
            {/* Social Media Links */}
            <div className="flex justify-center space-x-6 mb-6">
              <a
                href="https://www.linkedin.com/company/vocalenda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#6c47ff] dark:text-slate-400 dark:hover:text-[#6c47ff] transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/vocalenda_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#6c47ff] dark:text-slate-400 dark:hover:text-[#6c47ff] transition-colors duration-200"
                aria-label="Follow us on X"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@vocalenda.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#6c47ff] dark:text-slate-400 dark:hover:text-[#6c47ff] transition-colors duration-200"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vocalenda.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-[#6c47ff] dark:text-slate-400 dark:hover:text-[#6c47ff] transition-colors duration-200"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            
            <p className="text-sm sm:text-base mb-4">
              &copy; 2025 Vocalenda. Intelligent voice booking that works around
              the clock.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <a
                href="/privacy"
                className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms"
                className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
