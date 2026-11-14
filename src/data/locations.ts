export interface LocationData {
  slug: string;
  citySlug: string;
  name: string;
  shortName: string;
  state: string;
  stateAbbr: string;
  isMain: boolean;
  description: string;
  localContext: string;
  zipCodes: string[];
  county: string;
}

export const locations: LocationData[] = [
  {
    slug: 'electrician-duvall-wa',
    citySlug: 'duvall-wa',
    name: 'Duvall, WA',
    shortName: 'Duvall',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: true,
    description:
      'Sparks Electric and Service is based in Duvall, Washington, providing residential and commercial electrical services to homeowners and businesses throughout the city and the surrounding Snoqualmie Valley.',
    localContext:
      'Duvall is a growing community along the Snoqualmie River in King County, with a mix of historic homes, new construction, and rural properties. The area\'s mix of older wiring and modern electrical demands makes professional electrical service essential for safe, reliable power.',
    zipCodes: ['98019'],
    county: 'King County',
  },
  {
    slug: 'electrician-carnation-wa',
    citySlug: 'carnation-wa',
    name: 'Carnation, WA',
    shortName: 'Carnation',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: false,
    description:
      'Sparks Electric and Service provides electrical services to homes and businesses in Carnation, Washington, a small community in the Snoqualmie Valley just south of Duvall.',
    localContext:
      'Carnation is a rural community in the Snoqualmie Valley with a mix of agricultural properties and residential neighborhoods. Many homes in the area benefit from electrical inspections and upgrades to handle modern loads safely.',
    zipCodes: ['98014'],
    county: 'King County',
  },
  {
    slug: 'electrician-monroe-wa',
    citySlug: 'monroe-wa',
    name: 'Monroe, WA',
    shortName: 'Monroe',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: false,
    description:
      'Sparks Electric and Service offers electrical repair, installation, and troubleshooting services to residential and commercial customers in Monroe, Washington.',
    localContext:
      'Monroe is a growing city in Snohomish County near the Snoqualmie Valley, with a range of older homes and new developments. Electrical panel upgrades and wiring updates are common needs for properties in the area.',
    zipCodes: ['98272'],
    county: 'Snohomish County',
  },
  {
    slug: 'electrician-snoqualmie-wa',
    citySlug: 'snoqualmie-wa',
    name: 'Snoqualmie, WA',
    shortName: 'Snoqualmie',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: false,
    description:
      'Sparks Electric and Service provides electrical services to homes and businesses in Snoqualmie, Washington, including lighting installation, panel upgrades, and EV charger installation.',
    localContext:
      'Snoqualmie is a rapidly growing city in King County known for its natural beauty and the historic Snoqualmie Falls. The city has many newer homes that benefit from EV charger installation and lighting upgrades, as well as older properties that may need wiring updates.',
    zipCodes: ['98065'],
    county: 'King County',
  },
  {
    slug: 'electrician-north-bend-wa',
    citySlug: 'north-bend-wa',
    name: 'North Bend, WA',
    shortName: 'North Bend',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: false,
    description:
      'Sparks Electric and Service serves homes and businesses in North Bend, Washington with electrical repair, troubleshooting, and installation services.',
    localContext:
      'North Bend sits at the foot of the Cascade Mountains in King County. The area has a mix of mountain homes, newer developments, and commercial properties, all of which require reliable electrical service especially during winter storm season.',
    zipCodes: ['98045'],
    county: 'King County',
  },
  {
    slug: 'electrician-redmond-wa',
    citySlug: 'redmond-wa',
    name: 'Redmond, WA',
    shortName: 'Redmond',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: false,
    description:
      'Sparks Electric and Service provides electrical services to residential and commercial properties in Redmond, Washington.',
    localContext:
      'Redmond is a thriving city in King County known for its technology industry and growing residential neighborhoods. Many homeowners in the area are upgrading to EV chargers, smart home systems, and modern lighting.',
    zipCodes: ['98052', '98053'],
    county: 'King County',
  },
  {
    slug: 'electrician-woodinville-wa',
    citySlug: 'woodinville-wa',
    name: 'Woodinville, WA',
    shortName: 'Woodinville',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: false,
    description:
      'Sparks Electric and Service offers electrical repair, installation, and maintenance services to homes and businesses in Woodinville, Washington.',
    localContext:
      'Woodinville is a community in King County known for its wineries and residential neighborhoods. The area has a range of homes from large estates to older properties, many of which need electrical upgrades to meet modern demands.',
    zipCodes: ['98072'],
    county: 'King County',
  },
  {
    slug: 'electrician-sammamish-wa',
    citySlug: 'sammamish-wa',
    name: 'Sammamish, WA',
    shortName: 'Sammamish',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: false,
    description:
      'Sparks Electric and Service provides electrical services to homes and businesses in Sammamish, Washington.',
    localContext:
      'Sammamish is a residential city in King County along the Sammamish Plateau. Many homes in the area are upgrading electrical panels, adding EV chargers, and improving lighting for both comfort and efficiency.',
    zipCodes: ['98074', '98075'],
    county: 'King County',
  },
  {
    slug: 'electrician-fall-city-wa',
    citySlug: 'fall-city-wa',
    name: 'Fall City, WA',
    shortName: 'Fall City',
    state: 'Washington',
    stateAbbr: 'WA',
    isMain: false,
    description:
      'Sparks Electric and Service provides electrical services to homes and properties in Fall City, Washington, in the heart of the Snoqualmie Valley.',
    localContext:
      'Fall City is a small unincorporated community in King County at the confluence of the Snoqualmie and Fall City rivers. The area has many rural and semi-rural properties that may benefit from electrical inspections and panel upgrades.',
    zipCodes: ['98024'],
    county: 'King County',
  },
];

