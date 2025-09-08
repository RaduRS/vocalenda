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
              Configure your business details, operating hours, and service offerings. Connect your Google Calendar for seamless integration.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-slate-700" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">2. Integration</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Our AI uses your business information to handle calls naturally. Phone number forwarding is configured automatically.
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
        
        {/* Implementation Timeline */}
        <div className="bg-slate-50 rounded-lg p-8 lg:p-12 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">
            Implementation Timeline
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                1
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-slate-900">Account Setup & Configuration</h4>
                  <span className="text-sm text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
                    Day 1
                  </span>
                </div>
                <p className="text-slate-600 text-sm">
                  Business profile creation, calendar integration, and AI configuration with your business information
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-slate-700 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                2
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-slate-900">Testing & Optimization</h4>
                  <span className="text-sm text-slate-600 bg-slate-200 px-3 py-1 rounded-full">
                    Day 2
                  </span>
                </div>
                <p className="text-slate-600 text-sm">
                  Test calls, workflow validation, and final adjustments
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                ✓
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-slate-900">Go Live</h4>
                  <span className="text-sm text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    Day 3+
                  </span>
                </div>
                <p className="text-slate-600 text-sm">
                  Full automation active with ongoing monitoring and support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}