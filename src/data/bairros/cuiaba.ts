// Bairros de Cuiabá. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const cuiaba: BairroDados[] = [
  // ---------------- REGIÃO OESTE ----------------
  {
    nome: 'Centro Norte',
    em: 'no Centro Norte',
    regiao: 'Região Oeste',
    h1: 'Desentupidora no Centro Norte de Cuiabá, 24 horas',
    vizinhos: ['Centro Sul', 'Baú', 'Araés', 'Bandeirantes', 'Quilombo'],
    referencias: ['Praça Alencastro', 'Praça da República', 'Praça Ipiranga', 'Avenida Getúlio Vargas'],
    imovel: 'Casarões e sobrados do centro histórico ocupados por lojas, repartições e escritórios, ao lado de prédios comerciais mais altos.',
    problema:
      'Os imóveis antigos do centro têm canos de ferro e manilhas de barro instalados há muitas décadas. A ferrugem e a crosta reduzem a passagem, e reformas sucessivas criaram emendas e curvas onde a sujeira para.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Centro Norte guarda a parte mais antiga de Cuiabá, em volta das praças Alencastro, da República e Ipiranga. Muitas construções dali foram adaptadas para comércio sem que a tubulação fosse trocada, e a rede interna trabalha hoje com um uso bem maior do que o previsto quando foi feita.',
    faq: [
      {
        q: 'Minha loja funciona em um casarão antigo do centro e o banheiro escoa devagar. O que costuma ser?',
        a: 'Na maioria dos casos é o cano antigo com crosta por dentro ou uma manilha com junta deslocada. Fazemos a desobstrução do ramal até a caixa de inspeção e avaliamos o trecho com problema.',
      },
      {
        q: 'Dá para desentupir sem quebrar o piso de um imóvel histórico?',
        a: 'Na maior parte dos atendimentos, sim. O trabalho é feito pelos pontos de acesso que já existem, como ralos, caixas de inspeção e a saída do vaso, com máquina rotativa ou hidrojateamento.',
      },
      {
        q: 'Vocês atendem o comércio do Centro Norte antes do horário de abertura?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e pode ser feito de madrugada ou no início da manhã para a loja abrir normalmente.',
      },
    ],
  },
  {
    nome: 'Centro Sul',
    em: 'no Centro Sul',
    regiao: 'Região Oeste',
    h1: 'Desentupimento no Centro Sul: atendimento a qualquer hora',
    vizinhos: ['Centro Norte', 'Porto', 'Dom Aquino', 'Bandeirantes', 'Goiabeiras'],
    referencias: ['Rua Barão de Melgaço', 'Praça Moreira Cabral', 'Rua 13 de Junho', 'Avenida Tenente-Coronel Duarte (Prainha)'],
    imovel: 'Prédios comerciais, galerias, lojas de rua, hotéis e alguns edifícios residenciais antigos.',
    problema:
      'Lojas e galerias vizinhas costumam despejar em um ramal de esgoto comum até a rua. Quando esse ramal fecha, o retorno aparece no imóvel mais baixo da sequência, muitas vezes no banheiro de uma loja que nem causou o problema.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'No Centro Sul o movimento é de comércio: lojas da Rua 13 de Junho, escritórios da Rua Barão de Melgaço e o fluxo intenso da Prainha. São imóveis geminados, com banheiros usados por muita gente ao longo do dia e ligações de esgoto que passam de um lote para outro antes de chegar à rede pública.',
    faq: [
      {
        q: 'O esgoto voltou no banheiro da minha loja, mas o vizinho também reclama. De quem é o entupimento?',
        a: 'Quando dois imóveis apresentam retorno ao mesmo tempo, a obstrução costuma estar no trecho comum do ramal ou na caixa de inspeção da calçada. A desobstrução é feita a partir da caixa e resolve os dois.',
      },
      {
        q: 'Por que o mau cheiro piora nos dias mais quentes?',
        a: 'Com o calor de Cuiabá, a água dos sifões e ralos pouco usados evapora rápido e o esgoto parado fermenta mais. Se o cheiro vem junto com escoamento lento, há material acumulado no ramal.',
      },
      {
        q: 'Atendem hotéis e galerias do Centro Sul à noite?',
        a: 'Sim. Atendemos imóveis comerciais e residenciais do Centro Sul 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Goiabeiras',
    em: 'em Goiabeiras',
    regiao: 'Região Oeste',
    h1: 'Desentupidora 24h em Goiabeiras',
    vizinhos: ['Popular', 'Quilombo', 'Duque de Caxias', 'Cidade Alta', 'Centro Sul'],
    referencias: ['Avenida São Sebastião', 'Avenida Ipiranga', 'Rua Estevão de Mendonça'],
    imovel: 'Edifícios residenciais altos, de médio e alto padrão, com casas e clínicas nas ruas internas.',
    problema:
      'Em torres com muitos andares, as cozinhas de uma mesma prumada despejam na mesma coluna de gordura. A crosta se forma no pé da coluna e a água volta pela pia e pelo ralo da área de serviço dos primeiros andares.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'Goiabeiras é um dos bairros mais verticalizados de Cuiabá. Entre a Avenida São Sebastião e a Avenida Ipiranga, os prédios residenciais se sucedem quarteirão após quarteirão, e os chamados mais frequentes partem de síndicos e de moradores dos andares baixos.',
    faq: [
      {
        q: 'Moro no primeiro andar e a água da pia sobe quando os vizinhos de cima lavam louça. O problema é meu?',
        a: 'Não. Esse retorno indica obstrução na coluna de gordura do prédio, que é área comum. O condomínio deve autorizar a desobstrução da prumada.',
      },
      {
        q: 'A limpeza da coluna exige entrar em todos os apartamentos?',
        a: 'Normalmente não. O acesso é feito pelo ponto mais próximo da obstrução, que pode ser a caixa de gordura no térreo, uma visita na garagem ou a pia de um dos apartamentos baixos.',
      },
      {
        q: 'Vocês atendem os prédios de Goiabeiras de madrugada?',
        a: 'Sim. O atendimento em Goiabeiras é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Popular',
    em: 'no Popular',
    regiao: 'Região Oeste',
    h1: 'Desentupidora no bairro Popular, em Cuiabá',
    vizinhos: ['Goiabeiras', 'Quilombo', 'Duque de Caxias', 'Centro Norte'],
    referencias: ['Praça Popular (Praça Presidente Eurico Gaspar Dutra)', 'Rua Brigadeiro Eduardo Gomes', 'Avenida Isaac Póvoas'],
    imovel: 'Bares e restaurantes em volta da praça, casas adaptadas para comércio e prédios residenciais nas ruas próximas.',
    problema:
      'Cozinhas que funcionam até tarde, com fritura e chapa, mandam gordura quente para caixas pequenas, dimensionadas para uma residência. A caixa enche em poucas semanas e a pia para no meio do expediente.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'A Praça Popular concentra boa parte da vida noturna de Cuiabá. Muitos dos bares e restaurantes em volta dela ocupam casas antigas, e a estrutura hidráulica dessas casas não foi pensada para cozinha profissional. Por isso a caixa de gordura é o ponto que mais exige atenção no bairro.',
    faq: [
      {
        q: 'De quanto em quanto tempo um bar da Praça Popular deve limpar a caixa de gordura?',
        a: 'Depende do volume da cozinha. Casas com fritura diária costumam precisar de limpeza mensal. O sinal de alerta é a pia escoando devagar e o cheiro forte perto da caixa.',
      },
      {
        q: 'A pia da cozinha parou em pleno sábado à noite. Dá para resolver sem fechar a casa?',
        a: 'Na maioria das vezes, sim. A desobstrução do ramal e a retirada da gordura da caixa são feitas pela área de serviço ou pelos fundos, sem interditar o salão.',
      },
      {
        q: 'Atendem o Popular depois da meia-noite?',
        a: 'Sim. Atendemos 24 horas, inclusive domingos e feriados, que é quando o movimento no bairro é maior.',
      },
    ],
  },
  {
    nome: 'Duque de Caxias',
    em: 'no Duque de Caxias',
    regiao: 'Região Oeste',
    h1: 'Desentupimento de pia, ralo e esgoto no Duque de Caxias',
    vizinhos: ['Goiabeiras', 'Quilombo', 'Santa Rosa', 'Jardim Cuiabá', 'Popular'],
    referencias: ['Parque Mãe Bonifácia', 'Goiabeiras Shopping', 'Avenida José Monteiro de Figueiredo (Lava Pés)', 'Avenida Miguel Sutil'],
    imovel: 'Prédios residenciais de vários andares, casas amplas e comércio ao longo da Avenida Lava Pés e da Miguel Sutil.',
    problema:
      'Nos apartamentos, o ramal da pia da cozinha percorre um trecho horizontal dentro da laje antes de chegar à coluna. É nesse trecho que a gordura esfria e gruda, e a cuba passa a encher a cada lavagem de louça.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Duque de Caxias vai da região do Goiabeiras Shopping até o Parque Mãe Bonifácia, na Avenida Miguel Sutil. É um bairro residencial de prédios e casas, com restaurantes e serviços na Avenida Lava Pés. O chamado mais comum por aqui é a pia de cozinha que não escoa.',
    faq: [
      {
        q: 'Já limpei o sifão e a pia continua enchendo. O que falta?',
        a: 'Quando o sifão está limpo e a água ainda para, a gordura está no ramal dentro da parede ou da laje. Esse trecho só é alcançado com máquina de cabo flexível.',
      },
      {
        q: 'Água quente ajuda a desentupir a pia?',
        a: 'Ajuda pouco e por pouco tempo. Ela amolece a gordura perto da cuba, que volta a endurecer mais adiante. Em canos de PVC, água fervente em grande quantidade ainda pode deformar as conexões.',
      },
      {
        q: 'Vocês atendem perto do Parque Mãe Bonifácia e do shopping?',
        a: 'Sim. Atendemos todo o Duque de Caxias, casas, apartamentos e comércio, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Quilombo',
    em: 'no Quilombo',
    regiao: 'Região Oeste',
    h1: 'Quilombo: desentupidora 24 horas com hidrojateamento',
    vizinhos: ['Araés', 'Duque de Caxias', 'Popular', 'Goiabeiras', 'Centro Norte'],
    referencias: ['Avenida Senador Filinto Müller', 'Avenida Marechal Deodoro', 'Rua Estevão de Mendonça'],
    imovel: 'Restaurantes, pizzarias e bares na Avenida Filinto Müller, com prédios residenciais e casas nas transversais.',
    problema:
      'A gordura que escapa das caixas dos restaurantes reveste por dentro os ramais que seguem para a rua. A máquina de cabo abre um furo no meio dessa camada, mas a parede do cano continua suja e o entupimento volta.',
    servico: 'hidrojateamento',
    abertura:
      'O Quilombo é endereço de comer fora em Cuiabá. A Avenida Senador Filinto Müller reúne restaurantes, pizzarias e bares lado a lado, e as ruas próximas à Marechal Deodoro têm prédios e casas. Com tantas cozinhas profissionais na mesma rede, os ramais acumulam gordura mais depressa do que em um bairro só residencial.',
    faq: [
      {
        q: 'Qual a diferença entre desentupir com cabo e com hidrojato?',
        a: 'O cabo rotativo perfura a obstrução e libera a passagem. O hidrojato lava a parede interna do cano com água em alta pressão e remove a gordura aderida, por isso o resultado dura mais em cozinhas comerciais.',
      },
      {
        q: 'O hidrojateamento pode danificar a tubulação do restaurante?',
        a: 'Não, quando a pressão é ajustada ao material e ao diâmetro do cano. Antes de aplicar o jato, o técnico verifica o tipo de tubulação e o estado das caixas.',
      },
      {
        q: 'Atendem na Filinto Müller fora do horário de funcionamento das casas?',
        a: 'Sim. Como o atendimento é 24 horas, o serviço pode ser feito de madrugada ou pela manhã, antes da abertura.',
      },
    ],
  },
  {
    nome: 'Araés',
    em: 'no Araés',
    regiao: 'Região Oeste',
    h1: 'Desentupidora no Araés: vaso, pia e esgoto',
    vizinhos: ['Quilombo', 'Baú', 'Centro Norte', 'Lixeira'],
    referencias: ['Avenida Marechal Deodoro', 'Rua Tenente Eulálio Guerra', 'Rua Ministro João Alberto'],
    imovel: 'Casas térreas e sobrados, pequenos prédios residenciais e imóveis convertidos em clínicas e escritórios.',
    problema:
      'Casas transformadas em clínica ou escritório passam a ter banheiros usados por dezenas de pessoas por dia. Papel toalha, lenço umedecido e absorvente descartados no vaso travam na curva da bacia ou no primeiro trecho do ramal.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Araés fica a poucos minutos do centro e mistura moradia e serviços. Nas ruas próximas à Avenida Marechal Deodoro, muitas casas viraram consultórios, laboratórios e escritórios. O banheiro que servia a uma família agora atende ao público, e o vaso sanitário entupido é a ocorrência mais comum.',
    faq: [
      {
        q: 'O vaso da recepção entope toda semana. É defeito da bacia?',
        a: 'Raramente. O mais provável é descarte de papel toalha ou lenço umedecido, que não se desfazem na água. Depois da desobstrução, vale colocar lixeira com tampa e um aviso no banheiro.',
      },
      {
        q: 'Posso usar soda cáustica para desentupir o vaso?',
        a: 'Não é recomendado. A soda não dissolve papel nem objetos, pode danificar a louça e o cano e causa queimaduras se a água espirrar durante uma nova tentativa de desentupir.',
      },
      {
        q: 'Vocês atendem clínicas do Araés em horário comercial?',
        a: 'Sim, e também fora dele. O atendimento é 24 horas, todos os dias, para imóveis residenciais e comerciais.',
      },
    ],
  },
  {
    nome: 'Porto',
    em: 'no Porto',
    regiao: 'Região Oeste',
    h1: 'Desentupidora no Porto, perto do Mercado e da Beira Rio',
    vizinhos: ['Centro Sul', 'Cidade Alta', 'Dom Aquino', 'Goiabeiras'],
    referencias: ['Mercado do Porto', 'Rua 13 de Junho', 'Sesc Arsenal', 'Avenida Beira Rio'],
    imovel: 'Casas e sobrados antigos, peixarias, bancas e restaurantes ligados ao mercado, além de comércio de rua.',
    problema:
      'Peixarias e cozinhas que servem peixe frito descartam gordura junto com escamas, espinhas e vísceras. Esse material sólido decanta na caixa de gordura e a satura muito mais rápido do que a gordura sozinha.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Porto é um dos bairros mais antigos de Cuiabá, às margens do rio, e segue como referência para quem compra e come peixe na cidade. Em volta do Mercado do Porto e ao longo da Rua 13 de Junho há peixarias, restaurantes e casas de construção antiga. A caixa de gordura desses imóveis recebe um tipo de resíduo que pede limpeza frequente.',
    faq: [
      {
        q: 'Escama de peixe entope a pia?',
        a: 'Entope. A escama não se desfaz, passa pelo ralo da cuba e se junta à gordura no sifão e na caixa, formando uma camada compacta. Em peixaria, o uso de cesto coletor na cuba é indispensável.',
      },
      {
        q: 'A caixa de gordura da minha peixaria cheira mal dois dias depois da limpeza. É normal?',
        a: 'Com o calor de Cuiabá, o resíduo de peixe fermenta depressa. Se o cheiro volta tão rápido, a caixa pode estar pequena para o volume ou com a tampa sem vedação. Avaliamos isso durante a limpeza.',
      },
      {
        q: 'Atendem o Porto aos domingos, dia de movimento no mercado?',
        a: 'Sim. Atendemos 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Cidade Alta',
    em: 'na Cidade Alta',
    regiao: 'Região Oeste',
    h1: 'Desentupimento na Cidade Alta, dia e noite',
    vizinhos: ['Porto', 'Goiabeiras', 'Jardim Cuiabá', 'Centro Sul'],
    referencias: ['Avenida Agrícola Paes de Barros', 'Avenida Senador Metello', 'Rua Custódio de Mello', 'Avenida São Sebastião'],
    imovel: 'Casas térreas com quintal e varanda, muitas com edícula nos fundos, e comércio nas avenidas.',
    problema:
      'Os ralos de quintal e de área de serviço recebem terra, folhas e pelos de animais. Na seca, a poeira se deposita na caixa sifonada. Na primeira chuva forte, tudo vira lama e o ralo deixa de dar vazão.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'A Cidade Alta é um bairro de casas, entre a Avenida Senador Metello e a Avenida Agrícola Paes de Barros. Os lotes têm quintal, área de serviço coberta e, com frequência, uma segunda moradia nos fundos. Com tanta área externa, o ralo é o ponto que mais entope.',
    faq: [
      {
        q: 'O ralo do quintal alaga toda vez que chove. Tem solução?',
        a: 'Tem. É preciso retirar a lama da caixa sifonada e desobstruir o tubo que liga o ralo à saída. Se as raízes de árvores entraram no cano, a máquina rotativa com ponteira de corte resolve.',
      },
      {
        q: 'Sai barata e mau cheiro do ralo da área de serviço. É entupimento?',
        a: 'O cheiro indica sifão seco ou sujeira parada na caixa. A limpeza da caixa sifonada e a reposição do fecho hídrico eliminam o odor. O controle de insetos não faz parte do nosso serviço.',
      },
      {
        q: 'Vocês atendem casas de fundos na Cidade Alta?',
        a: 'Sim. Atendemos a casa da frente, a edícula e o ramal comum entre as duas, a qualquer hora.',
      },
    ],
  },
  {
    nome: 'Santa Rosa',
    em: 'no Santa Rosa',
    regiao: 'Região Oeste',
    h1: 'Desentupidora no Santa Rosa: chegamos em 20 minutos',
    vizinhos: ['Duque de Caxias', 'Jardim Cuiabá', 'Despraiado', 'Ribeirão do Lipa'],
    referencias: ['Avenida José Rodrigues do Prado', 'Avenida Miguel Sutil', 'Avenida Antártica'],
    imovel: 'Torres residenciais de alto padrão, com área de lazer e espaço gourmet, e casas grandes nas ruas internas.',
    problema:
      'Além das cozinhas dos apartamentos, as churrasqueiras das varandas e do salão gourmet despejam gordura de carne na mesma prumada. A coluna estreita no trecho inferior e o retorno aparece nos andares baixos e na área comum.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Santa Rosa reúne alguns dos prédios residenciais mais altos de Cuiabá, principalmente no entorno da Avenida José Rodrigues do Prado. São edifícios com varanda gourmet em cada unidade e salão de festas equipado, o que aumenta a carga de gordura sobre as colunas do condomínio.',
    faq: [
      {
        q: 'A pia da varanda gourmet pode entupir a coluna do prédio?',
        a: 'Pode. A gordura de churrasco é densa e endurece rápido. Quando a pia da varanda está ligada à coluna de gordura, o uso frequente por vários apartamentos acelera a formação de crosta.',
      },
      {
        q: 'O condomínio deve limpar as colunas mesmo sem entupimento?',
        a: 'É o recomendável. A limpeza preventiva das colunas e das caixas de gordura coletivas evita o retorno de água nos apartamentos baixos, que costuma acontecer em fins de semana e feriados.',
      },
      {
        q: 'Atendem condomínios do Santa Rosa em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Jardim Cuiabá',
    em: 'no Jardim Cuiabá',
    regiao: 'Região Oeste',
    h1: 'Jardim Cuiabá: desentupimento residencial e comercial 24h',
    vizinhos: ['Santa Rosa', 'Duque de Caxias', 'Cidade Alta', 'Goiabeiras'],
    referencias: ['Avenida das Flores', 'Hospital Jardim Cuiabá', 'Rua das Camélias'],
    imovel: 'Clínicas, laboratórios e consultórios instalados em casas e prédios baixos, além de residências.',
    problema:
      'Estabelecimentos de saúde têm muitos pontos de água e uso contínuo. Resíduos de gesso, sabonete, papel e fios se depositam ao longo de ramais extensos, e a obstrução parcial reduz a vazão de vários ambientes de uma vez.',
    servico: 'hidrojateamento',
    abertura:
      'O Jardim Cuiabá se firmou como polo de saúde. Na Avenida das Flores e nas ruas com nomes de flores ao redor do Hospital Jardim Cuiabá funcionam clínicas, laboratórios e consultórios, muitos em casas adaptadas. Para esses imóveis, parar um banheiro ou uma pia significa interromper o atendimento.',
    faq: [
      {
        q: 'Por que usar hidrojateamento em clínica em vez do desentupimento comum?',
        a: 'Porque o jato de água limpa toda a parede interna do ramal e arrasta os resíduos até a caixa. Em redes longas e com vários pontos ligados, isso evita que o problema reapareça em outro ambiente dias depois.',
      },
      {
        q: 'O serviço pode ser feito sem interromper o funcionamento da clínica?',
        a: 'Sim. Como atendemos 24 horas, a limpeza da rede pode ser feita à noite ou no fim de semana, pelas caixas de inspeção externas.',
      },
      {
        q: 'Vocês atendem residências do Jardim Cuiabá também?',
        a: 'Sim. Atendemos casas, apartamentos e imóveis comerciais do bairro, a qualquer hora.',
      },
    ],
  },
  {
    nome: 'Despraiado',
    em: 'no Despraiado',
    regiao: 'Região Oeste',
    h1: 'Desentupidora 24 horas no Despraiado',
    vizinhos: ['Santa Rosa', 'Ribeirão do Lipa', 'Duque de Caxias', 'Alvorada'],
    referencias: ['Avenida República do Líbano', 'Avenida Afonso Pena', 'Avenida Osvaldo da Silva Correa'],
    imovel: 'Condomínios de apartamentos com várias torres e casas do residencial que deu origem ao bairro.',
    problema:
      'Apartamentos compactos têm cuba pequena e sifão sanfonado, que acumula resíduo em cada dobra. Com o uso de máquina de lavar louça e o descarte de óleo na pia, o sifão e o ramal fecham em pouco tempo.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Despraiado cresceu com condomínios de torres ao longo da Avenida República do Líbano, ao lado das casas mais antigas do bairro. A maior parte dos moradores vive em apartamento, e o entupimento que mais aparece é o da pia da cozinha.',
    faq: [
      {
        q: 'Sifão sanfonado entope mais que o sifão rígido?',
        a: 'Sim. As dobras do tubo sanfonado retêm gordura e restos de comida. A troca por um sifão de copo, liso por dentro, reduz bastante a frequência do problema.',
      },
      {
        q: 'A água da pia está voltando pela máquina de lavar louça. O que significa?',
        a: 'Significa que o ramal depois do sifão está obstruído e a água procura a saída mais próxima. É preciso desobstruir o cano com máquina, não basta limpar o sifão.',
      },
      {
        q: 'Atendem os condomínios da República do Líbano à noite?',
        a: 'Sim. O atendimento no Despraiado é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Ribeirão do Lipa',
    em: 'no Ribeirão do Lipa',
    regiao: 'Região Oeste',
    h1: 'Desentupimento em condomínios do Ribeirão do Lipa',
    vizinhos: ['Despraiado', 'Santa Rosa', 'Duque de Caxias'],
    referencias: ['Avenida dos Florais', 'Rodovia Arquiteto Hélder Cândia'],
    imovel: 'Condomínios horizontais fechados, com casas de alto padrão, área gourmet, piscina e jardim.',
    problema:
      'Casas grandes têm cozinha principal, cozinha de apoio e área gourmet, cada uma com sua pia, todas ligadas a uma única caixa de gordura enterrada no jardim. Como ela fica fora de vista, só é lembrada quando transborda.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Ribeirão do Lipa concentra condomínios horizontais ao longo da Avenida dos Florais e da Rodovia Arquiteto Hélder Cândia. As casas têm rede interna longa, com caixas de gordura e de inspeção distribuídas pelo terreno. A manutenção dessas caixas é o serviço mais pedido na região.',
    faq: [
      {
        q: 'Não sei onde fica a caixa de gordura da minha casa. Vocês localizam?',
        a: 'Sim. Seguimos o trajeto do ramal a partir da cozinha e identificamos a tampa, que muitas vezes está coberta por grama, deck ou piso.',
      },
      {
        q: 'Com que frequência devo limpar a caixa de gordura de uma casa com área gourmet?',
        a: 'Para uso familiar com churrasco frequente, a cada seis meses é uma boa referência. Se a pia começa a escoar devagar ou aparece cheiro no jardim, antecipe.',
      },
      {
        q: 'A equipe consegue entrar em condomínio fechado de madrugada?',
        a: 'Sim, desde que o morador avise a portaria. Atendemos 24 horas, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- REGIÃO LESTE ----------------
  {
    nome: 'Bandeirantes',
    em: 'no Bandeirantes',
    regiao: 'Região Leste',
    h1: 'Desentupidora no Bandeirantes, ao lado do Centro',
    vizinhos: ['Centro Sul', 'Centro Norte', 'Lixeira', 'Poção', 'Dom Aquino'],
    referencias: ['Avenida Coronel Escolástico', 'Rua Manoel Ferreira de Mendonça'],
    imovel: 'Casas antigas de alvenaria, sobrados, pequenos hotéis e comércio ao longo da Coronel Escolástico.',
    problema:
      'Em casas de construção antiga, parte do encanamento ainda é de ferro galvanizado ou de manilha. A ferrugem cria uma superfície áspera que prende cabelo, sabão e gordura, e o diâmetro útil do cano diminui ano a ano.',
    servico: 'desentupimento-de-cano',
    abertura:
      'Colado ao centro, o Bandeirantes tem ruas de casas antigas e a Avenida Coronel Escolástico como eixo de comércio e passagem. Muitos imóveis foram ampliados por etapas, com banheiros e cozinhas acrescentados sobre uma tubulação que nunca foi refeita.',
    faq: [
      {
        q: 'A água demora a descer em todos os pontos da casa. É um entupimento só?',
        a: 'Quando pia, tanque e chuveiro escoam devagar ao mesmo tempo, a obstrução está no cano principal que reúne os ramais, perto da saída para a rua. A desobstrução é feita pela caixa de inspeção.',
      },
      {
        q: 'Cano de ferro antigo aguenta a máquina de desentupir?',
        a: 'Aguenta, desde que o equipamento seja adequado ao diâmetro e o técnico trabalhe com cuidado nas curvas. Se o cano estiver furado ou rompido, informamos o trecho que precisa de reparo.',
      },
      {
        q: 'Atendem na Avenida Coronel Escolástico e nas ruas internas?',
        a: 'Sim. Atendemos todo o Bandeirantes, 24 horas por dia, residências e comércio.',
      },
    ],
  },
  {
    nome: 'Baú',
    em: 'no Baú',
    regiao: 'Região Leste',
    h1: 'Desentupimento de ralo e esgoto no Baú',
    vizinhos: ['Araés', 'Lixeira', 'Centro Norte', 'Bosque da Saúde'],
    referencias: ['Avenida Historiador Rubens de Mendonça', 'Rua dos Bandeirantes', 'Rua Corumbá', 'Avenida Miguel Sutil'],
    imovel: 'Casas em terrenos inclinados nas ruas internas e prédios comerciais e de escritórios na Avenida do CPA.',
    problema:
      'Em lotes com desnível, a água da chuva corre pelo quintal e leva areia e terra para os ralos. O sedimento se deposita nas caixas e nos trechos de pouca inclinação, e o ralo passa a devolver água.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Baú começa na saída do centro e acompanha o início da Avenida Historiador Rubens de Mendonça, conhecida como Avenida do CPA. De um lado ficam prédios de escritórios e lojas, de outro, ruas residenciais com casas construídas em terreno acidentado, onde ralo e caixa de areia dão trabalho a cada temporada de chuva.',
    faq: [
      {
        q: 'O ralo da garagem devolve água barrenta quando chove. O que fazer?',
        a: 'A água barrenta mostra que há terra acumulada no tubo. A solução é retirar o sedimento da caixa e desobstruir o ramal até a saída. Uma grelha com cesto ajuda a segurar a sujeira depois.',
      },
      {
        q: 'Ralo de banheiro com cabelo precisa de desentupidora?',
        a: 'Se a limpeza manual da grelha e da caixa sifonada não resolve, o cabelo já formou um tampão dentro do ramal. Nesse caso, só a máquina de cabo flexível alcança.',
      },
      {
        q: 'Vocês atendem escritórios na Avenida do CPA, no trecho do Baú?',
        a: 'Sim. Atendemos imóveis comerciais e residenciais do Baú 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Lixeira',
    em: 'na Lixeira',
    regiao: 'Região Leste',
    h1: 'Desentupidora na Lixeira: esgoto, pia e vaso',
    vizinhos: ['Baú', 'Bandeirantes', 'Poção', 'Araés'],
    referencias: ['Avenida Professor João Gomes Monteiro Sobrinho', 'Rua São João', 'Rua Professor João Félix', 'Avenida Miguel Sutil'],
    imovel: 'Casas térreas em lotes estreitos, muitas com duas ou três moradias no mesmo terreno.',
    problema:
      'Quando a casa da frente, a do meio e a dos fundos usam o mesmo ramal de esgoto, qualquer obstrução perto da rua afeta todas. O retorno aparece primeiro no ralo ou no vaso da moradia mais baixa.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'A Lixeira é um bairro residencial tradicional, vizinho do centro, com ruas como a São João e a Professor João Félix ocupadas por casas antigas. É comum a família ter construído mais de uma moradia no lote, todas ligadas ao mesmo cano de esgoto.',
    faq: [
      {
        q: 'O esgoto está saindo pelo ralo do quintal. É urgente?',
        a: 'É. Esgoto a céu aberto traz risco à saúde e piora rápido com o calor. Evite usar descarga e torneiras até a desobstrução do ramal.',
      },
      {
        q: 'Moram três famílias no terreno. Precisa desentupir casa por casa?',
        a: 'Em geral, não. Se o ramal é comum, a desobstrução é feita pela caixa de inspeção mais próxima da rua e libera todas as casas de uma vez.',
      },
      {
        q: 'Atendem a Lixeira de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Poção',
    em: 'no Poção',
    regiao: 'Região Leste',
    h1: 'Poção: desentupimento de rede pluvial e esgoto 24 horas',
    vizinhos: ['Lixeira', 'Bandeirantes', 'Dom Aquino', 'Jardim das Américas'],
    referencias: ['Avenida Fernando Corrêa da Costa', 'Avenida General Mello', 'Avenida Desembargador Antônio Quirino de Araújo'],
    imovel: 'Casas, sobrados com loja no térreo e prédios comerciais no início da Avenida Fernando Corrêa.',
    problema:
      'Calhas, condutores e ralos de laje passam os meses de seca recebendo poeira e folhas. Quando chegam as pancadas de chuva, o tubo de queda entupido faz a água transbordar pela calha e descer pela parede ou invadir a loja.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Poção fica no ponto em que a Avenida Fernando Corrêa da Costa deixa a região central em direção ao Coxipó. Tem comércio nas avenidas e moradias nas ruas internas. Com a volta das chuvas, os chamados do bairro se concentram em calhas, tubos de queda e ralos externos que não dão vazão.',
    faq: [
      {
        q: 'A calha transborda mesmo depois de limpa. Onde está o problema?',
        a: 'No condutor vertical ou no trecho enterrado que leva a água até a sarjeta. Folhas e poeira compactada descem da calha e travam nas curvas desse tubo.',
      },
      {
        q: 'Posso ligar a água da chuva no esgoto para escoar mais rápido?',
        a: 'Não. A rede de esgoto não comporta o volume da chuva e o resultado é retorno de esgoto dentro de casa. Água pluvial deve seguir pela rede própria até a rua.',
      },
      {
        q: 'Vocês atendem lojas da Fernando Corrêa no trecho do Poção?',
        a: 'Sim. Atendemos comércio e residências do Poção a qualquer hora, inclusive durante a chuva.',
      },
    ],
  },
  {
    nome: 'Dom Aquino',
    em: 'no Dom Aquino',
    regiao: 'Região Leste',
    h1: 'Desentupidora no Dom Aquino com atendimento imediato',
    vizinhos: ['Poção', 'Bandeirantes', 'Centro Sul', 'Porto'],
    referencias: ['Avenida Dom Aquino', 'Avenida General Mello', 'Avenida Carmindo de Campos', 'Avenida Dom Bosco'],
    imovel: 'Casas antigas, quitinetes, pequenos prédios e oficinas e lojas nas avenidas.',
    problema:
      'Em quitinetes e casas divididas para aluguel, vários banheiros foram ligados a um ramal estreito. O excesso de papel e o descarte de objetos pequenos fazem o vaso transbordar, às vezes em mais de uma unidade.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Dom Aquino se estende entre a Avenida General Mello e a Carmindo de Campos, perto do centro. É um bairro de casas antigas, muitas subdivididas em quitinetes, com comércio e oficinas nas avenidas. O vaso sanitário é o ponto fraco desses imóveis.',
    faq: [
      {
        q: 'Dei descarga e a água subiu até a borda. O que faço na hora?',
        a: 'Não acione a descarga de novo. Feche o registro do vaso, se houver, e aguarde o nível baixar. Se não baixar ou voltar a subir, chame a desentupidora.',
      },
      {
        q: 'O vaso de uma quitinete entope e o da outra borbulha. Tem relação?',
        a: 'Tem. O borbulhar mostra que o ar não consegue passar pelo ramal comum, que está parcialmente obstruído. A desobstrução deve ser feita no trecho que atende as duas unidades.',
      },
      {
        q: 'Atendem imóveis de aluguel no Dom Aquino a pedido do inquilino?',
        a: 'Sim. Atendemos moradores, proprietários e administradoras, 24 horas por dia, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jardim das Américas',
    em: 'no Jardim das Américas',
    regiao: 'Região Leste',
    h1: 'Desentupidora no Jardim das Américas, perto da UFMT',
    vizinhos: ['Boa Esperança', 'Poção', 'Jardim Petrópolis', 'Pico do Amor'],
    referencias: ['Shopping 3 Américas', 'Avenida Brasília', 'Avenida Fernando Corrêa da Costa'],
    imovel: 'Casas de bom padrão, prédios residenciais e uma faixa de restaurantes, lanchonetes e lojas nas avenidas.',
    problema:
      'Restaurantes e lanchonetes da Avenida Brasília e do entorno do shopping trabalham com grande volume de refeições. A caixa de gordura enche rápido e, quando passa do limite, a gordura segue para o ramal e para a rede.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Jardim das Américas fica entre a Avenida Fernando Corrêa da Costa e o campus da UFMT, com o Shopping 3 Américas como referência. As ruas internas são residenciais, e a Avenida Brasília reúne bares, restaurantes e lanchonetes frequentados por estudantes e moradores.',
    faq: [
      {
        q: 'O que acontece se a caixa de gordura do restaurante não for limpa?',
        a: 'A gordura ultrapassa a caixa e endurece no ramal de esgoto. A pia para, o mau cheiro chega ao salão e a desobstrução fica mais trabalhosa do que a limpeza periódica.',
      },
      {
        q: 'Casa também precisa limpar caixa de gordura?',
        a: 'Precisa. Em residência o intervalo é maior, mas a caixa esquecida por anos vira um bloco sólido. A cada seis meses a um ano é o indicado para uma família.',
      },
      {
        q: 'Vocês atendem na Avenida Brasília à noite?',
        a: 'Sim. Atendemos o Jardim das Américas 24 horas, todos os dias, comércio e residências.',
      },
    ],
  },
  {
    nome: 'Boa Esperança',
    em: 'no Boa Esperança',
    regiao: 'Região Leste',
    h1: 'Desentupimento no Boa Esperança para casas, repúblicas e quitinetes',
    vizinhos: ['Jardim das Américas', 'Santa Cruz', 'Jardim Itália', 'Coxipó'],
    referencias: ['Universidade Federal de Mato Grosso (UFMT)', 'Avenida Fernando Corrêa da Costa', 'Avenida Edgar Vieira', 'Avenida Alziro Zarur'],
    imovel: 'Casas, repúblicas estudantis, quitinetes e pequenos prédios de aluguel próximos ao campus.',
    problema:
      'Moradias com muitos ocupantes e banheiros compartilhados sofrem com excesso de papel, cotonetes, fio dental e lenços no vaso. A bacia entope e, como o banheiro é de uso comum, o problema afeta a casa inteira.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Boa Esperança é o bairro da UFMT. Nas ruas próximas à Avenida Edgar Vieira e à Avenida Alziro Zarur, casas foram transformadas em repúblicas e surgiram prédios de quitinetes para estudantes. São imóveis com muita gente por banheiro, e o vaso entupido lidera os pedidos.',
    faq: [
      {
        q: 'Somos seis na república e o vaso entope todo mês. O que estamos fazendo de errado?',
        a: 'Quase sempre é descarte de papel em excesso, lenço umedecido ou absorvente. Esses materiais não se desfazem e ficam presos no ramal. Lixeira no banheiro resolve a maior parte dos casos.',
      },
      {
        q: 'Desentupidor de borracha funciona para vaso?',
        a: 'Funciona em obstruções leves de papel, usando o modelo com aba, próprio para bacia. Se a água continua alta depois de algumas tentativas, o bloqueio está mais fundo.',
      },
      {
        q: 'Atendem perto da UFMT no fim de semana?',
        a: 'Sim. O atendimento é 24 horas, inclusive sábados, domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Jardim Itália',
    em: 'no Jardim Itália',
    regiao: 'Região Leste',
    h1: 'Jardim Itália: desentupidora para casas e condomínios horizontais',
    vizinhos: ['Boa Esperança', 'Jardim Imperial', 'Santa Cruz', 'Jardim das Américas'],
    referencias: ['Avenida Érico Gonçalves Preza Filho', 'Avenida Itália'],
    imovel: 'Condomínios horizontais fechados e casas de alto padrão, com telhados amplos, lajes impermeabilizadas e jardins.',
    problema:
      'Casas com grande área de cobertura dependem de calhas embutidas e condutores escondidos na alvenaria. Folhas, ninhos e poeira da seca fecham esses tubos, e a primeira chuva forte faz a água entrar pelo forro.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Jardim Itália se desenvolveu ao longo da Avenida Érico Gonçalves Preza Filho, com condomínios horizontais e casas de terreno grande. A arquitetura dessas casas usa platibanda e calha oculta, um sistema que funciona bem enquanto está limpo e causa infiltração quando entope.',
    faq: [
      {
        q: 'Quando devo limpar calhas e condutores em Cuiabá?',
        a: 'O melhor momento é no fim da seca, entre setembro e outubro, antes das primeiras chuvas fortes. Durante a temporada chuvosa, vale uma nova verificação se houver árvores perto do telhado.',
      },
      {
        q: 'O ralo da laje está limpo, mas a água empoça. Por quê?',
        a: 'A obstrução está no tubo de queda, abaixo do ralo. A desobstrução é feita com máquina ou hidrojato a partir do próprio ralo ou da caixa de passagem no térreo.',
      },
      {
        q: 'Vocês atendem dentro dos condomínios do Jardim Itália?',
        a: 'Sim. Basta liberar a entrada na portaria. O atendimento é 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Bosque da Saúde',
    em: 'no Bosque da Saúde',
    regiao: 'Região Leste',
    h1: 'Desentupidora no Bosque da Saúde para prédios e condomínios',
    vizinhos: ['Baú', 'Bela Vista', 'Araés', 'Jardim Aclimação'],
    referencias: ['Avenida Bosque da Saúde', 'Avenida Historiador Rubens de Mendonça', 'Avenida Aclimação'],
    imovel: 'Edifícios residenciais e comerciais de muitos andares, com alguns condomínios de várias torres.',
    problema:
      'Nas colunas de esgoto de prédios altos, o material que desce com velocidade bate na curva da base e ali se acumula. Papel, cabelo e objetos formam um tampão no pé da coluna, e os vasos dos andares baixos borbulham ou transbordam.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Bosque da Saúde acompanha a Avenida Historiador Rubens de Mendonça em um dos trechos mais verticalizados de Cuiabá. Torres residenciais e edifícios comerciais ocupam a avenida e as ruas vizinhas. Em imóveis desse porte, o entupimento que mais preocupa é o da coluna.',
    faq: [
      {
        q: 'O vaso do meu apartamento borbulha quando o vizinho de cima dá descarga. O que é isso?',
        a: 'É sinal de coluna de esgoto parcialmente obstruída ou de ventilação bloqueada. O ar não tem por onde sair e passa pelo sifão do seu vaso. O condomínio deve providenciar a desobstrução.',
      },
      {
        q: 'Como é feito o desentupimento de uma coluna de prédio alto?',
        a: 'O acesso é pela base, na garagem ou no térreo, ou por um ponto de inspeção em andar intermediário. Usamos máquina rotativa ou hidrojato, conforme o tipo de obstrução.',
      },
      {
        q: 'Atendem prédios comerciais da Avenida do CPA no Bosque da Saúde?',
        a: 'Sim. Atendemos edifícios residenciais e comerciais 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Bela Vista',
    em: 'no Bela Vista',
    regiao: 'Região Leste',
    h1: 'Pia entupida no Bela Vista? Desentupidora 24h',
    vizinhos: ['Bosque da Saúde', 'Morada do Ouro', 'Jardim Aclimação', 'Terra Nova'],
    referencias: ['Avenida Vereador Juliano da Costa Marques', 'IFMT Campus Cuiabá Bela Vista'],
    imovel: 'Casas de bairro, sobrados geminados e residenciais de apartamentos de poucos andares.',
    problema:
      'Na cozinha de casa, a pia recebe óleo de fritura, borra de café e restos de arroz e feijão. O cano corre enterrado até a caixa de gordura do quintal, e a gordura endurece nesse percurso.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Bela Vista é um bairro residencial cortado pela Avenida Vereador Juliano da Costa Marques, onde fica o campus do IFMT. Predominam casas e pequenos condomínios, com mercados e lanchonetes na avenida. A cozinha de uso diário é a origem da maioria dos entupimentos.',
    faq: [
      {
        q: 'Borra de café entope a pia?',
        a: 'Entope. A borra não se dissolve e se mistura à gordura, formando uma pasta densa que assenta no sifão e no cano. O destino correto é o lixo orgânico.',
      },
      {
        q: 'A pia e o tanque enchem juntos. O entupimento é na pia?',
        a: 'Provavelmente não. Quando os dois enchem, a obstrução está no trecho em que os ramais se encontram ou na caixa de gordura, do lado de fora.',
      },
      {
        q: 'Vocês atendem perto do IFMT Bela Vista?',
        a: 'Sim. Atendemos todo o bairro, a qualquer hora do dia ou da noite.',
      },
    ],
  },
  {
    nome: 'Jardim Imperial',
    em: 'no Jardim Imperial',
    regiao: 'Região Leste',
    h1: 'Desentupidora no Jardim Imperial e arredores',
    vizinhos: ['Jardim Universitário', 'Santa Cruz', 'Jardim Itália', 'Recanto dos Pássaros'],
    referencias: ['Avenida das Palmeiras', 'Avenida Archimedes Pereira Lima'],
    imovel: 'Condomínios de casas e de apartamentos, sobrados novos e comércio de bairro na Avenida das Palmeiras.',
    problema:
      'Em imóveis novos, sobras de obra como argamassa, rejunte e massa corrida ficam dentro dos canos. A gordura da pia gruda nesses resíduos ásperos, e a cozinha de uma casa com poucos anos de uso já apresenta escoamento lento.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Jardim Imperial cresceu nos últimos anos com condomínios de casas e de apartamentos em torno da Avenida das Palmeiras, com acesso pela Avenida Archimedes Pereira Lima. Boa parte dos imóveis é recente, o que não impede o entupimento: resíduo de construção dentro do cano é causa frequente.',
    faq: [
      {
        q: 'Minha casa é nova e a pia já entope. Como pode?',
        a: 'É comum. Restos de cimento e rejunte lavados na pia durante a obra endurecem no ramal e passam a segurar gordura. A desobstrução com máquina retira esse material.',
      },
      {
        q: 'Triturador de alimentos na pia evita entupimento?',
        a: 'Não evita. Ele reduz o tamanho dos restos, mas eles continuam indo para o cano e para a caixa de gordura, que passa a encher mais rápido.',
      },
      {
        q: 'Atendem condomínios da Avenida das Palmeiras aos domingos?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jardim Universitário',
    em: 'no Jardim Universitário',
    regiao: 'Região Leste',
    h1: 'Ralo, pia ou vaso entupido no Jardim Universitário',
    vizinhos: ['Jardim Imperial', 'Santa Cruz', 'Coxipó', 'Boa Esperança'],
    referencias: ['Avenida Archimedes Pereira Lima', 'Avenida Benjamin Constant', 'Avenida Tiradentes', 'Avenida Rui Barbosa'],
    imovel: 'Casas populares ampliadas ao longo dos anos, com banheiros e áreas de serviço acrescentados em etapas.',
    problema:
      'No ralo do box, cabelo e resíduo de sabonete e condicionador formam uma massa que se prende à caixa sifonada. Em banheiros construídos depois, com pouca queda no cano, essa massa fecha a passagem em poucos meses.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Jardim Universitário é um bairro residencial grande, ao lado da Avenida Archimedes Pereira Lima, com avenidas internas como a Benjamin Constant e a Tiradentes. As casas originais foram sendo ampliadas pelos moradores, e os banheiros novos nem sempre ficaram com a inclinação correta no esgoto.',
    faq: [
      {
        q: 'A água do chuveiro forma poça no box e demora a descer. É o ralo?',
        a: 'É. O primeiro passo é tirar a grelha e limpar a caixa sifonada. Se a poça continuar, o tampão de cabelo está no ramal e precisa ser retirado com máquina.',
      },
      {
        q: 'O ralo da cozinha transborda quando esvazio o tanque. Qual a causa?',
        a: 'Os dois estão ligados ao mesmo ramal, que está obstruído mais adiante. A água do tanque não passa e sai pelo ponto mais baixo, que é o ralo.',
      },
      {
        q: 'Atendem o Jardim Universitário à noite?',
        a: 'Sim. Atendemos o bairro 24 horas, todos os dias da semana.',
      },
    ],
  },
  {
    nome: 'Santa Cruz',
    em: 'no Santa Cruz',
    regiao: 'Região Leste',
    h1: 'Desentupimento no Santa Cruz antes e durante as chuvas',
    vizinhos: ['Boa Esperança', 'Jardim Imperial', 'Jardim Universitário', 'Jardim Itália'],
    referencias: ['Rua Raquel de Queiroz', 'Rua Olavo Bilac'],
    imovel: 'Casas térreas e sobrados com quintal cimentado, garagem coberta e varanda.',
    problema:
      'Quintais totalmente cimentados jogam toda a água da chuva em um ou dois ralos. Se o tubo que leva essa água até a rua está com areia e folhas, o quintal alaga e a água chega à porta da cozinha.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Santa Cruz é um bairro de casas, com ruas que levam nomes de escritores, como a Raquel de Queiroz e a Olavo Bilac, e acesso pela Avenida Archimedes Pereira Lima. Os terrenos são quase todos impermeabilizados, e nas chuvas de verão a drenagem do lote faz diferença.',
    faq: [
      {
        q: 'O quintal enche de água em dez minutos de chuva. É entupimento ou falta de ralo?',
        a: 'Pode ser os dois, mas o mais comum é o tubo de saída obstruído. Desobstruímos a linha até a sarjeta e, se a vazão ainda for insuficiente, indicamos o que precisa ser ampliado.',
      },
      {
        q: 'Folha de mangueira entope calha?',
        a: 'Entope, e muito. A folha é grande e rígida, fecha a boca do condutor e segura a poeira. Quem tem mangueira perto do telhado deve limpar a calha mais de uma vez por ano.',
      },
      {
        q: 'Vocês atendem o Santa Cruz no meio de um temporal?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, com chuva ou sem chuva.',
      },
    ],
  },
  {
    nome: 'Jardim Europa',
    em: 'no Jardim Europa',
    regiao: 'Região Leste',
    h1: 'Desentupidora 24 horas no Jardim Europa, região da Beira Rio',
    vizinhos: ['Jardim das Américas', 'Poção', 'Dom Aquino', 'Jardim Califórnia'],
    referencias: ['Avenida Manoel José de Arruda (Beira Rio)', 'Universidade de Cuiabá (UNIC)', 'Rua Portugal', 'Rua Suécia'],
    imovel: 'Casas residenciais, quitinetes e pensionatos para estudantes e comércio voltado ao campus.',
    problema:
      'Banheiros de quitinetes e pensionatos têm uso intenso e pouca manutenção. Cabelo, embalagens de sachê e resíduo de sabão se acumulam na caixa sifonada, e a água do banho passa a escorrer para o quarto.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Jardim Europa fica junto à Avenida Manoel José de Arruda, a Beira Rio, onde está o campus da UNIC. As ruas têm nomes de países europeus, como Portugal e Suécia, e misturam casas de família com quitinetes para estudantes. O ralo de banheiro é o ponto que mais dá problema.',
    faq: [
      {
        q: 'O ralo do banheiro da quitinete exala cheiro de esgoto. Como resolver?',
        a: 'O cheiro aparece quando a caixa sifonada está suja ou perdeu a água que faz a vedação. A limpeza completa da caixa e do ramal resolve. Em imóvel fechado nas férias, basta jogar água no ralo ao voltar.',
      },
      {
        q: 'Sou proprietário de um pensionato. Vale fazer limpeza preventiva dos ralos?',
        a: 'Vale. Em imóveis com muitos banheiros, a limpeza periódica das caixas sifonadas e dos ramais evita alagamento de quartos e reclamações em sequência.',
      },
      {
        q: 'Atendem perto da UNIC Beira Rio?',
        a: 'Sim. Atendemos o Jardim Europa 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- REGIÃO NORTE ----------------
  {
    nome: 'Morada do Ouro',
    em: 'na Morada do Ouro',
    regiao: 'Região Norte',
    h1: 'Desentupidora na Morada do Ouro, a qualquer hora',
    vizinhos: ['Centro Político Administrativo', 'CPA I', 'Bela Vista', 'Jardim Aclimação'],
    referencias: ['Avenida Oátomo Canavarros', 'Avenida Djalma Ferreira de Souza'],
    imovel: 'Casas em lotes amplos, sobrados e condomínios residenciais, com árvores de grande porte nas calçadas e quintais.',
    problema:
      'Raízes de árvores procuram umidade e entram pelas juntas dos tubos de esgoto enterrados. Dentro do cano elas crescem, formam uma rede que segura papel e gordura e acabam bloqueando a passagem.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'A Morada do Ouro é um bairro residencial arborizado, vizinho do Centro Político Administrativo, com a Avenida Oátomo Canavarros entre suas vias principais. Os lotes grandes e as árvores adultas dão conforto no calor, mas as raízes são a causa mais comum de esgoto entupido por ali.',
    faq: [
      {
        q: 'Como saber se a raiz de uma árvore entrou no esgoto?',
        a: 'Os sinais são entupimentos que voltam a cada poucos meses e escoamento lento em toda a casa. Na desobstrução, a máquina traz fiapos de raiz, o que confirma a causa.',
      },
      {
        q: 'Dá para tirar a raiz sem arrancar a árvore?',
        a: 'Dá. A máquina rotativa com lâmina corta as raízes dentro do cano, e o hidrojato remove os restos. Se o tubo estiver quebrado no ponto de entrada, informamos o local para o reparo.',
      },
      {
        q: 'Vocês atendem a Morada do Ouro em feriados?',
        a: 'Sim. Atendemos 24 horas, todos os dias, casas, condomínios e comércio.',
      },
    ],
  },
  {
    nome: 'CPA I',
    em: 'no CPA I',
    regiao: 'Região Norte',
    h1: 'Desentupimento no CPA I: casas, sobrados e comércio',
    vizinhos: ['CPA II', 'CPA III', 'Morada do Ouro', 'Centro Político Administrativo'],
    referencias: ['Avenida Alenquer', 'Avenida Joinville', 'Rua Marabá'],
    imovel: 'Casas de conjunto habitacional reformadas e ampliadas, muitas com ponto comercial na frente.',
    problema:
      'A tubulação original das casas do conjunto foi dimensionada para uma moradia pequena. Com segundo pavimento, banheiros extras e comércio na frente, o mesmo cano recebe muito mais volume e entope nos trechos mais antigos.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O CPA I foi o primeiro núcleo do conjunto Morada da Serra, na região norte de Cuiabá. As casas padronizadas do início deram lugar a sobrados, salões comerciais e edículas, principalmente perto das avenidas Alenquer e Joinville. A rede interna, em muitos lotes, ainda é a de origem.',
    faq: [
      {
        q: 'Ampliei a casa e agora o esgoto entope com frequência. A obra pode ter causado isso?',
        a: 'Pode. Banheiros novos ligados a um cano antigo e estreito sobrecarregam o ramal. Também é comum entulho ter caído em caixas de inspeção durante a obra.',
      },
      {
        q: 'O cano entupido passa embaixo do salão comercial. Precisa quebrar o piso?',
        a: 'Na maioria das vezes, não. A máquina percorre o cano a partir de uma caixa de inspeção ou de um ponto de esgoto existente, sem abrir o piso.',
      },
      {
        q: 'Atendem o CPA I à noite e de madrugada?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'CPA II',
    em: 'no CPA II',
    regiao: 'Região Norte',
    h1: 'Desentupidora no CPA II para comércio e residências',
    vizinhos: ['CPA I', 'CPA III', 'CPA IV'],
    referencias: ['Avenida Brasil', 'Praça Cultural do CPA II', 'CPA Shopping', 'Avenida Joinville'],
    imovel: 'Lanchonetes, espetinhos, padarias, restaurantes e lojas na Avenida Brasil, com casas nas ruas de trás.',
    problema:
      'Lanchonetes e espetinhos instalados em salões pequenos muitas vezes funcionam com caixa de gordura residencial ou sem caixa nenhuma. A gordura da chapa vai direto para o ramal e fecha o cano em poucas semanas.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'A Avenida Brasil, no CPA II, é a principal rua de comércio de toda a Morada da Serra. Perto da Praça Cultural e do CPA Shopping há lanchonetes, restaurantes e padarias abertas até tarde. Para esses negócios, manter a caixa de gordura em dia evita parar a cozinha no horário de pico.',
    faq: [
      {
        q: 'Minha lanchonete não tem caixa de gordura. Isso causa entupimento?',
        a: 'Causa. Sem a caixa, toda a gordura segue para o cano e endurece. Enquanto a caixa não é instalada, a desobstrução do ramal precisa ser feita com frequência.',
      },
      {
        q: 'A limpeza da caixa de gordura deixa cheiro no salão?',
        a: 'Durante a abertura da caixa há odor, por isso o ideal é fazer o serviço com a casa fechada. Depois da limpeza e da lavagem, o cheiro desaparece.',
      },
      {
        q: 'Atendem na Avenida Brasil depois do fechamento do comércio?',
        a: 'Sim. Atendemos 24 horas, todos os dias, o que permite fazer o serviço de madrugada.',
      },
    ],
  },
  {
    nome: 'CPA III',
    em: 'no CPA III',
    regiao: 'Região Norte',
    h1: 'Esgoto entupido no CPA III? Atendimento 24 horas',
    vizinhos: ['CPA II', 'CPA IV', 'CPA I', 'Três Barras'],
    referencias: ['Terminal do CPA III', 'Rua Oito', 'Rua Sessenta'],
    imovel: 'Casas de conjunto em quadras numeradas, com muitas moradias geminadas e construções nos fundos.',
    problema:
      'Em quadras de casas geminadas, as caixas de inspeção ficam no fundo dos lotes e acabam cobertas por piso, cômodos ou entulho. Sem acesso para limpeza, o ramal acumula material até o esgoto voltar pelos ralos.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O CPA III é um dos núcleos mais populosos da Morada da Serra, organizado em setores e ruas numeradas em torno do terminal de ônibus. As casas ocupam quase todo o lote, e a caixa de inspeção do esgoto, em muitos casos, ficou embaixo de uma ampliação.',
    faq: [
      {
        q: 'Construí em cima da caixa de inspeção. Ainda dá para desentupir?',
        a: 'Dá. Buscamos outro ponto de acesso, como a saída do vaso sanitário, um ralo ou a caixa da calçada, e a máquina alcança a obstrução por ali.',
      },
      {
        q: 'O esgoto volta só quando a máquina de lavar despeja. Por quê?',
        a: 'O ramal está parcialmente fechado. Ele dá conta do uso comum, mas não do volume que a máquina solta de uma vez. É o estágio anterior ao entupimento total.',
      },
      {
        q: 'Vocês atendem todos os setores do CPA III?',
        a: 'Sim. Atendemos o CPA III inteiro, 24 horas por dia, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'CPA IV',
    em: 'no CPA IV',
    regiao: 'Região Norte',
    h1: 'CPA IV: desentupidora de vaso sanitário, pia e ralo',
    vizinhos: ['CPA III', 'CPA II', 'CPA I', 'Três Barras'],
    referencias: ['Avenida Mutum', 'Rua Oitenta e Um', 'Rua Oitenta e Cinco'],
    imovel: 'Casas térreas de conjunto, a maioria com um banheiro para toda a família, e pequenos comércios de esquina.',
    problema:
      'Em casa com um único banheiro, o vaso recebe todo o uso da família. Fralda, brinquedo pequeno, cotonete e excesso de papel são as causas mais comuns de bloqueio, e a casa fica sem banheiro até a desobstrução.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O CPA IV é o núcleo mais afastado da Morada da Serra, com a Avenida Mutum como via de entrada e ruas numeradas a partir dela. É um bairro de famílias, com casas térreas e comércio de vizinhança. Vaso sanitário entupido é o chamado que não pode esperar.',
    faq: [
      {
        q: 'Meu filho jogou um brinquedo no vaso. Vocês conseguem retirar?',
        a: 'Na maior parte dos casos, sim. Tentamos recuperar o objeto pela própria bacia. Se ele já passou para o ramal, a retirada é feita com a máquina ou pela caixa de inspeção.',
      },
      {
        q: 'O vaso desce devagar, mas não transborda. Posso esperar?',
        a: 'Não é bom esperar. O escoamento lento mostra bloqueio parcial, que tende a fechar de vez no próximo uso mais pesado. Resolver nesse estágio é mais simples.',
      },
      {
        q: 'Atendem o CPA IV de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Centro Político Administrativo',
    em: 'no Centro Político Administrativo',
    regiao: 'Região Norte',
    h1: 'Hidrojateamento e desentupimento no Centro Político Administrativo',
    vizinhos: ['Morada do Ouro', 'CPA I', 'Paiaguás', 'Bosque da Saúde'],
    referencias: ['Palácio Paiaguás', 'Assembleia Legislativa de Mato Grosso', 'Tribunal de Justiça de Mato Grosso', 'Avenida Historiador Rubens de Mendonça'],
    imovel: 'Edifícios de órgãos públicos, sedes administrativas, restaurantes de atendimento a servidores e prédios corporativos.',
    problema:
      'Prédios de grande porte têm redes extensas, com dezenas de banheiros e copas ligados a coletores horizontais longos. O depósito de papel, gordura e sedimento reduz a seção desses coletores aos poucos, até um andar inteiro ficar sem escoamento.',
    servico: 'hidrojateamento',
    abertura:
      'O Centro Político Administrativo reúne a sede do governo estadual, no Palácio Paiaguás, a Assembleia Legislativa, o Tribunal de Justiça e dezenas de secretarias e autarquias. São edifícios com milhares de usuários por dia e instalações que exigem manutenção programada, além de atendimento rápido quando algo para.',
    faq: [
      {
        q: 'Em que situação o hidrojateamento é indicado para um prédio administrativo?',
        a: 'Na limpeza preventiva de coletores, colunas e caixas, e na desobstrução de redes longas ou de grande diâmetro, em que a máquina de cabo não remove todo o material aderido.',
      },
      {
        q: 'O serviço pode ser feito fora do expediente?',
        a: 'Sim. Como o atendimento é 24 horas, a limpeza das redes pode ser feita à noite ou no fim de semana, sem afetar o funcionamento do órgão.',
      },
      {
        q: 'Atendem restaurantes e lanchonetes que funcionam no CPA?',
        a: 'Sim. Atendemos imóveis comerciais da região, incluindo desobstrução de pia e limpeza de caixa de gordura, a qualquer hora.',
      },
    ],
  },

  // ---------------- REGIÃO SUL ----------------
  {
    nome: 'Coxipó',
    em: 'no Coxipó',
    regiao: 'Região Sul',
    h1: 'Desentupidora no Coxipó, 24 horas por dia',
    vizinhos: ['Tijucal', 'Coophema', 'Boa Esperança', 'Jardim Universitário', 'Parque Cuiabá'],
    referencias: ['Avenida Fernando Corrêa da Costa', 'Rio Coxipó', 'Rua Alexandre de Barros'],
    imovel: 'Casas antigas, lojas, oficinas, autopeças e galpões ao longo da Avenida Fernando Corrêa.',
    problema:
      'Imóveis comerciais antigos tiveram o encanamento remendado muitas vezes, com trechos de materiais e diâmetros diferentes. Cada emenda é um degrau dentro do cano, onde estopa, graxa e resíduos sólidos ficam presos.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Coxipó é o centro comercial da região sul de Cuiabá, às margens do rio que dá nome ao bairro. A Avenida Fernando Corrêa da Costa corta a área com lojas, oficinas e serviços, e nas ruas laterais ficam casas de ocupação antiga. A tubulação desses imóveis reflete décadas de adaptações.',
    faq: [
      {
        q: 'O tanque da oficina não escoa e a água sai com graxa. Vocês desentopem?',
        a: 'Sim. Desobstruímos o ramal e as caixas de passagem. Óleo e graxa não devem ir para o esgoto, e a caixa separadora, quando existe, precisa estar limpa para funcionar.',
      },
      {
        q: 'Como saber em que ponto o cano está entupido?',
        a: 'Pelo comportamento da água e pela distância que a máquina percorre até encontrar resistência. Com isso localizamos o trecho e, se houver dano no cano, indicamos onde fica.',
      },
      {
        q: 'Atendem lojas da Fernando Corrêa no Coxipó em horário comercial?',
        a: 'Sim, e também à noite e nos fins de semana. O atendimento é 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Tijucal',
    em: 'no Tijucal',
    regiao: 'Região Sul',
    h1: 'Desentupimento de esgoto no Tijucal e região',
    vizinhos: ['Coxipó', 'Osmar Cabral', 'Jardim Industriário', 'Altos do Coxipó'],
    referencias: ['Avenida Doutor Meirelles', 'Avenida Radialista Edson Luis da Silva', 'Avenida Fernando Corrêa da Costa'],
    imovel: 'Casas de conjunto habitacional em setores e ruas numeradas, muitas ampliadas, com comércio nas avenidas.',
    problema:
      'Nas casas de conjunto, a ligação de esgoto sai do fundo do lote ou cruza toda a casa até a rua. Com o tempo, o tubo cede em alguns pontos, forma barrigas onde o material sólido assenta, e o esgoto passa a voltar.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Tijucal é um dos maiores conjuntos residenciais da região sul, dividido em setores, com a Avenida Doutor Meirelles e a Avenida Radialista Edson Luis da Silva entre as vias de comércio. As casas têm muitos anos de uso e redes de esgoto longas dentro do lote.',
    faq: [
      {
        q: 'O esgoto entope sempre no mesmo lugar. Por que isso acontece?',
        a: 'Quando o entupimento se repete no mesmo ponto, há um defeito físico no cano: barriga, junta desalinhada ou trecho quebrado. A desobstrução resolve na hora, e avisamos se o trecho precisa de conserto.',
      },
      {
        q: 'Usar muita água sanitária ajuda a manter o esgoto limpo?',
        a: 'Não. A água sanitária desinfeta, mas não dissolve gordura nem papel. O que mantém o ramal limpo é não descartar óleo e sólidos e limpar as caixas de tempos em tempos.',
      },
      {
        q: 'Vocês atendem todos os setores do Tijucal?',
        a: 'Sim. Atendemos o bairro inteiro, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Pedra 90',
    em: 'no Pedra 90',
    regiao: 'Região Sul',
    h1: 'Desentupidora no Pedra 90: atendimento residencial e comercial',
    vizinhos: ['Jardim Industriário', 'Osmar Cabral', 'Tijucal', 'Distrito Industrial'],
    referencias: ['Avenida Newton Rabello de Castro', 'Rua Um', 'Rua Dois'],
    imovel: 'Casas térreas em ruas numeradas, com quintal de terra ou cimentado, e comércio na avenida principal.',
    problema:
      'Em quintais com terra exposta, o vento da seca e as enxurradas levam areia para os ralos da área de serviço e do tanque. A areia assenta no fundo do cano e, somada a sabão em pó e fiapos de roupa, fecha a passagem.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Pedra 90 fica no extremo sul de Cuiabá e tem na Avenida Newton Rabello de Castro sua principal via de comércio. As ruas residenciais são numeradas, com casas térreas e quintais. Poeira na seca e lama nas chuvas fazem dos ralos externos a principal fonte de chamados.',
    faq: [
      {
        q: 'O ralo do tanque transborda quando lavo roupa. Como resolver?',
        a: 'O ramal está com areia e resíduo de sabão. É preciso retirar o sedimento da caixa e passar a máquina no cano até a saída. Um ralo com cesto ajuda a segurar fiapos depois.',
      },
      {
        q: 'Sabão em pó entope cano?',
        a: 'Em excesso, sim. O sabão que não dissolve se junta à gordura e à areia e forma uma crosta dura. Usar a medida indicada na embalagem já reduz o problema.',
      },
      {
        q: 'Vocês atendem o Pedra 90 mesmo sendo distante do centro?',
        a: 'Sim. O Pedra 90 faz parte da nossa área de atendimento, 24 horas por dia, todos os dias.',
      },
    ],
  },
  {
    nome: 'Parque Cuiabá',
    em: 'no Parque Cuiabá',
    regiao: 'Região Sul',
    h1: 'Desentupimento de pia e esgoto no Parque Cuiabá',
    vizinhos: ['Coophema', 'Coxipó', 'Parque Atalaia', 'Jardim Industriário'],
    referencias: ['Rodovia Palmiro Paes de Barros', 'Avenida Cinco', 'Avenida Dois'],
    imovel: 'Casas de bairro planejado, sobrados e pontos comerciais nas avenidas internas.',
    problema:
      'Em cozinhas de uso familiar intenso, o óleo de fritura despejado na pia é o maior causador de entupimento. Ele chega líquido ao cano enterrado, esfria, endurece e reduz a passagem até a água parar na cuba.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Parque Cuiabá é um bairro residencial da região sul, com acesso pela Rodovia Palmiro Paes de Barros e comércio concentrado nas avenidas internas, como a Avenida Cinco. As casas têm cozinha movimentada e, em muitas delas, uma segunda pia na varanda dos fundos.',
    faq: [
      {
        q: 'O que fazer com o óleo de fritura usado?',
        a: 'Espere esfriar, guarde em garrafa plástica fechada e leve a um ponto de coleta ou entregue a quem recicla. Um litro de óleo na pia é suficiente para iniciar um entupimento.',
      },
      {
        q: 'A pia da varanda e a da cozinha entopem juntas. É coincidência?',
        a: 'Não. As duas costumam desaguar na mesma caixa de gordura. Se a caixa está cheia ou o cano de saída fechou, as duas param.',
      },
      {
        q: 'Atendem o Parque Cuiabá aos domingos?',
        a: 'Sim. Atendemos 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jardim Industriário',
    em: 'no Jardim Industriário',
    regiao: 'Região Sul',
    h1: 'Desentupidora no Jardim Industriário para casas, galpões e empresas',
    vizinhos: ['Pedra 90', 'Osmar Cabral', 'Tijucal', 'Distrito Industrial'],
    referencias: ['Avenida A', 'Avenida Dois'],
    imovel: 'Casas populares e, nas bordas do bairro, galpões, transportadoras e pequenas indústrias.',
    problema:
      'Galpões e pátios de empresas têm redes de esgoto e de drenagem de grande extensão, que recebem areia, resíduos de lavagem de piso e gordura de refeitório. O depósito ao longo de dezenas de metros só sai com água sob pressão.',
    servico: 'hidrojateamento',
    abertura:
      'O Jardim Industriário, dividido em duas etapas de loteamento, fica próximo ao Distrito Industrial de Cuiabá. Parte dos moradores trabalha nas empresas da região, e o bairro combina ruas residenciais com galpões e pátios. Para as redes maiores, o hidrojateamento é o método mais usado.',
    faq: [
      {
        q: 'O hidrojateamento serve para rede de galpão com muitos metros de tubo?',
        a: 'Serve e é o mais indicado. A mangueira avança dezenas de metros dentro da tubulação, e o jato arrasta areia, lodo e gordura de volta até a caixa, de onde o material é retirado.',
      },
      {
        q: 'O refeitório da empresa precisa de caixa de gordura própria?',
        a: 'Precisa. Sem ela, a gordura das refeições vai para a rede geral do galpão e provoca entupimento em pontos distantes da cozinha.',
      },
      {
        q: 'Vocês atendem residências do Jardim Industriário também?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Osmar Cabral',
    em: 'no Osmar Cabral',
    regiao: 'Região Sul',
    h1: 'Osmar Cabral: desentupimento de calhas, ralos e esgoto',
    vizinhos: ['Tijucal', 'Jardim Industriário', 'Pedra 90', 'São Sebastião'],
    referencias: ['Avenida Manoel José da Silva', 'Avenida Carlos Addor de Souza', 'Avenida Integração'],
    imovel: 'Casas térreas em lotes com declive, algumas em ruas ainda sem pavimento completo.',
    problema:
      'Em terreno inclinado, a enxurrada desce com força e carrega terra e pedrisco para dentro das caixas e dos tubos de água de chuva. Depois de duas ou três pancadas, o tubo está cheio de sedimento e a água passa por cima.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Osmar Cabral ocupa uma área de relevo ondulado na região sul, com a Avenida Integração e a Avenida Manoel José da Silva entre os acessos principais. Na temporada de chuvas, o escoamento da água pelos lotes é a preocupação de quem mora no bairro.',
    faq: [
      {
        q: 'A água da chuva do vizinho de cima entra no meu quintal e entope meus ralos. O que posso fazer?',
        a: 'A desobstrução e a limpeza das caixas resolvem o entupimento. Para evitar a repetição, vale instalar grelha com caixa de areia na entrada do lote, que retém a terra antes do tubo.',
      },
      {
        q: 'Como é feita a limpeza de um tubo de água de chuva cheio de terra?',
        a: 'Com hidrojato. A água em alta pressão desmancha o sedimento compactado e o leva até a caixa de saída, de onde é retirado.',
      },
      {
        q: 'Atendem o Osmar Cabral durante a chuva?',
        a: 'Sim. Atendemos 24 horas, todos os dias, inclusive em dias de temporal.',
      },
    ],
  },
  {
    nome: 'Coophema',
    em: 'no Coophema',
    regiao: 'Região Sul',
    h1: 'Desentupidora no Coophema para apartamentos e casas',
    vizinhos: ['Coxipó', 'Parque Cuiabá', 'Tijucal', 'Boa Esperança'],
    referencias: ['Avenida Itaparica', 'Avenida Teles Pires', 'Rua Barbacena'],
    imovel: 'Casas de cooperativa habitacional e condomínios de blocos de apartamentos de poucos andares, sem elevador.',
    problema:
      'Em blocos de quatro ou cinco pavimentos, cada prumada atende poucos apartamentos, mas as colunas descem até caixas coletivas no térreo. Quando a caixa enche, o apartamento do térreo recebe a água de todos os de cima.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Coophema nasceu como bairro de cooperativa habitacional na região do Coxipó e hoje reúne casas e vários condomínios de blocos baixos, em ruas como a Barbacena e avenidas como a Itaparica e a Teles Pires. Nos condomínios, a manutenção das colunas e das caixas do térreo é a demanda principal.',
    faq: [
      {
        q: 'Moro no térreo e a água suja sobe pelo ralo da cozinha. De onde vem?',
        a: 'Vem dos apartamentos de cima. A coluna ou a caixa de gordura coletiva está obstruída, e o seu ralo é o ponto mais baixo da prumada. A responsabilidade é do condomínio.',
      },
      {
        q: 'O bloco não tem síndico profissional. Quem pode chamar a desentupidora?',
        a: 'Qualquer morador pode chamar em caso de emergência. Para colunas e caixas coletivas, o ideal é que a administração do condomínio autorize o serviço.',
      },
      {
        q: 'Atendem o Coophema à noite?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
];
