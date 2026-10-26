import { SITE, whatsappLink } from "../lib/site";
import { ArrowUpRight, CheckIcon, WhatsAppIcon } from "./icons";

export default function FinalCta() {
  return (
    <section aria-labelledby="cta-final" className="relative bg-white pb-20 sm:pb-24 lg:pb-28">
      <div className="shell">
        <div className="reveal relative overflow-hidden rounded-[28px] bg-navy-950 px-6 py-14 text-white sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,_rgba(31,107,242,0.28),_transparent_55%)]" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_90%_100%,_rgba(18,185,129,0.24),_transparent_55%)]" aria-hidden="true" />
          <div className="grid-lines pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden="true" />

          {/* Decorative growth line */}
          <svg
            className="pointer-events-none absolute -bottom-1 left-0 h-[48%] w-[68%] max-w-[680px] opacity-70"
            viewBox="0 0 600 220"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="ctaStroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#3ED9A2" stopOpacity="0.7" />
                <stop offset="55%" stopColor="#3ED9A2" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#1F6BF2" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M-10 200C70 196 110 214 170 176C230 138 270 158 330 118C390 78 440 92 520 34C550 12 580 6 610 -4"
              stroke="url(#ctaStroke)"
              strokeWidth="1.6"
              strokeDasharray="4 8"
            />
          </svg>

          <div className="relative grid items-center gap-9 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
            <div>
              <p className="eyebrow text-mint-300">Vamos crescer juntos</p>
              <h2
                id="cta-final"
                className="mt-5 max-w-[620px] font-display text-[2rem] font-semibold leading-[1.1] tracking-[-0.045em] sm:text-[2.6rem] lg:text-[3rem]"
              >
                Sua empresa tem potencial{" "}
                <span className="text-mint-300">para ir mais longe.</span>
              </h2>
              <p className="mt-5 max-w-[480px] text-[13.5px] leading-[1.8] text-white/55 sm:text-[14.5px]">
                Conte com uma contabilidade que acompanha o seu ritmo, organiza a sua rotina e
                apoia as suas decisões. O próximo passo pode começar com uma conversa.
              </p>

              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
                {["Atendimento próximo", "Estratégia de verdade", "Segurança técnica"].map((item) => (
                  <li key={item} className="flex items-center gap-1.5 text-[11.5px] font-medium text-white/55">
                    <CheckIcon size={12} strokeWidth={3} className="text-mint-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:justify-self-end">
              <div className="w-full rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-md sm:max-w-[320px] sm:p-5">
                <p className="font-display text-[13px] font-semibold text-white">Fale com a Growth</p>
                <p className="mt-1 text-[11px] leading-relaxed text-white/45">
                  Atendimento direto pelo WhatsApp.
                </p>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 flex w-full items-center justify-center gap-2.5 rounded-full bg-mint-500 px-5 py-3.5 text-[12.5px] font-bold text-navy-950 transition-all duration-300 hover:bg-mint-400"
                >
                  <WhatsAppIcon size={18} />
                  Iniciar conversa
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 flex items-center justify-center gap-1.5 text-[11.5px] font-medium text-white/50 transition-colors hover:text-white"
                >
                  {SITE.phoneDisplay}
                </a>
                <p className="mt-3 border-t border-white/10 pt-3 text-center text-[9.5px] font-medium uppercase tracking-[0.14em] text-white/30">
                  Ilhota – Santa Catarina
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
