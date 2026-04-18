import type { ReactNode } from "react";
import { motion } from "motion/react";
import { useInView } from "../lib/hooks";

interface SectionHeaderProps {
  digit: string;
  label: string;
  heading: ReactNode;
  eyebrow?: ReactNode;
  support?: ReactNode;
  align?: "start" | "between";
  className?: string;
}

/**
 * Editorial section header — oversized aqua digit + tiny mono label,
 * then a large display heading, with optional eyebrow + support column.
 * Used by Capabilities / Leadership / Badges / Story.
 */
export function SectionHeader({
  digit,
  label,
  heading,
  eyebrow,
  support,
  align = "between",
  className,
}: SectionHeaderProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div ref={ref} className={`flex flex-col gap-10 ${className ?? ""}`}>
      <div className="section-title-block">
        <motion.div
          className="section-title-digit"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {digit}
        </motion.div>
        <motion.div
          className="section-title-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {label}
        </motion.div>
      </div>

      <div
        className={`flex flex-col lg:flex-row gap-8 lg:gap-16 ${
          align === "between" ? "lg:items-end lg:justify-between" : "lg:items-start"
        }`}
      >
        <div className="max-w-[1000px]">
          {eyebrow && (
            <motion.div
              className="font-mono uppercase text-aqua mb-4"
              style={{ fontSize: 11, letterSpacing: "0.2em" }}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ delay: 0.25, duration: 0.6 }}
            >
              {eyebrow}
            </motion.div>
          )}
          <h2
            className="font-display uppercase text-cream leading-[0.95]"
            style={{ fontSize: "clamp(36px, 6.2vw, 108px)" }}
          >
            {heading}
          </h2>
        </div>
        {support && (
          <motion.div
            className="max-w-[360px] font-mono uppercase text-cream/75 shrink-0"
            style={{ fontSize: 13, lineHeight: 1.7, letterSpacing: "0.04em" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {support}
          </motion.div>
        )}
      </div>
    </div>
  );
}
