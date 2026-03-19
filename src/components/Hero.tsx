export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">
              SaaS House — Produtos digitais que funcionam
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            Criamos SaaS que{" "}
            <span className="gradient-text">simplificam negócios</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            Nascemos na prática, resolvendo problemas reais. Hoje mantemos
            produtos próprios que otimizam o fluxo de empresas em diferentes
            segmentos — da cozinha ao palco, da clínica à sala de aula.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#produtos"
              className="bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-light transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 text-center"
            >
              Conheça Nossos Produtos
            </a>
            <a
              href="https://wa.me/5528999743099"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-border text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 text-center inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.22A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.806-6.235-2.156l-.258-.206-3.12.816.854-3.012-.226-.267A9.946 9.946 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
              </svg>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
