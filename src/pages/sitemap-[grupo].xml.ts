// Um sitemap por cidade (sitemap-rio-de-janeiro.xml etc.) e um geral (sitemap-geral.xml).
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { gruposDoSitemap } from '../data/paginas';
import { SITE_URL } from '../data/site';

export async function getStaticPaths() {
  const posts = (await getCollection('blog')).map((p) => p.id);
  const locais = (await getCollection('blogCidades')).map((p) => p.id);
  return gruposDoSitemap(posts, locais).map((g) => ({ params: { grupo: g.grupo }, props: { paths: g.paths } }));
}

export const GET: APIRoute = ({ props }) => {
  const urls = (props.paths as string[]).map((p) => `  <url><loc>${SITE_URL}${p}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
