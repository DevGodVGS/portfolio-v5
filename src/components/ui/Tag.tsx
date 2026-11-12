import type { ReactNode } from 'react';

export function TagList({ items, className = '' }: { items: string[]; className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map(item => (
        <Tag key={item}>{item}</Tag>
      ))}
    </ul>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] leading-none text-muted">
      {children}
    </li>
  );
}
