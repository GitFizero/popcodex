import type { Translations } from '@/fable-wiki/context/I18nContext';

export type QuestType = 'MAIN' | 'SIDE' | 'FACTION' | 'HIDDEN';

export interface Quest {
  id: string;
  name: Translations;
  type: QuestType;
  chapter: number | null;
  faction: string | null;
  description: Translations;
  prerequisites: string[];
  rewards: Translations;
  previousQuest: string | null;
  nextQuest: string | null;
  region: string | null;
  known: boolean;
}

export const quests: Quest[] = [
  {
    id: 'briar-hill-childhood',
    name: { fr: "L'Enfance a Briar Hill", en: 'Childhood in Briar Hill' },
    type: 'MAIN',
    chapter: 1,
    faction: null,
    description: {
      fr: "Decouvrez les premiers pouvoirs heroiques du Heros dans le village paisible de Briar Hill.",
      en: "Discover the Hero's first heroic powers in the peaceful village of Briar Hill.",
    },
    prerequisites: [],
    rewards: { fr: 'Pouvoirs heroiques debloquees.', en: 'Heroic powers unlocked.' },
    previousQuest: null,
    nextQuest: 'the-petrification',
    region: 'briar-hill',
    known: true,
  },
  {
    id: 'the-petrification',
    name: { fr: 'La Petrification', en: 'The Petrification' },
    type: 'MAIN',
    chapter: 2,
    faction: null,
    description: {
      fr: "L'Etranger arrive a Briar Hill et transforme le village en pierre. Le Heros doit survivre et fuir.",
      en: 'The Stranger arrives in Briar Hill and turns the village to stone. The Hero must survive and flee.',
    },
    prerequisites: ['briar-hill-childhood'],
    rewards: { fr: "Direction de quete vers Bowerstone.", en: 'Quest direction toward Bowerstone.' },
    previousQuest: 'briar-hill-childhood',
    nextQuest: 'journey-to-bowerstone',
    region: 'briar-hill',
    known: true,
  },
  {
    id: 'journey-to-bowerstone',
    name: { fr: 'Le Voyage vers Bowerstone', en: 'Journey to Bowerstone' },
    type: 'MAIN',
    chapter: 3,
    faction: "Heroes' Guild",
    description: {
      fr: "Voyagez vers Bowerstone et la Guilde des Heros. Rencontrez Humphry en chemin.",
      en: "Travel to Bowerstone and the Heroes' Guild. Meet Humphry along the way.",
    },
    prerequisites: ['the-petrification'],
    rewards: { fr: "Acces a la Guilde des Heros.", en: "Access to the Heroes' Guild." },
    previousQuest: 'the-petrification',
    nextQuest: null,
    region: 'bowerstone',
    known: true,
  },
];

export const questTypeLabels: Record<QuestType, Translations> = {
  MAIN: { fr: 'Principale', en: 'Main' },
  SIDE: { fr: 'Secondaire', en: 'Side' },
  FACTION: { fr: 'Faction', en: 'Faction' },
  HIDDEN: { fr: 'Cachee', en: 'Hidden' },
};
