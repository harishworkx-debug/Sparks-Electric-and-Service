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
  Camera,
  Flame,
  ShieldCheck,
} from 'lucide-react';
import SEO from '@/components/SEO';
import CallButton from '@/components/CallButton';
import ServiceCard from '@/components/ServiceCard';
import FAQAccordion from '@/components/FAQAccordion';
import ReviewsSection from '@/components/ReviewsSection';
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  BUSINESS_NAME,
  BUSINESS_ADDRESS,
  WA_LICENSE_INFO,
  services,
  MAPS_LINK,
} from '@/data/services';
import { locations } from '@/data/locations';
import { GOOGLE_RATING, TOTAL_REVIEWS } from '@/data/reviews';
import { generalFaqs } from '@/data/faqs';
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
  faqSchema,
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
    title: 'Describe Your Project',
    description: 'Explain the electrical problem or installation in detail. We assess the requirements and confirm the right approach.',
  },
  {
    icon: Clock,
    title: 'Discuss Availability',
    description: 'We confirm service availability in Duvall or your local area and schedule an on-site assessment at a time that works for you.',
  },
  {
    icon: CheckCircle,
    title: 'Code-Compliant Execution',
    description: 'We diagnose the issue, provide upfront pricing, and complete code-compliant electrical work tested for long-term safety.',
  },
];

const whyChoose = [
  {
    icon: MapPin,
    title: 'Based in Duvall, WA',
    description: 'We are a local Duvall electrical contractor rooted in the Snoqualmie Valley. Being local means responsive, dependable service for our neighbors.',
  },
  {
    icon: ShieldCheck,
    title: 'Licensed WA Contractor',
    description: 'Fully licensed, bonded, and insured Washington State electrical contractor. All work adheres to National Electrical Code (NEC) and WAC 296-46B standards.',
  },
  {
    icon: Users,
    title: 'Direct Phone Communication',
    description: 'When you call (206) 476-7798, you speak directly with an experienced professional. No automated call centers, confusing chatbots, or delayed emails.',
  },
  {
    icon: Wrench,
    title: 'Meticulous Execution',
    description: 'From panel replacements to EV chargers, we ask detailed questions about your setup, plan conduit runs cleanly, and test every circuit thoroughly.',
  },
];

const commonIssues = [
  {
    icon: AlertTriangle,
    title: 'Frequently Tripping Breakers',
    description: 'Breakers that trip repeatedly indicate overloaded branch circuits or internal short circuits that require professional panel evaluation.',
  },
  {
    icon: Zap,
    title: 'Flickering or Dimming Lights',
    description: 'Lights that flicker when appliances start up point to voltage drops, loose neutral terminations, or panel capacity limits.',
  },
  {
    icon: Plug,
    title: 'Dead or Non-Working Outlets',
    description: 'Outlets that lose power may have a tripped GFCI, loose wire connections, or damaged conductors behind the drywall.',
  },
  {
    icon: ShieldAlert,
    title: 'Switches or Outlets Warm to the Touch',
    description: 'Warm faceplates or burning smells signal dangerous resistance and arcing that require immediate professional attention.',
  },
  {
    icon: Home,
    title: 'Older Snoqualmie Valley Wiring',
    description: 'Homes built decades ago often feature ungrounded 2-wire circuits or deteriorating insulation that cannot safely support modern loads.',
  },
  {
    icon: BatteryCharging,
    title: 'Undersized 100-Amp Panels',
    description: 'Adding heat pumps, air conditioning, or an EV charger usually exceeds 100A capacity, necessitating a modern 200A service upgrade.',
  },
];

