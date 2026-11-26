// Índice de sitemaps: um por cidade publicada + um geral.
import type { APIRoute } from 'astro';
import { gruposDoSitemap } from '../data/paginas';
import { SITE_URL } from '../data/site';

export const GET: APIRoute = () => {
  const itens = gruposDoSitemap()
    .map((g) => `  <sitemap><loc>${SITE_URL}/sitemap-${g.grupo}.xml</loc></sitemap>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${itens}\n</sitemapindex>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
