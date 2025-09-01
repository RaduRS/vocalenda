import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Mail, Phone } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            🚧 Coming Soon
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-black dark:text-white">Vo</span>
            <span className="text-purple-600 dark:text-purple-400">cal</span>
            <span className="text-blue-600 dark:text-blue-400">enda</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 px-4">
            We&apos;re working hard to bring you the future of voice-powered appointment booking. 
            Our AI-driven platform will revolutionize how businesses handle customer appointments.
          </p>
          
          <Card className="border-slate-200 dark:border-slate-800 max-w-md mx-auto mt-8">
            <CardHeader className="text-center">
              <Clock className="h-12 w-12 mx-auto text-blue-600 dark:text-blue-400 mb-4" />
              <CardTitle className="text-xl">Launch Timeline</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-base">
                Expected launch: <strong>Q2 2025</strong>
                <br />
                Stay tuned for updates!
              </CardDescription>
            </CardContent>
          </Card>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-lg mx-auto">
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="text-center pb-3">
                <Phone className="h-6 w-6 mx-auto text-green-600 dark:text-green-400 mb-2" />
                <CardTitle className="text-sm">Voice AI Booking</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-xs text-center">
                  Natural phone conversations powered by advanced AI
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="border-slate-200 dark:border-slate-800">
              <CardHeader className="text-center pb-3">
                <Mail className="h-6 w-6 mx-auto text-purple-600 dark:text-purple-400 mb-2" />
                <CardTitle className="text-sm">Smart Integration</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-xs text-center">
                  Seamless calendar and SMS confirmation system
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 text-sm text-slate-500 dark:text-slate-400">
            <p>For early access inquiries, please contact us at:</p>
            <p className="font-medium text-slate-700 dark:text-slate-300 mt-1">
              hello@vocalenda.com
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}