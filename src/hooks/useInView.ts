import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element is on (or near) screen. Used to mount the canvas
 * and WebGL backgrounds only while their section is visible.
 */
export function useInView<T extends Element>(rootMargin = '200px') {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin });
    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView] as const;
}
