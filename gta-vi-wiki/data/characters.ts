import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

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
    id: 'lucia',
    name: 'Lucia Caminos',
    role: { fr: 'Protagoniste', en: 'Protagonist', es: 'Protagonista' },
    faction: 'Independent',
    origin: { fr: 'Liberty City', en: 'Liberty City', es: 'Liberty City' },
    weapon: { fr: 'Pistolet, SMG', en: 'Pistol, SMG', es: 'Pistola, SMG' },
    affiliation: { fr: 'Independante', en: 'Independent', es: 'Independiente' },
    status: { fr: 'Active', en: 'Active', es: 'Activa' },
    playable: true,
    type: 'PLAYABLE',
    colorTheme: 'pink',
    bio: {
      fr: "Lucia Caminos est la premiere protagoniste feminine de la serie Grand Theft Auto. Originaire de Liberty City, elle a ete emprisonnee au penitencier de Leonida pour avoir defendu sa famille contre des menaces violentes. Determinee, intelligente et calculatrice, Lucia est liberee au debut du jeu et rencontre Jason a Vice City, ou les deux commencent leur ascension dans le monde criminel de Leonida.",
      en: "Lucia Caminos is the first female protagonist in the Grand Theft Auto series. Originally from Liberty City, she was imprisoned at Leonida Penitentiary for defending her family against violent threats. Determined, smart, and calculated, Lucia is released at the start of the game and meets Jason in Vice City, where the two begin their rise through Leonida's criminal underworld.",
      es: "Lucia Caminos es la primera protagonista femenina de la serie Grand Theft Auto. Originaria de Liberty City, fue encarcelada en el penitenciario de Leonida por defender a su familia. Determinada, inteligente y calculadora, es liberada al inicio del juego y conoce a Jason en Vice City.",
    },
    signatureQuote: {
      fr: "Je ne retourne pas en cage. Plus jamais.",
      en: "I'm not going back in a cage. Not ever.",
      es: "No voy a volver a una jaula. Nunca mas.",
    },
    strength: 6,
    speed: 8,
    magic: 7,
    weapons: [
      { name: { fr: 'Pistolet', en: 'Pistol', es: 'Pistola' }, mastery: 4 },
      { name: { fr: 'SMG', en: 'SMG', es: 'SMG' }, mastery: 3 },
    ],
    combatStyle: {
      fr: "Lucia privilegie la precision et la discretion. Son style de combat combine des competences de tir precises avec des tactiques de furtivite, la rendant ideale pour les approches calculees.",
      en: "Lucia favors precision and stealth. Her combat style combines accurate shooting skills with stealth tactics, making her ideal for calculated approaches.",
      es: "Lucia favorece la precision y el sigilo. Su estilo de combate combina habilidades de tiro precisas con tacticas de sigilo.",
    },
    abilities: [],
    quotes: [
      { text: { fr: "Je ne retourne pas en cage. Plus jamais.", en: "I'm not going back in a cage. Not ever.", es: "No voy a volver a una jaula." }, context: { fr: "Apres sa liberation du penitencier de Leonida", en: "After her release from Leonida Penitentiary", es: "Despues de su liberacion" } },
      { text: { fr: "Cette ville te donne tout et te prend tout.", en: "This city gives you everything and takes it all away.", es: "Esta ciudad te da todo y te lo quita todo." }, context: { fr: "En regardant l'horizon de Vice City", en: "Looking at the Vice City skyline", es: "Mirando el horizonte de Vice City" } },
    ],
    relations: [
      { characterId: 'jason', type: 'ALLY', description: { fr: 'Partenaire criminel et interet romantique potentiel', en: 'Criminal partner and potential romantic interest', es: 'Socio criminal e interes romantico potencial' } },
      { characterId: 'raul', type: 'MENTOR', description: { fr: 'Braqueur experimente qui enseigne a Lucia les ficelles du metier', en: 'Experienced bank robber who teaches Lucia the ropes', es: 'Atracador experimentado que ensena a Lucia' } },
    ],
    loreEntries: ['lucia-backstory', 'leonida-penitentiary', 'vice-city-districts'],
  },
  {
    id: 'jason',
    name: 'Jason Duval',
    role: { fr: 'Co-protagoniste', en: 'Co-Protagonist', es: 'Co-Protagonista' },
    faction: 'Independent',
    origin: { fr: 'Leonida Keys', en: 'Leonida Keys', es: 'Leonida Keys' },
    weapon: { fr: 'Fusil, Fusil a pompe', en: 'Rifle, Shotgun', es: 'Rifle, Escopeta' },
    affiliation: { fr: 'Independant', en: 'Independent', es: 'Independiente' },
    status: { fr: 'Actif', en: 'Active', es: 'Activo' },
    playable: true,
    type: 'PLAYABLE',
    colorTheme: 'cyan',
    bio: {
      fr: "Jason Duval est un ex-militaire qui a grandi autour d'arnaqueurs et de petits criminels dans les Keys de Leonida. Impulsif et dote d'un sens aigu de la rue, il travaille comme coursier pour des trafiquants de drogue dans les Keys avant de rencontrer Lucia. Ensemble, ils forment un duo redoutable et commencent a viser des cibles de plus en plus ambitieuses a travers Leonida.",
      en: "Jason Duval is an ex-military man who grew up around grifters and petty criminals in the Leonida Keys. Impulsive and street-smart, he works as a runner for drug traffickers in the Keys before meeting Lucia. Together, they form a formidable duo and begin targeting increasingly ambitious scores across Leonida.",
      es: "Jason Duval es un exmilitar que crecio entre estafadores y criminales menores en las Keys de Leonida. Impulsivo y astuto, trabaja como corredor para narcotraficantes antes de conocer a Lucia.",
    },
    signatureQuote: {
      fr: "Dans les Keys, soit tu nages, soit tu coules. Moi, je cours.",
      en: "In the Keys, you either swim or sink. Me? I run.",
      es: "En las Keys, o nadas o te hundes. Yo corro.",
    },
    strength: 8,
    speed: 6,
    magic: 5,
    weapons: [
      { name: { fr: 'Fusil', en: 'Rifle', es: 'Rifle' }, mastery: 4 },
      { name: { fr: 'Fusil a pompe', en: 'Shotgun', es: 'Escopeta' }, mastery: 3 },
    ],
    combatStyle: {
      fr: "Jason est un combattant agressif et direct. Son passe militaire lui confere une expertise avec les armes lourdes et une approche frontale du combat.",
      en: "Jason is an aggressive, head-on fighter. His military background gives him expertise with heavy firearms and a direct approach to combat.",
      es: "Jason es un combatiente agresivo y directo. Su pasado militar le da experiencia con armas pesadas.",
    },
    abilities: [],
    quotes: [
      { text: { fr: "Dans les Keys, soit tu nages, soit tu coules. Moi, je cours.", en: "In the Keys, you either swim or sink. Me? I run.", es: "En las Keys, o nadas o te hundes." }, context: { fr: "En parlant de son enfance dans les Keys", en: "Talking about growing up in the Keys", es: "Hablando de su infancia en las Keys" } },
    ],
    relations: [
      { characterId: 'lucia', type: 'ALLY', description: { fr: 'Partenaire criminelle et interet romantique potentiel', en: 'Criminal partner and potential romantic interest', es: 'Socia criminal e interes romantico potencial' } },
      { characterId: 'cal', type: 'ALLY', description: { fr: 'Ami de longue date, paranoiaque mais loyal', en: 'Long-time friend, paranoid but loyal', es: 'Amigo de toda la vida, paranoico pero leal' } },
      { characterId: 'brian', type: 'UNKNOWN', description: { fr: 'Proprietaire et trafiquant de drogue dans les Keys', en: 'Landlord and drug runner in the Keys', es: 'Propietario y traficante en las Keys' } },
    ],
    loreEntries: ['jason-military', 'keys-drug-trade', 'leonida-keys'],
  },
];

