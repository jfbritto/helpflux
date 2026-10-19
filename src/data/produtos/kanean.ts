import type { Product } from "../types";
import logo from "@/assets/produtos/kanean/logo.svg";
import home from "@/assets/produtos/kanean/home.webp";
import categorias from "@/assets/produtos/kanean/categorias.webp";
import registro from "@/assets/produtos/kanean/registro-no-celular.webp";
import acompanhamento from "@/assets/produtos/kanean/acompanhamento-no-celular.webp";

/*
 * Fontes: o site kanean.com (home, /privacidade, /termos, /suporte e a tela
 * de entrada do painel em /admin/login) e as fichas do app na App Store e no
 * Google Play. Não há repositório local.
 * Capturas: a primeira dobra da home, cortada acima do placar de ocorrências
 * e cidades, e a seção das categorias; as telas de celular são as de boas-vindas
 * publicadas no Google Play, sem a faixa lateral que a loja acrescenta. As telas
 * da App Store ficaram de fora porque mostram nome, foto de perfil e endereço.
 * Logo: o símbolo do cabeçalho do site (/brand/logo-mark.svg).
 */
export const kanean: Product = {
  slug: "kanean",
  name: "Kanean",
  area: "cidades",
  site: "https://kanean.com",
  logo,
  logoKind: "icon",
  tagline: "Problemas da rua registrados com foto e acompanhados até a solução",
  summary:
    "App gratuito em que o cidadão registra buracos, postes apagados e outros problemas urbanos com foto e localização exata, e prefeituras e concessionárias acompanham cada caso até a solução num painel próprio.",
  highlights: [
    "Registro com foto, localização exata e categoria, do buraco na via ao poste apagado",
    "Confirmações e reações de quem passa pelo local, que dão peso ao problema",
    "Linha do tempo pública, com a data de cada passo do atendimento",
    "Para encerrar, o responsável mostra foto do local, e quem registrou diz se foi resolvido mesmo",
    "Painel para prefeituras e concessionárias com as ocorrências da sua área e indicadores",
  ],
  audience: ["Cidadãos", "Prefeituras", "Concessionárias"],
  platforms: ["ios", "android", "web"],
  platformNote:
    "App gratuito na App Store e no Google Play, em português, inglês e espanhol. Prefeituras e concessionárias entram no painel pelo site do Kanean, no navegador.",
  shot: {
    src: home,
    alt: "Página inicial do Kanean com a chamada para registrar problemas da cidade e o botão para baixar o aplicativo",
    kind: "desktop",
  },
  mobileShot: {
    src: registro,
    alt: "Tela de boas-vindas do app Kanean: registre um problema em segundos",
    kind: "mobile",
    comBarraDeStatus: true,
  },
  page: {
    metaTitle: "Kanean: registro e acompanhamento de problemas urbanos | HelpFlux",
    metaDescription:
      "Conheça o Kanean, da HelpFlux: o cidadão registra problemas da rua com foto e localização exata, e prefeituras e concessionárias acompanham cada caso até a solução.",
    lead: "O Kanean liga quem vê o problema na rua a quem tem competência para resolver. O registro sai do celular em menos de um minuto e passa a ter um andamento público, com a data de cada etapa.",
    problemTitle: "Quando a reclamação termina na publicação",
    problem: [
      "Registrar um buraco ou um poste apagado é fácil. Difícil é saber o que aconteceu depois: quem recebeu o pedido, se alguém foi ao local e se o problema foi mesmo resolvido.",
      "No Kanean, cada registro ganha uma linha do tempo pública. As confirmações de quem passa pelo local mostram o tamanho do problema, o órgão responsável só encerra o caso com foto e explicação do que fez, e quem registrou dá a palavra final.",
    ],
    features: [
      {
        title: "Registro em segundos",
        description:
          "Abra o app, fotografe e a localização vem da própria foto. Depois é escolher a categoria, contar em uma frase o que houve e publicar.",
        shot: {
          src: registro,
          alt: "Tela de boas-vindas do app Kanean com a mensagem registre um problema em segundos",
          kind: "mobile",
          comBarraDeStatus: true,
        },
      },
      {
        title: "Acompanhamento até a solução",
        description:
          "Registrado, em análise, responsável acionado, em atendimento e resolvido, cada passo com a data e as observações públicas do órgão. Para marcar como resolvido, o responsável descreve o que fez e anexa foto do local. Se quem registrou ou confirmou disser que não foi resolvido, a ocorrência volta para atendimento.",
        shot: {
          src: acompanhamento,
          alt: "Tela de boas-vindas do app Kanean com a linha do tempo registrado, acionado e resolvido",
          kind: "mobile",
          comBarraDeStatus: true,
        },
      },
      {
        title: "Categorias com destino certo",
        description:
          "Buraco na via, vazamento de água, falta de energia, iluminação pública, esgoto, lixo e entulho, árvore caída, alagamento e outras. Cada categoria segue para quem tem a responsabilidade de resolver.",
        shot: {
          src: categorias,
          alt: "Seção do site do Kanean com as categorias de problemas que podem ser registradas",
          kind: "desktop",
        },
      },
      {
        title: "Confirmar, reagir e conversar",
        description:
          "Quem passa pelo local confirma o que já foi registrado, em vez de abrir outra publicação. Reações de apoio, revolta e perigo ajudam a separar o urgente, e há comentários públicos e mensagens diretas.",
      },
      {
        title: "Painel para prefeituras e concessionárias",
        description:
          "Cada organização vê só as ocorrências da sua área de atuação, definida por cidade e por categoria. Ao assumir uma ocorrência, quem registrou é avisado na hora, e as vistorias viram notas públicas na linha do tempo.",
      },
      {
        title: "Fila de campo e indicadores",
        description:
          "Uma fila de atendimento pensada para o celular de quem está na rua, indicadores por status, por categoria e de tempo médio de resolução, e um perfil público com as ocorrências assumidas e resolvidas.",
      },
      {
        title: "Mapa e lugares seguidos",
        description:
          "Um mapa com o que está acontecendo perto, cidades, bairros e órgãos para seguir e aviso quando a sua ocorrência anda.",
      },
      {
        title: "Privacidade nas fotos",
        description:
          "Antes de a foto ficar pública, todos os metadados saem, inclusive o GPS gravado pela câmera. O app guarda o lugar da ocorrência, não acompanha você em segundo plano e não exibe anúncios.",
      },
    ],
    audienceDetail: [
      {
        title: "Cidadãos",
        description:
          "Registram o que veem na rua, confirmam o que outras pessoas já registraram e acompanham até a solução.",
      },
      {
        title: "Prefeituras",
        description:
          "Recebem as ocorrências da sua cidade, por categoria, e mostram em público o andamento de cada uma.",
      },
      {
        title: "Concessionárias",
        description:
          "Acompanham as ocorrências das cidades e categorias em que atuam, como vazamento de água ou falta de energia.",
      },
      {
        title: "Equipes de campo",
        description:
          "Atendem pela fila pensada para o celular e registram a vistoria e a foto da solução.",
      },
    ],
    faq: [
      {
        q: "Quanto custa o app?",
        a: "Nada. O app é gratuito no iPhone e no Android.",
      },
      {
        q: "O Kanean é um canal oficial da prefeitura?",
        a: "Não. O Kanean não é órgão público, não substitui os canais oficiais e não garante prazo nem solução. Cada organização que usa a plataforma responde pelo próprio atendimento.",
      },
      {
        q: "Serve para emergências?",
        a: "Não. Em risco à vida ou à segurança, ligue 190, 192, 193 ou 199. O Kanean não aciona serviços de emergência.",
      },
      {
        q: "A foto publicada leva a localização gravada pela câmera?",
        a: "Não. Todos os metadados saem da foto antes de ela ficar pública, inclusive o GPS. O app guarda o lugar da ocorrência, não o seu deslocamento.",
      },
      {
        q: "O que a prefeitura ou a concessionária vê?",
        a: "Um painel com as ocorrências da sua área de atuação, definida por cidade e por categoria. Ocorrências de outras áreas não aparecem.",
      },
      {
        q: "Em que idiomas o app funciona?",
        a: "Português, inglês e espanhol.",
      },
    ],
  },
};
