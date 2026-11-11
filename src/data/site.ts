export const sanitizePhone = (raw: string) => raw.replace(/\D/g, "");

const telHref = (numero: string): string => `tel:+52${sanitizePhone(numero)}`;

const phone = "984 320 9601";

export const TELEFONO_PRINCIPAL = {
    value: phone,
    href: telHref(phone),
    jsonLd: `+52-${sanitizePhone(phone)}`
} as const;

export const SITE = {
  nombre: "EL YUNQUE X ERICK VARGAS",
  founder: "Erick Daniel Vargas Corona",
  url: "https://erickvargas.dev",
  description:
    "Desarrollo de software a la medida, aplicaciones web y APIs por Erick Vargas desde Playa del Carmen para negocios en México y proyectos internacionales remotos.",
  email: "erickdanielvargascorona@gmail.com",
  telefono: TELEFONO_PRINCIPAL.jsonLd,
  direccion: "Playa del Carmen, Solidaridad, Quintana Roo, México",
  whatsapp: `https://wa.me/52${sanitizePhone(phone)}`,
  logo: "/images/logo.png",
  socialImage: "/images/banner.webp",
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/erickvargascorona/",
    github: "https://github.com/evargasdev",
  },
  areasServed: [
    { type: "City", name: "Playa del Carmen" },
    { type: "City", name: "Puerto Morelos" },
    { type: "City", name: "Cancún" },
    { type: "City", name: "Puerto Aventuras" },
    { type: "City", name: "Akumal" },
    { type: "City", name: "Tulum" },
    { type: "City", name: "Cozumel" },
    { type: "Country", name: "México" },
  ],
  coverageDescription:
    "Atención en Playa del Carmen y la Riviera Maya, con servicios remotos para México y proyectos internacionales.",
} as const;