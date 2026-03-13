'use client';

import { useState, useCallback } from 'react';
import { useFableI18n } from '@/lib/data/fable/i18n';
import WikiNavBar, { type WikiNavConfig } from '@/components/wiki/shared/WikiNavBar';
import WikiFooter, { type WikiFooterConfig } from '@/components/wiki/shared/WikiFooter';
import WikiScrollProgress from '@/components/wiki/shared/WikiScrollProgress';

interface FableShellProps {
  locale: string;
  children: React.ReactNode;
}

export default function FableShell({ locale, children }: FableShellProps) {
  const { t } = useFableI18n(locale);
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = useCallback(() => setSearchOpen(true), []);

  const base = `/${locale}/fable`;

  const navConfig: WikiNavConfig = {
    franchiseSlug: 'fable',
    logoText: '🌿 Fable',
    navLinks: [
      { path: `${base}/story`, label: t('nav.story') },
      { path: `${base}/characters`, label: t('nav.characters') },
      { path: `${base}/locations`, label: t('nav.locations') },
      { path: `${base}/creatures`, label: t('nav.creatures') },
      { path: `${base}/gameplay`, label: t('nav.gameplay') },
      { path: `${base}/classes`, label: t('nav.classes') },
      { path: `${base}/lore`, label: t('nav.lore') },
      { path: `${base}/gallery`, label: t('nav.gallery') },
    ],
    accentColor: '#22C55E',
    scrolledBg: 'rgba(8, 12, 8, 0.88)',
    scrolledBorder: 'hsl(120 40% 40% / 0.3)',
    textActive: 'text-emerald-400',
    textDefault: 'text-neutral-400',
    textHover: 'text-emerald-400',
    textMuted: 'text-neutral-600',
    fontNav: 'font-heading',
    fontUi: 'font-ui',
    searchLabel: t('nav.search'),
    homeLabel: t('nav.home'),
    aboutLabel: t('nav.about'),
  };

  const footerConfig: WikiFooterConfig = {
    franchiseSlug: 'fable',
    logoText: '🌿 FABLE WIKI',
    description: t('footer.desc'),
    imagesCredit: t('footer.images_credit'),
    navLinks: [
      { label: t('nav.home'), path: base },
      { label: t('nav.story'), path: `${base}/story` },
      { label: t('nav.characters'), path: `${base}/characters` },
      { label: t('nav.locations'), path: `${base}/locations` },
      { label: t('nav.creatures'), path: `${base}/creatures` },
      { label: t('nav.lore'), path: `${base}/lore` },
    ],
    officialLinks: [
      { label: 'PlayStation', href: 'https://www.playstation.com/games/fable/' },
      { label: 'Playground Games', href: 'https://www.playground-games.com/' },
    ],
    disclaimer: t('footer.disclaimer'),
    madeWith: t('footer.made_with'),
    fontDisplay: 'font-display',
    fontHeading: 'font-heading',
    fontBody: 'font-body',
    fontUi: 'font-ui',
    textActive: '#22C55E',
    textDefault: 'hsl(140 10% 65%)',
    textMuted: 'hsl(140 10% 40%)',
    accentColor: '#22C55E',
    borderColor: 'hsl(120 40% 30% / 0.2)',
    bgColor: 'hsl(150 30% 3%)',
  };

  return (
    <>
      <WikiScrollProgress
        gradient="linear-gradient(90deg, #22C55E, #FACC15, #22C55E)"
        glow="0 0 10px hsl(142 71% 45% / 0.35)"
      />
      <WikiNavBar locale={locale} config={navConfig} onSearchOpen={openSearch} />
      {/* Fable mist overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)' }}
        aria-hidden="true"
      />
      {children}
      <WikiFooter locale={locale} config={footerConfig} />
    </>
  );
}
