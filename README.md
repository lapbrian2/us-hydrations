# US Hydrations

Landing page for US Hydrations — a Pittston, PA hydration company.

Single-file HTML landing page with inline CSS, Tailwind (CDN), custom fonts (Anton, Archivo, Instrument Serif, Caveat, JetBrains Mono), liquid-glass components, texture overlay, and scroll-reveal motion system.

## Stack

- Single-file `index.html`
- Tailwind CSS via CDN
- Google Fonts (Anton, Archivo, Instrument Serif, Caveat, JetBrains Mono)
- Vanilla JS for cursor, reveal-on-scroll, and interactions
- Deployed as static site on Vercel

## Design

- Deep hydro-navy (`#05131A`) base with aqua accent (`#7CF5D8`)
- Editorial typographic mix: Anton display / Archivo body / Instrument Serif italic / Caveat script
- Sections: hero → about → products → stats → CTA
- Custom cursor, scroll-reveal, staggered entrance animations

## Develop locally

```bash
npm run dev
```

Serves the single `index.html` at `http://localhost:3000`.

## Deploy

Pushes to `main` auto-deploy via Vercel.

## Structure

```
us-hydrations/
  index.html      # Entire site — HTML + inline <style> + inline <script>
  package.json    # Local dev server only
  .gitignore
  README.md
```
