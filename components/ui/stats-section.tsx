import { Zap, Clock, Shield, CheckCircle } from "lucide-react";

export function StatsSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Built for Performance
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Engineered with enterprise-grade specifications and cutting-edge AI technology.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="bg-white rounded-lg p-6 lg:p-8 text-center border border-emerald-200 hover:border-emerald-300 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 bg-emerald-50 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold mb-2 text-slate-900">99.9%</div>
            <div className="text-sm lg:text-base font-medium text-slate-600">AI Accuracy</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 lg:p-8 text-center border border-blue-200 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 bg-blue-50 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold mb-2 text-slate-900">&lt;2s</div>
            <div className="text-sm lg:text-base font-medium text-slate-600">Response Time</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 lg:p-8 text-center border border-purple-200 hover:border-purple-300 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 bg-purple-50 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold mb-2 text-slate-900">100%</div>
            <div className="text-sm lg:text-base font-medium text-slate-600">GDPR Compliant</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 lg:p-8 text-center border border-orange-200 hover:border-orange-300 transition-colors">
            <div className="w-12 h-12 mx-auto mb-4 bg-orange-50 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl lg:text-3xl font-bold mb-2 text-slate-900">99.9%</div>
            <div className="text-sm lg:text-base font-medium text-slate-600">Uptime Target</div>
          </div>
        </div>
      </div>
    </section>
  );
}