import { useEffect, useState } from "react";
import { NAV_LINKS, SITE, whatsappLink } from "../lib/site";
import { useActiveSection, useScrolled } from "../hooks/useSiteInteractions";
import {
  ArrowUpRight,
  CloseIcon,
  GoogleIcon,
  InstagramIcon,
  Logo,
  MapPinIcon,
  MenuIcon,
  StarIcon,
  WhatsAppIcon,
} from "./icons";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));

export default function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(12);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Ir para o conteúdo
      </a>

      {/* Micro bar */}
      <div className="relative z-40 hidden overflow-hidden bg-navy-950 text-white lg:block">
        <div className="shell flex h-10 items-center justify-between text-[11.5px]">
          <p className="flex items-center gap-2.5 font-medium text-white/60">
            <span className="relative flex h-1.5 w-1.5">
              <span className="pulse-dot relative inline-flex h-1.5 w-1.5 rounded-full bg-mint-400 text-mint-400" />
            </span>
            Contabilidade consultiva para empresas que crescem
          </p>
          <div className="flex items-center gap-5">
            <a
              href={SITE.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-white/60 transition-colors hover:text-white"
            >
              <GoogleIcon size={13} />
              <span className="text-white/90">5,0</span>
              <span className="flex text-star" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} size={10} />
                ))}
              </span>
              <span>· {SITE.googleReviews} avaliações</span>
            </a>
            <span className="h-3 w-px bg-white/15" />
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/60 transition-colors hover:text-white"
              aria-label="Instagram da Growth Contabilidade"
            >
              <InstagramIcon size={13} />
              {SITE.instagramHandle}
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium text-mint-300 transition-colors hover:text-mint-200"
            >
              <WhatsAppIcon size={13} />
              {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-navy-900/10 bg-white/90 shadow-[0_14px_40px_-28px_rgba(4,18,31,0.45)] backdrop-blur-xl"
            : "border-transparent bg-white"
        }`}
      >
        <div className="shell flex h-[72px] items-center justify-between gap-6 lg:h-[80px]">
          <a href="#inicio" aria-label="Growth Contabilidade — ir para o início" className="shrink-0">
            <Logo />
          </a>

          <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-4 py-2.5 text-[13.5px] font-medium transition-colors ${
                    isActive
                      ? "bg-cloud text-navy-900"
                      : "text-navy-900/60 hover:bg-cloud/70 hover:text-navy-900"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-mint-500" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2.5 rounded-full bg-navy-900 px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_-14px_rgba(6,27,46,0.9)] transition-all duration-300 hover:bg-navy-800 hover:shadow-[0_14px_30px_-14px_rgba(6,27,46,0.8)] sm:inline-flex"
            >
              <WhatsAppIcon size={17} className="text-mint-400" />
              Falar com especialista
              <ArrowUpRight
                size={15}
                className="text-white/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-full border border-navy-900/10 text-navy-900 transition-colors hover:bg-cloud lg:hidden"
            >
              <MenuIcon size={21} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[70] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy-950/55 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[400px] flex-col bg-white shadow-2xl transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-navy-900/8 px-6 py-4">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="grid h-10 w-10 place-items-center rounded-full bg-cloud text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
            >
              <CloseIcon size={20} />
            </button>
          </div>

          <nav aria-label="Navegação mobile" className="flex flex-col gap-1 overflow-y-auto px-4 py-6">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-navy-900 transition-colors hover:bg-cloud"
              >
                <span className="flex items-center gap-3.5">
                  <span className="font-display text-[10px] font-medium tabular-nums text-navy-900/35">
                    0{index + 1}
                  </span>
                  {link.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-navy-900/30 transition-colors group-hover:text-mint-600"
                />
              </a>
            ))}
          </nav>

          <div className="mt-auto space-y-4 border-t border-navy-900/8 bg-cloud/60 px-6 py-6">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-mint-500 px-5 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-mint-400"
            >
              <WhatsAppIcon size={18} />
              Falar pelo WhatsApp
            </a>
            <div className="space-y-2.5 text-[12.5px] text-navy-900/60">
              <p className="flex items-start gap-2.5">
                <MapPinIcon size={16} className="mt-0.5 shrink-0 text-brand-500" />
                {SITE.addressStreet} — {SITE.addressLine}
              </p>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-navy-900"
              >
                <InstagramIcon size={16} className="shrink-0 text-brand-500" />
                {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
