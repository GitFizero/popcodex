// @ts-nocheck
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import { blogArticles } from '@/crimson-desert-wiki/data/blog';

const guideTitles = {
  fr: 'Guides Crimson Desert',
  en: 'Crimson Desert Guides',
  es: 'Guías Crimson Desert',
  it: 'Guide Crimson Desert',
};

const guideSubtitles = {
  fr: 'Tous nos guides complets pour maîtriser Crimson Desert : armes, boss, personnages, exploration et conseils pour débutants.',
  en: 'All our complete guides to master Crimson Desert: weapons, bosses, characters, exploration and beginner tips.',
  es: 'Todas nuestras guías completas para dominar Crimson Desert: armas, jefes, personajes, exploración y consejos para principiantes.',
  it: 'Tutte le nostre guide complete per padroneggiare Crimson Desert: armi, boss, personaggi, esplorazione e consigli per principianti.',
};

const Guides = () => {
  const { t, lang } = useI18n();

  const guideArticles = useMemo(
    () => blogArticles.filter(a => a.category === 'GUIDE'),
    []
  );

  const otherArticles = useMemo(
    () => blogArticles.filter(a => a.category !== 'GUIDE'),
    []
  );

  return (
    <main id="main-content" className="relative z-10 pt-24 pb-16 px-4">
      <SEOHead
        title={guideTitles[lang]}
        description={guideSubtitles[lang]}
        path="/guides"
        lang={lang}
        breadcrumbs={[
          { name: lang === 'fr' ? 'Accueil' : lang === 'es' ? 'Inicio' : 'Home', path: '/' },
          { name: 'Guides', path: '/guides' },
        ]}
      />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <span className="font-ui text-[0.65rem] tracking-[0.3em] text-crimson-bright">
              WIKI FAN
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl text-gold-bright mt-2">
              {guideTitles[lang]}
            </h1>
            <p className="font-body text-sm text-text-secondary mt-4 max-w-2xl mx-auto">
              {guideSubtitles[lang]}
            </p>
          </div>
        </RevealOnScroll>

        <GoldDivider />

        {/* Guide Articles Grid */}
        <RevealOnScroll>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-10">
            {guideArticles.map((article) => (
              <Link
                key={article.slug}
                to={`/blog/${article.slug}`}
                className="group block rounded-lg border border-border overflow-hidden hover:border-gold-mid/40 transition-all hover:shadow-lg hover:shadow-gold-mid/5"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.coverImage}
                    alt={tr(article.title, lang)}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <span className="absolute top-2 left-2 font-ui text-[0.55rem] tracking-[0.2em] text-sand-pale bg-void/70 px-2 py-0.5 rounded">
                    GUIDE
                  </span>
                </div>
                <div className="p-4">
                  <h2 className="font-heading text-base text-gold-mid group-hover:text-gold-bright transition-colors line-clamp-2">
                    {tr(article.title, lang)}
                  </h2>
                  <p className="font-body text-xs text-text-muted-custom mt-2 line-clamp-2">
                    {tr(article.excerpt, lang)}
                  </p>
                  <div className="flex items-center gap-2 mt-3 font-ui text-[0.6rem] text-text-muted-custom">
                    <span>~{article.readingTime} {t('blog.min')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </RevealOnScroll>

        {/* Other articles */}
        {otherArticles.length > 0 && (
          <>
            <GoldDivider />
            <RevealOnScroll>
              <div className="mt-10">
                <h2 className="font-heading text-xl text-gold-bright mb-6 text-center">
                  {lang === 'fr' ? 'Autres articles' : lang === 'es' ? 'Otros artículos' : lang === 'it' ? 'Altri articoli' : 'Other Articles'}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {otherArticles.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/blog/${article.slug}`}
                      className="group flex gap-3 p-3 rounded-lg border border-border hover:border-gold-mid/40 transition-colors"
                    >
                      <img
                        src={article.coverImage}
                        alt={tr(article.title, lang)}
                        className="w-16 h-16 rounded object-cover flex-shrink-0"
                        loading="lazy"
                      />
                      <div className="min-w-0">
                        <span className="font-ui text-[0.5rem] tracking-[0.2em] text-crimson-bright">
                          {article.category}
                        </span>
                        <h3 className="font-heading text-sm text-gold-mid group-hover:text-gold-bright transition-colors line-clamp-2">
                          {tr(article.title, lang)}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </>
        )}

        {/* Back */}
        <RevealOnScroll>
          <div className="mt-12 text-center">
            <Link to="/blog" className="btn-outline text-sm">
              ← {t('blog.backToList')}
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default Guides;
