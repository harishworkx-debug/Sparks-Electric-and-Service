import { Link } from 'react-router-dom';
import {
  MapPin,
  ArrowRight,
  Zap,
  ShieldCheck,
  Home,
  CheckCircle2,
  Wrench,
  BatteryCharging,
  Plug,
  ShieldAlert,
  AlertTriangle,
  Clock,
  Phone,
  Search,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';
import ReviewsSection from '@/components/ReviewsSection';
import { PHONE_DISPLAY, services, WA_LICENSE_INFO } from '@/data/services';
import { LocationData, getLocation, nearbyLocations, locations } from '@/data/locations';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/structuredData';
import { cityProfiles, getCityPageContent } from '@/data/localSeoContent';

interface LocationPageProps {
  location: LocationData;
}

export default function LocationPage({ location }: LocationPageProps) {
  const cityProfile = cityProfiles[location.citySlug] || cityProfiles['duvall-wa'];
  const cityData = getCityPageContent(location);
  const canonicalPath = `/${location.slug}`;

  const nearby = nearbyLocations[location.slug] || [];
  const nearbyLocs = nearby
    .map((slug) => getLocation(slug))
    .filter((l): l is NonNullable<typeof l> => l !== undefined);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Service Areas', path: '/service-areas' },
    { label: location.name, path: canonicalPath },
  ];

  return (
    <>
      <SEO
        title={cityData.metaTitle}
        description={cityData.metaDescription}
        canonicalPath={canonicalPath}
        structuredData={[
          localBusinessSchema(location.shortName),
          breadcrumbSchema(breadcrumbItems),
          faqSchema(cityData.faqs),
        ]}
      />

      {/* Breadcrumbs */}
      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs
            items={breadcrumbItems.map((item) => ({
              label: item.label,
              href: item.path !== canonicalPath ? item.path : undefined,
            }))}
          />
        </div>
      </div>

      {/* Section 01: Hero with Unique H1 & Introduction */}
      <section className="relative bg-navy-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-navy-500/90 to-navy-500/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-500/20 px-3.5 py-1 text-xs font-medium text-electric-200">
                <MapPin className="h-3.5 w-3.5" />
                {location.name} &bull; {location.county}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5" />
                {cityProfile.utilityShort} Territory
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold text-white leading-tight sm:text-5xl">
              {cityData.h1}
            </h1>
            <p className="mt-6 text-lg text-navy-100 leading-relaxed">
              {cityData.intro1}
            </p>
            <p className="mt-3 text-base text-navy-200 leading-relaxed">
              {cityData.intro2}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                View Electrical Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: Service-Specific Information & Residential Offerings */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Residential Electrical Services in {location.shortName}
            </h2>
            <p className="mt-4 text-base text-navy-300 leading-relaxed">
              {cityData.residentialIntro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-12">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-lightgray border border-gray-100">
              <CheckCircle2 className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-500 font-semibold block">Electrical Repairs & Troubleshooting:</strong>
                <span className="text-navy-300">Diagnostic evaluation for circuit trips, flickering lights, and dead outlets.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-lightgray border border-gray-100">
              <CheckCircle2 className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-500 font-semibold block">Electrical Wiring & Rewiring:</strong>
                <span className="text-navy-300">New circuit additions, remodel wiring, and cloth/knob-and-tube updates.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-lightgray border border-gray-100">
              <CheckCircle2 className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-500 font-semibold block">Lighting & Ceiling Fan Installation:</strong>
                <span className="text-navy-300">Recessed LED pot lights, dimmers, exterior floodlights, and vaulted ceiling fans.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-lightgray border border-gray-100">
              <CheckCircle2 className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-500 font-semibold block">200-Amp Electrical Panel Upgrades:</strong>
                <span className="text-navy-300">Modern breaker box replacements to safely support heat pumps and EV chargers.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-lightgray border border-gray-100">
              <CheckCircle2 className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-500 font-semibold block">Outlet & Switch Installation:</strong>
                <span className="text-navy-300">GFCI/AFCI outlets, dedicated appliance circuits, smart switches, and 240V plugs.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-lightgray border border-gray-100">
              <CheckCircle2 className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-500 font-semibold block">Level 2 EV Charger Installation:</strong>
                <span className="text-navy-300">Dedicated 240V home charging stations for Tesla, ChargePoint, and universal EVs.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-lightgray border border-gray-100">
              <CheckCircle2 className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-500 font-semibold block">Generator Interlocks & Transfer Switches:</strong>
                <span className="text-navy-300">Safe backup power hookups to protect essential heat and water during storms.</span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-lightgray border border-gray-100">
              <CheckCircle2 className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-500 font-semibold block">Circuit Breaker & Surge Protection:</strong>
                <span className="text-navy-300">Replacement of worn breakers and whole-home surge suppression installation.</span>
              </div>
            </div>
          </div>

          {/* Common Electrical Problems */}
          <div className="mt-12 pt-10 border-t border-gray-100">
            <h2 className="font-display text-2xl font-bold text-navy-500 mb-4">
              Electrical Problems That May Require Professional Attention in {location.shortName}
            </h2>
            <p className="text-sm text-navy-300 mb-6 leading-relaxed">
              Some electrical problems should not be ignored. If you notice any of the following symptoms in your {location.shortName} home, an electrical inspection is strongly advised:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cityData.commonProblems.map((prob, i) => (
                <div key={i} className="p-4 rounded-lg bg-lightgray border border-gray-100">
                  <div className="flex items-center gap-2 mb-2 text-warmyellow-600">
                    <AlertTriangle className="h-4 w-4" />
                    <h3 className="font-display text-sm font-bold text-navy-500">{prob.title}</h3>
                  </div>
                  <p className="text-xs text-navy-300 leading-relaxed">{prob.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 03: Local Relevance — Housing, Utility, & Regional Factors */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Electrical Services for {location.shortName} Homes
            </h2>
            <p className="mt-4 text-base text-navy-300 leading-relaxed">
              {cityData.localHomesContext}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 text-white mb-4">
                <Home className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-navy-500 mb-2">
                Housing Landscape
              </h3>
              <p className="text-xs text-navy-300 leading-relaxed">
                {cityProfile.housingProfile}
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warmyellow-400 text-navy-500 mb-4">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-navy-500 mb-2">
                Utility Standards ({cityProfile.utilityShort})
              </h3>
              <p className="text-xs text-navy-400 font-semibold mb-1">
                {cityProfile.utility}
              </p>
              <p className="text-xs text-navy-300 leading-relaxed">
                {cityProfile.utilityNote}
              </p>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white mb-4">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-display text-base font-bold text-navy-500 mb-2">
                Permits & Inspections
              </h3>
              <p className="text-xs text-navy-300 leading-relaxed mb-2">
                {cityProfile.permittingAuthority}
              </p>
              <span className="inline-block text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {WA_LICENSE_INFO}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Process & Customer Expectations */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Our Service Process in {location.shortName}
            </h2>
            <p className="mt-4 text-base text-navy-300">
              Here is what to expect from your initial phone consultation through final circuit testing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-lightgray border border-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-500 text-white font-bold mb-4">
                1
              </div>
              <h3 className="font-display text-base font-bold text-navy-500 mb-2">
                Phone Consultation
              </h3>
              <p className="text-xs text-navy-300 leading-relaxed">
                Call (206) 476-7798 to describe your electrical problem, project timeline, and specific property details.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-lightgray border border-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-500 text-white font-bold mb-4">
                2
              </div>
              <h3 className="font-display text-base font-bold text-navy-500 mb-2">
                On-Site Diagnosis
              </h3>
              <p className="text-xs text-navy-300 leading-relaxed">
                We inspect the circuit, service panel, or installation location and evaluate existing wiring capacity.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-lightgray border border-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-500 text-white font-bold mb-4">
                3
              </div>
              <h3 className="font-display text-base font-bold text-navy-500 mb-2">
                Clear Scope & Work
              </h3>
              <p className="text-xs text-navy-300 leading-relaxed">
                We explain the exact repair or installation steps, pull required WA L&I permits, and perform code-compliant work.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-lightgray border border-gray-100">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-electric-500 text-white font-bold mb-4">
                4
              </div>
              <h3 className="font-display text-base font-bold text-navy-500 mb-2">
                Testing & Cleanup
              </h3>
              <p className="text-xs text-navy-300 leading-relaxed">
                Every circuit is metered and load-tested. We label all new breakers, clean the work area, and verify operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 05: Why Choose Sparks Electric & Service */}
      <section className="bg-navy-500 py-16 lg:py-24 text-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Why Choose Sparks Electric & Service in {location.shortName}
            </h2>
            <p className="mt-4 text-base text-navy-100">
              Dependable, licensed electrical craftsmanship backed by verified real Google reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-navy-400/50 border border-navy-400/30">
              <ShieldCheck className="h-8 w-8 text-warmyellow-400 mb-3" />
              <h3 className="font-display text-lg font-bold mb-2">Verified Credentials</h3>
              <p className="text-xs text-navy-100 leading-relaxed">
                Licensed, bonded, and insured WA Electrical Contractor. Every project complies with WAC 296-46B and the National Electrical Code.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-400/50 border border-navy-400/30">
              <Phone className="h-8 w-8 text-warmyellow-400 mb-3" />
              <h3 className="font-display text-lg font-bold mb-2">Direct Phone Contact</h3>
              <p className="text-xs text-navy-100 leading-relaxed">
                Speak directly with an electrician who understands your project. No dispatch middlemen, ticket queues, or automated bots.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-navy-400/50 border border-navy-400/30">
              <Wrench className="h-8 w-8 text-warmyellow-400 mb-3" />
              <h3 className="font-display text-lg font-bold mb-2">Meticulous Execution</h3>
              <p className="text-xs text-navy-100 leading-relaxed">
                Clean conduit routing, proper conductor sizing, and careful attention to the homeowner's safety and comfort on every visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews */}
      <ReviewsSection bgClass="bg-white" />

      {/* Section 06: FAQs */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={cityData.faqs}
            title={`Frequently Asked Questions — ${location.shortName}, WA`}
          />
        </div>
      </section>

      {/* Section 07: Related Services & Locations (Internal Linking Matrix) */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Electrical Services in {location.shortName}
            </h2>
            <p className="mt-4 text-base text-navy-300">
              Select any electrical service below for specific solutions, diagnostic workflows, and pricing details in {location.name}.
            </p>
          </div>

          {/* Descriptive Service Links in City */}
          <div className="mb-10 rounded-xl bg-lightgray p-6 border border-gray-200">
            <h3 className="font-display text-base font-bold text-navy-500 mb-3">
              Direct Service Links for {location.name}:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 text-sm">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/${s.slug}-${location.citySlug}`}
                  className="inline-flex items-center gap-1.5 text-navy-400 hover:text-electric-500 font-medium py-1 transition-colors"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-electric-500 flex-shrink-0" />
                  <span>{s.name} in {location.shortName}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                service={service}
                locationSlug={location.citySlug}
              />
            ))}
          </div>

          {/* Nearby Service Areas */}
          <div className="pt-10 border-t border-gray-200">
            <h3 className="font-display text-xl font-bold text-navy-500 mb-4">
              Explore Neighboring Service Areas:
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {locations
                .filter((l) => l.slug !== location.slug)
                .map((otherLoc) => (
                  <Link
                    key={otherLoc.slug}
                    to={`/${otherLoc.slug}`}
                    className="group flex items-center gap-2 rounded-lg bg-lightgray px-4 py-3 transition-all hover:bg-electric-50"
                  >
                    <MapPin className="h-4 w-4 text-electric-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-navy-500 group-hover:text-electric-600">
                      Electrician in {otherLoc.shortName}, WA
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Section: Request Electrical Service in City */}
      <section className="bg-electric-500 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Request Electrical Service in {location.shortName}, WA
          </h2>
          <p className="mt-4 text-base text-electric-100 max-w-2xl mx-auto">
            Contact Sparks Electric & Service to discuss your electrical project, confirm availability, and arrange an on-site assessment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CallButton
              size="lg"
              label={`Call ${PHONE_DISPLAY}`}
              className="!bg-warmyellow-400 !text-navy-500 hover:!bg-warmyellow-300 w-full sm:w-auto"
            />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              Contact Us & Details
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
