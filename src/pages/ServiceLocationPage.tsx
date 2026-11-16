import { Link } from 'react-router-dom';
import {
  ArrowRight,
  AlertTriangle,
  Wrench,
  Search,
  Cable,
  Lightbulb,
  Fan,
  Zap,
  BatteryCharging,
  Plug,
  ToggleRight,
  ShieldAlert,
  Power,
  Building2,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  Cpu,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import FAQAccordion from '@/components/FAQAccordion';
import ReviewsSection from '@/components/ReviewsSection';
import { PHONE_DISPLAY, getService, ServiceData, services, WA_LICENSE_INFO } from '@/data/services';
import { LocationData, getLocation, nearbyLocations, locations } from '@/data/locations';
import { serviceSchema, breadcrumbSchema, localBusinessSchema, faqSchema } from '@/data/structuredData';
import { getLocalizedServiceContent, cityProfiles } from '@/data/localSeoContent';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench, Search, Cable, Lightbulb, Fan, Zap, BatteryCharging, Plug, ToggleRight, ShieldAlert, Power, Building2,
};

interface ServiceLocationPageProps {
  service: ServiceData;
  location: LocationData;
}

export default function ServiceLocationPage({ service, location }: ServiceLocationPageProps) {
  const IconComponent = iconMap[service.icon] || Zap;
  const seoContent = getLocalizedServiceContent(service, location);
  const cityProfile = cityProfiles[location.citySlug] || cityProfiles['duvall-wa'];

  const pageTitle = `${service.name} in ${location.shortName}, ${location.stateAbbr} | Sparks Electric & Service`;
  const pageDescription = `Looking for ${service.name.toLowerCase()} in ${location.shortName}, WA? Sparks Electric & Service provides professional ${service.name.toLowerCase()}, repairs, installations & safety inspections. Call ${PHONE_DISPLAY}.`;
  const h1Title = `${service.name} in ${location.shortName}, ${location.stateAbbr} – Professional Electrical Services`;
  const canonicalPath = `/${service.slug}-${location.citySlug}`;

  const relatedServices = service.relatedServiceSlugs
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined);

  const nearby = nearbyLocations[location.slug] || nearbyLocations[location.citySlug] || [];
  const nearbyLocs = nearby
    .map((slug) => getLocation(slug))
    .filter((l): l is NonNullable<typeof l> => l !== undefined);

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: 'Electrical Services', path: '/services' },
    { label: `${service.name} in ${location.shortName}`, path: canonicalPath },
  ];

  // Combine localized FAQs with generic service FAQs
  const combinedFaqs = [
    ...seoContent.faqs,
    ...service.faqs.filter(
      (sf) => !seoContent.faqs.some((lf) => lf.question.toLowerCase() === sf.question.toLowerCase())
    ),
  ];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
        ogImage={service.image}
        structuredData={[
          serviceSchema(`${service.name} in ${location.shortName}`, service.description, location.citySlug),
          breadcrumbSchema(breadcrumbItems),
          localBusinessSchema(location.shortName),
          faqSchema(combinedFaqs),
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

      {/* Hero */}
      <section className="relative bg-navy-500 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.imageAlt}
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-navy-500/95 to-navy-500/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-500/30 px-3.5 py-1 text-xs font-semibold text-warmyellow-400">
                <IconComponent className="h-3.5 w-3.5" />
                {service.name}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-navy-100">
                <MapPin className="h-3.5 w-3.5 text-electric-400" />
                {location.name} &bull; {location.county}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
                <ShieldCheck className="h-3.5 w-3.5" />
                {cityProfile.utilityShort} Service Area
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold text-white leading-tight sm:text-5xl">
              {h1Title}
            </h1>
            <p className="mt-5 text-lg text-navy-100 leading-relaxed max-w-2xl">
              {service.description} Dedicated electrical craftsmanship tailored to {location.shortName} residential and commercial properties.
            </p>

            {/* Targeted Secondary Keywords Pill Strip */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-navy-200">
              <span className="font-semibold text-white">Targeted Services:</span>
              {seoContent.secondaryKeywords.map((kw, i) => (
                <span
                  key={i}
                  className="rounded bg-navy-600/60 px-2.5 py-0.5 border border-navy-400/30"
                >
                  {kw}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
              <Link
                to={`/${location.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                All Services in {location.shortName}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Content Column */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-500 mb-4">
                Local {service.name} Experts in {location.shortName}, {location.stateAbbr}
              </h2>
              <p className="text-navy-300 leading-relaxed mb-6 font-medium">
                {seoContent.localOverview}
              </p>
              <p className="text-navy-300 leading-relaxed mb-6">
                {service.longDescription}
              </p>

              {/* Local Challenges Callout Box */}
              <div className="my-8 rounded-xl bg-gradient-to-br from-lightgray to-blue-50/50 p-6 border border-blue-100">
                <div className="flex items-center gap-2.5 mb-3">
                  <Cpu className="h-5 w-5 text-electric-600" />
                  <h3 className="font-display text-lg font-bold text-navy-500">
                    Electrical Challenges in {location.shortName} We Solve
                  </h3>
                </div>
                <p className="text-xs text-navy-400 mb-4">
                  {location.shortName} properties face specific electrical demands due to local housing characteristics ({cityProfile.housingProfile}) and regional climate ({cityProfile.keyWeatherOrTerrain}):
                </p>
                <ul className="space-y-2.5 text-sm text-navy-400">
                  {seoContent.localChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Utility Coordination Box */}
              <div className="my-8 rounded-xl bg-amber-50/60 p-6 border border-amber-200">
                <div className="flex items-center gap-2.5 mb-2">
                  <Zap className="h-5 w-5 text-warmyellow-600" />
                  <h3 className="font-display text-lg font-bold text-navy-500">
                    {cityProfile.utilityShort} Grid Standards & Coordination
                  </h3>
                </div>
                <p className="text-sm text-navy-400 leading-relaxed mb-3">
                  {seoContent.utilityCoordination}
                </p>
                <p className="text-xs text-navy-400">
                  <strong>Utility Provider:</strong> {cityProfile.utility} &bull; {cityProfile.utilityNote}
                </p>
              </div>

              {/* Permitting & WA L&I Compliance */}
              <div className="my-8 rounded-xl bg-lightgray p-6 border border-gray-200">
                <div className="flex items-center gap-2.5 mb-2">
                  <ShieldCheck className="h-5 w-5 text-emerald-600" />
                  <h3 className="font-display text-lg font-bold text-navy-500">
                    Washington State Permitting & Electrical Safety
                  </h3>
                </div>
                <p className="text-sm text-navy-400 leading-relaxed mb-3">
                  {seoContent.permittingInfo}
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold text-navy-400 pt-2 border-t border-gray-200">
                  <span>Credence:</span>
                  <span className="text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                    {WA_LICENSE_INFO}
                  </span>
                </div>
              </div>

              {/* Common Issues */}
              <h3 className="font-display text-xl font-bold text-navy-500 mb-4 mt-10">
                Common Signs You Need {service.name}
              </h3>
              <ul className="space-y-3 mb-8">
                {service.commonIssues.map((issue, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-warmyellow-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-400">{issue}</span>
                  </li>
                ))}
              </ul>

              {/* Process */}
              <h3 className="font-display text-xl font-bold text-navy-500 mb-4 mt-10">
                Our {service.name} Process in {location.shortName}
              </h3>
              <div className="space-y-6 mb-8">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-electric-500 text-white font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-navy-500">{step.title}</h4>
                      <p className="text-sm text-navy-300 leading-relaxed mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Inline CTA */}
              <div className="rounded-xl bg-navy-500 p-6 my-8 text-white">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-lg font-bold">
                      Schedule {service.name} in {location.shortName}
                    </p>
                    <p className="text-sm text-navy-100">
                      Speak directly with a licensed Washington electrician.
                    </p>
                  </div>
                  <CallButton
                    label={`Call ${PHONE_DISPLAY}`}
                    className="!bg-warmyellow-400 !text-navy-500 hover:!bg-warmyellow-300"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Call Card */}
              <div className="rounded-xl bg-navy-500 p-6 text-white sticky top-24">
                <h3 className="font-display text-lg font-bold mb-2">Speak With an Electrician</h3>
                <p className="text-sm text-navy-100 mb-4">
                  Call us about {service.name.toLowerCase()} in {location.shortName}.
                </p>
                <CallButton size="lg" label={PHONE_DISPLAY} className="w-full" />
                <div className="mt-4 pt-4 border-t border-navy-400/40 text-xs text-navy-200 space-y-1">
                  <p>&bull; Direct phone scheduling</p>
                  <p>&bull; {cityProfile.utilityShort} service coordination</p>
                  <p>&bull; WA State L&I permitted & inspected</p>
                </div>
              </div>

              {/* Related Services in Same City */}
              <div className="rounded-xl bg-lightgray p-6">
                <h3 className="font-display text-lg font-bold text-navy-500 mb-4">Related Services</h3>
                <ul className="space-y-3">
                  {relatedServices.map((relService) => (
                    <li key={relService.slug}>
                      <Link
                        to={`/${relService.slug}-${location.citySlug}`}
                        className="inline-flex items-center gap-1 text-sm text-electric-500 hover:text-electric-600 transition-colors"
                      >
                        {relService.name} in {location.shortName}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* This Service in Other Areas */}
              <div className="rounded-xl bg-lightgray p-6">
                <h3 className="font-display text-lg font-bold text-navy-500 mb-4">
                  {service.shortName} Nearby
                </h3>
                <ul className="space-y-3">
                  {nearbyLocs.map((nearLoc) => (
                    <li key={nearLoc.slug}>
                      <Link
                        to={`/${service.slug}-${nearLoc.citySlug}`}
                        className="inline-flex items-center gap-1 text-sm text-electric-500 hover:text-electric-600 transition-colors"
                      >
                        {service.shortName} in {nearLoc.shortName}
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Internal Linking Matrix for SEO */}
      <section className="bg-lightgray/50 py-16 border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Same service across all other cities */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy-500 mb-3">
                {service.name} Across King & Snohomish Counties
              </h3>
              <p className="text-xs text-navy-300 mb-4">
                Sparks Electric and Service provides licensed {service.name.toLowerCase()} across our full service territory:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {locations
                  .filter((l) => l.citySlug !== location.citySlug)
                  .map((otherLoc) => (
                    <Link
                      key={otherLoc.slug}
                      to={`/${service.slug}-${otherLoc.citySlug}`}
                      className="inline-flex items-center gap-1.5 text-electric-500 hover:text-electric-600 font-medium py-1 transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                      <span>
                        {service.shortName} in {otherLoc.shortName}
                      </span>
                    </Link>
                  ))}
              </div>
            </div>

            {/* Other services in the same city */}
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="font-display text-xl font-bold text-navy-500 mb-3">
                More Electrical Services in {location.shortName}, WA
              </h3>
              <p className="text-xs text-navy-300 mb-4">
                Explore our full range of licensed residential and commercial electrical work in {location.name}:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                {services
                  .filter((s) => s.slug !== service.slug)
                  .map((otherServ) => (
                    <Link
                      key={otherServ.slug}
                      to={`/${otherServ.slug}-${location.citySlug}`}
                      className="inline-flex items-center gap-1.5 text-navy-400 hover:text-electric-500 font-medium py-1 transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-electric-500" />
                      <span>{otherServ.name}</span>
                    </Link>
                  ))}
              </div>
            </div>
          </div>

          {/* Service Area Hubs Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-400 mb-3">
              Explore All Sparks Electric Service Areas:
            </h4>
            <div className="flex flex-wrap gap-2">
              {locations.map((loc) => (
                <Link
                  key={loc.slug}
                  to={`/${loc.slug}`}
                  className={`inline-block rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                    loc.citySlug === location.citySlug
                      ? 'bg-electric-500 text-white'
                      : 'bg-white text-navy-400 border border-gray-200 hover:bg-electric-100 hover:text-electric-600'
                  }`}
                >
                  Electrician in {loc.shortName}, WA
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews */}
      <ReviewsSection bgClass="bg-white" />

      {/* FAQs */}
      <section className="bg-lightgray py-16 lg:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={combinedFaqs}
            title={`${service.shortName} FAQs — ${location.shortName}, WA`}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-electric-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Call for {service.name} in {location.shortName}
          </h2>
          <p className="mt-4 text-lg text-electric-100">
            Speak directly with Sparks Electric and Service about your electrical needs today.
          </p>
          <div className="mt-8">
            <CallButton
              size="lg"
              label={`Call ${PHONE_DISPLAY}`}
              className="!bg-warmyellow-400 !text-navy-500 hover:!bg-warmyellow-300"
            />
          </div>
        </div>
      </section>
    </>
  );
}
