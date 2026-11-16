import { Link } from 'react-router-dom';
import {
  Zap,
  Phone,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { PHONE_DISPLAY, PHONE_LINK, BUSINESS_NAME } from '@/data/services';
import { services } from '@/data/services';
import { locations } from '@/data/locations';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-500 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link to="/" onClick={closeAll} className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 transition-transform group-hover:scale-105">
              <Zap className="h-6 w-6 text-warmyellow-400" fill="currentColor" />
            </div>
            <div className="hidden sm:block">
              <span className="block font-display text-lg font-bold leading-tight">Sparks Electric</span>
              <span className="block text-xs text-navy-100">and Service</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium hover:text-warmyellow-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="px-3 py-2 text-sm font-medium hover:text-warmyellow-400 transition-colors">
              About Us
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-warmyellow-400 transition-colors">
                Electrical Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full w-72 bg-white text-navy-500 rounded-lg shadow-xl py-2 animate-slide-down">
                  <Link to="/services" className="block px-4 py-2 text-sm font-semibold hover:bg-lightgray transition-colors">
                    All Electrical Services
                  </Link>
                  <div className="my-1 border-t border-gray-100" />
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}-duvall-wa`}
                      className="block px-4 py-2 text-sm hover:bg-lightgray transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-warmyellow-400 transition-colors">
                Service Areas
                <ChevronDown className="h-4 w-4" />
              </button>
              {areasOpen && (
                <div className="absolute left-0 top-full w-56 bg-white text-navy-500 rounded-lg shadow-xl py-2 animate-slide-down">
                  <Link to="/service-areas" className="block px-4 py-2 text-sm font-semibold hover:bg-lightgray transition-colors">
                    All Service Areas
                  </Link>
                  <div className="my-1 border-t border-gray-100" />
                  {locations.map((l) => (
                    <Link
                      key={l.slug}
                      to={`/${l.slug}`}
                      className="block px-4 py-2 text-sm hover:bg-lightgray transition-colors"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" className="px-3 py-2 text-sm font-medium hover:text-warmyellow-400 transition-colors">
              Guides
            </Link>
            <Link to="/contact" className="px-3 py-2 text-sm font-medium hover:text-warmyellow-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Call Button */}
          <a
            href={PHONE_LINK}
            className="hidden lg:flex items-center gap-2 rounded-lg bg-warmyellow-400 px-5 py-2.5 text-sm font-bold text-navy-500 transition-all hover:bg-warmyellow-300 hover:shadow-lg"
          >
            <Phone className="h-4 w-4" />
            Call {PHONE_DISPLAY}
          </a>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-navy-500 border-t border-navy-400 max-h-[calc(100vh-4rem)] overflow-y-auto animate-slide-down">
          <nav className="px-4 py-4 space-y-1">
            <Link to="/" onClick={closeAll} className="block py-2.5 text-base font-medium hover:text-warmyellow-400">
              Home
            </Link>
            <Link to="/about" onClick={closeAll} className="block py-2.5 text-base font-medium hover:text-warmyellow-400">
              About Us
            </Link>

            <div>
              <button
                className="flex w-full items-center justify-between py-2.5 text-base font-medium"
                onClick={() => setServicesOpen(!servicesOpen)}
              >
                Electrical Services
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1">
                  <Link to="/services" onClick={closeAll} className="block py-2 text-sm hover:text-warmyellow-400">
                    All Electrical Services
                  </Link>
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/${s.slug}-duvall-wa`}
                      onClick={closeAll}
                      className="block py-2 text-sm hover:text-warmyellow-400"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="flex w-full items-center justify-between py-2.5 text-base font-medium"
                onClick={() => setAreasOpen(!areasOpen)}
              >
                Service Areas
                <ChevronDown className={`h-4 w-4 transition-transform ${areasOpen ? 'rotate-180' : ''}`} />
              </button>
              {areasOpen && (
                <div className="pl-4 space-y-1">
                  <Link to="/service-areas" onClick={closeAll} className="block py-2 text-sm hover:text-warmyellow-400">
                    All Service Areas
                  </Link>
                  {locations.map((l) => (
                    <Link
                      key={l.slug}
                      to={`/${l.slug}`}
                      onClick={closeAll}
                      className="block py-2 text-sm hover:text-warmyellow-400"
                    >
                      {l.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/blog" onClick={closeAll} className="block py-2.5 text-base font-medium hover:text-warmyellow-400">
              Electrical Guides
            </Link>

            <Link to="/contact" onClick={closeAll} className="block py-2.5 text-base font-medium hover:text-warmyellow-400">
              Contact
            </Link>

            <a
              href={PHONE_LINK}
              onClick={closeAll}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-warmyellow-400 px-5 py-3 text-base font-bold text-navy-500"
            >
              <Phone className="h-5 w-5" />
              Call {PHONE_DISPLAY}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
