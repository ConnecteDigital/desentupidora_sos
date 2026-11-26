// Bairros de João Pessoa. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const joaoPessoa: BairroDados[] = [
  // ---------------- ORLA ----------------
  {
    nome: 'Manaíra',
    em: 'em Manaíra',
    regiao: 'Orla',
    h1: 'Desentupidora em Manaíra 24 horas',
    vizinhos: ['Tambaú', 'Jardim Oceania', 'Jardim Luna', 'Brisamar'],
    referencias: ['Avenida Governador Flávio Ribeiro Coutinho', 'Avenida João Maurício', 'Avenida Edson Ramalho', 'Manaíra Shopping'],
    imovel: 'Prédios residenciais de muitos andares nas quadras internas, edifícios mais baixos perto da praia e comércio forte nas avenidas.',
    problema:
      'Nos edifícios altos, uma única coluna recebe a gordura e o esgoto de dezenas de apartamentos. Quando a crosta fecha a passagem, a água volta pela pia ou pelo ralo dos primeiros andares, mesmo que o morador de baixo não tenha feito nada de errado.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'Manaíra é o bairro mais verticalizado da orla de João Pessoa. Entre a Avenida João Maurício, na beira-mar, e a Avenida Governador Flávio Ribeiro Coutinho, o Retão de Manaíra, há quadras inteiras de edifícios residenciais, além de shopping, restaurantes e clínicas. Com tantos apartamentos ligados às mesmas prumadas, o entupimento de coluna é um problema típico do bairro.',
    faq: [
      {
        q: 'A água da pia do vizinho de cima está voltando no meu apartamento em Manaíra. O que é isso?',
        a: 'É sinal de coluna obstruída abaixo do seu andar. A água que desce dos apartamentos de cima encontra a passagem fechada e sai pelo primeiro ponto livre, que costuma ser a pia ou o ralo dos andares mais baixos.',
      },
      {
        q: 'A coluna entupida é problema do morador ou do condomínio?',
        a: 'A coluna é área comum, então o chamado costuma partir do síndico ou da administradora. O ramal que liga a pia ou o vaso do apartamento à coluna é de responsabilidade de cada unidade.',
      },
      {
        q: 'Vocês atendem prédios do Retão de Manaíra e da beira-mar de madrugada?',
        a: 'Sim. O atendimento em Manaíra é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Tambaú',
    em: 'em Tambaú',
    regiao: 'Orla',
    h1: 'Desentupidora em Tambaú para bares, hotéis e residências',
    vizinhos: ['Manaíra', 'Cabo Branco', 'Miramar', 'Brisamar'],
    referencias: ['Avenida Almirante Tamandaré', 'Avenida Epitácio Pessoa', 'Feirinha de Tambaú', 'Avenida Nego'],
    imovel: 'Hotéis, pousadas, bares e restaurantes concentrados perto da praia, com prédios residenciais e flats nas ruas de trás.',
    problema:
      'Cozinhas que trabalham do almoço à madrugada enchem a caixa de gordura em poucas semanas. Quando ela satura, a gordura passa para o ramal, a pia para de escoar e o mau cheiro chega ao salão.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Tambaú é o ponto mais movimentado da orla de João Pessoa. A Avenida Epitácio Pessoa termina ali, na Avenida Almirante Tamandaré, e em volta ficam hotéis, a Feirinha de Tambaú e uma sequência de bares e restaurantes. Esse volume de cozinhas comerciais faz da caixa de gordura o principal ponto de entupimento do bairro.',
    faq: [
      {
        q: 'De quanto em quanto tempo um restaurante em Tambaú deve limpar a caixa de gordura?',
        a: 'Depende do volume da cozinha. O sinal prático é a camada de gordura chegar perto da saída da caixa. Em casas com movimento alto, isso acontece em poucas semanas, e a limpeza precisa entrar na rotina.',
      },
      {
        q: 'A pia do bar entupiu durante o funcionamento. Dá para resolver sem fechar a casa?',
        a: 'Na maioria dos casos, sim. O desentupimento é feito pelo ponto de acesso mais próximo da obstrução, e a cozinha volta a funcionar assim que a água escoa.',
      },
      {
        q: 'Atendem hotéis e pousadas de Tambaú em fins de semana e feriados?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, para comércio e residências. Chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Cabo Branco',
    em: 'no Cabo Branco',
    regiao: 'Orla',
    h1: 'Desentupimento no Cabo Branco, a qualquer hora',
    vizinhos: ['Tambaú', 'Altiplano', 'Miramar', 'Portal do Sol'],
    referencias: ['Avenida Cabo Branco', 'Avenida Monsenhor Odilon Coutinho', 'Praia do Cabo Branco'],
    imovel: 'Edifícios residenciais de poucos pavimentos, vários deles antigos, além de casas, pousadas e quiosques na beira-mar.',
    problema:
      'Nos prédios mais antigos, os canos de esgoto e de cozinha têm décadas de uso. A crosta de gordura e sabão reduz o diâmetro interno, e qualquer resíduo a mais fecha a passagem.',
    servico: 'desentupimento-de-cano',
    abertura:
      'No Cabo Branco, a beira-mar é ocupada por prédios baixos, e muitos deles estão de pé há bastante tempo. Entre a Avenida Cabo Branco e a Avenida Monsenhor Odilon Coutinho, é comum encontrar tubulação original ainda em uso, e são esses canos que mais dão trabalho a quem mora no bairro.',
    faq: [
      {
        q: 'O cano do meu prédio no Cabo Branco é antigo. Dá para desentupir sem quebrar parede?',
        a: 'Sim. O desentupimento é feito por dentro do cano, a partir de uma caixa de inspeção, de um ralo ou do próprio ponto entupido. Não é preciso quebrar piso nem parede para desobstruir.',
      },
      {
        q: 'A areia da praia entope ralo de chuveiro?',
        a: 'Entope. A areia fica depositada na caixa sifonada e no trecho horizontal do cano. Com sabão e cabelo, ela forma uma massa compacta que impede a água de descer.',
      },
      {
        q: 'Vocês atendem pousadas e quiosques na Avenida Cabo Branco?',
        a: 'Sim. Atendemos comércio e residências no Cabo Branco, 24 horas por dia, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Bessa',
    em: 'no Bessa',
    regiao: 'Orla',
    h1: 'Desentupidora 24h no Bessa',
    vizinhos: ['Jardim Oceania', 'Aeroclube', 'Manaíra'],
    referencias: ['Avenida Presidente Afonso Pena', 'Avenida Governador Argemiro de Figueiredo', 'Praia do Bessa'],
    imovel: 'Casas, casas de praia e prédios residenciais de poucos andares, muitos com chuveirão e área de lazer no térreo.',
    problema:
      'A areia trazida da praia entra pelos ralos do chuveirão, da garagem e da área de serviço. Ela se deposita na caixa sifonada e no ramal, e o ralo passa a devolver água em vez de escoar.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Bessa é um bairro plano, de ruas residenciais que terminam na praia. Casas e prédios baixos ocupam a faixa entre a Avenida Governador Argemiro de Figueiredo e o mar. Como quase todo mundo volta da Praia do Bessa a pé, com areia no corpo e nos pés, os ralos do bairro recebem um material que a tubulação não foi feita para carregar.',
    faq: [
      {
        q: 'O ralo do chuveirão do prédio vive entupido de areia. Tem solução?',
        a: 'Tem. A areia acumulada é removida da caixa sifonada e do ramal. Depois disso, vale instalar um ralo com cesto ou uma caixa de areia antes da ligação com a rede, para que o material fique retido em um ponto fácil de limpar.',
      },
      {
        q: 'Por que o ralo da garagem transborda quando chove no Bessa?',
        a: 'O terreno do bairro é baixo e plano, então a água da chuva demora a sair. Se o ralo ou o tubo que o liga à rua já estão com areia e folhas, a vazão cai e a água fica empoçada.',
      },
      {
        q: 'Vocês atendem casas de praia no Bessa em feriados?',
        a: 'Sim. O atendimento no Bessa funciona 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jardim Oceania',
    em: 'no Jardim Oceania',
    regiao: 'Orla',
    h1: 'Desentupimento no Jardim Oceania 24 horas',
    vizinhos: ['Bessa', 'Aeroclube', 'Manaíra'],
    referencias: ['Avenida Governador Argemiro de Figueiredo', 'Avenida Fernando Luiz Henrique dos Santos'],
    imovel: 'Prédios residenciais recentes, com apartamentos compactos e flats, além de restaurantes e lojas nas avenidas.',
    problema:
      'Em apartamentos compactos, a pia da cozinha e a máquina de lavar costumam dividir o mesmo ramal, que é curto e estreito. Gordura e fiapos de roupa se juntam nesse trecho e a pia para de escoar.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Jardim Oceania cresceu com edifícios novos entre o Bessa e Manaíra, muitos de apartamentos pequenos e flats usados por temporada. Nas avenidas Governador Argemiro de Figueiredo e Fernando Luiz Henrique dos Santos ficam restaurantes e serviços. Em imóveis assim, com cozinha pequena e uso intenso, a pia é o primeiro ponto a entupir.',
    faq: [
      {
        q: 'A pia do meu flat no Jardim Oceania entope mesmo com pouco uso. Por quê?',
        a: 'Imóveis de temporada ficam dias fechados. A gordura que ficou no cano seca e endurece nesse intervalo, e o próximo uso encontra a passagem mais estreita.',
      },
      {
        q: 'A água da máquina de lavar está voltando pela pia. O que significa?',
        a: 'Significa que os dois aparelhos estão ligados ao mesmo ramal e que a obstrução fica depois do ponto em que eles se encontram. Limpar o sifão não resolve, porque o entupimento está mais adiante.',
      },
      {
        q: 'Vocês atendem apartamentos alugados por temporada?',
        a: 'Sim. Atendemos proprietários, inquilinos, administradoras e síndicos no Jardim Oceania, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Aeroclube',
    em: 'no Aeroclube',
    regiao: 'Orla',
    h1: 'Desentupidora no Aeroclube: chegamos em 20 minutos',
    vizinhos: ['Bessa', 'Jardim Oceania', 'Manaíra', 'Bairro dos Ipês'],
    referencias: ['Avenida Francisco Leocádio Ribeiro Coutinho', 'Avenida José de Oliveira Curchatuz'],
    imovel: 'Condomínios de prédios residenciais, casas e lojas ao longo das avenidas principais.',
    problema:
      'O bairro fica em área baixa e plana. Quando calhas, ralos de pátio e tubos de águas pluviais estão com folhas e areia, a chuva não escoa e a água sobe em garagens e térreos.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Aeroclube fica entre o Bessa e o Jardim Oceania e reúne condomínios residenciais, casas e comércio nas avenidas Francisco Leocádio Ribeiro Coutinho e José de Oliveira Curchatuz. Por ser plano e baixo, o bairro sente as chuvas fortes mais do que as áreas altas da cidade, e a rede pluvial dos imóveis precisa estar livre para dar conta.',
    faq: [
      {
        q: 'A garagem do condomínio alaga em toda chuva forte. Pode ser entupimento?',
        a: 'Pode. Ralos, canaletas e tubos de drenagem acumulam areia, folhas e lixo. Com a seção reduzida, eles não escoam o volume de uma chuva intensa, e a água fica retida.',
      },
      {
        q: 'Qual a melhor época para desobstruir calhas e ralos pluviais em João Pessoa?',
        a: 'Antes do período chuvoso, que na cidade se concentra entre abril e julho. Fazer a limpeza com o tempo seco evita descobrir o problema no meio do temporal.',
      },
      {
        q: 'Atendem condomínios e casas do Aeroclube à noite?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- ZONA LESTE ----------------
  {
    nome: 'Altiplano',
    em: 'no Altiplano',
    regiao: 'Zona Leste',
    h1: 'Desentupidora no Altiplano para condomínios e residências',
    vizinhos: ['Cabo Branco', 'Portal do Sol', 'Miramar', 'Castelo Branco'],
    referencias: ['Avenida João Cirilo da Silva', 'Estação Cabo Branco'],
    imovel: 'Torres residenciais de muitos pavimentos, com áreas de lazer completas, ao lado de casas e condomínios horizontais.',
    problema:
      'Em torres altas, a coluna de esgoto e a de gordura são longas e recebem contribuição de muitos andares. Resíduos de obra, gordura e objetos descartados no vaso se acumulam nos desvios e na base da prumada.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Altiplano fica no alto, acima do Cabo Branco, e concentra alguns dos edifícios residenciais mais altos de João Pessoa, perto da Avenida João Cirilo da Silva e da Estação Cabo Branco. Prédios desse porte têm prumadas extensas, e uma obstrução na base afeta vários apartamentos de uma vez.',
    faq: [
      {
        q: 'Prédio novo também tem entupimento de coluna?',
        a: 'Tem. Em edifícios recentes é comum encontrar restos de argamassa, gesso e rejunte dentro da tubulação, deixados durante a obra ou em reformas de apartamentos. Esse material endurece e segura tudo o que desce.',
      },
      {
        q: 'Como o síndico identifica em que altura a coluna está entupida?',
        a: 'Pelo andar em que a água começa a voltar. Os apartamentos acima do ponto obstruído escoam normalmente, e o primeiro andar com retorno indica que o bloqueio está logo abaixo dele.',
      },
      {
        q: 'Vocês atendem os condomínios do Altiplano em domingos e feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Miramar',
    em: 'em Miramar',
    regiao: 'Zona Leste',
    h1: 'Desentupimento 24 horas em Miramar',
    vizinhos: ['Tambaú', 'Cabo Branco', 'Tambauzinho', 'Expedicionários', 'Altiplano'],
    referencias: ['Avenida Epitácio Pessoa', 'Avenida Ministro José Américo de Almeida (Beira Rio)', 'Praça das Muriçocas'],
    imovel: 'Edifícios residenciais altos em ruas tranquilas, com casas remanescentes e comércio na Avenida Epitácio Pessoa.',
    problema:
      'Nos prédios residenciais, a coluna de gordura recebe o despejo de todas as cozinhas da prumada. A gordura esfria no caminho, adere à parede do tubo e, com o tempo, sobra uma passagem estreita que fecha de repente.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'Miramar ocupa a faixa entre a Avenida Epitácio Pessoa e a Beira Rio, a poucos minutos da praia. As casas que formavam o bairro vêm dando lugar a edifícios residenciais, e hoje a maior parte dos moradores vive em apartamento. Quando o problema aparece em mais de uma unidade ao mesmo tempo, a causa quase sempre está na coluna do prédio.',
    faq: [
      {
        q: 'Como saber se o entupimento é no meu apartamento ou na coluna do prédio?',
        a: 'Se só um ponto da sua unidade está lento, o problema tende a ser local. Se a água volta sem você usar a pia, ou se vizinhos da mesma prumada têm o mesmo sintoma, a obstrução está na coluna.',
      },
      {
        q: 'Espuma saindo pelo ralo da área de serviço é entupimento?',
        a: 'É um aviso. A espuma das máquinas de lavar dos andares de cima sobe pelo ralo quando a coluna está com a passagem reduzida. O passo seguinte costuma ser o retorno de água.',
      },
      {
        q: 'Atendem na região da Praça das Muriçocas e da Beira Rio?',
        a: 'Sim. Atendemos todo o bairro de Miramar, 24 horas por dia, em residências e comércios.',
      },
    ],
  },
  {
    nome: 'Tambauzinho',
    em: 'em Tambauzinho',
    regiao: 'Zona Leste',
    h1: 'Precisa de desentupidora em Tambauzinho?',
    vizinhos: ['Miramar', 'Expedicionários', 'Brisamar', 'Pedro Gondim', 'Torre'],
    referencias: ['Espaço Cultural José Lins do Rego', 'Avenida Epitácio Pessoa', 'Rua Abdias Gomes de Almeida'],
    imovel: 'Prédios residenciais de porte médio, casas e imóveis comerciais voltados para a Avenida Epitácio Pessoa.',
    problema:
      'A pia de cozinha entope por gordura e restos de comida que passam pelo ralinho. Nos prédios do bairro, o ramal da cozinha percorre um trecho horizontal antes de chegar à coluna, e é ali que o material se deposita.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Tambauzinho fica no meio do caminho entre o Centro e a praia, cortado pela Avenida Epitácio Pessoa e conhecido pelo Espaço Cultural José Lins do Rego. O bairro mistura apartamentos, casas e escritórios. O pedido mais comum por aqui é simples e urgente: a pia da cozinha parou de escoar.',
    faq: [
      {
        q: 'Limpei o sifão e a pia continua entupida. O que falta?',
        a: 'Falta alcançar o trecho depois do sifão. Quando a limpeza do copo não resolve, a obstrução está no ramal embutido na parede ou no piso, e só sai com equipamento.',
      },
      {
        q: 'Jogar água quente na pia ajuda a evitar entupimento?',
        a: 'Ajuda pouco. A água quente derrete a gordura perto da cuba, mas ela volta a endurecer alguns metros depois. O que evita o problema é não despejar óleo na pia e manter a caixa de gordura limpa.',
      },
      {
        q: 'Vocês atendem escritórios e clínicas da Epitácio Pessoa em Tambauzinho?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Expedicionários',
    em: 'nos Expedicionários',
    regiao: 'Zona Leste',
    h1: 'Desentupidora nos Expedicionários, 24 horas por dia',
    vizinhos: ['Torre', 'Tambauzinho', 'Miramar', 'Bairro dos Estados'],
    referencias: ['Avenida Epitácio Pessoa', 'Avenida Ministro José Américo de Almeida (Beira Rio)'],
    imovel: 'Casas de terreno amplo, muitas delas reformadas ou convertidas em comércio, e prédios residenciais de porte médio.',
    problema:
      'Casas reformadas várias vezes acumulam emendas, curvas e trechos de cano com diâmetros diferentes. Cada emenda é um ponto onde gordura, cabelo e papel ficam presos.',
    servico: 'desentupimento-de-cano',
    abertura:
      'Os Expedicionários ficam entre a Avenida Epitácio Pessoa e a Beira Rio, vizinhos da Torre e de Tambauzinho. É um bairro de casas que passaram por ampliações e mudanças de uso ao longo do tempo. A tubulação desses imóveis raramente segue o projeto original, e os entupimentos aparecem nos trechos emendados.',
    faq: [
      {
        q: 'Minha casa foi reformada e os canos entopem com frequência. Tem relação?',
        a: 'Tem. Reformas costumam acrescentar banheiros e pias sem refazer a rede. O cano antigo passa a receber mais volume do que comporta, e as emendas seguram os resíduos.',
      },
      {
        q: 'Raiz de árvore entra em cano de esgoto?',
        a: 'Entra, pelas juntas e por pequenas trincas. Dentro do cano, a raiz cresce e forma uma malha que retém papel e gordura. O sintoma é o entupimento que volta poucas semanas depois de resolvido.',
      },
      {
        q: 'Atendem casas e pequenos prédios dos Expedicionários de madrugada?',
        a: 'Sim. O atendimento funciona 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Torre',
    em: 'na Torre',
    regiao: 'Zona Leste',
    h1: 'Desentupidora na Torre: comércio, clínicas e casas',
    vizinhos: ['Expedicionários', 'Tambauzinho', 'Centro', 'Jaguaribe', 'Bairro dos Estados'],
    referencias: ['Mercado Público da Torre', 'Avenida Rui Barbosa', 'Avenida Carneiro da Cunha', 'Avenida Epitácio Pessoa'],
    imovel: 'Casas antigas, muitas adaptadas para clínicas, restaurantes e lojas, além de prédios residenciais e do mercado público.',
    problema:
      'Imóveis que eram residência e viraram restaurante ou lanchonete mantêm a caixa de gordura de uma casa comum. Ela enche rápido com o uso comercial e deixa a gordura seguir para a rede.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'A Torre é um bairro tradicional entre o Centro e a Epitácio Pessoa, com comércio de rua, clínicas e o Mercado Público da Torre, onde funcionam boxes de alimentação. Muitos estabelecimentos das avenidas Rui Barbosa e Carneiro da Cunha ocupam casas adaptadas, e a caixa de gordura desses imóveis é o ponto que mais falha.',
    faq: [
      {
        q: 'Abri um restaurante em uma casa na Torre. A caixa de gordura da casa serve?',
        a: 'Em geral ela fica pequena para o uso. Uma caixa dimensionada para uma família enche em poucos dias com cozinha comercial. Enquanto não é trocada por uma maior, precisa de limpeza frequente.',
      },
      {
        q: 'Qual o sinal de que a caixa de gordura está cheia?',
        a: 'Pia escoando devagar, mau cheiro perto da caixa e gordura visível na saída. Se a água da pia volta pelo ralo do chão, a caixa já passou do limite.',
      },
      {
        q: 'Vocês atendem boxes e lanchonetes perto do Mercado da Torre?',
        a: 'Sim. Atendemos comércios e residências na Torre, 24 horas por dia, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Brisamar',
    em: 'no Brisamar',
    regiao: 'Zona Leste',
    h1: 'Desentupimento no Brisamar com atendimento 24 horas',
    vizinhos: ['Jardim Luna', 'Manaíra', 'Tambaú', 'Tambauzinho', 'Pedro Gondim'],
    referencias: ['Avenida Senador Ruy Carneiro', 'Rua Zulmira Félix de Carvalho', 'Rua Rosalinda Jurema'],
    imovel: 'Edifícios residenciais de padrão médio e alto, com casas em ruas internas e comércio na Avenida Senador Ruy Carneiro.',
    problema:
      'Em prédios residenciais, a prumada do banheiro recebe papel, fio dental, cotonetes e lenços umedecidos de todos os andares. Esses materiais não se desfazem e formam um tampão na coluna.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Brisamar fica junto à Avenida Senador Ruy Carneiro, entre a Epitácio Pessoa e Manaíra. É um bairro residencial que ganhou muitos edifícios, com ruas calmas como a Zulmira Félix de Carvalho e a Rosalinda Jurema. Nos condomínios, a coluna de esgoto é o ponto que mais exige atenção.',
    faq: [
      {
        q: 'Lenço umedecido pode ir no vaso sanitário?',
        a: 'Não. Mesmo os que trazem na embalagem a indicação de descarte no vaso não se desfazem como o papel higiênico. Eles se enroscam em qualquer aspereza do tubo e fecham a coluna.',
      },
      {
        q: 'O vaso do meu apartamento borbulha quando o vizinho dá descarga. É normal?',
        a: 'Não é. O borbulhamento indica que o ar não está circulando na coluna, o que acontece quando ela está parcialmente obstruída. Vale avisar o síndico antes que a água comece a voltar.',
      },
      {
        q: 'Atendem prédios do Brisamar perto da Ruy Carneiro?',
        a: 'Sim. Atendemos todo o Brisamar, 24 horas por dia, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Jardim Luna',
    em: 'no Jardim Luna',
    regiao: 'Zona Leste',
    h1: 'Desentupidora 24 horas no Jardim Luna',
    vizinhos: ['Brisamar', 'Manaíra', 'Pedro Gondim', 'Bairro dos Ipês'],
    referencias: ['Rua Carlos Ulisses Carvalho', 'Rua João Terroso de Souza'],
    imovel: 'Edifícios residenciais com garagem em subsolo ou semienterrada, lajes de cobertura e áreas de lazer, além de casas.',
    problema:
      'Folhas, terra e sedimentos se acumulam em calhas, ralos de laje e tubos de queda. Na chuva forte, a água não desce pela tubulação, fica represada na laje e escorre para a garagem.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Jardim Luna é um bairro residencial pequeno, vizinho do Brisamar e de Manaíra, formado por prédios de apartamentos e casas em ruas como a Carlos Ulisses Carvalho. Os edifícios têm lajes, jardins e garagens que dependem de ralos e tubos de águas pluviais desobstruídos, principalmente nos meses de chuva.',
    faq: [
      {
        q: 'A laje de cobertura do prédio empoça água depois da chuva. É entupimento?',
        a: 'Na maior parte das vezes, sim. O ralo da laje ou o tubo de queda está com folhas e terra, e a água fica parada. Água acumulada em laje acaba em infiltração no apartamento de baixo.',
      },
      {
        q: 'O ralo da garagem do subsolo devolve água quando chove. O que fazer?',
        a: 'É preciso desobstruir a linha que liga os ralos ao ponto de saída e limpar as caixas de passagem. Enquanto o trecho está entupido, a água de fora entra em vez de sair.',
      },
      {
        q: 'Vocês atendem condomínios do Jardim Luna em dias de chuva forte?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Portal do Sol',
    em: 'no Portal do Sol',
    regiao: 'Zona Leste',
    h1: 'Desentupidora no Portal do Sol para casas e condomínios',
    vizinhos: ['Altiplano', 'Mangabeira', 'Cabo Branco', 'Bancários'],
    referencias: ['Avenida Hilton Souto Maior', 'Rua Poetisa Guiomar Travassos Chianca'],
    imovel: 'Condomínios horizontais fechados com casas grandes, além de casas em lotes amplos e residenciais mais recentes.',
    problema:
      'Em condomínios horizontais, o esgoto de cada casa percorre dezenas de metros de rede interna antes de sair do condomínio. Areia, gordura e raízes se acumulam ao longo desse percurso e nas caixas de passagem.',
    servico: 'hidrojateamento',
    abertura:
      'O Portal do Sol é conhecido pelos condomínios horizontais fechados, com acesso pela Avenida Hilton Souto Maior. As casas têm vários banheiros, área gourmet e jardins extensos, e as redes internas dos condomínios são longas. Para limpar toda a extensão do cano, e não só abrir um furo na obstrução, o método indicado é o hidrojateamento.',
    faq: [
      {
        q: 'Qual a diferença entre desentupir com cabo e com hidrojato?',
        a: 'O cabo rotativo perfura a obstrução e libera a passagem. O hidrojato usa água em alta pressão para soltar o que está aderido à parede do tubo e arrastar o material para fora, limpando o trecho inteiro.',
      },
      {
        q: 'As raízes do jardim podem entupir a rede da casa?',
        a: 'Podem. Raízes procuram umidade e entram pelas juntas das caixas e dos tubos. Em terrenos com muitas árvores e palmeiras, esse é um motivo frequente de entupimento repetido.',
      },
      {
        q: 'Vocês atendem dentro dos condomínios fechados do Portal do Sol?',
        a: 'Sim. Basta liberar a entrada da equipe na portaria. O atendimento é 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Castelo Branco',
    em: 'no Castelo Branco',
    regiao: 'Zona Leste',
    h1: 'Desentupimento no Castelo Branco 24h',
    vizinhos: ['Bancários', 'Jardim Cidade Universitária', 'Altiplano', 'Miramar'],
    referencias: ['UFPB Campus I', 'Hospital Universitário Lauro Wanderley'],
    imovel: 'Casas de conjunto habitacional, muitas ampliadas, com quitinetes e quartos de aluguel para estudantes nos fundos e no andar de cima.',
    problema:
      'A casa original foi dividida em várias unidades, mas o cano de saída continua o mesmo. Com mais banheiros e pias ligados a um ramal que não foi ampliado, a tubulação trabalha no limite e entope com facilidade.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Castelo Branco fica ao lado do Campus I da UFPB e do Hospital Universitário Lauro Wanderley. A proximidade com a universidade transformou muitas casas do conjunto em moradia estudantil, com quitinetes construídas no mesmo lote. É uma ocupação que a rede original das casas não previa.',
    faq: [
      {
        q: 'Tenho quitinetes alugadas no Castelo Branco e os canos entopem todo mês. Por quê?',
        a: 'Porque várias unidades despejam em um ramal dimensionado para uma casa só. Além do volume, moradores diferentes descartam coisas diferentes no vaso e na pia, o que acelera a obstrução.',
      },
      {
        q: 'Dá para saber em que ponto do cano está o entupimento?',
        a: 'Dá. Testando ponto a ponto, do mais próximo da rua ao mais distante, é possível localizar o trecho bloqueado e atuar direto nele.',
      },
      {
        q: 'Atendem repúblicas e casas perto da UFPB à noite?',
        a: 'Sim. O atendimento no Castelo Branco é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- CENTRO ----------------
  {
    nome: 'Centro',
    em: 'no Centro',
    regiao: 'Centro',
    h1: 'Desentupidora no Centro de João Pessoa 24 horas',
    vizinhos: ['Varadouro', 'Tambiá', 'Jaguaribe', 'Torre', 'Roger'],
    referencias: ['Parque Solon de Lucena (Lagoa)', 'Praça João Pessoa', 'Rua Duque de Caxias', 'Avenida General Osório'],
    imovel: 'Prédios comerciais e de escritórios antigos, lojas de rua, repartições públicas e sobrados com comércio no térreo.',
    problema:
      'Os edifícios comerciais do Centro têm tubulação antiga, com trechos de ferro e de manilha. A crosta interna diminui a passagem e o uso diário de centenas de pessoas completa o bloqueio.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Centro de João Pessoa reúne lojas, bancos, repartições e prédios de escritórios em volta da Lagoa do Parque Solon de Lucena, da Praça João Pessoa e da Rua Duque de Caxias. São construções de épocas diferentes, e boa parte ainda funciona com os canos originais. Por isso os entupimentos no Centro costumam estar ligados à idade da tubulação.',
    faq: [
      {
        q: 'O banheiro da minha loja no Centro entope toda semana. O problema é o vaso?',
        a: 'Dificilmente. Quando o entupimento se repete em intervalo curto, a causa costuma estar no cano, que perdeu diâmetro por causa da crosta ou tem um trecho afundado onde o material fica retido.',
      },
      {
        q: 'Cano de ferro antigo pode ser desentupido sem ser trocado?',
        a: 'Pode. A desobstrução remove o que está bloqueando a passagem e devolve o escoamento. Se o cano estiver muito deteriorado, a equipe avisa o que foi encontrado para que o proprietário decida o que fazer.',
      },
      {
        q: 'Vocês atendem lojas e escritórios do Centro antes do horário comercial?',
        a: 'Sim. Como o atendimento é 24 horas, o serviço pode ser feito de madrugada ou cedo, antes de o comércio abrir.',
      },
    ],
  },
  {
    nome: 'Jaguaribe',
    em: 'em Jaguaribe',
    regiao: 'Centro',
    h1: 'Desentupimento em Jaguaribe, de dia ou de madrugada',
    vizinhos: ['Centro', 'Torre', 'Cruz das Armas', 'Varadouro'],
    referencias: ['Avenida Vasco da Gama', 'Avenida Primeiro de Maio', 'Rua Alberto de Brito', 'Avenida Capitão José Pessoa'],
    imovel: 'Casas antigas de frente estreita, muitas geminadas, com comércio de bairro, escolas e clínicas nas avenidas.',
    problema:
      'Casas geminadas e de fundos costumam dividir o mesmo ramal de esgoto. Quando ele entope, a água volta no imóvel que fica mais baixo ou mais perto da saída para a rua.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Jaguaribe é um bairro de casas antigas colado ao Centro, com movimento nas avenidas Vasco da Gama e Primeiro de Maio. Os lotes são estreitos e as casas, construídas parede com parede. Nessa configuração, o esgoto de vários imóveis segue junto para a rua, e um entupimento raramente afeta uma casa só.',
    faq: [
      {
        q: 'O esgoto está voltando no meu quintal em Jaguaribe, mas a casa do vizinho está normal. Por quê?',
        a: 'Provavelmente o seu imóvel é o ponto mais baixo do ramal compartilhado. A obstrução fica depois da sua casa, e o esgoto de todos sai pelo primeiro ralo ou caixa que encontra.',
      },
      {
        q: 'Onde fica a caixa de inspeção em casa antiga?',
        a: 'Normalmente no quintal, no corredor lateral ou na calçada. Em muitas casas ela foi coberta por piso em alguma reforma. A equipe localiza a caixa ou trabalha por outro ponto de acesso.',
      },
      {
        q: 'Atendem em Jaguaribe em domingos e feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Tambiá',
    em: 'em Tambiá',
    regiao: 'Centro',
    h1: 'Desentupidora em Tambiá 24h',
    vizinhos: ['Centro', 'Roger', 'Treze de Maio', 'Torre'],
    referencias: ['Shopping Tambiá', 'Rua Deputado Odon Bezerra', 'Avenida Monsenhor Walfredo Leal'],
    imovel: 'Lojas, escolas, clínicas e escritórios instalados em casas e prédios antigos, com residências nas ruas internas.',
    problema:
      'Banheiros de uso coletivo recebem papel-toalha, absorventes e embalagens. Esse material não se desfaz na água e trava no sifão do vaso ou no primeiro trecho do ramal.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'Tambiá é uma extensão do Centro, com comércio em torno do Shopping Tambiá, na Rua Deputado Odon Bezerra, e escolas e clínicas na região da Avenida Monsenhor Walfredo Leal. O movimento diário de alunos, pacientes e clientes sobrecarrega os banheiros, e o vaso sanitário entupido é a ocorrência mais comum.',
    faq: [
      {
        q: 'O vaso do banheiro de clientes entupiu e a água subiu até a borda. O que fazer agora?',
        a: 'Não dê descarga de novo. Feche o registro do vaso, isole o banheiro e chame a desentupidora. Uma nova descarga faz a água transbordar.',
      },
      {
        q: 'Papel-toalha pode ser jogado no vaso?',
        a: 'Não. O papel-toalha é feito para resistir à água e não se desmancha como o papel higiênico. Em banheiros coletivos, ele é uma das principais causas de entupimento.',
      },
      {
        q: 'Vocês atendem escolas e clínicas de Tambiá fora do expediente?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, para comércio e residências.',
      },
    ],
  },
  {
    nome: 'Roger',
    em: 'no Roger',
    regiao: 'Centro',
    h1: 'Desentupidora no Roger: atendimento 24 horas',
    vizinhos: ['Tambiá', 'Centro', 'Varadouro', 'Treze de Maio', 'Mandacaru'],
    referencias: ['Parque Zoobotânico Arruda Câmara (Bica)', 'Avenida Gouveia Nóbrega'],
    imovel: 'Casas térreas e sobrados em ruas com declive, entre a parte alta do bairro e o Baixo Roger.',
    problema:
      'Nas ruas em declive, a água da chuva desce com força e carrega terra, folhas e lixo para ralos e canaletas. Os imóveis da parte baixa recebem esse material e ficam com a drenagem obstruída.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Roger fica ao norte do Centro e abriga o Parque Zoobotânico Arruda Câmara, a Bica, na Avenida Gouveia Nóbrega. O bairro tem uma parte alta e uma parte baixa, o Baixo Roger, ligadas por ruas inclinadas. Quando chove forte, a diferença de nível concentra a água nos quintais e ralos de quem mora embaixo.',
    faq: [
      {
        q: 'Moro na parte baixa do Roger e meu quintal enche quando chove. Tem como melhorar?',
        a: 'Tem. O primeiro passo é desobstruir ralos, canaletas e o tubo que leva a água do quintal para a rua. Com a tubulação livre, a água da chuva escoa em vez de ficar acumulada.',
      },
      {
        q: 'Posso ligar o ralo do quintal no cano do esgoto?',
        a: 'Não é o correto. Água de chuva e esgoto devem seguir por tubulações separadas. Quando são ligados juntos, a chuva forte sobrecarrega o cano e faz o esgoto voltar para dentro de casa.',
      },
      {
        q: 'Atendem perto da Bica e no Baixo Roger?',
        a: 'Sim. Atendemos todo o Roger, 24 horas por dia, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Varadouro',
    em: 'no Varadouro',
    regiao: 'Centro',
    h1: 'Desentupimento no Varadouro: centro histórico e comércio',
    vizinhos: ['Centro', 'Roger', 'Jaguaribe', 'Tambiá'],
    referencias: ['Praça Anthenor Navarro', 'Hotel Globo', 'Terminal Rodoviário de João Pessoa', 'Rua Maciel Pinheiro'],
    imovel: 'Casarões e sobrados do centro histórico usados como bares, espaços culturais, lojas e depósitos, além de comércio atacadista.',
    problema:
      'A tubulação dos casarões é antiga, com manilhas de barro e trechos refeitos em épocas diferentes. A crosta e os desníveis seguram gordura e sedimentos, e o desentupimento simples dura pouco.',
    servico: 'hidrojateamento',
    abertura:
      'O Varadouro é a parte baixa do centro histórico de João Pessoa, onde ficam a Praça Anthenor Navarro, o Hotel Globo e o Terminal Rodoviário. Os casarões da região hoje abrigam bares, lojas e espaços culturais, com instalações que foram sendo adaptadas ao longo do tempo. Para canos antigos e incrustados, o hidrojateamento é o serviço que limpa de fato a parede do tubo.',
    faq: [
      {
        q: 'O hidrojateamento pode ser usado em tubulação antiga de casarão?',
        a: 'Pode, com a pressão ajustada ao estado do tubo. Antes de aplicar o jato, a equipe avalia o material e as condições do trecho para limpar sem forçar a tubulação.',
      },
      {
        q: 'Tenho um bar em um sobrado do Varadouro e a pia entope sempre. Por quê?',
        a: 'Sobrados adaptados costumam ter o ramal da cozinha ligado a uma rede antiga, com pouca inclinação. A gordura do bar se deposita nesse trecho e reduz a passagem a cada semana.',
      },
      {
        q: 'Vocês atendem comércios perto da rodoviária e da Praça Anthenor Navarro à noite?',
        a: 'Sim. O atendimento no Varadouro é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- ZONA NORTE ----------------
  {
    nome: 'Bairro dos Estados',
    em: 'no Bairro dos Estados',
    regiao: 'Zona Norte',
    h1: 'Desentupidora 24h no Bairro dos Estados',
    vizinhos: ['Pedro Gondim', 'Treze de Maio', 'Torre', 'Expedicionários', 'Mandacaru'],
    referencias: ['Avenida Epitácio Pessoa', 'Avenida Rio Grande do Sul', 'Avenida Piauí', 'Avenida Espírito Santo'],
    imovel: 'Casas grandes em lotes amplos, muitas ocupadas por clínicas, escritórios e escolas, e prédios residenciais.',
    problema:
      'Casas que viraram clínica ou escritório passam a receber dezenas de pessoas por dia. A rede de esgoto, feita para uma família, não acompanha o uso, e o ramal principal entope entre a casa e a rua.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'No Bairro dos Estados, as avenidas têm nomes de estados brasileiros, como Rio Grande do Sul, Piauí e Espírito Santo, e a Epitácio Pessoa passa pela borda do bairro. As casas amplas da região foram em boa parte convertidas em clínicas, consultórios e escritórios. A mudança de uso é a origem da maioria dos entupimentos de esgoto que atendemos ali.',
    faq: [
      {
        q: 'Minha clínica funciona em uma casa adaptada e o esgoto voltou pelo ralo. O que aconteceu?',
        a: 'O ramal que leva o esgoto da casa para a rua está obstruído. Como todos os banheiros descarregam nele, a água volta pelo ponto mais baixo, que costuma ser um ralo de piso.',
      },
      {
        q: 'É preciso interromper o atendimento da clínica durante o desentupimento?',
        a: 'Normalmente não. O trabalho é feito pela caixa de inspeção ou por um ponto externo. Só é necessário evitar o uso dos banheiros enquanto a equipe atua no ramal.',
      },
      {
        q: 'Atendem em todas as avenidas do Bairro dos Estados?',
        a: 'Sim. Atendemos o bairro inteiro, 24 horas por dia, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Pedro Gondim',
    em: 'no Pedro Gondim',
    regiao: 'Zona Norte',
    h1: 'Desentupimento no Pedro Gondim, 24 horas',
    vizinhos: ['Bairro dos Estados', 'Tambauzinho', 'Brisamar', 'Bairro dos Ipês', 'Jardim Luna'],
    referencias: ['Avenida Epitácio Pessoa', 'Rua João Teixeira de Carvalho', 'Rua Orestes Lisboa'],
    imovel: 'Casas residenciais em ruas internas, prédios de apartamentos e comércio no trecho da Avenida Epitácio Pessoa.',
    problema:
      'Em muitas casas, a caixa de gordura fica sob o piso da garagem ou do quintal e passa anos sem ser aberta. A gordura endurece, ocupa todo o volume da caixa e bloqueia a saída.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Pedro Gondim é um bairro residencial ao lado do Bairro dos Estados, com frente para um trecho da Avenida Epitácio Pessoa. Nas ruas internas, como a João Teixeira de Carvalho e a Orestes Lisboa, predominam casas. Em boa parte delas, a caixa de gordura é um item esquecido, que só chama atenção quando a pia para.',
    faq: [
      {
        q: 'Não sei onde fica a caixa de gordura da minha casa. Como descobrir?',
        a: 'Ela costuma ficar do lado de fora, perto da parede da cozinha, sob uma tampa de concreto ou de plástico. Em casas reformadas, a tampa pode estar coberta por piso, e a equipe ajuda a localizar.',
      },
      {
        q: 'Casa também precisa limpar caixa de gordura com regularidade?',
        a: 'Precisa. A caixa retém a gordura para que ela não siga para a rede. Se nunca é limpa, enche e deixa de cumprir a função, e a gordura passa a entupir o cano.',
      },
      {
        q: 'Vocês atendem casas e prédios do Pedro Gondim em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Treze de Maio',
    em: 'no Treze de Maio',
    regiao: 'Zona Norte',
    h1: 'Desentupidora perto de você no Treze de Maio',
    vizinhos: ['Bairro dos Estados', 'Mandacaru', 'Tambiá', 'Roger'],
    referencias: ['Rua Prefeito José de Carvalho', 'Rua Lins de Vasconcelos', 'Praça Jornalista José Leal'],
    imovel: 'Casas térreas de família, algumas com ponto comercial na frente, e pequenos prédios residenciais.',
    problema:
      'Em casas, a pia da cozinha entope por gordura, borra de café e restos de comida. O ramal sai da cozinha, atravessa o quintal e passa pela caixa de gordura, e qualquer um desses pontos pode estar bloqueado.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Treze de Maio é um bairro residencial entre o Bairro dos Estados e Mandacaru, com ruas como a Prefeito José de Carvalho e a Lins de Vasconcelos e a Praça Jornalista José Leal. A maior parte dos imóveis é de casas de família, onde se cozinha todos os dias. O entupimento de pia é, de longe, o mais frequente.',
    faq: [
      {
        q: 'Borra de café entope a pia?',
        a: 'Entope. A borra não se dissolve. Ela se deposita no fundo do cano e, com a gordura, forma uma pasta densa que estreita a passagem.',
      },
      {
        q: 'A pia e o tanque entupiram juntos. O problema é um só?',
        a: 'É bem provável. Em muitas casas, a pia e o tanque se encontram em um mesmo ramal antes da caixa de gordura. Quando os dois param ao mesmo tempo, a obstrução está depois desse encontro.',
      },
      {
        q: 'Atendem no Treze de Maio à noite e nos fins de semana?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Mandacaru',
    em: 'em Mandacaru',
    regiao: 'Zona Norte',
    h1: 'Desentupidora em Mandacaru para casas e comércio',
    vizinhos: ['Bairro dos Ipês', 'Treze de Maio', 'Bairro dos Estados', 'Roger'],
    referencias: ['Avenida Dom Manoel Paiva', 'Avenida Caramuru', 'Rua Lopes Trovão'],
    imovel: 'Casas em lotes pequenos, com puxadinhos e segundo pavimento, e comércio de bairro nas vias principais.',
    problema:
      'Construções ampliadas aos poucos têm canos de diâmetro pequeno, com muitas curvas e pouca inclinação. A água perde velocidade nesses trechos e deixa para trás os resíduos sólidos.',
    servico: 'desentupimento-de-cano',
    abertura:
      'Mandacaru é um bairro populoso da Zona Norte, com comércio ativo e casas que cresceram junto com as famílias: um cômodo nos fundos, um andar em cima, um ponto comercial na frente. Cada ampliação ligou novos pontos de água à tubulação que já existia, e é nesses canos sobrecarregados que os entupimentos acontecem.',
    faq: [
      {
        q: 'Construí um andar em cima da casa e agora o cano de baixo entope. Tem relação?',
        a: 'Tem. O cano que atendia um banheiro passou a receber dois ou três. Se o diâmetro e a inclinação não foram revistos na obra, o trecho antigo não dá vazão.',
      },
      {
        q: 'Cano com pouca queda entope mais?',
        a: 'Sim. Sem inclinação suficiente, a água escorre devagar e não arrasta papel, gordura e areia. O material fica depositado e a passagem diminui a cada uso.',
      },
      {
        q: 'Vocês atendem lojas e residências em Mandacaru de madrugada?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas por dia, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Bairro dos Ipês',
    em: 'no Bairro dos Ipês',
    regiao: 'Zona Norte',
    h1: 'Desentupimento no Bairro dos Ipês: chegamos em 20 minutos',
    vizinhos: ['Mandacaru', 'Bairro dos Estados', 'Pedro Gondim', 'Jardim Luna'],
    referencias: ['Avenida Presidente Tancredo Neves', 'BR-230'],
    imovel: 'Casas e prédios residenciais de poucos andares, com comércio ao longo da Avenida Presidente Tancredo Neves.',
    problema:
      'Cabelo, sabonete e fiapos de pano se acumulam na caixa sifonada do banheiro e da área de serviço. A massa formada fecha a saída do ralo, e a água do banho passa a empoçar.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Bairro dos Ipês é predominantemente residencial e fica junto à BR-230, com a Avenida Presidente Tancredo Neves como via principal. São casas e pequenos prédios de moradia. O chamado típico vem de dentro do banheiro ou da área de serviço: o ralo que não escoa mais.',
    faq: [
      {
        q: 'A água do chuveiro está empoçando no box. Posso resolver sozinho?',
        a: 'Você pode retirar a grelha e limpar o que estiver ao alcance da mão na caixa sifonada. Se a água continuar parada, a obstrução está no cano depois da caixa e precisa de equipamento.',
      },
      {
        q: 'O ralo do banheiro está com mau cheiro. É entupimento?',
        a: 'Pode ser o começo de um. O cheiro aparece quando há material parado na caixa sifonada ou quando o fecho de água secou. Se o ralo também estiver lento, há obstrução em formação.',
      },
      {
        q: 'Atendem perto da Tancredo Neves e nas ruas internas dos Ipês?',
        a: 'Sim. Atendemos todo o Bairro dos Ipês, 24 horas por dia, todos os dias.',
      },
    ],
  },

  // ---------------- ZONA SUL ----------------
  {
    nome: 'Jardim Cidade Universitária',
    em: 'no Jardim Cidade Universitária',
    regiao: 'Zona Sul',
    h1: 'Desentupidora 24 horas no Jardim Cidade Universitária',
    vizinhos: ['Bancários', 'Castelo Branco', 'Água Fria', 'Mangabeira'],
    referencias: ['Rua Walfredo Macedo Brandão', 'Rua Doutor Ephigênio Barbosa da Silva'],
    imovel: 'Prédios residenciais de três e quatro andares, sem elevador, com apartamentos ocupados por famílias e estudantes.',
    problema:
      'Nos prédios baixos, as pias de todos os apartamentos de uma mesma prumada descarregam em uma caixa de gordura comum no térreo. Quando a caixa enche, as pias do primeiro andar são as primeiras a parar.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Jardim Cidade Universitária fica ao lado dos Bancários e perto da UFPB. O bairro é formado por quadras de prédios baixos, em ruas como a Walfredo Macedo Brandão e a Doutor Ephigênio Barbosa da Silva, com muitos apartamentos alugados para estudantes. Pia entupida é o problema que mais se repete nesses edifícios.',
    faq: [
      {
        q: 'Moro no térreo e a pia entope mais do que a dos vizinhos de cima. Por quê?',
        a: 'Porque o térreo é o ponto mais próximo da caixa de gordura do prédio. Quando a caixa ou o trecho final do ramal está cheio, a água dos andares de cima ainda desce, mas a do térreo não tem para onde ir.',
      },
      {
        q: 'Quem paga o desentupimento em apartamento alugado?',
        a: 'Isso depende do contrato e da causa do entupimento, e deve ser combinado entre inquilino e proprietário. A equipe informa onde estava a obstrução, o que ajuda a definir a responsabilidade.',
      },
      {
        q: 'Vocês atendem prédios sem elevador e sem porteiro?',
        a: 'Sim. Atendemos qualquer tipo de prédio no Jardim Cidade Universitária, 24 horas por dia, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Bancários',
    em: 'nos Bancários',
    regiao: 'Zona Sul',
    h1: 'Desentupidora nos Bancários: bares, restaurantes e residências',
    vizinhos: ['Jardim Cidade Universitária', 'Mangabeira', 'Castelo Branco', 'Água Fria'],
    referencias: ['Avenida Bancário Sérgio Guerra', 'Praça da Paz', 'Rua Empresário João Rodrigues Alves'],
    imovel: 'Bares, restaurantes, lanchonetes e lojas nas vias principais, com prédios residenciais baixos e casas nas ruas internas.',
    problema:
      'Lanchonetes, pizzarias e bares despejam óleo e gordura em volume alto, muitas vezes em caixas pequenas. A caixa transborda, a gordura endurece no ramal e a cozinha fica sem escoamento.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Os Bancários concentram a vida noturna da Zona Sul. Na Avenida Bancário Sérgio Guerra, o Retão dos Bancários, e em volta da Praça da Paz há uma sequência de bares, lanchonetes e restaurantes frequentados por moradores e universitários. Tanta cozinha em funcionamento faz da caixa de gordura o serviço mais pedido no bairro.',
    faq: [
      {
        q: 'A caixa de gordura da minha lanchonete nos Bancários transbordou no salão. O que fazer?',
        a: 'Pare de usar as pias e chame a desentupidora. A caixa precisa ser esvaziada e limpa, e o ramal de saída deve ser desobstruído, porque o transbordamento indica que a gordura já passou para o cano.',
      },
      {
        q: 'Posso jogar o óleo da fritadeira na pia se a caixa de gordura estiver limpa?',
        a: 'Não. A caixa de gordura retém a gordura que sai na lavagem da louça, e não litros de óleo de fritura. O óleo usado deve ser guardado em recipiente fechado e entregue para coleta.',
      },
      {
        q: 'Vocês atendem bares do Retão dos Bancários depois do fechamento?',
        a: 'Sim. O atendimento é 24 horas, então o serviço pode ser feito de madrugada, depois que a casa fecha.',
      },
    ],
  },
  {
    nome: 'Mangabeira',
    em: 'em Mangabeira',
    regiao: 'Zona Sul',
    h1: 'Desentupidora em Mangabeira 24 horas',
    vizinhos: ['Bancários', 'José Américo', 'Valentina', 'Cuiá', 'Portal do Sol'],
    referencias: ['Avenida Josefa Taveira', 'Mangabeira Shopping', 'Avenida Hilton Souto Maior', 'Mercado Público de Mangabeira'],
    imovel: 'Casas de conjunto habitacional ampliadas, com lojas e pontos comerciais na frente, e prédios residenciais mais recentes.',
    problema:
      'As casas do conjunto foram ampliadas para a frente e para os fundos, e a caixa de inspeção ficou embaixo de piso ou de construção. Sem acesso para limpeza, o ramal de esgoto acumula resíduos até o esgoto voltar pelo ralo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Mangabeira é o bairro mais populoso de João Pessoa e funciona como uma cidade dentro da cidade, com shopping, mercado público e o comércio da Avenida Josefa Taveira. Nas ruas residenciais, as casas originais do conjunto cresceram e ganharam lojas na frente. O esgoto voltando para dentro do imóvel é a emergência mais comum.',
    faq: [
      {
        q: 'Minha loja na Josefa Taveira fica na frente de uma casa. O esgoto dos dois é o mesmo?',
        a: 'Em muitos imóveis de Mangabeira, sim. A loja foi construída no recuo da casa e ligada ao mesmo ramal. Uma obstrução perto da calçada afeta a loja e a residência.',
      },
      {
        q: 'A caixa de esgoto ficou embaixo do piso da garagem. Vocês conseguem desentupir?',
        a: 'Sim. Quando a caixa não está acessível, o desentupimento é feito por outro ponto, como um ralo ou a saída do vaso. Se for necessário abrir o piso para chegar à caixa, a equipe avisa antes.',
      },
      {
        q: 'Atendem em todas as etapas de Mangabeira, inclusive de madrugada?',
        a: 'Sim. Atendemos Mangabeira inteira, 24 horas por dia, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Valentina',
    em: 'no Valentina',
    regiao: 'Zona Sul',
    h1: 'Desentupimento no Valentina 24h',
    vizinhos: ['Mangabeira', 'Cuiá', 'Gramame', 'Ernesto Geisel'],
    referencias: ['Mercado Público do Valentina', 'Praça Soares Madruga'],
    imovel: 'Casas térreas de conjunto habitacional, com quintal, área de serviço descoberta e garagem.',
    problema:
      'Ralos de quintal e de área de serviço descoberta recebem terra, folhas, pelos de animais e restos de sabão. O material assenta na caixa sifonada e no cano, e a água da lavagem de roupa passa a alagar o piso.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Valentina, nome pelo qual todos conhecem o conjunto Valentina de Figueiredo, é um bairro de casas na Zona Sul, com mercado público e a Praça Soares Madruga como pontos de encontro. Quase toda casa tem quintal e área de serviço aberta. É dali que vem a maior parte dos chamados: ralos que deixaram de dar vazão.',
    faq: [
      {
        q: 'O ralo do quintal entope sempre depois que lavo a área. O que acontece?',
        a: 'A água da lavagem empurra terra e folhas para dentro do ralo. Sem grelha fina ou cesto, esse material entra no cano e se acumula no primeiro trecho horizontal.',
      },
      {
        q: 'A água do tanque sai pelo ralo do chão em vez de ir embora. É entupimento?',
        a: 'É. O tanque e o ralo estão ligados ao mesmo cano, e a obstrução fica depois do ralo. A água do tanque encontra o caminho fechado e sobe pelo ponto mais baixo.',
      },
      {
        q: 'Vocês atendem no Valentina em domingos e feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'José Américo',
    em: 'no José Américo',
    regiao: 'Zona Sul',
    h1: 'Desentupidora no José Américo, a qualquer hora',
    vizinhos: ['Água Fria', 'Mangabeira', 'Ernesto Geisel', 'Cuiá', 'Cristo Redentor'],
    referencias: ['Avenida Hilton Souto Maior', 'Trevo das Mangabeiras'],
    imovel: 'Casas de conjunto habitacional e residenciais de apartamentos, com comércio ao longo da Avenida Hilton Souto Maior.',
    problema:
      'O vaso sanitário entope por excesso de papel, por objetos que caem na bacia e por descarga com pouca água. O material trava no sifão da louça ou na curva logo depois dela.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O José Américo fica às margens da Avenida Hilton Souto Maior, perto do Trevo das Mangabeiras, que liga o bairro a Mangabeira e aos Bancários. É uma área de casas e de residenciais de apartamentos, com famílias grandes e, em muitos imóveis, um único banheiro. Vaso entupido aqui é urgência.',
    faq: [
      {
        q: 'Caiu um objeto no vaso e ele entupiu. Dá para tirar sem quebrar a louça?',
        a: 'Na maioria das vezes, sim. O objeto costuma ficar preso no sifão do vaso e é retirado com equipamento próprio. Não empurre com arame ou cabo de vassoura, porque isso leva o objeto para o cano.',
      },
      {
        q: 'O vaso desce devagar, mas não chega a transbordar. Preciso chamar a desentupidora?',
        a: 'Vale chamar. Vaso lento indica obstrução parcial, e ela tende a fechar de vez no momento menos conveniente. Resolver cedo é mais simples do que lidar com o transbordamento.',
      },
      {
        q: 'Atendem no José Américo de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Água Fria',
    em: 'em Água Fria',
    regiao: 'Zona Sul',
    h1: 'Desentupimento em Água Fria: condomínios, casas e empresas',
    vizinhos: ['José Américo', 'Jardim Cidade Universitária', 'Cristo Redentor', 'Ernesto Geisel', 'Bancários'],
    referencias: ['UNIPÊ', 'BR-230', 'Rua Diógenes Chianca'],
    imovel: 'Condomínios de blocos de apartamentos, casas, instituições de ensino e empresas próximas à BR-230.',
    problema:
      'Nos condomínios de vários blocos, o esgoto de cada prédio passa por caixas de inspeção e segue por uma rede interna comum. Uma obstrução nessa rede faz o esgoto extravasar pelas caixas do pátio e voltar nos apartamentos térreos.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Água Fria fica junto à BR-230 e tem como referência o campus do UNIPÊ, na Rua Diógenes Chianca. Em volta, o bairro reúne condomínios residenciais de blocos, casas e empresas. Nos condomínios, o entupimento que mais preocupa é o da rede de esgoto interna, porque atinge vários blocos ao mesmo tempo.',
    faq: [
      {
        q: 'Uma caixa de esgoto no pátio do condomínio está transbordando. É urgente?',
        a: 'É. O transbordamento mostra que a rede depois daquela caixa está bloqueada. Enquanto não for desobstruída, todo o esgoto dos blocos ligados a ela vai sair pelo pátio ou voltar nos térreos.',
      },
      {
        q: 'Com que frequência o condomínio deve inspecionar as caixas de esgoto?',
        a: 'Abrir e olhar as caixas a cada poucos meses já permite perceber acúmulo de gordura, areia ou raízes antes que virem obstrução. A frequência ideal depende do número de moradores.',
      },
      {
        q: 'Vocês atendem empresas e instituições de ensino em Água Fria?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas por dia, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Ernesto Geisel',
    em: 'no Ernesto Geisel',
    regiao: 'Zona Sul',
    h1: 'Desentupidora 24h no Ernesto Geisel',
    vizinhos: ['Cristo Redentor', 'Funcionários', 'José Américo', 'Cuiá', 'Água Fria'],
    referencias: ['Avenida Juscelino Kubitschek', 'Avenida Valdemar Galdino Naziazeno'],
    imovel: 'Casas de conjunto habitacional, reformadas e ampliadas, com padarias, mercadinhos e lanchonetes nas avenidas.',
    problema:
      'Em casas com cozinha de uso diário intenso, a gordura se deposita no ramal entre a pia e a caixa de gordura. O trecho costuma ser longo, passar por baixo do piso e ter pouca inclinação.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Ernesto Geisel, ou simplesmente Geisel, nasceu de um conjunto habitacional e hoje tem comércio próprio nas avenidas Juscelino Kubitschek e Valdemar Galdino Naziazeno. As casas foram reformadas, e muitas cozinhas mudaram de lugar em relação ao projeto original. Esse deslocamento alongou o cano da pia, que virou o ponto fraco da instalação.',
    faq: [
      {
        q: 'Mudei a cozinha de lugar na reforma e a pia passou a entupir. Por quê?',
        a: 'O novo ramal ficou mais longo e, em geral, com menos queda do que o original. A gordura esfria antes de chegar à caixa e fica grudada no caminho.',
      },
      {
        q: 'Detergente em grande quantidade ajuda a desentupir a pia?',
        a: 'Não. O detergente solta a gordura da louça, mas não remove a que já endureceu dentro do cano. Em excesso, ele só produz espuma e aumenta o volume de resíduo.',
      },
      {
        q: 'Atendem padarias e lanchonetes do Geisel antes de abrirem?',
        a: 'Sim. O atendimento é 24 horas, e chegamos em 20 minutos, em qualquer horário.',
      },
    ],
  },
  {
    nome: 'Funcionários',
    em: 'nos Funcionários',
    regiao: 'Zona Sul',
    h1: 'Desentupimento nos Funcionários, 24 horas por dia',
    vizinhos: ['Ernesto Geisel', 'Gramame', 'Cuiá', 'Cristo Redentor'],
    referencias: ['Rua Maurina Cavalcante de Lima', 'Rua Margarida Barbosa Chaves', 'Rua Nossa Senhora do Rosário'],
    imovel: 'Casas térreas de conjunto habitacional, geralmente com um banheiro original e um segundo construído depois.',
    problema:
      'O banheiro acrescentado nos fundos fica longe da saída do esgoto e é ligado por um cano comprido e quase sem queda. O papel não chega ao fim do percurso, e o vaso entope repetidamente.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O bairro dos Funcionários é formado por conjuntos residenciais conhecidos como Funcionários II, III e IV, com ruas de casas como a Maurina Cavalcante de Lima e a Margarida Barbosa Chaves. São imóveis que ganharam suíte ou banheiro extra com o passar dos anos. É justamente o vaso desse banheiro novo que mais dá problema.',
    faq: [
      {
        q: 'O vaso do banheiro dos fundos entope e o da frente não. Qual o motivo?',
        a: 'O da frente está perto da saída para a rua. O dos fundos depende de um cano longo, feito depois, que costuma ter pouca inclinação. O papel para no meio do caminho.',
      },
      {
        q: 'Desentupidor de borracha resolve vaso entupido?',
        a: 'Resolve quando a obstrução é leve e está no próprio vaso. Se a água sobe e demora a baixar mesmo depois de bombear, o bloqueio está no cano e precisa de equipamento.',
      },
      {
        q: 'Vocês atendem os conjuntos Funcionários II, III e IV?',
        a: 'Sim. Atendemos todo o bairro, 24 horas por dia, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Gramame',
    em: 'em Gramame',
    regiao: 'Zona Sul',
    h1: 'Desentupidora em Gramame: chegamos em 20 minutos',
    vizinhos: ['Valentina', 'Funcionários', 'Cuiá', 'Ernesto Geisel'],
    referencias: ['Conjunto Colinas do Sul', 'Rua Aposentado Manoel Justino de Lima', 'Rio Gramame'],
    imovel: 'Residenciais novos de blocos de apartamentos, loteamentos com casas recentes e conjuntos como o Colinas do Sul.',
    problema:
      'Redes de condomínios novos costumam guardar areia, cimento e restos de obra. Somado à gordura de centenas de cozinhas, esse material forma depósitos ao longo da rede interna, que é extensa.',
    servico: 'hidrojateamento',
    abertura:
      'Gramame, no extremo sul da cidade, é uma das áreas de João Pessoa que mais recebem novos residenciais e loteamentos, em torno de conjuntos como o Colinas do Sul. Os condomínios de blocos têm muitos apartamentos e redes internas longas. Para remover areia e resíduos de obra de toda a extensão dos tubos, o serviço indicado é o hidrojateamento.',
    faq: [
      {
        q: 'O condomínio é novo. Por que a rede já entope?',
        a: 'Durante a construção e as reformas dos apartamentos, areia, argamassa e rejunte entram na tubulação. Esse material assenta no fundo do cano e segura gordura e papel desde os primeiros meses de uso.',
      },
      {
        q: 'O hidrojateamento serve como limpeza preventiva do condomínio?',
        a: 'Serve. Feito de forma programada, ele remove os depósitos antes que fechem a passagem e reduz as emergências com esgoto voltando nos térreos.',
      },
      {
        q: 'Vocês atendem os residenciais de Gramame e do Colinas do Sul?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, para condomínios, casas e comércios.',
      },
    ],
  },
  {
    nome: 'Cuiá',
    em: 'no Cuiá',
    regiao: 'Zona Sul',
    h1: 'Desentupidora no Cuiá 24 horas',
    vizinhos: ['Mangabeira', 'Valentina', 'Ernesto Geisel', 'José Américo', 'Gramame'],
    referencias: ['Rua Adalgisa Carneiro Cavalcanti', 'Rua Comerciante Severino Carneiro dos Santos', 'Rua Otacílio Pereira Lima'],
    imovel: 'Casas recentes, duplex e pequenos prédios residenciais construídos em loteamentos novos.',
    problema:
      'Em imóveis recém-entregues, sobras de argamassa e rejunte ficam dentro do ramal do vaso sanitário. O papel se prende nessas rebarbas e o vaso entope já nos primeiros meses de uso.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Cuiá é um bairro em crescimento na Zona Sul, entre Mangabeira, o Valentina e o Geisel. Ruas como a Adalgisa Carneiro Cavalcanti e a Otacílio Pereira Lima vêm recebendo casas e residenciais novos. Em construções recentes, o vaso sanitário que entope sem motivo aparente é uma queixa comum de quem acabou de se mudar.',
    faq: [
      {
        q: 'Acabei de me mudar para uma casa nova no Cuiá e o vaso já entupiu. É normal?',
        a: 'Acontece com frequência. Restos de obra dentro do cano criam pontos de retenção. A desobstrução remove esse material e o vaso passa a funcionar como deveria.',
      },
      {
        q: 'Vaso com caixa acoplada entope mais?',
        a: 'Não por causa da caixa em si. O que influencia é o volume de água por descarga. Se a regulagem estiver baixa demais, a água não tem força para levar o papel até o fim do ramal.',
      },
      {
        q: 'Atendem nos loteamentos novos do Cuiá à noite?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- ZONA OESTE ----------------
  {
    nome: 'Cruz das Armas',
    em: 'em Cruz das Armas',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora em Cruz das Armas para comércio e residências',
    vizinhos: ['Oitizeiro', 'Jaguaribe', 'Cristo Redentor', 'Alto do Mateus'],
    referencias: ['Avenida Cruz das Armas', 'Mercado Público de Cruz das Armas', '15º Batalhão de Infantaria Motorizado'],
    imovel: 'Lojas, lanchonetes, padarias e oficinas ao longo da avenida, com casas antigas nas ruas transversais.',
    problema:
      'Lanchonetes, padarias e restaurantes populares funcionam em pontos comerciais pequenos, com caixa de gordura reduzida ou improvisada. A gordura passa direto para o ramal e a pia entope em sequência.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Cruz das Armas se organiza em torno da avenida que leva o nome do bairro, um corredor de ônibus e de comércio popular que liga o Centro à saída da cidade. Ali ficam o mercado público e dezenas de pontos de alimentação. Com cozinhas pequenas e movimento constante, a caixa de gordura é a origem da maior parte dos entupimentos.',
    faq: [
      {
        q: 'Meu ponto comercial em Cruz das Armas não tem caixa de gordura. Isso causa entupimento?',
        a: 'Causa. Sem a caixa, toda a gordura da cozinha vai para o cano e endurece no caminho. O entupimento se repete até que a gordura passe a ser retida antes da rede.',
      },
      {
        q: 'Padaria também precisa se preocupar com gordura no esgoto?',
        a: 'Sim. Manteiga, margarina, óleo e resíduos de massa formam uma crosta densa. Em padarias, é comum a caixa de gordura encher mais rápido do que o dono imagina.',
      },
      {
        q: 'Vocês atendem lojas da Avenida Cruz das Armas fora do horário comercial?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, para comércio e residências.',
      },
    ],
  },
  {
    nome: 'Oitizeiro',
    em: 'no Oitizeiro',
    regiao: 'Zona Oeste',
    h1: 'Desentupimento no Oitizeiro 24 horas',
    vizinhos: ['Cruz das Armas', 'Cristo Redentor', 'Alto do Mateus', 'Bairro das Indústrias'],
    referencias: ['Mercado Público de Oitizeiro', 'Avenida Cruz das Armas'],
    imovel: 'Casas simples, vilas e pontos comerciais ligados ao movimento do mercado e da feira.',
    problema:
      'Em bancas, boxes e casas próximas à feira, os ralos de piso recebem escamas, cascas, restos de verdura e terra na lavagem diária. O material se compacta na caixa sifonada e bloqueia a saída.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Oitizeiro é conhecido pelo mercado público e pela feira, no trecho final da Avenida Cruz das Armas. O bairro mistura moradia e comércio de alimentos, e muita gente trabalha e mora no mesmo quarteirão. A lavagem de pisos, bancas e calçadas faz dos ralos o ponto que mais entope.',
    faq: [
      {
        q: 'O ralo do meu box de alimentos entope toda semana. Como reduzir isso?',
        a: 'Use grelha com furos pequenos e recolha os resíduos sólidos antes de lavar o piso. O que entra no ralo deve ser só água. Depois da desobstrução, esse cuidado é o que mantém o cano livre.',
      },
      {
        q: 'Ralo que borbulha quando a água desce está entupindo?',
        a: 'Está com a passagem reduzida. O ar preso no cano sobe pela água e faz o borbulhamento. É o estágio anterior ao entupimento completo.',
      },
      {
        q: 'Atendem perto do Mercado de Oitizeiro de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Cristo Redentor',
    em: 'no Cristo Redentor',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora no Cristo Redentor: atendimento 24 horas',
    vizinhos: ['Água Fria', 'Ernesto Geisel', 'Cruz das Armas', 'Oitizeiro', 'José Américo'],
    referencias: ['Estádio Almeidão', 'Avenida Presidente Ranieri Mazzilli', 'BR-230'],
    imovel: 'Casas em lotes compridos, muitas com mais de uma moradia no mesmo terreno, e comércio na avenida principal.',
    problema:
      'Lotes com casa na frente, casa nos fundos e às vezes uma terceira no andar de cima usam um só ramal de esgoto. O cano percorre o terreno inteiro e entope em caixas intermediárias ou perto da calçada.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Cristo Redentor, ou só Cristo, é um dos bairros mais populosos de João Pessoa. Fica junto à BR-230, tem a Avenida Presidente Ranieri Mazzilli como eixo comercial e abriga o Estádio Almeidão. Nos terrenos do bairro é comum morar mais de uma família, cada uma em sua casa, todas ligadas ao mesmo esgoto.',
    faq: [
      {
        q: 'Somos três casas no mesmo terreno e o esgoto voltou só na da frente. Onde está o entupimento?',
        a: 'Provavelmente entre a casa da frente e a rua. As casas de trás ainda têm o cano do terreno para acumular, enquanto a da frente recebe tudo o que não consegue sair.',
      },
      {
        q: 'O esgoto está saindo por uma tampa no corredor. Posso continuar usando os banheiros?',
        a: 'O ideal é parar de usar. Cada descarga e cada banho aumentam o volume que extravasa. Depois da desobstrução, o uso volta ao normal de imediato.',
      },
      {
        q: 'Vocês atendem no Cristo em dia de jogo no Almeidão e em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Alto do Mateus',
    em: 'no Alto do Mateus',
    regiao: 'Zona Oeste',
    h1: 'Desentupimento no Alto do Mateus, de dia ou de noite',
    vizinhos: ['Cruz das Armas', 'Oitizeiro', 'Bairro das Indústrias'],
    referencias: ['Avenida Noel Rosa', 'Rio Sanhauá'],
    imovel: 'Casas em terreno com desnível, com calhas, lajes e quintais que escoam para ruas em declive.',
    problema:
      'A chuva desce pelas ruas inclinadas levando terra e detritos. Calhas, canaletas e tubos de águas pluviais dos imóveis ficam obstruídos, e a água invade quintais e cômodos térreos.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Alto do Mateus fica na parte oeste de João Pessoa, do lado do Rio Sanhauá, e tem vias como a Avenida Noel Rosa. O terreno é irregular, com trechos altos e descidas acentuadas. Nos meses de chuva, a drenagem de cada casa precisa funcionar bem, porque a água chega com volume e velocidade.',
    faq: [
      {
        q: 'A calha da minha casa transborda mesmo sem estar cheia de folhas. Por quê?',
        a: 'O bloqueio pode estar no tubo de descida ou na ligação com a rua. A calha recebe a água normalmente, mas ela não tem por onde sair e acaba passando por cima da borda.',
      },
      {
        q: 'A água da chuva entra pela porta dos fundos. Desentupir resolve?',
        a: 'Resolve quando a causa é ralo ou canaleta obstruída, o que é o caso mais comum. Com a drenagem livre, a água é captada antes de chegar à porta.',
      },
      {
        q: 'Atendem no Alto do Mateus durante temporais?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Bairro das Indústrias',
    em: 'no Bairro das Indústrias',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora no Bairro das Indústrias: empresas, galpões e casas',
    vizinhos: ['Oitizeiro', 'Alto do Mateus', 'Funcionários', 'Cruz das Armas'],
    referencias: ['Distrito Industrial de João Pessoa', 'BR-101', 'Rua da Importação', 'Rua Abdias Abdon de Araújo'],
    imovel: 'Fábricas, galpões logísticos e empresas com refeitório e vestiários, além de área residencial de casas.',
    problema:
      'Refeitórios e vestiários de empresas geram gordura, sabão e resíduos em grande volume, lançados em tubulações de diâmetro maior e longa extensão. Os depósitos se formam ao longo de toda a linha.',
    servico: 'hidrojateamento',
    abertura:
      'O Bairro das Indústrias fica às margens da BR-101, na saída sul de João Pessoa, e abriga o Distrito Industrial, com fábricas e galpões em vias como a Rua da Importação. Ao lado da área fabril há um núcleo residencial. Nas empresas, as redes são longas e de grande diâmetro, e a limpeza eficaz é feita com hidrojateamento.',
    faq: [
      {
        q: 'O hidrojateamento pode ser feito sem parar a produção da fábrica?',
        a: 'Na maior parte dos casos, sim. O serviço é realizado pelas caixas de inspeção externas. A equipe combina com o responsável o melhor horário, inclusive à noite ou no fim de semana.',
      },
      {
        q: 'O refeitório da empresa precisa de limpeza de caixa de gordura separada?',
        a: 'Precisa. A caixa do refeitório retém a gordura antes que ela chegue à rede. Se ela não é limpa, a gordura segue para a tubulação e exige uma desobstrução bem maior.',
      },
      {
        q: 'Vocês atendem também as casas do Bairro das Indústrias?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas por dia, inclusive domingos e feriados.',
      },
    ],
  },
];
