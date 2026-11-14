import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import CallButton from '@/components/CallButton';
import { PHONE_DISPLAY, services } from '@/data/services';
import { getMainLocation } from '@/data/locations';
import { organizationSchema } from '@/data/structuredData';

export default function ServicesPage() {
  const mainLocation = getMainLocation();

  return (
    <>
      <SEO
        title="Electrical Services in Duvall, WA | Sparks Electric and Service"
        description={`Professional electrical services in Duvall, WA including repair, troubleshooting, wiring, lighting, panel upgrades, EV chargers, and commercial electrical work. Call ${PHONE_DISPLAY}.`}
        canonicalPath="/services"
        structuredData={organizationSchema()}
      />

      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Electrical Services' }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-navy-500 sm:text-5xl">Electrical Services</h1>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Sparks Electric and Service provides a full range of professional electrical services for residential and commercial properties in Duvall, WA and the surrounding Snoqualmie Valley. Browse our services below and call us to discuss your project.
            </p>
            <div className="mt-8">
              <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} locationSlug={mainLocation.citySlug} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Don't See What You Need?
          </h2>
          <p className="mt-4 text-lg text-navy-100">
            Call us with your electrical question. If it involves wiring, panels, lighting, or power, we can likely help.
          </p>
          <div className="mt-8">
            <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
          </div>
        </div>
      </section>
    </>
  );
}
