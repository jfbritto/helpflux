import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Gera /pagina/index.html: o nginx resolve $uri/ antes de $uri.html
  trailingSlash: true,
  // Export estático não tem servidor de imagens: as capturas já vão em WebP no tamanho certo
  images: { unoptimized: true },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
