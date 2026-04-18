import { motion } from "motion/react";
import { Play } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { Counter } from "../components/Counter";
import { Pill } from "../components/Pill";
import { brand, heroStats } from "../lib/content";

/**
 * Stacked editorial hero.
 * Top row: full-width video strip (~55vh, no crop, natural landscape aspect).
 * Bottom row: editorial text column on dark hydro-navy panel.
 *
 * Text never crosses video — legibility guaranteed.
 * Video never cropped — shown full-width at its natural aspect.
 * Resolves the prior split-screen's 9:14 portrait crop problem.
 */
export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-ink">
      {/* ================ VIDEO STRIP (full-bleed) ================ */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="relative w-full"
          style={{
            aspectRatio: "21 / 9",
            /* Cap at 540px so a 900×504 source never upscales more than ~2×.
               (900px source rendered into 21:9 box ≈ 386px tall.) */
            maxHeight: "min(540px, 62vh)",
            minHeight: "min(380px, 56vh)",
          }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.9, duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="https://www.ushydrations.com/wp-content/uploads/2019/04/2-15-19-USH-Addl_DSC1720.jpg"
            src={brand.assets.heroVideo}
            aria-hidden
          />

          {/* Top scrim for nav legibility */}
          <div
            className="absolute inset-x-0 top-0 pointer-events-none z-[5]"
            style={{
              height: 200,
              background:
                "linear-gradient(180deg, rgba(5,19,26,0.85) 0%, rgba(5,19,26,0.45) 55%, transparent 100%)",
            }}
          />

          {/* Bottom fade INTO the ink panel below */}
          <div
            className="absolute inset-x-0 bottom-0 pointer-events-none z-[5]"
            style={{
              height: 180,
              background:
                "linear-gradient(180deg, transparent 0%, rgba(5,19,26,0.5) 40%, rgba(5,19,26,1) 100%)",
            }}
          />

          {/* Script accent — avoids mix-blend-exclusion because the
               bright/yellow parts of the video would invert aqua to pink.
               Subtle dark backdrop-shadow instead keeps it readable. */}
          <motion.span
            className="font-script text-aqua absolute -rotate-2 pointer-events-none z-[6]"
            style={{
              right: "clamp(20px, 4vw, 72px)",
              top: "clamp(100px, 16vh, 160px)",
              fontSize: "clamp(32px, 4.2vw, 76px)",
              lineHeight: 1,
              letterSpacing: "-0.015em",
              textShadow:
                "0 2px 14px rgba(5,19,26,0.55), 0 0 30px rgba(5,19,26,0.35)",
            }}
            initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
            animate={{ opacity: 0.95, scale: 1, rotate: -2 }}
            transition={{ delay: 3.0, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {brand.hero.script}
          </motion.span>

          {/* TAKE TOUR pill, bottom-right */}
          <motion.a
            href="#capabilities"
            data-magnetic
            className="absolute z-[6] liquid-glass rounded-full inline-flex items-center gap-3 px-5 py-3 font-mono uppercase text-cream hover:text-aqua transition"
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              right: "clamp(20px, 4vw, 72px)",
              bottom: "clamp(40px, 6vh, 72px)",
            }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Play size={12} strokeWidth={2.5} fill="currentColor" />
            Take the tour
          </motion.a>

          {/* Video caption, bottom-left */}
          <motion.div
            className="absolute z-[6] font-mono uppercase text-cream/70"
            style={{
              fontSize: 10,
              letterSpacing: "0.22em",
              left: "clamp(20px, 5vw, 88px)",
              bottom: "clamp(40px, 6vh, 72px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.3, duration: 0.8 }}
          >
            <span className="text-aqua">01 /</span> Pittston, PA · Production Floor
          </motion.div>
        </motion.div>
      </div>

      {/* ================ EDITORIAL PANEL ================ */}
      <div className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left — headline + eyebrow */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              className="mb-10"
            >
              <Pill tone="aqua">EST. {brand.established} · Pittston, PA</Pill>
            </motion.div>

            <h1
              className="font-display uppercase text-cream"
              style={{
                fontSize: "clamp(44px, 7.5vw, 124px)",
                lineHeight: 0.88,
                letterSpacing: "-0.02em",
              }}
            >
              <BlurText delay={2.35} stagger={0.09}>
                Premier Beverage
              </BlurText>
              <br />
              <span
                className="font-serif-italic text-aqua"
                style={{ textTransform: "none", letterSpacing: "-0.015em" }}
              >
                <BlurText delay={2.75} stagger={0.09}>
                  Manufacturer
                </BlurText>
              </span>
            </h1>
          </div>

          {/* Right — support copy */}
          <div className="lg:col-span-4 lg:pt-4 flex items-start">
            <motion.p
              className="font-mono uppercase text-cream/80 max-w-[420px]"
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                letterSpacing: "0.03em",
              }}
              initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{
                delay: 3.3,
                duration: 0.9,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {brand.hero.support}
            </motion.p>
          </div>
        </div>

        {/* ================ STATS STRIP (full width) ================ */}
        <motion.div
          className="mt-16 lg:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-10 pt-10 border-t border-cream/10"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        >
          {heroStats.map((s, i) => (
            <div key={i} className="relative">
              <div
                className="font-mono uppercase text-aqua mb-3"
                style={{ fontSize: 10, letterSpacing: "0.22em" }}
              >
                0{i + 1}
              </div>
              <div
                className="font-display text-cream"
                style={{
                  fontSize: "clamp(40px, 4vw, 72px)",
                  lineHeight: 0.95,
                  letterSpacing: "-0.015em",
                }}
              >
                {s.staticValue ? (
                  s.staticValue
                ) : (
                  <Counter
                    target={s.target ?? 0}
                    suffix={s.suffix ?? ""}
                    format={s.target && s.target >= 1000 ? "compact" : "plain"}
                  />
                )}
              </div>
              <div
                className="font-mono uppercase text-cream/55 mt-4 max-w-[180px]"
                style={{
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  lineHeight: 1.55,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
