import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Calendar, MessageSquare, Zap } from "lucide-react";
import { SignUpButton, SignInButton } from "@clerk/nextjs";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Vocalenda",
    "description": "Voice booking platform that helps businesses automate appointments and free up valuable time. Let customers book naturally through AI-powered phone conversations.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "GBP"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
          <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <Badge variant="secondary" className="mb-4">
              🚀 Voice AI Booking Platform
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight">
              <span className="text-black dark:text-white">Vo</span>
              <span className="text-purple-600 dark:text-purple-400">cal</span>
              <span className="text-blue-600 dark:text-blue-400">enda</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
              Voice booking platform that helps businesses automate appointments and free up valuable time. Let customers book naturally through AI-powered phone conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6 sm:mt-8 px-4">
              <SignUpButton>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                  Get Started
                </Button>
              </SignUpButton>
              <SignInButton>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Sign in
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
                 Natural conversations with GPT-4o-mini AI for seamless booking experiences
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
                Real-time availability checking and automatic appointment scheduling
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
                Automatic SMS confirmations sent from the same number customers called
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

         {/* Tech Stack */}
         <section className="container mx-auto px-4 pb-12 sm:pb-16">
           <div className="text-center">
             <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-slate-900 dark:text-slate-100">
               Built with Modern Technology
             </h2>
             <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
                {[
                  "Next.js",
                  "TypeScript",
                  "Supabase",
                  "Twilio",
                  "GPT-4o-mini",
                  "Google Calendar",
                  "shadcn/ui",
                  "Tailwind CSS"
                ].map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs sm:text-sm py-1 px-2 sm:px-3">
                    {tech}
                  </Badge>
                ))}
              </div>
           </div>
         </section>

         {/* Footer */}
         <footer className="bg-slate-100 dark:bg-slate-900 py-8 sm:py-12">
           <div className="container mx-auto px-4 text-center text-slate-600 dark:text-slate-400">
             <p className="text-sm sm:text-base">&copy; 2025 Vocalenda. Multi-tenant voice booking automation for modern businesses.</p>
           </div>
         </footer>
       </main>
    </>
  );
}
