export const SITE = {
    nombre: "El Yunque - Erick Vargas",
    url: "https://erickvargas.dev",
    email: 'erickdanielvargascorona@gmail.com',
    direccion: 'Playa del Carmen, Q. Roo.',
    whatsapp: 'https://wa.me/529843209601'
} as const;

export const sanitizePhone = (raw: string) => raw.replace(/\D/g, "");

const telHref = (numero: string): string => `tel:+52${sanitizePhone(numero)}`;

export const TELEFONO_PRINCIPAL = {
    value: '984 320 9601',
    href: telHref('984 320 9601'),
    jsonLd: '+52-984-320-9601'
} as const