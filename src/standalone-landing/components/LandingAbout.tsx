import { ShieldCheck, Award, Wrench, FileCheck, CheckCircle } from 'lucide-react';
import { LANDING_CONFIG } from '../landingConfig';

export default function LandingAbout() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-lightgray scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Local Electrical Craftsmanship Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-navy-500 border border-gray-200 text-xs font-semibold uppercase tracking-wider">
              About Local Electrical Service
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-500 tracking-tight leading-tight">
              Reliable Electrical Work in Duvall &amp; the Snoqualmie Valley
            </h2>

            <div className="space-y-4 text-base text-gray-700 leading-relaxed">
              <p>
                Duvall and the surrounding Snoqualmie Valley present unique electrical requirements for homeowners and commercial properties alike. With a mix of historic homes, rural valley acreage, and modern subdivisions, electrical systems in our area range from older 60-amp and 100-amp panels needing modernization to cutting-edge 200-amp installations for EV chargers and heat pumps.
              </p>
              <p>
                Pacific Northwest winter storms frequently bring heavy winds, fallen branches, and power outages down the valley corridor. We specialize in practical, safety-focused solutions—including generator transfer switches, whole-home surge suppression, and comprehensive circuit diagnostics—to keep local households safe and energized throughout every season.
              </p>
              <p>
                Every electrical installation and repair is executed strictly to Washington State Department of Labor &amp; Industries (L&amp;I) standards and the National Electrical Code (NEC), ensuring that all work is code-compliant, properly permitted, and inspected for long-term peace of mind.
              </p>
            </div>

            {/* Verifiable Safety Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <FileCheck className="h-5 w-5 text-electric-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-500">Permit &amp; Code Compliance</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Full coordination with Washington L&amp;I and local utility requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200/80 shadow-sm">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-navy-500">Safety-First Craftsmanship</h4>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Rigorous load testing, proper grounding, and secure circuit installations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Local Summary Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-white p-8 border border-gray-200 shadow-xl space-y-6">
              <div className="border-b border-gray-100 pb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-electric-600">
                  Service Overview
                </span>
                <h3 className="font-display text-2xl font-bold text-navy-500 mt-1">
                  {LANDING_CONFIG.identity}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  King County &bull; Washington State
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-electric-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-navy-500">Primary Location Base</h5>
                    <p className="text-xs text-gray-600">{LANDING_CONFIG.address.full}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-warmyellow-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-navy-500">Contractor Credentials</h5>
                    <p className="text-xs text-gray-600">{LANDING_CONFIG.licensing}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Wrench className="h-5 w-5 text-electric-500 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-sm font-semibold text-navy-500">Core Services</h5>
                    <p className="text-xs text-gray-600">
                      Panel Upgrades, EV Chargers, Generator Transfer Switches, Repairs &amp; Lighting.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <a
                  href={LANDING_CONFIG.phoneLink}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-navy-500 hover:bg-navy-600 text-white font-bold text-sm shadow transition-colors"
                >
                  <span>Call {LANDING_CONFIG.phoneDisplay}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
