// @ts-nocheck
import { useState, useCallback } from 'react';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

// Environment & Landscapes
const cathedral = '/crimson-desert/cathedral.jpg';
const cliffFortress = '/crimson-desert/cliff-fortress.jpg';
const delesyieCastle = '/crimson-desert/delesyie-castle.jpg';
const demenissTower = '/crimson-desert/demeniss-tower.jpg';
const envCanyon = '/crimson-desert/env-canyon.jpg';
const envTemple = '/crimson-desert/env-temple.jpg';
const forestBridge = '/crimson-desert/forest-bridge.jpg';
const hernandCity = '/crimson-desert/hernand-city.jpg';
const hernandSquare = '/crimson-desert/hernand-square.jpg';
const hernandStreet = '/crimson-desert/hernand-street.jpg';
const kliffForest = '/crimson-desert/kliff-forest.jpg';
const lakeVillage = '/crimson-desert/lake-village.jpg';
const mountainCastle = '/crimson-desert/mountain-castle.jpg';
const mountainCity = '/crimson-desert/mountain-city.jpg';
const pailuneHomeland = '/crimson-desert/pailune-homeland.jpg';
const pailuneRuins = '/crimson-desert/pailune-ruins.jpg';
const pywelGardens = '/crimson-desert/pywel-gardens.jpg';
const pywelPanorama = '/crimson-desert/pywel-panorama.jpg';
const villageChurch = '/crimson-desert/village-church.jpg';

// Characters
const charDamiane = '/crimson-desert/char-damiane.jpg';
const charGoblinKing = '/crimson-desert/char-goblin-king.jpg';
const charHexeMarie = '/crimson-desert/char-hexe-marie.jpg';
const charKliff = '/crimson-desert/char-kliff.jpg';
const charOongka = '/crimson-desert/char-oongka.jpg';
const charNpcBear = '/crimson-desert/char-npc-bear.jpg';
const charNpcHorned = '/crimson-desert/char-npc-horned.jpg';
const charNpcMerchant = '/crimson-desert/char-npc-merchant.jpg';
const charactersGroup = '/crimson-desert/characters-group.jpg';
const kliffStance = '/crimson-desert/kliff-stance.jpg';

// Combat & Enemies
const combatAction = '/crimson-desert/combat-action.jpg';
const combatBlock = '/crimson-desert/combat-block.jpg';
const combatGoblin = '/crimson-desert/combat-goblin.jpg';
const enemyReedDevil = '/crimson-desert/enemy-reed-devil.jpg';

// Bosses
const bossStaglord = '/crimson-desert/boss-staglord.jpg';
const bossStoneback = '/crimson-desert/boss-stoneback-crab.jpg';
const bossWhiteHorn = '/crimson-desert/boss-white-horn.jpg';

// Official images
const crimsonDesert1 = '/crimson-desert/kliff-portrait-side.jpg';
const crimsonDesert2 = '/crimson-desert/kliff-portrait-front.jpg';

import type { Lang } from '@/crimson-desert-wiki/context/I18nContext';

type Category = 'ALL' | 'LANDSCAPES' | 'CHARACTERS' | 'COMBAT' | 'BOSSES';

interface GalleryImage {
  src: string;
  alt: string;
  category: Exclude<Category, 'ALL'>;
  span?: 'wide' | 'tall';
}

