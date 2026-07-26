import { useEffect, useRef, useState } from "react";

/**
 * Reveals a section once it scrolls into view.
 *
 * Returns [ref, visible] — attach the ref to the section element and use
 * `visible` to switch on the CSS entrance animation. Stays true once fired,
 * so scrolling back up does not replay the animation.
 */
export default function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (older browsers, jsdom in tests): show immediately.
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}
