// Bairros e localidades de Petrópolis. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const petropolis: BairroDados[] = [
  // ---------------- CENTRO E ARREDORES ----------------
  {
    nome: 'Centro',
    em: 'no Centro',
    regiao: 'Centro e arredores',
    h1: 'Desentupidora no Centro de Petrópolis 24 horas',
    vizinhos: ['Valparaíso', 'Castelânea', 'Saldanha Marinho', 'Duchas', 'Alto da Serra'],
    referencias: ['Rua do Imperador', 'Rua 16 de Março', 'Avenida Koeler', 'Praça da Liberdade'],
    imovel: 'Casarões e sobrados antigos, muitos ocupados por lojas, restaurantes, consultórios e pousadas, ao lado de prédios comerciais e residenciais.',
    problema:
      'Nos imóveis antigos do Centro ainda há trechos de manilha de barro e de ferro fundido. A crosta interna, as juntas deslocadas e as emendas feitas em reformas sucessivas estreitam o cano, e a água passa a voltar pela pia e pelos ralos.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Centro de Petrópolis concentra o comércio da Rua do Imperador e da Rua 16 de Março e os casarões da Avenida Koeler e do entorno da Praça da Liberdade. Boa parte desses imóveis foi construída para ser moradia de uma família e hoje abriga loja, restaurante ou escritório, com a tubulação original trabalhando acima do que foi prevista.',
    faq: [
      {
        q: 'Meu imóvel no Centro é antigo. Dá para desentupir sem quebrar piso ou parede?',
        a: 'Na maioria dos casos, sim. O desentupimento é feito pelos pontos de acesso que já existem, como ralos, caixas de inspeção e a saída do sifão, com máquina rotativa ou jato de água.',
      },
      {
        q: 'O cano entope de novo poucas semanas depois. Por quê?',
        a: 'Em tubulação antiga, a sujeira prende na crosta e nas juntas desalinhadas. Quando só se abre um furo na obstrução, ela se refaz rápido. É preciso limpar a parede interna do cano em todo o trecho.',
      },
      {
        q: 'Vocês atendem lojas da Rua do Imperador fora do horário comercial?',
        a: 'Sim. O atendimento no Centro é 24 horas, inclusive domingos e feriados, e o serviço pode ser feito antes da loja abrir ou depois que fechar.',
      },
    ],
  },
  {
    nome: 'Alto da Serra',
    em: 'no Alto da Serra',
    regiao: 'Centro e arredores',
    h1: 'Desentupimento no Alto da Serra a qualquer hora',
    vizinhos: ['Centro', 'Vila Felipe', 'Chácara Flora', 'Morin', 'Castelânea'],
    referencias: ['Rua Teresa', 'Rua Padre Feijó', 'Serra Velha da Estrela (RJ-107)'],
    imovel: 'Casas e sobrados em ruas inclinadas e servidões, com lojas de confecção e pequenos prédios ao longo da Rua Teresa.',
    problema:
      'Nas ruas de encosta, várias casas descem o esgoto por um mesmo ramal, com curvas e degraus para acompanhar o terreno. Papel, gordura e terra param nesses pontos, e o esgoto volta primeiro na casa que fica mais abaixo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Alto da Serra fica na chegada da Serra Velha da Estrela e reúne o trecho alto da Rua Teresa, conhecida pelo comércio de roupas, e ruas residenciais que sobem o morro, como a Padre Feijó. O relevo define a rede de esgoto do bairro: ramais longos, inclinados e divididos entre vizinhos.',
    faq: [
      {
        q: 'O esgoto está voltando no ralo do quintal, mas dentro de casa tudo escoa. Onde está o problema?',
        a: 'Quase sempre no ramal externo, depois da última caixa de inspeção do imóvel. O ralo do quintal é o ponto mais baixo e é por ele que a água retorna primeiro.',
      },
      {
        q: 'O ramal é dividido com o vizinho de cima. Quem precisa estar presente?',
        a: 'O ideal é que os imóveis ligados ao ramal liberem o acesso às caixas de inspeção. Assim o desentupimento alcança todo o trecho e não só a parte de uma casa.',
      },
      {
        q: 'Atendem as servidões e ruas estreitas do Alto da Serra?',
        a: 'Sim. Atendemos todo o bairro, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Vila Felipe',
    em: 'na Vila Felipe',
    regiao: 'Centro e arredores',
    h1: 'Desentupidora na Vila Felipe: esgoto, ralo e vaso',
    vizinhos: ['Alto da Serra', 'Chácara Flora', 'Centro', 'Morin'],
    referencias: ['Rua Vila Felipe', 'Rua Jacinto Rabelo'],
    imovel: 'Casas de um e dois pavimentos em encosta, muitas com acesso por escadarias e servidões.',
    problema:
      'O esgoto das casas mais altas passa por caixas de inspeção pequenas, em sequência, antes de chegar à rua. Quando uma delas enche de sedimento, tudo o que vem de cima fica represado e transborda pela tampa.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'A Vila Felipe é um bairro residencial de encosta, vizinho do Alto da Serra, com casas distribuídas morro acima a partir da Rua Vila Felipe. Em terreno assim, a rede de esgoto desce em degraus, e cada caixa de passagem é um ponto onde a obstrução pode começar.',
    faq: [
      {
        q: 'A tampa da caixa de inspeção está transbordando. Posso abrir e tentar limpar?',
        a: 'Abrir a tampa ajuda a ver o nível, mas a obstrução costuma estar no trecho seguinte do cano. Evite o contato com o esgoto e chame o desentupimento para limpar o ramal inteiro.',
      },
      {
        q: 'Depois de chuva forte o esgoto fica lento. Tem relação?',
        a: 'Tem. A enxurrada leva terra para dentro das caixas com tampa quebrada ou mal vedada. Esse sedimento assenta no fundo e reduz a passagem.',
      },
      {
        q: 'A casa fica em uma escadaria. O equipamento chega?',
        a: 'Sim. Trabalhamos com máquinas portáteis e mangueiras longas para atender imóveis da Vila Felipe sem acesso de veículo.',
      },
    ],
  },
  {
    nome: 'Chácara Flora',
    em: 'na Chácara Flora',
    regiao: 'Centro e arredores',
    h1: 'Chácara Flora: desentupidora 24 horas',
    vizinhos: ['Vila Felipe', 'Alto da Serra', 'Castelânea', 'Centro'],
    referencias: ['Rua Jacinto Rabelo', 'Rua Aldo Tamancoldi', 'Rua Alfredo Schilick'],
    imovel: 'Casas e pequenos conjuntos residenciais em ruas inclinadas, com vilas e travessas de poucos imóveis.',
    problema:
      'Nas casas com banheiro no nível mais baixo do terreno, o vaso sanitário é o primeiro ponto a sentir qualquer obstrução no ramal. Papel em excesso e objetos descartados no vaso param nas curvas do cano.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'A Chácara Flora é um bairro residencial próximo ao Centro e ao Alto da Serra, formado por ruas como a Jacinto Rabelo e a Aldo Tamancoldi e por travessas que sobem a encosta. Os chamados mais comuns do bairro são de vaso sanitário que não dá descarga e de água subindo na bacia.',
    faq: [
      {
        q: 'O vaso enche e desce devagar. É entupimento ou falta de pressão na descarga?',
        a: 'Se a água sobe na bacia antes de descer, é obstrução. Falta de pressão faz a descarga sair fraca, mas não eleva o nível da água.',
      },
      {
        q: 'Lenço umedecido pode ser jogado no vaso?',
        a: 'Não. Ele não se desfaz na água como o papel higiênico e forma um bolo nas curvas do ramal. É uma das causas mais frequentes de vaso entupido.',
      },
      {
        q: 'Vocês atendem a Chácara Flora de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Morin',
    em: 'no Morin',
    regiao: 'Centro e arredores',
    h1: 'Desentupidora no Morin: chegamos em 20 minutos',
    vizinhos: ['Centro', 'Alto da Serra', 'Vila Felipe', 'Valparaíso'],
    referencias: ['Avenida General Marciano Magalhães', 'Rua Augusto Severo'],
    imovel: 'Casas, sobrados e pequenos prédios, com muitas servidões que partem da Avenida General Marciano Magalhães.',
    problema:
      'As servidões do bairro concentram várias casas em um único ramal de esgoto, estreito e com pouco acesso. Uma obstrução na parte baixa do ramal faz o esgoto voltar em mais de um imóvel ao mesmo tempo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Morin se organiza em torno da Avenida General Marciano Magalhães, de onde saem ruas como a Augusto Severo e dezenas de servidões residenciais. É um bairro de moradia, com comércio de vizinhança, em que a maior parte dos entupimentos está nos ramais coletivos e não dentro de cada casa.',
    faq: [
      {
        q: 'Duas casas da mesma servidão estão com o esgoto voltando. O entupimento é em qual delas?',
        a: 'Provavelmente em nenhuma. Quando mais de um imóvel é afetado, a obstrução está no trecho comum do ramal, abaixo da última casa com problema.',
      },
      {
        q: 'Como vocês localizam o ponto entupido em um ramal comprido?',
        a: 'Abrimos as caixas de inspeção em sequência para ver onde a água está parada e trabalhamos a partir da caixa seca mais próxima, com cabo rotativo ou hidrojato.',
      },
      {
        q: 'Atendem o Morin aos domingos e feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, para casas e comércios.',
      },
    ],
  },
  {
    nome: 'Valparaíso',
    em: 'no Valparaíso',
    regiao: 'Centro e arredores',
    h1: 'Desentupidora 24h no Valparaíso',
    vizinhos: ['Centro', 'Quitandinha', 'Coronel Veiga', 'Morin'],
    referencias: ['Avenida Portugal', 'Rua Gonçalves Dias', 'Casa Stefan Zweig', 'Trono de Fátima'],
    imovel: 'Prédios residenciais de poucos andares e casas amplas em terrenos inclinados, com jardins e muros de arrimo.',
    problema:
      'Nos prédios do bairro, a coluna de cozinha recebe a gordura de todos os apartamentos da prumada. Com o frio da serra, a gordura endurece mais rápido dentro do tubo, e a água volta na pia dos primeiros andares.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Valparaíso é um bairro residencial colado ao Centro, cortado pela Avenida Portugal, com ruas arborizadas como a Gonçalves Dias, onde fica a Casa Stefan Zweig. Edifícios pequenos dividem o espaço com casas antigas, e os chamados de condomínio por coluna entupida são tão comuns quanto os de casa com ralo parado.',
    faq: [
      {
        q: 'A água da pia do vizinho de cima sai na minha. O que é isso?',
        a: 'É sinal de coluna obstruída abaixo do seu andar. A água que desce não encontra passagem e sai pelo ponto mais próximo, que é a sua pia.',
      },
      {
        q: 'O frio de Petrópolis piora o entupimento por gordura?',
        a: 'Piora. A gordura solidifica em temperatura mais baixa e gruda na parede do tubo com mais facilidade, principalmente em colunas que passam por áreas externas.',
      },
      {
        q: 'Vocês atendem condomínios da Avenida Portugal?',
        a: 'Sim. Atendemos prédios, casas e comércios de todo o Valparaíso, 24 horas.',
      },
    ],
  },
  {
    nome: 'Castelânea',
    em: 'na Castelânea',
    regiao: 'Centro e arredores',
    h1: 'Desentupimento na Castelânea, de dia ou de noite',
    vizinhos: ['Centro', 'Saldanha Marinho', 'Chácara Flora', 'São Sebastião', 'Alto da Serra'],
    referencias: ['Rua Olavo Bilac', 'Rua Doutor Henrique Castrioto', 'Praça Pasteur'],
    imovel: 'Casas e sobrados com quintal e área de serviço externa, além de vilas residenciais.',
    problema:
      'Ralos de quintal e de área de serviço recebem folhas, terra e sabão. Nas casas ao pé de encosta, a enxurrada leva ainda mais sedimento para a caixa sifonada, que perde a vazão e alaga o piso.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'A Castelânea é um dos antigos quarteirões de Petrópolis e mantém o perfil residencial, com casas ao longo da Rua Olavo Bilac e de ruas que sobem os morros ao redor, como a Doutor Henrique Castrioto. Quintais, áreas descobertas e muita vegetação fazem do ralo externo o ponto que mais entope no bairro.',
    faq: [
      {
        q: 'O ralo do quintal alaga toda vez que chove. Limpar a grelha resolve?',
        a: 'Só se a sujeira estiver na superfície. Quando a água demora a baixar mesmo com a grelha limpa, o sedimento está na caixa sifonada ou no cano de saída.',
      },
      {
        q: 'O ralo da área de serviço solta mau cheiro. É entupimento?',
        a: 'Pode ser o começo de um. Sabão e fiapos acumulados na caixa sifonada apodrecem e reduzem a passagem. A limpeza elimina o cheiro e evita o alagamento.',
      },
      {
        q: 'Atendem a Rua Olavo Bilac e as ruas de cima?',
        a: 'Sim. Atendemos toda a Castelânea, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Saldanha Marinho',
    em: 'no Saldanha Marinho',
    regiao: 'Centro e arredores',
    h1: 'Desentupidora no Saldanha Marinho para casas e condomínios',
    vizinhos: ['Centro', 'Castelânea', 'Floresta', 'Caxambu'],
    referencias: ['Rua Saldanha Marinho', 'Rua João Júlio Braun'],
    imovel: 'Prédios residenciais de pequeno e médio porte e casas, a poucos minutos do Centro.',
    problema:
      'Nos edifícios, a coluna de esgoto acumula crosta ao longo dos anos. O sinal aparece nos andares baixos: ralo do banheiro borbulhando e água subindo no box quando os apartamentos de cima usam o chuveiro.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Saldanha Marinho acompanha a rua de mesmo nome, perto do Centro, e reúne prédios de apartamentos e casas em ruas laterais como a João Júlio Braun. Por ter muitos condomínios pequenos, sem equipe de manutenção própria, é comum o problema de coluna ser percebido só quando a água já voltou em um apartamento.',
    faq: [
      {
        q: 'O ralo do meu banheiro borbulha quando o vizinho dá descarga. Preciso me preocupar?',
        a: 'Sim. O ar preso indica que a coluna está parcialmente fechada. Tratar nessa fase é mais simples do que depois que o esgoto retorna.',
      },
      {
        q: 'Por onde é feito o desentupimento da coluna?',
        a: 'Pelo ponto de inspeção da coluna, quando existe, ou por um ralo ou ramal de um dos apartamentos. O acesso é definido no local, com o condomínio.',
      },
      {
        q: 'Vocês atendem a Rua Saldanha Marinho à noite?',
        a: 'Sim. O atendimento é 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Floresta',
    em: 'na Floresta',
    regiao: 'Centro e arredores',
    h1: 'Pia, ralo ou esgoto entupido na Floresta? Atendemos 24 horas',
    vizinhos: ['Caxambu', 'Saldanha Marinho', 'Centro', 'Castelânea'],
    referencias: ['Estrada da Floresta', 'Rua Doutor Henrique Paixão', 'Praça Augusto Martins Pereira'],
    imovel: 'Casas de alvenaria em encosta, com cozinha e área de serviço muitas vezes construídas em ampliações.',
    problema:
      'Cozinhas feitas em puxadinhos costumam ter o cano da pia com pouca queda e muitas curvas. A gordura esfria no caminho, gruda na parede do tubo e fecha a passagem em poucos meses.',
    servico: 'desentupimento-de-pia',
    abertura:
      'A Floresta é um bairro residencial de morro, servido pela Estrada da Floresta e pela Rua Doutor Henrique Paixão. As casas cresceram por etapas, com cômodos novos ligados à tubulação antiga, e a pia da cozinha é o ponto em que esse improviso aparece primeiro.',
    faq: [
      {
        q: 'Limpei o sifão e a pia continua lenta. O que falta?',
        a: 'A obstrução está depois do sifão, no cano embutido ou na caixa de gordura. Esse trecho só é alcançado com cabo rotativo ou jato de água.',
      },
      {
        q: 'Água quente com detergente resolve gordura no cano?',
        a: 'Ajuda pouco e por pouco tempo. A gordura amolece, desce alguns metros e endurece de novo mais adiante, onde é mais difícil de alcançar.',
      },
      {
        q: 'Vocês sobem até as ruas altas da Floresta?',
        a: 'Sim. Atendemos todo o bairro, de dia e de madrugada, todos os dias da semana.',
      },
    ],
  },
  {
    nome: 'Caxambu',
    em: 'no Caxambu',
    regiao: 'Centro e arredores',
    h1: 'Desentupidora no Caxambu: rede pluvial, esgoto e pia',
    vizinhos: ['Floresta', 'Saldanha Marinho', 'Centro', 'Estrada da Saudade'],
    referencias: ['Estrada Caxambu', 'Rua João Caetano', 'Rua Francisco Peixoto'],
    imovel: 'Casas em terrenos inclinados, sítios e áreas de cultivo de hortaliças na parte alta do bairro.',
    problema:
      'A água da chuva desce o morro com terra e folhas e entra nas calhas, canaletas e tubos de drenagem dos terrenos. Quando esses condutos entopem, a enxurrada passa por cima e invade quintais e garagens.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Caxambu começa perto do Centro, na Rua João Caetano, e sobe pela Estrada Caxambu até uma área de sítios e hortas. Com tanto terreno inclinado e solo exposto, a drenagem de águas de chuva é o sistema que mais trabalha no bairro e o que mais acumula sedimento.',
    faq: [
      {
        q: 'A canaleta do terreno transborda mesmo em chuva fraca. O que pode ser?',
        a: 'O tubo que recebe a água da canaleta está com terra assentada no fundo. A seção útil diminui a cada chuva, e basta pouca água para transbordar.',
      },
      {
        q: 'Qual a melhor época para limpar calhas e tubos de drenagem?',
        a: 'Antes do período de chuvas fortes, que em Petrópolis vai do fim da primavera ao fim do verão. Uma segunda limpeza no meio da estação é indicada em terrenos com muita árvore.',
      },
      {
        q: 'Atendem os sítios da parte alta do Caxambu?',
        a: 'Sim. Atendemos casas, sítios e comércios em todo o bairro, 24 horas.',
      },
    ],
  },

  // ---------------- QUITANDINHA E CORONEL VEIGA ----------------
  {
    nome: 'Quitandinha',
    em: 'no Quitandinha',
    regiao: 'Quitandinha e Coronel Veiga',
    h1: 'Desentupidora no Quitandinha 24 horas',
    vizinhos: ['Coronel Veiga', 'Independência', 'São Sebastião', 'Siméria', 'Valparaíso'],
    referencias: ['Palácio Quitandinha', 'Avenida Joaquim Rolla', 'Rua General Rondon', 'Avenida Ayrton Senna'],
    imovel: 'Condomínios de apartamentos, entre eles o conjunto residencial do Palácio Quitandinha, e casas em loteamentos arborizados.',
    problema:
      'Prédios com muitos apartamentos por prumada concentram esgoto e gordura em colunas longas. Nos mais antigos, a tubulação de ferro perde diâmetro com a crosta, e o retorno acontece nos pavimentos inferiores.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Quitandinha fica na entrada de Petrópolis para quem sobe a serra e tem como referência o Palácio Quitandinha, na Avenida Joaquim Rolla, em frente ao lago. Ao redor, a Rua General Rondon e a Avenida Ayrton Senna dão acesso a condomínios e casas. O bairro tem o maior número de apartamentos da região, e por isso lidera os chamados de coluna.',
    faq: [
      {
        q: 'Moro em apartamento térreo no Quitandinha e o esgoto voltou pelo ralo. A responsabilidade é minha?',
        a: 'Quando o retorno vem da coluna, que é área comum, a manutenção cabe ao condomínio. O desentupimento precisa ser feito na coluna, e não só no ralo do apartamento.',
      },
      {
        q: 'Coluna de ferro antiga pode ser desentupida com hidrojato?',
        a: 'Pode, com pressão ajustada ao estado do tubo. A avaliação é feita no local antes de iniciar.',
      },
      {
        q: 'Atendem os condomínios próximos ao Palácio Quitandinha de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Coronel Veiga',
    em: 'na Coronel Veiga',
    regiao: 'Quitandinha e Coronel Veiga',
    h1: 'Desentupimento na Coronel Veiga: ralos, calhas e rede pluvial',
    vizinhos: ['Quitandinha', 'Centro', 'Valparaíso', 'São Sebastião'],
    referencias: ['Rua Coronel Veiga', 'Rua Washington Luiz', 'Rio Quitandinha'],
    imovel: 'Lojas, oficinas, concessionárias e galpões no nível da rua, com casas e pequenos prédios nas transversais.',
    problema:
      'A Rua Coronel Veiga acompanha o Rio Quitandinha e é um dos pontos de alagamento da cidade. Depois de cada cheia, ralos de piso, grelhas de garagem e tubos de águas pluviais ficam cheios de lama e deixam de escoar.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'A Coronel Veiga liga o Quitandinha ao Centro, com o Rio Quitandinha correndo ao lado da pista e comércio dos dois lados. Quem tem loja ou casa na região conhece a rotina das chuvas de verão: a água sobe, baixa e deixa barro dentro da drenagem do imóvel.',
    faq: [
      {
        q: 'Depois do alagamento, os ralos da loja não escoam mais. O que é feito?',
        a: 'A lama que entrou pelos ralos assenta nos tubos e nas caixas. O serviço remove esse material com hidrojato e sucção das caixas, devolvendo a vazão da rede.',
      },
      {
        q: 'Vale a pena limpar a rede pluvial antes das chuvas?',
        a: 'Vale. Uma rede limpa escoa a água do próprio imóvel mais rápido e reduz o tempo de piso alagado, mesmo quando a rua enche.',
      },
      {
        q: 'Vocês atendem comércios da Coronel Veiga durante temporais?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, para comércios e residências.',
      },
    ],
  },
  {
    nome: 'Independência',
    em: 'na Independência',
    regiao: 'Quitandinha e Coronel Veiga',
    h1: 'Independência: desentupidora que atende 24 horas',
    vizinhos: ['Quitandinha', 'São Sebastião', 'Siméria'],
    referencias: ['Estrada da Independência', 'Rua Infante Dom Henrique', 'Rua Professor Albert Sabin'],
    imovel: 'Casas em encosta, muitas com laje e mais de um pavimento, além de pequenos comércios de bairro.',
    problema:
      'Lajes e terraços escoam por tubos de queda finos, que recebem folhas, areia de obra e terra trazida pelo vento. Com o tubo fechado, a água empoça na laje e infiltra ou escorre pela fachada.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'A Independência ocupa os morros acima do Quitandinha, ao longo da Estrada da Independência e de ruas como a Infante Dom Henrique e a Professor Albert Sabin. É um bairro de casas sobrepostas e lajes, onde a água da chuva precisa de caminho livre para descer sem causar dano.',
    faq: [
      {
        q: 'A laje fica empoçada por dias. É problema de caimento ou de entupimento?',
        a: 'Se a água antes escoava e deixou de escoar, é entupimento do ralo ou do tubo de queda. Problema de caimento existe desde a obra e não muda de uma chuva para outra.',
      },
      {
        q: 'Dá para desentupir o tubo de queda sem subir no telhado?',
        a: 'Em muitos casos, sim. O tubo pode ser acessado por baixo, pela caixa de areia ou pela saída no pé da parede.',
      },
      {
        q: 'Atendem a parte alta da Estrada da Independência?',
        a: 'Sim. Atendemos toda a Independência, a qualquer hora, todos os dias.',
      },
    ],
  },
  {
    nome: 'São Sebastião',
    em: 'no São Sebastião',
    regiao: 'Quitandinha e Coronel Veiga',
    h1: 'Desentupidora no São Sebastião, em Petrópolis',
    vizinhos: ['Siméria', 'Independência', 'Quitandinha', 'Castelânea', 'Coronel Veiga'],
    referencias: ['Rua São Sebastião', 'Rua Victor Levy', 'Rua Adão Brand'],
    imovel: 'Casas geminadas e sobrados em lotes estreitos, com vilas e servidões.',
    problema:
      'Em lotes com mais de uma casa, o esgoto da moradia dos fundos atravessa o terreno da frente em um ramal raso. Raízes, recalque do piso e gordura criam pontos de retenção, e o esgoto aflora no quintal.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O São Sebastião é um bairro residencial entre a Castelânea e o Siméria, com casas ao longo da Rua São Sebastião e de transversais como a Victor Levy e a Adão Brand. Os terrenos foram divididos entre famílias ao longo do tempo, e hoje é comum três ou quatro moradias usarem a mesma saída de esgoto.',
    faq: [
      {
        q: 'O esgoto está saindo por uma junta do piso do quintal. Isso é entupimento?',
        a: 'É um sinal de que o ramal embaixo do piso está obstruído e a pressão empurra o esgoto pela primeira fresta. Desentupir o ramal faz o afloramento parar.',
      },
      {
        q: 'Raiz de planta dentro do cano tem solução sem trocar a tubulação?',
        a: 'O cabo rotativo com lâmina e o hidrojato cortam e removem as raízes. Se a junta estiver muito aberta, elas voltam com o tempo, e isso é informado ao cliente.',
      },
      {
        q: 'Vocês atendem o São Sebastião em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Siméria',
    em: 'no Siméria',
    regiao: 'Quitandinha e Coronel Veiga',
    h1: 'Vaso, pia ou esgoto entupido no Siméria? Chame a Desentupidora SOS',
    vizinhos: ['São Sebastião', 'Independência', 'Quitandinha'],
    referencias: ['Estrada Presidente Sodré', 'Rua Presidente Tancredo Neves', 'Alto Siméria'],
    imovel: 'Casas populares e sobrados em encosta, com banheiros acrescentados em ampliações.',
    problema:
      'Banheiros construídos depois da casa nem sempre têm ramal com diâmetro e inclinação adequados. O vaso sanitário passa a entupir com uso normal, porque papel e resíduos não ganham velocidade para chegar à caixa.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Siméria se estende pela Estrada Presidente Sodré e pela Rua Presidente Tancredo Neves, subindo em direção ao Alto Siméria. As casas foram ampliadas para cima e para os fundos conforme as famílias cresceram, e o segundo banheiro costuma ser o ponto fraco da instalação.',
    faq: [
      {
        q: 'O vaso do banheiro novo entope toda semana e o antigo nunca deu problema. Por quê?',
        a: 'O ramal do banheiro novo provavelmente tem pouca queda ou curvas fechadas. O desentupimento resolve a obstrução, e a causa é explicada para que você decida sobre a correção.',
      },
      {
        q: 'Desentupidor de borracha funciona em vaso sanitário?',
        a: 'Funciona em obstruções leves e próximas da bacia. Se a água continuar subindo depois de algumas tentativas, pare e chame o serviço para não transbordar.',
      },
      {
        q: 'Atendem o Alto Siméria?',
        a: 'Sim. Atendemos todo o Siméria, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- BINGEN E MOSELA ----------------
  {
    nome: 'Bingen',
    em: 'no Bingen',
    regiao: 'Bingen e Mosela',
    h1: 'Desentupidora no Bingen: hidrojateamento e desentupimento 24h',
    vizinhos: ['Mosela', 'Duarte da Silveira', 'Vila Militar', 'Duchas', 'Centro'],
    referencias: ['Rua Bingen', 'Hospital Santa Teresa', 'acesso à BR-040'],
    imovel: 'Comércio de grande porte, galpões, clínicas e empresas ao longo da Rua Bingen, com casas e condomínios nas ruas laterais.',
    problema:
      'Imóveis comerciais grandes têm redes internas extensas, com muitos banheiros e copas ligados a um coletor único. A sujeira se distribui por dezenas de metros de tubo, e o cabo comum não remove tudo.',
    servico: 'hidrojateamento',
    abertura:
      'O Bingen é a principal entrada de Petrópolis pela BR-040. A Rua Bingen concentra supermercados, lojas, serviços de saúde e empresas, e as ruas de dentro mantêm o perfil residencial do antigo quarteirão. Para os imóveis comerciais do bairro, a limpeza de rede com jato de água em alta pressão é o serviço mais pedido.',
    faq: [
      {
        q: 'Qual a diferença entre o desentupimento comum e o hidrojateamento?',
        a: 'O cabo rotativo abre passagem na obstrução. O hidrojato lava a parede interna do tubo em toda a extensão e arrasta gordura, areia e crosta para fora.',
      },
      {
        q: 'O hidrojateamento pode ser feito com a empresa funcionando?',
        a: 'Pode, mas o ideal é programar para um horário de pouco uso da rede. Como atendemos 24 horas, o serviço pode ser feito à noite ou no fim de semana.',
      },
      {
        q: 'Vocês atendem as empresas próximas ao acesso da BR-040?',
        a: 'Sim. Atendemos toda a extensão da Rua Bingen e as ruas internas, para comércio e residências.',
      },
    ],
  },
  {
    nome: 'Mosela',
    em: 'na Mosela',
    regiao: 'Bingen e Mosela',
    h1: 'Desentupimento 24 horas na Mosela',
    vizinhos: ['Bingen', 'Duchas', 'Quarteirão Brasileiro', 'Fazenda Inglesa', 'Vila Militar'],
    referencias: ['Rua Mosela', 'Rua Pedras Brancas', 'Rua Alberto de Oliveira'],
    imovel: 'Casas com terreno, sobrados e pequenas indústrias e oficinas em um vale estreito, cercado de encostas.',
    problema:
      'A água das encostas chega com força às calhas, grelhas e galerias dos terrenos junto à rua. Folhas e terra entopem as passagens, e a chuva seguinte encontra a drenagem fechada.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'A Mosela ocupa um vale comprido a partir da Rua Mosela, com ruas como a Pedras Brancas e a Alberto de Oliveira subindo os morros dos dois lados. O bairro guarda o traçado dos antigos quarteirões da colonização alemã e convive com muita água de chuva descendo das encostas para os fundos dos terrenos.',
    faq: [
      {
        q: 'A grelha da entrada da garagem não dá vazão e a água entra em casa. O que fazer?',
        a: 'A grelha é só a boca do sistema. O tubo que sai dela costuma estar com terra compactada. A limpeza com hidrojato devolve a seção do tubo e a vazão.',
      },
      {
        q: 'Calha entupida pode causar problema no esgoto?',
        a: 'Pode, quando a água da chuva é ligada de forma irregular ao ramal de esgoto. O volume extra sobrecarrega o ramal e faz o esgoto voltar pelos ralos.',
      },
      {
        q: 'Atendem as ruas altas da Mosela?',
        a: 'Sim. Atendemos todo o bairro, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Duchas',
    em: 'nas Duchas',
    regiao: 'Bingen e Mosela',
    h1: 'Desentupidora nas Duchas: ralo, pia e vaso',
    vizinhos: ['Centro', 'Mosela', 'Bingen', 'Quarteirão Brasileiro'],
    referencias: ['Rua Kopke', 'Rua Fagundes Varella', 'Rua Rodolfo Schaeffer'],
    imovel: 'Casas, sobrados antigos e prédios pequenos, a poucos minutos do Centro Histórico.',
    problema:
      'Banheiros de casas antigas têm caixa sifonada pequena e ramal de pouco diâmetro. Cabelo, sabonete e resíduos de produtos de limpeza formam uma massa que fecha o ralo do box.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'As Duchas ficam entre o Centro e a Mosela, com casas e pequenos edifícios nas ruas Kopke, Fagundes Varella e Rodolfo Schaeffer. A proximidade do Centro atraiu moradores e também hospedagens e escritórios, e o uso mais intenso dos banheiros aparece no ralo.',
    faq: [
      {
        q: 'A água do chuveiro sobe no box antes de escoar. É o ralo ou o cano?',
        a: 'Na maior parte das vezes é a caixa sifonada, logo abaixo da grelha. Se ela estiver limpa e a água continuar lenta, a obstrução está no ramal.',
      },
      {
        q: 'Posso usar produto químico para desentupir o ralo?',
        a: 'Não é recomendado. Além do risco de queimadura, o produto pode ficar parado sobre a obstrução e danificar o tubo e o rejunte.',
      },
      {
        q: 'Vocês atendem pousadas e hospedagens nas Duchas?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Quarteirão Brasileiro',
    em: 'no Quarteirão Brasileiro',
    regiao: 'Bingen e Mosela',
    h1: 'Quarteirão Brasileiro: desentupimento de cano, pia e esgoto',
    vizinhos: ['Mosela', 'Duchas', 'Bingen', 'Centro'],
    referencias: ['Rua Luiza Bender Pinheiro', 'Rua José Mayworm'],
    imovel: 'Casas de família em terrenos compridos, com mais de uma construção por lote e servidões de acesso.',
    problema:
      'A tubulação atravessa o terreno inteiro para chegar à rua, com trechos antigos emendados em trechos novos. Nas emendas com diâmetros diferentes forma-se um degrau interno onde a sujeira se acumula.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Quarteirão Brasileiro é um bairro residencial de encosta, com casas em ruas como a Luiza Bender Pinheiro e a José Mayworm e em servidões que sobem o morro. Os lotes compridos, herdados e divididos entre parentes, resultam em instalações com muitos metros de cano e várias gerações de reforma.',
    faq: [
      {
        q: 'A água some devagar em todos os pontos da casa. O entupimento é geral?',
        a: 'Quando pia, tanque e ralos ficam lentos juntos, a obstrução está no trecho final do cano, depois que todos os ramais se encontram.',
      },
      {
        q: 'É possível saber se o cano está quebrado ou só entupido?',
        a: 'Durante o serviço, o comportamento do cabo e o material que retorna dão bons indícios. Terra limpa e pedras voltando indicam cano rompido, e isso é informado na hora.',
      },
      {
        q: 'Atendem servidões do Quarteirão Brasileiro sem acesso de carro?',
        a: 'Sim. Levamos o equipamento a pé quando o veículo não chega ao imóvel.',
      },
    ],
  },
  {
    nome: 'Duarte da Silveira',
    em: 'no Duarte da Silveira',
    regiao: 'Bingen e Mosela',
    h1: 'Desentupidora no Duarte da Silveira, atendimento dia e noite',
    vizinhos: ['Bingen', 'Vila Militar', 'Mosela', 'Fazenda Inglesa'],
    referencias: ['Rua Coronel Duarte da Silveira', 'Rua Bingen'],
    imovel: 'Casas de médio padrão, condomínios de casas e sítios urbanos em rua de subida, com bastante área verde.',
    problema:
      'Terrenos grandes e arborizados têm caixas de areia e tubos de drenagem que recebem folhas o ano todo. Sem limpeza, a rede pluvial perde a função e a água de chuva corre pela superfície, levando terra para ralos e garagens.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Duarte da Silveira acompanha a Rua Coronel Duarte da Silveira, que sai da região do Bingen e sobe entre casas com jardim e trechos de mata. É um bairro tranquilo e residencial, em que a manutenção da drenagem do terreno pesa tanto quanto a do esgoto.',
    faq: [
      {
        q: 'O que é caixa de areia e por que ela precisa de limpeza?',
        a: 'É a caixa que retém terra e folhas antes de a água de chuva seguir pelo tubo. Quando enche, o material passa direto e entope a tubulação adiante.',
      },
      {
        q: 'Meu terreno tem dreno junto ao muro de arrimo. Vocês desentopem?',
        a: 'Sim. Tubos de drenagem e barbacãs obstruídos são limpos com hidrojato, o que alivia a pressão de água atrás do muro.',
      },
      {
        q: 'Atendem condomínios de casas no Duarte da Silveira?',
        a: 'Sim. Atendemos casas isoladas e condomínios, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Vila Militar',
    em: 'na Vila Militar',
    regiao: 'Bingen e Mosela',
    h1: 'Pia entupida na Vila Militar? Desentupidora 24 horas',
    vizinhos: ['Bingen', 'Duarte da Silveira', 'Mosela'],
    referencias: ['Rua Duque de Caxias', 'Praça Duque de Caxias', 'Rua Itália'],
    imovel: 'Casas e prédios residenciais baixos em ruas curtas, com apartamentos de dois e três quartos.',
    problema:
      'A cozinha é o ponto de maior uso nesses imóveis de família. Óleo, borra de café e restos de comida formam um tampão no ramal da pia, e a água volta para a cuba ou sai pelo ralo da área de serviço.',
    servico: 'desentupimento-de-pia',
    abertura:
      'A Vila Militar é um bairro pequeno e residencial, formado em torno da Praça e da Rua Duque de Caxias, com ruas como a Itália nas laterais. Casas e edifícios baixos dividem a mesma rede, e a pia de cozinha é o motivo mais frequente de chamado.',
    faq: [
      {
        q: 'A água da pia está saindo pelo ralo da área de serviço. O que isso indica?',
        a: 'Indica que a obstrução está depois do ponto em que os dois ramais se juntam, normalmente perto da caixa de gordura.',
      },
      {
        q: 'Borra de café na pia faz mal para o encanamento?',
        a: 'Faz. A borra não se dissolve, assenta no fundo do cano e se mistura à gordura, formando um depósito denso.',
      },
      {
        q: 'Vocês atendem apartamentos na Vila Militar?',
        a: 'Sim. Atendemos casas, apartamentos e áreas comuns de prédios, a qualquer hora.',
      },
    ],
  },
  {
    nome: 'Fazenda Inglesa',
    em: 'na Fazenda Inglesa',
    regiao: 'Bingen e Mosela',
    h1: 'Desentupimento na Fazenda Inglesa para casas e sítios',
    vizinhos: ['Mosela', 'Bingen', 'Duarte da Silveira'],
    referencias: ['Estrada da Fazenda Inglesa', 'BR-040'],
    imovel: 'Casas de campo, sítios e residências de alto padrão em terrenos grandes, cercados de mata.',
    problema:
      'Casas de fim de semana ficam dias fechadas. Os ralos secam, acumulam folhas e insetos, e a primeira lavagem de varanda ou banho empurra tudo para a caixa sifonada, que trava.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'A Fazenda Inglesa é uma área de casas de campo e sítios servida pela Estrada da Fazenda Inglesa, com acesso também pela BR-040. A ocupação é espaçada, com muita vegetação, e parte dos imóveis é usada só em fins de semana e férias, o que muda o tipo de entupimento encontrado.',
    faq: [
      {
        q: 'A casa ficou fechada um mês e agora os ralos não escoam. É normal?',
        a: 'É comum. Sem uso, a sujeira resseca dentro da caixa sifonada e forma uma camada dura. A limpeza mecânica resolve.',
      },
      {
        q: 'Ralos de varanda e de área de piscina também são atendidos?',
        a: 'Sim. Desentupimos ralos internos e externos, grelhas lineares e os tubos que saem deles.',
      },
      {
        q: 'Vocês atendem a Fazenda Inglesa nos fins de semana?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- RETIRO E QUISSAMÃ ----------------
  {
    nome: 'Retiro',
    em: 'no Retiro',
    regiao: 'Retiro e Quissamã',
    h1: 'Desentupidora no Retiro 24h',
    vizinhos: ['Quissamã', 'Centro', 'Estrada da Saudade', 'Itamarati'],
    referencias: ['Avenida Barão do Rio Branco', 'Rua Hermogêneo Silva'],
    imovel: 'Prédios residenciais, casas e comércio variado, com supermercados, padarias e restaurantes.',
    problema:
      'Padarias, lanchonetes e cozinhas de apartamento despejam gordura todos os dias. Nos pontos comerciais, a pia de lavagem para no horário de pico, quando a caixa e o ramal já estão no limite.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Retiro fica na saída do Centro pela Avenida Barão do Rio Branco, no caminho para Cascatinha e Corrêas, e tem a Rua Hermogêneo Silva como uma de suas vias de comércio. A mistura de moradia com alimentação faz da pia de cozinha o chamado número um do bairro.',
    faq: [
      {
        q: 'A pia da lanchonete entope sempre no horário de movimento. Coincidência?',
        a: 'Não. O ramal já está parcialmente fechado e só dá conta do uso leve. Quando o volume aumenta, a água não passa. A limpeza completa do ramal resolve.',
      },
      {
        q: 'Com que frequência um comércio de alimentação deve limpar o ramal da pia?',
        a: 'Depende do volume de gordura. Na prática, quem espera a pia parar acaba interrompendo o atendimento. A limpeza preventiva evita a parada.',
      },
      {
        q: 'Atendem comércios da Avenida Barão do Rio Branco?',
        a: 'Sim. Atendemos comércio e residências em todo o Retiro, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Quissamã',
    em: 'no Quissamã',
    regiao: 'Retiro e Quissamã',
    h1: 'Desentupimento no Quissamã: atendimento residencial e comercial',
    vizinhos: ['Retiro', 'Estrada da Saudade', 'Itamarati', 'Cascatinha'],
    referencias: ['Rua Quissamã', 'Rua Pedro Elmer'],
    imovel: 'Casas, vilas e pequenos galpões e oficinas ao longo da Rua Quissamã.',
    problema:
      'Oficinas e áreas de lavagem levam areia, graxa e estopa para os ralos de piso. Nas casas, a área de serviço recebe fiapos de roupa e sabão em pó. Nos dois casos, a caixa sifonada enche e o piso alaga.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Quissamã segue a Rua Quissamã, via que combina moradia, pequenas indústrias e prestadores de serviço, com ruas residenciais como a Pedro Elmer. É um bairro de trabalho, onde o ralo de piso tem uso pesado tanto nas empresas quanto nas casas.',
    faq: [
      {
        q: 'O ralo da oficina entope com areia e graxa. Tem como evitar?',
        a: 'Uma caixa de retenção antes do ralo segura o material sólido. Sem ela, a limpeza periódica do ralo e do tubo é o que mantém o escoamento.',
      },
      {
        q: 'Sabão em pó entope ralo de área de serviço?',
        a: 'Em excesso, sim. A parte que não dissolve se junta aos fiapos e forma uma pasta que endurece dentro da caixa sifonada.',
      },
      {
        q: 'Vocês atendem empresas no Quissamã fora do expediente?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Estrada da Saudade',
    em: 'na Estrada da Saudade',
    regiao: 'Retiro e Quissamã',
    h1: 'Desentupidora na Estrada da Saudade',
    vizinhos: ['Quissamã', 'Itamarati', 'Cascatinha', 'Caxambu', 'Retiro'],
    referencias: ['Estrada da Saudade', 'Rua Quissamã'],
    imovel: 'Casas de alvenaria em servidões e vilas que partem da estrada, além de comércio de vizinhança.',
    problema:
      'Em servidões onde várias cozinhas usam uma caixa de gordura pequena, ou nenhuma, a gordura vai direto para o ramal. A pia de uma casa para, e logo depois a do vizinho.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O bairro leva o nome da Estrada da Saudade, via longa que parte da região do Quissamã e segue em direção ao Itamarati, com dezenas de servidões e vilas nas duas margens. A ocupação é densa e residencial, e os entupimentos de cozinha se repetem de casa em casa.',
    faq: [
      {
        q: 'Minha casa não tem caixa de gordura. Isso explica a pia entupir tanto?',
        a: 'Explica. Sem a caixa, toda a gordura segue para o ramal e endurece no caminho. O desentupimento resolve o momento, e a instalação da caixa reduz a repetição.',
      },
      {
        q: 'A pia do vizinho entupiu junto com a minha. Precisa desentupir as duas casas?',
        a: 'O trabalho é feito no trecho comum do ramal, que atende as duas. Feito isso, as duas pias voltam a escoar.',
      },
      {
        q: 'Atendem as servidões da Estrada da Saudade à noite?',
        a: 'Sim. Atendemos 24 horas e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- CASCATINHA E CORRÊAS ----------------
  {
    nome: 'Cascatinha',
    em: 'em Cascatinha',
    regiao: 'Cascatinha e Corrêas',
    h1: 'Desentupidora em Cascatinha 24 horas',
    vizinhos: ['Itamarati', 'Samambaia', 'Roseiral', 'Quissamã', 'Estrada da Saudade'],
    referencias: ['Estrada de Cascatinha', 'Rua Bernardo Vasconcelos', 'Rua Hívio Naliato', 'antiga Companhia Petropolitana'],
    imovel: 'Casas da antiga vila operária, sobrados geminados e construções mais novas nos morros ao redor.',
    problema:
      'As casas mais antigas ainda usam manilhas de barro, com juntas que se abrem com o tempo. Raízes entram pelas frestas e a terra invade o tubo, que passa a entupir mesmo sem gordura ou papel em excesso.',
    servico: 'desentupimento-de-cano',
    abertura:
      'Cascatinha é sede do segundo distrito de Petrópolis e cresceu em torno da antiga fábrica de tecidos da Companhia Petropolitana. Ao longo da Estrada de Cascatinha e de ruas como a Bernardo Vasconcelos, casas operárias antigas continuam habitadas, com parte da tubulação da época.',
    faq: [
      {
        q: 'Manilha de barro pode ser desentupida ou precisa ser trocada?',
        a: 'Pode ser desentupida. O cabo rotativo e o hidrojato removem raízes e terra. Se houver trecho desabado, o cabo não passa e isso é identificado durante o serviço.',
      },
      {
        q: 'Casas geminadas dividem o mesmo cano?',
        a: 'Em vilas antigas é comum. O ramal corre pelos fundos e recebe todas as casas da fileira, por isso o entupimento pode afetar mais de um morador.',
      },
      {
        q: 'Vocês atendem Cascatinha aos domingos?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Itamarati',
    em: 'no Itamarati',
    regiao: 'Cascatinha e Corrêas',
    h1: 'Desentupimento de vaso, pia e esgoto no Itamarati',
    vizinhos: ['Cascatinha', 'Estrada da Saudade', 'Quissamã', 'Samambaia', 'Retiro'],
    referencias: ['Estrada Itamarati', 'Rua Pouso Alegre', 'Estrada da Saudade'],
    imovel: 'Casas e prédios pequenos de apartamentos, com escolas, igrejas e comércio de bairro.',
    problema:
      'Imóveis com muitos moradores e um só banheiro exigem muito do ramal do vaso sanitário. Fralda, absorvente e fio dental descartados na bacia se prendem no tubo e formam a base da obstrução.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Itamarati fica entre o Retiro e Cascatinha, com casas e pequenos edifícios distribuídos pela Estrada Itamarati, pela Rua Pouso Alegre e pelo trecho final da Estrada da Saudade. É um bairro familiar e populoso, e o banheiro é o cômodo que mais gera chamados.',
    faq: [
      {
        q: 'Caiu um objeto no vaso e a descarga foi acionada. Dá para recuperar?',
        a: 'Muitas vezes, sim. Se o objeto ficou preso no sifão da bacia, ele é retirado sem empurrar para o ramal. Avise o que caiu ao pedir o atendimento.',
      },
      {
        q: 'Fio dental e cotonete entopem vaso?',
        a: 'Sozinhos, não. Mas eles enroscam no tubo e seguram o papel que vem depois, até fechar a passagem.',
      },
      {
        q: 'Atendem prédios pequenos sem síndico no Itamarati?',
        a: 'Sim. Atendemos qualquer morador ou responsável pelo imóvel, 24 horas.',
      },
    ],
  },
  {
    nome: 'Samambaia',
    em: 'na Samambaia',
    regiao: 'Cascatinha e Corrêas',
    h1: 'Samambaia: desentupidora para casas e condomínios, 24 horas',
    vizinhos: ['Cascatinha', 'Itamarati', 'Corrêas', 'Roseiral'],
    referencias: ['Estrada da Samambaia', 'Fazenda Samambaia'],
    imovel: 'Casas com quintal, condomínios residenciais e sítios ao longo da estrada.',
    problema:
      'Quintais gramados e áreas de churrasqueira têm ralos que recebem terra, grama cortada e gordura de limpeza de grelha. A mistura sedimenta no tubo e o ralo deixa de escoar na primeira chuva forte.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'A Samambaia se desenvolve ao longo da Estrada da Samambaia, na região de Cascatinha, e tem como referência a Fazenda Samambaia. O bairro combina moradia permanente com condomínios e sítios, sempre com área externa grande, e é nela que estão os ralos que mais dão trabalho.',
    faq: [
      {
        q: 'Posso lavar a grelha da churrasqueira no ralo do quintal?',
        a: 'Não é o ideal. A gordura fria se prende à terra que já está no tubo e forma um bloco difícil de remover.',
      },
      {
        q: 'O ralo externo fica longe da rua. O cabo alcança?',
        a: 'Sim. Trabalhamos com cabos e mangueiras longos e, se necessário, entramos por mais de um ponto de acesso.',
      },
      {
        q: 'Vocês atendem os condomínios da Estrada da Samambaia?',
        a: 'Sim. Atendemos casas, condomínios e sítios, todos os dias, a qualquer hora.',
      },
    ],
  },
  {
    nome: 'Roseiral',
    em: 'no Roseiral',
    regiao: 'Cascatinha e Corrêas',
    h1: 'Limpeza de caixa de gordura e desentupimento no Roseiral',
    vizinhos: ['Corrêas', 'Cascatinha', 'Glória', 'Carangola', 'Samambaia'],
    referencias: ['Estrada União e Indústria', 'Avenida Vereador Paulo Maurity', 'Rua Henrique Viard', 'Rua Pereira Ramos'],
    imovel: 'Casas e conjuntos residenciais, com restaurantes, bares e mercados na margem da Estrada União e Indústria.',
    problema:
      'Nos estabelecimentos de alimentação da estrada e nos conjuntos residenciais, a caixa de gordura enche antes do previsto. Saturada, ela deixa a gordura seguir para o esgoto, e o mau cheiro aparece antes do entupimento.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Roseiral fica no trecho da Estrada União e Indústria entre Cascatinha e Corrêas, com ruas residenciais como a Henrique Viard e a Pereira Ramos subindo a encosta. O comércio da estrada serve moradores e quem passa, e as cozinhas desse comércio dependem de caixa de gordura em dia.',
    faq: [
      {
        q: 'Como saber se a caixa de gordura está cheia?',
        a: 'Mau cheiro perto da pia ou da tampa, pia lenta e barulho de ar no ralo são os sinais. Ao abrir a tampa, uma camada grossa e dura na superfície confirma.',
      },
      {
        q: 'A limpeza da caixa de gordura resolve a pia lenta?',
        a: 'Resolve quando a causa é a caixa. Se o ramal entre a pia e a caixa também estiver com gordura, ele é desentupido no mesmo atendimento.',
      },
      {
        q: 'Atendem bares e restaurantes do Roseiral depois do fechamento?',
        a: 'Sim. O atendimento é 24 horas, e o serviço pode ser feito de madrugada.',
      },
    ],
  },
  {
    nome: 'Carangola',
    em: 'no Carangola',
    regiao: 'Cascatinha e Corrêas',
    h1: 'Desentupidora no Carangola: esgoto e caixas de inspeção',
    vizinhos: ['Roseiral', 'Corrêas', 'Glória', 'Cascatinha'],
    referencias: ['Estrada do Carangola', 'Rua Raul Pompéia', 'Vale do Carangola'],
    imovel: 'Casas em lotes de encosta e conjuntos habitacionais, com ruas internas e servidões.',
    problema:
      'Em conjuntos e loteamentos, o esgoto de várias casas passa por caixas de inspeção em série. Basta uma tampa quebrada para entrar terra e entulho, e a caixa seguinte passa a reter tudo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Carangola se estende pela Estrada do Carangola, a partir da região de Corrêas, e inclui ruas como a Raul Pompéia e os conjuntos do Vale do Carangola. É uma área residencial que cresceu bastante, com redes internas de esgoto que atendem muitas casas ao mesmo tempo.',
    faq: [
      {
        q: 'A caixa de inspeção em frente de casa vive cheia. O problema é meu ou da rede da rua?',
        a: 'Abrindo a caixa seguinte dá para saber. Se ela estiver seca, a obstrução está entre as duas, no seu trecho. Se também estiver cheia, o problema está mais adiante.',
      },
      {
        q: 'Vocês desentopem rede interna de conjunto habitacional?',
        a: 'Sim. Desentupimos ramais e caixas de inspeção das áreas internas, com cabo rotativo ou hidrojato.',
      },
      {
        q: 'Atendem o Vale do Carangola de madrugada?',
        a: 'Sim. Atendemos 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Corrêas',
    em: 'em Corrêas',
    regiao: 'Cascatinha e Corrêas',
    h1: 'Desentupidora em Corrêas: chegamos em 20 minutos',
    vizinhos: ['Nogueira', 'Roseiral', 'Glória', 'Carangola', 'Samambaia'],
    referencias: ['Estrada União e Indústria', 'Hospital Alcides Carneiro', 'Rua Vigário Corrêa', 'Estrada do Bonfim'],
    imovel: 'Casas, prédios residenciais novos, comércio de rua e serviços de saúde em torno do centro do bairro.',
    problema:
      'O centro de Corrêas ganhou prédios e comércio sobre uma rede pensada para casas. Ramais antigos recebem hoje muito mais esgoto, entopem na ligação com a rua e fazem o retorno aparecer em lojas e térreos.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Corrêas é um dos bairros mais movimentados fora do Centro, cortado pela Estrada União e Indústria e pelo Rio Piabanha, com o Hospital Alcides Carneiro e o comércio em volta da Rua Vigário Corrêa. Pela Estrada do Bonfim se chega à entrada de Petrópolis do Parque Nacional da Serra dos Órgãos.',
    faq: [
      {
        q: 'O esgoto voltou pelo ralo da loja depois que o prédio vizinho ficou pronto. Tem relação?',
        a: 'Pode ter, se os imóveis usam trechos em comum. O aumento de volume expõe um ramal que já estava parcialmente obstruído. A limpeza do ramal resolve o retorno.',
      },
      {
        q: 'Imóvel perto do Piabanha tem mais problema de esgoto em época de chuva?',
        a: 'Tem. Com o rio alto, o escoamento fica mais lento, e qualquer obstrução parcial passa a causar retorno. Manter ramal e caixas limpos antes do verão reduz o risco.',
      },
      {
        q: 'Vocês atendem na Estrada do Bonfim?',
        a: 'Sim. Atendemos todo o bairro de Corrêas, do centro ao Bonfim, 24 horas.',
      },
    ],
  },
  {
    nome: 'Glória',
    em: 'na Glória',
    regiao: 'Cascatinha e Corrêas',
    h1: 'Desentupimento na Glória, em Corrêas, a qualquer hora',
    vizinhos: ['Corrêas', 'Roseiral', 'Carangola', 'Nogueira'],
    referencias: ['Estrada Nossa Senhora da Glória', 'Rua Ananias de Morais', 'Travessa Conceição dos Santos'],
    imovel: 'Casas simples e sobrados em encosta, com travessas e servidões que saem da estrada principal.',
    problema:
      'Em casas com caixa acoplada antiga ou descarga fraca, o volume de água não leva o papel até o fim do ramal. O material para no meio do caminho e o vaso entope de forma repetida.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'A Glória é uma localidade residencial na região de Corrêas, organizada ao longo da Estrada Nossa Senhora da Glória, com travessas como a Conceição dos Santos. As casas ficam em terreno inclinado, e os ramais de esgoto são mais longos do que parecem vistos da rua.',
    faq: [
      {
        q: 'O vaso entope mesmo usando pouco papel. O que pode estar errado?',
        a: 'Descarga com pouca água ou ramal comprido com pouca inclinação. O papel não chega à caixa e se acumula. Depois de desentupir, vale regular a descarga.',
      },
      {
        q: 'Jogar balde de água no vaso ajuda?',
        a: 'Só se a obstrução for leve. Com o vaso cheio, mais água faz transbordar. Se o nível não baixou sozinho em alguns minutos, não insista.',
      },
      {
        q: 'Vocês atendem as travessas da Estrada Nossa Senhora da Glória?',
        a: 'Sim. Atendemos toda a Glória, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Nogueira',
    em: 'em Nogueira',
    regiao: 'Cascatinha e Corrêas',
    h1: 'Desentupidora 24 horas em Nogueira',
    vizinhos: ['Corrêas', 'Itaipava', 'Bonsucesso', 'Glória'],
    referencias: ['Estrada União e Indústria', 'Estrada do Calembe', 'antiga estação ferroviária de Nogueira'],
    imovel: 'Condomínios de casas, residências de alto padrão, restaurantes e pequenos centros comerciais.',
    problema:
      'Condomínios horizontais têm caixas de gordura individuais ligadas a uma rede interna comprida. Quando as caixas das casas não são limpas, a gordura chega à rede comum e o problema vira do condomínio inteiro.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Nogueira fica na Estrada União e Indústria, entre Corrêas e Itaipava, e tem como marcos a antiga estação ferroviária e a entrada da Estrada do Calembe. O bairro reúne condomínios de casas, moradores que trocaram o Rio pela serra e restaurantes que atendem o movimento de fim de semana.',
    faq: [
      {
        q: 'De quanto em quanto tempo a caixa de gordura de uma casa deve ser limpa?',
        a: 'Em casa com uso diário da cozinha, a cada poucos meses. Casas com muita fritura ou com muitos moradores precisam de intervalo menor.',
      },
      {
        q: 'O condomínio pode contratar a limpeza de todas as caixas de uma vez?',
        a: 'Pode. O serviço é feito casa a casa e inclui a rede interna, o que evita que a gordura de uma unidade prejudique as outras.',
      },
      {
        q: 'Atendem restaurantes de Nogueira nos fins de semana?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- ITAIPAVA E DISTRITOS ----------------
  {
    nome: 'Itaipava',
    em: 'em Itaipava',
    regiao: 'Itaipava e distritos',
    h1: 'Desentupidora em Itaipava 24 horas',
    vizinhos: ['Nogueira', 'Bonsucesso', 'Araras', 'Pedro do Rio', 'Corrêas'],
    referencias: ['Estrada União e Indústria', 'Estrada das Arcas', 'Parque Municipal de Itaipava', 'BR-040'],
    imovel: 'Restaurantes, pousadas, hotéis, shoppings e lojas ao longo da Estrada União e Indústria, com condomínios de casas e sítios nos vales.',
    problema:
      'Cozinhas profissionais produzem gordura em volume muito maior que uma casa. Em fins de semana e feriados, com a casa cheia, a caixa de gordura satura e a pia de lavagem para no meio do serviço.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Itaipava é o polo gastronômico e de hospedagem de Petrópolis. Restaurantes, pousadas e centros comerciais se alinham pela Estrada União e Indústria, e condomínios e sítios ocupam vales como o da Estrada das Arcas. O movimento se concentra de sexta a domingo, justamente quando uma cozinha parada custa mais.',
    faq: [
      {
        q: 'A caixa de gordura do restaurante enche mais rápido no inverno. Por quê?',
        a: 'A alta temporada de Itaipava é no frio, com mais clientes e mais pratos gordurosos. Além disso, a gordura solidifica mais depressa em temperatura baixa.',
      },
      {
        q: 'Vocês fazem a limpeza antes de um feriado prolongado?',
        a: 'Sim. A limpeza preventiva da caixa e do ramal antes de datas de movimento é a forma mais segura de evitar a parada da cozinha.',
      },
      {
        q: 'Atendem pousadas e hotéis de Itaipava de madrugada?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, para comércio e residências.',
      },
    ],
  },
  {
    nome: 'Bonsucesso',
    em: 'em Bonsucesso',
    regiao: 'Itaipava e distritos',
    h1: 'Desentupimento em Bonsucesso, na região de Itaipava',
    vizinhos: ['Itaipava', 'Nogueira', 'Araras', 'Pedro do Rio'],
    referencias: ['Estrada União e Indústria', 'Trevo de Bonsucesso', 'BR-040'],
    imovel: 'Casas, condomínios, lojas de móveis e decoração e restaurantes de beira de estrada.',
    problema:
      'Em restaurantes e casas com cozinha grande, o ramal da pia percorre um trecho longo antes da caixa de gordura. A gordura esfria no percurso e fecha o cano por dentro, mesmo com a caixa limpa.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Bonsucesso fica junto ao trevo que liga a Estrada União e Indústria à BR-040, na região de Itaipava. O comércio voltado para quem passa pela estrada convive com condomínios e casas de moradia, e os chamados se dividem entre cozinhas comerciais e residenciais.',
    faq: [
      {
        q: 'Limpei a caixa de gordura e a pia continua lenta. O que falta?',
        a: 'Falta limpar o ramal entre a pia e a caixa. A gordura que endureceu nesse trecho não sai com a limpeza da caixa.',
      },
      {
        q: 'Triturador de alimentos resolve ou piora?',
        a: 'Reduz o tamanho dos restos, mas eles continuam indo para o cano. Em ramal longo, o material triturado se deposita junto com a gordura.',
      },
      {
        q: 'Vocês atendem comércios próximos ao Trevo de Bonsucesso?',
        a: 'Sim. Atendemos toda a região de Bonsucesso, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Araras',
    em: 'em Araras',
    regiao: 'Itaipava e distritos',
    h1: 'Desentupidora em Araras: hidrojateamento para casas e pousadas',
    vizinhos: ['Vale das Videiras', 'Itaipava', 'Bonsucesso'],
    referencias: ['Estrada Bernardo Coutinho', 'BR-040', 'Reserva Biológica de Araras'],
    imovel: 'Casas de campo, sítios, pousadas e restaurantes em terrenos extensos, com muita mata.',
    problema:
      'Em propriedades grandes, a tubulação percorre dezenas de metros de jardim até a saída. Raízes de árvores procuram a umidade das juntas, entram no tubo e formam uma trama que prende papel e gordura.',
    servico: 'hidrojateamento',
    abertura:
      'Araras é um vale de casas de campo, pousadas e restaurantes ao longo da Estrada Bernardo Coutinho, com acesso pela BR-040 e vizinho da Reserva Biológica de Araras. Os terrenos são grandes e arborizados, e as redes internas, longas, pedem limpeza com jato de água em alta pressão.',
    faq: [
      {
        q: 'O hidrojato remove raízes de dentro do cano?',
        a: 'Remove. Bicos próprios cortam as raízes e o fluxo de água arrasta os pedaços. Em infestação grande, o cabo rotativo com lâmina é usado em conjunto.',
      },
      {
        q: 'A casa é usada só em fins de semana. Mesmo assim precisa de limpeza periódica?',
        a: 'Precisa, porque as raízes crescem com ou sem uso. Uma limpeza preventiva antes da temporada de inverno evita surpresa com a casa cheia.',
      },
      {
        q: 'Vocês atendem sítios afastados da Estrada Bernardo Coutinho?',
        a: 'Sim. Atendemos todo o vale de Araras, todos os dias, 24 horas.',
      },
    ],
  },
  {
    nome: 'Vale das Videiras',
    em: 'no Vale das Videiras',
    regiao: 'Itaipava e distritos',
    h1: 'Vale das Videiras: desentupimento e limpeza de caixa de gordura',
    vizinhos: ['Araras', 'Itaipava', 'Bonsucesso'],
    referencias: ['Estrada Almirante Paulo Meira', 'Estrada Bernardo Coutinho'],
    imovel: 'Pousadas, restaurantes de campo, sítios e casas de veraneio.',
    problema:
      'Pousadas e restaurantes pequenos costumam ter caixa de gordura dimensionada para uma casa. Em fins de semana cheios, ela não comporta o volume, e a gordura passa para a tubulação.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Vale das Videiras fica depois de Araras, com acesso pela Estrada Bernardo Coutinho e pela Estrada Almirante Paulo Meira. É um destino de fim de semana, com pousadas e restaurantes de campo espalhados entre sítios, e a cozinha desses estabelecimentos trabalha em ritmo muito desigual ao longo da semana.',
    faq: [
      {
        q: 'A caixa de gordura da pousada é pequena. Limpar mais vezes compensa?',
        a: 'Compensa. Com caixa pequena, o intervalo entre limpezas precisa ser curto, principalmente antes de fins de semana de casa cheia.',
      },
      {
        q: 'O que acontece se a caixa de gordura transbordar?',
        a: 'A gordura sai pela tampa e pelo ramal, causa mau cheiro, atrai insetos e entope a tubulação adiante. A limpeza remove todo o conteúdo e lava as paredes da caixa.',
      },
      {
        q: 'Vocês vão ao Vale das Videiras à noite e em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, para pousadas, restaurantes e residências.',
      },
    ],
  },
  {
    nome: 'Pedro do Rio',
    em: 'em Pedro do Rio',
    regiao: 'Itaipava e distritos',
    h1: 'Desentupidora em Pedro do Rio, atendimento 24 horas',
    vizinhos: ['Itaipava', 'Secretário', 'Posse', 'Bonsucesso'],
    referencias: ['Estrada União e Indústria', 'Trevo de Pedro do Rio', 'BR-040', 'Rio Piabanha'],
    imovel: 'Casas antigas no núcleo do distrito, comércio local, galpões e sítios nos arredores.',
    problema:
      'No núcleo antigo, canos de ferro e de barro convivem com PVC de reformas recentes. A ferrugem e as incrustações reduzem o diâmetro dos trechos velhos, e a água passa a escoar devagar em toda a casa.',
    servico: 'desentupimento-de-cano',
    abertura:
      'Pedro do Rio é o quarto distrito de Petrópolis, na Estrada União e Indústria, com ligação à BR-040 pelo trevo e o Rio Piabanha ao lado. O centro do distrito tem casas e comércio antigos, e a zona ao redor reúne sítios e empresas instaladas perto da rodovia.',
    faq: [
      {
        q: 'Cano de ferro enferrujado por dentro tem como limpar?',
        a: 'Tem. O cabo rotativo com ponteira raspadora e o hidrojato removem boa parte da incrustação e recuperam a vazão.',
      },
      {
        q: 'Depois da reforma a pia ficou pior. O que pode ter acontecido?',
        a: 'Restos de argamassa e massa corrida lavados na pia endurecem dentro do cano. É uma causa comum de entupimento logo após a obra.',
      },
      {
        q: 'Vocês atendem galpões e empresas perto da BR-040 em Pedro do Rio?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Secretário',
    em: 'em Secretário',
    regiao: 'Itaipava e distritos',
    h1: 'Desentupimento em Secretário para sítios, casas e pousadas',
    vizinhos: ['Pedro do Rio', 'Itaipava', 'Posse'],
    referencias: ['Estrada do Secretário', 'Estrada da Rocinha', 'Estrada do Fagundes'],
    imovel: 'Sítios, haras, casas de campo e pousadas em propriedades amplas, com acesso por estradas de terra e de paralelepípedo.',
    problema:
      'As propriedades têm tubulações extensas, com vários pontos de uso distantes entre si. Terra, folhas e gordura se acumulam ao longo do percurso, e o desentupimento pontual não limpa toda a linha.',
    servico: 'hidrojateamento',
    abertura:
      'Secretário é uma localidade rural no distrito de Pedro do Rio, alcançada pela Estrada do Secretário, com propriedades distribuídas pela Estrada da Rocinha e pela Estrada do Fagundes. Sítios e pousadas recebem hóspedes nos fins de semana, e as redes internas, longas, precisam estar livres antes da chegada do movimento.',
    faq: [
      {
        q: 'A tubulação do sítio tem mais de cem metros. O hidrojato alcança tudo?',
        a: 'Alcança, trabalhando por trechos a partir das caixas de inspeção. Cada trecho é lavado e conferido antes de seguir para o próximo.',
      },
      {
        q: 'Não sei onde ficam as caixas de inspeção da propriedade. Vocês localizam?',
        a: 'Na maioria dos casos, sim. Seguimos o trajeto provável do cano a partir dos pontos de uso e identificamos as tampas encobertas por grama ou terra.',
      },
      {
        q: 'Vocês atendem em estrada de terra, em Secretário?',
        a: 'Sim. Atendemos sítios e pousadas da região, 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Posse',
    em: 'na Posse',
    regiao: 'Itaipava e distritos',
    h1: 'Desentupidora na Posse, distrito de Petrópolis',
    vizinhos: ['Pedro do Rio', 'Secretário', 'Itaipava'],
    referencias: ['Estrada União e Indústria', 'Estrada Silveira da Motta'],
    imovel: 'Casas térreas, pequenos comércios e propriedades rurais no núcleo do distrito e ao longo das estradas.',
    problema:
      'Em casas térreas com ramal comprido e pouca queda, o vaso sanitário é o primeiro ponto a parar. Papel e resíduos se acumulam no trecho quase plano e a descarga deixa de ter força.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'A Posse é o quinto distrito de Petrópolis e o mais distante do Centro, com o núcleo urbano junto à Estrada União e Indústria e propriedades ao longo da Estrada Silveira da Motta. É uma região de moradia e de produção rural, com casas térreas e instalações simples.',
    faq: [
      {
        q: 'O vaso demora a esvaziar e faz barulho de ar. O que significa?',
        a: 'O ramal está parcialmente fechado e o ar não circula. É o estágio anterior ao entupimento completo, e vale resolver antes que a água transborde.',
      },
      {
        q: 'Papel higiênico grosso entope mais?',
        a: 'Em ramal com pouca inclinação, sim. Ele demora mais para se desfazer e para no trecho plano. Usar menos por descarga ajuda.',
      },
      {
        q: 'Vocês atendem a Posse mesmo sendo longe do Centro?',
        a: 'Sim. A Posse faz parte da área atendida em Petrópolis, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
];
