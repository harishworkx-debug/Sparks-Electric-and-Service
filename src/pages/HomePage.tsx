import { Link } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Shield,
  Zap,
  Wrench,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  BatteryCharging,
  Building2,
  Search,
  Plug,
  ShieldAlert,
  AlertTriangle,
  Home,
  Star,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallButton from '@/components/CallButton';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';
import ReviewsSection from '@/components/ReviewsSection';
import { PHONE_DISPLAY, services, MAPS_LINK } from '@/data/services';
import { locations } from '@/data/locations';
import { GOOGLE_RATING, TOTAL_REVIEWS } from '@/data/reviews';
import { generalFaqs } from '@/data/faqs';
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from '@/data/structuredData';

const heroImage =
  'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1600';

const howItWorks = [
  {
    icon: Phone,
    title: 'Call Sparks Electric',
    description: `Call ${PHONE_DISPLAY}. Tell us what electrical issue you are experiencing or what project you have in mind.`,
  },
  {
    icon: Search,
    title: 'Describe the Issue',
    description: 'Explain the electrical problem in as much detail as you can. The more we know, the better we can help.',
  },
  {
    icon: Clock,
    title: 'Discuss Availability',
    description: 'We confirm service availability in your area and schedule a visit at a time that works for you.',
  },
  {
    icon: CheckCircle,
    title: 'Confirm Next Steps',
    description: 'We confirm the plan, timeline, and next steps directly by phone. No online forms, no waiting.',
  },
];

const whyChoose = [
  {
    icon: MapPin,
    title: 'Based in Duvall',
    description: 'We are a local Duvall electrical contractor serving the Snoqualmie Valley and surrounding communities. Being local means we can respond quickly to your electrical needs.',
  },
  {
    icon: Shield,
    title: 'Licensed Electrical Contractor',
    description: 'Registered with Washington State L&I as an electrical contractor. We work to current code on every job, big or small.',
  },
  {
    icon: Zap,
    title: 'Residential & Commercial',
    description: 'From home wiring repairs to commercial lighting and panel upgrades, we handle a full range of electrical needs for both homes and businesses.',
  },
  {
    icon: Wrench,
    title: 'Repair to Installation',
    description: 'Whether you need a faulty breaker fixed or a new EV charger installed, we cover everything from quick repairs to full installations.',
  },
];

const commonIssues = [
  {
    icon: AlertTriangle,
    title: 'Breakers Keep Tripping',
    description: 'Frequent breaker trips usually mean an overloaded circuit or a fault that needs professional diagnosis before it becomes a safety hazard.',
  },
  {
    icon: Zap,
    title: 'Flickering Lights',
    description: 'Lights that dim or flicker can indicate loose wiring, an overloaded circuit, or a failing connection that should be inspected promptly.',
  },
  {
    icon: Plug,
    title: 'Dead Outlets',
    description: 'Outlets that stop working may have a tripped GFCI, a broken connection, or a wiring problem behind the wall that needs repair.',
  },
  {
    icon: ShieldAlert,
    title: 'Warm Switches or Outlets',
    description: 'Switches or outlets that feel warm to the touch are a warning sign of overloaded wiring or a loose connection that poses a fire risk.',
  },
  {
    icon: Home,
    title: 'Older Home Wiring',
    description: 'Homes built decades ago may have wiring that does not meet modern code or handle today\'s electrical demands safely.',
  },
  {
    icon: BatteryCharging,
    title: 'Panel Too Small',
    description: 'If your panel is 100 amps or less, it may not support modern appliances, EV chargers, or home additions without an upgrade.',
  },
];

