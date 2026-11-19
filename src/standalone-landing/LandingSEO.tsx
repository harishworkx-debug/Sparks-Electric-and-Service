import { useEffect } from 'react';
import { LANDING_CONFIG } from './landingConfig';

interface LandingSEOProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
}

export default function LandingSEO({
  title = `${LANDING_CONFIG.identityFull} | Reliable Local Electrical Repairs & Upgrades`,
  description = `Need a qualified electrician in Duvall, WA? Fast, professional electrical repairs, 200A panel upgrades, EV charger installations, wiring & troubleshooting. Call ${LANDING_CONFIG.phoneDisplay}.`,
  canonicalPath = '/electrician-duvall',
}: LandingSEOProps) {
  useEffect(() => {
    // 1. Update Title
    const originalTitle = document.title;
    document.title = title;

    // 2. Helper to set or update meta tag
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : 'https://www.sparkselectricandservice.com';
    const pageUrl = `${origin}${canonicalPath}`;

    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', pageUrl);

    // 3. Update Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const originalCanonical = canonical?.getAttribute('href') || null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // 4. Inject JSON-LD Schema (Electrician / LocalBusiness)
    // Strictly uses SERVICE + LOCATION as name, NO business name
    const schemaData = {
      '@context': 'https://schema.org',
      '@type': 'Electrician',
      name: LANDING_CONFIG.identityFull,
      description: description,
      url: pageUrl,
      telephone: LANDING_CONFIG.phoneLink.replace('tel:', ''),
      address: {
        '@type': 'PostalAddress',
        streetAddress: LANDING_CONFIG.address.street,
        addressLocality: LANDING_CONFIG.address.city,
        addressRegion: LANDING_CONFIG.address.state,
        postalCode: LANDING_CONFIG.address.zip,
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 47.6887,
        longitude: -121.9308,
      },
      areaServed: [
        { '@type': 'City', name: 'Duvall', containedInPlace: { '@type': 'AdministrativeArea', name: 'King County, WA' } },
        { '@type': 'City', name: 'Carnation', containedInPlace: { '@type': 'AdministrativeArea', name: 'King County, WA' } },
        { '@type': 'City', name: 'Monroe', containedInPlace: { '@type': 'AdministrativeArea', name: 'Snohomish County, WA' } },
        { '@type': 'City', name: 'Snoqualmie', containedInPlace: { '@type': 'AdministrativeArea', name: 'King County, WA' } },
        { '@type': 'City', name: 'North Bend', containedInPlace: { '@type': 'AdministrativeArea', name: 'King County, WA' } },
        { '@type': 'City', name: 'Redmond', containedInPlace: { '@type': 'AdministrativeArea', name: 'King County, WA' } },
        { '@type': 'City', name: 'Woodinville', containedInPlace: { '@type': 'AdministrativeArea', name: 'King County, WA' } },
        { '@type': 'City', name: 'Sammamish', containedInPlace: { '@type': 'AdministrativeArea', name: 'King County, WA' } },
        { '@type': 'City', name: 'Fall City', containedInPlace: { '@type': 'AdministrativeArea', name: 'King County, WA' } },
      ],
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '07:00',
          closes: '19:00',
        },
      ],
    };

    let scriptTag = document.querySelector('#standalone-landing-schema') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'standalone-landing-schema';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData);

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      if (originalCanonical && canonical) {
        canonical.setAttribute('href', originalCanonical);
      }
      const existingScript = document.querySelector('#standalone-landing-schema');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [title, description, canonicalPath]);

  return null;
}
