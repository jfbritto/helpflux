import type { Product } from "../types";
import logo from "@/assets/produtos/beautymetrics/logo.svg";
import home from "@/assets/produtos/beautymetrics/home.webp";
import calculadora from "@/assets/produtos/beautymetrics/calculadora.webp";
import modulos from "@/assets/produtos/beautymetrics/modulos.webp";

/*
 * Fonte: só o site beautymetrics.com.br (home, /funcionalidades, /sobre,
 * /perguntas-frequentes, /comparativos/sistemas-de-agenda). O site não
 * publica capturas do sistema; as imagens são capturas das páginas
 * públicas, com os números de exemplo do próprio site.
 */
export const beautymetrics: Product = {
  slug: "beautymetrics",
  name: "BeautyMetrics",
  area: "beleza",
  site: "https://beautymetrics.com.br",
  logo,
  logoKind: "tile",
  tagline: "Quanto sobra, de verdade, de cada serviço do salão",
  summary:
    "Calcula o custo real, o preço ideal e o lucro de cada serviço, já descontando comissão, taxa do cartão, imposto e custo operacional.",
  highlights: [
    "Custo de cada produto por ml, grama ou unidade e ficha técnica de insumos por serviço",
    "Lucro real de cada serviço depois de comissão, cartão, imposto e custo operacional",
    "Preço ideal para a margem que você escolher",
    "Despesas, capacidade das cadeiras e faturamento projetado",
    "Raio-X com DRE simplificado e ponto de equilíbrio",
  ],
  audience: [
    "Salões de beleza",
    "Barbearias",
    "Clínicas de estética",
    "Nail designers",
  ],
  platforms: ["web"],
  platformNote:
    "Funciona no navegador do celular, do tablet e do computador, sem instalar nada.",
  shot: {
    src: home,
    alt: "Página do BeautyMetrics com a calculadora de lucro real de um serviço preenchida com valores de exemplo",
    kind: "desktop",
  },
  page: {
    metaTitle: "BeautyMetrics: lucro real de cada serviço do salão | HelpFlux",
    metaDescription:
      "Conheça o BeautyMetrics, da HelpFlux: custo real, preço ideal e lucro de cada serviço para salões, barbearias, clínicas de estética e nail designers.",
    lead: "O BeautyMetrics mostra quanto cada serviço deixa no caixa depois de pagar insumos, comissão, cartão e imposto, e indica o preço que garante a margem que você quer.",
    problemTitle: "Quando o preço do serviço é definido no chute",
    problem: [
      "Muitos donos de salão cobram pelo serviço sem saber quanto sobra no fim. A comissão, a taxa da maquininha e o imposto ficam fora da conta, e um serviço que parece rentável pode dar prejuízo.",
      "O BeautyMetrics faz essa conta com os números do próprio negócio: o custo de cada produto usado, as despesas do mês e a capacidade das cadeiras. O resultado é o lucro real de cada serviço e um preço sugerido para cada margem.",
    ],
    features: [
      {
        title: "Lucro real e preço ideal",
        description:
          "Com o preço e o custo dos insumos, o sistema desconta comissão, cartão, imposto e custo operacional, mostra quanto sobra e indica o preço ideal para a margem desejada.",
        shot: {
          src: calculadora,
          alt: "Cálculo de exemplo com preço de 150 reais, custo de insumos de 45 reais e lucro real de 16,50 reais",
          kind: "desktop",
        },
      },
      {
        title: "Oito módulos numa conta só",
        description:
          "Painel, produtos, serviços, cadeiras, despesas, precificação, produção e Raio-X, com usuários ilimitados e permissão por módulo.",
        shot: {
          src: modulos,
          alt: "Os oito módulos do BeautyMetrics: painel, produtos, serviços, cadeiras, despesas, precificação, produção e Raio-X",
          kind: "desktop",
        },
      },
      {
        title: "Produtos e fichas técnicas",
        description:
          "Cada produto tem custo por ml, grama ou unidade. A ficha técnica do serviço soma o que é usado e chega ao custo dos insumos.",
      },
      {
        title: "Despesas e capacidade",
        description:
          "Despesas fixas e variáveis entram na conta, com as anuais divididas por 12. As horas úteis e os atendimentos por cadeira mostram a capacidade e o faturamento projetado.",
      },
      {
        title: "Painel e Raio-X",
        description:
          "O painel resume o mês em quatro números e ordena os serviços pela margem. O Raio-X traz um DRE simplificado e o ponto de equilíbrio do negócio.",
      },
      {
        title: "Começo rápido",
        description:
          "Dados de exemplo do segmento para começar e, no site, uma calculadora de preço de serviço que funciona sem cadastro.",
      },
    ],
    audienceDetail: [
      {
        title: "Salões de beleza",
        description: "Serviços com comissão e muitos insumos para colocar na conta.",
      },
      {
        title: "Barbearias",
        description: "Preço de cada corte e de cada barba revisado a partir do custo real.",
      },
      {
        title: "Clínicas de estética",
        description: "Procedimentos em que o custo dos produtos pesa no preço.",
      },
      {
        title: "Nail designers",
        description: "Profissionais que querem saber o lucro de cada atendimento.",
      },
    ],
    faq: [
      {
        q: "Precisa instalar alguma coisa?",
        a: "Não. Funciona no navegador do celular, do tablet ou do computador.",
      },
      {
        q: "Substitui o sistema de agenda?",
        a: "Não. O BeautyMetrics não tem agenda, comanda nem caixa. Ele convive com o sistema que o salão já usa.",
      },
      {
        q: "Como o custo de um serviço é calculado?",
        a: "Pela ficha técnica: o preço de cada produto dividido pela quantidade da embalagem, vezes o quanto o serviço usa.",
      },
      {
        q: "Outras empresas veem meus dados?",
        a: "Não. Os dados ficam separados por empresa.",
      },
      {
        q: "Dá para testar?",
        a: "Sim. O site oferece 14 dias de teste com tudo liberado, sem cartão.",
      },
    ],
  },
};
