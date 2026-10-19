import type { Product } from "../types";
import logo from "@/assets/produtos/helpdiet/logo.webp";
import temperaturas from "@/assets/produtos/helpdiet/temperaturas.webp";
import celular from "@/assets/produtos/helpdiet/celular.webp";
import relatorio from "@/assets/produtos/helpdiet/relatorio.webp";
import validades from "@/assets/produtos/helpdiet/validades.webp";
import areaGerencial from "@/assets/produtos/helpdiet/area-gerencial.webp";

/*
 * Fontes: helpdiet.com.br (home e llms.txt), planilhas.helpdiet.com.br
 * (política de privacidade e termos) e o repositório planilhasnutri
 * (app/Models/Planilha*.php, integração em app/Services/Integracao).
 * Capturas: assets do helpdiet-site, montadas com dados de demonstração.
 */
export const helpdiet: Product = {
  slug: "helpdiet",
  name: "HelpDiet",
  area: "hospitalidade",
  site: "https://helpdiet.com.br",
  logo,
  logoKind: "icon",
  tagline: "Os controles de segurança dos alimentos da cozinha, sem planilha de papel",
  summary:
    "Planilhas digitais de boas práticas para cozinhas profissionais: temperatura, recebimento, higienização, validades e outros controles, cada um com PDF pronto para a fiscalização.",
  highlights: [
    "26 planilhas de boas práticas prontas, cada uma com PDF dos registros",
    "Temperatura com cor: verde na faixa, amarelo perto do limite e vermelho fora dela",
    "Pendências do dia e controle de produtos a vencer e vencidos",
    "Aviso antes do prazo de serviços como dedetização e limpeza da caixa d'água",
    "Área gerencial com um cartão por unidade e relatórios em PDF e planilha",
  ],
  audience: [
    "Cozinhas profissionais",
    "Cozinhas de hotéis",
    "Nutricionistas",
    "Redes com várias unidades",
  ],
  platforms: ["web"],
  platformNote:
    "Funciona no navegador do computador, do tablet e do celular, sem instalar nada.",
  shot: {
    src: temperaturas,
    alt: "Planilha de temperatura de equipamentos no HelpDiet, com cada leitura destacada em verde, amarelo ou vermelho, com dados de demonstração",
    kind: "desktop",
  },
  mobileShot: {
    src: celular,
    alt: "Página inicial de uma unidade no HelpDiet aberta no celular",
    kind: "mobile",
  },
  page: {
    metaTitle: "HelpDiet: planilhas digitais de segurança dos alimentos | HelpFlux",
    metaDescription:
      "Conheça o HelpDiet, da HelpFlux: 26 planilhas digitais de boas práticas para cozinhas profissionais, com temperatura por cor, validades, relatórios e PDF para a fiscalização.",
    lead: "O HelpDiet troca as planilhas de papel da cozinha por registros digitais, organizados por unidade, prontos para mostrar na fiscalização e fáceis de acompanhar à distância.",
    problemTitle: "Quando o controle da cozinha está no papel",
    problem: [
      "A planilha de papel molha, se perde e fica pela metade. Quando a fiscalização pede os registros, eles estão espalhados, e quem responde por várias cozinhas não consegue ver como cada uma está.",
      "O HelpDiet reúne os controles de boas práticas num sistema só. A equipe registra no dia a dia, o sistema destaca o que saiu da faixa e cada planilha vira um PDF na hora.",
    ],
    features: [
      {
        title: "Temperatura com cor",
        description:
          "Nas leituras das 10h e das 16h, cada temperatura ganha uma cor: verde dentro da faixa, amarelo até 2 °C fora e vermelho além disso. O status do equipamento e a ação corretiva ficam no mesmo registro.",
        shot: {
          src: temperaturas,
          alt: "Lista de temperaturas de geladeiras, freezers e câmaras com marcações coloridas",
          kind: "desktop",
        },
      },
      {
        title: "Validades sob controle",
        description:
          "Lista de produtos a vencer e vencidos, com registro do que foi usado ou descartado, além de listas próprias de produtos notificados ao fornecedor e devolvidos.",
        shot: {
          src: validades,
          alt: "Quadros de produtos a vencer, notificados e devolvidos, com a data de validade de cada um",
          kind: "desktop",
        },
      },
      {
        title: "Relatórios de gestão",
        description:
          "Nove relatórios em PDF e em planilha, além do relatório de descartes, para acompanhar a cozinha ao longo do mês.",
        shot: {
          src: relatorio,
          alt: "Relatório com gráficos de temperatura por equipamento",
          kind: "desktop",
        },
      },
      {
        title: "Visão da rede",
        description:
          "A área gerencial resume os últimos 30 dias e mostra um cartão por unidade, em verde, amarelo ou vermelho, para saber onde olhar primeiro.",
        shot: {
          src: areaGerencial,
          alt: "Área gerencial com o resumo de cada unidade da rede, com dados de demonstração",
          kind: "desktop",
        },
      },
      {
        title: "26 planilhas de boas práticas",
        description:
          "Temperatura de equipamentos, recebimento de matéria-prima, higienização, resfriamento, reaquecimento, óleo de fritura, teor de cloro, controle de pragas, resíduos e outras. Cada uma gera um PDF com os registros.",
      },
      {
        title: "Serviços com prazo",
        description:
          "Dedetização, limpeza da caixa d'água, troca de filtro, caixa de gordura e ar-condicionado avisam antes de vencer.",
      },
      {
        title: "Equipe com papéis",
        description:
          "Administrador, nutricionista, colaborador e auditor, que só consulta. Cada registro guarda quem lançou e quem editou.",
      },
      {
        title: "Indicadores para o Hotel em Dia",
        description:
          "Se a rede também usa o Hotel em Dia, a empresa pode autorizar o envio dos indicadores de segurança dos alimentos para o painel de cada hotel. Só vão números agregados.",
      },
    ],
    audienceDetail: [
      {
        title: "Cozinhas profissionais",
        description:
          "De uma unidade ou de uma rede, como as cozinhas de hotéis.",
      },
      {
        title: "Nutricionistas",
        description:
          "Acompanham os registros e mantêm os controles de boas práticas em dia.",
      },
      {
        title: "Colaboradores",
        description:
          "Fazem os lançamentos do dia a dia pelo celular, pelo tablet ou pelo computador.",
      },
      {
        title: "Gestores e auditores",
        description:
          "O gestor vê todas as unidades num painel; o auditor consulta os registros sem alterar nada.",
      },
    ],
    faq: [
      {
        q: "Preciso instalar algum programa?",
        a: "Não. O HelpDiet funciona no navegador do computador, do tablet ou do celular.",
      },
      {
        q: "Serve para uma cozinha só?",
        a: "Sim. Atende uma unidade ou uma rede inteira: cada unidade tem a sua equipe e o administrador acompanha todas.",
      },
      {
        q: "Como apresento os registros na fiscalização?",
        a: "Cada planilha gera um PDF com os registros, com o logo da rede.",
      },
      {
        q: "O HelpDiet substitui a nutricionista?",
        a: "Não. Ele ajuda a manter os registros de boas práticas em dia. O Manual de Boas Práticas e a responsabilidade técnica continuam com a nutricionista.",
      },
      {
        q: "O que é compartilhado com o Hotel em Dia?",
        a: "Só números agregados, e apenas quando a empresa autoriza. Nomes de pessoas e registros individuais não saem do HelpDiet.",
      },
      {
        q: "Como é a cobrança?",
        a: "Mensal, por boleto com Pix, e cada pagamento tem nota fiscal.",
      },
    ],
  },
};
