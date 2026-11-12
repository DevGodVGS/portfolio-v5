# Vishwa Gaurav Shukla · Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS v4 and [React Bits](https://reactbits.dev).

## Run it

```bash
npm install
npm run dev
```

`npm run build` type-checks and writes the production bundle to `dist/`.

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/profile.ts` | Every word on the site: bio, work, metrics, projects, skills, links |
| `src/components/sections/` | One file per page section (Hero, About, Work, ClaudeCode, Projects, Skills, Contact) |
| `src/components/reactbits/` | React Bits components, installed with the shadcn CLI (TS + Tailwind variants) |
| `src/components/ui/` | Small shared pieces: section heading, tags, metric rows |
| `src/index.css` | Design tokens (colours, fonts) and base styles |
| `public/` | Favicon and the downloadable résumé PDF |

To change copy, edit `src/data/profile.ts`. To retheme, change the `--color-*` tokens in `src/index.css`.

## Adding another React Bits component

```bash
npx shadcn@latest add @react-bits/<ComponentName>-TS-TW
```

The CLI drops the file into `src/components/`; move it into `src/components/reactbits/` to keep vendored code together.

## React Bits components in use

Backgrounds: DotGrid, LightRays, Threads.
Text: SplitText, BlurText, ShinyText, RotatingText, DecryptedText, TextType, CountUp, ScrollReveal, ScrollVelocity.
Motion and surfaces: AnimatedContent, FadeContent, ClickSpark, Magnet, StarBorder, SpotlightCard, BorderGlow.

## SEO

Search and sharing details live in `seo.config.ts`. At build time they become the page title, description, Open Graph and Twitter tags, JSON-LD (`Person`, `ProfilePage`, `WebSite`), a no-JavaScript fallback, and `robots.txt`.

Set `siteUrl` there (or build with `SITE_URL=https://your-domain npm run build`) once the site has an address. That turns on the canonical link, `sitemap.xml`, and absolute URLs for the share image, which social previews need.

The share image is `public/og.png` (1200×630).

## Lighthouse

Reports from the production build live in `lighthouse/` (`mobile.report.html`, `desktop.report.html`). To regenerate them, build and serve the production bundle, then run Lighthouse against it:

```bash
npm run build && npm run preview -- --port 4322
```

```bash
npx lighthouse http://localhost:4322/ --output=html --output=json --output-path=./lighthouse/mobile
```

```bash
npx lighthouse http://localhost:4322/ --preset=desktop --output=html --output=json --output-path=./lighthouse/desktop
```

Always measure the production build; the dev server is unminified and scores much lower.

What keeps the scores up:

- Only the nav and hero are in the first render. Every other section is a lazy chunk in its own Suspense boundary (`src/App.tsx`).
- The hero's canvas and WebGL backdrops mount after the page is idle, and the WebGL light is skipped on phones (`src/components/sections/Hero.tsx`).
- `public/robots.txt` and `public/llms.txt` are real files, and the app has no SPA fallback, so unknown paths return 404.
