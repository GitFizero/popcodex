'use client';

import { memo } from 'react';
import Link from 'next/link';
import { useCrimsonI18n } from '@/lib/data/crimson-desert/i18n';
import GoldDivider from './GoldDivider';

interface CrimsonFooterProps {
  locale: string;
}

const CrimsonFooter = memo(({ locale }: CrimsonFooterProps) => {
  const { t } = useCrimsonI18n(locale);
  const base = `/${locale}/crimson-desert`;

  return (
    <footer className="relative z-10 bg-surface border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <GoldDivider variant="short" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <h3 className="font-display text-lg text-gold-bright mb-3">⚔ CD WIKI</h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed">{t('footer.desc')}</p>
            <p className="font-ui text-[0.55rem] text-text-muted-custom mt-2">{t('about.images_credit')}</p>
          </div>
          <div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">{t('footer.navigation')}</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: base, label: t('nav.home') },
                { to: `${base}/story`, label: t('nav.story') },
                { to: `${base}/characters`, label: t('nav.characters') },
                { to: `${base}/world`, label: t('nav.world') },
                { to: `${base}/combat`, label: t('nav.combat') },
                { to: `${base}/lore`, label: t('nav.lore') },
                { to: `${base}/about`, label: t('nav.about') },
              ].map(l => (
                <Link key={l.to} href={l.to} className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3">{t('footer.official')}</h4>
            <div className="flex flex-col gap-2">
              <a href="https://crimsondesert.pearlabyss.com/" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors">{t('footer.official_site')}</a>
              <a href="https://www.pearlabyss.com/en-US" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors">Pearl Abyss ↗</a>
            </div>
            <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-3 mt-6">{t('footer.legal')}</h4>
            <div className="flex flex-col gap-2">
              <Link href={`${base}/about`} className="font-body text-sm text-text-secondary hover:text-gold-bright transition-colors">{t('footer.contact')}</Link>
            </div>
          </div>
        </div>
        <GoldDivider variant="short" className="mt-8" />
        <div className="mt-6 text-center">
          <p className="font-ui text-[0.65rem] tracking-wider text-text-muted-custom uppercase leading-relaxed">{t('footer.disclaimer')}</p>
          <p className="font-ui text-[0.6rem] text-text-muted-custom/60 mt-2">{t('footer.made_with')}</p>
        </div>
      </div>
    </footer>
  );
});

CrimsonFooter.displayName = 'CrimsonFooter';
export default CrimsonFooter;
