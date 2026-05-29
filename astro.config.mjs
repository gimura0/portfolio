import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import github from '@astrojs/github-pages';

import sitemap from "@astrojs/sitemap";
export default defineConfig({
   vite: {
    plugins: [tailwindcss()],
  },
  // add yur domain name here
  site: 'https://gimura0.github.io',
  base: '/portfolio',
  compressHTML: true,
  integrations: [sitemap()],
  integrations: [github()],
});