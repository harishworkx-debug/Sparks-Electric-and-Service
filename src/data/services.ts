export interface ServiceData {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  icon: string;
  commonIssues: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServiceSlugs: string[];
}

export const PHONE_DISPLAY = '(832) 520-2717';
export const PHONE_LINK = 'tel:+18325202717';
export const BUSINESS_NAME = 'Sparks Electric and Service';
export const WEBSITE_URL = 'https://www.sparkselectricandservice.com/';
export const MAPS_LINK = 'https://maps.app.goo.gl/WA4z5H2YFEj7MxEi7';
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85944.9243878395!2d-121.930765!3d47.68871395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ccd8cfa75de2a09%3A0xeddc5bd7d88e7188!2sSparks%20Electric%20and%20Service!5e0!3m2!1sen!2sin!4v1794642935324!5m2!1sen!2sin';

export const BUSINESS_ADDRESS = {
  street: '12520 322nd Ave NE',
  city: 'Duvall',
  state: 'WA',
  stateFull: 'Washington',
  zip: '98019',
  country: 'US',
  full: '12520 322nd Ave NE, Duvall, WA 98019',
};

export const WA_LICENSE_INFO = 'Licensed, Bonded & Insured WA Electrical Contractor';

export const services: ServiceData[] = [
  {
    slug: 'electrical-repair',
    name: 'Electrical Repair',
    shortName: 'Electrical Repair',
    description:
      'Fast, reliable repair for faulty wiring, tripping breakers, dead outlets, and other electrical issues in your home or business.',
    longDescription:
      'When electrical systems malfunction, the safety and comfort of your home or business are at stake. Sparks Electric and Service provides prompt electrical repair services throughout Duvall and the surrounding Snoqualmie Valley. From tripping breakers and dead outlets to flickering lights and faulty wiring, our team diagnoses the root cause and delivers lasting repairs that bring your system back to safe, reliable operation.',
    image:
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician repairing a circuit breaker panel with colorful wires',
    icon: 'Wrench',
    commonIssues: [
      'Circuit breakers that trip repeatedly',
      'Outlets that have stopped working',
      'Flickering or dimming lights',
      'Burning smell from outlets or switches',
      'Switches that feel warm to the touch',
      'Buzzing or humming sounds from the panel',
    ],
    process: [
      {
        title: 'Call and Describe the Issue',
        description:
          'Call (832) 520-2717 and describe what you are experiencing. We will help assess the urgency and schedule a visit.',
      },
      {
        title: 'On-Site Diagnosis',
        description:
          'Our electrician inspects the affected circuits, outlets, or panel to identify the root cause of the problem.',
      },
      {
        title: 'Repair and Test',
        description:
          'We perform the repair using code-compliant materials and test the circuit to confirm everything is working safely.',
      },
    ],
    faqs: [
      {
        question: 'Do you offer same-day electrical repair in Duvall?',
        answer:
          'We strive to respond to repair calls as quickly as possible. Call (832) 520-2717 to discuss your situation and current availability.',
      },
      {
        question: 'Is a tripping breaker dangerous?',
        answer:
          'A tripping breaker is a safety mechanism that cuts power when a circuit is overloaded. However, frequent tripping can indicate a deeper problem that should be diagnosed by a qualified electrician.',
      },
      {
        question: 'Can you repair aluminum wiring?',
        answer:
          'Yes. If your home has aluminum wiring, we can evaluate the condition and recommend appropriate repair or remediation to improve safety.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-troubleshooting',
      'electrical-wiring',
      'electrical-panel-upgrade',
      'outlet-installation',
    ],
  },
  {
    slug: 'electrical-troubleshooting',
    name: 'Electrical Troubleshooting',
    shortName: 'Electrical Troubleshooting',
    description:
      'Systematic diagnosis of complex electrical problems to pinpoint the cause and recommend the right fix.',
    longDescription:
      'Electrical problems are not always obvious. A light that flickers, an outlet that works intermittently, or a breaker that trips for no clear reason can all point to underlying issues that require careful diagnosis. Sparks Electric and Service uses a systematic troubleshooting approach to trace problems to their source, ensuring that repairs address the actual cause rather than just the symptom.',
    image:
      'https://images.pexels.com/photos/14319099/pexels-photo-14319099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician using a multimeter to troubleshoot control panel wiring',
    icon: 'Search',
    commonIssues: [
      'Intermittent power loss in part of the house',
      'Lights that dim when appliances turn on',
      'GFCI outlets that keep resetting',
      'Unexplained high electric bills',
      'Outlets that work sometimes but not always',
      'Circuits that fail under specific loads',
    ],
    process: [
      {
        title: 'Describe the Symptoms',
        description:
          'Call us and describe what you are experiencing in as much detail as possible. Patterns help us narrow down likely causes.',
      },
      {
        title: 'Systematic Testing',
        description:
          'We use professional diagnostic tools including multimeters and circuit testers to trace the problem through your wiring and panel.',
      },
      {
        title: 'Clear Explanation and Options',
        description:
          'Once the cause is identified, we explain what is happening and what repairs are needed to resolve it.',
      },
    ],
    faqs: [
      {
        question: 'How long does electrical troubleshooting take?',
        answer:
          'It depends on the complexity of the problem. Some issues are identified within minutes, while others that involve hidden wiring or intermittent faults may take longer to trace.',
      },
      {
        question: 'Will troubleshooting find the cause of my high electric bill?',
        answer:
          'Troubleshooting can identify issues like ground faults or inefficient circuits that may contribute to higher usage. We can also help assess whether the problem is electrical or utility-related.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-repair',
      'electrical-wiring',
      'electrical-panel-upgrade',
      'circuit-breaker-repair',
    ],
  },
  {
    slug: 'electrical-wiring',
    name: 'Electrical Wiring',
    shortName: 'Electrical Wiring',
    description:
      'New wiring installation and rewiring for homes, additions, remodels, and commercial spaces — all to current code.',
    longDescription:
      'Proper wiring is the foundation of a safe electrical system. Whether you are building a new addition, remodeling a room, or replacing outdated wiring in an older home, Sparks Electric and Service installs and replaces wiring to meet current Washington State electrical code. We work with both residential and commercial properties throughout the Duvall area.',
    image:
      'https://images.pexels.com/photos/3615735/pexels-photo-3615735.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Close-up of electrical wiring in wall sockets ready for installation',
    icon: 'Cable',
    commonIssues: [
      'Older homes with two-prong ungrounded outlets',
      'Wiring that predates modern code requirements',
      'Knob-and-tube or aluminum wiring needing replacement',
      'New additions or remodels requiring new circuits',
      'Insufficient circuits for modern appliance loads',
    ],
    process: [
      {
        title: 'Discuss Your Project',
        description:
          'Call to describe the scope of your wiring project — whether it is a full rewiring, a new addition, or a targeted upgrade.',
      },
      {
        title: 'Plan and Install',
        description:
          'We plan the circuit layout, run new wiring to code, and install boxes, breakers, and connections.',
      },
      {
        title: 'Test and Verify',
        description:
          'Every new circuit is tested for proper voltage, grounding, and polarity before it is put into service.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my home needs rewiring?',
        answer:
          'Common signs include two-prong outlets, flickering lights, burning smells, or a home more than 40 years old that has never been updated. A professional inspection can confirm whether rewiring is needed.',
      },
      {
        question: 'Do you handle wiring for remodels and additions?',
        answer:
          'Yes. We install wiring for room additions, kitchen and bathroom remodels, basement finishes, and garage conversions.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-repair',
      'outlet-installation',
      'lighting-installation',
      'electrical-panel-upgrade',
    ],
  },
  {
    slug: 'lighting-installation',
    name: 'Lighting Installation',
    shortName: 'Lighting Installation',
    description:
      'Installation of indoor lighting, outdoor lighting, recessed lights, and landscape lighting for homes and businesses.',
    longDescription:
      'From recessed can lights and pendant fixtures to outdoor security lighting and landscape accents, Sparks Electric and Service installs lighting that enhances the function and appearance of your property. We handle the full installation including wiring, switch placement, and fixture mounting for residential and commercial properties in Duvall and surrounding areas.',
    image:
      'https://images.pexels.com/photos/8677357/pexels-photo-8677357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Outdoor string lights hanging with a colorful dusk sky in the background',
    icon: 'Lightbulb',
    commonIssues: [
      'Outdated or insufficient lighting in key rooms',
      'No outdoor lighting for safety and security',
      'Recessed light fixtures that have stopped working',
      'Desire for energy-efficient LED upgrades',
      'Landscape lighting that needs installation or repair',
    ],
    process: [
      {
        title: 'Discuss Your Lighting Goals',
        description:
          'Call and describe the look and function you want — whether it is brighter kitchens, secure entryways, or accent lighting for your yard.',
      },
      {
        title: 'Plan Fixture Placement',
        description:
          'We help determine the best fixture types, placement, and switch locations for your space and budget.',
      },
      {
        title: 'Install and Adjust',
        description:
          'We wire, mount, and connect each fixture, then test and adjust to make sure everything works and looks right.',
      },
    ],
    faqs: [
      {
        question: 'Can you install LED recessed lighting in existing ceilings?',
        answer:
          'Yes. We can retrofit recessed LED lighting into most existing ceilings, including insulated ceilings, using code-compliant IC-rated fixtures.',
      },
      {
        question: 'Do you install outdoor and landscape lighting?',
        answer:
          'Yes. We install outdoor security lighting, pathway lights, landscape accent lighting, and entryway fixtures for residential and commercial properties.',
      },
    ],
    relatedServiceSlugs: [
      'switch-installation',
      'ceiling-fan-installation',
      'electrical-wiring',
      'electrical-repair',
    ],
  },
  {
    slug: 'ceiling-fan-installation',
    name: 'Ceiling Fan Installation',
    shortName: 'Ceiling Fan Installation',
    description:
      'Safe installation of ceiling fans including new wiring, junction box upgrades, and secure mounting.',
    longDescription:
      'Ceiling fans improve comfort and reduce energy costs, but they require proper installation to be safe. A ceiling fan is heavier than a standard light fixture and needs a fan-rated junction box and secure mounting. Sparks Electric and Service installs ceiling fans in Duvall and surrounding areas, including running new wiring when no existing fixture is present.',
    image:
      'https://images.pexels.com/photos/39894640/pexels-photo-39894640.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Bright room with wooden flooring and a ceiling fan in a modern home',
    icon: 'Fan',
    commonIssues: [
      'Existing light fixture where a ceiling fan is desired',
      'Wobbly or noisy ceiling fan needing reinstallation',
      'No existing wiring in the desired ceiling location',
      'Standard junction box that is not fan-rated',
      'Fan with a broken remote or wall switch',
    ],
    process: [
      {
        title: 'Describe the Installation',
        description:
          'Call and tell us about the fan, the ceiling location, and whether there is already a fixture in place.',
      },
      {
        title: 'Prepare and Install',
        description:
          'We install a fan-rated junction box, run wiring if needed, and securely mount the fan to the ceiling structure.',
      },
      {
        title: 'Wire and Test',
        description:
          'We connect the fan, install any wall controls or remotes, and test all speeds and the light kit if included.',
      },
    ],
    faqs: [
      {
        question: 'Can you install a ceiling fan where there is no existing fixture?',
        answer:
          'Yes. We can run new wiring from the nearest circuit or switch to the ceiling location and install a fan-rated box.',
      },
      {
        question: 'Why is my ceiling fan wobbling?',
        answer:
          'Wobbling is usually caused by an un fan-rated junction box, loose mounting, or unbalanced blades. We can inspect and correct the installation.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-wiring',
      'lighting-installation',
      'switch-installation',
      'outlet-installation',
    ],
  },
  {
    slug: 'electrical-panel-upgrade',
    name: 'Electrical Panel Upgrade',
    shortName: 'Electrical Panel Upgrade',
    description:
      'Panel replacement and service upgrades to safely handle modern electrical demands in your home or business.',
    longDescription:
      'An outdated or undersized electrical panel is a safety risk and a bottleneck for modern electrical needs. If your panel is 100 amps or less, has fuses instead of breakers, or cannot support new circuits, an upgrade may be necessary. Sparks Electric and Service replaces and upgrades electrical panels throughout Duvall and the Snoqualmie Valley, bringing your service up to current code and capacity.',
    image:
      'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Professional electrician using a drill on an indoor circuit breaker panel',
    icon: 'Zap',
    commonIssues: [
      'Panel that is 100 amps or less',
      'Frequent breaker tripping when running multiple appliances',
      'Fuse box that needs conversion to breakers',
      'Panel with visible corrosion or damage',
      'Need for additional circuits for a remodel or EV charger',
    ],
    process: [
      {
        title: 'Assess Your Power Needs',
        description:
          'Call and describe your current panel, your electrical demands, and any planned additions like EV chargers or remodels.',
      },
      {
        title: 'Plan the Upgrade',
        description:
          'We determine the appropriate amperage, select a code-compliant panel, and coordinate any needed utility work.',
      },
      {
        title: 'Replace and Inspect',
        description:
          'We safely replace the panel, transfer all circuits, label everything clearly, and verify the installation meets code.',
      },
    ],
    faqs: [
      {
        question: 'How do I know if my panel needs an upgrade?',
        answer:
          'Signs include frequent breaker tripping, a panel rated at 100 amps or less, fuses instead of breakers, or plans to add major loads like an EV charger or HVAC system.',
      },
      {
        question: 'How long does a panel upgrade take?',
        answer:
          'A standard panel replacement typically takes a full day. More complex upgrades involving service entry changes may take longer. Call to discuss your specific situation.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-wiring',
      'circuit-breaker-repair',
      'ev-charger-installation',
      'generator-installation',
    ],
  },
  {
    slug: 'ev-charger-installation',
    name: 'EV Charger Installation',
    shortName: 'EV Charger Installation',
    description:
      'Level 2 EV charger installation for homes and businesses, including circuit installation and panel assessment.',
    longDescription:
      'As electric vehicles become common in the Duvall area, having a reliable home charging solution is essential. Sparks Electric and Service installs Level 2 EV chargers for residential and commercial properties. We assess your panel capacity, install a dedicated circuit, and mount and connect the charging unit for safe, efficient charging at home or work.',
    image:
      'https://images.pexels.com/photos/27355835/pexels-photo-27355835.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Blue electric vehicle charging at a home wall-mounted EV charging station',
    icon: 'BatteryCharging',
    commonIssues: [
      'No dedicated charging circuit at home',
      'Panel that may need upgrading for a Level 2 charger',
      'Need for a 240V outlet in a garage or driveway',
      'Commercial property needing EV charging stations',
    ],
    process: [
      {
        title: 'Assess Your Panel and Vehicle',
        description:
          'Call and tell us about your EV and your home. We assess whether your panel can support a Level 2 charger or needs an upgrade first.',
      },
      {
        title: 'Install the Dedicated Circuit',
        description:
          'We run a dedicated 240V circuit from the panel to the charger location, including any needed panel upgrades.',
      },
      {
        title: 'Mount and Connect',
        description:
          'We mount the charging unit, connect it to the circuit, and test it to confirm safe, reliable charging.',
      },
    ],
    faqs: [
      {
        question: 'Do I need a panel upgrade before installing an EV charger?',
        answer:
          'It depends on your current panel capacity and existing loads. We assess this as part of the installation process and will let you know if an upgrade is needed.',
      },
      {
        question: 'What is the difference between Level 1 and Level 2 charging?',
        answer:
          'Level 1 uses a standard 120V outlet and charges slowly. Level 2 uses a dedicated 240V circuit and charges significantly faster, making it the preferred choice for home EV charging.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-panel-upgrade',
      'electrical-wiring',
      'electrical-repair',
    ],
  },
  {
    slug: 'outlet-installation',
    name: 'Outlet Installation',
    shortName: 'Outlet Installation',
    description:
      'Installation of standard outlets, GFCI outlets, and dedicated circuits for appliances and electronics.',
    longDescription:
      'Whether you need additional outlets, GFCI protection in wet areas, or a dedicated circuit for a heavy appliance, Sparks Electric and Service handles outlet installation throughout Duvall and surrounding areas. We ensure every outlet is properly grounded, correctly rated, and code-compliant.',
    image:
      'https://images.pexels.com/photos/4981794/pexels-photo-4981794.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Gloved hands using a drill to install a power outlet on a wall',
    icon: 'Plug',
    commonIssues: [
      'Not enough outlets in key rooms',
      'Two-prong outlets that need grounding upgrades',
      'Kitchens and bathrooms needing GFCI protection',
      'Need for a dedicated outlet for a microwave or fridge',
      'Outdoor outlets that need weatherproof covers',
    ],
    process: [
      {
        title: 'Describe Your Needs',
        description:
          'Call and tell us where you need outlets, what they will power, and whether any areas need GFCI protection.',
      },
      {
        title: 'Install and Wire',
        description:
          'We run wiring from the nearest circuit or panel, install the box, and connect the outlet with proper grounding.',
      },
      {
        title: 'Test and Verify',
        description:
          'We test every new outlet for correct wiring, grounding, and GFCI function before finishing.',
      },
    ],
    faqs: [
      {
        question: 'What is a GFCI outlet and where is it required?',
        answer:
          'A GFCI (Ground Fault Circuit Interrupter) outlet shuts off power when it detects a ground fault, protecting against electric shock. They are required in kitchens, bathrooms, garages, outdoors, and other wet or damp locations.',
      },
      {
        question: 'Can you add an outlet anywhere in my home?',
        answer:
          'In most cases, yes. We can run wiring to most locations. The feasibility depends on wall access and distance from the panel. Call to discuss your specific needs.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-wiring',
      'switch-installation',
      'electrical-repair',
      'lighting-installation',
    ],
  },
  {
    slug: 'switch-installation',
    name: 'Switch Installation',
    shortName: 'Switch Installation',
    description:
      'Installation and replacement of light switches, dimmers, three-way switches, and smart switches.',
    longDescription:
      'Switches are small but essential parts of your electrical system. Sparks Electric and Service installs and replaces standard switches, dimmer switches, three-way and four-way switches, and smart switches throughout Duvall and the surrounding area. Whether you are upgrading to dimmable lighting or replacing a worn-out switch, we ensure correct wiring and safe operation.',
    image:
      'https://images.pexels.com/photos/7647233/pexels-photo-7647233.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Electrician adjusting an electrical outlet indoors',
    icon: 'ToggleRight',
    commonIssues: [
      'Switches that are warm, noisy, or spark when used',
      'Desire for dimmer switches in living areas',
      'Three-way switch circuits that are not working correctly',
      'Upgrading to smart or Wi-Fi-enabled switches',
      'Switches that feel loose or do not click properly',
    ],
    process: [
      {
        title: 'Describe the Switch Work',
        description:
          'Call and tell us what switches you need installed, replaced, or upgraded, including any smart switch requirements.',
      },
      {
        title: 'Install and Wire',
        description:
          'We remove the old switch, verify the wiring, and install the new switch or dimmer with correct connections.',
      },
      {
        title: 'Test and Label',
        description:
          'We test every switch for proper function and label three-way and four-way circuits for clarity.',
      },
    ],
    faqs: [
      {
        question: 'Can you install a dimmer on any light fixture?',
        answer:
          'Dimmers must be compatible with the fixture and bulb type. LED fixtures require LED-rated dimmers. We can verify compatibility and recommend the right dimmer for your setup.',
      },
      {
        question: 'Do you install smart switches?',
        answer:
          'Yes. We install Wi-Fi and smart-home-compatible switches. Some smart switches require a neutral wire, which we can add if it is not present.',
      },
    ],
    relatedServiceSlugs: [
      'outlet-installation',
      'lighting-installation',
      'electrical-wiring',
      'electrical-repair',
    ],
  },
  {
    slug: 'circuit-breaker-repair',
    name: 'Circuit Breaker Repair',
    shortName: 'Circuit Breaker Repair',
    description:
      'Repair and replacement of faulty breakers, overloaded circuits, and damaged panel components.',
    longDescription:
      'Circuit breakers protect your home by cutting power when a circuit is overloaded or faults. When a breaker fails, it can leave part of your home without power or, worse, fail to trip when it should. Sparks Electric and Service repairs and replaces faulty breakers throughout Duvall, ensuring your panel provides the protection it was designed for.',
    image:
      'https://images.pexels.com/photos/27928759/pexels-photo-27928759.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Focused technician using a drill on an electrical panel',
    icon: 'ShieldAlert',
    commonIssues: [
      'Breaker that will not stay reset',
      'Breaker that trips immediately when reset',
      'Physical damage or burning smell at the breaker',
      'Breaker that feels hot to the touch',
      'Need to replace an obsolete breaker brand',
    ],
    process: [
      {
        title: 'Describe the Breaker Problem',
        description:
          'Call and describe which breaker is affected and what happens when it trips or is reset.',
      },
      {
        title: 'Diagnose the Cause',
        description:
          'We determine whether the breaker itself is faulty or whether an overload or short circuit elsewhere is causing the trip.',
      },
      {
        title: 'Repair or Replace',
        description:
          'We replace the faulty breaker with a matching, code-compliant unit or repair the underlying circuit issue.',
      },
    ],
    faqs: [
      {
        question: 'Can I replace a breaker myself?',
        answer:
          'Breaker replacement involves working inside the panel, which is dangerous and should only be performed by a qualified electrician. Improper work can result in fire, injury, or failed inspection.',
      },
      {
        question: 'Why does my breaker trip when I use a specific appliance?',
        answer:
          'The appliance may draw more current than the breaker is rated for, or there may be a fault in the appliance or circuit. We can diagnose the cause and recommend the appropriate fix.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-troubleshooting',
      'electrical-panel-upgrade',
      'electrical-repair',
      'electrical-wiring',
    ],
  },
  {
    slug: 'generator-installation',
    name: 'Generator Installation',
    shortName: 'Generator Installation',
    description:
      'Installation of backup generators and transfer switches to keep your home or business powered during outages.',
    longDescription:
      'Power outages are a reality in the Snoqualmie Valley, especially during winter storms. A backup generator with a properly installed transfer switch keeps critical systems running when the grid goes down. Sparks Electric and Service installs generators and transfer switches for residential and commercial properties in Duvall and surrounding areas, handling the electrical connection and code compliance.',
    image:
      'https://images.pexels.com/photos/9800025/pexels-photo-9800025.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Emergency power backup generator unit',
    icon: 'Power',
    commonIssues: [
      'Frequent power outages in the Duvall area',
      'Need to keep heating and refrigeration running during outages',
      'No transfer switch for an existing portable generator',
      'Desire for an automatic standby generator',
    ],
    process: [
      {
        title: 'Discuss Your Backup Power Needs',
        description:
          'Call and describe what systems you want to keep running during an outage. We help size the generator accordingly.',
      },
      {
        title: 'Install Transfer Switch',
        description:
          'We install a transfer switch that safely connects the generator to your panel and prevents back-feeding into the grid.',
      },
      {
        title: 'Connect and Test',
        description:
          'We connect the generator, test the transfer operation, and verify that all critical circuits receive power.',
      },
    ],
    faqs: [
      {
        question: 'What size generator do I need?',
        answer:
          'Generator sizing depends on what you want to power during an outage. Essential circuits like heating, refrigeration, and lighting require less capacity than whole-home coverage. Call to discuss your needs.',
      },
      {
        question: 'Do you install automatic standby generators?',
        answer:
          'Yes. We install automatic standby generators that start on their own when power is lost, as well as manual transfer switches for portable generators.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-panel-upgrade',
      'electrical-wiring',
      'electrical-repair',
    ],
  },
  {
    slug: 'commercial-electrical',
    name: 'Commercial Electrical Services',
    shortName: 'Commercial Electrical',
    description:
      'Electrical repair, installation, and maintenance for commercial properties, offices, and light industrial spaces.',
    longDescription:
      'Sparks Electric and Service provides commercial electrical services throughout Duvall and the surrounding area. From office build-outs and tenant improvements to equipment circuits and lighting upgrades, we handle the electrical needs of small businesses, retail spaces, and light commercial properties.',
    image:
      'https://images.pexels.com/photos/10871929/pexels-photo-10871929.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Technician wearing safety gear inspecting electrical panels in an industrial setting',
    icon: 'Building2',
    commonIssues: [
      'Office build-outs needing new circuits and lighting',
      'Equipment that requires a dedicated circuit',
      'Commercial lighting that needs upgrading to LED',
      'Tenant improvement electrical work',
      'Panel or service upgrades for increased loads',
    ],
    process: [
      {
        title: 'Discuss Your Commercial Project',
        description:
          'Call and describe the scope of your commercial electrical needs, including timeline and any tenant or building requirements.',
      },
      {
        title: 'Plan and Execute',
        description:
          'We plan the electrical work to minimize disruption, install circuits and fixtures, and coordinate with other trades as needed.',
      },
      {
        title: 'Test and Turn Over',
        description:
          'We test all systems, label circuits, and ensure the installation is code-compliant and ready for use.',
      },
    ],
    faqs: [
      {
        question: 'Do you work on light commercial and industrial properties?',
        answer:
          'Yes. We handle electrical work for offices, retail spaces, and light commercial applications including single-phase and three-phase work.',
      },
      {
        question: 'Can you work after business hours to avoid disruption?',
        answer:
          'We are happy to discuss scheduling options that work for your business. Call (832) 520-2717 to coordinate.',
      },
    ],
    relatedServiceSlugs: [
      'electrical-repair',
      'lighting-installation',
      'electrical-panel-upgrade',
      'electrical-wiring',
    ],
  },
];

export function getService(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
