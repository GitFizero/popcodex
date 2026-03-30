import type { Translations } from '@/crimson-desert-wiki/context/I18nContext';

export interface CharacterAbility {
  name: Translations;
  description: Translations;
  type: 'PHYSICAL' | 'MAGICAL' | 'ELEMENTAL';
  level: number;
}

export interface CharacterQuote {
  text: Translations;
  context: Translations;
}

export interface CharacterRelation {
  characterId: string;
  type: 'ALLY' | 'RIVAL' | 'MENTOR' | 'UNKNOWN';
  description: Translations;
}

export interface Character {
  id: string;
  name: string;
  role: Translations;
  faction: string;
  origin: Translations;
  weapon: Translations;
  affiliation: Translations;
  status: Translations;
  playable: boolean;
  type: 'PLAYABLE' | 'COMPANION' | 'NPC';
  colorTheme: string;
  bio: Translations;
  signatureQuote: Translations;
  strength: number;
  speed: number;
  magic: number;
  weapons: { name: Translations; mastery: number }[];
  combatStyle: Translations;
  abilities: CharacterAbility[];
  quotes: CharacterQuote[];
  relations: CharacterRelation[];
  loreEntries: string[];
  image?: string;
}

const charKliff = '/crimson-desert/char-kliff.jpg';
const charDamiane = '/crimson-desert/char-damiane.jpg';
const charOongka = '/crimson-desert/char-oongka.jpg';
const charHexe = '/crimson-desert/char-hexe-marie.jpg';
const charGoblinKing = '/crimson-desert/char-goblin-king.jpg';

