import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ServiceCard from '@/components/ServiceCard';
import CallButton from '@/components/CallButton';
import { PHONE_DISPLAY, services } from '@/data/services';
import { getMainLocation, locations } from '@/data/locations';
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from '@/data/structuredData';

export default function ServicesPage() {
  const mainLocation = getMainLocation();

  return (
    <>
      <SEO
        title="Electrical Services in Duvall, WA | Sparks Electric and Service"
        description={`Professional electrical services in Duvall, WA including repair, troubleshooting, wiring, lighting, panel upgrades, EV chargers, and commercial electrical work. Call ${PHONE_DISPLAY}.`}
        canonicalPath="/services"
        structuredData={[
          localBusinessSchema(),
          organizationSchema(),
          breadcrumbSchema([
            { label: 'Home', path: '/' },
            { label: 'Electrical Services', path: '/services' },
          ]),
        ]}
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

      {/* Internal Linking: Electrical Services Across All Service Areas */}
      <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-navy-500 sm:text-3xl">
              Electrical Services in Your City
            </h2>
            <p className="mt-3 text-base text-navy-300 max-w-2xl mx-auto">
              Sparks Electric and Service proudly serves communities across King and Snohomish counties. Select your city to explore tailored local electrical services.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {locations.map((loc) => (
              <div
                key={loc.slug}
                className="rounded-xl border border-gray-100 bg-lightgray p-5 transition-all hover:border-electric-200 hover:shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-electric-500 flex-shrink-0" />
                  <Link
                    to={`/${loc.slug}`}
                    className="font-display font-bold text-navy-500 hover:text-electric-500 transition-colors"
                  >
                    Electrician in {loc.name}
                  </Link>
                </div>
                <div className="space-y-1.5 pl-7 text-xs sm:text-sm">
                  <div>
                    <Link
                      to={`/electrical-repair-${loc.citySlug}`}
                      className="text-navy-300 hover:text-electric-500 transition-colors"
                    >
                      &bull; Electrical Repair in {loc.shortName}
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={`/ev-charger-installation-${loc.citySlug}`}
                      className="text-navy-300 hover:text-electric-500 transition-colors"
                    >
                      &bull; EV Charger Installation in {loc.shortName}
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={`/electrical-panel-upgrade-${loc.citySlug}`}
                      className="text-navy-300 hover:text-electric-500 transition-colors"
                    >
                      &bull; Panel Upgrades in {loc.shortName}
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={`/electrical-wiring-${loc.citySlug}`}
                      className="text-navy-300 hover:text-electric-500 transition-colors"
                    >
                      &bull; Electrical Wiring in {loc.shortName}
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={`/lighting-installation-${loc.citySlug}`}
                      className="text-navy-300 hover:text-electric-500 transition-colors"
                    >
                      &bull; Lighting Installation in {loc.shortName}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Grouped Service-to-Location Directory for Crawlability */}
          <div className="rounded-2xl bg-lightgray p-8 border border-gray-200">
            <h3 className="font-display text-xl font-bold text-navy-500 mb-6 text-center">
              Service Directory Across Washington Communities
            </h3>
            
            <div className="space-y-6 text-xs sm:text-sm">
              <div>
                <h4 className="font-bold text-navy-500 mb-2">
                  <Link to="/electrical-repair-duvall-wa" className="text-electric-600 hover:underline">
                    Electrical Repair:
                  </Link>
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-navy-300">
                  {locations.map((l, i) => (
                    <span key={l.slug}>
                      <Link to={`/electrical-repair-${l.citySlug}`} className="hover:text-electric-500">
                        {l.shortName}
                      </Link>
                      {i < locations.length - 1 && <span className="ml-3 text-gray-300">|</span>}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-500 mb-2">
                  <Link to="/ev-charger-installation-duvall-wa" className="text-electric-600 hover:underline">
                    EV Charger Installation (Level 2):
                  </Link>
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-navy-300">
                  {locations.map((l, i) => (
                    <span key={l.slug}>
                      <Link to={`/ev-charger-installation-${l.citySlug}`} className="hover:text-electric-500">
                        {l.shortName}
                      </Link>
                      {i < locations.length - 1 && <span className="ml-3 text-gray-300">|</span>}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-500 mb-2">
                  <Link to="/electrical-panel-upgrade-duvall-wa" className="text-electric-600 hover:underline">
                    200-Amp Electrical Panel Upgrades:
                  </Link>
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-navy-300">
                  {locations.map((l, i) => (
                    <span key={l.slug}>
                      <Link to={`/electrical-panel-upgrade-${l.citySlug}`} className="hover:text-electric-500">
                        {l.shortName}
                      </Link>
                      {i < locations.length - 1 && <span className="ml-3 text-gray-300">|</span>}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-500 mb-2">
                  <Link to="/generator-installation-duvall-wa" className="text-electric-600 hover:underline">
                    Generator Installation & Transfer Switches:
                  </Link>
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-navy-300">
                  {locations.map((l, i) => (
                    <span key={l.slug}>
                      <Link to={`/generator-installation-${l.citySlug}`} className="hover:text-electric-500">
                        {l.shortName}
                      </Link>
                      {i < locations.length - 1 && <span className="ml-3 text-gray-300">|</span>}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-navy-500 mb-2">
                  <Link to="/commercial-electrical-duvall-wa" className="text-electric-600 hover:underline">
                    Commercial Electrical Services:
                  </Link>
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1 text-navy-300">
                  {locations.map((l, i) => (
                    <span key={l.slug}>
                      <Link to={`/commercial-electrical-${l.citySlug}`} className="hover:text-electric-500">
                        {l.shortName}
                      </Link>
                      {i < locations.length - 1 && <span className="ml-3 text-gray-300">|</span>}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 font-bold text-electric-500 hover:text-electric-600 transition-colors"
            >
              View All Service Areas
              <ArrowRight className="h-4 w-4" />
            </Link>
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
