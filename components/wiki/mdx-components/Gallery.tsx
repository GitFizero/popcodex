interface GalleryProps {
  items: { alt: string; caption?: string }[];
  accentColor?: string;
}

export default function Gallery({ items, accentColor }: GalleryProps) {
  return (
    <div className="my-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((item, i) => (
        <figure key={i} className="group">
          <div
            className="aspect-[4/3] rounded-xl overflow-hidden border border-[var(--color-border)]"
            style={{
              background: `linear-gradient(${135 + i * 30}deg, ${accentColor || 'var(--color-accent)'}10, ${accentColor || 'var(--color-accent)'}25)`,
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-xs text-[var(--color-text-tertiary)]">
              {item.alt}
            </div>
          </div>
          {item.caption && (
            <figcaption className="mt-1.5 text-xs text-[var(--color-text-tertiary)] text-center">
              {item.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
