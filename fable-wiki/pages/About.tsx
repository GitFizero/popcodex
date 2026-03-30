// @ts-nocheck
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const About = () => {
  const { t, lang } = useI18n();

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.about.title[lang]}
        description={seo.about.desc[lang]}
        path="/about"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.about[lang], path: '/about' },
        ]}
      />

      <div className="max-w-3xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('nav.about')} />
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="mt-8 space-y-8">
            {/* Fan site notice */}
            <div className="p-6 rounded-lg border border-emerald-700/30 bg-[hsl(150,30%,5%)]" style={{ boxShadow: '0 0 40px rgba(34,197,94,0.1)' }}>
              <h2 className="font-display text-2xl text-emerald-400 mb-3">{t('nav.fan_site')}</h2>
              <p className="font-body text-sm text-gray-300 leading-relaxed">{t('footer.desc')}</p>
              <p className="font-body text-[0.65rem] text-gray-500 mt-3">{t('about.images_credit')}</p>
            </div>

            {/* What is this wiki */}
            <div className="p-6 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,6%)]">
              <h3 className="font-heading text-lg text-emerald-400 tracking-wider mb-3">
                {lang === 'fr' ? 'QU\'EST-CE QUE CE WIKI ?' : 'WHAT IS THIS WIKI?'}
              </h3>
              <p className="font-body text-sm text-gray-300 leading-relaxed">
                {lang === 'fr'
                  ? "Ce site est une encyclopedie fan non officielle dediee au nouveau Fable par Playground Games. Notre objectif est de rassembler toutes les informations confirmees sur le jeu — personnages, histoire, monde, systemes de jeu — dans un format accessible et bien organise. Toutes les informations proviennent de sources officielles (trailers, interviews, presentations)."
                  : "This site is an unofficial fan encyclopedia dedicated to the new Fable by Playground Games. Our goal is to gather all confirmed information about the game — characters, story, world, game systems — in an accessible and well-organized format. All information comes from official sources (trailers, interviews, presentations)."
                }
              </p>
            </div>

            {/* The game */}
            <div className="p-6 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,6%)]">
              <h3 className="font-heading text-lg text-emerald-400 tracking-wider mb-3">
                {lang === 'fr' ? 'LE JEU' : 'THE GAME'}
              </h3>
              <p className="font-body text-sm text-gray-300 leading-relaxed">
                {lang === 'fr'
                  ? "Fable est un action-RPG en monde ouvert developpe par Playground Games et publie par Xbox Game Studios. Le jeu est prevu pour l'automne 2026 sur Xbox Series X|S, PlayStation 5 et PC. Il s'agit d'un reboot de la serie Fable originale creee par Lionhead Studios."
                  : "Fable is an open-world action-RPG developed by Playground Games and published by Xbox Game Studios. The game is scheduled for Autumn 2026 on Xbox Series X|S, PlayStation 5, and PC. It is a reboot of the original Fable series created by Lionhead Studios."
                }
              </p>
            </div>

            {/* Contact */}
            <div id="contact" className="p-6 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,6%)]">
              <h3 className="font-heading text-lg text-emerald-400 tracking-wider mb-3">{t('footer.contact')}</h3>
              <p className="font-body text-sm text-gray-300 leading-relaxed">
                {lang === 'fr'
                  ? "Pour toute question, suggestion ou signalement d'erreur, n'hesitez pas a nous contacter. Ce site est maintenu par des fans passionnes d'Albion."
                  : "For any questions, suggestions, or error reports, feel free to contact us. This site is maintained by passionate fans of Albion."
                }
              </p>
            </div>

            {/* Disclaimer */}
            <div className="text-center py-6">
              <p className="font-body text-[0.65rem] tracking-wider text-gray-600 uppercase leading-relaxed">{t('footer.disclaimer')}</p>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default About;
