import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

export type BlogCategory = 'GUIDE' | 'LORE' | 'NEWS' | 'ANALYSIS';

export interface BlogArticle {
  id: string;
  slug: string;
  category: BlogCategory;
  title: Translations;
  excerpt: Translations;
  content: Translations;
  coverImage: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  tags: { fr: string; en: string; es?: string }[];
  seoTitle: Translations;
  seoDescription: Translations;
  relatedSlugs?: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'weapons-guide',
    slug: 'all-confirmed-weapons-gta-vi',
    category: 'GUIDE',
    coverImage: '',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-13',
    readingTime: 8,
    tags: [
      { fr: 'armes', en: 'weapons', es: 'armas' },
      { fr: 'guide', en: 'guide', es: 'guia' },
      { fr: 'gameplay', en: 'gameplay', es: 'jugabilidad' },
    ],
    title: {
      fr: 'Toutes les armes confirmees dans GTA VI',
      en: 'All Confirmed Weapons in GTA VI',
      es: 'Todas las armas confirmadas en GTA VI',
    },
    excerpt: {
      fr: 'Guide complet de toutes les armes confirmees dans GTA VI : pistolets, fusils, SMG, fusils a pompe, explosifs et armes de melee.',
      en: 'Complete guide to all confirmed weapons in GTA VI: pistols, rifles, SMGs, shotguns, explosives, and melee weapons.',
      es: 'Guia completa de todas las armas confirmadas en GTA VI.',
    },
    seoTitle: {
      fr: 'Toutes les armes GTA VI | Guide complet 2026',
      en: 'All GTA VI Weapons | Complete Guide 2026',
      es: 'Todas las armas GTA VI | Guia completa 2026',
    },
    seoDescription: {
      fr: 'Guide des armes de GTA VI. Pistolets, fusils, SMG et explosifs. Rockstar Games 2026.',
      en: 'GTA VI weapons guide. Pistols, rifles, SMGs and explosives. Rockstar Games 2026.',
      es: 'Guia de armas de GTA VI. Rockstar Games 2026.',
    },
    content: {
      fr: "GTA VI promet un arsenal d'armes diversifie et realiste, fidele a la tradition de la serie. Voici un guide complet de toutes les armes confirmees et speculees.\n\n## Pistolets\n\nLes pistolets sont les armes les plus accessibles du jeu. Lucia commence avec un pistolet semi-automatique basique, mais des modeles plus puissants deviennent disponibles au fil de la progression.\n\n## Fusils d'assaut\n\nLes fusils d'assaut offrent un equilibre entre puissance de feu et precision. Jason, grace a son passe militaire, excelle avec ces armes.\n\n## SMG (Pistolets-mitrailleurs)\n\nParfaits pour les situations de combat rapproche, les SMG permettent un tir rapide tout en restant mobile. Lucia les maitrise particulierement bien.\n\n## Fusils a pompe\n\nPuissants a courte portee, les fusils a pompe sont l'arme de predilection de Jason pour les confrontations directes.\n\n## Explosifs\n\nGrenades, C4, cocktails Molotov — les explosifs ajoutent une dimension strategique aux braquages et aux confrontations.\n\n## Armes de melee\n\nBarres de fer, battes de baseball, couteaux — le combat au corps a corps reste une option viable dans GTA VI.",
      en: "GTA VI promises a diverse and realistic arsenal of weapons, true to the series tradition. Here is a complete guide to all confirmed and speculated weapons.\n\n## Pistols\n\nPistols are the most accessible weapons in the game. Lucia starts with a basic semi-automatic pistol, but more powerful models become available as you progress.\n\n## Assault Rifles\n\nAssault rifles offer a balance between firepower and accuracy. Jason, thanks to his military background, excels with these weapons.\n\n## SMGs (Submachine Guns)\n\nPerfect for close-quarters combat situations, SMGs allow rapid fire while remaining mobile. Lucia handles them particularly well.\n\n## Shotguns\n\nPowerful at short range, shotguns are Jason's weapon of choice for direct confrontations.\n\n## Explosives\n\nGrenades, C4, Molotov cocktails — explosives add a strategic dimension to heists and confrontations.\n\n## Melee Weapons\n\nCrowbars, baseball bats, knives — melee combat remains a viable option in GTA VI.",
      es: "GTA VI promete un arsenal diverso y realista. Aqui esta una guia completa de todas las armas confirmadas.\n\n## Pistolas\n\nLas pistolas son las armas mas accesibles. Lucia comienza con una pistola semiautomatica basica.\n\n## Rifles de asalto\n\nLos rifles ofrecen equilibrio entre potencia y precision. Jason destaca con estas armas.\n\n## SMG\n\nPerfectos para combate cercano, los SMG permiten fuego rapido.\n\n## Escopetas\n\nPoderosas a corta distancia, son las favoritas de Jason.\n\n## Explosivos\n\nGranadas, C4, cocteles Molotov — anaden dimension estrategica.\n\n## Armas cuerpo a cuerpo\n\nBarras, bates de beisbol, cuchillos — el combate cuerpo a cuerpo sigue siendo viable.",
    },
    relatedSlugs: ['vice-city-map-confirmed-locations', 'gameplay-mechanics-whats-new'],
  },
  {
    id: 'map-guide',
    slug: 'vice-city-map-confirmed-locations',
    category: 'GUIDE',
    coverImage: '',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-13',
    readingTime: 10,
    tags: [
      { fr: 'carte', en: 'map', es: 'mapa' },
      { fr: 'vice city', en: 'vice city', es: 'vice city' },
      { fr: 'exploration', en: 'exploration', es: 'exploracion' },
    ],
    title: {
      fr: 'Vice City : carte et tous les lieux confirmes',
      en: 'Vice City Map: Every Confirmed Location',
      es: 'Mapa de Vice City: todas las ubicaciones confirmadas',
    },
    excerpt: {
      fr: 'Carte complete de Vice City et de l\'etat de Leonida. Tous les quartiers, regions et points d\'interet confirmes.',
      en: 'Complete map of Vice City and the state of Leonida. All confirmed districts, regions, and points of interest.',
      es: 'Mapa completo de Vice City y el estado de Leonida.',
    },
    seoTitle: {
      fr: 'Carte Vice City GTA VI | Tous les lieux confirmes 2026',
      en: 'Vice City Map GTA VI | All Confirmed Locations 2026',
      es: 'Mapa Vice City GTA VI | Todas las ubicaciones 2026',
    },
    seoDescription: {
      fr: 'Carte de Vice City et Leonida dans GTA VI. 6 regions, quartiers et points d\'interet. Rockstar Games 2026.',
      en: 'Vice City and Leonida map in GTA VI. 6 regions, districts and points of interest. Rockstar Games 2026.',
      es: 'Mapa de Vice City y Leonida en GTA VI. 6 regiones. Rockstar Games 2026.',
    },
    content: {
      fr: "L'etat de Leonida est le monde ouvert le plus ambitieux jamais cree par Rockstar Games. Inspire de la Floride, il comprend 6 regions distinctes.\n\n## Vice City\n\nLa metropole neon est le coeur de Leonida. Divisee en 6 quartiers — Ocean Beach, South Beach, Little Haiti, Little Havana, Venetian Islands et Crosstown — chaque zone a son propre caractere.\n\n## Leonida Keys\n\nUn archipel tropical au sud, inspire des Florida Keys. Eaux turquoise et trafic de drogue.\n\n## Grassrivers\n\nLes Everglades de Leonida. Marecages, alligators et courses de monster trucks.\n\n## Port Gellhorn\n\nUne ville portuaire en declin. Motels abandonnes et economie souterraine.\n\n## Ambrosia\n\nVille industrielle avec raffinerie de sucre et gangs de motards.\n\n## Mount Kalaga\n\nParc national montagneux. Chasse, peche et mystiques hillbilly.",
      en: "The state of Leonida is the most ambitious open world ever created by Rockstar Games. Inspired by Florida, it comprises 6 distinct regions.\n\n## Vice City\n\nThe neon metropolis is the heart of Leonida. Divided into 6 districts — Ocean Beach, South Beach, Little Haiti, Little Havana, Venetian Islands, and Crosstown — each zone has its own character.\n\n## Leonida Keys\n\nA tropical archipelago to the south, inspired by the Florida Keys. Turquoise waters and drug trafficking.\n\n## Grassrivers\n\nLeonida's Everglades. Swamps, alligators, and monster truck races.\n\n## Port Gellhorn\n\nA decaying port city. Abandoned motels and underground economy.\n\n## Ambrosia\n\nIndustrial town with sugar refinery and biker gangs.\n\n## Mount Kalaga\n\nMountainous national park. Hunting, fishing, and hillbilly mystics.",
      es: "El estado de Leonida es el mundo abierto mas ambicioso de Rockstar Games. Inspirado en Florida, comprende 6 regiones.\n\n## Vice City\n\nLa metropolis neon, dividida en 6 barrios.\n\n## Leonida Keys\n\nArchipielago tropical al sur.\n\n## Grassrivers\n\nLos Everglades de Leonida.\n\n## Port Gellhorn\n\nCiudad portuaria en declive.\n\n## Ambrosia\n\nCiudad industrial con refineria de azucar.\n\n## Mount Kalaga\n\nParque nacional montanoso.",
    },
    relatedSlugs: ['all-confirmed-weapons-gta-vi', 'all-confirmed-vehicles-gta-vi'],
  },
  {
    id: 'vehicles-guide',
    slug: 'all-confirmed-vehicles-gta-vi',
    category: 'GUIDE',
    coverImage: '',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-13',
    readingTime: 7,
    tags: [
      { fr: 'vehicules', en: 'vehicles', es: 'vehiculos' },
      { fr: 'guide', en: 'guide', es: 'guia' },
    ],
    title: {
      fr: 'Tous les vehicules confirmes dans GTA VI',
      en: 'All Confirmed Vehicles in GTA VI',
      es: 'Todos los vehiculos confirmados en GTA VI',
    },
    excerpt: {
      fr: 'Guide complet de tous les vehicules confirmes : voitures, motos, bateaux, avions et vehicules speciaux.',
      en: 'Complete guide to all confirmed vehicles: cars, motorcycles, boats, planes, and special vehicles.',
      es: 'Guia completa de todos los vehiculos confirmados.',
    },
    seoTitle: {
      fr: 'Tous les vehicules GTA VI | Guide complet 2026',
      en: 'All GTA VI Vehicles | Complete Guide 2026',
      es: 'Todos los vehiculos GTA VI | Guia completa 2026',
    },
    seoDescription: {
      fr: 'Guide des vehicules de GTA VI. Voitures, motos, bateaux et avions. Rockstar Games 2026.',
      en: 'GTA VI vehicles guide. Cars, motorcycles, boats and planes. Rockstar Games 2026.',
      es: 'Guia de vehiculos de GTA VI. Rockstar Games 2026.',
    },
    content: {
      fr: "GTA VI s'annonce comme le jeu avec le plus grand nombre de vehicules de la serie. Du muscle car americain au yacht de luxe, voici ce que nous savons.\n\n## Voitures\n\nDes muscle cars aux supercars, en passant par les berlines et les SUV, le parc automobile de GTA VI est immense. Le systeme de conduite a ete completement revu pour plus de realisme.\n\n## Motos\n\nDes choppers aux sportives, les motos sont un moyen de transport rapide et excitant, surtout dans les Grassrivers et a Ambrosia.\n\n## Bateaux\n\nEssentiels dans les Leonida Keys, les bateaux vont du jet ski au yacht en passant par les speedboats utilises pour le trafic de drogue.\n\n## Avions et helicopteres\n\nLes avions legers et les helicopteres offrent une perspective aerienne sur le vaste monde de Leonida.\n\n## Vehicules speciaux\n\nMonster trucks dans les Grassrivers, vehicules blindes pour les braquages et vehicules de police volables.",
      en: "GTA VI is shaping up to have the largest vehicle roster in the series. From American muscle cars to luxury yachts, here's what we know.\n\n## Cars\n\nFrom muscle cars to supercars, sedans to SUVs, GTA VI's car fleet is massive. The driving system has been completely overhauled for more realism.\n\n## Motorcycles\n\nFrom choppers to sport bikes, motorcycles are a fast and exciting means of transport, especially in Grassrivers and Ambrosia.\n\n## Boats\n\nEssential in the Leonida Keys, boats range from jet skis to yachts to speedboats used for drug trafficking.\n\n## Planes and Helicopters\n\nLight aircraft and helicopters offer an aerial perspective on Leonida's vast world.\n\n## Special Vehicles\n\nMonster trucks in Grassrivers, armored vehicles for heists, and stealable police vehicles.",
      es: "GTA VI tendra el mayor numero de vehiculos de la serie.\n\n## Coches\n\nDesde muscle cars hasta supercoches.\n\n## Motos\n\nDesde choppers hasta deportivas.\n\n## Barcos\n\nEsenciales en las Leonida Keys.\n\n## Aviones y helicopteros\n\nPerspectiva aerea de Leonida.\n\n## Vehiculos especiales\n\nMonster trucks, vehiculos blindados y vehiculos policiales.",
    },
    relatedSlugs: ['vice-city-map-confirmed-locations', 'gameplay-mechanics-whats-new'],
  },
  {
    id: 'mechanics-guide',
    slug: 'gameplay-mechanics-whats-new',
    category: 'ANALYSIS',
    coverImage: '',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-13',
    readingTime: 9,
    tags: [
      { fr: 'gameplay', en: 'gameplay', es: 'jugabilidad' },
      { fr: 'mecaniques', en: 'mechanics', es: 'mecanicas' },
      { fr: 'analyse', en: 'analysis', es: 'analisis' },
    ],
    title: {
      fr: 'Mecaniques de gameplay : quoi de neuf dans GTA VI',
      en: "Gameplay Mechanics: What's New in GTA VI",
      es: 'Mecanicas de juego: que hay de nuevo en GTA VI',
    },
    excerpt: {
      fr: "Analyse complete des nouvelles mecaniques de gameplay de GTA VI : double protagoniste, systeme de braquages, IA amelioree et plus.",
      en: "Complete analysis of GTA VI's new gameplay mechanics: dual protagonist, heist system, improved AI, and more.",
      es: "Analisis completo de las nuevas mecanicas de GTA VI.",
    },
    seoTitle: {
      fr: 'Mecaniques GTA VI | Quoi de neuf | Analyse 2026',
      en: "GTA VI Mechanics | What's New | Analysis 2026",
      es: 'Mecanicas GTA VI | Que hay de nuevo | Analisis 2026',
    },
    seoDescription: {
      fr: 'Analyse des mecaniques de gameplay de GTA VI. Double protagoniste, braquages et IA. Rockstar Games 2026.',
      en: 'Analysis of GTA VI gameplay mechanics. Dual protagonist, heists and AI. Rockstar Games 2026.',
      es: 'Analisis de las mecanicas de GTA VI. Rockstar Games 2026.',
    },
    content: {
      fr: "GTA VI introduit plusieurs mecaniques revolutionnaires pour la serie.\n\n## Double protagoniste\n\nPour la premiere fois dans GTA, vous jouez avec deux personnages : Lucia et Jason. Chacun a ses propres competences et son propre style de jeu. Vous pouvez alterner entre les deux pendant les missions.\n\n## Systeme de braquages evolue\n\nLe systeme de braquages est bien plus developpe que dans GTA V. Planification, reconnaissance, recrutement d'equipe et execution — chaque etape compte.\n\n## Intelligence artificielle amelioree\n\nLes PNJ reagissent de maniere plus realiste. Les pietons ont des routines quotidiennes, la police adapte sa strategie selon votre comportement.\n\n## Systeme de reputation\n\nVos actions influencent votre reputation dans chaque region de Leonida, affectant les interactions avec les gangs et les factions.\n\n## Economie dynamique\n\nLes prix des biens et les opportunites criminelles fluctuent en fonction de vos actions dans le monde.",
      en: "GTA VI introduces several revolutionary mechanics for the series.\n\n## Dual Protagonist\n\nFor the first time in GTA, you play as two characters: Lucia and Jason. Each has their own skills and playstyle. You can switch between them during missions.\n\n## Evolved Heist System\n\nThe heist system is much more developed than in GTA V. Planning, reconnaissance, crew recruitment, and execution — every step matters.\n\n## Improved Artificial Intelligence\n\nNPCs react more realistically. Pedestrians have daily routines, police adapt their strategy based on your behavior.\n\n## Reputation System\n\nYour actions influence your reputation in each region of Leonida, affecting interactions with gangs and factions.\n\n## Dynamic Economy\n\nGoods prices and criminal opportunities fluctuate based on your actions in the world.",
      es: "GTA VI introduce varias mecanicas revolucionarias.\n\n## Doble protagonista\n\nPor primera vez, juegas con Lucia y Jason.\n\n## Sistema de atracos evolucionado\n\nMas desarrollado que en GTA V.\n\n## IA mejorada\n\nPNJ mas realistas.\n\n## Sistema de reputacion\n\nTus acciones influyen en cada region.\n\n## Economia dinamica\n\nPrecios y oportunidades fluctuan.",
    },
    relatedSlugs: ['character-deep-dive-lucia-jason', 'all-confirmed-weapons-gta-vi'],
  },
  {
    id: 'character-deep-dive',
    slug: 'character-deep-dive-lucia-jason',
    category: 'LORE',
    coverImage: '',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-13',
    readingTime: 12,
    tags: [
      { fr: 'personnages', en: 'characters', es: 'personajes' },
      { fr: 'lucia', en: 'lucia', es: 'lucia' },
      { fr: 'jason', en: 'jason', es: 'jason' },
      { fr: 'lore', en: 'lore', es: 'lore' },
    ],
    title: {
      fr: 'Plongee dans les personnages : Lucia & Jason',
      en: 'Character Deep Dive: Lucia & Jason',
      es: 'Inmersion en los personajes: Lucia y Jason',
    },
    excerpt: {
      fr: 'Analyse approfondie des deux protagonistes de GTA VI : leurs histoires, motivations, relations et roles dans l\'intrigue.',
      en: 'In-depth analysis of GTA VI\'s two protagonists: their stories, motivations, relationships, and roles in the plot.',
      es: 'Analisis profundo de los dos protagonistas de GTA VI.',
    },
    seoTitle: {
      fr: 'Lucia & Jason GTA VI | Analyse des personnages 2026',
      en: 'Lucia & Jason GTA VI | Character Analysis 2026',
      es: 'Lucia y Jason GTA VI | Analisis de personajes 2026',
    },
    seoDescription: {
      fr: 'Analyse des personnages de GTA VI : Lucia Caminos et Jason Duval. Histoires, motivations et relations. Rockstar Games 2026.',
      en: 'GTA VI character analysis: Lucia Caminos and Jason Duval. Stories, motivations and relationships. Rockstar Games 2026.',
      es: 'Analisis de personajes de GTA VI. Rockstar Games 2026.',
    },
    content: {
      fr: "Lucia Caminos et Jason Duval sont les deux protagonistes de GTA VI, et ils representent une evolution majeure pour la serie.\n\n## Lucia Caminos : La pionniere\n\nLucia est la premiere protagoniste feminine de la serie GTA. Originaire de Liberty City, elle a ete emprisonnee au penitencier de Leonida pour avoir defendu sa famille. Determinee, intelligente et calculatrice, elle represente un nouveau type de heros dans l'univers GTA — quelqu'un pousse au crime non par cupidite mais par necessite.\n\nSes armes de predilection sont le pistolet et le SMG, et son style de jeu privilegie la precision et la furtivite.\n\n## Jason Duval : Le survivant\n\nJason est un ex-militaire qui a grandi dans les Leonida Keys, entoure d'arnaqueurs et de trafiquants. Impulsif et dote d'un sens aigu de la rue, il contraste avec l'approche calculee de Lucia. Ses armes de predilection sont le fusil et le fusil a pompe.\n\n## Leur dynamique\n\nLa relation entre Lucia et Jason est au coeur de GTA VI. Partenaires criminels et potentiels interets romantiques, leur dynamique evolue au fil des 5 chapitres. Ils se completent — la prudence de Lucia tempere l'impulsivite de Jason, et le courage de Jason pousse Lucia a prendre des risques qu'elle n'oserait pas seule.\n\n## Les PNJ cles\n\nAutour du duo gravitent des personnages essentiels : Cal Hampton (l'ami paranoiaque de Jason), Boobie Ike (le magnat de Vice City), Raul Bautista (le braqueur chevronne) et Brian Heder (le trafiquant des Keys).",
      en: "Lucia Caminos and Jason Duval are GTA VI's two protagonists, and they represent a major evolution for the series.\n\n## Lucia Caminos: The Pioneer\n\nLucia is the first female protagonist in the GTA series. Originally from Liberty City, she was imprisoned at Leonida Penitentiary for defending her family. Determined, smart, and calculated, she represents a new type of hero in the GTA universe — someone pushed to crime not by greed but by necessity.\n\nHer weapons of choice are the pistol and SMG, and her playstyle favors precision and stealth.\n\n## Jason Duval: The Survivor\n\nJason is an ex-military man who grew up in the Leonida Keys, surrounded by grifters and traffickers. Impulsive and street-smart, he contrasts with Lucia's calculated approach. His weapons of choice are the rifle and shotgun.\n\n## Their Dynamic\n\nThe relationship between Lucia and Jason is at the heart of GTA VI. Criminal partners and potential romantic interests, their dynamic evolves across the 5 chapters. They complement each other — Lucia's caution tempers Jason's impulsiveness, and Jason's courage pushes Lucia to take risks she wouldn't dare alone.\n\n## Key NPCs\n\nOrbiting the duo are essential characters: Cal Hampton (Jason's paranoid friend), Boobie Ike (Vice City mogul), Raul Bautista (seasoned bank robber), and Brian Heder (Keys drug runner).",
      es: "Lucia Caminos y Jason Duval son los dos protagonistas de GTA VI.\n\n## Lucia Caminos: La pionera\n\nPrimera protagonista femenina de GTA. Originaria de Liberty City, fue encarcelada en Leonida.\n\n## Jason Duval: El superviviente\n\nExmilitar de las Leonida Keys. Impulsivo y astuto.\n\n## Su dinamica\n\nLa relacion entre Lucia y Jason es el corazon de GTA VI.\n\n## PNJ clave\n\nCal Hampton, Boobie Ike, Raul Bautista y Brian Heder.",
    },
    relatedSlugs: ['vice-city-map-confirmed-locations', 'gameplay-mechanics-whats-new'],
  },
];
