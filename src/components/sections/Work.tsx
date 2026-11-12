import AnimatedContent from '@/components/reactbits/AnimatedContent';
import DecryptedText from '@/components/reactbits/DecryptedText';
import SpotlightCard from '@/components/reactbits/SpotlightCard';
import MetricRow from '@/components/ui/MetricRow';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import { TagList } from '@/components/ui/Tag';
import { experience, leadership, work } from '@/data/profile';
import type { WorkItem } from '@/data/profile';

const SPOTLIGHT = 'rgba(198, 242, 78, 0.16)';

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <ol className="relative rounded-2xl border border-line bg-ink/60 p-5 font-mono text-[13px]">
      <li className="mb-4 flex items-center gap-2 text-[11px] tracking-[0.14em] text-faint uppercase">
        <span className="size-1.5 rounded-full bg-accent" />
        Analysis pipeline
      </li>
      {steps.map((step, index) => (
        <li key={step} className="relative flex items-start gap-3 pb-4 last:pb-0">
          {index < steps.length - 1 ? (
            <span className="absolute top-5 left-[9px] h-[calc(100%-1.1rem)] w-px bg-line-strong" aria-hidden="true" />
          ) : null}
          <span className="mt-0.5 grid size-[19px] shrink-0 place-items-center rounded-full border border-line-strong text-[10px] text-accent">
            {index + 1}
          </span>
          <DecryptedText
            text={step}
            animateOn="view"
            sequential
            speed={28}
            className="text-fg"
            encryptedClassName="text-faint"
          />
        </li>
      ))}
    </ol>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <SpotlightCard
      spotlightColor={SPOTLIGHT}
      className={`h-full ${item.featured ? 'md:col-span-2' : ''}`}
      style={{ '--spotlight-card-surface': '#101012' } as React.CSSProperties}
    >
      <article
        className={`flex h-full flex-col ${item.featured ? 'md:grid md:grid-cols-[minmax(0,1fr)_17rem] md:gap-10' : ''}`}
      >
        <div className="flex h-full flex-col">
          <header className="flex items-center justify-between gap-4">
            <span className="font-mono text-xs text-accent">{number}</span>
            <span className="eyebrow !text-[10px] text-faint">{item.kicker}</span>
          </header>
          <h3
            className={`mt-8 font-medium tracking-[-0.03em] text-balance ${item.featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}
          >
            {item.title}
          </h3>
          <p className="mt-3 leading-relaxed text-pretty text-muted">{item.body}</p>
          {item.metrics ? <MetricRow metrics={item.metrics} className="mt-6" /> : null}
          <TagList items={item.tags} className="mt-auto pt-8" />
        </div>
        {item.pipeline ? (
          <div className="mt-8 md:mt-0 md:self-center">
            <Pipeline steps={item.pipeline} />
          </div>
        ) : null}
      </article>
    </SpotlightCard>
  );
}

export default function Work() {
  return (
    <section id="work" className="container-page py-20 md:py-28">
      <SectionHeading index="02" label="Experience" lead={experience.intro}>
        Work that ships, <Accent>measured</Accent> in outcomes.
      </SectionHeading>

      <AnimatedContent distance={30} duration={0.8}>
        <div className="mt-12 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-y border-line py-5">
          <p className="text-lg font-medium tracking-tight">
            {experience.role} <span className="text-faint">at</span> {experience.company}
          </p>
          <p className="font-mono text-sm text-muted">{experience.period}</p>
        </div>
      </AnimatedContent>

      <AnimatedContent distance={50} stagger={0.08} duration={0.9} className="mt-6 grid gap-4 md:grid-cols-3">
        {work.map((item, index) => (
          <WorkCard key={item.title} item={item} index={index} />
        ))}
      </AnimatedContent>

      <AnimatedContent distance={40} stagger={0.1} duration={0.9} className="mt-4 grid gap-4 md:grid-cols-2">
        {leadership.map(item => (
          <article key={item.title} className="rounded-3xl border border-line p-8">
            <p className="eyebrow !text-[10px] text-faint">Leadership</p>
            <h3 className="mt-6 text-2xl font-medium tracking-[-0.03em]">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-pretty text-muted">{item.body}</p>
            <MetricRow metrics={item.metrics} className="mt-6" />
            {item.tags.length ? <TagList items={item.tags} className="mt-6" /> : null}
          </article>
        ))}
      </AnimatedContent>
    </section>
  );
}
