import { useEffect, useState } from "react";
import { motion } from "motion/react";

const sections: { id: string; label: string }[] = [
  { id: "hero", label: "Hero" },
  { id: "capabilities", label: "Capabilities" },
  { id: "products", label: "Products" },
  { id: "leadership", label: "Leadership" },
  { id: "credentials", label: "Credentials" },
  { id: "story", label: "Story" },
  { id: "contact", label: "Contact" },
];

/**
 * Fixed right-rail dots, one per section. Active dot fills aqua as the user
 * scrolls through. Hovering reveals the section label on the right-hand side.
 * Clicking jumps to the section (via anchor link, handled by Lenis smooth scroll).
 */
export function SectionNav() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const els = sections
      .map((s, i) => ({ i, el: document.getElementById(s.id) }))
      .filter((x): x is { i: number; el: HTMLElement } => x.el !== null);

    if (els.length === 0) return;

    const update = () => {
      const mid = window.innerHeight * 0.45;
      let current = 0;
      for (const { i, el } of els) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= mid) current = i;
      }
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <motion.nav
      aria-label="Section navigation"
      className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-5"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2.4, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {sections.map((s, i) => {
        const isActive = i === active;
        return (
          <a
            key={s.id}
            href={i === 0 ? "#" : `#${s.id}`}
            aria-label={`Jump to ${s.label}`}
            className="group relative flex items-center gap-3 justify-end"
          >
            <span
              className="font-mono uppercase text-cream/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-2 group-hover:translate-x-0"
              style={{ fontSize: 10, letterSpacing: "0.22em" }}
            >
              {s.label}
            </span>
            <span
              className={`relative block rounded-full transition-all duration-500 ${
                isActive
                  ? "w-3 h-3 bg-aqua"
                  : "w-[7px] h-[7px] border border-cream/50 group-hover:border-aqua/80"
              }`}
              style={
                isActive
                  ? { boxShadow: "0 0 12px rgba(124,245,216,0.6)" }
                  : { mixBlendMode: "difference" }
              }
            />
          </a>
        );
      })}
    </motion.nav>
  );
}
