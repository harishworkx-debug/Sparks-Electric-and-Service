import { LocationData } from './locations';
import { ServiceData } from './services';

export interface LocalizedServiceContent {
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTailKeywords: string[];
  localOverview: string;
  localChallenges: string[];
  utilityCoordination: string;
  permittingInfo: string;
  faqs: { question: string; answer: string }[];
}

interface CitySeoProfile {
  utility: string;
  utilityShort: string;
  utilityNote: string;
  county: string;
  housingProfile: string;
  keyWeatherOrTerrain: string;
  permittingAuthority: string;
}

export const cityProfiles: Record<string, CitySeoProfile> = {
  'duvall-wa': {
    utility: 'Puget Sound Energy (PSE)',
    utilityShort: 'PSE',
    utilityNote: 'Puget Sound Energy (PSE) provides electrical grid service in Duvall. Panel upgrades and service heavy-ups require coordination with PSE for meter disconnect and reconnect.',
    county: 'King County',
    housingProfile: 'Mix of early 1900s historic homes along Main Street, mid-century river valley acreage, and modern hillside master developments.',
    keyWeatherOrTerrain: 'Snoqualmie River valley dampness, high moisture tables, and tree-lined hillside wind storms causing seasonal outages.',
    permittingAuthority: 'Washington State Department of Labor & Industries (L&I) Bellevue office and King County building codes.',
  },
  'carnation-wa': {
    utility: 'Puget Sound Energy (PSE)',
    utilityShort: 'PSE',
    utilityNote: 'Puget Sound Energy (PSE) serves the agricultural and residential properties of Carnation. Service entries must comply with PSE valley flood-height recommendations.',
    county: 'King County',
    housingProfile: 'Rural farms, equestrian properties, historic valley homes, and newer river valley single-family neighborhoods.',
    keyWeatherOrTerrain: 'Snoqualmie River flood basin, elevated water tables requiring high-grade outdoor grounding and GFCI protection, and winter flood/storm power interruptions.',
    permittingAuthority: 'Washington State Department of Labor & Industries (L&I) electrical division.',
  },
  'monroe-wa': {
    utility: 'Snohomish County PUD (Public Utility District No. 1)',
    utilityShort: 'Snohomish PUD',
    utilityNote: 'Snohomish County PUD No. 1 supplies electricity across Monroe. All service entrance upgrades, meter base changes, and net metering installations must follow Snohomish PUD electric service standards and require PUD coordination for service reconnection.',
    county: 'Snohomish County',
    housingProfile: 'Established downtown craftsman homes, large equestrian acreage along Highway 203 and Highway 2, and expanding suburban communities around Fryelands.',
    keyWeatherOrTerrain: 'Snohomish River valley convergence zone, wet Pacific Northwest winter storms, and foothill cold snaps.',
    permittingAuthority: 'Washington State Department of Labor & Industries (L&I) Everett field office and City of Monroe building division.',
  },
  'snoqualmie-wa': {
    utility: 'Puget Sound Energy (PSE)',
    utilityShort: 'PSE',
    utilityNote: 'Puget Sound Energy (PSE) provides electric utility service in Snoqualmie, including residential time-of-use and EV charging rebate programs.',
    county: 'King County',
    housingProfile: 'Historic mill town residences near Snoqualmie Falls and expansive master-planned neighborhoods on Snoqualmie Ridge.',
    keyWeatherOrTerrain: 'Foothill snowfalls, elevated elevation moisture, and heavy wind gusts sweeping out of Snoqualmie Pass.',
    permittingAuthority: 'City of Snoqualmie Building Division and Washington State L&I electrical inspection standards.',
  },
  'north-bend-wa': {
    utility: 'Puget Sound Energy (PSE)',
    utilityShort: 'PSE',
    utilityNote: 'Puget Sound Energy (PSE) powers North Bend. High demand for standby generator interlock kits and transfer switches due to storm-prone mountain corridors.',
    county: 'King County',
    housingProfile: 'Mountain-view residential homes, timber-frame craftsman properties, and sprawling acreage nestled near Mount Si and Rattlesnake Ridge.',
    keyWeatherOrTerrain: 'Severe Cascade foothill windstorms, heavy winter snowfall, freezing temperatures, and extended outage vulnerability.',
    permittingAuthority: 'City of North Bend Community and Economic Development and WA State L&I.',
  },
  'redmond-wa': {
    utility: 'Puget Sound Energy (PSE)',
    utilityShort: 'PSE',
    utilityNote: 'Puget Sound Energy (PSE) operates the electrical distribution grid in Redmond, with active clean energy and EV charging support programs.',
    county: 'King County',
    housingProfile: 'High-tech residential hubs across Education Hill, Union Hill, and Overlake, featuring contemporary smart homes, tech workers, and multi-EV garages.',
    keyWeatherOrTerrain: 'Eastside urban-suburban terrain, mature fir trees near power lines, and rapid electrification demands.',
    permittingAuthority: 'City of Redmond Development Services Electrical Division and WA State L&I.',
  },
  'woodinville-wa': {
    utility: 'Puget Sound Energy (PSE)',
    utilityShort: 'PSE',
    utilityNote: 'Puget Sound Energy (PSE) serves Woodinville. Custom residential estates and commercial wineries require high-capacity 200A-400A PSE service connections.',
    county: 'King County',
    housingProfile: 'Hollywood Hill custom estates, equestrian ranches, river valley properties, and bustling tourist winery districts.',
    keyWeatherOrTerrain: 'Rolling hills, heavily forested parcels with overhead branches, and extensive outdoor estate lighting needs.',
    permittingAuthority: 'City of Woodinville and Washington State Department of Labor & Industries (L&I).',
  },
  'sammamish-wa': {
    utility: 'Puget Sound Energy (PSE)',
    utilityShort: 'PSE',
    utilityNote: 'Puget Sound Energy (PSE) provides power to the Sammamish Plateau. Panel upgrades are in high demand to support heat pump heat, induction cooking, and multiple Level 2 EV chargers.',
    county: 'King County',
    housingProfile: 'Upscale master-planned communities, plateau estates, and lakefront residences along Beaver Lake and Lake Sammamish.',
    keyWeatherOrTerrain: 'Elevated plateau topography, dense evergreen forest canopies causing branch-induced power drops, and high domestic electrical consumption.',
    permittingAuthority: 'City of Sammamish Community Development Department and WA State L&I.',
  },
  'fall-city-wa': {
    utility: 'Puget Sound Energy (PSE)',
    utilityShort: 'PSE',
    utilityNote: 'Puget Sound Energy (PSE) powers Fall City. Many rural properties rely on overhead service drops through tall trees, requiring regular mast and weatherhead maintenance.',
    county: 'King County',
    housingProfile: 'Unincorporated rural acreage, historic farmhouses along the Snoqualmie and Raging rivers, equestrian estates, and custom riverfront retreats.',
    keyWeatherOrTerrain: 'River valley winter freezing, high tree-fall frequency during wind storms, and remote rural utility response times.',
    permittingAuthority: 'King County Permitting Division and Washington State L&I electrical inspectors.',
  },
};

