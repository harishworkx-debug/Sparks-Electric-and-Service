import fs from 'fs';
import { services } from '../src/data/services.ts';
import { locations } from '../src/data/locations.ts';
import { blogPosts } from '../src/data/blogPosts.ts';

const baseUrl = 'https://www.sparkselectricandservice.com';

function escapeCsv(val) {
  if (val === undefined || val === null) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

const headers = [
  'URL',
  'Page type',
  'Service',
  'Location',
  'Primary keyword',
  'Secondary keywords',
  'SEO title',
  'Meta description',
  'H1',
  'Internal links added',
  'Canonical URL',
  'Indexability status',
  'Content status',
  'Recommended action',
];

const rows = [];

// 1. Homepage
rows.push([
  `${baseUrl}/`,
  'Homepage',
  'All Services',
  'Duvall, WA',
  'Electrician Duvall WA',
  'reliable electrical services Duvall, local electrician Duvall WA, residential electrical contractor Duvall',
  'Electrician in Duvall, WA | Sparks Electric & Service',
  'Looking for electrical services in Duvall, WA? Contact Sparks Electric & Service for residential electrical repairs, wiring, lighting, panel upgrades and more. Request a service estimate today.',
  'Reliable Electrical Services in Duvall, WA',
  '13 core services, 9 service areas, about, contact, recent projects, reviews',
  `${baseUrl}/`,
  'Indexable',
  'Fully Optimized',
  'Priority 1 in Google Search Console URL inspection',
]);

// 2. Services Page
rows.push([
  `${baseUrl}/services`,
  'Service Hub',
  'All 12 Electrical Services',
  'King & Snohomish Counties',
  'Electrical Services Duvall WA',
  'licensed electrician services, residential electrical services, commercial electrical services WA',
  'Electrical Services in Duvall, WA | Sparks Electric and Service',
  'Professional electrical services in Duvall, WA including repair, troubleshooting, wiring, lighting, panel upgrades, EV chargers, and commercial electrical work. Call (773) 337-7968.',
  'Electrical Services',
  '12 service cards, cross-city location directory (all 9 cities x 5 services)',
  `${baseUrl}/services`,
  'Indexable',
  'Fully Optimized',
  'Priority 2 in Google Search Console URL inspection',
]);

// 3. Service Areas Page
rows.push([
  `${baseUrl}/service-areas`,
  'Location Directory',
  'All Electrical Services',
  '9 Washington Cities',
  'Electrician Snoqualmie Valley WA',
  'service areas electrician, electrician King County WA, electrician Snohomish County WA',
  'Service Areas in Snoqualmie Valley, WA | Sparks Electric and Service',
  'Sparks Electric and Service serves Duvall, Carnation, Monroe, Snoqualmie, North Bend, Redmond, Woodinville, Sammamish, and Fall City, WA. Call (773) 337-7968.',
  'Service Areas',
  '9 city directory cards, county tags (King/Snohomish), utility tags (PSE/Snohomish PUD), direct service links',
  `${baseUrl}/service-areas`,
  'Indexable',
  'Fully Optimized',
  'Priority 3 in Google Search Console URL inspection',
]);

// 4. Blog Index
rows.push([
  `${baseUrl}/blog`,
  'Blog Hub',
  'Educational Guides',
  'Western Washington',
  'Homeowner Electrical Guides',
  'electrical safety tips, electrical troubleshooting guide, home electrical contractor advice',
  'Electrical Guides & Homeowner Safety Tips | Sparks Electric & Service',
  'Helpful guides, safety checklists, and troubleshooting tips from a licensed Washington electrical contractor. Learn about panel upgrades, EV chargers, generators, and wiring.',
  'Electrical Guides & Safety Tips',
  '6 featured guide cards, author credentials, phone consultation CTA',
  `${baseUrl}/blog`,
  'Indexable',
  'Fully Optimized',
  'Crawlable guide directory for educational search traffic',
]);

// 5. About Page
rows.push([
  `${baseUrl}/about`,
  'Company',
  'About Business',
  'Duvall, WA',
  'About Sparks Electric and Service',
  'licensed electrical contractor Duvall, Jonathon electrician Duvall, bonded insured electrician WA',
  'About Sparks Electric and Service | Electrician in Duvall, WA',
  'Sparks Electric and Service is a licensed electrical contractor based in Duvall, WA serving the Snoqualmie Valley. Call (773) 337-7968.',
  'About Sparks Electric and Service',
  'NAP Duvall office, WA license credentials, values, reviews, contact CTA',
  `${baseUrl}/about`,
  'Indexable',
  'Fully Optimized',
  'High trust page supporting E-E-A-T and local entity verification',
]);

// 6. Contact Page
rows.push([
  `${baseUrl}/contact`,
  'Contact',
  'Contact Business',
  'Duvall, WA',
  'Contact Sparks Electric and Service',
  'electrician phone Duvall WA, schedule electrician Duvall, Sparks Electric office location',
  'Contact Sparks Electric and Service | Electrician in Duvall, WA',
  'Contact Sparks Electric and Service at (773) 337-7968. Serving Duvall, WA and the Snoqualmie Valley. Call us for all your electrical needs.',
  'Contact Us',
  'Google Maps link (WA4z5H2YFEj7MxEi7), office address, license badge, service areas link',
  `${baseUrl}/contact`,
  'Indexable',
  'Fully Optimized',
  'Matches GBP NAP details (12520 322nd Ave NE, Duvall, WA 98019)',
]);

// 7. Privacy Policy
rows.push([
  `${baseUrl}/privacy-policy`,
  'Legal',
  'Privacy',
  'Duvall, WA',
  'Privacy Policy Sparks Electric',
  'privacy policy, user data policy, website terms',
  'Privacy Policy | Sparks Electric and Service',
  'Privacy policy for Sparks Electric and Service. How we collect and protect your data.',
  'Privacy Policy',
  'Homepage, Contact, Terms',
  `${baseUrl}/privacy-policy`,
  'Indexable',
  'Fully Optimized',
  'Standard legal compliance',
]);

// 8. Terms and Conditions
rows.push([
  `${baseUrl}/terms-and-conditions`,
  'Legal',
  'Terms',
  'Duvall, WA',
  'Terms and Conditions Sparks Electric',
  'terms of service, electrical contractor terms, service agreement',
  'Terms and Conditions | Sparks Electric and Service',
  'Terms and conditions for using Sparks Electric and Service website and services.',
  'Terms and Conditions',
  'Homepage, Contact, Privacy',
  `${baseUrl}/terms-and-conditions`,
  'Indexable',
  'Fully Optimized',
  'Standard legal compliance',
]);

// 9. 9 Location Hub Pages
for (const loc of locations) {
  const url = `${baseUrl}/${loc.slug}`;
  const city = loc.shortName;
  const isSnohomish = loc.county.includes('Snohomish');
  const utility = isSnohomish ? 'Snohomish County PUD' : 'Puget Sound Energy (PSE)';
  
  rows.push([
    url,
    'Location Hub',
    'All Electrical Services',
    loc.name,
    `Electrician in ${city} WA`,
    `local electrician ${city}, residential electrician ${city} WA, licensed electrical contractor ${city}, electrical repair ${city}`,
    `Electrician in ${loc.name} | Sparks Electric & Service`,
    `Looking for a licensed electrician in ${loc.name}? Sparks Electric & Service provides residential electrical repairs, panel upgrades, EV chargers, wiring & lighting. Call (773) 337-7968.`,
    `Electrician in ${city}, WA – Professional Residential Electrical Services`,
    `12 service cards in ${city}, 12 direct descriptive anchor links, neighboring service areas, reviews, FAQs`,
    url,
    'Indexable',
    'Fully Optimized (7-Section Blueprint)',
    `Submit in Week 2 GSC batch for ${city} geo-targeting`,
  ]);
}

// 10. 108 Service-Location Pages
for (const serv of services) {
  for (const loc of locations) {
    const slug = `${serv.slug}-${loc.citySlug}`;
    const url = `${baseUrl}/${slug}`;
    const city = loc.shortName;
    const state = loc.stateAbbr;
    const isSnohomish = loc.county.includes('Snohomish');
    const utility = isSnohomish ? 'Snohomish County PUD' : 'Puget Sound Energy (PSE)';

    const primaryKw = `${serv.name} ${city} ${state}`;
    const secondaryKws = `${serv.shortName} in ${city}, licensed electrician ${city} WA, residential ${serv.shortName.toLowerCase()} ${city}, local electrical contractor ${city}`;
    const title = `${serv.name} in ${city}, ${state} | Sparks Electric & Service`;
    const desc = `Looking for ${serv.name.toLowerCase()} in ${city}, WA? Sparks Electric & Service provides professional ${serv.name.toLowerCase()}, repairs, installations & safety inspections. Call (773) 337-7968.`;
    const h1 = `${serv.name} in ${city}, ${state} – Professional Electrical Services`;

    rows.push([
      url,
      'Service-Location Landing Page',
      serv.name,
      loc.name,
      primaryKw,
      secondaryKws,
      title,
      desc,
      h1,
      `Related services in ${city}, same service across other 8 cities, city hub link, reviews, local FAQs`,
      url,
      'Indexable',
      'Fully Optimized (15-Section Unique Structure)',
      `Crawlable via service directory and location hubs; utility coordinated with ${utility}`,
    ]);
  }
}

// 11. 6 Educational Blog Posts
for (const post of blogPosts) {
  const url = `${baseUrl}/blog/${post.slug}`;
  rows.push([
    url,
    'Educational Blog Article',
    post.category,
    'Western Washington',
    post.targetKeyword,
    'homeowner electrical guide, licensed electrician advice, electrical safety checklist',
    post.metaTitle,
    post.metaDescription,
    post.title,
    `Related Duvall service landing pages, related articles matrix, author box, phone consultation CTA`,
    url,
    'Indexable',
    'In-Depth Master Electrician Guide',
    'Targeting informational search intent to drive qualified organic traffic',
  ]);
}

// Build CSV string
let csvContent = headers.map(escapeCsv).join(',') + '\n';
for (const row of rows) {
  csvContent += row.map(escapeCsv).join(',') + '\n';
}

fs.writeFileSync('./public/seo-audit-matrix.csv', csvContent, 'utf8');
console.log(`Generated public/seo-audit-matrix.csv with ${rows.length} URLs`);

if (fs.existsSync('./dist')) {
  fs.writeFileSync('./dist/seo-audit-matrix.csv', csvContent, 'utf8');
  console.log('Copied seo-audit-matrix.csv to dist/seo-audit-matrix.csv');
}
