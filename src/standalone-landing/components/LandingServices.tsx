import {
  Wrench,
  ShieldAlert,
  BatteryCharging,
  Plug,
  Zap,
  Home,
  Check,
  ArrowRight,
} from 'lucide-react';
import { LANDING_CONFIG } from '../landingConfig';

const iconMap: Record<string, React.ElementType> = {
  Wrench,
  ShieldAlert,
  BatteryCharging,
  Plug,
  Zap,
  Home,
};

export default function LandingServices() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 text-electric-600 text-xs font-semibold uppercase tracking-wider mb-3">
            Local Electrical Solutions
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 tracking-tight">
            Electrical Services in Duvall, WA
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            All electrical work is performed by qualified electricians in accordance with Washington State L&amp;I codes, ensuring lasting safety and reliability for your home or business.
          </p>
        </div>

        {/* Service Cards Grid (6 genuine services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LANDING_CONFIG.services.map((service) => {
            const IconComponent = iconMap[service.iconName] || Zap;
            return (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-lightgray p-7 border border-gray-200/80 hover:border-electric-400 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Service Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-navy-500 text-warmyellow-400 shadow-md group-hover:bg-electric-500 group-hover:text-white transition-colors">
                    <IconComponent className="h-7 w-7" />
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="mt-6 font-display text-xl font-bold text-navy-500 group-hover:text-electric-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="mt-6 space-y-2.5 pt-4 border-t border-gray-200">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Link */}
                <div className="mt-8 pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-electric-600 group-hover:text-electric-700 transition-colors"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Services Bottom Callout */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-navy-500 to-navy-600 p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-xl font-bold font-display">Need custom electrical work in Duvall?</h3>
            <p className="text-sm text-gray-300 mt-1">
              Call us directly to discuss your specific electrical layout, troubleshooting requirements, or remodel plans.
            </p>
          </div>
          <a
            href={LANDING_CONFIG.phoneLink}
            className="shrink-0 inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-electric-500 hover:bg-electric-600 font-bold text-sm text-white shadow-md transition-all"
          >
            <span>Call {LANDING_CONFIG.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
