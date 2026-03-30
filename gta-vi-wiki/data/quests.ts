import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

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
    id: 'leonida-penitentiary-release',
    name: { fr: 'Liberation', en: 'Release', es: 'Liberacion' },
    type: 'MAIN',
    chapter: 1,
    faction: null,
    description: {
      fr: "Lucia est liberee du penitencier de Leonida et doit trouver son chemin jusqu'a Vice City.",
      en: "Lucia is released from Leonida Penitentiary and must find her way to Vice City.",
      es: "Lucia es liberada del penitenciario de Leonida y debe encontrar el camino a Vice City.",
    },
    prerequisites: [],
    rewards: { fr: 'Acces a Vice City', en: 'Access to Vice City', es: 'Acceso a Vice City' },
    previousQuest: null,
    nextQuest: 'meeting-jason',
    region: 'vice-city',
    known: true,
  },
  {
    id: 'meeting-jason',
    name: { fr: 'Rencontre au sommet', en: 'Chance Meeting', es: 'Encuentro casual' },
    type: 'MAIN',
    chapter: 1,
    faction: null,
    description: {
      fr: "Lucia rencontre Jason Duval a Vice City dans des circonstances chaotiques.",
      en: "Lucia meets Jason Duval in Vice City under chaotic circumstances.",
      es: "Lucia conoce a Jason Duval en Vice City en circunstancias caoticas.",
    },
    prerequisites: ['leonida-penitentiary-release'],
    rewards: { fr: 'Jason comme partenaire', en: 'Jason as partner', es: 'Jason como socio' },
    previousQuest: 'leonida-penitentiary-release',
    nextQuest: null,
    region: 'vice-city',
    known: true,
  },
];
