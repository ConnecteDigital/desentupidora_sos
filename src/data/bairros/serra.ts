// Bairros da Serra. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const serra: BairroDados[] = [
  // ---------------- LARANJEIRAS ----------------
  {
    nome: 'Parque Residencial Laranjeiras',
    em: 'no Parque Residencial Laranjeiras',
    regiao: 'Laranjeiras',
    h1: 'Desentupidora em Laranjeiras, Serra, 24 horas',
    vizinhos: ['Colina de Laranjeiras', 'Jardim Limoeiro', 'Valparaíso', 'Barcelona'],
    referencias: ['Avenida Central', 'Primeira Avenida', 'Terminal de Laranjeiras', 'Hospital Estadual Dório Silva'],
    imovel: 'Lojas, restaurantes, bancos e clínicas nas avenidas, com casas e prédios baixos nas ruas residenciais.',
    problema:
      'Restaurantes, padarias e lanchonetes do centro comercial lavam louça o dia inteiro. A caixa de gordura enche rápido, o cano de saída fecha e a pia transborda na cozinha.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Parque Residencial Laranjeiras é o principal centro de comércio e serviços da Serra. Na Avenida Central e na Primeira Avenida ficam bancos, lojas, restaurantes e o terminal de ônibus, e nas ruas de trás estão as casas do loteamento original. O comércio de alimentação responde pela maior parte dos chamados, quase sempre por caixa de gordura saturada.',
    faq: [
      {
        q: 'A caixa de gordura da padaria precisa de limpeza com que frequência?',
        a: 'Varia com o movimento e o tamanho da caixa. Estabelecimentos com fritura e louça o dia todo precisam de intervalos curtos. Mau cheiro e pia lenta indicam que o prazo passou.',
      },
      {
        q: 'Depois da limpeza da caixa, a pia continua lenta. Por quê?',
        a: 'Porque parte da gordura já passou para o cano de saída e endureceu ali. Além de limpar a caixa, é preciso desobstruir o ramal até a rede.',
      },
      {
        q: 'Vocês atendem o comércio da Avenida Central antes de abrir?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Colina de Laranjeiras',
    em: 'em Colina de Laranjeiras',
    regiao: 'Laranjeiras',
    h1: 'Desentupimento em Colina de Laranjeiras para casas e condomínios',
    vizinhos: ['Parque Residencial Laranjeiras', 'Morada de Laranjeiras', 'Jardim Limoeiro', 'Valparaíso'],
    referencias: ['Avenida Eldes Scherrer Souza', 'Shopping Montserrat'],
    imovel: 'Condomínios fechados de casas e de torres, construídos nas últimas décadas, com redes internas próprias.',
    problema:
      'Condomínios grandes têm redes coletoras longas, que percorrem todo o terreno antes de chegar à rua. Gordura, areia de obra e resíduos se depositam ao longo do trajeto e reduzem a vazão de todo o conjunto.',
    servico: 'hidrojateamento',
    abertura:
      'Colina de Laranjeiras cresceu com condomínios fechados, tanto de casas quanto de apartamentos, ao longo da Avenida Eldes Scherrer Souza. Cada condomínio funciona como um pequeno bairro, com rede de esgoto e de água de chuva interna. Para essas tubulações extensas, o hidrojateamento é o serviço mais indicado.',
    faq: [
      {
        q: 'Meu condomínio é novo. Por que a rede já está entupindo?',
        a: 'Em condomínios recentes, é comum haver restos de obra dentro da tubulação, como areia, argamassa e pedaços de cerâmica. Esse material segura gordura e papel e forma a obstrução.',
      },
      {
        q: 'O hidrojateamento limpa também as caixas de passagem?',
        a: 'Sim. O serviço lava os tubos e as caixas de inspeção e de gordura ao longo da rede, removendo o material acumulado.',
      },
      {
        q: 'Vocês atendem chamados de síndicos e administradoras?',
        a: 'Sim. Atendemos condomínios, casas e comércio em Colina de Laranjeiras, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Barcelona',
    em: 'em Barcelona',
    regiao: 'Laranjeiras',
    h1: 'Desentupidora 24 horas em Barcelona, na Serra',
    vizinhos: ['Porto Canoa', 'Serra Dourada', 'Parque Residencial Laranjeiras', 'Novo Porto Canoa'],
    referencias: ['Avenida Região Sudeste', 'Avenida Anápolis', 'Praça do Bairro Barcelona'],
    imovel: 'Casas de conjunto habitacional, muitas reformadas e ampliadas, com comércio nas avenidas principais.',
    problema:
      'Nas casas ampliadas, a cozinha muitas vezes mudou de lugar e a pia passou a ter um ramal comprido, com várias curvas e pouca queda. A gordura assenta no caminho e a pia para de escoar.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Barcelona é um bairro residencial da Serra formado por casas de conjunto habitacional, com ruas que levam nomes de cidades brasileiras e comércio na Avenida Região Sudeste. Com as reformas feitas pelos moradores ao longo dos anos, as cozinhas ficaram mais distantes da caixa de gordura, e a pia entupida passou a ser o problema mais relatado.',
    faq: [
      {
        q: 'Mudei a pia de lugar na reforma e ela nunca mais escoou bem. Tem jeito?',
        a: 'O desentupimento libera o ramal e melhora o escoamento. Se o cano ficou sem inclinação suficiente, a gordura volta a assentar, e a limpeza precisa ser repetida com mais frequência.',
      },
      {
        q: 'Posso usar arame para desentupir a pia?',
        a: 'Não é indicado. O arame pode furar o sifão ou a conexão e empurrar a sujeira para um ponto mais distante.',
      },
      {
        q: 'Atendem Barcelona aos domingos?',
        a: 'Sim. Atendemos todos os dias, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- CARAPINA E BR-101 ----------------
  {
    nome: 'Carapina',
    em: 'em Carapina',
    regiao: 'Carapina e BR-101',
    h1: 'Desentupimento em Carapina: empresas, galpões e residências',
    vizinhos: ['Jardim Limoeiro', 'André Carloni', 'Eurico Salles', 'Rosário de Fátima'],
    referencias: ['BR-101', 'Terminal de Carapina'],
    imovel: 'Empresas, galpões, concessionárias, postos e comércio de beira de rodovia, com casas nas ruas internas.',
    problema:
      'Empresas com muitos funcionários, refeitório e vestiário geram grande volume de esgoto. As caixas de inspeção acumulam resíduos, a rede interna satura e o esgoto volta nos banheiros do térreo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Carapina se desenvolveu às margens da BR-101, na parte da Serra mais próxima de Vitória, e reúne empresas, galpões, comércio de grande porte e um terminal de ônibus. Para um negócio em funcionamento, esgoto voltando significa atividade parada, e esse é o tipo de chamado que mais atendemos na região.',
    faq: [
      {
        q: 'O esgoto voltou nos vestiários da empresa. Dá para resolver sem parar a operação?',
        a: 'Em geral, sim. O trabalho é feito pelas caixas de inspeção, do lado de fora, e só os pontos afetados ficam sem uso durante o serviço.',
      },
      {
        q: 'O refeitório da empresa precisa de caixa de gordura separada?',
        a: 'Precisa. Sem ela, a gordura da cozinha vai para a rede de esgoto da empresa e é uma das principais causas de entupimento do coletor.',
      },
      {
        q: 'Vocês atendem empresas de Carapina à noite e de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jardim Limoeiro',
    em: 'em Jardim Limoeiro',
    regiao: 'Carapina e BR-101',
    h1: 'Jardim Limoeiro: desentupidora 24 horas',
    vizinhos: ['Carapina', 'Parque Residencial Laranjeiras', 'Colina de Laranjeiras', 'São Diogo'],
    referencias: ['Avenida Lourival Nunes', 'BR-101', 'Avenida Norte Sul'],
    imovel: 'Condomínios de apartamentos com várias torres e muitos moradores, além de casas e comércio na Avenida Lourival Nunes.',
    problema:
      'Em condomínios com várias torres, cada prumada recebe gordura e sabão de todos os andares. A crosta se forma no pé da coluna e a água volta pelos apartamentos mais baixos.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'Jardim Limoeiro fica entre a BR-101 e a Avenida Norte Sul e recebeu, nos últimos anos, grandes condomínios de apartamentos. O bairro tem também casas e uma avenida comercial, a Lourival Nunes. Nos condomínios, a coluna entupida é a ocorrência que mais mobiliza síndicos e moradores.',
    faq: [
      {
        q: 'Sai espuma pelo ralo da área de serviço do meu apartamento. De onde vem?',
        a: 'Das máquinas de lavar dos andares de cima. Com a coluna parcialmente fechada, a espuma não desce e sai pelo ralo mais baixo da prumada.',
      },
      {
        q: 'O desentupimento da coluna é feito por dentro do apartamento?',
        a: 'Depende do prédio. O acesso pode ser pela caixa no térreo, por uma visita na garagem ou pelo ponto do apartamento afetado. A equipe avalia no local qual é o melhor acesso.',
      },
      {
        q: 'Atendem os condomínios de Jardim Limoeiro em feriado?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- JACARAÍPE E LITORAL ----------------
  {
    nome: 'Jacaraípe',
    em: 'em Jacaraípe',
    regiao: 'Jacaraípe e Litoral',
    h1: 'Desentupidora em Jacaraípe para casas de praia, pousadas e quiosques',
    vizinhos: ['Manguinhos', 'Castelândia', 'Enseada de Jacaraípe', 'Feu Rosa'],
    referencias: ['Avenida Abido Saadi', 'Rodovia ES-010', 'Praia de Jacaraípe', 'Rio Jacaraípe'],
    imovel: 'Casas de praia, casas de moradores fixos, pousadas, bares e restaurantes de frente para o mar.',
    problema:
      'Banhistas voltam da praia e tomam banho com areia no corpo, e os chuveiros externos despejam direto no ralo. A areia enche a caixa sifonada e assenta no cano, que passa a escoar cada vez menos.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'Jacaraípe é o balneário mais movimentado da Serra, com a Avenida Abido Saadi acompanhando a praia e ruas de casas entre o mar e as lagoas. No verão e nos feriados, o número de pessoas por imóvel se multiplica, e os ralos cheios de areia são o primeiro problema a aparecer.',
    faq: [
      {
        q: 'O chuveirão do quintal alaga tudo em volta. O ralo está entupido?',
        a: 'Muito provavelmente. O ralo de chuveiro externo recebe areia pura, que enche a caixa em pouco tempo. É preciso retirar a areia da caixa e do trecho de cano seguinte.',
      },
      {
        q: 'Como evitar areia no encanamento da casa de praia?',
        a: 'Instale grelha com cesto coletor nos ralos de box e do chuveirão e esvazie o cesto com frequência. Tirar o excesso de areia do corpo antes do banho também ajuda.',
      },
      {
        q: 'Vocês atendem Jacaraípe no verão e nos feriados?',
        a: 'Sim. Atendemos 24 horas, todos os dias, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Feu Rosa',
    em: 'em Feu Rosa',
    regiao: 'Jacaraípe e Litoral',
    h1: 'Desentupimento 24 horas em Feu Rosa',
    vizinhos: ['Vila Nova de Colares', 'Cidade Continental', 'Bicanga', 'Jacaraípe'],
    referencias: ['Rua Pau-Brasil', 'Rua dos Eucaliptos'],
    imovel: 'Casas de conjunto habitacional em lotes pequenos, quase todas ampliadas, com moradias de fundos e segundo pavimento.',
    problema:
      'Com mais gente morando no mesmo lote, o banheiro original ganhou a companhia de outros, todos ligados ao mesmo ramal. Papel e outros descartes se acumulam nesse cano e o vaso sanitário para de dar descarga.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'Feu Rosa é um bairro populoso da Serra, surgido como conjunto habitacional, com ruas que têm nomes de árvores e flores, como a Rua Pau-Brasil e a Rua dos Eucaliptos. As casas cresceram para os fundos e para cima, e várias famílias dividem a mesma ligação de esgoto. O vaso sanitário entupido é a ocorrência mais frequente.',
    faq: [
      {
        q: 'O vaso entope em uma casa do lote e logo depois na outra. É coincidência?',
        a: 'Não. As casas usam o mesmo ramal, e a obstrução está no trecho comum. Enquanto ele não for desobstruído, o problema muda de banheiro, mas não acaba.',
      },
      {
        q: 'Jogar balde de água no vaso ajuda a desentupir?',
        a: 'Ajuda apenas em obstruções leves, logo na saída do vaso. Se a água sobe em vez de descer, pare. Insistir faz o vaso transbordar.',
      },
      {
        q: 'Atendem Feu Rosa à noite?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, para casas e comércio.',
      },
    ],
  },

  // ---------------- SERRA SEDE ----------------
  {
    nome: 'Serra Sede',
    slug: 'serra-sede',
    em: 'em Serra Sede',
    regiao: 'Serra Sede',
    h1: 'Desentupidora em Serra Sede: atendimento 24h',
    vizinhos: ['Caçaroca', 'Vista da Serra', 'Cascata'],
    referencias: ['Igreja Matriz de Nossa Senhora da Conceição', 'Avenida Getúlio Vargas', 'Rua Major Pissarra', 'BR-101'],
    imovel: 'Casas e sobrados antigos no centro histórico, comércio de rua e repartições públicas.',
    problema:
      'Imóveis antigos do centro ainda têm trechos de manilha de barro. As juntas se deslocam com o tempo, raízes entram, a terra cede e o cano perde seção até fechar.',
    servico: 'desentupimento-de-cano',
    abertura:
      'Serra Sede é o núcleo histórico do município, ao pé do Mestre Álvaro, com a igreja matriz, a Avenida Getúlio Vargas e o comércio tradicional. Muitas casas e sobrados da região têm tubulação antiga, e cano obstruído por crosta ou por raízes é o motivo mais comum para chamar a desentupidora.',
    faq: [
      {
        q: 'Como saber se o cano de casa ainda é de manilha?',
        a: 'Em imóveis antigos que nunca passaram por troca de tubulação, é provável que os trechos enterrados sejam de barro. Ao abrir a caixa de inspeção, dá para ver o material do tubo.',
      },
      {
        q: 'Manilha entupida por raiz pode ser desentupida?',
        a: 'Pode. A máquina rotativa corta as raízes e libera a passagem. Como a raiz entra pelas juntas, ela tende a voltar, e o serviço precisa ser repetido de tempos em tempos.',
      },
      {
        q: 'Vocês atendem o comércio e as casas de Serra Sede todos os dias?',
        a: 'Sim. Atendemos 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
];
