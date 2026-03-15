export type FranchiseId = 'gta-vi' | 'fable' | 'wolverine' | 'crimson-desert';
export type MediaType = 'games' | 'films' | 'series';

export interface FranchiseCategory {
  slug: Record<string, string>;
  label: Record<string, string>;
}

export interface FranchiseTheme {
  accentColor: string;
  bgGradient: string;
  heroPattern?: string;
  /** CSS class applied to the universe wrapper — drives the entire visual override */
  cssClass: string;
  /** Font stack for display/headings inside this universe */
  fontDisplay: string;
  /** Font stack for body text inside this universe */
  fontBody: string;
  /** Secondary accent (for dual-tone universes) */
  accentSecondary?: string;
  /** Card hover effect class */
  cardEffect?: string;
  /** Special overlay effect (scanlines, vignette, noise…) */
  overlayEffect?: string;
}

export interface FranchiseConfig {
  id: FranchiseId;
  mediaType: MediaType;
  accentColor: string;
  theme: FranchiseTheme;
  releaseDate: string;
  developer: string;
  publisher: string;
  platforms: string[];
  name: Record<string, string>;
  description: Record<string, string>;
  categories: FranchiseCategory[];
}

export const franchises: Record<FranchiseId, FranchiseConfig> = {
  'gta-vi': {
    id: 'gta-vi',
    mediaType: 'games',
    accentColor: '#FF1493',
    theme: {
      accentColor: '#FF1493',
      accentSecondary: '#00FFFF',
      cssClass: 'universe-gta',
      fontDisplay: '"Bebas Neue", sans-serif',
      fontBody: '"DM Sans", sans-serif',
      cardEffect: 'card-neon',
      overlayEffect: 'overlay-scanlines',
      bgGradient: 'linear-gradient(180deg, hsl(220 67% 2%) 0%, hsl(216 56% 4%) 30%, hsl(214 40% 7%) 100%)',
      heroPattern: 'linear-gradient(hsl(189 100% 50% / 0.03) 1px, transparent 1px), linear-gradient(90deg, hsl(189 100% 50% / 0.03) 1px, transparent 1px)',
    },
    releaseDate: '2026-05-26',
    developer: 'Rockstar Games',
    publisher: 'Take-Two Interactive / Rockstar Games',
    platforms: ['PS5', 'Xbox Series X/S'],
    name: {
      fr: 'GTA VI', en: 'GTA VI', es: 'GTA VI', pt: 'GTA VI', it: 'GTA VI', ko: 'GTA VI',
    },
    description: {
      fr: "L'encyclopédie complète de Grand Theft Auto VI : personnages, lieux, véhicules et plus encore.",
      en: 'The complete encyclopedia of Grand Theft Auto VI: characters, locations, vehicles and more.',
      es: 'La enciclopedia completa de Grand Theft Auto VI: personajes, lugares, vehículos y más.',
      pt: 'A enciclopédia completa de Grand Theft Auto VI: personagens, locais, veículos e mais.',
      it: "L'enciclopedia completa di Grand Theft Auto VI: personaggi, luoghi, veicoli e altro.",
      ko: 'Grand Theft Auto VI의 완전한 백과사전: 캐릭터, 장소, 차량 등.',
    },
    categories: [
      {
        slug: { fr: 'personnages', en: 'characters', es: 'personajes', pt: 'personagens', it: 'personaggi', ko: 'characters' },
        label: { fr: 'Personnages', en: 'Characters', es: 'Personajes', pt: 'Personagens', it: 'Personaggi', ko: '캐릭터' },
      },
      {
        slug: { fr: 'lieux', en: 'locations', es: 'lugares', pt: 'locais', it: 'luoghi', ko: 'locations' },
        label: { fr: 'Lieux', en: 'Locations', es: 'Lugares', pt: 'Locais', it: 'Luoghi', ko: '장소' },
      },
      {
        slug: { fr: 'vehicules', en: 'vehicles', es: 'vehiculos', pt: 'veiculos', it: 'veicoli', ko: 'vehicles' },
        label: { fr: 'Véhicules', en: 'Vehicles', es: 'Vehículos', pt: 'Veículos', it: 'Veicoli', ko: '차량' },
      },
      {
        slug: { fr: 'armes', en: 'weapons', es: 'armas', pt: 'armas', it: 'armi', ko: 'weapons' },
        label: { fr: 'Armes', en: 'Weapons', es: 'Armas', pt: 'Armas', it: 'Armi', ko: '무기' },
      },
      {
        slug: { fr: 'gameplay', en: 'gameplay', es: 'gameplay', pt: 'gameplay', it: 'gameplay', ko: 'gameplay' },
        label: { fr: 'Gameplay', en: 'Gameplay', es: 'Gameplay', pt: 'Gameplay', it: 'Gameplay', ko: '게임플레이' },
      },
      {
        slug: { fr: 'guides', en: 'guides', es: 'guias', pt: 'guias', it: 'guide', ko: 'guides' },
        label: { fr: 'Guides', en: 'Guides', es: 'Guías', pt: 'Guias', it: 'Guide', ko: '가이드' },
      },
      {
        slug: { fr: 'actualites', en: 'news', es: 'noticias', pt: 'noticias', it: 'notizie', ko: 'news' },
        label: { fr: 'Actualités', en: 'News', es: 'Noticias', pt: 'Notícias', it: 'Notizie', ko: '뉴스' },
      },
      {
        slug: { fr: 'trailers', en: 'trailers', es: 'trailers', pt: 'trailers', it: 'trailers', ko: 'trailers' },
        label: { fr: 'Trailers', en: 'Trailers', es: 'Trailers', pt: 'Trailers', it: 'Trailers', ko: '트레일러' },
      },
    ],
  },
  'crimson-desert': {
    id: 'crimson-desert',
    mediaType: 'games',
    accentColor: '#DC2626',
    theme: {
      accentColor: '#DC2626',
      accentSecondary: '#D4A946',
      cssClass: 'universe-crimson',
      fontDisplay: '"Cinzel", serif',
      fontBody: '"Crimson Text", serif',
      cardEffect: 'card-medieval',
      overlayEffect: 'overlay-vignette',
      bgGradient: 'linear-gradient(180deg, hsl(10 50% 1.4%) 0%, hsl(20 33% 3.5%) 30%, hsl(22 33% 6%) 100%)',
      heroPattern: 'radial-gradient(ellipse at 50% 60%, hsl(0 68% 32% / 0.06) 0%, transparent 55%), radial-gradient(ellipse at 20% 20%, hsl(36 49% 36% / 0.05) 0%, transparent 50%)',
    },
    releaseDate: '2026-03-28',
    developer: 'Pearl Abyss',
    publisher: 'Pearl Abyss',
    platforms: ['PS5', 'Xbox Series X/S', 'PC'],
    name: {
      fr: 'Crimson Desert', en: 'Crimson Desert', es: 'Crimson Desert', pt: 'Crimson Desert', it: 'Crimson Desert', ko: '붉은사막',
    },
    description: {
      fr: "Guide complet de Crimson Desert : explorez Pywel, ses personnages, régions, combat et lore.",
      en: 'Complete guide to Crimson Desert: explore Pywel, its characters, regions, combat and lore.',
      es: 'Guía completa de Crimson Desert: explora Pywel, sus personajes, regiones, combate y lore.',
      pt: 'Guia completo de Crimson Desert: explore Pywel, seus personagens, regiões, combate e lore.',
      it: 'Guida completa a Crimson Desert: esplora Pywel, i suoi personaggi, regioni, combattimento e lore.',
      ko: '붉은사막 완전 가이드: 피웰의 캐릭터, 지역, 전투, 로어를 탐험하세요.',
    },
    categories: [
      {
        slug: { fr: 'personnages', en: 'characters', es: 'personajes', pt: 'personagens', it: 'personaggi', ko: 'characters' },
        label: { fr: 'Personnages', en: 'Characters', es: 'Personajes', pt: 'Personagens', it: 'Personaggi', ko: '캐릭터' },
      },
      {
        slug: { fr: 'regions', en: 'regions', es: 'regiones', pt: 'regioes', it: 'regioni', ko: 'regions' },
        label: { fr: 'Régions', en: 'Regions', es: 'Regiones', pt: 'Regiões', it: 'Regioni', ko: '지역' },
      },
      {
        slug: { fr: 'combat', en: 'combat', es: 'combate', pt: 'combate', it: 'combattimento', ko: 'combat' },
        label: { fr: 'Combat', en: 'Combat', es: 'Combate', pt: 'Combate', it: 'Combattimento', ko: '전투' },
      },
      {
        slug: { fr: 'lore', en: 'lore', es: 'lore', pt: 'lore', it: 'lore', ko: 'lore' },
        label: { fr: 'Lore', en: 'Lore', es: 'Lore', pt: 'Lore', it: 'Lore', ko: '로어' },
      },
      {
        slug: { fr: 'guides', en: 'guides', es: 'guias', pt: 'guias', it: 'guide', ko: 'guides' },
        label: { fr: 'Guides', en: 'Guides', es: 'Guías', pt: 'Guias', it: 'Guide', ko: '가이드' },
      },
      {
        slug: { fr: 'actualites', en: 'news', es: 'noticias', pt: 'noticias', it: 'notizie', ko: 'news' },
        label: { fr: 'Actualités', en: 'News', es: 'Noticias', pt: 'Notícias', it: 'Notizie', ko: '뉴스' },
      },
      {
        slug: { fr: 'analyse', en: 'analysis', es: 'analisis', pt: 'analise', it: 'analisi', ko: 'analysis' },
        label: { fr: 'Analyse', en: 'Analysis', es: 'Análisis', pt: 'Análise', it: 'Analisi', ko: '분석' },
      },
    ],
  },
  fable: {
    id: 'fable',
    mediaType: 'games',
    accentColor: '#22C55E',
    theme: {
      accentColor: '#22C55E',
      accentSecondary: '#FACC15',
      cssClass: 'universe-fable',
      fontDisplay: '"Cinzel Decorative", "Cinzel", serif',
      fontBody: '"Crimson Text", serif',
      cardEffect: 'card-fable',
      overlayEffect: 'overlay-fable-mist',
      bgGradient: 'linear-gradient(180deg, hsl(150 30% 3%) 0%, hsl(140 25% 5%) 30%, hsl(130 20% 8%) 100%)',
      heroPattern: 'radial-gradient(ellipse at 30% 70%, hsl(120 40% 20% / 0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, hsl(45 80% 50% / 0.04) 0%, transparent 50%)',
    },
    releaseDate: '2026-10-01',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    platforms: ['Xbox Series X/S', 'PS5', 'PC'],
    name: {
      fr: 'Fable', en: 'Fable', es: 'Fable', pt: 'Fable', it: 'Fable', ko: '페이블',
    },
    description: {
      fr: "Tout sur le reboot de Fable par Playground Games : Albion, personnages, créatures et système de combat.",
      en: "Everything about Fable's reboot by Playground Games: Albion, characters, creatures and combat system.",
      es: 'Todo sobre el reboot de Fable por Playground Games: Albion, personajes, criaturas y sistema de combate.',
      pt: 'Tudo sobre o reboot de Fable pela Playground Games: Albion, personagens, criaturas e sistema de combate.',
      it: 'Tutto sul reboot di Fable di Playground Games: Albion, personaggi, creature e sistema di combattimento.',
      ko: 'Playground Games의 Fable 리부트 가이드: 알비온, 캐릭터, 크리처, 전투 시스템.',
    },
    categories: [
      {
        slug: { fr: 'personnages', en: 'characters', es: 'personajes', pt: 'personagens', it: 'personaggi', ko: 'characters' },
        label: { fr: 'Personnages', en: 'Characters', es: 'Personajes', pt: 'Personagens', it: 'Personaggi', ko: '캐릭터' },
      },
      {
        slug: { fr: 'lieux', en: 'locations', es: 'lugares', pt: 'locais', it: 'luoghi', ko: 'locations' },
        label: { fr: 'Lieux', en: 'Locations', es: 'Lugares', pt: 'Locais', it: 'Luoghi', ko: '장소' },
      },
      {
        slug: { fr: 'creatures', en: 'creatures', es: 'criaturas', pt: 'criaturas', it: 'creature', ko: 'creatures' },
        label: { fr: 'Créatures', en: 'Creatures', es: 'Criaturas', pt: 'Criaturas', it: 'Creature', ko: '크리처' },
      },
      {
        slug: { fr: 'gameplay', en: 'gameplay', es: 'gameplay', pt: 'gameplay', it: 'gameplay', ko: 'gameplay' },
        label: { fr: 'Gameplay', en: 'Gameplay', es: 'Gameplay', pt: 'Gameplay', it: 'Gameplay', ko: '게임플레이' },
      },
      {
        slug: { fr: 'classes', en: 'classes', es: 'clases', pt: 'classes', it: 'classi', ko: 'classes' },
        label: { fr: 'Classes & Builds', en: 'Classes & Builds', es: 'Clases & Builds', pt: 'Classes & Builds', it: 'Classi & Build', ko: '클래스 & 빌드' },
      },
      {
        slug: { fr: 'lore', en: 'lore', es: 'lore', pt: 'lore', it: 'lore', ko: 'lore' },
        label: { fr: 'Lore', en: 'Lore', es: 'Lore', pt: 'Lore', it: 'Lore', ko: '로어' },
      },
      {
        slug: { fr: 'guides', en: 'guides', es: 'guias', pt: 'guias', it: 'guide', ko: 'guides' },
        label: { fr: 'Guides', en: 'Guides', es: 'Guías', pt: 'Guias', it: 'Guide', ko: '가이드' },
      },
      {
        slug: { fr: 'actualites', en: 'news', es: 'noticias', pt: 'noticias', it: 'notizie', ko: 'news' },
        label: { fr: 'Actualités', en: 'News', es: 'Noticias', pt: 'Notícias', it: 'Notizie', ko: '뉴스' },
      },
    ],
  },
  wolverine: {
    id: 'wolverine',
    mediaType: 'games',
    accentColor: '#EAB308',
    theme: {
      accentColor: '#EAB308',
      accentSecondary: '#DC2626',
      cssClass: 'universe-wolverine',
      fontDisplay: '"Barlow Condensed", sans-serif',
      fontBody: '"DM Sans", sans-serif',
      cardEffect: 'card-wolverine',
      overlayEffect: 'overlay-grain-heavy',
      bgGradient: 'linear-gradient(180deg, hsl(0 0% 3%) 0%, hsl(0 0% 5%) 30%, hsl(40 5% 7%) 100%)',
      heroPattern: 'radial-gradient(ellipse at 70% 40%, hsl(45 100% 50% / 0.04) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, hsl(0 70% 40% / 0.03) 0%, transparent 50%)',
    },
    releaseDate: '2026-09-15',
    developer: 'Insomniac Games',
    publisher: 'Sony Interactive Entertainment',
    platforms: ['PS5'],
    name: {
      fr: "Marvel's Wolverine", en: "Marvel's Wolverine", es: "Marvel's Wolverine",
      pt: "Marvel's Wolverine", it: "Marvel's Wolverine", ko: "마블 울버린",
    },
    description: {
      fr: "Guide complet de Marvel's Wolverine : Logan, pouvoirs, ennemis et connexions avec l'univers Spider-Man.",
      en: "Complete guide to Marvel's Wolverine: Logan, powers, enemies and Spider-Man universe connections.",
      es: "Guía completa de Marvel's Wolverine: Logan, poderes, enemigos y conexiones con el universo Spider-Man.",
      pt: "Guia completo de Marvel's Wolverine: Logan, poderes, inimigos e conexões com o universo Spider-Man.",
      it: "Guida completa a Marvel's Wolverine: Logan, poteri, nemici e connessioni con l'universo Spider-Man.",
      ko: "마블 울버린 완전 가이드: 로건, 능력, 적, 스파이더맨 유니버스 연결.",
    },
    categories: [
      {
        slug: { fr: 'personnages', en: 'characters', es: 'personajes', pt: 'personagens', it: 'personaggi', ko: 'characters' },
        label: { fr: 'Personnages', en: 'Characters', es: 'Personajes', pt: 'Personagens', it: 'Personaggi', ko: '캐릭터' },
      },
      {
        slug: { fr: 'lieux', en: 'locations', es: 'lugares', pt: 'locais', it: 'luoghi', ko: 'locations' },
        label: { fr: 'Lieux', en: 'Locations', es: 'Lugares', pt: 'Locais', it: 'Luoghi', ko: '장소' },
      },
      {
        slug: { fr: 'pouvoirs', en: 'powers', es: 'poderes', pt: 'poderes', it: 'poteri', ko: 'powers' },
        label: { fr: 'Pouvoirs', en: 'Powers', es: 'Poderes', pt: 'Poderes', it: 'Poteri', ko: '능력' },
      },
      {
        slug: { fr: 'gameplay', en: 'gameplay', es: 'gameplay', pt: 'gameplay', it: 'gameplay', ko: 'gameplay' },
        label: { fr: 'Gameplay', en: 'Gameplay', es: 'Gameplay', pt: 'Gameplay', it: 'Gameplay', ko: '게임플레이' },
      },
      {
        slug: { fr: 'ennemis', en: 'enemies', es: 'enemigos', pt: 'inimigos', it: 'nemici', ko: 'enemies' },
        label: { fr: 'Ennemis', en: 'Enemies', es: 'Enemigos', pt: 'Inimigos', it: 'Nemici', ko: '적' },
      },
      {
        slug: { fr: 'lore-marvel', en: 'marvel-lore', es: 'lore-marvel', pt: 'lore-marvel', it: 'lore-marvel', ko: 'marvel-lore' },
        label: { fr: 'Lore Marvel', en: 'Marvel Lore', es: 'Lore Marvel', pt: 'Lore Marvel', it: 'Lore Marvel', ko: '마블 로어' },
      },
      {
        slug: { fr: 'guides', en: 'guides', es: 'guias', pt: 'guias', it: 'guide', ko: 'guides' },
        label: { fr: 'Guides', en: 'Guides', es: 'Guías', pt: 'Guias', it: 'Guide', ko: '가이드' },
      },
      {
        slug: { fr: 'actualites', en: 'news', es: 'noticias', pt: 'noticias', it: 'notizie', ko: 'news' },
        label: { fr: 'Actualités', en: 'News', es: 'Noticias', pt: 'Notícias', it: 'Notizie', ko: '뉴스' },
      },
    ],
  },
};

export function getFranchiseById(id: string): FranchiseConfig | undefined {
  return franchises[id as FranchiseId];
}

export function getAllFranchiseIds(): FranchiseId[] {
  return Object.keys(franchises) as FranchiseId[];
}

export function getFranchisesByMediaType(type: MediaType): FranchiseConfig[] {
  return Object.values(franchises).filter(f => f.mediaType === type);
}

export function getCategorySlug(franchise: FranchiseConfig, categoryIndex: number, locale: string): string {
  return franchise.categories[categoryIndex]?.slug[locale] || franchise.categories[categoryIndex]?.slug['en'] || '';
}

export function findCategoryBySlug(franchise: FranchiseConfig, slug: string, locale: string): FranchiseCategory | undefined {
  return franchise.categories.find(cat => cat.slug[locale] === slug);
}
