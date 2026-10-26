import { whatsappLink } from "../lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseIcon,
  CalculatorIcon,
  ChartIcon,
  CheckIcon,
  ShieldIcon,
  SparkleIcon,
  TaxIcon,
  WhatsAppIcon,
} from "./icons";

type Service = {
  number: string;
  title: string;
  description: string;
  items: string[];
  icon: typeof CalculatorIcon;
};

const services: Service[] = [
  {
    number: "01",
    title: "Contabilidade Empresarial",
    description:
      "A base organizada do seu negócio: escrituração contábil, obrigações em dia e informações que fazem sentido para a gestão.",
    items: [
      "Escrituração e demonstrações contábeis",
      "Obrigações acessórias em dia",
      "Informações claras para a gestão",
    ],
    icon: CalculatorIcon,
  },
  {
    number: "02",
    title: "Planejamento Tributário",
    description:
      "Estudo do regime e do enquadramento fiscal para uma rotina tributária mais eficiente e previsível.",
    items: [
      "Análise do regime tributário",
      "Simulações e planejamento fiscal",
      "Mais previsibilidade para o negócio",
    ],
    icon: TaxIcon,
  },
  {
    number: "03",
    title: "Assessoria Fiscal",
    description:
      "Acompanhamento próximo das obrigações fiscais, com atenção aos prazos e suporte no dia a dia da empresa.",
    items: [
      "Acompanhamento das obrigações",
      "Suporte em dúvidas fiscais",
      "Prevenção de riscos e prazos",
    ],
    icon: ShieldIcon,
  },
  {
    number: "04",
    title: "Inteligência Financeira",
    description:
      "Seus dados contábeis transformados em indicadores e relatórios para decisões melhores e mais conscientes.",
    items: [
      "Indicadores e relatórios gerenciais",
      "Análise de desempenho",
      "Dados que apoiam decisões",
    ],
    icon: ChartIcon,
  },
  {
    number: "05",
    title: "Consultoria Empresarial",
    description:
      "Orientação estratégica para estruturar processos, organizar o negócio e sustentar a próxima fase de crescimento.",
    items: [
      "Diagnóstico do negócio",
      "Estruturação de processos",
      "Acompanhamento estratégico",
    ],
    icon: BriefcaseIcon,
  },
];

function WhatsAppFor(service: string) {
  return whatsappLink(`Olá, Growth! Gostaria de saber mais sobre ${service}.`);
}

