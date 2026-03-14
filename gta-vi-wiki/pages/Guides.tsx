// @ts-nocheck
import { Link } from 'react-router-dom';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { blogArticles } from '@/gta-vi-wiki/data/blog';

const Guides = () => {
  const { t, lang } = useI18n();

  const guides = blogArticles.filter(a => a.category === 'GUIDE');

  return (
    <>
      <SEOHead
        title={lang === 'fr' ? 'Guides GTA VI | Wiki Fan' : lang === 'es' ? 'Guias GTA VI | Wiki Fan' : 'GTA VI Guides | Fan Wiki'}
        description={lang === 'fr' ? 'Tous les guides GTA VI : armes, vehicules, carte, personnages.' : 'All GTA VI guides: weapons, vehicles, map, characters.'}
        path="/guides"
        lang={lang}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto pb-20">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              GUIDES
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {guides.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-bold mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {lang === 'fr' ? 'Aucun guide pour le moment' : lang === 'es' ? 'No hay guias por el momento' : 'No guides yet'}
              </p>
              <p className="text-sm" style={{ color: 'rgba(255,255,255,0.3)' }}>
                {lang === 'fr' ? 'De nouveaux guides arrivent bientot.' : lang === 'es' ? 'Nuevas guias proximamente.' : 'New guides coming soon.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {guides.map(guide => (
                <RevealOnScroll key={guide.id}>
                  <Link to={`/blog/${guide.slug}`} className="block p-6 rounded-lg transition-all duration-300" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[0.6rem] tracking-wider px-2 py-0.5 rounded" style={{ background: 'rgba(0, 255, 255, 0.15)', color: '#00FFFF' }}>{t('blog.cat.guide')}</span>
                      <span className="text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>{guide.readingTime} {t('blog.min')}</span>
                    </div>
                    <h2 className="text-lg font-bold mb-2" style={{ color: 'white' }}>{tr(guide.title, lang)}</h2>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{tr(guide.excerpt, lang)}</p>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          )}

          {/* Quick links to other guides */}
          <NeonDivider variant="short" className="my-12" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { to: '/weapons', label: t('nav.weapons'), color: '#FF1493' },
              { to: '/mounts', label: t('nav.vehicles'), color: '#00FFFF' },
              { to: '/characters', label: t('nav.characters'), color: '#FF1493' },
              { to: '/world', label: t('nav.world'), color: '#00FFFF' },
            ].map(link => (
              <Link key={link.to} to={link.to} className="p-4 rounded-lg text-center transition-all" style={{ background: `${link.color}08`, border: `1px solid ${link.color}22` }}>
                <span className="text-sm font-bold" style={{ color: link.color }}>{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Guides;
