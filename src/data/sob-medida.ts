import type { CustomProject } from "./types";
import deCasaEmCasa from "@/assets/sob-medida/de-casa-em-casa.webp";
import soavelVeiculos from "@/assets/sob-medida/soavel-veiculos.webp";

/*
 * Sistemas feitos sob medida para clientes, a pedido do João (12/11/2026).
 * Só o que foi conferido no repositório de cada um e na página pública.
 * Capturas: só páginas públicas (nada do painel, que tem dados de pessoas).
 *
 * De Casa em Casa: repositório decasaemcasa (CLAUDE.md, rotas e models) e o
 * primeiro passo da inscrição em /inscricao. O app do participante ainda não
 * está nas lojas: fica de fora.
 * Soavel Veículos: repositório site-carros/soavel (CLAUDE.md, controllers do
 * site e do painel) e a home de soavelveiculos.com.br.
 */
export const customProjects: CustomProject[] = [
  {
    slug: "de-casa-em-casa",
    name: "De Casa em Casa",
    segment: "Turnê e eventos",
    site: "https://decasaemcasa.omarcosalmeida.com.br/inscricao",
    summary:
      "Inscrição e curadoria da turnê De Casa em Casa, com encontros em casas de várias cidades. O participante escolhe a cidade e a data, a equipe aprova quem vai, e só os confirmados recebem o endereço e o horário.",
    delivered: [
      "Inscrição pública em quatro passos: local, manifesto, dados e termos",
      "Curadoria pela equipe, com aprovação, fila de espera e vagas por encontro",
      "Comprovante da contribuição por Pix dentro de um prazo, e quem não envia volta para a fila",
      "Avisos automáticos por e-mail em cada etapa da inscrição",
      "Painel com os encontros, as inscrições e a lista de participantes em PDF",
    ],
    platforms: ["web"],
    shot: {
      src: deCasaEmCasa,
      alt: "Primeiro passo da inscrição da turnê De Casa em Casa, com a escolha da cidade e da data do encontro",
      kind: "desktop",
    },
  },
  {
    slug: "soavel-veiculos",
    name: "Soavel Veículos",
    segment: "Loja de veículos",
    site: "https://soavelveiculos.com.br",
    summary:
      "Site e sistema de gestão de uma loja de seminovos e usados. O cliente busca o carro no estoque e chama a loja pelo WhatsApp, e a loja cuida do estoque, das vendas e dos contatos num painel só.",
    delivered: [
      "Site com o estoque, busca por marca, categoria e preço e uma página para cada veículo",
      "Contato pelo WhatsApp já com o nome do veículo na mensagem",
      "Painel com veículos, fotos e documentos, clientes e contatos recebidos pelo site",
      "Vendas com veículo na troca, despesas, parceiros e relatórios",
      "Consulta à tabela FIPE",
    ],
    platforms: ["web"],
    platformNote: "A mesma base atende outras lojas, cada uma com o seu site e o seu painel.",
    shot: {
      src: soavelVeiculos,
      alt: "Página inicial do site da Soavel Veículos, com a busca de veículos por marca, categoria e preço",
      kind: "desktop",
    },
  },
];
