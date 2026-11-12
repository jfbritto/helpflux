import type { Product } from "../types";
import logo from "@/assets/produtos/nutriii/logo.svg";
import home from "@/assets/produtos/nutriii/home.webp";
import recursos from "@/assets/produtos/nutriii/recursos.webp";
import modulos from "@/assets/produtos/nutriii/modulos.webp";
import dadosDeSaude from "@/assets/produtos/nutriii/dados-de-saude.webp";

/*
 * Fontes: o site nutriii.com.br (home, módulos, dados de saúde e perguntas
 * frequentes, conferidos em 12/11/2026) e o repositório nutriii (CLAUDE.md e
 * app/Support/SiteFaq.php).
 * Estágio: beta fechado, por convite, só na web. O app do paciente, o
 * financeiro e a IA vêm depois do beta: nada aqui diz que já funcionam.
 * Capturas: a primeira dobra da home e as seções "Por que o Nutriii" (sem o
 * cartão da IA), "Módulos" e "Dados de saúde" do site público.
 * Logo: resources/brand/symbol.svg do repositório.
 */
export const nutriii: Product = {
  slug: "nutriii",
  name: "Nutriii",
  area: "saude",
  site: "https://nutriii.com.br",
  logo,
  logoKind: "tile",
  tagline: "O consultório de nutrição inteiro num lugar só",
  summary:
    "Pacientes, agenda, prontuário, avaliação, exames, plano alimentar e prescrições para o nutricionista clínico, feitos para usar durante a consulta. Está em beta fechado, com nutricionistas convidados.",
  highlights: [
    "Plano alimentar com bases de alimentos, medidas caseiras, substituições e o PDF com o logo e o CRN do consultório",
    "Prontuário com anamnese por modelo, registro finalizado que só muda por adendo e a trilha de quem acessou",
    "Avaliação por população, com antropometria, dobras, bioimpedância e acompanhamento da gestante",
    "Exames com a faixa de referência por sexo e idade e o resultado fora dela sinalizado",
    "A secretária cuida da agenda e do cadastro sem nunca ver o prontuário",
  ],
  audience: ["Nutricionistas clínicos", "Consultórios com equipe", "Secretárias"],
  platforms: ["web"],
  platformNote:
    "Em beta fechado: o consultório entra com o convite da equipe do Nutriii. O app do paciente chega depois do beta.",
  shot: {
    src: home,
    alt: "Página inicial do Nutriii: o consultório de nutrição inteiro num lugar só, em beta fechado com nutricionistas convidados",
    kind: "desktop",
  },
  page: {
    metaTitle: "Nutriii: sistema para o consultório de nutrição | HelpFlux",
    metaDescription:
      "Conheça o Nutriii, da HelpFlux: pacientes, agenda, prontuário, avaliação, exames, plano alimentar e prescrições para o nutricionista clínico, num sistema só.",
    lead: "O Nutriii nasce com o nutricionista clínico do lado: cada tela é pensada para o tempo da consulta. Hoje ele está em beta fechado, e o consultório entra com o convite da nossa equipe.",
    problemTitle: "Quando a consulta se divide entre vários programas",
    problem: [
      "A ficha numa ferramenta, a agenda em outra, o plano alimentar montado à parte e o PDF ajustado à mão. A consulta passa mais tempo na papelada do que no paciente.",
      "No Nutriii, o consultório inteiro fica num lugar só: da agenda ao prontuário, da avaliação ao plano alimentar com substituições, com o PDF pronto para entregar.",
    ],
    features: [
      {
        title: "Feito para o tempo da consulta",
        description:
          "Busca instantânea na base de alimentos, atalhos de teclado, modelos e \"copiar do plano anterior\": o plano alimentar sai em minutos. Cada população tem a sua régua: criança e adolescente, gestante, idoso e atleta, cada um com a classificação certa.",
        shot: {
          src: recursos,
          alt: "Seção do site do Nutriii com os recursos: rápido durante a consulta, prontuário protegido, exames com referência e PDF com a marca do consultório",
          kind: "desktop",
        },
      },
      {
        title: "Pacientes e agenda",
        description:
          "Busca única, ficha do paciente, vários calendários, bloqueios, lembrete por e-mail e lembrete pelo WhatsApp com um toque.",
      },
      {
        title: "Prontuário protegido",
        description:
          "Histórico de consultas, anamnese por modelo e anexos. O registro finalizado não muda: a correção vira um adendo, com data, autor e CRN, e fica registrado quem abriu cada prontuário.",
      },
      {
        title: "Avaliação e exames",
        description:
          "Antropometria por população, dobras e protocolos, bioimpedância, acompanhamento da gestante, fotos de evolução e gasto energético. Nos exames, a faixa de referência por sexo e idade, o que está fora sinalizado e a evolução em gráfico.",
        shot: {
          src: modulos,
          alt: "Seção de módulos do site do Nutriii, com o que já funciona no beta na web e o que vem depois",
          kind: "desktop",
        },
      },
      {
        title: "Plano alimentar, prescrições e documentos",
        description:
          "Bases de alimentos com medidas caseiras, opções por refeição, substituições, metas e adequação e versões do plano. Suplementos, manipulados, orientações, atestados e pedido de exames, com os modelos do consultório e o PDF com logo, cor e CRN.",
      },
      {
        title: "Dado de saúde tratado como dado sensível",
        description:
          "Cada consultório vê só os próprios dados, a secretária nunca vê o prontuário, fica registrado quem abriu cada prontuário, quando e de onde, e o login tem verificação em duas etapas para toda a equipe.",
        shot: {
          src: dadosDeSaude,
          alt: "Seção do site do Nutriii sobre dados de saúde: cada consultório vê só os próprios dados e a secretária nunca vê o prontuário",
          kind: "desktop",
        },
      },
    ],
    audienceDetail: [
      {
        title: "Nutricionistas clínicos",
        description:
          "Atendem em consultório e montam avaliação, plano alimentar e prescrições durante a consulta.",
      },
      {
        title: "Consultórios com equipe",
        description:
          "Do consultório de um nutricionista só ao que tem equipe: cada nutricionista tem o próprio acesso.",
      },
      {
        title: "Secretárias",
        description:
          "Cuidam da agenda e do cadastro dos pacientes, sem acesso ao prontuário.",
      },
    ],
    faq: [
      {
        q: "O Nutriii já está aberto para todos?",
        a: "Ainda não. O Nutriii está em beta fechado: um consultório entra só com o convite da equipe. Para participar, fale com a gente pelo site do Nutriii.",
      },
      {
        q: "O paciente vai ter um app?",
        a: "Vai. O app do paciente, com o plano alimentar que abre sem internet, o diário com foto, as metas e os lembretes, chega depois do beta do consultório na web.",
      },
      {
        q: "A secretária vê o prontuário?",
        a: "Não. A secretária cuida da agenda e do cadastro, e o prontuário, a avaliação, os exames e o plano ficam só com os nutricionistas.",
      },
      {
        q: "O Nutriii usa inteligência artificial?",
        a: "Ainda não. Quando chegar, ela vai sugerir e o nutricionista decide: nada é gravado sem ele salvar, e o recurso só funciona se o consultório ligar.",
      },
      {
        q: "Quanto custa?",
        a: "O preço de lançamento é um valor por profissional clínico, por mês, e a secretária não paga. Os valores estão na página de preços do site do Nutriii.",
      },
    ],
  },
};
