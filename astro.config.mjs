import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import rehypePrettyCode from 'rehype-pretty-code';

// https://astro.build/config
export default defineConfig({
  site: 'https://fukra.dev',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    mdx(),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark-dimmed',
            light: 'github-light',
          },
          keepBackground: false,
        },
      ],
    ],
  },
});

