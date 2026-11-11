import type { APIRoute } from "astro";
import { PROJECTS, SERVICES, TECH_STACK } from "../data/content";
import { PAGE_META, SITE_URL } from "../data/seo";
import { SITE, TELEFONO_PRINCIPAL } from "../data/site";

const pageUrl = (path: string) => new URL(path, SITE_URL).href;

const content = `# ${SITE.nombre}

> ${SITE.description}

## Información general

- Sitio: ${SITE_URL}
- Responsable: ${SITE.founder}
- Ubicación: ${SITE.direccion}
- Cobertura: ${SITE.coverageDescription}
- Correo: ${SITE.email}
- Teléfono: ${TELEFONO_PRINCIPAL.value} (${TELEFONO_PRINCIPAL.href})
- WhatsApp: ${SITE.whatsapp}
- LinkedIn: ${SITE.socialLinks.linkedin}
- GitHub: ${SITE.socialLinks.github}

## Páginas

${Object.values(PAGE_META)
  .map(({ path, title, description }) => `- [${title}](${pageUrl(path)}): ${description}`)
  .join("\n")}

## Servicios publicados

${SERVICES.map(({ title, copy }) => `- **${title}:** ${copy}`).join("\n")}

## Proyectos publicados

${PROJECTS.map(
  ({ name, title, type, detail, tags }) =>
    `- **${name} — ${title} (${type}):** ${detail} (Tecnologías: ${tags.join(", ")}).`,
).join("\n")}

## Tecnologías mencionadas en el portafolio

${TECH_STACK.map(([name]) => name).join(", ")}.

## Áreas de servicio

${SITE.areasServed.map(({ name }) => name).join(", ")}.
`;

export const GET: APIRoute = () =>
  new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
