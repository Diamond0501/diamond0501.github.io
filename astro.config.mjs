// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://yitingchen.de',
  trailingSlash: 'always',
  build: { format: 'directory' },
  // Fixed port from the local port registry (project code 366, web), shared by `astro dev` and `astro preview`.
  server: { port: 13669 },
  integrations: [
    icon(),
    // The legal pages are noindex, so they stay out of the sitemap.
    sitemap({ filter: (page) => !/\/(impressum|datenschutz|agb)\/$/.test(page) }),
  ],
  // The CJK families are the fallbacks so Chinese text keeps a serif or sans face. The generic family
  // must come last, otherwise it would win over every CJK family listed after it.
  fonts: [
    {
      name: 'Young Serif',
      cssVariable: '--font-display',
      provider: fontProviders.fontsource(),
      weights: [400],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['Songti SC', 'Noto Serif SC', 'Source Han Serif SC', 'serif'],
    },
    {
      name: 'Nunito Sans',
      cssVariable: '--font-body',
      provider: fontProviders.fontsource(),
      weights: ['200 1000'],
      styles: ['normal'],
      subsets: ['latin', 'latin-ext'],
      fallbacks: ['PingFang SC', 'Hiragino Sans GB', 'Noto Sans SC', 'Microsoft YaHei', 'sans-serif'],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
