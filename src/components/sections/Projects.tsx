import { Check } from 'lucide-react';
import AnimatedContent from '@/components/reactbits/AnimatedContent';
import BorderGlow from '@/components/reactbits/BorderGlow';
import SectionHeading, { Accent } from '@/components/ui/SectionHeading';
import { TagList } from '@/components/ui/Tag';
import { projects } from '@/data/profile';

export default function Projects() {
  return (
    <section id="projects" className="container-page py-20 md:py-28">
      <SectionHeading
        index="04"
        label="Side projects"
        lead="Things I build for myself: agents, pipelines and tools that run locally and do one job well."
      >
        Built after hours, <Accent>for the fun of it.</Accent>
      </SectionHeading>

      <AnimatedContent distance={50} stagger={0.1} duration={0.9} className="mt-14 grid gap-4 lg:grid-cols-3">
        {projects.map(project => (
          <BorderGlow
            key={project.title}
            className="h-full"
            backgroundColor="#101012"
            borderRadius={24}
            glowColor="78 90 62"
            colors={['#c6f24e', '#5eead4', '#fde68a']}
            glowRadius={32}
            fillOpacity={0.35}
          >
            <article className="flex h-full flex-col p-8">
              <header className="flex items-center justify-between gap-4">
                <span className="eyebrow !text-[10px] text-faint">{project.kicker}</span>
                {project.builtWithClaude ? (
                  <span className="shrink-0 rounded-full bg-accent/10 px-2.5 py-1 font-mono text-[10px] whitespace-nowrap text-accent">
                    Built with Claude Code
                  </span>
                ) : null}
              </header>
              <h3 className="mt-8 text-3xl font-medium tracking-[-0.03em]">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-pretty text-muted">{project.body}</p>
              <ul className="mt-6 space-y-2.5 text-sm text-fg/90">
                {project.points.map(point => (
                  <li key={point} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <TagList items={project.tags} className="mt-auto pt-8" />
            </article>
          </BorderGlow>
        ))}
      </AnimatedContent>
    </section>
  );
}
