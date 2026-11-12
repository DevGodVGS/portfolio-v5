import { useEffect, useState } from 'react';

/**
 * Flips to true once the page has finished loading and the main thread is idle.
 * Decorative work (canvas and WebGL backdrops) waits for this so it never
 * competes with the first paint.
 */
export function useIdleReady(timeout = 2000) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let idleId = 0;
    let timerId = 0;

    const schedule = () => {
      if (typeof window.requestIdleCallback === 'function') {
        idleId = window.requestIdleCallback(() => setReady(true), { timeout });
      } else {
        timerId = window.setTimeout(() => setReady(true), 200);
      }
    };

    if (document.readyState === 'complete') schedule();
    else window.addEventListener('load', schedule, { once: true });

    return () => {
      window.removeEventListener('load', schedule);
      if (idleId) window.cancelIdleCallback(idleId);
      if (timerId) window.clearTimeout(timerId);
    };
  }, [timeout]);

  return ready;
}
