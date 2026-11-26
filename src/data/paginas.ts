// Lista de todas as páginas do site, agrupadas para o sitemap (um grupo por cidade + "geral").
import { servicos } from './servicos';
import { cidadesPublicadas } from './cidades';
import { bairrosDaCidade } from './bairros';
import { cidadePath, bairroPath, servicoCidadePath, servicoPath, blogCidadePath, postCidadePath } from './rotas';

export function gruposDoSitemap(posts: string[] = [], postsCidades: string[] = []): { grupo: string; paths: string[] }[] {
  const geral = [
    '/',
    '/servicos/',
    ...servicos.map(servicoPath),
    '/area-de-atendimento/',
    '/sobre/',
    '/contato/',
    '/politica-de-privacidade/',
    '/blog/',
    ...posts.map((id) => `/blog/${id}/`),
  ];
  const porCidade = cidadesPublicadas().map((c) => ({
    grupo: c.slug,
    paths: [
      cidadePath(c),
      ...servicos.map((s) => servicoCidadePath(c, s)),
      ...bairrosDaCidade(c.slug).map(bairroPath),
      blogCidadePath(c),
      ...postsCidades.filter((id) => id.startsWith(c.slug + '/')).map(postCidadePath),
    ],
  }));
  return [{ grupo: 'geral', paths: geral }, ...porCidade];
}
