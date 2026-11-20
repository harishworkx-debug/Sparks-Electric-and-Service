import { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { LANDING_CONFIG } from '../landingConfig';

export default function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Service Area', href: '#service-area' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-500/95 backdrop-blur-md shadow-lg border-b border-navy-400/40 py-3'
          : 'bg-navy-500 py-4 border-b border-navy-400/20'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Identity: SERVICE NICHE + LOCATION ONLY */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 text-white font-display font-bold text-xl sm:text-2xl tracking-tight hover:opacity-95 transition-opacity"
            aria-label={`${LANDING_CONFIG.identityFull} Home`}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 text-warmyellow-300 shadow-md">
              <Zap className="h-5 w-5 fill-current" />
            </span>
            <div className="flex flex-col">
              <span className="leading-tight text-white">{LANDING_CONFIG.identity}</span>
              <span className="text-[11px] font-medium tracking-wide uppercase text-electric-300">
                King County &bull; Washington
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-200 hover:text-warmyellow-300 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Phone Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={LANDING_CONFIG.phoneLink}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500 hover:bg-electric-600 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="h-4 w-4 text-warmyellow-300 fill-warmyellow-300" />
              <span>{LANDING_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-navy-400/40 focus:outline-none focus:ring-2 focus:ring-electric-400"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-navy-400/40 space-y-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:bg-navy-400/40 hover:text-warmyellow-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={LANDING_CONFIG.phoneLink}
                className="flex items-center justify-center gap-2.5 w-full py-3 px-4 rounded-lg bg-electric-500 hover:bg-electric-600 text-white font-bold text-base shadow-md transition-all"
              >
                <Phone className="h-5 w-5 text-warmyellow-300 fill-warmyellow-300" />
                <span>Call {LANDING_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
