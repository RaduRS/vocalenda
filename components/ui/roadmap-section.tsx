import { Calendar, MessageSquare, Globe, Zap, Smartphone, BarChart3 } from "lucide-react";
import { SignUpButton } from "@clerk/nextjs";

interface RoadmapItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  quarter: string;
  status: "planned" | "in-development" | "coming-soon";
}

const roadmapItems: RoadmapItem[] = [
  {
    id: "web-chat",
    title: "Web Chat Integration",
    description: "AI-powered chat widget for your website with seamless voice-to-chat handoff and booking capabilities.",
    icon: MessageSquare,
    quarter: "Q1 2026",
    status: "in-development"
  },
  {
    id: "multi-language",
    title: "Multi-Language Support",
    description: "Support for Spanish, French, German, and other major languages with native accent recognition.",
    icon: Globe,
    quarter: "Q2 2026",
    status: "planned"
  },
  {
    id: "recurring-patterns",
    title: "Recurring Appointment Patterns",
    description: "Smart scheduling for recurring appointments with customer preference learning and automatic rebooking.",
    icon: Calendar,
    quarter: "Q2 2026",
    status: "planned"
  },
  {
    id: "apple-calendar",
    title: "Apple Calendar Integration",
    description: "Seamless integration with Apple Calendar for automatic syncing and native iOS scheduling experience.",
    icon: Smartphone,
    quarter: "Q3 2026",
    status: "planned"
  },
  {
    id: "ai-insights",
    title: "Predictive Analytics",
    description: "AI-powered insights for demand forecasting, optimal scheduling, and customer behavior analysis.",
    icon: BarChart3,
    quarter: "Q3 2026",
    status: "planned"
  },
  {
    id: "workflow-automation",
    title: "Advanced Workflow Automation",
    description: "Custom workflow builder with triggers, actions, and integrations for complex business processes.",
    icon: Zap,
    quarter: "Q4 2026",
    status: "coming-soon"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "in-development":
      return "bg-emerald-50 text-emerald-700 border border-emerald-200";
    case "planned":
      return "bg-blue-50 text-blue-700 border border-blue-200";
    case "coming-soon":
      return "bg-purple-50 text-purple-700 border border-purple-200";
    default:
      return "bg-slate-50 text-slate-700 border border-slate-200";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "in-development":
      return "In Development";
    case "planned":
      return "Planned";
    case "coming-soon":
      return "Coming Soon";
    default:
      return "Planned";
  }
};

export function RoadmapSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Product Roadmap
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Exciting features coming to Vocalenda in 2026. We&rsquo;re constantly innovating to make AI voice booking even more powerful for your business.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {roadmapItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-lg p-6 lg:p-8 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-blue-50">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                      </span>
                      <span className="text-sm font-medium text-slate-500">
                        {item.quarter}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Want to influence our roadmap?
              </h3>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                Join our early adopter program and help shape the future of AI voice booking. Get early access to new features and direct input on development priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <SignUpButton>
                  <button className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer">
                    Sign Up
                  </button>
                </SignUpButton>
                <button 
                  className="border border-blue-300 text-blue-700 hover:bg-blue-100 font-medium px-6 py-3 rounded-lg transition-colors cursor-pointer"
                  onClick={() => window.location.href = 'mailto:support@vocalenda.com?subject=Feature Request&body=Hi, I would like to request a new feature for Vocalenda:'}
                >
                  Request Feature
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}