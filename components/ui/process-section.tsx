import { Settings, Zap, CheckCircle, MessageSquare } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            How Vocalenda Works
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Get up and running in just a few simple steps. Our streamlined process ensures quick deployment and immediate results.
          </p>
        </div>
        
        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Settings className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">1. Setup</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Configure your business details, operating hours, staff member and service offerings.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">2. Integration</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Connect your Google Calendar with permissions to read and write events. Our AI uses your business information to handle calls naturally.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">3. Automation</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Start receiving automated bookings immediately. The AI handles calls, schedules appointments, and sends confirmations without your intervention.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">4. Analytics</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Monitor performance through our dashboard. Track call success rates, booking patterns, and optimize your business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}