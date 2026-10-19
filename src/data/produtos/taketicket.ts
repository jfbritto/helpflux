import type { Product } from "../types";
import logo from "@/assets/produtos/taketicket/logo.svg";
import home from "@/assets/produtos/taketicket/home.webp";
import organizadores from "@/assets/produtos/taketicket/organizadores.webp";

/*
 * Fonte: só o site taketicket.com.br (home, /termos-de-uso,
 * /politica-de-privacidade, /register). O site não publica capturas do
 * sistema; as imagens são capturas das páginas públicas, sem os números
 * de eventos e pedidos que aparecem no topo da home.
 * Logo: o mesmo desenho do cabeçalho do site, que é SVG embutido.
 */
export const taketicket: Product = {
  slug: "taketicket",
  name: "TakeTicket",
  area: "eventos",
  site: "https://taketicket.com.br",
  logo,
  logoKind: "tile",
  tagline: "Venda de ingressos e entrada com QR Code, do anúncio ao check-in",
  summary:
    "Plataforma online para criar eventos, vender ingressos e controlar a entrada, com painel de vendas e participantes em tempo real para quem organiza.",
  highlights: [
    "Vários tipos de ingresso, cada um com preço e período de venda",
    "Pagamento online, com o ingresso enviado por e-mail ao comprador",
    "Check-in por QR Code, com acesso da equipe por permissão",
    "Painel de vendas, participantes e financeiro em tempo real, com exportação",
  ],
  audience: ["Organizadores de eventos", "Equipes de entrada", "Público comprador"],
  platforms: ["web"],
  platformNote: "Plataforma online, acessada pelo navegador.",
  shot: {
    src: home,
    alt: "Página inicial do TakeTicket com a busca de eventos por nome e cidade",
    kind: "desktop",
  },
  page: {
    metaTitle: "TakeTicket: venda de ingressos e check-in por QR Code | HelpFlux",
    metaDescription:
      "Conheça o TakeTicket, da HelpFlux: crie eventos, venda ingressos online, faça o check-in por QR Code e acompanhe vendas e participantes em tempo real.",
    lead: "O TakeTicket junta num lugar só o que o organizador precisa para vender ingressos e receber o público: tipos de ingresso, pagamento online, entrada por QR Code e um painel com as vendas.",
    problemTitle: "Vender e controlar a entrada sem improviso",
    problem: [
      "Organizar um evento envolve vender, receber, conferir quem entra e saber quanto já foi vendido. Quando cada etapa fica num lugar diferente, fica difícil fechar a conta e saber quem já entrou.",
      "No TakeTicket, o organizador cria o evento, define os ingressos e acompanha tudo num painel. O comprador recebe o ingresso por e-mail e a equipe valida a entrada pelo QR Code.",
    ],
    features: [
      {
        title: "Venda online",
        description:
          "Vários tipos de ingresso, com preços e períodos de venda diferentes. O pagamento é feito online, por parceiros de pagamento certificados.",
        shot: {
          src: organizadores,
          alt: "Seção para organizadores com os blocos venda online, check-in digital e dashboard completo",
          kind: "desktop",
        },
      },
      {
        title: "Check-in por QR Code",
        description:
          "A entrada é validada pelo QR Code do ingresso, e a equipe recebe acesso com as permissões que o organizador definir.",
      },
      {
        title: "Painel em tempo real",
        description:
          "Vendas, participantes e financeiro acompanhados enquanto acontecem, com exportação dos dados.",
      },
      {
        title: "Ingresso digital",
        description:
          "O comprador recebe o ingresso e a confirmação da compra por e-mail.",
      },
      {
        title: "Busca de eventos",
        description:
          "O público encontra eventos pelo nome e pela cidade, direto na página inicial.",
      },
    ],
    audienceDetail: [
      {
        title: "Organizadores de eventos",
        description: "Criam o evento, definem os ingressos e acompanham as vendas.",
      },
      {
        title: "Equipe da entrada",
        description:
          "Valida os ingressos por QR Code, com o acesso que o organizador liberar.",
      },
      {
        title: "Público",
        description: "Encontra o evento, compra e recebe o ingresso digital por e-mail.",
      },
    ],
    faq: [
      {
        q: "Quanto custa criar uma conta?",
        a: "O cadastro do organizador é gratuito. A plataforma pode cobrar taxa de serviço sobre as vendas, como explicam os termos de uso.",
      },
      {
        q: "Como funciona a entrada no evento?",
        a: "Pelo QR Code do ingresso, validado pela equipe do organizador.",
      },
      {
        q: "Como o comprador recebe o ingresso?",
        a: "Por e-mail, em formato digital.",
      },
      {
        q: "Dá para acompanhar as vendas?",
        a: "Sim. O painel mostra vendas, participantes e financeiro em tempo real, e os dados podem ser exportados.",
      },
    ],
  },
};
