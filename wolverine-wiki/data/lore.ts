import type { Translations } from '@/wolverine-wiki/context/I18nContext';

export interface LoreEntry {
  id: string;
  title: string;
  category: 'CHARACTER' | 'LOCATION' | 'FACTION' | 'ITEM' | 'EVENT';
  excerpt: Translations;
  content: Translations;
  relatedEntries: string[];
  mentions: string[];
  lastUpdated: string;
  readingTime: string;
  image?: string;
}

export const loreEntries: LoreEntry[] = [
  // CHARACTERS
  {
    id: 'logan',
    title: 'Logan / Wolverine',
    category: 'CHARACTER',
    image: '/wolverine/char-logan.jpg',
    excerpt: {
      fr: "Mutant doté d'un facteur guérisseur et d'un squelette d'adamantium. Protagoniste du jeu.",
      en: "Mutant with a healing factor and adamantium skeleton. The game's protagonist.",
    },
    content: {
      fr: "Né James Howlett au XIXe siècle au Canada, Logan est un mutant dont le facteur guérisseur lui confère une longévité extraordinaire. Cobaye du programme Weapon X, son squelette a été recouvert d'adamantium, le métal le plus résistant de la Terre. Ses souvenirs ont été manipulés à de multiples reprises, le laissant avec un passé fragmenté qu'il tente de reconstituer.\n\nMembre des X-Men, Logan est un combattant féroce dont la Rage du Berserker peut le transformer en une force de destruction incontrôlable. Malgré sa nature brutale, il se bat pour protéger ceux qui ne peuvent pas se défendre.",
      en: "Born James Howlett in 19th century Canada, Logan is a mutant whose healing factor grants him extraordinary longevity. A test subject of the Weapon X program, his skeleton was bonded with adamantium, Earth's most resistant metal. His memories have been manipulated multiple times, leaving him with a fragmented past he tries to piece together.\n\nAn X-Men member, Logan is a fierce combatant whose Berserker Rage can transform him into an uncontrollable force of destruction. Despite his brutal nature, he fights to protect those who cannot defend themselves.",
    },
    relatedEntries: ['weapon-x', 'adamantium', 'x-men', 'berserker-rage'],
    mentions: ['chapter-1', 'chapter-2', 'chapter-3', 'chapter-4', 'chapter-5'],
    lastUpdated: '2026-03-10',
    readingTime: '4 min',
  },
  {
    id: 'mystique-lore',
    title: 'Mystique',
    category: 'CHARACTER',
    image: '/wolverine/char-mystique.jpg',
    excerpt: {
      fr: 'Métamorphe mutante, espionne et manipulatrice. Antagoniste ambiguë.',
      en: 'Mutant shape-shifter, spy and manipulator. Ambiguous antagonist.',
    },
    content: {
      fr: "Raven Darkhölme, alias Mystique, est l'une des métamorphes les plus douées de l'univers Marvel. Sa capacité à reproduire parfaitement l'apparence de n'importe qui en fait une espionne sans égale. Dans le jeu, elle opère dans l'ombre de Madripoor, tirant les ficelles d'un réseau criminel tout en poursuivant ses propres objectifs concernant Weapon X.",
      en: "Raven Darkhölme, a.k.a. Mystique, is one of the most gifted shape-shifters in the Marvel universe. Her ability to perfectly replicate anyone's appearance makes her an unparalleled spy. In the game, she operates in the shadows of Madripoor, pulling strings of a criminal network while pursuing her own objectives regarding Weapon X.",
    },
    relatedEntries: ['logan', 'madripoor', 'brotherhood'],
    mentions: ['chapter-2'],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },
  {
    id: 'omega-red-lore',
    title: 'Omega Red',
    category: 'CHARACTER',
    image: '/wolverine/char-omega-red.jpg',
    excerpt: {
      fr: "Super-soldat soviétique aux tentacules de carbonadium. L'un des ennemis les plus mortels de Wolverine.",
      en: "Soviet super-soldier with carbonadium tentacles. One of Wolverine's deadliest enemies.",
    },
    content: {
      fr: "Arkady Rossovich était un tueur en série russe sélectionné pour le programme de super-soldat soviétique. Doté de tentacules de carbonadium capables de drainer la force vitale de ses victimes, il a été placé en stase pendant des décennies avant d'être réactivé par le nouveau programme Weapon X.\n\nSon corps a besoin d'un apport constant de force vitale pour fonctionner, ce qui en fait un prédateur insatiable. Ses tentacules sont pratiquement indestructibles et peuvent neutraliser même le facteur guérisseur de Wolverine.",
      en: "Arkady Rossovich was a Russian serial killer selected for the Soviet super-soldier program. Given carbonadium tentacles capable of draining the life force of his victims, he was placed in stasis for decades before being reactivated by the new Weapon X program.\n\nHis body needs a constant supply of life force to function, making him an insatiable predator. His tentacles are virtually indestructible and can even neutralize Wolverine's healing factor.",
    },
    relatedEntries: ['weapon-x', 'carbonadium', 'logan'],
    mentions: ['chapter-5'],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },

  // FACTIONS
  {
    id: 'x-men',
    title: 'Les X-Men',
    category: 'FACTION',
    image: '/wolverine/faction-x-men.jpg',
    excerpt: {
      fr: "Équipe de mutants fondée par Charles Xavier pour protéger l'humanité.",
      en: 'Mutant team founded by Charles Xavier to protect humanity.',
    },
    content: {
      fr: "Les X-Men sont une équipe de mutants fondée par le Professeur Charles Xavier dans le but de protéger un monde qui les craint et les hait. Logan est l'un de leurs membres les plus expérimentés, bien que sa nature solitaire le pousse souvent à opérer seul.\n\nBasés au manoir Xavier à Westchester, les X-Men combinent puissance mutante et idéaux de coexistence pacifique. Membres notables : Cyclops, Jean Grey, Storm, Beast, Nightcrawler.",
      en: "The X-Men are a mutant team founded by Professor Charles Xavier to protect a world that fears and hates them. Logan is one of their most experienced members, though his solitary nature often drives him to operate alone.\n\nBased at Xavier Mansion in Westchester, the X-Men combine mutant power with ideals of peaceful coexistence. Notable members: Cyclops, Jean Grey, Storm, Beast, Nightcrawler.",
    },
    relatedEntries: ['logan', 'westchester-lore'],
    mentions: ['chapter-3'],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },
  {
    id: 'weapon-x',
    title: 'Programme Weapon X',
    category: 'FACTION',
    image: '/wolverine/faction-weapon-x.jpg',
    excerpt: {
      fr: "Programme militaire secret ayant transformé Logan en arme vivante.",
      en: 'Secret military program that transformed Logan into a living weapon.',
    },
    content: {
      fr: "Le programme Weapon X (Arme X) est un projet militaire ultra-secret visant à créer des super-soldats à partir de mutants. Logan — désigné 'Weapon X' (Arme 10) — est le sujet le plus réussi du programme. Son squelette a été recouvert d'adamantium dans les installations d'Alkali Lake, un processus si douloureux qu'il aurait tué quiconque dépourvu d'un facteur guérisseur.\n\nAprès l'évasion de Logan, le programme a été officiellement fermé, mais il a été secrètement relancé à plusieurs reprises. Dans le jeu, une nouvelle itération du programme est le fil conducteur de l'intrigue, avec des expériences encore plus radicales sur des sujets mutants.",
      en: "The Weapon X program is an ultra-secret military project aimed at creating super-soldiers from mutants. Logan — designated 'Weapon X' (Weapon 10) — is the program's most successful subject. His skeleton was bonded with adamantium at the Alkali Lake facility, a process so painful it would have killed anyone without a healing factor.\n\nAfter Logan's escape, the program was officially shut down, but has been secretly relaunched multiple times. In the game, a new iteration of the program is the central thread of the plot, with even more radical experiments on mutant subjects.",
    },
    relatedEntries: ['logan', 'adamantium', 'alkali-lake-lore', 'omega-red-lore'],
    mentions: ['chapter-1', 'chapter-2', 'chapter-5'],
    lastUpdated: '2026-03-10',
    readingTime: '4 min',
  },
  {
    id: 'brotherhood',
    title: 'Brotherhood of Mutants',
    category: 'FACTION',
    image: '/wolverine/faction-brotherhood.jpg',
    excerpt: {
      fr: "Groupe de mutants radicaux prônant la supériorité mutante sur les humains.",
      en: 'Radical mutant group advocating mutant superiority over humans.',
    },
    content: {
      fr: "La Confrérie des Mauvais Mutants, fondée par Magnéto, est un groupe de mutants qui croient en la supériorité de leur espèce. Contrairement aux X-Men, ils ne cherchent pas la coexistence mais la domination. Mystique a dirigé plusieurs incarnations de la Confrérie, l'utilisant pour ses propres fins.",
      en: "The Brotherhood of Evil Mutants, founded by Magneto, is a group of mutants who believe in the superiority of their species. Unlike the X-Men, they don't seek coexistence but dominance. Mystique has led several incarnations of the Brotherhood, using it for her own ends.",
    },
    relatedEntries: ['mystique-lore'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'reavers-faction',
    title: 'Les Reavers',
    category: 'FACTION',
    image: '/wolverine/char-reavers.jpg',
    excerpt: {
      fr: "Mercenaires cyborgs anti-mutants menés par Donald Pierce.",
      en: 'Anti-mutant cyborg mercenaries led by Donald Pierce.',
    },
    content: {
      fr: "Les Reavers sont un groupe de mercenaires cyborgs voués à l'éradication des mutants. Menés par Donald Pierce du Hellfire Club, chaque membre a été équipé d'implants cybernétiques de pointe : bras mécaniques, systèmes d'armes intégrés, armure renforcée et systèmes de visée améliorés.\n\nLeur haine des mutants est personnelle — beaucoup d'entre eux ont été blessés ou mutilés par des mutants, et leurs implants cybernétiques sont à la fois une prothèse et une arme de vengeance.",
      en: "The Reavers are a group of cyborg mercenaries dedicated to mutant eradication. Led by Donald Pierce of the Hellfire Club, each member has been equipped with cutting-edge cybernetic implants: mechanical arms, integrated weapon systems, reinforced armor, and enhanced targeting systems.\n\nTheir hatred of mutants is personal — many of them were injured or mutilated by mutants, and their cybernetic implants serve as both prosthetic and weapon of vengeance.",
    },
    relatedEntries: ['hellfire-club', 'logan'],
    mentions: ['chapter-3'],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },

  // LOCATIONS
  {
    id: 'madripoor',
    title: 'Madripoor',
    category: 'LOCATION',
    image: '/wolverine/region-madripoor.jpg',
    excerpt: {
      fr: "Île-nation criminelle divisée entre Hightown et Lowtown.",
      en: 'Criminal island nation divided between Hightown and Lowtown.',
    },
    content: {
      fr: "Madripoor est une île-nation du Pacifique Sud, paradis des criminels et des mercenaires. Divisée entre la luxueuse Hightown et la sordide Lowtown, elle a été un terrain d'opération favori de Logan, qui y opérait sous le pseudonyme de 'Patch'.\n\nLa région est un labyrinthe de bars enfumés, de casinos, de marchés noirs et de combats clandestins. C'est ici que commence l'aventure du jeu.",
      en: "Madripoor is a South Pacific island nation, a paradise for criminals and mercenaries. Divided between luxurious Hightown and squalid Lowtown, it has been a favorite stomping ground for Logan, who operated there under the alias 'Patch'.\n\nThe region is a labyrinth of smoky bars, casinos, black markets, and underground fights. This is where the game's adventure begins.",
    },
    relatedEntries: ['logan', 'mystique-lore'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'alkali-lake-lore',
    title: 'Alkali Lake',
    category: 'LOCATION',
    image: '/wolverine/region-alkali-lake.jpg',
    excerpt: {
      fr: "Site originel du programme Weapon X dans les Rocheuses canadiennes.",
      en: 'Original Weapon X program site in the Canadian Rockies.',
    },
    content: {
      fr: "Alkali Lake est l'emplacement de l'installation militaire souterraine où Logan a subi le processus d'implantation de l'adamantium. Cachée sous un barrage dans les Rocheuses canadiennes, la base est censée être abandonnée mais recèle encore de nombreux secrets — et des cauchemars que Logan préférerait oublier.",
      en: "Alkali Lake is the location of the underground military facility where Logan underwent the adamantium bonding process. Hidden beneath a dam in the Canadian Rockies, the base is supposed to be abandoned but still holds many secrets — and nightmares Logan would rather forget.",
    },
    relatedEntries: ['weapon-x', 'adamantium', 'logan'],
    mentions: ['chapter-2'],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'westchester-lore',
    title: 'Westchester / Manoir Xavier',
    category: 'LOCATION',
    image: '/wolverine/region-westchester.jpg',
    excerpt: {
      fr: "Quartier général des X-Men et école pour jeunes mutants.",
      en: 'X-Men headquarters and school for young mutants.',
    },
    content: {
      fr: "Le manoir Xavier à Westchester, New York, est le quartier général des X-Men et une école pour jeunes mutants. Sous le manoir victorien se cachent la Salle des Dangers, le Cerebro et le hangar du Blackbird. Pour Logan, c'est le lieu le plus proche d'un foyer qu'il ait jamais eu.",
      en: "Xavier Mansion in Westchester, New York, is X-Men headquarters and a school for young mutants. Beneath the Victorian mansion lie the Danger Room, Cerebro, and the Blackbird hangar. For Logan, it's the closest thing to a home he's ever had.",
    },
    relatedEntries: ['x-men', 'logan'],
    mentions: ['chapter-3'],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },

  // ITEMS / MECHANICS
  {
    id: 'adamantium',
    title: 'Adamantium',
    category: 'ITEM',
    image: '/wolverine/item-adamantium.jpg',
    excerpt: {
      fr: "L'alliage métallique le plus résistant de la Terre, fusionné au squelette de Logan.",
      en: "Earth's most resistant metal alloy, bonded to Logan's skeleton.",
    },
    content: {
      fr: "L'adamantium est un alliage métallique artificiel pratiquement indestructible. Une fois solidifié, il ne peut être ni fondu, ni brisé, ni altéré par aucun moyen conventionnel. Le squelette de Logan a été entièrement recouvert d'adamantium lors du processus Weapon X, rendant ses os incassables et ses griffes capables de trancher pratiquement n'importe quel matériau.\n\nL'adamantium est extrêmement rare et coûteux à produire. Le processus de fusion avec un squelette vivant est extraordinairement douloureux et mortel sans facteur guérisseur.",
      en: "Adamantium is a virtually indestructible artificial metal alloy. Once solidified, it cannot be melted, broken, or altered by any conventional means. Logan's skeleton was entirely coated in adamantium during the Weapon X process, making his bones unbreakable and his claws capable of cutting through virtually any material.\n\nAdamantium is extremely rare and expensive to produce. The process of bonding it to a living skeleton is extraordinarily painful and lethal without a healing factor.",
    },
    relatedEntries: ['weapon-x', 'logan', 'carbonadium'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },
  {
    id: 'carbonadium',
    title: 'Carbonadium',
    category: 'ITEM',
    image: '/wolverine/item-carbonadium.jpg',
    excerpt: {
      fr: "Métal radioactif soviétique, version inférieure de l'adamantium. Arme d'Omega Red.",
      en: "Radioactive Soviet metal, inferior version of adamantium. Omega Red's weapon.",
    },
    content: {
      fr: "Le carbonadium est un alliage métallique développé par l'Union soviétique comme tentative de reproduire l'adamantium. Bien que moins résistant, il possède une propriété unique : il émet des radiations qui interfèrent avec les facteurs guérisseurs et drainent la force vitale. Les tentacules d'Omega Red en sont constitués.",
      en: "Carbonadium is a metal alloy developed by the Soviet Union as an attempt to replicate adamantium. While less resistant, it has a unique property: it emits radiation that interferes with healing factors and drains life force. Omega Red's tentacles are made of it.",
    },
    relatedEntries: ['omega-red-lore', 'adamantium'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'berserker-rage',
    title: 'Rage du Berserker',
    category: 'ITEM',
    excerpt: {
      fr: "État de rage incontrôlable où Logan perd toute retenue et devient une force de destruction pure.",
      en: 'Uncontrollable rage state where Logan loses all restraint and becomes a pure force of destruction.',
    },
    content: {
      fr: "La Rage du Berserker est un état psychologique où les instincts animaux de Logan prennent le dessus sur sa raison. Dans cet état, sa vitesse et sa force augmentent considérablement, mais il perd la capacité de distinguer ami et ennemi. C'est à la fois sa plus grande arme et sa plus grande faiblesse.\n\nDans le jeu, la Rage du Berserker est une mécanique de combat qui augmente les dégâts et la vitesse, mais au prix du contrôle. Maîtriser cette rage plutôt que s'y abandonner est un thème central du récit.",
      en: "Berserker Rage is a psychological state where Logan's animal instincts overpower his reason. In this state, his speed and strength increase dramatically, but he loses the ability to distinguish friend from foe. It is both his greatest weapon and his greatest weakness.\n\nIn the game, Berserker Rage is a combat mechanic that boosts damage and speed, but at the cost of control. Mastering this rage rather than succumbing to it is a central narrative theme.",
    },
    relatedEntries: ['logan'],
    mentions: ['chapter-4', 'chapter-5'],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'hellfire-club',
    title: 'Hellfire Club',
    category: 'FACTION',
    excerpt: {
      fr: "Société secrète de l'élite, dont Donald Pierce est membre. Finance les Reavers.",
      en: "Secret society of the elite, of which Donald Pierce is a member. Finances the Reavers.",
    },
    content: {
      fr: "Le Hellfire Club est une société secrète composée des individus les plus riches et les plus puissants du monde. Derrière la façade d'un club social exclusif se cache un réseau de manipulation politique et de conspiration. Donald Pierce, leader des Reavers, est un membre influent du Cercle Intérieur.",
      en: "The Hellfire Club is a secret society composed of the world's wealthiest and most powerful individuals. Behind the facade of an exclusive social club lies a network of political manipulation and conspiracy. Donald Pierce, leader of the Reavers, is an influential member of the Inner Circle.",
    },
    relatedEntries: ['reavers-faction'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
];
