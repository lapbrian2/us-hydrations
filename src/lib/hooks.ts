import { useEffect, useState, useRef } from "react";

/**
 * Observe when an element first enters the viewport (threshold 0.15 by default).
 * Once triggered it stops observing. Returns a ref + `inView` flag.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.15 },
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setInView(true);
          io.unobserve(e.target);
        }
      });
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [inView, options]);

  return { ref, inView };
}

/**
 * `prefers-reduced-motion` media query as a reactive boolean.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return reduced;
}

/**
 * Track scroll progress (0..1). Passive listener, updates on rAF-coalesced scrolls.
 */
export function useScrollProgress(): number {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const sh = document.documentElement.scrollHeight - window.innerHeight;
      const p = sh > 0 ? window.scrollY / sh : 0;
      setProgress(p);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}
