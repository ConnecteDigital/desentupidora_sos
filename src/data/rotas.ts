// Endereços das páginas, num lugar só.
import type { Cidade } from './cidades';
import type { Bairro } from './bairros';
import type { Servico } from './servicos';

export const cidadePath = (c: Pick<Cidade, 'slug'>) => `/desentupidora-em-${c.slug}/`;
export const bairroPath = (b: Pick<Bairro, 'cidade' | 'slug'>) => `/desentupidora-em-${b.cidade}/${b.slug}/`;
export const servicoCidadePath = (c: Pick<Cidade, 'slug'>, s: Pick<Servico, 'slug'>) =>
  `/desentupidora-em-${c.slug}/servicos/${s.slug}/`;
export const servicoPath = (s: Pick<Servico, 'slug'>) => `/servicos/${s.slug}/`;
