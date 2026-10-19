import SectionLabel from "./SectionLabel";
import { FlowDots } from "./Logo";
import { getProduct } from "@/data/products";
import { ProductLogo } from "./products/ProductBits";
import {
  LinkIcon,
  PhoneIcon,
  ReceiptIcon,
  ShieldIcon,
  SparkIcon,
} from "./icons";

/*
 * Só o que foi conferido nos repositórios ou nos sites dos produtos.
 * Cada item diz onde já está em uso, porque nem tudo vale para todos.
 */
const items = [
  {
    icon: ReceiptIcon,
    title: "Cobrança e nota fiscal integradas",
    text: "A assinatura é cobrada de forma recorrente pelo Asaas, com boleto, Pix ou cartão, conforme o produto. No Hotel em Dia, no HelpDiet e no TreinaEdu, a nota fiscal eletrônica sai pelo próprio sistema, ligada ao pagamento.",
    usedIn: ["Hotel em Dia", "HelpDiet", "TreinaEdu", "HelpCheck", "BeautyMetrics"],
  },
  {
    icon: PhoneIcon,
    title: "Apps para iOS e Android",
    text: "Apps nativos feitos com Expo, a partir da mesma base. No Hotel em Dia e no HelpCheck, o app guarda o trabalho feito sem internet e envia quando a conexão volta. O do TreinaEdu está na App Store e no Google Play.",
    usedIn: ["Hotel em Dia", "TreinaEdu", "HelpCheck"],
  },
  {
    icon: ShieldIcon,
    title: "Segurança e LGPD",
    text: "Cada produto publica a sua política de privacidade, conforme a LGPD, e funciona sempre por conexão segura. No Hotel em Dia, no HelpDiet, no TreinaEdu, no HelpCheck e no BeautyMetrics, os dados de cada empresa ficam isolados dos das outras.",
    usedIn: ["Todos os produtos"],
  },
  {
    icon: SparkIcon,
    title: "IA que sugere, pessoa que decide",
    text: "Onde há inteligência artificial, ela lê documentos, monta rascunhos e propõe ações, mas nada é gravado ou publicado sem a revisão de uma pessoa.",
    usedIn: ["Hotel em Dia", "TreinaEdu", "HelpCheck"],
  },
];

export default function CommonGround() {
  const helpdiet = getProduct("helpdiet")!;
  const hotelEmDia = getProduct("hotel-em-dia")!;

  return (
    <section
      id="em-comum"
      aria-labelledby="em-comum-titulo"
      className="relative scroll-mt-16 overflow-hidden py-20 md:py-28"
    >
      <div className="absolute inset-0 dot-grid fade-edges" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionLabel>Base comum</SectionLabel>
          <h2
            id="em-comum-titulo"
            className="mt-4 mb-4 text-3xl font-semibold md:text-4xl"
          >
            O que os produtos têm em comum
          </h2>
          <p className="text-lg text-muted">
            A mesma equipe cuida de todos os produtos e leva para os outros o
            que dá certo em um. Em cada item, os produtos em que ele já está em
            uso.
          </p>
        </div>

        {/* Integração entre produtos */}
        <div className="relative mb-6 overflow-hidden rounded-3xl bg-foreground p-6 text-white sm:p-10 lg:p-12">
          <div className="absolute inset-0 dot-grid-light" aria-hidden="true" />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/80">
                <LinkIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 mb-3 text-2xl font-semibold sm:text-3xl">
                Produtos que conversam entre si
              </h3>
              <p className="leading-relaxed text-white/75">
                O HelpDiet e o Hotel em Dia são integrados. Com a autorização da
                empresa, os indicadores de segurança dos alimentos registrados
                na cozinha aparecem no painel de cada hotel. Só saem números
                agregados, sem nomes de pessoas nem registros individuais.
              </p>
            </div>

            <div
              className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center"
              aria-label="O HelpDiet envia indicadores ao Hotel em Dia, com autorização da empresa"
              role="img"
            >
              <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white/10 p-4">
                <ProductLogo product={helpdiet} />
                <div>
                  <p className="font-semibold">HelpDiet</p>
                  <p className="text-sm text-white/70">A cozinha registra</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1 text-white/70 sm:px-1">
                <FlowDots className="rotate-90 text-lg sm:rotate-0" />
                <span className="text-[11px] font-semibold tracking-wider uppercase">
                  Com autorização
                </span>
              </div>
              <div className="flex flex-1 items-center gap-3 rounded-2xl bg-white/10 p-4">
                <ProductLogo product={hotelEmDia} />
                <div>
                  <p className="font-semibold">Hotel em Dia</p>
                  <p className="text-sm text-white/70">O hotel acompanha</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text, usedIn }) => (
            <div
              key={title}
              className="flex flex-col rounded-3xl border border-border bg-surface p-6"
            >
              <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mb-2 font-semibold">{title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-muted">{text}</p>
              <p className="mt-auto border-t border-border pt-4 text-xs leading-relaxed text-muted">
                <span className="font-semibold text-foreground">Em uso: </span>
                {usedIn.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
