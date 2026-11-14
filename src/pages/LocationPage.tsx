import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';
import ReviewsSection from '@/components/ReviewsSection';
import { PHONE_DISPLAY, services } from '@/data/services';
import { LocationData, getLocation, nearbyLocations, locations } from '@/data/locations';
import { localBusinessSchema, breadcrumbSchema, faqSchema } from '@/data/structuredData';

interface LocationPageProps {
  location: LocationData;
}

export default function LocationPage({ location }: LocationPageProps) {
  const pageTitle = `Electrician in ${location.name} | Sparks Electric and Service`;
  const pageDescription = `Sparks Electric and Service provides professional electrical services in ${location.name}. ${location.description} Call ${PHONE_DISPLAY}.`;
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

  const locationFaqs = [
    {
      question: `Does Sparks Electric and Service serve ${location.shortName}, ${location.stateAbbr}?`,
      answer: `Yes. We provide electrical services in ${location.name} and the surrounding area. Call ${PHONE_DISPLAY} to confirm service availability for your specific location.`,
    },
    {
      question: `What electrical services do you offer in ${location.shortName}?`,
      answer: `We offer electrical repair, troubleshooting, wiring, lighting installation, ceiling fan installation, panel upgrades, EV charger installation, generator installation, outlet and switch installation, and commercial electrical services in ${location.shortName} and nearby communities.`,
    },
    {
      question: `How do I schedule electrical service in ${location.shortName}?`,
      answer: `Call us at ${PHONE_DISPLAY}. We handle all scheduling by phone — no online booking or forms. We will discuss your needs and arrange a visit at a time that works for you.`,
    },
    {
      question: `Can you help with electrical emergencies in ${location.shortName}?`,
      answer: `If you are experiencing an electrical emergency such as burning smells, sparking, or a complete power loss, call us at ${PHONE_DISPLAY}. For immediate danger, turn off power at the main breaker and call 911.`,
    },
  ];

  return (
    <>
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalPath={canonicalPath}
        structuredData={[
          localBusinessSchema(location.shortName),
          breadcrumbSchema(breadcrumbItems),
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-navy-500/90 to-navy-500/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-500/20 px-4 py-1.5 text-sm font-medium text-electric-200">
              <MapPin className="h-4 w-4" />
              {location.county}
            </div>
            <h1 className="font-display text-4xl font-bold text-white leading-tight sm:text-5xl">
              Electrician in {location.name}
            </h1>
            <p className="mt-6 text-lg text-navy-100 leading-relaxed">
              {location.description}
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

      {/* About Location */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-navy-500 mb-4">
            Electrical Services in {location.shortName}
          </h2>
          <p className="text-navy-300 leading-relaxed mb-4">
            {location.localContext}
          </p>
          <p className="text-navy-300 leading-relaxed">
            Sparks Electric and Service is based in Duvall and proudly serves {location.shortName} and the surrounding {location.county} communities. Whether you need a simple outlet repair, a full panel upgrade, or an EV charger installed, call us at {PHONE_DISPLAY} to discuss your project.
          </p>
        </div>
      </section>

      {/* Available Services */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Electrical Services Available in {location.shortName}
            </h2>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              Browse our services and click through for details specific to {location.shortName}.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} locationSlug={location.citySlug} />
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas & Other Service Coverage */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 font-display text-2xl font-bold text-navy-500">
            Areas We Serve Near {location.shortName}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {locations
              .filter((l) => l.slug !== location.slug)
              .map((otherLoc) => (
                <Link
                  key={otherLoc.slug}
                  to={`/${otherLoc.slug}`}
                  className="group flex items-center gap-2 rounded-lg bg-lightgray px-4 py-3 transition-all hover:bg-electric-50"
                >
                  <MapPin className="h-5 w-5 text-electric-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-navy-500 group-hover:text-electric-600">
                    Electrician in {otherLoc.shortName}
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <ReviewsSection bgClass="bg-white" />

      {/* FAQs */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={locationFaqs} title={`${location.shortName} Electrical FAQs`} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Need an Electrician in {location.shortName}?
          </h2>
          <p className="mt-4 text-lg text-navy-100">
            Call Sparks Electric and Service for professional electrical services in {location.name}.
          </p>
          <div className="mt-8">
            <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
          </div>
        </div>
      </section>
    </>
  );
}
