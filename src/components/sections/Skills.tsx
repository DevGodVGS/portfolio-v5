import { GraduationCap } from 'lucide-react';
import { useReducedMotion } from 'motion/react';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import ScrollVelocity from '@/components/reactbits/ScrollVelocity';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import { education, marquee, skills } from '@/data/profile';

const SEPARATOR = '\u00A0\u00A0·\u00A0\u00A0';

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading index="05" label="Toolkit">
          The stack I reach for, <Accent>front to back.</Accent>
        </SectionHeading>
      </div>

      {reduceMotion ? null : (
        <div className="mt-14 border-y border-line py-6" aria-hidden="true">
          <ScrollVelocity
            texts={marquee.map(row => row.map(item => `${item}${SEPARATOR}`).join(''))}
            velocity={40}
            numCopies={4}
            fadeEdges
            outlineAlternate
            className="font-medium tracking-[-0.04em]"
            fontSize="clamp(2.5rem, 7vw, 5.5rem)"
            color="#edece8"
          />
        </div>
      )}

      <div className="container-page mt-14">
        <AnimatedContent
          distance={30}
          stagger={0.05}
          duration={0.7}
          className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map(group => (
            <article key={group.group} className="border-t border-line py-6">
              <h3 className="eyebrow !text-[11px] text-accent">{group.group}</h3>
              <ul className="mt-4 space-y-2 text-[15px] text-fg/90">
                {group.items.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </AnimatedContent>

        <AnimatedContent distance={30} duration={0.8}>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 rounded-3xl border border-line bg-surface px-7 py-6">
            <div className="flex items-center gap-4">
              <span className="grid size-11 place-items-center rounded-full border border-line text-accent">
                <GraduationCap size={20} aria-hidden="true" />
              </span>
              <div>
                <p className="eyebrow !text-[10px] text-faint">Education</p>
                <p className="mt-1 text-lg font-medium tracking-tight">{education.degree}</p>
              </div>
            </div>
            <p className="text-muted">
              {education.school}
              <span className="mx-3 text-line-strong">/</span>
              <span className="font-mono text-sm">{education.period}</span>
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
