interface InfoboxProps {
  title: string;
  data: Record<string, string>;
  accentColor?: string;
}

export default function Infobox({ title, data, accentColor }: InfoboxProps) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-bg-subtle)] overflow-hidden">
      <div
        className="h-32 flex items-center justify-center"
        style={{
          background: accentColor
            ? `linear-gradient(135deg, ${accentColor}15, ${accentColor}30)`
            : 'linear-gradient(135deg, var(--color-accent-light), var(--color-accent-medium))',
        }}
      >
        <span
          className="text-3xl font-bold opacity-20"
          style={{ fontFamily: 'var(--font-display)', color: accentColor || 'var(--color-accent)' }}
        >
          {title}
        </span>
      </div>

      <div className="p-4">
        <h3
          className="text-lg font-semibold text-[var(--color-text)] mb-3"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </h3>
        <dl className="space-y-0">
          {Object.entries(data).map(([key, value]) => (
            <div
              key={key}
              className="flex justify-between gap-3 py-2.5 border-b border-[var(--color-border)] last:border-b-0"
            >
              <dt className="text-sm text-[var(--color-text-secondary)] font-medium">{key}</dt>
              <dd className="text-sm text-[var(--color-text)] text-right">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
