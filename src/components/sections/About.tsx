import AnimatedContent from '@/components/reactbits/AnimatedContent';
import FadeContent from '@/components/reactbits/FadeContent';
import ScrollReveal from '@/components/reactbits/ScrollReveal';
import { about } from '@/data/profile';

export default function About() {
  return (
    <section id="about" className="container-page py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-[14rem_minmax(0,1fr)] md:gap-16">
        <FadeContent blur duration={0.9}>
          <p className="eyebrow text-faint md:sticky md:top-28">
            <span className="text-accent">01</span>
            <span className="mx-2 text-line-strong">/</span>
            About
          </p>
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
