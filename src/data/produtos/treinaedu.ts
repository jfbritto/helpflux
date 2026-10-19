import type { Product } from "../types";
import logo from "@/assets/produtos/treinaedu/logo.svg";
import dashboard from "@/assets/produtos/treinaedu/dashboard-admin.webp";
import celular from "@/assets/produtos/treinaedu/player-mobile.webp";
import certificado from "@/assets/produtos/treinaedu/certificado-publico.webp";
import vencimentos from "@/assets/produtos/treinaedu/painel-vencimentos.webp";
import estudio from "@/assets/produtos/treinaedu/gerador-ia.webp";

/*
 * Fontes: treinaedu.com (home, FAQ, /apresentacao/app, /certificate/verify)
 * e o repositório treinaedu (app em mobile/, ComplianceService, rotas de
 * verificação do certificado). Capturas do próprio site, com a empresa
 * fictícia "Clínica Vida" (e2e/landing-shots.spec.ts). As telas do app
 * publicadas em images/app têm dados reais e ficaram de fora.
 */
export const treinaedu: Product = {
  slug: "treinaedu",
  name: "TreinaEdu",
  area: "educacao",
  site: "https://treinaedu.com.br",
  logo,
  logoKind: "tile",
  tagline: "Treinamentos obrigatórios e NRs em dia, com certificado que se confere pela internet",
  summary:
    "Plataforma de treinamento corporativo com catálogo de NRs, aulas em vários formatos, controle de vencimentos e certificados com QR Code que qualquer pessoa verifica.",
  highlights: [
    "Catálogo com 37 modelos de treinamento que cobrem 32 NRs, além de LGPD, assédio e integração",
    "Estúdio com IA que monta módulos, aulas e quiz a partir de um PDF ou texto, com revisão antes de publicar",
    "Controle de validade com lembretes e reciclagem atribuída automaticamente",
    "Certificado em PDF com QR Code e código único, verificável numa página pública",
    "Relatórios por pessoa, grupo e período, em PDF e Excel",
  ],
  audience: [
    "Empresas médias e grandes",
    "Equipes de SST, RH e compliance",
    "Consultorias de SST e RH",
    "Escolas e cursos",
  ],
  platforms: ["web", "ios", "android"],
  platformNote:
    "Painel no navegador. O colaborador também treina pelo app, que está na App Store e no Google Play.",
  shot: {
    src: dashboard,
    alt: "Painel de gestão do TreinaEdu com aula ao vivo, turma presencial, colaboradores, certificados e status dos treinamentos, com dados fictícios",
    kind: "desktop",
  },
  mobileShot: {
    src: celular,
    alt: "Aula da NR-32 aberta no celular, com botão para entrar na aula ao vivo",
    kind: "mobile",
  },
  page: {
    metaTitle:
      "TreinaEdu: treinamento corporativo e NRs com certificado verificável | HelpFlux",
    metaDescription:
      "Conheça o TreinaEdu, da HelpFlux: catálogo de NRs, estúdio de treinamentos com IA, controle de vencimentos e certificados com QR Code verificáveis por qualquer pessoa.",
    lead: "O TreinaEdu organiza os treinamentos obrigatórios da empresa do começo ao fim: atribui, acompanha, avisa antes de vencer e emite certificados que a fiscalização consegue conferir.",
    problemTitle: "Quando o vencimento dos treinamentos mora numa planilha",
    problem: [
      "Controlar quem fez cada NR e quando precisa refazer costuma depender de planilha e memória. O treinamento vence sem que ninguém perceba, e um certificado em papel é difícil de comprovar.",
      "No TreinaEdu, cada treinamento tem validade, a reciclagem volta para a pessoa sozinha e o certificado sai com QR Code. As equipes de SST e RH acompanham tudo por relatórios.",
    ],
    features: [
      {
        title: "Estúdio de Treinamentos com IA",
        description:
          "A partir de um PDF, de um texto ou só de uma ideia, a IA monta módulos, aulas e quiz. Nada é publicado sem a revisão de uma pessoa.",
        shot: {
          src: estudio,
          alt: "Estúdio de Treinamentos com as opções começar do zero, colar texto, enviar PDF ou vídeo",
          kind: "desktop",
        },
      },
      {
        title: "Vencimentos e reciclagem",
        description:
          "Cada treinamento tem validade. A plataforma lembra antes do prazo e depois do atraso, avisa quando o certificado está para vencer e atribui a reciclagem sozinha.",
        shot: {
          src: vencimentos,
          alt: "Painel de vencimentos com certificados vencendo, vencidos em reciclagem e prazos atrasados",
          kind: "desktop",
        },
      },
      {
        title: "Certificado verificável",
        description:
          "O PDF sai com QR Code e código único. Qualquer pessoa confere a validade numa página pública, sem login, e o certificado aceita vários assinantes com registro profissional.",
        shot: {
          src: certificado,
          alt: "Página pública de verificação mostrando um certificado válido com QR Code, com dados fictícios",
          kind: "desktop",
        },
      },
      {
        title: "Aulas em vários formatos",
        description:
          "Vídeo, documento, texto, caça-palavras e forca, com quiz de nota mínima. Também há aula ao vivo com presença automática e turmas presenciais com lista de presença digital.",
        shot: {
          src: celular,
          alt: "Aula aberta no app do TreinaEdu, com aviso de aula ao vivo",
          kind: "mobile",
        },
      },
      {
        title: "Catálogo de NRs pronto",
        description:
          "São 37 modelos de treinamento cobrindo 32 NRs, da NR-1 à NR-38, além de LGPD, assédio e integração. Entram com um clique e o conteúdo pode ser editado.",
      },
      {
        title: "Relatórios e engajamento",
        description:
          "Relatórios por pessoa, grupo, instrutor e período, em PDF e Excel, trilhas de aprendizagem e gamificação com pontos, conquistas e ranking.",
      },
      {
        title: "Eleição da CIPA",
        description: "Votação com voto secreto e ata gerada em PDF.",
      },
      {
        title: "Marca própria e integrações",
        description:
          "A plataforma pode levar a marca do cliente, com login pela conta Google ou Microsoft e API pública com webhooks.",
      },
    ],
    audienceDetail: [
      {
        title: "Empresas médias e grandes",
        description:
          "Operações com muitos colaboradores e muitos treinamentos obrigatórios para controlar.",
      },
      {
        title: "SST, RH e compliance",
        description:
          "Acompanham vencimentos, relatórios e certificados num painel só.",
      },
      {
        title: "Consultorias de SST e RH",
        description: "Levam treinamentos e certificados às empresas que atendem.",
      },
      {
        title: "Escolas e cursos",
        description: "Usam o modo escola da plataforma.",
      },
    ],
    faq: [
      {
        q: "Como a fiscalização confere um certificado?",
        a: "Lendo o QR Code ou digitando o código na página pública de verificação, sem precisar de login.",
      },
      {
        q: "Tem aplicativo?",
        a: "Sim. O app está na App Store e no Google Play, e a plataforma também funciona no navegador.",
      },
      {
        q: "Preciso criar todos os treinamentos do zero?",
        a: "Não. O catálogo já traz NRs prontas, e o estúdio com IA monta um treinamento a partir do seu material.",
      },
      {
        q: "Como funciona a reciclagem?",
        a: "Cada treinamento tem validade. A plataforma avisa antes do vencimento e atribui a reciclagem automaticamente.",
      },
      {
        q: "Integra com Google e Microsoft?",
        a: "Sim, com login único. Também há API pública com webhooks.",
      },
    ],
  },
};
