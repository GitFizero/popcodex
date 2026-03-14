import type { Lang } from '@/wolverine-wiki/context/I18nContext';

/** Helper to pick localized SEO text */
export type LangMap = Partial<Record<Lang, string>> & { fr: string; en: string };

export const seo = {
  index: {
    title: {
      fr: "Marvel's Wolverine Wiki | Date de Sortie 15 Sept 2026 PS5 Exclusive | Gameplay",
      en: "Marvel's Wolverine Wiki | Release Date September 15 2026 | PS5 Exclusive Gameplay",
    } as LangMap,
    desc: {
      fr: "Wiki fan Marvel's Wolverine : date de sortie 15 septembre 2026, exclusive PS5. Logan, Weapon X, adamantium, 5 régions, 5 chapitres. Insomniac Games / Sony.",
      en: "Marvel's Wolverine fan wiki: release date September 15, 2026, PS5 exclusive. Logan, Weapon X, adamantium, 5 regions, 5 chapters. Insomniac Games / Sony.",
    } as LangMap,
  },
  characters: {
    title: {
      fr: "Personnages Marvel's Wolverine | Logan, Mystique, Omega Red, Reavers | Guide",
      en: "Marvel's Wolverine Characters | Logan, Mystique, Omega Red, Reavers | Guide",
    } as LangMap,
    desc: {
      fr: "Tous les personnages de Marvel's Wolverine : Logan (protagoniste, griffes d'adamantium), Mystique, Omega Red, les Reavers. Biographies, compétences et relations.",
      en: "All Marvel's Wolverine characters: Logan (protagonist, adamantium claws), Mystique, Omega Red, the Reavers. Bios, skills & relationships.",
    } as LangMap,
  },
  story: {
    title: {
      fr: "Histoire Marvel's Wolverine | 5 Chapitres, Scénario & Lore Complet",
      en: "Marvel's Wolverine Story | 5 Chapters, Plot & Complete Lore Guide",
    } as LangMap,
    desc: {
      fr: "L'histoire de Marvel's Wolverine en 5 chapitres : Weapon X, Madripoor, Alkali Lake. Logan et ses souvenirs fragmentés. Exclusive PS5, 15 sept 2026.",
      en: "Marvel's Wolverine story across 5 chapters: Weapon X, Madripoor, Alkali Lake. Logan and his fragmented memories. PS5 exclusive, Sept 15, 2026.",
    } as LangMap,
  },
  world: {
    title: {
      fr: "Carte Monde Ouvert Marvel's Wolverine | 5 Régions | Exploration",
      en: "Marvel's Wolverine Open World Map | 5 Regions | Exploration Guide",
    } as LangMap,
    desc: {
      fr: "Carte du monde ouvert de Marvel's Wolverine : 5 régions (Madripoor, Alkali Lake, Westchester, Savage Land, Weapon X Facility). Exclusive PS5, 15 sept 2026.",
      en: "Marvel's Wolverine open world map: 5 regions (Madripoor, Alkali Lake, Westchester, Savage Land, Weapon X Facility). PS5 exclusive, Sept 15, 2026.",
    } as LangMap,
  },
  combat: {
    title: {
      fr: "Combat Marvel's Wolverine | Griffes, Rage du Berserker, Boss | Guide",
      en: "Marvel's Wolverine Combat | Claws, Berserker Rage, Bosses | Guide",
    } as LangMap,
    desc: {
      fr: "Système de combat Marvel's Wolverine : griffes d'adamantium, rage du berserker, régénération, 4 boss épiques. Guide complet. PS5, 15 sept 2026.",
      en: "Marvel's Wolverine combat system: adamantium claws, berserker rage, regeneration, 4 epic bosses. Full guide. PS5, Sept 15, 2026.",
    } as LangMap,
  },
  lore: {
    title: {
      fr: "Encyclopédie Lore Marvel's Wolverine | Weapon X, Adamantium & Mutants",
      en: "Marvel's Wolverine Lore Encyclopedia | Weapon X, Adamantium & Mutants",
    } as LangMap,
    desc: {
      fr: "Encyclopédie du lore Marvel's Wolverine : Weapon X, adamantium, mutants, Madripoor. Toutes les entrées cross-référencées. PS5, 15 sept 2026.",
      en: "Marvel's Wolverine lore encyclopedia: Weapon X, adamantium, mutants, Madripoor. All cross-referenced entries. PS5, Sept 15, 2026.",
    } as LangMap,
  },
  glossary: {
    title: {
      fr: "Glossaire Marvel's Wolverine | Tous les Termes du Jeu Expliqués",
      en: "Marvel's Wolverine Glossary | All Game Terms Explained",
    } as LangMap,
    desc: {
      fr: "Glossaire complet Marvel's Wolverine : personnages, lieux, factions, mécaniques, créatures et objets. Insomniac Games. PS5, 15 sept 2026.",
      en: "Complete Marvel's Wolverine glossary: characters, locations, factions, mechanics, creatures and items. Insomniac Games. PS5, Sept 15, 2026.",
    } as LangMap,
  },
  guides: {
    title: {
      fr: "Guides Marvel's Wolverine | Combat, Boss, Débutant & Exploration",
      en: "Marvel's Wolverine Guides | Combat, Bosses, Beginner & Exploration",
    } as LangMap,
    desc: {
      fr: "Tous les guides Marvel's Wolverine : combat, boss, astuces débutant, carte du monde et personnages. Stratégies complètes. PS5, 15 sept 2026.",
      en: "All Marvel's Wolverine guides: combat, bosses, beginner tips, world map & characters. Complete strategies. PS5, Sept 15, 2026.",
    } as LangMap,
  },
  gallery: {
    title: {
      fr: "Galerie Marvel's Wolverine | Screenshots Gameplay PS5 | Images",
      en: "Marvel's Wolverine Gallery | Gameplay Screenshots PS5 | Images",
    } as LangMap,
    desc: {
      fr: "Galerie de screenshots et images gameplay Marvel's Wolverine sur PS5. Personnages, combat et environnements. Insomniac Games. 15 sept 2026.",
      en: "Marvel's Wolverine screenshot gallery and gameplay images on PS5. Characters, combat & environments. Insomniac Games. Sept 15, 2026.",
    } as LangMap,
  },
  about: {
    title: {
      fr: "À Propos — Marvel's Wolverine Wiki Fan Non-Officiel",
      en: "About — Marvel's Wolverine Unofficial Fan Wiki",
    } as LangMap,
    desc: {
      fr: "Site fan non-officiel de Marvel's Wolverine par Insomniac Games / Sony. Ce site n'est pas affilié à Marvel, Insomniac Games ou Sony.",
      en: "Unofficial Marvel's Wolverine fan site. Not affiliated with Marvel, Insomniac Games or Sony.",
    } as LangMap,
  },
  blog: {
    title: {
      fr: "Blog Marvel's Wolverine | Guides, Lore & Actualités | Wiki Fan",
      en: "Marvel's Wolverine Blog | Guides, Lore & News | Fan Wiki",
    } as LangMap,
    desc: {
      fr: "Articles, guides et analyses Marvel's Wolverine. Combat, boss, personnages, factions. PS5 exclusive, 15 sept 2026. Insomniac Games.",
      en: "Marvel's Wolverine articles, guides & analysis. Combat, bosses, characters, factions. PS5 exclusive, Sept 15, 2026. Insomniac Games.",
    } as LangMap,
  },
  buy: {
    title: {
      fr: "Acheter Marvel's Wolverine | Meilleur Prix PS5 | Édition Deluxe",
      en: "Buy Marvel's Wolverine | Best Price PS5 | Deluxe Edition",
    } as LangMap,
    desc: {
      fr: "Achetez Marvel's Wolverine au meilleur prix : PS5 exclusive. Édition standard et Deluxe. Sortie le 15 septembre 2026. Insomniac Games / Sony.",
      en: "Buy Marvel's Wolverine at the best price: PS5 exclusive. Standard and Deluxe editions. Releasing September 15, 2026. Insomniac Games / Sony.",
    } as LangMap,
  },
  privacy: {
    title: {
      fr: "Politique de Confidentialité | Marvel's Wolverine Wiki Fan",
      en: "Privacy Policy | Marvel's Wolverine Fan Wiki",
    } as LangMap,
    desc: {
      fr: "Politique de confidentialité du Wiki Fan Marvel's Wolverine. Informations sur les cookies, Google AdSense et vos droits.",
      en: "Marvel's Wolverine Fan Wiki privacy policy. Information about cookies, Google AdSense and your rights.",
    } as LangMap,
  },
  items: {
    title: {
      fr: "Base de Données Objets Marvel's Wolverine | Armes, Costumes & Équipement",
      en: "Marvel's Wolverine Item Database | Weapons, Suits & Equipment",
    } as LangMap,
    desc: {
      fr: "Base de données complète des objets de Marvel's Wolverine : costumes, améliorations et collectibles. Wiki fan.",
      en: "Complete Marvel's Wolverine item database: suits, upgrades and collectibles. Fan wiki.",
    } as LangMap,
  },
  mounts: {
    title: {
      fr: "Véhicules Marvel's Wolverine | Motos & Transports",
      en: "Marvel's Wolverine Vehicles | Motorcycles & Transport",
    } as LangMap,
    desc: {
      fr: "Guide des véhicules de Marvel's Wolverine : motos, jets et transports rapides. Wiki fan.",
      en: "Marvel's Wolverine vehicle guide: motorcycles, jets and fast travel. Fan wiki.",
    } as LangMap,
  },
  quests: {
    title: {
      fr: "Quêtes Marvel's Wolverine | Missions Principales, Secondaires & Cachées",
      en: "Marvel's Wolverine Quests | Main, Side & Hidden Missions",
    } as LangMap,
    desc: {
      fr: "Toutes les quêtes de Marvel's Wolverine : principales, secondaires et cachées. Prérequis, récompenses et quêtes liées. Wiki fan.",
      en: "All Marvel's Wolverine quests: main, side and hidden. Prerequisites, rewards and linked quests. Fan wiki.",
    } as LangMap,
  },
  weapons: {
    title: {
      fr: "Armes Marvel's Wolverine | Griffes d'Adamantium, Katana, Muramasa | Guide 2026",
      en: "Marvel's Wolverine Weapons | Adamantium Claws, Katana, Muramasa | Guide 2026",
    } as LangMap,
    desc: {
      fr: "Guide complet des armes de Marvel's Wolverine : griffes d'adamantium, lame Muramasa, katana. Système de combat. Insomniac Games 2026.",
      en: "Complete guide to Marvel's Wolverine weapons: adamantium claws, Muramasa blade, katana. Combat system. Insomniac Games 2026.",
    } as LangMap,
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
    about: { fr: 'À Propos', en: 'About' } as LangMap,
    blog: { fr: 'Blog', en: 'Blog' } as LangMap,
    buy: { fr: 'Acheter', en: 'Buy' } as LangMap,
    privacy: { fr: 'Politique de confidentialité', en: 'Privacy Policy' } as LangMap,
    items: { fr: 'Objets', en: 'Items' } as LangMap,
    mounts: { fr: 'Véhicules', en: 'Vehicles' } as LangMap,
    quests: { fr: 'Quêtes', en: 'Quests' } as LangMap,
    weapons: { fr: 'Armes', en: 'Weapons' } as LangMap,
  },

  /** FAQ items for Index page per language */
  faq: {
    fr: [
      { question: "Quelle est la date de sortie de Marvel's Wolverine ?", answer: "La date de sortie de Marvel's Wolverine est le 15 septembre 2026, en exclusivité sur PlayStation 5." },
      { question: "Marvel's Wolverine sort-il sur PC ?", answer: "Non, Marvel's Wolverine est une exclusivité PS5 au lancement. Un portage PC pourrait suivre ultérieurement comme pour Spider-Man." },
      { question: "Qui développe Marvel's Wolverine ?", answer: "Marvel's Wolverine est développé par Insomniac Games (Spider-Man, Ratchet & Clank) et publié par Sony Interactive Entertainment." },
      { question: "Quel est le gameplay de Marvel's Wolverine ?", answer: "Le gameplay combine action-aventure en monde ouvert, combat brutal avec griffes d'adamantium, rage du berserker, régénération en temps réel et une histoire en 5 chapitres." },
      { question: "Qui est Logan / Wolverine ?", answer: "Logan, alias Wolverine, est un mutant doté d'un facteur guérisseur surhumain et d'un squelette recouvert d'adamantium. Ancien cobaye du Programme Weapon X, il lutte pour retrouver ses souvenirs." },
      { question: "Y a-t-il un mode multijoueur ?", answer: "Marvel's Wolverine est un jeu exclusivement solo avec une campagne narrative." },
      { question: "Combien y a-t-il de personnages jouables ?", answer: "Logan / Wolverine est le seul personnage jouable. D'autres mutants apparaissent comme alliés ou ennemis dans l'histoire." },
      { question: "Quels sont les ennemis principaux ?", answer: "Les antagonistes incluent Omega Red, les Reavers de Donald Pierce, Mystique et le programme Weapon X." },
      { question: "Quelle est la durée de vie du jeu ?", answer: "La durée estimée est de 25 à 40 heures pour l'histoire principale, avec du contenu annexe supplémentaire." },
      { question: "Quel moteur graphique utilise le jeu ?", answer: "Marvel's Wolverine utilise un moteur propriétaire d'Insomniac Games, similaire à celui de Marvel's Spider-Man 2, optimisé pour la PS5." },
    ],
    en: [
      { question: "When does Marvel's Wolverine come out?", answer: "Marvel's Wolverine releases on September 15, 2026, exclusively on PlayStation 5." },
      { question: "Is Marvel's Wolverine on PC?", answer: "No, Marvel's Wolverine is a PS5 exclusive at launch. A PC port may follow later, similar to Spider-Man." },
      { question: "Who is developing Marvel's Wolverine?", answer: "Marvel's Wolverine is developed by Insomniac Games (Spider-Man, Ratchet & Clank) and published by Sony Interactive Entertainment." },
      { question: "What is Marvel's Wolverine gameplay like?", answer: "Open-world action-adventure with brutal adamantium claw combat, berserker rage, real-time regeneration, and a 5-chapter narrative." },
      { question: "Who is Logan / Wolverine?", answer: "Logan, a.k.a. Wolverine, is a mutant with a superhuman healing factor and an adamantium-coated skeleton. A former Weapon X test subject, he fights to recover his fragmented memories." },
      { question: "Is there multiplayer?", answer: "Marvel's Wolverine is a single-player only experience with a narrative campaign." },
      { question: "How many playable characters are there?", answer: "Logan / Wolverine is the sole playable character. Other mutants appear as allies or enemies in the story." },
      { question: "Who are the main villains?", answer: "Antagonists include Omega Red, Donald Pierce's Reavers, Mystique, and the Weapon X program." },
      { question: "How long is Marvel's Wolverine?", answer: "Estimated 25-40 hours for the main story, with additional side content." },
      { question: "What engine does the game use?", answer: "Marvel's Wolverine uses Insomniac Games' proprietary engine, similar to Marvel's Spider-Man 2, optimized for PS5." },
    ],
  } as Record<Lang, { question: string; answer: string }[]>,
};
