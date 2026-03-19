const products = [
  {
    name: "HelpDiet",
    tagline: "Segurança alimentar digital",
    description:
      "Plataforma para nutricionistas e cozinhas profissionais. Fichas técnicas, controle de validade, planilhas automáticas e rastreabilidade completa dos alimentos.",
    href: "https://helpdiet.com.br",
    color: "bg-emerald-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    segments: ["Nutricionistas", "Cozinhas industriais", "Hotéis"],
  },
  {
    name: "BeautyMetrics",
    tagline: "Gestão financeira para beleza",
    description:
      "Sistema de gestão financeira pensado para profissionais da beleza. Controle de caixa, agendamentos, relatórios e métricas do seu negócio em um só lugar.",
    href: "https://beautymetrics.com.br",
    color: "bg-pink-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    segments: ["Salões de beleza", "Barbearias", "Clínicas estéticas"],
  },
  {
    name: "TakeTicket",
    tagline: "Organize. Venda. Gerencie.",
    description:
      "Plataforma completa de ingressos online. Criação de eventos, venda de tickets, check-in por QR Code e dashboard em tempo real para organizadores.",
    href: "https://taketicket.com.br",
    color: "bg-violet-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    segments: ["Produtores de eventos", "Casas de shows", "Festas"],
  },
  {
    name: "TreinaEdu",
    tagline: "Treine sua equipe. Certifique com segurança.",
    description:
      "Plataforma de treinamentos corporativos com videoaulas, quizzes, certificados automáticos e acompanhamento de progresso por equipe.",
    href: "https://treinaedu.com.br",
    color: "bg-sky-500",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
      </svg>
    ),
    segments: ["Empresas", "RH", "Educação corporativa"],
  },
];

export default function Products() {
  return (
    <section id="produtos" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Nossos Produtos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 tracking-tight">
            Soluções prontas para diferentes segmentos
          </h2>
          <p className="text-muted text-lg">
            Cada produto nasceu de uma dor real. Criamos, mantemos e evoluímos
            plataformas SaaS que resolvem problemas específicos de cada mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className={`w-14 h-14 rounded-2xl ${product.color} text-white flex items-center justify-center shrink-0`}
                >
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {product.tagline}
                  </p>
                </div>
              </div>

              <p className="text-muted leading-relaxed text-sm mb-5">
                {product.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {product.segments.map((seg) => (
                  <span
                    key={seg}
                    className="px-3 py-1 bg-primary/5 text-muted text-xs rounded-full border border-primary/10"
                  >
                    {seg}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Acessar plataforma
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Em breve */}
        <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-border text-center">
          <p className="text-muted text-sm">
            <span className="text-foreground font-semibold">Em breve</span>{" "}
            — Novos produtos em desenvolvimento. Estamos sempre criando
            soluções para novos segmentos.
          </p>
        </div>
      </div>
    </section>
  );
}
