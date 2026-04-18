import { marqueeTerms } from "../lib/content";

function MarqueeRow() {
  return (
    <span className="px-10 flex items-center gap-10">
      {marqueeTerms.map((t, i) => (
        <span key={i} className="flex items-center gap-10">
          {t}
          <span className="inline-block w-3 h-3 rounded-full bg-aqua" aria-hidden />
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div
      className="marquee-section relative py-10 lg:py-14 overflow-hidden border-y border-white/5 bg-ink"
      aria-label="Product formats and packaging options"
    >
      <div
        className="marquee-track font-display uppercase text-cream/90"
        style={{ fontSize: "clamp(40px, 5.5vw, 82px)", lineHeight: 1 }}
      >
        <MarqueeRow />
        <MarqueeRow />
      </div>
    </div>
  );
}
