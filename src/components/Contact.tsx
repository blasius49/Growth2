import { useState, type FormEvent } from "react";
import { SITE, whatsappLink } from "../lib/site";
import {
  ArrowUpRight,
  InstagramIcon,
  MapPinIcon,
  WhatsAppIcon,
} from "./icons";

const topics = [
  "Contabilidade Empresarial",
  "Planejamento Tributário",
  "Assessoria Fiscal",
  "Inteligência Financeira",
  "Consultoria Empresarial",
  "Outro assunto",
];

const contactCards = [
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    value: SITE.phoneDisplay,
    detail: "Atendimento direto com a nossa equipe",
    href: whatsappLink(),
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    value: SITE.instagramHandle,
    detail: "Acompanhe a Growth nas redes",
    href: SITE.instagramUrl,
  },
  {
    icon: MapPinIcon,
    label: "Endereço",
    value: SITE.addressStreet,
    detail: SITE.addressLine,
    href: SITE.mapsUrl,
  },
];

const inputClass =
  "w-full rounded-xl border border-navy-900/10 bg-cloud/60 px-3.5 py-3 text-[13px] text-navy-900 placeholder:text-navy-900/30 transition-colors focus:border-brand-500/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-brand-500/10";

function MapFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#eef3f0]" aria-hidden="true">
      <svg viewBox="0 0 800 700" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <rect width="800" height="700" fill="#edf2ee" />
        <g fill="#e2eae4">
          <rect x="40" y="40" width="180" height="130" rx="8" />
          <rect x="260" y="40" width="150" height="90" rx="8" />
          <rect x="470" y="60" width="200" height="150" rx="8" />
          <rect x="40" y="230" width="120" height="160" rx="8" />
          <rect x="300" y="210" width="180" height="120" rx="8" />
          <rect x="540" y="270" width="150" height="110" rx="8" />
          <rect x="90" y="460" width="190" height="140" rx="8" />
          <rect x="350" y="430" width="140" height="120" rx="8" />
          <rect x="560" y="450" width="180" height="170" rx="8" />
        </g>
        <g stroke="#d7e2da" strokeWidth="14">
          <path d="M0 200H800M0 400H800M250 0V700M500 0V700" />
        </g>
        <path d="M0 560C180 520 260 600 470 500C610 434 690 470 800 420" stroke="#cfe4d8" strokeWidth="26" fill="none" />
        <path d="M0 560C180 520 260 600 470 500C610 434 690 470 800 420" stroke="#ffffff" strokeWidth="12" fill="none" strokeDasharray="26 18" opacity="0.85" />
        <g stroke="#cdd9d1" strokeWidth="4">
          <path d="M-20 100L320 460M620 20L420 320M40 690L380 340" />
        </g>
        <circle cx="430" cy="300" r="66" fill="#12b981" fillOpacity="0.1" />
        <circle cx="430" cy="300" r="40" fill="#12b981" fillOpacity="0.16" />
      </svg>
      <span className="absolute left-1/2 top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 border-white bg-navy-900 text-mint-400 shadow-lg">
        <MapPinIcon size={20} />
      </span>
      <span className="absolute bottom-[46%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-navy-900/10 bg-white px-3 py-1.5 text-[10px] font-semibold text-navy-900 shadow-sm">
        Centro, Ilhota – SC
      </span>
    </div>
  );
}

