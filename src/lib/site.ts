export const SITE = {
  name: "Growth Contabilidade",
  phoneDisplay: "(47) 99173-5733",
  phoneDigits: "5547991735733",
  addressStreet: "Av. Ricardo Paulino Maes, 191, Sala 4",
  addressLine: "Centro, Ilhota – SC",
  googleRating: "5,0",
  googleReviews: "20",
  instagramHandle: "@growthassessoriacontabil",
  instagramUrl: "https://www.instagram.com/growthassessoriacontabil",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Growth+Assessoria+Cont%C3%A1bil+Ilhota+SC",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Av.+Ricardo+Paulino+Maes,+191,+Centro,+Ilhota+-+SC",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Av.+Ricardo+Paulino+Maes,+191,+Centro,+Ilhota+-+SC&z=16&output=embed",
} as const;

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá, Growth! Gostaria de conversar sobre a contabilidade da minha empresa.";

export function whatsappLink(message: string = DEFAULT_WHATSAPP_MESSAGE) {
  return `https://wa.me/${SITE.phoneDigits}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;

export const FOOTER_SERVICES = [
  "Contabilidade empresarial",
  "Planejamento tributário",
  "Assessoria fiscal",
  "Inteligência financeira",
  "Consultoria empresarial",
] as const;
