import AnimatedContent from '@/components/reactbits/AnimatedContent';
import FadeContent from '@/components/reactbits/FadeContent';
import ScrollReveal from '@/components/reactbits/ScrollReveal';
import { about, profile } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="container-page py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[16rem_minmax(0,1fr)] lg:grid-cols-[18rem_minmax(0,1fr)] md:gap-12 lg:gap-16">
        <FadeContent blur duration={0.9}>
          <div className="space-y-6 md:sticky md:top-28">
            <p className="eyebrow text-faint">
              <span className="text-accent">01</span>
              <span className="mx-2 text-line-strong">/</span>
              About
            </p>

            <div className="group relative w-full max-w-sm md:max-w-none overflow-hidden rounded-2xl border border-line bg-surface/50 p-2 backdrop-blur transition-all duration-500 hover:border-line-strong hover:bg-surface/80 hover:shadow-[0_0_32px_-12px_rgb(198_242_78/0.18)]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-ink/80">
                <img
                  src={profile.aboutImageUrl}
                  alt={profile.name}
                  width={960}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover grayscale contrast-[1.04] transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:contrast-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-xs font-medium tracking-tight text-fg">{profile.name}</p>
                      <p className="font-mono text-[10px] text-muted">
                        {profile.role} · {profile.company}
                      </p>
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
        </FadeContent>

        <div>
          <ScrollReveal
            baseOpacity={0.14}
            baseRotation={0}
            blurStrength={3}
            containerClassName="!my-0"
            textClassName="!text-[clamp(1.6rem,3.6vw,3rem)] !leading-[1.18] !font-medium tracking-[-0.03em]"
            wordAnimationEnd="center center"
          >
            {about.statement}
          </ScrollReveal>

          <AnimatedContent distance={40} stagger={0.12} duration={0.9} className="mt-16 grid gap-px md:grid-cols-3">
            {about.pillars.map((pillar, index) => (
              <article key={pillar.title} className="border-t border-line pt-6 md:pr-8">
                <p className="font-mono text-xs text-accent">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-medium tracking-tight">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-pretty text-muted">{pillar.body}</p>
              </article>
            ))}
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
