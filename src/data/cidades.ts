// Cidades atendidas. Cada cidade pertence a uma praça (que define o telefone).
// Para publicar uma cidade: preencha o conteúdo e mude `publicada` para true.
import { getPraca, whatsappUrl, type Praca } from './pracas';
import { cidadePath } from './rotas';
import type { Faq } from './servicos';

export interface Cidade {
  slug: string;
  nome: string;
  uf: string;
  // Nome com preposição: "no Rio de Janeiro", "em Vitória", "na Serra"
  em: string;
  // slug da praça (define o telefone)
  praca: string;
  // false = página ainda não gerada (aguardando aprovação)
  publicada: boolean;
  // Ordem das regiões na lista de bairros
  regioes?: string[];
  // Parágrafos de abertura da página da cidade
  intro?: string[];
  // Perguntas frequentes da página da cidade. {telefone} é trocado pelo número da praça.
  faq?: Faq[];
  // Um parágrafo por serviço, específico da cidade (chave = slug do serviço)
  notasServico?: Record<string, string>;
}

// Conteúdo de uma cidade, escrito em src/data/cidades/<slug>.ts
export type CidadeConteudo = Required<Pick<Cidade, 'regioes' | 'intro' | 'faq' | 'notasServico'>>;

const base: Cidade[] = [
  {
    slug: 'rio-de-janeiro',
    nome: 'Rio de Janeiro',
    uf: 'RJ',
    em: 'no Rio de Janeiro',
    praca: 'rio-de-janeiro',
    publicada: true,
    regioes: ['Zona Sul', 'Centro', 'Zona Norte', 'Zona Oeste'],
    intro: [
      'A Desentupidora SOS atende o Rio de Janeiro 24 horas por dia, todos os dias, inclusive domingos e feriados. Pia que não escoa, vaso sanitário transbordando, ralo devolvendo água ou esgoto voltando: é só chamar que chegamos em 20 minutos.',
      'O Rio reúne tipos de imóvel bem diferentes, e cada um entope de um jeito. Na Zona Sul e no Centro predominam prédios antigos, com colunas de ferro fundido e manilhas de barro. Na Zona Norte há muitas casas, vilas e sobrados com ramais compartilhados. Na Barra, no Recreio e em Jacarepaguá, os grandes condomínios têm redes internas longas e caixas de gordura coletivas. Atendemos casas, apartamentos, condomínios, lojas, restaurantes e empresas em todas essas regiões.',
    ],
    faq: [
      {
        q: 'A Desentupidora SOS atende 24 horas no Rio de Janeiro?',
        a: 'Sim. O atendimento no Rio de Janeiro é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
      {
        q: 'Em quanto tempo a desentupidora chega?',
        a: 'Chegamos em 20 minutos. Assim que você chama pelo WhatsApp ou por ligação, a equipe sai para o endereço.',
      },
      {
        q: 'Quais serviços de desentupimento vocês fazem no Rio de Janeiro?',
        a: 'Desentupimento de pia, ralo, vaso sanitário, cano, esgoto, coluna de prédio e rede pluvial, desentupimento e limpeza de caixa de gordura e hidrojateamento.',
      },
      {
        q: 'Vocês atendem empresas e condomínios?',
        a: 'Sim. O atendimento é residencial e comercial: casas, apartamentos, condomínios, lojas, restaurantes e empresas.',
      },
      {
        q: 'Quais regiões do Rio de Janeiro são atendidas?',
        a: 'Zona Sul, Centro, Zona Norte e Zona Oeste, incluindo Copacabana, Botafogo, Tijuca, Méier, Madureira, Barra da Tijuca, Recreio, Jacarepaguá, Campo Grande e Bangu, entre outros bairros.',
      },
      {
        q: 'Como peço um desentupimento no Rio de Janeiro?',
        a: 'Chame no WhatsApp ou ligue para {telefone}. Diga o bairro e o que está entupido; se puder, envie uma foto ou um vídeo.',
      },
    ],
    notasServico: {
      'desentupimento-de-pia':
        'No Rio de Janeiro, a pia de cozinha é o entupimento mais comum em apartamentos antigos da Zona Sul e da Tijuca, onde o ramal da cozinha é estreito e a gordura endurece dentro do cano ao longo dos anos.',
      'desentupimento-de-ralo':
        'No Rio, a areia de praia levada no corpo e nos pés acaba nos ralos de box e de área de serviço em bairros da orla, e as chuvas fortes de verão sobrecarregam ralos de quintal e de garagem em toda a cidade.',
      'desentupimento-de-vaso-sanitario':
        'No Rio de Janeiro, muitos prédios antigos ainda têm ramais de esgoto com pouca inclinação, o que facilita o acúmulo de papel e faz o vaso entupir mesmo com uso normal.',
      'desentupimento-de-cano':
        'No Rio, casas e sobrados antigos da Zona Norte, de Santa Teresa e do Catete ainda têm trechos de manilha de barro e de ferro, que acumulam crosta por dentro e estreitam a passagem da água.',
      'desentupimento-de-esgoto':
        'No Rio de Janeiro, vilas e casas de fundos costumam dividir o mesmo ramal de esgoto até a rua. Quando ele entope, a água volta primeiro no imóvel mais baixo ou mais próximo da saída.',
      'desentupimento-de-coluna':
        'O Rio tem um dos maiores conjuntos de prédios antigos do país, em bairros como Copacabana, Flamengo e Tijuca. Neles, as colunas de ferro fundido perdem diâmetro interno com a crosta de gordura e ferrugem.',
      'desentupimento-de-rede-pluvial':
        'As chuvas de verão no Rio são intensas e concentradas. Calhas, ralos de laje e tubos de queda com folhas e sedimentos não dão vazão, e a água invade garagens, terraços e lojas.',
      'limpeza-de-caixa-de-gordura':
        'No Rio de Janeiro, restaurantes, bares e quiosques produzem gordura em grande volume, e os condomínios da Barra e de Jacarepaguá concentram a gordura de dezenas de apartamentos em caixas coletivas que precisam de limpeza periódica.',
      'hidrojateamento':
        'No Rio, o hidrojateamento é indicado para redes longas de condomínios da Zona Oeste, para tubulações de restaurantes com gordura endurecida e para ramais antigos com crosta e raízes.',
    },
  },
  { slug: 'vila-velha', nome: 'Vila Velha', uf: 'ES', em: 'em Vila Velha', praca: 'espirito-santo', publicada: false },
  { slug: 'vitoria', nome: 'Vitória', uf: 'ES', em: 'em Vitória', praca: 'espirito-santo', publicada: false },
  { slug: 'serra', nome: 'Serra', uf: 'ES', em: 'na Serra', praca: 'espirito-santo', publicada: false },
  { slug: 'cariacica', nome: 'Cariacica', uf: 'ES', em: 'em Cariacica', praca: 'espirito-santo', publicada: false },
  { slug: 'petropolis', nome: 'Petrópolis', uf: 'RJ', em: 'em Petrópolis', praca: 'petropolis', publicada: false },
  { slug: 'cuiaba', nome: 'Cuiabá', uf: 'MT', em: 'em Cuiabá', praca: 'cuiaba', publicada: false },
  { slug: 'juiz-de-fora', nome: 'Juiz de Fora', uf: 'MG', em: 'em Juiz de Fora', praca: 'juiz-de-fora', publicada: false },
  { slug: 'joao-pessoa', nome: 'João Pessoa', uf: 'PB', em: 'em João Pessoa', praca: 'joao-pessoa', publicada: false },
];

// Conteúdo das cidades em src/data/cidades/<slug>.ts (arquivo novo entra sozinho e publica a cidade).
const conteudos = import.meta.glob<{ conteudo: CidadeConteudo }>('./cidades/*.ts', { eager: true });

export const cidades: Cidade[] = base.map((c) => {
  const extra = conteudos[`./cidades/${c.slug}.ts`]?.conteudo;
  return extra ? { ...c, ...extra, publicada: true } : c;
});

export const cidadesPublicadas = () => cidades.filter((c) => c.publicada);

export function getCidade(slug: string): Cidade {
  const c = cidades.find((x) => x.slug === slug);
  if (!c) throw new Error(`Cidade não encontrada: ${slug}`);
  return c;
}

export const pracaDaCidade = (c: Cidade): Praca => getPraca(c.praca);
export const cidadesDaPraca = (p: Praca) => cidades.filter((c) => c.praca === p.slug);

// Para onde o seletor "Escolha sua cidade" leva.
// Cidade ainda não publicada cai no card da praça, na página de contato.
export const destinoDaCidade = (c: Cidade) => (c.publicada ? cidadePath(c) : `/contato/#${c.praca}`);

// Mensagem pré-preenchida do WhatsApp: sempre cita a cidade.
export function mensagemWhats(c: Cidade, opts: { bairro?: string; servico?: string } = {}) {
  const local = opts.bairro ? `${opts.bairro}, ${c.nome}` : c.nome;
  const pedido = opts.servico ? opts.servico.toLowerCase() : 'uma desentupidora';
  return `Olá! Vim pelo site da Desentupidora SOS e preciso de ${pedido} em ${local}.`;
}

export const whatsDaCidade = (c: Cidade, opts: { bairro?: string; servico?: string } = {}) =>
  whatsappUrl(pracaDaCidade(c), mensagemWhats(c, opts));
