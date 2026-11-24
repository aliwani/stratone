
import Lenis from "lenis";

let lenisInstance = null;

export function initLenis() {
  // Never initialize Lenis on the server
  if (typeof window === "undefined") return null;

  // Prevent multiple Lenis instances
  if (lenisInstance) return lenisInstance;

  lenisInstance = new Lenis({
    duration: 1.5,
    easing: (t) =>
      Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  });

  // Let our ScrollToTop component manage restoration
  history.scrollRestoration = "manual";

  function raf(time) {
    lenisInstance.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return lenisInstance;
}

export function getLenis() {
  return lenisInstance;
}
