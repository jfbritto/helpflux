import type { Product } from "../types";
import logo from "@/assets/produtos/hotel-em-dia/logo.svg";
import painel from "@/assets/produtos/hotel-em-dia/painel-da-rede.webp";
import celular from "@/assets/produtos/hotel-em-dia/auditoria-no-celular.webp";
import documentos from "@/assets/produtos/hotel-em-dia/documentos-do-hotel.webp";
import leitura from "@/assets/produtos/hotel-em-dia/leitura-do-documento.webp";
import ranking from "@/assets/produtos/hotel-em-dia/ranking-da-rede.webp";
import sugestao from "@/assets/produtos/hotel-em-dia/sugestao-de-acao.webp";

/*
 * Fontes: hotelemdia.com (home, /controle-vencimento-documentos,
 * /checklist-hotelaria, /indice-de-saude-operacional, /ia-para-hotelaria)
 * e o repositório hotelemdia (app em mobile/, integração em app/Services/HelpDiet).
 * Capturas: public/img/site do próprio site, montadas com a demo fictícia.
 */
export const hotelEmDia: Product = {
  slug: "hotel-em-dia",
  name: "Hotel em Dia",
  area: "hospitalidade",
  site: "https://hotelemdia.com",
  logo,
  logoKind: "icon",
  tagline: "Documentos, auditorias e ações de cada hotel da rede num painel só",
  summary:
    "Mostra, hotel por hotel, o que está em dia e o que pede atenção: documentos com validade, auditorias com nota e ações com prazo, resumidos num índice de 0 a 100%.",
  highlights: [
    "Controle de vencimento de AVCB, alvará, licença sanitária e outros documentos, com aviso por e-mail antes do prazo",
    "Auditorias por checklist com nota ponderada, foto e uma pergunta por vez no celular",
    "Índice de Saúde Operacional de 0 a 100% por hotel e pela rede, com ranking",
    "Plano de ação com responsável, prazo e validação do regional",
    "Inteligência artificial que lê as datas do documento e sugere ações, sempre com confirmação de uma pessoa",
  ],
  audience: [
    "Redes e administradoras de hotéis",
    "Diretoria e regionais",
    "Gerentes de hotel",
    "Hotéis independentes",
  ],
  platforms: ["web", "ios", "android"],
  platformNote:
    "Funciona no navegador do computador e do celular. Também tem app para iOS e Android.",
  shot: {
    src: painel,
    alt: "Painel da rede no Hotel em Dia com índice da rede, compliance documental, hotéis abaixo do mínimo e ações no prazo, com dados de demonstração",
    kind: "desktop",
  },
  mobileShot: {
    src: celular,
    alt: "Auditoria no celular com uma pergunta por vez e as respostas sim, em parte, não e não se aplica",
    kind: "mobile",
  },
  page: {
    metaTitle:
      "Hotel em Dia: documentos, auditorias e índice para redes de hotéis | HelpFlux",
    metaDescription:
      "Conheça o Hotel em Dia, da HelpFlux: controle de vencimento de documentos, auditorias com nota, plano de ação e um índice de 0 a 100% para cada hotel da rede.",
    lead: "O Hotel em Dia reúne a documentação obrigatória, as auditorias e as correções de cada hotel num lugar só. A rede enxerga onde agir sem depender de planilhas e mensagens soltas.",
    problemTitle: "Quando a rede depende de planilha e WhatsApp",
    problem: [
      "Em muitas redes, o controle de AVCB, alvará e licença sanitária fica espalhado em planilhas e conversas. Um documento vence sem que ninguém perceba, a cobrança é feita hotel por hotel e, quando o gerente sai, o histórico vai embora com ele.",
      "No Hotel em Dia, cada hotel envia os próprios documentos e responde às auditorias no sistema. A rede acompanha tudo num painel com nota, pendências e prazos, e nada se perde: cada mudança fica registrada.",
    ],
    features: [
      {
        title: "Cofre de documentos com aviso de vencimento",
        description:
          "O hotel envia o arquivo com a data de validade e o sistema mostra a situação de cada um: regular, a vencer, vencido ou ausente. Os avisos por e-mail saem 90, 60 e 30 dias antes, com prazos ajustáveis, e as versões anteriores ficam guardadas.",
        shot: {
          src: documentos,
          alt: "Lista de documentos de um hotel com AVCB e licença sanitária vencidos e Cadastur perto de vencer",
          kind: "desktop",
        },
      },
      {
        title: "Auditorias com nota ponderada",
        description:
          "Checklists separados por pilar, como segurança, operação, manutenção, governança e alimentos e bebidas. Cada item tem peso de 1 a 3, pode ser marcado como crítico e recebe foto. No celular, a auditoria aparece uma pergunta por vez.",
        shot: {
          src: celular,
          alt: "Auditoria no celular mostrando a pergunta 14 de 30 com quatro opções de resposta",
          kind: "mobile",
        },
      },
      {
        title: "Índice de Saúde Operacional",
        description:
          "Uma nota de 0 a 100% para cada hotel e para a rede, ponderada por pilar e guardada a cada trimestre. Item crítico com problema limita a nota. O painel mostra ranking, variação e pendências, com relatório em PDF e planilha.",
        shot: {
          src: ranking,
          alt: "Ranking dos hotéis da rede pelo Índice de Saúde Operacional, com dados de demonstração",
          kind: "desktop",
        },
      },
      {
        title: "Plano de ação acompanhado",
        description:
          "Cada problema encontrado vira uma ação com responsável e prazo. O gerente conta o que fez, com foto, e o regional aprova ou devolve.",
        shot: {
          src: sugestao,
          alt: "Tela de ação corretiva com sugestão de texto feita pela inteligência artificial",
          kind: "desktop",
        },
      },
      {
        title: "Inteligência artificial que sugere, sem decidir",
        description:
          "A IA lê emissão, validade e órgão emissor no arquivo do documento, importa checklists de Excel, PDF ou Word, escreve o resumo do trimestre, sugere ações e responde perguntas sobre os dados que a pessoa pode ver. Uma pessoa sempre confirma, e cada recurso pode ser desligado.",
        shot: {
          src: leitura,
          alt: "Datas de emissão e validade lidas pela IA no arquivo do documento, com aviso para conferir antes de enviar",
          kind: "desktop",
        },
      },
      {
        title: "Conferência no envio",
        description:
          "Arquivo vazio e validade anterior à emissão são barrados na hora. Foto escura e arquivo repetido geram aviso, e a rede pode exigir que o corporativo aprove o documento antes de ele contar.",
      },
      {
        title: "Português e inglês",
        description:
          "Cada pessoa escolhe usar o sistema em português ou em inglês, e a interface acompanha a escolha.",
      },
      {
        title: "Indicadores do HelpDiet no painel",
        description:
          "Quando a cozinha do hotel usa o HelpDiet e a empresa autoriza o compartilhamento, os indicadores de segurança dos alimentos aparecem no painel do hotel.",
      },
    ],
    audienceDetail: [
      {
        title: "Redes e administradoras",
        description:
          "Hotéis próprios, administrados ou franqueados acompanhados num painel único.",
      },
      {
        title: "Diretoria",
        description:
          "Índice da rede, ranking e resumo do trimestre para decidir onde agir primeiro.",
      },
      {
        title: "Regionais e auditores",
        description:
          "Aplicam auditorias e validam as ações dos hotéis que acompanham.",
      },
      {
        title: "Gerentes de hotel",
        description:
          "Enviam documentos, respondem às auditorias e tratam as ações do próprio hotel.",
      },
      {
        title: "Hotéis independentes",
        description: "Um hotel sozinho usa o sistema como uma rede de um hotel só.",
      },
    ],
    faq: [
      {
        q: "O Hotel em Dia substitui o sistema de reservas?",
        a: "Não. Ele não cuida de reservas, tarifas nem hóspedes. Funciona ao lado do sistema que o hotel já usa, focado em documentos, auditorias e ações.",
      },
      {
        q: "Funciona no celular?",
        a: "Sim. Funciona no navegador do celular e do computador, e a auditoria aparece uma pergunta por vez. Também há app para iOS e Android.",
      },
      {
        q: "A inteligência artificial decide sozinha?",
        a: "Não. A IA sugere e uma pessoa confirma. A rede pode desligar cada recurso de IA.",
      },
      {
        q: "Posso usar o checklist que já tenho?",
        a: "Sim. Dá para importar checklists de Excel, PDF ou Word. O modelo importado começa desativado, para ser revisado antes do uso.",
      },
      {
        q: "Serve para um hotel só?",
        a: "Sim. O hotel independente usa o Hotel em Dia como uma rede de um hotel só.",
      },
      {
        q: "Como experimentar?",
        a: "Pelo site do Hotel em Dia, com 14 dias de teste grátis e sem cartão de crédito.",
      },
    ],
  },
};
