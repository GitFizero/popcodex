// @ts-nocheck
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';
import { useState, useEffect } from 'react';
import type { Lang } from '@/crimson-desert-wiki/context/I18nContext';

const triviaAll: Record<Lang, string[]> = {
  fr: [
    "Crimson Desert a été annoncé à l'origine comme un préquel de Black Desert Online avant de devenir un jeu autonome.",
    "Le jeu est en développement depuis plus de 7 ans chez Pearl Abyss.",
    "Les joueurs peuvent changer d'arme en plein combat sans aucune interaction avec un menu.",
    "Le monde ouvert propose une météo dynamique qui affecte le combat et l'exploration.",
  ],
  en: [
    "Crimson Desert was originally announced as a prequel to Black Desert Online before becoming its own standalone game.",
    "The game has been in development for over 7 years at Pearl Abyss.",
    "Players can switch between weapons mid-combat without any menu interaction.",
    "The open world features dynamic weather that affects combat and exploration.",
  ],
  es: [
    "Crimson Desert fue anunciado originalmente como precuela de Black Desert Online antes de convertirse en un juego independiente.",
    "El juego lleva más de 7 años en desarrollo en Pearl Abyss.",
    "Los jugadores pueden cambiar de arma en pleno combate sin interactuar con ningún menú.",
    "El mundo abierto cuenta con clima dinámico que afecta al combate y la exploración.",
  ],
  it: [
    "Crimson Desert è stato annunciato originariamente come prequel di Black Desert Online prima di diventare un gioco autonomo.",
    "Il gioco è in sviluppo da oltre 7 anni presso Pearl Abyss.",
    "I giocatori possono cambiare arma durante il combattimento senza alcuna interazione con i menu.",
    "Il mondo aperto presenta un meteo dinamico che influenza il combattimento e l'esplorazione.",
  ],
  ko: [
    "크림슨 디저트는 원래 검은사막 온라인의 프리퀄로 발표되었다가 독립 게임으로 변경되었습니다.",
    "이 게임은 펄어비스에서 7년 이상 개발 중입니다.",
    "플레이어는 메뉴 조작 없이 전투 중에 무기를 교체할 수 있습니다.",
    "오픈 월드에는 전투와 탐험에 영향을 미치는 동적 날씨 시스템이 있습니다.",
  ],
  pt: [
    "Crimson Desert foi originalmente anunciado como uma prequela de Black Desert Online antes de se tornar um jogo independente.",
    "O jogo está em desenvolvimento há mais de 7 anos na Pearl Abyss.",
    "Os jogadores podem trocar de arma durante o combate sem nenhuma interação com menus.",
    "O mundo aberto possui clima dinâmico que afeta o combate e a exploração.",
  ],
};

const creditRoles: Record<Lang, { role: string; name: string }[]> = {
  fr: [
    { role: 'Éditeur principal', name: 'Contributeurs communautaires' },
    { role: 'Recherche Lore', name: 'The Greymane Scholars' },
    { role: 'Design & Développement', name: 'Fan Dev Team' },
    { role: 'Vérification du contenu', name: 'Pywel Cartographers Guild' },
    { role: 'Images du jeu', name: '© Pearl Abyss — Fan Kit officiel' },
  ],
  en: [
    { role: 'Lead Editor', name: 'Community Contributors' },
    { role: 'Lore Research', name: 'The Greymane Scholars' },
    { role: 'Design & Development', name: 'Fan Dev Team' },
    { role: 'Content Verification', name: 'Pywel Cartographers Guild' },
    { role: 'Game Images', name: '© Pearl Abyss — Official Fan Kit' },
  ],
  es: [
    { role: 'Editor principal', name: 'Contribuidores de la comunidad' },
    { role: 'Investigación del Lore', name: 'The Greymane Scholars' },
    { role: 'Diseño y Desarrollo', name: 'Fan Dev Team' },
    { role: 'Verificación del contenido', name: 'Pywel Cartographers Guild' },
    { role: 'Imágenes del juego', name: '© Pearl Abyss — Fan Kit oficial' },
  ],
  it: [
    { role: 'Editore principale', name: 'Contributori della comunità' },
    { role: 'Ricerca Lore', name: 'The Greymane Scholars' },
    { role: 'Design e Sviluppo', name: 'Fan Dev Team' },
    { role: 'Verifica dei contenuti', name: 'Pywel Cartographers Guild' },
    { role: 'Immagini del gioco', name: '© Pearl Abyss — Fan Kit ufficiale' },
  ],
  ko: [
    { role: '수석 편집자', name: '커뮤니티 기여자' },
    { role: '세계관 연구', name: 'The Greymane Scholars' },
    { role: '디자인 & 개발', name: 'Fan Dev Team' },
    { role: '콘텐츠 검증', name: 'Pywel Cartographers Guild' },
    { role: '게임 이미지', name: '© Pearl Abyss — 공식 팬 키트' },
  ],
  pt: [
    { role: 'Editor principal', name: 'Contribuidores da comunidade' },
    { role: 'Pesquisa de Lore', name: 'The Greymane Scholars' },
    { role: 'Design e Desenvolvimento', name: 'Fan Dev Team' },
    { role: 'Verificação de conteúdo', name: 'Pywel Cartographers Guild' },
    { role: 'Imagens do jogo', name: '© Pearl Abyss — Kit de Fã oficial' },
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
            <div className="h-4 rounded-t-lg" style={{ background: 'linear-gradient(to bottom, hsl(var(--bg-raised)), hsl(var(--bg-card)))', boxShadow: '0 2px 10px rgba(0,0,0,0.3)' }} />
            <div className="bg-card-bg border-x-2 px-6 sm:px-10 py-8" style={{ borderColor: 'hsl(var(--gold-mid) / 0.3)' }}>
              <h2 className="font-lore italic text-xl text-gold-bright text-center mb-6">{t('about.disclaimer.title')}</h2>
              <p className="font-lore italic text-base text-text-secondary leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: t('about.disclaimer.text') }} />
              <p className="font-lore italic text-sm text-text-muted-custom mt-4 text-center">{t('about.disclaimer.sub')}</p>
            </div>
            <div className="h-4 rounded-b-lg" style={{ background: 'linear-gradient(to top, hsl(var(--bg-raised)), hsl(var(--bg-card)))', boxShadow: '0 -2px 10px rgba(0,0,0,0.3)' }} />
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
                <a href="https://crimsondesert.pearlabyss.com/" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">{t('footer.official_site')}</a>
                <a href="https://www.pearlabyss.com/en-US" target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">Pearl Abyss ↗</a>
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
          <div className="bg-gold-dark/10 border border-gold-mid/20 rounded-lg p-6 text-center">
            <h3 className="font-heading text-sm tracking-[0.15em] text-gold-mid mb-4">{t('about.trivia')}</h3>
            <p className="font-body text-sm text-text-secondary leading-relaxed min-h-[3rem]" key={triviaIdx} style={{ animation: 'fade-in-up 0.4s ease-out' }}>{trivia[triviaIdx]}</p>
            <div className="flex justify-center gap-2 mt-4">
              {trivia.map((_, i) => (
                <button key={i} onClick={() => setTriviaIdx(i)} className={`rounded-full transition-all duration-200 ${i === triviaIdx ? 'w-4 h-2 bg-gold-mid' : 'w-2 h-2 bg-smoke-mid hover:bg-smoke-light'}`} aria-label={`Trivia ${i + 1}`} />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default AboutPage;
