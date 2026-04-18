import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { capabilityGroups } from "../lib/content";
import { useInView } from "../lib/hooks";

const facilityImage =
  "https://www.ushydrations.com/wp-content/uploads/2019/05/HALF_2-5-19_USH_Additional_Location_DSC4875.jpg";

export function Capabilities() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="capabilities"
      ref={ref}
      className="relative w-full overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="img-cinematic"
          style={{ backgroundImage: `url(${facilityImage})` }}
        />
        <div className="img-tint" />
        <div className="img-grain" />
      </div>

      <span className="section-num">02 / Capabilities</span>

      <div className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32 flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="relative inline-block">
            <h2
              className="font-display uppercase text-cream leading-[1]"
              style={{ fontSize: "clamp(32px, 5.5vw, 84px)" }}
            >
              <BlurText>One plant. </BlurText>
              <span className="font-serif-italic text-aqua" style={{ textTransform: "none" }}>
                <BlurText delay={0.2}>every</BlurText>
              </span>{" "}
              <BlurText delay={0.4}>format.</BlurText>
            </h2>
            <span
              className="font-script text-aqua mix-exclusion absolute -rotate-2 pointer-events-none"
              style={{
                right: "-60px",
                bottom: "-24px",
                fontSize: "clamp(32px, 4.4vw, 64px)",
                lineHeight: 1,
              }}
            >
              Pittston
            </span>
          </div>

          <p
            className="font-mono uppercase text-cream max-w-[360px]"
            style={{ fontSize: 14, lineHeight: 1.7, letterSpacing: "0.04em" }}
          >
            A 1,000,000 sq ft plant off I-81. PET, still to sparkling, purified
            through alkaline — purified, filled, packed, and palletized under
            one roof.
          </p>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {capabilityGroups.map((c, i) => (
            <motion.div
              key={c.num}
              className="bg-ink/70 backdrop-blur-sm p-6 lg:p-8"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                delay: 0.3 + i * 0.1,
                duration: 0.7,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              <div
                className="font-display text-aqua"
                style={{ fontSize: 14, letterSpacing: "0.14em" }}
              >
                {c.num}
              </div>
              <div
                className="mt-4 font-display uppercase text-cream"
                style={{ fontSize: "clamp(22px, 2vw, 30px)", lineHeight: 1.1 }}
              >
                {c.title}
              </div>
              <p
                className="mt-3 font-mono uppercase text-cream/60"
                style={{ fontSize: 11, lineHeight: 1.6, letterSpacing: "0.08em" }}
              >
                {c.copy}
              </p>
              <ul className="mt-5 space-y-1.5 font-mono text-cream/80" style={{ fontSize: 12 }}>
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="text-aqua mt-1.5" style={{ fontSize: 8 }} aria-hidden>
                      ▸
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
