import { ShieldCheck, MapPin, CheckCircle, Search, Sparkles } from 'lucide-react';
import { LANDING_CONFIG } from '../landingConfig';

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  MapPin,
  CheckCircle,
  Search,
};

export default function LandingWhyUs() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-lightgray scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-navy-500 border border-gray-200 text-xs font-semibold uppercase tracking-wider mb-3">
            Standards &amp; Workmanship
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 tracking-tight">
            Why Choose Our Local Electrical Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            We focus on genuine electrical craftsmanship, strict safety compliance, and clear communication on every project—large or small.
          </p>
        </div>

        {/* 4 Verified Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LANDING_CONFIG.valuePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="flex items-start gap-5 p-7 rounded-2xl bg-white border border-gray-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-navy-500">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Callout Banner */}
        <div className="mt-12 rounded-2xl bg-white p-6 sm:p-8 border border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-display font-bold text-lg text-navy-500">
              Have questions about electrical safety or permitting in Duvall?
            </h4>
            <p className="text-sm text-gray-600">
              Speak with a licensed professional to review your project scope and code requirements.
            </p>
          </div>
          <a
            href={LANDING_CONFIG.phoneLink}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-bold text-sm shadow transition-colors"
          >
            <span>Call {LANDING_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
