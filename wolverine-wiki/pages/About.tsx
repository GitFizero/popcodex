// @ts-nocheck
import { useI18n } from '@/wolverine-wiki/context/I18nContext';
import RevealOnScroll from '@/wolverine-wiki/components/RevealOnScroll';
import GoldDivider from '@/wolverine-wiki/components/GoldDivider';
import SEOHead from '@/wolverine-wiki/components/SEOHead';
import { seo } from '@/wolverine-wiki/lib/seo';
import { useState, useEffect } from 'react';
import type { Lang } from '@/wolverine-wiki/context/I18nContext';

const triviaAll: Partial<Record<Lang, string[]>> & { fr: string[]; en: string[] } = {
  fr: [
    "Marvel's Wolverine a ete annonce en septembre 2021 par Insomniac Games.",
    "Le jeu utilise le meme moteur graphique que Marvel's Spider-Man 2.",
    "Logan a plus de 100 ans dans la chronologie Marvel.",
    "L'adamantium est le metal fictif le plus resistant de l'univers Marvel.",
  ],
  en: [
    "Marvel's Wolverine was announced in September 2021 by Insomniac Games.",
    "The game uses the same engine as Marvel's Spider-Man 2.",
    "Logan is over 100 years old in Marvel's timeline.",
    "Adamantium is the strongest fictional metal in the Marvel universe.",
  ],
};

const creditRoles: Partial<Record<Lang, { role: string; name: string }[]>> & { fr: { role: string; name: string }[]; en: { role: string; name: string }[] } = {
  fr: [
    { role: 'Editeur principal', name: 'Contributeurs communautaires' },
    { role: 'Recherche Lore', name: 'X-Men Scholars' },
    { role: 'Design & Developpement', name: 'Fan Dev Team' },
    { role: 'Images du jeu', name: '© Insomniac Games / Sony / Marvel' },
  ],
  en: [
    { role: 'Lead Editor', name: 'Community Contributors' },
    { role: 'Lore Research', name: 'X-Men Scholars' },
    { role: 'Design & Development', name: 'Fan Dev Team' },
    { role: 'Game Images', name: '© Insomniac Games / Sony / Marvel' },
  ],
};

const AboutPage = () => {
  const { t, lang } = useI18n();
  const [triviaIdx, setTriviaIdx] = useState(0);
  const trivia = triviaAll[lang];

  useEffect(() => {
    const interval = setInterval(() => setTriviaIdx(i => (i + 1) % trivia.length), 5000);
    return () => clearInterval(interval);
  }, [trivia.length]);

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.about.title[lang]}
        description={seo.about.desc[lang]}
        path="/about"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.about[lang], path: '/about' },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <RevealOnScroll><GoldDivider variant="section" title={t('about.title')} /></RevealOnScroll>
        <h1 className="sr-only">{seo.about.title[lang]}</h1>

        <RevealOnScroll className="mt-8">
          <div className="relative">
            <div className="h-4 rounded-t-lg" style={{ background: 'linear-gradient(to bottom, rgba(30,30,30,1), rgba(20,20,20,1))', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }} />
            <div className="bg-card-bg border-x-2 px-6 sm:px-10 py-8" style={{ borderColor: 'rgba(234,179,8,0.2)' }}>
              <h2 className="font-lore italic text-xl text-gold-bright text-center mb-6">{t('about.disclaimer.title')}</h2>
              <p className="font-lore italic text-base text-text-secondary leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: t('about.disclaimer.text') }} />
              <p className="font-lore italic text-sm text-text-muted-custom mt-4 text-center">{t('about.disclaimer.sub')}</p>
            </div>
            <div className="h-4 rounded-b-lg" style={{ background: 'linear-gradient(to top, rgba(30,30,30,1), rgba(20,20,20,1))', boxShadow: '0 -2px 10px rgba(0,0,0,0.3)' }} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg text-gold-bright mb-3">{t('about.mission.title')}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{t('about.mission.text')}</p>
            </div>
            <GoldDivider variant="short" />
            <div>
              <h3 className="font-heading text-lg text-gold-bright mb-3">{t('about.contribute.title')}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{t('about.contribute.text')}</p>
            </div>
            <GoldDivider variant="short" />
            <div>
              <h3 className="font-heading text-lg text-gold-bright mb-3">{t('about.credits.title')}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {creditRoles[lang].map(credit => (
                  <div key={credit.role} className="bg-raised/30 rounded-md p-3">
                    <div className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom">{credit.role}</div>
                    <div className="font-heading text-sm text-text-primary mt-1">{credit.name}</div>
                  </div>
                ))}
              </div>
            </div>
            <GoldDivider variant="short" />
            <div>
              <h3 className="font-heading text-lg text-gold-bright mb-3">{t('about.links.title')}</h3>
              <div className="flex flex-wrap gap-3">
                <a href="https://www.playstation.com/" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">{t('footer.official_site')}</a>
                <a href="https://insomniac.games/" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">Insomniac Games ↗</a>
              </div>
            </div>
            <GoldDivider variant="short" />
            <div id="contact">
              <h3 className="font-heading text-lg text-gold-bright mb-3">{t('about.contact.title')}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{t('about.contact.text')}</p>
              <a href="mailto:gaetan@batemark.com" className="inline-block mt-3 font-ui text-sm text-gold-mid hover:text-gold-bright transition-colors focus-gold">gaetan@batemark.com</a>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12">
          <div className="bg-yellow-900/10 border border-yellow-500/20 rounded-lg p-6 text-center">
            <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-4">{t('about.trivia')}</h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed min-h-[3rem]" key={triviaIdx} style={{ animation: 'fade-in-up 0.4s ease-out' }}>{trivia[triviaIdx]}</p>
            <div className="flex justify-center gap-2 mt-4">
              {trivia.map((_, i) => (
                <button key={i} onClick={() => setTriviaIdx(i)} className={`rounded-full transition-all duration-200 ${i === triviaIdx ? 'w-4 h-2 bg-yellow-500' : 'w-2 h-2 bg-gray-600 hover:bg-gray-500'}`} aria-label={`Trivia ${i + 1}`} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default AboutPage;
