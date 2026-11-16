import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import { PHONE_DISPLAY, services } from '@/data/services';
import { locations } from '@/data/locations';
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from '@/data/structuredData';

export default function ServiceAreasPage() {
  return (
    <>
      <SEO
        title="Service Areas in Snoqualmie Valley, WA | Sparks Electric and Service"
        description={`Sparks Electric and Service serves Duvall, Carnation, Monroe, Snoqualmie, North Bend, Redmond, Woodinville, Sammamish, and Fall City, WA. Call ${PHONE_DISPLAY}.`}
        canonicalPath="/service-areas"
        structuredData={[
          localBusinessSchema(),
          organizationSchema(),
          breadcrumbSchema([
            { label: 'Home', path: '/' },
            { label: 'Service Areas', path: '/service-areas' },
          ]),
        ]}
      />

      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Service Areas' }]} />
        </div>
      </div>

      {/* Header */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-navy-500 sm:text-5xl">Service Areas</h1>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Sparks Electric and Service is based in Duvall, Washington and proudly serves the surrounding Snoqualmie Valley and Eastside communities. Below are the areas we cover. Click your city to see available electrical services in your area.
            </p>
            <div className="mt-8">
              <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Location Cards */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Verified Service Locations Across King & Snohomish Counties
            </h2>
            <p className="mt-4 text-base text-navy-300">
              Sparks Electric and Service is based in Duvall and provides fully licensed electrical contracting across 9 Washington communities:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => {
              const isSnohomish = loc.county.includes('Snohomish');
              return (
                <div
                  key={loc.slug}
                  className="rounded-xl bg-white p-6 shadow-sm border border-gray-100 flex flex-col justify-between transition-all hover:shadow-lg"
                >
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-electric-500 text-white">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h2 className="font-display text-xl font-bold text-navy-500">
                            <Link to={`/${loc.slug}`} className="hover:text-electric-500 transition-colors">
                              {loc.name}
                            </Link>
                          </h2>
                          <p className="text-xs text-navy-300">{loc.county}</p>
                        </div>
                      </div>
                      <span
                        className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                          loc.isMain
                            ? 'bg-warmyellow-400 text-navy-500 font-bold'
                            : isSnohomish
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-blue-50 text-blue-700'
                        }`}
                      >
                        {loc.isMain ? 'Home Base' : isSnohomish ? 'Snohomish PUD' : 'PSE Territory'}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-navy-300 leading-relaxed mb-4">
                      {loc.description}
                    </p>

                    {/* Quick Direct Links for High Priority Services in City */}
                    <div className="pt-3 border-t border-gray-100 space-y-1 text-xs">
                      <p className="font-semibold text-navy-400 mb-1.5">Popular in {loc.shortName}:</p>
                      <div className="grid grid-cols-2 gap-1.5">
                        <Link
                          to={`/electrical-repair-${loc.citySlug}`}
                          className="text-navy-300 hover:text-electric-500 transition-colors truncate"
                        >
                          &bull; Electrical Repair
                        </Link>
                        <Link
                          to={`/ev-charger-installation-${loc.citySlug}`}
                          className="text-navy-300 hover:text-electric-500 transition-colors truncate"
                        >
                          &bull; EV Charger
                        </Link>
                        <Link
                          to={`/electrical-panel-upgrade-${loc.citySlug}`}
                          className="text-navy-300 hover:text-electric-500 transition-colors truncate"
                        >
                          &bull; Panel Upgrades
                        </Link>
                        <Link
                          to={`/generator-installation-${loc.citySlug}`}
                          className="text-navy-300 hover:text-electric-500 transition-colors truncate"
                        >
                          &bull; Generator Setup
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-gray-100">
                    <Link
                      to={`/${loc.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-electric-600 hover:text-electric-700 transition-colors"
                    >
                      All Electrical Services in {loc.shortName} &rarr;
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Available Across All Service Areas */}
      <section className="bg-white py-16 lg:py-20 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="font-display text-2xl font-bold text-navy-500 sm:text-3xl">
              Services Provided Across All Our Service Areas
            </h2>
            <p className="mt-3 text-base text-navy-300 max-w-2xl mx-auto">
              Regardless of which city you reside in, Sparks Electric and Service delivers code-compliant, professional residential and commercial electrical work.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {services.map((serv) => (
              <Link
                key={serv.slug}
                to={`/${serv.slug}-duvall-wa`}
                className="group flex items-center justify-between rounded-lg bg-lightgray px-4 py-3 text-sm font-medium text-navy-500 transition-all hover:bg-electric-500 hover:text-white"
              >
                <span>{serv.name}</span>
                <ArrowRight className="h-4 w-4 text-electric-500 group-hover:text-white transition-colors" />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-electric-500 hover:text-electric-600 transition-colors"
            >
              View Full Service Descriptions
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Not Sure If We Cover Your Area?
          </h2>
          <p className="mt-4 text-lg text-navy-100">
            Call us and we will confirm whether we can serve your location.
          </p>
          <div className="mt-8">
            <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
          </div>
        </div>
      </section>
    </>
  );
}
