import type { Translations } from './i18n';

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

// Quest details have not been officially confirmed beyond the broad premise.
// This array will be populated when official information is available.
export const quests: Quest[] = [
  {
    id: 'night-of-black-bears',
    name: { fr: 'La Nuit des Ours Noirs', en: 'Night of the Black Bears', ko: '검은 곰의 밤' },
    type: 'MAIN',
    chapter: 1,
    faction: 'Greymanes',
    description: {
      fr: "L'attaque des Ours Noirs sur Pailune marque le début de l'aventure de Kliff.",
      en: "The Black Bears' attack on Pailune marks the beginning of Kliff's adventure.",
      ko: "검은 곰 부대의 파일룬 공격으로 클리프의 모험이 시작됩니다.",
    },
    prerequisites: [],
    rewards: { fr: 'En attente de plus d\'informations.', en: 'Awaiting more information.', ko: '추가 정보 대기 중.' },
    previousQuest: null,
    nextQuest: null,
    region: 'pailune',
    known: true,
  },
];

export const questTypeLabels: Record<QuestType, Translations> = {
  MAIN: { fr: 'Principale', en: 'Main', es: 'Principal', it: 'Principale', ko: '메인' },
  SIDE: { fr: 'Secondaire', en: 'Side', es: 'Secundaria', it: 'Secondaria', ko: '서브' },
  FACTION: { fr: 'Faction', en: 'Faction', es: 'Facción', it: 'Fazione', ko: '세력' },
  HIDDEN: { fr: 'Cachée', en: 'Hidden', es: 'Oculta', it: 'Nascosta', ko: '숨겨진' },
};
