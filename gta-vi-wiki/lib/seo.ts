import type { Lang } from '@/gta-vi-wiki/context/I18nContext';

/** Helper to pick localized SEO text */
export type LangMap = Partial<Record<Lang, string>> & { fr: string; en: string };

export const seo = {
  index: {
    title: {
      fr: 'GTA VI Wiki | Date de Sortie 19 Novembre 2026 PS5 Xbox | Vice City',
      en: 'GTA VI Wiki | Release Date November 19 2026 | PS5 Xbox Vice City',
      es: 'GTA VI Wiki | Fecha Lanzamiento 19 Noviembre 2026 PS5 Xbox | Vice City',
    } as LangMap,
    desc: {
      fr: 'Wiki fan GTA VI : date de sortie 19 novembre 2026 sur PS5, Xbox Series X|S. Lucia et Jason, Vice City, Leonida, braquages et 5 chapitres. Rockstar Games.',
      en: 'GTA VI fan wiki: release date November 19, 2026 on PS5 & Xbox Series X|S. Lucia and Jason, Vice City, Leonida, heists and 5-chapter story. Rockstar Games.',
      es: 'Wiki fan GTA VI: fecha 19 noviembre 2026 en PS5, Xbox Series X|S. Lucia y Jason, Vice City, Leonida, atracos y 5 capitulos. Rockstar Games.',
    } as LangMap,
  },
  characters: {
    title: {
      fr: 'Personnages GTA VI | Lucia Caminos, Jason Duval | Guide Complet',
      en: 'GTA VI Characters | Lucia Caminos, Jason Duval | Full Guide',
      es: 'Personajes GTA VI | Lucia Caminos, Jason Duval | Guia Completa',
    } as LangMap,
    desc: {
      fr: 'Les 2 protagonistes de GTA VI : Lucia Caminos et Jason Duval. Biographies, armes, relations et PNJ. Sortie 19 novembre 2026.',
      en: 'Both GTA VI protagonists: Lucia Caminos and Jason Duval. Bios, weapons, relationships & NPCs. Releasing November 19, 2026.',
      es: 'Los 2 protagonistas de GTA VI: Lucia Caminos y Jason Duval. Biografias, armas, relaciones y PNJ. 19 noviembre 2026.',
    } as LangMap,
  },
  story: {
    title: {
      fr: 'Histoire GTA VI | 5 Chapitres, Scenario & Lore Complet',
      en: 'GTA VI Story | 5 Chapters, Plot & Complete Lore Guide',
      es: 'Historia GTA VI | 5 Capitulos, Trama y Lore Completo',
    } as LangMap,
    desc: {
      fr: "L'histoire de GTA VI en 5 chapitres : Lucia et Jason, braquages, conspiration et Vice City. Rockstar Games. Sortie 19 novembre 2026.",
      en: 'GTA VI story across 5 chapters: Lucia and Jason, heists, conspiracy and Vice City. Rockstar Games. Release November 19, 2026.',
      es: 'La historia de GTA VI en 5 capitulos: Lucia y Jason, atracos, conspiracion y Vice City. Rockstar Games. 19 noviembre 2026.',
    } as LangMap,
  },
  world: {
    title: {
      fr: 'Carte Monde Ouvert GTA VI | 6 Regions de Leonida | Exploration',
      en: 'GTA VI Open World Map | 6 Regions of Leonida | Exploration Guide',
      es: 'Mapa Mundo Abierto GTA VI | 6 Regiones de Leonida | Exploracion',
    } as LangMap,
    desc: {
      fr: "Carte du monde ouvert de GTA VI : Leonida et ses 6 regions (Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, Mount Kalaga). Rockstar Games 2026.",
      en: "GTA VI open world map: Leonida and its 6 regions (Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, Mount Kalaga). Rockstar Games 2026.",
      es: 'Mapa del mundo abierto de GTA VI: Leonida y sus 6 regiones. Rockstar Games 2026.',
    } as LangMap,
  },
  lore: {
    title: {
      fr: 'Encyclopedie Lore GTA VI | Factions, Vice City & Leonida',
      en: 'GTA VI Lore Encyclopedia | Factions, Vice City & Leonida',
      es: 'Enciclopedia Lore GTA VI | Facciones, Vice City y Leonida',
    } as LangMap,
    desc: {
      fr: "Encyclopedie du lore GTA VI : monde criminel, Vice City, Leonida PD, cartels. Toutes les entrees cross-referencees. Rockstar Games 2026.",
      en: 'GTA VI lore encyclopedia: criminal underworld, Vice City, Leonida PD, cartels. All cross-referenced entries. Rockstar Games 2026.',
      es: 'Enciclopedia lore GTA VI: mundo criminal, Vice City, Leonida PD, carteles. Rockstar Games 2026.',
    } as LangMap,
  },
  glossary: {
    title: {
      fr: 'Glossaire GTA VI | Tous les Termes du Jeu Expliques',
      en: 'GTA VI Glossary | All Game Terms Explained',
      es: 'Glosario GTA VI | Todos los Terminos del Juego Explicados',
    } as LangMap,
    desc: {
      fr: 'Glossaire complet GTA VI : personnages, lieux, factions, mecaniques et vehicules. Dictionnaire du jeu Rockstar Games 2026.',
      en: 'Complete GTA VI glossary: characters, locations, factions, mechanics and vehicles. Rockstar Games 2026 game dictionary.',
      es: 'Glosario completo GTA VI: personajes, lugares, facciones, mecanicas y vehiculos. Rockstar Games 2026.',
    } as LangMap,
  },
  blog: {
    title: {
      fr: 'Blog GTA VI | Guides, Lore & Actualites | Wiki Fan',
      en: 'GTA VI Blog | Guides, Lore & News | Fan Wiki',
      es: 'Blog GTA VI | Guias, Lore y Noticias | Wiki Fan',
    } as LangMap,
    desc: {
      fr: 'Articles, guides et analyses GTA VI. Armes, vehicules, personnages, carte de Vice City. Sortie 19 novembre 2026. Rockstar Games.',
      en: 'GTA VI articles, guides & analysis. Weapons, vehicles, characters, Vice City map. Release November 19, 2026. Rockstar Games.',
      es: 'Articulos, guias y analisis GTA VI. Armas, vehiculos, personajes, mapa Vice City. 19 noviembre 2026. Rockstar Games.',
    } as LangMap,
  },
  about: {
    title: {
      fr: 'A Propos — GTA VI Wiki Fan Non-Officiel',
      en: 'About — GTA VI Unofficial Fan Wiki',
      es: 'Acerca de — GTA VI Wiki Fan No Oficial',
    } as LangMap,
    desc: {
      fr: "Site fan non-officiel de GTA VI par Rockstar Games. Non affilie a Rockstar Games ou Take-Two Interactive.",
      en: 'Unofficial GTA VI fan site. Not affiliated with Rockstar Games or Take-Two Interactive.',
      es: 'Sitio fan no oficial de GTA VI. No afiliado a Rockstar Games.',
    } as LangMap,
  },
  privacy: {
    title: {
      fr: 'Politique de Confidentialite | GTA VI Wiki Fan',
      en: 'Privacy Policy | GTA VI Fan Wiki',
      es: 'Politica de Privacidad | GTA VI Wiki Fan',
    } as LangMap,
    desc: {
      fr: 'Politique de confidentialite du Wiki Fan GTA VI.',
      en: 'GTA VI Fan Wiki privacy policy.',
      es: 'Politica de privacidad del Wiki Fan GTA VI.',
    } as LangMap,
  },
  items: {
    title: {
      fr: 'Base de Donnees Objets GTA VI | Armes & Equipement',
      en: 'GTA VI Item Database | Weapons & Equipment',
      es: 'Base de Datos de Objetos GTA VI | Armas y Equipo',
    } as LangMap,
    desc: {
      fr: 'Base de donnees complete des objets de GTA VI : armes, equipement et objets. Wiki fan.',
      en: 'Complete GTA VI item database: weapons, equipment and items. Fan wiki.',
      es: 'Base de datos completa de objetos GTA VI. Wiki fan.',
    } as LangMap,
  },
  vehicles: {
    title: {
      fr: 'Vehicules GTA VI | Voitures, Bateaux & Avions',
      en: 'GTA VI Vehicles | Cars, Boats & Planes',
      es: 'Vehiculos GTA VI | Coches, Barcos y Aviones',
    } as LangMap,
    desc: {
      fr: 'Guide complet des vehicules de GTA VI. Wiki fan.',
      en: 'Complete guide to all GTA VI vehicles. Fan wiki.',
      es: 'Guia completa de vehiculos de GTA VI. Wiki fan.',
    } as LangMap,
  },
  quests: {
    title: {
      fr: 'Missions GTA VI | Missions Principales & Secondaires',
      en: 'GTA VI Missions | Main & Side Missions',
      es: 'Misiones GTA VI | Misiones Principales y Secundarias',
    } as LangMap,
    desc: {
      fr: 'Toutes les missions de GTA VI. Wiki fan.',
      en: 'All GTA VI missions. Fan wiki.',
      es: 'Todas las misiones de GTA VI. Wiki fan.',
    } as LangMap,
  },
  weapons: {
    title: {
      fr: 'Armes GTA VI | Toutes les Armes Confirmees | Guide 2026',
      en: 'GTA VI Weapons | All Confirmed Weapons | Guide 2026',
      es: 'Armas GTA VI | Todas las Armas Confirmadas | Guia 2026',
    } as LangMap,
    desc: {
      fr: 'Guide complet des armes de GTA VI. Pistolets, fusils, SMG et plus. Rockstar Games 2026.',
      en: 'Complete guide to all GTA VI weapons. Pistols, rifles, SMGs and more. Rockstar Games 2026.',
      es: 'Guia completa de armas de GTA VI. Pistolas, rifles, SMG y mas. Rockstar Games 2026.',
    } as LangMap,
  },
  gallery: {
    title: {
      fr: 'Galerie Screenshots GTA VI | Images Officielles Vice City & Leonida',
      en: 'GTA VI Screenshot Gallery | Official Vice City & Leonida Images',
      es: 'Galeria Capturas GTA VI | Imagenes Oficiales Vice City y Leonida',
    } as LangMap,
    desc: {
      fr: 'Galerie complete de screenshots et images GTA VI : Vice City, personnages, vehicules, activites et vie nocturne. Rockstar Games 2026.',
      en: 'Complete gallery of GTA VI screenshots and images: Vice City, characters, vehicles, activities, and nightlife. Rockstar Games 2026.',
      es: 'Galeria completa de capturas e imagenes GTA VI: Vice City, personajes, vehiculos, actividades y vida nocturna. Rockstar Games 2026.',
    } as LangMap,
  },
  guides: {
    title: {
      fr: 'Guides GTA VI | Astuces, Strategies & Walkthrough',
      en: 'GTA VI Guides | Tips, Strategies & Walkthrough',
      es: 'Guias GTA VI | Consejos, Estrategias y Walkthrough',
    } as LangMap,
    desc: {
      fr: 'Guides complets GTA VI : astuces, strategies, walkthrough et tutoriels. Rockstar Games 2026.',
      en: 'Complete GTA VI guides: tips, strategies, walkthrough and tutorials. Rockstar Games 2026.',
      es: 'Guias completas GTA VI: consejos, estrategias, walkthrough y tutoriales. Rockstar Games 2026.',
    } as LangMap,
  },
  combat: {
    title: {
      fr: 'Systeme de Combat GTA VI | Mecaniques & Techniques',
      en: 'GTA VI Combat System | Mechanics & Techniques',
      es: 'Sistema de Combate GTA VI | Mecanicas y Tecnicas',
    } as LangMap,
    desc: {
      fr: 'Guide du systeme de combat de GTA VI : mecaniques, techniques et strategies. Rockstar Games 2026.',
      en: 'GTA VI combat system guide: mechanics, techniques and strategies. Rockstar Games 2026.',
      es: 'Guia del sistema de combate de GTA VI: mecanicas, tecnicas y estrategias. Rockstar Games 2026.',
    } as LangMap,
  },
  breadcrumb: {
    home: { fr: 'Accueil', en: 'Home', es: 'Inicio' } as LangMap,
    characters: { fr: 'Personnages', en: 'Characters', es: 'Personajes' } as LangMap,
    story: { fr: 'Histoire', en: 'Story', es: 'Historia' } as LangMap,
    world: { fr: 'Monde', en: 'World', es: 'Mundo' } as LangMap,
    lore: { fr: 'Lore', en: 'Lore', es: 'Saber' } as LangMap,
    glossary: { fr: 'Glossaire', en: 'Glossary', es: 'Glosario' } as LangMap,
    about: { fr: 'A Propos', en: 'About', es: 'Acerca de' } as LangMap,
    blog: { fr: 'Blog', en: 'Blog', es: 'Blog' } as LangMap,
    privacy: { fr: 'Politique de confidentialite', en: 'Privacy Policy', es: 'Politica de privacidad' } as LangMap,
    items: { fr: 'Objets', en: 'Items', es: 'Objetos' } as LangMap,
    vehicles: { fr: 'Vehicules', en: 'Vehicles', es: 'Vehiculos' } as LangMap,
    quests: { fr: 'Missions', en: 'Missions', es: 'Misiones' } as LangMap,
    weapons: { fr: 'Armes', en: 'Weapons', es: 'Armas' } as LangMap,
    gallery: { fr: 'Galerie', en: 'Gallery', es: 'Galeria' } as LangMap,
    guides: { fr: 'Guides', en: 'Guides', es: 'Guias' } as LangMap,
    combat: { fr: 'Combat', en: 'Combat', es: 'Combate' } as LangMap,
  },

  faq: {
    fr: [
      { question: 'Quelle est la date de sortie de GTA VI ?', answer: 'La date de sortie de GTA VI est le 19 novembre 2026 sur PlayStation 5 et Xbox Series X|S.' },
      { question: 'GTA VI sort-il sur PC ?', answer: 'Au lancement, GTA VI sera disponible sur PS5 et Xbox Series X|S. Une version PC sera probablement annoncee ulterieurement.' },
      { question: 'Qui sont les protagonistes de GTA VI ?', answer: 'GTA VI a deux protagonistes : Lucia Caminos, premiere protagoniste feminine de la serie GTA, et Jason Duval, un ex-militaire.' },
      { question: 'Ou se deroule GTA VI ?', answer: 'GTA VI se deroule dans l\'etat fictif de Leonida, inspire de la Floride, avec Vice City comme ville principale.' },
      { question: 'Combien de regions y a-t-il dans GTA VI ?', answer: 'Leonida comprend 6 regions : Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia et Mount Kalaga.' },
      { question: 'GTA VI a-t-il un mode multijoueur ?', answer: 'GTA VI aura un mode histoire solo avec deux protagonistes. Un mode en ligne est attendu apres le lancement.' },
      { question: 'Quel est le gameplay de GTA VI ?', answer: 'GTA VI est un jeu d\'action-aventure en monde ouvert avec des braquages, de la conduite, du tir et une histoire en 5 chapitres.' },
    ],
    en: [
      { question: 'When does GTA VI come out?', answer: 'GTA VI releases on November 19, 2026 on PlayStation 5 and Xbox Series X|S.' },
      { question: 'Is GTA VI coming to PC?', answer: 'At launch, GTA VI will be available on PS5 and Xbox Series X|S. A PC version will likely be announced later.' },
      { question: 'Who are the protagonists of GTA VI?', answer: 'GTA VI has two protagonists: Lucia Caminos, the first female GTA protagonist, and Jason Duval, an ex-military man.' },
      { question: 'Where is GTA VI set?', answer: 'GTA VI is set in the fictional state of Leonida, inspired by Florida, with Vice City as the main city.' },
      { question: 'How many regions are in GTA VI?', answer: 'Leonida has 6 regions: Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga.' },
      { question: 'Does GTA VI have multiplayer?', answer: 'GTA VI will have a single-player story mode with two protagonists. An online mode is expected after launch.' },
      { question: 'What is GTA VI gameplay like?', answer: 'GTA VI is an open-world action-adventure game with heists, driving, shooting, and a 5-chapter story.' },
    ],
    es: [
      { question: 'Cuando sale GTA VI?', answer: 'GTA VI se lanza el 19 de noviembre de 2026 en PS5 y Xbox Series X|S.' },
      { question: 'GTA VI sale en PC?', answer: 'Al lanzamiento, GTA VI estara disponible en PS5 y Xbox Series X|S. Una version PC se anunciara probablemente despues.' },
      { question: 'Quienes son los protagonistas de GTA VI?', answer: 'GTA VI tiene dos protagonistas: Lucia Caminos, la primera protagonista femenina de GTA, y Jason Duval, un exmilitar.' },
      { question: 'Donde se desarrolla GTA VI?', answer: 'GTA VI se desarrolla en Leonida, un estado ficticio inspirado en Florida, con Vice City como ciudad principal.' },
    ],
  } as Record<Lang, { question: string; answer: string }[]>,
};
