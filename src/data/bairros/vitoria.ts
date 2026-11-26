// Bairros de Vitória. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const vitoria: BairroDados[] = [
  // ---------------- REGIÃO CONTINENTAL ----------------
  {
    nome: 'Jardim da Penha',
    em: 'em Jardim da Penha',
    regiao: 'Região Continental',
    h1: 'Desentupidora em Jardim da Penha 24 horas',
    vizinhos: ['Mata da Praia', 'Praia do Canto', 'Goiabeiras', 'Pontal de Camburi'],
    referencias: ['Avenida Anísio Fernandes Coelho', 'Praça Regina Frigeri Furno', 'Avenida Dante Michelini', 'Avenida Fernando Ferrari'],
    imovel: 'Prédios residenciais baixos, de três e quatro andares, muitos sem elevador, com bares e restaurantes nos térreos.',
    problema:
      'Nos prédios baixos e antigos, as pias de todos os apartamentos de uma prumada descem por uma coluna de gordura estreita. Com muitas repúblicas e apartamentos alugados, o uso é intenso e a coluna fecha, devolvendo água no primeiro andar.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'Jardim da Penha tem um traçado próprio, com praças redondas ligadas por ruas curtas e prédios baixos por todo lado. A proximidade da Ufes enche o bairro de estudantes, repúblicas e bares, principalmente na Avenida Anísio Fernandes Coelho. Tanto uso em colunas antigas e estreitas explica por que o entupimento de prumada é rotina por aqui.',
    faq: [
      {
        q: 'Meu prédio em Jardim da Penha tem só quatro andares. Mesmo assim a coluna entope?',
        a: 'Entope. A altura do prédio importa menos do que o diâmetro e a idade do tubo. Colunas antigas e estreitas acumulam gordura mesmo com poucos apartamentos.',
      },
      {
        q: 'A pia do primeiro andar devolve água com resto de comida que não é meu. De onde vem?',
        a: 'Vem dos apartamentos de cima. Com a coluna obstruída abaixo do seu andar, o que os vizinhos despejam para na sua pia. O desentupimento deve ser feito na coluna, pelo condomínio.',
      },
      {
        q: 'Vocês atendem os bares de Jardim da Penha de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jardim Camburi',
    em: 'em Jardim Camburi',
    regiao: 'Região Continental',
    h1: 'Desentupimento em Jardim Camburi, a qualquer hora',
    vizinhos: ['Mata da Praia', 'República', 'Goiabeiras'],
    referencias: ['Avenida Dante Michelini', 'Rua Carlos Martins', 'Avenida Norte Sul', 'Praia de Camburi'],
    imovel: 'Prédios residenciais de vários portes e idades, de blocos baixos a torres com área de lazer, e comércio intenso nas ruas internas.',
    problema:
      'Cozinhas de apartamentos com uso diário, muitas com pias ligadas a ramais longos, acumulam gordura e restos de comida no cano. A pia começa a escoar devagar e para de vez em um dia de mais uso.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Jardim Camburi é o bairro mais populoso de Vitória, com milhares de apartamentos entre a Avenida Dante Michelini e a Avenida Norte Sul. Onde mora muita gente, cozinha-se muito, e o problema mais comum é a pia de cozinha parada.',
    faq: [
      {
        q: 'A pia está lenta há semanas. Devo esperar entupir de vez para chamar?',
        a: 'Não. Pia lenta já é um entupimento parcial. Resolver nessa fase é mais simples do que esperar a água parar por completo e transbordar no armário.',
      },
      {
        q: 'Pó de café e casca de ovo fazem mal ao encanamento?',
        a: 'Fazem. São resíduos que não dissolvem. Eles assentam nas curvas do cano e grudam na gordura, formando uma massa compacta.',
      },
      {
        q: 'Atendem todo o bairro de Jardim Camburi?',
        a: 'Sim. Atendemos apartamentos, condomínios e comércio em todo o bairro, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Mata da Praia',
    em: 'na Mata da Praia',
    regiao: 'Região Continental',
    h1: 'Desentupidora 24h na Mata da Praia',
    vizinhos: ['Jardim da Penha', 'Jardim Camburi', 'República', 'Morada de Camburi'],
    referencias: ['Avenida Dante Michelini', 'Avenida Adalberto Simão Nader', 'Avenida Desembargador Dermeval Lyrio'],
    imovel: 'Casas amplas com jardim e piscina e edifícios residenciais de alto padrão de frente para a Praia de Camburi.',
    problema:
      'Casas com jardim têm muitos ralos externos, calhas e tubos de água de chuva. Folhas, terra e raízes entram nessa rede, e na chuva forte a água acumula no jardim, na garagem e na borda da piscina.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'A Mata da Praia é um bairro arborizado e residencial, com casas grandes nas ruas internas e edifícios de frente para a Avenida Dante Michelini. Tanta árvore e tanta área externa exigem uma drenagem em ordem. Calhas e tubos de queda entupidos por folhas são a origem da maior parte dos chamados no bairro.',
    faq: [
      {
        q: 'A calha transborda mesmo depois de limpa. O que pode ser?',
        a: 'O entupimento provavelmente está no tubo de queda ou no trecho enterrado que leva a água até a rua. Folhas e terra descem da calha e se acumulam nas curvas desse tubo.',
      },
      {
        q: 'Raízes de árvore podem entupir a tubulação de água de chuva?',
        a: 'Podem. As raízes entram pelas juntas em busca de umidade e crescem dentro do tubo. O corte é feito com máquina rotativa ou com jato de água em alta pressão.',
      },
      {
        q: 'Vocês atendem casas e condomínios da Mata da Praia?',
        a: 'Sim. Atendemos casas, prédios e comércio, todos os dias, 24 horas.',
      },
    ],
  },

  // ---------------- PRAIA DO CANTO E ARREDORES ----------------
  {
    nome: 'Praia do Canto',
    em: 'na Praia do Canto',
    regiao: 'Praia do Canto e arredores',
    h1: 'Desentupidora na Praia do Canto: restaurantes, bares e residências',
    vizinhos: ['Santa Lúcia', 'Enseada do Suá', 'Barro Vermelho', 'Jardim da Penha'],
    referencias: ['Rua Joaquim Lírio', 'Avenida Saturnino de Brito', 'Rua Aleixo Netto', 'Praça dos Namorados'],
    imovel: 'Edifícios residenciais de alto padrão e uma concentração de bares e restaurantes na região do Triângulo das Bermudas.',
    problema:
      'Bares e restaurantes produzem gordura em volume muito acima do de uma residência. A caixa de gordura satura em pouco tempo, o cheiro aparece na calçada e a pia da cozinha para no meio do serviço.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'A Praia do Canto é o principal polo gastronômico de Vitória. No Triângulo das Bermudas, em torno da Rua Joaquim Lírio, bares e restaurantes funcionam lado a lado, cercados por prédios residenciais. Para essas cozinhas, a limpeza da caixa de gordura no prazo certo evita parar o atendimento em noite de casa cheia.',
    faq: [
      {
        q: 'O restaurante pode fazer a limpeza da caixa de gordura fora do horário de funcionamento?',
        a: 'Pode. Atendemos 24 horas, então o serviço pode ser feito de madrugada, depois do fechamento, ou pela manhã, antes da abertura.',
      },
      {
        q: 'O mau cheiro na cozinha vem da caixa de gordura?',
        a: 'Na maioria das vezes, sim. Gordura velha e restos de comida em decomposição dentro da caixa soltam gases que sobem pelos ralos. A limpeza completa elimina a origem do cheiro.',
      },
      {
        q: 'Vocês atendem apartamentos da Praia do Canto também?',
        a: 'Sim. O atendimento é residencial e comercial, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Santa Lúcia',
    em: 'em Santa Lúcia',
    regiao: 'Praia do Canto e arredores',
    h1: 'Desentupimento 24 horas em Santa Lúcia',
    vizinhos: ['Praia do Canto', 'Barro Vermelho', 'Bento Ferreira', 'Santa Luíza'],
    referencias: ['Avenida Nossa Senhora da Penha', 'Avenida Leitão da Silva', 'Avenida Rio Branco'],
    imovel: 'Edifícios comerciais, clínicas, laboratórios e escritórios, com prédios residenciais nas ruas internas.',
    problema:
      'Em prédios de salas comerciais e clínicas, os banheiros recebem papel toalha, lenços e outros descartes indevidos. O material se acumula no ramal do andar e o vaso transborda em horário de expediente.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'Santa Lúcia fica entre duas das avenidas mais movimentadas de Vitória, a Nossa Senhora da Penha, chamada de Reta da Penha, e a Leitão da Silva. O bairro concentra consultórios, clínicas e escritórios, e os chamados mais comuns são de vaso sanitário entupido em banheiros de uso coletivo.',
    faq: [
      {
        q: 'O vaso do consultório entupiu com pacientes na sala de espera. Vocês atendem na hora?',
        a: 'Sim. Atendemos emergências em Santa Lúcia a qualquer hora, e chegamos em 20 minutos.',
      },
      {
        q: 'O desentupimento do vaso faz sujeira no banheiro?',
        a: 'O serviço é feito com equipamento próprio para vaso sanitário, que trabalha dentro da louça e do cano. A área é protegida e fica limpa ao final.',
      },
      {
        q: 'Como evitar que o vaso do escritório entupa de novo?',
        a: 'Deixe lixeira com tampa ao lado de cada vaso e um aviso pedindo para não descartar papel toalha, absorvente e lenço umedecido na descarga.',
      },
    ],
  },
  {
    nome: 'Enseada do Suá',
    em: 'na Enseada do Suá',
    regiao: 'Praia do Canto e arredores',
    h1: 'Hidrojateamento e desentupimento na Enseada do Suá',
    vizinhos: ['Praia do Canto', 'Praia do Suá', 'Bento Ferreira', 'Santa Helena'],
    referencias: ['Avenida Américo Buaiz', 'Shopping Vitória', 'Praça do Papa', 'Terceira Ponte'],
    imovel: 'Torres corporativas, edifícios residenciais altos, órgãos públicos e um grande shopping.',
    problema:
      'Edifícios corporativos e condomínios grandes têm redes internas extensas, com coletores no subsolo que recebem esgoto e gordura de restaurantes e copas. A camada que se forma nesses tubos só sai por completo com jato de alta pressão.',
    servico: 'hidrojateamento',
    abertura:
      'A Enseada do Suá foi construída sobre área aterrada e hoje reúne torres de escritórios, prédios residenciais altos e o Shopping Vitória, ao lado do acesso à Terceira Ponte. São edificações de grande porte, com tubulações longas e de diâmetro maior, onde a limpeza por hidrojateamento é a mais usada.',
    faq: [
      {
        q: 'Hidrojateamento serve para manutenção preventiva do prédio?',
        a: 'Serve. A lavagem periódica dos coletores e das caixas remove gordura e sedimentos antes que eles fechem a passagem, o que evita emergências.',
      },
      {
        q: 'O jato de alta pressão pode danificar a tubulação?',
        a: 'A pressão e o bico são escolhidos conforme o material e o diâmetro do tubo. Em tubulação em bom estado, o jato limpa sem danificar.',
      },
      {
        q: 'Vocês atendem prédios comerciais da Enseada do Suá no fim de semana?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, o que permite trabalhar com o prédio vazio.',
      },
    ],
  },
  {
    nome: 'Bento Ferreira',
    em: 'em Bento Ferreira',
    regiao: 'Praia do Canto e arredores',
    h1: 'Bento Ferreira: desentupidora 24 horas',
    vizinhos: ['Praia do Suá', 'Enseada do Suá', 'Ilha de Santa Maria', 'Santa Lúcia'],
    referencias: ['Avenida Marechal Mascarenhas de Moraes', 'Avenida César Hilal', 'Prefeitura de Vitória'],
    imovel: 'Prédios residenciais de porte médio, sedes de órgãos públicos, escolas e empresas.',
    problema:
      'O bairro é plano e fica em cota baixa, perto do mar. Com pouca inclinação, o esgoto escoa devagar dentro dos ramais e qualquer acúmulo de resíduo basta para fazer a água voltar pelos ralos do térreo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Bento Ferreira ocupa uma faixa plana entre a Avenida Marechal Mascarenhas de Moraes, a Beira-Mar, e a Avenida César Hilal. O bairro mistura prédios residenciais com repartições públicas e empresas. Em terreno tão plano, a rede de esgoto dos imóveis trabalha com pouca queda, e é isso que favorece os entupimentos.',
    faq: [
      {
        q: 'Por que o esgoto volta pelo ralo do térreo e não pelo vaso?',
        a: 'O ralo de piso é o ponto mais baixo da instalação. Quando o ramal enche, a água sai primeiro por ele.',
      },
      {
        q: 'O entupimento de esgoto pode ser resolvido sem abrir o piso?',
        a: 'Na maior parte dos casos, sim. O acesso é feito pelas caixas de inspeção ou pelo próprio ralo, com máquina rotativa ou jato de água.',
      },
      {
        q: 'Atendem órgãos públicos e empresas em Bento Ferreira?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas por dia, todos os dias.',
      },
    ],
  },

  // ---------------- CENTRO E SANTO ANTÔNIO ----------------
  {
    nome: 'Centro',
    em: 'no Centro',
    regiao: 'Centro e Santo Antônio',
    h1: 'Desentupidora no Centro de Vitória',
    vizinhos: ['Parque Moscoso', 'Vila Rubim', 'Santo Antônio', 'Forte São João'],
    referencias: ['Avenida Jerônimo Monteiro', 'Avenida Princesa Isabel', 'Praça Costa Pereira', 'Rua Sete de Setembro'],
    imovel: 'Edifícios antigos de uso misto, sobrados, lojas de rua e prédios públicos.',
    problema:
      'Os prédios mais antigos do Centro ainda têm canos de ferro fundido e de barro. Por dentro, a ferrugem e a crosta reduzem o diâmetro do tubo, e resíduos que passariam em um cano novo ficam presos.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Centro de Vitória guarda os edifícios mais antigos da capital, ao longo das avenidas Jerônimo Monteiro e Princesa Isabel e nas ladeiras e escadarias que sobem para a Cidade Alta. Muitas dessas construções mantêm a tubulação original, e canos estreitados pela idade são a causa mais comum de entupimento na região.',
    faq: [
      {
        q: 'O cano do meu prédio é de ferro e entope sempre no mesmo lugar. Tem solução?',
        a: 'O desentupimento com máquina rotativa ou hidrojateamento remove a crosta e devolve boa parte do diâmetro. Se o tubo estiver corroído a ponto de ceder, o trecho precisa ser substituído.',
      },
      {
        q: 'Produto químico de supermercado funciona em cano antigo?',
        a: 'Não é recomendado. Em ferro e em juntas antigas, o produto pode acelerar a corrosão e causar furo, além de não remover a crosta.',
      },
      {
        q: 'Vocês atendem lojas e sobrados do Centro de Vitória?',
        a: 'Sim. Atendemos lojas, escritórios, prédios e residências do Centro, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Santo Antônio',
    em: 'em Santo Antônio',
    regiao: 'Centro e Santo Antônio',
    h1: 'Desentupimento em Santo Antônio, 24 horas por dia',
    vizinhos: ['Centro', 'Caratoíra', 'Bela Vista', 'Inhanguetá', 'Mário Cypreste'],
    referencias: ['Avenida Santo Antônio', 'Basílica de Santo Antônio', 'Cemitério de Santo Antônio'],
    imovel: 'Casas e sobrados antigos, parte deles em encosta, com acesso por ladeiras e escadarias.',
    problema:
      'Em terrenos de encosta, a água de chuva desce com força e carrega terra e pedras para os ralos de quintal e de laje. O ralo fecha, a água empoça e acaba entrando em casa ou infiltrando na parede.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'Santo Antônio é um dos bairros tradicionais de Vitória, entre a baía e o maciço central, com a Avenida Santo Antônio na parte baixa e casas subindo o morro. Nesse relevo, ralos de quintal, de laje e de escada recebem muita terra a cada chuva e precisam de desobstrução com frequência.',
    faq: [
      {
        q: 'O ralo da laje entope a cada chuva. Como reduzir isso?',
        a: 'Use grelha tipo abacaxi, que não é coberta por folhas, e mantenha a laje varrida. Se o ralo continua lento, há terra acumulada no tubo de descida, que precisa ser removida.',
      },
      {
        q: 'Vocês conseguem levar o equipamento por escadaria?',
        a: 'Sim. Trabalhamos com equipamentos portáteis, usados em imóveis onde o veículo não chega até a porta.',
      },
      {
        q: 'Atendem Santo Antônio à noite e em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- MARUÍPE ----------------
  {
    nome: 'Maruípe',
    em: 'em Maruípe',
    regiao: 'Maruípe',
    h1: 'Desentupidora em Maruípe: chegamos em 20 minutos',
    vizinhos: ['Tabuazeiro', 'Santa Cecília', 'São Cristóvão', 'Santos Dumont'],
    referencias: ['Avenida Maruípe', 'Avenida Marechal Campos', 'Parque Municipal Horto de Maruípe'],
    imovel: 'Casas, sobrados e prédios pequenos, com comércio de bairro, lanchonetes e serviços de saúde nas avenidas.',
    problema:
      'Em casas com mais de uma cozinha e em lanchonetes de bairro, a caixa de gordura é pequena para o volume que recebe. Ela enche, a gordura segue para o esgoto e a pia começa a voltar.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Maruípe se organiza em torno da Avenida Maruípe e da Avenida Marechal Campos, com hospitais, quartéis e comércio na parte baixa e ruas residenciais em direção ao Horto. O bairro tem muitas casas divididas entre familiares e pequenos comércios de alimentação, e a pia de cozinha é o ponto que mais dá trabalho.',
    faq: [
      {
        q: 'A água da pia sai pelo ralo do quintal. Onde está o entupimento?',
        a: 'Depois da caixa de gordura ou nela própria. Com a caixa cheia ou o cano de saída obstruído, a água da pia procura o ralo mais próximo.',
      },
      {
        q: 'Minha casa não tem caixa de gordura. Isso é um problema?',
        a: 'É. Sem a caixa, toda a gordura da cozinha vai direto para o ramal de esgoto e endurece lá dentro, o que causa entupimentos repetidos.',
      },
      {
        q: 'Vocês atendem perto do Horto de Maruípe e da Avenida Marechal Campos?',
        a: 'Sim. Atendemos todo o bairro de Maruípe, 24 horas por dia.',
      },
    ],
  },
];
