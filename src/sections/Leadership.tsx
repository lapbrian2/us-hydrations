import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { SectionHeader } from "../components/SectionHeader";
import { leaders, chairmanQuote } from "../lib/content";
import { useInView } from "../lib/hooks";

function ChairmanQuote() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <div ref={ref} className="mb-24 lg:mb-36 relative">
      <motion.div
        className="font-script text-aqua absolute -top-12 lg:-top-20 left-0 pointer-events-none mix-exclusion"
        style={{ fontSize: "clamp(60px, 9vw, 140px)", lineHeight: 1, letterSpacing: "-0.02em" }}
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={
          inView
            ? { opacity: 0.9, scale: 1, rotate: -3 }
            : { opacity: 0, scale: 0.85, rotate: -8 }
        }
        transition={{ delay: 0.2, duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
      >
        From the chairman
      </motion.div>

      <blockquote
        className="font-serif-italic text-cream leading-[1.05] max-w-[1500px] pt-6"
        style={{
          fontSize: "clamp(30px, 5vw, 82px)",
          letterSpacing: "-0.015em",
        }}
      >
        <span className="text-aqua mr-2" aria-hidden>
          “
        </span>
        <BlurText stagger={0.025} duration={0.55}>
          {chairmanQuote.text}
        </BlurText>
        <span className="text-aqua ml-1" aria-hidden>
          ”
        </span>
      </blockquote>
      <motion.div
        className="mt-8 font-mono uppercase text-cream/60 flex items-center gap-4"
        style={{ fontSize: 12, letterSpacing: "0.18em" }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="w-10 h-px bg-aqua" />
        {chairmanQuote.attribution}
      </motion.div>
    </div>
  );
}

export function Leadership() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="leadership" className="section-light relative w-full py-24 lg:py-32 overflow-hidden">
      <span className="section-num">04 / Leadership</span>

      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16">
        <ChairmanQuote />

        <SectionHeader
          digit="04"
          label="Leadership"
          eyebrow="Six operators · one plant"
          heading={
            <>
              <BlurText>The team </BlurText>
              <span
                className="font-serif-italic text-aqua inline-block"
                style={{ textTransform: "none" }}
              >
                <BlurText delay={0.15}>running</BlurText>
              </span>{" "}
              <BlurText delay={0.3}>the plant.</BlurText>
            </>
          }
          support={
            <>
              Finance leads, quality heads, logistics veterans — coordinating
              24/7 production across four PET lines.
            </>
          }
        />

        <div
          ref={ref}
          className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {leaders.map((l, i) => (
            <motion.article
              key={l.name}
              className="liquid-glass rounded-[24px] p-5 flex flex-col gap-5 card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                delay: 0.15 + i * 0.08,
                duration: 0.8,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <div
                className="relative w-full overflow-hidden rounded-[14px] bg-panel"
                style={{ aspectRatio: "4 / 5" }}
              >
                <img
                  src={l.headshot}
                  alt={l.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{
                    filter: "contrast(1.05) saturate(0.82)",
                    objectPosition: "center 22%",
                  }}
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 50%, rgba(5,19,26,0.75) 100%)",
                  }}
                />
                <div
                  className="absolute top-3 left-3 font-mono uppercase text-aqua"
                  style={{ fontSize: 9, letterSpacing: "0.22em" }}
                >
                  0{i + 1}
                </div>
              </div>

              <div>
                <div
                  className="font-mono uppercase text-aqua"
                  style={{ fontSize: 10, letterSpacing: "0.22em" }}
                >
                  {l.title}
                </div>
                <div
                  className="mt-1 font-display uppercase text-cream leading-[1]"
                  style={{ fontSize: 22, letterSpacing: "-0.005em" }}
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
