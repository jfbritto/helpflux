const values = [
  {
    title: "Empatia",
    description: "Antes de qualquer código, a gente escuta. Entender a dor real é o primeiro passo.",
  },
  {
    title: "Fluidez",
    description: "Processos travados viram fluxos otimizados. Menos atrito, mais resultado.",
  },
  {
    title: "Confiança",
    description: "Entregas transparentes, prazos respeitados e comunicação sem ruído.",
  },
  {
    title: "Evolução",
    description: "Seu software cresce com o negócio. Construímos pensando no hoje e no amanhã.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 grid-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Nossa história
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6 tracking-tight">
              Nascemos na cozinha.{" "}
              <span className="text-primary">Literalmente.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Tudo começou com o{" "}
              <a
                href="https://helpdiet.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold hover:underline"
              >
                HelpDiet
              </a>
              {" "}— uma plataforma de segurança dos alimentos para
              nutricionistas e cozinhas profissionais. Fichas técnicas digitais,
              controle de validade, planilhas automáticas. Vimos de perto como
              processos manuais desperdiçam tempo e energia de quem só quer
              fazer seu trabalho bem feito.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Essa experiência nos ensinou algo que carregamos até hoje:{" "}
              <strong className="text-foreground">
                tecnologia boa é a que some no dia a dia — ela só facilita.
              </strong>{" "}
              Não complica, não impressiona à toa. Funciona.
            </p>
            <p className="text-muted leading-relaxed">
              Do HelpDiet nasceu a HelpFlux: uma software house completa, com a
              mesma essência — ajudar empresas a fazerem seus fluxos funcionarem
              melhor.
            </p>
          </div>

          {/* Right - Values */}
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((value, i) => (
              <div
                key={value.title}
                className="glass rounded-2xl p-6 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary font-bold text-sm">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
