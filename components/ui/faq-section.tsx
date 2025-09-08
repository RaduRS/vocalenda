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
    question: "How quickly can I get Vocalenda set up for my business?",
    answer:
      "Most businesses are up and running within 24-48 hours. Our setup process includes account configuration and Google Calendar integration. I'll personally help you if needed to ensure everything works perfectly for your specific needs.",
  },
  {
    id: "complex-requests",
    question: "What happens if the AI can't handle a complex request?",
    answer:
      "Our AI is designed to handle 95%+ of booking scenarios, but when it encounters something complex, it gracefully transfers the call to your team or takes a detailed message. You'll receive immediate notifications and can customize escalation rules based on your preferences.",
  },
  {
    id: "data-security",
    question: "Is my customer data secure and private?",
    answer:
      "Absolutely. We use enterprise-grade encryption for all data. Customer information is never shared, and all conversations are processed securely. All data is stored in compliance with GDPR requirements.",
  },
  {
    id: "integrations",
    question: "Can Vocalenda integrate with my existing calendar system?",
    answer:
      "Yes! We currently integrate with Google Calendar for real-time availability checking and automatic appointment booking. The integration is plug-and-play with no technical expertise required.",
  },
  {
    id: "business-types",
    question: "What types of businesses benefit most from AI voice booking?",
    answer:
      "Currently focusing on barbershops, hair salons, nail salons, spas & wellness centers, and massage therapists. More business types will be added in the future. Particularly effective for businesses that receive high call volumes or want to capture bookings outside business hours.",
  },
  {
    id: "pricing",
    question: "How much does Vocalenda cost and what's included?",
    answer:
      "£109/month includes everything: 500 minutes of AI calls + unlimited SMS confirmations + dedicated phone number. No hidden fees, no surprises. Plus a £399 setup fee for initial configuration and phone number setup. You can optionally redirect your existing business calls to the new AI number.",
  },
  {
    id: "customization",
    question: "Can I customize how the AI speaks and what it says?",
    answer:
      "Yes! You can customize the AI's personality, tone, speaking style, and specific responses. Set business rules and the AI learns your preferences to maintain consistency with your brand voice. Voice options are coming soon.",
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
