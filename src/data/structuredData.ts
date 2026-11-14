import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_LINK,
  WEBSITE_URL,
  MAPS_LINK,
} from '@/data/services';
import { getMainLocation } from '@/data/locations';
import { reviews, GOOGLE_RATING, TOTAL_REVIEWS } from '@/data/reviews';

const BASE_URL = 'https://www.sparkselectricandservice.com';

export function localBusinessSchema() {
  const main = getMainLocation();
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    '@id': `${BASE_URL}/#business`,
    name: BUSINESS_NAME,
    telephone: '+12064767798',
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: GOOGLE_RATING.toFixed(1),
      reviewCount: TOTAL_REVIEWS.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.map((r) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: r.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
      },
      reviewBody: r.content,
    })),
    address: {
      '@type': 'PostalAddress',
      addressLocality: main.shortName,
      addressRegion: main.stateAbbr,
      postalCode: main.zipCodes[0],
      addressCountry: 'US',
    },
    areaServed: [
      'Duvall, WA',
      'Carnation, WA',
      'Monroe, WA',
      'Snoqualmie, WA',
      'North Bend, WA',
      'Redmond, WA',
      'Woodinville, WA',
      'Sammamish, WA',
      'Fall City, WA',
    ],
    hasMap: MAPS_LINK,
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: BASE_URL,
    telephone: '+12064767798',
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: BUSINESS_NAME,
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

export function serviceSchema(serviceName: string, serviceDescription: string, areaSlug: string) {
  const cleanArea = areaSlug.replace(/^(?:electrician|electrition)-/, '');
  const area = cleanArea === 'duvall-wa' ? 'Duvall, WA' : cleanArea.replace(/-/g, ' ').replace(/ wa$/, ', WA');
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: {
      '@type': 'City',
      name: area,
    },
  };
}

export function breadcrumbSchema(items: { label: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

export { BASE_URL };
