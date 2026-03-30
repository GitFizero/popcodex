import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

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
      fr: 'The Setup',
      en: 'The Setup',
      es: 'La Preparacion',
    },
    synopsis: {
      fr: "Lucia est liberee du penitencier de Leonida apres avoir purge sa peine. Sans ressources et sans contacts, elle arrive a Vice City ou elle rencontre Jason Duval dans des circonstances chaotiques. Les deux reconnaissent rapidement qu'ils ont besoin l'un de l'autre pour survivre dans cette ville impitoyable. Ils commencent a monter de petites arnaques, attirant l'attention de figures plus puissantes du monde criminel.",
      en: "Lucia is released from Leonida Penitentiary after serving her sentence. With no resources and no contacts, she arrives in Vice City where she meets Jason Duval under chaotic circumstances. The two quickly realize they need each other to survive in this ruthless city. They begin running small-time scams, catching the attention of more powerful figures in the criminal underworld.",
      es: "Lucia es liberada del penitenciario de Leonida. Sin recursos ni contactos, llega a Vice City donde conoce a Jason Duval. Los dos comienzan con pequenas estafas, llamando la atencion de figuras poderosas del mundo criminal.",
    },
    keyEvents: [
      { title: { fr: "Liberation de Lucia", en: "Lucia's Release", es: "Liberacion de Lucia" }, description: { fr: "Lucia sort du penitencier de Leonida et arrive a Vice City.", en: "Lucia leaves Leonida Penitentiary and arrives in Vice City.", es: "Lucia sale del penitenciario y llega a Vice City." } },
      { title: { fr: "Rencontre avec Jason", en: "Meeting Jason", es: "Encuentro con Jason" }, description: { fr: "Lucia et Jason se rencontrent et forment un partenariat.", en: "Lucia and Jason meet and form a partnership.", es: "Lucia y Jason se conocen y forman una asociacion." } },
      { title: { fr: "Premier coup", en: "First Score", es: "Primer golpe" }, description: { fr: "Le duo realise leur premier braquage ensemble.", en: "The duo pulls off their first heist together.", es: "El duo realiza su primer atraco juntos." } },
    ],
    keyCharacters: ['lucia', 'jason'],
    pullQuote: {
      fr: "Vice City ne te donne rien. Tu dois tout prendre.",
      en: "Vice City doesn't give you anything. You have to take it all.",
      es: "Vice City no te da nada. Tienes que tomarlo todo.",
    },
  },
  {
    id: 'chapter-2',
    number: 2,
    numeral: 'II',
    title: {
      fr: 'Rising Heat',
      en: 'Rising Heat',
      es: 'Calor Creciente',
    },
    synopsis: {
      fr: "Lucia et Jason montent en puissance, realisant des braquages de plus en plus audacieux a travers Leonida. Ils recrutent Raul Bautista, un braqueur chevronne, et commencent a operer dans les Leonida Keys, Grassrivers et Port Gellhorn. Mais leur reputation croissante attire l'attention de la police et de criminels plus dangereux. La pression monte.",
      en: "Lucia and Jason rise in power, pulling off increasingly daring heists across Leonida. They recruit Raul Bautista, a seasoned bank robber, and begin operating in the Leonida Keys, Grassrivers, and Port Gellhorn. But their growing reputation attracts the attention of the police and more dangerous criminals. The pressure builds.",
      es: "Lucia y Jason ganan poder, realizando atracos cada vez mas audaces por Leonida. Reclutan a Raul Bautista y comienzan a operar en las Keys, Grassrivers y Port Gellhorn.",
    },
    keyEvents: [
      { title: { fr: "Recrutement de Raul", en: "Recruiting Raul", es: "Reclutamiento de Raul" }, description: { fr: "L'equipe s'agrandit avec l'arrivee du braqueur experimente.", en: "The team grows with the addition of the experienced bank robber.", es: "El equipo crece con la llegada del atracador experimentado." } },
      { title: { fr: "Le braquage des Keys", en: "The Keys Job", es: "El golpe de las Keys" }, description: { fr: "Un braquage risque dans les Leonida Keys.", en: "A risky heist in the Leonida Keys.", es: "Un atraco arriesgado en las Leonida Keys." } },
    ],
    keyCharacters: ['lucia', 'jason'],
  },
  {
    id: 'chapter-3',
    number: 3,
    numeral: 'III',
    title: {
      fr: 'The Score',
      en: 'The Score',
      es: 'El Gran Golpe',
    },
    synopsis: {
      fr: "Le grand braquage. Lucia et Jason planifient et executent leur coup le plus ambitieux : une banque majeure de Vice City. Mais tout ne se passe pas comme prevu. Une trahison inattendue transforme le braquage en cauchemar, forcant le duo a fuir avec la police et les criminels a leurs trousses.",
      en: "The big heist. Lucia and Jason plan and execute their most ambitious score: a major Vice City bank. But things don't go as planned. An unexpected betrayal turns the heist into a nightmare, forcing the duo to flee with both police and criminals on their tail.",
      es: "El gran atraco. Lucia y Jason planean y ejecutan su golpe mas ambicioso: un banco importante de Vice City. Pero una traicion inesperada convierte todo en una pesadilla.",
    },
    keyEvents: [
      { title: { fr: "Planification du braquage", en: "Planning the Heist", es: "Planificacion del atraco" }, description: { fr: "L'equipe prepare meticuleusement le plus grand braquage de Leonida.", en: "The team meticulously prepares Leonida's biggest heist.", es: "El equipo prepara meticulosamente el mayor atraco de Leonida." } },
      { title: { fr: "La trahison", en: "The Betrayal", es: "La traicion" }, description: { fr: "Un membre de l'equipe trahit le groupe pendant le braquage.", en: "A team member betrays the group during the heist.", es: "Un miembro del equipo traiciona al grupo durante el atraco." } },
    ],
    keyCharacters: ['lucia', 'jason'],
    pullQuote: {
      fr: "Le plus grand braquage de l'histoire de Leonida. Et tout a mal tourne.",
      en: "The biggest heist in Leonida history. And everything went wrong.",
      es: "El mayor atraco en la historia de Leonida. Y todo salio mal.",
    },
  },
  {
    id: 'chapter-4',
    number: 4,
    numeral: 'IV',
    title: {
      fr: 'Conspiracy',
      en: 'Conspiracy',
      es: 'Conspiracion',
    },
    synopsis: {
      fr: "En fuite apres le braquage rate, Lucia et Jason decouvrent une conspiration qui s'etend bien au-dela du simple crime. Un flic corrompu au sein du departement de police de Leonida tire les ficelles, utilisant les criminels comme des pions dans un jeu bien plus vaste. Le duo doit demeler ce reseau de corruption tout en restant en vie.",
      en: "On the run after the botched heist, Lucia and Jason uncover a conspiracy that extends far beyond simple crime. A corrupt cop within the Leonida Police Department is pulling the strings, using criminals as pawns in a much larger game. The duo must unravel this web of corruption while staying alive.",
      es: "En fuga tras el atraco fallido, Lucia y Jason descubren una conspiracion que va mas alla del simple crimen. Un policia corrupto del departamento de policia de Leonida maneja los hilos.",
    },
    keyEvents: [
      { title: { fr: "Decouverte de la conspiration", en: "Conspiracy Discovered", es: "Descubrimiento de la conspiracion" }, description: { fr: "Le duo realise que le braquage rate etait un piege.", en: "The duo realizes the botched heist was a setup.", es: "El duo descubre que el atraco fallido fue una trampa." } },
      { title: { fr: "Le flic corrompu", en: "The Corrupt Cop", es: "El policia corrupto" }, description: { fr: "L'antagoniste principal se revele : un flic corrompu de haut rang.", en: "The main antagonist is revealed: a high-ranking corrupt cop.", es: "El antagonista principal se revela: un policia corrupto de alto rango." } },
    ],
    keyCharacters: ['lucia', 'jason'],
  },
  {
    id: 'chapter-5',
    number: 5,
    numeral: 'V',
    title: {
      fr: 'Endgame',
      en: 'Endgame',
      es: 'Final',
    },
    synopsis: {
      fr: "La confrontation finale. Lucia et Jason font face a leurs ennemis, au flic corrompu et aux consequences de toutes leurs actions. Ils doivent choisir entre la vengeance et la protection mutuelle, entre l'argent et la liberte. Le denouement determine leur sort et celui de Vice City elle-meme.",
      en: "The final confrontation. Lucia and Jason face their enemies, the corrupt cop, and the consequences of all their actions. They must choose between revenge and protecting each other, between money and freedom. The outcome determines their fate and that of Vice City itself.",
      es: "La confrontacion final. Lucia y Jason se enfrentan a sus enemigos y las consecuencias de sus acciones. Deben elegir entre la venganza y protegerse mutuamente.",
    },
    keyEvents: [
      { title: { fr: "Confrontation finale", en: "Final Confrontation", es: "Confrontacion final" }, description: { fr: "Lucia et Jason affrontent le flic corrompu et ses allies.", en: "Lucia and Jason confront the corrupt cop and his allies.", es: "Lucia y Jason se enfrentan al policia corrupto y sus aliados." } },
      { title: { fr: "Le choix", en: "The Choice", es: "La eleccion" }, description: { fr: "Un choix impossible qui determine la fin du jeu.", en: "An impossible choice that determines the game's ending.", es: "Una eleccion imposible que determina el final del juego." } },
    ],
    keyCharacters: ['lucia', 'jason'],
    pullQuote: {
      fr: "Protege-moi, et je te protege. C'est tout ce qu'on a.",
      en: "Protect me, and I'll protect you. That's all we've got.",
      es: "Protegeme, y yo te protegere. Es todo lo que tenemos.",
    },
  },
];
