// @ts-nocheck
import { useState, useMemo } from 'react';
import { useI18n, tr } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';
import { quests } from '@/gta-vi-wiki/data/quests';
import type { QuestType } from '@/gta-vi-wiki/data/quests';

const Quests = () => {
  const { t, lang } = useI18n();
  const [typeFilter, setTypeFilter] = useState<string>('ALL');

  const types = ['ALL', 'MAIN', 'SIDE', 'FACTION', 'HIDDEN'];
  const typeLabels: Record<string, Record<string, string>> = {
    MAIN: { fr: 'PRINCIPALE', en: 'MAIN', es: 'PRINCIPAL' },
    SIDE: { fr: 'SECONDAIRE', en: 'SIDE', es: 'SECUNDARIA' },
    FACTION: { fr: 'FACTION', en: 'FACTION', es: 'FACCION' },
    HIDDEN: { fr: 'CACHEE', en: 'HIDDEN', es: 'OCULTA' },
  };

  const filtered = useMemo(() => {
    if (typeFilter === 'ALL') return quests;
    return quests.filter(q => q.type === typeFilter);
  }, [typeFilter]);

  return (
    <>
      <SEOHead
        title={seo.quests.title[lang] || seo.quests.title.en}
        description={seo.quests.desc[lang] || seo.quests.desc.en}
        path="/quests"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.quests[lang], path: '/quests' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-5xl mx-auto pb-20">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('nav.db.quests').toUpperCase()}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {types.map(tp => (
              <button
                key={tp}
                onClick={() => setTypeFilter(tp)}
                className="px-3 py-1.5 text-xs tracking-wider rounded transition-all"
                style={{
                  background: typeFilter === tp ? 'rgba(255, 20, 147, 0.15)' : 'transparent',
                  border: `1px solid ${typeFilter === tp ? '#FF1493' : 'rgba(255,255,255,0.1)'}`,
                  color: typeFilter === tp ? '#FF1493' : 'rgba(255,255,255,0.5)',
                }}
              >
                {tp === 'ALL' ? t('lore.all') : (typeLabels[tp]?.[lang] || tp)}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-bold mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {lang === 'fr' ? 'Aucune mission dans cette categorie' : lang === 'es' ? 'No hay misiones en esta categoria' : 'No missions in this category'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((quest, i) => (
                <RevealOnScroll key={quest.id} stagger={i * 50}>
                  <div className="p-5 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-sm font-bold" style={{ color: 'white' }}>{tr(quest.name, lang)}</h3>
                      <span className="text-[0.55rem] tracking-wider px-2 py-0.5 rounded" style={{ background: quest.type === 'MAIN' ? 'rgba(255, 20, 147, 0.2)' : 'rgba(0, 255, 255, 0.1)', color: quest.type === 'MAIN' ? '#FF1493' : '#00FFFF' }}>
                        {typeLabels[quest.type]?.[lang] || quest.type}
                      </span>
                      {quest.chapter && (
                        <span className="text-[0.55rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>{t('story.chapter')} {quest.chapter}</span>
                      )}
                    </div>
                    <p className="text-xs leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.6)' }}>{tr(quest.description, lang)}</p>
                    <div className="flex items-center gap-4 text-[0.6rem]" style={{ color: 'rgba(255,255,255,0.3)' }}>
                      <span>{lang === 'fr' ? 'Recompense' : lang === 'es' ? 'Recompensa' : 'Reward'}: {tr(quest.rewards, lang)}</span>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Quests;
