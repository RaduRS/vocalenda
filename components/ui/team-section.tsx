import { Zap, Shield, CheckCircle, Clock } from "lucide-react";

export function TeamSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Built by AI & Voice Technology Experts
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our team combines deep expertise in artificial intelligence, voice technology, and business automation to deliver enterprise-grade solutions.
          </p>
        </div>
        
        {/* Expertise Areas */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="text-center bg-white rounded-lg p-6 border border-blue-200 hover:border-blue-300 transition-colors">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">AI & Machine Learning</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Advanced natural language processing that uses your business information to deliver contextual, human-like interactions.
            </p>
          </div>
          
          <div className="text-center bg-white rounded-lg p-6 border border-emerald-200 hover:border-emerald-300 transition-colors">
            <div className="w-12 h-12 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Voice Technology</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Cutting-edge speech recognition and synthesis technology optimized for business communications and appointment scheduling.
            </p>
          </div>
          
          <div className="text-center bg-white rounded-lg p-6 border border-purple-200 hover:border-purple-300 transition-colors">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Business Automation</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
              Deep understanding of business workflows and appointment management systems to create seamless automation solutions.
            </p>
          </div>
        </div>
        
        {/* Company Values */}
        <div className="bg-white rounded-lg p-8 lg:p-12 border border-slate-200">
          <h3 className="text-xl font-semibold text-slate-900 mb-8 text-center">
            Our Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Security First</h4>
              <p className="text-sm text-slate-600">
                GDPR compliant with enterprise-grade security for all customer data
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Reliability</h4>
              <p className="text-sm text-slate-600">
                Enterprise-grade infrastructure with reliable uptime and monitoring systems
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-5 h-5 text-emerald-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Innovation</h4>
              <p className="text-sm text-slate-600">
                Continuously improving AI capabilities with the latest advancements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Simplicity</h4>
              <p className="text-sm text-slate-600">
                Easy setup and management with intuitive interfaces and clear processes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}