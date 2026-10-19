"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import type { NavProduct } from "./Navbar";

const navLinks = [
  { label: "Em comum", href: "/#em-comum" },
  { label: "Sobre", href: "/#sobre" },
  { label: "Contato", href: "/#contato" },
];

const WHATSAPP = "https://wa.me/5528999743099";

/** Logo pequena, sem depender dos dados completos do produto */
function NavLogo({ item, size }: { item: NavProduct; size: "sm" | "md" }) {
  const box = size === "md" ? "h-10 w-10 rounded-xl" : "h-8 w-8 rounded-lg";
  if (item.logoKind === "tile") {
    return <Image src={item.logo} alt="" className={`${box} shrink-0`} />;
  }
  return (
    <span className={`${box} inline-flex shrink-0 items-center justify-center border border-border bg-white`}>
      <Image src={item.logo} alt="" className="h-3/4 w-3/4 object-contain" />
    </span>
  );
}

export default function NavbarClient({ products }: { products: NavProduct[] }) {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fecha o menu de produtos ao clicar fora ou apertar Esc
  useEffect(() => {
    if (!productsOpen) return;
    function onClick(e: MouseEvent) {
      if (!menuRef.current?.contains(e.target as Node)) setProductsOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setProductsOpen(false);
    }
    document.addEventListener("click", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [productsOpen]);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 glass" aria-label="Principal">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          aria-label="HelpFlux, página inicial"
          className="inline-flex min-h-11 items-center"
        >
          <Logo size={34} />
        </Link>

        {/* Computador */}
        <div className="hidden items-center gap-7 md:flex">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
              aria-controls="menu-produtos"
              className="inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              Produtos
              <svg
                className={`h-4 w-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
              </svg>
            </button>

            {productsOpen && (
              <div
                id="menu-produtos"
                className="absolute top-full left-1/2 mt-2 w-[min(640px,90vw)] -translate-x-1/2 rounded-3xl border border-border bg-surface p-3 shadow-2xl shadow-primary/10"
              >
                <ul className="grid grid-cols-2 gap-1">
                  {products.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={p.href}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-start gap-3 rounded-2xl p-3 transition-colors hover:bg-background"
                      >
                        <NavLogo item={p} size="md" />
                        <span>
                          <span className="block text-sm font-semibold text-foreground">
                            {p.name}
                          </span>
                          <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-muted">
                            {p.tagline}
                          </span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#produtos"
                  onClick={() => setProductsOpen(false)}
                  className="mt-2 flex min-h-11 items-center justify-center rounded-2xl bg-background text-sm font-semibold text-foreground hover:bg-highlight"
                >
                  Ver todos os produtos
                </Link>
              </div>
            )}
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-primary px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-primary-light"
          >
            Fale Conosco
          </a>
        </div>

        {/* Celular */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-celular"
        >
          <svg
            className="h-6 w-6 text-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="menu-celular"
          className="max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-border px-4 pb-5 md:hidden"
        >
          <p className="pt-4 pb-1 text-xs font-semibold tracking-wider text-muted uppercase">
            Produtos
          </p>
          <ul>
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={p.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center gap-3 py-1.5 text-sm font-medium text-foreground"
                >
                  <NavLogo item={p} size="sm" />
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 border-t border-border pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-white"
          >
            Fale Conosco
          </a>
        </div>
      )}
    </nav>
  );
}
