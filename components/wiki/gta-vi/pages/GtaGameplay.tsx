'use client';

import { useState } from 'react';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

const GameplayPage = ({ locale }: { locale: string }) => {
  const [wantedLevel, setWantedLevel] = useState(0);
  const [activeProtag, setActiveProtag] = useState<'lucia' | 'jason'>('lucia');
  const { t } = useGtaI18n(locale);

  const wantedLevels = [
    t('inline.quietDay'), t('inline.localPatrol'), t('inline.vcpdPursuit'),
    t('inline.specialUnits'), t('inline.federalIntervention'), t('inline.totalMobilization')
  ];

  return (
    <div className="min-h-screen pt-16 pb-10">
      <section className="relative py-14 px-4 text-center">
        <h1 className="font-bebas text-3xl sm:text-5xl">
          <span className="neon-pink-text">{t('inline.master')}</span>
          <span className="neon-cyan-text">VICE CITY</span>
        </h1>
      </section>

      <RevealOnScroll>
        <section className="py-12 px-4">
          <h2 className="font-bebas text-2xl text-text-primary text-center mb-6">{t('gameplay.dual')}</h2>
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <button
                onClick={() => setActiveProtag(activeProtag === 'lucia' ? 'jason' : 'lucia')}
                className="font-rajdhani text-xs px-5 py-1.5 rounded-full border border-neon-gold/30 text-neon-gold hover:bg-neon-gold/10 transition-colors tracking-widest"
              >
                SWITCH ⇄
              </button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className={`bg-[hsl(213,33%,13%)] rounded-xl p-5 border transition-all duration-500 ${
                activeProtag === 'lucia' ? 'border-neon-pink/30 scale-100 opacity-100' : 'border-neon-pink/5 scale-95 opacity-50'
              }`}>
                <h3 className="font-bebas text-xl neon-pink-text mb-1">LUCIA CAMINOS</h3>
                <p className="font-rajdhani text-[0.6rem] text-text-secondary tracking-wider mb-2">
                  {t('inline.closeCombat')}
                </p>
                <p className="font-marker text-xs text-neon-pink/50">"The only thing that matters..."</p>
              </div>
              <div className={`bg-[hsl(213,33%,13%)] rounded-xl p-5 border transition-all duration-500 ${
                activeProtag === 'jason' ? 'border-neon-cyan/30 scale-100 opacity-100' : 'border-neon-cyan/5 scale-95 opacity-50'
              }`}>
                <h3 className="font-bebas text-xl neon-cyan-text mb-1">JASON DUVAL</h3>
                <p className="font-rajdhani text-[0.6rem] text-text-secondary tracking-wider mb-2">
                  {t('inline.militaryTraining')}
                </p>
                <p className="font-marker text-xs text-neon-cyan/50">"If anything happens..."</p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-12 px-4">
          <h2 className="font-bebas text-2xl text-text-primary text-center mb-6">{t('gameplay.wanted')}</h2>
          <div className="max-w-md mx-auto">
            <div className="flex justify-center gap-1.5 mb-4">
              {[0, 1, 2, 3, 4, 5].map(i => (
                <span
                  key={i}
                  className={`font-bebas text-xl cursor-pointer transition-colors ${i <= wantedLevel ? 'neon-pink-text' : 'text-text-muted-vice'}`}
                  onClick={() => setWantedLevel(i)}
                >★</span>
              ))}
            </div>
            <input type="range" min="0" max="5" value={wantedLevel} onChange={e => setWantedLevel(Number(e.target.value))} className="w-full accent-neon-pink" />
            <p className="font-barlow font-semibold text-sm text-text-primary text-center mt-3">
              {wantedLevels[wantedLevel]}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-12 px-4">
          <h2 className="font-bebas text-2xl text-text-primary text-center mb-6">{t('gameplay.social')}</h2>
          <div className="max-w-xl mx-auto bg-[hsl(213,33%,13%)] rounded-xl p-5 border border-neon-cyan/10">
            <div className="flex gap-3 mb-3">
              <span className="font-rajdhani text-[0.6rem] text-neon-cyan tracking-widest">EYEFIND</span>
              <span className="font-rajdhani text-[0.6rem] text-text-muted-vice tracking-widest">WHIZ WIRELESS</span>
            </div>
            <p className="font-dm text-xs text-text-secondary leading-relaxed">
              {t('inline.socialMediaGameplay')}
            </p>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-12 px-4">
          <h2 className="font-bebas text-2xl text-text-primary text-center mb-4">{t('gameplay.radio')}</h2>
          <p className="font-rajdhani text-[0.55rem] text-neon-orange text-center tracking-widest mb-6">{t('gameplay.speculative')}</p>
          <div className="max-w-3xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { call: 'VCPR', genre: 'Talk / Satire' },
              { call: 'WAVE 103', genre: '80s Synth' },
              { call: 'RADIO LEONIDA', genre: 'Country' },
              { call: 'FEVER FM', genre: 'Reggaeton' },
              { call: 'FLASH 95.6', genre: 'Hip-Hop' },
              { call: 'OCEAN DRIVE', genre: 'Electronic' },
            ].map(r => (
              <div key={r.call} className="bg-[hsl(213,33%,13%)] rounded-lg p-3 border border-neon-orange/10">
                <h3 className="font-bebas text-sm text-text-primary">{r.call}</h3>
                <p className="font-rajdhani text-[0.55rem] text-text-muted-vice">{r.genre}</p>
                <span className="font-rajdhani text-[0.45rem] px-1.5 py-0.5 rounded bg-neon-orange/10 text-neon-orange mt-1 inline-block tracking-widest">
                  {t('lore.speculative')}
                </span>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <section className="py-6 px-4 text-center border-t border-neon-pink/10">
        <p className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest">{t('footer.disclaimer')}</p>
      </section>
    </div>
  );
};

export default GameplayPage;
