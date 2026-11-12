import type { Area, AreaId, Product } from "./types";
import { hotelEmDia } from "./produtos/hotel-em-dia";
import { helpdiet } from "./produtos/helpdiet";
import { helpcheck } from "./produtos/helpcheck";
import { nutriii } from "./produtos/nutriii";
import { treinaedu } from "./produtos/treinaedu";
import { beautymetrics } from "./produtos/beautymetrics";
import { kanean } from "./produtos/kanean";

export const SITE_URL = "https://helpflux.com.br";

export const areas: Area[] = [
  {
    id: "hospitalidade",
    name: "Hospitalidade e alimentação",
    description:
      "Documentos, auditorias e boas práticas de hotéis, cozinhas e serviços de alimentação.",
  },
  {
    id: "saude",
    name: "Saúde e nutrição",
    description:
      "O consultório do nutricionista clínico, da agenda ao plano alimentar.",
  },
  {
    id: "educacao",
    name: "Educação corporativa",
    description: "Treinamentos obrigatórios, NRs e certificados das equipes.",
  },
  {
    id: "beleza",
    name: "Beleza",
    description: "Custo, preço e lucro dos serviços de salões e clínicas.",
  },
  {
    id: "cidades",
    name: "Cidades",
    description:
      "Problemas urbanos registrados por quem mora e acompanhados por quem resolve.",
  },
];

/** Ordem da vitrine (a mesma das áreas, para a alternância dos cartões seguir a página) */
export const products: Product[] = [
  hotelEmDia,
  helpdiet,
  helpcheck,
  nutriii,
  treinaedu,
  beautymetrics,
  kanean,
];

export function productsByArea(area: AreaId) {
  return products.filter((p) => p.area === area);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function areaOf(product: Product) {
  return areas.find((a) => a.id === product.area)!;
}

export function productPath(product: Product) {
  return `/produtos/${product.slug}/`;
}
