/**
 * Magnetic pointer-follow attach helper.
 * Binds pointermove listeners that translate the target toward the pointer
 * by `strength` factor. Respects reduced motion via the caller (don't bind
 * when prefers-reduced-motion is set).
 *
 * Only cosmetic — fires on pointer, never on keyboard. Gated by the caller
 * to devices with fine-pointer + hover capability.
 */
export function attachMagnetic(
  el: HTMLElement,
  strength = 0.22,
): () => void {
  const onMove = (e: PointerEvent) => {
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const onLeave = () => {
    el.style.transform = "";
  };
  el.addEventListener("pointermove", onMove);
  el.addEventListener("pointerleave", onLeave);
  return () => {
    el.removeEventListener("pointermove", onMove);
    el.removeEventListener("pointerleave", onLeave);
    el.style.transform = "";
  };
}

/**
 * Hook-style helper: binds magnetic behavior to any `[data-magnetic]` element
 * inside the container on mount. Returns a cleanup. Safe under StrictMode.
 */
export function bindMagneticIn(
  container: HTMLElement | Document = document,
  strength = 0.22,
): () => void {
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!fine || reduced) return () => {};

  const els = Array.from(
    container.querySelectorAll<HTMLElement>("[data-magnetic]"),
  );
  const cleanups = els.map((el) => attachMagnetic(el, strength));
  return () => cleanups.forEach((c) => c());
}
