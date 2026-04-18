import { brand } from "../lib/content";

export function Footer() {
  return (
    <footer className="relative z-10 bg-ink border-t border-white/5">
      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span
          className="font-display uppercase text-cream"
          style={{ fontSize: 13, letterSpacing: "0.04em" }}
        >
          © {brand.wordmark} {new Date().getFullYear()} · Pittston, PA
        </span>
        <span
          className="font-mono uppercase text-cream/50"
          style={{ fontSize: 10, letterSpacing: "0.18em" }}
        >
          Est. {brand.established} · Lot 04 · Run A
        </span>
      </div>
    </footer>
  );
}
