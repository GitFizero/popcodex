'use client';

import { useState, useCallback } from 'react';
import GtaNavBar from './GtaNavBar';
import GtaFooter from './GtaFooter';
import GtaSearch from './GtaSearch';
import GtaScrollProgress from './GtaScrollProgress';

interface GtaShellProps {
  locale: string;
  children: React.ReactNode;
}

export default function GtaShell({ locale, children }: GtaShellProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <>
      <GtaScrollProgress />
      <GtaNavBar locale={locale} onSearchOpen={openSearch} />
      <GtaSearch locale={locale} open={searchOpen} onClose={closeSearch} />
      {/* Vignette + scanlines */}
      <div className="bg-vignette" aria-hidden="true" />
      <div className="bg-scanlines" aria-hidden="true" />
      {children}
      <GtaFooter locale={locale} />
    </>
  );
}
