import type { Translations } from '@/fable-wiki/context/I18nContext';

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
      fr: 'Briar Hill',
      en: 'Briar Hill',
    },
    synopsis: {
      fr: "L'histoire commence dans le paisible village de Briar Hill, ou le Heros grandit entoure d'amour et de simplicite. Des les premiers jours, des signes de pouvoirs heroiques se manifestent — des etincelles de magie, une force inexplicable, une intuition surnaturelle. Grand-mere, figure maternelle bienveillante, observe ces dons avec un melange de fierte et d'inquietude, sachant que le destin du Heros est lie a quelque chose de bien plus grand que la vie paisible de Briar Hill.",
      en: "The story begins in the peaceful village of Briar Hill, where the Hero grows up surrounded by love and simplicity. From the earliest days, signs of heroic powers manifest — sparks of magic, inexplicable strength, supernatural intuition. Grandmother, a loving maternal figure, observes these gifts with a mix of pride and worry, knowing the Hero's destiny is tied to something far greater than Briar Hill's peaceful life.",
    },
    keyEvents: [
      { title: { fr: 'Eveil des Pouvoirs', en: 'Power Awakening' }, description: { fr: "Le Heros decouvre ses premiers pouvoirs heroiques durant l'enfance.", en: 'The Hero discovers their first heroic powers during childhood.' } },
      { title: { fr: 'Les Enseignements de Grand-mere', en: "Grandmother's Teachings" }, description: { fr: "Grand-mere initie le Heros aux legendes de la Guilde des Heros.", en: "Grandmother introduces the Hero to the legends of the Heroes' Guild." } },
    ],
    keyCharacters: ['hero', 'grandmother'],
    pullQuote: { fr: '"Chaque heros commence par un premier pas hors de chez lui."', en: '"Every hero begins with a first step away from home."' },
  },
  {
    id: 'chapter-2',
    number: 2,
    numeral: 'II',
    title: {
      fr: 'La Petrification',
      en: 'The Petrification',
    },
    synopsis: {
      fr: "Un mysterieux etranger arrive a Briar Hill avec une magie terrible et ancienne. Sans avertissement, il transforme tout le village et ses habitants en pierre. Grand-mere, dans ses derniers instants avant la petrification, murmure au Heros des mots sur la Guilde des Heros et ses pouvoirs caches. Le Heros, seul survivant de la catastrophe, jure de comprendre ce qui s'est passe et de sauver les siens.",
      en: "A mysterious stranger arrives in Briar Hill wielding terrible, ancient magic. Without warning, he turns the entire village and its inhabitants to stone. Grandmother, in her last moments before petrification, whispers to the Hero about the Heroes' Guild and their hidden powers. The Hero, sole survivor of the catastrophe, vows to understand what happened and save their people.",
    },
    keyEvents: [
      { title: { fr: "L'Arrivee de l'Etranger", en: "The Stranger's Arrival" }, description: { fr: "L'Etranger apparait a Briar Hill et declenche la petrification.", en: 'The Stranger appears in Briar Hill and triggers the petrification.' } },
      { title: { fr: 'Les Derniers Mots', en: 'The Last Words' }, description: { fr: "Grand-mere murmure ses derniers mots au Heros avant d'etre transformee en pierre.", en: 'Grandmother whispers her last words to the Hero before being turned to stone.' } },
    ],
    keyCharacters: ['hero', 'stranger', 'grandmother'],
    pullQuote: { fr: '"La pierre ne ment jamais..."', en: '"Stone never lies..."' },
  },
  {
    id: 'chapter-3',
    number: 3,
    numeral: 'III',
    title: {
      fr: 'La Guilde des Heros',
      en: "The Heroes' Guild",
    },
    synopsis: {
      fr: "Guide par les derniers mots de Grand-mere, le Heros entreprend le voyage vers Bowerstone et la legendaire Guilde des Heros. En chemin, il rencontre Humphry, un ancien heros force de sortir de sa retraite. Ensemble, ils rejoignent la Guilde ou le Heros commence son entrainement dans les trois disciplines : la Force, l'Adresse et la Volonte. C'est ici que le Heros apprend le style-weaving, l'art de combiner ces trois piliers en combat.",
      en: "Guided by Grandmother's last words, the Hero undertakes the journey to Bowerstone and the legendary Heroes' Guild. Along the way, they meet Humphry, a former hero forced out of retirement. Together, they reach the Guild where the Hero begins training in the three disciplines: Strength, Skill, and Will. It is here that the Hero learns style-weaving, the art of combining these three pillars in combat.",
    },
    keyEvents: [
      { title: { fr: 'Rencontre avec Humphry', en: 'Meeting Humphry' }, description: { fr: 'Le Heros rencontre Humphry sur la route de Bowerstone.', en: 'The Hero meets Humphry on the road to Bowerstone.' } },
      { title: { fr: "Initiation a la Guilde", en: 'Guild Initiation' }, description: { fr: "Le Heros est initie a la Guilde des Heros et commence son entrainement.", en: "The Hero is initiated into the Heroes' Guild and begins training." } },
    ],
    keyCharacters: ['hero', 'humphry'],
    pullQuote: { fr: '"La Guilde n\'accepte pas les faibles. Mais elle forge les legendes."', en: '"The Guild does not accept the weak. But it forges legends."' },
  },
  {
    id: 'chapter-4',
    number: 4,
    numeral: 'IV',
    title: {
      fr: 'Les Tenebres d\'Albion',
      en: "Albion's Darkness",
    },
    synopsis: {
      fr: "Arme de ses nouvelles competences, le Heros explore les vastes terres d'Albion. De Bloodstone a Fairfax Castle, en passant par les Terres Sauvages, chaque region revele un fragment du plan de l'Etranger. Le Heros decouvre que la petrification de Briar Hill n'etait que le debut — une menace ancienne liee a l'Ancien Royaume se reveille, et l'Etranger semble en etre l'instrument.",
      en: "Armed with new skills, the Hero explores the vast lands of Albion. From Bloodstone to Fairfax Castle, through the Wilds, each region reveals a fragment of the Stranger's plan. The Hero discovers that Briar Hill's petrification was only the beginning — an ancient threat tied to the Old Kingdom is awakening, and the Stranger appears to be its instrument.",
    },
    keyEvents: [
      { title: { fr: 'Exploration d\'Albion', en: 'Exploring Albion' }, description: { fr: 'Le Heros explore les differentes regions et decouvre des indices.', en: 'The Hero explores different regions and discovers clues.' } },
      { title: { fr: 'La Revelation', en: 'The Revelation' }, description: { fr: "La verite sur le plan de l'Etranger commence a emerger.", en: "The truth about the Stranger's plan begins to emerge." } },
    ],
    keyCharacters: ['hero', 'humphry', 'dave'],
  },
  {
    id: 'chapter-5',
    number: 5,
    numeral: 'V',
    title: {
      fr: 'Le Choix du Heros',
      en: "The Hero's Choice",
    },
    synopsis: {
      fr: "La confrontation finale approche. Le Heros doit faire face a l'Etranger et a la menace de l'Ancien Royaume. Mais le veritable test n'est pas la force ou la magie — c'est le choix. Chaque decision prise au cours du voyage culmine en un moment decisif qui determinera le sort d'Albion. Le systeme de reputation et les choix moraux du joueur faconnent la fin de l'histoire, offrant des consequences significatives et variees.",
      en: "The final confrontation approaches. The Hero must face the Stranger and the threat of the Old Kingdom. But the true test is not strength or magic — it is choice. Every decision made throughout the journey culminates in a decisive moment that will determine Albion's fate. The reputation system and the player's moral choices shape the story's ending, offering significant and varied consequences.",
    },
    keyEvents: [
      { title: { fr: 'La Confrontation', en: 'The Confrontation' }, description: { fr: "Le Heros affronte l'Etranger dans un combat decisif.", en: 'The Hero faces the Stranger in a decisive battle.' } },
      { title: { fr: 'Le Choix Final', en: 'The Final Choice' }, description: { fr: 'Les consequences des choix du joueur determinent le destin d\'Albion.', en: "The consequences of the player's choices determine Albion's destiny." } },
    ],
    keyCharacters: ['hero', 'stranger', 'humphry'],
    pullQuote: { fr: '"Ce n\'est pas le pouvoir qui definit un heros, mais ses choix."', en: '"It is not power that defines a hero, but their choices."' },
  },
];
