import { motion } from "motion/react";
import { useInView, useReducedMotion } from "../lib/hooks";
import type { CSSProperties, ReactNode } from "react";

type SplitBy = "word" | "char";

interface BlurTextProps {
  /** Plain text or ReactNode. For word splitting, pass a string. */
  children: ReactNode;
  splitBy?: SplitBy;
  stagger?: number;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  /** Render segments inline-block (default) or inline. */
  as?: "block" | "inline";
}

/**
 * Word-by-word (or char-by-char) entrance with gaussian blur dissolve.
 * Triggered by IntersectionObserver on first enter. Respects reduced motion.
 */
export function BlurText({
  children,
  splitBy = "word",
  stagger = 0.05,
  delay = 0,
  duration = 0.7,
  className,
  style,
}: BlurTextProps) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.2 });

  if (reduced || typeof children !== "string") {
    return (
      <span ref={ref} className={className} style={style}>
        {children}
      </span>
    );
  }

  const segments =
    splitBy === "word" ? children.split(/(\s+)/) : [...children];

  return (
    <span ref={ref} className={className} style={style}>
      {segments.map((seg, i) => {
        if (/^\s+$/.test(seg)) return <span key={i}>{seg}</span>;
        return (
          <motion.span
            key={i}
            initial={{ filter: "blur(12px)", opacity: 0, y: 40 }}
            animate={
              inView
                ? { filter: "blur(0px)", opacity: 1, y: 0 }
                : { filter: "blur(12px)", opacity: 0, y: 40 }
            }
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            style={{ display: "inline-block", willChange: "filter, opacity, transform" }}
          >
            {seg}
          </motion.span>
        );
      })}
    </span>
  );
}
