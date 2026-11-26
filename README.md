# Desentupidora SOS

Site estático (Astro) da Desentupidora SOS, publicado na Vercel.
Domínio: definido em **um lugar só**, `site` no `astro.config.mjs`.

## Onde mexer

| O que | Arquivo |
|---|---|
| Domínio | `astro.config.mjs` |
| Telefones das praças | `src/data/pracas.ts` |
| Cidades (e qual praça atende cada uma) | `src/data/cidades.ts` |
| Textos de cada cidade | `src/data/cidades/<cidade>.ts` |
| Blog de cada cidade | `src/content/blog-cidades/<cidade>/` |
| Fotos | `src/assets/fotos/` (ver LEIA-ME.md da pasta) |
| Bairros | `src/data/bairros/<cidade>.ts` |
| Serviços | `src/data/servicos.ts` |
| Mensagens fixas e tag do Google | `src/data/site.ts` |
| Artigos do blog | `src/content/blog/` |
| Logo | `src/assets/logo-sos-branco.png` (cabeçalho) e `src/assets/logo-sos.png` (rodapé) |

## Regras

- Página de praça (cidade, bairro, serviço da cidade) mostra **só** o telefone daquela praça.
- Páginas sem praça mostram o seletor "Escolha sua cidade".
- Só desentupimento. Não citar limpa-fossa, dedetização, encanador nem caça-vazamento.
- Bairro novo = um registro novo no arquivo da cidade, com texto próprio e ruas reais.
- Cidade nova: incluir a linha em `cidades.ts` e criar `src/data/cidades/<cidade>.ts` e `src/data/bairros/<cidade>.ts`. As páginas são geradas sozinhas.

## Comandos

```bash
npm install
npm run dev        # ver o site no computador
npm run build      # gerar o site
npm run conferir   # depois do build: confere telefone por praça, links, canonical, H1 e termos proibidos
node scripts/auditar-dados.mjs   # confere os textos: termos proibidos, 3 perguntas por bairro, frases repetidas
```

`npm run conferir` grava a lista página → número em `conferencia-telefones.txt`.
