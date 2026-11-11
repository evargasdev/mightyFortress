// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import { SITE } from "./src/data/site";

export default defineConfig({
  site: SITE.url,
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});