// JSON-LD. O telefone sempre vem da praça da página; sem endereço físico.
import { site, SITE_URL } from './site';
import { cidades, pracaDaCidade, cidadesDaPraca, type Cidade } from './cidades';
import { pracas } from './pracas';
import { cidadePath } from './rotas';
import type { Faq, Servico } from './servicos';

const abs = (path: string) => new URL(path, SITE_URL + '/').href;

const horario = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
};

export const businessId = (cidade?: Cidade) => (cidade ? `${abs(cidadePath(cidade))}#empresa` : `${SITE_URL}/#empresa`);

// LocalBusiness (Plumber). Com cidade: só o telefone da praça. Sem cidade: um contato por praça.
// `comContatos`: só nas páginas que listam as praças (início e contato).
export function localBusinessSchema(cidade?: Cidade, bairro?: string, comContatos = false) {
  const base = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': businessId(cidade),
    name: site.name,
    logo: abs('/logo.png'),
    image: abs('/og.jpg'),
    description: site.description,
    openingHoursSpecification: horario,
  };
  if (cidade) {
    const praca = pracaDaCidade(cidade);
    const area: object[] = [{ '@type': 'City', name: `${cidade.nome} - ${cidade.uf}` }];
    if (bairro) area.unshift({ '@type': 'Place', name: `${bairro}, ${cidade.nome} - ${cidade.uf}` });
    return { ...base, url: abs(cidadePath(cidade)), telephone: `+${praca.phoneDigits}`, areaServed: area };
  }
  return {
    ...base,
    url: SITE_URL + '/',
    areaServed: cidades.map((c) => ({ '@type': 'City', name: `${c.nome} - ${c.uf}` })),
    contactPoint: !comContatos ? undefined : pracas.map((p) => ({
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: `+${p.phoneDigits}`,
      areaServed: cidadesDaPraca(p).map((c) => `${c.nome} - ${c.uf}`),
      availableLanguage: 'pt-BR',
    })),
  };
}

export function faqSchema(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  };
}

// Service. `nome` e `descricao` vêm da página; `area` é a cidade ou o bairro.
export function serviceSchema(opts: { nome: string; descricao: string; area?: string; cidade?: Cidade; tipo?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.nome,
    serviceType: opts.tipo ?? 'Desentupimento',
    description: opts.descricao,
    provider: { '@id': businessId(opts.cidade) },
    areaServed: opts.area
      ? { '@type': 'Place', name: opts.area }
      : cidades.map((c) => ({ '@type': 'City', name: `${c.nome} - ${c.uf}` })),
    hoursAvailable: horario,
  };
}

export const servicoSchema = (s: Servico, cidade?: Cidade) =>
  serviceSchema({
    nome: cidade ? `${s.nome} ${cidade.em}` : s.nome,
    tipo: s.nome,
    descricao: s.resumo,
    area: cidade ? `${cidade.nome} - ${cidade.uf}` : undefined,
    cidade,
  });
