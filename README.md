# Desentupidora SOS

Site estático (Astro) da Desentupidora SOS, publicado na Vercel.
Domínio: definido em **um lugar só**, `site` no `astro.config.mjs`.

## Onde mexer

| O que | Arquivo |
|---|---|
| Domínio | `astro.config.mjs` |
| Telefones das praças | `src/data/pracas.ts` |
| Cidades (e qual praça atende cada uma) | `src/data/cidades.ts` |
| Bairros | `src/data/bairros/<cidade>.ts` |
| Serviços | `src/data/servicos.ts` |
| Mensagens fixas e tag do Google | `src/data/site.ts` |
| Artigos do blog | `src/content/blog/` |
| Logo | `src/assets/logo-sos.png` (enquanto não existir, o nome aparece em texto) |

## Regras

- Página de praça (cidade, bairro, serviço da cidade) mostra **só** o telefone daquela praça.
- Páginas sem praça mostram o seletor "Escolha sua cidade".
- Só desentupimento. Não citar limpa-fossa, dedetização, encanador nem caça-vazamento.
- Bairro novo = um registro novo no arquivo da cidade, com texto próprio e ruas reais.
- Cidade nova: preencher o conteúdo em `cidades.ts`, criar `src/data/bairros/<cidade>.ts`, incluir em `src/data/bairros.ts` e mudar `publicada` para `true`.

## Comandos

```bash
npm install
npm run dev        # ver o site no computador
npm run build      # gerar o site
npm run conferir   # depois do build: confere telefone por praça, links, canonical, H1 e termos proibidos
```

`npm run conferir` grava a lista página → número em `conferencia-telefones.txt`.
