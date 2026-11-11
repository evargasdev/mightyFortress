import type { APIRoute } from "astro";
import { PAGE_META, SITE_URL } from "../data/seo";

const escapeXml = (value: string) =>
  value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

export const GET: APIRoute = () => {
  const urls = Object.values(PAGE_META)
    .map(
      ({ path }) =>
        `  <url><loc>${escapeXml(new URL(path, SITE_URL).href)}</loc></url>`,
    )
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