export const npcs = [
  { id: 'cal', name: 'Cal Hampton', faction: { fr: 'Independant', en: 'Independent', es: 'Independiente' }, role: { fr: 'Ami de Jason', en: "Jason's Friend", es: 'Amigo de Jason' }, lore: { fr: "Ami paranoiaque de Jason. Cal est constamment inquiet de se faire prendre mais reste un allie fidele malgre ses nerfs.", en: "Jason's paranoid friend. Cal is constantly worried about getting caught but remains a loyal ally despite his nerves.", es: "Amigo paranoico de Jason. Cal esta constantemente preocupado por ser atrapado pero sigue siendo un aliado fiel." }, status: 'DOCUMENTED' as const },
  { id: 'boobie', name: 'Boobie Ike', faction: { fr: 'Only Raw Records', en: 'Only Raw Records', es: 'Only Raw Records' }, role: { fr: "Magnat de Vice City", en: 'Vice City Mogul', es: 'Magnate de Vice City' }, lore: { fr: "Boobie Ike dirige un empire commercial a Vice City, avec des interets dans la musique, l'immobilier et des activites moins legales.", en: "Boobie Ike runs a business empire in Vice City, with interests in music, real estate, and less legal ventures.", es: "Boobie Ike dirige un imperio comercial en Vice City, con intereses en musica e inmobiliaria." }, status: 'DOCUMENTED' as const },
  { id: 'drequan', name: "Dre'Quan Priest", faction: { fr: 'Only Raw Records', en: 'Only Raw Records', es: 'Only Raw Records' }, role: { fr: 'Co-fondateur Only Raw Records', en: 'Co-founder Only Raw Records', es: 'Co-fundador Only Raw Records' }, lore: { fr: "Co-proprietaire de Only Raw Records avec Boobie Ike. Dre'Quan gere le cote creatif du label tout en naviguant dans le monde criminel de Vice City.", en: "Co-owner of Only Raw Records with Boobie Ike. Dre'Quan manages the creative side of the label while navigating Vice City's criminal world.", es: "Co-propietario de Only Raw Records con Boobie Ike." }, status: 'DOCUMENTED' as const },
  { id: 'real-dimez', name: 'Real Dimez', faction: { fr: 'Only Raw Records', en: 'Only Raw Records', es: 'Only Raw Records' }, role: { fr: 'Duo musical', en: 'Musical Duo', es: 'Duo musical' }, lore: { fr: "Duo musical compose de Bae-Luxe et Roxy, signe chez Only Raw Records. Ils representent la scene musicale vibrante de Vice City.", en: "Musical duo consisting of Bae-Luxe and Roxy, signed to Only Raw Records. They represent Vice City's vibrant music scene.", es: "Duo musical compuesto por Bae-Luxe y Roxy, firmados con Only Raw Records." }, status: 'DOCUMENTED' as const },
  { id: 'raul', name: 'Raul Bautista', faction: { fr: 'Independant', en: 'Independent', es: 'Independiente' }, role: { fr: 'Braqueur', en: 'Bank Robber', es: 'Atracador' }, lore: { fr: "Braqueur de banque experimente et chevronne. Raul est un vieux routier du crime organise qui apporte son expertise aux operations de Lucia et Jason.", en: "Seasoned and experienced bank robber. Raul is a veteran of organized crime who brings his expertise to Lucia and Jason's operations.", es: "Atracador de bancos experimentado. Raul es un veterano del crimen organizado." }, status: 'DOCUMENTED' as const },
  { id: 'brian', name: 'Brian Heder', faction: { fr: 'Trafiquants des Keys', en: 'Keys Traffickers', es: 'Traficantes de las Keys' }, role: { fr: 'Trafiquant de drogue', en: 'Drug Runner', es: 'Narcotraficante' }, lore: { fr: "Trafiquant de drogue de longue date et proprietaire de Jason dans les Keys. Brian controle une partie du trafic de drogue dans les iles et sert de point d'entree de Jason dans le monde criminel.", en: "Longtime drug runner and Jason's landlord in the Keys. Brian controls part of the drug traffic in the islands and serves as Jason's entry point into the criminal world.", es: "Narcotraficante de larga data y propietario de Jason en las Keys." }, status: 'DOCUMENTED' as const },
];

export type NPC = typeof npcs[number];
