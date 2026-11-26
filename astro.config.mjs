import { defineConfig } from 'astro/config';

// ÚNICO lugar onde o domínio é definido. Canonical, sitemap, Open Graph,
// JSON-LD e robots.txt leem este valor (import.meta.env.SITE).
export default defineConfig({
  site: 'https://www.desentupidorasos24hr.com.br',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
