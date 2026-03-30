// @ts-nocheck
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';

const Weapons = () => {
  const { t, lang } = useI18n();

  const weaponCategories = {
    fr: [
      { name: 'Pistolets', items: ['Pistolet semi-automatique', 'Pistolet combat', 'Revolver'], desc: 'Armes de poing compactes et precises.' },
      { name: "Fusils d'assaut", items: ['Fusil tactique', 'Carabine', 'Fusil militaire'], desc: 'Equilibre entre puissance et precision.' },
      { name: 'SMG', items: ['SMG compact', 'SMG tactique', 'Micro SMG'], desc: 'Tir rapide en combat rapproche.' },
      { name: 'Fusils a pompe', items: ['Fusil a pompe', 'Fusil a canon scie', 'Fusil automatique'], desc: 'Puissance devastatrice a courte portee.' },
      { name: 'Fusils de precision', items: ['Fusil sniper', 'Fusil de chasse'], desc: "Precision a longue portee." },
      { name: 'Explosifs', items: ['Grenade', 'C4', 'Cocktail Molotov'], desc: 'Destruction de zone.' },
      { name: 'Melee', items: ['Batte de baseball', 'Couteau', 'Machette'], desc: 'Combat au corps a corps.' },
    ],
    en: [
      { name: 'Pistols', items: ['Semi-automatic Pistol', 'Combat Pistol', 'Revolver'], desc: 'Compact and accurate handguns.' },
      { name: 'Assault Rifles', items: ['Tactical Rifle', 'Carbine', 'Military Rifle'], desc: 'Balance of firepower and accuracy.' },
      { name: 'SMGs', items: ['Compact SMG', 'Tactical SMG', 'Micro SMG'], desc: 'Rapid fire for close quarters.' },
      { name: 'Shotguns', items: ['Pump Shotgun', 'Sawed-off', 'Auto Shotgun'], desc: 'Devastating short-range power.' },
      { name: 'Sniper Rifles', items: ['Sniper Rifle', 'Hunting Rifle'], desc: 'Long-range precision.' },
      { name: 'Explosives', items: ['Grenade', 'C4', 'Molotov Cocktail'], desc: 'Area destruction.' },
      { name: 'Melee', items: ['Baseball Bat', 'Knife', 'Machete'], desc: 'Close combat weapons.' },
    ],
    es: [
      { name: 'Pistolas', items: ['Pistola semiautomatica', 'Pistola de combate', 'Revolver'], desc: 'Armas de mano compactas.' },
      { name: 'Rifles de asalto', items: ['Rifle tactico', 'Carabina', 'Rifle militar'], desc: 'Equilibrio de potencia y precision.' },
      { name: 'SMG', items: ['SMG compacto', 'SMG tactico', 'Micro SMG'], desc: 'Fuego rapido a corta distancia.' },
      { name: 'Escopetas', items: ['Escopeta', 'Canon recortado', 'Escopeta automatica'], desc: 'Poder devastador a corta distancia.' },
      { name: 'Rifles de precision', items: ['Rifle francotirador', 'Rifle de caza'], desc: 'Precision a larga distancia.' },
      { name: 'Explosivos', items: ['Granada', 'C4', 'Coctel Molotov'], desc: 'Destruccion de area.' },
      { name: 'Melee', items: ['Bate de beisbol', 'Cuchillo', 'Machete'], desc: 'Armas cuerpo a cuerpo.' },
    ],
  };

  const cats = weaponCategories[lang] || weaponCategories.en;

  return (
    <>
      <SEOHead
        title={seo.weapons.title[lang] || seo.weapons.title.en}
        description={seo.weapons.desc[lang] || seo.weapons.desc.en}
        path="/weapons"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.weapons[lang], path: '/weapons' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto pb-20">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('nav.weapons')}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="space-y-8">
            {cats.map((cat, i) => (
              <RevealOnScroll key={i} stagger={i * 80}>
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                  <h2 className="text-lg font-bold tracking-wider mb-2" style={{ color: '#FF1493' }}>{cat.name}</h2>
                  <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>{cat.desc}</p>
                  <div className="flex flex-wrap gap-3">
                    {cat.items.map(item => (
                      <span key={item} className="px-3 py-1.5 text-xs rounded" style={{ background: 'rgba(0, 255, 255, 0.06)', border: '1px solid rgba(0, 255, 255, 0.15)', color: '#00FFFF' }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Weapons;
