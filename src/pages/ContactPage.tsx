import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink, Globe, Clock, ShieldCheck } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  WA_LICENSE_INFO,
  WEBSITE_URL,
  MAPS_LINK,
  MAPS_EMBED_SRC,
} from '@/data/services';
import { getMainLocation } from '@/data/locations';
import { localBusinessSchema, organizationSchema, breadcrumbSchema } from '@/data/structuredData';

export default function ContactPage() {
  const mainLocation = getMainLocation();

  return (
    <>
      <SEO
        title="Contact Sparks Electric and Service | Electrician in Duvall, WA"
        description={`Contact Sparks Electric and Service at ${PHONE_DISPLAY}. Serving Duvall, WA and the Snoqualmie Valley. Call us for all your electrical needs.`}
        canonicalPath="/contact"
        structuredData={[
          localBusinessSchema(),
          organizationSchema(),
          breadcrumbSchema([
            { label: 'Home', path: '/' },
            { label: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Contact' }]} />
        </div>
      </div>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl font-bold text-navy-500 sm:text-5xl">Contact Us</h1>
            <p className="mt-6 text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
              The fastest way to reach us is by phone. Call Sparks Electric and Service to discuss your electrical needs, confirm service availability, and schedule a visit.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="rounded-xl bg-lightgray p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-warmyellow-400">
                    <Phone className="h-6 w-6 text-navy-500" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-navy-500">Phone</h2>
                    <a
                      href={PHONE_LINK}
                      className="text-2xl font-bold text-electric-500 hover:text-electric-600 transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>
                <p className="text-sm text-navy-300 mb-4">
                  Call us directly to discuss your electrical project, ask questions, or schedule service. We handle all inquiries by phone.
                </p>
                <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} className="w-full" />
              </div>

              <div className="rounded-xl bg-lightgray p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-navy-500">Office Location</h2>
                    <p className="text-base font-semibold text-navy-500">{BUSINESS_ADDRESS.street}</p>
                    <p className="text-sm font-medium text-navy-400">
                      {BUSINESS_ADDRESS.city}, {BUSINESS_ADDRESS.state} {BUSINESS_ADDRESS.zip}
                    </p>
                    <p className="text-xs text-navy-300 mt-0.5">{mainLocation.county} &bull; King County, WA</p>
                  </div>
                </div>
                <div className="pt-2 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-navy-400">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" />
                    <span>{WA_LICENSE_INFO}</span>
                  </div>
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-electric-500 hover:text-electric-600 transition-colors"
                  >
                    View on Google Maps
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="rounded-xl bg-lightgray p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-display text-lg font-bold text-navy-500">Website</h2>
                    <a
                      href={WEBSITE_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-electric-500 hover:text-electric-600 transition-colors break-all"
                    >
                      www.sparkselectricandservice.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-navy-500 p-6 text-white">
                <div className="mb-3 flex items-center gap-3">
                  <Clock className="h-6 w-6 text-warmyellow-400" />
                  <h2 className="font-display text-lg font-bold">Service Hours</h2>
                </div>
                <p className="text-sm text-navy-100 leading-relaxed">
                  Call us to discuss your electrical needs and confirm current availability. We serve Duvall and the surrounding Snoqualmie Valley.
                </p>
                <p className="mt-3 text-sm font-semibold text-warmyellow-400">
                  All scheduling is handled by phone — no online booking.
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <div className="aspect-[4/3] w-full">
                  <iframe
                    src={MAPS_EMBED_SRC}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Sparks Electric and Service location map"
                  />
                </div>
              </div>
              <div className="rounded-xl bg-lightgray p-6">
                <h2 className="mb-3 font-display text-lg font-bold text-navy-500">Service Area</h2>
                <p className="text-sm text-navy-300 leading-relaxed mb-4">
                  We serve Duvall, Carnation, Monroe, Snoqualmie, North Bend, Redmond, Woodinville, Sammamish, and Fall City, Washington.
                </p>
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 hover:text-electric-600 transition-colors"
                >
                  View All Service Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to Talk? Give Us a Call.
          </h2>
          <p className="mt-4 text-lg text-navy-100">
            Whether it is a repair, an installation, or a question about your electrical system, we are ready to help.
          </p>
          <div className="mt-8">
            <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
          </div>
        </div>
      </section>
    </>
  );
}
