import { FOOTER_SERVICES, NAV_LINKS, SITE, whatsappLink } from "../lib/site";
import {
  ArrowUpRight,
  GoogleIcon,
  InstagramIcon,
  Logo,
  MapPinIcon,
  StarIcon,
  WhatsAppIcon,
} from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,_rgba(31,107,242,0.14),_transparent_55%)]" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />

      <div className="shell relative">
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.75fr_0.9fr_1fr] lg:gap-8 lg:py-16">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-[290px] text-[12.5px] leading-[1.8] text-white/45">
              Contabilidade consultiva para empresas que crescem. Técnica, proximidade e
              estratégia para apoiar as decisões do seu negócio.
            </p>

            <a
              href={SITE.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
            >
              <GoogleIcon size={16} />
              <span className="font-display text-[12px] font-semibold text-white">{SITE.googleRating}</span>
              <span className="flex gap-px text-star">
                {Array.from({ length: 5 }).map((_, index) => (
                  <StarIcon key={index} size={9} />
                ))}
              </span>
              <span className="text-[10px] text-white/40">{SITE.googleReviews} avaliações</span>
              <ArrowUpRight size={11} className="text-white/30 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <div className="mt-5 flex items-center gap-2">
              {[
                { icon: WhatsAppIcon, href: whatsappLink(), label: "WhatsApp" },
                { icon: InstagramIcon, href: SITE.instagramUrl, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${social.label} da Growth Contabilidade`}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/55 transition-colors hover:border-mint-400/40 hover:bg-mint-400/10 hover:text-mint-300"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Navegação</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12.5px] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Serviços</p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#servicos"
                    className="text-[12.5px] text-white/55 transition-colors hover:text-white"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">Contato</p>
            <ul className="mt-4 space-y-3.5">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-[12.5px] text-white/55 transition-colors hover:text-white"
                >
                  <WhatsAppIcon size={15} className="mt-0.5 shrink-0 text-mint-400" />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-[12.5px] text-white/55 transition-colors hover:text-white"
                >
                  <InstagramIcon size={15} className="mt-0.5 shrink-0 text-mint-400" />
                  {SITE.instagramHandle}
                </a>
              </li>
              <li>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2.5 text-[12.5px] leading-relaxed text-white/55 transition-colors hover:text-white"
                >
                  <MapPinIcon size={15} className="mt-0.5 shrink-0 text-mint-400" />
                  <span>
                    {SITE.addressStreet}
                    <br />
                    {SITE.addressLine}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center">
          <p className="text-[10.5px] text-white/35">
            © {year} {SITE.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/25">Ilhota – SC</p>
            <a
              href="#inicio"
              className="group inline-flex items-center gap-1.5 text-[10.5px] font-medium text-white/45 transition-colors hover:text-white"
            >
              Voltar ao topo
              <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
