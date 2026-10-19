import type { StaticImageData } from "next/image";
import NavbarClient from "./NavbarClient";
import { productPath, products } from "@/data/products";

export type NavProduct = {
  slug: string;
  name: string;
  tagline: string;
  href: string;
  logo: StaticImageData;
  logoKind: "icon" | "tile";
};

/** Passa ao menu só o necessário, para não levar o conteúdo das páginas ao JavaScript do navegador */
export default function Navbar() {
  const items: NavProduct[] = products.map((p) => ({
    slug: p.slug,
    name: p.name,
    tagline: p.tagline,
    href: productPath(p),
    logo: p.logo,
    logoKind: p.logoKind,
  }));

  return <NavbarClient products={items} />;
}
