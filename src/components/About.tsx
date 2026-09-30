import SectionLabel from "./SectionLabel";

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
    <section id="sobre" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 dot-grid fade-edges" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <SectionLabel>Nossa história</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6">
              Nascemos na cozinha.{" "}
              <span className="highlight">Literalmente.</span>
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-6">
              Tudo começou com o{" "}
              <a
                href="https://helpdiet.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-semibold underline decoration-2 underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
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
                className="bg-surface border border-border rounded-3xl p-6 hover:border-foreground/40 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center mb-4">
                  <span className="font-display text-foreground font-semibold text-sm">
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
