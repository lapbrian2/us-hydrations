import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { SectionHeader } from "../components/SectionHeader";
import { ParallaxLayer } from "../components/ParallaxLayer";
import { products } from "../lib/content";
import { useInView } from "../lib/hooks";
import type { MouseEvent } from "react";

function handleTilt(e: MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  const ry = (px - 0.5) * 12;
  const rx = (0.5 - py) * 10;
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
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id="products" className="relative w-full bg-ink grid-bg py-24 lg:py-32 overflow-hidden">
      <span className="section-num">03 / Products</span>

      <div className="max-w-[1831px] mx-auto px-5 sm:px-8 lg:px-16">
        <SectionHeader
          digit="03"
          label="Product Lines"
          eyebrow="Six formats · one line"
          heading={
            <>
              <BlurText>Products </BlurText>
              <span
                className="font-script text-aqua mix-exclusion inline-block"
                style={{
                  textTransform: "none",
                  letterSpacing: "-0.02em",
                  fontSize: "0.85em",
                }}
              >
                <BlurText delay={0.15}>we bottle</BlurText>
              </span>
            </>
          }
          support={
            <>
              Purified to carbonated. Private label, co-pack, functional —
              from 10oz singles to 1.5L family bottles.
            </>
          }
        />

        <div
          ref={ref}
          className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {products.map((p, i) => (
            <motion.div
              key={p.slug}
              className="liquid-glass rounded-[28px] p-[16px] card"
              onPointerMove={handleTilt}
              onPointerLeave={resetTilt}
              initial={{ opacity: 0, y: 48 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 48 }}
              transition={{
                delay: 0.15 + (i % 3) * 0.1 + Math.floor(i / 3) * 0.2,
                duration: 0.9,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              style={{
                transform: `translateY(${(i % 2) * 32}px)`,
              }}
            >
              {/* Square image */}
              <div
                className="relative rounded-[20px] overflow-hidden w-full"
                style={{ aspectRatio: "1 / 1.08" }}
              >
                <ParallaxLayer intensity={30} scale={1.1} className="absolute inset-0">
                  <div
                    className="img-cinematic"
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                  <div className="img-tint" />
                </ParallaxLayer>

                {/* Category label top-left */}
                <div
                  className="absolute top-5 left-5 font-mono uppercase text-aqua z-[3]"
                  style={{ fontSize: 9, letterSpacing: "0.22em" }}
                >
                  0{i + 1} · {p.tag}
                </div>

                {/* Product name — huge, centered */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
                  <div
                    className="font-display uppercase text-cream text-center px-6 leading-[0.9]"
                    style={{
                      fontSize: "clamp(48px, 6vw, 90px)",
                      letterSpacing: "-0.01em",
                      textShadow: "0 4px 30px rgba(5,19,26,0.7)",
                    }}
                  >
                    {p.label}
                  </div>
                </div>

                {/* Spec overlay bar */}
                <div
                  className="absolute left-4 right-4 bottom-4 liquid-glass rounded-[16px] flex items-center justify-between z-[3]"
                  style={{ padding: "12px 16px" }}
                >
                  <div className="flex flex-col min-w-0">
                    <span
                      className="font-mono uppercase text-cream/60 truncate"
                      style={{ fontSize: 9, letterSpacing: "0.18em" }}
                    >
                      Format
                    </span>
                    <span
                      className="font-display text-cream truncate"
                      style={{ fontSize: 15, letterSpacing: "-0.005em" }}
                    >
                      {p.format}
                    </span>
                  </div>
                  <button
                    aria-label={`View ${p.label} spec`}
                    className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
                    style={{
                      background: "linear-gradient(to bottom right, #7CF5D8, #1FA08A)",
                      boxShadow: "0 8px 24px rgba(124,245,216,0.35)",
                    }}
                  >
                    <ArrowUpRight size={14} strokeWidth={2.8} color="#05131A" />
                  </button>
                </div>
              </div>

              {/* Description */}
              <p
                className="mt-4 px-2 pb-1 font-mono text-cream/70"
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
