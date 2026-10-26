import { SITE, whatsappLink } from "../lib/site";
import {
  ArrowUpRight,
  CpuIcon,
  GoogleIcon,
  HandshakeIcon,
  LockIcon,
  StarIcon,
  TargetIcon,
  WhatsAppIcon,
} from "./icons";

const items = [
  {
    number: "01",
    icon: HandshakeIcon,
    title: "Atendimento próximo",
    text: "Você fala com pessoas que conhecem a sua empresa, acompanham a sua rotina e estão por perto para ajudar.",
  },
  {
    number: "02",
    icon: TargetIcon,
    title: "Visão estratégica",
    text: "Enxergamos a contabilidade além da obrigação: cada informação é um apoio para a decisão do seu negócio.",
  },
  {
    number: "03",
    icon: CpuIcon,
    title: "Tecnologia",
    text: "Processos digitais e informações organizadas para uma relação mais ágil, prática e transparente.",
  },
  {
    number: "04",
    icon: LockIcon,
    title: "Segurança",
    text: "Rigor técnico e confidencialidade em cada etapa, para que você cresça com tranquilidade.",
  },
];

const steps = [
  { number: "01", title: "Conversa inicial", text: "Entendemos o seu momento." },
  { number: "02", title: "Diagnóstico e plano", text: "Organizamos o caminho." },
  { number: "03", title: "Acompanhamento", text: "Crescemos junto." },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative scroll-mt-24 overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,_rgba(31,107,242,0.18),_transparent_55%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_80%,_rgba(18,185,129,0.16),_transparent_50%)]" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_85%)]" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="eyebrow reveal text-mint-300">Por que a Growth</p>
            <h2
              className="reveal mt-5 max-w-[430px] font-display text-[1.95rem] font-semibold leading-[1.13] tracking-[-0.04em] sm:text-[2.45rem] lg:text-[2.55rem]"
              style={{ transitionDelay: "70ms" }}
            >
              Um jeito diferente de cuidar da sua{" "}
              <span className="text-mint-300">contabilidade.</span>
            </h2>
            <p className="reveal mt-5 max-w-[410px] text-[14px] leading-[1.8] text-white/55 sm:text-[14.5px]" style={{ transitionDelay: "130ms" }}>
              Técnica e proximidade caminham juntas. Na Growth, o seu negócio é acompanhado por
              quem entende que cada número representa uma decisão — e cada decisão, uma
              oportunidade de crescer.
            </p>

            <div className="reveal mt-8" style={{ transitionDelay: "190ms" }}>
              <a
                href={whatsappLink("Olá, Growth! Quero conhecer o atendimento de vocês.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[13px] font-bold text-navy-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-400"
              >
                <WhatsAppIcon size={17} />
                Quero falar com a Growth
                <ArrowUpRight size={15} className="text-navy-900/45 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="reveal mt-8 inline-flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/[0.04] py-3 pl-3.5 pr-5 backdrop-blur-sm" style={{ transitionDelay: "240ms" }}>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-white">
                <GoogleIcon size={17} />
              </span>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-[14px] font-bold text-white">{SITE.googleRating}</span>
                  <span className="flex gap-px text-star">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} size={10} />
                    ))}
                  </span>
                </div>
                <p className="mt-0.5 text-[10px] font-medium text-white/45">
                  {SITE.googleReviews} avaliações no Google
                </p>
              </div>
              <a
                href={SITE.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver avaliações no Google"
                className="ml-1 grid h-7 w-7 place-items-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/40 hover:text-white"
              >
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <article
                key={item.number}
                className="reveal group relative overflow-hidden rounded-[20px] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-sm transition-all duration-400 hover:-translate-y-1 hover:border-mint-400/30 hover:bg-white/[0.06]"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-mint-400/0 blur-2xl transition-colors duration-500 group-hover:bg-mint-400/10" aria-hidden="true" />
                <div className="relative flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.05] text-mint-300 transition-colors duration-300 group-hover:bg-mint-400 group-hover:text-navy-950">
                    <item.icon size={21} />
                  </span>
                  <span className="font-display text-[10.5px] tracking-[0.16em] text-white/25">
                    {item.number}
                  </span>
                </div>
                <h3 className="relative mt-6 font-display text-[15px] font-semibold tracking-[-0.01em] text-white">
                  {item.title}
                </h3>
                <p className="relative mt-2 text-[12.5px] leading-relaxed text-white/50">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Journey */}
        <div className="reveal mt-16 border-t border-white/10 pt-8 lg:mt-20">
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-0">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-3.5 sm:px-5 sm:first:pl-0 sm:last:pr-0">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-mint-400/25 bg-mint-400/10 font-display text-[10px] font-semibold text-mint-300">
                  {step.number}
                </span>
                <div>
                  <p className="font-display text-[12px] font-semibold text-white/85">{step.title}</p>
                  <p className="mt-0.5 text-[11px] text-white/40">{step.text}</p>
                </div>
                {index < steps.length - 1 && (
                  <span className="ml-auto hidden h-px w-8 bg-gradient-to-r from-white/20 to-transparent sm:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