export function getLocation(query: string): LocationData | undefined {
  if (!query) return undefined;
  const normalized = query.toLowerCase().trim();

  // 1. Direct match on slug ('electrician-monroe-wa')
  const bySlug = locations.find((l) => l.slug === normalized);
  if (bySlug) return bySlug;

  // 2. Direct match on citySlug ('monroe-wa')
  const byCitySlug = locations.find((l) => l.citySlug === normalized);
  if (byCitySlug) return byCitySlug;

  // 3. Match with 'electrition-' prefix ('electrition-monroe-wa')
  if (normalized.startsWith('electrition-')) {
    const stripped = normalized.replace(/^electrition-/, '');
    return locations.find((l) => l.citySlug === stripped || l.slug === `electrician-${stripped}`);
  }

  // 4. Match with 'electrician-' prefix stripped
  if (normalized.startsWith('electrician-')) {
    const stripped = normalized.replace(/^electrician-/, '');
    return locations.find((l) => l.citySlug === stripped);
  }

  return undefined;
}

export function getMainLocation(): LocationData {
  return locations.find((l) => l.isMain) || locations[0];
}

export const nearbyLocations: Record<string, string[]> = {
  'duvall-wa': ['carnation-wa', 'monroe-wa', 'fall-city-wa', 'woodinville-wa'],
  'carnation-wa': ['duvall-wa', 'fall-city-wa', 'snoqualmie-wa'],
  'monroe-wa': ['duvall-wa', 'snoqualmie-wa'],
  'snoqualmie-wa': ['north-bend-wa', 'fall-city-wa', 'carnation-wa', 'sammamish-wa'],
  'north-bend-wa': ['snoqualmie-wa', 'fall-city-wa'],
  'redmond-wa': ['woodinville-wa', 'sammamish-wa', 'kirkland-wa'],
  'woodinville-wa': ['duvall-wa', 'redmond-wa', 'kirkland-wa'],
  'sammamish-wa': ['redmond-wa', 'snoqualmie-wa', 'issaquah-wa'],
  'fall-city-wa': ['carnation-wa', 'snoqualmie-wa', 'north-bend-wa', 'duvall-wa'],
  'electrician-duvall-wa': ['carnation-wa', 'monroe-wa', 'fall-city-wa', 'woodinville-wa'],
  'electrician-carnation-wa': ['duvall-wa', 'fall-city-wa', 'snoqualmie-wa'],
  'electrician-monroe-wa': ['duvall-wa', 'snoqualmie-wa'],
  'electrician-snoqualmie-wa': ['north-bend-wa', 'fall-city-wa', 'carnation-wa', 'sammamish-wa'],
  'electrician-north-bend-wa': ['snoqualmie-wa', 'fall-city-wa'],
  'electrician-redmond-wa': ['woodinville-wa', 'sammamish-wa', 'kirkland-wa'],
  'electrician-woodinville-wa': ['duvall-wa', 'redmond-wa', 'kirkland-wa'],
  'electrician-sammamish-wa': ['redmond-wa', 'snoqualmie-wa', 'issaquah-wa'],
  'electrician-fall-city-wa': ['carnation-wa', 'snoqualmie-wa', 'north-bend-wa', 'duvall-wa'],
};
