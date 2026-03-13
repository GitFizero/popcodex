'use client';

import { memo } from 'react';
import Link from 'next/link';

export interface WikiFooterConfig {
  franchiseSlug: string;
  logoText: string;
  description: string;
  imagesCredit?: string;
  navLinks: { label: string; path: string }[];
  officialLinks?: { label: string; href: string }[];
  disclaimer: string;
  madeWith?: string;
  /** CSS classes */
  fontDisplay: string;
  fontHeading: string;
  fontBody: string;
  fontUi: string;
  textActive: string;
  textDefault: string;
  textMuted: string;
  accentColor: string;
  borderColor: string;
  bgColor: string;
}

interface WikiFooterProps {
  locale: string;
  config: WikiFooterConfig;
}

const WikiFooter = memo(({ locale, config }: WikiFooterProps) => {
  const base = `/${locale}/${config.franchiseSlug}`;

  return (
    <footer className="relative z-10" style={{ background: config.bgColor, borderTop: `1px solid ${config.borderColor}` }} role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className={`${config.fontDisplay} text-lg mb-3`} style={{ color: config.accentColor }}>
              {config.logoText}
            </h3>
            <p className={`${config.fontBody} text-sm leading-relaxed`} style={{ color: config.textDefault }}>
              {config.description}
            </p>
            {config.imagesCredit && (
              <p className={`${config.fontUi} text-[0.55rem] mt-2`} style={{ color: config.textMuted }}>
                {config.imagesCredit}
              </p>
            )}
          </div>
          <div>
            <h4 className={`${config.fontHeading} text-sm tracking-[0.15em] mb-3`} style={{ color: config.accentColor }}>
              {locale === 'fr' ? 'NAVIGATION' : locale === 'es' ? 'NAVEGACIÓN' : 'NAVIGATION'}
            </h4>
            <div className="flex flex-col gap-2">
              {config.navLinks.map(l => (
                <Link
                  key={l.path}
                  href={l.path.startsWith('/') ? l.path : `${base}/${l.path}`}
                  className={`${config.fontBody} text-sm transition-colors`}
                  style={{ color: config.textDefault }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            {config.officialLinks && config.officialLinks.length > 0 && (
              <>
                <h4 className={`${config.fontHeading} text-sm tracking-[0.15em] mb-3`} style={{ color: config.accentColor }}>
                  {locale === 'fr' ? 'LIENS OFFICIELS' : locale === 'es' ? 'ENLACES OFICIALES' : 'OFFICIAL LINKS'}
                </h4>
                <div className="flex flex-col gap-2">
                  {config.officialLinks.map(l => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={`${config.fontBody} text-sm transition-colors`} style={{ color: config.textDefault }}>
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </>
            )}
            <div className="mt-6">
              <h4 className={`${config.fontHeading} text-sm tracking-[0.15em] mb-3`} style={{ color: config.accentColor }}>
                POPCODEX
              </h4>
              <div className="flex flex-col gap-2">
                <Link href={`/${locale}`} className={`${config.fontBody} text-sm transition-colors`} style={{ color: config.textDefault }}>
                  {locale === 'fr' ? 'Accueil PopCodex' : 'PopCodex Home'}
                </Link>
                <Link href={`/${locale}/legal/mentions-legales`} className={`${config.fontBody} text-sm transition-colors`} style={{ color: config.textDefault }}>
                  {locale === 'fr' ? 'Mentions légales' : 'Legal'}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 text-center" style={{ borderTop: `1px solid ${config.borderColor}` }}>
          <p className={`${config.fontUi} text-[0.65rem] tracking-wider uppercase leading-relaxed`} style={{ color: config.textMuted }}>
            {config.disclaimer}
          </p>
          {config.madeWith && (
            <p className={`${config.fontUi} text-[0.6rem] mt-2`} style={{ color: config.textMuted, opacity: 0.6 }}>
              {config.madeWith}
            </p>
          )}
        </div>
      </div>
    </footer>
  );
});

WikiFooter.displayName = 'WikiFooter';
export default WikiFooter;
