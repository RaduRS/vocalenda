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
