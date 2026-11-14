import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import { lazy, Suspense } from 'react';
import CountUp from '@/components/reactbits/CountUp';
import Magnet from '@/components/reactbits/Magnet';
import RotatingText from '@/components/reactbits/RotatingText';
import ShinyText from '@/components/reactbits/ShinyText';
import SplitText from '@/components/reactbits/SplitText';
import StarBorder from '@/components/reactbits/StarBorder';
import { heroStats, profile } from '@/data/profile';
import { useIdleReady } from '@/hooks/useIdleReady';
import { useInView } from '@/hooks/useInView';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const DotGrid = lazy(() => import('@/components/reactbits/DotGrid'));
const LightRays = lazy(() => import('@/components/reactbits/LightRays'));

export default function Hero() {
  const [ref, inView] = useInView<HTMLElement>('0px');
  const reduceMotion = useReducedMotion();
  const idle = useIdleReady();
  // The WebGL light is desktop-only: phones get the static glow below instead.
  const hasFinePointer = useMediaQuery('(min-width: 768px) and (pointer: fine)');
  const showBackdrop = idle && inView && !reduceMotion;

  return (
    <section ref={ref} id="top" className="relative isolate flex min-h-svh flex-col overflow-hidden">
      {/* Backdrop: interactive dot grid under a soft light from the top. */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgb(198_242_78/0.09),transparent_72%)]" />
        {showBackdrop ? (
          <Suspense fallback={null}>
            <DotGrid
              dotSize={2}
              gap={26}
              baseColor="#2a2a30"
              activeColor="#c6f24e"
              proximity={150}
              shockRadius={260}
              shockStrength={4}
              glow={0.6}
            />
            {hasFinePointer ? (
              <div className="absolute inset-0 opacity-70">
                <LightRays
                  raysOrigin="top-center"
                  raysColor="#d9f99d"
                  raysSpeed={0.6}
                  lightSpread={0.9}
                  rayLength={1.6}
                  fadeDistance={1}
                  followMouse
                  mouseInfluence={0.06}
                  cursorShadow={false}
                  clickPulse={false}
                  intensity={0.7}
                />
              </div>
            ) : null}
          </Suspense>
        ) : null}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,transparent_30%,var(--color-ink)_82%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="container-page flex flex-1 flex-col justify-center pt-24 pb-8 md:pt-28 md:pb-8">
        <p className="inline-flex w-fit items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pr-4 pl-3 font-mono text-xs backdrop-blur">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          <ShinyText text={`${profile.role} · ${profile.company}`} color="#a6a6ae" shineColor="#ffffff" speed={3} />
        </p>

        <h1
          aria-label={profile.name}
          className="mt-6 text-[clamp(2.5rem,10.5vw,7.8rem)] leading-[0.9] font-medium tracking-[-0.05em]"
        >
          <span className="block" aria-hidden="true">
            <SplitText
              tag="span"
              text={profile.nameLines[0]}
              trigger="load"
              effect="rise"
              mask
              delay={28}
              duration={1.1}
              textAlign="left"
            />
          </span>
          <span className="block font-serif tracking-[-0.03em] text-accent italic" aria-hidden="true">
            <SplitText
              tag="span"
              text={profile.nameLines[1]}
              trigger="load"
              effect="rise"
              mask
              delay={45}
              duration={1.2}
              textAlign="left"
              className="pr-[0.08em] pb-[0.12em]"
            />
          </span>
        </h1>

        <div className="mt-7 grid gap-8 md:mt-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-10 lg:gap-14">
          <div className="flex flex-col justify-between gap-6 max-w-xl">
            <div>
              <p className="flex flex-wrap items-center gap-x-2.5 gap-y-2 text-xl font-medium tracking-tight sm:text-2xl">
                <span>{profile.heroLead}</span>
                <RotatingText
                  texts={profile.heroRotating}
                  highlight
                  highlightColor="#c6f24e"
                  effect="slide"
                  staggerDuration={0.012}
                  rotationInterval={2600}
                  splitBy="characters"
                />
              </p>
              <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{profile.heroBody}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Magnet padding={60} magnetStrength={4}>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent py-3 pr-5 pl-6 font-medium text-accent-ink transition-colors hover:bg-fg"
                >
                  See my work
                  <ArrowDownRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </a>
              </Magnet>
              <StarBorder
                as="a"
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                color="#c6f24e"
                radius={999}
                backgroundColor="#101012"
                className="group"
              >
                LinkedIn
                <ArrowUpRight size={16} className="text-muted transition-colors group-hover:text-fg" />
              </StarBorder>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] md:mx-0 md:w-56 lg:w-64 shrink-0">
            <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface/50 p-2 backdrop-blur transition-all duration-500 hover:border-line-strong hover:bg-surface/80 hover:shadow-[0_0_40px_-15px_rgb(198_242_78/0.25)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink/80">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={960}
                  height={1200}
                  fetchPriority="high"
                  className="size-full object-cover grayscale contrast-[1.04] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:contrast-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium tracking-tight text-fg">{profile.name}</p>
                      <p className="font-mono text-[10px] text-muted">{profile.title}</p>
                    </div>
                    <span className="relative flex size-2 shrink-0">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                      <span className="relative inline-flex size-2 rounded-full bg-accent" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-page">
        <dl className="grid grid-cols-2 border-t border-line md:grid-cols-4">
          {heroStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-6 pr-4 md:py-7 ${index % 2 === 1 ? 'pl-5 md:pl-8' : 'md:pl-8'} ${index === 0 ? 'md:!pl-0' : ''} ${
                index > 0 ? 'md:border-l md:border-line' : ''
              } ${index % 2 === 1 ? 'border-l border-line' : ''} ${index > 1 ? 'border-t border-line md:border-t-0' : ''}`}
            >
              <dd className="text-4xl leading-none font-medium tracking-[-0.04em] tabular-nums sm:text-5xl">
                <CountUp
                  to={stat.value}
                  decimals={stat.decimals}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  duration={1.6}
                  trigger="load"
                  delay={0.5}
                />
              </dd>
              <dt className="mt-3 max-w-[22ch] text-sm leading-snug text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
