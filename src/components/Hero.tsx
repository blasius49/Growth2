import { SITE, whatsappLink } from "../lib/site";
import {
  ArrowDown,
  ArrowUpRight,
  CheckIcon,
  GoogleIcon,
  ShieldIcon,
  StarIcon,
  TargetIcon,
  WhatsAppIcon,
} from "./icons";

function Stars({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`flex items-center gap-0.5 ${className}`} aria-label="5 de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} size={size} />
      ))}
    </span>
  );
}

function DashboardMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
      {/* Decorative rings */}
      <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/[0.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-8 -top-10 h-40 w-40 rounded-full border border-mint-400/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-14 -left-10 h-52 w-52 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />

      <div className="relative rounded-[26px] border border-white/10 bg-white p-4 text-navy-900 shadow-[0_45px_120px_-35px_rgba(0,0,0,0.75)] sm:p-5">
        {/* Card head */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-navy-900">
              <svg viewBox="0 0 40 40" className="h-5 w-5" fill="none" aria-hidden="true">
                <path
                  d="M31 12.5A13.5 13.5 0 1 0 33.5 20v-2.4h-9"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="20" r="3.1" fill="#3ED9A2" />
              </svg>
            </span>
            <div>
              <p className="font-display text-[12.5px] font-semibold leading-tight text-navy-900">
                Painel financeiro
              </p>
              <p className="mt-0.5 text-[10px] font-medium text-navy-900/45">Visão consolidada da empresa</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint-50 px-2.5 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.08em] text-mint-700 ring-1 ring-mint-500/15">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-500" />
            Em dia
          </span>
        </div>

        {/* Revenue */}
        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.16em] text-navy-900/40">
              Receita bruta
            </p>
            <p className="mt-1.5 font-display text-[25px] font-semibold tracking-[-0.04em] text-navy-900 sm:text-[29px]">
              R$ 186.420<span className="text-navy-900/35">,00</span>
            </p>
          </div>
          <span className="mb-1 inline-flex items-center gap-1 rounded-lg bg-mint-50 px-2 py-1 text-[11px] font-bold text-mint-700">
            <ArrowUpRight size={12} strokeWidth={2.4} />
            18,2%
          </span>
        </div>

        {/* Chart */}
        <div className="relative mt-4">
          <svg
            viewBox="0 0 400 152"
            className="h-[142px] w-full overflow-visible sm:h-[158px]"
            role="img"
            aria-label="Gráfico ilustrativo de evolução da receita"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#12B981" stopOpacity="0.26" />
                <stop offset="100%" stopColor="#12B981" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="chartStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1F6BF2" />
                <stop offset="100%" stopColor="#12B981" />
              </linearGradient>
            </defs>
            {[26, 66, 106, 146].map((y) => (
              <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#0A2740" strokeOpacity="0.07" strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
            ))}
            <path
              className="chart-area"
              d="M0 116 C24 110 38 118 58 102 C78 86 94 94 114 86 C134 78 148 88 168 70 C188 52 204 64 224 56 C244 48 258 60 278 40 C298 22 314 36 334 24 C354 12 374 20 398 8 L398 152 L0 152 Z"
              fill="url(#chartFill)"
            />
            <path
              className="chart-line"
              pathLength={1}
              d="M0 116 C24 110 38 118 58 102 C78 86 94 94 114 86 C134 78 148 88 168 70 C188 52 204 64 224 56 C244 48 258 60 278 40 C298 22 314 36 334 24 C354 12 374 20 398 8"
              fill="none"
              stroke="url(#chartStroke)"
              strokeWidth="2.6"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
            <circle cx="398" cy="8" r="4.5" fill="#12B981" stroke="white" strokeWidth="2.5" />
            <circle cx="398" cy="8" r="9" fill="#12B981" fillOpacity="0.14" />
          </svg>

          <div className="mt-2 flex justify-between px-0.5 text-[9px] font-medium uppercase tracking-[0.1em] text-navy-900/35">
            {["Fev", "Mar", "Abr", "Mai", "Jun", "Jul"].map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>

          <div className="absolute -top-1 right-[6%] rounded-lg bg-navy-900 px-2.5 py-1.5 text-center shadow-lg">
            <p className="text-[8px] font-semibold uppercase tracking-[0.1em] text-white/50">Julho</p>
            <p className="text-[11px] font-bold leading-tight text-mint-300">R$ 186,4 mil</p>
          </div>
        </div>

        {/* Mini stats */}
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          <div className="rounded-xl border border-navy-900/[0.07] bg-cloud/70 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-navy-900/40">
                Margem
              </p>
              <span className="grid h-5 w-5 place-items-center rounded-md bg-brand-50 text-brand-600">
                <ArrowUpRight size={11} strokeWidth={2.4} />
              </span>
            </div>
            <p className="mt-1.5 font-display text-[17px] font-semibold leading-none tracking-tight">
              38,4<span className="text-[11px] text-navy-900/40">%</span>
            </p>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-navy-900/8">
              <div className="bar-rise h-full w-[76%] rounded-full bg-gradient-to-r from-brand-500 to-brand-400" />
            </div>
          </div>
          <div className="rounded-xl border border-navy-900/[0.07] bg-cloud/70 p-3">
            <div className="flex items-center justify-between">
              <p className="text-[9.5px] font-semibold uppercase tracking-[0.1em] text-navy-900/40">
                Tributos
              </p>
              <span className="grid h-5 w-5 place-items-center rounded-md bg-mint-50 text-mint-600">
                <CheckIcon size={11} strokeWidth={2.6} />
              </span>
            </div>
            <p className="mt-1.5 font-display text-[17px] font-semibold leading-none tracking-tight">
              Em dia
            </p>
            <p className="mt-2 flex items-center gap-1 text-[9px] font-medium text-mint-700">
              <span className="h-1 w-1 rounded-full bg-mint-500" />
              Obrigações organizadas
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-navy-900/[0.06] pt-2.5">
          <p className="text-[8.5px] font-medium uppercase tracking-[0.14em] text-navy-900/30">
            Painel ilustrativo
          </p>
          <p className="flex items-center gap-1 text-[8.5px] font-medium text-navy-900/35">
            <ShieldIcon size={10} className="text-mint-600" /> Dados protegidos
          </p>
        </div>
      </div>

      {/* Floating card — tax planning */}
      <div className="float-slow absolute -right-1 -top-7 flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/95 p-2.5 pr-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)] backdrop-blur sm:-right-6 sm:-top-9 sm:gap-3 sm:p-3 sm:pr-5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-mint-50 text-mint-600 ring-1 ring-mint-500/15 sm:h-9 sm:w-9">
          <TargetIcon size={17} />
        </span>
        <div>
          <p className="font-display text-[10.5px] font-semibold leading-tight text-navy-900 sm:text-[11.5px]">
            Planejamento tributário
          </p>
          <p className="mt-0.5 text-[9px] font-medium text-navy-900/45 sm:text-[10px]">
            Análise e estratégia
          </p>
        </div>
      </div>

      {/* Floating card — compliance */}
      <div className="float-slower absolute -bottom-8 -left-1 flex items-center gap-2.5 rounded-2xl border border-white/60 bg-white/95 p-2.5 pr-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.55)] backdrop-blur sm:-bottom-9 sm:-left-7 sm:gap-3 sm:p-3 sm:pr-5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-500/10 sm:h-9 sm:w-9">
          <ShieldIcon size={17} />
        </span>
        <div>
          <p className="font-display text-[10.5px] font-semibold leading-tight text-navy-900 sm:text-[11.5px]">
            Empresa em conformidade
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[9px] font-medium text-mint-700 sm:text-[10px]">
            <CheckIcon size={9} strokeWidth={3} /> Contabilidade em ordem
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-navy-950 text-white">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(31,107,242,0.24),_transparent_55%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_85%_20%,_rgba(18,185,129,0.16),_transparent_48%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(4,18,31,0)_40%,rgba(4,18,31,0.85)_100%)]" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-brand-600/25 blur-[110px]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-mint-500/10 blur-[130px]" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid items-center gap-16 pb-16 pt-12 sm:pb-20 sm:pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 lg:pb-[104px] lg:pt-20 xl:gap-16">
          {/* Copy */}
          <div className="max-w-[600px]">
            <div className="reveal inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.045] py-1.5 pl-2.5 pr-4 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="pulse-dot relative inline-flex h-2 w-2 rounded-full bg-mint-400 text-mint-400" />
              </span>
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-[11px]">
                Contabilidade consultiva
                <span className="mx-2 text-white/25">•</span>
                Ilhota – SC
              </span>
            </div>

            <h1 className="reveal mt-6 font-display text-[2.05rem] font-semibold leading-[1.06] tracking-[-0.045em] text-white sm:mt-7 sm:text-[3.1rem] lg:text-[3.25rem] xl:text-[3.7rem]" style={{ transitionDelay: "80ms" }}>
              Sua empresa cresce.
              <span className="block text-white/90">Sua contabilidade</span>
              <span className="relative block">
                precisa{" "}
                <span className="relative whitespace-nowrap bg-gradient-to-r from-mint-300 via-mint-400 to-mint-300 bg-clip-text text-transparent">
                  crescer junto.
                  <svg
                    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-mint-400/70 sm:-bottom-2"
                    viewBox="0 0 260 12"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      className="chart-line"
                      pathLength={1}
                      d="M2 8.5C52 3.5 122 2 258 5.5"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="reveal mt-7 max-w-[480px] text-[15px] leading-relaxed text-white/60 sm:text-[16px] sm:leading-[1.75]" style={{ transitionDelay: "160ms" }}>
              Contabilidade consultiva, estratégia e tecnologia para a sua empresa crescer com
              clareza, segurança e decisões mais inteligentes. A Growth caminha junto com o seu
              negócio.
            </p>

            <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={{ transitionDelay: "240ms" }}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-mint-500 px-6 py-4 text-[13.5px] font-bold text-navy-950 shadow-[0_18px_45px_-18px_rgba(18,185,129,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-400 hover:shadow-[0_22px_50px_-16px_rgba(18,185,129,0.7)]"
              >
                <WhatsAppIcon size={19} />
                Falar no WhatsApp
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#servicos"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/[0.03] px-6 py-4 text-[13.5px] font-semibold text-white/85 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07] hover:text-white"
              >
                Conhecer os serviços
                <ArrowDown size={16} className="text-mint-400 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            <div className="reveal mt-9 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-white/10 pt-6" style={{ transitionDelay: "320ms" }}>
              <a
                href={SITE.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3"
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white shadow-sm">
                  <GoogleIcon size={18} />
                </span>
                <span className="flex flex-col">
                  <span className="flex items-center gap-1.5">
                    <span className="font-display text-[14px] font-bold text-white">{SITE.googleRating}</span>
                    <Stars size={11} className="text-star" />
                  </span>
                  <span className="text-[10.5px] font-medium text-white/45 transition-colors group-hover:text-white/70">
                    {SITE.googleReviews} avaliações no Google
                  </span>
                </span>
              </a>
              <span className="hidden h-8 w-px bg-white/10 sm:block" />
              <p className="flex items-center gap-2 text-[11.5px] font-medium text-white/50">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-mint-400/15 text-mint-300">
                  <CheckIcon size={11} strokeWidth={2.6} />
                </span>
                Atendimento próximo e consultivo
              </p>
            </div>
          </div>

          {/* Dashboard */}
          <div className="reveal relative mt-2 lg:mt-0 lg:pl-2" style={{ transitionDelay: "180ms" }}>
            <div className="absolute inset-x-6 top-6 h-full rounded-[30px] border border-white/10 bg-white/[0.035] backdrop-blur-sm sm:inset-x-8 sm:top-8" aria-hidden="true" />
            <div className="relative">
              <DashboardMockup />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
