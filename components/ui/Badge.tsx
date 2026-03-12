interface BadgeProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Badge({ children, color, className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${className}`}
      style={color ? {
        background: `${color}15`,
        color: color,
      } : {
        background: 'var(--color-bg-subtle)',
        color: 'var(--color-text-secondary)',
      }}
    >
      {children}
    </span>
  );
}
