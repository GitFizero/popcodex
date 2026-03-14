import type { Translations } from '@/fable-wiki/context/I18nContext';

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

export const characters: Character[] = [
  {
    id: 'hero',
    name: 'The Hero',
    role: { fr: 'Protagoniste', en: 'Protagonist' },
    faction: 'Heroes Guild',
    origin: { fr: 'Briar Hill', en: 'Briar Hill' },
    weapon: { fr: 'Epee, Arc, Magie', en: 'Sword, Bow, Magic' },
    affiliation: { fr: "Guilde des Heros", en: "Heroes' Guild" },
    status: { fr: 'Actif', en: 'Active' },
    playable: true,
    type: 'PLAYABLE',
    colorTheme: 'emerald',
    bio: {
      fr: "Ne dans le paisible village de Briar Hill, le Heros decouvre ses pouvoirs heroiques des l'enfance. Lorsqu'un mysterieux etranger petrifie tout le village, le Heros est lance dans une quete epique a travers Albion pour comprendre ses pouvoirs, trouver l'etranger et sauver les siens. Sa destinee est faconnee par les choix du joueur, entre bien et mal.",
      en: "Born in the peaceful village of Briar Hill, the Hero discovers heroic powers as a child. When a mysterious stranger turns the entire village to stone, the Hero is thrust into an epic quest across Albion to understand their powers, find the stranger, and save their people. Their destiny is shaped by the player's choices, between good and evil.",
    },
    signatureQuote: { fr: '"Chaque choix forge le heros que vous deviendrez."', en: '"Every choice forges the hero you will become."' },
    strength: 7,
    speed: 6,
    magic: 8,
    weapons: [
      { name: { fr: 'Epee', en: 'Sword' }, mastery: 7 },
      { name: { fr: 'Arc', en: 'Bow' }, mastery: 6 },
      { name: { fr: 'Magie (Will)', en: 'Magic (Will)' }, mastery: 8 },
    ],
    combatStyle: {
      fr: "Le Heros est un combattant polyvalent maitrisant les trois piliers du combat : la Force (melee), l'Adresse (distance) et la Volonte (magie). Le systeme de style-weaving permet de combiner fluidement ces trois disciplines en plein combat.",
      en: "The Hero is a versatile fighter mastering three combat pillars: Strength (melee), Skill (ranged), and Will (magic). The style-weaving system allows seamless combination of all three disciplines mid-combat.",
    },
    abilities: [
      { name: { fr: 'Frappe Heroique', en: 'Heroic Strike' }, description: { fr: "Puissante attaque de melee chargee.", en: "Powerful charged melee attack." }, type: 'PHYSICAL', level: 1 },
      { name: { fr: 'Tir Precis', en: 'Precision Shot' }, description: { fr: "Tir a l'arc charge infligeant des degats critiques.", en: "Charged bow shot dealing critical damage." }, type: 'PHYSICAL', level: 2 },
      { name: { fr: 'Boule de Feu', en: 'Fireball' }, description: { fr: "Lance une boule de feu devastatrice.", en: "Launches a devastating fireball." }, type: 'MAGICAL', level: 3 },
    ],
    quotes: [
      { text: { fr: '"Briar Hill ne sera pas oublie."', en: '"Briar Hill will not be forgotten."' }, context: { fr: 'Apres la petrification du village', en: 'After the village petrification' } },
      { text: { fr: '"La Guilde des Heros m\'attend."', en: '"The Heroes\' Guild awaits me."' }, context: { fr: "En route vers Bowerstone", en: 'On the road to Bowerstone' } },
    ],
    relations: [
      { characterId: 'humphry', type: 'ALLY', description: { fr: 'Mentor et compagnon', en: 'Mentor and companion' } },
      { characterId: 'grandmother', type: 'MENTOR', description: { fr: 'Figure maternelle et guide', en: 'Maternal figure and guide' } },
      { characterId: 'stranger', type: 'RIVAL', description: { fr: 'Antagoniste qui a petrifie le village', en: 'Antagonist who petrified the village' } },
    ],
    loreEntries: ['heroes-guild', 'briar-hill', 'the-will'],
  },
  {
    id: 'humphry',
    name: 'Humphry',
    role: { fr: 'Ancien Heros', en: 'Former Hero' },
    faction: 'Heroes Guild',
    origin: { fr: 'Bowerstone', en: 'Bowerstone' },
    weapon: { fr: 'Epee a deux mains', en: 'Two-Handed Sword' },
    affiliation: { fr: "Guilde des Heros", en: "Heroes' Guild" },
    status: { fr: 'Actif', en: 'Active' },
    playable: false,
    type: 'COMPANION',
    colorTheme: 'gold',
    bio: {
      fr: "Humphry est un ancien heros d'Albion, force de sortir de sa retraite. Autrefois legende vivante, il a raccroche son epee apres une tragedie personnelle. L'arrivee du Heros le pousse a reprendre les armes. Interprete par Matt King, Humphry apporte humour et sagesse au voyage.",
      en: "Humphry is a former hero of Albion, forced out of retirement. Once a living legend, he hung up his sword after a personal tragedy. The Hero's arrival compels him to take up arms once more. Voiced by Matt King, Humphry brings humor and wisdom to the journey.",
    },
    signatureQuote: { fr: '"J\'etais un heros, autrefois. Avant que tout ne change."', en: '"I was a hero, once. Before everything changed."' },
    strength: 8,
    speed: 4,
    magic: 3,
    weapons: [
      { name: { fr: 'Epee a deux mains', en: 'Two-Handed Sword' }, mastery: 9 },
    ],
    combatStyle: {
      fr: "Humphry est un guerrier de melee pur, favorisant la force brute et les frappes devastatrices. Son style est direct et puissant.",
      en: "Humphry is a pure melee warrior, favoring brute strength and devastating strikes. His style is direct and powerful.",
    },
    abilities: [],
    quotes: [
      { text: { fr: '"Ah, la jeunesse. Ca me rappelle quand j\'avais encore deux genoux en bon etat."', en: '"Ah, youth. Reminds me of when I still had two good knees."' }, context: { fr: 'Premiere rencontre', en: 'First encounter' } },
    ],
    relations: [
      { characterId: 'hero', type: 'ALLY', description: { fr: 'Protege et compagnon', en: 'Protege and companion' } },
    ],
    loreEntries: ['heroes-guild', 'bowerstone'],
  },
  {
    id: 'dave',
    name: 'Dave',
    role: { fr: 'Geant', en: 'Giant' },
    faction: 'None',
    origin: { fr: 'Les Terres Sauvages', en: 'The Wilds' },
    weapon: { fr: 'Poings, Arbres', en: 'Fists, Trees' },
    affiliation: { fr: 'Independant', en: 'Independent' },
    status: { fr: 'Actif', en: 'Active' },
    playable: false,
    type: 'NPC',
    colorTheme: 'blue',
    bio: {
      fr: "Dave est un geant au grand coeur mais au caractere unique. Interprete par Richard Ayoade, il apporte une touche d'humour inattendue au monde d'Albion. Malgre sa taille imposante, Dave est etonnamment philosophe et prone a des reflexions existentielles entre deux combats.",
      en: "Dave is a big-hearted giant with a unique personality. Voiced by Richard Ayoade, he brings unexpected humor to the world of Albion. Despite his imposing size, Dave is surprisingly philosophical and prone to existential musings between fights.",
    },
    signatureQuote: { fr: '"Etre un geant, c\'est surtout une question de perspective."', en: '"Being a giant is really just a matter of perspective."' },
    strength: 10,
    speed: 2,
    magic: 1,
    weapons: [
      { name: { fr: 'Poings', en: 'Fists' }, mastery: 8 },
    ],
    combatStyle: {
      fr: "Dave ecrase ses ennemis avec une force brute inegalee. Il peut arracher des arbres pour s'en servir comme armes improvisees.",
      en: "Dave crushes his enemies with unmatched brute force. He can uproot trees to use as improvised weapons.",
    },
    abilities: [],
    quotes: [
      { text: { fr: '"On m\'appelle Dave. Pas tres original pour un geant, je sais."', en: '"They call me Dave. Not very original for a giant, I know."' }, context: { fr: 'Premiere rencontre', en: 'First encounter' } },
    ],
    relations: [
      { characterId: 'hero', type: 'ALLY', description: { fr: 'Ami improbable', en: 'Unlikely friend' } },
    ],
    loreEntries: ['the-wilds'],
  },
  {
    id: 'stranger',
    name: 'The Stranger',
    role: { fr: 'Antagoniste', en: 'Antagonist' },
    faction: 'Unknown',
    origin: { fr: 'Inconnu', en: 'Unknown' },
    weapon: { fr: 'Magie Ancienne', en: 'Ancient Magic' },
    affiliation: { fr: 'Inconnu', en: 'Unknown' },
    status: { fr: 'Actif', en: 'Active' },
    playable: false,
    type: 'NPC',
    colorTheme: 'purple',
    bio: {
      fr: "L'Etranger est une figure enigmatique dont les motivations restent obscures. Il apparait a Briar Hill et transforme tout le village en pierre avec une magie ancienne et terrible. Son identite et ses objectifs constituent le mystere central de l'histoire de Fable.",
      en: "The Stranger is an enigmatic figure whose motivations remain unclear. He appears in Briar Hill and turns the entire village to stone with ancient, terrible magic. His identity and goals form the central mystery of Fable's story.",
    },
    signatureQuote: { fr: '"La pierre ne ment jamais. Elle preserva la verite."', en: '"Stone never lies. It preserves the truth."' },
    strength: 0,
    speed: 0,
    magic: 10,
    weapons: [
      { name: { fr: 'Magie de Petrification', en: 'Petrification Magic' }, mastery: 10 },
    ],
    combatStyle: {
      fr: "L'Etranger manie une magie ancienne capable de petrifier des villages entiers. Ses capacites de combat restent largement inconnues.",
      en: "The Stranger wields ancient magic capable of petrifying entire villages. His combat capabilities remain largely unknown.",
    },
    abilities: [],
    quotes: [],
    relations: [
      { characterId: 'hero', type: 'RIVAL', description: { fr: 'Antagoniste principal', en: 'Main antagonist' } },
    ],
    loreEntries: ['old-kingdom'],
  },
  {
    id: 'grandmother',
    name: 'Grandmother',
    role: { fr: 'Mentor', en: 'Mentor' },
    faction: 'Heroes Guild',
    origin: { fr: 'Briar Hill', en: 'Briar Hill' },
    weapon: { fr: 'Aucun', en: 'None' },
    affiliation: { fr: 'Briar Hill', en: 'Briar Hill' },
    status: { fr: 'Petrifiee', en: 'Petrified' },
    playable: false,
    type: 'NPC',
    colorTheme: 'emerald',
    bio: {
      fr: "Grand-mere est la figure maternelle et guide spirituelle du Heros. Avant d'etre transformee en pierre par l'Etranger, elle mentionne la Guilde des Heros et les pouvoirs dormants du Heros. Ses derniers mots guident le Heros vers Bowerstone et le debut de sa quete.",
      en: "Grandmother is the Hero's maternal figure and spiritual guide. Before being turned to stone by the Stranger, she mentions the Heroes' Guild and the Hero's dormant powers. Her last words guide the Hero toward Bowerstone and the beginning of their quest.",
    },
    signatureQuote: { fr: '"Rappelle-toi, mon enfant... la Guilde des Heros..."', en: '"Remember, child... the Heroes\' Guild..."' },
    strength: 1,
    speed: 1,
    magic: 5,
    weapons: [],
    combatStyle: {
      fr: "Grand-mere n'est pas une combattante, mais sa connaissance de la magie ancienne et de la Guilde des Heros est inestimable.",
      en: "Grandmother is not a fighter, but her knowledge of ancient magic and the Heroes' Guild is invaluable.",
    },
    abilities: [],
    quotes: [
      { text: { fr: '"Il y a en toi un pouvoir que tu ne comprends pas encore."', en: '"There is a power in you that you do not yet understand."' }, context: { fr: 'Derniers mots avant la petrification', en: 'Last words before petrification' } },
    ],
    relations: [
      { characterId: 'hero', type: 'MENTOR', description: { fr: 'Guide du Heros', en: "Hero's guide" } },
    ],
    loreEntries: ['heroes-guild', 'briar-hill'],
  },
];

export const npcs = [
  { id: 'dave', name: 'Dave', faction: { fr: 'Independant', en: 'Independent' }, role: { fr: 'Geant', en: 'Giant' }, lore: { fr: "Un geant au caractere unique. Interprete par Richard Ayoade.", en: 'A giant with a unique personality. Voiced by Richard Ayoade.' }, status: 'DOCUMENTED' },
  { id: 'stranger', name: 'The Stranger', faction: { fr: 'Inconnu', en: 'Unknown' }, role: { fr: 'Antagoniste', en: 'Antagonist' }, lore: { fr: "Figure enigmatique qui petrifie Briar Hill.", en: 'Enigmatic figure who petrifies Briar Hill.' }, status: 'DOCUMENTED' },
];

export type NPC = typeof npcs[number];
