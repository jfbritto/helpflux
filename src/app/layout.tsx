import type { Metadata } from "next";
import "./globals.css";

const title = "HelpFlux | SaaS House";
const description =
  "Criamos e mantemos produtos SaaS que simplificam negócios. HelpDiet, BeautyMetrics, TakeTicket, TreinaEdu e mais.";

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
    "helpdiet",
    "beautymetrics",
    "taketicket",
    "treinaedu",
    "software como serviço",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
