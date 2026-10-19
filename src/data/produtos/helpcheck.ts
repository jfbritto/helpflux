import type { Product } from "../types";
import logo from "@/assets/produtos/helpcheck/logo.svg";
import painel from "@/assets/produtos/helpcheck/painel-inicio.webp";
import checklist from "@/assets/produtos/helpcheck/app-checklist.webp";
import relatorio from "@/assets/produtos/helpcheck/relatorio-pdf.webp";
import planos from "@/assets/produtos/helpcheck/painel-planos.webp";

/*
 * Fontes: helpcheck.com.br (home, FAQ, /recursos/treinamentos-e-certificados,
 * /privacidade) e o repositório helpcheck, branch mvp (app em mobile/,
 * modelo RDC 216 em database/seeders). Capturas do próprio site, com a
 * consultoria fictícia "Ribeiro Consultoria em Alimentos".
 */
export const helpcheck: Product = {
  slug: "helpcheck",
  name: "HelpCheck",
  area: "hospitalidade",
  site: "https://helpcheck.com.br",
  logo,
  logoKind: "tile",
  tagline: "A visita técnica do consultor de alimentos, do checklist ao relatório, sem papel",
  summary:
    "Checklist de boas práticas para consultores de segurança de alimentos, com nota ao vivo, foto em cada item, plano de ação e relatório em PDF com a marca da consultoria.",
  highlights: [
    "Checklist com respostas conforme, parcial, não conforme e não se aplica, e nota calculada na hora",
    "Modelo da RDC 216/2004 em toda conta nova, além de modelos próprios",
    "Foto presa ao item e plano de ação com responsável, prazo e prioridade",
    "Relatório em PDF com a marca da consultoria, enviado ao cliente por e-mail ou link",
    "Portal para o cliente acompanhar visitas e relatórios",
  ],
  audience: [
    "Nutricionistas consultoras",
    "Consultorias de segurança de alimentos",
    "Serviços de alimentação com responsável técnica",
  ],
  platforms: ["web", "ios", "android"],
  platformNote:
    "O painel funciona no navegador. O app para iOS e Android ainda não está nas lojas.",
  shot: {
    src: painel,
    alt: "Painel da consultoria no HelpCheck com visitas no mês, média de pontuação, planos de ação e agenda, com dados fictícios",
    kind: "desktop",
  },
  mobileShot: {
    src: checklist,
    alt: "Checklist da RDC 216/2004 no celular, com nota parcial e as opções C, PC, NC e NA",
    kind: "mobile",
    comBarraDeStatus: true,
  },
  page: {
    metaTitle:
      "HelpCheck: checklist de boas práticas para consultores de alimentos | HelpFlux",
    metaDescription:
      "Conheça o HelpCheck, da HelpFlux: checklist com nota ao vivo, foto por item, plano de ação e relatório em PDF com a marca da consultoria de segurança de alimentos.",
    lead: "O HelpCheck foi feito para quem visita cozinhas e serviços de alimentação: o checklist é preenchido durante a visita e vira um relatório em PDF, sem retrabalho à noite.",
    problemTitle: "Quando a visita termina e o trabalho continua",
    problem: [
      "Papel e prancheta na visita, fotos perdidas no WhatsApp, relatório montado à noite no editor de texto e plano de ação que ninguém cobra. Além disso, o documento do cliente vence sem aviso.",
      "No HelpCheck, as respostas, as fotos e as não conformidades ficam presas ao item do checklist. A nota é calculada na hora, cada ação ganha responsável e prazo, e o relatório sai com a marca da consultoria.",
    ],
    features: [
      {
        title: "Checklist com nota ao vivo",
        description:
          "Respostas conforme, parcial, não conforme e não se aplica, com pesos e nota por seção e no total. Toda conta nova recebe o modelo da RDC 216/2004, e a consultoria pode criar modelos próprios, com versões.",
        shot: {
          src: checklist,
          alt: "Itens do checklist com as respostas C, PC, NC e NA e botões de observação e foto",
          kind: "mobile",
          comBarraDeStatus: true,
        },
      },
      {
        title: "Relatório em PDF com a sua marca",
        description:
          "Leva fotos, nota por seção, planos de ação e assinaturas feitas com o dedo na tela. O cliente recebe por e-mail ou por link, sem precisar criar conta.",
        shot: {
          src: relatorio,
          alt: "Duas páginas de um relatório de visita técnica com pontuação, itens avaliados e foto de uma não conformidade",
          kind: "desktop",
        },
      },
      {
        title: "Plano de ação 5W2H",
        description:
          "Cada não conformidade pode virar uma ação com responsável, prazo e prioridade, com aviso diário do que venceu.",
        shot: {
          src: planos,
          alt: "Lista de planos de ação com situação, prazo e cliente, com dados fictícios",
          kind: "desktop",
        },
      },
      {
        title: "Visita sem internet",
        description:
          "O app foi feito para funcionar sem sinal: a visita continua e tudo sincroniza sozinho quando a conexão volta. A localização é removida das fotos no envio.",
      },
      {
        title: "Portal do cliente",
        description:
          "O cliente acompanha visitas e relatórios num portal, sem custo extra por acesso.",
      },
      {
        title: "Treinamentos e certificados",
        description:
          "Lista de presença assinada e certificado com QR Code que qualquer pessoa confere sem login.",
      },
      {
        title: "Planilhas e documentos",
        description:
          "Planilhas de controle, como temperatura, cloro e óleo de fritura, com alerta de não conformidade, e documentos e POPs com aviso de validade.",
      },
    ],
    audienceDetail: [
      {
        title: "Nutricionistas consultoras",
        description: "Profissionais autônomas que atendem vários clientes.",
      },
      {
        title: "Consultorias com equipe",
        description:
          "Vários consultores, clientes e unidades acompanhados num painel só.",
      },
      {
        title: "Serviços de alimentação",
        description:
          "Cozinhas com responsável técnica própria que fazem as inspeções internas.",
      },
    ],
    faq: [
      {
        q: "Tem aplicativo?",
        a: "Sim, para Android e iPhone, mas ele ainda não está nas lojas. A conta, os clientes e os modelos já funcionam pelo painel web.",
      },
      {
        q: "O modelo da RDC 216 vem pronto?",
        a: "Sim. Toda conta nova recebe o modelo, que pode ser ajustado.",
      },
      {
        q: "Como o cliente recebe o relatório?",
        a: "Por e-mail, com link para o PDF, sem precisar criar conta.",
      },
      {
        q: "A IA grava alguma coisa sozinha?",
        a: "Não. A IA do HelpCheck só sugere; o consultor revisa e salva.",
      },
      {
        q: "Meu cliente consegue acompanhar?",
        a: "Sim, pelo portal do cliente, que não cobra extra por acesso.",
      },
    ],
  },
};