const recentProjects = [
  {
    title: 'Level 2 EV Charger & Outdoor Camera Integration',
    location: 'Residential Garage — Snoqualmie Valley',
    description:
      'Installed a 240V 50-amp dedicated Level 2 EV charging circuit in the garage, coordinated conduit routing cleanly along the wall, and tied in outdoor security cameras to dedicated breakers.',
    category: 'EV Charging & Wiring',
    image:
      'https://images.pexels.com/photos/9800004/pexels-photo-9800004.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Whole-Home Breaker Surge Protection & Panel Upgrades',
    location: 'Single Family Residence — Duvall, WA',
    description:
      'Replaced an aging, crowded load center with a modern 200-amp electrical panel, installed whole-home Type 2 surge protection, and reorganized branch circuits for safety and code compliance.',
    category: 'Panel Upgrades',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Recessed LED Downlighting & Ceiling Fan Installation',
    location: 'Living & Bedroom Remodel — Duvall, WA',
    description:
      'Installed airtight IC-rated ultra-thin LED recessed pot lights with compatible dimmer switches, and mounted fan-rated ceiling brace boxes for high vaulted ceiling fans.',
    category: 'Lighting & Fans',
    image:
      'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Standby Generator Transfer Switch & Interlock Setup',
    location: 'Rural Property — Snoqualmie River Valley',
    description:
      'Installed a manual generator transfer switch and interlock kit with an exterior weatherproof power inlet box to keep essential heat, refrigeration, and well pumps running during winter outages.',
    category: 'Backup Power',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function HomePage() {
  return (
    <>
      <SEO
        title="Electrician in Duvall, WA | Sparks Electric & Service"
        description="Looking for electrical services in Duvall, WA? Contact Sparks Electric & Service for residential electrical repairs, wiring, lighting, panel upgrades and more. Request a service estimate today."
        canonicalPath="/"
        structuredData={[
          localBusinessSchema(),
          organizationSchema(),
          websiteSchema(),
          faqSchema(generalFaqs),
        ]}
      />

      {/* Section 1: Hero Section */}
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
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-500/20 px-4 py-1.5 text-sm font-medium text-electric-200">
              <MapPin className="h-4 w-4" />
              Primary Service Area: Duvall, WA & Snoqualmie Valley
            </div>
            <h1 className="font-display text-4xl font-bold text-white leading-tight sm:text-5xl lg:text-6xl">
              Reliable Electrical Services in Duvall, WA
            </h1>
            <p className="mt-6 text-lg text-navy-100 leading-relaxed max-w-2xl">
              Looking for electrical services in Duvall, WA? Sparks Electric & Service provides dependable residential electrical repairs, wiring, lighting, panel upgrades, and EV charger installations. Speak directly with a licensed Washington electrician.
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

      {/* Section 2: Trust Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-electric-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Location</p>
                <p className="text-sm font-bold text-navy-500">Duvall, WA 98019</p>
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
                  5.0 ★★★★★ ({TOTAL_REVIEWS} Reviews)
                </p>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-8 w-8 text-emerald-600 flex-shrink-0" />
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Licensing</p>
                <p className="text-sm font-bold text-navy-500">WA L&I Contractor</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Building2 className="h-8 w-8 text-electric-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Scope</p>
                <p className="text-sm font-bold text-navy-500">Res & Commercial</p>
              </div>
            </div>
            <div className="flex items-center gap-3 col-span-2 sm:col-span-1">
              <Phone className="h-8 w-8 text-electric-500 flex-shrink-0" />
              <div>
                <p className="text-xs text-navy-200 uppercase font-semibold">Direct Phone</p>
                <a
                  href={PHONE_LINK}
                  className="text-sm font-bold text-electric-500 hover:text-electric-600 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: About Sparks Electric & Service */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-100 px-3.5 py-1 text-xs font-semibold text-electric-600">
                <ShieldCheck className="h-4 w-4" />
                Local Duvall Electrical Contractor
              </div>
              <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
                About Sparks Electric & Service
              </h2>
              <p className="mt-6 text-base text-navy-300 leading-relaxed">
                Sparks Electric & Service is based at {BUSINESS_ADDRESS.full}, providing dedicated residential and commercial electrical craftsmanship throughout Duvall and the surrounding Snoqualmie Valley.
              </p>
              <p className="mt-4 text-base text-navy-300 leading-relaxed">
                Led by Jonathon, our focus is grounded in meticulous attention to detail, transparent planning, fair pricing, and putting homeowner safety and comfort first every single time. Whether diagnosing an intermittent electrical fault, wiring a whole-house remodel, or installing a high-draw EV charging station, we take the time to understand exactly what you need and deliver lasting, code-compliant solutions.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-navy-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  WA State Licensed & Insured
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  Direct Phone Scheduling
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                  Code-Compliant Guaranteed
                </span>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <CallButton label={`Call ${PHONE_DISPLAY}`} />
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-electric-500 hover:text-electric-600 transition-colors"
                >
                  Learn About Our Company
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=900"
                  alt="Electrician working on electrical system in a home"
                  className="h-[420px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl bg-navy-500 p-5 text-white shadow-lg hidden sm:block">
                <p className="font-display text-2xl font-bold text-warmyellow-400">5.0 ★★★★★</p>
                <p className="text-xs text-navy-100">Top-Rated on Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Residential Electrical Services */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Residential Electrical Services in Duvall
            </h2>
            <p className="mt-4 text-base text-navy-300 leading-relaxed">
              From historic Duvall residences to new custom homes across the Snoqualmie Valley, we provide safe, code-compliant residential electrical solutions tailored to your property.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-gray-100 bg-lightgray p-6 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500 text-white mb-4">
                <Wrench className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-500 mb-2">
                Electrical Repairs & Troubleshooting
              </h3>
              <p className="text-sm text-navy-300 leading-relaxed mb-4">
                Fast diagnostic evaluation for tripping breakers, dead outlets, flickering fixtures, and unexpected power interruptions.
              </p>
              <Link
                to="/electrical-repair-duvall-wa"
                className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 hover:text-electric-600"
              >
                Electrical Repair in Duvall <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-xl border border-gray-100 bg-lightgray p-6 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500 text-white mb-4">
                <BatteryCharging className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-500 mb-2">
                EV Charger Installation (Level 2)
              </h3>
              <p className="text-sm text-navy-300 leading-relaxed mb-4">
                Professional 240V charging station installation for Tesla, ChargePoint, and universal Level 2 chargers with dedicated breakers.
              </p>
              <Link
                to="/ev-charger-installation-duvall-wa"
                className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 hover:text-electric-600"
              >
                EV Charger in Duvall <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-xl border border-gray-100 bg-lightgray p-6 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500 text-white mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-500 mb-2">
                200-Amp Electrical Panel Upgrades
              </h3>
              <p className="text-sm text-navy-300 leading-relaxed mb-4">
                Upgrade outdated 100A service boxes to 200A modern load centers to safely power heat pumps, air conditioning, and high-draw appliances.
              </p>
              <Link
                to="/electrical-panel-upgrade-duvall-wa"
                className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 hover:text-electric-600"
              >
                Panel Upgrade in Duvall <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-xl border border-gray-100 bg-lightgray p-6 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500 text-white mb-4">
                <Home className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-500 mb-2">
                Home Rewiring & Renovations
              </h3>
              <p className="text-sm text-navy-300 leading-relaxed mb-4">
                Remediate ungrounded cloth-sheathed wiring, add subpanels to detached shops, and wire kitchen or basement remodels.
              </p>
              <Link
                to="/electrical-wiring-duvall-wa"
                className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 hover:text-electric-600"
              >
                Electrical Wiring in Duvall <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-xl border border-gray-100 bg-lightgray p-6 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500 text-white mb-4">
                <Plug className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-500 mb-2">
                Lighting & Ceiling Fan Installation
              </h3>
              <p className="text-sm text-navy-300 leading-relaxed mb-4">
                Energy-efficient LED recessed downlighting, dimmer switch loops, high-vaulted ceiling fan wiring, and outdoor illumination.
              </p>
              <Link
                to="/lighting-installation-duvall-wa"
                className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 hover:text-electric-600"
              >
                Lighting in Duvall <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="rounded-xl border border-gray-100 bg-lightgray p-6 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-electric-500 text-white mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-500 mb-2">
                Backup Generators & Surge Protection
              </h3>
              <p className="text-sm text-navy-300 leading-relaxed mb-4">
                Manual transfer switches and generator interlock kits to keep your heat, water, and refrigeration running during winter storms.
              </p>
              <Link
                to="/generator-installation-duvall-wa"
                className="inline-flex items-center gap-1 text-sm font-semibold text-electric-500 hover:text-electric-600"
              >
                Generator Setup in Duvall <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Commercial Electrical Services */}
      <section className="bg-navy-500 py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-electric-500/20 px-3.5 py-1 text-xs font-semibold text-warmyellow-400">
                <Building2 className="h-4 w-4" />
                Light Commercial & Business
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-4xl">
                Commercial Electrical Services
              </h2>
              <p className="mt-4 text-base text-navy-100 leading-relaxed">
                Sparks Electric & Service also provides commercial electrical solutions for local small businesses, offices, retail spaces, and light commercial properties throughout Duvall and the surrounding area.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-navy-100">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmyellow-400 flex-shrink-0 mt-0.5" />
                  <span>Dedicated circuits for commercial equipment, appliances, and servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmyellow-400 flex-shrink-0 mt-0.5" />
                  <span>Commercial LED lighting retrofits and energy-efficient ballast replacements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmyellow-400 flex-shrink-0 mt-0.5" />
                  <span>Tenant improvement (TI) build-outs and office electrical alterations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-warmyellow-400 flex-shrink-0 mt-0.5" />
                  <span>Three-phase power balancing and commercial panel service upgrades</span>
                </li>
              </ul>
              <div className="mt-8 flex items-center gap-4">
                <CallButton
                  label={`Call ${PHONE_DISPLAY}`}
                  className="!bg-warmyellow-400 !text-navy-500 hover:!bg-warmyellow-300"
                />
                <Link
                  to="/commercial-electrical-duvall-wa"
                  className="text-sm font-bold text-warmyellow-400 hover:text-warmyellow-300 transition-colors"
                >
                  Commercial Services in Duvall &rarr;
                </Link>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl border border-navy-400/40">
              <img
                src="https://images.pexels.com/photos/10871929/pexels-photo-10871929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                alt="Commercial electrical panels and equipment inspection"
                className="h-[360px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Individual Service Cards with Descriptive Links */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Complete Electrical Service Catalog
            </h2>
            <p className="mt-4 text-base text-navy-300">
              Browse all 12 services provided by Sparks Electric & Service. Select any service to explore detailed solutions, diagnostic processes, and pricing insights.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          {/* Descriptive Service Anchor Links Directory */}
          <div className="rounded-xl bg-white p-6 border border-gray-200">
            <h3 className="font-display text-base font-bold text-navy-500 mb-3 text-center sm:text-left">
              Quick Directory: Sparks Electric Services
            </h3>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-electric-600">
              <Link to="/services" className="hover:text-electric-700 hover:underline">
                Electrician Services
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/electrical-repair-duvall-wa" className="hover:text-electric-700 hover:underline">
                Electrical Repair
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/electrical-troubleshooting-duvall-wa" className="hover:text-electric-700 hover:underline">
                Electrical Troubleshooting
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/electrical-wiring-duvall-wa" className="hover:text-electric-700 hover:underline">
                Electrical Wiring
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/lighting-installation-duvall-wa" className="hover:text-electric-700 hover:underline">
                Lighting Installation
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/ceiling-fan-installation-duvall-wa" className="hover:text-electric-700 hover:underline">
                Ceiling Fan Installation
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/electrical-panel-upgrade-duvall-wa" className="hover:text-electric-700 hover:underline">
                Electrical Panel Upgrade
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/ev-charger-installation-duvall-wa" className="hover:text-electric-700 hover:underline">
                EV Charger Installation
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/outlet-installation-duvall-wa" className="hover:text-electric-700 hover:underline">
                Outlet Installation
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/switch-installation-duvall-wa" className="hover:text-electric-700 hover:underline">
                Switch Installation
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/circuit-breaker-repair-duvall-wa" className="hover:text-electric-700 hover:underline">
                Circuit Breaker Repair
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/generator-installation-duvall-wa" className="hover:text-electric-700 hover:underline">
                Generator Installation
              </Link>
              <span className="text-gray-300">&bull;</span>
              <Link to="/commercial-electrical-duvall-wa" className="hover:text-electric-700 hover:underline">
                Commercial Electrical Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Common Electrical Problems That Require Professional Attention */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Electrical Problems That May Require Professional Attention
            </h2>
            <p className="mt-4 text-base text-navy-300">
              Some electrical issues should never be ignored. If you notice any of these signs, contact a licensed electrician promptly to evaluate your system.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commonIssues.map((issue) => (
              <div
                key={issue.title}
                className="rounded-xl bg-lightgray p-6 transition-all hover:shadow-md border border-gray-100"
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
            <CallButton size="lg" label={`Call ${PHONE_DISPLAY} for Assessment`} />
          </div>
        </div>
      </section>

      {/* Section 8: Recent Electrical Projects & Work */}
      <section className="bg-lightgray py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-electric-100 px-3 py-1 text-xs font-semibold text-electric-600">
              <Camera className="h-3.5 w-3.5" />
              Verified Local Workmanship
            </div>
            <h2 className="font-display text-3xl font-bold text-navy-500 sm:text-4xl">
              Recent Electrical Projects
            </h2>
            <p className="mt-4 text-base text-navy-300">
              Take a look at the types of residential and commercial electrical work we complete across Duvall and the surrounding Snoqualmie Valley communities.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {recentProjects.map((proj, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl bg-white shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="mb-2 flex items-center justify-between text-xs font-semibold text-electric-500">
                      <span>{proj.category}</span>
                      <span className="text-navy-300">{proj.location}</span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-navy-500 mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-navy-300 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Why Homeowners Choose Sparks Electric & Service */}
      <section className="bg-navy-500 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Why Homeowners Choose Sparks Electric & Service
            </h2>
            <p className="mt-4 text-base text-navy-100">
              A local, licensed electrical contractor committed to quality craftsmanship, safety, and straightforward phone communication.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-navy-400/50 p-6 transition-all hover:bg-navy-400/80 border border-navy-400/30"
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

      {/* Section 10: Verified Google Reviews */}
      <ReviewsSection bgClass="bg-white" />

      {/* Section 11: Areas Served */}
      <section className="bg-navy-600 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Service Areas
            </h2>
            <p className="mt-3 text-base text-navy-100">
              Based in Duvall, WA and serving communities across the Snoqualmie Valley and King & Snohomish counties.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/${loc.slug}`}
                className="group flex items-center gap-2 rounded-lg bg-navy-500/80 px-4 py-3 text-white transition-all hover:bg-electric-500"
              >
                <MapPin className="h-5 w-5 text-warmyellow-400 flex-shrink-0" />
                <span className="text-sm font-medium group-hover:text-white">{loc.shortName}</span>
                {loc.isMain && (
                  <span className="ml-auto text-xs rounded bg-warmyellow-400 text-navy-500 px-1.5 py-0.5 font-bold">
                    Home Base
                  </span>
                )}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/service-areas"
              className="inline-flex items-center gap-2 font-bold text-warmyellow-400 hover:text-warmyellow-300 transition-colors"
            >
              Explore All Service Areas &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 12: Frequently Asked Questions */}
      <section className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={generalFaqs} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* Section 13: Contact Information & Service Enquiry CTA */}
      <section className="bg-navy-500 py-16 lg:py-20 text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Request an Electrical Assessment in Duvall, WA
          </h2>
          <p className="mt-4 text-base text-navy-100 max-w-2xl mx-auto leading-relaxed">
            Whether you need a breaker repair, new lighting, an EV charging station, or a 200-amp panel upgrade, contact Sparks Electric & Service to discuss your project and schedule an on-site evaluation.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <CallButton
              size="lg"
              variant="primary"
              label={`Call ${PHONE_DISPLAY}`}
              className="!bg-warmyellow-400 !text-navy-500 hover:!bg-warmyellow-300 w-full sm:w-auto"
            />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white px-7 py-3.5 text-base font-bold text-white transition-all hover:bg-white/10 w-full sm:w-auto"
            >
              View Office & Location Details
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-navy-400/30 text-xs text-navy-200 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <span><strong>Office:</strong> {BUSINESS_ADDRESS.full}</span>
            <span><strong>License:</strong> {WA_LICENSE_INFO}</span>
            <span><strong>Direct Line:</strong> {PHONE_DISPLAY}</span>
          </div>
        </div>
      </section>
    </>
  );
}
