const techCategories = [
  {
    category: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Backend",
    techs: ["Node.js", "NestJS", "Python", "Go", "Java"],
  },
  {
    category: "Mobile",
    techs: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    category: "Cloud & Infra",
    techs: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform"],
  },
  {
    category: "Banco de Dados",
    techs: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
  },
  {
    category: "Ferramentas",
    techs: ["Git", "CI/CD", "Figma", "Jira", "Sentry"],
  },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Tecnologias
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 tracking-tight">
            Stack moderna para resultados excepcionais
          </h2>
          <p className="text-muted text-lg">
            Escolhemos a tecnologia certa para cada projeto, garantindo
            performance, escalabilidade e manutenibilidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="p-6 rounded-2xl bg-background border border-border"
            >
              <h3 className="font-semibold text-sm text-primary uppercase tracking-wider mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary/5 text-foreground text-sm rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-primary/10 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
