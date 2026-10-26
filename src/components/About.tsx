import aboutImage from "../assets/sobre-growth.jpg";
import { SITE, whatsappLink } from "../lib/site";
import {
  ArrowUpRight,
  ChartIcon,
  GoogleIcon,
  HandshakeIcon,
  ShieldIcon,
  SparkleIcon,
  StarIcon,
  WhatsAppIcon,
} from "./icons";

const pillars = [
  {
    icon: ChartIcon,
    title: "Contabilidade consultiva",
    text: "Informação contábil traduzida em decisões para o seu negócio.",
  },
  {
    icon: HandshakeIcon,
    title: "Confiança e proximidade",
    text: "Um time que conhece a sua empresa e acompanha de perto.",
  },
  {
    icon: ShieldIcon,
    title: "Crescimento com segurança",
    text: "Rigor técnico e conformidade em cada etapa da jornada.",
  },
];

const stats = [
  { value: SITE.googleRating, label: "Nota no Google", detail: "5 estrelas · avaliação dos clientes" },
  { value: SITE.googleReviews, label: "Avaliações", detail: "no Google" },
  { value: "05", label: "Frentes de atuação", detail: "soluções para sua empresa" },
];

export default function About() {
  return (
    <section id="sobre" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-brand-50/80 blur-3xl" aria-hidden="true" />
      <div className="dot-grid pointer-events-none absolute right-8 top-24 hidden h-40 w-48 opacity-60 lg:block" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 xl:gap-20">
          {/* Visual */}
          <div className="reveal relative mx-auto w-full max-w-[480px] lg:mx-0">
            <div className="absolute -left-3 -top-3 h-32 w-32 rounded-tl-[32px] border-l border-t border-mint-500/40 sm:-left-5 sm:-top-5 sm:h-40 sm:w-40" aria-hidden="true" />
            <div className="absolute -bottom-4 -right-4 h-40 w-40 rounded-full bg-mint-100/60 blur-2xl" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[26px] bg-navy-900 shadow-[0_40px_80px_-40px_rgba(6,27,46,0.45)] ring-1 ring-navy-900/5">
              <img
                src={aboutImage}
                alt="Profissionais analisando documentos e informações em um escritório moderno"
                width={1200}
                height={1400}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/5 to-transparent" aria-hidden="true" />

              <div className="absolute inset-x-5 bottom-5 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-xl">
                <div className="flex items-center gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-white/95">
                    <GoogleIcon size={17} />
                  </span>
                  <div>
                    <p className="font-display text-[12px] font-semibold leading-tight text-white">
                      Avaliação no Google
                    </p>
                    <p className="mt-0.5 text-[10px] text-white/60">Reconhecimento de quem confia</p>
                  </div>
                </div>
                <a
                  href={SITE.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-navy-900 transition-transform hover:scale-[1.03]"
                  aria-label={`${SITE.googleRating} de 5 estrelas, ${SITE.googleReviews} avaliações no Google`}
                >
                  <span className="font-display text-[12.5px] font-bold">{SITE.googleRating}</span>
                  <span className="flex gap-px text-star">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} size={9} />
                    ))}
                  </span>
                </a>
              </div>
            </div>

            <div className="float-slow absolute -right-2 top-6 flex items-center gap-2.5 rounded-2xl border border-navy-900/[0.06] bg-white px-3.5 py-3 shadow-[0_20px_50px_-24px_rgba(6,27,46,0.4)] sm:-right-5 sm:top-10">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-navy-900 text-mint-400">
                <SparkleIcon size={16} />
              </span>
              <div>
                <p className="font-display text-[10.5px] font-semibold leading-tight text-navy-900">
                  Visão estratégica
                </p>
                <p className="mt-0.5 text-[9.5px] text-navy-900/45">Além da obrigação contábil</p>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="eyebrow reveal text-brand-600">Sobre a Growth</p>
            <h2
              className="reveal mt-5 font-display text-[1.95rem] font-semibold leading-[1.13] tracking-[-0.04em] text-navy-900 sm:text-[2.45rem] lg:text-[2.6rem]"
              style={{ transitionDelay: "70ms" }}
            >
              Contabilidade que enxerga{" "}
              <span className="relative whitespace-nowrap text-brand-600">
                além dos números.
                <span className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-mint-400/70" />
              </span>
            </h2>

            <div className="reveal mt-6 space-y-4 text-[14.5px] leading-[1.8] text-navy-900/60 sm:text-[15px]" style={{ transitionDelay: "130ms" }}>
              <p>
                A Growth Contabilidade é uma parceira estratégica para empresas que querem
                crescer com organização, clareza e segurança. Unimos o rigor técnico da
                contabilidade a uma visão prática do negócio.
              </p>
              <p>
                Nosso trabalho vai além de cumprir obrigações: organizamos informações,
                antecipamos cenários e ajudamos você a tomar decisões melhores. Com atendimento
                próximo e tecnologia, a contabilidade deixa de ser burocracia e passa a impulsionar
                resultados.
              </p>
            </div>

            <ul className="reveal mt-8 space-y-5" style={{ transitionDelay: "200ms" }}>
              {pillars.map((pillar) => (
                <li key={pillar.title} className="flex gap-4">
                  <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-navy-900/[0.07] bg-cloud text-brand-600">
                    <pillar.icon size={19} />
                  </span>
                  <div>
                    <p className="font-display text-[13.5px] font-semibold text-navy-900">
                      {pillar.title}
                    </p>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-navy-900/50">{pillar.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row sm:items-center" style={{ transitionDelay: "260ms" }}>
              <a
                href={whatsappLink("Olá, Growth! Quero conhecer melhor o trabalho de vocês.")}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy-900 px-6 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-navy-800 hover:shadow-[0_16px_36px_-16px_rgba(6,27,46,0.6)]"
              >
                <WhatsAppIcon size={17} className="text-mint-400" />
                Conversar com a Growth
                <ArrowUpRight size={15} className="text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#servicos" className="group inline-flex items-center gap-2 text-[12.5px] font-semibold text-navy-900/60 transition-colors hover:text-navy-900">
                Ver serviços
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal mt-16 grid grid-cols-1 divide-y divide-navy-900/10 rounded-2xl border border-navy-900/10 bg-cloud/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0 lg:mt-20">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-4 px-6 py-6 sm:flex-col sm:items-start sm:gap-1.5 sm:px-8 sm:py-7">
              <p className="font-display text-[2rem] font-semibold leading-none tracking-[-0.05em] text-navy-900 sm:text-[2.15rem]">
                {stat.value}
              </p>
              <div>
                <p className="text-[12px] font-semibold text-navy-900">{stat.label}</p>
                <p className="mt-0.5 text-[10.5px] font-medium uppercase tracking-[0.1em] text-navy-900/35">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
