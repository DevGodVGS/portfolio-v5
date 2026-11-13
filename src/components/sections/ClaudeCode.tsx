import { motion } from 'motion/react';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import CountUp from '@/components/reactbits/CountUp';
import TextType from '@/components/reactbits/TextType';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import { claude } from '@/data/profile';

function Terminal() {
  return (
    <div className="overflow-hidden rounded-3xl border border-line bg-surface shadow-[0_40px_80px_-40px_rgb(0_0_0/0.9)]">
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-xs text-faint">~/work — claude</span>
      </div>

      <div className="px-5 py-6 font-mono text-sm sm:px-7">
        <p className="text-faint"># what I ask for, most days</p>
        <p className="mt-3 flex min-h-[8.75rem] sm:min-h-[5rem] items-start gap-2 text-fg">
          <span className="text-accent select-none">❯</span>
          <TextType
            as="span"
            text={claude.prompts}
            typingSpeed={22}
            deletingSpeed={8}
            pauseDuration={2600}
            cursorCharacter="▍"
            cursorColor="#c6f24e"
            startOnVisible
          />
        </p>

        <div className="mt-6 border-t border-line pt-6">
          <p className="text-faint"># tool calls by type · {claude.period}</p>
          <ul className="mt-4 space-y-3">
            {claude.toolMix.map((tool, index) => (
              <li key={tool.name} className="grid grid-cols-[5.5rem_minmax(0,1fr)_3rem] items-center gap-3 text-xs">
                <span className="text-muted">{tool.name}</span>
                <span className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                  <motion.span
                    className="block h-full origin-left rounded-full bg-accent"
                    style={{ width: `${(tool.share / claude.toolMix[0].share) * 100}%` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.9, delay: 0.08 * index, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                <span className="text-right text-faint tabular-nums">{tool.share.toFixed(1)}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ClaudeCode() {
  return (
    <section id="claude" className="relative border-y border-line bg-surface/40">
      <div className="container-page py-20 md:py-28">
        <SectionHeading index="03" label="AI-assisted engineering" lead={claude.intro}>
          Claude Code is part of <Accent>how</Accent> I ship.
        </SectionHeading>

        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-4">
          {claude.stats.map(stat => (
            <div key={stat.label} className="bg-ink p-6 md:p-8">
              <dd className="text-4xl leading-none font-medium tracking-[-0.04em] tabular-nums md:text-5xl">
                <CountUp to={stat.value} decimals={stat.decimals} suffix={stat.suffix} separator="," duration={1.8} />
              </dd>
              <dt className="mt-3 text-sm text-muted">{stat.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-10">
          <AnimatedContent distance={50} duration={0.9} className="lg:sticky lg:top-28 lg:self-start">
            <Terminal />
          </AnimatedContent>

          <AnimatedContent
            distance={40}
            stagger={0.08}
            duration={0.8}
            className="divide-y divide-line border-y border-line"
          >
            {claude.workflows.map((workflow, index) => (
              <article key={workflow.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-3 py-5">
                <p className="pt-1 font-mono text-xs text-accent">0{index + 1}</p>
                <div>
                  <h3 className="text-lg font-medium tracking-tight">{workflow.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-pretty text-muted">{workflow.body}</p>
                </div>
              </article>
            ))}
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
