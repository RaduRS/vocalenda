"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "setup-time",
    question: "How long does it take to set up an AI receptionist?",
    answer:
      "You can get your AI receptionist up and running within 24-48 hours. The setup process includes configuring your 24/7 call answering rules and integrating your calendar. We provide full support to ensure everything works perfectly for your specific business needs.",
  },
  {
    id: "complex-requests",
    question: "What if a caller has a question the AI can't answer?",
    answer:
      "Our AI receptionist is trained to handle most common customer inquiries and booking requests. If it encounters a complex or unexpected question, it can gracefully transfer the call to a human or take a detailed message. You'll receive instant alerts, and you can customize how your AI phone answering service escalates these calls.",
  },
  {
    id: "data-security",
    question: "Is using an AI phone answering service secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption to secure all data. As a UK-based service, our platform is fully GDPR compliant, ensuring your customer data is always handled privately and securely.",
  },
  {
    id: "integrations",
    question: "Can this AI receptionist integrate with my calendar?",
    answer:
      "Yes. Our AI receptionist integrates directly with Google Calendar for real-time availability checks and automated appointment scheduling. This ensures your voice appointment scheduler never double-books and always has your latest availability.",
  },
  {
    id: "business-types",
    question: "Which businesses benefit from a 24/7 call answering service?",
    answer:
      "Any business that relies on appointments can benefit from an automated receptionist. We specialize in services for barbershops, hair and nail salons, spas, and wellness centers, but our platform is effective for any business looking to capture bookings 24/7, especially outside of standard business hours.",
  },
  {
    id: "pricing",
    question: "How much does an AI receptionist cost in the UK?",
    answer:
      "Our complete AI receptionist service is £139/month. This includes 500 minutes of AI call handling, unlimited SMS confirmations, and a dedicated UK phone number. There is a one-time £399 setup fee for configuration and number porting or setup. No hidden fees. New accounts start with a 30-minute free trial.",
  },
  {
    id: "customization",
    question: "Can I customize my virtual receptionist's voice and script?",
    answer:
      "Yes. You can customize your virtual receptionist's script, tone, and responses to perfectly match your brand's voice. We are also adding a selection of different voice styles to choose from, giving you full control over your customer's call experience.",
  },
];

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Everything you need to know about AI voice booking and how Vocalenda
            works.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item) => {
              const isOpen = openItems.has(item.id);
              return (
                <div
                  key={item.id}
                  className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full p-6 lg:p-8 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200 flex items-center justify-between gap-4"
                  >
                    <h3 className="text-lg lg:text-xl font-bold text-brand-primary-1 pr-4">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-brand-secondary-1" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-brand-secondary-1" />
                      )}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 lg:px-8 pb-6 lg:pb-8">
                      <div className="border-t border-slate-200 dark:border-slate-600 pt-4">
                        <p className="text-brand-primary-2 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Contact for More Questions */}
          <div className="mt-16 text-center">
            <div className="bg-blue-50 rounded-lg p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-slate-600 mb-6">
                Our team is here to help you understand how Vocalenda can
                transform your booking process.
              </p>
              <Button 
                className="bg-blue-600 text-white hover:bg-blue-700 font-medium px-6 py-3 rounded-lg cursor-pointer"
                onClick={() => window.location.href = 'mailto:support@vocalenda.com?subject=Demo Call Request&body=Hi, I would like to schedule a demo call to learn more about Vocalenda.'}
              >
                Schedule a Demo Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
