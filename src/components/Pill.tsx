import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  tone?: "neutral" | "aqua";
  className?: string;
}

/**
 * Editorial eyebrow pill — 0.2em tracking, 9999 radius, 0.625rem type.
 * Replaces flat mono-text eyebrows with a proper pill shape per
 * design-taste-frontend Rule 6. Two tones: neutral (cream) or aqua accent.
 */
export function Pill({ children, tone = "neutral", className }: PillProps) {
  const toneClass =
    tone === "aqua"
      ? "border-aqua/30 text-aqua"
      : "border-cream/20 text-cream/80";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono uppercase ${toneClass} ${className ?? ""}`}
      style={{ fontSize: 10, letterSpacing: "0.22em", lineHeight: 1 }}
    >
      <span
        className={tone === "aqua" ? "w-1 h-1 rounded-full bg-aqua" : "w-1 h-1 rounded-full bg-cream/60"}
        aria-hidden
      />
      {children}
    </span>
  );
}
