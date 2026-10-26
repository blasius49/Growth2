import { SITE, whatsappLink } from "../lib/site";
import { useScrolled } from "../hooks/useSiteInteractions";
import { WhatsAppIcon } from "./icons";

export default function FloatingActions() {
  const show = useScrolled(420);

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2.5 sm:bottom-6 sm:right-6">
      <a
        href={SITE.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver localização no Google Maps"
        className={`grid h-10 w-10 place-items-center rounded-full border border-navy-900/10 bg-white text-navy-900 shadow-[0_10px_28px_-12px_rgba(6,27,46,0.45)] transition-all duration-300 hover:bg-cloud ${
          show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10.2c0 5.4-8 11.3-8 11.3s-8-5.9-8-11.3a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.9" />
        </svg>
      </a>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com a Growth Contabilidade pelo WhatsApp ${SITE.phoneDisplay}`}
        className="group relative flex items-center gap-3"
      >
        <span className="pointer-events-none hidden items-center rounded-full border border-navy-900/10 bg-white px-3.5 py-2 text-[11px] font-semibold text-navy-900 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 sm:flex">
          Fale com a Growth
        </span>
        <span className="relative grid h-[54px] w-[54px] place-items-center rounded-full bg-mint-500 text-navy-950 shadow-[0_14px_34px_-10px_rgba(18,185,129,0.8)] ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-105 sm:h-[58px] sm:w-[58px]">
          <span className="absolute inset-0 animate-ping rounded-full bg-mint-400/40 [animation-duration:2.8s]" aria-hidden="true" />
          <WhatsAppIcon size={27} className="relative" />
        </span>
      </a>
    </div>
  );
}
