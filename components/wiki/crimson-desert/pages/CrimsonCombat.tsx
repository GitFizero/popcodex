'use client';

import { useState } from 'react';
import { useCrimsonI18n } from '@/lib/data/crimson-desert/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';
import GoldDivider from '@/components/wiki/crimson-desert/GoldDivider';
import CrimsonNavBar from '@/components/wiki/crimson-desert/CrimsonNavBar';
import CrimsonFooter from '@/components/wiki/crimson-desert/CrimsonFooter';

type CombatSection = 'weapons' | 'elements' | 'bosses';

const weaponTypes = [
  { id: 'sword', icon: '\u2694', nameFr: 'Épée & Bouclier', nameEn: 'Sword & Shield' },
  { id: 'lance', icon: '\u{1F531}', nameFr: 'Lance', nameEn: 'Lance' },
  { id: 'greatsword', icon: '\u{1F5E1}', nameFr: 'Grande Épée', nameEn: 'Greatsword' },
  { id: 'axe', icon: '\u{1FA93}', nameFr: 'Hache', nameEn: 'Axe' },
  { id: 'dual', icon: '\u2702', nameFr: 'Doubles Lames', nameEn: 'Dual Blades' },
  { id: 'bow', icon: '\u{1F3F9}', nameFr: 'Arc', nameEn: 'Bow' },
  { id: 'musket', icon: '\u{1F52B}', nameFr: 'Mousquet', nameEn: 'Musket' },
  { id: 'fists', icon: '\u{1F44A}', nameFr: 'Mains Nues', nameEn: 'Bare Hands' },
];

const bosses = [
  { id: 'staglord', name: 'Staglord', color: '#8B4513', descFr: "Boss cerf massif aux bois immenses. Charges frontales et balayages dévastateurs.", descEn: "Massive stag boss with immense antlers. Frontal charges and devastating sweeps.", danger: 4 },
  { id: 'stoneback', name: 'Queen Stoneback Crab', color: '#708090', descFr: "Boss colossal avec carapace impénétrable. Points faibles sous la carapace.", descEn: "Colossal boss with impenetrable shell. Weak points beneath the carapace.", danger: 5 },
  { id: 'reed-devil', name: 'Reed Devil', color: '#2E8B57', descFr: "Boss agile des zones marécageuses. Vitesse, attaques aériennes.", descEn: "Agile swamp-zone boss. Speed and aerial attacks.", danger: 3 },
  { id: 'white-horn', name: 'White Horn', color: '#D4D4D4', descFr: "L'un des boss les plus massifs. Attaques de zone et phases d'escalade.", descEn: "One of the most massive bosses. AoE attacks and climbing phases.", danger: 5 },
];