const images: GalleryImage[] = [
  { src: crimsonDesert1, alt: 'Kliff Macduff portrait officiel Crimson Desert — © Pearl Abyss', category: 'CHARACTERS', span: 'wide' },
  { src: cathedral, alt: 'Cathédrale gothique monde de Pywel Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES', span: 'tall' },
  { src: cliffFortress, alt: 'Forteresse sur falaise Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: hernandCity, alt: 'Ville de Hernand Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES', span: 'wide' },
  { src: charDamiane, alt: 'Damiane personnage Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: combatAction, alt: 'Scène de combat action Crimson Desert — © Pearl Abyss', category: 'COMBAT', span: 'wide' },
  { src: delesyieCastle, alt: 'Château de Délésyie Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: charOongka, alt: 'Oongka personnage Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: envCanyon, alt: 'Canyon environnement Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES', span: 'wide' },
  { src: bossStaglord, alt: 'Boss Staglord Crimson Desert — © Pearl Abyss', category: 'BOSSES', span: 'tall' },
  { src: demenissTower, alt: 'Tour de Demeniss Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: charKliff, alt: 'Kliff Macduff protagoniste Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: forestBridge, alt: 'Pont dans la forêt monde de Pywel — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: combatBlock, alt: 'Parade au combat Crimson Desert — © Pearl Abyss', category: 'COMBAT' },
  { src: hernandSquare, alt: 'Place de Hernand Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: charGoblinKing, alt: 'Roi Gobelin ennemi Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: envTemple, alt: 'Temple ancien monde de Pywel — © Pearl Abyss', category: 'LANDSCAPES', span: 'tall' },
  { src: bossStoneback, alt: 'Boss Crabe Stoneback Crimson Desert — © Pearl Abyss', category: 'BOSSES', span: 'wide' },
  { src: kliffForest, alt: 'Kliff dans la forêt Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: charHexeMarie, alt: 'Hexe Marie personnage Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: lakeVillage, alt: 'Village au bord du lac Pywel — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: combatGoblin, alt: 'Combat contre gobelin Crimson Desert — © Pearl Abyss', category: 'COMBAT' },
  { src: mountainCastle, alt: 'Château de montagne Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: charNpcBear, alt: 'PNJ Ours guerrier Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: mountainCity, alt: 'Cité de montagne Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES', span: 'wide' },
  { src: bossWhiteHorn, alt: 'Boss White Horn Crimson Desert — © Pearl Abyss', category: 'BOSSES' },
  { src: pailuneHomeland, alt: 'Patrie de Pailune Greymanes Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: enemyReedDevil, alt: 'Ennemi Reed Devil Crimson Desert — © Pearl Abyss', category: 'COMBAT', span: 'tall' },
  { src: pailuneRuins, alt: 'Ruines de Pailune Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: charNpcHorned, alt: 'PNJ cornu Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: pywelGardens, alt: 'Jardins de Pywel Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: charNpcMerchant, alt: 'Marchand PNJ Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: pywelPanorama, alt: 'Panorama du continent de Pywel Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES', span: 'wide' },
  { src: charactersGroup, alt: 'Groupe de personnages Greymanes Crimson Desert — © Pearl Abyss', category: 'CHARACTERS', span: 'wide' },
  { src: villageChurch, alt: 'Église de village Crimson Desert — © Pearl Abyss', category: 'LANDSCAPES' },
  { src: kliffStance, alt: 'Kliff Macduff posture de combat Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
  { src: crimsonDesert2, alt: 'Kliff Macduff portrait face Crimson Desert — © Pearl Abyss', category: 'CHARACTERS' },
];

const categoryLabels: Record<Category, Record<Lang, string>> = {
  ALL: { fr: 'Tout', en: 'All', es: 'Todo', it: 'Tutto', ko: '전체', pt: 'Todos', de: 'Alle' },
  LANDSCAPES: { fr: 'Paysages', en: 'Landscapes', es: 'Paisajes', it: 'Paesaggi', ko: '풍경', pt: 'Paisagens', de: 'Landschaften' },
  CHARACTERS: { fr: 'Personnages', en: 'Characters', es: 'Personajes', it: 'Personaggi', ko: '캐릭터', pt: 'Personagens', de: 'Charaktere' },
  COMBAT: { fr: 'Combat', en: 'Combat', es: 'Combate', it: 'Combattimento', ko: '전투', pt: 'Combate', de: 'Kampf' },
  BOSSES: { fr: 'Boss', en: 'Bosses', es: 'Jefes', it: 'Boss', ko: '보스', pt: 'Chefes', de: 'Bosse' },
};

const galleryTitle: Record<Lang, string> = { fr: 'Galerie', en: 'Gallery', es: 'Galería', it: 'Galleria', ko: '갤러리', pt: 'Galeria', de: 'Galerie' };
const galleryH1: Record<Lang, string> = { fr: 'Galerie — Crimson Desert', en: 'Gallery — Crimson Desert', es: 'Galería — Crimson Desert', it: 'Galleria — Crimson Desert', ko: '갤러리 — Crimson Desert', pt: 'Galeria — Crimson Desert', de: 'Galerie — Crimson Desert' };
const galleryDisclaimer: Record<Lang, string> = {
  fr: 'Toutes les images sont la propriété de Pearl Abyss. Ce site est un wiki fan non-officiel.',
  en: 'All images are property of Pearl Abyss. This is an unofficial fan wiki.',
  es: 'Todas las imágenes son propiedad de Pearl Abyss. Este es un wiki fan no oficial.',
  it: 'Tutte le immagini sono proprietà di Pearl Abyss. Questo è un wiki fan non ufficiale.',
  ko: '모든 이미지는 Pearl Abyss의 자산입니다. 이것은 비공식 팬 위키입니다.',
  pt: 'Todas as imagens são propriedade da Pearl Abyss. Este é um wiki de fãs não oficial.',
  de: 'Alle Bilder sind Eigentum von Pearl Abyss. Dies ist ein inoffizielles Fan-Wiki.',
};
const fanUse: Record<Lang, string> = { fr: 'Utilisation fan non-commerciale', en: 'Non-commercial fan use', es: 'Uso fan no comercial', it: 'Uso fan non commerciale', ko: '비상업적 팬 사용', pt: 'Uso de fã não comercial', de: 'Nicht-kommerzielle Fan-Nutzung' };
const closeLabel: Record<Lang, string> = { fr: 'Fermer', en: 'Close', es: 'Cerrar', it: 'Chiudi', ko: '닫기', pt: 'Fechar', de: 'Schließen' };

const Gallery = () => {
  const { lang, t } = useI18n();
  const [filter, setFilter] = useState<Category>('ALL');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === 'ALL' ? images : images.filter(img => img.category === filter);

  const openLightbox = useCallback((i: number) => setLightbox(i), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-24 pb-16 px-4">
      <SEOHead
        title={seo.gallery.title[lang]}
        description={seo.gallery.desc[lang]}
        path="/gallery"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.gallery[lang], path: '/gallery' },
        ]}
      />

      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <GoldDivider variant="section" title={galleryTitle[lang]} />
          <h1 className="font-display text-3xl sm:text-4xl text-gold-bright text-center mt-6">{galleryH1[lang]}</h1>
          <p className="font-body text-sm text-text-secondary text-center mt-3 max-w-2xl mx-auto">{galleryDisclaimer[lang]}</p>
        </RevealOnScroll>

        {/* Filters */}
        <RevealOnScroll>
          <div className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
            {(Object.keys(categoryLabels) as Category[]).map(cat => (
              <button key={cat} onClick={() => setFilter(cat)}
                className={`font-ui text-xs tracking-wider px-4 py-2 rounded-full border transition-all duration-300 ${
                  filter === cat ? 'bg-crimson-deep border-crimson-bright text-gold-bright' : 'border-border text-text-secondary hover:border-gold-mid hover:text-gold-mid'}`}>
                {categoryLabels[cat][lang]}
                {cat !== 'ALL' && <span className="ml-1.5 text-text-muted-custom">({images.filter(img => img.category === cat).length})</span>}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-3 [column-fill:_balance]">
          {filtered.map((img, i) => (
            <RevealOnScroll key={img.src} stagger={Math.min(i * 50, 400)}>
              <div className="mb-3 break-inside-avoid group cursor-pointer" onClick={() => openLightbox(i)}>
                <div className="relative rounded-lg overflow-hidden border border-border hover:border-gold-mid/50 transition-all duration-300" style={{ boxShadow: 'var(--shadow-card)' }}>
                  <img src={img.src} alt={img.alt} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async" />
                  <span className="absolute right-1.5 top-1.5 font-ui text-[0.4rem] tracking-wider text-sand-pale/50 bg-void/40 px-1 py-0.5 rounded pointer-events-none select-none">© Pearl Abyss</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className={`inline-block font-ui text-[0.6rem] tracking-wider px-2 py-0.5 rounded mb-1 ${
                      img.category === 'LANDSCAPES' ? 'bg-gold-dark/60' :
                      img.category === 'CHARACTERS' ? 'bg-crimson-core/60' :
                      img.category === 'COMBAT' ? 'bg-smoke-mid/80' : 'bg-crimson-deep/70'
                    } text-sand-pale`}>
                      {categoryLabels[img.category][lang]}
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <p className="font-ui text-[0.65rem] text-text-muted-custom text-center mt-12 tracking-wider">
          {filtered.length} images • © Pearl Abyss — {fanUse[lang]}
        </p>

        {/* Community Screenshots Section */}
        <RevealOnScroll>
          <div className="mt-20 mb-8">
            <GoldDivider variant="section" title={t('gallery.community_title')} />
            <div className="mt-8 p-8 rounded-lg border border-border bg-surface/30 text-center" style={{ boxShadow: 'var(--shadow-card)' }}>
              <span className="text-5xl mb-4 block">📸</span>
              <h2 className="font-heading text-lg text-gold-bright">{t('gallery.community_coming')}</h2>
              <p className="font-body text-sm text-text-secondary mt-3 max-w-lg mx-auto leading-relaxed">{t('gallery.community_desc')}</p>
              <div className="mt-6 inline-block font-ui text-[0.6rem] tracking-wider text-text-muted-custom px-4 py-2 border border-border/50 rounded-full">
                {t('gallery.community_features')}
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-[9999] bg-bg-void/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 font-ui text-2xl text-gold-mid hover:text-gold-bright transition-colors" onClick={closeLightbox} aria-label={closeLabel[lang]}>✕</button>
          {lightbox > 0 && (
            <button className="absolute left-4 top-1/2 -translate-y-1/2 font-ui text-3xl text-gold-mid hover:text-gold-bright transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox - 1); }} aria-label="Previous">‹</button>
          )}
          {lightbox < filtered.length - 1 && (
            <button className="absolute right-4 top-1/2 -translate-y-1/2 font-ui text-3xl text-gold-mid hover:text-gold-bright transition-colors"
              onClick={(e) => { e.stopPropagation(); setLightbox(lightbox + 1); }} aria-label="Next">›</button>
          )}
          <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} className="max-w-full max-h-[90vh] object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </main>
  );
};

export default Gallery;
