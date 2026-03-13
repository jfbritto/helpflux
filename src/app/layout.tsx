import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HelpFlux | Software House",
  description:
    "Transformamos ideias em soluções digitais de alto impacto. Desenvolvimento de software sob medida, aplicações web, mobile e consultoria técnica.",
  keywords: [
    "software house",
    "desenvolvimento de software",
    "aplicações web",
    "mobile",
    "consultoria",
    "HelpFlux",
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
