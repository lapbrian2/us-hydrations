import { useScrollProgress } from "../lib/hooks";

export function ProgressBar() {
  const p = useScrollProgress();
  return (
    <div
      className="progress-bar"
      style={{ transform: `scaleX(${p})` }}
      aria-hidden
    />
  );
}
