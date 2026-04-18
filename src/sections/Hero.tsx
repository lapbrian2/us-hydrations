import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { Counter } from "../components/Counter";
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
      {/* Cinematic photo layer */}
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
            "linear-gradient(180deg, rgba(5,19,26,0.25) 0%, rgba(5,19,26,0.15) 45%, rgba(5,19,26,0.85) 100%)",
        }}
      />

      {/* Top scrim for nav legibility */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none z-[5]"
        style={{
          height: 180,
          background:
            "linear-gradient(180deg, rgba(5,19,26,0.85) 0%, rgba(5,19,26,0.45) 55%, transparent 100%)",
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

      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12 min-h-screen flex flex-col justify-end pb-20 lg:pb-28 pt-32 lg:pt-40">
        <div className="relative lg:ml-16 max-w-[1100px]">
          {/* Kicker */}
          <motion.div
            className="flex items-center gap-3 mb-6 font-mono uppercase text-cream/70"
            style={{ fontSize: 12, letterSpacing: "0.18em" }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="w-8 h-px bg-aqua" />
            {brand.hero.kicker}
          </motion.div>

          {/* Main headline: BlurText word stagger */}
          <h1
            className="font-display uppercase text-cream leading-[0.92]"
            style={{ fontSize: "clamp(44px, 8vw, 124px)" }}
          >
            <BlurText delay={2.1} stagger={0.1}>
              {brand.hero.headline}
            </BlurText>
          </h1>

          {/* Subline with italic accent */}
          <div
            className="mt-4 font-display uppercase text-cream/90 leading-[1] flex flex-wrap items-baseline gap-x-4"
            style={{ fontSize: "clamp(22px, 3.4vw, 46px)" }}
          >
            <BlurText delay={2.7} stagger={0.06} className="font-serif-italic text-aqua" style={{ textTransform: "none" }}>
              {brand.hero.headlineItalic}
            </BlurText>
            <BlurText delay={3.0} stagger={0.05} className="text-cream/80">
              {brand.hero.headlineTail}
            </BlurText>
          </div>

          {/* Script accent */}
          <motion.span
            className="font-script text-aqua mix-exclusion absolute -rotate-2 pointer-events-none"
            style={{
              right: "-10px",
              top: "-28px",
              fontSize: "clamp(28px, 4.2vw, 56px)",
              lineHeight: 1,
            }}
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 0.95, scale: 1, rotate: -2 }}
            transition={{ delay: 3.4, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {brand.hero.script}
          </motion.span>

          {/* Support */}
          <motion.p
            className="mt-10 max-w-[620px] font-mono uppercase text-cream/80"
            style={{ fontSize: 14, lineHeight: 1.7, letterSpacing: "0.04em" }}
            initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
            animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            transition={{ delay: 3.5, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {brand.hero.support}
          </motion.p>

          {/* Stats strip */}
          <motion.div
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-[820px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          >
            {heroStats.map((s, i) => (
              <div key={i} className="relative">
                <div
                  className="font-display text-cream"
                  style={{ fontSize: "clamp(28px, 3vw, 44px)", lineHeight: 1 }}
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
                  className="font-mono uppercase text-cream/60 mt-2"
                  style={{ fontSize: 10, letterSpacing: "0.14em" }}
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
