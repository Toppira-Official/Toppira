import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

const siteUrl = (process.env.VITE_SITE_URL || 'https://toppira.com').replace(/\/$/, '');
const routes = ['/', '/about', '/products'];
const lastmod = new Date().toISOString().split('T')[0];

const urlEntries = routes
  .map((route) => {
    const loc = route === '/' ? siteUrl : `${siteUrl}${route}`;
    const priority = route === '/' ? '1.0' : '0.8';
    const changefreq = route === '/' ? 'weekly' : 'monthly';

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const publicDir = join(rootDir, 'public');
mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, 'sitemap.xml'), sitemap, 'utf8');

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

writeFileSync(join(publicDir, 'robots.txt'), robots, 'utf8');

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
