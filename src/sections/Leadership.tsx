import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { leaders, chairmanQuote } from "../lib/content";
import { useInView } from "../lib/hooks";

export function Leadership() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="leadership" ref={ref} className="relative w-full bg-ink py-24 lg:py-32 overflow-hidden">
      <span className="section-num">04 / Leadership</span>

      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Chairman quote — oversized editorial block */}
        <div className="mb-24 lg:mb-32 max-w-[1100px]">
          <div
            className="font-mono uppercase text-aqua mb-6"
            style={{ fontSize: 11, letterSpacing: "0.2em" }}
          >
            From the Chairman
          </div>
          <blockquote
            className="font-serif-italic text-cream leading-[1.15]"
            style={{
              fontSize: "clamp(28px, 3.8vw, 56px)",
              letterSpacing: "-0.01em",
            }}
          >
            <span className="text-aqua" aria-hidden>
              “
            </span>
            <BlurText stagger={0.03} duration={0.6}>
              {chairmanQuote.text}
            </BlurText>
            <span className="text-aqua" aria-hidden>
              ”
            </span>
          </blockquote>
          <motion.div
            className="mt-6 font-mono uppercase text-cream/60"
            style={{ fontSize: 12, letterSpacing: "0.14em" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            — {chairmanQuote.attribution}
          </motion.div>
        </div>

        {/* Leadership grid header */}
        <div className="mb-12 lg:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h2
            className="font-display uppercase text-cream leading-[1]"
            style={{ fontSize: "clamp(32px, 5vw, 72px)" }}
          >
            <BlurText>The team </BlurText>
            <span
              className="font-serif-italic text-aqua inline-block"
              style={{ textTransform: "none" }}
            >
              <BlurText delay={0.2}>running</BlurText>
            </span>{" "}
            <BlurText delay={0.4}>the plant.</BlurText>
          </h2>
          <p
            className="font-mono uppercase text-cream/60 max-w-[320px]"
            style={{ fontSize: 12, letterSpacing: "0.04em", lineHeight: 1.7 }}
          >
            Six operators, finance leads, and quality heads —
            coordinating 24/7 production across four PET lines.
          </p>
        </div>

        {/* Leader cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leaders.map((l, i) => (
            <motion.article
              key={l.name}
              className="liquid-glass rounded-[24px] p-5 flex flex-col gap-4"
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{
                delay: 0.2 + i * 0.08,
                duration: 0.7,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <div
                className="relative w-full overflow-hidden rounded-[16px] bg-panel"
                style={{ aspectRatio: "4 / 5" }}
              >
                <img
                  src={l.headshot}
                  alt={l.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ filter: "contrast(1.05) saturate(0.85)" }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(5,19,26,0.65) 100%)",
                  }}
                />
              </div>

              <div>
                <div
                  className="font-mono uppercase text-aqua"
                  style={{ fontSize: 10, letterSpacing: "0.18em" }}
                >
                  {l.title}
                </div>
                <div
                  className="mt-1 font-display uppercase text-cream"
                  style={{ fontSize: 20, letterSpacing: "0.01em" }}
                >
                  {l.name}
                </div>
                <p
                  className="mt-3 font-mono text-cream/70"
                  style={{ fontSize: 12, lineHeight: 1.6 }}
                >
                  {l.bio}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
