import { motion } from "motion/react";
import { ArrowUpRight, Phone, Mail, Linkedin } from "lucide-react";
import { BlurText } from "../components/BlurText";
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
        style={{ aspectRatio: "21 / 9", minHeight: 560 }}
      >
        <div
          className="img-cinematic"
          style={{ backgroundImage: `url(${ctaImage})` }}
        />
        <div className="img-tint" />
        <div className="img-grain" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(5,19,26,0.85) 0%, rgba(5,19,26,0.25) 50%, rgba(5,19,26,0.85) 100%)",
          }}
        />
        <div
          className="absolute left-0 right-0"
          style={{
            top: "62%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(124,245,216,0.6), transparent)",
          }}
        />
        <div
          className="absolute"
          style={{
            left: "60%",
            top: "46%",
            width: 260,
            height: 260,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(124,245,216,0.4), transparent 60%)",
            filter: "blur(8px)",
          }}
        />
      </div>

      {/* Overlay content */}
      <div className="absolute inset-0 flex items-center pointer-events-none">
        <div className="max-w-[1831px] w-full mx-auto px-5 sm:px-8 lg:px-12 lg:pl-[18%]">
          <div className="relative max-w-[760px]">
            <motion.span
              className="font-script text-aqua mix-exclusion absolute -rotate-2"
              style={{
                left: 0,
                top: "-0.9em",
                fontSize: "clamp(22px, 3.6vw, 68px)",
                lineHeight: 1,
              }}
              initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
              animate={
                inView
                  ? { opacity: 1, scale: 1, rotate: -2 }
                  : { opacity: 0, scale: 0.9, rotate: -8 }
              }
              transition={{ delay: 0.6, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              Let's run it
            </motion.span>

            <h2
              className="font-display uppercase text-cream leading-[1]"
              style={{ fontSize: "clamp(28px, 5.5vw, 78px)" }}
            >
              <div style={{ marginBottom: "clamp(16px, 2vw, 36px)" }}>
                <BlurText>Your brand.</BlurText>
              </div>
              <div>
                <BlurText delay={0.3}>Our line.</BlurText>
              </div>
              <div>
                <BlurText delay={0.6}>Ship from Pittston.</BlurText>
              </div>
            </h2>

            <motion.div
              className="mt-12 flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16 pointer-events-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <div>
                <div
                  className="font-mono uppercase text-cream/60"
                  style={{ fontSize: 11, letterSpacing: "0.14em" }}
                >
                  Plant address
                </div>
                <div
                  className="font-display uppercase text-cream mt-2"
                  style={{ fontSize: 18, lineHeight: 1.3 }}
                >
                  {brand.contact.address1}
                  <br />
                  {brand.contact.address2}
                </div>
              </div>
              <div>
                <div
                  className="font-mono uppercase text-cream/60"
                  style={{ fontSize: 11, letterSpacing: "0.14em" }}
                >
                  Sales
                </div>
                <div
                  className="font-display uppercase text-cream mt-2 flex flex-col"
                  style={{ fontSize: 18, lineHeight: 1.3 }}
                >
                  <a
                    href={brand.contact.emailHref}
                    className="hover:text-aqua transition inline-flex items-center gap-2"
                  >
                    {brand.contact.email}
                    <ArrowUpRight size={14} />
                  </a>
                  <a
                    href={brand.contact.phoneHref}
                    className="hover:text-aqua transition"
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
        style={{ left: "5%", bottom: "10%" }}
      >
        <div className="liquid-glass overflow-hidden flex flex-col rounded-[1rem] md:rounded-[1.25rem]">
          <a
            href={brand.contact.phoneHref}
            aria-label="Call"
            className="flex items-center justify-center border-b border-white/10 hover:bg-white/10 transition w-[14vw] max-w-[8rem] sm:w-[8rem] h-[14vw] max-h-[4.5rem] sm:h-[4.5rem]"
          >
            <Phone size={22} strokeWidth={1.8} color="#EAF4F2" />
          </a>
          <a
            href={brand.contact.emailHref}
            aria-label="Email"
            className="flex items-center justify-center border-b border-white/10 hover:bg-white/10 transition w-[14vw] max-w-[8rem] sm:w-[8rem] h-[14vw] max-h-[4.5rem] sm:h-[4.5rem]"
          >
            <Mail size={22} strokeWidth={1.8} color="#EAF4F2" />
          </a>
          <a
            href="https://www.linkedin.com/company/ushydrations"
            aria-label="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center hover:bg-white/10 transition w-[14vw] max-w-[8rem] sm:w-[8rem] h-[14vw] max-h-[4.5rem] sm:h-[4.5rem]"
          >
            <Linkedin size={22} strokeWidth={1.8} color="#EAF4F2" />
          </a>
        </div>
      </div>
    </section>
  );
}
