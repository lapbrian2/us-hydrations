import { motion } from "motion/react";
import { Play } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { Counter } from "../components/Counter";
import { ParallaxLayer } from "../components/ParallaxLayer";
import { Pill } from "../components/Pill";
import { brand, heroStats } from "../lib/content";

const bgImage =
  "https://www.ushydrations.com/wp-content/uploads/2019/04/2-15-19-USH-Addl_DSC1720.jpg";

/**
 * Split-screen hero.
 * Left column: editorial typography on a dark hydro-navy panel.
 * Right column: contained video frame with a "TAKE TOUR" pill.
 *
 * Per design-taste-frontend Rule 3 (centered heroes banned at VARIANCE > 4).
 * Text never overlaps the video; legibility is guaranteed.
 */
export function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100dvh" }}
    >
      {/* Background — subtle cinematic still far behind left column */}
      <div className="absolute inset-0 bg-ink">
        <ParallaxLayer intensity={60} scale={1.1} className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "saturate(0.55) contrast(1.05) brightness(0.4)",
            }}
          />
        </ParallaxLayer>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(5,19,26,0.95) 0%, rgba(5,19,26,0.88) 45%, rgba(5,19,26,0.65) 70%, rgba(5,19,26,0.45) 100%)",
          }}
        />
      </div>

      <div
        className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16 pt-36 lg:pt-40 pb-16 lg:pb-24"
        style={{ minHeight: "100dvh" }}
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center h-full">
          {/* LEFT — editorial text column */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-10 lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.0, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <Pill tone="aqua">EST. {brand.established} · Pittston, PA</Pill>
            </motion.div>

            {/* Headline — scaled down from 182px to a more controlled 112px max */}
            <h1
              className="font-display uppercase text-cream"
              style={{
                fontSize: "clamp(44px, 7.2vw, 120px)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              <BlurText delay={2.15} stagger={0.09}>
                Premier Beverage
              </BlurText>
              <br />
              <span
                className="font-serif-italic text-aqua"
                style={{ textTransform: "none", letterSpacing: "-0.015em" }}
              >
                <BlurText delay={2.55} stagger={0.09}>
                  Manufacturer
                </BlurText>
              </span>
            </h1>

            {/* Support copy */}
            <motion.p
              className="max-w-[580px] font-mono uppercase text-cream/80"
              style={{
                fontSize: 14,
                lineHeight: 1.75,
                letterSpacing: "0.03em",
              }}
              initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
              animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              transition={{
                delay: 3.1,
                duration: 0.9,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {brand.hero.support}
            </motion.p>

            {/* Stats strip */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 max-w-[760px]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 3.4,
                duration: 0.8,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {heroStats.map((s, i) => (
                <div key={i} className="relative border-t border-cream/15 pt-4">
                  <div
                    className="font-display text-cream"
                    style={{
                      fontSize: "clamp(30px, 2.8vw, 44px)",
                      lineHeight: 1,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {s.staticValue ? (
                      s.staticValue
                    ) : (
                      <Counter
                        target={s.target ?? 0}
                        suffix={s.suffix ?? ""}
                        format={
                          s.target && s.target >= 1000 ? "compact" : "plain"
                        }
                      />
                    )}
                  </div>
                  <div
                    className="font-mono uppercase text-cream/55 mt-3 max-w-[160px]"
                    style={{
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      lineHeight: 1.5,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — contained video frame */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 2.2,
              duration: 1.2,
              ease: [0.2, 0.8, 0.2, 1],
            }}
          >
            <div
              className="relative rounded-[24px] overflow-hidden liquid-glass"
              style={{ aspectRatio: "9 / 14", minHeight: "min(72vh, 640px)" }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                src={brand.assets.heroVideo}
                aria-hidden
              />
              {/* Subtle frame darkening to marry with panel */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(5,19,26,0.1) 0%, transparent 20%, transparent 60%, rgba(5,19,26,0.55) 100%)",
                }}
              />
              {/* Script accent */}
              <span
                className="font-script text-aqua mix-exclusion absolute -rotate-2 pointer-events-none z-[3]"
                style={{
                  right: "16px",
                  top: "20px",
                  fontSize: "clamp(24px, 2.4vw, 42px)",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                }}
              >
                {brand.hero.script}
              </span>
              {/* Take-tour pill */}
              <a
                href="#capabilities"
                className="absolute left-4 right-4 bottom-4 z-[3] liquid-glass rounded-full inline-flex items-center justify-between gap-3 px-5 py-3 font-mono uppercase text-cream hover:text-aqua transition"
                style={{ fontSize: 11, letterSpacing: "0.22em" }}
              >
                <span className="flex items-center gap-2">
                  <Play size={12} strokeWidth={2.5} fill="currentColor" />
                  Take the tour
                </span>
                <span className="text-cream/60">01 / 06</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
