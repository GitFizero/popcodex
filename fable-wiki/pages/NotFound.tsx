// @ts-nocheck
import { Link } from 'react-router-dom';
import { useI18n } from '@/fable-wiki/context/I18nContext';
import SEOHead from '@/fable-wiki/components/SEOHead';

const NotFound = () => {
  const { lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen flex items-center justify-center px-4">
      <SEOHead
        title={lang === 'fr' ? 'Page Non Trouvee' : 'Page Not Found'}
        description={lang === 'fr' ? 'Cette page n\'existe pas.' : 'This page does not exist.'}
        noindex
        lang={lang}
      />

      <div className="text-center">
        <div className="relative mb-8">
          <span className="font-display text-[8rem] sm:text-[12rem] text-emerald-900/30 leading-none select-none">404</span>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-emerald-500/40">
              <path d="M30 5L35 20H50L38 30L43 45L30 35L17 45L22 30L10 20H25Z" fill="currentColor" />
            </svg>
          </div>
        </div>

        <h1 className="font-heading text-2xl text-emerald-400 tracking-wider mb-3">
          {lang === 'fr' ? 'PAGE NON TROUVEE' : 'PAGE NOT FOUND'}
        </h1>
        <p className="font-body text-sm text-gray-400 mb-8 max-w-md mx-auto">
          {lang === 'fr'
            ? "Cette page semble avoir ete petrifiee par l'Etranger. Elle n'existe pas ou a ete deplacee."
            : "This page seems to have been petrified by the Stranger. It doesn't exist or has been moved."
          }
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-sm tracking-[0.15em] bg-emerald-700 text-white hover:bg-emerald-600 transition-all duration-300"
        >
          {lang === 'fr' ? 'RETOUR A L\'ACCUEIL' : 'BACK TO HOME'}
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
