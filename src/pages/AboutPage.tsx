import { Link } from 'react-router-dom';
import {
  Zap,
  Phone,
  MapPin,
  Shield,
  Wrench,
  Building2,
  CheckCircle,
  ArrowRight,
  Home,
  Search,
  Clock,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CallButton from '@/components/CallButton';
import ReviewsSection from '@/components/ReviewsSection';
import { PHONE_DISPLAY, PHONE_LINK, BUSINESS_NAME } from '@/data/services';
import { organizationSchema, localBusinessSchema, breadcrumbSchema } from '@/data/structuredData';

const aboutImage =
  'https://images.pexels.com/photos/8961034/pexels-photo-8961034.jpeg?auto=compress&cs=tinysrgb&w=1200';

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Every job is done to current Washington State electrical code. We do not cut corners on safety.',
  },
  {
    icon: Wrench,
    title: 'Honest Work',
    description: 'We diagnose the actual problem and explain what is needed. No upselling, no unnecessary work.',
  },
  {
    icon: Clock,
    title: 'Reliable Scheduling',
    description: 'We show up when we say we will and communicate clearly throughout the project.',
  },
  {
    icon: Building2,
    title: 'Residential & Commercial',
    description: 'We work on homes, small businesses, and light commercial properties throughout the area.',
  },
];

const capabilities = [
  'Electrical repair and troubleshooting',
  'Wiring and rewiring for homes and additions',
  'Lighting installation — indoor, outdoor, and landscape',
  'Ceiling fan installation',
  'Electrical panel upgrades and service upgrades',
  'EV charger installation',
  'Generator installation and transfer switches',
  'Outlet and switch installation',
  'Circuit breaker repair and replacement',
  'Commercial electrical services',
];

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About Sparks Electric and Service | Electrician in Duvall, WA"
        description={`Sparks Electric and Service is a licensed electrical contractor based in Duvall, WA serving the Snoqualmie Valley. Call ${PHONE_DISPLAY}.`}
        canonicalPath="/about"
        structuredData={[
          organizationSchema(),
          localBusinessSchema(),
          breadcrumbSchema([
            { label: 'Home', path: '/' },
            { label: 'About Us', path: '/about' },
          ]),
        ]}
      />

      {/* Breadcrumbs */}
      <div className="bg-lightgray border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'About Us' }]} />
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-50 px-4 py-1.5 text-sm font-medium text-electric-600">
                <Zap className="h-4 w-4" />
                About Our Company
              </div>
              <h1 className="font-display text-4xl font-bold text-navy-500 sm:text-5xl">
                About Sparks Electric and Service
              </h1>
              <p className="mt-6 text-lg text-navy-300 leading-relaxed">
                Sparks Electric and Service is a professional electrical contractor based in Duvall, Washington. We provide a wide range of electrical services to residential and commercial clients throughout the Duvall area and the Snoqualmie Valley, including electrical repairs, installations, and maintenance.
              </p>
              <p className="mt-4 text-navy-300 leading-relaxed">
                We are registered with Washington State Labor & Industries as an electrical contractor and are committed to delivering safe, code-compliant work on every job. Whether you need a simple repair or a full panel upgrade, we handle each project with the same attention to detail and commitment to quality.
              </p>
              <div className="mt-8">
                <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
              </div>
            </div>
            <div className="relative">
              <img
                src={aboutImage}
                alt="Electrical professionals discussing a project at a construction site"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 rounded-lg bg-warmyellow-400 px-5 py-3 shadow-lg">
                <MapPin className="h-5 w-5 text-navy-500" />
                <span className="font-bold text-navy-500">Duvall, WA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              The principles that guide every electrical job we take on.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500 text-white">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-navy-500">{value.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">Our Electrical Capabilities</h2>
              <p className="mt-4 text-lg text-navy-300 leading-relaxed">
                We handle a range of residential and commercial electrical work throughout Duvall and the surrounding area. Here are some of the services we provide:
              </p>
              <div className="mt-8">
                <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
              </div>
            </div>
            <div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-electric-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy-400">{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Google Reviews */}
      <ReviewsSection bgClass="bg-lightgray" />

      {/* CTA */}
      <section className="bg-navy-500 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-navy-100">
            Call us to discuss your electrical needs. We serve Duvall and the Snoqualmie Valley.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
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
      </section>
    </>
  );
}
