import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { credentials } from "../lib/content";
import { useInView } from "../lib/hooks";

export function Badges() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      id="credentials"
      ref={ref}
      className="relative w-full bg-ink py-20 lg:py-28 overflow-hidden border-t border-white/5"
    >
      <span className="section-num">05 / Credentials</span>

      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12">
        <h2
          className="font-display uppercase text-cream leading-[1] mb-12 lg:mb-16"
          style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
        >
          <BlurText>Audited. </BlurText>
          <span
            className="font-serif-italic text-aqua inline-block"
            style={{ textTransform: "none" }}
          >
            <BlurText delay={0.2}>certified.</BlurText>
          </span>{" "}
          <BlurText delay={0.4}>trusted.</BlurText>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/10">
          {credentials.map((c, i) => (
            <motion.div
              key={c.short}
              className="bg-ink p-6 lg:p-7 flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                delay: 0.2 + i * 0.06,
                duration: 0.6,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <div
                className="font-display uppercase text-cream leading-[1.05]"
                style={{ fontSize: "clamp(18px, 1.6vw, 24px)" }}
              >
                {c.short}
              </div>
              <div
                className="font-mono uppercase text-cream/55"
                style={{ fontSize: 10, letterSpacing: "0.1em", lineHeight: 1.5 }}
              >
                {c.full}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
