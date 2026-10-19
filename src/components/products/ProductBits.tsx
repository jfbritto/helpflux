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

/**
 * Captura de celular numa silhueta de iPhone, a mesma dos sites do Hotel em
 * Dia, do TreinaEdu e do HelpCheck: tela 19,5:9, Dynamic Island, barra de
 * status, botões laterais e a barrinha de baixo. As medidas são em cqw (a
 * largura do próprio aparelho), então a moldura fica proporcional em qualquer
 * tamanho, da vitrine ao celular sobreposto. A captura entra encaixada pelo
 * topo; a que já traz a barra de status do aparelho não ganha outra.
 */
export function PhoneFrame({
  shot,
  priority = false,
  compact = false,
  className = "",
}: {
  shot: Shot;
  priority?: boolean;
  /** Versão menor, sobreposta à captura principal */
  compact?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={`@container relative ${
        compact ? "w-full" : "mx-auto w-full max-w-[280px]"
      } ${className}`}
    >
      <div className="relative rounded-[18cqw] bg-foreground p-[3.8cqw] shadow-2xl shadow-primary/30 ring-1 ring-black/20">
        {/* Botões laterais: silêncio e volume à esquerda, ligar à direita */}
        <span aria-hidden="true" className="absolute top-[18%] -left-[1cqw] h-[9.5cqw] w-[1.1cqw] rounded-l bg-foreground" />
        <span aria-hidden="true" className="absolute top-[27%] -left-[1cqw] h-[16cqw] w-[1.1cqw] rounded-l bg-foreground" />
        <span aria-hidden="true" className="absolute top-[37%] -left-[1cqw] h-[16cqw] w-[1.1cqw] rounded-l bg-foreground" />
        <span aria-hidden="true" className="absolute top-[30%] -right-[1cqw] h-[22cqw] w-[1.1cqw] rounded-r bg-foreground" />

        <div className="relative flex aspect-[9/19.5] flex-col overflow-hidden rounded-[14.5cqw] bg-white">
          {shot.comBarraDeStatus ? (
            /* A captura já tem a barra de status: só a Dynamic Island por cima */
            <span aria-hidden="true" className="absolute top-[2.8cqw] left-1/2 z-10 h-[8.3cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-black" />
          ) : (
            <div
              aria-hidden="true"
              className="relative flex h-[12.4cqw] shrink-0 items-center justify-between px-[9.6cqw] text-[4.2cqw] font-semibold text-foreground"
            >
              <span>9:41</span>
              <span className="absolute top-[2.8cqw] left-1/2 h-[8.3cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-black" />
              <span className="flex items-center gap-[1.4cqw]">
                <svg className="h-[3.4cqw] w-[5.5cqw]" viewBox="0 0 16 10" fill="currentColor">
                  <rect x="0" y="7" width="3" height="3" rx="0.7" />
                  <rect x="4.3" y="5" width="3" height="5" rx="0.7" />
                  <rect x="8.6" y="2.5" width="3" height="7.5" rx="0.7" />
                  <rect x="12.9" y="0" width="3" height="10" rx="0.7" />
                </svg>
                <svg className="h-[4.1cqw] w-[6.9cqw]" viewBox="0 0 22 12" fill="none" stroke="currentColor">
                  <rect x="0.5" y="0.5" width="18" height="11" rx="3" />
                  <rect x="2.5" y="2.5" width="12" height="7" rx="1.5" fill="currentColor" stroke="none" />
                  <path d="M20.5 4.5v3" strokeLinecap="round" />
                </svg>
              </span>
            </div>
          )}
          <Image
            src={shot.src}
            alt={shot.alt}
            sizes={compact ? "180px" : "280px"}
            {...loadProps(priority)}
            className="block min-h-0 w-full flex-1 object-cover object-top"
          />
          <div aria-hidden="true" className="flex h-[8.3cqw] shrink-0 items-center justify-center bg-white">
            <span className="h-[1.4cqw] w-[38cqw] rounded-full bg-foreground" />
          </div>
        </div>
      </div>
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
