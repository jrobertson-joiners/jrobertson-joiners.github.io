# Jamie Robertson Joiners Website

Website for Jamie Robertson Joiners - joinery-led building contractor in Stirling, Scotland.

**Live site:** https://jrobertson-joiners.co.uk

## Tech Stack

- **Framework:** [Astro](https://astro.build/) v7 (7.3.2)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Hosting:** GitHub Pages
- **Image Optimization:** Sharp

## Development

Node 22.12.0 is pinned in `astro/.nvmrc` (`nvm use` picks it up).

```bash
cd astro
npm install
npm run dev
```

## Build

`npm run build` runs `astro check` (type-checking) before `astro build`.

```bash
cd astro
npm run build
npm run preview
```

## Deployment

Automatically deployed via GitHub Actions when changes are pushed to the `master` branch.

See [.github/workflows/astro-deploy.yml](.github/workflows/astro-deploy.yml) for the deployment workflow.
