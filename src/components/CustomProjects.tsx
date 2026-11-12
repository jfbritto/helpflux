import SectionLabel from "./SectionLabel";
import { customProjects } from "@/data/sob-medida";
import {
  CheckList,
  ExternalButton,
  PlatformBadges,
  ShotFrame,
  hostOf,
} from "./products/ProductBits";

export default function CustomProjects() {
  return (
    <section
      id="sob-medida"
      aria-labelledby="sob-medida-titulo"
      className="scroll-mt-16 bg-surface py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionLabel>Sob medida</SectionLabel>
          <h2
            id="sob-medida-titulo"
            className="mt-4 mb-4 text-3xl font-semibold md:text-4xl"
          >
            Também criamos sistemas sob medida
          </h2>
          <p className="text-lg text-muted">
            Quando o negócio pede um sistema só dele, a mesma equipe dos
            produtos desenvolve, publica e mantém. Dois exemplos no ar:
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
          {customProjects.map((project) => {
            const titleId = `sob-medida-${project.slug}`;
            const host = hostOf(project.site);

            return (
              <article
                key={project.slug}
                aria-labelledby={titleId}
                className="flex flex-col rounded-3xl border border-border bg-background p-5 sm:p-8"
              >
                <ShotFrame shot={project.shot} host={host} />

                <div className="mt-7 flex flex-1 flex-col">
                  <p className="text-xs font-semibold tracking-wider text-muted uppercase">
                    {project.segment}
                  </p>
                  <h3 id={titleId} className="mt-1.5 text-2xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-3 mb-6 leading-relaxed text-muted">
                    {project.summary}
                  </p>

                  <CheckList items={project.delivered} />

                  <div className="mt-7 border-t border-border pt-6">
                    <p className="mb-2.5 text-xs font-semibold tracking-wider text-muted uppercase">
                      Onde funciona
                    </p>
                    <PlatformBadges platforms={project.platforms} />
                    {project.platformNote && (
                      <p className="mt-2.5 text-xs leading-relaxed text-muted">
                        {project.platformNote}
                      </p>
                    )}
                  </div>

                  <div className="mt-auto pt-8">
                    <ExternalButton
                      href={project.site}
                      ariaLabel={`Acessar o site ${project.name} (abre em nova aba)`}
                    >
                      Acessar o site
                    </ExternalButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-muted">
          Tem um projeto em mente?{" "}
          <a
            href="https://wa.me/5528999743099"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline decoration-2 underline-offset-4 decoration-foreground/30 transition-colors hover:decoration-foreground"
          >
            Conte para a gente no WhatsApp
          </a>
          .
        </p>
      </div>
    </section>
  );
}
