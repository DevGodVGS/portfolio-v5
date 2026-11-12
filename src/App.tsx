import { lazy, Suspense, useEffect } from 'react';
import ClickSpark from '@/components/reactbits/ClickSpark';
import Hero from '@/components/sections/Hero';
import Nav from '@/components/sections/Nav';

// Everything below the fold loads in its own chunk, so the first render is
// only the nav and hero. Each section sits in its own Suspense boundary and
// commits separately, which keeps start-up work in small tasks.
const About = lazy(() => import('@/components/sections/About'));
const Work = lazy(() => import('@/components/sections/Work'));
const ClaudeCode = lazy(() => import('@/components/sections/ClaudeCode'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Contact = lazy(() => import('@/components/sections/Contact'));

const sections = [About, Work, ClaudeCode, Projects, Skills, Contact];

/** Honour a #section link on first load, once that lazy section has mounted. */
function useHashScrollOnLoad() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id || id === 'top') return;

    const tryScroll = () => {
      const target = document.getElementById(id);
      if (!target) return false;
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
      return true;
    };
    if (tryScroll()) return;

    const main = document.querySelector('main');
    if (!main) return;
    const observer = new MutationObserver(() => {
      if (tryScroll()) observer.disconnect();
    });
    observer.observe(main, { childList: true });
    const giveUp = window.setTimeout(() => observer.disconnect(), 8000);

    return () => {
      observer.disconnect();
      window.clearTimeout(giveUp);
    };
  }, []);
}

export default function App() {
  useHashScrollOnLoad();

  return (
    <ClickSpark sparkColor="#c6f24e" sparkSize={10} sparkRadius={22} sparkCount={8} duration={420}>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-ink"
      >
        Skip to work
      </a>
      <Nav />
      <main>
        <Hero />
        {sections.map((Section, index) => (
          <Suspense key={index} fallback={null}>
            <Section />
          </Suspense>
        ))}
      </main>
    </ClickSpark>
  );
}
