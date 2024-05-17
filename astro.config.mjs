import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from 'rehype-pretty-code';
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.barbierinotes.com',
  markdown: {
    extendDefaultPlugins: false,
    rehypePlugins: [[rehypePrettyCode, {}]]
  },
  integrations: [
    sitemap(),
    tailwind(),
    mdx()
  ],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});