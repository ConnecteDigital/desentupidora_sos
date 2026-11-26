// Bairros do Rio de Janeiro. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const rioDeJaneiro: BairroDados[] = [
  // ---------------- ZONA SUL ----------------
  {
    nome: 'Copacabana',
    em: 'em Copacabana',
    regiao: 'Zona Sul',
    h1: 'Desentupidora em Copacabana 24 horas',
    vizinhos: ['Leme', 'Ipanema', 'Botafogo', 'Lagoa'],
    referencias: ['Avenida Atlântica', 'Avenida Nossa Senhora de Copacabana', 'Rua Barata Ribeiro', 'Rua Siqueira Campos'],
    imovel: 'Prédios residenciais antigos, muitos com vários apartamentos por andar e lojas no térreo.',
    problema:
      'As colunas de esgoto e de gordura desses prédios, em boa parte ainda de ferro fundido, recebem o despejo de dezenas de cozinhas e banheiros. A crosta acumulada por décadas estreita o tubo e a água volta nos andares mais baixos.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'Copacabana é um dos bairros mais adensados do Rio: quarteirões inteiros de edifícios erguidos em meados do século passado, entre a Avenida Atlântica e a Rua Barata Ribeiro. Tanta gente usando tubulações antigas ao mesmo tempo faz do bairro um lugar onde entupimento de coluna, de pia e de vaso sanitário acontece todos os dias.',
    faq: [
      {
        q: 'A pia do meu apartamento em Copacabana entope toda hora. Por quê?',
        a: 'Em prédios antigos, o ramal da cozinha é estreito e deságua em uma coluna de gordura compartilhada. Se a coluna está com crosta, a pia de cada apartamento escoa mal mesmo depois de limpar o sifão.',
      },
      {
        q: 'Vocês atendem quitinetes e conjugados?',
        a: 'Sim. Atendemos apartamentos de qualquer tamanho, além de lojas, restaurantes, hotéis e condomínios inteiros.',
      },
      {
        q: 'Atendem na Avenida Atlântica e nas ruas internas de madrugada?',
        a: 'Sim. O atendimento em Copacabana é 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Ipanema',
    em: 'em Ipanema',
    regiao: 'Zona Sul',
    h1: 'Desentupidora 24h em Ipanema',
    vizinhos: ['Copacabana', 'Leblon', 'Lagoa'],
    referencias: ['Rua Visconde de Pirajá', 'Avenida Vieira Souto', 'Praça General Osório', 'Praça Nossa Senhora da Paz'],
    imovel: 'Prédios residenciais de médio e alto padrão, com restaurantes, bares e lojas nos térreos da Visconde de Pirajá e das transversais.',
    problema:
      'Cozinhas de restaurantes e de prédios inteiros despejam gordura em caixas que enchem rápido. Quando a caixa satura, a gordura segue para o ramal, e a pia para de escoar tanto no comércio quanto nos apartamentos.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Em Ipanema, apartamentos residenciais dividem o quarteirão com restaurantes, cafés e bares, principalmente ao longo da Rua Visconde de Pirajá e perto das praças General Osório e Nossa Senhora da Paz. Essa mistura concentra muita gordura de cozinha na mesma rede, e a caixa de gordura é o primeiro ponto a dar problema.',
    faq: [
      {
        q: 'Vocês fazem limpeza de caixa de gordura de restaurante em Ipanema fora do horário de funcionamento?',
        a: 'Sim. Como o atendimento é 24 horas, o serviço pode ser feito de madrugada ou antes da abertura da casa.',
      },
      {
        q: 'O ralo do box está com areia. Isso entope?',
        a: 'Entope. A areia da praia se deposita na caixa sifonada e no ramal e, misturada com sabão e cabelo, forma uma massa que fecha o cano.',
      },
      {
        q: 'Atendem prédios da Vieira Souto e das ruas internas?',
        a: 'Sim, atendemos todo o bairro de Ipanema, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Leblon',
    em: 'no Leblon',
    regiao: 'Zona Sul',
    h1: 'Desentupimento no Leblon, a qualquer hora',
    vizinhos: ['Ipanema', 'Gávea', 'Lagoa', 'Jardim Botânico'],
    referencias: ['Avenida Ataulfo de Paiva', 'Rua Dias Ferreira', 'Avenida Delfim Moreira', 'Avenida Bartolomeu Mitre'],
    imovel: 'Edifícios residenciais de alto padrão, com polo de restaurantes na Rua Dias Ferreira e comércio na Ataulfo de Paiva.',
    problema:
      'Nas cozinhas com triturador de alimentos e uso intenso, resíduos finos e gordura se depositam no ramal da pia. Nos restaurantes, o volume é ainda maior e a pia para no meio do serviço.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Leblon combina prédios residenciais entre a Avenida Delfim Moreira e a Ataulfo de Paiva com uma das maiores concentrações de restaurantes da cidade, na Rua Dias Ferreira. Para quem mora ou trabalha no bairro, pia de cozinha parada é o chamado mais frequente.',
    faq: [
      {
        q: 'Triturador de alimentos na pia causa entupimento?',
        a: 'Pode causar. O triturador reduz o tamanho dos restos, mas eles continuam descendo pelo cano e, com a gordura, formam depósitos no ramal e na caixa de gordura.',
      },
      {
        q: 'A pia do restaurante parou em pleno horário de movimento. Vocês atendem na hora?',
        a: 'Sim. Atendemos emergências no Leblon 24 horas e chegamos em 20 minutos.',
      },
      {
        q: 'Vocês atendem condomínios do Leblon?',
        a: 'Sim. Atendemos apartamentos, áreas comuns de condomínios, lojas e restaurantes.',
      },
    ],
  },
  {
    nome: 'Botafogo',
    em: 'em Botafogo',
    regiao: 'Zona Sul',
    h1: 'Desentupidora em Botafogo: chegamos em 20 minutos',
    vizinhos: ['Humaitá', 'Flamengo', 'Laranjeiras', 'Copacabana'],
    referencias: ['Rua Voluntários da Pátria', 'Rua São Clemente', 'Praia de Botafogo', 'Rua Nelson Mandela'],
    imovel: 'Casarões e sobrados antigos transformados em bares, clínicas e escritórios, ao lado de prédios residenciais e comerciais novos.',
    problema:
      'Casarões adaptados para comércio usam uma rede de esgoto projetada para uma família. Com cozinha e banheiros de uso público, o ramal antigo de manilha não dá conta e o esgoto volta.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Botafogo mudou muito: sobrados e casarões das ruas Voluntários da Pátria, São Clemente e Nelson Mandela viraram bares, restaurantes e consultórios, enquanto torres novas subiram ao lado. A rede de esgoto de muitos desses imóveis continua a original, e é aí que os entupimentos aparecem.',
    faq: [
      {
        q: 'Meu bar funciona em um casarão antigo de Botafogo e o esgoto volta nos fins de semana. O que pode ser?',
        a: 'O volume de uso nos dias de movimento supera a capacidade do ramal antigo, que já está parcialmente obstruído. É preciso desentupir o ramal até a rua e limpar as caixas de inspeção.',
      },
      {
        q: 'Vocês atendem clínicas e escritórios?',
        a: 'Sim. O atendimento é residencial e comercial, a qualquer hora do dia ou da noite.',
      },
      {
        q: 'Atendem perto do metrô e da Praia de Botafogo?',
        a: 'Sim, atendemos todo o bairro de Botafogo.',
      },
    ],
  },
  {
    nome: 'Flamengo',
    em: 'no Flamengo',
    regiao: 'Zona Sul',
    h1: 'Desentupidora 24 horas no Flamengo',
    vizinhos: ['Catete', 'Laranjeiras', 'Botafogo', 'Glória'],
    referencias: ['Praia do Flamengo', 'Rua Marquês de Abrantes', 'Rua Senador Vergueiro', 'Rua Paissandu'],
    imovel: 'Prédios residenciais antigos e altos, com apartamentos amplos e prumadas longas.',
    problema:
      'Quanto mais alta a prumada, mais apartamentos despejam na mesma coluna. Nos edifícios antigos do bairro, uma obstrução na base da coluna faz a água voltar nos primeiros andares.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'No Flamengo, os edifícios da Praia do Flamengo, da Rua Senador Vergueiro e da Marquês de Abrantes têm muitos andares e décadas de uso. O bairro é quase todo residencial, e os chamados mais comuns vêm de síndicos e moradores de andares baixos com retorno de água pela pia ou pelo ralo.',
    faq: [
      {
        q: 'Moro no segundo andar e sai espuma pelo ralo da área de serviço. É entupimento?',
        a: 'É um sinal clássico de coluna parcialmente obstruída. A espuma das máquinas de lavar dos andares de cima não consegue descer e sai pelo ralo mais baixo.',
      },
      {
        q: 'O síndico precisa estar presente no desentupimento da coluna?',
        a: 'É recomendável que o condomínio autorize e acompanhe, porque o acesso à coluna pode passar por áreas comuns e por mais de um apartamento.',
      },
      {
        q: 'Atendem o Flamengo aos domingos?',
        a: 'Sim. Atendemos 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Laranjeiras',
    em: 'em Laranjeiras',
    regiao: 'Zona Sul',
    h1: 'Desentupimento 24 horas em Laranjeiras',
    vizinhos: ['Flamengo', 'Catete', 'Botafogo', 'Santa Teresa'],
    referencias: ['Rua das Laranjeiras', 'Rua Pinheiro Machado', 'Rua General Glicério', 'Rua Alice'],
    imovel: 'Prédios residenciais e casas em ruas arborizadas, muitas delas em ladeira, ao pé do morro.',
    problema:
      'A água de chuva desce das encostas carregando folhas e terra para calhas, ralos e caixas de areia. Com a rede pluvial obstruída, garagens e pátios alagam na primeira chuva forte.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'Laranjeiras fica em um vale: a Rua das Laranjeiras corre pelo fundo e as transversais, como a General Glicério e a Rua Alice, sobem as encostas. É um bairro arborizado, e essa combinação de árvores e ladeiras leva muita folha e sedimento para dentro das tubulações de água de chuva.',
    faq: [
      {
        q: 'A garagem do prédio alaga quando chove forte. O que resolve?',
        a: 'A desobstrução dos ralos, da caixa de areia e do tubo que leva a água da garagem até a rua. Com folhas e terra acumuladas, a tubulação perde vazão.',
      },
      {
        q: 'Raízes de árvore podem entupir os canos da minha casa?',
        a: 'Sim. Em ruas arborizadas, raízes entram pelas juntas de manilhas antigas e obstruem tanto o esgoto quanto a rede de água de chuva.',
      },
      {
        q: 'Vocês sobem as ladeiras de Laranjeiras?',
        a: 'Sim, atendemos todo o bairro, incluindo as ruas em ladeira.',
      },
    ],
  },
  {
    nome: 'Catete',
    em: 'no Catete',
    regiao: 'Zona Sul',
    h1: 'Precisa de desentupidora no Catete?',
    vizinhos: ['Glória', 'Flamengo', 'Laranjeiras', 'Santa Teresa'],
    referencias: ['Rua do Catete', 'Largo do Machado', 'Rua Bento Lisboa', 'Palácio do Catete'],
    imovel: 'Sobrados antigos com comércio no térreo e moradia em cima, vilas e prédios pequenos sem elevador.',
    problema:
      'Nos sobrados e vilas, a tubulação original é de ferro e de manilha de barro, com trechos longos sob o piso. A crosta interna reduz a passagem e o cano entope com pouco material.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Catete guarda um dos conjuntos de sobrados mais antigos da Zona Sul, ao longo da Rua do Catete e da Bento Lisboa, perto do Largo do Machado. Muitos desses imóveis têm loja embaixo e moradia em cima, ligados à mesma tubulação de décadas atrás.',
    faq: [
      {
        q: 'Meu sobrado no Catete tem cano de ferro. Dá para desentupir sem trocar a tubulação?',
        a: 'Dá. O desentupimento remove a obstrução. Se o cano estiver muito comprometido pela ferrugem, isso é informado para você decidir o que fazer depois.',
      },
      {
        q: 'A loja do térreo e o apartamento de cima usam o mesmo esgoto. Quem deve chamar?',
        a: 'Quem notar o problema primeiro pode chamar. Como o ramal é comum, o ideal é que os dois ocupantes combinem o serviço.',
      },
      {
        q: 'Atendem vilas com entrada estreita?',
        a: 'Sim. Atendemos casas de vila, sobrados e prédios do Catete.',
      },
    ],
  },
  {
    nome: 'Glória',
    em: 'na Glória',
    regiao: 'Zona Sul',
    h1: 'Desentupidora na Glória, 24 horas por dia',
    vizinhos: ['Catete', 'Lapa', 'Santa Teresa', 'Centro'],
    referencias: ['Rua da Glória', 'Rua do Russel', 'Rua Cândido Mendes', 'Outeiro da Glória'],
    imovel: 'Prédios residenciais antigos, hotéis, pequenos comércios e imóveis nas subidas para Santa Teresa.',
    problema:
      'Banheiros antigos têm caixas sifonadas pequenas e ramais com pouca inclinação. Cabelo e sabão se acumulam e o ralo do box passa a devolver água a cada banho.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'A Glória fica entre o Centro e a Zona Sul, com prédios antigos na Rua do Russel e na Rua da Glória e ruas íngremes, como a Cândido Mendes, que sobem em direção a Santa Teresa. É um bairro de apartamentos compactos e banheiros que já passaram por muitas reformas sem troca da tubulação.',
    faq: [
      {
        q: 'O ralo do box enche de água durante o banho. É o ralo ou o cano?',
        a: 'Se a limpeza da grelha e da caixa sifonada não resolve, a obstrução está no ramal, depois do ralo. É preciso desentupir esse trecho.',
      },
      {
        q: 'Vocês atendem hotéis e pousadas da Glória?',
        a: 'Sim. Atendemos imóveis residenciais e comerciais, incluindo hotéis, pousadas e hostels.',
      },
      {
        q: 'Atendem nas ruas que sobem para Santa Teresa?',
        a: 'Sim, atendemos a Glória inteira, 24 horas.',
      },
    ],
  },
  {
    nome: 'Humaitá',
    em: 'no Humaitá',
    regiao: 'Zona Sul',
    h1: 'Desentupidora perto de você no Humaitá',
    vizinhos: ['Botafogo', 'Jardim Botânico', 'Lagoa'],
    referencias: ['Rua Humaitá', 'Largo dos Leões', 'Rua Visconde de Silva', 'Cobal do Humaitá'],
    imovel: 'Prédios residenciais de porte médio, casas em ruas internas e polo de bares e restaurantes.',
    problema:
      'A gordura das cozinhas, residenciais e comerciais, vai para caixas que nem sempre são limpas no intervalo certo. A caixa cheia provoca mau cheiro e trava o escoamento das pias.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Pequeno e residencial, o Humaitá se organiza em torno da Rua Humaitá e do Largo dos Leões, com ruas tranquilas como a Visconde de Silva. O bairro também é conhecido pelos bares e restaurantes da Cobal, que funcionam até tarde e dependem de cozinha em pleno funcionamento.',
    faq: [
      {
        q: 'O cheiro de gordura sobe pela garagem do prédio. De onde vem?',
        a: 'Quase sempre da caixa de gordura coletiva, que costuma ficar na garagem ou no pátio. Quando ela está cheia, o cheiro escapa pela tampa.',
      },
      {
        q: 'De quanto em quanto tempo um bar ou restaurante deve limpar a caixa de gordura?',
        a: 'Depende do volume da cozinha. Casas com fritura e movimento diário precisam de limpezas muito mais frequentes do que uma residência.',
      },
      {
        q: 'Vocês atendem o Humaitá à noite?',
        a: 'Sim. O atendimento é 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jardim Botânico',
    em: 'no Jardim Botânico',
    regiao: 'Zona Sul',
    h1: 'Desentupimento no Jardim Botânico com atendimento 24 horas',
    vizinhos: ['Gávea', 'Lagoa', 'Humaitá', 'Leblon'],
    referencias: ['Rua Jardim Botânico', 'Rua Pacheco Leão', 'Rua Lopes Quintas', 'Parque Lage'],
    imovel: 'Casas e pequenos prédios em ruas muito arborizadas, parte delas junto à encosta da floresta.',
    problema:
      'Raízes penetram nas juntas das tubulações enterradas e formam uma trama que retém papel e gordura. A desobstrução simples abre passagem, mas as raízes voltam a crescer se não forem removidas da parede do tubo.',
    servico: 'hidrojateamento',
    abertura:
      'O Jardim Botânico é um dos bairros mais verdes do Rio, colado ao parque que lhe dá nome, ao Parque Lage e à floresta. Nas ruas Pacheco Leão e Lopes Quintas, casas com jardim e árvores antigas convivem com tubulações enterradas há muito tempo, um cenário propício à entrada de raízes na rede.',
    faq: [
      {
        q: 'Como saber se há raízes dentro do cano de esgoto?',
        a: 'O sinal mais comum é o entupimento que volta de tempos em tempos no mesmo trecho, principalmente perto de árvores. A confirmação é feita durante o serviço, pelo material retirado.',
      },
      {
        q: 'O hidrojateamento remove raízes?',
        a: 'Sim. O jato de alta pressão corta e arrasta as raízes finas e limpa a parede do tubo, o que retarda o novo crescimento.',
      },
      {
        q: 'Atendem casas no alto da Rua Pacheco Leão e no Horto?',
        a: 'Sim. Atendemos todo o Jardim Botânico, a qualquer hora.',
      },
    ],
  },
  {
    nome: 'Gávea',
    em: 'na Gávea',
    regiao: 'Zona Sul',
    h1: 'Desentupidora na Gávea para casas, prédios e comércios',
    vizinhos: ['Leblon', 'Jardim Botânico', 'Lagoa'],
    referencias: ['Rua Marquês de São Vicente', 'Praça Santos Dumont', 'Shopping da Gávea', 'PUC-Rio'],
    imovel: 'Prédios residenciais, casas em ruas de encosta e bares e restaurantes em torno da Praça Santos Dumont.',
    problema:
      'Banheiros de bares e restaurantes recebem muito mais uso do que foram projetados para receber, e papel em excesso e objetos descartados no vaso travam o ramal nas noites de maior movimento.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'A vida da Gávea gira em torno da Rua Marquês de São Vicente, que liga a Praça Santos Dumont à PUC-Rio. Perto da praça ficam os bares do Baixo Gávea; subindo a rua, prédios residenciais e casas de encosta. São dois tipos de chamado bem diferentes no mesmo bairro.',
    faq: [
      {
        q: 'O banheiro do meu bar entupiu no meio da noite. Vocês atendem na hora?',
        a: 'Sim. Atendemos a Gávea 24 horas, inclusive de madrugada e nos fins de semana, e chegamos em 20 minutos.',
      },
      {
        q: 'O que mais entope vaso sanitário de banheiro público?',
        a: 'Excesso de papel, papel-toalha, absorventes e objetos descartados na louça. Lixeiras à vista e avisos reduzem a frequência do problema.',
      },
      {
        q: 'Vocês atendem repúblicas e apartamentos de estudantes perto da PUC?',
        a: 'Sim. Atendemos qualquer tipo de imóvel residencial ou comercial.',
      },
    ],
  },
  {
    nome: 'Lagoa',
    em: 'na Lagoa',
    regiao: 'Zona Sul',
    h1: 'Desentupidora 24h na Lagoa',
    vizinhos: ['Ipanema', 'Leblon', 'Jardim Botânico', 'Humaitá', 'Copacabana'],
    referencias: ['Avenida Epitácio Pessoa', 'Avenida Borges de Medeiros', 'Rua Fonte da Saudade', 'Parque da Catacumba'],
    imovel: 'Edifícios residenciais altos, com garagens em subsolo e áreas comuns extensas.',
    problema:
      'Garagens abaixo do nível da rua dependem de ralos, canaletas e caixas de areia desobstruídos para escoar a água de chuva e de lavagem. Com sedimento acumulado, a água fica parada no subsolo.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O bairro da Lagoa contorna a Lagoa Rodrigo de Freitas pelas avenidas Epitácio Pessoa e Borges de Medeiros. É formado quase só por prédios residenciais, muitos com garagem em subsolo, em um terreno baixo e plano, onde a drenagem precisa funcionar bem.',
    faq: [
      {
        q: 'A canaleta da rampa da garagem está sempre com água. É entupimento?',
        a: 'Em geral, sim. Areia e folhas se depositam na canaleta e na caixa de areia e reduzem a vazão do tubo de saída.',
      },
      {
        q: 'Vocês fazem desobstrução preventiva para condomínios da Lagoa?',
        a: 'Sim. Atendemos condomínios tanto em emergências quanto em limpezas programadas da rede pluvial e de esgoto.',
      },
      {
        q: 'Atendem na Fonte da Saudade e na Epitácio Pessoa?',
        a: 'Sim, atendemos todo o entorno da Lagoa.',
      },
    ],
  },
  {
    nome: 'Leme',
    em: 'no Leme',
    regiao: 'Zona Sul',
    h1: 'Desentupimento no Leme: atendimento 24 horas',
    vizinhos: ['Copacabana', 'Botafogo', 'Urca'],
    referencias: ['Avenida Atlântica', 'Rua Gustavo Sampaio', 'Avenida Princesa Isabel', 'Pedra do Leme'],
    imovel: 'Prédios residenciais a poucos metros da praia, em um bairro pequeno e de poucas ruas.',
    problema:
      'Quem volta da praia leva areia para o chuveiro. Ela decanta na caixa sifonada e no ramal do box e, com o tempo, forma um depósito compacto que a água não consegue empurrar.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Leme é o trecho final da orla de Copacabana, entre a Avenida Princesa Isabel e a Pedra do Leme. Com apenas algumas ruas, como a Gustavo Sampaio, e todas a poucos passos da areia, é um bairro onde o ralo do banheiro sofre mais do que em qualquer outro lugar.',
    faq: [
      {
        q: 'Areia de praia realmente entope o ralo?',
        a: 'Sim. A areia é pesada, não é levada pela água e se acumula no fundo da caixa sifonada e nas curvas do cano.',
      },
      {
        q: 'Como evitar areia no ralo do apartamento?',
        a: 'Tirar o excesso de areia antes de entrar no banho e limpar a caixa sifonada com regularidade ajudam. Se a água já está voltando, é preciso desentupir o ramal.',
      },
      {
        q: 'Vocês atendem o Leme nos feriados?',
        a: 'Sim. Atendemos todos os dias, 24 horas, inclusive feriados.',
      },
    ],
  },

  // ---------------- CENTRO ----------------
  {
    nome: 'Centro',
    em: 'no Centro',
    regiao: 'Centro',
    h1: 'Desentupidora no Centro do Rio 24 horas',
    vizinhos: ['Lapa', 'Glória', 'Santa Teresa', 'Saúde'],
    referencias: ['Avenida Rio Branco', 'Avenida Presidente Vargas', 'Rua da Carioca', 'Praça XV'],
    imovel: 'Edifícios comerciais, lojas de rua, restaurantes, repartições e sobrados históricos.',
    problema:
      'Banheiros de uso coletivo, em prédios de escritórios e lojas, recebem centenas de usos por dia. Papel-toalha e outros materiais jogados no vaso travam o ramal e interditam o banheiro do andar inteiro.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'No Centro do Rio, quase todo imóvel é comercial: torres de escritórios na Avenida Rio Branco e na Presidente Vargas, lojas e sobrados na Rua da Carioca e no entorno da Praça XV. Entupimento aqui significa banheiro interditado e cozinha parada em horário de expediente.',
    faq: [
      {
        q: 'Vocês atendem prédios comerciais do Centro fora do horário de expediente?',
        a: 'Sim. O atendimento é 24 horas, então o serviço pode ser feito à noite ou no fim de semana, sem atrapalhar o funcionamento.',
      },
      {
        q: 'O banheiro do andar inteiro entupiu. É um vaso ou a coluna?',
        a: 'Quando todos os vasos do mesmo banheiro param ao mesmo tempo, a obstrução costuma estar no ramal coletivo ou na coluna, e não em uma louça só.',
      },
      {
        q: 'Atendem sobrados históricos com tubulação antiga?',
        a: 'Sim. O equipamento é escolhido de acordo com o material e o estado da tubulação.',
      },
    ],
  },
  {
    nome: 'Lapa',
    em: 'na Lapa',
    regiao: 'Centro',
    h1: 'Desentupidora na Lapa: bares, restaurantes e residências',
    vizinhos: ['Centro', 'Glória', 'Santa Teresa'],
    referencias: ['Arcos da Lapa', 'Rua do Lavradio', 'Avenida Mem de Sá', 'Rua do Riachuelo'],
    imovel: 'Sobrados antigos ocupados por bares, casas de show e restaurantes, além de prédios residenciais.',
    problema:
      'Cozinhas de bar trabalham com fritura a noite toda, e a gordura enche a caixa em pouco tempo. Em sobrados antigos, a caixa é pequena e o ramal de saída é estreito, o que acelera o transbordamento.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'A Lapa é o bairro da noite carioca. Em torno dos Arcos, na Avenida Mem de Sá e na Rua do Lavradio, sobrados centenários abrigam bares, casas de samba e restaurantes. Nos fundos dessas casas, cozinhas de alto volume despejam gordura em instalações construídas para outro uso.',
    faq: [
      {
        q: 'A caixa de gordura do meu bar na Lapa transborda toda semana. É normal?',
        a: 'Não. Isso indica caixa pequena para o volume da cozinha, limpeza em intervalo longo demais ou ramal de saída obstruído. O primeiro passo é limpar a caixa e desobstruir a saída.',
      },
      {
        q: 'Vocês atendem durante o funcionamento da casa?',
        a: 'Sim, atendemos a qualquer hora. Em emergência com a casa aberta, o trabalho é feito no ponto de acesso mais próximo da obstrução.',
      },
      {
        q: 'Atendem moradores da Rua do Riachuelo e arredores?',
        a: 'Sim. Atendemos residências e comércios em toda a Lapa.',
      },
    ],
  },
  {
    nome: 'Santa Teresa',
    em: 'em Santa Teresa',
    regiao: 'Centro',
    h1: 'Desentupimento em Santa Teresa, de dia ou de madrugada',
    vizinhos: ['Lapa', 'Glória', 'Catete', 'Laranjeiras', 'Centro'],
    referencias: ['Largo dos Guimarães', 'Rua Almirante Alexandrino', 'Largo do Curvelo', 'Rua Monte Alegre'],
    imovel: 'Casarões e casas antigas em ruas de ladeira, muitos convertidos em pousadas, ateliês e restaurantes.',
    problema:
      'A tubulação dos casarões desce o terreno em trechos longos de manilha de barro, com emendas que se deslocam com o tempo. Os desníveis nas juntas seguram resíduos e o cano entope.',
    servico: 'desentupimento-de-cano',
    abertura:
      'Santa Teresa ocupa o alto do morro, com casarões distribuídos ao longo da Rua Almirante Alexandrino, por onde passa o bonde, e em torno do Largo dos Guimarães e do Largo do Curvelo. As construções são antigas, os terrenos são inclinados e os canos percorrem longas distâncias até a rua.',
    faq: [
      {
        q: 'Minha casa em Santa Teresa fica abaixo do nível da rua. Isso dificulta o desentupimento?',
        a: 'Muda o caminho do esgoto, que segue por um trecho mais longo até a rede. O desentupimento é feito a partir das caixas de inspeção e dos acessos existentes no terreno.',
      },
      {
        q: 'Manilha de barro pode ser desentupida sem quebrar?',
        a: 'Sim. O desentupimento é feito por dentro. Se for encontrada manilha quebrada ou desabada, isso é informado antes de qualquer outra intervenção.',
      },
      {
        q: 'Vocês atendem pousadas e hostels do bairro?',
        a: 'Sim. O atendimento é residencial e comercial.',
      },
    ],
  },

  // ---------------- ZONA NORTE ----------------
  {
    nome: 'São Cristóvão',
    em: 'em São Cristóvão',
    regiao: 'Zona Norte',
    h1: 'Desentupidora 24 horas em São Cristóvão',
    vizinhos: ['Maracanã', 'Benfica', 'Mangueira', 'Caju'],
    referencias: ['Quinta da Boa Vista', 'Campo de São Cristóvão', 'Rua São Luiz Gonzaga', 'Feira de São Cristóvão'],
    imovel: 'Galpões, indústrias, comércio atacadista, restaurantes e casas antigas.',
    problema:
      'Redes de galpões e de cozinhas de grande porte têm trechos longos e diâmetro maior. Gordura industrial e sedimento formam camadas espessas, que o desentupimento comum não remove por completo.',
    servico: 'hidrojateamento',
    abertura:
      'São Cristóvão tem perfil diferente do resto da Zona Norte: é um bairro de galpões, fábricas, transportadoras e comércio, em torno do Campo de São Cristóvão e da Rua São Luiz Gonzaga, com a Quinta da Boa Vista ao lado. A Feira de São Cristóvão, com dezenas de restaurantes, é um dos maiores polos de cozinha comercial da cidade.',
    faq: [
      {
        q: 'Vocês atendem galpões e indústrias em São Cristóvão?',
        a: 'Sim. Atendemos empresas de qualquer porte, 24 horas por dia.',
      },
      {
        q: 'Quando o hidrojateamento é melhor do que o desentupimento comum?',
        a: 'Em redes longas, de diâmetro maior, ou com gordura e sedimento aderidos à parede do tubo. O jato de alta pressão limpa toda a extensão, não só o ponto obstruído.',
      },
      {
        q: 'Atendem restaurantes e barracas com cozinha?',
        a: 'Sim. Fazemos desentupimento de pia, de ralo e limpeza de caixa de gordura em cozinhas comerciais.',
      },
    ],
  },
  {
    nome: 'Tijuca',
    em: 'na Tijuca',
    regiao: 'Zona Norte',
    h1: 'Desentupidora na Tijuca: chegamos em 20 minutos',
    vizinhos: ['Vila Isabel', 'Maracanã', 'Andaraí', 'Grajaú'],
    referencias: ['Praça Saens Peña', 'Rua Conde de Bonfim', 'Rua Haddock Lobo', 'Rua Uruguai'],
    imovel: 'Prédios residenciais de várias épocas, com forte comércio de rua em torno da Praça Saens Peña.',
    problema:
      'Os edifícios das décadas de 1950 a 1970 têm colunas que nunca passaram por limpeza interna. A gordura e a ferrugem reduzem o diâmetro útil e basta um resíduo maior para fechar a prumada.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'A Tijuca é o maior bairro residencial da Zona Norte, cortado pela Rua Conde de Bonfim, com centro comercial na Praça Saens Peña. Entre a Haddock Lobo e a Rua Uruguai, há prédios de todas as idades, e os mais antigos concentram os chamados de coluna entupida.',
    faq: [
      {
        q: 'A coluna do prédio já foi desentupida e entupiu de novo em poucos meses. Por quê?',
        a: 'Porque a obstrução foi aberta, mas a crosta continua na parede do tubo. Nesses casos, a limpeza completa da coluna por hidrojateamento dá resultado mais duradouro.',
      },
      {
        q: 'Vocês atendem lojas e restaurantes da Praça Saens Peña?',
        a: 'Sim. Atendemos comércio e residências em toda a Tijuca.',
      },
      {
        q: 'Atendem a Tijuca de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Vila Isabel',
    em: 'em Vila Isabel',
    regiao: 'Zona Norte',
    h1: 'Desentupimento em Vila Isabel 24h',
    vizinhos: ['Tijuca', 'Maracanã', 'Grajaú', 'Andaraí'],
    referencias: ['Boulevard 28 de Setembro', 'Praça Barão de Drummond', 'Rua Teodoro da Silva', 'Hospital Universitário Pedro Ernesto'],
    imovel: 'Casas, vilas e prédios baixos, com bares e restaurantes tradicionais ao longo do Boulevard.',
    problema:
      'Nas cozinhas de casa e de botequim, o óleo de fritura e os restos de comida descem pela pia e se solidificam no sifão e no ramal, até a água parar de descer.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Vila Isabel se estende ao longo do Boulevard 28 de Setembro, da Praça Barão de Drummond até o Maracanã. É bairro de botequins tradicionais, vilas e casas, com ruas residenciais como a Teodoro da Silva. Tanto nas casas quanto nos bares, a cozinha é o ponto que mais entope.',
    faq: [
      {
        q: 'Posso jogar óleo de fritura na pia se abrir a água quente junto?',
        a: 'Não. O óleo esfria alguns metros depois e gruda no cano do mesmo jeito. O correto é guardar o óleo usado em um recipiente e descartá-lo em ponto de coleta.',
      },
      {
        q: 'Moro em casa de vila e a pia de todas as casas está lenta. O que é?',
        a: 'Provavelmente a caixa de gordura ou o ramal comum da vila está obstruído. O serviço precisa ser feito no trecho coletivo.',
      },
      {
        q: 'Vocês atendem perto do Hospital Pedro Ernesto e da UERJ?',
        a: 'Sim, atendemos toda Vila Isabel.',
      },
    ],
  },
  {
    nome: 'Maracanã',
    em: 'no Maracanã',
    regiao: 'Zona Norte',
    h1: 'Desentupidora no Maracanã, 24 horas',
    vizinhos: ['Tijuca', 'Vila Isabel', 'São Cristóvão'],
    referencias: ['Estádio do Maracanã', 'Avenida Maracanã', 'Rua São Francisco Xavier', 'UERJ'],
    imovel: 'Prédios residenciais e comércio em área plana e baixa, próxima ao Rio Maracanã.',
    problema:
      'Por ser uma área baixa, o bairro recebe a água de chuva que desce dos bairros vizinhos. Ralos, caixas de areia e tubos de queda com sedimento não dão conta, e garagens e térreos alagam.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O bairro do Maracanã fica no entorno do estádio e da UERJ, entre a Avenida Maracanã e a Rua São Francisco Xavier. É uma região plana, cortada pelo Rio Maracanã, onde as chuvas de verão costumam acumular água nas ruas e testar a drenagem de cada prédio.',
    faq: [
      {
        q: 'Depois de cada temporal, o ralo da garagem fica entupido de lama. O que fazer?',
        a: 'É preciso remover a lama dos ralos e da caixa de areia e desobstruir o tubo de saída. Sem isso, o sedimento endurece e a vazão diminui a cada chuva.',
      },
      {
        q: 'A água da rua pode voltar pelo ralo do prédio?',
        a: 'Pode, quando a rede pública está sobrecarregada. Manter a tubulação interna limpa não impede a cheia da rua, mas faz a água escoar assim que o nível baixa.',
      },
      {
        q: 'Atendem em dia de jogo no estádio?',
        a: 'Sim. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Grajaú',
    em: 'no Grajaú',
    regiao: 'Zona Norte',
    h1: 'Desentupidora 24h no Grajaú',
    vizinhos: ['Vila Isabel', 'Andaraí', 'Engenho Novo'],
    referencias: ['Praça Edmundo Rego', 'Avenida Engenheiro Richard', 'Rua Barão de Mesquita', 'Rua Borda do Mato'],
    imovel: 'Casas com quintal e prédios baixos em ruas largas e arborizadas.',
    problema:
      'As árvores das calçadas e dos quintais lançam raízes em direção às manilhas de esgoto. Elas entram pelas juntas, crescem dentro do tubo e seguram tudo o que passa.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Grajaú foi planejado como bairro-jardim, e isso ainda se vê na Avenida Engenheiro Richard e no entorno da Praça Edmundo Rego: ruas largas, muitas árvores e casas com quintal. Bom para morar, mas exigente com as tubulações enterradas, que convivem com raízes por todos os lados.',
    faq: [
      {
        q: 'O esgoto da minha casa no Grajaú entope sempre no mesmo lugar do quintal. Por quê?',
        a: 'Entupimento repetido no mesmo ponto indica raiz dentro do tubo, junta deslocada ou manilha quebrada naquele trecho.',
      },
      {
        q: 'Preciso cortar a árvore para resolver?',
        a: 'Não necessariamente. O desentupimento ou o hidrojateamento remove as raízes de dentro do cano. A decisão sobre a árvore é do proprietário e depende das regras da prefeitura.',
      },
      {
        q: 'Vocês atendem na parte alta do bairro, perto da Rua Borda do Mato?',
        a: 'Sim, atendemos todo o Grajaú.',
      },
    ],
  },
  {
    nome: 'Andaraí',
    em: 'no Andaraí',
    regiao: 'Zona Norte',
    h1: 'Desentupimento no Andaraí com chegada em 20 minutos',
    vizinhos: ['Tijuca', 'Grajaú', 'Vila Isabel'],
    referencias: ['Rua Barão de Mesquita', 'Rua Maxwell', 'Rua Leopoldo', 'Hospital Federal do Andaraí'],
    imovel: 'Prédios residenciais de porte médio, casas e antigas vilas operárias.',
    problema:
      'Em apartamentos com um único banheiro para toda a família, qualquer obstrução no vaso vira urgência. Papel em excesso e objetos pequenos são as causas mais frequentes.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Andaraí fica entre a Tijuca e o Grajaú, ao longo das ruas Barão de Mesquita, Maxwell e Leopoldo. É um bairro residencial de prédios médios e casas antigas, onde o chamado típico é o da família que ficou sem o único banheiro da casa.',
    faq: [
      {
        q: 'Caiu um objeto no vaso e ele entupiu. Dá para recuperar?',
        a: 'Muitas vezes, sim. O objeto costuma ficar preso no sifão da louça e pode ser retirado durante o desentupimento.',
      },
      {
        q: 'O vaso está entupido e só tenho um banheiro. Em quanto tempo vocês chegam?',
        a: 'Chegamos em 20 minutos. O atendimento no Andaraí é 24 horas.',
      },
      {
        q: 'Arame e cabide funcionam para desentupir o vaso?',
        a: 'Não são indicados. Podem riscar a louça e empurrar a obstrução para um ponto mais difícil de alcançar.',
      },
    ],
  },
  {
    nome: 'Méier',
    em: 'no Méier',
    regiao: 'Zona Norte',
    h1: 'Desentupidora no Méier 24 horas',
    vizinhos: ['Engenho de Dentro', 'Cachambi', 'Todos os Santos', 'Lins de Vasconcelos'],
    referencias: ['Rua Dias da Cruz', 'Jardim do Méier', 'Rua Silva Rabelo', 'Rua Arquias Cordeiro'],
    imovel: 'Prédios residenciais e comércio de rua intenso, com lanchonetes, restaurantes e galerias.',
    problema:
      'Lanchonetes e restaurantes instalados em lojas de prédios residenciais usam a mesma rede dos apartamentos. A gordura das cozinhas comerciais satura a caixa coletiva antes do prazo de limpeza.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Méier é o centro comercial da Zona Norte. A Rua Dias da Cruz concentra lojas, galerias, lanchonetes e restaurantes, quase sempre no térreo de prédios residenciais, e o movimento se espalha até o Jardim do Méier e a Rua Arquias Cordeiro, junto à linha do trem.',
    faq: [
      {
        q: 'A lanchonete do térreo pode causar entupimento nos apartamentos?',
        a: 'Pode, se a cozinha comercial despeja na mesma caixa de gordura ou no mesmo ramal do prédio e a limpeza não acompanha o volume.',
      },
      {
        q: 'Vocês atendem galerias e lojas da Dias da Cruz?',
        a: 'Sim. Atendemos lojas, galerias, restaurantes e residências do Méier.',
      },
      {
        q: 'Fazem limpeza de caixa de gordura de condomínio?',
        a: 'Sim, tanto em emergência quanto de forma programada.',
      },
    ],
  },
  {
    nome: 'Engenho de Dentro',
    em: 'no Engenho de Dentro',
    regiao: 'Zona Norte',
    h1: 'Desentupidora 24h no Engenho de Dentro',
    vizinhos: ['Méier', 'Todos os Santos', 'Abolição', 'Pilares'],
    referencias: ['Estádio Nilton Santos', 'Rua Dr. Padilha', 'Avenida Amaro Cavalcanti', 'Rua Adolfo Bergamini'],
    imovel: 'Casas antigas, vilas e pequenos prédios em ruas residenciais.',
    problema:
      'Em vilas e casas de fundos, um único ramal de esgoto atende várias moradias até chegar à rua. Quando esse ramal fecha, o esgoto volta na casa mais próxima da saída.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Engenho de Dentro cresceu em torno da ferrovia e hoje é conhecido pelo Estádio Nilton Santos, o Engenhão. Nas ruas residenciais, como a Adolfo Bergamini e a Dr. Padilha, predominam casas antigas e vilas, com instalações de esgoto compartilhadas entre vizinhos.',
    faq: [
      {
        q: 'O esgoto voltou só na minha casa, que é a primeira da vila. O problema é meu?',
        a: 'Provavelmente o ramal comum está entupido depois da sua casa. Como ela é a mais próxima da saída, é nela que o esgoto de todas as outras aparece primeiro.',
      },
      {
        q: 'Onde ficam as caixas de inspeção em uma vila?',
        a: 'Em geral ao longo do corredor central, sob tampas de concreto ou de ferro. É por elas que o desentupimento é feito.',
      },
      {
        q: 'Vocês atendem perto do Engenhão?',
        a: 'Sim, atendemos todo o Engenho de Dentro, 24 horas.',
      },
    ],
  },
  {
    nome: 'Cachambi',
    em: 'no Cachambi',
    regiao: 'Zona Norte',
    h1: 'Desentupimento no Cachambi: condomínios, casas e lojas',
    vizinhos: ['Méier', 'Maria da Graça', 'Del Castilho', 'Engenho de Dentro'],
    referencias: ['Rua Cachambi', 'Avenida Dom Hélder Câmara', 'NorteShopping', 'Rua Honório'],
    imovel: 'Condomínios residenciais com várias torres, construídos nas últimas décadas, e casas mais antigas.',
    problema:
      'Em condomínios com muitas unidades, a rede interna é extensa e passa por caixas de passagem ao longo do terreno. Gordura e resíduos se acumulam nos trechos horizontais longos e provocam retorno em blocos inteiros.',
    servico: 'hidrojateamento',
    abertura:
      'O Cachambi mudou de cara com a chegada dos grandes condomínios residenciais perto da Avenida Dom Hélder Câmara e do NorteShopping. Hoje convivem no bairro casas antigas em ruas como a Honório e conjuntos com centenas de apartamentos, que exigem manutenção de rede em outra escala.',
    faq: [
      {
        q: 'O condomínio tem várias torres. Dá para limpar toda a rede de uma vez?',
        a: 'Sim. O hidrojateamento pode ser feito por trechos, de caixa em caixa, cobrindo toda a rede horizontal do condomínio.',
      },
      {
        q: 'De quanto em quanto tempo um condomínio grande deve limpar a rede?',
        a: 'Depende do número de unidades e do histórico de entupimentos. Condomínios com retorno frequente costumam adotar limpeza preventiva periódica.',
      },
      {
        q: 'Vocês atendem casas do Cachambi também?',
        a: 'Sim. Atendemos casas, apartamentos, condomínios e comércio.',
      },
    ],
  },
  {
    nome: 'Madureira',
    em: 'em Madureira',
    regiao: 'Zona Norte',
    h1: 'Desentupidora em Madureira para comércio e residências',
    vizinhos: ['Oswaldo Cruz', 'Cascadura', 'Vaz Lobo', 'Campinho'],
    referencias: ['Mercadão de Madureira', 'Parque Madureira', 'Estrada do Portela', 'Avenida Ministro Edgard Romero'],
    imovel: 'Comércio popular de grande movimento, galerias, lojas de rua e casas.',
    problema:
      'Lojas e galerias com banheiros pequenos e grande fluxo de público têm entupimentos frequentes de vaso e de ramal, que em horário comercial significam banheiro fechado para clientes e funcionários.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'Madureira é o maior polo de comércio popular do subúrbio carioca. O Mercadão, a Estrada do Portela e a Avenida Ministro Edgard Romero recebem milhares de pessoas por dia, e as lojas e galerias dependem de banheiros e cozinhas funcionando do abrir ao fechar das portas.',
    faq: [
      {
        q: 'Vocês atendem lojas e boxes em Madureira antes da abertura do comércio?',
        a: 'Sim. O atendimento é 24 horas, e o serviço pode ser feito de madrugada ou bem cedo.',
      },
      {
        q: 'O banheiro da loja entope toda semana. Tem solução?',
        a: 'Entupimento recorrente indica ramal parcialmente obstruído. Além de desentupir o vaso, é preciso limpar o ramal até a caixa de inspeção.',
      },
      {
        q: 'Atendem casas em Madureira e nos arredores do Parque?',
        a: 'Sim, atendemos residências e comércio em todo o bairro.',
      },
    ],
  },
  {
    nome: 'Irajá',
    em: 'em Irajá',
    regiao: 'Zona Norte',
    h1: 'Desentupimento 24 horas em Irajá',
    vizinhos: ['Vila da Penha', 'Vista Alegre', 'Vicente de Carvalho', 'Colégio'],
    referencias: ['Avenida Monsenhor Félix', 'Avenida Pastor Martin Luther King Jr.', 'Estrada da Água Grande', 'Ceasa'],
    imovel: 'Casas com quintal, sobrados e pequenos prédios, em bairro predominantemente residencial.',
    problema:
      'Em casas, a caixa de gordura fica no quintal ou na lateral e costuma ser esquecida por anos. Cheia, ela endurece na superfície, deixa de reter a gordura e passa a entupir o esgoto da casa inteira.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Irajá é um bairro residencial tradicional da Zona Norte, com casas e sobrados nas ruas internas e comércio na Avenida Monsenhor Félix e na Estrada da Água Grande. Nas margens da Avenida Brasil fica a Ceasa, a central de abastecimento da cidade.',
    faq: [
      {
        q: 'Não sei onde fica a caixa de gordura da minha casa. Como achar?',
        a: 'Ela costuma estar do lado de fora, perto da parede da cozinha, sob uma tampa quadrada ou redonda de concreto ou plástico.',
      },
      {
        q: 'A caixa de gordura da casa nunca foi limpa. Tem problema?',
        a: 'Tem. A gordura acumulada endurece, deixa de ser retida e segue para o esgoto, onde causa entupimentos mais difíceis.',
      },
      {
        q: 'Vocês atendem Irajá aos domingos?',
        a: 'Sim. Atendemos todos os dias, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Penha',
    em: 'na Penha',
    regiao: 'Zona Norte',
    h1: 'Desentupidora na Penha: atendimento 24 horas',
    vizinhos: ['Olaria', 'Penha Circular', 'Brás de Pina', 'Vila da Penha'],
    referencias: ['Igreja da Penha', 'Largo da Penha', 'Rua dos Romeiros', 'Avenida Lobo Júnior'],
    imovel: 'Casas e sobrados antigos, muitos ampliados ao longo dos anos com puxadinhos e segundo pavimento.',
    problema:
      'Cada ampliação liga novos banheiros e cozinhas a um cano dimensionado para a casa original. O tubo antigo, já estreitado pela crosta, entope com o aumento do volume.',
    servico: 'desentupimento-de-cano',
    abertura:
      'A Penha é conhecida pela igreja no alto do penhasco, que se vê de boa parte da Zona Norte. Aos pés dela, no Largo da Penha, na Rua dos Romeiros e nas ruas próximas à Avenida Lobo Júnior, ficam casas e sobrados de várias gerações da mesma família.',
    faq: [
      {
        q: 'Construí mais um andar e os canos começaram a entupir. Tem relação?',
        a: 'Tem. Mais banheiros e cozinhas na mesma tubulação aumentam o volume. Se o cano original já estava parcialmente obstruído, ele passa a entupir.',
      },
      {
        q: 'A água do tanque sai pelo ralo do quintal. O que é?',
        a: 'É sinal de obstrução no cano que recebe os dois pontos. A água do tanque não consegue seguir e sai pelo ralo, que está mais baixo.',
      },
      {
        q: 'Atendem perto da Igreja da Penha?',
        a: 'Sim, atendemos todo o bairro da Penha.',
      },
    ],
  },
  {
    nome: 'Olaria',
    em: 'em Olaria',
    regiao: 'Zona Norte',
    h1: 'Desentupimento em Olaria, a qualquer hora do dia',
    vizinhos: ['Ramos', 'Penha', 'Bonsucesso'],
    referencias: ['Rua Uranos', 'Rua Leopoldina Rego', 'Rua Bariri', 'Estação de Olaria'],
    imovel: 'Casas com quintal e área de serviço externa, vilas e pequenos prédios.',
    problema:
      'Ralos de quintal e de área de serviço recebem terra, folhas, pelos de animais e fiapos de roupa. Esse material se deposita na caixa sifonada e no ramal até a água parar de escoar.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'Olaria é um bairro residencial da Leopoldina, cortado pela linha do trem, com comércio nas ruas Uranos e Leopoldina Rego. É bairro de casas e vilas com quintal, onde boa parte da vida doméstica, do tanque à lavagem do piso, acontece do lado de fora.',
    faq: [
      {
        q: 'O ralo do quintal entope sempre que lavo o chão. Por quê?',
        a: 'A lavagem leva terra e folhas para o ralo. Se o ramal já tem depósito, esse material extra é suficiente para fechar a passagem.',
      },
      {
        q: 'Pelo de cachorro entope ralo?',
        a: 'Entope. Pelos se enroscam com fiapos e sabão e formam uma manta dentro da caixa sifonada e do cano.',
      },
      {
        q: 'Vocês atendem Olaria à noite?',
        a: 'Sim. O atendimento é 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Ramos',
    em: 'em Ramos',
    regiao: 'Zona Norte',
    h1: 'Desentupidora 24 horas em Ramos',
    vizinhos: ['Olaria', 'Bonsucesso', 'Penha'],
    referencias: ['Rua Uranos', 'Rua Cardoso de Morais', 'Rua Leopoldina Rego', 'Estação de Ramos'],
    imovel: 'Casas antigas, sobrados com comércio no térreo e pequenos prédios.',
    problema:
      'Imóveis antigos em terreno plano têm ramais de esgoto com pouca inclinação. O esgoto corre devagar, os sólidos decantam no caminho e o ramal fecha aos poucos.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Ramos é vizinho de Olaria e Bonsucesso e divide com eles as ruas Uranos e Cardoso de Morais, eixos de comércio da Leopoldina. O bairro é plano, de casas antigas e sobrados, e tem tradição no samba e no carnaval de rua.',
    faq: [
      {
        q: 'Por que o esgoto de casa antiga em terreno plano entope mais?',
        a: 'Com pouca inclinação, a água perde velocidade e não arrasta os sólidos, que ficam depositados ao longo do tubo.',
      },
      {
        q: 'O mau cheiro na calçada em frente de casa é do meu esgoto?',
        a: 'Pode ser. Caixa de inspeção cheia, perto da calçada, é sinal de entupimento na ligação do imóvel com a rede da rua.',
      },
      {
        q: 'Atendem sobrados com loja embaixo?',
        a: 'Sim. Atendemos residências e comércio em Ramos.',
      },
    ],
  },
  {
    nome: 'Bonsucesso',
    em: 'em Bonsucesso',
    regiao: 'Zona Norte',
    h1: 'Desentupidora em Bonsucesso: empresas, lojas e casas',
    vizinhos: ['Ramos', 'Olaria', 'Manguinhos', 'Higienópolis'],
    referencias: ['Praça das Nações', 'Rua Cardoso de Morais', 'Avenida dos Democráticos', 'Hospital Federal de Bonsucesso'],
    imovel: 'Comércio, oficinas, galpões e empresas próximos à Avenida Brasil, além de casas e prédios residenciais.',
    problema:
      'Oficinas, galpões e cozinhas de empresas mandam para a rede resíduos mais pesados do que os de uma casa: graxa, areia, sedimento. Esse material adere ao tubo e só sai com lavagem de alta pressão.',
    servico: 'hidrojateamento',
    abertura:
      'Bonsucesso é um bairro de trabalho. Em torno da Praça das Nações e da Rua Cardoso de Morais fica o comércio; perto da Avenida Brasil e da Avenida dos Democráticos, galpões, oficinas e empresas. As redes desses imóveis recebem uso pesado e precisam de limpeza à altura.',
    faq: [
      {
        q: 'Vocês atendem empresas em Bonsucesso com serviço programado?',
        a: 'Sim. Além das emergências, fazemos desobstrução e hidrojateamento programados para empresas.',
      },
      {
        q: 'O ralo da oficina entope com areia e graxa. O que resolve?',
        a: 'A limpeza da caixa de retenção e o hidrojateamento do ramal, que removem o material aderido à parede do tubo.',
      },
      {
        q: 'Atendem residências do bairro?',
        a: 'Sim. Atendemos casas e apartamentos em Bonsucesso, 24 horas.',
      },
    ],
  },
  {
    nome: 'Vila da Penha',
    em: 'na Vila da Penha',
    regiao: 'Zona Norte',
    h1: 'Desentupidora na Vila da Penha 24h',
    vizinhos: ['Irajá', 'Vicente de Carvalho', 'Vista Alegre', 'Penha'],
    referencias: ['Largo do Bicão', 'Avenida Meriti', 'Avenida Brás de Pina', 'Carioca Shopping'],
    imovel: 'Casas de bom padrão, prédios residenciais e polo de bares e restaurantes.',
    problema:
      'Pias de cozinha de restaurantes e de casas com muito uso acumulam gordura e resíduos no sifão e no trecho até a caixa de gordura. A água primeiro escoa devagar e depois para.',
    servico: 'desentupimento-de-pia',
    abertura:
      'A Vila da Penha é um dos bairros residenciais mais procurados da Zona Norte, com casas e prédios em ruas tranquilas e um polo gastronômico movimentado no Largo do Bicão e nas avenidas Meriti e Brás de Pina. O Carioca Shopping fica no bairro.',
    faq: [
      {
        q: 'A pia da cozinha escoa devagar há semanas. Preciso esperar entupir de vez?',
        a: 'Não. Escoamento lento já é entupimento parcial. Resolver nessa fase é mais simples do que depois que a água para.',
      },
      {
        q: 'Vocês atendem restaurantes do Largo do Bicão?',
        a: 'Sim. Atendemos bares, restaurantes e residências da Vila da Penha, a qualquer hora.',
      },
      {
        q: 'O sifão da pia é flexível, sanfonado. Isso atrapalha?',
        a: 'Sifões sanfonados acumulam resíduos nas dobras e entopem com mais facilidade do que os lisos.',
      },
    ],
  },

  // ---------------- ZONA OESTE ----------------
  {
    nome: 'Barra da Tijuca',
    em: 'na Barra da Tijuca',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora na Barra da Tijuca 24 horas',
    vizinhos: ['Recreio dos Bandeirantes', 'Jacarepaguá', 'Itanhangá', 'Joá'],
    referencias: ['Avenida das Américas', 'Avenida Ayrton Senna', 'Avenida Lúcio Costa', 'Jardim Oceânico'],
    imovel: 'Grandes condomínios residenciais com várias torres, shoppings, centros empresariais e casas em condomínios fechados.',
    problema:
      'As redes internas dos condomínios percorrem centenas de metros até a ligação com a rua, passando por caixas de passagem e, em alguns casos, por estações elevatórias. Gordura e sedimento nos trechos horizontais reduzem a vazão do conjunto todo.',
    servico: 'hidrojateamento',
    abertura:
      'A Barra da Tijuca se organiza ao longo da Avenida das Américas e da Avenida Lúcio Costa, na orla, com condomínios que funcionam como pequenos bairros. Do Jardim Oceânico à Avenida Ayrton Senna, são torres residenciais, shoppings e centros empresariais com redes de esgoto e de gordura próprias e extensas.',
    faq: [
      {
        q: 'Vocês atendem condomínios grandes da Barra, com várias torres?',
        a: 'Sim. Atendemos condomínios residenciais e comerciais, em emergências e em limpezas programadas de rede.',
      },
      {
        q: 'O esgoto voltou no térreo de uma das torres. Por onde começar?',
        a: 'Pela caixa de passagem logo depois da torre. Se ela estiver cheia, a obstrução está adiante, na rede horizontal do condomínio.',
      },
      {
        q: 'Atendem salas comerciais e lojas de shopping?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas.',
      },
    ],
  },
  {
    nome: 'Recreio dos Bandeirantes',
    em: 'no Recreio dos Bandeirantes',
    regiao: 'Zona Oeste',
    h1: 'Desentupimento no Recreio dos Bandeirantes 24h',
    vizinhos: ['Barra da Tijuca', 'Vargem Grande', 'Vargem Pequena'],
    referencias: ['Avenida das Américas', 'Avenida Glaucio Gil', 'Avenida Lúcio Costa', 'Praia do Pontal'],
    imovel: 'Prédios residenciais baixos, casas em condomínio e comércio de bairro, em terreno plano e arenoso.',
    problema:
      'O solo arenoso e a proximidade da praia levam areia para ralos de box, de varanda e de garagem. Nas chuvas, a areia das ruas entra pelas canaletas e assenta nas tubulações.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Recreio dos Bandeirantes fica depois da Barra, entre a Avenida das Américas e a orla da Avenida Lúcio Costa, até a Praia do Pontal. Os prédios são baixos, as ruas são planas e a areia está por toda parte, inclusive dentro dos ralos.',
    faq: [
      {
        q: 'O ralo da varanda entope com areia trazida pelo vento. É comum no Recreio?',
        a: 'Sim. Em imóveis próximos à orla, a areia se acumula em ralos de varanda e de áreas abertas e precisa ser removida periodicamente.',
      },
      {
        q: 'Vocês atendem casas em condomínio fechado?',
        a: 'Sim. Basta liberar a entrada na portaria.',
      },
      {
        q: 'Atendem o Recreio de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Jacarepaguá',
    em: 'em Jacarepaguá',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora em Jacarepaguá: chegamos em 20 minutos',
    vizinhos: ['Freguesia', 'Taquara', 'Barra da Tijuca', 'Curicica'],
    referencias: ['Estrada dos Bandeirantes', 'Estrada de Jacarepaguá', 'Avenida Geremário Dantas', 'Linha Amarela'],
    imovel: 'Casas, condomínios horizontais e verticais, comércio e empresas, em uma região extensa.',
    problema:
      'Em terrenos grandes, o esgoto percorre um caminho longo da casa até a rua, com várias caixas de inspeção. Qualquer trecho com pouca queda ou com raiz vira ponto de obstrução.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Jacarepaguá é uma das maiores regiões da Zona Oeste, ligada ao resto da cidade pela Linha Amarela e cortada pela Estrada dos Bandeirantes e pela Avenida Geremário Dantas. Reúne casas em terrenos amplos, condomínios novos e muitas empresas.',
    faq: [
      {
        q: 'Minha casa tem um terreno grande e não sei onde o esgoto entupiu. Como vocês descobrem?',
        a: 'Abrindo as caixas de inspeção em sequência. A obstrução fica entre a última caixa cheia e a primeira vazia.',
      },
      {
        q: 'Vocês atendem empresas na Estrada dos Bandeirantes?',
        a: 'Sim. Atendemos residências, comércios e empresas em Jacarepaguá.',
      },
      {
        q: 'Jacarepaguá é grande. O tempo de chegada é o mesmo?',
        a: 'Sim. Chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Freguesia',
    em: 'na Freguesia',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora 24h na Freguesia (Jacarepaguá)',
    vizinhos: ['Pechincha', 'Anil', 'Taquara', 'Jacarepaguá'],
    referencias: ['Estrada dos Três Rios', 'Avenida Geremário Dantas', 'Estrada do Gabinal', 'Largo da Freguesia'],
    imovel: 'Prédios residenciais novos, casas e um polo de restaurantes e bares.',
    problema:
      'Prédios novos concentram muitas cozinhas em uma única caixa de gordura. Somada à gordura dos restaurantes do térreo, ela satura rápido e provoca mau cheiro e pia lenta em todo o edifício.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'A Freguesia é um dos sub-bairros mais procurados de Jacarepaguá. A Estrada dos Três Rios e a Geremário Dantas concentram restaurantes e lojas, e nas ruas ao redor, perto do Largo da Freguesia e da Estrada do Gabinal, sobem prédios residenciais novos.',
    faq: [
      {
        q: 'O prédio é novo e a caixa de gordura já transborda. Por quê?',
        a: 'Em prédios com muitas unidades, a caixa enche rápido. Se a limpeza não é feita no intervalo adequado ao número de apartamentos, ela transborda mesmo em construção recente.',
      },
      {
        q: 'Vocês atendem restaurantes da Estrada dos Três Rios?',
        a: 'Sim, a qualquer hora, inclusive depois do fechamento da cozinha.',
      },
      {
        q: 'Atendem casas na parte alta da Freguesia?',
        a: 'Sim, atendemos todo o bairro.',
      },
    ],
  },
  {
    nome: 'Taquara',
    em: 'na Taquara',
    regiao: 'Zona Oeste',
    h1: 'Desentupimento na Taquara 24 horas',
    vizinhos: ['Tanque', 'Pechincha', 'Freguesia', 'Jacarepaguá'],
    referencias: ['Estrada dos Bandeirantes', 'Estrada do Rio Grande', 'Avenida Nelson Cardoso', 'Largo da Taquara'],
    imovel: 'Casas com quintal, condomínios residenciais e comércio forte no entorno do Largo da Taquara.',
    problema:
      'Em casas que foram sendo reformadas, a tubulação mistura trechos de épocas e materiais diferentes. As emendas mal alinhadas viram ponto de retenção e o cano entope sempre no mesmo lugar.',
    servico: 'desentupimento-de-cano',
    abertura:
      'A Taquara é o centro comercial de Jacarepaguá. No Largo da Taquara e na Avenida Nelson Cardoso ficam lojas e serviços; pela Estrada do Rio Grande e pela Estrada dos Bandeirantes, casas com quintal e condomínios. O corredor do BRT passa pelo bairro.',
    faq: [
      {
        q: 'Reformei o banheiro e o cano passou a entupir. O que pode ter acontecido?',
        a: 'É comum cair resto de obra, como argamassa e rejunte, dentro da tubulação, ou a emenda do cano novo com o antigo ficar desalinhada.',
      },
      {
        q: 'Resto de cimento dentro do cano tem solução?',
        a: 'Na maioria dos casos, sim. O material é removido com equipamento adequado, de acordo com a quantidade e o ponto onde endureceu.',
      },
      {
        q: 'Vocês atendem lojas do Largo da Taquara?',
        a: 'Sim. Atendemos comércio e residências na Taquara.',
      },
    ],
  },
  {
    nome: 'Campo Grande',
    em: 'em Campo Grande',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora em Campo Grande, Rio de Janeiro, 24 horas',
    vizinhos: ['Santíssimo', 'Inhoaíba', 'Cosmos', 'Senador Vasconcelos'],
    referencias: ['Estrada do Mendanha', 'Avenida Cesário de Melo', 'Rua Coronel Agostinho', 'West Shopping'],
    imovel: 'Casas em terrenos amplos, loteamentos residenciais, condomínios novos e comércio no centro do bairro.',
    problema:
      'Casas com várias construções no mesmo terreno, como edícula e casa dos fundos, ligam tudo a um ramal único. O esgoto percorre um caminho longo e entope nas caixas de inspeção intermediárias.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Campo Grande é o bairro mais populoso do Rio e funciona como uma cidade dentro da cidade. O centro comercial fica em torno do calçadão da Rua Coronel Agostinho e da estação de trem; pela Estrada do Mendanha e pela Avenida Cesário de Melo se chega aos loteamentos e condomínios residenciais.',
    faq: [
      {
        q: 'Tenho duas casas no mesmo terreno em Campo Grande. O esgoto das duas pode entupir junto?',
        a: 'Sim. Se as duas despejam no mesmo ramal, uma obstrução depois do ponto de união faz o esgoto voltar nas duas casas.',
      },
      {
        q: 'Vocês atendem os sub-bairros e loteamentos de Campo Grande?',
        a: 'Sim. Informe a localização pelo WhatsApp ou por telefone ao chamar.',
      },
      {
        q: 'Atendem o comércio do calçadão?',
        a: 'Sim. Atendemos lojas, restaurantes e residências, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Bangu',
    em: 'em Bangu',
    regiao: 'Zona Oeste',
    h1: 'Desentupimento em Bangu: atendimento 24h',
    vizinhos: ['Padre Miguel', 'Senador Camará', 'Realengo'],
    referencias: ['Bangu Shopping', 'Rua Fonseca', 'Avenida Cônego Vasconcelos', 'Avenida Santa Cruz'],
    imovel: 'Casas e sobrados residenciais, com comércio concentrado no centro do bairro.',
    problema:
      'Cozinhas de casa com uso diário intenso mandam gordura e restos de comida para o cano. Onde não há caixa de gordura, ou ela está cheia, o material fecha o ramal da pia.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Bangu nasceu em torno de uma fábrica de tecidos, que hoje abriga o Bangu Shopping. O comércio se concentra ali, na Rua Fonseca e na Avenida Cônego Vasconcelos, e o restante do bairro é de casas. É conhecido como um dos lugares mais quentes da cidade.',
    faq: [
      {
        q: 'Minha casa em Bangu não tem caixa de gordura. Isso causa entupimento?',
        a: 'Causa. Sem a caixa, a gordura da pia vai direto para o esgoto, esfria e se acumula ao longo do cano.',
      },
      {
        q: 'Água fervente desentope a pia?',
        a: 'Pode aliviar um acúmulo recente de gordura, mas não resolve obstruções formadas. Em tubos de PVC, água fervente em excesso também pode deformar conexões.',
      },
      {
        q: 'Vocês atendem perto do Bangu Shopping e nas ruas residenciais?',
        a: 'Sim, atendemos todo o bairro de Bangu.',
      },
    ],
  },
  {
    nome: 'Realengo',
    em: 'em Realengo',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora 24 horas em Realengo',
    vizinhos: ['Bangu', 'Padre Miguel', 'Magalhães Bastos', 'Sulacap'],
    referencias: ['Avenida Santa Cruz', 'Rua Bernardo de Vasconcelos', 'Estrada da Água Branca', 'Parque Realengo Susana Naspolini'],
    imovel: 'Casas térreas e sobrados em ruas residenciais, além de conjuntos habitacionais.',
    problema:
      'Em casas com um banheiro só e muitos moradores, o vaso recebe uso constante. Descargas de baixo volume não arrastam o papel até o fim do ramal, e o acúmulo trava o escoamento.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'Realengo é um bairro residencial da Zona Oeste, às margens da linha do trem e da Avenida Santa Cruz, com tradição militar e escolar. No bairro fica o Parque Realengo Susana Naspolini. As ruas são de casas e sobrados, como na Bernardo de Vasconcelos e na Estrada da Água Branca.',
    faq: [
      {
        q: 'A descarga é fraca e o vaso vive entupindo. Uma coisa causa a outra?',
        a: 'Sim. Descarga com pouco volume não empurra o papel até a caixa de inspeção. Ele fica no ramal e se acumula a cada uso.',
      },
      {
        q: 'O vaso borbulha quando uso o chuveiro. O que significa?',
        a: 'Significa que o ramal que recebe o vaso e o ralo está parcialmente obstruído. O ar preso procura saída pela água do vaso.',
      },
      {
        q: 'Vocês atendem Realengo nos feriados?',
        a: 'Sim. Atendemos 24 horas, todos os dias, inclusive feriados.',
      },
    ],
  },
];
