export default function CTA() {
  return (
    <section id="contato" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Tem um fluxo que trava? A gente resolve.
            </h2>
            <p className="text-green-100 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Conta pra gente o que tá travando no seu negócio. Vamos entender
              juntos e construir a solução certa — sem enrolação.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:helpflux.atendimento@gmail.com"
                className="bg-white text-primary px-8 py-4 rounded-xl text-base font-semibold hover:bg-green-50 transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                helpflux.atendimento@gmail.com
              </a>
              <a
                href="https://wa.me/5528999743099"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur text-white border border-white/20 px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/20 transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.67-1.22A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.347 0-4.518-.806-6.235-2.156l-.258-.206-3.12.816.854-3.012-.226-.267A9.946 9.946 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
