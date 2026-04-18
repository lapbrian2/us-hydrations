import { motion } from "motion/react";
import { ArrowUpRight, Phone, Mail, Linkedin } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { ParallaxLayer } from "../components/ParallaxLayer";
import { brand } from "../lib/content";
import { useInView } from "../lib/hooks";

const ctaImage =
  "https://www.ushydrations.com/wp-content/uploads/2019/05/2-15-19_USH_Addl_DSC1676.jpg";

export function Cta() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden bg-ink"
    >
      {/* Cinematic bg */}
      <div
        className="w-full relative"
        style={{ aspectRatio: "21 / 10", minHeight: 620 }}
      >
        <ParallaxLayer intensity={70} scale={1.12} className="absolute inset-0">
          <div
            className="img-cinematic"
            style={{ backgroundImage: `url(${ctaImage})` }}
          />
          <div className="img-tint" />
          <div className="img-grain" />
        </ParallaxLayer>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,19,26,0.88) 0%, rgba(5,19,26,0.35) 45%, rgba(5,19,26,0.88) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,19,26,0.25) 0%, transparent 40%, rgba(5,19,26,0.8) 100%)",
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: "60%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(124,245,216,0.5), transparent)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            left: "55%",
            top: "42%",
            width: 320,
            height: 320,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(124,245,216,0.35), transparent 60%)",
            filter: "blur(12px)",
          }}
        />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="max-w-[1831px] w-full mx-auto px-5 sm:px-8 lg:px-16">
          <div className="relative max-w-[1100px] lg:ml-[12%]">
            <motion.span
              className="font-script text-aqua mix-exclusion absolute -rotate-2 pointer-events-none"
              style={{
                left: 0,
                top: "-0.9em",
                fontSize: "clamp(28px, 4.2vw, 88px)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
              initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
              animate={
                inView
                  ? { opacity: 1, scale: 1, rotate: -2 }
                  : { opacity: 0, scale: 0.85, rotate: -10 }
              }
              transition={{ delay: 0.5, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              Let's run it
            </motion.span>

            <h2
              className="font-display uppercase text-cream"
              style={{
                fontSize: "clamp(40px, 7.5vw, 140px)",
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
              }}
            >
              <div style={{ marginBottom: "clamp(10px, 1.2vw, 22px)" }}>
                <BlurText>Your brand.</BlurText>
              </div>
              <div style={{ marginBottom: "clamp(10px, 1.2vw, 22px)" }}>
                <span
                  className="font-serif-italic text-aqua"
                  style={{ textTransform: "none", letterSpacing: "-0.015em" }}
                >
                  <BlurText delay={0.3}>Our line.</BlurText>
                </span>
              </div>
              <div>
                <BlurText delay={0.6}>Ship from Pittston.</BlurText>
              </div>
            </h2>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row sm:items-end gap-8 sm:gap-20 pointer-events-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4, duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div>
                <div
                  className="font-mono uppercase text-aqua/80"
                  style={{ fontSize: 11, letterSpacing: "0.22em" }}
                >
                  Plant address
                </div>
                <div
                  className="font-display uppercase text-cream mt-2"
                  style={{ fontSize: 20, lineHeight: 1.3, letterSpacing: "-0.005em" }}
                >
                  {brand.contact.address1}
                  <br />
                  {brand.contact.address2}
                </div>
              </div>
              <div>
                <div
                  className="font-mono uppercase text-aqua/80"
                  style={{ fontSize: 11, letterSpacing: "0.22em" }}
                >
                  Sales
                </div>
                <div
                  className="font-display uppercase text-cream mt-2 flex flex-col gap-1"
                  style={{ fontSize: 20, lineHeight: 1.2, letterSpacing: "-0.005em" }}
                >
                  <a
                    href={brand.contact.emailHref}
                    className="hover:text-aqua transition inline-flex items-center gap-2 w-fit"
                  >
                    {brand.contact.email}
                    <ArrowUpRight size={15} />
                  </a>
                  <a
                    href={brand.contact.phoneHref}
                    className="hover:text-aqua transition w-fit"
                  >
                    {brand.contact.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom-left social stack */}
      <div
        className="absolute pointer-events-auto z-10"
        style={{ left: "4%", bottom: "9%" }}
      >
        <div className="liquid-glass overflow-hidden flex flex-col rounded-[1rem] md:rounded-[1.25rem]">
          <a
            href={brand.contact.phoneHref}
            aria-label="Call"
            className="flex items-center justify-center border-b border-white/10 hover:bg-aqua/10 transition w-[14vw] max-w-[8rem] sm:w-[7rem] h-[14vw] max-h-[4.5rem] sm:h-[4.5rem]"
          >
            <Phone size={22} strokeWidth={1.8} color="#EAF4F2" />
          </a>
          <a
            href={brand.contact.emailHref}
            aria-label="Email"
            className="flex items-center justify-center border-b border-white/10 hover:bg-aqua/10 transition w-[14vw] max-w-[8rem] sm:w-[7rem] h-[14vw] max-h-[4.5rem] sm:h-[4.5rem]"
          >
            <Mail size={22} strokeWidth={1.8} color="#EAF4F2" />
          </a>
          <a
            href="https://www.linkedin.com/company/ushydrations"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center hover:bg-aqua/10 transition w-[14vw] max-w-[8rem] sm:w-[7rem] h-[14vw] max-h-[4.5rem] sm:h-[4.5rem]"
          >
            <Linkedin size={22} strokeWidth={1.8} color="#EAF4F2" />
          </a>
        </div>
      </div>
    </section>
  );
}
