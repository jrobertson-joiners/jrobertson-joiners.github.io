// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jrobertson-joiners.co.uk',
  base: '/v2/',
  vite: {
    plugins: [tailwindcss()]
  }
});