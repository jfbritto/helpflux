import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Gera /pagina/index.html: o nginx resolve $uri/ antes de $uri.html
  trailingSlash: true,
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
