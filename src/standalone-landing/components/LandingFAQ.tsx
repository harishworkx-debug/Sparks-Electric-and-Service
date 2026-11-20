import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { LANDING_CONFIG } from '../landingConfig';

export default function LandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 text-electric-600 text-xs font-semibold uppercase tracking-wider mb-3">
            Local Electrical Q&amp;A
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Common questions from Duvall and Snoqualmie Valley homeowners about permits, panel upgrades, EV chargers, and emergency outages.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {LANDING_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-electric-400 bg-electric-50/20 shadow-sm'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 font-display text-base sm:text-lg font-bold text-navy-500">
                    <HelpCircle className={`h-5 w-5 shrink-0 ${isOpen ? 'text-electric-500' : 'text-gray-400'}`} />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-electric-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm sm:text-base text-gray-600 leading-relaxed pl-14">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Box */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-lightgray border border-gray-200">
          <p className="text-sm font-medium text-gray-700">
            Have a question about your specific wiring or breaker setup?
          </p>
          <a
            href={LANDING_CONFIG.phoneLink}
            className="mt-3 inline-flex items-center gap-2 text-base font-bold text-electric-600 hover:text-electric-700"
          >
            <Phone className="h-4 w-4" />
            <span>Call {LANDING_CONFIG.phoneDisplay} to discuss your electrical project</span>
          </a>
        </div>
      </div>
    </section>
  );
}
