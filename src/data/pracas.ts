// Praças atendidas e o telefone de cada uma.
// O mesmo número serve para ligação e WhatsApp.
// REGRA DO PROJETO: toda página de uma praça mostra SOMENTE o telefone dela.

export interface Praca {
  slug: string;
  nome: string;
  // 55 + DDD + número, só dígitos
  phoneDigits: string;
  // Como a praça é citada na mensagem do WhatsApp quando não há cidade definida
  local?: string;
}

export const pracas: Praca[] = [
  { slug: 'rio-de-janeiro', nome: 'Rio de Janeiro', phoneDigits: '5521971711247' },
  { slug: 'espirito-santo', nome: 'Espírito Santo', phoneDigits: '5527997149978', local: 'Grande Vitória (ES)' },
  { slug: 'petropolis', nome: 'Petrópolis', phoneDigits: '5524999190828' },
  { slug: 'cuiaba', nome: 'Cuiabá', phoneDigits: '5565999197435' },
  { slug: 'juiz-de-fora', nome: 'Juiz de Fora', phoneDigits: '5532998551328' },
  { slug: 'joao-pessoa', nome: 'João Pessoa', phoneDigits: '5583991358502' },
];

export function getPraca(slug: string): Praca {
  const p = pracas.find((x) => x.slug === slug);
  if (!p) throw new Error(`Praça não encontrada: ${slug}`);
  return p;
}

// Exibição: (21) 97171-1247
export function phoneDisplay(p: Praca) {
  const d = p.phoneDigits;
  return `(${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`;
}

// tel:+55DDDNUMERO
export function telHref(p: Praca) {
  return `tel:+${p.phoneDigits}`;
}

// https://wa.me/55DDDNUMERO?text=...
export function whatsappUrl(p: Praca, mensagem: string) {
  return `https://wa.me/${p.phoneDigits}?text=${encodeURIComponent(mensagem)}`;
}

// Mensagem do WhatsApp nos cards de praça (início e contato): cita a praça.
export const mensagemDaPraca = (p: Praca) =>
  `Olá! Vim pelo site da Desentupidora SOS e preciso de uma desentupidora em ${p.local ?? p.nome}.`;
