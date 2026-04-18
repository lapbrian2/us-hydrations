# US Hydrations

Landing page rebuild for [US Hydrations](https://us-hydrations.vercel.app) — a Pittston, PA hydration company. The live business site at ushydrations.com runs on WordPress + the Astra theme; this rebuild is a static HTML version of the same design.

## Stack

- Plain `index.html` at the root — same markup approach as the original, split into separate files for clarity.
- **Tailwind CSS via CDN** with an inline `tailwind.config` for custom brand colors and fonts.
- **Google Fonts** — Anton / Archivo / Instrument Serif / Caveat / JetBrains Mono.
- **Vanilla JS** motion engine (`scripts/motion-engine.js`) — IntersectionObserver for reveals, custom cursor, 3D card tilt, photo parallax, marquee velocity scrubbing, animated counters.
- **Vercel** — static deploy, auto-deploys on push to `main`.

No build step. Edit files, refresh.

## Design

Deep hydro-navy (`#05131A`) base with aqua accent (`#7CF5D8`). Editorial typography mix:

- **Anton** — display headings
- **Archivo** — body
- **Instrument Serif italic** — editorial accent on hero/about headings
- **Caveat** — script overlay ("Pittston", "Let's run it")
- **JetBrains Mono** — kickers, stats labels, section numbers

Sections: Hero → Marquee → About → Products → CTA. Liquid-glass surfaces, cinematic image treatment, splash loader, custom cursor, 3D card tilt, marquee velocity scrubbing, animated counters.

## Develop locally

```bash
npm run dev   # serves the static files at http://localhost:3000
```

(Uses `npx serve` — no dependencies to install.)

## Project structure

```
us-hydrations/
  index.html              # Entire page markup — sections inline, commented
  scripts/
    motion-engine.js      # Splash, reveals, cursor, parallax, counters, tilt
  styles/
    global.css            # Base body, fonts, selection
    components.css        # liquid-glass, nav, cursor, card, marquee, progress
    motion.css            # reveal, word-split, clip-reveal, parallax, bubbles
    splash.css            # Loader + hero entrance orchestration
    placeholders.css      # ph-* and video-sim-* animated gradient backgrounds
    cinematic.css         # img-cinematic, img-tint, img-grain, photo-parallax
  package.json            # Local dev server only
  vercel.json             # Static deploy hints
```

## Content

Body copy, imagery, and contact details reference `ushydrations.com` (the live business). The placeholder gradient layers (`.ph-*` / `.video-sim-*`) sit behind cinematic-treated photos and a hero video — they keep the design intact if external assets are unavailable.

## License

Private / client work. Not licensed for redistribution.
