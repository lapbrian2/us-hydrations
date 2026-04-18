import { useInView } from "../lib/hooks";
import type { ReactNode } from "react";

interface ClipRevealProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a section so it enters with an inset clip-path that unclips to full bleed.
 * Uses IntersectionObserver via useInView. The .clip-reveal/.in CSS pair lives
 * in src/index.css.
 */
export function ClipReveal({ children, className }: ClipRevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 });
  return (
    <div
      ref={ref}
      className={`clip-reveal ${inView ? "in" : ""} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