export default function Contact() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(topics[0]);
  const [message, setMessage] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      `Olá, Growth! Meu nome é ${name.trim()}.`,
      `Tenho interesse em: ${topic}.`,
      message.trim() ? `Detalhes: ${message.trim()}` : "Gostaria de conversar com um especialista.",
    ].join(" ");
    const url = whatsappLink(text);
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contato" className="relative scroll-mt-24 overflow-hidden bg-cloud py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-900/10 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-brand-100/50 blur-3xl" aria-hidden="true" />

      <div className="shell relative">
        <div className="mx-auto max-w-[640px] text-center">
          <p className="eyebrow reveal justify-center text-brand-600 before:hidden">Contato</p>
          <h2
            className="reveal mt-5 font-display text-[1.95rem] font-semibold leading-[1.13] tracking-[-0.04em] text-navy-900 sm:text-[2.45rem] lg:text-[2.6rem]"
            style={{ transitionDelay: "70ms" }}
          >
            Vamos conversar sobre o próximo passo da{" "}
            <span className="text-brand-600">sua empresa?</span>
          </h2>
          <p className="reveal mx-auto mt-4 max-w-[480px] text-[13.5px] leading-relaxed text-navy-900/55 sm:text-[14px]" style={{ transitionDelay: "120ms" }}>
            Estamos em Ilhota – SC e prontos para ouvir você. Escolha o canal que preferir, fale
            com a nossa equipe e descubra como podemos caminhar juntos.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-5 lg:mt-14 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: links + form */}
          <div className="space-y-4">
            <div className="grid gap-3">
              {contactCards.map((card, index) => (
                <a
                  key={card.label}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group reveal flex items-center gap-3.5 rounded-2xl border border-navy-900/[0.08] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/25 hover:shadow-[0_18px_40px_-28px_rgba(6,27,46,0.35)]"
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-cloud text-brand-600 transition-colors duration-300 group-hover:bg-navy-900 group-hover:text-mint-400">
                    <card.icon size={20} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-navy-900/35">
                      {card.label}
                    </p>
                    <p className="mt-1 font-display text-[12.5px] font-semibold leading-snug text-navy-900">
                      {card.value}
                    </p>
                    <p className="mt-0.5 text-[10.5px] leading-snug text-navy-900/45">{card.detail}</p>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="shrink-0 text-navy-900/25 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600"
                  />
                </a>
              ))}
            </div>

            {/* WhatsApp composer */}
            <div className="reveal rounded-2xl border border-navy-900/[0.08] bg-white p-5 sm:p-6">
              <div className="flex items-center gap-2.5">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-mint-50 text-mint-600 ring-1 ring-mint-500/15">
                  <WhatsAppIcon size={16} />
                </span>
                <div>
                  <h3 className="font-display text-[13.5px] font-semibold text-navy-900">
                    Fale agora com a Growth
                  </h3>
                  <p className="text-[10.5px] text-navy-900/45">
                    Enviamos sua mensagem direto pelo WhatsApp.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.1em] text-navy-900/45">
                    Seu nome
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Como podemos te chamar?"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-topic" className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.1em] text-navy-900/45">
                    Assunto
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    value={topic}
                    onChange={(event) => setTopic(event.target.value)}
                    className={inputClass}
                  >
                    {topics.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.1em] text-navy-900/45">
                    Mensagem <span className="font-normal normal-case tracking-normal text-navy-900/30">(opcional)</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={2}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder="Conte um pouco sobre a sua empresa."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-mint-500 px-5 py-3.5 text-[12.5px] font-bold text-navy-950 transition-all duration-300 hover:bg-mint-400"
                >
                  <WhatsAppIcon size={17} />
                  Enviar pelo WhatsApp
                  <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <p className="text-center text-[9.5px] leading-relaxed text-navy-900/35">
                  Ao enviar, você será direcionado ao WhatsApp com a mensagem preenchida.
                </p>
              </form>
            </div>
          </div>

          {/* Right: map */}
          <div className="reveal relative h-[380px] overflow-hidden rounded-2xl border border-navy-900/[0.08] bg-white shadow-[0_24px_60px_-40px_rgba(6,27,46,0.3)] sm:h-[440px] lg:sticky lg:top-28 lg:h-[calc(100vh-10rem)] lg:max-h-[640px]">
            <MapFallback />
            <iframe
              title="Localização da Growth Contabilidade em Ilhota – SC"
              src={SITE.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              onLoad={() => setMapLoaded(true)}
              className={`absolute inset-0 h-full w-full border-0 transition-opacity duration-700 ${
                mapLoaded ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-950/15 to-transparent" aria-hidden="true" />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_20px_45px_-20px_rgba(6,27,46,0.45)] backdrop-blur-md sm:inset-x-5 sm:bottom-5 sm:max-w-[330px] sm:p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy-900 text-mint-400">
                  <MapPinIcon size={18} />
                </span>
                <div>
                  <p className="font-display text-[12px] font-semibold text-navy-900">
                    Growth Contabilidade
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-navy-900/55">
                    {SITE.addressStreet}
                    <br />
                    {SITE.addressLine}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-navy-900 px-3 py-2.5 text-[10.5px] font-semibold text-white transition-colors hover:bg-navy-800"
                >
                  Abrir no Google Maps
                  <ArrowUpRight size={12} className="text-white/50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={whatsappLink("Olá, Growth! Gostaria de mais informações sobre o atendimento.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Falar com a Growth pelo WhatsApp"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-mint-500 text-navy-950 transition-colors hover:bg-mint-400"
                >
                  <WhatsAppIcon size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
