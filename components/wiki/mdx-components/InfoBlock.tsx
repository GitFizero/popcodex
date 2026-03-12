import { Info } from 'lucide-react';

interface InfoBlockProps {
  children: React.ReactNode;
  type?: 'info' | 'warning' | 'tip';
}

const colors = {
  info: { bg: '#2563EB10', border: '#2563EB30', icon: '#2563EB' },
  warning: { bg: '#D9770610', border: '#D9770630', icon: '#D97706' },
  tip: { bg: '#16A34A10', border: '#16A34A30', icon: '#16A34A' },
};

export default function InfoBlock({ children, type = 'info' }: InfoBlockProps) {
  const c = colors[type];
  return (
    <div
      className="my-6 p-4 rounded-[var(--radius-card)] border flex gap-3"
      style={{ background: c.bg, borderColor: c.border }}
    >
      <Info className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: c.icon }} />
      <div className="text-sm text-[var(--color-text)] leading-relaxed">{children}</div>
    </div>
  );
}