export const characters: Character[] = [
  {
    id: 'kliff',
    name: 'Kliff',
    role: { fr: 'Chef Mercenaire', en: 'Mercenary Leader', ko: '용병단 리더' },
    faction: 'Greymanes',
    origin: { fr: 'Pailune', en: 'Pailune', ko: '파일룬' },
    weapon: { fr: 'Épée, Lance, Arc', en: 'Sword, Lance, Bow', ko: '검, 창, 활' },
    affiliation: { fr: 'Crinières Grises', en: 'Greymanes', ko: '그레이메인' },
    status: { fr: 'Actif', en: 'Active', ko: '활동 중' },
    playable: true,
    type: 'PLAYABLE',
    colorTheme: 'crimson',
    bio: {
      fr: "Autrefois le chef incontesté des Crinières Grises, le monde de Kliff a été brisé en une seule nuit lorsque les Ours Noirs se sont abattus sur Pailune. Poussé par la vengeance et un sens du devoir inébranlable envers ses compagnons dispersés, il traverse le continent déchiré par la guerre de Pywel pour réunir sa bande et découvrir la vérité derrière la menace croissante de l'Abysse.",
      en: "Once the unquestioned leader of the Greymanes, Kliff's world was shattered in a single night when the Black Bears descended upon Pailune. Driven by vengeance and an unyielding sense of duty to his scattered companions, he traverses the war-torn continent of Pywel seeking to reunite his band and uncover the truth behind the rising Abysse threat.",
      ko: "한때 그레이메인의 확고한 리더였던 클리프의 세계는 검은 곰 부대가 파일룬을 습격한 단 하룻밤에 산산조각이 났습니다. 복수심과 흩어진 동료들에 대한 확고한 의무감에 이끌려, 전쟁으로 폐허가 된 파이웰 대륙을 횡단하며 동료들을 재결집하고 심연의 위협 뒤에 숨겨진 진실을 밝히려 합니다.",
    },
    signatureQuote: { fr: '', en: '' },
    strength: 0,
    speed: 0,
    magic: 0,
    weapons: [
      { name: { fr: 'Épée longue', en: 'Longsword', ko: '장검' }, mastery: 0 },
      { name: { fr: 'Lance', en: 'Lance', ko: '창' }, mastery: 0 },
      { name: { fr: 'Arc', en: 'Bow', ko: '활' }, mastery: 0 },
    ],
    combatStyle: {
      fr: "Kliff est un combattant polyvalent de première ligne qui peut basculer entre les styles d'armes en plein combat. Il manie l'épée longue, la lance et l'arc.",
      en: "Kliff is a versatile front-line fighter who can seamlessly switch between weapon styles mid-combat. He wields the longsword, lance, and bow.",
      ko: "클리프는 전투 중 무기 스타일을 끊김 없이 전환할 수 있는 다재다능한 전방 전투원입니다. 장검, 창, 활을 사용합니다.",
    },
    abilities: [],
    quotes: [],
    relations: [],
    loreEntries: ['greymanes', 'pailune', 'night-of-black-bears'],
    image: charKliff,
  },
  {
    id: 'damiane',
    name: 'Damiane',
    role: { fr: 'Combattante', en: 'Fighter', ko: '전투원' },
    faction: 'Greymanes',
    origin: { fr: 'Pailune', en: 'Pailune', ko: '파일룬' },
    weapon: { fr: 'Doubles lames', en: 'Dual Blades', ko: '쌍검' },
    affiliation: { fr: 'Crinières Grises', en: 'Greymanes', ko: '그레이메인' },
    status: { fr: 'Active', en: 'Active', ko: '활동 중' },
    playable: true,
    type: 'PLAYABLE',
    colorTheme: 'teal',
    bio: {
      fr: "Personnage jouable de Crimson Desert et membre des Crinières Grises. Combattante agile spécialisée dans les doubles lames.",
      en: "Playable character in Crimson Desert and member of the Greymanes. Agile fighter specializing in dual blades.",
      ko: "크림슨 디저트의 플레이어블 캐릭터이자 그레이메인의 일원. 쌍검에 특화된 민첩한 전투원.",
    },
    signatureQuote: { fr: '', en: '' },
    strength: 0,
    speed: 0,
    magic: 0,
    weapons: [
      { name: { fr: 'Doubles lames', en: 'Dual Blades', ko: '쌍검' }, mastery: 0 },
    ],
    combatStyle: {
      fr: "Damiane excelle dans le combat rapide avec des doubles lames, privilégiant la vitesse et l'agilité.",
      en: "Damiane excels at fast combat with dual blades, prioritizing speed and agility.",
      ko: "다미안은 쌍검을 이용한 빠른 전투에 뛰어나며, 속도와 민첩성을 우선시합니다.",
    },
    abilities: [],
    quotes: [],
    relations: [],
    loreEntries: ['greymanes', 'pailune'],
    image: charDamiane,
  },
  {
    id: 'oongka',
    name: 'Oongka',
    role: { fr: 'Colosse', en: 'Colossus', ko: '거인' },
    faction: 'Greymanes',
    origin: { fr: 'En attente de confirmation', en: 'Awaiting confirmation', ko: '확인 대기 중' },
    weapon: { fr: 'Mains nues, Armes lourdes', en: 'Bare Hands, Heavy Weapons', ko: '맨손, 대형 무기' },
    affiliation: { fr: 'Crinières Grises', en: 'Greymanes', ko: '그레이메인' },
    status: { fr: 'Actif', en: 'Active', ko: '활동 중' },
    playable: true,
    type: 'PLAYABLE',
    colorTheme: 'amber',
    bio: {
      fr: "Personnage jouable de Crimson Desert et membre des Crinières Grises. Colosse brutal spécialisé dans les armes lourdes et le combat à mains nues.",
      en: "Playable character in Crimson Desert and member of the Greymanes. Brutal colossus specializing in heavy weapons and unarmed combat.",
      ko: "크림슨 디저트의 플레이어블 캐릭터이자 그레이메인의 일원. 대형 무기와 맨손 전투에 특화된 거대한 전사.",
    },
    signatureQuote: { fr: '', en: '' },
    strength: 0,
    speed: 0,
    magic: 0,
    weapons: [
      { name: { fr: 'Mains nues', en: 'Bare Hands', ko: '맨손' }, mastery: 0 },
      { name: { fr: 'Armes lourdes', en: 'Heavy Weapons', ko: '대형 무기' }, mastery: 0 },
    ],
    combatStyle: {
      fr: "Oongka est une pure puissance de mêlée. Son style de combat à mains nues combine des prises de lutte avec des coups dévastateurs.",
      en: "Oongka is a pure close-range powerhouse. His bare-fisted fighting style combines wrestling grapples with devastating punches.",
      ko: "웅카는 순수한 근접 전투의 강자입니다. 그의 맨손 전투 스타일은 레슬링 그래플과 파괴적인 펀치를 결합합니다.",
    },
    abilities: [],
    quotes: [],
    relations: [],
    loreEntries: ['greymanes'],
    image: charOongka,
  },
];

export const npcs = [
  { id: 'hexe-marie', name: 'Hexe Marie', faction: { fr: 'Inconnu', en: 'Unknown', ko: '미확인' }, role: { fr: 'Sorcière', en: 'Witch', ko: '마녀' }, lore: { fr: "Une sorcière mystérieuse drapée de plumes de corbeau. Sa magie plie la réalité elle-même.", en: 'A mysterious sorceress draped in raven feathers. Her magic bends reality itself.', ko: '까마귀 깃털을 두른 신비로운 마녀. 그녀의 마법은 현실 자체를 왜곡합니다.' }, status: 'DOCUMENTED', image: charHexe },
  { id: 'goblin-king', name: 'Goblin King', faction: { fr: 'Gobelins', en: 'Goblins', ko: '고블린' }, role: { fr: 'Roi', en: 'King', ko: '왕' }, lore: { fr: "Souverain des territoires gobelin, aperçu dans les bandes-annonces officielles.", en: 'Ruler of goblin territories, seen in official trailers.', ko: '고블린 영토의 통치자. 공식 트레일러에서 확인됨.' }, status: 'DOCUMENTED', image: charGoblinKing },
];

export type NPC = typeof npcs[number];
