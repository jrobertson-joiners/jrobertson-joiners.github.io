// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jrobertson-joiners.co.uk',
  base: '/',

  // Integrations
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404') && !page.includes('/portfolio'),  // Exclude 404 and portfolio from sitemap
    }),
  ],

  // Image optimization with Sharp
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,  // Allow large images
      },
    },
  },

  // Build optimizations
  compressHTML: true,           // Minify HTML output
  build: {
    inlineStylesheets: 'auto',  // Inline small CSS for faster FCP
  },

  // Prefetch links on hover for faster navigation
  prefetch: {
    prefetchAll: true,          // Prefetch all links for instant navigation
    defaultStrategy: 'hover',   // Prefetch on hover (good for mobile)
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      // Improve CSS output
      cssMinify: 'lightningcss',
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress unused import warnings from Astro internals
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT') return;
          warn(warning);
        }
      }
    }
  }
});