import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionLabel from "@/components/SectionLabel";
import { CheckIcon } from "@/components/icons";
import {
  ExternalButton,
  PlatformBadges,
  ProductLogo,
  ProductVisual,
  ShotFrame,
  hostOf,
} from "@/components/products/ProductBits";
import {
  SITE_URL,
  areaOf,
  getProduct,
  productPath,
  products,
} from "@/data/products";
import type { Platform, Product } from "@/data/types";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  const { metaTitle: title, metaDescription: description } = product.page;
  const path = productPath(product);
  // Cartão de compartilhamento gerado a partir da logo, da frase e da captura principal
  const image = {
    url: `/og/${product.slug}.jpg`,
    width: 1200,
    height: 630,
    alt: `${product.name}: ${product.tagline}`,
  };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      siteName: "HelpFlux",
      url: path,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.url],
    },
  };
}

const operatingSystem: Record<Platform, string> = {
  web: "Web",
  ios: "iOS",
  android: "Android",
};

function JsonLd({ product }: { product: Product }) {
  const url = `${SITE_URL}${productPath(product)}`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: product.name,
      description: product.page.metaDescription,
      url: product.site,
      mainEntityOfPage: url,
      image: `${SITE_URL}${product.shot.src.src}`,
      applicationCategory: "BusinessApplication",
      operatingSystem: product.platforms.map((p) => operatingSystem[p]).join(", "),
      inLanguage: "pt-BR",
      publisher: {
        "@type": "Organization",
        name: "HelpFlux",
        legalName: "HelpFlux Soluções em Tecnologia LTDA",
        url: SITE_URL,
        logo: `${SITE_URL}/brand/symbol-512.svg`,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Produtos", item: `${SITE_URL}/#produtos` },
        { "@type": "ListItem", position: 3, name: product.name, item: url },
      ],
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const area = areaOf(product);
  const { page } = product;
  const withShot = page.features.filter((f) => f.shot);
  const withoutShot = page.features.filter((f) => !f.shot);
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <JsonLd product={product} />
      <Navbar />
      <main>
        {/* Abertura */}
        <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="absolute inset-0 dot-grid fade-edges" aria-hidden="true" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
            <nav aria-label="Você está em" className="mb-8 text-sm text-muted">
              <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <li>
                  <Link href="/" className="inline-flex min-h-11 items-center hover:text-foreground">
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/#produtos" className="inline-flex min-h-11 items-center hover:text-foreground">
                    Produtos
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="font-medium text-foreground">
                  {product.name}
                </li>
              </ol>
            </nav>

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              <div>
                <SectionLabel>{area.name}</SectionLabel>
                <div className="mt-6 mb-5 flex items-center gap-4">
                  <ProductLogo product={product} size="lg" />
                  <p className="font-display text-2xl font-semibold">{product.name}</p>
                </div>
                <h1 className="mb-5 text-4xl leading-[1.1] font-semibold md:text-5xl">
                  {product.tagline}
                </h1>
                <p className="mb-7 text-lg leading-relaxed text-muted">{page.lead}</p>

                <div className="mb-8">
                  <PlatformBadges platforms={product.platforms} />
                  {product.platformNote && (
                    <p className="mt-2.5 text-sm text-muted">{product.platformNote}</p>
                  )}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <ExternalButton
                    href={product.site}
                    tone="solid"
                    ariaLabel={`Acessar o site do ${product.name} (abre em nova aba)`}
                  >
                    Acessar o site do {product.name}
                  </ExternalButton>
                  <a
                    href="#recursos"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-foreground px-6 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-white"
                  >
                    Ver os recursos
                  </a>
                </div>
              </div>

              <ProductVisual product={product} priority />
            </div>
          </div>
        </section>

        {/* O problema */}
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <SectionLabel>O problema</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">{page.problemTitle}</h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-muted">
              {page.problem.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Recursos */}
        <section id="recursos" className="scroll-mt-20 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 max-w-3xl md:mb-16">
              <SectionLabel>Recursos principais</SectionLabel>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                O que o {product.name} faz
              </h2>
            </div>

            <div className="space-y-16 md:space-y-24">
              {withShot.map((feature, i) => (
                <div
                  key={feature.title}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="font-display text-sm font-semibold text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 mb-3 text-2xl font-semibold">{feature.title}</h3>
                    <p className="text-lg leading-relaxed text-muted">{feature.description}</p>
                  </div>
                  <div className={feature.shot!.kind === "mobile" ? "flex justify-center" : ""}>
                    <ShotFrame
                      shot={feature.shot!}
                      host={hostOf(product.site)}
                      crop={
                        feature.shot!.kind === "desktop" &&
                        feature.shot!.src.height / feature.shot!.src.width > 0.8
                      }
                    />
                  </div>
                </div>
              ))}
            </div>

            {withoutShot.length > 0 && (
              <div className="mt-16 grid gap-5 sm:grid-cols-2 md:mt-24 lg:grid-cols-3">
                {withoutShot.map((feature) => (
                  <div
                    key={feature.title}
                    className="rounded-3xl border border-border bg-surface p-6"
                  >
                    <span className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <h3 className="mb-2 font-semibold">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{feature.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Para quem é e onde funciona */}
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            <div>
              <SectionLabel>Público</SectionLabel>
              <h2 className="mt-4 mb-8 text-3xl font-semibold md:text-4xl">
                Para quem é o {product.name}
              </h2>
              <ul className="grid gap-4 sm:grid-cols-2">
                {page.audienceDetail.map((a) => (
                  <li key={a.title} className="rounded-2xl border border-border bg-background p-5">
                    <h3 className="mb-1 font-semibold">{a.title}</h3>
                    <p className="text-sm leading-relaxed text-muted">{a.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionLabel>Plataformas</SectionLabel>
              <h2 className="mt-4 mb-8 text-3xl font-semibold md:text-4xl">
                Onde funciona
              </h2>
              <div className="rounded-2xl border border-border bg-background p-6">
                <PlatformBadges platforms={product.platforms} />
                {product.platformNote && (
                  <p className="mt-4 leading-relaxed text-muted">{product.platformNote}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Perguntas frequentes */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionLabel>Perguntas frequentes</SectionLabel>
            <h2 className="mt-4 mb-8 text-3xl font-semibold md:text-4xl">
              Dúvidas sobre o {product.name}
            </h2>
            <div className="divide-y divide-border rounded-3xl border border-border bg-surface">
              {page.faq.map((item) => (
                <details key={item.q} className="group px-5 sm:px-6">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-foreground/20 text-lg leading-none transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Chamada */}
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-14 text-center sm:px-12 md:py-20">
              <div className="absolute inset-0 dot-grid-light" aria-hidden="true" />
              <div className="relative">
                <div className="mb-6 flex justify-center">
                  <ProductLogo product={product} size="lg" />
                </div>
                <h2 className="mb-4 text-3xl font-semibold text-white md:text-4xl">
                  Conheça o {product.name} de perto
                </h2>
                <p className="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-white/75">
                  No site do {product.name} você encontra mais detalhes e o
                  caminho para começar.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <ExternalButton
                    href={product.site}
                    tone="light"
                    ariaLabel={`Acessar o site do ${product.name} (abre em nova aba)`}
                  >
                    Acessar o site do {product.name}
                  </ExternalButton>
                  <Link
                    href="/#produtos"
                    className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                  >
                    Ver todos os produtos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outros produtos */}
        <section className="bg-surface py-16 md:py-20" aria-labelledby="outros-produtos">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 id="outros-produtos" className="mb-8 text-2xl font-semibold">
              Outros produtos da HelpFlux
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={productPath(p)}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-colors hover:border-foreground/40"
                  >
                    <ProductLogo product={p} />
                    <span>
                      <span className="block font-semibold group-hover:underline">{p.name}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted">
                        {p.tagline}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
