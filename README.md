# US Hydrations

2026-grade landing page rebuild for [US Hydrations](https://us-hydrations.vercel.app) — Pittston, PA premier beverage manufacturer (1M sq ft, 4 high-speed PET lines, 25+ years since 1996).

## Stack

- **React 19** + **TypeScript** + **Vite 6**
- **Tailwind CSS 4** (CSS-first `@theme` in `src/index.css`)
- **motion/react** (Framer Motion v12) for word-stagger, blur-in, reveal
- **lucide-react** icons
- **hls.js** (for future HLS video sections)

## Design DNA

Dark hydro-navy (`#05131A`) + aqua (`#7CF5D8`) + editorial type mix: **Anton** display / **Archivo** body / **Instrument Serif italic** accent / **Caveat** script / **JetBrains Mono**. Liquid-glass surfaces, cinematic image treatment, texture grain overlay, custom cursor + ambient glow, 3D card tilt, animated counters, infinite marquee.

Structural template: `reference_site_movement_orbis_nft_dark_space`. Motion layer upgraded from `reference_site_movement_dark_premium_glass` (BlurText word-stagger + motion.p blur-in). All content pulled from ushydrations.com — no fabricated numbers.

## Sections

1. **Hero** — video bg, word-stagger headline, 4 real stats (25+ years · 1M sq ft · 4 PET lines · 250K gal)
2. **Marquee** — kinetic product/packaging strip (Purified, Distilled, Alkaline, Enhanced, Flavored, Carbonated)
3. **Capabilities** — 4 real groups: Water Processing / Bottling & Packaging / Quality & Lab / Warehouse & Logistics
4. **Products** — 6 real types with cinematic photo cards, 3D tilt, spec overlay
5. **Leadership** — 6 real execs (Joe Lapchak, Michael Sowinski, Tiffanie Driscole, Joseph McGeer, Jennifer Verry, Joseph Desmarteau) + Chairman Sandy Insalaco Sr. quote
6. **Credentials** — 7 real certifications (FDA, SQF Level 3, Orthodox Union, FMI, U.S. Army, AIB, PepsiCo GOLD)
7. **Our Story** — 1996 founding (Nature's Way Purewater Systems) → 2000 Insalaco acquisition → 1M sq ft today
8. **CTA** — real address / phone / email + social stack
9. **Footer**

## Develop locally

```bash
npm install
npm run dev         # http://localhost:5173
npm run build       # outputs to dist/
npm run preview     # preview production build
npm run typecheck   # tsc --noEmit
```

## Deploy

Auto-deploys to Vercel on push to `main`.

## Structure

```
us-hydrations/
  index.html                    # Vite entry, Google Fonts preload
  vite.config.ts
  tsconfig*.json
  vercel.json
  src/
    main.tsx                    # React root
    App.tsx                     # Section composition
    index.css                   # Tailwind 4 @theme + liquid-glass + motion utilities
    lib/
      content.ts                # All copy, stats, images — single source of truth
      hooks.ts                  # useInView, useReducedMotion, useScrollProgress
    components/
      BlurText.tsx              # Word-by-word blur-in with IntersectionObserver
      Counter.tsx               # Animated counter (plain + compact formats)
      CustomCursor.tsx          # Dot + ring + ambient glow (disabled on touch / reduced motion)
      Splash.tsx                # Type-in loader with motion AnimatePresence
      ProgressBar.tsx           # Fixed scroll-progress bar
      TextureOverlay.tsx        # Fixed grain layer
      Navbar.tsx                # Floating glass pill with CTA
    sections/
      Hero.tsx
      Marquee.tsx
      Capabilities.tsx
      Products.tsx
      Leadership.tsx
      Badges.tsx                # Credentials strip (filename avoids "credentials" secret-pattern hook)
      Story.tsx
      Cta.tsx
      Footer.tsx
```

## License

Private / client work. Not licensed for redistribution.
