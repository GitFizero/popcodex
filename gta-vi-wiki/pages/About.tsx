// @ts-nocheck
import { useI18n } from '@/gta-vi-wiki/context/I18nContext';
import RevealOnScroll from '@/gta-vi-wiki/components/RevealOnScroll';
import NeonDivider from '@/gta-vi-wiki/components/NeonDivider';
import SEOHead from '@/gta-vi-wiki/components/SEOHead';
import { seo } from '@/gta-vi-wiki/lib/seo';

const About = () => {
  const { t, lang } = useI18n();

  const trivia = {
    fr: [
      'GTA VI sera le premier jeu GTA avec une protagoniste feminine jouable.',
      'Vice City est inspiree de Miami, Floride.',
      "Le developpement de GTA VI a commence peu apres la sortie de GTA V en 2013.",
      "Leonida compte 6 regions distinctes a explorer.",
    ],
    en: [
      'GTA VI will be the first GTA game with a playable female protagonist.',
      'Vice City is inspired by Miami, Florida.',
      'GTA VI development began shortly after GTA V launched in 2013.',
      'Leonida has 6 distinct regions to explore.',
    ],
    es: [
      'GTA VI sera el primer GTA con una protagonista femenina jugable.',
      'Vice City esta inspirada en Miami, Florida.',
      'El desarrollo de GTA VI comenzo poco despues del lanzamiento de GTA V.',
      'Leonida tiene 6 regiones distintas para explorar.',
    ],
  };

  return (
    <>
      <SEOHead
        title={seo.about.title[lang] || seo.about.title.en}
        description={seo.about.desc[lang] || seo.about.desc.en}
        path="/about"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.about[lang], path: '/about' },
        ]}
      />

      <main id="main-content" className="min-h-screen pt-20 px-4" style={{ background: '#0a000f' }}>
        <div className="max-w-3xl mx-auto pb-20">
          <RevealOnScroll>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-center mb-2" style={{ color: '#FF1493', textShadow: '0 0 30px rgba(255, 20, 147, 0.4)' }}>
              {t('about.title')}
            </h1>
          </RevealOnScroll>

          <NeonDivider variant="short" className="my-8" />

          {/* Disclaimer */}
          <RevealOnScroll>
            <div className="p-6 rounded-lg mb-8" style={{ background: 'rgba(255, 20, 147, 0.05)', border: '1px solid rgba(255, 20, 147, 0.2)' }}>
              <h2 className="text-sm font-bold tracking-wider mb-3" style={{ color: '#FF1493' }}>{t('about.disclaimer.title')}</h2>
              <p className="text-sm leading-relaxed mb-2" style={{ color: 'rgba(255,255,255,0.7)' }} dangerouslySetInnerHTML={{ __html: t('about.disclaimer.text') }} />
              <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>{t('about.disclaimer.sub')}</p>
            </div>
          </RevealOnScroll>

          {/* Mission */}
          <RevealOnScroll>
            <div className="p-6 rounded-lg mb-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
              <h2 className="text-sm font-bold tracking-wider mb-3" style={{ color: '#00FFFF' }}>{t('about.mission.title')}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('about.mission.text')}</p>
            </div>
          </RevealOnScroll>

          {/* Contribute */}
          <RevealOnScroll>
            <div className="p-6 rounded-lg mb-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
              <h2 className="text-sm font-bold tracking-wider mb-3" style={{ color: '#00FFFF' }}>{t('about.contribute.title')}</h2>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>{t('about.contribute.text')}</p>
            </div>
          </RevealOnScroll>

          {/* Official Links */}
          <RevealOnScroll>
            <div className="p-6 rounded-lg mb-8" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
              <h2 className="text-sm font-bold tracking-wider mb-3" style={{ color: '#00FFFF' }}>{t('about.links.title')}</h2>
              <div className="space-y-2">
                <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer" className="block text-sm transition-colors" style={{ color: '#FF1493' }}>Rockstar Games - GTA VI &rarr;</a>
                <a href="https://www.rockstargames.com" target="_blank" rel="noopener noreferrer" className="block text-sm transition-colors" style={{ color: '#FF1493' }}>Rockstar Games &rarr;</a>
              </div>
            </div>
          </RevealOnScroll>

          {/* Trivia */}
          <NeonDivider variant="section" title={t('about.trivia')} />
          <RevealOnScroll>
            <div className="py-8 space-y-4">
              {(trivia[lang] || trivia.en).map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: '#FF1493', boxShadow: '0 0 6px #FF1493' }} />
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{item}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          {/* Contact */}
          <div id="contact" className="pt-8">
            <RevealOnScroll>
              <div className="p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255, 20, 147, 0.08)' }}>
                <h2 className="text-sm font-bold tracking-wider mb-3" style={{ color: '#00FFFF' }}>{t('footer.contact')}</h2>
                <p className="text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>contact@gtaviwiki.com</p>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
