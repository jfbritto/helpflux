import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelpFlux | SaaS House",
  description:
    "Criamos e mantemos produtos SaaS que simplificam negócios. HelpDiet, BeautyMetrics, TakeTicket, TreinaEdu e mais.",
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
