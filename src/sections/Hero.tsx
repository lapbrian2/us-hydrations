import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { Counter } from "../components/Counter";
import { ParallaxLayer } from "../components/ParallaxLayer";
import { brand, heroStats } from "../lib/content";

const bubbles = [
  { left: "8%", duration: 14, delay: 0 },
  { left: "17%", duration: 18, delay: 3 },
  { left: "26%", duration: 12, delay: 6 },
  { left: "38%", duration: 20, delay: 1 },
  { left: "52%", duration: 15, delay: 4 },
  { left: "63%", duration: 17, delay: 8 },
  { left: "74%", duration: 13, delay: 2 },
  { left: "83%", duration: 19, delay: 5 },
  { left: "91%", duration: 16, delay: 7 },
];

export function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden rounded-b-[32px]">
      {/* Cinematic photo layer (with parallax) */}
      <ParallaxLayer intensity={60} scale={1.12} className="absolute inset-0">
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="img-cinematic"
            style={{
              backgroundImage: `url(${"https://www.ushydrations.com/wp-content/uploads/2019/05/HALF_1-23-19_USH_Session_DSC9996.jpg"})`,
            }}
          />
          <div className="img-tint" />
          <div className="img-grain" />
        </div>
      </ParallaxLayer>

      {/* Video bg */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={brand.assets.heroVideo}
        aria-hidden
      />

      {/* Bottom darkening wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,19,26,0.30) 0%, rgba(5,19,26,0.15) 40%, rgba(5,19,26,0.75) 85%, rgba(5,19,26,0.95) 100%)",
        }}
      />

      {/* Top scrim for nav legibility */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-[5]"
        style={{
          height: 220,
          background:
            "linear-gradient(180deg, rgba(5,19,26,0.9) 0%, rgba(5,19,26,0.55) 45%, transparent 100%)",
        }}
      />

      {/* Rising bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((b, i) => (
          <span
            key={i}
            className="bubble"
            style={{
              left: b.left,
              animationDuration: `${b.duration}s`,
              animationDelay: `${b.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-14 min-h-screen flex flex-col justify-end pb-16 lg:pb-24 pt-36 lg:pt-44">
        <div className="relative max-w-[1200px]">
          {/* Kicker */}
          <motion.div
            className="flex items-center gap-3 mb-8 font-mono uppercase text-cream/70"
            style={{ fontSize: 11, letterSpacing: "0.22em" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="w-10 h-px bg-aqua" />
            {brand.hero.kicker}
          </motion.div>

          {/* Main headline */}
          <h1
            className="font-display uppercase text-cream"
            style={{
              fontSize: "clamp(52px, 10.5vw, 182px)",
              lineHeight: 0.86,
              letterSpacing: "-0.02em",
            }}
          >
            <BlurText delay={2.1} stagger={0.1}>
              Premier Beverage
            </BlurText>
            <br />
            <span className="font-serif-italic text-aqua" style={{ textTransform: "none", letterSpacing: "-0.015em" }}>
              <BlurText delay={2.55} stagger={0.1}>
                Manufacturer
              </BlurText>
            </span>
          </h1>

          {/* Script accent */}
          <motion.span
            className="font-script text-aqua mix-exclusion absolute -rotate-2 pointer-events-none"
            style={{
              right: "2%",
              top: "-32px",
              fontSize: "clamp(30px, 4.8vw, 76px)",
              lineHeight: 1,
            }}
            initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
            animate={{ opacity: 0.95, scale: 1, rotate: -2 }}
            transition={{ delay: 3.1, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {brand.hero.script}
          </motion.span>

          {/* Subline — short, high-contrast */}
          <motion.p
            className="mt-8 max-w-[720px] font-mono uppercase text-cream/85"
            style={{ fontSize: 15, lineHeight: 1.65, letterSpacing: "0.04em" }}
            initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ delay: 3.4, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {brand.hero.support}
          </motion.p>

          {/* Stats strip */}
          <motion.div
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-[960px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.7, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {heroStats.map((s, i) => (
              <div
                key={i}
                className="relative border-t border-cream/20 pt-4"
              >
                <div
                  className="font-display text-cream"
                  style={{
                    fontSize: "clamp(36px, 3.6vw, 56px)",
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
                      format={s.target && s.target >= 1000 ? "compact" : "plain"}
                    />
                  )}
                </div>
                <div
                  className="font-mono uppercase text-cream/55 mt-3"
                  style={{ fontSize: 10, letterSpacing: "0.18em", lineHeight: 1.4 }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
