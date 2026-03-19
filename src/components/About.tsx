const values = [
  {
    title: "Produtos próprios",
    description:
      "Não fazemos projetos sob demanda. Criamos e mantemos nossos próprios SaaS — com dedicação total.",
  },
  {
    title: "Nascidos na prática",
    description:
      "Cada produto surgiu de um problema real que vimos de perto. Código com propósito.",
  },
  {
    title: "Evolução contínua",
    description:
      "Nossos produtos crescem com os clientes. Ouvimos, iteramos e melhoramos constantemente.",
  },
  {
    title: "Ajudar é o nosso fluxo",
    description:
      "Tecnologia boa é a que some no dia a dia — ela só facilita. Não complica, não impressiona à toa.",
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
              nutricionistas e cozinhas profissionais. Vimos de perto como
              processos manuais desperdiçam tempo e energia de quem só quer
              fazer seu trabalho bem feito.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Essa experiência nos mostrou que existem negócios inteiros
              funcionando no papel, na planilha, no improviso.{" "}
              <strong className="text-foreground">
                E que a gente podia resolver isso.
              </strong>
            </p>
            <p className="text-muted leading-relaxed">
              Do HelpDiet nasceu a HelpFlux: uma <strong className="text-foreground">SaaS House</strong> que
              cria produtos digitais para diferentes segmentos — todos com a
              mesma essência de simplificar o fluxo e ajudar de verdade.
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
