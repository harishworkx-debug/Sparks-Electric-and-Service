// Centralized configuration for the standalone single-page landing website.
// STRICT RULE: All identity is strictly SERVICE NICHE + LOCATION.
// Never use the actual business name anywhere in this file or its components.

export const LANDING_CONFIG = {
  // Website Identity: SERVICE NICHE + LOCATION ONLY
  niche: 'Electrician',
  location: 'Duvall',
  state: 'WA',
  stateFull: 'Washington',
  identity: 'Electrician in Duvall',
  identityFull: 'Electrician in Duvall, WA',
  tagline: 'Professional Electrical Services in Duvall & Snoqualmie Valley',

  // Verified Contact Details from Project
  phoneDisplay: '(206) 476-7798',
  phoneLink: 'tel:+12064767798',
  address: {
    street: '12520 322nd Ave NE',
    city: 'Duvall',
    state: 'WA',
    zip: '98019',
    county: 'King County',
    full: '12520 322nd Ave NE, Duvall, WA 98019',
  },

  // Verified Licensing Context
  licensing: 'Licensed, Bonded & Insured WA Electrical Contractor',
  regulatoryBody: 'Washington State Department of Labor & Industries (L&I)',
  electricalCode: 'National Electrical Code (NEC) & WAC 296-46B',

  // Google Maps Embed for Duvall, WA (Clean city center map)
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85944.9243878395!2d-121.985000!3d47.692000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54907409f581db3d%3A0x8cf6a9254d3ec33d!2sDuvall%2C%20WA%2098019!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',

  // Hero & Visual Assets (Reusing verified images from existing project)
  heroImage:
    'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1600',
  heroImageAlt: 'Certified electrician working on a modern residential electrical panel in Duvall, WA',

  // Genuine Services Offered
  services: [
    {
      id: 'electrical-repair',
      title: 'Electrical Repair & Troubleshooting',
      shortDesc:
        'Fast, accurate diagnosis and safe repair for tripping breakers, non-working outlets, flickering lights, and intermittent electrical faults.',
      features: [
        'Circuit breaker diagnostics & replacement',
        'Dead or ungrounded outlet repairs',
        'Flickering light circuit troubleshooting',
        'Emergency short circuit isolation',
      ],
      iconName: 'Wrench',
    },
    {
      id: 'panel-upgrades',
      title: 'Electrical Panel Upgrades (200-Amp)',
      shortDesc:
        'Replace outdated, overloaded, or hazardous electrical panels with modern 200-amp service panels built to handle modern household electrical loads.',
      features: [
        '100A to 200A service capacity upgrades',
        'Whole-home surge protection integration',
        'Subpanel installation for workshops & sheds',
        'Utility disconnect coordination (PSE / PUD)',
      ],
      iconName: 'ShieldAlert',
    },
    {
      id: 'ev-chargers',
      title: 'Level 2 EV Charger Installation',
      shortDesc:
        'Dedicated 240V circuits and professional wall-connector installation for Tesla, Rivian, Ford, and all universal electric vehicles.',
      features: [
        'Hardwired and NEMA 14-50 outlet options',
        'Electrical load calculation & permit filing',
        'Indoor garage & weatherproof outdoor setups',
        'Faster, safer overnight charging at home',
      ],
      iconName: 'BatteryCharging',
    },
    {
      id: 'wiring',
      title: 'Electrical Wiring & Rewiring',
      shortDesc:
        'Complete wiring solutions for home renovations, room additions, kitchen remodels, and updating older knob-and-tube or ungrounded wiring.',
      features: [
        'Dedicated appliance circuits (HVAC, stoves, dryers)',
        'GFCI & AFCI safety protection upgrades',
        'Basement, garage & ADU wiring additions',
        'Strict adherence to Washington L&I standards',
      ],
      iconName: 'Plug',
    },
    {
      id: 'lighting-fans',
      title: 'Lighting & Ceiling Fan Installation',
      shortDesc:
        'Transform interior and exterior living spaces with modern energy-efficient LED recessed lighting, smart switches, and balanced ceiling fans.',
      features: [
        'Recessed canless LED retrofit lighting',
        'Outdoor security floods & landscape lighting',
        'Heavy-duty ceiling fan rated electrical boxes',
        'Dimmer switch & 3-way lighting controls',
      ],
      iconName: 'Zap',
    },
    {
      id: 'generators',
      title: 'Generator Transfer Switch Installation',
      shortDesc:
        'Prepare your Duvall home for Snoqualmie Valley winter power outages with safe, code-compliant manual transfer switches and interlock kits.',
      features: [
        'Manual transfer switch wiring for portable generators',
        'Safe mechanical interlock kit installation',
        'Critical circuit backup (well pump, fridge, heat)',
        'Backfeed prevention protecting line workers',
      ],
      iconName: 'Home',
    },
  ],

  // Primary Location and Genuinely Served Nearby Areas
  primaryLocation: {
    name: 'Duvall',
    state: 'WA',
    zip: '98019',
    county: 'King County',
    description:
      'Our primary service hub in the Snoqualmie Valley, serving both historic downtown homes and rural properties along the valley floor and foothills.',
  },
  nearbyLocations: [
    { name: 'Carnation', state: 'WA', zip: '98014', county: 'King County' },
    { name: 'Monroe', state: 'WA', zip: '98272', county: 'Snohomish County' },
    { name: 'Snoqualmie', state: 'WA', zip: '98065', county: 'King County' },
    { name: 'North Bend', state: 'WA', zip: '98045', county: 'King County' },
    { name: 'Redmond', state: 'WA', zip: '98052, 98053', county: 'King County' },
    { name: 'Woodinville', state: 'WA', zip: '98072', county: 'King County' },
    { name: 'Sammamish', state: 'WA', zip: '98074, 98075', county: 'King County' },
    { name: 'Fall City', state: 'WA', zip: '98024', county: 'King County' },
  ],

  // Value Pillars (Verifiable advantages only)
  valuePillars: [
    {
      title: 'Licensed WA Electrical Contractor',
      desc: 'All electrical work is performed strictly in compliance with Washington State Department of Labor & Industries (L&I) rules and current NEC regulations.',
      icon: 'ShieldCheck',
    },
    {
      title: 'Duvall & Snoqualmie Valley Expertise',
      desc: 'Deep familiarity with local rural electrical needs, well pump circuits, older valley homes, and winter storm resilience.',
      icon: 'MapPin',
    },
    {
      title: 'Clear, Upfront Pricing',
      desc: 'You receive honest, transparent estimates before any work begins. No surprises, hidden service fees, or high-pressure upselling.',
      icon: 'CheckCircle',
    },
    {
      title: 'Root-Cause Diagnostics',
      desc: 'We don’t just reset tripped breakers or swap faceplates. We trace the underlying electrical fault to ensure long-term home safety.',
      icon: 'Search',
    },
  ],

  // Industry-Specific Local FAQs
  faqs: [
    {
      q: 'Do I need an electrical permit for work done in Duvall, WA?',
      a: 'Yes, in Washington State, most electrical alterations—including electrical panel replacements, adding new circuits, EV charger installations, and major rewiring—require an electrical permit and inspection from the Washington State Department of Labor & Industries (L&I). We handle the permit filing and ensure all work passes state inspection without hassle.',
    },
    {
      q: 'How do I know if my Duvall home needs an electrical panel upgrade?',
      a: 'Common signs include frequent circuit breaker trips, flickering lights when major appliances kick on, buzzing sounds from your panel box, or still having an outdated 100-amp service or fuse box. If you are adding a heat pump, hot tub, or Level 2 EV charger, an upgrade to a 200-amp panel is typically required to safely support the additional load.',
    },
    {
      q: 'What is involved in installing a Level 2 EV charger at home?',
      a: 'A Level 2 EV charger requires a dedicated 240-volt circuit (typically 40 to 60 amps depending on your vehicle and charger). We inspect your main panel to verify electrical capacity, install heavy-gauge copper wiring inside protective conduit, wire the wall charger or NEMA 14-50 receptacle, and perform rigorous safety testing.',
    },
    {
      q: 'Why should I install a generator transfer switch instead of using extension cords?',
      a: 'Snoqualmie Valley winter storms frequently cause extended power outages. Running extension cords through windows creates carbon monoxide and fire hazards and cannot power hardwired essentials like well pumps or furnace blowers. A manual transfer switch or mechanical interlock allows you to safely power critical home circuits directly from your generator while preventing dangerous electrical backfeeding into the utility grid.',
    },
    {
      q: 'How quickly can I schedule electrical service in Duvall or nearby Snoqualmie Valley areas?',
      a: 'We prioritize prompt response times for all inquiries throughout Duvall, Carnation, Monroe, Redmond, and surrounding King County communities. Call (206) 476-7798 directly to discuss your electrical project, confirm appointment availability, and get your questions answered.',
    },
  ],
};
