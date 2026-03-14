// @ts-nocheck
import { useState } from 'react';
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';

const weaponsData = [
  {
    id: 'adamantium-claws',
    name: { fr: "Griffes d'Adamantium", en: 'Adamantium Claws' },
    category: { fr: 'Arme naturelle', en: 'Natural Weapon' },
    desc: { fr: "Six griffes retractables en adamantium indestructible, trois par main. Capables de trancher pratiquement n'importe quel materiau. L'arme signature de Wolverine, integree a son propre corps.", en: "Six retractable claws made of indestructible adamantium, three per hand. Capable of cutting through virtually any material. Wolverine's signature weapon, integrated into his own body." },
    stats: { damage: 95, speed: 90, range: 30 },
  },
  {
    id: 'katana',
    name: { fr: 'Katana', en: 'Katana' },
    category: { fr: 'Arme de melee', en: 'Melee Weapon' },
    desc: { fr: "Heritage du sejour de Logan au Japon. Une lame tranchante offrant une portee etendue et des techniques de combat elegantes.", en: "Legacy of Logan's time in Japan. A sharp blade offering extended range and elegant combat techniques." },
    stats: { damage: 75, speed: 70, range: 65 },
  },
  {
    id: 'muramasa',
    name: { fr: 'Lame Muramasa', en: 'Muramasa Blade' },
    category: { fr: 'Arme legendaire', en: 'Legendary Weapon' },
    desc: { fr: "Epee forgee par le demon Muramasa avec une partie de l'ame de Logan. Capable d'annuler les facteurs guerisseurs, la rendant mortelle meme pour les mutants.", en: "Sword forged by the demon Muramasa with a piece of Logan's soul. Capable of nullifying healing factors, making it lethal even to mutants." },
    stats: { damage: 100, speed: 60, range: 55 },
  },
];

const WeaponsPage = () => {
  const { t, lang } = useI18n();
  const [activeWeapon, setActiveWeapon] = useState(weaponsData[0].id);
  const weapon = weaponsData.find(w => w.id === activeWeapon) || weaponsData[0];

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={lang === 'fr' ? 'ARMES' : 'WEAPONS'} /></RevealOnScroll>
        <h1 className="sr-only">{seo.weapons.title[lang]}</h1>

        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {/* Weapon List */}
          <div className="lg:w-[30%] space-y-2">
            {weaponsData.map(w => (
              <button key={w.id} onClick={() => setActiveWeapon(w.id)}
                className={`w-full text-left rounded-md p-4 transition-all duration-200 border
                  ${w.id === activeWeapon ? 'bg-raised border-yellow-500/50' : 'border-border hover:bg-raised/30'}`}>
                <div className="font-heading text-sm text-text-primary">{w.name[lang]}</div>
                <div className="font-ui text-[0.6rem] text-text-muted-custom">{w.category[lang]}</div>
              </button>
            ))}
          </div>

          {/* Weapon Detail */}
          <div className="lg:w-[70%] bg-surface/50 border border-border rounded-lg p-6">
            <h2 className="font-display text-2xl text-gold-bright">{weapon.name[lang]}</h2>
            <p className="font-ui text-xs tracking-wider text-yellow-500 mt-1">{weapon.category[lang]}</p>
            <p className="font-body text-sm text-text-secondary mt-4 leading-relaxed">{weapon.desc[lang]}</p>

            <div className="mt-6 space-y-4">
              {Object.entries(weapon.stats).map(([key, value]) => (
                <div key={key}>
                  <div className="flex justify-between mb-1">
                    <span className="font-ui text-xs tracking-wider text-text-secondary uppercase">{key}</span>
                    <span className="font-ui text-xs text-text-muted-custom">{value}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden">
                    <div className="h-full rounded-full bg-yellow-500 transition-all duration-700" style={{ width: `${value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WeaponsPage;