function FeaturedCard({ service }: { service: Service }) {
  return (
    <a
      href={WhatsAppFor(service.title)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Saiba mais sobre ${service.title} pelo WhatsApp`}
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] bg-navy-950 p-6 text-white shadow-[0_30px_70px_-40px_rgba(6,27,46,0.65)] ring-1 ring-navy-900/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_80px_-38px_rgba(6,27,46,0.7)] sm:p-7"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(18,185,129,0.22),_transparent_55%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(31,107,242,0.22),_transparent_55%)]" aria-hidden="true" />
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />

      <div className="relative flex items-start justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/[0.07] text-mint-300 ring-1 ring-white/10 backdrop-blur-sm transition-colors duration-300 group-hover:bg-mint-400 group-hover:text-navy-950">
          <service.icon size={23} />
        </span>
        <span className="font-display text-[11px] font-medium tabular-nums tracking-[0.16em] text-white/30">
          {service.number}
        </span>
      </div>

      <div className="relative mt-7 flex flex-1 flex-col">
        <h3 className="font-display text-[1.25rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[1.35rem]">
          {service.title}
        </h3>
        <p className="mt-3 text-[13px] leading-relaxed text-white/55">{service.description}</p>

        <div className="mt-5 rounded-xl border border-white/[0.09] bg-white/[0.04] p-3.5 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <p className="text-[8.5px] font-bold uppercase tracking-[0.16em] text-white/40">
              Rotina em ordem
            </p>
            <span className="flex items-center gap-1 text-[9px] font-semibold text-mint-300">
              <span className="h-1 w-1 rounded-full bg-mint-400" />
              Acompanhamento
            </span>
          </div>
          <div className="mt-3 space-y-2.5">
            {[
              { label: "Escrituração contábil", width: "88%" },
              { label: "Obrigações acessórias", width: "76%" },
              { label: "Informação para a gestão", width: "94%" },
            ].map((row, rowIndex) => (
              <div key={row.label}>
                <div className="mb-1 flex items-center justify-between text-[9px] font-medium text-white/55">
                  <span>{row.label}</span>
                  <CheckIcon size={9} strokeWidth={3} className="text-mint-400" />
                </div>
                <div className="h-1 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="bar-rise h-full rounded-full bg-gradient-to-r from-brand-500 to-mint-400"
                    style={{ width: row.width, animationDelay: `${rowIndex * 120}ms` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-[12px] font-medium text-white/65">
              <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-mint-400/15 text-mint-300">
                <CheckIcon size={10} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[12px] font-bold uppercase tracking-[0.1em] text-mint-300">
          Falar sobre esse serviço
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <a
      href={WhatsAppFor(service.title)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Saiba mais sobre ${service.title} pelo WhatsApp`}
      className="group reveal relative flex flex-col overflow-hidden rounded-[22px] border border-navy-900/[0.08] bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-[0_28px_60px_-32px_rgba(6,27,46,0.28)]"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

      <div className="relative flex items-start justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-brand-500/10 bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
          <service.icon size={21} />
        </span>
        <span className="font-display text-[10.5px] font-medium tabular-nums tracking-[0.16em] text-navy-900/25">
          {service.number}
        </span>
      </div>

      <h3 className="relative mt-5 font-display text-[16px] font-semibold tracking-[-0.02em] text-navy-900">
        {service.title}
      </h3>
      <p className="relative mt-2 text-[12.5px] leading-relaxed text-navy-900/55">{service.description}</p>

      <ul className="relative mt-4 space-y-2">
        {service.items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-[11.5px] leading-snug text-navy-900/50">
            <CheckIcon size={11} strokeWidth={3} className="mt-0.5 shrink-0 text-mint-600" />
            {item}
          </li>
        ))}
      </ul>

      <div className="relative mt-auto flex items-center justify-between border-t border-navy-900/[0.07] pt-4">
        <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-navy-900/45 transition-colors group-hover:text-brand-600">
          Saber mais
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-cloud text-navy-900/50 transition-all duration-300 group-hover:bg-navy-900 group-hover:text-white">
          <ArrowUpRight size={13} />
        </span>
      </div>
    </a>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 overflow-hidden bg-cloud py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-navy-900/10 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-mint-100/50 blur-3xl" aria-hidden="true" />

      <div className="shell relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <p className="eyebrow reveal text-brand-600">Nossos serviços</p>
            <h2
              className="reveal mt-5 font-display text-[1.95rem] font-semibold leading-[1.13] tracking-[-0.04em] text-navy-900 sm:text-[2.45rem] lg:text-[2.6rem]"
              style={{ transitionDelay: "70ms" }}
            >
              Soluções completas para a sua empresa{" "}
              <span className="text-brand-600">crescer.</span>
            </h2>
          </div>

          <div className="reveal max-w-[330px] lg:text-right" style={{ transitionDelay: "130ms" }}>
            <p className="text-[13.5px] leading-relaxed text-navy-900/55">
              Da rotina contábil à estratégia do negócio: um único parceiro para cuidar do
              presente e preparar o futuro da sua empresa.
            </p>
            <a
              href={whatsappLink("Olá, Growth! Quero encontrar o serviço ideal para a minha empresa.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex items-center gap-2 text-[12.5px] font-bold text-navy-900 transition-colors hover:text-brand-600"
            >
              Fale com um especialista
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          <div className="reveal flex sm:col-span-2 lg:col-span-1 lg:row-span-2">
            <FeaturedCard service={services[0]} />
          </div>
          {services.slice(1).map((service, index) => (
            <ServiceCard key={service.number} service={service} index={index} />
          ))}
        </div>

        {/* Support strip */}
        <div className="reveal mt-5 flex flex-col gap-5 rounded-[22px] border border-navy-900/[0.08] bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-navy-900 text-mint-400">
              <SparkleIcon size={20} />
            </span>
            <div>
              <p className="font-display text-[14px] font-semibold text-navy-900">
                Cada empresa tem um contexto. O seu próximo passo também.
              </p>
              <p className="mt-1 text-[12.5px] leading-relaxed text-navy-900/50">
                Conte o momento do seu negócio e receba uma orientação próxima e personalizada.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink("Olá, Growth! Preciso de uma orientação para a minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-mint-500 px-5 py-3 text-[12.5px] font-bold text-navy-950 transition-all duration-300 hover:bg-mint-400"
          >
            <WhatsAppIcon size={16} />
            Conversar agora
            <ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
