// Dados centrais da marca. Altere aqui e o site inteiro é atualizado.
// O DOMÍNIO não fica aqui: ele vem de `site` no astro.config.mjs.

export const site = {
  // Marca exibida. O "24hr" existe só no domínio, nunca no nome.
  name: 'Desentupidora SOS',
  description:
    'Desentupidora 24 horas. Desentupimento de pia, ralo, vaso sanitário, cano, esgoto, coluna de prédio, rede pluvial, caixa de gordura e hidrojateamento. Chegamos em 20 minutos.',
};

// Endereço do site, lido do astro.config.mjs (sem barra no final)
export const SITE_URL = (import.meta.env.SITE ?? '').replace(/\/$/, '');

// ---- Mensagens fixas da marca (iguais em todas as praças) ----
export const marca = {
  chegada: 'Chegamos em 20 minutos',
  horario: 'Atendimento 24 horas',
  horarioDetalhe: 'Todos os dias, inclusive domingos e feriados',
  emergencia: 'Serviços emergenciais',
  publico: 'Atendimento residencial e comercial',
  publicoDetalhe: 'Casas, apartamentos, condomínios, lojas, restaurantes e empresas',
};

// ---- Tag do Google Ads (conversões) ----
// A mesma tag vale para o site inteiro, em todas as cidades.
// Rótulo = o trecho depois da barra em "AW-781093794/XXXXXXXX".
export const GOOGLE_TAG_ID = 'AW-781093794';
export const ROTULO_CONVERSAO_WHATSAPP = 'GJQDCLWQo8ADEKKXuvQC';
export const ROTULO_CONVERSAO_LIGACAO = 'Dcw7CN7vq7EDEKKXuvQC';
