// @ts-nocheck
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { characters } from '@/gta-vi-wiki/data/characters';
import { tr } from '@/gta-vi-wiki/context/I18nContext';

const Combat = () => {
  const { t, lang } = useI18n();

  const combatMechanics = {
    fr: [
      { title: 'Systeme de couverture', desc: 'GTA VI introduit un systeme de couverture ameliore permettant des transitions fluides entre positions.' },
      { title: 'Double protagoniste', desc: 'Alternez entre Lucia et Jason pendant le combat, chacun avec son propre style.' },
      { title: 'IA amelioree', desc: "Les ennemis s'adaptent a votre strategie et communiquent entre eux." },
      { title: 'Combat au corps a corps', desc: 'Systeme de combat de melee revu avec combos et esquives.' },
    ],
    en: [
      { title: 'Cover System', desc: 'GTA VI introduces an improved cover system with smooth transitions between positions.' },
      { title: 'Dual Protagonist', desc: 'Switch between Lucia and Jason during combat, each with their own style.' },
      { title: 'Improved AI', desc: 'Enemies adapt to your strategy and communicate with each other.' },
      { title: 'Melee Combat', desc: 'Revamped melee combat system with combos and dodges.' },
    ],
    es: [
      { title: 'Sistema de cobertura', desc: 'GTA VI introduce un sistema de cobertura mejorado.' },
      { title: 'Doble protagonista', desc: 'Alterna entre Lucia y Jason durante el combate.' },
      { title: 'IA mejorada', desc: 'Los enemigos se adaptan a tu estrategia.' },
      { title: 'Combate cuerpo a cuerpo', desc: 'Sistema de combate melee renovado.' },
    ],
  };

  const mechanics = combatMechanics[lang] || combatMechanics.en;

  return (
    <>
      <SEOHead
        title={(seo as any).combat?.title?.[lang] || (lang === 'fr' ? 'Systeme de Combat GTA VI | Mecaniques & Techniques' : lang === 'es' ? 'Sistema de Combate GTA VI' : 'GTA VI Combat System | Mechanics & Techniques')}
        description={(seo as any).combat?.desc?.[lang] || (lang === 'fr' ? 'Guide du systeme de combat de GTA VI : mecaniques, techniques et strategies.' : 'GTA VI combat system guide: mechanics, techniques and strategies.')}
        path="/combat"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: (seo.breadcrumb as any).combat?.[lang] || 'Combat', path: '/combat' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              COMBAT
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {/* Combat mechanics */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {mechanics.map((m, i) => (
              <RevealOnScroll key={i} stagger={i * 100}>
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.1)' }}>
                  <h3 className="text-sm font-bold tracking-wider mb-3" style={{ color: '#00FFFF' }}>{m.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{m.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Character combat styles */}
          <NeonDivider variant="section" title={lang === 'fr' ? 'STYLES DE COMBAT' : lang === 'es' ? 'ESTILOS DE COMBATE' : 'COMBAT STYLES'} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 pb-20">
            {characters.map(char => (
              <RevealOnScroll key={char.id}>
                <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${char.colorTheme === 'pink' ? 'rgba(255, 20, 147, 0.2)' : 'rgba(0, 255, 255, 0.2)'}` }}>
                  <h3 className="text-lg font-bold mb-2" style={{ color: char.colorTheme === 'pink' ? '#FF1493' : '#00FFFF' }}>{char.name}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.6)' }}>{tr(char.combatStyle, lang)}</p>
                  <div className="space-y-3">
                    {[
                      { label: t('common.strength'), value: char.strength },
                      { label: t('common.speed'), value: char.speed },
                      { label: t('common.magic'), value: char.magic },
                    ].map(stat => (
                      <div key={stat.label}>
                        <div className="flex justify-between text-[0.65rem] mb-1">
                          <span style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</span>
                          <span style={{ color: '#FF1493' }}>{stat.value}/10</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.05)' }}>
                          <div className="h-full rounded-full" style={{ width: `${stat.value * 10}%`, background: char.colorTheme === 'pink' ? '#FF1493' : '#00FFFF' }} />
                        </div>
                      </div>
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

export default Combat;
