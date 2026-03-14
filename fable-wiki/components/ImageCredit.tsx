import { memo } from 'react';

interface ImageCreditProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: 'lazy' | 'eager';
  position?: 'bottom-right' | 'bottom-left';
}

const ImageCredit = memo(({ src, alt, className = '', imgClassName = '', loading = 'lazy', position = 'bottom-right' }: ImageCreditProps) => (
  <div className={`relative ${className}`}>
    <img src={src} alt={`${alt} — Playground Games / Xbox Game Studios`} className={imgClassName} loading={loading} />
    <span className={`absolute ${position === 'bottom-right' ? 'right-1.5 bottom-1' : 'left-1.5 bottom-1'} font-body text-[0.4rem] sm:text-[0.45rem] tracking-wider text-gray-400/60 bg-black/50 px-1 py-0.5 rounded pointer-events-none select-none`}>
      Playground Games
    </span>
  </div>
));

ImageCredit.displayName = 'ImageCredit';
export default ImageCredit;
