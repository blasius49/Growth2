import { SITE, whatsappLink } from "../lib/site";
import {
  ArrowUpRight,
  CheckIcon,
  GoogleIcon,
  StarIcon,
  WhatsAppIcon,
} from "./icons";

const values = ["Atendimento próximo", "Confiança", "Crescimento"];

export default function Reviews() {
  return (
    <section id="avaliacoes" className="relative scroll-mt-24 overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-navy-900/10 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-mint-50 blur-3xl" aria-hidden="true" />

      <div className="shell relative">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-[520px]">
            <p className="eyebrow reveal text-brand-600">Avaliações</p>
            <h2
              className="reveal mt-5 font-display text-[1.95rem] font-semibold leading-[1.13] tracking-[-0.04em] text-navy-900 sm:text-[2.45rem] lg:text-[2.6rem]"
              style={{ transitionDelay: "70ms" }}
            >
              A confiança de quem caminha{" "}
              <span className="text-brand-600">com a Growth.</span>
            </h2>
          </div>
          <p className="reveal max-w-[290px] text-[13px] leading-relaxed text-navy-900/50 sm:text-right" style={{ transitionDelay: "120ms" }}>
            Nosso trabalho é reconhecido publicamente por quem acompanha a Growth de perto.
          </p>
        </div>

        <div className="reveal mt-10 overflow-hidden rounded-[26px] border border-navy-900/[0.08] shadow-[0_36px_80px_-52px_rgba(6,27,46,0.45)] lg:mt-12">
          <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
            {/* Rating panel */}
            <div className="relative overflow-hidden bg-navy-950 p-7 text-white sm:p-9">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(31,107,242,0.28),_transparent_60%)]" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(18,185,129,0.22),_transparent_55%)]" aria-hidden="true" />
              <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-10 -right-6 select-none font-display text-[190px] font-bold leading-none text-white/[0.035]" aria-hidden="true">
                5,0
              </div>

              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.06] px-3.5 py-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white/70 backdrop-blur-sm">
                  <GoogleIcon size={15} />
                  Google
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-medium text-mint-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
                  Avaliações públicas
                </span>
              </div>

              <div className="relative mt-9">
                <p className="font-display text-[4.4rem] font-semibold leading-none tracking-[-0.06em] text-white sm:text-[5rem]">
                  {SITE.googleRating}
                  <span className="ml-1 align-top text-[18px] font-medium text-white/35 sm:text-[20px]">/5</span>
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-star" role="img" aria-label="5 de 5 estrelas">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} size={22} />
                  ))}
                </div>
                <p className="mt-4 text-[13.5px] font-medium text-white/75">
                  {SITE.googleReviews} avaliações no Google
                </p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-white/40">
                  Nota máxima concedida por clientes na plataforma.
                </p>
              </div>

              <div className="relative mt-9 flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white">
                  <GoogleIcon size={18} />
                </span>
                <p className="text-[11px] leading-snug text-white/50">
                  Avaliações públicas de clientes
                  <br /> na plataforma do Google.
                </p>
              </div>
            </div>

            {/* Copy panel */}
            <div className="relative bg-white p-7 sm:p-9 lg:p-11">
              <span className="inline-flex items-center gap-2 rounded-full bg-mint-50 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-mint-700 ring-1 ring-mint-500/15">
                <CheckIcon size={11} strokeWidth={3} />
Reputação pública
              </span>

              <h3 className="mt-5 font-display text-[1.35rem] font-semibold leading-[1.25] tracking-[-0.03em] text-navy-900 sm:text-[1.55rem]">
                Excelência reconhecida por quem confia na Growth.
              </h3>
              <p className="mt-4 max-w-[460px] text-[13.5px] leading-[1.8] text-navy-900/55">
                A melhor referência do nosso trabalho são as pessoas que escolhem a Growth todos
                os dias. Nossa avaliação no Google é de <strong className="font-semibold text-navy-900">5,0 estrelas</strong>, com{" "}
                <strong className="font-semibold text-navy-900">20 avaliações</strong>. Transparência
                para você conhecer a experiência de quem já está com a gente.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {values.map((value) => (
                  <span
                    key={value}
                    className="inline-flex items-center gap-1.5 rounded-full border border-navy-900/10 bg-cloud/60 px-3 py-1.5 text-[11px] font-medium text-navy-900/60"
                  >
                    <CheckIcon size={11} strokeWidth={3} className="text-mint-600" />
                    {value}
                  </span>
                ))}
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={SITE.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-navy-900 px-5 py-3.5 text-[12.5px] font-semibold text-white transition-all duration-300 hover:bg-navy-800"
                >
                  <GoogleIcon size={16} />
                  Ver avaliações no Google
                  <ArrowUpRight size={14} className="text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={whatsappLink("Olá, Growth! Gostaria de conversar sobre os serviços de vocês.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 text-[12px] font-semibold text-navy-900/55 transition-colors hover:text-navy-900"
                >
                  <WhatsAppIcon size={15} className="text-mint-600" />
                  Falar com a Growth
                </a>
              </div>

              <p className="mt-5 text-[10px] leading-relaxed text-navy-900/35">
                As avaliações são públicas, de autoria dos clientes e podem ser consultadas
                diretamente na plataforma do Google.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
