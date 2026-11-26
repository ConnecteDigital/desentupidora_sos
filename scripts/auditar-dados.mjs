// Auditoria do conteúdo: node scripts/auditar-dados.mjs  (lê os arquivos de dados como texto)
import { readFileSync, readdirSync } from 'node:fs';
const SERVICOS = ['desentupimento-de-pia','desentupimento-de-ralo','desentupimento-de-vaso-sanitario','desentupimento-de-cano','desentupimento-de-esgoto','desentupimento-de-coluna','desentupimento-de-rede-pluvial','limpeza-de-caixa-de-gordura','hidrojateamento'];
const RUINS = [/—/, /\bat[eé] 20/i, /garantia/i, /or[çc]amento gr[aá]tis/i, /\(\d{2}\)\s?9?\d{4}/, /0800/, /limpa[- ]fossa/i, /fossa/i, /dedetiz/i, /encanador/i, /ca[çc]a[- ]vazamento/i, /cnpj/i, /\b\d+ minutos/i, /anos de (mercado|experi)/i, /nossa (sede|base)/i];
const problemas = []; const frases = new Map(); const h1s = new Map(); let total = 0;
const arquivos = [...readdirSync('src/data/bairros').map(f=>'src/data/bairros/'+f), ...readdirSync('src/data/cidades').map(f=>'src/data/cidades/'+f)];
const md = readdirSync('src/content/blog-cidades').flatMap(c=>readdirSync('src/content/blog-cidades/'+c).map(f=>`src/content/blog-cidades/${c}/${f}`)).concat(readdirSync('src/content/blog').map(f=>'src/content/blog/'+f));
for (const f of [...arquivos, ...md]) {
  const t = readFileSync(f,'utf8');
  t.split('\n').forEach((l,i)=>{ for (const re of RUINS) { if (re.test(l) && !(re.source.includes('minutos') && /\b20 minutos/.test(l) && !/\b(?!20)\d+ minutos/.test(l))) problemas.push(`${f}:${i+1} ${re} → ${l.trim().slice(0,110)}`); } });
  if (f.endsWith('.md')) { const n=t.split(/\s+/).length; if (n<300) problemas.push(`${f}: artigo curto (${n} palavras)`); const s=t.match(/^servico: (.+)$/m)?.[1]; if (s && !SERVICOS.includes(s.trim())) problemas.push(`${f}: serviço inválido ${s}`); }
  if (f.includes('/cidades/')) for (const s of SERVICOS) if (!t.includes(`'${s}'`) && !t.includes(`${s}:`)) problemas.push(`${f}: falta nota do serviço ${s}`);
  if (!f.includes('/bairros/')) continue;
  const blocos = t.split(/\n  \{\n/).slice(1);
  for (const b of blocos) {
    total++;
    const nome = b.match(/nome: '([^']+)'/)?.[1]; const id = `${f.split('/').pop()} › ${nome}`;
    const h1 = b.match(/h1: (['"])(.+?)\1,\n/)?.[2]; if (h1s.has(h1)) problemas.push(`${id}: h1 repetido`); h1s.set(h1,id);
    const serv = b.match(/servico: '([^']+)'/)?.[1]; if (!SERVICOS.includes(serv)) problemas.push(`${id}: serviço inválido ${serv}`);
    const nq = (b.match(/\bq: /g)||[]).length; if (nq!==3) problemas.push(`${id}: ${nq} perguntas`);
    const viz = b.match(/vizinhos: \[([^\]]*)\]/)?.[1].split(',').filter(x=>x.trim()).length; if (viz<3||viz>5) problemas.push(`${id}: ${viz} vizinhos`);
    const ref = b.match(/referencias: \[([\s\S]*?)\]/)?.[1].split(/',\s*/).filter(x=>x.trim()).length; if (ref<2||ref>4) problemas.push(`${id}: ${ref} referências`);
    for (const campo of ['em','regiao','imovel','problema','abertura']) if (!new RegExp(`\\b${campo}:`).test(b)) problemas.push(`${id}: sem ${campo}`);
    // frases repetidas entre bairros (texto idêntico com 60+ caracteres)
    for (const m of b.matchAll(/'((?:[^'\\]|\\.){60,})'/g)) for (const fr of m[1].split(/(?<=[.?!])\s+/)) { if (fr.length<60) continue; const k=fr.replace(/\s+/g,' '); if (frases.has(k) && frases.get(k)!==id) problemas.push(`frase repetida: "${k.slice(0,80)}…" em ${frases.get(k)} e ${id}`); else frases.set(k,id); }
  }
}
console.log(`Bairros auditados: ${total}. Problemas: ${problemas.length}`); for (const p of problemas.slice(0,80)) console.log(' - '+p);
