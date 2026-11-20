import { MapPin, Navigation, Phone, CheckCircle } from 'lucide-react';
import { LANDING_CONFIG } from '../landingConfig';

export default function LandingServiceArea() {
  return (
    <section id="service-area" className="py-20 lg:py-28 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-50 text-electric-600 text-xs font-semibold uppercase tracking-wider mb-3">
            Service Coverage
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 tracking-tight">
            Service Areas: Duvall &amp; Surrounding Communities
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            Based directly in Duvall, WA, we proudly provide professional electrical installations, panel upgrades, and repairs to homes and businesses across the Snoqualmie Valley and neighboring Eastside areas.
          </p>
        </div>

        {/* Primary Hub Spotlight */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-navy-500 via-navy-600 to-navy-700 p-8 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-electric-500 text-xs font-bold uppercase tracking-wider text-white">
                <MapPin className="h-3.5 w-3.5" />
                <span>Primary Base: Duvall, WA</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Local Electrician in Duvall, WA (98019)
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                {LANDING_CONFIG.primaryLocation.description} Whether you need an urgent breaker repair, an EV charger on Big Rock Road, or a 200A service upgrade off Stewart Road, our electricians are nearby and ready to help.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-gray-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  King County L&amp;I Jurisdiction
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-warmyellow-400" />
                  Puget Sound Energy (PSE) Grid
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch gap-3">
              <a
                href={LANDING_CONFIG.phoneLink}
                className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-electric-500 hover:bg-electric-600 text-white font-bold text-base shadow transition-all"
              >
                <Phone className="h-5 w-5 text-warmyellow-300 fill-warmyellow-300" />
                <span>Call {LANDING_CONFIG.phoneDisplay}</span>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
              >
                <span>Check Availability</span>
              </a>
            </div>
          </div>
        </div>

        {/* Nearby Communities Grid (8 genuine locations) */}
        <div className="mb-14">
          <h4 className="text-base font-bold text-navy-500 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Navigation className="h-4 w-4 text-electric-500" />
            <span>Genuinely Served Nearby Washington Communities</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {LANDING_CONFIG.nearbyLocations.map((loc) => (
              <div
                key={loc.name}
                className="p-5 rounded-xl bg-lightgray border border-gray-200/80 hover:border-electric-400 hover:bg-white hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <h5 className="font-display font-bold text-base text-navy-500">
                    {loc.name}, {loc.state}
                  </h5>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-gray-200/70 text-gray-700">
                    {loc.county.replace(' County', '')}
                  </span>
                </div>
                <p className="text-xs text-gray-500">ZIP: {loc.zip}</p>
                <div className="mt-3 pt-3 border-t border-gray-200/60 flex items-center justify-between text-xs font-semibold text-electric-600">
                  <span>Available for Service</span>
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Google Maps Embed Section */}
        <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
          <div className="bg-navy-500 px-6 py-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <MapPin className="h-4 w-4 text-warmyellow-400" />
              <span>Service Location Center: Duvall, WA 98019</span>
            </div>
            <span className="text-xs text-gray-300 hidden sm:inline">
              Serving the entire Snoqualmie Valley
            </span>
          </div>
          <iframe
            src={LANDING_CONFIG.mapsEmbedSrc}
            title="Service Area Map for Duvall, WA"
            className="w-full h-80 border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
