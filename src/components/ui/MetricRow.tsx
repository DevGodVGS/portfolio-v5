import type { Metric } from '@/data/profile';

export default function MetricRow({ metrics, className = '' }: { metrics: Metric[]; className?: string }) {
  if (!metrics.length) return null;
  return (
    <dl className={`grid grid-cols-2 gap-x-6 gap-y-4 ${className}`}>
      {metrics.map(metric => (
        <div key={metric.label} className="border-l border-line-strong pl-3">
          <dt className="sr-only">{metric.label}</dt>
          <dd className="text-2xl leading-none font-medium tracking-tight text-accent tabular-nums">{metric.value}</dd>
          <dd className="mt-1.5 text-xs leading-snug text-faint">{metric.label}</dd>
        </div>
      ))}
    </dl>
  );
}
