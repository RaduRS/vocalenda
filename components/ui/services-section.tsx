import { Phone, Calendar, Zap, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ServicesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Comprehensive AI Voice Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Everything you need to automate your appointment booking with intelligent voice technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <Card className="border border-blue-200 hover:border-blue-300 transition-colors duration-200">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-slate-900">AI Voice Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 leading-relaxed text-sm">
                Advanced conversational AI that handles appointment booking naturally. Understands context, manages scheduling conflicts, and provides professional customer service.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Natural conversation flow
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Context-aware responses
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Professional voice quality
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-emerald-200 hover:border-emerald-300 transition-colors duration-200">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-slate-900">Smart Scheduling</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 leading-relaxed text-sm">
                Seamless integration with Google Calendar for real-time availability checking and automatic appointment booking. Handles scheduling conflicts intelligently.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Google Calendar integration
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Real-time availability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Conflict resolution
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-purple-200 hover:border-purple-300 transition-colors duration-200">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-slate-900">Business Automation</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 leading-relaxed text-sm">
                Streamline your workflow with automated appointment confirmations, reminders, and follow-ups. Reduce no-shows and improve customer satisfaction.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Automated confirmations
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  SMS reminders
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  No-show reduction
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border border-orange-200 hover:border-orange-300 transition-colors duration-200">
            <CardHeader className="text-center pb-4">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-slate-900">Analytics & Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-600 leading-relaxed text-sm">
                Comprehensive dashboard with call analytics, booking patterns, and performance metrics. Make data-driven decisions to optimize your business.
              </CardDescription>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Call performance metrics
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Booking pattern analysis
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                  Performance optimization
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}