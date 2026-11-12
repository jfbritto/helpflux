import type { StaticImageData } from "next/image";

export type Platform = "web" | "ios" | "android";

export type AreaId = "hospitalidade" | "saude" | "educacao" | "beleza" | "cidades";

export interface Area {
  id: AreaId;
  name: string;
  description: string;
}

/** Captura de tela publicada pelo próprio produto, sempre com dados fictícios */
export interface Shot {
  src: StaticImageData;
  alt: string;
  /** desktop vai numa moldura de navegador; mobile, numa moldura de iPhone */
  kind: "desktop" | "mobile";
  /** A captura de celular já traz a barra de status do aparelho (print do app): a moldura não desenha outra */
  comBarraDeStatus?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  shot?: Shot;
}

export interface Faq {
  q: string;
  a: string;
}

/** Sistema feito sob medida para um cliente: aparece na seção "Sob medida", sem página própria */
export interface CustomProject {
  slug: string;
  name: string;
  /** Segmento do cliente, numa palavra ou duas */
  segment: string;
  site: string;
  /** O que o sistema faz, em uma ou duas frases */
  summary: string;
  /** O que foi entregue, de 3 a 5 itens */
  delivered: string[];
  platforms: Platform[];
  platformNote?: string;
  /** Captura de uma página pública do cliente */
  shot: Shot;
}

export interface Product {
  slug: string;
  name: string;
  area: AreaId;
  /** Site oficial do produto */
  site: string;
  logo: StaticImageData;
  /** "tile": a logo já é um quadrado colorido; "icon": desenho solto, vai num quadro branco */
  logoKind: "icon" | "tile";
  /** Frase de valor */
  tagline: string;
  /** Resumo de uma ou duas frases para a vitrine */
  summary: string;
  /** 3 a 5 recursos para a vitrine */
  highlights: string[];
  audience: string[];
  platforms: Platform[];
  /** Observação curta sobre onde roda, quando precisar */
  platformNote?: string;
  shot: Shot;
  /** Captura extra de celular, exibida sobre a principal */
  mobileShot?: Shot;
  page: {
    metaTitle: string;
    metaDescription: string;
    lead: string;
    problemTitle: string;
    problem: string[];
    features: Feature[];
    audienceDetail: { title: string; description: string }[];
    faq: Faq[];
  };
}
