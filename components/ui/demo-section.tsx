import { Phone, Calendar, MessageSquare, Shield, Clock, CheckCircle, Bot, User } from "lucide-react";

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
              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="max-w-xs sm:max-w-sm lg:max-w-md px-4 py-2 rounded-lg break-words overflow-hidden bg-blue-500 text-white rounded-br-none">
                  <div className="text-sm break-words">
                    Hi, I&rsquo;d like to schedule an appointment for next Tuesday.
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
              </div>
              
              {/* AI Response */}
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="max-w-xs sm:max-w-sm lg:max-w-md px-4 py-2 rounded-lg break-words overflow-hidden bg-white border border-gray-200 text-gray-800 rounded-bl-none">
                  <div className="text-sm break-words">
                    I&rsquo;d be happy to help you schedule an appointment! What time works best for you on Tuesday?
                  </div>
                </div>
              </div>
              
              {/* User Message */}
              <div className="flex gap-3 justify-end">
                <div className="max-w-xs sm:max-w-sm lg:max-w-md px-4 py-2 rounded-lg break-words overflow-hidden bg-blue-500 text-white rounded-br-none">
                  <div className="text-sm break-words">
                    How about 2 PM?
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
              </div>
              
              {/* AI Response */}
              <div className="flex gap-3 justify-start">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Bot className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <div className="max-w-xs sm:max-w-sm lg:max-w-md px-4 py-2 rounded-lg break-words overflow-hidden bg-white border border-gray-200 text-gray-800 rounded-bl-none">
                  <div className="text-sm break-words">
                    Perfect! I have Tuesday, January 16th at 2:00 PM available. I&rsquo;ll book that for you right now and send a confirmation SMS to this number.
                  </div>
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
                Phone-based booking system for all appointment types
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center border border-slate-200">
              <Shield className="w-6 h-6 mx-auto mb-4 text-slate-700" />
              <h4 className="font-semibold mb-2 text-slate-900">Data Security</h4>
              <p className="text-sm text-slate-600">
                Enterprise-grade security for all businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}