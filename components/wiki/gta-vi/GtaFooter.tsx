'use client';

import Link from 'next/link';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';

interface GtaFooterProps {
  locale: string;
}

const GtaFooter = ({ locale }: GtaFooterProps) => {
  const { t } = useGtaI18n(locale);
  const prefix = `/${locale}/gta-vi`;

  return (
    <footer className="border-t border-neon-pink/10 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <nav className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-4">
          <Link href={`${prefix}/about`} className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest hover:text-neon-cyan transition-colors">
            {t('nav.about')}
          </Link>
          <Link href={`${prefix}/contact`} className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest hover:text-neon-cyan transition-colors">
            {t('nav.contact')}
          </Link>
          <Link href={`${prefix}/faq`} className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest hover:text-neon-cyan transition-colors">
            FAQ
          </Link>
          <Link href={`${prefix}/blog`} className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest hover:text-neon-cyan transition-colors">
            BLOG
          </Link>
        </nav>
        <p className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest leading-relaxed text-center">
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  );
};

export default GtaFooter;
