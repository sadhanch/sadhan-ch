// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

/**
 * Site configuration
 *
 * The `site` value establishes the canonical public origin for
 * generated URLs, including the sitemap.
 */
export default defineConfig({
  site: "https://sadhan.ch",

  integrations: [
    sitemap(),
  ],
});