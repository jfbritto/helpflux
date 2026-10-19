import type { Area, AreaId, Product } from "./types";
import { hotelEmDia } from "./produtos/hotel-em-dia";
import { helpdiet } from "./produtos/helpdiet";
import { helpcheck } from "./produtos/helpcheck";
import { treinaedu } from "./produtos/treinaedu";
import { beautymetrics } from "./produtos/beautymetrics";
import { taketicket } from "./produtos/taketicket";

export const SITE_URL = "https://helpflux.com.br";

export const areas: Area[] = [
  {
    id: "hospitalidade",
    name: "Hospitalidade e alimentação",
    description:
      "Documentos, auditorias e boas práticas de hotéis, cozinhas e serviços de alimentação.",
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
    id: "eventos",
    name: "Eventos",
    description: "Venda de ingressos e controle de entrada.",
  },
];

/** Ordem da vitrine */
export const products: Product[] = [
  hotelEmDia,
  helpdiet,
  helpcheck,
  treinaedu,
  beautymetrics,
  taketicket,
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

/*
 * Em desenvolvimento: aparece sem link, sem data e sem promessa.
 * Fonte: repositório nutriii (README.md, CLAUDE.md e a spec da plataforma).
 */
export const emDesenvolvimento = {
  name: "Nutriii",
  area: "Saúde",
  description:
    "Sistema para o consultório do nutricionista clínico, com pacientes, agenda, prontuário, avaliação, plano alimentar, prescrições e financeiro num lugar só, e um app para o paciente acompanhar o plano e registrar o dia a dia.",
};
