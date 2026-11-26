// Bairros de Juiz de Fora. Para adicionar um bairro, inclua um registro nesta lista.
// Cada bairro tem texto próprio. Só citar ruas e referências que existam de fato.
import type { BairroDados } from '../bairros';

export const juizDeFora: BairroDados[] = [
  // ---------------- REGIÃO CENTRAL ----------------
  {
    nome: 'Centro',
    em: 'no Centro',
    regiao: 'Região Central',
    h1: 'Desentupidora no Centro de Juiz de Fora 24 horas',
    vizinhos: ['Granbery', 'Santa Helena', 'São Mateus', 'Poço Rico', 'Jardim Glória'],
    referencias: ['Rua Halfeld', 'Avenida Barão do Rio Branco', 'Parque Halfeld', 'Avenida Getúlio Vargas'],
    imovel: 'Prédios comerciais e residenciais antigos, galerias com dezenas de lojas e sobrados adaptados para comércio.',
    problema:
      'Nos edifícios antigos, a mesma coluna de esgoto recebe salas comerciais, lanchonetes e apartamentos. A tubulação de ferro fundido acumula crosta e ferrugem por dentro, perde diâmetro e a água volta nos andares baixos e nas lojas do térreo.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Centro de Juiz de Fora concentra, entre a Avenida Barão do Rio Branco e a Avenida Getúlio Vargas, prédios de várias décadas, galerias e o calçadão da Rua Halfeld. É muita gente usando banheiros e cozinhas ligados a tubulações antigas, e por isso os chamados daqui envolvem quase sempre colunas de prédio, vasos de uso público e pias de lanchonete.',
    faq: [
      {
        q: 'Tenho uma loja em galeria no Centro e o esgoto volta pelo ralo do banheiro. De quem é o problema?',
        a: 'Quando a água volta por um ralo sem que ninguém esteja usando o banheiro da loja, a obstrução costuma estar na coluna ou no ramal coletivo da galeria. Desentupimos o trecho e mostramos ao responsável pelo prédio onde estava o bloqueio.',
      },
      {
        q: 'Prédio antigo com coluna de ferro pode ser desentupido sem quebrar parede?',
        a: 'Na maioria dos casos, sim. O acesso é feito por caixas de inspeção, ralos ou pelo ponto do vaso, com máquina rotativa ou hidrojato, sem obra.',
      },
      {
        q: 'Vocês atendem o Centro fora do horário comercial?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'São Mateus',
    em: 'em São Mateus',
    regiao: 'Região Central',
    h1: 'Desentupidora 24h em São Mateus',
    vizinhos: ['Alto dos Passos', 'Centro', 'Cascatinha', 'Dom Bosco'],
    referencias: ['Rua São Mateus', 'Avenida Presidente Itamar Franco', 'Rua Padre Café'],
    imovel: 'Prédios residenciais de vários andares, muitos com lojas, padarias e restaurantes no térreo.',
    problema:
      'A caixa de gordura do condomínio recebe a cozinha de todos os apartamentos e, em alguns prédios, também a do comércio do térreo. Quando ela enche, a gordura passa para o ramal e as pias dos primeiros andares param de escoar.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'São Mateus é um bairro de prédios residenciais com comércio forte na Rua São Mateus e na Avenida Presidente Itamar Franco. Bares, restaurantes e padarias dividem a rede com centenas de apartamentos, e a gordura de cozinha é a causa da maior parte dos entupimentos que atendemos aqui.',
    faq: [
      {
        q: 'De quanto em quanto tempo a caixa de gordura de um prédio precisa ser limpa?',
        a: 'Depende do número de apartamentos e do tamanho da caixa. O sinal de que passou da hora é mau cheiro na garagem ou no pátio e pias lentas nos andares baixos. Em prédios com restaurante no térreo, o intervalo é bem menor.',
      },
      {
        q: 'A pia do meu apartamento borbulha quando o vizinho de cima usa a dele. É entupimento?',
        a: 'É sinal de que a coluna ou o ramal comum está com a passagem reduzida. O ar preso sobe pela sua pia. Vale avisar o síndico, porque o problema tende a piorar.',
      },
      {
        q: 'Atendem bares e restaurantes de São Mateus à noite?',
        a: 'Sim. Atendemos comércio e residências 24 horas, inclusive em fins de semana e feriados.',
      },
    ],
  },
  {
    nome: 'Alto dos Passos',
    em: 'no Alto dos Passos',
    regiao: 'Região Central',
    h1: 'Desentupimento no Alto dos Passos, a qualquer hora',
    vizinhos: ['São Mateus', 'Bom Pastor', 'Centro', 'Boa Vista'],
    referencias: ['Rua Morais e Castro', 'Rua Dom Viçoso', 'Avenida Barão do Rio Branco'],
    imovel: 'Edifícios residenciais e casas antigas convertidas em bares, restaurantes e clínicas.',
    problema:
      'Cozinhas profissionais lavam grande volume de louça engordurada em poucas horas. O ramal da pia, dimensionado para uso doméstico nas casas adaptadas, fecha com gordura e restos de alimento e a cuba transborda em pleno expediente.',
    servico: 'desentupimento-de-pia',
    abertura:
      'No Alto dos Passos, as ruas Morais e Castro e Dom Viçoso reúnem bares e restaurantes em imóveis que antes eram residências, ao lado de prédios de apartamentos. O movimento noturno é intenso, e pia de cozinha parada no meio do serviço é a emergência mais comum do bairro.',
    faq: [
      {
        q: 'A pia do meu restaurante entope toda semana. Limpar o sifão não basta?',
        a: 'Não. Quando o entupimento volta em poucos dias, a gordura está no ramal ou na caixa de gordura, fora do alcance do sifão. É preciso desobstruir o trecho inteiro com equipamento.',
      },
      {
        q: 'Água quente com detergente resolve gordura no cano?',
        a: 'Ajuda pouco. A gordura amolece, anda alguns metros e endurece de novo mais adiante, onde o cano está frio. O bloqueio só muda de lugar.',
      },
      {
        q: 'Vocês atendem o Alto dos Passos de madrugada?',
        a: 'Sim. O atendimento é 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Bom Pastor',
    em: 'no Bom Pastor',
    regiao: 'Região Central',
    h1: 'Desentupidora no Bom Pastor: chegamos em 20 minutos',
    vizinhos: ['Alto dos Passos', 'Santa Luzia', 'Boa Vista', 'São Mateus'],
    referencias: ['Rua Senador Salgado Filho', 'Avenida Barão do Rio Branco'],
    imovel: 'Casas amplas e prédios residenciais de médio e alto padrão, com vários banheiros por unidade.',
    problema:
      'Imóveis com muitos banheiros têm ramais longos até a saída para a rua. Papel em excesso, lenço umedecido e absorvente param nas curvas desses ramais, e o vaso enche sem dar vazão.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Bom Pastor é um bairro residencial, de ruas calmas como a Senador Salgado Filho, no trecho sul da Avenida Barão do Rio Branco. Casas grandes e apartamentos de vários banheiros geram um tipo de chamado recorrente: vaso sanitário que não dá descarga ou devolve água.',
    faq: [
      {
        q: 'O vaso entupiu e o desentupidor de borracha não resolveu. O que isso indica?',
        a: 'Indica que a obstrução não está na louça, e sim adiante, no ramal. Insistir pode fazer o vaso transbordar. Nesses casos usamos máquina com cabo flexível para alcançar o ponto do bloqueio.',
      },
      {
        q: 'Lenço umedecido pode ir no vaso?',
        a: 'Não. Ele não se desfaz na água como o papel higiênico e se enrosca nas curvas do cano, formando uma trama que segura todo o resto.',
      },
      {
        q: 'Atendem casas e condomínios do Bom Pastor aos domingos?',
        a: 'Sim. Atendemos residências e comércios todos os dias, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Granbery',
    em: 'no Granbery',
    regiao: 'Região Central',
    h1: 'Desentupidora 24 horas no Granbery',
    vizinhos: ['Centro', 'São Mateus', 'Poço Rico', 'Alto dos Passos'],
    referencias: ['Instituto Metodista Granbery', 'Rua Batista de Oliveira', 'Rua Sampaio'],
    imovel: 'Prédios residenciais de porte médio, casas antigas e muitos apartamentos alugados por estudantes.',
    problema:
      'Em apartamentos divididos por vários moradores, o box é usado muitas vezes por dia. Cabelo e resíduo de sabonete enchem a caixa sifonada e o ramal do banheiro, e a água do banho passa a subir no piso.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Granbery fica colado ao Centro e leva o nome do Instituto Metodista Granbery, entre as ruas Batista de Oliveira e Sampaio. Há muitas moradias de estudantes e prédios sem elevador com tubulação de décadas. Ralo de banheiro que não escoa é o pedido que mais recebemos do bairro.',
    faq: [
      {
        q: 'O ralo do box escoa devagar e cheira mal. Preciso trocar o ralo?',
        a: 'Normalmente não. O mau cheiro vem do material acumulado na caixa sifonada. Depois da limpeza e da desobstrução do ramal, o escoamento e o fecho de água voltam ao normal.',
      },
      {
        q: 'Moramos em república e o banheiro alaga toda semana. Tem solução definitiva?',
        a: 'A desobstrução completa do ramal resolve o acúmulo atual. Para não voltar, o que funciona é usar uma telinha no ralo e retirar o cabelo depois do banho.',
      },
      {
        q: 'Vocês atendem o Granbery à noite?',
        a: 'Sim. O atendimento é 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Santa Helena',
    em: 'em Santa Helena',
    regiao: 'Região Central',
    h1: 'Desentupimento 24 horas em Santa Helena',
    vizinhos: ['Centro', 'Paineiras', 'Jardim Glória', 'São Mateus'],
    referencias: ['Rua Barão de Cataguases', 'Rua Oswaldo Cruz', 'Avenida Barão do Rio Branco'],
    imovel: 'Edifícios residenciais altos, muitos com mais de trinta anos de uso, além de clínicas e consultórios.',
    problema:
      'Em prédios altos, a espuma e o resíduo de sabão das máquinas de lavar descem pela mesma prumada. Com a base da coluna parcialmente fechada, a espuma sai pelos ralos das áreas de serviço dos andares mais baixos.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'Santa Helena é um dos bairros mais verticalizados de Juiz de Fora. Na Rua Barão de Cataguases, na Oswaldo Cruz e no trecho próximo da Avenida Barão do Rio Branco, os edifícios têm muitos andares e prumadas longas. Síndicos e moradores dos primeiros pavimentos são os que mais nos chamam.',
    faq: [
      {
        q: 'Sai espuma pelo ralo da área de serviço quando ninguém em casa está lavando roupa. Por quê?',
        a: 'A espuma vem dos apartamentos de cima. Ela encontra a coluna estreitada e escapa pelo ralo mais próximo, que costuma ser o dos andares baixos. O serviço indicado é a limpeza da prumada.',
      },
      {
        q: 'É preciso entrar em todos os apartamentos para desentupir a coluna?',
        a: 'Não necessariamente. Em geral o trabalho é feito a partir da base, pelas caixas de inspeção, ou de um ou dois pontos de acesso na prumada.',
      },
      {
        q: 'Vocês atendem consultórios e clínicas de Santa Helena?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas por dia.',
      },
    ],
  },
  {
    nome: 'Paineiras',
    em: 'no Paineiras',
    regiao: 'Região Central',
    h1: 'Desentupidora no Paineiras, dia e noite',
    vizinhos: ['Santa Helena', 'Jardim Glória', 'Centro'],
    referencias: ['Rua Olegário Maciel', 'Rua do Carmelo', 'Rua Renato Cruz Frederico'],
    imovel: 'Prédios residenciais e casas construídos em terreno inclinado, com garagens abaixo do nível da rua.',
    problema:
      'Na encosta, a água da chuva chega com força às calhas, aos ralos de pátio e às grelhas de garagem. Folhas e terra entopem os condutores, e a água acumulada desce para a garagem ou infiltra pela laje.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Paineiras sobe a encosta a partir da Rua Olegário Maciel, com ruas arborizadas como a do Carmelo. A inclinação do terreno e a quantidade de árvores fazem da drenagem de chuva o ponto fraco de muitos imóveis: basta um temporal para a garagem encher.',
    faq: [
      {
        q: 'A garagem do prédio alaga quando chove forte. É entupimento ou falta de ralo?',
        a: 'Na maior parte das vezes é obstrução. A grelha e a tubulação que sai dela acumulam terra, folhas e areia. Com a rede limpa, a mesma grelha volta a dar vazão.',
      },
      {
        q: 'Posso ligar a calha no esgoto para resolver?',
        a: 'Não. Água de chuva e esgoto devem correr em redes separadas. A ligação cruzada sobrecarrega o esgoto e faz a água voltar pelos ralos de dentro do imóvel.',
      },
      {
        q: 'Atendem o Paineiras durante temporais?',
        a: 'Sim. Atendemos 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jardim Glória',
    em: 'no Jardim Glória',
    regiao: 'Região Central',
    h1: 'Desentupidora 24h no Jardim Glória',
    vizinhos: ['Santa Helena', 'Paineiras', 'Santa Catarina', 'Centro', 'Morro da Glória'],
    referencias: ['Rua Quintino Bocaiúva', 'Rua Uruguaiana', 'Rua da Abolição'],
    imovel: 'Casas antigas de terreno amplo e prédios residenciais baixos, em ruas arborizadas.',
    problema:
      'As casas mais antigas ainda têm trechos de manilha de barro entre o quintal e a rua. Raízes de árvores entram pelas juntas, formam uma cabeleira dentro do tubo e seguram papel e gordura até fechar a passagem.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Jardim Glória é um bairro residencial tradicional, de ruas como a Quintino Bocaiúva, a Uruguaiana e a da Abolição. Quintais com árvores grandes e encanamento antigo formam uma combinação conhecida de quem trabalha com desentupimento: cano tomado por raiz.',
    faq: [
      {
        q: 'Como sei que o entupimento é causado por raiz?',
        a: 'Os sinais são entupimentos que voltam no mesmo ponto, escoamento lento em toda a casa e árvores ou arbustos próximos ao trajeto do cano. A máquina rotativa costuma trazer fiapos de raiz na ponta.',
      },
      {
        q: 'Dá para tirar a raiz sem trocar a tubulação?',
        a: 'Dá para cortar a raiz e liberar a passagem com máquina e hidrojato. Se a manilha estiver muito danificada, avisamos, porque a raiz tende a voltar pelo mesmo ponto.',
      },
      {
        q: 'Vocês atendem casas do Jardim Glória em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Santa Catarina',
    em: 'em Santa Catarina',
    regiao: 'Região Central',
    h1: 'Desentupimento em Santa Catarina, Juiz de Fora',
    vizinhos: ['Jardim Glória', 'Morro da Glória', 'Fábrica', 'Mariano Procópio', 'Democrata'],
    referencias: ['Rua Catulo Breviglieri', 'Rua Engenheiro José Carlos de Morais Sarmento'],
    imovel: 'Casas e pequenos prédios residenciais, alguns com mais de uma moradia no mesmo lote.',
    problema:
      'Em lotes com casa da frente e casa dos fundos, a pia de mais de uma cozinha deságua em uma única caixa de gordura pequena. Ela satura rápido e a pia da casa mais baixa é a primeira a parar.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Santa Catarina é um bairro residencial perto do Centro, com ruas como a Catulo Breviglieri e a Engenheiro José Carlos de Morais Sarmento. Predominam casas e prédios pequenos, e os chamados são domésticos: pia de cozinha que não escoa e tanque devolvendo água.',
    faq: [
      {
        q: 'Quando uso a pia, a água sobe no tanque. O que está acontecendo?',
        a: 'Pia e tanque costumam se encontrar no mesmo ramal antes da caixa de gordura. Se a água de um sobe no outro, a obstrução está depois desse encontro, e não no sifão.',
      },
      {
        q: 'Pó de café entope a pia?',
        a: 'Entope. O pó não se dissolve, deposita no fundo do cano e gruda na gordura. Com o tempo vira uma massa compacta.',
      },
      {
        q: 'Atendem Santa Catarina no fim de semana?',
        a: 'Sim. Atendemos todos os dias, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Mariano Procópio',
    em: 'no Mariano Procópio',
    regiao: 'Região Central',
    h1: 'Desentupidora no Mariano Procópio 24 horas',
    vizinhos: ['Fábrica', 'Democrata', 'Santa Catarina', 'Santa Terezinha'],
    referencias: ['Museu Mariano Procópio', 'Rua Mariano Procópio', 'Avenida Brasil'],
    imovel: 'Casas e sobrados antigos, galpões e comércio de rua em terreno plano, próximo ao Rio Paraibuna.',
    problema:
      'Em área plana, o ramal de esgoto corre com pouca inclinação até a rede da rua. O esgoto anda devagar, os sólidos decantam e o tubo vai fechando até a água voltar pelo ralo mais baixo do imóvel.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Mariano Procópio se estende em volta do museu que dá nome ao bairro, entre a Rua Mariano Procópio e a Avenida Brasil, na várzea do Paraibuna. Muitos imóveis são antigos e térreos, e a pouca queda do terreno faz o esgoto voltar com mais facilidade do que nos bairros de morro.',
    faq: [
      {
        q: 'O esgoto volta pelo ralo do quintal sempre que uso a máquina de lavar. Por quê?',
        a: 'A máquina despeja muita água de uma vez. Com o ramal parcialmente obstruído, esse volume não passa e sai pelo ponto mais baixo. É sinal de que o ramal precisa ser desobstruído até a rua.',
      },
      {
        q: 'Imóvel em terreno plano entope mais?',
        a: 'Tende a entupir mais, porque a tubulação tem pouca inclinação e o esgoto perde velocidade. A limpeza do ramal e das caixas de inspeção resolve o acúmulo.',
      },
      {
        q: 'Vocês atendem galpões e lojas do Mariano Procópio?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Democrata',
    em: 'no Democrata',
    regiao: 'Região Central',
    h1: 'Desentupimento 24h no Democrata',
    vizinhos: ['Mariano Procópio', 'Fábrica', 'Santa Catarina'],
    referencias: ['Rua Bernardo Mascarenhas', 'Rua Benjamim Guimarães', 'Avenida Vereador Laudelino Schettino'],
    imovel: 'Prédios residenciais de porte médio e casas, parte deles em ruas inclinadas.',
    problema:
      'Banheiros de apartamentos com ramal estreito e pouca queda acumulam papel a cada descarga. Com caixa acoplada de baixo volume, a água não empurra o material até a coluna e o vaso entope com uso normal.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Democrata fica ao lado do Mariano Procópio e mistura casas e prédios residenciais em ruas como a Benjamim Guimarães e o trecho inicial da Bernardo Mascarenhas. O perfil é familiar, e a ocorrência que mais atendemos é vaso sanitário entupido em apartamento.',
    faq: [
      {
        q: 'Meu vaso entope mesmo sem jogar nada além de papel. É normal?',
        a: 'Não é normal, mas é comum em ramais com pouca inclinação ou parcialmente obstruídos. O papel fica parado no cano e a cada uso soma mais. A desobstrução do ramal resolve.',
      },
      {
        q: 'Posso jogar soda cáustica no vaso?',
        a: 'Não faça isso. A soda não dissolve papel nem objetos, pode danificar a tubulação e fica parada na louça, com risco de queimadura para quem for mexer depois.',
      },
      {
        q: 'Atendem o Democrata de madrugada?',
        a: 'Sim. Atendemos 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Fábrica',
    em: 'no bairro Fábrica',
    regiao: 'Região Central',
    h1: 'Desentupidora no bairro Fábrica, em Juiz de Fora',
    vizinhos: ['Mariano Procópio', 'Democrata', 'Cerâmica', 'Santa Catarina'],
    referencias: ['Rua Bernardo Mascarenhas', 'Rua Tereza Cristina', 'Rua Eduardo Weiss'],
    imovel: 'Sobrados com loja embaixo e moradia em cima, casas antigas e comércio de rua.',
    problema:
      'Tubulações antigas de ferro e de barro criam crosta por dentro. A passagem, que já era estreita, diminui ano a ano, e pias, tanques e ralos do imóvel começam a escoar devagar todos ao mesmo tempo.',
    servico: 'desentupimento-de-cano',
    abertura:
      'No bairro Fábrica, a Rua Bernardo Mascarenhas concentra o comércio, cruzando com a Tereza Cristina e a Eduardo Weiss. Boa parte dos imóveis é antiga, com loja no térreo e moradia no andar de cima, e o encanamento original segue em uso em muitos deles.',
    faq: [
      {
        q: 'Todos os pontos da casa estão escoando devagar. Onde está o entupimento?',
        a: 'Quando o problema aparece em vários pontos ao mesmo tempo, a obstrução está no trecho comum, depois que os ramais se juntam. Localizamos o ponto e desobstruímos sem quebrar piso.',
      },
      {
        q: 'Cano antigo com crosta precisa ser trocado?',
        a: 'Nem sempre. O hidrojato remove boa parte da crosta e devolve diâmetro ao tubo. Se houver trecho quebrado ou afundado, avisamos durante o serviço.',
      },
      {
        q: 'Vocês atendem lojas da Bernardo Mascarenhas em horário comercial?',
        a: 'Sim, e também fora dele. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Poço Rico',
    em: 'no Poço Rico',
    regiao: 'Região Central',
    h1: 'Desentupidora 24 horas no Poço Rico',
    vizinhos: ['Centro', 'Granbery', 'Costa Carvalho', 'Vila Ozanan'],
    referencias: ['Rua Osório de Almeida', 'Rua da Bahia', 'Rua Pernambuco'],
    imovel: 'Casas e sobrados antigos, oficinas e pequenos prédios, em uma das partes mais baixas da área central.',
    problema:
      'Por ficar em cota baixa, o bairro recebe a água que desce dos morros vizinhos. Em chuva forte a rede fica carregada e, se o ramal do imóvel já tem obstrução parcial, o esgoto retorna pelos ralos do térreo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Poço Rico fica entre o Centro e o Rio Paraibuna, com ruas que levam nomes de estados, como a da Bahia e a Pernambuco, além da Osório de Almeida. São imóveis antigos em terreno baixo, onde qualquer estreitamento no ramal de esgoto aparece logo na forma de retorno pelo ralo.',
    faq: [
      {
        q: 'O esgoto só volta quando chove. Isso é entupimento?',
        a: 'Em geral há uma obstrução parcial no ramal. Em dia seco o esgoto ainda passa. Com a rede cheia pela chuva, a sobra de capacidade acaba e a água volta. Desobstruir o ramal e limpar as caixas reduz muito o problema.',
      },
      {
        q: 'Existe peça que impede o retorno do esgoto?',
        a: 'Existe a válvula de retenção, instalada na saída do ramal. Ela só funciona bem com a tubulação limpa, por isso a desobstrução vem primeiro.',
      },
      {
        q: 'Atendem o Poço Rico à noite e em feriados?',
        a: 'Sim. Atendemos 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- ZONA SUL ----------------
  {
    nome: 'Cascatinha',
    em: 'na Cascatinha',
    regiao: 'Zona Sul',
    h1: 'Desentupidora na Cascatinha, 24 horas por dia',
    vizinhos: ['São Mateus', 'Dom Bosco', 'Teixeiras', 'Santa Luzia'],
    referencias: ['Avenida Presidente Itamar Franco', 'Rua Ministro Amarílio Lopes Salgado', 'Independência Shopping'],
    imovel: 'Condomínios verticais recentes, com várias torres, área de lazer e cozinhas gourmet.',
    problema:
      'Condomínios com muitas unidades têm redes internas longas e caixas de gordura coletivas. Quando a manutenção atrasa, a gordura solidifica ao longo de dezenas de metros de tubo e só sai com jato de alta pressão.',
    servico: 'hidrojateamento',
    abertura:
      'A Cascatinha cresceu ao longo da Avenida Presidente Itamar Franco, perto do Independência Shopping, com condomínios de torres e prédios novos em ruas como a Ministro Amarílio Lopes Salgado. Aqui os pedidos vêm mais de síndicos e administradoras, para limpeza de redes inteiras, do que de um ponto isolado.',
    faq: [
      {
        q: 'Qual a diferença entre desentupir com máquina rotativa e com hidrojato?',
        a: 'A máquina rotativa abre passagem no ponto do bloqueio. O hidrojato lava a parede interna do tubo em toda a extensão e remove a gordura aderida. Em redes de condomínio, o jato dá um resultado mais duradouro.',
      },
      {
        q: 'O hidrojateamento pode danificar a tubulação de PVC?',
        a: 'Não, quando a pressão e o bico são ajustados para o diâmetro e o material do tubo. Esse ajuste é feito antes de começar.',
      },
      {
        q: 'Vocês atendem condomínios da Cascatinha fora do horário comercial?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados, para condomínios, apartamentos e comércio.',
      },
    ],
  },
  {
    nome: 'Santa Luzia',
    em: 'em Santa Luzia',
    regiao: 'Zona Sul',
    h1: 'Desentupimento em Santa Luzia: atendimento 24h',
    vizinhos: ['Ipiranga', 'Bom Pastor', 'Santa Efigênia', 'Teixeiras'],
    referencias: ['Avenida Santa Luzia', 'Rua Ibitiguaia'],
    imovel: 'Casas, sobrados e comércio de rua ao longo do vale, com moradias subindo as encostas dos dois lados.',
    problema:
      'A água de chuva das encostas converge para a parte baixa do bairro. Bocas de lobo, ralos de quintal e tubos de drenagem dos imóveis recebem terra e lixo arrastados pela enxurrada e deixam de dar vazão.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'Santa Luzia ocupa um vale na Zona Sul, com o comércio na Avenida Santa Luzia e na Rua Ibitiguaia e casas subindo os morros. Nos meses de chuva, a água desce toda para o mesmo lugar, e ralos e redes pluviais entupidos são o problema que mais nos traz ao bairro.',
    faq: [
      {
        q: 'O ralo do quintal não dá conta quando chove. Como resolver?',
        a: 'O primeiro passo é desobstruir o ralo e a tubulação até o ponto de descarte. Muitas vezes o tubo está com terra compactada e funciona com uma fração da capacidade.',
      },
      {
        q: 'Depois de uma enxurrada, preciso limpar a rede mesmo que esteja escoando?',
        a: 'Vale a pena verificar. A enxurrada deixa areia e barro no fundo do tubo. Se o material secar ali, a próxima chuva encontra a rede com menos passagem.',
      },
      {
        q: 'Atendem Santa Luzia em dia de chuva forte?',
        a: 'Sim. Atendemos 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Ipiranga',
    em: 'no Ipiranga',
    regiao: 'Zona Sul',
    h1: 'Desentupidora no Ipiranga, Juiz de Fora',
    vizinhos: ['Santa Luzia', 'Santa Efigênia', 'Bela Aurora'],
    referencias: ['Avenida Darcy Vargas', 'Rua Bady Geara'],
    imovel: 'Casas de um e dois pavimentos em lotes inclinados, muitas com ampliações feitas ao longo dos anos.',
    problema:
      'Cada ampliação acrescenta um banheiro ou uma cozinha ligados ao ramal original, que continua do mesmo diâmetro. O tubo passa a trabalhar no limite e fecha com papel e gordura no primeiro acúmulo.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Ipiranga é um bairro residencial da Zona Sul, cortado pela Avenida Darcy Vargas e por ruas como a Bady Geara. As casas foram crescendo com puxadinhos e segundos andares, e a rede de esgoto de muitos lotes já não acompanha o número de moradores.',
    faq: [
      {
        q: 'Construí mais um banheiro e a casa passou a entupir. Tem relação?',
        a: 'Tem. O ramal antigo recebe mais volume do que antes e qualquer acúmulo fecha a passagem. A desobstrução completa devolve a capacidade do tubo, e avaliamos no local se há ponto de estrangulamento.',
      },
      {
        q: 'O que é caixa de inspeção e por que ela importa?',
        a: 'É a caixa de alvenaria por onde o esgoto passa antes de sair do lote. É por ela que se acessa o ramal para limpar. Caixa lacrada ou enterrada dificulta o serviço, mas localizamos e abrimos.',
      },
      {
        q: 'Vocês atendem o Ipiranga aos domingos?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Teixeiras',
    em: 'em Teixeiras',
    regiao: 'Zona Sul',
    h1: 'Desentupidora 24h em Teixeiras',
    vizinhos: ['Salvaterra', 'Cascatinha', 'Santa Luzia', 'Aeroporto'],
    referencias: ['Avenida Deusdedith Salgado', 'Parque da Lajinha'],
    imovel: 'Casas, pequenos prédios e comércio voltado para a avenida, com lanchonetes, restaurantes e padarias.',
    problema:
      'Restaurantes e lanchonetes geram gordura em volume muito acima do doméstico. Caixas de gordura subdimensionadas ou sem limpeza regular transbordam e exalam mau cheiro para o salão e para os vizinhos.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'Teixeiras acompanha a Avenida Deusdedith Salgado, caminho entre a cidade e a BR-040, e tem o Parque da Lajinha como vizinho. O comércio de alimentação da avenida convive com casas e prédios pequenos, e a caixa de gordura é o item que mais pede atenção.',
    faq: [
      {
        q: 'A caixa de gordura da lanchonete está cheirando mal. Já precisa limpar?',
        a: 'Sim. Mau cheiro indica gordura em decomposição e caixa perto do limite. Se ela transbordar, a gordura entra no ramal e a pia para.',
      },
      {
        q: 'Para onde vai o material retirado da caixa?',
        a: 'O resíduo é retirado da caixa e acondicionado para descarte adequado. Ele não deve ser jogado no ralo, no vaso nem na rua, porque entope a rede adiante.',
      },
      {
        q: 'Atendem Teixeiras antes de o comércio abrir?',
        a: 'Sim. Como o atendimento é 24 horas, o serviço pode ser feito de madrugada ou bem cedo.',
      },
    ],
  },
  {
    nome: 'Salvaterra',
    em: 'no Salvaterra',
    regiao: 'Zona Sul',
    h1: 'Desentupimento no Salvaterra, a qualquer hora',
    vizinhos: ['Teixeiras', 'Aeroporto', 'Cascatinha'],
    referencias: ['Avenida Deusdedith Salgado', 'Alameda Salvaterra', 'BR-040'],
    imovel: 'Casas em lotes grandes, condomínios horizontais, restaurantes e espaços de eventos próximos à rodovia.',
    problema:
      'Em terrenos extensos, o esgoto percorre dezenas de metros entre a casa e a ligação com a rede. Trechos longos e pouco inspecionados acumulam sedimento, e o bloqueio fica longe de qualquer ponto de acesso comum.',
    servico: 'hidrojateamento',
    abertura:
      'O Salvaterra fica na saída sul de Juiz de Fora, entre a Avenida Deusdedith Salgado e a BR-040. Os lotes são grandes, há condomínios de casas e restaurantes de estrada. As redes internas são compridas, e a limpeza com jato de alta pressão é o que resolve a maior parte dos casos.',
    faq: [
      {
        q: 'Minha rede de esgoto tem mais de cinquenta metros até a rua. Vocês alcançam?',
        a: 'Sim. O hidrojato trabalha com mangueiras longas, e o serviço é feito por trechos, de caixa em caixa, limpando toda a extensão.',
      },
      {
        q: 'Com que frequência uma rede longa deve ser lavada?',
        a: 'Não existe um prazo único. Imóveis com cozinha de uso intenso, como restaurantes e casas de festa, precisam de intervalos menores. O indicado é não esperar o primeiro retorno de esgoto.',
      },
      {
        q: 'Vocês atendem restaurantes e condomínios do Salvaterra?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Santa Efigênia',
    em: 'em Santa Efigênia',
    regiao: 'Zona Sul',
    h1: 'Desentupidora em Santa Efigênia 24 horas',
    vizinhos: ['Santa Luzia', 'Ipiranga', 'Sagrado Coração de Jesus'],
    referencias: ['Rua Lino Pinto', 'Avenida Engenheiro José Márcio Paschoalino', 'Rua João Dutra Andrade'],
    imovel: 'Casas simples e sobrados em ruas de morro, com áreas de serviço e quintais pequenos.',
    problema:
      'O ralo da área de serviço recebe a água do tanque e da máquina de lavar, carregada de fiapos de roupa e sabão em pó. Esse material forma uma pasta na caixa sifonada e a água espalha pelo piso.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'Santa Efigênia é um bairro residencial da Zona Sul, com ruas como a Lino Pinto e a João Dutra Andrade. Nas casas do bairro, a área de serviço concentra tanque, máquina e ralo no mesmo canto, e é desse ralo que vem boa parte dos chamados.',
    faq: [
      {
        q: 'O ralo da área de serviço transborda quando a máquina esvazia. É o ralo ou o cano?',
        a: 'Quase sempre é a caixa sifonada cheia de resíduo ou o ramal logo depois dela. A máquina solta muita água em pouco tempo e mostra um entupimento que em uso leve passaria despercebido.',
      },
      {
        q: 'Sabão em pó entope mais do que o líquido?',
        a: 'Em excesso, sim. O pó que não dissolve deposita no cano e endurece com os fiapos de tecido. Usar a dose indicada na embalagem reduz o acúmulo.',
      },
      {
        q: 'Atendem Santa Efigênia em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- ZONA OESTE ----------------
  {
    nome: 'São Pedro',
    em: 'em São Pedro',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora em São Pedro, perto da UFJF',
    vizinhos: ['Borboleta', 'Aeroporto', 'Martelos'],
    referencias: ['Campus da UFJF', 'Rua José Lourenço Kelmer', 'Avenida Presidente Costa e Silva'],
    imovel: 'Prédios de quitinetes e apartamentos pequenos, repúblicas de estudantes, casas e condomínios.',
    problema:
      'Repúblicas e quitinetes têm muita gente por banheiro e rotatividade alta de moradores. Papel em excesso, absorvente, cotonete e fio dental vão para o vaso e travam no ramal, que nos prédios de quitinetes atende várias unidades em sequência.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'São Pedro é o bairro universitário de Juiz de Fora: fica ao lado do campus da UFJF, com entrada pela Rua José Lourenço Kelmer, e tem na Avenida Presidente Costa e Silva seu eixo de comércio. Repúblicas e prédios de quitinetes dominam o entorno, e vaso sanitário entupido é o chamado número um.',
    faq: [
      {
        q: 'O vaso da república entope todo mês. O que estamos fazendo de errado?',
        a: 'Quase sempre é descarte indevido: absorvente, cotonete, lenço umedecido, fio dental e papel em excesso. Um cesto ao lado do vaso e um aviso para visitantes resolvem a maior parte dos casos.',
      },
      {
        q: 'Entupiu o vaso da minha quitinete e o do vizinho também. É coincidência?',
        a: 'Não. Em prédios de quitinetes os banheiros compartilham o mesmo ramal ou a mesma coluna. Quando dois param juntos, o bloqueio está no trecho comum e deve ser comunicado ao proprietário ou ao síndico.',
      },
      {
        q: 'Vocês atendem São Pedro de madrugada e no fim de semana?',
        a: 'Sim. Atendemos 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Borboleta',
    em: 'no Borboleta',
    regiao: 'Zona Oeste',
    h1: 'Desentupimento 24 horas no Borboleta',
    vizinhos: ['São Pedro', 'Aeroporto', 'Martelos'],
    referencias: ['Rua José Lourenço', 'Rua Júlio Menini', 'Rua Antônio Felet'],
    imovel: 'Casas antigas em terrenos compridos e inclinados, com quintal e, muitas vezes, mais de uma construção no lote.',
    problema:
      'Nos terrenos em declive, o cano de esgoto desce do fundo do lote até a rua com curvas e emendas feitas em épocas diferentes. Em cada mudança de direção sem caixa de inspeção, o material se acumula e fecha o tubo.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Borboleta é um bairro antigo da Zona Oeste, com casas ao longo da Rua José Lourenço e de vias como a Júlio Menini e a Antônio Felet. Os lotes são fundos e em declive, e a tubulação que liga as casas à rua costuma ser longa e remendada, o que explica os entupimentos de cano que atendemos por aqui.',
    faq: [
      {
        q: 'Minha casa fica no fundo do lote. O entupimento pode estar no terreno do vizinho da frente?',
        a: 'Pode estar em qualquer ponto do trajeto até a rua, inclusive sob a construção da frente quando o ramal é compartilhado. Percorremos o trecho com a máquina e indicamos onde estava a obstrução.',
      },
      {
        q: 'Não sei por onde passa o cano. Vocês conseguem desentupir assim mesmo?',
        a: 'Sim. O acesso é feito pelos pontos existentes, como ralos, caixas e a saída do vaso, e o cabo segue o caminho do tubo.',
      },
      {
        q: 'Atendem o Borboleta à noite?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Aeroporto',
    em: 'no Aeroporto',
    regiao: 'Zona Oeste',
    h1: 'Desentupidora no bairro Aeroporto, dia e noite',
    vizinhos: ['São Pedro', 'Borboleta', 'Salvaterra', 'Teixeiras'],
    referencias: ['Aeroporto Francisco Álvares de Assis', 'Avenida Prefeito Mello Reis', 'Avenida Engenheiro Valdir Pedro Monachesi'],
    imovel: 'Casas de alto padrão em condomínios horizontais e loteamentos, com áreas gourmet, piscina e jardins.',
    problema:
      'Áreas gourmet com churrasqueira e pia de apoio despejam gordura de carne e carvão em ramais longos, que cruzam o jardim até a caixa de gordura. A gordura esfria no caminho e fecha o tubo antes de chegar à caixa.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O bairro Aeroporto fica na parte alta da cidade, em volta do Aeroporto Francisco Álvares de Assis, com vias como a Avenida Prefeito Mello Reis. É uma região de condomínios de casas e lotes amplos, onde a cozinha principal e a área gourmet mantêm a caixa de gordura sempre trabalhando.',
    faq: [
      {
        q: 'A pia da área gourmet entope depois de todo churrasco. Tem como evitar?',
        a: 'Raspe a gordura das grelhas e espetos para o lixo antes de lavar e não despeje a gordura da bandeja na pia. Se o entupimento já é frequente, o ramal e a caixa precisam de limpeza completa.',
      },
      {
        q: 'Minha casa tem duas caixas de gordura. As duas precisam de limpeza?',
        a: 'Sim. Cada caixa atende um conjunto de pias. Limpar só uma deixa a outra seguir saturando o ramal.',
      },
      {
        q: 'Vocês entram em condomínios fechados do Aeroporto?',
        a: 'Sim. Basta o morador liberar a entrada na portaria. Atendemos 24 horas e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- ZONA NORTE ----------------
  {
    nome: 'Benfica',
    em: 'em Benfica',
    regiao: 'Zona Norte',
    h1: 'Desentupidora em Benfica 24 horas',
    vizinhos: ['Nova Era', 'Santa Cruz', 'Barbosa Lage'],
    referencias: ['Avenida Presidente Juscelino Kubitschek', 'Rua Martins Barbosa', 'Praça Jeremias Garcia'],
    imovel: 'Casas, sobrados com comércio no térreo e conjuntos residenciais, em um bairro com centro comercial próprio.',
    problema:
      'Na área comercial, lojas, lanchonetes e moradias de cima compartilham ramais antigos até a rede da rua. Com tanto uso, o ramal coletivo entope e o esgoto aparece nos ralos do térreo e nas caixas de calçada.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'Benfica é o principal bairro da Zona Norte de Juiz de Fora e funciona quase como uma cidade à parte, com comércio na Rua Martins Barbosa, em volta da Praça Jeremias Garcia e ao longo da Avenida Presidente Juscelino Kubitschek. O movimento é grande, e esgoto retornando em loja ou em casa é o que mais nos leva ao bairro.',
    faq: [
      {
        q: 'Minha loja divide o esgoto com o sobrado de cima. Quem deve chamar a desentupidora?',
        a: 'Qualquer um dos usuários pode chamar. O serviço é feito no ramal comum e resolve para todos. A divisão da responsabilidade é um acerto entre proprietários e inquilinos.',
      },
      {
        q: 'A caixa de esgoto da calçada está vazando. É problema meu ou da rede pública?',
        a: 'Verificamos no local. Se o bloqueio está no ramal do imóvel, desentupimos na hora. Se está na rede da rua, informamos para que você acione a concessionária de saneamento.',
      },
      {
        q: 'Vocês atendem Benfica com a mesma rapidez dos bairros centrais?',
        a: 'Sim. Atendemos Benfica 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Nova Era',
    em: 'em Nova Era',
    regiao: 'Zona Norte',
    h1: 'Desentupimento em Nova Era, Zona Norte de Juiz de Fora',
    vizinhos: ['Benfica', 'Barbosa Lage', 'Santa Cruz', 'Jóquei Clube'],
    referencias: ['Avenida Presidente Juscelino Kubitschek', 'Colégio Militar de Juiz de Fora', 'Rua Comandante Geraldo Berg'],
    imovel: 'Casas térreas e sobrados em loteamentos residenciais, com quintal e área de serviço externa.',
    problema:
      'A pia da cozinha, o tanque e a máquina de lavar costumam descarregar no mesmo ramal externo. Gordura da pia e sabão do tanque formam uma massa esbranquiçada que estreita o cano até a pia parar.',
    servico: 'desentupimento-de-pia',
    abertura:
      'Nova Era fica às margens da Avenida Presidente Juscelino Kubitschek, na altura do Colégio Militar de Juiz de Fora. É um bairro de casas, com vida de bairro e pouco prédio. Os chamados são domésticos, e a pia de cozinha lidera com folga.',
    faq: [
      {
        q: 'Tirei o sifão, estava limpo, e a pia continua parada. E agora?',
        a: 'A obstrução está depois do sifão, no cano embutido na parede ou no ramal externo até a caixa de gordura. Esse trecho só se alcança com máquina.',
      },
      {
        q: 'Minha casa não tem caixa de gordura. Isso causa entupimento?',
        a: 'Causa. Sem a caixa, toda a gordura segue direto pelo ramal de esgoto e se acumula nele. A desobstrução resolve o problema atual, e recomendamos conversar com um profissional de obra sobre a instalação da caixa.',
      },
      {
        q: 'Atendem Nova Era em domingos e feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Barbosa Lage',
    em: 'no Barbosa Lage',
    regiao: 'Zona Norte',
    h1: 'Desentupidora 24h no Barbosa Lage',
    vizinhos: ['Nova Era', 'Jóquei Clube', 'Francisco Bernardino', 'Benfica'],
    referencias: ['Avenida Presidente Juscelino Kubitschek', 'Rua Francisco Faulhaber'],
    imovel: 'Conjuntos de prédios baixos, sem elevador, e casas em ruas residenciais.',
    problema:
      'Nos blocos de apartamentos, as cozinhas de todos os andares usam a mesma coluna de gordura. Com os anos, a parede interna do tubo fica revestida de gordura endurecida e as pias do primeiro andar começam a devolver água.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'O Barbosa Lage reúne conjuntos habitacionais de prédios baixos e ruas de casas, como a Francisco Faulhaber, ao lado da Avenida Presidente Juscelino Kubitschek. Nos blocos, o problema típico é coletivo: a coluna que atende as cozinhas de uma prumada inteira.',
    faq: [
      {
        q: 'Moro no térreo e a água suja dos vizinhos sai pela minha pia. O que fazer?',
        a: 'Peça aos vizinhos da prumada que evitem usar a pia e chame a desentupidora. O bloqueio está na base da coluna, e o térreo é o primeiro a receber o retorno.',
      },
      {
        q: 'Em bloco sem síndico, como funciona o serviço na coluna?',
        a: 'O serviço pode ser solicitado por qualquer morador afetado. O acesso é feito pelo apartamento atingido ou pela caixa externa, e o resultado vale para toda a prumada.',
      },
      {
        q: 'Vocês atendem o Barbosa Lage à noite?',
        a: 'Sim. Atendemos 24 horas e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Francisco Bernardino',
    em: 'no Francisco Bernardino',
    regiao: 'Zona Norte',
    h1: 'Desentupimento no Francisco Bernardino, 24 horas',
    vizinhos: ['Barbosa Lage', 'Bairro Industrial', 'Jóquei Clube', 'Cerâmica'],
    referencias: ['Avenida Presidente Juscelino Kubitschek', 'Rua Bertha Halfeld Paleta', 'Rua Senador Ozanan Coelho'],
    imovel: 'Casas em loteamentos residenciais, muitas com laje, varanda e quintal cimentado.',
    problema:
      'Quintais cimentados e lajes dependem de poucos ralos para escoar a chuva. Folhas, terra de vasos e pelos de animais tampam a grelha e o tubo de descida, e a água acumula junto às portas.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'O Francisco Bernardino é um bairro residencial da Zona Norte, com loteamentos de casas em ruas como a Bertha Halfeld Paleta e a Senador Ozanan Coelho, próximo à Avenida Presidente Juscelino Kubitschek. Quintal e laje fazem parte de quase toda casa, e ralo externo entupido é a queixa mais frequente.',
    faq: [
      {
        q: 'O ralo do quintal está limpo por cima, mas a água não desce. Por quê?',
        a: 'A obstrução está abaixo da grelha, na caixa ou no tubo. Terra e areia compactam no fundo e não saem com vassoura nem com mangueira.',
      },
      {
        q: 'Lavar o quintal com muito sabão entope o ralo?',
        a: 'Sozinho, não. O sabão se junta a terra, pelo de animal e folhas e forma uma lama que adere ao cano. O problema é o conjunto.',
      },
      {
        q: 'Atendem o Francisco Bernardino em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Bairro Industrial',
    em: 'no Bairro Industrial',
    regiao: 'Zona Norte',
    h1: 'Desentupidora no Bairro Industrial: empresas e residências',
    vizinhos: ['Francisco Bernardino', 'Cerâmica', 'Jóquei Clube', 'Barbosa Lage'],
    referencias: ['Avenida Presidente Juscelino Kubitschek', 'Avenida Garcia Rodrigues Paes', 'Rua Ibrahim Bittar Sobrinho'],
    imovel: 'Galpões, oficinas, transportadoras e empresas com refeitório e vestiários, ao lado de ruas residenciais.',
    problema:
      'Redes de empresas recebem resíduos que o uso doméstico não gera: graxa de oficina, areia de pátio, gordura de refeitório em grande volume. O material sedimenta em tubos de diâmetro maior e só é removido com jato de alta pressão.',
    servico: 'hidrojateamento',
    abertura:
      'O Bairro Industrial fica na Zona Norte, entre a Avenida Presidente Juscelino Kubitschek e a Avenida Garcia Rodrigues Paes, e reúne galpões, oficinas e empresas de vários portes. Parada de banheiro ou de refeitório afeta o expediente inteiro, e o serviço mais indicado aqui é a lavagem de redes com hidrojato.',
    faq: [
      {
        q: 'Vocês fazem limpeza de rede de esgoto e de caixas em empresas?',
        a: 'Sim. Fazemos a desobstrução e a lavagem de ramais, caixas de inspeção, caixas de gordura de refeitório e redes de pátio com hidrojato.',
      },
      {
        q: 'O serviço pode ser feito sem parar a operação?',
        a: 'Na maioria dos casos, sim. Como atendemos 24 horas, o trabalho pode ser marcado para a noite, a madrugada ou o fim de semana.',
      },
      {
        q: 'Em emergência, quanto tempo levam para chegar ao Bairro Industrial?',
        a: 'Chegamos em 20 minutos, a qualquer hora, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Cerâmica',
    em: 'no Cerâmica',
    regiao: 'Zona Norte',
    h1: 'Desentupidora 24 horas no bairro Cerâmica',
    vizinhos: ['Fábrica', 'Bairro Industrial', 'Francisco Bernardino', 'Esplanada'],
    referencias: ['Avenida Brasil', 'Rua Edgard de Paiva Aguiar', 'Rua João França'],
    imovel: 'Casas, prédios residenciais mais novos, galpões e lojas voltadas para a Avenida Brasil.',
    problema:
      'Pátios de lojas, estacionamentos e galpões têm grandes áreas impermeáveis ligadas a poucas grelhas. Areia, brita e lixo arrastados pela chuva assentam na tubulação pluvial, e o pátio alaga.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O bairro Cerâmica fica na margem do Rio Paraibuna, junto à Avenida Brasil, com ruas internas como a Edgard de Paiva Aguiar e a João França. A área é plana e mistura comércio, galpões e moradias. Em dia de chuva forte, a drenagem dos imóveis é posta à prova.',
    faq: [
      {
        q: 'O estacionamento da loja vira uma lagoa quando chove. A grelha está desobstruída. O que pode ser?',
        a: 'O problema costuma estar no tubo depois da grelha, que acumula areia e brita no fundo. A lavagem com jato remove o sedimento e devolve a vazão.',
      },
      {
        q: 'Calha de galpão também entope?',
        a: 'Entope. Folhas, ninhos e poeira formam uma camada na calha e nos tubos de queda. A água transborda para dentro do galpão em vez de descer pelo condutor.',
      },
      {
        q: 'Atendem o Cerâmica de madrugada?',
        a: 'Sim. Atendemos 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Jóquei Clube',
    em: 'no Jóquei Clube',
    regiao: 'Zona Norte',
    h1: 'Desentupimento no Jóquei Clube, dia e noite',
    vizinhos: ['Barbosa Lage', 'Francisco Bernardino', 'Bairro Industrial', 'Nova Era'],
    referencias: ['Avenida Jóquei Clube', 'Estrada da Remonta', 'Rua Sílvia Vidal Lage'],
    imovel: 'Casas de famílias numerosas, muitas com dois pavimentos e mais de uma moradia por lote.',
    problema:
      'Com várias pessoas usando poucos banheiros, o vaso recebe carga acima do previsto. Brinquedos pequenos, tampas e embalagens caem na louça com frequência em casas com crianças e travam no sifão do vaso.',
    servico: 'desentupimento-de-vaso-sanitario',
    abertura:
      'O Jóquei Clube é um bairro residencial da Zona Norte, com casas ao longo da Avenida Jóquei Clube, da Estrada da Remonta e de ruas como a Sílvia Vidal Lage. As casas são cheias e os banheiros, muito usados. Vaso entupido, muitas vezes por objeto, é o que mais atendemos.',
    faq: [
      {
        q: 'Caiu um objeto no vaso e ele entupiu. Vocês conseguem retirar?',
        a: 'Sim. Dependendo de onde o objeto parou, ele é puxado com ferramenta própria ou o vaso é retirado do lugar para o resgate. Não dê descarga repetidas vezes, porque isso empurra o objeto para o cano.',
      },
      {
        q: 'Arame ou cabide ajuda a desentupir o vaso?',
        a: 'Não. Além de riscar a louça, o arame empurra o material para mais fundo ou fica preso junto com ele.',
      },
      {
        q: 'Vocês atendem o Jóquei Clube no fim de semana?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados.',
      },
    ],
  },

  // ---------------- ZONA LESTE ----------------
  {
    nome: 'Manoel Honório',
    em: 'no Manoel Honório',
    regiao: 'Zona Leste',
    h1: 'Desentupidora no Manoel Honório 24 horas',
    vizinhos: ['Bairu', 'Santa Terezinha', 'Centro', 'Bonfim', 'Vitorino Braga'],
    referencias: ['Avenida Governador Valadares', 'Rua Américo Lobo', 'Avenida Barão do Rio Branco'],
    imovel: 'Comércio de rua intenso, com bares, lanchonetes, açougues e padarias, e moradias nos andares de cima.',
    problema:
      'Açougues, lanchonetes e bares produzem gordura animal em volume alto. As caixas de gordura, pequenas e instaladas em imóveis antigos, saturam em pouco tempo e a gordura segue para a rede.',
    servico: 'limpeza-de-caixa-de-gordura',
    abertura:
      'O Manoel Honório é um dos centros comerciais mais movimentados fora do Centro, no início da Avenida Barão do Rio Branco, com lojas na Avenida Governador Valadares e na Rua Américo Lobo. O comércio de alimentação é denso, e a limpeza de caixa de gordura é o serviço que mais fazemos no bairro.',
    faq: [
      {
        q: 'A caixa de gordura do meu comércio é pequena e enche rápido. O que fazer?',
        a: 'Enquanto a caixa for a mesma, a saída é reduzir o intervalo entre as limpezas. Também ajuda raspar bandejas e chapas para o lixo antes de lavar.',
      },
      {
        q: 'Gordura de açougue entope diferente da gordura de cozinha?',
        a: 'Sim. A gordura animal endurece mais e mais rápido em temperatura ambiente. Ela forma placas rígidas no cano, que pedem máquina ou hidrojato para sair.',
      },
      {
        q: 'Atendem o Manoel Honório antes de o comércio abrir?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Bairu',
    em: 'no Bairu',
    regiao: 'Zona Leste',
    h1: 'Desentupimento 24h no Bairu',
    vizinhos: ['Manoel Honório', 'Bonfim', 'Progresso', 'Santa Terezinha'],
    referencias: ['Rua Doutor Alberto Vieira Lima', 'Rua Américo Luz', 'Rua Ribeiro de Abreu'],
    imovel: 'Casas e prédios residenciais em ruas inclinadas, logo acima da área comercial do Manoel Honório.',
    problema:
      'A água que escorre pelas ruas inclinadas entra em garagens e quintais abaixo do nível da calçada. Ralos lineares e grelhas de portão, cheios de terra e folhas, não seguram a enxurrada.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'O Bairu sobe o morro a partir do Manoel Honório, por ruas como a Doutor Alberto Vieira Lima, a Américo Luz e a Ribeiro de Abreu. É residencial, com casas e prédios encaixados na encosta. Quando chove forte, a água desce pelas ruas com velocidade e testa cada ralo de garagem.',
    faq: [
      {
        q: 'Minha garagem fica abaixo da rua e enche de água na chuva. Como evitar?',
        a: 'A grelha na entrada da garagem e o tubo que sai dela precisam estar totalmente livres. Fazemos a desobstrução e a lavagem desse trecho, que costuma estar cheio de terra.',
      },
      {
        q: 'De quanto em quanto tempo devo limpar calhas e ralos externos?',
        a: 'O ideal é verificar antes do período de chuvas e depois de cada temporal mais forte. Em rua arborizada, a verificação precisa ser mais frequente.',
      },
      {
        q: 'Vocês atendem o Bairu durante a chuva?',
        a: 'Sim. Atendemos 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Bonfim',
    em: 'no Bonfim',
    regiao: 'Zona Leste',
    h1: 'Desentupidora no Bonfim, em Juiz de Fora',
    vizinhos: ['Bairu', 'Progresso', 'Manoel Honório'],
    referencias: ['Rua Barão do Retiro', 'Rua Odilon Araújo', 'Praça Murilo Abreu'],
    imovel: 'Casas e sobrados de famílias, com cozinha de uso diário e quintal pequeno.',
    problema:
      'Óleo de fritura e restos de comida descem pela pia todos os dias. Em casas com caixa de gordura pequena ou sem limpeza, o ramal entre a cozinha e a caixa fecha aos poucos até a cuba ficar cheia.',
    servico: 'desentupimento-de-pia',
    abertura:
      'O Bonfim é um bairro residencial da Zona Leste, em volta da Praça Murilo Abreu, com ruas como a Barão do Retiro e a Odilon Araújo. As casas são de moradia, com cozinha usada todos os dias, e a pia entupida é, de longe, o motivo mais comum dos chamados.',
    faq: [
      {
        q: 'O que fazer com o óleo de fritura para não entupir a pia?',
        a: 'Espere esfriar, guarde em uma garrafa fechada e leve a um ponto de coleta. Nunca despeje na pia, no ralo ou no vaso.',
      },
      {
        q: 'Produto desentupidor de mercado funciona?',
        a: 'Em entupimento leve de sifão, às vezes. Em ramal fechado por gordura, não alcança o ponto e ainda deixa produto químico parado na cuba, o que exige cuidado de quem for fazer o serviço depois.',
      },
      {
        q: 'Atendem o Bonfim em domingos?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Vitorino Braga',
    em: 'no Vitorino Braga',
    regiao: 'Zona Leste',
    h1: 'Desentupidora 24 horas no Vitorino Braga',
    vizinhos: ['Manoel Honório', 'Linhares', 'Costa Carvalho', 'Centro', 'Grajaú'],
    referencias: ['Rua Vitorino Braga', 'Avenida Garibaldi Campinhos', 'Praça Doutor João Felício'],
    imovel: 'Sobrados antigos, casas geminadas e pequenos comércios, perto do Rio Paraibuna.',
    problema:
      'Casas geminadas antigas costumam ter um ramal de esgoto único correndo sob vários imóveis. Um bloqueio em qualquer ponto faz o esgoto voltar na casa que estiver antes dele.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Vitorino Braga é um bairro antigo da Zona Leste, do outro lado do Paraibuna em relação ao Centro, com a Rua Vitorino Braga e a Avenida Garibaldi Campinhos como vias principais. Sobrados e casas geminadas de muitas décadas dividem ramais de esgoto, e é desse tipo de rede que vêm os chamados.',
    faq: [
      {
        q: 'O esgoto voltou na minha casa, mas na do vizinho está normal. Como pode, se o ramal é o mesmo?',
        a: 'O bloqueio está depois da sua ligação e antes da dele, ou a casa dele fica em nível mais alto. Quem está antes do ponto obstruído recebe o retorno primeiro.',
      },
      {
        q: 'Precisa quebrar o piso para desentupir ramal antigo?',
        a: 'Em geral, não. O acesso é feito por caixas de inspeção, ralos ou pela base do vaso. Só há quebra quando o tubo está rompido, e isso é avisado antes.',
      },
      {
        q: 'Vocês atendem o Vitorino Braga à noite?',
        a: 'Sim. Atendemos 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Linhares',
    em: 'em Linhares',
    regiao: 'Zona Leste',
    h1: 'Desentupimento em Linhares, atendimento 24 horas',
    vizinhos: ['Vitorino Braga', 'Grajaú', 'Bom Jardim'],
    referencias: ['Rua Diva Garcia', 'Rua Boa Esperança', 'Rua Ana Rodrigues Franco'],
    imovel: 'Casas em encosta, muitas construídas em patamares, com escadas e muros de arrimo.',
    problema:
      'Em terreno de morro, a chuva carrega terra do barranco para dentro dos ralos, das canaletas e dos tubos de drenagem. O material assenta, endurece e a água passa a correr por cima, em direção à casa.',
    servico: 'desentupimento-de-rede-pluvial',
    abertura:
      'Linhares fica na Zona Leste e tem a Rua Diva Garcia como principal ligação com o Centro. Boa parte das casas está em encosta, em ruas como a Boa Esperança. No período de chuvas, manter canaletas, ralos e tubos de drenagem livres é uma necessidade, e é esse o serviço que mais fazemos no bairro.',
    faq: [
      {
        q: 'A canaleta do quintal está cheia de barro. Vocês limpam?',
        a: 'Sim. Removemos o material da canaleta e lavamos a tubulação que sai dela, para que a água volte a ter caminho livre.',
      },
      {
        q: 'O dreno do muro de arrimo parou de soltar água. Devo me preocupar?',
        a: 'Dreno obstruído deixa água acumulada atrás do muro. Fazemos a desobstrução dos tubos. Sobre a condição do muro, quem avalia é um engenheiro ou a Defesa Civil.',
      },
      {
        q: 'Atendem Linhares em dias de temporal?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },
  {
    nome: 'Grajaú',
    em: 'no Grajaú',
    regiao: 'Zona Leste',
    h1: 'Desentupidora no Grajaú, a qualquer hora',
    vizinhos: ['Vitorino Braga', 'Linhares', 'Santa Rita', 'Progresso'],
    referencias: ['Rua Nossa Senhora do Líbano', 'Rua Francisco Falci', 'Rua Rosa Sffeir'],
    imovel: 'Casas e sobrados em ladeiras, com tubulação que acompanha o desnível do terreno.',
    problema:
      'Em ladeira, o cano desce com muita inclinação e depois muda para um trecho quase plano perto da rua. Nesse ponto de transição a água perde força, os sólidos ficam e o tubo fecha.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Grajaú é um bairro de morro da Zona Leste, com ruas íngremes como a Nossa Senhora do Líbano, a Francisco Falci e a Rosa Sffeir. A inclinação ajuda o esgoto a descer, mas cria pontos de acúmulo onde o cano muda de direção, e é ali que os entupimentos se repetem.',
    faq: [
      {
        q: 'Casa em ladeira não deveria entupir menos?',
        a: 'Nem sempre. Com inclinação muito forte, a água corre na frente e deixa os sólidos para trás. Eles se juntam no primeiro trecho plano ou na primeira curva.',
      },
      {
        q: 'O entupimento sempre volta no mesmo lugar. Por quê?',
        a: 'Há um defeito fixo naquele ponto: curva fechada, emenda desalinhada ou tubo com barriga. Desobstruímos e informamos o que foi encontrado, para que você decida sobre o reparo.',
      },
      {
        q: 'Vocês sobem ruas íngremes do Grajaú com o equipamento?',
        a: 'Sim. Atendemos todo o bairro, 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Progresso',
    em: 'no Progresso',
    regiao: 'Zona Leste',
    h1: 'Desentupimento no Progresso: chegamos em 20 minutos',
    vizinhos: ['Bonfim', 'Bairu', 'Grajaú', 'Marumbi'],
    referencias: ['Rua Deputado Arlindo Leite', 'Rua Liberalino Gaspar'],
    imovel: 'Casas em lotes estreitos, becos e escadarias, com imóveis de frente e de fundos.',
    problema:
      'Em becos e lotes com várias casas, um ramal estreito recolhe o esgoto de todas elas. O tubo trabalha cheio, e basta um acúmulo de papel para o esgoto subir na casa mais baixa.',
    servico: 'desentupimento-de-esgoto',
    abertura:
      'O Progresso é um bairro residencial da Zona Leste, com ruas como a Deputado Arlindo Leite e a Liberalino Gaspar e muitas casas acessadas por becos e escadas. A rede de esgoto dessas moradias é compartilhada, e o retorno pelo ralo é a emergência típica do bairro.',
    faq: [
      {
        q: 'Minha casa fica em um beco sem acesso para carro. Vocês atendem?',
        a: 'Sim. O equipamento é levado a pé até o imóvel. Informe no chamado que o acesso é por beco ou escada.',
      },
      {
        q: 'O esgoto sobe na minha casa quando o vizinho de cima usa o banheiro. De quem é o entupimento?',
        a: 'Do ramal comum, em um ponto abaixo da sua casa. O serviço é feito nesse trecho e beneficia todos os imóveis ligados a ele.',
      },
      {
        q: 'Atendem o Progresso de madrugada?',
        a: 'Sim. O atendimento é 24 horas, todos os dias.',
      },
    ],
  },
  {
    nome: 'Santa Cândida',
    em: 'em Santa Cândida',
    regiao: 'Zona Leste',
    h1: 'Desentupidora em Santa Cândida 24h',
    vizinhos: ['Linhares', 'Vitorino Braga', 'São Benedito'],
    referencias: ['Rua Pedro Paulo Vieira', 'Rua Ademar Ferreira Leite'],
    imovel: 'Casas de alvenaria em morro, com banheiro de box pequeno e instalações feitas por etapas.',
    problema:
      'Em banheiros pequenos, o ralo do box é a única saída de água do piso. Cabelo, sabonete e areia de obra ou de reforma enchem a caixa sifonada, e o banheiro inteiro alaga durante o banho.',
    servico: 'desentupimento-de-ralo',
    abertura:
      'Santa Cândida fica na Zona Leste, com ruas residenciais como a Pedro Paulo Vieira e a Ademar Ferreira Leite. As casas foram erguidas e ampliadas aos poucos, e os banheiros compactos dependem de um único ralo, que é o ponto que mais dá problema.',
    faq: [
      {
        q: 'Depois da reforma do banheiro o ralo parou de escoar. Tem relação?',
        a: 'Tem. Restos de argamassa, rejunte e areia descem pelo ralo durante a obra e endurecem dentro da caixa e do cano. A remoção é feita com máquina.',
      },
      {
        q: 'Posso tirar a grelha e limpar o ralo eu mesmo?',
        a: 'Pode retirar a grelha e o que estiver ao alcance da mão, com luva. Se a água continuar parada, a obstrução está no ramal e precisa de equipamento.',
      },
      {
        q: 'Atendem Santa Cândida aos sábados e domingos?',
        a: 'Sim. Atendemos 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- ZONA NORDESTE ----------------
  {
    nome: 'Santa Terezinha',
    em: 'em Santa Terezinha',
    regiao: 'Zona Nordeste',
    h1: 'Desentupidora 24 horas em Santa Terezinha',
    vizinhos: ['Manoel Honório', 'Mariano Procópio', 'Bairu', 'Centenário'],
    referencias: ['Avenida Rui Barbosa', 'Rua Santa Terezinha', 'Rua Coronel Almeida Novais'],
    imovel: 'Prédios residenciais de porte médio, casas antigas e comércio de bairro ao longo da avenida.',
    problema:
      'Prédios de três a seis andares, comuns no bairro, têm colunas de esgoto de diâmetro justo. Quando moradores descartam fraldas, absorventes e panos no vaso, o material trava na base da prumada e atinge os apartamentos de baixo.',
    servico: 'desentupimento-de-coluna',
    abertura:
      'Santa Terezinha se organiza ao longo da Avenida Rui Barbosa, com ruas residenciais como a Santa Terezinha e a Coronel Almeida Novais. O bairro tem muitos prédios de porte médio ao lado de casas antigas. Dos condomínios vêm os chamados mais urgentes: coluna entupida com retorno nos primeiros andares.',
    faq: [
      {
        q: 'O vaso do meu apartamento no primeiro andar transborda sem ninguém usar. O que é?',
        a: 'É a coluna do prédio obstruída abaixo do seu andar. A descarga dos vizinhos de cima não passa e sai pelo seu vaso. Avise o síndico e chame a desentupidora com urgência.',
      },
      {
        q: 'Depois de desentupir a coluna, como o condomínio evita que aconteça de novo?',
        a: 'Orientando os moradores sobre o que não pode ir no vaso e programando limpezas preventivas da prumada e das caixas de inspeção.',
      },
      {
        q: 'Vocês atendem condomínios de Santa Terezinha à noite?',
        a: 'Sim. O atendimento é 24 horas, inclusive domingos e feriados.',
      },
    ],
  },
  {
    nome: 'Grama',
    em: 'no Grama',
    regiao: 'Zona Nordeste',
    h1: 'Desentupimento no Grama, Zona Nordeste',
    vizinhos: ['Santa Terezinha', 'Bandeirantes', 'Parque Guarani'],
    referencias: ['Avenida Juiz de Fora', 'Rua Santa Lúcia'],
    imovel: 'Casas em lotes amplos, granjas e loteamentos e condomínios residenciais mais recentes.',
    problema:
      'Loteamentos novos têm redes internas extensas, e durante as obras entra areia, cimento e entulho fino nos tubos. Esse sedimento assenta no fundo e reduz a passagem já nos primeiros anos de uso.',
    servico: 'hidrojateamento',
    abertura:
      'O Grama fica na saída nordeste da cidade e tem a Avenida Juiz de Fora como via principal. Ao lado das casas antigas e granjas, o bairro ganhou loteamentos e condomínios residenciais. Redes compridas e com resíduo de obra são o cenário mais comum dos nossos atendimentos na região.',
    faq: [
      {
        q: 'A casa é nova e já está entupindo. Como isso é possível?',
        a: 'É comum. Restos de obra ficam dentro dos tubos e seguram papel e gordura. A lavagem com hidrojato retira o sedimento e a rede passa a funcionar como deveria.',
      },
      {
        q: 'O hidrojato serve para rede de água de chuva também?',
        a: 'Serve. O mesmo equipamento lava tubos pluviais, canaletas e caixas de areia, removendo terra e folhas acumuladas.',
      },
      {
        q: 'Vocês atendem o Grama mesmo sendo mais afastado do Centro?',
        a: 'Sim. Atendemos o Grama 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
    ],
  },

  // ---------------- ZONA SUDESTE ----------------
  {
    nome: 'Costa Carvalho',
    em: 'no Costa Carvalho',
    regiao: 'Zona Sudeste',
    h1: 'Desentupidora no Costa Carvalho, 24 horas',
    vizinhos: ['Vitorino Braga', 'Poço Rico', 'Centro', 'Vila Ideal'],
    referencias: ['Avenida Sete de Setembro', 'Rua Costa Carvalho'],
    imovel: 'Casas antigas, sobrados e pequenos prédios, com oficinas e comércio na avenida.',
    problema:
      'Instalações antigas têm ramais de pia e de tanque de pequeno diâmetro, embutidos em paredes grossas. Décadas de gordura e sabão deixam a passagem com a largura de um dedo, e qualquer resíduo fecha o cano.',
    servico: 'desentupimento-de-cano',
    abertura:
      'O Costa Carvalho fica na margem do Rio Paraibuna, ao longo da Avenida Sete de Setembro, perto do Centro. É um bairro antigo, de casas e sobrados com encanamento de outra época. O entupimento de cano embutido, que não se resolve pelo sifão, é o que mais atendemos.',
    faq: [
      {
        q: 'O cano entupido passa por dentro da parede. Vai ser preciso quebrar?',
        a: 'Na maior parte dos casos, não. O cabo da máquina entra pelo ponto da pia ou do tanque e percorre o cano embutido até o bloqueio.',
      },
      {
        q: 'Depois de desentupir, o cano antigo volta a entupir logo?',
        a: 'Se a crosta for removida da parede do tubo, e não apenas furada, o resultado dura bem mais. Por isso, em cano antigo, fazemos a limpeza do trecho inteiro.',
      },
      {
        q: 'Atendem o Costa Carvalho em feriados?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
];
