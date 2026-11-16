import fs from 'fs';
import { services } from '../src/data/services.ts';
import { locations } from '../src/data/locations.ts';
import { blogPosts } from '../src/data/blogPosts.ts';

const baseUrl = 'https://www.sparkselectricandservice.com';
const today = new Date().toISOString().split('T')[0];

const staticPages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/service-areas', priority: '0.9', changefreq: 'weekly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: '0.3', changefreq: 'yearly' },
];

let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

// 1. Static pages
for (const p of staticPages) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}${p.path}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>${p.changefreq}</changefreq>\n`;
  xml += `    <priority>${p.priority}</priority>\n`;
  xml += '  </url>\n';
}

// 2. Service Area pages (9 pages: /electrician-monroe-wa, etc.)
for (const loc of locations) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/${loc.slug}</loc>\n`;
  xml += `    <lastmod>${today}</lastmod>\n`;
  xml += `    <changefreq>weekly</changefreq>\n`;
  xml += `    <priority>0.8</priority>\n`;
  xml += '  </url>\n';
}

// 3. Service Location pages (12 services * 9 locations = 108 pages: /electrical-repair-monroe-wa, etc.)
for (const serv of services) {
  for (const loc of locations) {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}/${serv.slug}-${loc.citySlug}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += '  </url>\n';
  }
}

// 4. Educational Blog Guides
for (const post of blogPosts) {
  xml += '  <url>\n';
  xml += `    <loc>${baseUrl}/blog/${post.slug}</loc>\n`;
  xml += `    <lastmod>${post.dateModified || today}</lastmod>\n`;
  xml += `    <changefreq>monthly</changefreq>\n`;
  xml += `    <priority>0.7</priority>\n`;
  xml += '  </url>\n';
}

xml += '</urlset>\n';

const totalUrls = staticPages.length + locations.length + (services.length * locations.length) + blogPosts.length;
fs.writeFileSync('./public/sitemap.xml', xml, 'utf8');
console.log(`Generated public/sitemap.xml with ${totalUrls} URLs`);

if (fs.existsSync('./dist')) {
  fs.writeFileSync('./dist/sitemap.xml', xml, 'utf8');
  console.log('Copied sitemap.xml to dist/sitemap.xml');
  if (fs.existsSync('./public/robots.txt')) {
    fs.copyFileSync('./public/robots.txt', './dist/robots.txt');
    console.log('Copied robots.txt to dist/robots.txt');
  }
}
