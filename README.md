# Raaga — Landing Page

A premium, production-grade landing page for the **Raaga Music Player** — dark AMOLED,
Material 3-inspired, with Nothing OS × Apple × Linear × Arc aesthetics.

Built with **Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · shadcn-style UI**.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
```

## Production build

```bash
npm run build      # fully static, deploy-ready
npm start
```

## Deploy to Vercel

Push this folder to GitHub and import it in Vercel — zero config needed.
Every route prerenders statically (`/` + `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `icon.svg`).

## What’s inside (by phase)

| Phase | Where | Notes |
|---|---|---|
| 1 — Foundation | `app/page.tsx`, `components/navbar.tsx`, `components/hero.tsx`, `components/footer.tsx` | Sticky blur navbar, theme toggle, animated hero, smooth scrolling, SEO-ready |
| 2 — Interactive phone | `components/phone-showcase.tsx`, `components/phone.tsx`, `components/screens/*` | Sticky device; screen content swaps Home → Search → Player → Lyrics → Queue → Settings as you scroll |
| 3 — Features | `components/features.tsx` | 12 cards with 3D tilt, cursor glow, bento layout |
| 4 — Screenshots | `components/screenshots.tsx` | Horizontal snap gallery, category filters, hover zoom, glass frames, page-scroll parallax |
| 5 — Raaga DNA | `components/dna.tsx` | “Your Music. Learns You.” — animated counters, privacy pills, signature conic gradient |
| 6 — Download | `components/download.tsx` | Version card, SHA-256 with copy button, install guide, version timeline |
| 7 — Performance & Tech | `components/tech.tsx` | Typing terminal, syntax-highlighted Drift code block, perf stat cards, stack grid |
| 8 — Animations | `components/effects.tsx`, `components/tilt-card.tsx`, `components/reveal.tsx` | Scroll progress, cursor glow, aurora blobs, grain, mouse parallax, scroll reveal — transform/opacity only for 60fps |
| 9 — SEO & PWA | `app/layout.tsx`, `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`, `app/icon.svg`, `public/og.png` | Full Open Graph + Twitter cards, favicon, manifest, keyword metadata |

## Customizing

- **Add a screenshot**: drop one entry into `SHOTS` in `components/screenshots.tsx` (the screens are
  real React UI in `components/screens/`, not images — copy one and tweak).
- **Brand colors**: edit `--accent`, `--accent-2`, `--accent-3` in `app/globals.css`
  (works for both dark AMOLED and light theme).
- **Copy & versions**: each section is a self-contained component — changelog lives in
  `CHANGELOG` inside `components/download.tsx`.
- **Links**: navbar/footer point to `https://github.com/raaga-app/raaga` — replace with the real repo.
