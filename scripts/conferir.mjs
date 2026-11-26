// Conferência do site gerado (rode depois de `npm run build`): node scripts/conferir.mjs
// Verifica telefone por praça, links tel:/wa.me, canonical, H1, títulos repetidos e termos proibidos.
import { readFileSync, readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const DOMINIO = 'https://www.desentupidorasos24hr.com.br';
// praça -> dígitos; cidade (slug da URL) -> praça
const PRACAS = {
  'rio-de-janeiro': '5521971711247',
  'espirito-santo': '5527997149978',
  petropolis: '5524999190828',
  cuiaba: '5565999197435',
  'juiz-de-fora': '5532998134217',
  'joao-pessoa': '5583991358502',
};
const CIDADE_PRACA = {
  'rio-de-janeiro': 'rio-de-janeiro', 'vila-velha': 'espirito-santo', vitoria: 'espirito-santo', serra: 'espirito-santo',
  cariacica: 'espirito-santo', petropolis: 'petropolis', cuiaba: 'cuiaba', 'juiz-de-fora': 'juiz-de-fora', 'joao-pessoa': 'joao-pessoa',
};
const NOMES = {
  'rio-de-janeiro': 'Rio de Janeiro', 'vila-velha': 'Vila Velha', vitoria: 'Vitória', serra: 'Serra', cariacica: 'Cariacica',
  petropolis: 'Petrópolis', cuiaba: 'Cuiabá', 'juiz-de-fora': 'Juiz de Fora', 'joao-pessoa': 'João Pessoa',
};
const PROIBIDOS = [/limpa[- ]fossa/i, /fossa/i, /dedetiza/i, /encanador/i, /ca[çc]a[- ]vazamento/i, /cnpj/i, /vercel\.app/i, /api\.whatsapp/i];
// Só as páginas com cards de todas as praças podem ter mais de um telefone
const MULTI = new Set(['/', '/contato/']);

const arquivos = [];
(function andar(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) andar(p);
    else if (f.endsWith('.html')) arquivos.push(p);
  }
})(DIST);

const display = (d) => `(${d.slice(2, 4)}) ${d.slice(4, 9)}-${d.slice(9)}`;
const erros = [];
const linhas = [];
const titulos = new Map();
let nPraca = 0;

for (const arq of arquivos.sort()) {
  const html = readFileSync(arq, 'utf8');
  const url = '/' + relative(DIST, arq).replace(/index\.html$/, '').replace(/\\/g, '/');
  const erro = (m) => erros.push(`${url}: ${m}`);
  const texto = html.replace(/<script[\s\S]*?<\/script>/g, (s) => (s.includes('ld+json') ? s : '')).replace(/<style[\s\S]*?<\/style>/g, '');

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) erro(`${h1} H1`);
  const canon = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if (canon !== DOMINIO + url && !url.startsWith('/404')) erro(`canonical errado: ${canon}`);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  if (titulos.has(title)) erro(`título repetido com ${titulos.get(title)}`);
  titulos.set(title, url);
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) erro('sem meta description');
  for (const re of PROIBIDOS) if (re.test(texto)) erro(`termo proibido: ${re}`);
  if (!html.includes('"@type":"BreadcrumbList"') && url !== '/404.html') erro('sem BreadcrumbList');
  if (!html.includes('"@type":"Plumber"')) erro('sem LocalBusiness');

  const tels = [...html.matchAll(/href="tel:([^"]+)"/g)].map((m) => m[1]);
  const was = [...html.matchAll(/href="https:\/\/wa\.me\/(\d+)\?text=([^"]+)"/g)].map((m) => ({ n: m[1], t: decodeURIComponent(m[2]) }));
  // qualquer número de praça que apareça na página, em qualquer formato
  const presentes = Object.entries(PRACAS).filter(([, d]) => html.includes(d) || html.includes(display(d))).map(([p]) => p);

  const cidade = url.match(/^\/desentupidora-em-([^/]+)\//)?.[1];
  if (cidade) {
    nPraca++;
    const praca = CIDADE_PRACA[cidade];
    const d = PRACAS[praca];
    if (!praca) erro('cidade desconhecida');
    if (presentes.length !== 1 || presentes[0] !== praca) erro(`telefones de outras praças na página: ${presentes.join(', ')}`);
    if (!tels.length) erro('sem link tel:');
    if (!was.length) erro('sem link de WhatsApp');
    for (const t of tels) if (t !== `+${d}`) erro(`tel errado: ${t}`);
    for (const w of was) {
      if (w.n !== d) erro(`wa.me errado: ${w.n}`);
      if (!w.t.includes(NOMES[cidade])) erro(`mensagem do WhatsApp sem a cidade: ${w.t}`);
    }
    if (!html.includes(`"telephone":"+${d}"`)) erro('JSON-LD sem o telefone da praça');
    linhas.push(`${url} → ${display(d)} (${tels.length} tel, ${was.length} WhatsApp)`);
  } else {
    if (!MULTI.has(url) && (tels.length || was.length || presentes.length)) erro(`página sem praça com telefone: ${presentes.join(', ')}`);
    for (const t of tels) if (!Object.values(PRACAS).includes(t.replace('+', ''))) erro(`tel desconhecido: ${t}`);
    for (const w of was) if (!Object.values(PRACAS).includes(w.n)) erro(`wa.me desconhecido: ${w.n}`);
    if (!html.includes('Escolha sua cidade')) erro('sem seletor "Escolha sua cidade"');
    linhas.push(`${url} → ${MULTI.has(url) ? 'cards das 6 praças' : 'sem telefone (seletor de cidade)'}`);
  }
}

// links internos quebrados
const existentes = new Set(arquivos.map((a) => '/' + relative(DIST, a).replace(/index\.html$/, '')));
for (const arq of arquivos) {
  const html = readFileSync(arq, 'utf8');
  for (const m of html.matchAll(/href="(\/[^"#?]*)(#[^"]*)?"/g)) {
    const alvo = m[1];
    if (/\.(svg|png|jpg|xml|css|js|webp|woff2?)$/.test(alvo) || alvo.startsWith('/_astro/')) continue;
    if (!existentes.has(alvo)) erros.push(`${relative(DIST, arq)}: link quebrado ${alvo}`);
  }
}

writeFileSync('conferencia-telefones.txt', linhas.join('\n') + '\n');
console.log(`Páginas HTML: ${arquivos.length} (de praça: ${nPraca})`);
console.log(`Lista página → número salva em conferencia-telefones.txt`);
if (erros.length) {
  console.log(`\n${erros.length} PROBLEMA(S):`);
  for (const e of erros.slice(0, 60)) console.log(' - ' + e);
  process.exit(1);
}
console.log('Tudo certo: telefone, links, canonical, H1 e títulos conferidos.');
