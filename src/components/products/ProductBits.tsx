import Image from "next/image";
import Link from "next/link";
import type { Platform, Product, Shot } from "@/data/types";
import {
  ArrowRightIcon,
  CheckIcon,
  ExternalIcon,
  MonitorIcon,
  PhoneIcon,
} from "../icons";

const platformLabel: Record<Platform, string> = {
  web: "Navegador",
  ios: "iOS",
  android: "Android",
};

export function hostOf(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/*
 * Carregamento: a captura da primeira dobra carrega na hora, sem pré-carga,
 * para não disputar banda com a fonte do título (o maior texto da tela no
 * celular); as outras são preguiçosas.
 */
function loadProps(priority: boolean) {
  return { loading: priority ? "eager" : "lazy" } as const;
}

/** Logo do produto: a que já é um quadro colorido entra direto; o desenho solto vai num quadro branco */
export function ProductLogo({
  product,
  size = "md",
}: {
  product: Product;
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "h-16 w-16 rounded-2xl" : "h-12 w-12 rounded-xl";

  if (product.logoKind === "tile") {
    return (
      <Image
        src={product.logo}
        alt=""
        className={`${box} shrink-0 shadow-sm`}
      />
    );
  }

  return (
    <span
      className={`${box} inline-flex shrink-0 items-center justify-center border border-border bg-white shadow-sm`}
    >
      <Image src={product.logo} alt="" className="h-3/4 w-3/4 object-contain" />
    </span>
  );
}

export function PlatformBadges({ platforms }: { platforms: Platform[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {platforms.map((p) => (
        <li
          key={p}
          className="inline-flex items-center gap-1.5 rounded-full border border-foreground/15 bg-white px-3 py-1 text-xs font-semibold text-foreground"
        >
          {p === "web" ? (
            <MonitorIcon className="h-3.5 w-3.5" />
          ) : (
            <PhoneIcon className="h-3.5 w-3.5" />
          )}
          {platformLabel[p]}
        </li>
      ))}
    </ul>
  );
}

export function Chips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-white">
            <CheckIcon className="h-3.5 w-3.5" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Captura de celular numa moldura de aparelho */
export function PhoneFrame({
  shot,
  priority = false,
  compact = false,
  className = "",
}: {
  shot: Shot;
  priority?: boolean;
  /** Versão menor, sobreposta à captura principal e cortada no topo */
  compact?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`${
        compact
          ? "rounded-[1.15rem] border-[4px] sm:rounded-[1.6rem] sm:border-[6px]"
          : "mx-auto w-full max-w-[260px] rounded-[2.2rem] border-[7px]"
      } overflow-hidden border-foreground bg-foreground shadow-2xl shadow-primary/25 ${className}`}
    >
      <Image
        src={shot.src}
        alt={shot.alt}
        sizes={compact ? "180px" : "260px"}
        {...loadProps(priority)}
        className={`h-auto w-full ${
          compact
            ? "aspect-[9/16] rounded-[0.85rem] object-cover object-top sm:rounded-[1.15rem]"
            : "rounded-[1.7rem]"
        }`}
      />
    </figure>
  );
}

/** Captura de computador numa moldura de navegador */
export function ShotFrame({
  shot,
  host,
  priority = false,
  crop = false,
  className = "",
}: {
  shot: Shot;
  host?: string;
  priority?: boolean;
  /** Corta capturas altas em 4:3, mostrando o topo */
  crop?: boolean;
  className?: string;
}) {
  if (shot.kind === "mobile") {
    return <PhoneFrame shot={shot} priority={priority} className={className} />;
  }

  return (
    <figure
      className={`overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-primary/10 ${className}`}
    >
      <div
        className="flex h-8 items-center gap-1.5 border-b border-border bg-background px-3 sm:px-4"
        aria-hidden="true"
      >
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
        {host && (
          <span className="ml-2 truncate rounded-md bg-surface px-2.5 py-0.5 text-[11px] text-muted">
            {host}
          </span>
        )}
      </div>
      <Image
        src={shot.src}
        alt={shot.alt}
        sizes="(min-width: 1024px) 620px, 100vw"
        {...loadProps(priority)}
        className={
          crop
            ? "aspect-[4/3] h-auto w-full object-cover object-top"
            : "h-auto w-full"
        }
      />
    </figure>
  );
}

/** Captura principal, com a de celular sobreposta quando existir */
export function ProductVisual({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  const host = hostOf(product.site);

  if (!product.mobileShot) {
    return <ShotFrame shot={product.shot} host={host} priority={priority} />;
  }

  return (
    <div className="relative pr-8 pb-10 sm:pr-12 sm:pb-14">
      <ShotFrame shot={product.shot} host={host} priority={priority} />
      <div className="absolute right-0 bottom-0 w-[26%] max-w-[170px]">
        <PhoneFrame shot={product.mobileShot} compact />
      </div>
    </div>
  );
}

const btnBase =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground";

export function InternalButton({
  href,
  children,
  ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${btnBase} group bg-primary text-white hover:bg-primary-light`}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function ExternalButton({
  href,
  children,
  ariaLabel,
  tone = "outline",
}: {
  href: string;
  children: React.ReactNode;
  ariaLabel?: string;
  tone?: "outline" | "solid" | "light" | "ghost-dark";
}) {
  const style = {
    solid: "bg-primary text-white hover:bg-primary-light",
    light: "bg-white text-foreground hover:bg-background",
    "ghost-dark":
      "border-2 border-white/30 text-white hover:bg-white/15",
    outline:
      "border-2 border-foreground text-foreground hover:bg-foreground hover:text-white",
  }[tone];
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${btnBase} ${style}`}
    >
      {children}
      <ExternalIcon className="h-4 w-4" />
    </a>
  );
}
