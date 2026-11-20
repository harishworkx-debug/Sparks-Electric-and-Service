import { Zap, Phone, MapPin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LANDING_CONFIG } from '../landingConfig';

export default function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-gray-300 border-t border-navy-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Identity & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white font-display font-bold text-xl tracking-tight">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric-500 text-warmyellow-300">
                <Zap className="h-5 w-5 fill-current" />
              </span>
              <span>{LANDING_CONFIG.identity}</span>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Professional, code-compliant electrical repairs, 200A panel upgrades, EV charger installations, and generator interlock switches serving Duvall and Snoqualmie Valley.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
              <ShieldCheck className="h-4 w-4 shrink-0" />
              <span>{LANDING_CONFIG.licensing}</span>
            </div>
          </div>

          {/* Col 2: Navigation Anchors */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#services" className="hover:text-warmyellow-300 transition-colors">
                  Electrical Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-warmyellow-300 transition-colors">
                  About Local Service
                </a>
              </li>
              <li>
                <a href="#service-area" className="hover:text-warmyellow-300 transition-colors">
                  Duvall Service Area
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-warmyellow-300 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-warmyellow-300 transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-warmyellow-300 transition-colors">
                  Request an Estimate
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Specialized Services
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>200-Amp Electrical Panel Upgrades</li>
              <li>Level 2 Home EV Charger Installation</li>
              <li>Generator Transfer Switches &amp; Interlocks</li>
              <li>Circuit Breaker &amp; Outlet Troubleshooting</li>
              <li>Recessed LED Lighting &amp; Ceiling Fans</li>
              <li>Whole-Home Wiring &amp; Remodel Circuits</li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact &amp; Location
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={LANDING_CONFIG.phoneLink}
                  className="flex items-center gap-2 font-bold text-warmyellow-300 hover:text-white text-sm"
                >
                  <Phone className="h-4 w-4" />
                  <span>{LANDING_CONFIG.phoneDisplay}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="h-4 w-4 shrink-0 text-electric-400 mt-0.5" />
                <span>
                  {LANDING_CONFIG.address.street}, {LANDING_CONFIG.address.city}, {LANDING_CONFIG.address.state} {LANDING_CONFIG.address.zip}
                </span>
              </li>
              <li className="text-gray-400">
                Primary Hub: Duvall (King County, WA)
              </li>
              <li className="text-gray-400">
                Mon &ndash; Sat: 7:00 AM &ndash; 7:00 PM
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Existing Legal Links */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            &copy; {currentYear} {LANDING_CONFIG.identity}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-gray-300 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
