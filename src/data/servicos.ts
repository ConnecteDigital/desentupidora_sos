// Serviços da Desentupidora SOS. SÓ desentupimento.
// Não incluir: limpa-fossa, dedetização, encanador, caça-vazamento.
import type { IconName } from './icons';

export interface Faq {
  q: string;
  a: string;
}

export interface Servico {
  slug: string;
  nome: string;
  // Nome curto para menus e cards
  curto: string;
  resumo: string;
  icon: IconName;
  intro: string[];
  // "Quando chamar"
  sinais: string[];
  // "Como é feito"
  comoFazemos: string[];
  faq: Faq[];
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de pia',
    curto: 'Pia',
    resumo: 'Pia de cozinha, de banheiro ou tanque com a água parada ou descendo devagar.',
    icon: 'faucet',
    intro: [
      'Pia entupida quase sempre é gordura, resto de comida e sabão acumulados no sifão ou no ramal que leva a água até a caixa de gordura. Na pia do banheiro, o que fecha o cano é cabelo misturado com creme dental e sabonete.',
      'O desentupimento de pia é feito por dentro do cano, com equipamento próprio para o diâmetro da tubulação, até a água voltar a escoar normalmente.',
    ],
    sinais: [
      'A água demora para descer ou fica parada na cuba',
      'Cheiro ruim subindo pelo ralo da pia',
      'Barulho de borbulhas quando a água escoa',
      'Água da pia voltando pelo ralo do chão ou pelo tanque',
      'O desentupidor de borracha não resolve mais',
    ],
    comoFazemos: [
      'Verificamos se o entupimento está no sifão, no ramal da pia ou na caixa de gordura',
      'Desobstruímos o trecho com o equipamento adequado ao cano',
      'Testamos o escoamento com água corrente',
      'Explicamos o que causou o entupimento e como evitar que volte',
    ],
    faq: [
      {
        q: 'Posso usar soda cáustica para desentupir a pia?',
        a: 'Não é recomendado. A soda cáustica pode endurecer a gordura dentro do cano, danificar tubos e conexões e causar queimaduras. O desentupimento mecânico remove a obstrução sem esse risco.',
      },
      {
        q: 'Por que a pia da cozinha entope com frequência?',
        a: 'O principal motivo é a gordura. Ela desce líquida, esfria dentro do cano e gruda nas paredes, prendendo restos de comida. Com o tempo, a passagem fecha.',
      },
      {
        q: 'A água da pia está voltando pelo ralo. É a pia que está entupida?',
        a: 'Nesse caso, o entupimento costuma estar depois da pia, no ramal ou na caixa de gordura. É preciso desobstruir esse trecho, não só o sifão.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de ralo',
    curto: 'Ralo',
    resumo: 'Ralo de box, banheiro, cozinha, área de serviço, quintal ou garagem que não dá vazão.',
    icon: 'drain',
    intro: [
      'Ralo entupido deixa o box alagado, faz a água da máquina de lavar voltar e espalha mau cheiro pela casa. As causas mais comuns são cabelo, sabão, fiapos de roupa, areia e terra.',
      'O desentupimento de ralo alcança a obstrução dentro da tubulação, depois da caixa sifonada, onde a limpeza manual não chega.',
    ],
    sinais: [
      'Água acumulando no box durante o banho',
      'Água da máquina de lavar voltando pelo ralo',
      'Mau cheiro de esgoto no banheiro ou na área de serviço',
      'Ralo do quintal ou da garagem alagando quando chove',
      'Insetos saindo pelo ralo',
    ],
    comoFazemos: [
      'Abrimos e limpamos a caixa sifonada',
      'Localizamos o ponto entupido no ramal',
      'Desobstruímos o cano e removemos o material acumulado',
      'Testamos o escoamento com volume de água',
    ],
    faq: [
      {
        q: 'O ralo do banheiro está com mau cheiro. É entupimento?',
        a: 'Pode ser. O cheiro aparece quando há sujeira acumulada na caixa sifonada, quando o fecho hídrico seca ou quando o ramal está parcialmente obstruído.',
      },
      {
        q: 'Por que a água volta pelo ralo quando uso a máquina de lavar?',
        a: 'A máquina despeja muita água de uma vez. Se o cano está parcialmente fechado por fiapos e sabão, ele não dá vazão e a água sai pelo ponto mais baixo, que é o ralo.',
      },
      {
        q: 'Vocês desentopem ralo de garagem e de quintal?',
        a: 'Sim. Atendemos ralos internos e externos, em casas, prédios, lojas e empresas.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de vaso sanitário',
    curto: 'Vaso sanitário',
    resumo: 'Vaso que não dá descarga, enche até a borda ou transborda.',
    icon: 'toilet',
    intro: [
      'Vaso sanitário entupido é emergência: sem ele, o banheiro fica inutilizado e há risco de transbordar. As causas mais comuns são excesso de papel, absorventes, fraldas, lenços umedecidos, fio dental e objetos que caem na louça.',
      'O desentupimento é feito com equipamento que passa pelo sifão do vaso e pelo ramal de esgoto sem riscar a louça.',
    ],
    sinais: [
      'A água sobe até a borda quando a descarga é acionada',
      'A descarga desce devagar e o nível demora a voltar',
      'A água do vaso borbulha quando outro ponto é usado',
      'Mau cheiro persistente no banheiro',
      'O vaso entope de novo poucos dias depois',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está no vaso ou no ramal de esgoto',
      'Desobstruímos com equipamento próprio para louça sanitária',
      'Retiramos o objeto ou material que causou o entupimento',
      'Testamos com várias descargas seguidas',
    ],
    faq: [
      {
        q: 'O que fazer quando o vaso está quase transbordando?',
        a: 'Não acione a descarga de novo. Feche o registro do vaso, se houver, e chame a desentupidora. Insistir na descarga faz a água transbordar.',
      },
      {
        q: 'Precisa tirar o vaso do lugar para desentupir?',
        a: 'Na maior parte dos casos, não. A remoção só é necessária quando um objeto rígido fica preso no sifão interno da louça.',
      },
      {
        q: 'Lenço umedecido entope o vaso?',
        a: 'Sim. Lenços umedecidos, absorventes e fraldas não se desfazem na água como o papel higiênico e são causas frequentes de entupimento.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    nome: 'Desentupimento de cano',
    curto: 'Cano',
    resumo: 'Tubulação entupida dentro de parede, piso ou laje, em casas, prédios e comércios.',
    icon: 'pipe',
    intro: [
      'Quando mais de um ponto da casa escoa mal ao mesmo tempo, o entupimento não está na pia nem no ralo: está no cano que recebe todos eles. Gordura, crosta, areia, restos de obra e objetos são as causas mais comuns.',
      'O desentupimento de cano percorre a tubulação por dentro até o ponto obstruído, pelos acessos que já existem: ralos, caixas de inspeção e pontos de visita.',
    ],
    sinais: [
      'Dois ou mais pontos escoando devagar ao mesmo tempo',
      'Água de um ponto voltando por outro',
      'Barulho de ar na tubulação',
      'Entupimentos que voltam depois de soluções caseiras',
      'Tubulação antiga, de ferro ou manilha de barro',
    ],
    comoFazemos: [
      'Identificamos o trecho entupido a partir dos pontos afetados',
      'Acessamos o cano pelo ponto de visita mais próximo',
      'Desobstruímos com o equipamento indicado para o material e o diâmetro do tubo',
      'Testamos todos os pontos ligados àquele cano',
    ],
    faq: [
      {
        q: 'Como saber se o entupimento é no cano e não só na pia ou no ralo?',
        a: 'Quando vários pontos escoam mal ao mesmo tempo, ou a água de um ponto sai por outro, a obstrução está no cano que os liga.',
      },
      {
        q: 'Precisa quebrar a parede ou o piso para desentupir o cano?',
        a: 'O desentupimento é feito por dentro da tubulação, pelos acessos existentes. Quebra só entra em pauta quando o cano está rompido ou desabado, e isso é informado antes.',
      },
      {
        q: 'Cano antigo de ferro ou de manilha pode ser desentupido?',
        a: 'Pode. O equipamento e a técnica são escolhidos de acordo com o material e o estado do tubo.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de esgoto',
    curto: 'Esgoto',
    resumo: 'Esgoto voltando pelos ralos, caixa de inspeção cheia ou mau cheiro forte no imóvel.',
    icon: 'drop',
    intro: [
      'Esgoto entupido é o caso mais urgente: a água suja volta pelos ralos e pelo vaso, e o imóvel fica sem condição de uso. A obstrução costuma estar no ramal que leva o esgoto do imóvel até a rede da rua ou nas caixas de inspeção.',
      'O desentupimento de esgoto libera o ramal principal e as caixas de inspeção para que todo o esgoto do imóvel volte a correr.',
    ],
    sinais: [
      'Esgoto voltando pelo ralo do banheiro ou pelo vaso',
      'Caixa de inspeção cheia ou transbordando',
      'Mau cheiro forte no quintal, na garagem ou na calçada',
      'Todos os pontos do imóvel escoando mal',
      'Água suja aparecendo no térreo de prédios e sobrados',
    ],
    comoFazemos: [
      'Abrimos as caixas de inspeção para localizar o trecho obstruído',
      'Desobstruímos o ramal principal até a ligação com a rede da rua',
      'Limpamos as caixas de inspeção',
      'Testamos o escoamento de todo o imóvel',
    ],
    faq: [
      {
        q: 'O esgoto está voltando pelo ralo. O que fazer até a equipe chegar?',
        a: 'Pare de usar água no imóvel: não dê descarga, não use pia, chuveiro nem máquina de lavar. Cada uso aumenta o volume que volta.',
      },
      {
        q: 'O entupimento é no meu imóvel ou na rede da rua?',
        a: 'Se a caixa de inspeção mais próxima da rua estiver vazia, o entupimento está dentro do imóvel. Se estiver cheia, pode estar na ligação com a rede pública. A verificação é feita no atendimento.',
      },
      {
        q: 'Raiz de árvore pode entupir o esgoto?',
        a: 'Sim. Raízes entram pelas juntas das manilhas em busca de umidade e formam uma trama que segura papel e gordura.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-coluna',
    nome: 'Desentupimento de coluna',
    curto: 'Coluna de prédio',
    resumo: 'Coluna de esgoto, de gordura ou de água de pia entupida em prédios e condomínios.',
    icon: 'valve',
    intro: [
      'A coluna é o tubo vertical que recebe o esgoto ou a água das pias de todos os apartamentos de uma prumada. Quando ela entope, a água volta no apartamento mais baixo acima da obstrução, mesmo que ele não tenha usado nada.',
      'O desentupimento de coluna em prédios é feito a partir dos pontos de acesso da prumada, com equipamento dimensionado para tubos de maior diâmetro.',
    ],
    sinais: [
      'Água ou espuma voltando pela pia ou pelo ralo sem uso no apartamento',
      'Vários apartamentos da mesma prumada com escoamento lento',
      'Vazamento ou mancha no teto junto ao shaft',
      'Mau cheiro em apartamentos de andares baixos',
      'Retorno de esgoto no térreo ou na garagem',
    ],
    comoFazemos: [
      'Identificamos qual coluna está obstruída e em que altura',
      'Acessamos a prumada pelo ponto de visita ou pelo ramal mais próximo',
      'Desobstruímos a coluna até a saída para a rede do prédio',
      'Testamos com descarga de água nos andares acima',
    ],
    faq: [
      {
        q: 'Quem deve chamar a desentupidora: o morador ou o condomínio?',
        a: 'A coluna é parte comum do prédio, então a manutenção cabe ao condomínio. Já o ramal interno do apartamento é de responsabilidade do morador. Avise o síndico ao notar o problema.',
      },
      {
        q: 'Por que a água volta no meu apartamento se o entupimento é na coluna?',
        a: 'Tudo o que os andares de cima despejam desce pela coluna. Ao encontrar a obstrução, a água sai pelo primeiro ponto livre, que é o apartamento logo acima dela.',
      },
      {
        q: 'Colunas de prédios antigos entopem mais?',
        a: 'Sim. Tubos antigos de ferro fundido acumulam crosta de ferrugem e gordura, que reduz o diâmetro interno e facilita a obstrução.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-rede-pluvial',
    nome: 'Desentupimento de rede pluvial',
    curto: 'Rede pluvial',
    resumo: 'Calhas, ralos de laje, tubos de queda e galerias de água de chuva obstruídos.',
    icon: 'shower',
    intro: [
      'A rede pluvial leva a água da chuva do telhado, da laje, do quintal e da garagem até a rua. Folhas, terra, areia e lixo se acumulam nos tubos e, na primeira chuva forte, a água não tem para onde ir.',
      'O desentupimento da rede pluvial libera calhas, ralos, tubos de queda e caixas de areia antes ou depois do alagamento.',
    ],
    sinais: [
      'Garagem, quintal ou terraço alagando quando chove',
      'Água escorrendo por fora da calha',
      'Infiltração no teto depois de chuva',
      'Ralo de laje com água parada',
      'Caixa de areia cheia de terra e folhas',
    ],
    comoFazemos: [
      'Inspecionamos ralos, calhas, tubos de queda e caixas de areia',
      'Removemos folhas, terra e sedimentos acumulados',
      'Desobstruímos a tubulação até a saída para a rua',
      'Testamos a vazão com água',
    ],
    faq: [
      {
        q: 'Qual a diferença entre rede pluvial e rede de esgoto?',
        a: 'A rede pluvial recebe só água de chuva. A rede de esgoto recebe a água usada em pias, ralos e vasos. São tubulações separadas.',
      },
      {
        q: 'Quando é o melhor momento para desobstruir a rede pluvial?',
        a: 'Antes do período de chuvas. A limpeza preventiva evita alagamento em garagens, lojas e terraços.',
      },
      {
        q: 'Vocês atendem alagamento durante a chuva?',
        a: 'Sim. O atendimento é 24 horas, inclusive em emergências durante temporais.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Desentupimento e limpeza de caixa de gordura',
    curto: 'Caixa de gordura',
    resumo: 'Caixa de gordura cheia, transbordando ou com mau cheiro, em casas, condomínios e restaurantes.',
    icon: 'tank',
    intro: [
      'A caixa de gordura retém a gordura que desce pela pia da cozinha antes que ela chegue ao esgoto. Quando enche, a gordura passa direto para a tubulação, a pia para de escoar e o mau cheiro toma a cozinha ou a área externa.',
      'O serviço inclui a retirada da gordura acumulada, a limpeza da caixa e a desobstrução dos canos de entrada e de saída.',
    ],
    sinais: [
      'Pia da cozinha escoando devagar em toda a casa ou prumada',
      'Mau cheiro de gordura na cozinha, no quintal ou na garagem',
      'Caixa transbordando pela tampa',
      'Baratas e outros insetos próximos à caixa',
      'Mais de seis meses sem limpeza em residências',
    ],
    comoFazemos: [
      'Abrimos a caixa e retiramos a gordura e os resíduos sólidos',
      'Limpamos as paredes e o sifão interno da caixa',
      'Desobstruímos os canos de entrada e de saída',
      'Testamos o escoamento a partir da pia',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo a caixa de gordura deve ser limpa?',
        a: 'Em residências, em geral a cada seis meses. Em restaurantes, lanchonetes e cozinhas industriais, o intervalo é bem menor e depende do volume de uso.',
      },
      {
        q: 'Como saber se a caixa de gordura está cheia?',
        a: 'Os sinais são pia escoando devagar, mau cheiro perto da caixa e gordura visível na superfície ao abrir a tampa.',
      },
      {
        q: 'Vocês atendem restaurantes e cozinhas comerciais?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, o que permite fazer o serviço fora do horário de funcionamento.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    nome: 'Hidrojateamento',
    curto: 'Hidrojateamento',
    resumo: 'Limpeza de tubulações com jato de água em alta pressão, para gordura endurecida, crosta e raízes.',
    icon: 'pump',
    intro: [
      'O hidrojateamento usa água em alta pressão para limpar a tubulação por dentro. Além de abrir a passagem, ele remove a gordura, a crosta e os sedimentos presos nas paredes do cano, que são a causa dos entupimentos que voltam.',
      'É indicado para redes de esgoto e de gordura de condomínios, restaurantes, indústrias e para tubulações residenciais com obstrução antiga.',
    ],
    sinais: [
      'Entupimentos que voltam poucas semanas depois',
      'Tubulação com gordura endurecida ou crosta',
      'Raízes dentro da rede de esgoto',
      'Redes longas de condomínios e empresas',
      'Limpeza preventiva de colunas, ramais e galerias',
    ],
    comoFazemos: [
      'Avaliamos a rede e escolhemos o bico e a pressão para o tipo de tubo',
      'Introduzimos a mangueira pelo ponto de acesso',
      'Aplicamos o jato ao longo de todo o trecho, soltando o material das paredes',
      'Testamos a vazão ao final',
    ],
    faq: [
      {
        q: 'Qual a diferença entre hidrojateamento e desentupimento comum?',
        a: 'O desentupimento comum abre passagem na obstrução. O hidrojateamento lava toda a parede interna do cano, removendo o material que causaria um novo entupimento.',
      },
      {
        q: 'O hidrojateamento danifica a tubulação?',
        a: 'Não, quando a pressão e o bico são escolhidos de acordo com o material e o estado do tubo. Essa avaliação é feita antes do serviço.',
      },
      {
        q: 'Hidrojateamento serve para residência?',
        a: 'Sim. É usado em casas e apartamentos quando o entupimento é causado por gordura endurecida, crosta ou raízes.',
      },
    ],
  },
];

export function getServico(slug: string): Servico {
  const s = servicos.find((x) => x.slug === slug);
  if (!s) throw new Error(`Serviço não encontrado: ${slug}`);
  return s;
}
