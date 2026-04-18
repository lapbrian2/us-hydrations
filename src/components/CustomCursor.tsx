import { useEffect, useRef } from "react";
import { useReducedMotion } from "../lib/hooks";

/**
 * Custom cursor: a dot pinned to the pointer, an easing ring that trails,
 * and a larger ambient aqua glow that trails more slowly. Disabled on
 * touch devices and when reduced motion is preferred.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) return;
    const hasFinePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!hasFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !glow) return;

    document.body.classList.add("has-custom-cursor");

    let mx = innerWidth / 2;
    let my = innerHeight / 2;
    let rx = mx;
    let ry = my;
    let gx = mx;
    let gy = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      gx += (mx - gx) * 0.06;
      gy += (my - gy) * 0.06;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      glow.style.transform = `translate(${gx}px, ${gy}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);

    // Hover state on interactive elements
    const hoverables = document.querySelectorAll<HTMLElement>(
      "a, button, .card, [data-magnetic]",
    );
    const onEnter = () => document.body.classList.add("cursor-hover");
    const onLeave = () => document.body.classList.remove("cursor-hover");
    hoverables.forEach((el) => {
      el.addEventListener("pointerenter", onEnter);
      el.addEventListener("pointerleave", onLeave);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      hoverables.forEach((el) => {
        el.removeEventListener("pointerenter", onEnter);
        el.removeEventListener("pointerleave", onLeave);
      });
      document.body.classList.remove("has-custom-cursor");
      document.body.classList.remove("cursor-hover");
    };
  }, [reduced]);

  if (reduced) return null;

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden />
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={glowRef} className="ambient-glow" aria-hidden />
    </>
  );
}
