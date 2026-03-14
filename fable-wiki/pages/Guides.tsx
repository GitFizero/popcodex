// @ts-nocheck
import { Link } from 'react-router-dom';
import { useI18n } from '@/fable-wiki/context/I18nContext';
import { blogArticles } from '@/fable-wiki/data/blog';
import { tr } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Guides = () => {
  const { t, lang } = useI18n();

  const guideArticles = blogArticles.filter(a => a.category === 'GUIDE');

  const quickGuides = [
    {
      title: lang === 'fr' ? 'Guide du Debutant' : 'Beginner Guide',
      desc: lang === 'fr' ? 'Tout ce qu\'il faut savoir pour commencer votre aventure dans Albion.' : 'Everything you need to know to start your adventure in Albion.',
      link: '/combat',
      icon: '1',
    },
    {
      title: lang === 'fr' ? 'Systeme de Combat' : 'Combat System',
      desc: lang === 'fr' ? 'Maitrisez le style-weaving et les trois disciplines heroiques.' : 'Master style-weaving and the three heroic disciplines.',
      link: '/combat',
      icon: '2',
    },
    {
      title: lang === 'fr' ? 'Carte du Monde' : 'World Map',
      desc: lang === 'fr' ? 'Explorez les 5 regions confirmees d\'Albion.' : 'Explore all 5 confirmed regions of Albion.',
      link: '/world',
      icon: '3',
    },
    {
      title: lang === 'fr' ? 'Bestiaire' : 'Bestiary',
      desc: lang === 'fr' ? 'Apprenez a combattre les creatures d\'Albion.' : 'Learn to fight the creatures of Albion.',
      link: '/lore',
      icon: '4',
    },
  ];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.guides.title[lang]}
        description={seo.guides.desc[lang]}
        path="/guides"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.guides[lang], path: '/guides' },
        ]}
      />

      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={lang === 'fr' ? 'GUIDES' : 'GUIDES'} />
          <p className="text-center font-body text-sm text-gray-400 mt-2">
            {lang === 'fr'
              ? "Guides et strategies pour maitriser Fable."
              : "Guides and strategies for mastering Fable."
            }
          </p>
        </RevealOnScroll>

        {/* Quick guides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          {quickGuides.map((guide, i) => (
            <RevealOnScroll key={guide.title} stagger={i * 100}>
              <Link to={guide.link} className="block group">
                <div className="rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] p-5 hover:border-emerald-700/50 transition-all duration-300 h-full flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border-2 border-emerald-700/40 flex items-center justify-center flex-shrink-0 bg-emerald-900/20">
                    <span className="font-display text-sm text-emerald-400">{guide.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-heading text-sm text-emerald-400 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.3)] transition-all">
                      {guide.title}
                    </h3>
                    <p className="font-body text-xs text-gray-400 mt-1 leading-relaxed">{guide.desc}</p>
                  </div>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>

        {/* Guide articles from blog */}
        {guideArticles.length > 0 && (
          <>
            <RevealOnScroll>
              <RuneDivider variant="section" title={lang === 'fr' ? 'ARTICLES GUIDES' : 'GUIDE ARTICLES'} className="mt-12" />
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {guideArticles.map((article, i) => (
                <RevealOnScroll key={article.slug} stagger={i * 100}>
                  <Link to={`/blog/${article.slug}`} className="block group">
                    <div className="rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)] p-5 hover:border-emerald-700/50 transition-all duration-300">
                      <span className="font-body text-[0.55rem] tracking-[0.25em] text-emerald-500 px-2 py-0.5 rounded bg-emerald-900/30">GUIDE</span>
                      <h3 className="font-heading text-base text-emerald-400 mt-2 group-hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all line-clamp-2">
                        {tr(article.title, lang)}
                      </h3>
                      <p className="font-body text-xs text-gray-400 mt-2 line-clamp-2 leading-relaxed">{tr(article.excerpt, lang)}</p>
                      <span className="font-body text-[0.6rem] text-gray-600 mt-2 block">~{article.readingTime} min</span>
                    </div>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Guides;
