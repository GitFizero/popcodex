import type { Translations } from '@/wolverine-wiki/context/I18nContext';

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
      fr: 'La Bête Intérieure',
      en: 'The Beast Within',
    },
    synopsis: {
      fr: "Logan se réveille dans un bar de Madripoor, poursuivi par des flashbacks du programme Weapon X. Quand des agents de la Main attaquent le Princess Bar, il est forcé de dégainer ses griffes une fois de plus. Un message crypté de Charles Xavier le met sur la piste d'une résurgence du programme Weapon X — quelqu'un reconstruit le projet qui l'a créé, et les nouveaux sujets d'expérience ne survivent pas.",
      en: "Logan wakes up in a Madripoor bar, haunted by Weapon X flashbacks. When Hand agents attack the Princess Bar, he's forced to unsheathe his claws once more. A cryptic message from Charles Xavier puts him on the trail of a Weapon X resurgence — someone is rebuilding the project that created him, and the new test subjects aren't surviving.",
    },
    keyEvents: [
      { title: { fr: 'Attaque du Princess Bar', en: 'Princess Bar Attack' }, description: { fr: "La Main attaque le bar, forçant Logan à reprendre le combat.", en: 'The Hand attacks the bar, forcing Logan back into the fight.' } },
      { title: { fr: 'Message de Xavier', en: "Xavier's Message" }, description: { fr: 'Xavier contacte Logan avec des informations sur le retour de Weapon X.', en: 'Xavier contacts Logan with intel about the return of Weapon X.' } },
    ],
    keyCharacters: ['logan'],
    pullQuote: {
      fr: "On ne choisit pas d'être un monstre. Mais on choisit ce qu'on fait de ses griffes.",
      en: "You don't choose to be a monster. But you choose what you do with your claws.",
    },
  },
  {
    id: 'chapter-2',
    number: 2,
    numeral: 'II',
    title: {
      fr: 'Fantômes du Passé',
      en: 'Ghosts of the Past',
    },
    synopsis: {
      fr: "La piste ramène Logan à Alkali Lake, le site original du programme Weapon X. Les installations sont supposées abandonnées, mais quelqu'un les a réactivées. Dans les couloirs hantés par ses propres souvenirs, Logan découvre que ses flashbacks ne sont pas que des souvenirs — ils sont des messages implantés. Mystique apparaît, proposant une alliance inattendue : elle aussi a été manipulée par Weapon X, et elle connaît l'emplacement du nouveau complexe.",
      en: "The trail leads Logan back to Alkali Lake, the original Weapon X site. The facilities are supposed to be abandoned, but someone has reactivated them. In corridors haunted by his own memories, Logan discovers that his flashbacks aren't just memories — they're implanted messages. Mystique appears, offering an unexpected alliance: she too was manipulated by Weapon X, and she knows the location of the new complex.",
    },
    keyEvents: [
      { title: { fr: 'Retour à Alkali Lake', en: 'Return to Alkali Lake' }, description: { fr: "Logan confronte ses souvenirs les plus sombres dans les ruines du laboratoire.", en: 'Logan confronts his darkest memories in the laboratory ruins.' } },
      { title: { fr: 'Alliance avec Mystique', en: "Mystique's Alliance" }, description: { fr: 'Mystique révèle des informations cruciales sur le nouveau programme.', en: 'Mystique reveals crucial information about the new program.' } },
    ],
    keyCharacters: ['logan', 'mystique'],
    pullQuote: {
      fr: "Les souvenirs qu'ils m'ont pris valent moins que ceux qu'ils m'ont implantés.",
      en: "The memories they took from me matter less than the ones they planted.",
    },
  },
  {
    id: 'chapter-3',
    number: 3,
    numeral: 'III',
    title: {
      fr: 'Le Prix du Sang',
      en: 'The Price of Blood',
    },
    synopsis: {
      fr: "Les Reavers de Donald Pierce lancent un assaut coordonné contre le manoir Xavier, forçant Logan à se battre pour protéger les étudiants. L'attaque est une diversion : pendant que Logan défend Westchester, les Reavers capturent des mutants pour le nouveau programme Weapon X. Logan réalise que sa présence au manoir met en danger ceux qu'il aime. Après avoir repoussé l'attaque, il jure de mettre fin au programme une fois pour toutes — même si cela signifie se rendre dans la Terre Sauvage pour trouver un allié improbable.",
      en: "Donald Pierce's Reavers launch a coordinated assault on Xavier Mansion, forcing Logan to fight to protect the students. The attack is a diversion: while Logan defends Westchester, the Reavers capture mutants for the new Weapon X program. Logan realizes his presence at the mansion endangers those he loves. After repelling the attack, he vows to end the program once and for all — even if it means traveling to the Savage Land to find an unlikely ally.",
    },
    keyEvents: [
      { title: { fr: 'Siège du Manoir', en: 'Mansion Siege' }, description: { fr: "Les Reavers attaquent le manoir Xavier en force.", en: 'The Reavers attack Xavier Mansion in force.' } },
      { title: { fr: 'La Capture', en: 'The Capture' }, description: { fr: "Des mutants sont enlevés pendant la diversion.", en: 'Mutants are abducted during the diversion.' } },
    ],
    keyCharacters: ['logan', 'reavers'],
    pullQuote: {
      fr: "Chaque fois que je crois pouvoir m'arrêter, ils me rappellent pourquoi j'ai des griffes.",
      en: "Every time I think I can stop, they remind me why I have claws.",
    },
  },
  {
    id: 'chapter-4',
    number: 4,
    numeral: 'IV',
    title: {
      fr: 'Terre Sauvage',
      en: 'Savage Land',
    },
    synopsis: {
      fr: "Logan voyage jusqu'à la Terre Sauvage pour retrouver Ka-Zar, qui détient des informations sur une technologie alien capable de neutraliser le processus d'extraction d'adamantium. Dans cet environnement primitif, Logan doit embrasser ses instincts les plus sauvages. Il découvre que le programme Weapon X utilise une technologie dérivée des mêmes aliens qui ont créé la Terre Sauvage. La bataille contre les Mutates de la Terre Sauvage et un T-Rex contrôlé par la technologie alien pousse Logan au bord de la Rage du Berserker.",
      en: "Logan travels to the Savage Land to find Ka-Zar, who holds information about alien technology capable of neutralizing the adamantium extraction process. In this primitive environment, Logan must embrace his most savage instincts. He discovers that the Weapon X program uses technology derived from the same aliens who created the Savage Land. The battle against Savage Land Mutates and a T-Rex controlled by alien technology pushes Logan to the edge of Berserker Rage.",
    },
    keyEvents: [
      { title: { fr: 'Rencontre avec Ka-Zar', en: 'Meeting Ka-Zar' }, description: { fr: 'Ka-Zar partage des secrets sur la technologie alien.', en: 'Ka-Zar shares secrets about the alien technology.' } },
      { title: { fr: 'La Rage Incontrôlable', en: 'Uncontrollable Rage' }, description: { fr: 'Logan perd le contrôle en mode Berserker.', en: 'Logan loses control in Berserker mode.' } },
    ],
    keyCharacters: ['logan'],
    pullQuote: {
      fr: "Dans la Terre Sauvage, il n'y a pas de civilisation derrière laquelle se cacher. Que l'animal.",
      en: "In the Savage Land, there's no civilization to hide behind. Just the animal.",
    },
  },
  {
    id: 'chapter-5',
    number: 5,
    numeral: 'V',
    title: {
      fr: "L'Arme Ultime",
      en: 'The Ultimate Weapon',
    },
    synopsis: {
      fr: "Logan infiltre le nouveau complexe Weapon X pour libérer les mutants capturés et détruire le programme définitivement. À l'intérieur, il affronte ses pires cauchemars : des clones imparfaits de lui-même (les X-24), Omega Red pleinement réactivé, et la révélation que le nouveau directeur du programme est quelqu'un de son passé oublié. Le combat final oppose Logan à Omega Red dans l'arène de test, avec les cuves d'adamantium fondu comme décor apocalyptique. Logan doit maîtriser sa Rage du Berserker plutôt que s'y abandonner pour vaincre — prouvant qu'il est plus que l'arme qu'on a voulu faire de lui.",
      en: "Logan infiltrates the new Weapon X complex to free captured mutants and destroy the program for good. Inside, he faces his worst nightmares: imperfect clones of himself (the X-24s), a fully reactivated Omega Red, and the revelation that the program's new director is someone from his forgotten past. The final battle pits Logan against Omega Red in the testing arena, with vats of molten adamantium as the apocalyptic backdrop. Logan must master his Berserker Rage rather than succumb to it to win — proving he is more than the weapon they tried to make him.",
    },
    keyEvents: [
      { title: { fr: 'Infiltration du Complexe', en: 'Complex Infiltration' }, description: { fr: 'Logan pénètre dans le nouveau complexe Weapon X.', en: 'Logan penetrates the new Weapon X complex.' } },
      { title: { fr: 'Face aux X-24', en: 'Facing the X-24s' }, description: { fr: 'Logan combat ses propres clones imparfaits.', en: 'Logan fights his own imperfect clones.' } },
      { title: { fr: 'Duel Final', en: 'Final Duel' }, description: { fr: 'Affrontement épique contre Omega Red.', en: 'Epic showdown against Omega Red.' } },
    ],
    keyCharacters: ['logan', 'omega-red', 'reavers'],
    pullQuote: {
      fr: "Je ne suis pas une arme. Je suis un homme qui choisit de se battre.",
      en: "I'm not a weapon. I'm a man who chooses to fight.",
    },
  },
];
