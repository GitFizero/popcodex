import type { Translations } from '@/fable-wiki/context/I18nContext';

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
  {
    id: 'heroes-guild',
    title: "The Heroes' Guild",
    category: 'FACTION',
    image: '/fable/region-bowerstone.jpg',
    excerpt: {
      fr: "L'institution legendaire qui forme les heros d'Albion depuis des siecles.",
      en: "The legendary institution that has trained Albion's heroes for centuries.",
    },
    content: {
      fr: "La Guilde des Heros est l'institution la plus respectee d'Albion. Fondee a l'epoque de l'Ancien Royaume, elle a forme des generations de heros capables de maitriser la Force, l'Adresse et la Volonte. Situee au coeur de Bowerstone, la Guilde attire des aspirants de tout le royaume.\n\nAu fil des siecles, la Guilde a connu des periodes de gloire et de declin. Son influence a diminue avec le temps, mais l'arrivee du Heros marque un possible renouveau. Les archives de la Guilde contiennent des connaissances inestimables sur l'Ancien Royaume et ses secrets.",
      en: "The Heroes' Guild is the most respected institution in Albion. Founded during the era of the Old Kingdom, it has trained generations of heroes capable of mastering Strength, Skill, and Will. Located in the heart of Bowerstone, the Guild attracts aspirants from across the realm.\n\nOver the centuries, the Guild has known periods of glory and decline. Its influence has waned over time, but the Hero's arrival marks a potential renewal. The Guild's archives contain invaluable knowledge about the Old Kingdom and its secrets.",
    },
    relatedEntries: ['old-kingdom', 'bowerstone', 'the-will', 'the-strength', 'the-skill'],
    mentions: ['chapter-3'],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },
  {
    id: 'old-kingdom',
    title: 'The Old Kingdom',
    category: 'EVENT',
    image: '/fable/region-garden.jpg',
    excerpt: {
      fr: "L'ancienne civilisation qui a autrefois gouverne Albion avec une magie incommensurable.",
      en: 'The ancient civilization that once ruled Albion with immeasurable magic.',
    },
    content: {
      fr: "L'Ancien Royaume etait une civilisation avancee qui regnait sur Albion il y a des millenaires. Ses habitants maitrisaient une magie puissante, bien au-dela de ce que les heros modernes peuvent accomplir. Les ruines de l'Ancien Royaume parsement encore Albion — des temples oublies, des artefacts mysterieux et des portails dimensionnels.\n\nLa chute de l'Ancien Royaume reste entouree de mystere. Certains disent qu'ils ont ete detruits par leur propre arrogance, d'autres que quelque chose de terrible a ete libere. L'Etranger semble posseder une magie liee a cette ere ancienne.",
      en: "The Old Kingdom was an advanced civilization that ruled Albion millennia ago. Its people wielded powerful magic, far beyond what modern heroes can achieve. Old Kingdom ruins still dot Albion — forgotten temples, mysterious artifacts, and dimensional portals.\n\nThe fall of the Old Kingdom remains shrouded in mystery. Some say they were destroyed by their own arrogance, others that something terrible was unleashed. The Stranger appears to wield magic tied to this ancient era.",
    },
    relatedEntries: ['heroes-guild', 'fairfax-castle'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },
  {
    id: 'albion-magic',
    title: "Albion's Magic System",
    category: 'ITEM',
    excerpt: {
      fr: "Le systeme de magie d'Albion repose sur trois piliers : Force, Adresse et Volonte.",
      en: "Albion's magic system rests on three pillars: Strength, Skill, and Will.",
    },
    content: {
      fr: "La magie d'Albion est divisee en trois disciplines fondamentales, chacune representant un aspect different du pouvoir heroique. La Force (Strength) gouverne le combat physique de melee. L'Adresse (Skill) maitrise le combat a distance et la precision. La Volonte (Will) canalise la magie pure — boules de feu, eclairs, guerison et bien plus.\n\nLe systeme de style-weaving de Fable permet aux joueurs de combiner ces trois disciplines de maniere fluide en combat, creant des enchainements uniques et personnalises.",
      en: "Albion's magic is divided into three fundamental disciplines, each representing a different aspect of heroic power. Strength governs physical melee combat. Skill masters ranged combat and precision. Will channels pure magic — fireballs, lightning, healing, and more.\n\nFable's style-weaving system allows players to seamlessly combine these three disciplines in combat, creating unique and personalized chains.",
    },
    relatedEntries: ['the-will', 'the-strength', 'the-skill', 'style-weaving'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },
  {
    id: 'balverines',
    title: 'Balverines',
    category: 'ITEM',
    image: '/fable/creature-cockatrice.jpg',
    excerpt: {
      fr: "Les terrifiants loups-garous d'Albion, creatures de cauchemar hantant les forets.",
      en: "Albion's terrifying werewolves, nightmare creatures haunting the forests.",
    },
    content: {
      fr: "Les Balverines sont parmi les creatures les plus redoutees d'Albion. Ces loups-garous monstrueux hantent les forets des Terres Sauvages, chassant en meutes sous la lumiere de la lune. On dit que leur morsure peut transformer n'importe qui en l'un des leurs.\n\nLes origines des Balverines remontent a l'Ancien Royaume. Selon les legendes, ils seraient le resultat d'une experience magique qui a mal tourne. Les Balverines Blanches sont les plus rares et les plus dangereuses, capables de commander les meutes entieres.",
      en: "Balverines are among Albion's most feared creatures. These monstrous werewolves haunt the forests of the Wilds, hunting in packs under moonlight. It is said their bite can transform anyone into one of their kind.\n\nThe origins of Balverines trace back to the Old Kingdom. According to legends, they are the result of a magical experiment gone wrong. White Balverines are the rarest and most dangerous, capable of commanding entire packs.",
    },
    relatedEntries: ['the-wilds', 'old-kingdom'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'hobbes',
    title: 'Hobbes',
    category: 'ITEM',
    image: '/fable/creature-hobbe.jpg',
    excerpt: {
      fr: "Creatures gobelines vivant dans des terriers souterrains a travers Albion.",
      en: 'Goblin-like creatures dwelling in underground burrows across Albion.',
    },
    content: {
      fr: "Les Hobbes sont des creatures gobelines qui infestent les regions sauvages d'Albion. Vivant dans des reseaux de terriers souterrains complexes, ils sont connus pour kidnapper les enfants — la legende dit que les Hobbes etaient autrefois des enfants eux-memes, transformes par une magie ancienne et cruelle.\n\nBien que faibles individuellement, les Hobbes sont dangereux en groupe. Ils utilisent des armes rudimentaires et des pieges, et leurs terriers sont remplis de tresor vole.",
      en: "Hobbes are goblin-like creatures that infest the wild regions of Albion. Living in complex underground burrow networks, they are known for kidnapping children — legend says Hobbes were once children themselves, transformed by ancient and cruel magic.\n\nThough weak individually, Hobbes are dangerous in groups. They use crude weapons and traps, and their burrows are filled with stolen treasure.",
    },
    relatedEntries: ['the-wilds', 'old-kingdom'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'fairfax-castle',
    title: 'Fairfax Castle Legends',
    category: 'LOCATION',
    image: '/fable/region-garden.jpg',
    excerpt: {
      fr: "L'ancienne forteresse recelant des secrets datant de l'Ancien Royaume.",
      en: 'The ancient fortress holding secrets dating back to the Old Kingdom.',
    },
    content: {
      fr: "Le Chateau de Fairfax se dresse comme un monument au pouvoir et a l'ambition d'Albion. Construit sur les fondations d'une structure de l'Ancien Royaume, le chateau renferme des passages secrets et des artefacts d'une puissance incommensurable. Les legendes racontent qu'un portail vers l'Ancien Royaume se cache quelque part dans ses profondeurs.\n\nLe chateau a change de mains de nombreuses fois au cours de l'histoire, chaque seigneur ajoutant ses propres secrets aux murs deja charges de mystere.",
      en: "Fairfax Castle stands as a monument to power and ambition in Albion. Built on the foundations of an Old Kingdom structure, the castle holds secret passages and artifacts of immeasurable power. Legends say a portal to the Old Kingdom hides somewhere in its depths.\n\nThe castle has changed hands many times throughout history, each lord adding their own secrets to walls already heavy with mystery.",
    },
    relatedEntries: ['old-kingdom', 'bowerstone'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'the-will',
    title: 'The Will (Magic System)',
    category: 'ITEM',
    excerpt: {
      fr: "La discipline magique permettant de canaliser des sorts devastateurs.",
      en: 'The magical discipline allowing devastating spell channeling.',
    },
    content: {
      fr: "La Volonte (Will) est l'une des trois disciplines heroiques d'Albion. Elle permet de canaliser la magie pure a travers le corps du heros. Les utilisateurs de Volonte peuvent lancer des boules de feu, des eclairs, creer des boucliers magiques, guerir leurs blessures et bien plus encore.\n\nLa maitrise de la Volonte requiert une concentration intense et une connexion profonde avec les flux magiques d'Albion. Les heros les plus puissants de l'histoire etaient souvent des maitres de la Volonte.",
      en: "Will is one of Albion's three heroic disciplines. It allows channeling pure magic through the hero's body. Will users can cast fireballs, lightning, create magical shields, heal their wounds, and much more.\n\nMastering Will requires intense concentration and a deep connection with Albion's magical flows. The most powerful heroes in history were often Will masters.",
    },
    relatedEntries: ['heroes-guild', 'albion-magic', 'the-strength', 'the-skill'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'the-strength',
    title: 'The Strength (Melee)',
    category: 'ITEM',
    excerpt: {
      fr: "La discipline physique de melee, pilier de la puissance brute.",
      en: 'The physical melee discipline, pillar of brute power.',
    },
    content: {
      fr: "La Force (Strength) est la discipline du combat physique de melee. Elle englobe le maniement des epees, haches, marteaux et autres armes de melee. Les heros specialises en Force sont des combattants de premiere ligne, capables d'infliger des degats devastateurs et de resister aux coups les plus violents.\n\nLa Force influence egalement les capacites physiques du heros — sa resistance, sa puissance de frappe et sa capacite a porter des armures lourdes.",
      en: "Strength is the discipline of physical melee combat. It encompasses the wielding of swords, axes, hammers, and other melee weapons. Heroes specialized in Strength are frontline fighters, capable of dealing devastating damage and withstanding the most violent blows.\n\nStrength also influences the hero's physical capabilities — their resilience, striking power, and ability to wear heavy armor.",
    },
    relatedEntries: ['heroes-guild', 'albion-magic', 'the-will', 'the-skill'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'the-skill',
    title: 'The Skill (Ranged)',
    category: 'ITEM',
    excerpt: {
      fr: "La discipline de combat a distance, maitrisant arc et precision.",
      en: 'The ranged combat discipline, mastering bow and precision.',
    },
    content: {
      fr: "L'Adresse (Skill) est la discipline du combat a distance et de la precision. Les heros qui maitrisent l'Adresse sont des tireurs d'elite, capables de toucher des cibles a grande distance avec une precision mortelle. L'arc est l'arme emblematique de cette discipline.\n\nL'Adresse influence egalement la vitesse, l'esquive et la furtivite du heros. C'est la discipline des heros qui preferent la ruse a la force brute.",
      en: "Skill is the discipline of ranged combat and precision. Heroes who master Skill are expert marksmen, capable of hitting targets at great distance with deadly accuracy. The bow is the iconic weapon of this discipline.\n\nSkill also influences the hero's speed, evasion, and stealth. It is the discipline of heroes who prefer cunning over brute force.",
    },
    relatedEntries: ['heroes-guild', 'albion-magic', 'the-will', 'the-strength'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'style-weaving',
    title: 'Style-Weaving Combat',
    category: 'ITEM',
    excerpt: {
      fr: "Le systeme de combat innovant permettant de combiner Force, Adresse et Volonte.",
      en: 'The innovative combat system allowing Strength, Skill, and Will combination.',
    },
    content: {
      fr: "Le Style-Weaving est le systeme de combat signature de Fable. Il permet aux joueurs de basculer fluidement entre les trois disciplines heroiques — Force, Adresse et Volonte — en plein combat, sans interruption ni menu.\n\nCe systeme encourage la creativite : un joueur peut commencer un enchainement a l'epee, enchainer avec un tir a l'arc puis terminer avec un sort de foudre, le tout en une seule sequence fluide. Le Style-Weaving recompense la maitrise des trois piliers et offre des combos uniques impossibles avec une seule discipline.",
      en: "Style-Weaving is Fable's signature combat system. It allows players to fluidly switch between the three heroic disciplines — Strength, Skill, and Will — mid-combat, without interruption or menus.\n\nThis system encourages creativity: a player can start a combo with a sword, follow with a bow shot, then finish with a lightning spell, all in one fluid sequence. Style-Weaving rewards mastery of all three pillars and offers unique combos impossible with a single discipline.",
    },
    relatedEntries: ['albion-magic', 'the-will', 'the-strength', 'the-skill'],
    mentions: [],
    lastUpdated: '2026-03-10',
    readingTime: '3 min',
  },
  {
    id: 'briar-hill-lore',
    title: 'Briar Hill',
    category: 'LOCATION',
    image: '/fable/region-hamlet.jpg',
    excerpt: {
      fr: "Le paisible village natal du Heros, maintenant petrifie.",
      en: "The Hero's peaceful home village, now petrified.",
    },
    content: {
      fr: "Briar Hill etait un petit village idyllique d'Albion, connu pour ses collines verdoyantes et sa communaute chaleureuse. Le Heros y a grandi, decouvrant ses premiers pouvoirs sous l'oeil bienveillant de Grand-mere.\n\nLa petrification de Briar Hill par l'Etranger est l'evenement declencheur de toute l'histoire. Le village, fige dans le temps, reste un lieu de memoire et de motivation pour le Heros, un rappel constant de ce qui doit etre sauve.",
      en: "Briar Hill was a small idyllic village in Albion, known for its green hills and warm community. The Hero grew up here, discovering their first powers under Grandmother's watchful eye.\n\nThe petrification of Briar Hill by the Stranger is the inciting event of the entire story. The village, frozen in time, remains a place of memory and motivation for the Hero, a constant reminder of what must be saved.",
    },
    relatedEntries: ['heroes-guild', 'old-kingdom'],
    mentions: ['chapter-1', 'chapter-2'],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
  {
    id: 'bowerstone-lore',
    title: 'Bowerstone',
    category: 'LOCATION',
    image: '/fable/region-bowerstone.jpg',
    excerpt: {
      fr: "La capitale d'Albion, centre du commerce et de la Guilde des Heros.",
      en: "Albion's capital, hub of commerce and the Heroes' Guild.",
    },
    content: {
      fr: "Bowerstone est la plus grande ville d'Albion et sa capitale de facto. La ville est divisee en plusieurs quartiers, chacun avec son propre caractere. Le quartier du marche est anime et colore, tandis que les abords de la Guilde des Heros sont empreints de solennite.\n\nC'est a Bowerstone que le Heros commence veritablement son entrainement et sa quete. La ville sert de plaque tournante pour explorer le reste d'Albion.",
      en: "Bowerstone is Albion's largest city and its de facto capital. The city is divided into several districts, each with its own character. The market district is lively and colorful, while the surroundings of the Heroes' Guild are steeped in solemnity.\n\nIt is in Bowerstone that the Hero truly begins their training and quest. The city serves as a hub for exploring the rest of Albion.",
    },
    relatedEntries: ['heroes-guild'],
    mentions: ['chapter-3'],
    lastUpdated: '2026-03-10',
    readingTime: '2 min',
  },
];
