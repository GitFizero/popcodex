export type FranchiseId = 'gta-vi' | 'fable' | 'wolverine';
export type MediaType = 'games' | 'films' | 'series';

export interface FranchiseCategory {
  slug: Record<string, string>;
  label: Record<string, string>;
}

export interface FranchiseConfig {
  id: FranchiseId;
  mediaType: MediaType;
  accentColor: string;
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
    accentColor: '#E85D3A',
    releaseDate: '2026-05-26',
    developer: 'Rockstar Games',
    publisher: 'Take-Two Interactive / Rockstar Games',
    platforms: ['PS5', 'Xbox Series X/S'],
    name: {
      fr: 'GTA VI',
      en: 'GTA VI',
      es: 'GTA VI',
      pt: 'GTA VI',
      it: 'GTA VI',
    },
    description: {
      fr: 'L\'encyclopédie complète de Grand Theft Auto VI : personnages, lieux, véhicules et plus encore.',
      en: 'The complete encyclopedia of Grand Theft Auto VI: characters, locations, vehicles and more.',
      es: 'La enciclopedia completa de Grand Theft Auto VI: personajes, lugares, vehículos y más.',
      pt: 'A enciclopédia completa de Grand Theft Auto VI: personagens, locais, veículos e mais.',
      it: 'L\'enciclopedia completa di Grand Theft Auto VI: personaggi, luoghi, veicoli e altro.',
    },
    categories: [
      {
        slug: { fr: 'personnages', en: 'characters', es: 'personajes', pt: 'personagens', it: 'personaggi' },
        label: { fr: 'Personnages', en: 'Characters', es: 'Personajes', pt: 'Personagens', it: 'Personaggi' },
      },
      {
        slug: { fr: 'lieux', en: 'locations', es: 'lugares', pt: 'locais', it: 'luoghi' },
        label: { fr: 'Lieux', en: 'Locations', es: 'Lugares', pt: 'Locais', it: 'Luoghi' },
      },
      {
        slug: { fr: 'vehicules', en: 'vehicles', es: 'vehiculos', pt: 'veiculos', it: 'veicoli' },
        label: { fr: 'Véhicules', en: 'Vehicles', es: 'Vehículos', pt: 'Veículos', it: 'Veicoli' },
      },
      {
        slug: { fr: 'armes', en: 'weapons', es: 'armas', pt: 'armas', it: 'armi' },
        label: { fr: 'Armes', en: 'Weapons', es: 'Armas', pt: 'Armas', it: 'Armi' },
      },
      {
        slug: { fr: 'gameplay', en: 'gameplay', es: 'gameplay', pt: 'gameplay', it: 'gameplay' },
        label: { fr: 'Gameplay', en: 'Gameplay', es: 'Gameplay', pt: 'Gameplay', it: 'Gameplay' },
      },
      {
        slug: { fr: 'trailers', en: 'trailers', es: 'trailers', pt: 'trailers', it: 'trailers' },
        label: { fr: 'Trailers', en: 'Trailers', es: 'Trailers', pt: 'Trailers', it: 'Trailers' },
      },
    ],
  },
  fable: {
    id: 'fable',
    mediaType: 'games',
    accentColor: '#16A34A',
    releaseDate: '2026-10-01',
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    platforms: ['Xbox Series X/S', 'PS5', 'PC'],
    name: {
      fr: 'Fable',
      en: 'Fable',
      es: 'Fable',
      pt: 'Fable',
      it: 'Fable',
    },
    description: {
      fr: 'Tout sur le reboot de Fable par Playground Games : Albion, personnages, créatures et système de combat.',
      en: 'Everything about Fable\'s reboot by Playground Games: Albion, characters, creatures and combat system.',
      es: 'Todo sobre el reboot de Fable por Playground Games: Albion, personajes, criaturas y sistema de combate.',
      pt: 'Tudo sobre o reboot de Fable pela Playground Games: Albion, personagens, criaturas e sistema de combate.',
      it: 'Tutto sul reboot di Fable di Playground Games: Albion, personaggi, creature e sistema di combattimento.',
    },
    categories: [
      {
        slug: { fr: 'personnages', en: 'characters', es: 'personajes', pt: 'personagens', it: 'personaggi' },
        label: { fr: 'Personnages', en: 'Characters', es: 'Personajes', pt: 'Personagens', it: 'Personaggi' },
      },
      {
        slug: { fr: 'lieux', en: 'locations', es: 'lugares', pt: 'locais', it: 'luoghi' },
        label: { fr: 'Lieux', en: 'Locations', es: 'Lugares', pt: 'Locais', it: 'Luoghi' },
      },
      {
        slug: { fr: 'creatures', en: 'creatures', es: 'criaturas', pt: 'criaturas', it: 'creature' },
        label: { fr: 'Créatures', en: 'Creatures', es: 'Criaturas', pt: 'Criaturas', it: 'Creature' },
      },
      {
        slug: { fr: 'gameplay', en: 'gameplay', es: 'gameplay', pt: 'gameplay', it: 'gameplay' },
        label: { fr: 'Gameplay', en: 'Gameplay', es: 'Gameplay', pt: 'Gameplay', it: 'Gameplay' },
      },
      {
        slug: { fr: 'classes', en: 'classes', es: 'clases', pt: 'classes', it: 'classi' },
        label: { fr: 'Classes & Builds', en: 'Classes & Builds', es: 'Clases & Builds', pt: 'Classes & Builds', it: 'Classi & Build' },
      },
      {
        slug: { fr: 'lore', en: 'lore', es: 'lore', pt: 'lore', it: 'lore' },
        label: { fr: 'Lore', en: 'Lore', es: 'Lore', pt: 'Lore', it: 'Lore' },
      },
    ],
  },
  wolverine: {
    id: 'wolverine',
    mediaType: 'games',
    accentColor: '#D97706',
    releaseDate: '2026-09-15',
    developer: 'Insomniac Games',
    publisher: 'Sony Interactive Entertainment',
    platforms: ['PS5'],
    name: {
      fr: "Marvel's Wolverine",
      en: "Marvel's Wolverine",
      es: "Marvel's Wolverine",
      pt: "Marvel's Wolverine",
      it: "Marvel's Wolverine",
    },
    description: {
      fr: 'Guide complet de Marvel\'s Wolverine : Logan, pouvoirs, ennemis et connexions avec l\'univers Spider-Man.',
      en: 'Complete guide to Marvel\'s Wolverine: Logan, powers, enemies and Spider-Man universe connections.',
      es: 'Guía completa de Marvel\'s Wolverine: Logan, poderes, enemigos y conexiones con el universo Spider-Man.',
      pt: 'Guia completo de Marvel\'s Wolverine: Logan, poderes, inimigos e conexões com o universo Spider-Man.',
      it: 'Guida completa a Marvel\'s Wolverine: Logan, poteri, nemici e connessioni con l\'universo Spider-Man.',
    },
    categories: [
      {
        slug: { fr: 'personnages', en: 'characters', es: 'personajes', pt: 'personagens', it: 'personaggi' },
        label: { fr: 'Personnages', en: 'Characters', es: 'Personajes', pt: 'Personagens', it: 'Personaggi' },
      },
      {
        slug: { fr: 'lieux', en: 'locations', es: 'lugares', pt: 'locais', it: 'luoghi' },
        label: { fr: 'Lieux', en: 'Locations', es: 'Lugares', pt: 'Locais', it: 'Luoghi' },
      },
      {
        slug: { fr: 'pouvoirs', en: 'powers', es: 'poderes', pt: 'poderes', it: 'poteri' },
        label: { fr: 'Pouvoirs', en: 'Powers', es: 'Poderes', pt: 'Poderes', it: 'Poteri' },
      },
      {
        slug: { fr: 'gameplay', en: 'gameplay', es: 'gameplay', pt: 'gameplay', it: 'gameplay' },
        label: { fr: 'Gameplay', en: 'Gameplay', es: 'Gameplay', pt: 'Gameplay', it: 'Gameplay' },
      },
      {
        slug: { fr: 'ennemis', en: 'enemies', es: 'enemigos', pt: 'inimigos', it: 'nemici' },
        label: { fr: 'Ennemis', en: 'Enemies', es: 'Enemigos', pt: 'Inimigos', it: 'Nemici' },
      },
      {
        slug: { fr: 'lore-marvel', en: 'marvel-lore', es: 'lore-marvel', pt: 'lore-marvel', it: 'lore-marvel' },
        label: { fr: 'Lore Marvel', en: 'Marvel Lore', es: 'Lore Marvel', pt: 'Lore Marvel', it: 'Lore Marvel' },
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
