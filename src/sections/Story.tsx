import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { SectionHeader } from "../components/SectionHeader";
import { story, ceoQuote } from "../lib/content";
import { useInView } from "../lib/hooks";

const storyImage =
  "https://www.ushydrations.com/wp-content/uploads/2019/04/2-15-19-USH-Addl_DSC1720.jpg";

const milestones: { year: string; label: string }[] = [
  { year: "1996", label: "Founded as Nature's Way Purewater Systems — spring-water bottling route" },
  { year: "2000", label: "Sandy Insalaco Sr. acquires majority ownership" },
  { year: "2005", label: "Retooling for high-volume contract manufacturing" },
  { year: "Today", label: "1,000,000 sq ft · 4 PET lines · 25+ years" },
];

export function Story() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="story" className="section-light relative w-full overflow-hidden">
      {/* Subtle light-mode background — tinted paper with very soft image wash */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${storyImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.08,
            filter: "saturate(0.3) brightness(1.4)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, var(--color-paper) 0%, rgba(239,243,244,0.88) 40%, var(--color-paper) 100%)",
          }}
        />
      </div>

      <span className="section-num">06 / Our Story</span>

      <div className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16 py-28 lg:py-40">
        <SectionHeader
          digit="06"
          label="Our Story"
          eyebrow="From a route to a plant"
          heading={<BlurText stagger={0.06}>{story.heading}</BlurText>}
        />

        {/* Narrative + milestones */}
        <div ref={ref} className="mt-20 lg:mt-28 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6 flex flex-col gap-8">
            {story.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="font-mono uppercase text-cream/85 max-w-[580px]"
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  letterSpacing: "0.03em",
                }}
                initial={{ filter: "blur(10px)", opacity: 0, y: 16 }}
                animate={
                  inView
                    ? { filter: "blur(0px)", opacity: 1, y: 0 }
                    : { filter: "blur(10px)", opacity: 0, y: 16 }
                }
                transition={{
                  delay: 0.3 + i * 0.15,
                  duration: 0.8,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Milestone timeline */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr] gap-6 lg:gap-8 py-6 lg:py-8 border-t border-cream/10 first:border-t-0 items-baseline"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{
                  delay: 0.6 + i * 0.12,
                  duration: 0.7,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
              >
                <div
                  className="font-display text-aqua leading-[1]"
                  style={{
                    fontSize: "clamp(30px, 3.2vw, 48px)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {m.year}
                </div>
                <div
                  className="font-mono uppercase text-cream/80"
                  style={{ fontSize: 12, letterSpacing: "0.04em", lineHeight: 1.6 }}
                >
                  {m.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CEO pull-quote — editorial break between timeline and section close */}
        <motion.figure
          className="mt-24 lg:mt-36 max-w-[1400px] mx-auto text-center relative"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ delay: 1.4, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div
            className="font-script text-aqua -rotate-1 mb-6"
            style={{
              fontSize: "clamp(32px, 4vw, 64px)",
              lineHeight: 1,
              letterSpacing: "-0.015em",
            }}
          >
            today
          </div>
          <blockquote
            className="font-serif-italic text-cream leading-[1.1]"
            style={{
              fontSize: "clamp(28px, 4.2vw, 68px)",
              letterSpacing: "-0.015em",
            }}
          >
            <span className="text-aqua mr-2" aria-hidden>“</span>
            <BlurText stagger={0.025} duration={0.6}>
              {ceoQuote.text}
            </BlurText>
            <span className="text-aqua ml-1" aria-hidden>”</span>
          </blockquote>
          <figcaption
            className="mt-8 font-mono uppercase text-cream/60 flex items-center justify-center gap-4"
            style={{ fontSize: 12, letterSpacing: "0.18em" }}
          >
            <span className="w-10 h-px bg-aqua" aria-hidden />
            {ceoQuote.attribution}
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
