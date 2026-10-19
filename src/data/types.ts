import type { StaticImageData } from "next/image";

export type Platform = "web" | "ios" | "android";

export type AreaId = "hospitalidade" | "educacao" | "beleza" | "eventos";

export interface Area {
  id: AreaId;
  name: string;
  description: string;
}

/** Captura de tela publicada pelo próprio produto, sempre com dados fictícios */
export interface Shot {
  src: StaticImageData;
  alt: string;
  /** desktop vai numa moldura de navegador; mobile, numa moldura de celular */
  kind: "desktop" | "mobile";
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
