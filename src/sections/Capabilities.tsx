import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { SectionHeader } from "../components/SectionHeader";
import { ParallaxLayer } from "../components/ParallaxLayer";
import { capabilityGroups } from "../lib/content";
import { useInView } from "../lib/hooks";
import type { CapabilityGroup } from "../lib/content";

interface RowProps {
  group: CapabilityGroup;
  index: number;
  theme: "dark" | "light";
}

/**
 * A single chess-row — image column + copy column, alternating image side.
 * Theme-aware: can render on a dark ink background or a light paper background,
 * driven by `theme`. Rows alternate so the reader gets a magazine beat as
 * they scroll through the 4 capability groups.
 */
function CapabilityRow({ group, index, theme }: RowProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  const imageLeft = index % 2 === 0;
  const isLight = theme === "light";

  return (
    <div
      className={`relative w-full ${
        isLight ? "section-light" : "bg-ink"
      }`}
    >
      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16">
        <div
          ref={ref}
          className={`grid lg:grid-cols-12 gap-10 lg:gap-20 items-center py-20 lg:py-28 ${
            !imageLeft ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* Image */}
          <motion.div
            className="lg:col-span-6 relative overflow-hidden rounded-[24px] lg:[direction:ltr]"
            style={{ aspectRatio: "4 / 5" }}
            initial={{ opacity: 0, x: imageLeft ? -60 : 60 }}
            animate={
              inView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: imageLeft ? -60 : 60 }
            }
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <ParallaxLayer
              intensity={40}
              scale={1.15}
              className="absolute inset-0"
            >
              <div
                className="img-cinematic"
                style={{ backgroundImage: `url(${group.image})` }}
              />
              <div className="img-tint" />
              <div className="img-grain" />
            </ParallaxLayer>

            {/* Big number over image (always legible — image has dark vignette) */}
            <div
              className="absolute top-6 left-6 font-display text-cream/95 z-[2] leading-[0.8]"
              style={{
                fontSize: "clamp(40px, 5vw, 80px)",
                letterSpacing: "-0.02em",
              }}
            >
              {group.num}
            </div>
            <div
              className="absolute top-6 right-6 font-mono uppercase text-aqua z-[2]"
              style={{ fontSize: 10, letterSpacing: "0.22em" }}
            >
              Capability / {group.num}
            </div>
          </motion.div>

          {/* Copy */}
          <div className="lg:col-span-6 lg:[direction:ltr] flex flex-col gap-8">
            <h3
              className="font-display uppercase text-cream leading-[0.95]"
              style={{ fontSize: "clamp(40px, 5.8vw, 92px)" }}
            >
              <BlurText>{group.title}</BlurText>{" "}
              {group.titleItalic && (
                <span
                  className="font-serif-italic text-aqua inline-block"
                  style={{ textTransform: "none", letterSpacing: "-0.01em" }}
                >
                  <BlurText delay={0.15}>{group.titleItalic}</BlurText>
                </span>
              )}
            </h3>

            <motion.p
              className="font-mono uppercase text-cream/75 max-w-[480px]"
              style={{
                fontSize: 13,
                lineHeight: 1.7,
                letterSpacing: "0.04em",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              {group.copy}
            </motion.p>

            <motion.ul
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mt-2"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
            >
              {group.bullets.map((b, i) => (
                <motion.li
                  key={b}
                  className="font-mono text-cream/85 flex items-start gap-3 border-t border-cream/10 pt-3"
                  style={{ fontSize: 13, lineHeight: 1.5 }}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.5 }}
                >
                  <span
                    className="font-mono text-aqua shrink-0"
                    style={{ fontSize: 10, paddingTop: 3 }}
                    aria-hidden
                  >
                    0{i + 1}
                  </span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="relative w-full bg-ink overflow-hidden"
    >
      <span className="section-num">02 / Capabilities</span>

      {/* Header region (always dark so the section announces itself
           consistently, even as the rows below alternate) */}
      <div className="relative max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16 pt-24 lg:pt-32 pb-8 lg:pb-12">
        <SectionHeader
          digit="02"
          label="Capabilities"
          eyebrow="Water. Bottle. Test. Ship."
          heading={
            <>
              <BlurText>One plant. </BlurText>
              <span
                className="font-serif-italic text-aqua"
                style={{ textTransform: "none" }}
              >
                <BlurText delay={0.15}>every</BlurText>
              </span>{" "}
              <BlurText delay={0.3}>format.</BlurText>
            </>
          }
          support={
            <>
              1,000,000 sq ft off I-81. PET still through alkaline —
              purified, filled, packed, palletized under one roof.
            </>
          }
        />
      </div>

      {/* Alternating rows — row theme flips per index so the reader gets a
           magazine beat: dark → light → dark → light. Each row is full-bleed
           with its own bg; internal content still respects max-w-[1831px]. */}
      <div className="mt-12 lg:mt-20">
        {capabilityGroups.map((g, i) => (
          <CapabilityRow
            key={g.num}
            group={g}
            index={i}
            theme={i % 2 === 0 ? "dark" : "light"}
          />
        ))}
      </div>
    </section>
  );
}
