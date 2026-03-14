// @ts-nocheck
import { useState } from 'react';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const weapons = [
  { id: 'claws', name: { fr: "Griffes d'Adamantium", en: 'Adamantium Claws' }, type: { fr: 'Arme principale', en: 'Primary Weapon' }, desc: { fr: "Six griffes rétractables indestructibles, trois par main. L'arme signature de Wolverine.", en: "Six retractable indestructible claws, three per hand. Wolverine's signature weapon." }, combos: ['Slash Combo', 'Berserker Flurry', 'Claw Dive', 'Cross Slash'] },
  { id: 'fists', name: { fr: 'Combat à mains nues', en: 'Hand-to-hand Combat' }, type: { fr: 'Secondaire', en: 'Secondary' }, desc: { fr: "Logan est un maître du combat rapproché, formé dans de multiples arts martiaux au fil des siècles.", en: "Logan is a master of close combat, trained in multiple martial arts over the centuries." }, combos: ['Heavy Strike', 'Grapple Throw', 'Counter'] },
  { id: 'katana', name: { fr: 'Katana', en: 'Katana' }, type: { fr: 'Arme spéciale', en: 'Special Weapon' }, desc: { fr: "Héritage de son passé au Japon. Une lame tranchante pour les attaques à portée étendue.", en: "Legacy of his Japanese past. A sharp blade for extended range attacks." }, combos: ['Iaido Strike', 'Whirlwind Slash'] },
];

const bosses = [
  { name: 'Omega Red', difficulty: 5, desc: { fr: "Boss final. Tentacules de carbonadium et drain vital.", en: "Final boss. Carbonadium tentacles and life drain." } },
  { name: 'Lady Deathstrike', difficulty: 4, desc: { fr: "Cyborg aux griffes d'adamantium. Vitesse et précision mortelles.", en: "Cyborg with adamantium claws. Deadly speed and precision." } },
  { name: 'Donald Pierce', difficulty: 3, desc: { fr: "Leader des Reavers. Arsenal cybernétique lourd.", en: "Reavers leader. Heavy cybernetic arsenal." } },
  { name: 'Sabretooth', difficulty: 4, desc: { fr: "Mutant rival avec facteur guérisseur et force surhumaine.", en: "Rival mutant with healing factor and superhuman strength." } },
];

const CombatPage = () => {
  const { t, lang } = useI18n();
  const [activeWeapon, setActiveWeapon] = useState(weapons[0].id);
  const weapon = weapons.find(w => w.id === activeWeapon) || weapons[0];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('combat.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.combat.title[lang]}</h1>

        {/* Weapons */}
        <RevealOnScroll className="mt-8">
          <h2 className="font-heading text-lg tracking-[0.15em] text-gold-mid mb-6">{t('combat.weapons')}</h2>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="lg:w-[30%] space-y-2">
              {weapons.map(w => (
                <button key={w.id} onClick={() => setActiveWeapon(w.id)}
                  className={`w-full text-left rounded-md p-4 transition-all duration-200 border
                    ${w.id === activeWeapon ? 'bg-raised border-yellow-500/50' : 'border-border hover:bg-raised/30'}`}>
                  <div className="font-heading text-sm text-text-primary">{w.name[lang]}</div>
                  <div className="font-ui text-[0.6rem] text-text-muted-custom">{w.type[lang]}</div>
                </button>
              ))}
            </div>
            <div className="lg:w-[70%] bg-surface/50 border border-border rounded-lg p-6">
              <h3 className="font-display text-xl text-gold-bright">{weapon.name[lang]}</h3>
              <p className="font-ui text-xs tracking-wider text-yellow-500 mt-1">{weapon.type[lang]}</p>
              <p className="font-body text-sm text-text-secondary mt-4 leading-relaxed">{weapon.desc[lang]}</p>
              <h4 className="font-heading text-sm tracking-[0.15em] text-gold-mid mt-6 mb-3">{t('combat.combos')}</h4>
              <div className="flex flex-wrap gap-2">
                {weapon.combos.map(c => (
                  <span key={c} className="font-ui text-xs tracking-wider px-3 py-1.5 rounded bg-yellow-900/20 text-yellow-400 border border-yellow-500/30">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Mutant Powers */}
        <RevealOnScroll className="mt-16">
          <GoldDivider variant="section" title={t('combat.elements')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              { key: 'fire', color: '#DC2626', icon: '🔥' },
              { key: 'ice', color: '#3B82F6', icon: '👁' },
              { key: 'wind', color: '#16A34A', icon: '💚' },
            ].map(power => (
              <div key={power.key} className="bg-surface/50 border border-border rounded-lg p-6 hover:border-opacity-60 transition-all" style={{ borderColor: `${power.color}30` }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{power.icon}</span>
                  <h3 className="font-heading text-lg" style={{ color: power.color }}>{t(`combat.${power.key}`)}</h3>
                </div>
                <ul className="space-y-2">
                  {[1, 2, 3].map(n => (
                    <li key={n} className="font-body text-xs text-text-secondary flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: power.color }} />
                      {t(`combat.${power.key}.${n}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Bosses */}
        <RevealOnScroll className="mt-16">
          <GoldDivider variant="section" title={t('combat.bosses')} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {bosses.map((boss, i) => (
              <RevealOnScroll key={boss.name} stagger={i * 100}>
                <div className="bg-surface/50 border border-border rounded-lg p-6 hover:border-red-500/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-heading text-lg text-text-primary">{boss.name}</h3>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < boss.difficulty ? 'bg-red-500' : 'bg-gray-700'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="font-body text-sm text-text-secondary">{boss.desc[lang]}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </RevealOnScroll>

        {/* Progression */}
        <RevealOnScroll className="mt-16">
          <GoldDivider variant="section" title={t('combat.progression')} />
          <div className="bg-surface/50 border border-border rounded-lg p-8 mt-8 text-center">
            <p className="font-body text-sm text-text-muted-custom">
              {lang === 'fr' ? "Le systeme de progression sera detaille a la sortie du jeu." : "The progression system will be detailed at game launch."}
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default CombatPage;