// Generates service-specific localized content to completely eliminate duplicate doorway page risks
export function getLocalizedServiceContent(
  service: ServiceData,
  location: LocationData
): LocalizedServiceContent {
  const cityKey = location.citySlug;
  const profile = cityProfiles[cityKey] || cityProfiles['duvall-wa'];
  const city = location.shortName;
  const state = location.stateAbbr;

  const primaryKeyword = `${service.name} ${city} ${state}`;

  // Tailored secondary keywords
  const secondaryKeywords = [
    `${service.shortName} in ${city} ${state}`,
    `Licensed electrician ${city} ${state}`,
    `${city} ${service.shortName.toLowerCase()} contractor`,
    `Residential ${service.shortName.toLowerCase()} ${city}`,
    `Affordable ${service.shortName.toLowerCase()} near me`,
  ];

  // Tailored long-tail queries
  const longTailKeywords = [
    `How much does ${service.shortName.toLowerCase()} cost in ${city} WA`,
    `Best electrician for ${service.shortName.toLowerCase()} in ${city}`,
    `${profile.utilityShort} approved electrical contractor ${city}`,
    `Emergency ${service.shortName.toLowerCase()} in ${city} Washington`,
  ];

  // Generate localized overview based on service type & city characteristics
  let localOverview = '';
  let localChallenges: string[] = [];
  let utilityCoordination = '';

  switch (service.slug) {
    case 'electrical-repair':
      localOverview = `In ${city}, ${state}, electrical repair issues range from nuisance tripping breakers in newer ${profile.county} subdivisions to failing wiring insulation in historic homes. With ${profile.housingProfile}, properties frequently experience circuit overload when modern electrical equipment is plugged into older branch circuits. Sparks Electric and Service delivers targeted diagnostic repairs that locate faulty junction boxes, loose neutral connections, and overloaded circuits, ensuring your home remains code-compliant and fire-safe.`;
      localChallenges = [
        `Resolving intermittent circuit trips caused by high-draw modern appliances in older ${city} homes`,
        `Locating hidden junction boxes and worn-out cloth-sheathed wiring common in the ${profile.county} area`,
        `Troubleshooting moisture-affected outdoor circuits, crawl space wiring, and detached garage feeds`,
        `Repairing burnt breaker terminals and buzzing bus bars before they cause catastrophic panel failure`,
      ];
      utilityCoordination = `For severe repair emergencies requiring power isolation at the weatherhead or meter socket, we work with ${profile.utility} to coordinate safe utility disconnection and emergency service reconnection.`;
      break;

    case 'electrical-panel-upgrade':
      localOverview = `Upgrading your electrical panel to a modern 200-amp or 400-amp service is one of the highest-value safety investments for ${city} property owners. As homeowners in ${city} transition to heat pump heating, induction cooktops, Level 2 electric vehicle charging, and air conditioning, original 100-amp panels quickly exceed safe capacity. We replace outdated fuse boxes, hazardous Federal Pacific (FPE) Stab-Lok panels, and Zinsco circuit panels with state-of-the-art Siemens, Square D, or Eaton load centers engineered for modern safety codes.`;
      localChallenges = [
        `Upgrading undersized 100-amp or 125-amp panels to support heat pumps and EV charging in ${city}`,
        `Replacing documented fire hazard panels including Federal Pacific and Zinsco breaker boxes`,
        `Relocating indoor panels from closets or bathrooms to exterior locations meeting current NEC working clearance rules`,
        `Upgrading undersized meter bases and overhead service masts damaged by weather in ${profile.county}`,
      ];
      utilityCoordination = `Every panel upgrade in ${city} involves strict coordination with ${profile.utility}. We schedule the utility disconnect, rebuild the service entrance and meter base, secure Washington State L&I electrical inspection approval, and manage the ${profile.utilityShort} final reconnect for minimal household downtime.`;
      break;

    case 'ev-charger-installation':
      localOverview = `Electric vehicle ownership is growing rapidly across ${city} and ${profile.county}. A dedicated Level 2 home charging station (240V, 32A to 48A) charges your EV up to 7 times faster than a standard 120V household outlet. Sparks Electric and Service installs all leading Level 2 EV charging brands in ${city}, including Tesla Universal Wall Connectors, ChargePoint Home Flex, Emporia, and Leviton, as well as dedicated NEMA 14-50 outlets with GFCI protection.`;
      localChallenges = [
        `Calculating total household electrical load (NEC Article 220) to prevent tripping the main breaker during EV charging`,
        `Running dedicated conduit lines from basement or exterior panels to detached garages or carports in ${city}`,
        `Installing smart EV chargers capable of dynamic load management when panel capacity is limited`,
        `Ensuring full compliance with Washington State energy code and rebate documentation for ${profile.utilityShort}`,
      ];
      utilityCoordination = `We verify that your service entrance can handle the continuous load required for Level 2 EV charging under ${profile.utilityShort} service guidelines. Where applicable, our installations qualify for regional energy efficiency rebates and tax credits.`;
      break;

    case 'generator-installation':
      localOverview = `Living in ${city} means facing winter weather disruptions, high wind events, and mountain foothill storm outages that can leave neighborhoods without power for days. Installing a backup generator system—either a standby automatic generator or a portable generator with a manual transfer switch and interlock kit—protects your refrigeration, heating system, well pumps, and essential circuits whenever ${profile.utilityShort} grid power goes down.`;
      localChallenges = [
        `Protecting vital household systems (furnace, sump/well pumps, refrigeration) during extended ${profile.county} winter outages`,
        `Installing code-approved generator interlock kits and transfer switches to prevent deadly backfeeding to utility lines`,
        `Sizing power output correctly for well pump start-up inductive surges in rural ${city} properties`,
        `Providing exterior weatherproof power inlet boxes (NEMA L14-30 or CS6365) safely situated away from windows and vents`,
      ];
      utilityCoordination = `All generator interlocks and automatic transfer switches installed in ${city} adhere strictly to NEC Article 702 and ${profile.utilityShort} interconnect safety standards, guaranteeing zero risk of backfeeding utility linemen working on storm restoration.`;
      break;

    case 'electrical-troubleshooting':
      localOverview = `When lights flicker unexpectedly, half of your kitchen outlets go dead, or a circuit breaker refuses to reset, guessing is dangerous. Sparks Electric and Service provides advanced electrical troubleshooting throughout ${city}, using calibrated diagnostic tools to trace faults through walls, conduit, and breaker boxes without unnecessary destruction of drywall.`;
      localChallenges = [
        `Diagnosing dropped open neutrals that cause voltage fluctuations and appliance damage in ${city} homes`,
        `Tracing intermittent ground faults (GFCI) and arc faults (AFCI) on complex multi-wire branch circuits`,
        `Identifying loose connections inside attic, crawl space, or subterranean junction boxes common in ${profile.county}`,
        `Isolating parasitic loads and harmonics that degrade electronics and trip sensitive electronic breakers`,
      ];
      utilityCoordination = `If diagnostics identify the problem as voltage drop or power quality distortion originating from the utility supply lines, we provide technical documentation you can hand directly to ${profile.utilityShort} for transformer inspection.`;
      break;

    case 'electrical-wiring':
      localOverview = `Quality electrical wiring forms the safety backbone of every ${city} property. Whether you are remodeling a kitchen, finishing a basement, adding a detached garage workshop, or remediating ungrounded two-wire knob-and-tube or aluminum wiring, Sparks Electric and Service delivers clean, code-certified wiring installations engineered to last for decades.`;
      localChallenges = [
        `Safe remediation of ungrounded cloth-sheathed wiring and legacy circuits in older ${city} neighborhoods`,
        `Rewiring kitchen and bathroom circuits to meet 20-amp small appliance branch circuit requirements`,
        `Running subpanel feeder cables to workshops, detached garages, or ADU guest houses across ${city}`,
        `Full compliance with current AFCI (Arc-Fault Circuit Interrupter) protection mandates under Washington State electrical law`,
      ];
      utilityCoordination = `We handle all wiring permits under Washington State Department of Labor & Industries (L&I) jurisdiction, scheduling prompt inspections so your construction timeline stays on schedule.`;
      break;

    case 'lighting-installation':
      localOverview = `From modern recessed ultra-thin LED downlights to exterior architectural landscape and security lighting, proper illumination transforms the look, feel, and energy efficiency of your ${city} home. We design and install interior layered lighting systems, dimmers, under-cabinet lighting, and damp-rated exterior fixtures built to withstand Pacific Northwest rainfall.`;
      localChallenges = [
        `Retrofitting drafty, heat-leaking older can lights with airtight, IC-rated energy-efficient LED fixtures in ${city}`,
        `Laying out balanced lumen distribution for high vaulted ceilings common in ${profile.county} homes`,
        `Installing weatherproof exterior floodlights, soffit lighting, and pathway illumination with photocell and motion controls`,
        `Eliminating LED buzzing and strobing by pairing fixtures with compatible smart digital dimmer switches`,
      ];
      utilityCoordination = `Our LED lighting retrofits reduce household electric consumption and can help ${city} homeowners take advantage of ${profile.utilityShort} residential efficiency incentive programs.`;
      break;

    case 'ceiling-fan-installation':
      localOverview = `Ceiling fans provide year-round climate control in ${city}, circulating cool air in humid summer months and pushing trapped warmth down from ceilings during chilly Pacific Northwest winters. Installing a ceiling fan requires a UL-listed fan-rated ceiling box securely braced to structural framing, along with proper switch wiring for independent motor speed and light dimming control.`;
      localChallenges = [
        `Replacing standard plastic or lightweight metal lighting boxes with heavy-duty fan-rated steel brace boxes`,
        `Safely hanging fans on high cathedral or sloped ceilings typical in ${city} residential architecture`,
        `Running dedicated 3-wire Romex conductors to allow separate wall switches for fan speed and integrated LED lighting`,
        `Balancing large blade spans to eliminate wobbling, vibration, and motor hum on bedroom and living room ceilings`,
      ];
      utilityCoordination = `All ceiling fan wiring installations are performed in full accordance with National Electrical Code (NEC) load calculations and local ${profile.county} residential building safety guidelines.`;
      break;

    case 'outlet-installation':
      localOverview = `Modern households in ${city} require convenient, safe power access in every room and outdoors. Whether you need dedicated 20-amp circuits for high-draw kitchen appliances, tamper-resistant outlets for child safety, outdoor weatherproof GFCI receptacles, or 240V outlets for heavy shop machinery, Sparks Electric and Service installs code-certified electrical outlets tailored to your needs.`;
      localChallenges = [
        `Installing Ground Fault Circuit Interrupters (GFCI) in wet locations (kitchens, baths, garages, outdoors, and basements) in ${city}`,
        `Adding dedicated appliance circuits (refrigerators, microwaves, dishwashers, and space heaters) to stop breaker trips`,
        `Upgrading ungrounded two-prong outlets to safe, three-prong grounded or GFCI-protected receptacles`,
        `Installing commercial-grade, heavy-duty 240V NEMA outlets for workshops, welders, and power equipment`,
      ];
      utilityCoordination = `We ensure all branch circuits comply with the latest Washington State electrical code amendments regarding AFCI and GFCI protection, verified by state electrical inspectors.`;
      break;

    case 'switch-installation':
      localOverview = `Upgrading your switches in ${city} improves energy efficiency, ambiance, and daily convenience. From digital LED-compatible dimmer switches and multi-location 3-way/4-way switch loops to smart WiFi-connected wall controls and occupancy sensors, we install reliable, quiet switches that integrate smoothly with your home's wiring.`;
      localChallenges = [
        `Integrating smart switches into older ${city} switch boxes that lack a dedicated neutral wire`,
        `Resolving 3-way and 4-way hallway and staircase traveler wire issues left behind by previous DIY work`,
        `Replacing cracked, warm, or sparking switches that present an active fire hazard`,
        `Installing timed switches and humidity-sensing controls for bathroom exhaust fans to prevent mold in damp Pacific Northwest climates`,
      ];
      utilityCoordination = `All switch replacements and smart-switch integrations meet NEC guidelines and preserve your home's electrical fire safety standards in ${profile.county}.`;
      break;

    case 'circuit-breaker-repair':
      localOverview = `A circuit breaker that constantly trips, refuses to reset, or feels hot to the touch is a serious warning sign. In ${city}, our electricians inspect your panel bus bar, measure branch circuit amperage draw, and determine whether the issue is an overloaded circuit, a short circuit, or a failing breaker mechanism. We replace worn-out single-pole, double-pole, GFCI, and AFCI breakers with OEM-certified replacements.`;
      localChallenges = [
        `Accurately diagnosing whether a tripping breaker in ${city} is caused by a real electrical short or a worn internal bi-metal trip bar`,
        `Identifying damaged or pitted bus bar stabs caused by loose breaker connections inside the main panel`,
        `Replacing obsolete, banned, or uninsurable circuit breakers including Zinsco, Sylvania, and Federal Pacific (FPE)`,
        `Properly sizing dual-function AFCI/GFCI circuit breakers to comply with current Washington State electrical standards`,
      ];
      utilityCoordination = `When bus bar arcing or main breaker failure requires panel de-energization, we coordinate with ${profile.utility} for immediate meter pulls and safe reconnects.`;
      break;

    case 'commercial-electrical':
      localOverview = `Local businesses, offices, retail shops, and light industrial spaces in ${city} depend on uninterrupted electrical power to operate profitably and safely. Sparks Electric and Service delivers professional commercial electrical services across ${profile.county}, including dedicated equipment lines, three-phase power balancing, commercial LED high-bay lighting, tenant improvements, and code-compliance safety inspections.`;
      localChallenges = [
        `Minimizing downtime for active retail shops and offices in ${city} during electrical retrofits and upgrades`,
        `Installing dedicated commercial circuits for specialized kitchen, refrigeration, medical, or server equipment`,
        `Upgrading commercial lighting to high-efficiency LED arrays to lower overhead and qualify for ${profile.utilityShort} commercial rebates`,
        `Navigating commercial permitting and fire-safety compliance under Washington State L&I and local ${profile.county} municipal codes`,
      ];
      utilityCoordination = `We work directly with ${profile.utility} commercial representatives to review transformer sizing, demand billing considerations, and three-phase meter drop configurations for commercial sites across ${city}.`;
      break;

    default:
      localOverview = `Sparks Electric and Service delivers prompt, professional ${service.name.toLowerCase()} throughout ${city}, ${state} and surrounding ${profile.county} neighborhoods. Call (773) 337-7968 to speak directly with an electrician.`;
      localChallenges = [
        `Code compliance with Washington State electrical amendments`,
        `Expert diagnostic and installation practices`,
        `Safe coordination with local utility standards`,
      ];
      utilityCoordination = `We coordinate all required work with ${profile.utility}.`;
  }

  // Washington State L&I and Municipal Permitting detail
  const permittingInfo = `All major electrical installations, panel replacements, and new branch circuit additions in ${city} require an electrical permit and inspection under the ${profile.permittingAuthority}. Sparks Electric and Service manages the complete permit application, ensures every detail meets current National Electrical Code (NEC) and Washington Administrative Code (WAC 296-46B) rules, and coordinates the final state inspection for your peace of mind and home insurance validity.`;

  // Localized FAQs answering specific city + service questions
  const faqs = [
    {
      question: `Do I need a permit for ${service.name.toLowerCase()} in ${city}, ${state}?`,
      answer: `Yes, in Washington State, most electrical alterations including panel upgrades, new circuits, EV chargers, and generator switches require a permit and inspection through ${profile.permittingAuthority}. Sparks Electric and Service handles the permit filing and coordinates the inspection on your behalf.`,
    },
    {
      question: `How does your team coordinate with ${profile.utilityShort} for ${service.name.toLowerCase()} in ${city}?`,
      answer: `${profile.utilityNote} If your ${service.name.toLowerCase()} project requires de-energizing the service drop or replacing the meter base, we schedule the disconnect and reconnect directly with ${profile.utilityShort} to keep power interruption to a minimum.`,
    },
    {
      question: `Why choose Sparks Electric and Service for ${service.name.toLowerCase()} in ${city}?`,
      answer: `We are a locally based, fully licensed, bonded, and insured Washington electrical contractor. We understand the specific housing characteristics of ${city} and ${profile.county}, from rural valley acreage to newer subdivisions. When you call (773) 337-7968, you speak directly with an experienced professional.`,
    },
    {
      question: `How quickly can you schedule ${service.name.toLowerCase()} in ${city}?`,
      answer: `Because we are based right here in the Snoqualmie Valley, we offer prompt service scheduling for homeowners and businesses in ${city}. Call (773) 337-7968 to discuss your project timeline and confirm immediate availability.`,
    },
  ];

  return {
    primaryKeyword,
    secondaryKeywords,
    longTailKeywords,
    localOverview,
    localChallenges,
    utilityCoordination,
    permittingInfo,
    faqs,
  };
}

