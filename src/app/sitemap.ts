import type { MetadataRoute } from "next";
import { SITE_URL, productPath, products } from "@/data/products";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    ...products.map((p) => ({
      url: `${SITE_URL}${productPath(p)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE_URL}/politica-de-privacidade/`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${SITE_URL}/termos-de-uso/`,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
