// Bairros de todas as cidades. Os registros ficam em src/data/bairros/<cidade>.ts.
// Para adicionar um bairro: inclua um registro no arquivo da cidade. A página é criada sozinha.
import type { Faq } from './servicos';
import { rioDeJaneiro } from './bairros/rio-de-janeiro';

// O que se escreve em cada registro
export interface BairroDados {
  nome: string;
  // Opcional: por padrão o slug é gerado a partir do nome
  slug?: string;
  // Nome com preposição: "em Copacabana", "no Leblon", "na Tijuca"
  em: string;
  // Região ou zona da cidade
  regiao: string;
  // Título principal (H1) da página, escrito para o bairro
  h1: string;
  // 3 a 5 bairros próximos. Os que tiverem página viram link.
  vizinhos: string[];
  // 2 a 4 ruas, avenidas ou pontos de referência REAIS
  referencias: string[];
  // Tipo de imóvel predominante
  imovel: string;
  // Problema de entupimento mais comum nesse tipo de imóvel
  problema: string;
  // slug do serviço indicado para esse problema
  servico: string;
  // Parágrafo de abertura, exclusivo do bairro
  abertura: string;
  // 3 perguntas frequentes específicas do bairro
  faq: Faq[];
}

export interface Bairro extends BairroDados {
  slug: string;
  // slug da cidade
  cidade: string;
}

export function slugify(texto: string) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

const daCidade = (cidade: string, lista: BairroDados[]): Bairro[] =>
  lista.map((b) => ({ ...b, cidade, slug: b.slug ?? slugify(b.nome) }));

export const bairros: Bairro[] = [
  ...daCidade('rio-de-janeiro', rioDeJaneiro),
];

export const bairrosDaCidade = (cidade: string) => bairros.filter((b) => b.cidade === cidade);

// Bairros agrupados por região, na ordem definida na cidade
export function bairrosPorRegiao(cidade: string, ordem: string[] = []) {
  const lista = bairrosDaCidade(cidade);
  const regioes = [...new Set([...ordem, ...lista.map((b) => b.regiao)])];
  return regioes
    .map((regiao) => ({ regiao, bairros: lista.filter((b) => b.regiao === regiao) }))
    .filter((g) => g.bairros.length > 0);
}

// Vizinho com página na mesma cidade (para virar link)
export const acharBairro = (cidade: string, nome: string) =>
  bairros.find((b) => b.cidade === cidade && b.nome === nome);
