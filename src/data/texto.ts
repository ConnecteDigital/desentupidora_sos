// Destaca "24 horas" / "24h" em laranja nos títulos (devolve HTML seguro).
const escapar = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const destaque = (titulo: string) => escapar(titulo).replace(/24 horas|24h/gi, (m) => `<em>${m}</em>`);
