// @ts-nocheck
import { useState } from 'react';
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Gallery = () => {
  const { t, lang } = useI18n();
  const [filter, setFilter] = useState<string>('all');

  const filters = [
    { key: 'all', label: t('gallery.filter.all') },
    { key: 'environment', label: t('gallery.filter.environment') },
    { key: 'characters', label: t('gallery.filter.characters') },
    { key: 'combat', label: t('gallery.filter.combat') },
  ];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.gallery.title[lang]}
        description={seo.gallery.desc[lang]}
        path="/gallery"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.gallery[lang], path: '/gallery' },
        ]}
      />

      <div className="max-w-6xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('gallery.title')} />
        </RevealOnScroll>

        {/* Filters */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {filters.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 rounded-lg font-heading text-xs tracking-[0.15em] border transition-all duration-300
                  ${filter === f.key
                    ? 'bg-emerald-700 border-emerald-500 text-white'
                    : 'border-emerald-900/30 text-gray-400 hover:border-emerald-700/50 hover:text-emerald-400'
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Placeholder */}
        <RevealOnScroll>
          <div className="mt-12 text-center py-16">
            <div className="w-20 h-20 rounded-full border-2 border-emerald-700/30 flex items-center justify-center mx-auto mb-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-emerald-600">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <h3 className="font-heading text-lg text-emerald-400 tracking-wider">
              {lang === 'fr' ? 'GALERIE A VENIR' : 'GALLERY COMING SOON'}
            </h3>
            <p className="font-body text-sm text-gray-500 mt-3 max-w-md mx-auto">
              {lang === 'fr'
                ? "Les captures d'ecran et images officielles de Fable seront ajoutees ici au fur et a mesure de leur publication par Playground Games."
                : "Official Fable screenshots and images will be added here as they are released by Playground Games."
              }
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default Gallery;
