'use client';

import { useState, useCallback } from 'react';
import { useWolverineI18n } from '@/lib/data/wolverine/i18n';
import WikiNavBar, { type WikiNavConfig } from '@/components/wiki/shared/WikiNavBar';
import WikiFooter, { type WikiFooterConfig } from '@/components/wiki/shared/WikiFooter';
import WikiScrollProgress from '@/components/wiki/shared/WikiScrollProgress';

interface WolverineShellProps {
  locale: string;
  children: React.ReactNode;
}

export default function WolverineShell({ locale, children }: WolverineShellProps) {
  const { t } = useWolverineI18n(locale);
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = useCallback(() => setSearchOpen(true), []);

  const base = `/${locale}/wolverine`;

  const navConfig: WikiNavConfig = {
    franchiseSlug: 'wolverine',
    logoText: '🐺 MW',
    navLinks: [
      { path: `${base}/story`, label: t('nav.story') },
      { path: `${base}/characters`, label: t('nav.characters') },
      { path: `${base}/locations`, label: t('nav.locations') },
      { path: `${base}/powers`, label: t('nav.powers') },
      { path: `${base}/enemies`, label: t('nav.enemies') },
      { path: `${base}/lore`, label: t('nav.lore') },
      { path: `${base}/blog`, label: t('nav.blog') },
      { path: `${base}/gallery`, label: t('nav.gallery') },
    ],
    accentColor: '#EAB308',
    scrolledBg: 'rgba(10, 10, 10, 0.88)',
    scrolledBorder: 'hsl(45 72% 66% / 0.3)',
    textActive: 'text-yellow-400',
    textDefault: 'text-neutral-400',
    textHover: 'text-yellow-400',
    textMuted: 'text-neutral-600',
    fontNav: 'font-heading',
    fontUi: 'font-ui',
    searchLabel: t('nav.search'),
    homeLabel: t('nav.home'),
    aboutLabel: t('nav.about'),
  };

  const footerConfig: WikiFooterConfig = {
    franchiseSlug: 'wolverine',
    logoText: "🐺 MARVEL'S WOLVERINE WIKI",
    description: t('footer.desc'),
    imagesCredit: t('footer.images_credit'),
    navLinks: [
      { label: t('nav.home'), path: base },
      { label: t('nav.story'), path: `${base}/story` },
      { label: t('nav.characters'), path: `${base}/characters` },
      { label: t('nav.locations'), path: `${base}/locations` },
      { label: t('nav.enemies'), path: `${base}/enemies` },
      { label: t('nav.lore'), path: `${base}/lore` },
    ],
    officialLinks: [
      { label: 'PlayStation', href: 'https://www.playstation.com/games/marvels-wolverine/' },
      { label: 'Insomniac Games', href: 'https://insomniac.games/' },
    ],
    disclaimer: t('footer.disclaimer'),
    madeWith: t('footer.made_with'),
    fontDisplay: 'font-display',
    fontHeading: 'font-heading',
    fontBody: 'font-body',
    fontUi: 'font-ui',
    textActive: '#EAB308',
    textDefault: 'hsl(0 0% 65%)',
    textMuted: 'hsl(0 0% 40%)',
    accentColor: '#EAB308',
    borderColor: 'hsl(45 72% 66% / 0.15)',
    bgColor: 'hsl(0 0% 4%)',
  };

  return (
    <>
      <WikiScrollProgress
        gradient="linear-gradient(90deg, #EAB308, #DC2626, #EAB308)"
        glow="0 0 10px hsl(45 100% 50% / 0.35)"
      />
      <WikiNavBar locale={locale} config={navConfig} onSearchOpen={openSearch} />
      {/* Vignette */}
      <div
        className="fixed inset-0 pointer-events-none z-[9999]"
        style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)' }}
        aria-hidden="true"
      />
      {children}
      <WikiFooter locale={locale} config={footerConfig} />
    </>
  );
}
