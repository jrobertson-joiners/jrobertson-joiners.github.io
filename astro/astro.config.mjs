// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
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

  // Self-hosted Inter via the Fonts API (stable in Astro 6). Astro fingerprints
  // the file, manages the <link rel="preload">, and generates a metric-matched
  // fallback font to minimise layout shift (CLS) while Inter loads.
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['sans-serif'],   // last generic entry → optimized fallback metrics
      options: {
        variants: [
          {
            weight: '100 900',     // single variable font covers the full weight range
            style: 'normal',
            src: ['./src/assets/fonts/Inter.woff2'],
          },
        ],
      },
    },
  ],

  // Image optimization with Sharp
  image: {
    // Responsive images (stable in Astro 6): auto-generate srcset/sizes so each
    // device downloads an appropriately sized image. `responsiveStyles` adds the
    // low-specificity layout CSS (author classes still win).
    layout: 'constrained',
    responsiveStyles: true,
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Bounded ceiling (generous for legitimate project photos) rather than
        // disabling Sharp's decompression-bomb guard entirely.
        limitInputPixels: 100_000_000,
      },
    },
  },

  // Build optimizations
  compressHTML: true,           // Minify HTML output
  build: {
    inlineStylesheets: 'auto',  // Inline only small CSS; keep the shared bundle external and cacheable across pages
  },

  // Prefetch links on hover for faster navigation
  prefetch: {
    prefetchAll: true,          // Prefetch all links for instant navigation
    defaultStrategy: 'hover',   // Prefetch on hover (good for mobile)
  },

  vite: {
    // Cast: @tailwindcss/vite and Astro can resolve different Vite type
    // versions, producing a spurious Plugin-type mismatch under `astro check`.
    plugins: [/** @type {any} */ (tailwindcss())],
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