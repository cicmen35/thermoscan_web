# ThermoScan web

Marketing website for ThermoScan's professional building thermography services in Nitra and the surrounding area.

## Stack

- React 19, TypeScript, and Vite
- Tailwind CSS 4 and DaisyUI
- Web3Forms for contact enquiries
- Vitest, Testing Library, axe-core, and Playwright
- Oxlint with type-aware rules

## Local setup

Requirements: Node.js 22+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set the Web3Forms key in `.env.local`:

```dotenv
VITE_WEB3FORMS_ACCESS_KEY=your-access-key
```

Web3Forms access keys are browser-visible identifiers, not secret credentials. Keeping the project-specific value in `.env.local` avoids hard-coding it.

## Scripts

- `npm run dev` — local development server
- `npm run lint` — type-aware Oxlint checks
- `npm run typecheck` — strict TypeScript checks
- `npm run test` — unit and accessibility tests
- `npm run test:e2e` — Playwright desktop/mobile smoke tests
- `npm run check` — lint, typecheck, unit tests, and production build
- `npm run build` — production build in `dist/`

Install Playwright's browser before the first local E2E run:

```bash
npx playwright install chromium
```

## Editing content

- Business copy, contact details, navigation, services, FAQs, and gallery metadata live in `src/data/content.ts`.
- Section components live in `src/components/`.
- Theme tokens and motion preferences live in `src/index.css`.
- Add optimized local images under `src/assets/` and import them through `src/data/content.ts`.

## Deployment and SEO

Deploy `dist/` to the host for `https://thermoscan.sk`. Configure SPA fallback to `index.html` if required.

When public URLs or business details change, update `index.html`, `public/sitemap.xml`, `public/robots.txt`, and `public/og-image.svg`.

The footer embeds Google Maps, which sends requests to Google when its lazy iframe approaches the viewport. Document this third-party service in the site's privacy information before launch.

## CI

GitHub Actions runs linting, strict type checking, unit/accessibility tests, build verification, and Playwright smoke tests on pushes and pull requests.
