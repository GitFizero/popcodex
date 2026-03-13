'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import { locations } from '@/lib/data/gta-vi/locations';
import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

const ViceCityPage = ({ locale }: { locale: string }) => {
  const [activeLocation, setActiveLocation] = useState(locations[0].id);
  const active = locations.find(l => l.id === activeLocation) || locations[0];
  const { t, lang } = useGtaI18n(locale);

  return (
    <div className="min-h-screen pt-16 pb-10">
      {/* Hero */}
      <section className="relative py-14 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220,67%,2%)] via-[#0a0520] to-[hsl(220,67%,2%)]" />
        <div className="relative z-10">
          <h1 className="font-bebas text-3xl sm:text-5xl text-text-primary mb-1">{t('locations.title')}</h1>
          <p className="font-barlow font-light italic text-xs text-text-secondary tracking-wider">{t('locations.subtitle')}</p>
        </div>
      </section>

      {/* Map Coming Soon */}
      <RevealOnScroll>
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-[hsl(213,33%,13%)] rounded-xl border border-dashed border-neon-cyan/20 overflow-hidden p-10 sm:p-16 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/3 via-transparent to-neon-pink/3" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-7 h-7 text-neon-cyan" />
                </div>
                <h2 className="font-bebas text-2xl sm:text-3xl neon-cyan-text mb-3">{t('inline.mapComingSoon')}</h2>
                <p className="font-dm text-xs sm:text-sm text-text-secondary leading-relaxed max-w-lg mx-auto">
                  {t('inline.mapComingSoonDesc')}
                </p>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* Location detail */}
      <RevealOnScroll>
        <section className="py-6 px-4">
          <div className="max-w-2xl mx-auto bg-[hsl(213,33%,13%)] rounded-xl p-5 border border-neon-cyan/10">
            <h3 className={`font-bebas text-2xl ${active.neonClass} mb-2`}>{active.name.toUpperCase()}</h3>
            <p className="font-dm text-xs text-text-secondary mb-4">{active.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-[hsl(214,36%,10%)] rounded-lg p-3">
                <span className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest">{t('locations.characters')}</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {active.characters.map(c => (
                    <span key={c} className="font-rajdhani text-[0.6rem] px-2 py-0.5 rounded bg-[hsl(213,33%,13%)] text-text-secondary">{c}</span>
                  ))}
                </div>
              </div>
              <div className="bg-[hsl(214,36%,10%)] rounded-lg p-3">
                <span className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest">{t('locations.features')}</span>
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {active.features.map(f => (
                    <span key={f} className="font-rajdhani text-[0.6rem] px-2 py-0.5 rounded bg-[hsl(213,33%,13%)] text-text-secondary">{f}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      {/* All locations grid */}
      <RevealOnScroll>
        <section className="py-10 px-4">
          <h2 className="font-bebas text-xl text-text-primary text-center mb-6">{t('locations.all')}</h2>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {locations.map(loc => (
              <button
                key={loc.id}
                onClick={() => { setActiveLocation(loc.id); window.scrollTo({ top: 300, behavior: 'smooth' }); }}
                className={`text-left bg-[hsl(213,33%,13%)] rounded-lg p-4 border transition-all hover:-translate-y-1 ${
                  activeLocation === loc.id ? `border-${loc.color}/30` : 'border-neon-cyan/5 hover:border-neon-cyan/15'
                }`}
              >
                <h3 className={`font-bebas text-lg ${loc.neonClass}`}>{loc.name}</h3>
                <p className="font-dm text-[0.6rem] text-text-muted-vice mt-1 line-clamp-2">{loc.description}</p>
              </button>
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

export default ViceCityPage;