const expectations = [
  {
    icon: Phone,
    title: 'Direct Phone Contact',
    description: 'No forms, no waiting for an email reply. You call us, you talk to a real person, and we get the process started immediately.',
  },
  {
    icon: Users,
    title: 'Personalized Service',
    description: 'Every home and business is different. We listen to your specific situation and tailor our approach to your needs and budget.',
  },
  {
    icon: CheckCircle,
    title: 'Code-Compliant Work',
    description: 'All electrical work is performed to current Washington State electrical code, using quality materials and proven techniques.',
  },
  {
    icon: Clock,
    title: 'Respect for Your Time',
    description: 'We schedule appointments that work for you and communicate clearly about timing so you are never left wondering when we will arrive.',
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="Sparks Electric and Service | Electrician in Duvall, WA"
        description={`Professional residential and commercial electrical services in Duvall, WA and the Snoqualmie Valley. Repairs, installations, EV chargers, panel upgrades. Call ${PHONE_DISPLAY}.`}
        structuredData={[localBusinessSchema(), organizationSchema(), websiteSchema()]}
      />

      {/* Hero Section */}
      <section className="relative bg-navy-500 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Professional electrician working on a circuit breaker panel"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-500 via-navy-500/90 to-navy-500/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-500/20 px-4 py-1.5 text-sm font-medium text-electric-200">
              <MapPin className="h-4 w-4" />
              Serving Duvall, WA & Snoqualmie Valley
            </div>
            <h1 className="font-display text-4xl font-bold text-white leading-tight sm:text-5xl lg:text-6xl">
              Professional Electrical Services in Duvall, WA
            </h1>
            <p className="mt-6 text-lg text-navy-100 leading-relaxed">
              Contact Sparks Electric and Service for professional electrical assistance in our verified Washington service areas. From repairs and troubleshooting to installations and panel upgrades.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-7 py-3.5 text-base font-bold text-white transition-all hover:border-white hover:bg-white/10"
              >
                Explore Electrical Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-electric-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Based In</p>
                <p className="text-sm font-bold text-navy-500">Duvall, WA</p>
              </div>
            </div>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-warmyellow-400 text-navy-500 flex-shrink-0 group-hover:scale-105 transition-transform">
                <Star className="h-5 w-5 fill-navy-500 text-navy-500" />
              </div>
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Google Rating</p>
                <p className="text-sm font-bold text-navy-500 group-hover:text-electric-500 transition-colors">
                  5.0 ★★★★★ ({TOTAL_REVIEWS})
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-electric-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Licensed</p>
                <p className="text-sm font-bold text-navy-500">WA Contractor</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-electric-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Services</p>
                <p className="text-sm font-bold text-navy-500">Res & Commercial</p>
              </div>
            </div>
            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <Phone className="h-8 w-8 text-electric-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Direct Phone</p>
                <p className="text-sm font-bold text-navy-500">{PHONE_DISPLAY}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">Electrical Services</h2>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              Professional electrical services for homes and businesses throughout Duvall and the Snoqualmie Valley. Click any service to view full details.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-electric-500 hover:text-electric-600 transition-colors"
            >
              View All Electrical Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Common Electrical Issues Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">Common Electrical Issues We Handle</h2>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              Recognize a problem? Don't wait — electrical issues can become safety hazards if left unaddressed. Call us to schedule a diagnosis.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commonIssues.map((issue) => (
              <div
                key={issue.title}
                className="rounded-xl bg-lightgray p-6 transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-warmyellow-400 text-navy-500">
                  <issue.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-navy-500">{issue.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{issue.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CallButton size="lg" label={`Call ${PHONE_DISPLAY} for Help`} />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-navy-500 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Why Choose Sparks Electric and Service
            </h2>
            <p className="mt-4 text-lg text-navy-100 max-w-2xl mx-auto">
              A local, licensed electrical contractor committed to safe, reliable electrical work in Duvall and the surrounding area.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-navy-400/50 p-6 transition-all hover:bg-navy-400/80"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500 text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-white">{item.title}</h3>
                <p className="text-sm text-navy-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Google Reviews */}
      <ReviewsSection bgClass="bg-white" />

      {/* What to Expect Section */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">What to Expect When You Call</h2>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              We keep the process simple and straightforward. Here is what you can expect from your first call to project completion.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-gray-100 p-6 transition-all hover:border-electric-200 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-electric-50 text-electric-500">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-navy-500">{item.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="bg-navy-500 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">Service Areas</h2>
            <p className="mt-4 text-lg text-navy-100 max-w-2xl mx-auto">
              Serving Duvall and the surrounding Snoqualmie Valley and Eastside communities in King County, Washington. Click your city to see available services.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="group flex items-center gap-2 rounded-lg bg-navy-400/50 px-4 py-3 text-white transition-all hover:bg-electric-500"
              >
                <MapPin className="h-5 w-5 text-warmyellow-400 flex-shrink-0" />
                <span className="text-sm font-medium group-hover:text-white">{loc.shortName}</span>
                {loc.isMain && (
                  <span className="ml-auto text-xs rounded bg-warmyellow-400 text-navy-500 px-1.5 py-0.5 font-bold">
                    Main
                  </span>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 font-bold text-warmyellow-400 hover:text-warmyellow-300 transition-colors"
            >
              View All Service Areas
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-navy-300 max-w-2xl mx-auto">
              Getting electrical service is simple. Just pick up the phone.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-electric-500 text-white font-display text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="mb-2 font-display text-lg font-bold text-navy-500">{step.title}</h3>
                <p className="text-sm text-navy-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotlight: Electrical Services in Duvall */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-warmyellow-400/20 px-4 py-1.5 text-sm font-medium text-warmyellow-600">
                <Star className="h-4 w-4" />
                Our Home Base
              </div>
              <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
                Electrical Services in Duvall, WA
              </h2>
              <p className="mt-6 text-base text-navy-300 leading-relaxed">
                Duvall is where Sparks Electric and Service is based, and we are proud to serve our local community. Whether you live in a historic home near downtown Duvall or a newer property in the surrounding hills, we understand the electrical challenges common to the area — from older wiring that needs updating to modern homes adding EV chargers and smart home systems.
              </p>
              <p className="mt-4 text-base text-navy-300 leading-relaxed">
                We offer the full range of our electrical services right here in Duvall. Explore our services below, or call us directly to discuss your project.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {services.slice(0, 6).map((s) => (
                  <Link
                    key={s.slug}
                    to={`/${s.slug}-duvall-wa`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-electric-500 hover:text-electric-600 transition-colors"
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                    {s.shortName} in Duvall
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <CallButton size="lg" label={`Call ${PHONE_DISPLAY}`} />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Electrician installing wiring in a residential home"
                loading="lazy"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={generalFaqs} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-electric-500 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Need an Electrician? Call Us Today.
          </h2>
          <p className="mt-4 text-lg text-electric-100">
            From repairs to installations, Sparks Electric and Service is ready to help with your electrical needs in Duvall and the Snoqualmie Valley. Pick up the phone and let's get started.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <CallButton
              size="lg"
              variant="primary"
              label={`Call ${PHONE_DISPLAY}`}
              className="!bg-warmyellow-400 !text-navy-500 hover:!bg-warmyellow-300"
            />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/10"
            >
              View Contact Information
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
