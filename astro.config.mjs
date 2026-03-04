import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kravex-frontend.vercel.app',
  output: 'server',
  adapter: vercel(),
  integrations: [
    sitemap({
      customPages: [
        'https://kravex-frontend.vercel.app/',
        'https://kravex-frontend.vercel.app/productos',
        'https://kravex-frontend.vercel.app/blog',
        'https://kravex-frontend.vercel.app/contacto',
      ]
    })
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});