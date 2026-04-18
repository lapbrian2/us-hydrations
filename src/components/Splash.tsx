import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useReducedMotion } from "../lib/hooks";
import { brand } from "../lib/content";

const chars = [..."US HYDRATIONS"];

/**
 * Type-in splash loader — character stagger + aqua progress bar, then wipes up.
 * On reduced motion, skipped entirely. Signals `body.loaded` for hero entrance
 * orchestration in downstream sections.
 */
export function Splash() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(!reduced);

  useEffect(() => {
    if (reduced) {
      document.body.classList.add("loaded");
      return;
    }
    const t = window.setTimeout(() => {
      document.body.classList.add("loaded");
      setVisible(false);
    }, 1800);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-4 bg-ink"
          initial={{ y: 0 }}
          exit={{ y: "-101%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className="font-display uppercase text-cream overflow-hidden flex"
            style={{ fontSize: "clamp(32px, 6vw, 64px)", letterSpacing: "0.02em", gap: "0.05em" }}
          >
            {chars.map((c, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block", minWidth: c === " " ? "0.3em" : undefined }}
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: i * 0.04, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {c === " " ? "\u00A0" : c}
              </motion.span>
            ))}
          </div>

          <motion.div
            className="overflow-hidden"
            style={{
              width: 120,
              height: 1,
              background: "rgba(234,244,242,0.15)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
          >
            <motion.div
              style={{ height: "100%", background: "var(--color-aqua)" }}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.4, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
            />
          </motion.div>

          <motion.div
            className="font-mono uppercase"
            style={{
              color: "rgba(234,244,242,0.5)",
              fontSize: 11,
              letterSpacing: "0.25em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Est. {brand.established} &nbsp;·&nbsp; Pittston, PA
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
