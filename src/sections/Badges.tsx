import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { SectionHeader } from "../components/SectionHeader";
import { credentials } from "../lib/content";
import { useInView } from "../lib/hooks";

export function Badges() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section
      id="credentials"
      className="relative w-full bg-ink py-24 lg:py-32 overflow-hidden border-t border-cream/5"
    >
      <span className="section-num">05 / Credentials</span>

      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHeader
          digit="05"
          label="Credentials"
          eyebrow="Audited · Inspected · Recognized"
          heading={
            <>
              <BlurText>Audited. </BlurText>
              <span
                className="font-serif-italic text-aqua inline-block"
                style={{ textTransform: "none" }}
              >
                <BlurText delay={0.15}>certified.</BlurText>
              </span>{" "}
              <BlurText delay={0.3}>trusted.</BlurText>
            </>
          }
          support={
            <>
              From FDA registration to PepsiCo's Caleb Bradham Gold for quality —
              seven certifications the shelves of national grocers already rely on.
            </>
          }
        />

        <div
          ref={ref}
          className="mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-px bg-cream/8"
        >
          {credentials.map((c, i) => (
            <motion.div
              key={c.short}
              className="relative bg-ink p-6 lg:p-7 flex flex-col gap-3 overflow-hidden group"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                delay: 0.2 + i * 0.07,
                duration: 0.7,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <div
                className="font-mono text-aqua/70"
                style={{ fontSize: 10, letterSpacing: "0.22em" }}
              >
                0{i + 1}
              </div>
              <div
                className="font-display uppercase text-cream leading-[0.95]"
                style={{ fontSize: "clamp(20px, 1.8vw, 28px)", letterSpacing: "-0.005em" }}
              >
                {c.short}
              </div>
              <div
                className="font-mono uppercase text-cream/55 mt-auto"
                style={{ fontSize: 10, letterSpacing: "0.1em", lineHeight: 1.5 }}
              >
                {c.full}
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-aqua origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                aria-hidden
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
