import { ArrowUpRight, Download, Mail } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { lazy, Suspense } from 'react';
import BlurText from '@/components/reactbits/BlurText';
import FadeContent from '@/components/reactbits/FadeContent';
import Magnet from '@/components/reactbits/Magnet';
import { profile } from '@/data/profile';
import { useInView } from '@/hooks/useInView';

const Threads = lazy(() => import('@/components/reactbits/Threads'));
const YEAR = new Date().getFullYear();

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12M7.12 20.45H3.56V9h3.56zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0" />
    </svg>
  );
}

export default function Contact() {
  const [ref, inView] = useInView<HTMLElement>('100px');
  const reduceMotion = useReducedMotion();

  return (
    <section ref={ref} id="contact" className="relative isolate overflow-hidden border-t border-line">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        {inView && !reduceMotion ? (
          <Suspense fallback={null}>
            <Threads
              color="#c6f24e"
              amplitude={1.4}
              distance={0.35}
              lineCount={60}
              speed={0.4}
              brightness={1.1}
              opacity={0.55}
              enableMouseInteraction
            />
          </Suspense>
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_70%_at_50%_45%,var(--color-ink)_10%,transparent_75%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink to-transparent" />
      </div>

      <div className="container-page flex flex-col items-center py-24 text-center md:py-36">
        <FadeContent blur duration={0.9}>
          <p className="eyebrow text-faint">
            <span className="text-accent">06</span>
            <span className="mx-2 text-line-strong">/</span>
            Contact
          </p>
        </FadeContent>

        <h2 className="mt-8 max-w-4xl text-5xl leading-[0.98] font-medium tracking-[-0.045em] text-balance sm:text-7xl md:text-8xl">
          <BlurText text="Let’s build something" animateBy="words" delay={90} className="justify-center" />
          <BlurText
            text="that ships."
            animateBy="words"
            delay={90}
            className="justify-center font-serif font-normal tracking-[-0.02em] text-accent italic"
          />
        </h2>

        <FadeContent blur duration={0.9} delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            Open to conversations about full-stack and AI engineering work. Email is the fastest way to reach me.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Magnet padding={60} magnetStrength={4}>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 rounded-full bg-accent px-6 py-3.5 font-medium text-accent-ink transition-colors hover:bg-fg"
              >
                <Mail size={18} aria-hidden="true" />
                {profile.email}
              </a>
            </Magnet>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-ink/60 px-6 py-3.5 font-medium backdrop-blur transition-colors hover:border-fg"
            >
              <LinkedInIcon />
              LinkedIn
              <ArrowUpRight size={16} className="text-muted transition-colors group-hover:text-fg" aria-hidden="true" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-ink/60 px-6 py-3.5 font-medium backdrop-blur transition-colors hover:border-fg"
            >
              <Download size={16} aria-hidden="true" />
              Résumé
            </a>
          </div>
        </FadeContent>
      </div>

      <footer className="container-page">
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-t border-line py-7 text-sm text-faint">
          <p>
            © {YEAR} {profile.name}
          </p>
          <p className="font-mono text-xs">Built with React and React Bits</p>
        </div>
      </footer>
    </section>
  );
}
