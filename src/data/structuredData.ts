import {
  BUSINESS_NAME,
  PHONE_DISPLAY,
  PHONE_LINK,
  WEBSITE_URL,
  MAPS_LINK,
} from '@/data/services';
import { getMainLocation, locations } from '@/data/locations';
import { reviews, GOOGLE_RATING, TOTAL_REVIEWS } from '@/data/reviews';

const BASE_URL = 'https://www.sparkselectricandservice.com';
const LOGO_URL = `${BASE_URL}/icon-192.png`;
const DEFAULT_IMAGE =
  'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200';

export function localBusinessSchema(specificCity?: string) {
  const main = getMainLocation();

  return {
    '@context': 'https://schema.org',
    '@type': ['Electrician', 'LocalBusiness'],
    '@id': `${BASE_URL}/#business`,
    name: BUSINESS_NAME,
    legalName: BUSINESS_NAME,
    telephone: '+12064767798',
    url: BASE_URL,
    image: DEFAULT_IMAGE,
    logo: LOGO_URL,
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '47.7423',
      longitude: '-121.9857',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Duvall',
      addressLocality: specificCity || main.shortName,
      addressRegion: main.stateAbbr,
      postalCode: main.zipCodes[0],
      addressCountry: 'US',
    },
    areaServed: locations.map((loc) => ({
      '@type': 'City',
      name: loc.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Washington',
      },
    })),
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
      datePublished: '2025-01-15',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
      },
      reviewBody: r.content,
    })),
    hasMap: MAPS_LINK,
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: BASE_URL,
    logo: LOGO_URL,
    telephone: '+12064767798',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+12064767798',
      contactType: 'customer service',
      areaServed: 'US-WA',
      availableLanguage: 'English',
    },
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
    serviceType: 'Electrical Service',
    description: serviceDescription,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: {
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'State',
        name: 'Washington',
      },
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
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

export { BASE_URL, LOGO_URL, DEFAULT_IMAGE };
