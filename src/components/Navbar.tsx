import { useEffect, useState } from "react";
import { ArrowUpRight, Droplet } from "lucide-react";
import { motion } from "motion/react";
import { navLinks } from "../lib/content";

/**
 * Floating glass pill navbar. Gains a subtle backdrop on scroll. Desktop-only
 * full nav; mobile shows compact logo + CTA with a menu hamburger (TODO).
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-4 left-0 right-0 z-40 px-5 sm:px-8 lg:px-12"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.9, duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <div className="max-w-[1831px] mx-auto flex items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2 font-display text-cream uppercase tracking-wide"
          style={{ fontSize: 16 }}
          aria-label="US Hydrations home"
        >
          <Droplet size={18} strokeWidth={2} color="#7CF5D8" />
          <span>US&nbsp;Hydrations</span>
        </a>

        {/* Nav pill */}
        <nav
          className={`hidden lg:block liquid-glass rounded-full transition-all duration-500 ${
            scrolled ? "bg-ink/30" : ""
          }`}
          style={{ padding: "14px 32px" }}
        >
          <ul
            className="flex items-center gap-7 font-display uppercase tracking-wider"
            style={{ fontSize: 12 }}
          >
            {navLinks.map((n) => (
              <li key={n.label}>
                <a href={n.href} className="nav-link text-cream">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA pill */}
        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 liquid-glass-strong rounded-full font-display uppercase tracking-wider btn-liquid text-cream"
          style={{ padding: "12px 22px", fontSize: 12 }}
        >
          <span>Request a Quote</span>
          <ArrowUpRight size={14} strokeWidth={2.5} />
        </a>

        {/* Mobile hint */}
        <div
          className="font-display uppercase lg:hidden"
          style={{ fontSize: 11, color: "#7CF5D8", letterSpacing: "0.2em" }}
        >
          Pittston
        </div>
      </div>
    </motion.header>
  );
}
