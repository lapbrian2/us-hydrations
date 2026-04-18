import { motion } from "motion/react";
import { BlurText } from "../components/BlurText";
import { story } from "../lib/content";
import { useInView } from "../lib/hooks";

const storyImage =
  "https://www.ushydrations.com/wp-content/uploads/2019/04/2-15-19-USH-Addl_DSC1720.jpg";

export function Story() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section id="story" ref={ref} className="relative w-full overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="img-cinematic"
          style={{ backgroundImage: `url(${storyImage})` }}
        />
        <div className="img-tint" />
        <div className="img-grain" />
      </div>

      <span className="section-num">06 / Our Story</span>

      <div className="relative z-10 max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12 py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-7">
            <h2
              className="font-display uppercase text-cream leading-[0.95] mb-10"
              style={{ fontSize: "clamp(36px, 5.5vw, 86px)" }}
            >
              <BlurText stagger={0.06}>{story.heading}</BlurText>
            </h2>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 flex flex-col gap-6">
            {story.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="font-mono uppercase text-cream/85"
                style={{ fontSize: 13, lineHeight: 1.75, letterSpacing: "0.03em" }}
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
        </div>
      </div>
    </section>
  );
}
