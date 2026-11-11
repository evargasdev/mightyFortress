import { SITE } from "./site";

export const SITE_URL = SITE.url;
const domain = new URL(SITE_URL).host;

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const ORGANIZATION_LOGO = new URL(SITE.logo, SITE_URL).href;

export const DEFAULT_DESCRIPTION = SITE.description;

export const OG_IMAGE = {
  url: new URL(SITE.socialImage, SITE_URL).href,
  width: 1210,
  height: 634,
  type: "image/webp",
  alt: "El Yunque x Erick Vargas - Desarrollo de software a la medida",
} as const;

export const PAGE_META = {
  home: {
    path: "/",
    title: "Desarrollo de Software a la Medida | El Yunque",
    description: DEFAULT_DESCRIPTION,
  },
  privacy: {
    path: "/aviso-de-privacidad",
    title: "Aviso de Privacidad | El Yunque x Erick Vargas",
    description:
      "Aviso de privacidad de El Yunque x Erick Vargas: información sobre el tratamiento y la protección de datos personales.",
  },
  terms: {
    path: "/terminos-y-condiciones",
    title: "Términos y Condiciones | El Yunque x Erick Vargas",
    description:
      `Términos de uso de ${domain} y condiciones generales para solicitar servicios profesionales de desarrollo de software.`,
  },
} as const;
