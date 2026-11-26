// Bairros de Cariacica. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const cariacica: BairroDados[] = [
  // ---------------- CAMPO GRANDE E BR-262 ----------------
  {
    nome: 'Campo Grande',
    em: 'em Campo Grande',
    regiao: 'Campo Grande e BR-262',
    h1: 'Desentupidora em Campo Grande, Cariacica, 24 horas',
    vizinhos: ['Cruzeiro do Sul', 'São Francisco', 'Vila Capixaba', 'Alto Lage'],
    referencias: ['Avenida Expedito Garcia', 'BR-262', 'Terminal de Campo Grande', 'Shopping Moxuara'],
    imovel: 'Lojas de rua, galerias, lanchonetes e restaurantes, com salas comerciais e moradias nos andares de cima.',
    problema:
      'Banheiros de lojas e galerias recebem centenas de pessoas por dia. Papel toalha e outros descartes vão para o vaso, se acumulam no ramal e fazem a água subir até a borda.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'Campo Grande é o maior centro comercial de Cariacica. A Avenida Expedito Garcia concentra lojas de todos os ramos, e o movimento de pedestres é intenso de segunda a sábado. Banheiro interditado atrapalha funcionário e cliente, e o vaso sanitário entupido é o chamado que mais se repete entre os lojistas.',
    faq: [
      {
        q: 'O vaso da loja entupiu no sábado, com a loja cheia. Vocês atendem na hora?',
        a: 'Sim. Atendemos Campo Grande 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
      {
        q: 'O banheiro da galeria é usado por várias lojas. Quem é responsável pelo desentupimento?',
        a: 'Em área comum, a responsabilidade costuma ser da administração da galeria ou do proprietário do imóvel. Vale conferir o que diz o contrato de locação.',
      },
      {
        q: 'Soda cáustica desentope vaso sanitário?',
        a: 'Não é indicada. Ela não dissolve papel toalha nem objetos, pode danificar a louça e a tubulação e causa queimaduras graves em quem manuseia.',
      },
    ],
  },
  {
    nome: 'Jardim América',
    em: 'em Jardim América',
    regiao: 'Campo Grande e BR-262',
    h1: 'Desentupimento em Jardim América, a qualquer hora',
    vizinhos: ['Itaquari', 'Alto Lage', 'Vasco da Gama', 'Bela Aurora'],
    referencias: ['Avenida Mário Gurgel', 'BR-262', 'Terminal de Jardim América'],
    imovel: 'Casas e sobrados antigos, prédios pequenos e comércio variado perto do terminal e da rodovia.',
    problema:
      'Cozinhas de casas antigas têm ramais de pia estreitos e com muitos anos de gordura acumulada. Nas lanchonetes e nos restaurantes perto do terminal, o volume é maior e o cano fecha mais rápido.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Jardim América fica na entrada de Cariacica para quem vem de Vitória, junto à Avenida Mário Gurgel, trecho urbano da BR-262, e ao terminal de ônibus. É um bairro antigo, com residências e comércio misturados. A pia de cozinha entupida aparece tanto nas casas quanto nos pontos de alimentação.',
    faq: [
      {
        q: 'A pia da cozinha entope e o tanque também. Os dois estão ligados?',
        a: 'Em muitas casas antigas, sim. Pia e tanque despejam no mesmo ramal. Se os dois estão lentos, a obstrução está no trecho que eles compartilham.',
      },
      {
        q: 'Com que frequência devo limpar a caixa de gordura de casa?',
        a: 'Para uma família, a cada poucos meses costuma ser suficiente. Se a pia fica lenta antes disso, a caixa é pequena para o uso ou há gordura no cano de saída.',
      },
      {
        q: 'Atendem perto do Terminal de Jardim América?',
        a: 'Sim. Atendemos todo o bairro, casas e comércio, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Alto Lage',
    em: 'em Alto Lage',
    regiao: 'Campo Grande e BR-262',
    h1: 'Desentupidora 24h em Alto Lage',
    vizinhos: ['Jardim América', 'Itacibá', 'Itaquari', 'Campo Grande'],
    referencias: ['Trevo de Alto Lage', 'Rodovia José Sette', 'Hospital Meridional Cariacica'],
    imovel: 'Clínicas, serviços de saúde, restaurantes e comércio perto do trevo, com casas e prédios pequenos nas ruas internas.',
    problema:
      'Restaurantes e cozinhas que servem refeições em grande quantidade enchem a caixa de gordura em poucos dias. Sem limpeza, a gordura transborda para o esgoto e a pia devolve água.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Alto Lage é ponto de passagem obrigatório em Cariacica: no trevo se encontram a BR-262 e a Rodovia José Sette. O entorno reúne um hospital, clínicas e restaurantes que atendem quem trabalha e circula por ali. Essas cozinhas de uso contínuo dependem da caixa de gordura limpa para não parar.',
    faq: [
      {
        q: 'A caixa de gordura do restaurante está cheia até a tampa. É urgente?',
        a: 'É. Com a caixa cheia, a gordura passa direto para o cano, e o próximo passo é a pia parar ou a caixa transbordar. Quanto antes for limpa, menor o risco de interromper a cozinha.',
      },
      {
        q: 'O que é feito na limpeza da caixa de gordura?',
        a: 'A gordura e os resíduos sólidos são retirados, as paredes e o sifão da caixa são raspados e lavados, e o cano de entrada e o de saída são testados para confirmar que estão livres.',
      },
      {
        q: 'Vocês atendem clínicas e comércio perto do Trevo de Alto Lage?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Bela Aurora',
    em: 'em Bela Aurora',
    regiao: 'Campo Grande e BR-262',
    h1: 'Esgoto, ralo ou pia entupidos em Bela Aurora? Atendimento 24 horas',
    vizinhos: ['Vale Esperança', 'Sotelândia', 'Rio Marinho', 'Jardim América'],
    referencias: ['Avenida Espírito Santo', 'Rua Ferro e Aço', 'Rua Princesa Isabel'],
    imovel: 'Casas e sobrados de família, com mais de uma moradia por lote e pequenos comércios na frente.',
    problema:
      'Nos lotes com duas ou três casas, todo o esgoto passa por um ramal único até a rua. Basta uma obstrução nesse cano para o esgoto voltar pelo ralo ou pelo vaso da casa que fica mais abaixo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Bela Aurora é um bairro residencial de Cariacica, com casas construídas pelos próprios moradores e ampliadas conforme a família cresceu. A Avenida Espírito Santo concentra o comércio local. Como é comum várias moradias dividirem a mesma saída de esgoto, o retorno de esgoto é o problema que mais leva os moradores a chamar a desentupidora.',
    faq: [
      {
        q: 'O esgoto volta só na casa da frente, que é a mais baixa. O entupimento é nela?',
        a: 'Não necessariamente. A casa mais baixa é só onde o problema aparece. A obstrução costuma estar no ramal comum, entre essa casa e a rua.',
      },
      {
        q: 'Meu lote não tem caixa de inspeção. Dá para desentupir assim mesmo?',
        a: 'Dá. O acesso pode ser feito pelo ralo, pela saída do vaso sanitário ou por outro ponto da instalação. A caixa facilita o serviço, mas não é obrigatória.',
      },
      {
        q: 'Atendem Bela Aurora aos domingos e feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- ITACIBÁ E PORTO DE SANTANA ----------------
  {
    nome: 'Itacibá',
    em: 'em Itacibá',
    regiao: 'Itacibá e Porto de Santana',
    h1: 'Desentupimento 24 horas em Itacibá',
    vizinhos: ['Alto Lage', 'Rio Branco', 'Nova Brasília', 'Porto de Santana'],
    referencias: ['Rodovia José Sette', 'Terminal de Itacibá', 'Ifes Campus Cariacica', 'Praça de Itacibá'],
    imovel: 'Casas antigas, sobrados e comércio de bairro, com galpões e empresas às margens da rodovia.',
    problema:
      'Tubulações antigas de barro e de ferro perdem diâmetro com a crosta e podem ter juntas desalinhadas. Resíduos comuns do dia a dia ficam presos nesses pontos e fecham o cano.',
    servico: 'desentupimento-de-cano',
    abertura:
      'Itacibá é um dos bairros mais antigos de Cariacica, cortado pela Rodovia José Sette e servido pelo terminal de ônibus que leva o nome do bairro. Ao lado de galpões e de uma escola técnica federal, há muitas casas de construção antiga. A idade da tubulação é a principal explicação para os canos entupidos na região.',
    faq: [
      {
        q: 'Todos os pontos da casa escoam devagar. O problema é em cada um ou em um só lugar?',
        a: 'Quando tudo está lento ao mesmo tempo, o problema está no cano principal, para onde todos os pontos convergem, e não em cada pia ou ralo.',
      },
      {
        q: 'O desentupimento com máquina pode quebrar cano antigo?',
        a: 'O equipamento é escolhido conforme o material e o estado do tubo. Em canos frágeis, o trabalho é feito com mais cuidado e com a ferramenta adequada para não forçar as paredes.',
      },
      {
        q: 'Vocês atendem perto do Terminal de Itacibá e da Rodovia José Sette?',
        a: 'Sim. Atendemos todo o bairro de Itacibá, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Porto de Santana',
    em: 'em Porto de Santana',
    regiao: 'Itacibá e Porto de Santana',
    h1: 'Porto de Santana: desentupidora 24 horas',
    vizinhos: ['Itacibá', 'Porto Novo', 'Flexal', 'Aparecida'],
    referencias: ['Rua Gabino Rios', 'Praça de Porto de Santana', 'Orla de Cariacica'],
    imovel: 'Casas e sobrados na parte baixa, junto à Baía de Vitória, e nas encostas dos morros do bairro.',
    problema:
      'A água de chuva desce dos morros com terra e lixo e chega com volume à parte baixa. Ralos, grelhas e tubos de drenagem dos imóveis ficam cobertos de sedimento e a água invade quintais e garagens.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'Porto de Santana fica à beira da Baía de Vitória, onde foi construída a orla de Cariacica, e tem boa parte das casas em encostas. O relevo faz a chuva correr de cima para baixo levando terra para dentro dos ralos. Manter a drenagem do imóvel livre é a principal demanda do bairro.',
    faq: [
      {
        q: 'A água da chuva vem da rua de cima e entra no meu quintal. Desentupir o meu ralo resolve?',
        a: 'Ajuda bastante. Com ralos, canaletas e tubos livres, a água que entra no terreno sai mais rápido e não chega a acumular. Sem isso, qualquer volume vira alagamento.',
      },
      {
        q: 'A tubulação de água de chuva pode ser limpa com jato de água?',
        a: 'Pode. O hidrojateamento remove terra, areia e lama compactada de tubos e canaletas, e é o método mais eficaz para esse tipo de material.',
      },
      {
        q: 'Atendem as partes altas de Porto de Santana?',
        a: 'Sim. Trabalhamos com equipamentos portáteis e atendemos todo o bairro, 24 horas por dia.',
      },
    ],
  },

  // ---------------- SEDE ----------------
  {
    nome: 'Cariacica Sede',
    slug: 'cariacica-sede',
    em: 'em Cariacica Sede',
    regiao: 'Sede',
    h1: 'Desentupidora em Cariacica Sede: chegamos em 20 minutos',
    vizinhos: ['Prolar', 'Santa Luzia', 'Nova Rosa da Penha'],
    referencias: ['Igreja Matriz de São João Batista', 'Rodovia José Sette', 'Monte Mochuara'],
    imovel: 'Casas com quintal grande, sítios e chácaras no entorno, e comércio local perto da igreja matriz.',
    problema:
      'Em quintais de terra, a lavagem de áreas externas e a chuva levam barro, folhas e areia para os ralos. O material enche a caixa e o tubo, e a água passa a empoçar junto à casa.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'Cariacica Sede é o núcleo original do município, afastado da área mais urbanizada e próximo ao Monte Mochuara. O bairro tem ritmo de interior, com casas de quintal amplo e propriedades rurais nos arredores. Ralos externos obstruídos por terra e folhas são o motivo mais comum dos chamados.',
    faq: [
      {
        q: 'O ralo do quintal está cheio de barro. Posso empurrar com a mangueira?',
        a: 'Não é recomendado. A pressão da mangueira empurra o barro para dentro do cano, onde ele assenta e endurece em um ponto mais difícil de alcançar.',
      },
      {
        q: 'Folha de árvore entope cano enterrado?',
        a: 'Entope. As folhas passam pela grelha, se acumulam nas curvas e, com a terra, formam um tampão. Grelhas mais fechadas e limpeza frequente reduzem o problema.',
      },
      {
        q: 'Vocês atendem sítios e chácaras perto de Cariacica Sede?',
        a: 'Sim. Atendemos imóveis residenciais e comerciais da região, 24 horas, todos os dias.',
      },
    ],
  },
];
