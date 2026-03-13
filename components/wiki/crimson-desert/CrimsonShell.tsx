'use client';

import { useState, useCallback } from 'react';
import CrimsonNavBar from './CrimsonNavBar';
import CrimsonFooter from './CrimsonFooter';
import CrimsonSearch from './CrimsonSearch';
import CrimsonScrollProgress from './CrimsonScrollProgress';

interface CrimsonShellProps {
  locale: string;
  children: React.ReactNode;
}

export default function CrimsonShell({ locale, children }: CrimsonShellProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <>
      <CrimsonScrollProgress />
      <CrimsonNavBar locale={locale} onSearchOpen={openSearch} />
      <CrimsonSearch locale={locale} open={searchOpen} onClose={closeSearch} />
      {/* Vignette overlay — matches pywelwiki exactly */}
      <div className="vignette" aria-hidden="true" />
      {children}
      <CrimsonFooter locale={locale} />
    </>
  );
}