export default function CrimsonCombat({ locale }: { locale: string }) {
  const { t, lang } = useCrimsonI18n(locale);
  const [activeSection, setActiveSection] = useState<CombatSection>('weapons');
  const [activeElement, setActiveElement] = useState<string>('fire');

  const sections: { key: CombatSection; labelKey: string }[] = [
    { key: 'weapons', labelKey: 'combat.weapons' },
    { key: 'elements', labelKey: 'combat.elements' },
    { key: 'bosses', labelKey: 'combat.bosses' },
  ];

  const elements = [
    { key: 'fire', color: '#FF6B35', bgClass: 'bg-orange-900/20', borderClass: 'border-orange-500/30' },
    { key: 'ice', color: '#4FC3F7', bgClass: 'bg-cyan-900/20', borderClass: 'border-cyan-500/30' },
    { key: 'wind', color: '#81C784', bgClass: 'bg-green-900/20', borderClass: 'border-green-500/30' },
  ];

  return (
    <div className="min-h-screen bg-surface text-text-primary">
      <CrimsonNavBar locale={locale} />

      <section className="relative py-24 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-surface to-surface" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <RevealOnScroll>
            <h1 className="font-display text-4xl md:text-6xl text-gold-bright mb-4">{t('combat.title')}</h1>
            <p className="font-body text-lg text-text-secondary max-w-2xl mx-auto">{t('combat.combos')}</p>
          </RevealOnScroll>
        </div>
      </section>

      <GoldDivider />

      <section className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {sections.map(sec => (
            <button key={sec.key} onClick={() => setActiveSection(sec.key)}
              className={`font-ui px-6 py-3 rounded border transition-all duration-300 ${activeSection === sec.key ? 'bg-gold-bright/20 border-gold-mid text-gold-bright' : 'bg-surface-elevated border-border text-text-secondary hover:border-gold-mid/30 hover:text-gold-mid'}`}>
              {t(sec.labelKey)}
            </button>
          ))}
        </div>
      </section>

      {activeSection === 'weapons' && (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <RevealOnScroll>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {weaponTypes.map(w => (
                <div key={w.id} className="bg-surface-elevated border border-border rounded-lg p-4 text-center hover:border-gold-mid/30 transition-all duration-300 group cursor-default">
                  <div className="text-3xl mb-2">{w.icon}</div>
                  <p className="font-heading text-sm text-gold-bright">{lang === 'fr' ? w.nameFr : w.nameEn}</p>
                </div>
              ))}
            </div>
            <div className="bg-surface-elevated border border-border rounded-lg p-8">
              <h3 className="font-heading text-xl text-gold-bright mb-4">{t('combat.weapons')}</h3>
              <p className="font-body text-text-secondary leading-relaxed">
                {lang === 'fr'
                  ? "Crimson Desert propose 8 types d'armes avec un système de changement d'arme en plein combat. Kliff peut basculer entre épée, lance, arc et plus encore sans interrompre ses chaînes de combos."
                  : "Crimson Desert features 8 weapon types with a mid-combat weapon switching system. Kliff can seamlessly switch between sword, lance, bow and more without breaking combo chains."}
              </p>
            </div>
          </RevealOnScroll>
        </section>
      )}

      {activeSection === 'elements' && (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <RevealOnScroll>
            <div className="flex justify-center gap-6 mb-10">
              {elements.map(el => (
                <button key={el.key} onClick={() => setActiveElement(el.key)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all duration-300 ${activeElement === el.key ? `${el.bgClass} ${el.borderClass} scale-110` : 'border-border bg-surface-elevated hover:border-gold-mid/30'}`}>
                  <span className="text-2xl" style={{ color: activeElement === el.key ? el.color : '#c8a45a80' }}>
                    {el.key === 'fire' ? '\u{1F525}' : el.key === 'ice' ? '\u2744\uFE0F' : '\u{1F32C}\uFE0F'}
                  </span>
                  <span className="font-ui text-sm" style={{ color: activeElement === el.key ? el.color : undefined }}>{t(`combat.${el.key}`)}</span>
                </button>
              ))}
            </div>

            {elements.map(el => {
              if (el.key !== activeElement) return null;
              return (
                <div key={el.key} className="space-y-4">
                  {[1, 2, 3].map(num => (
                    <div key={num} className={`${el.bgClass} border ${el.borderClass} rounded-lg p-6 transition-all duration-500`}>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border" style={{ borderColor: el.color + '60', color: el.color }}>
                          <span className="font-heading text-sm">{num}</span>
                        </div>
                        <p className="font-body text-text-secondary leading-relaxed">{t(`combat.${el.key}.${num}`)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </RevealOnScroll>
        </section>
      )}

      {activeSection === 'bosses' && (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <RevealOnScroll>
            <div className="text-center mb-8">
              <h2 className="font-heading text-2xl text-gold-bright mb-4">{t('combat.bosses')}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {bosses.map(boss => (
                <div key={boss.id} className="group bg-surface-elevated border border-border rounded-lg overflow-hidden hover:border-gold-mid/30 transition-all duration-500 hover:shadow-lg hover:shadow-gold-bright/5">
                  <div className="h-40 bg-black/40 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity" style={{ background: `radial-gradient(circle at center, ${boss.color}44, transparent 70%)` }} />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-5xl opacity-20 group-hover:opacity-30 transition-opacity">{'\u{1F480}'}</span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1" style={{ backgroundColor: boss.color }} />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl text-gold-bright mb-2">{boss.name}</h3>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">{lang === 'fr' ? boss.descFr : boss.descEn}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <span className="font-ui text-xs text-gold-mid/70 uppercase">{lang === 'fr' ? 'DANGER' : 'DANGER'}:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map(star => (
                          <svg key={star} className="w-4 h-4" viewBox="0 0 24 24" fill={star <= boss.danger ? '#c8a45a' : '#c8a45a33'}>
                            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </section>
      )}

      <CrimsonFooter locale={locale} />
    </div>
  );
}
