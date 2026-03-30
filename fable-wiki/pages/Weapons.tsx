// @ts-nocheck
import { Link } from 'react-router-dom';
import { useI18n } from '@/fable-wiki/context/I18nContext';
import RevealOnScroll from '@/fable-wiki/components/RevealOnScroll';
import RuneDivider from '@/fable-wiki/components/RuneDivider';
import SEOHead from '@/fable-wiki/components/SEOHead';
import { seo } from '@/fable-wiki/lib/seo';

const Weapons = () => {
  const { t, lang } = useI18n();

  const weaponCategories = [
    {
      name: lang === 'fr' ? 'Armes de Melee' : 'Melee Weapons',
      discipline: t('combat.strength'),
      color: 'emerald',
      items: [
        { name: lang === 'fr' ? 'Epees' : 'Swords', desc: lang === 'fr' ? 'Armes polyvalentes equilibrant vitesse et degats.' : 'Versatile weapons balancing speed and damage.' },
        { name: lang === 'fr' ? 'Haches' : 'Axes', desc: lang === 'fr' ? 'Armes lourdes infligeant des degats eleves.' : 'Heavy weapons dealing high damage.' },
        { name: lang === 'fr' ? 'Marteaux' : 'Hammers', desc: lang === 'fr' ? 'Armes devastatrices a frappe lente mais puissante.' : 'Devastating weapons with slow but powerful strikes.' },
      ],
    },
    {
      name: lang === 'fr' ? 'Armes a Distance' : 'Ranged Weapons',
      discipline: t('combat.skill'),
      color: 'yellow',
      items: [
        { name: lang === 'fr' ? 'Arcs' : 'Bows', desc: lang === 'fr' ? 'Arme emblematique de l\'Adresse. Tirs precis a longue portee.' : "Skill's iconic weapon. Precise long-range shots." },
        { name: lang === 'fr' ? 'Arbaletes' : 'Crossbows', desc: lang === 'fr' ? 'Puissance superieure mais rechargement plus lent.' : 'Superior power but slower reload.' },
      ],
    },
    {
      name: lang === 'fr' ? 'Magie (Volonte)' : 'Magic (Will)',
      discipline: t('combat.will'),
      color: 'purple',
      items: [
        { name: lang === 'fr' ? 'Boule de Feu' : 'Fireball', desc: lang === 'fr' ? 'Sort offensif classique infligeant des degats de zone.' : 'Classic offensive spell dealing area damage.' },
        { name: lang === 'fr' ? 'Eclair' : 'Lightning', desc: lang === 'fr' ? 'Sort de foudre a enchainement rapide.' : 'Lightning spell with rapid chain hits.' },
        { name: lang === 'fr' ? 'Guerison' : 'Healing', desc: lang === 'fr' ? 'Sort de soin pour recuperer de la vie.' : 'Healing spell to recover health.' },
      ],
    },
  ];

  const colorMap = {
    emerald: { border: 'border-emerald-700/40', bg: 'bg-emerald-900/10', text: 'text-emerald-400', badge: 'bg-emerald-700/60' },
    yellow: { border: 'border-yellow-700/40', bg: 'bg-yellow-900/10', text: 'text-yellow-400', badge: 'bg-yellow-700/60' },
    purple: { border: 'border-purple-700/40', bg: 'bg-purple-900/10', text: 'text-purple-400', badge: 'bg-purple-700/60' },
  };

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20 pb-16 px-4">
      <SEOHead
        title={seo.weapons.title[lang]}
        description={seo.weapons.desc[lang]}
        path="/weapons"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.weapons[lang], path: '/weapons' },
        ]}
      />

      <div className="max-w-5xl mx-auto">
        <RevealOnScroll>
          <RuneDivider variant="section" title={t('nav.weapons')} />
          <p className="text-center font-body text-sm text-gray-400 mt-2">
            {lang === 'fr'
              ? "Les armes de Fable sont reparties entre les trois disciplines du Style-Weaving."
              : "Fable's weapons are distributed across the three Style-Weaving disciplines."
            }
          </p>
        </RevealOnScroll>

        {/* Weapon categories */}
        <div className="space-y-8 mt-8">
          {weaponCategories.map((cat, i) => {
            const colors = colorMap[cat.color];
            return (
              <RevealOnScroll key={cat.name} stagger={i * 150}>
                <div className={`rounded-lg border ${colors.border} ${colors.bg} overflow-hidden`}>
                  <div className="p-5 border-b border-emerald-900/20">
                    <div className="flex items-center gap-3">
                      <h3 className={`font-heading text-lg tracking-wider ${colors.text}`}>{cat.name}</h3>
                      <span className={`font-body text-[0.55rem] tracking-wider px-2 py-0.5 rounded text-gray-200 ${colors.badge}`}>
                        {cat.discipline}
                      </span>
                    </div>
                  </div>
                  <div className="divide-y divide-emerald-900/20">
                    {cat.items.map((item, j) => (
                      <div key={j} className="p-4 flex items-start gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colors.text.replace('text', 'bg')}`} />
                        <div>
                          <h4 className="font-heading text-sm text-gray-200">{item.name}</h4>
                          <p className="font-body text-xs text-gray-400 mt-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Link to combat */}
        <RevealOnScroll>
          <div className="mt-8 text-center">
            <Link to="/combat" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-heading text-sm tracking-[0.15em] border border-emerald-700/50 text-emerald-400 hover:bg-emerald-900/30 transition-all duration-300">
              {lang === 'fr' ? 'VOIR LE SYSTEME DE COMBAT' : 'VIEW COMBAT SYSTEM'} →
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default Weapons;
