import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white/70">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <Logo variant="white" size={28} />
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-4">
              Ajudamos empresas a otimizarem o fluxo do seu negócio com
              software sob medida que simplifica processos e gera resultados.
            </p>
            <div className="text-xs text-white/40 space-y-1">
              <p>HELPFLUX SOLUÇÕES EM TECNOLOGIA LTDA</p>
              <p>CNPJ: 58.063.432/0001-21</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Serviços", href: "#servicos" },
                { label: "Sobre", href: "#sobre" },
                { label: "Tecnologias", href: "#tecnologias" },
                { label: "Contato", href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:helpflux.atendimento@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  helpflux.atendimento@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5528999743099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  (28) 99974-3099
                </a>
              </li>
              <li className="pt-1 text-white/50">
                Rua Henrique João Júlio Kuster, 452
                <br />
                Santa Maria de Jetibá – ES
                <br />
                CEP 29645-234
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} HelpFlux Soluções em Tecnologia
              LTDA. Todos os direitos reservados.
            </p>
            <div className="flex gap-3 text-xs">
              <a
                href="/termos-de-uso"
                className="text-white/40 hover:text-white transition-colors"
              >
                Termos de Uso
              </a>
              <span className="text-white/20">|</span>
              <a
                href="/politica-de-privacidade"
                className="text-white/40 hover:text-white transition-colors"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="https://wa.me/5528999743099"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.22A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.806-6.235-2.156l-.258-.206-3.12.816.854-3.012-.226-.267A9.946 9.946 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
            </a>
            <a
              href="mailto:helpflux.atendimento@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://instagram.com/helpflux"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
