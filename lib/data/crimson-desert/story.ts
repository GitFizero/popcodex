import type { Translations } from './i18n';

export interface StoryEvent {
  title: Translations;
  description: Translations;
}

export interface Chapter {
  id: string;
  number: number;
  numeral: string;
  title: Translations;
  synopsis: Translations;
  keyEvents: StoryEvent[];
  keyCharacters: string[];
  pullQuote?: Translations;
}

export const chapters: Chapter[] = [
  {
    id: 'chapter-1',
    number: 1,
    numeral: 'I',
    title: {
      fr: 'La Nuit des Ours Noirs',
      en: 'Night of the Black Bears',
      ko: '검은 곰의 밤',
    },
    synopsis: {
      fr: "Les Ours Noirs descendent sur Pailune avec le feu et l'acier. Les Crinières Grises sont dispersés aux quatre vents. Kliff s'échappe de justesse, portant le poids de chaque compagnon tombé sur ses épaules. La patrie qu'il avait juré de protéger brûle derrière lui.",
      en: "The Black Bears descend upon Pailune with fire and steel. The Greymanes are scattered to the winds. Kliff barely escapes with his life, carrying the weight of every fallen comrade on his shoulders. The homeland he swore to protect burns behind him.",
      ko: "검은 곰 부대가 불과 강철로 파일룬을 습격합니다. 그레이메인은 사방으로 흩어집니다. 클리프는 간신히 목숨을 건지며, 쓰러진 동료들의 무게를 어깨에 짊어집니다. 그가 지키겠다 맹세했던 고향이 그의 등 뒤에서 불타오릅니다.",
    },
    keyEvents: [
      { title: { fr: "L'Attaque de Pailune", en: 'The Attack on Pailune', ko: '파일룬 습격' }, description: { fr: "Les Ours Noirs attaquent Pailune, dispersant les Crinières Grises.", en: 'The Black Bears attack Pailune, scattering the Greymanes.', ko: '검은 곰 부대가 파일룬을 공격하여 그레이메인을 흩어버립니다.' } },
      { title: { fr: "La Fuite de Kliff", en: "Kliff's Escape", ko: '클리프의 탈출' }, description: { fr: "Kliff se fraie un chemin à travers le chaos.", en: 'Kliff fights through the chaos.', ko: '클리프가 혼란 속에서 탈출합니다.' } },
    ],
    keyCharacters: ['kliff'],
  },
  {
    id: 'chapter-2',
    number: 2,
    numeral: 'II',
    title: {
      fr: 'En attente de confirmation',
      en: 'Awaiting Confirmation',
      ko: '확인 대기 중',
    },
    synopsis: {
      fr: "Les détails du chapitre 2 n'ont pas encore été officiellement révélés par Pearl Abyss.",
      en: 'Chapter 2 details have not yet been officially revealed by Pearl Abyss.',
      ko: '챕터 2의 세부 사항은 아직 펄어비스에 의해 공식 발표되지 않았습니다.',
    },
    keyEvents: [],
    keyCharacters: ['kliff'],
  },
  {
    id: 'chapter-3',
    number: 3,
    numeral: 'III',
    title: {
      fr: 'En attente de confirmation',
      en: 'Awaiting Confirmation',
      ko: '확인 대기 중',
    },
    synopsis: {
      fr: "Les détails du chapitre 3 n'ont pas encore été officiellement révélés par Pearl Abyss.",
      en: 'Chapter 3 details have not yet been officially revealed by Pearl Abyss.',
      ko: '챕터 3의 세부 사항은 아직 펄어비스에 의해 공식 발표되지 않았습니다.',
    },
    keyEvents: [],
    keyCharacters: ['kliff'],
  },
  {
    id: 'chapter-4',
    number: 4,
    numeral: 'IV',
    title: {
      fr: 'En attente de confirmation',
      en: 'Awaiting Confirmation',
      ko: '확인 대기 중',
    },
    synopsis: {
      fr: "Les détails du chapitre 4 n'ont pas encore été officiellement révélés par Pearl Abyss.",
      en: 'Chapter 4 details have not yet been officially revealed by Pearl Abyss.',
      ko: '챕터 4의 세부 사항은 아직 펄어비스에 의해 공식 발표되지 않았습니다.',
    },
    keyEvents: [],
    keyCharacters: ['kliff'],
  },
  {
    id: 'chapter-5',
    number: 5,
    numeral: 'V',
    title: {
      fr: 'En attente de confirmation',
      en: 'Awaiting Confirmation',
      ko: '확인 대기 중',
    },
    synopsis: {
      fr: "Les détails du chapitre 5 n'ont pas encore été officiellement révélés par Pearl Abyss.",
      en: 'Chapter 5 details have not yet been officially revealed by Pearl Abyss.',
      ko: '챕터 5의 세부 사항은 아직 펄어비스에 의해 공식 발표되지 않았습니다.',
    },
    keyEvents: [],
    keyCharacters: ['kliff'],
  },
];
