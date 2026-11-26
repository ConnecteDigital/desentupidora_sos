// Bairros de Vila Velha. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const vilaVelha: BairroDados[] = [
  // ---------------- ORLA ----------------
  {
    nome: 'Praia da Costa',
    em: 'na Praia da Costa',
    regiao: 'Orla',
    h1: 'Desentupidora na Praia da Costa 24 horas',
    vizinhos: ['Itapuã', 'Centro', 'Praia de Itaparica'],
    referencias: ['Avenida Antônio Gil Veloso', 'Avenida Champagnat', 'Avenida Hugo Musso', 'Shopping Praia da Costa'],
    imovel: 'Edifícios residenciais altos, com muitos andares e garagens no subsolo ou no térreo.',
    problema:
      'Em prédios altos, dezenas de cozinhas e áreas de serviço despejam na mesma prumada. Gordura e sabão formam crosta na base da coluna, e a água volta pela pia ou pelo ralo dos primeiros andares.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'A Praia da Costa concentra os edifícios mais altos de Vila Velha, alinhados entre a Avenida Antônio Gil Veloso, na orla, e as avenidas Hugo Musso e Champagnat. Com tantos apartamentos ligados às mesmas colunas, o chamado mais comum no bairro vem de moradores dos andares baixos e de síndicos com retorno de água nas prumadas.',
    faq: [
      {
        q: 'Moro em andar baixo na Praia da Costa e a água da pia volta quando os vizinhos usam. O que é?',
        a: 'É sinal de coluna parcialmente obstruída abaixo do seu andar. A água dos apartamentos de cima não consegue descer e procura a saída mais próxima, que é a sua pia ou o seu ralo.',
      },
      {
        q: 'É preciso interditar a coluna do prédio inteiro durante o desentupimento?',
        a: 'Durante o serviço, os apartamentos daquela prumada devem evitar usar a pia ou o tanque. As outras prumadas do prédio continuam funcionando normalmente.',
      },
      {
        q: 'Vocês atendem os prédios da orla de madrugada?',
        a: 'Sim. O atendimento na Praia da Costa é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Itapuã',
    em: 'em Itapuã',
    regiao: 'Orla',
    h1: 'Desentupimento em Itapuã, a qualquer hora',
    vizinhos: ['Praia da Costa', 'Praia de Itaparica', 'Divino Espírito Santo'],
    referencias: ['Avenida Hugo Musso', 'Avenida Jair de Andrade', 'Avenida Estudante José Júlio de Souza', 'Praia de Itapuã'],
    imovel: 'Prédios residenciais de vários portes, com padarias, restaurantes e lojas nos térreos das avenidas internas.',
    problema:
      'A areia trazida da praia vai para o ralo do box e da área de serviço. Ela decanta na caixa sifonada, mistura com cabelo e sabão e fecha a passagem aos poucos.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'Itapuã fica a poucos quarteirões do mar em qualquer ponto do bairro, e a rotina de praia entra em casa junto com a areia. Entre a Avenida Estudante José Júlio de Souza e a Hugo Musso, os chamados por ralo de banheiro que não escoa se repetem o ano todo e aumentam no verão.',
    faq: [
      {
        q: 'O ralo do box enche de água durante o banho. Limpar a grelha resolve?',
        a: 'Só resolve se a sujeira estiver na superfície. Quando há areia assentada na caixa sifonada ou no ramal, a água continua lenta e é preciso desobstruir com equipamento.',
      },
      {
        q: 'Lavar cadeira e guarda-sol no tanque causa entupimento?',
        a: 'Causa. A areia desce pelo tanque, se deposita nas curvas do cano e vai reduzindo a passagem. O ideal é tirar a areia a seco antes de lavar.',
      },
      {
        q: 'Atendem Itapuã aos domingos e feriados?',
        a: 'Sim. Atendemos Itapuã 24 horas por dia, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Praia de Itaparica',
    em: 'na Praia de Itaparica',
    regiao: 'Orla',
    h1: 'Desentupidora 24h na Praia de Itaparica',
    vizinhos: ['Itapuã', 'Coqueiral de Itaparica', 'Praia das Gaivotas', 'Jockey de Itaparica'],
    referencias: ['Avenida Estudante José Júlio de Souza', 'Rodovia do Sol', 'Avenida Saturnino Rangel Mauro', 'Boulevard Shopping Vila Velha'],
    imovel: 'Condomínios verticais com várias torres, área de lazer completa e cozinhas ligadas a caixas de gordura coletivas.',
    problema:
      'A caixa de gordura do condomínio recebe o despejo de todas as cozinhas das torres, além de churrasqueiras e espaço gourmet. Sem limpeza no intervalo certo, a gordura endurece, passa para a rede e as pias começam a devolver água.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Na Praia de Itaparica predominam condomínios de torres altas, erguidos entre a orla da Avenida Estudante José Júlio de Souza e a Rodovia do Sol. São prédios com muitos apartamentos e áreas de lazer com cozinha, o que faz da caixa de gordura coletiva o ponto que mais exige atenção dos síndicos do bairro.',
    faq: [
      {
        q: 'De quanto em quanto tempo o condomínio deve limpar a caixa de gordura?',
        a: 'Depende do número de apartamentos e do tamanho da caixa. O sinal de que o intervalo está longo é o mau cheiro perto da caixa e pias lentas em vários apartamentos ao mesmo tempo.',
      },
      {
        q: 'A churrasqueira da área de lazer pode entupir a rede do prédio?',
        a: 'Pode. A pia da churrasqueira recebe gordura de carne e carvão. Se ela não passa por caixa de gordura própria, esse material vai direto para a rede interna.',
      },
      {
        q: 'Vocês fazem o serviço em horário combinado com a administração do condomínio?',
        a: 'Sim. Como atendemos 24 horas, o serviço pode ser feito no horário de menor movimento do prédio, e emergências são atendidas na hora.',
      },
    ],
  },
  {
    nome: 'Coqueiral de Itaparica',
    em: 'em Coqueiral de Itaparica',
    regiao: 'Orla',
    h1: 'Desentupidora em Coqueiral de Itaparica: atendimento 24 horas',
    vizinhos: ['Praia de Itaparica', 'Santa Mônica', 'Praia das Gaivotas', 'Jockey de Itaparica'],
    referencias: ['Avenida Santa Leopoldina', 'Rodovia do Sol', 'Avenida João Mendes'],
    imovel: 'Conjuntos de prédios baixos, de poucos andares e sem elevador, ao lado de casas e de comércio de rua.',
    problema:
      'Nos blocos de conjunto, o esgoto de todos os apartamentos se junta em caixas de inspeção no pátio. Quando uma dessas caixas obstrui, o esgoto volta pelos ralos e vasos do térreo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Coqueiral de Itaparica cresceu em torno de conjuntos habitacionais de blocos baixos, com a Avenida Santa Leopoldina como via de comércio. A rede de esgoto desses blocos é compartilhada e tem décadas de uso, por isso o retorno de esgoto no térreo é a ocorrência mais relatada no bairro.',
    faq: [
      {
        q: 'O esgoto está saindo pela tampa da caixa no pátio do bloco. Dá para resolver sem quebrar o piso?',
        a: 'Na maioria dos casos, sim. A desobstrução é feita pela própria caixa de inspeção, com máquina rotativa ou jato de água, sem obra.',
      },
      {
        q: 'Só o apartamento do térreo é afetado. Quem deve chamar a desentupidora?',
        a: 'Se a obstrução está na rede comum do bloco, a responsabilidade é do condomínio. O térreo sente primeiro porque é o ponto mais baixo da rede.',
      },
      {
        q: 'Atendem casas e lojas da Avenida Santa Leopoldina?',
        a: 'Sim. O atendimento em Coqueiral de Itaparica é residencial e comercial, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Praia das Gaivotas',
    em: 'na Praia das Gaivotas',
    regiao: 'Orla',
    h1: 'Desentupimento 24 horas na Praia das Gaivotas',
    vizinhos: ['Praia de Itaparica', 'Coqueiral de Itaparica', 'Santa Mônica', 'Barra do Jucu'],
    referencias: ['Rodovia do Sol', 'Avenida Coronel Pedro Maia de Carvalho'],
    imovel: 'Casas e sobrados com quintal e garagem, e prédios residenciais mais recentes nas vias principais.',
    problema:
      'Em casas térreas, areia e folhas entram pelos ralos de quintal e de garagem e se acumulam na tubulação de água de chuva. Na primeira chuva forte, o quintal alaga porque o cano não dá vazão.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'A Praia das Gaivotas é um bairro de ruas residenciais planas, perto do mar e da Rodovia do Sol, onde ainda predominam casas com área externa. Terreno plano e solo arenoso fazem a água de chuva depender totalmente dos ralos e dos tubos, que precisam estar livres para o quintal não encher.',
    faq: [
      {
        q: 'O quintal alaga sempre que chove forte, mas a rua não. O problema é no meu imóvel?',
        a: 'Provavelmente sim. Quando a rua escoa e o quintal não, a obstrução costuma estar nos ralos, nas caixas de areia ou no tubo que leva a água da casa para a rua.',
      },
      {
        q: 'Posso ligar o ralo do quintal no esgoto para a água sair mais rápido?',
        a: 'Não. Água de chuva e esgoto têm redes separadas. Ligar uma na outra sobrecarrega o esgoto e faz a água suja voltar para dentro de casa em dia de chuva.',
      },
      {
        q: 'Vocês atendem a Praia das Gaivotas durante a chuva?',
        a: 'Sim. Atendemos 24 horas, com chuva ou sem chuva, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Barra do Jucu',
    em: 'na Barra do Jucu',
    regiao: 'Orla',
    h1: 'Desentupidora na Barra do Jucu, 24 horas por dia',
    vizinhos: ['Riviera da Barra', 'Santa Paula', 'Praia das Gaivotas'],
    referencias: ['Rodovia do Sol', 'Rio Jucu', 'Praia da Barra do Jucu', 'Ponte da Madalena'],
    imovel: 'Casas de moradores antigos, casas de veraneio, pousadas e restaurantes de frutos do mar.',
    problema:
      'Casas que passam semanas fechadas ficam com a tubulação seca, e os resíduos endurecem dentro do cano. Quando o imóvel volta a ser usado por muita gente de uma vez, o ramal não aguenta e entope.',
    servico: 'desentupimento-de-cano',
    abertura:
      'A Barra do Jucu fica na foz do Rio Jucu, ao sul da cidade, e mantém o perfil de vila de pescadores com casas de temporada, pousadas e restaurantes. O uso irregular dos imóveis, vazios em parte do ano e cheios nos feriados, é a principal causa de cano entupido no bairro.',
    faq: [
      {
        q: 'A casa ficou fechada por meses e agora nada escoa direito. Por que isso acontece?',
        a: 'Sem uso, a água do cano evapora e a gordura e os resíduos que estavam úmidos secam e endurecem. Além disso, raízes de plantas do quintal procuram a umidade das juntas e entram na tubulação.',
      },
      {
        q: 'Raiz de árvore dentro do cano tem solução sem trocar a tubulação?',
        a: 'Na maioria dos casos, a máquina rotativa com lâmina corta as raízes e libera a passagem. Se o cano estiver quebrado no ponto de entrada da raiz, o problema volta, e o trecho precisa de reparo.',
      },
      {
        q: 'Vocês atendem pousadas e restaurantes da Barra do Jucu em feriado?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, para imóveis residenciais e comerciais.',
      },
    ],
  },

  // ---------------- CENTRO E ARREDORES ----------------
  {
    nome: 'Centro',
    em: 'no Centro',
    regiao: 'Centro e arredores',
    h1: 'Desentupidora no Centro de Vila Velha',
    vizinhos: ['Praia da Costa', 'Glória', 'Divino Espírito Santo', 'Prainha', 'Soteco'],
    referencias: ['Avenida Luciano das Neves', 'Avenida Champagnat', 'Rua Henrique Moscoso', 'Praça Duque de Caxias'],
    imovel: 'Prédios comerciais e residenciais antigos, lojas de rua, clínicas e casas adaptadas para comércio.',
    problema:
      'Banheiros de lojas, clínicas e escritórios são usados por muita gente ao longo do dia, e papel toalha, lenço umedecido e absorvente vão parar no vaso. Em ramais antigos e com pouca inclinação, esse material trava e o vaso transborda.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Centro de Vila Velha reúne o comércio de rua das avenidas Luciano das Neves e Champagnat, clínicas, bancos e prédios residenciais mais antigos da cidade. Com tanto banheiro de uso coletivo ligado a tubulações antigas, vaso sanitário entupido é o chamado que mais se repete na região.',
    faq: [
      {
        q: 'O vaso da loja entope toda semana. O problema é o vaso ou o cano?',
        a: 'Quando o entupimento se repete, quase sempre é o ramal. Um desentupimento superficial libera o vaso, mas deixa o material acumulado mais à frente, e ele volta a travar.',
      },
      {
        q: 'Papel higiênico pode ser jogado no vaso em prédio antigo?',
        a: 'Em tubulações antigas e de pouca inclinação, o mais seguro é usar a lixeira. Papel toalha e lenço umedecido não devem ir para o vaso em nenhum tipo de imóvel.',
      },
      {
        q: 'Atendem o comércio do Centro em horário de funcionamento?',
        a: 'Sim. Atendemos lojas, clínicas e escritórios a qualquer hora, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Glória',
    em: 'na Glória',
    regiao: 'Centro e arredores',
    h1: 'Desentupimento na Glória: lojas, galpões e residências',
    vizinhos: ['Centro', 'Aribiri', 'Ilha dos Ayres', 'Jaburuna'],
    referencias: ['Polo de Moda da Glória', 'Fábrica de Chocolates Garoto', 'Estrada Jerônimo Monteiro'],
    imovel: 'Lojas de confecção, pequenas fábricas e galpões, com casas e sobrados nas ruas internas.',
    problema:
      'Lojas e confecções instaladas em casas adaptadas usam ramais antigos, pensados para uma família. Com copa, banheiro de funcionários e de clientes no mesmo cano, o diâmetro fica pequeno e qualquer acúmulo fecha a passagem.',
    servico: 'desentupimento-de-cano',
    abertura:
      'A Glória é conhecida pelo polo de confecções e pela fábrica de chocolates que funciona no bairro. Muitas lojas ocupam imóveis que eram residências, e a tubulação original segue em uso. É nesses ramais antigos, exigidos além do que foram projetados para receber, que os entupimentos aparecem.',
    faq: [
      {
        q: 'Minha loja funciona em uma casa adaptada e os ralos escoam devagar. Por onde começar?',
        a: 'Pelo ramal principal até a caixa de inspeção. Em imóveis adaptados, é comum que novas pias e banheiros tenham sido ligados ao cano antigo, que precisa estar totalmente livre para dar conta.',
      },
      {
        q: 'Fiapos e retalhos de tecido entopem ralo?',
        a: 'Entopem. Fiapos se enroscam na grelha e na caixa sifonada e seguram outros resíduos. Em confecções, o ralo de piso deve ter grelha fina e limpeza frequente.',
      },
      {
        q: 'Vocês atendem a Glória antes da abertura das lojas?',
        a: 'Sim. O atendimento é 24 horas, então o serviço pode ser feito de madrugada ou no início da manhã.',
      },
    ],
  },
  {
    nome: 'Divino Espírito Santo',
    em: 'no Divino Espírito Santo',
    regiao: 'Centro e arredores',
    h1: 'Desentupidora 24 horas no Divino Espírito Santo',
    vizinhos: ['Centro', 'Soteco', 'Itapuã', 'Praia da Costa'],
    referencias: ['Avenida Luciano das Neves', 'Shopping Vila Velha'],
    imovel: 'Casas e prédios residenciais de porte médio, com restaurantes, lanchonetes e lojas ao longo da Avenida Luciano das Neves.',
    problema:
      'Restaurantes e lanchonetes lavam grande volume de louça engordurada. Quando a caixa de gordura do estabelecimento enche, a gordura passa para o ramal e a pia da cozinha para de escoar em pleno expediente.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O bairro Divino Espírito Santo é cortado pela Avenida Luciano das Neves e abriga o Shopping Vila Velha, o que atraiu restaurantes, lanchonetes e serviços para o entorno. Nas ruas internas ficam casas e prédios residenciais. O comércio de alimentação é o que mais chama por limpeza de caixa de gordura.',
    faq: [
      {
        q: 'A caixa de gordura da lanchonete transborda mesmo com limpeza manual. O que falta?',
        a: 'A limpeza manual tira a camada de cima, mas não remove a gordura endurecida nas paredes da caixa nem a que já passou para o cano de saída. É preciso limpar a caixa por completo e desobstruir o ramal.',
      },
      {
        q: 'Posso jogar água quente para derreter a gordura?',
        a: 'Não adianta. A gordura derrete, anda alguns metros e endurece de novo mais à frente, em um ponto mais difícil de alcançar.',
      },
      {
        q: 'Atendem residências do Divino Espírito Santo também?',
        a: 'Sim. Atendemos casas, apartamentos e comércio, 24 horas por dia, todos os dias.',
      },
    ],
  },
  {
    nome: 'Soteco',
    em: 'em Soteco',
    regiao: 'Centro e arredores',
    h1: 'Pia, ralo ou esgoto entupido em Soteco? Atendimento 24h',
    vizinhos: ['Divino Espírito Santo', 'Centro', 'Ibes', 'Boa Vista'],
    referencias: ['Avenida Ministro Salgado Filho', 'Avenida Capixaba', 'Ifes Campus Vila Velha'],
    imovel: 'Casas e sobrados de uso familiar, muitos com mais de uma moradia no mesmo lote, e pequenos prédios.',
    problema:
      'Em casas onde várias pessoas cozinham todos os dias, a gordura se acumula no ramal da pia, que costuma ser longo e ter várias curvas até chegar à caixa de gordura. A pia fica lenta e depois para.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Soteco é um bairro residencial de casas e sobrados, com comércio na Avenida Ministro Salgado Filho e na Avenida Capixaba. É comum uma mesma família ocupar dois pavimentos ou construir nos fundos do lote, com as cozinhas ligadas ao mesmo ramal. Pia de cozinha entupida é o pedido mais frequente.',
    faq: [
      {
        q: 'A pia de cima escoa, mas a água aparece na pia de baixo. Por quê?',
        a: 'As duas cozinhas usam o mesmo ramal, e a obstrução está depois do ponto em que os canos se encontram. A água do andar de cima desce e sai pela pia mais baixa.',
      },
      {
        q: 'Limpar o sifão resolve pia que entope sempre?',
        a: 'Resolve quando a sujeira está no sifão. Se o entupimento volta em poucos dias, a gordura está no ramal ou na caixa de gordura, fora do alcance da limpeza manual.',
      },
      {
        q: 'Vocês atendem Soteco à noite?',
        a: 'Sim. O atendimento em Soteco é 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- GRANDE IBES ----------------
  {
    nome: 'Ibes',
    em: 'no Ibes',
    regiao: 'Grande Ibes',
    h1: 'Desentupimento no Ibes, 24 horas',
    vizinhos: ['Santa Inês', 'Santa Mônica', 'Soteco', 'Aribiri'],
    referencias: ['Avenida Nossa Senhora da Penha', 'Avenida Carlos Lindenberg'],
    imovel: 'Casas de conjunto habitacional antigo, hoje ampliadas com segundo pavimento, edículas e pontos comerciais.',
    problema:
      'As casas foram ampliadas ao longo dos anos, mas a ligação de esgoto continua a original. Novos banheiros e cozinhas despejam em um ramal de manilha antigo, que acumula crosta e, com o tempo, não dá vazão.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Ibes nasceu como conjunto habitacional planejado e virou um dos bairros mais tradicionais de Vila Velha, com comércio na Avenida Nossa Senhora da Penha. As casas originais ganharam andares e anexos, e a rede de esgoto interna não acompanhou. O resultado são ramais antigos que entopem com frequência.',
    faq: [
      {
        q: 'Construí um segundo andar e depois disso o esgoto começou a voltar. Tem relação?',
        a: 'Tem. O ramal antigo passou a receber mais banheiros do que antes. Se ele já tinha crosta ou trechos com pouca inclinação, o aumento de volume faz o esgoto voltar pelo ponto mais baixo.',
      },
      {
        q: 'Como saber se o entupimento é dentro do lote ou na rede da rua?',
        a: 'Abrindo a caixa de inspeção mais próxima da calçada. Se ela estiver cheia, a obstrução está dali para a frente. Se estiver vazia, o problema está entre a casa e a caixa.',
      },
      {
        q: 'Vocês atendem o Ibes aos fins de semana?',
        a: 'Sim. Atendemos todos os dias, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Santa Mônica',
    em: 'em Santa Mônica',
    regiao: 'Grande Ibes',
    h1: 'Desentupidora em Santa Mônica: chegamos em 20 minutos',
    vizinhos: ['Coqueiral de Itaparica', 'Vila Nova', 'Ibes', 'Praia das Gaivotas'],
    referencias: ['Avenida João Mendes', 'Rua Armando Dornellas Pereira'],
    imovel: 'Casas térreas e sobrados com área de serviço externa, quintal e varanda.',
    problema:
      'O ralo da área de serviço recebe a água da máquina de lavar, com fiapos de roupa e sabão em pó. Esse material forma uma pasta na caixa sifonada e a água da máquina passa a transbordar pelo piso.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'Santa Mônica é um bairro de casas, com ruas residenciais tranquilas e acesso pela Avenida João Mendes. A maior parte dos imóveis tem área de serviço nos fundos, com tanque e máquina de lavar despejando no mesmo ralo. É desse ponto que vem a maioria dos chamados do bairro.',
    faq: [
      {
        q: 'Quando a máquina de lavar esvazia, a água sobe pelo ralo. O que causa isso?',
        a: 'A máquina solta muita água de uma vez. Se a caixa sifonada ou o ramal estão parcialmente obstruídos por fiapos e sabão, o cano não dá conta do volume e a água sobe.',
      },
      {
        q: 'Sabão em pó entope mais do que sabão líquido?',
        a: 'O sabão em pó usado em excesso não dissolve por completo e se deposita no cano. Junto com fiapos, forma uma massa que endurece. Usar a dose indicada reduz o problema.',
      },
      {
        q: 'Atendem Santa Mônica de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },

  // ---------------- EIXO CARLOS LINDENBERG ----------------
  {
    nome: 'Cobilândia',
    em: 'em Cobilândia',
    regiao: 'Eixo Carlos Lindenberg',
    h1: 'Desentupimento de rede pluvial e esgoto em Cobilândia',
    vizinhos: ['São Torquato', 'Jardim Marilândia', 'Alvorada', 'Vale Encantado'],
    referencias: ['Avenida Carlos Lindenberg', 'Rio Marinho'],
    imovel: 'Casas e sobrados em terreno plano e baixo, com lojas e oficinas na Avenida Carlos Lindenberg.',
    problema:
      'O bairro fica em área baixa e sofre com alagamentos em períodos de chuva. Depois que a água baixa, ralos, caixas e tubos de drenagem dos imóveis ficam cheios de lama e lixo e deixam de funcionar.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'Cobilândia se estende ao lado da Avenida Carlos Lindenberg, em uma das partes mais baixas de Vila Velha, próxima ao Rio Marinho. Quem mora ou tem comércio no bairro conhece o efeito da chuva forte. Manter calhas, ralos e tubos de água de chuva desobstruídos é o que está ao alcance de cada imóvel para reduzir o prejuízo.',
    faq: [
      {
        q: 'Depois do alagamento, os ralos do quintal pararam de funcionar. O que aconteceu?',
        a: 'A água da enchente carrega lama, areia e lixo para dentro dos ralos e das caixas. Quando ela baixa, esse material assenta e endurece dentro da tubulação.',
      },
      {
        q: 'Vale a pena limpar a tubulação antes da época de chuva?',
        a: 'Vale. Com ralos, caixas de areia e tubos livres, a água de chuva do próprio imóvel escoa mais rápido e o risco de entrar em casa diminui.',
      },
      {
        q: 'Vocês atendem Cobilândia em dia de chuva forte?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, para casas e comércio.',
      },
    ],
  },
  {
    nome: 'Aribiri',
    em: 'em Aribiri',
    regiao: 'Eixo Carlos Lindenberg',
    h1: 'Desentupidora em Aribiri 24 horas',
    vizinhos: ['Glória', 'Ibes', 'Ataíde', 'Santa Rita'],
    referencias: ['Estrada Jerônimo Monteiro', 'Rio Aribiri'],
    imovel: 'Casas antigas, sobrados geminados e pequenos comércios de bairro, em lotes estreitos.',
    problema:
      'Em lotes estreitos com casas na frente e nos fundos, um só ramal atravessa o terreno e atende todas as moradias. Quando ele entope, o vaso sanitário da casa mais baixa é o primeiro a devolver água.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'Aribiri é um dos bairros antigos de Vila Velha, formado ao longo da Estrada Jerônimo Monteiro e nas proximidades do Rio Aribiri. As construções são densas, com casas coladas umas nas outras e moradias de fundos. Vaso sanitário que não dá descarga direito é a queixa mais comum.',
    faq: [
      {
        q: 'O vaso borbulha quando alguém usa a pia ou o chuveiro. Isso é normal?',
        a: 'Não. O borbulhar indica que o ar não consegue circular porque o ramal está parcialmente fechado. É um aviso de que o entupimento completo está próximo.',
      },
      {
        q: 'Usei desentupidor de borracha e a água baixou, mas voltou a subir. E agora?',
        a: 'O desentupidor só empurrou o material alguns centímetros. A obstrução continua no ramal e precisa ser removida com equipamento adequado.',
      },
      {
        q: 'Atendem casas de fundos e vilas em Aribiri?',
        a: 'Sim. Atendemos qualquer tipo de imóvel no bairro, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'São Torquato',
    em: 'em São Torquato',
    regiao: 'Eixo Carlos Lindenberg',
    h1: 'São Torquato: desentupimento e hidrojateamento 24h',
    vizinhos: ['Cobilândia', 'Paul', 'Ilha das Flores', 'Aribiri'],
    referencias: ['Avenida Carlos Lindenberg', 'Ponte Florentino Avidos', 'Terminal de São Torquato'],
    imovel: 'Galpões, oficinas, depósitos e comércio atacadista, com casas antigas nas ruas internas.',
    problema:
      'Oficinas, depósitos e galpões têm redes longas de piso, que recebem graxa, areia e resíduos de lavagem. Esse material forma uma camada dura no fundo do tubo, que a máquina rotativa comum não remove por completo.',
    servico: 'hidrojateamento',
    abertura:
      'São Torquato fica na entrada de Vila Velha para quem chega de Vitória pela Ponte Florentino Avidos, no início da Avenida Carlos Lindenberg. O bairro tem perfil comercial e de serviços, com galpões e oficinas ao lado de casas antigas. Para as redes desses imóveis, o hidrojateamento costuma ser o método indicado.',
    faq: [
      {
        q: 'Quando o hidrojateamento é melhor do que o desentupimento comum?',
        a: 'Quando a tubulação é longa ou está com gordura, graxa ou areia grudadas na parede. O jato de água em alta pressão lava o tubo por inteiro, enquanto a máquina rotativa só abre passagem no meio.',
      },
      {
        q: 'A canaleta do piso do galpão pode ser limpa com jato?',
        a: 'Pode. O hidrojateamento limpa canaletas, caixas de areia e os tubos que ligam esses pontos até a saída do imóvel.',
      },
      {
        q: 'Vocês atendem empresas de São Torquato fora do horário comercial?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, o que permite fazer o serviço com a empresa fechada.',
      },
    ],
  },
];
