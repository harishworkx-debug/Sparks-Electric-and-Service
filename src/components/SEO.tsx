import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  structuredData?: object;
}

const BASE_URL = 'https://www.sparkselectricandservice.com';
const DEFAULT_IMAGE =
  'https://images.pexels.com/photos/27928762/pexels-photo-27928762.jpeg?auto=compress&cs=tinysrgb&w=1200';

function updateMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function updateLinkTag(rel: string, href: string) {
  let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

export default function SEO({ title, description, canonicalPath, ogImage, structuredData }: SEOProps) {
  const location = useLocation();
  const canonical = `${BASE_URL}${canonicalPath || location.pathname}`;
  const shareImage = ogImage || DEFAULT_IMAGE;

  useEffect(() => {
    document.title = title;
    updateMetaTag('description', description);
    updateLinkTag('canonical', canonical);

    // OpenGraph
    updateMetaTag('og:site_name', 'Sparks Electric and Service', 'property');
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', canonical, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:image', shareImage, 'property');

    // Twitter Card
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', shareImage);

    // Local SEO Geo tags
    updateMetaTag('geo.region', 'US-WA');
    updateMetaTag('geo.placename', 'Duvall, Washington');
    updateMetaTag('geo.position', '47.7423;-121.9857');
    updateMetaTag('ICBM', '47.7423, -121.9857');

    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const allStructured = structuredData
      ? Array.isArray(structuredData)
        ? structuredData
        : [structuredData]
      : [];

    if (allStructured.length > 0) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data';
      script.textContent = JSON.stringify(allStructured.length === 1 ? allStructured[0] : allStructured);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogImage, structuredData]);

  return null;
}
