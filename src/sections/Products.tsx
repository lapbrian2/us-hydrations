import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { BlurText } from "../components/BlurText";
import { SectionHeader } from "../components/SectionHeader";
import { ParallaxLayer } from "../components/ParallaxLayer";
import { products } from "../lib/content";
import { useInView } from "../lib/hooks";
import type { MouseEvent } from "react";
import type { Product } from "../lib/content";

function handleTilt(e: MouseEvent<HTMLDivElement>) {
  const card = e.currentTarget;
  const r = card.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width;
  const py = (e.clientY - r.top) / r.height;
  const ry = (px - 0.5) * 8;
  const rx = (0.5 - py) * 6;
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

/**
 * Asymmetric zig-zag layout — 12-col grid.
 * Row 1: Purified 7 / Distilled 5
 * Row 2: Alkaline 5 / Enhanced 7
 * Row 3: Flavored 7 / Carbonated 5
 * Each card's aspect ratio is set per size so the layout breathes editorially.
 */
const slots: { span: 7 | 5; aspect: string }[] = [
  { span: 7, aspect: "16 / 11" }, // Purified
  { span: 5, aspect: "4 / 5" }, //   Distilled
  { span: 5, aspect: "4 / 5" }, //   Alkaline
  { span: 7, aspect: "16 / 11" }, // Enhanced
  { span: 7, aspect: "16 / 11" }, // Flavored
  { span: 5, aspect: "4 / 5" }, //   Carbonated
];

interface ProductCardProps {
  product: Product;
  index: number;
  slot: (typeof slots)[number];
  inView: boolean;
}

function ProductCard({ product: p, index: i, slot, inView }: ProductCardProps) {
  const featured = slot.span === 7;
  const spanClass =
    slot.span === 7 ? "lg:col-span-7" : "lg:col-span-5";
  return (
    <motion.div
      className={`liquid-glass rounded-[28px] p-[16px] card col-span-12 ${spanClass}`}
      onPointerMove={handleTilt}
      onPointerLeave={resetTilt}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        delay: 0.15 + i * 0.08,
        duration: 0.9,
        ease: [0.2, 0.8, 0.2, 1],
      }}
    >
      {/* Image container */}
      <div
        className="relative rounded-[20px] overflow-hidden w-full"
        style={{ aspectRatio: slot.aspect }}
      >
        <ParallaxLayer intensity={30} scale={1.1} className="absolute inset-0">
          <div
            className="img-cinematic"
            style={{ backgroundImage: `url(${p.image})` }}
          />
          <div className="img-tint" />
        </ParallaxLayer>

        {/* Tag top-left */}
        <div
          className="absolute top-5 left-5 font-mono uppercase text-aqua z-[3]"
          style={{ fontSize: 9, letterSpacing: "0.22em" }}
        >
          0{i + 1} · {p.tag}
        </div>

        {/* Product name centered */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
          <div
            className="font-display uppercase text-cream text-center px-6 leading-[0.88]"
            style={{
              fontSize: featured
                ? "clamp(48px, 6vw, 96px)"
                : "clamp(40px, 4.8vw, 68px)",
              letterSpacing: "-0.01em",
              textShadow: "0 4px 30px rgba(5,19,26,0.7)",
            }}
          >
            {p.label}
          </div>
        </div>

        {/* Spec overlay */}
        <div className="absolute left-4 right-4 bottom-4 z-[3]">
          <div
            className="liquid-glass rounded-[16px] flex items-center justify-between"
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
              className="btn-primary w-10 h-10 shrink-0 rounded-full"
            >
              <ArrowUpRight size={14} strokeWidth={2.8} />
            </button>
          </div>
        </div>
      </div>

      {/* Description under card */}
      <p
        className="mt-4 px-2 pb-1 font-mono text-cream/70"
        style={{ fontSize: 12, lineHeight: 1.6 }}
      >
        {p.description}
      </p>
    </motion.div>
  );
}

export function Products() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.08 });

  return (
    <section
      id="products"
      className="relative w-full bg-ink grid-bg py-24 lg:py-32 overflow-hidden"
    >
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
          className="mt-16 lg:mt-24 grid grid-cols-12 gap-6 lg:gap-8"
        >
          {products.map((p, i) => (
            <ProductCard
              key={p.slug}
              product={p}
              index={i}
              slot={slots[i] ?? { span: 7, aspect: "16 / 11" }}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
