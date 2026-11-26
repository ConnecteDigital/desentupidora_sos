// Fotos opcionais. Basta colocar o arquivo em src/assets/fotos/ com o nome certo
// (veja src/assets/fotos/LEIA-ME.md). Sem arquivo, o site segue sem a foto.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,webp}', { eager: true });

const porNome = new Map(
  Object.entries(arquivos).map(([caminho, m]) => [caminho.split('/').pop()!.replace(/\.\w+$/, ''), m.default]),
);

export const foto = (nome: string): ImageMetadata | undefined => porNome.get(nome);
