'use client';

import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

const LeonidaPage = ({ locale }: { locale: string }) => {
  const { t } = useGtaI18n(locale);

  const factions = [
    { name: t('inline.theDuo'), color: 'neon-gold',
      desc: t('inline.duoDesc'),
      members: 'Lucia Caminos + Jason Duval' },
    { name: t('inline.boobieEmpire'), color: 'neon-purple',
      desc: t('inline.boobieEmpireDesc'),
      members: 'Boobie, Dre\'Quan, Real Dimez' },
    { name: t('inline.keysNetwork'), color: 'neon-orange',
      desc: t('inline.drugSmuggling'),
      members: 'Brian, Jason, Cal' },
    { name: t('inline.raulCrew'), color: 'neon-cyan',
      desc: t('inline.heistCrew'),
      members: 'Raul + recruits' },
  ];

  const entities = [
    { name: 'ONLY RAW RECORDS', badge: t('lore.official'), badgeColor: 'bg-neon-green/20 text-neon-green',
      desc: 'Boobie Ike & Dre\'Quan Priest. Artists: Real Dimez' },
    { name: 'LEONIDA PENITENTIARY', badge: t('lore.official'), badgeColor: 'bg-neon-green/20 text-neon-green',
      desc: t('inline.luciasPrison') },
    { name: 'BRIAN\'S BOAT YARD', badge: t('lore.official'), badgeColor: 'bg-neon-green/20 text-neon-green',
      desc: t('inline.smugglingCover') },
  ];

  return (
    <div className="min-h-screen pt-16 pb-10">
      <section className="py-12 px-4 text-center border-b border-neon-cyan/10">
        <div className="max-w-2xl mx-auto">
          <div className="border-y border-text-muted-vice/15 py-3 mb-3">
            <h1 className="font-bebas text-3xl sm:text-5xl text-text-primary tracking-wider">{t('lore.title')}</h1>
          </div>
          <p className="font-rajdhani text-[0.55rem] text-text-muted-vice tracking-widest">{t('lore.subtitle')}</p>
        </div>
      </section>

      <RevealOnScroll>
        <section className="py-6 px-4">
          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-neon-green/20 text-neon-green tracking-widest">{t('lore.official')}</span>
              <span className="font-dm text-[0.6rem] text-text-muted-vice">rockstargames.com</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-neon-yellow/20 text-neon-yellow tracking-widest">{t('lore.trailer')}</span>
              <span className="font-dm text-[0.6rem] text-text-muted-vice">Trailer 1 & 2</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-rajdhani text-[0.5rem] px-2 py-0.5 rounded bg-destructive/20 text-destructive tracking-widest">{t('lore.speculative')}</span>
              <span className="font-dm text-[0.6rem] text-text-muted-vice">{t('inline.fanTheories')}</span>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-10 px-4">
          <h2 className="font-bebas text-2xl text-text-primary text-center mb-6">{t('lore.entities')}</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {entities.map(e => (
              <div key={e.name} className="bg-bg-card rounded-lg p-4 border border-neon-cyan/5">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bebas text-lg text-text-primary">{e.name}</h3>
                  <span className={`font-rajdhani text-[0.45rem] px-1.5 py-0.5 rounded ${e.badgeColor} tracking-widest`}>{e.badge}</span>
                </div>
                <p className="font-dm text-xs text-text-secondary">{e.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section className="py-10 px-4">
          <h2 className="font-bebas text-2xl text-text-primary text-center mb-6">{t('lore.factions')}</h2>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-3">
            {factions.map(f => (
              <div key={f.name} className={`bg-bg-card rounded-lg p-4 border border-${f.color}/10`}>
                <h3 className={`font-bebas text-lg text-${f.color} mb-1`}>{f.name}</h3>
                <p className="font-dm text-[0.65rem] text-text-secondary mb-1">{f.desc}</p>
                <p className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-wider">{f.members}</p>
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

export default LeonidaPage;