export interface CityPageSeoContent {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro1: string;
  intro2: string;
  residentialIntro: string;
  commonProblems: { title: string; description: string }[];
  localHomesContext: string;
  faqs: { question: string; answer: string }[];
}

export function getCityPageContent(location: LocationData): CityPageSeoContent {
  const cityKey = location.citySlug;
  const profile = cityProfiles[cityKey] || cityProfiles['duvall-wa'];
  const city = location.shortName;
  const state = location.stateAbbr;

  const h1 = `Electrician in ${city}, ${state} – Professional Residential Electrical Services`;
  const metaTitle = `Electrician in ${location.name} | Sparks Electric & Service`;
  const metaDescription = `Looking for a licensed electrician in ${location.name}? Sparks Electric & Service provides residential electrical repairs, panel upgrades, EV chargers, wiring & lighting. Call (773) 337-7968.`;

  const intro1 = `When electrical issues arise in your home, having the problem properly diagnosed is important for safety and reliable operation. Sparks Electric & Service provides electrical services for customers in ${city}, Washington, with solutions based on the type and condition of the electrical system.`;

  const intro2 = `Whether you need help with an electrical repair, new wiring, lighting installation or an electrical panel upgrade, the first step is understanding your requirements and identifying the right solution.`;

  const residentialIntro = `Sparks Electric & Service provides a full suite of residential electrical services tailored to the housing styles of ${city} and ${profile.county}. Our work adheres strictly to current Washington State electrical codes (WAC 296-46B and NEC), ensuring long-term safety, efficiency, and reliability for your home.`;

  const commonProblems = [
    {
      title: 'Frequently Tripping Circuit Breakers',
      description: 'Breakers that trip repeatedly indicate overloaded branch circuits, short circuits, or ground faults that require professional evaluation before they damage your appliances or create fire risks.',
    },
    {
      title: 'Outlets That Stop Working',
      description: 'Dead outlets often stem from tripped GFCI receptacles, loose terminal screws, back-stabbed wiring connections, or broken neutral wires concealed inside walls.',
    },
    {
      title: 'Flickering or Dimming Lights',
      description: 'Flickering lights typically occur when large household loads (furnaces, heat pumps, EV chargers) cycle on, pointing to panel capacity limits, loose neutral conductors, or utility voltage drops.',
    },
    {
      title: 'Unusual Buzzing or Humming Sounds',
      description: 'Buzzing noises coming from breaker panels, switches, or outlets signal active electrical arcing or loose mechanical connections that demand immediate electrical inspection.',
    },
    {
      title: 'Switches or Outlets Warm to the Touch',
      description: 'Any wall switch, outlet faceplate, or breaker that feels warm indicates high internal resistance and heat buildup, a primary warning sign of an impending electrical failure.',
    },
    {
      title: 'Aging or Ungrounded Wiring',
      description: `Older properties across ${city} frequently contain ungrounded two-wire circuits or deteriorating cloth insulation that struggles to safely support modern electronic demands.`,
    },
  ];

  const localHomesContext = `Homeowners in ${city} may need electrical assistance for renovations, heat pump additions, EV charging, lighting upgrades, or routine maintenance. In ${city}, housing varies from ${profile.housingProfile}. Furthermore, regional environmental factors (${profile.keyWeatherOrTerrain}) and grid coordination with ${profile.utility} require knowledgeable, experienced electrical craftsmanship. Each project must be assessed based on the property's existing wiring capacity, service drop condition, and applicable local permitting requirements.`;

  const faqs = [
    {
      question: `Are you a licensed electrical contractor serving ${city}, ${state}?`,
      answer: `Yes. Sparks Electric & Service is a fully licensed, bonded, and insured Washington State electrical contractor proudly serving ${city} and surrounding ${profile.county} communities.`,
    },
    {
      question: `Which electric utility company serves ${city}, WA?`,
      answer: `Properties in ${city} are powered by ${profile.utility}. We coordinate directly with ${profile.utilityShort} for meter disconnects, service panel upgrades, and EV charger rebate compliance.`,
    },
    {
      question: `Do electrical repairs or panel upgrades in ${city} require permits?`,
      answer: `Yes, in Washington State, electrical alterations, panel replacements, EV chargers, and new circuits require permits and inspections under ${profile.permittingAuthority}. We manage the entire permit and inspection process for our customers.`,
    },
    {
      question: `What electrical services are most commonly requested in ${city}?`,
      answer: `In ${city}, we frequently perform 200-amp electrical panel upgrades, EV charging station installations (Level 2 & Tesla), generator transfer switch setups, electrical troubleshooting, and whole-home rewiring for older properties.`,
    },
    {
      question: `How do I schedule an electrical assessment in ${city}?`,
      answer: `Call us directly at (773) 337-7968. We handle all consultations and scheduling by phone to provide prompt, personalized service without impersonal automated booking forms.`,
    },
  ];

  return {
    h1,
    metaTitle,
    metaDescription,
    intro1,
    intro2,
    residentialIntro,
    commonProblems,
    localHomesContext,
    faqs,
  };
}

