import type { ReactNode } from 'react';
import FadeContent from '@/components/reactbits/FadeContent';

type SectionHeadingProps = {
  index: string;
  label: string;
  children: ReactNode;
  lead?: ReactNode;
};

/** Serif-italic emphasis used inside section titles. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal text-accent italic">{children}</em>;
}

export default function SectionHeading({ index, label, children, lead }: SectionHeadingProps) {
  return (
    <FadeContent blur duration={0.9}>
      <p className="eyebrow text-faint">
        <span className="text-accent">{index}</span>
        <span className="mx-2 text-line-strong">/</span>
        {label}
      </p>
      <h2 className="mt-5 max-w-4xl text-4xl leading-[1.04] font-medium tracking-[-0.035em] text-balance sm:text-5xl md:text-6xl">
        {children}
      </h2>
      {lead ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">{lead}</p> : null}
    </FadeContent>
  );
}
