// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rpgua.github.io",
  base: "/d6holocron-next",
  trailingSlash: "never",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "uk"],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          uk: "uk-UA",
        },
      },
      filter: (page) =>
        page !== "https://rpgua.github.io/d6holocron-next" &&
        page !== "https://rpgua.github.io/d6holocron-next/",
    }),
  ],
});
