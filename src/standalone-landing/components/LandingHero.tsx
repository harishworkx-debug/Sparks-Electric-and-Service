import { Phone, ArrowRight, ShieldCheck, MapPin, Zap, CheckCircle2 } from 'lucide-react';
import { LANDING_CONFIG } from '../landingConfig';

export default function LandingHero() {
  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-navy-500 via-navy-600 to-navy-700 text-white overflow-hidden"
    >
      {/* Subtle background glow effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-electric-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Location & License Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-400/40 border border-electric-400/30 text-xs sm:text-sm font-medium text-electric-200">
              <span className="flex h-2 w-2 rounded-full bg-warmyellow-400 animate-pulse" />
              <span>Duvall &amp; Snoqualmie Valley, WA &bull; Licensed Electrical Contractor</span>
            </div>

            {/* H1 Headline: Strictly SERVICE + LOCATION */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
              Professional <span className="text-warmyellow-400">Electrician</span> in Duvall, WA
            </h1>

            {/* Natural, honest service description */}
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Safe, code-compliant residential and commercial electrical services for Duvall homeowners and local businesses. From emergency troubleshooting and 200A panel upgrades to EV chargers and storm generator transfer switches.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={LANDING_CONFIG.phoneLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-bold text-lg shadow-lg hover:shadow-electric-500/30 transition-all transform hover:-translate-y-0.5"
              >
                <Phone className="h-5 w-5 text-warmyellow-300 fill-warmyellow-300" />
                <span>Call {LANDING_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-navy-400/50 hover:bg-navy-400/80 border border-white/20 text-white font-semibold text-base transition-colors"
              >
                <span>Request Service</span>
                <ArrowRight className="h-4 w-4 text-warmyellow-300" />
              </a>
            </div>

            {/* Verified Quick Highlights */}
            <div className="pt-6 border-t border-navy-400/40 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>WA L&amp;I Licensed</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300">
                <MapPin className="h-4 w-4 text-warmyellow-400 shrink-0" />
                <span>Duvall, WA 98019</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="h-4 w-4 text-electric-400 shrink-0" />
                <span>Clear Upfront Pricing</span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Project Hero Image & Callout */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Image Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-navy-400/40 aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={LANDING_CONFIG.heroImage}
                  alt={LANDING_CONFIG.heroImageAlt}
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy-500/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 text-warmyellow-300">
                      <Zap className="h-5 w-5 fill-current" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Serving Snoqualmie Valley</p>
                      <p className="text-sm font-bold text-white">Residential &amp; Commercial</p>
                    </div>
                  </div>
                  <a
                    href={LANDING_CONFIG.phoneLink}
                    className="text-xs font-bold text-warmyellow-300 hover:text-white underline"
                  >
                    Call Now &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
