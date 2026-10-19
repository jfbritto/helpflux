import type { Metadata } from "next";
import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

// Baixadas no build e servidas pelo próprio site: sem pedido bloqueante ao Google na abertura
// Só a Poppins dos títulos é pré-carregada: é ela que desenha o maior texto da primeira dobra
const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
  preload: false,
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const title = "HelpFlux | SaaS para hotéis, cozinhas, treinamento, beleza, eventos e cidades";
const description =
  "A HelpFlux cria e mantém Hotel em Dia, HelpDiet, HelpCheck, TreinaEdu, BeautyMetrics, TakeTicket e Kanean: software para hotelaria, segurança dos alimentos, treinamento, beleza, eventos e problemas urbanos.";

export const metadata: Metadata = {
  metadataBase: new URL("https://helpflux.com.br"),
  title,
  description,
  // Imagem de compartilhamento: src/app/opengraph-image.png (fonte em scripts/og-image.html)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "HelpFlux",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "saas house",
    "produtos saas",
    "helpflux",
    "hotel em dia",
    "helpdiet",
    "helpcheck",
    "treinaedu",
    "beautymetrics",
    "taketicket",
    "kanean",
    "software como serviço",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${poppins.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
