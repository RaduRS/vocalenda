import { Phone, Calendar, MessageSquare, Shield, Clock, CheckCircle } from "lucide-react";

export function DemoSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            See Vocalenda in Action
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Experience how our AI handles real appointment booking conversations with natural, professional interactions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Live Demo Conversation */}
          <div className="bg-white rounded-lg p-6 lg:p-8 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Phone className="w-5 h-5 text-slate-700" />
              Live Conversation Demo
            </h3>
            
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-sm font-semibold">C</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 flex-1">
                  <p className="text-sm text-blue-900">
                    Hi, I&rsquo;d like to schedule an appointment for next Tuesday.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">AI</span>
                </div>
                <div className="bg-slate-100 rounded-lg p-3 flex-1">
                  <p className="text-sm text-slate-900">
                    I&rsquo;d be happy to help you schedule an appointment. Let me check our availability for next Tuesday. What time would work best for you?
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 text-sm font-semibold">C</span>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 flex-1">
                  <p className="text-sm text-blue-900">
                    Around 2 PM would be perfect.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-semibold">AI</span>
                </div>
                <div className="bg-slate-100 rounded-lg p-3 flex-1">
                  <p className="text-sm text-slate-900">
                    Perfect! I have Tuesday, January 16th at 2:00 PM available. I&rsquo;ll book that for you right now and send a confirmation SMS to this number.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Demo Interface */}
          <div className="bg-white rounded-lg p-6 lg:p-8 border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-slate-700" />
              Real-time Integration
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-green-800">Calendar Sync Active</span>
                </div>
                <p className="text-xs text-green-700">
                  Connected to Google Calendar - checking real-time availability
                </p>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <MessageSquare className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-800">Natural Conversation</span>
                </div>
                <p className="text-xs text-blue-700">
                  AI understanding context and responding naturally
                </p>
              </div>
              
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-semibold text-purple-800">SMS Confirmation</span>
                </div>
                <p className="text-xs text-purple-700">
                  Automatic confirmation and reminder messages
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature Highlights */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">
            Key Capabilities
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 text-center border border-slate-200">
              <Clock className="w-6 h-6 mx-auto mb-4 text-slate-700" />
              <h4 className="font-semibold mb-2 text-slate-900">Always Ready</h4>
              <p className="text-sm text-slate-600">
                Never miss a booking opportunity, even outside business hours
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center border border-slate-200">
              <Phone className="w-6 h-6 mx-auto mb-4 text-slate-700" />
              <h4 className="font-semibold mb-2 text-slate-900">Voice-Only Support</h4>
              <p className="text-sm text-slate-600">
                Professional phone-based booking system for all appointment types
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center border border-slate-200">
              <Shield className="w-6 h-6 mx-auto mb-4 text-slate-700" />
              <h4 className="font-semibold mb-2 text-slate-900">Data Security</h4>
              <p className="text-sm text-slate-600">
                Enterprise-grade security for beauty and wellness businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}