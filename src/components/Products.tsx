import SectionLabel from "./SectionLabel";
import {
  areas,
  emDesenvolvimento,
  productPath,
  products,
  productsByArea,
} from "@/data/products";
import type { Product } from "@/data/types";
import {
  Chips,
  CheckList,
  ExternalButton,
  InternalButton,
  PlatformBadges,
  ProductLogo,
  ProductVisual,
  hostOf,
} from "./products/ProductBits";

function ProductShowcase({
  product,
  reverse,
}: {
  product: Product;
  reverse: boolean;
}) {
  const titleId = `produto-${product.slug}`;

  return (
    <article
      aria-labelledby={titleId}
      className="grid items-start gap-8 rounded-3xl border border-border bg-background p-5 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-12"
    >
      <div className={`lg:sticky lg:top-28 ${reverse ? "lg:order-2" : ""}`}>
        <ProductVisual product={product} />
      </div>

      <div>
        <div className="mb-5 flex items-center gap-3.5">
          <ProductLogo product={product} />
          <div className="min-w-0">
            <h4 id={titleId} className="text-xl font-semibold leading-tight">
              {product.name}
            </h4>
            <p className="truncate text-sm text-muted">{hostOf(product.site)}</p>
          </div>
        </div>

        <p className="mb-3 font-display text-xl font-semibold leading-snug tracking-tight sm:text-2xl">
          {product.tagline}
        </p>
        <p className="mb-6 leading-relaxed text-muted">{product.summary}</p>

        <CheckList items={product.highlights} />

        <dl className="mt-7 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
          <div>
            <dt className="mb-2.5 text-xs font-semibold tracking-wider text-muted uppercase">
              Para quem é
            </dt>
            <dd>
              <Chips items={product.audience} />
            </dd>
          </div>
          <div>
            <dt className="mb-2.5 text-xs font-semibold tracking-wider text-muted uppercase">
              Onde funciona
            </dt>
            <dd>
              <PlatformBadges platforms={product.platforms} />
              {product.platformNote && (
                <p className="mt-2.5 text-xs leading-relaxed text-muted">
                  {product.platformNote}
                </p>
              )}
            </dd>
          </div>
        </dl>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <InternalButton
            href={productPath(product)}
            ariaLabel={`Conhecer o produto ${product.name}`}
          >
            Conhecer o produto
          </InternalButton>
          <ExternalButton
            href={product.site}
            ariaLabel={`Acessar o site do ${product.name} (abre em nova aba)`}
          >
            Acessar o site
          </ExternalButton>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section id="produtos" className="scroll-mt-16 bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <SectionLabel>Nossos produtos</SectionLabel>
          <h2 className="mt-4 mb-4 text-3xl font-semibold md:text-4xl">
            Software feito para o dia a dia de cada setor
          </h2>
          <p className="text-lg text-muted">
            São {products.length} produtos próprios, cada um focado num problema
            específico. Veja o que cada um faz, para quem foi feito e onde
            funciona.
          </p>
        </div>

        <nav aria-label="Áreas dos produtos" className="mb-4">
          <ul className="flex flex-wrap justify-center gap-2">
            {areas.map((area) => (
              <li key={area.id}>
                <a
                  href={`#area-${area.id}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-background px-4 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
                >
                  {area.name}
                  <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-foreground px-1.5 text-[11px] font-semibold text-white">
                    {productsByArea(area.id).length}
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#em-desenvolvimento"
                className="inline-flex min-h-11 items-center rounded-full border border-dashed border-foreground/30 px-4 text-sm font-medium text-muted transition-colors hover:border-foreground/50 hover:text-foreground"
              >
                Em desenvolvimento
              </a>
            </li>
          </ul>
        </nav>

        {areas.map((area, i) => (
          <div
            key={area.id}
            id={`area-${area.id}`}
            className="mt-14 scroll-mt-24 md:mt-20"
          >
            <header className="mb-6 flex flex-col gap-1 border-b border-border pb-5 md:mb-8">
              <span className="font-display text-sm font-semibold text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-semibold md:text-3xl">{area.name}</h3>
              <p className="text-muted">{area.description}</p>
            </header>

            <div className="space-y-6 md:space-y-8">
              {productsByArea(area.id).map((product) => (
                <ProductShowcase
                  key={product.slug}
                  product={product}
                  reverse={products.indexOf(product) % 2 === 1}
                />
              ))}
            </div>
          </div>
        ))}

        <div
          id="em-desenvolvimento"
          className="mt-14 scroll-mt-24 rounded-3xl border-2 border-dashed border-foreground/20 p-6 sm:p-10 md:mt-20"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            <div className="md:w-1/3">
              <span className="inline-flex items-center gap-2 rounded-full bg-foreground px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                Em desenvolvimento
              </span>
              <h3 className="mt-4 text-2xl font-semibold">{emDesenvolvimento.name}</h3>
              <p className="text-sm text-muted">{emDesenvolvimento.area}</p>
            </div>
            <p className="leading-relaxed text-muted md:flex-1">
              {emDesenvolvimento.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
