import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://crushcodeworks.com',
  output: 'static',
  adapter: node({
      mode: 'standalone'
  }),
  integrations: [
    tailwind({ applyBaseStyles: false }),
    react(),
    mdx(),
    sitemap()
  ],
  image: {
    domains: [],
    formats: ['avif', 'webp']
  },
  markdown: {
    syntaxHighlight: 'shiki'
  },
  vite: {
    build: {
      cssCodeSplit: true
    }
  }
});
