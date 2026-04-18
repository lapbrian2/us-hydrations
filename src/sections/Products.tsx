import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { products } from "../lib/content";
import { useInView } from "../lib/hooks";
import type { MouseEvent } from "react";

function handleTilt(e: MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  const ry = (px - 0.5) * 10;
  const rx = (0.5 - py) * 8;
  card.style.setProperty("--rx", rx + "deg");
  card.style.setProperty("--ry", ry + "deg");
  card.style.setProperty("--gx", px * 100 + "%");
  card.style.setProperty("--gy", py * 100 + "%");
}
function resetTilt(e: MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  card.style.setProperty("--rx", "0deg");
  card.style.setProperty("--ry", "0deg");
}

export function Products() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <section id="products" ref={ref} className="relative w-full bg-ink grid-bg py-24 lg:py-32">
      <span className="section-num">03 / Products</span>

      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">
          <h2
            className="font-display uppercase text-cream leading-[1]"
            style={{ fontSize: "clamp(36px, 6vw, 92px)" }}
          >
            <BlurText>Products </BlurText>
            <br />
            <span
              className="font-script text-aqua mix-exclusion inline-block"
              style={{
                textTransform: "none",
                letterSpacing: "-0.02em",
                fontSize: "clamp(32px, 5.2vw, 76px)",
              }}
            >
              <BlurText delay={0.2}>we bottle</BlurText>
            </span>
          </h2>

          <a
            href="#contact"
            className="group inline-flex flex-col items-start self-start lg:self-end"
          >
            <span className="flex items-end gap-4 font-display uppercase text-cream leading-[0.9]">
              <span style={{ fontSize: "clamp(28px, 4vw, 54px)" }}>SPEC</span>
              <span className="flex flex-col leading-[1]">
                <span style={{ fontSize: "clamp(18px, 2.2vw, 30px)" }}>FULL</span>
                <span style={{ fontSize: "clamp(18px, 2.2vw, 30px)" }}>SHEET</span>
              </span>
            </span>
            <span
              className="block bg-aqua w-full mt-3"
              style={{ height: "clamp(5px, 0.7vw, 9px)" }}
            />
          </a>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              className="liquid-glass rounded-[32px] p-[18px] card"
              onPointerMove={handleTilt}
              onPointerLeave={resetTilt}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                delay: 0.2 + i * 0.08,
                duration: 0.7,
                ease: [0.2, 0.8, 0.2, 1],
              }}
            >
              {/* Image square */}
              <div
                className="relative rounded-[24px] overflow-hidden"
                style={{ paddingBottom: "100%" }}
              >
                <div
                  className="img-cinematic"
                  style={{ backgroundImage: `url(${p.image})` }}
                />
                <div className="img-tint" />

                {/* Category label top-left */}
                <div
                  className="absolute top-5 left-5 font-mono uppercase text-cream/80 z-[3]"
                  style={{ fontSize: 10, letterSpacing: "0.18em" }}
                >
                  {p.tag}
                </div>

                {/* Big name */}
                <div
                  className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]"
                >
                  <div
                    className="font-display uppercase text-cream/95 text-center px-6"
                    style={{
                      fontSize: "clamp(44px, 7vw, 82px)",
                      letterSpacing: "0.02em",
                      textShadow: "0 2px 20px rgba(5,19,26,0.6)",
                    }}
                  >
                    {p.label}
                  </div>
                </div>

                {/* Spec overlay bar */}
                <div
                  className="absolute left-4 right-4 bottom-4 liquid-glass rounded-[20px] flex items-center justify-between z-[3]"
                  style={{ padding: "14px 18px" }}
                >
                  <div className="flex flex-col min-w-0">
                    <span
                      className="font-mono uppercase text-cream/70 truncate"
                      style={{ fontSize: 10, letterSpacing: "0.1em" }}
                    >
                      Format
                    </span>
                    <span
                      className="font-display text-cream truncate"
                      style={{ fontSize: 16 }}
                    >
                      {p.format}
                    </span>
                  </div>
                  <button
                    aria-label={`View ${p.label} spec`}
                    className="w-11 h-11 shrink-0 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                    style={{
                      background: "linear-gradient(to bottom right, #7CF5D8, #1FA08A)",
                      boxShadow: "0 8px 24px rgba(124,245,216,0.35)",
                    }}
                  >
                    <ArrowUpRight size={16} strokeWidth={2.8} color="#05131A" />
                  </button>
                </div>
              </div>

              {/* Description under the image */}
              <p
                className="mt-4 px-2 font-mono text-cream/70"
                style={{ fontSize: 12, lineHeight: 1.6 }}
              >
                {p.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
