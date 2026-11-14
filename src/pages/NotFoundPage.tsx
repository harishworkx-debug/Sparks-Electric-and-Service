import { Link } from 'react-router-dom';
import { Phone, Home, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import CallButton from '@/components/CallButton';
import { PHONE_DISPLAY, PHONE_LINK, services } from '@/data/services';
import { locations } from '@/data/locations';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Sparks Electric and Service"
        description="The page you are looking for could not be found. Browse our electrical services or call us directly."
        canonicalPath="/404"
      />

      <section className="bg-navy-500 py-20 lg:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-display text-7xl font-bold text-warmyellow-400 sm:text-8xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-lg text-navy-100">
            The page you are looking for may have been moved or no longer exists. Try one of the links below, or call us directly.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10"
            >
              <Home className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-lightgray py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 font-display text-xl font-bold text-navy-500">Popular Services</h2>
              <ul className="space-y-2">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/${s.slug}-duvall-wa`}
                      className="inline-flex items-center gap-1 text-sm text-electric-500 hover:text-electric-600 transition-colors"
                    >
                      {s.name} in Duvall
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-display text-xl font-bold text-navy-500">Service Areas</h2>
              <ul className="space-y-2">
                {locations.map((l) => (
                  <li key={l.slug}>
                    <Link
                      to={`/${l.slug}`}
                      className="inline-flex items-center gap-1 text-sm text-electric-500 hover:text-electric-600 transition-colors"
                    >
                      Electrician in {l.shortName}, WA
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
