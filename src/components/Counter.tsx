import { useEffect, useState } from "react";
import { useInView, useReducedMotion } from "../lib/hooks";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
  format?: "plain" | "compact";
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function formatCompact(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(n % 1_000 === 0 ? 0 : 1) + "K";
  return String(n);
}

/**
 * Counts from 0 to target when it enters the viewport. Reduced-motion users
 * see the final value immediately. Use format="compact" for 1_000_000 -> 1M.
 */
export function Counter({
  target,
  suffix = "",
  duration = 1800,
  format = "plain",
  className,
}: CounterProps) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(target);
      return;
    }
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * easeOutCubic(t)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration, reduced]);

  const display = format === "compact" ? formatCompact(value) : value.toLocaleString();

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
