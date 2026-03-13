export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-primary">
              Otimizamos o fluxo do seu negócio
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6">
            Seu negócio merece{" "}
            <span className="gradient-text">fluir melhor</span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mb-10 leading-relaxed">
            Criamos software sob medida que simplifica processos, elimina
            gargalos e faz sua operação funcionar como deveria. Nascemos
            resolvendo problemas reais — e nunca paramos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-light transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 text-center"
            >
              Vamos Conversar
            </a>
            <a
              href="#servicos"
              className="border border-border text-foreground px-8 py-4 rounded-xl text-base font-semibold hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 text-center"
            >
              O Que Fazemos
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-10 mt-16 pt-10 border-t border-border">
            {[
              { value: "50+", label: "Projetos Entregues" },
              { value: "98%", label: "Clientes Satisfeitos" },
              { value: "5+", label: "Anos de Experiência" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
