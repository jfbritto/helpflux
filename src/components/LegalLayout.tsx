import Logo from "./Logo";

export default function LegalLayout({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-surface">
        <div className="max-w-4xl mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/">
            <Logo size={28} />
          </a>
          <a
            href="/"
            className="text-sm text-muted hover:text-primary transition-colors"
          >
            Voltar ao site
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1
          className="text-3xl md:text-4xl font-bold tracking-tight mb-2"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h1>
        <p className="text-sm text-muted mb-10">
          Última atualização: {lastUpdated}
        </p>

        <div className="prose prose-slate max-w-none [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:text-muted [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-muted [&_ul]:leading-relaxed [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2 [&_strong]:text-foreground [&_a]:text-primary [&_a]:hover:underline">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} HelpFlux Soluções em Tecnologia
            LTDA — CNPJ 58.063.432/0001-21
          </p>
        </div>
      </footer>
    </div>
  );
}
