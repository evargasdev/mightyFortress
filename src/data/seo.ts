import { SITE } from "./site";

export const SITE_URL = SITE.url;

export const AREA_SERVED = [
  { "@type": "City", name: "Cancún" },
  { "@type": "City", name: "Puerto Morelos" },
  { "@type": "City", name: "Playa del Carmen" },
  { "@type": "City", name: "Puerto Aventuras" },
  { "@type": "City", name: "Akumal" },
  { "@type": "City", name: "Tulum" },
  { "@type": "City", name: "Cozumel" },
  { "@type": "Country", name: "México" },
];

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const ORGANIZATION_LOGO = `${SITE_URL}/images/logo.png`;

export const DEFAULT_DESCRIPTION =
  "El Yunque x Erick Vargas | Desarrollo de software a la medida en Playa del Carmen, la Riviera Maya y todo México. Creación de aplicaciones web, APIs robustas y plataformas digitales optimizadas para escalar tu negocio.";

export const DEFAULT_KEYWORDS =
  "Desarrollo de software a la medida, software Playa del Carmen, programador freelance Riviera Maya, desarrollo web México, El Yunque Erick Vargas, Erick Vargas, aplicaciones web fullstack, consultoría de software, desarrollo Next.js NestJS";

export const OG_IMAGE = {
  url: `${SITE_URL}/images/banner.webp`,
  width: 1210,
  height: 634,
  type: "image/webp",
  alt: "El Yunque x Erick Vargas - Desarrollo de software a la medida en Playa del Carmen",
} as const;

/** Copy social fijo del sitio (no depende de la página). */
export const SOCIAL_META = {
  ogTitle: "El Yunque | Desarrollo de Software a la Medida en México",
  ogDescription:
    "Soluciones de software de alto impacto por Erick Vargas. Aplicaciones web, APIs y plataformas digitales desde Playa del Carmen y la Riviera Maya para todo México.",
  twitterTitle: "El Yunque | Software a la Medida por Erick Vargas",
  twitterDescription:
    "Desarrollo de aplicaciones web y plataformas digitales escalables. Soluciones fullstack desde Playa del Carmen y la Riviera Maya para empresas en todo México.",
} as const;

export const ORGANIZACION = {
  "@type": "Organization",
  name: SITE.nombre,
  url: `${SITE_URL}/`,
} as const;
