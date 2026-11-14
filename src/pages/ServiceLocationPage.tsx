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
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import FAQAccordion from '@/components/FAQAccordion';
import { PHONE_DISPLAY, getService, ServiceData, services } from '@/data/services';
import { LocationData, getLocation, nearbyLocations, locations } from '@/data/locations';
import { serviceSchema, breadcrumbSchema, localBusinessSchema, faqSchema } from '@/data/structuredData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench, Search, Cable, Lightbulb, Fan, Zap, BatteryCharging, Plug, ToggleRight, ShieldAlert, Power, Building2,
};

interface ServiceLocationPageProps {
  service: ServiceData;
  location: LocationData;
}

export default function ServiceLocationPage({ service, location }: ServiceLocationPageProps) {
  const IconComponent = iconMap[service.icon] || Zap;
  const pageTitle = `${service.name} in ${location.shortName}, ${location.stateAbbr} | Sparks Electric and Service`;
  const pageDescription = `Professional ${service.name.toLowerCase()} services in ${location.name} from Sparks Electric and Service. ${service.description} Call ${PHONE_DISPLAY}.`;
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

  // Build location-specific FAQ
  const locationFaqs = [
    ...service.faqs,
    {
      question: `Do you provide ${service.name.toLowerCase()} in ${location.shortName}, ${location.stateAbbr}?`,
      answer: `Yes. Sparks Electric and Service provides ${service.name.toLowerCase()} services in ${location.name} and the surrounding area. Call ${PHONE_DISPLAY} to discuss your specific needs and confirm availability.`,
    },
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
          faqSchema(locationFaqs),
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-navy-500/90 to-navy-500/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-500/20 px-4 py-1.5 text-sm font-medium text-electric-200">
              <IconComponent className="h-4 w-4" />
              {location.name}
            </div>
            <h1 className="font-display text-4xl font-bold text-white leading-tight sm:text-5xl">
              {service.name} in {location.shortName}, {location.stateAbbr}
            </h1>
            <p className="mt-6 text-lg text-navy-100 leading-relaxed">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
              <Link
                to={`/${location.slug}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                More Services in {location.shortName}
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
            {/* Content */}
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-navy-500 mb-4">
                Professional {service.name.toLowerCase()} in {location.shortName}
              </h2>
              <p className="text-navy-300 leading-relaxed mb-6">
                {service.longDescription}
              </p>
              <p className="text-navy-300 leading-relaxed mb-6">
                {location.localContext} If you need {service.name.toLowerCase()} in {location.shortName} or the surrounding {location.county} area, call Sparks Electric and Service at {PHONE_DISPLAY}.
              </p>

              {/* Common Issues */}
              <h3 className="font-display text-xl font-bold text-navy-500 mb-4 mt-10">
                Common Issues We Address
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
                Our {service.name} Process
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
              <div className="rounded-xl bg-lightgray p-6 my-8">
                <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
                  <div>
                    <p className="font-display font-bold text-navy-500">
                      Need {service.name.toLowerCase()} in {location.shortName}?
                    </p>
                    <p className="text-sm text-navy-300">Call us to discuss your project and schedule service.</p>
                  </div>
                  <CallButton label={`Call ${PHONE_DISPLAY}`} />
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
              </div>

              {/* Related Services */}
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
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Same service across all other cities */}
            <div>
              <h3 className="font-display text-xl font-bold text-navy-500 mb-4">
                {service.name} in Other Washington Cities
              </h3>
              <p className="text-sm text-navy-300 mb-4">
                We provide professional {service.name.toLowerCase()} across our full Snoqualmie Valley and Eastside service area:
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
            <div>
              <h3 className="font-display text-xl font-bold text-navy-500 mb-4">
                Other Electrical Services in {location.shortName}
              </h3>
              <p className="text-sm text-navy-300 mb-4">
                Explore our full line of licensed electrical installations and repairs in {location.name}:
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
          <div className="mt-12 pt-8 border-t border-gray-100">
            <h4 className="text-xs font-bold uppercase tracking-wider text-navy-300 mb-3">
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
                      : 'bg-lightgray text-navy-400 hover:bg-electric-100 hover:text-electric-600'
                  }`}
                >
                  Electrician in {loc.shortName}, WA
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion
            faqs={locationFaqs}
            title={`${service.shortName} FAQs — ${location.shortName}`}
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
            Speak with Sparks Electric and Service about your electrical needs today.
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
