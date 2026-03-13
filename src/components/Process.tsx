const steps = [
  {
    step: "01",
    title: "Descoberta",
    description:
      "Entendemos seu negócio, objetivos e desafios. Mapeamos requisitos e definimos o escopo do projeto.",
  },
  {
    step: "02",
    title: "Planejamento",
    description:
      "Definimos arquitetura, tecnologias e cronograma. Criamos protótipos e validamos com stakeholders.",
  },
  {
    step: "03",
    title: "Desenvolvimento",
    description:
      "Sprints ágeis com entregas incrementais. Code review, testes automatizados e integração contínua.",
  },
  {
    step: "04",
    title: "Entrega e Suporte",
    description:
      "Deploy, monitoramento e suporte contínuo. Iteramos com base em métricas e feedback real.",
  },
];

export default function Process() {
  return (
    <section className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Processo
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 tracking-tight">
            Como trabalhamos
          </h2>
          <p className="text-muted text-lg">
            Um processo estruturado e transparente do início ao fim.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, i) => (
            <div key={item.step} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-3 z-0" />
              )}
              <div className="relative z-10 p-6 rounded-2xl bg-surface border border-border hover:border-primary/20 transition-colors duration-300">
                <span className="text-3xl font-bold text-primary/20">
                  {item.step}
                </span>
                <h3 className="text-lg font-semibold mt-3 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
