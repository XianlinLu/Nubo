# BeFreed landing page clone

A maintainable Next.js/vinext recreation of the BeFreed desktop landing page.
The project is component-based, responsive, interactive, and ready for
Cloudflare-compatible deployment.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal.

## Validate

```bash
npm run build
npm test
```

## Project structure

- `app/` — page shell, metadata, and global styling
- `components/befreed/` — navigation, hero, source cloud, audio selector,
  feature demonstrations, community proof, download panel, and footer
- `docs/research/` — page topology, observed behaviors, resource inventory,
  and component specifications captured before implementation
- `public/befreed-assets/` — stable local community thumbnails
- `skills/clone-website/` — project-local website cloning workflow

The recreation uses the supplied BeFreed media CDN for the authorized brand
and product imagery while keeping all application structure and interactions
inside this repository.
