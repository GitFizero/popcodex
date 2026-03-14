import type { Lang } from '@/fable-wiki/context/I18nContext';

/** Helper to pick localized SEO text */
export type LangMap = Partial<Record<Lang, string>> & { fr: string; en: string };

export const seo = {
  index: {
    title: { fr: 'Fable Wiki | Date de Sortie Automne 2026 Xbox PS5 PC | Gameplay', en: 'Fable Wiki | Release Date Autumn 2026 | Xbox PS5 PC Gameplay' } as LangMap,
    desc: { fr: 'Wiki fan Fable : sortie automne 2026 sur Xbox Series X|S, PS5, PC. Style-weaving, 5 regions, systeme de reputation. Playground Games.', en: 'Fable fan wiki: releasing Autumn 2026 on Xbox Series X|S, PS5 & PC. Style-weaving combat, 5 regions, reputation system. Playground Games.' } as LangMap,
  },
  characters: {
    title: { fr: 'Personnages Fable | Le Heros, Humphry, Dave | Guide Complet', en: 'Fable Characters | The Hero, Humphry, Dave | Full Guide' } as LangMap,
    desc: { fr: 'Tous les personnages de Fable : Le Heros, Humphry, Dave, l\'Etranger, Grand-mere. Biographies et capacites. Automne 2026.', en: "All Fable characters: The Hero, Humphry, Dave, The Stranger, Grandmother. Bios and abilities. Autumn 2026." } as LangMap,
  },
  story: {
    title: { fr: 'Histoire Fable | 5 Chapitres, Scenario & Lore Complet', en: 'Fable Story | 5 Chapters, Plot & Complete Lore Guide' } as LangMap,
    desc: { fr: "L'histoire de Fable en 5 chapitres : Briar Hill, la petrification, la Guilde des Heros. Playground Games 2026.", en: 'Fable story across 5 chapters: Briar Hill, the petrification, the Heroes\' Guild. Playground Games 2026.' } as LangMap,
  },
  world: {
    title: { fr: 'Carte Monde Ouvert Fable | 5 Regions d\'Albion | Exploration', en: 'Fable Open World Map | 5 Regions of Albion | Exploration Guide' } as LangMap,
    desc: { fr: "Carte du monde ouvert de Fable : Albion et ses 5 regions (Bowerstone, Briar Hill, Bloodstone, Fairfax, Terres Sauvages). Automne 2026.", en: "Fable open world map: Albion and its 5 regions (Bowerstone, Briar Hill, Bloodstone, Fairfax, The Wilds). Autumn 2026." } as LangMap,
  },
  combat: {
    title: { fr: 'Combat Fable | Style-Weaving, Force, Adresse, Volonte | Guide', en: 'Fable Combat | Style-Weaving, Strength, Skill, Will | Guide' } as LangMap,
    desc: { fr: 'Systeme de combat Fable : style-weaving, 3 disciplines (Force, Adresse, Volonte), systeme de reputation. Guide complet. Automne 2026.', en: 'Fable combat system: style-weaving, 3 disciplines (Strength, Skill, Will), reputation system. Complete guide. Autumn 2026.' } as LangMap,
  },
  lore: {
    title: { fr: 'Encyclopedie Lore Fable | Guilde des Heros, Ancien Royaume & Albion', en: "Fable Lore Encyclopedia | Heroes' Guild, Old Kingdom & Albion" } as LangMap,
    desc: { fr: "Encyclopedie du lore Fable : Guilde des Heros, Ancien Royaume, Albion. Toutes les entrees cross-referencees. Automne 2026.", en: "Fable lore encyclopedia: Heroes' Guild, Old Kingdom, Albion. All cross-referenced entries. Autumn 2026." } as LangMap,
  },
  glossary: {
    title: { fr: 'Glossaire Fable | Tous les Termes du Jeu Expliques', en: 'Fable Glossary | All Game Terms Explained' } as LangMap,
    desc: { fr: 'Glossaire complet Fable : personnages, lieux, factions, mecaniques, creatures. Playground Games 2026.', en: 'Complete Fable glossary: characters, locations, factions, mechanics, creatures. Playground Games 2026.' } as LangMap,
  },
  guides: {
    title: { fr: 'Guides Fable | Combat, Creatures, Debutant & Exploration', en: 'Fable Guides | Combat, Creatures, Beginner & Exploration' } as LangMap,
    desc: { fr: 'Tous les guides Fable : combat, creatures, astuces debutant, carte du monde. Strategies completes. Automne 2026.', en: 'All Fable guides: combat, creatures, beginner tips, world map. Complete strategies. Autumn 2026.' } as LangMap,
  },
  gallery: {
    title: { fr: 'Galerie Fable | Screenshots Gameplay Xbox PS5 PC | Images', en: 'Fable Gallery | Gameplay Screenshots Xbox PS5 PC | Images' } as LangMap,
    desc: { fr: 'Galerie de screenshots et images gameplay Fable. Paysages d\'Albion, personnages, combat. Automne 2026.', en: 'Fable screenshot gallery and gameplay images. Albion landscapes, characters, combat. Autumn 2026.' } as LangMap,
  },
  about: {
    title: { fr: 'A Propos — Fable Wiki Fan Non-Officiel', en: 'About — Fable Unofficial Fan Wiki' } as LangMap,
    desc: { fr: "Site fan non-officiel de Fable par Playground Games. Ce site n'est pas affilie a Xbox Game Studios.", en: 'Unofficial Fable fan site. Not affiliated with Xbox Game Studios.' } as LangMap,
  },
  blog: {
    title: { fr: 'Blog Fable | Guides, Lore & Actualites | Wiki Fan', en: 'Fable Blog | Guides, Lore & News | Fan Wiki' } as LangMap,
    desc: { fr: 'Articles, guides et analyses Fable. Combat, creatures, personnages, lore. Automne 2026. Playground Games.', en: 'Fable articles, guides & analysis. Combat, creatures, characters, lore. Autumn 2026. Playground Games.' } as LangMap,
  },
  buy: {
    title: { fr: 'Acheter Fable | Meilleur Prix Xbox PS5 PC', en: 'Buy Fable | Best Price Xbox PS5 PC' } as LangMap,
    desc: { fr: 'Achetez Fable : Xbox Series X|S, PS5, PC. Automne 2026. Playground Games.', en: 'Buy Fable: Xbox Series X|S, PS5, PC. Autumn 2026. Playground Games.' } as LangMap,
  },
  privacy: {
    title: { fr: 'Politique de Confidentialite | Fable Wiki Fan', en: 'Privacy Policy | Fable Fan Wiki' } as LangMap,
    desc: { fr: 'Politique de confidentialite du Wiki Fan Fable.', en: 'Fable Fan Wiki privacy policy.' } as LangMap,
  },
  items: {
    title: { fr: 'Base de Donnees Objets Fable | Armes, Armures & Equipement', en: 'Fable Item Database | Weapons, Armor & Equipment' } as LangMap,
    desc: { fr: 'Base de donnees complete des objets de Fable. Wiki fan.', en: 'Complete Fable item database. Fan wiki.' } as LangMap,
  },
  mounts: {
    title: { fr: 'Montures Fable | Systeme de Montures', en: 'Fable Mounts | Mount System' } as LangMap,
    desc: { fr: 'Guide des montures de Fable. Wiki fan.', en: 'Fable mount guide. Fan wiki.' } as LangMap,
  },
  quests: {
    title: { fr: 'Quetes Fable | Quetes Principales, Secondaires & Recompenses', en: 'Fable Quests | Main, Side Quests & Rewards' } as LangMap,
    desc: { fr: 'Toutes les quetes de Fable : principales, secondaires, de faction. Wiki fan.', en: 'All Fable quests: main, side, faction. Fan wiki.' } as LangMap,
  },
  weapons: {
    title: { fr: 'Armes Fable | Epee, Arc, Magie | Guide 2026', en: 'Fable Weapons | Sword, Bow, Magic | Guide 2026' } as LangMap,
    desc: { fr: 'Guide complet des armes de Fable : epees, arcs, magie. Style-weaving combat. Playground Games 2026.', en: 'Complete Fable weapon guide: swords, bows, magic. Style-weaving combat. Playground Games 2026.' } as LangMap,
  },
  breadcrumb: {
    home: { fr: 'Accueil', en: 'Home' } as LangMap,
    characters: { fr: 'Personnages', en: 'Characters' } as LangMap,
    story: { fr: 'Histoire', en: 'Story' } as LangMap,
    world: { fr: 'Monde', en: 'World' } as LangMap,
    combat: { fr: 'Combat', en: 'Combat' } as LangMap,
    lore: { fr: 'Lore', en: 'Lore' } as LangMap,
    glossary: { fr: 'Glossaire', en: 'Glossary' } as LangMap,
    guides: { fr: 'Guides', en: 'Guides' } as LangMap,
    gallery: { fr: 'Galerie', en: 'Gallery' } as LangMap,
    about: { fr: 'A Propos', en: 'About' } as LangMap,
    blog: { fr: 'Blog', en: 'Blog' } as LangMap,
    buy: { fr: 'Acheter', en: 'Buy' } as LangMap,
    privacy: { fr: 'Politique de confidentialite', en: 'Privacy Policy' } as LangMap,
    items: { fr: 'Objets', en: 'Items' } as LangMap,
    mounts: { fr: 'Montures', en: 'Mounts' } as LangMap,
    quests: { fr: 'Quetes', en: 'Quests' } as LangMap,
    weapons: { fr: 'Armes', en: 'Weapons' } as LangMap,
  },
  faq: {
    fr: [
      { question: 'Quelle est la date de sortie de Fable ?', answer: 'Fable sort a l\'automne 2026 sur Xbox Series X|S, PS5 et PC.' },
      { question: 'Fable sort-il sur PS5 ?', answer: 'Oui, Fable sort sur PS5, Xbox Series X|S et PC a l\'automne 2026.' },
      { question: 'Qui developpe le nouveau Fable ?', answer: 'Fable est developpe par Playground Games (Forza Horizon) et publie par Xbox Game Studios.' },
      { question: 'Qu\'est-ce que le style-weaving ?', answer: 'Le style-weaving est le systeme de combat de Fable permettant de combiner fluidement Force, Adresse et Volonte en plein combat.' },
      { question: 'Qui est le personnage principal ?', answer: 'Le personnage principal est le Heros, ne a Briar Hill, qui decouvre ses pouvoirs heroiques lorsque son village est petrifie.' },
    ],
    en: [
      { question: 'When does Fable release?', answer: 'Fable releases Autumn 2026 on Xbox Series X|S, PS5, and PC.' },
      { question: 'Is Fable on PS5?', answer: 'Yes, Fable launches on PS5, Xbox Series X|S, and PC in Autumn 2026.' },
      { question: 'Who is developing the new Fable?', answer: 'Fable is developed by Playground Games (Forza Horizon) and published by Xbox Game Studios.' },
      { question: 'What is style-weaving?', answer: "Style-weaving is Fable's combat system allowing fluid combination of Strength, Skill, and Will mid-combat." },
      { question: 'Who is the main character?', answer: 'The main character is the Hero, born in Briar Hill, who discovers heroic powers when their village is petrified.' },
    ],
  } as Record<Lang, { question: string; answer: string }[]>,
};
