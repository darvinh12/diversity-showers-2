// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://diversityshowers.com',
  trailingSlash: 'ignore',

  integrations: [react()],

  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    // Static-only build for HostGator: no runtime image service required.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
