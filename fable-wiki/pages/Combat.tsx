// @ts-nocheck
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Combat = () => {
  const { t, lang } = useI18n();

  const disciplines = [
    {
      name: t('combat.strength'),
      color: 'emerald',
      points: [t('combat.strength.1'), t('combat.strength.2'), t('combat.strength.3')],
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-emerald-400">
          <path d="M20 5L25 15H35L27 22L30 33L20 26L10 33L13 22L5 15H15Z" fill="currentColor" opacity="0.8" />
        </svg>
      ),
    },
    {
      name: t('combat.skill'),
      color: 'yellow',
      points: [t('combat.skill.1'), t('combat.skill.2'), t('combat.skill.3')],
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-yellow-400">
          <circle cx="20" cy="20" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: t('combat.will'),
      color: 'purple',
      points: [t('combat.will.1'), t('combat.will.2'), t('combat.will.3')],
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" className="text-purple-400">
          <path d="M20 2L24 14L36 14L26 22L30 34L20 26L10 34L14 22L4 14L16 14Z" fill="currentColor" opacity="0.6" />
          <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
  ];

  const colorMap = {
    emerald: { border: 'border-emerald-700/40', bg: 'bg-emerald-900/20', text: 'text-emerald-400', dot: 'bg-emerald-500' },
    yellow: { border: 'border-yellow-700/40', bg: 'bg-yellow-900/20', text: 'text-yellow-400', dot: 'bg-yellow-500' },
    purple: { border: 'border-purple-700/40', bg: 'bg-purple-900/20', text: 'text-purple-400', dot: 'bg-purple-500' },
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.combat.title[lang]}
        description={seo.combat.desc[lang]}
        path="/combat"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.combat[lang], path: '/combat' },
        ]}
      />

      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('combat.title')} />
        </RevealOnScroll>

        {/* Style-Weaving intro */}
        <RevealOnScroll>
          <div className="mt-8 p-6 rounded-lg border border-emerald-700/30 bg-[hsl(150,30%,5%)]" style={{ boxShadow: '0 0 40px rgba(34,197,94,0.1)' }}>
            <h2 className="font-display text-2xl text-emerald-400 mb-3">Style-Weaving</h2>
            <p className="font-body text-sm text-gray-300 leading-relaxed">
              {lang === 'fr'
                ? "Le systeme de combat signature de Fable permet de basculer fluidement entre Force, Adresse et Volonte en plein combat, sans interruption. Combinez les trois disciplines pour creer des enchainements uniques et devastateurs."
                : "Fable's signature combat system allows fluidly switching between Strength, Skill, and Will mid-combat without interruption. Combine all three disciplines to create unique and devastating chains."
              }
            </p>
          </div>
        </RevealOnScroll>

        {/* Three disciplines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {disciplines.map((disc, i) => {
            const colors = colorMap[disc.color];
            return (
              <RevealOnScroll key={disc.name} stagger={i * 150}>
                <div className={`rounded-lg border ${colors.border} ${colors.bg} p-6 min-h-[280px] flex flex-col`}>
                  <div className="flex items-center gap-3 mb-4">
                    {disc.icon}
                    <h3 className={`font-heading text-xl tracking-[0.1em] ${colors.text}`}>{disc.name}</h3>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {disc.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <div className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 flex-shrink-0`} />
                        <span className="font-body text-sm text-gray-300">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Combo flow diagram */}
        <RevealOnScroll>
          <div className="mt-12 p-6 rounded-lg border border-emerald-900/30 bg-[hsl(150,30%,5%)]">
            <h3 className="font-heading text-lg text-emerald-400 tracking-wider mb-6 text-center">
              {lang === 'fr' ? 'EXEMPLE DE COMBO STYLE-WEAVING' : 'STYLE-WEAVING COMBO EXAMPLE'}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-900/20">
                  <span className="font-heading text-xs text-emerald-400">{lang === 'fr' ? 'EPEE' : 'SWORD'}</span>
                </div>
                <span className="font-body text-[0.55rem] text-emerald-500 mt-1 block">{t('combat.strength')}</span>
              </div>
              <span className="text-emerald-600 text-2xl">→</span>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-yellow-900/20">
                  <span className="font-heading text-xs text-yellow-400">{lang === 'fr' ? 'ARC' : 'BOW'}</span>
                </div>
                <span className="font-body text-[0.55rem] text-yellow-500 mt-1 block">{t('combat.skill')}</span>
              </div>
              <span className="text-emerald-600 text-2xl">→</span>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-2 border-purple-500 flex items-center justify-center bg-purple-900/20">
                  <span className="font-heading text-xs text-purple-400">{lang === 'fr' ? 'FEU' : 'FIRE'}</span>
                </div>
                <span className="font-body text-[0.55rem] text-purple-500 mt-1 block">{t('combat.will')}</span>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default Combat;
