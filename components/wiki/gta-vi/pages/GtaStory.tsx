'use client';

import { useGtaI18n } from '@/lib/data/gta-vi/i18n';
import RevealOnScroll from '@/components/wiki/shared/RevealOnScroll';

const StoryPage = ({ locale }: { locale: string }) => {
  const { t } = useGtaI18n(locale);

  const chapters = [
    { num: '0', title: t('inline.stateOfLeonida'), color: 'neon-cyan', quote: t('inline.darkestSide') },
    { num: '1', title: 'LUCIA', color: 'neon-pink', quote: t('inline.penitentiary') },
    { num: '2', title: 'JASON', color: 'neon-cyan', quote: t('inline.theKeys') },
    { num: '3', title: t('inline.scoreGoneWrong'), color: 'neon-gold', quote: t('inline.scoreQuote') },
    { num: '4', title: t('inline.leonidaConspiracy'), color: 'destructive', quote: t('inline.conspiracyQuote') },
  ];

  return (
    <div className="min-h-screen pt-16 pb-10">
      <section className="flex items-center justify-center h-[30vh] relative">
        <h1 className="relative font-bebas text-[clamp(2rem,8vw,5rem)] text-text-primary tracking-wider">
          VICE CITY, USA.
        </h1>
      </section>

      <RevealOnScroll>
        <section className="py-12 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-bebas text-3xl sm:text-5xl text-text-primary mb-6">{t('story.title')}</h2>
            <p className="font-barlow font-light text-sm italic text-text-secondary leading-relaxed mb-3">
              {t('synopsis.text')}
            </p>
            <p className="font-rajdhani text-[0.55rem] text-text-muted-vice">{t('synopsis.credit')}</p>
          </div>
        </section>
      </RevealOnScroll>

      <section className="py-10 px-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {chapters.map((ch, i) => (
            <RevealOnScroll key={i}>
              <div className={`bg-bg-card rounded-xl p-5 border border-${ch.color}/10 relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-0.5 h-full bg-${ch.color}`} />
                <span className={`font-rajdhani text-[0.5rem] text-${ch.color} tracking-widest`}>
                  {t('inline.chapter')} {ch.num}
                </span>
                <h3 className={`font-bebas text-xl sm:text-2xl text-${ch.color} mt-1`}>{ch.title}</h3>
                <p className="font-barlow font-light italic text-xs text-text-secondary mt-2">{ch.quote}</p>
              </div>
            </RevealOnScroll>
          ))}

          <RevealOnScroll>
            <div className="bg-bg-card rounded-xl p-5 border border-dashed border-text-muted-vice/20 relative overflow-hidden">
              <div className="blur-sm">
                <span className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest">
                  {t('inline.chapter')} ???
                </span>
                <h3 className="font-bebas text-xl text-text-muted-vice mt-1">[{t('inline.notRevealed')}]</h3>
              </div>
              <p className="font-rajdhani text-[0.55rem] text-text-muted-vice text-center mt-3 tracking-widest">
                {t('inline.availableAtRelease')}
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <RevealOnScroll>
        <section className="py-12 px-4">
          <h2 className="font-bebas text-2xl text-text-primary text-center mb-8">{t('story.network')}</h2>
          <div className="max-w-2xl mx-auto">
            <svg viewBox="0 0 600 350" className="w-full">
              <line x1="300" y1="80" x2="300" y2="170" stroke="hsl(43,100%,50%)" strokeWidth="2" opacity="0.5"/>
              <line x1="300" y1="170" x2="140" y2="260" stroke="hsl(189,100%,50%)" strokeWidth="1" strokeDasharray="4,4" opacity="0.3"/>
              <line x1="300" y1="170" x2="90" y2="210" stroke="hsl(24,100%,55%)" strokeWidth="1" opacity="0.3"/>
              <line x1="440" y1="120" x2="480" y2="200" stroke="hsl(43,100%,50%)" strokeWidth="1" opacity="0.3"/>
              <line x1="480" y1="200" x2="500" y2="280" stroke="hsl(330,100%,56%)" strokeWidth="1" opacity="0.3"/>
              {[
                { x: 300, y: 65, label: 'LUCIA', color: '#FF1F8F' },
                { x: 300, y: 185, label: 'JASON', color: '#00E5FF' },
                { x: 140, y: 270, label: 'BRIAN', color: '#FF6B1A' },
                { x: 90, y: 200, label: 'CAL', color: '#FF6B1A' },
                { x: 440, y: 110, label: 'BOOBIE', color: '#8B5CF6' },
                { x: 480, y: 200, label: "DRE'QUAN", color: '#FFB800' },
                { x: 500, y: 290, label: 'DIMEZ', color: '#FF1F8F' },
                { x: 420, y: 290, label: 'RAUL', color: '#00E5FF' },
              ].map((n, i) => (
                <g key={i}>
                  <circle cx={n.x} cy={n.y} r="16" fill={n.color} opacity="0.1" stroke={n.color} strokeWidth="1"/>
                  <text x={n.x} y={n.y + 3} textAnchor="middle" fill={n.color} fontSize="8" fontFamily="'Bebas Neue'" letterSpacing="0.5">
                    {n.label}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </section>
      </RevealOnScroll>

      <section className="py-6 px-4 text-center border-t border-neon-pink/10">
        <p className="font-rajdhani text-[0.5rem] text-text-muted-vice tracking-widest">{t('footer.disclaimer')}</p>
      </section>
    </div>
  );
};

export default StoryPage;
