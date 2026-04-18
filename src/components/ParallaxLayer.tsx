import { useEffect, useRef, type ReactNode } from "react";
import { useReducedMotion } from "../lib/hooks";

interface ParallaxLayerProps {
  children: ReactNode;
  /** Pixel travel range. Positive = moves up when section is at top, down when at bottom. */
  intensity?: number;
  /** Base zoom (default 1.08 so the background can translate without exposing edges). */
  scale?: number;
  className?: string;
}

/**
 * Scroll-linked parallax wrapper. When this component is inside the viewport,
 * a rAF loop measures its position relative to the viewport center and writes
 * `--parallax-y` (-1 .. 1) as a CSS custom property. The `.parallax-layer`
 * class uses that value to translate the child. Falls back to no motion when
 * `prefers-reduced-motion` is set.
 */
export function ParallaxLayer({
  children,
  intensity = 80,
  scale = 1.08,
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let visible = false;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        visible = entry.isIntersecting;
      },
      { threshold: 0, rootMargin: "20% 0px 20% 0px" },
    );
    io.observe(el);

    const update = () => {
      if (visible) {
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const center = rect.top + rect.height / 2;
        // -1 when el center is at top of viewport, +1 when at bottom, 0 mid.
        const y = Math.max(-1, Math.min(1, (vh / 2 - center) / (vh / 2 + rect.height / 2)));
        el.style.setProperty("--parallax-y", y.toFixed(3));
      }
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, [reduced]);

  return (
    <div
      ref={ref}
      className={`parallax-layer ${className ?? ""}`}
      style={
        {
          "--parallax-intensity": `${intensity}px`,
          "--parallax-scale": scale,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
