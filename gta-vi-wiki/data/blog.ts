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
  tags: { fr: string; en: string; es?: string; pt?: string; it?: string; ko?: string; de?: string }[];
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
      { fr: 'armes', en: 'weapons', es: 'armas', de: 'weapons' },
      { fr: 'guide', en: 'guide', es: 'guia', de: 'guide' },
      { fr: 'gameplay', en: 'gameplay', es: 'jugabilidad', de: 'gameplay' },
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
      { fr: 'carte', en: 'map', es: 'mapa', de: 'map' },
      { fr: 'vice city', en: 'vice city', es: 'vice city', de: 'vice city' },
      { fr: 'exploration', en: 'exploration', es: 'exploracion', de: 'exploration' },
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
      { fr: 'vehicules', en: 'vehicles', es: 'vehiculos', de: 'vehicles' },
      { fr: 'guide', en: 'guide', es: 'guia', de: 'guide' },
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
      { fr: 'gameplay', en: 'gameplay', es: 'jugabilidad', de: 'gameplay' },
      { fr: 'mecaniques', en: 'mechanics', es: 'mecanicas', de: 'mechanics' },
      { fr: 'analyse', en: 'analysis', es: 'analisis', de: 'analysis' },
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
      { fr: 'personnages', en: 'characters', es: 'personajes', de: 'characters' },
      { fr: 'lucia', en: 'lucia', es: 'lucia', de: 'lucia' },
      { fr: 'jason', en: 'jason', es: 'jason', de: 'jason' },
      { fr: 'lore', en: 'lore', es: 'lore', de: 'lore' },
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
  // ─── GTA-1 — EVERYTHING WE KNOW ───
  {
    id: 'everything-we-know',
    slug: 'gta-6-release-date-everything-we-know',
    category: 'GUIDE',
    coverImage: '/gta-vi/jason-lucia-01-landscape.jpg',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-15',
    readingTime: 14,
    tags: [
      { fr: 'date de sortie', en: 'release date', es: 'fecha de lanzamiento', pt: 'data de lançamento', it: 'data di uscita', ko: '출시일', de: 'release date' },
      { fr: 'Rockstar', en: 'Rockstar', es: 'Rockstar', pt: 'Rockstar', it: 'Rockstar', ko: '록스타', de: 'Rockstar' },
      { fr: 'Vice City', en: 'Vice City', es: 'Vice City', pt: 'Vice City', it: 'Vice City', ko: '바이스 시티', de: 'Vice City' },
      { fr: 'Leonida', en: 'Leonida', es: 'Leonida', pt: 'Leonida', it: 'Leonida', ko: '레오니다', de: 'Leonida' },
      { fr: 'Lucia', en: 'Lucia', es: 'Lucia', pt: 'Lucia', it: 'Lucia', ko: '루시아', de: 'Lucia' },
      { fr: 'Jason', en: 'Jason', es: 'Jason', pt: 'Jason', it: 'Jason', ko: '제이슨', de: 'Jason' },
    ],
    title: {
      fr: 'GTA 6 : date de sortie, gameplay et tout ce que l\'on sait',
      en: 'GTA 6: Release Date, Gameplay & Everything We Know',
      es: 'GTA 6: fecha de lanzamiento, gameplay y todo lo que sabemos',
      pt: 'GTA 6: data de lançamento, gameplay e tudo que sabemos',
      it: 'GTA 6: data di uscita, gameplay e tutto ciò che sappiamo',
      ko: 'GTA 6: 출시일, 게임플레이, 알려진 모든 정보',
      de: 'GTA 6: Release Date, Gameplay & Everything We Know',
    },
    excerpt: {
      fr: 'Guide complet sur GTA 6 : date de sortie le 19 novembre 2026, double protagoniste Lucia & Jason, Vice City et Leonida, moteur RAGE amélioré et plus.',
      en: 'Complete guide to GTA 6: November 19, 2026 release date, dual protagonists Lucia & Jason, Vice City and Leonida, improved RAGE engine and more.',
      es: 'Guía completa de GTA 6: fecha de lanzamiento 19 de noviembre de 2026, protagonistas Lucia y Jason, Vice City y Leonida.',
      pt: 'Guia completo do GTA 6: lançamento em 19 de novembro de 2026, protagonistas Lucia e Jason, Vice City e Leonida.',
      it: 'Guida completa a GTA 6: uscita 19 novembre 2026, protagonisti Lucia e Jason, Vice City e Leonida.',
      ko: 'GTA 6 완벽 가이드: 2026년 11월 19일 출시, 듀얼 주인공 루시아 & 제이슨, 바이스 시티와 레오니다.',
      de: 'Complete guide to GTA 6: November 19, 2026 release date, dual protagonists Lucia & Jason, Vice City and Leonida, improved RAGE engine and more.',
    },
    seoTitle: {
      fr: 'GTA 6 | Date de sortie & tout savoir | Guide 2026',
      en: 'GTA 6 | Release Date & Everything We Know | Guide 2026',
      es: 'GTA 6 | Fecha de lanzamiento | Guía completa 2026',
      pt: 'GTA 6 | Data de lançamento | Guia completo 2026',
      it: 'GTA 6 | Data di uscita | Guida completa 2026',
      ko: 'GTA 6 | 출시일 & 총정리 | 가이드 2026',
      de: 'GTA 6 | Release Date & Everything We Know | Guide 2026',
    },
    seoDescription: {
      fr: 'Tout sur GTA 6 : sortie 19 novembre 2026, PS5/Xbox Series, Lucia & Jason, Vice City, Leonida. Rockstar Games.',
      en: 'Everything about GTA 6: November 19, 2026 release, PS5/Xbox Series, Lucia & Jason, Vice City, Leonida. Rockstar Games.',
      es: 'Todo sobre GTA 6: lanzamiento 19 noviembre 2026, PS5/Xbox Series, Lucia y Jason, Vice City. Rockstar Games.',
      pt: 'Tudo sobre GTA 6: lançamento 19 novembro 2026, PS5/Xbox Series, Lucia e Jason, Vice City. Rockstar Games.',
      it: 'Tutto su GTA 6: uscita 19 novembre 2026, PS5/Xbox Series, Lucia e Jason, Vice City. Rockstar Games.',
      ko: 'GTA 6 총정리: 2026년 11월 19일 출시, PS5/Xbox Series, 루시아 & 제이슨, 바이스 시티. 록스타 게임즈.',
      de: 'Everything about GTA 6: November 19, 2026 release, PS5/Xbox Series, Lucia & Jason, Vice City, Leonida. Rockstar Games.',
    },
    content: {
      fr: `GTA 6 est le jeu le plus attendu de la décennie. Rockstar Games a confirmé une sortie le **19 novembre 2026**, et les détails continuent d'émerger. Voici tout ce que l'on sait.

## Date de sortie et historique des reports

La date de sortie de GTA 6 est fixée au **19 novembre 2026**. Le chemin jusqu'ici a été long : initialement prévu pour 2025, le jeu a d'abord été repoussé à mai 2026, puis une seconde fois à novembre 2026. Take-Two Interactive a justifié ces reports par la volonté de "livrer le meilleur jeu possible".

## Plateformes

GTA 6 sortira sur **PlayStation 5** et **Xbox Series X|S** uniquement. Pas de version PS4, Xbox One ou Nintendo Switch. La version PC arrivera probablement plus tard, suivant le schéma habituel de Rockstar — GTA 5 avait mis près de deux ans à arriver sur PC après les consoles.

## Protagonistes : Lucia et Jason

Pour la première fois dans l'histoire de la série, GTA 6 propose un **duo de protagonistes** : Lucia Caminos et Jason Duval. Inspirés de Bonnie & Clyde, ils forment un couple de criminels dont la relation évolue au fil du jeu. Le joueur peut alterner entre les deux pendant les missions, chacun ayant ses propres compétences et son style de jeu.

Lucia est la première protagoniste féminine de la franchise GTA. Originaire de Liberty City, elle a été emprisonnée au pénitencier de Leonida. Jason est un ex-militaire des Leonida Keys, impulsif et débrouillard.

## Vice City et l'état de Leonida

Le jeu se déroule à **Vice City** et dans l'état fictif de **Leonida**, inspiré de la Floride contemporaine. Le cadre est les années 2020, avec une satire acerbe des réseaux sociaux, des influenceurs et de la culture américaine moderne.

L'état de Leonida comprend 6 régions distinctes : Vice City (la métropole), Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia et Mount Kalaga National Park. C'est le monde ouvert le plus ambitieux jamais créé par Rockstar.

## Moteur et technologie

GTA 6 tourne sur une version profondément améliorée du **moteur RAGE** (Rockstar Advanced Game Engine). Les améliorations incluent un système d'éclairage en temps réel, des animations faciales et corporelles d'un réalisme inédit, et un système météo dynamique.

## Marketing et précommandes

Rockstar a confirmé qu'une **campagne marketing** débutera pendant l'été 2026. Les précommandes ne sont pas encore ouvertes. Le prix estimé est de **69,99 $** pour l'édition standard, avec potentiellement des éditions premium à prix supérieur.`,

      en: `GTA 6 is the most anticipated game of the decade. Rockstar Games has confirmed a **November 19, 2026** release, and details continue to emerge. Here's everything we know.

## Release Date and Delay History

GTA 6's release date is set for **November 19, 2026**. The road here has been long: initially planned for 2025, the game was first pushed to May 2026, then again to November 2026. Take-Two Interactive justified these delays with the desire to "deliver the best game possible."

## Platforms

GTA 6 launches on **PlayStation 5** and **Xbox Series X|S** only. No PS4, Xbox One, or Nintendo Switch versions. The PC version will likely arrive later, following Rockstar's typical pattern — GTA 5 took nearly two years to reach PC after consoles.

## Protagonists: Lucia and Jason

For the first time in the series, GTA 6 features a **dual protagonist** setup: Lucia Caminos and Jason Duval. Inspired by Bonnie & Clyde, they form a criminal couple whose relationship evolves throughout the game. Players can switch between them during missions, each with their own skills and playstyle.

Lucia is the franchise's first female protagonist. Jason is an ex-military man from the Leonida Keys.

## Vice City and the State of Leonida

The game takes place in **Vice City** and the fictional state of **Leonida**, inspired by contemporary Florida. The setting is the 2020s, with sharp satire of social media, influencers, and modern American culture.

Leonida comprises 6 distinct regions: Vice City, Leonida Keys, Grassrivers, Port Gellhorn, Ambrosia, and Mount Kalaga National Park.

## Engine and Technology

GTA 6 runs on a deeply improved **RAGE engine** with real-time lighting, unprecedented facial animations, and dynamic weather.

## Marketing and Pre-orders

Rockstar confirmed a **marketing campaign** starting summer 2026. Pre-orders aren't open yet. Estimated price: **$69.99** standard.`,

      es: `GTA 6 es el juego más esperado de la década. Rockstar Games ha confirmado el lanzamiento para el **19 de noviembre de 2026**.

## Fecha de lanzamiento e historial de retrasos

Inicialmente previsto para 2025, fue retrasado a mayo 2026 y luego a noviembre 2026.

## Plataformas

PS5 y Xbox Series X|S solamente. Sin PS4 ni Xbox One. PC probablemente después.

## Protagonistas: Lucia y Jason

Primer dúo protagonista de la serie, inspirados en Bonnie & Clyde. Lucia es la primera protagonista femenina de GTA.

## Vice City y el estado de Leonida

Ambientado en Vice City y Leonida, inspirado en la Florida contemporánea. 6 regiones distintas.

## Motor y tecnología

Motor RAGE mejorado con iluminación en tiempo real y animaciones faciales sin precedentes.

## Marketing y reservas

Campaña de marketing verano 2026. Precio estimado: 69,99 $.`,

      pt: `GTA 6 é o jogo mais aguardado da década. A Rockstar Games confirmou o lançamento para **19 de novembro de 2026**.

## Data de lançamento e histórico de adiamentos

Inicialmente previsto para 2025, foi adiado para maio 2026 e depois para novembro 2026.

## Plataformas

PS5 e Xbox Series X|S apenas. Sem PS4 ou Xbox One. PC provavelmente depois.

## Protagonistas: Lucia e Jason

Primeiro duo protagonista da série, inspirados em Bonnie & Clyde. Lucia é a primeira protagonista feminina de GTA.

## Vice City e o estado de Leonida

Ambientado em Vice City e Leonida, inspirado na Flórida contemporânea. 6 regiões distintas.

## Motor e tecnologia

Motor RAGE aprimorado com iluminação em tempo real e animações faciais inéditas.`,

      it: `GTA 6 è il gioco più atteso del decennio. Rockstar Games ha confermato l'uscita per il **19 novembre 2026**.

## Data di uscita e storia dei rinvii

Inizialmente previsto per il 2025, è stato rinviato a maggio 2026 e poi a novembre 2026.

## Piattaforme

PS5 e Xbox Series X|S soltanto. Niente PS4 o Xbox One. PC probabilmente dopo.

## Protagonisti: Lucia e Jason

Primo duo protagonista della serie, ispirati a Bonnie & Clyde. Lucia è la prima protagonista femminile di GTA.

## Vice City e lo stato di Leonida

Ambientato a Vice City e Leonida, ispirato alla Florida contemporanea. 6 regioni distinte.

## Motore e tecnologia

Motore RAGE migliorato con illuminazione in tempo reale.`,

      ko: `GTA 6은 10년 만의 가장 기대되는 게임입니다. 록스타 게임즈는 **2026년 11월 19일** 출시를 확정했습니다.

## 출시일과 연기 역사

원래 2025년 예정이었으나 2026년 5월로, 다시 11월로 연기되었습니다.

## 플랫폼

PS5와 Xbox Series X|S 전용. PS4나 Xbox One 없음. PC는 나중에.

## 주인공: 루시아와 제이슨

시리즈 최초의 듀얼 주인공, 보니 & 클라이드에서 영감. 루시아는 GTA 최초의 여성 주인공.

## 바이스 시티와 레오니다 주

현대 플로리다에서 영감받은 바이스 시티와 레오니다. 6개의 구별된 지역.

## 엔진과 기술

실시간 조명과 전례 없는 페이셜 애니메이션을 갖춘 개선된 RAGE 엔진.`,
    },
    relatedSlugs: ['gta-6-trailer-3-when-next-reveal-rumors-2026', 'vice-city-map-confirmed-locations'],
  },
  // ─── GTA-2 — TRAILER 3 ───
  {
    id: 'trailer-3-rumors',
    slug: 'gta-6-trailer-3-when-next-reveal-rumors-2026',
    category: 'NEWS',
    coverImage: '/gta-vi/jason-lucia-motel-landscape.jpg',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-15',
    readingTime: 8,
    tags: [
      { fr: 'trailer', en: 'trailer', es: 'tráiler', pt: 'trailer', it: 'trailer', ko: '트레일러', de: 'trailer' },
      { fr: 'annonce', en: 'announcement', es: 'anuncio', pt: 'anúncio', it: 'annuncio', ko: '발표', de: 'announcement' },
      { fr: 'rumeurs', en: 'rumors', es: 'rumores', pt: 'rumores', it: 'voci', ko: '루머', de: 'rumors' },
      { fr: 'marketing', en: 'marketing', es: 'marketing', pt: 'marketing', it: 'marketing', ko: '마케팅', de: 'marketing' },
    ],
    title: {
      fr: 'GTA 6 Trailer 3 : quand sera le prochain reveal ?',
      en: 'GTA 6 Trailer 3: When Will the Next Reveal Be?',
      es: 'GTA 6 Tráiler 3: ¿cuándo será la próxima revelación?',
      pt: 'GTA 6 Trailer 3: quando será a próxima revelação?',
      it: 'GTA 6 Trailer 3: quando sarà la prossima rivelazione?',
      ko: 'GTA 6 트레일러 3: 다음 공개는 언제?',
      de: 'GTA 6 Trailer 3: When Will the Next Reveal Be?',
    },
    excerpt: {
      fr: 'Analyse des indices sur le prochain trailer de GTA 6 : fin du roadmap GTA Online, identifiants PlayStation et campagne marketing estivale.',
      en: 'Analysis of clues about the next GTA 6 trailer: GTA Online roadmap end, PlayStation identifiers, and summer marketing campaign.',
      es: 'Análisis de las pistas sobre el próximo tráiler de GTA 6.',
      pt: 'Análise das pistas sobre o próximo trailer de GTA 6.',
      it: 'Analisi degli indizi sul prossimo trailer di GTA 6.',
      ko: 'GTA 6 다음 트레일러 단서 분석.',
      de: 'Analysis of clues about the next GTA 6 trailer: GTA Online roadmap end, PlayStation identifiers, and summer marketing campaign.',
    },
    seoTitle: {
      fr: 'GTA 6 Trailer 3 | Quand ? Rumeurs & indices | 2026',
      en: 'GTA 6 Trailer 3 | When? Rumors & Clues | 2026',
      es: 'GTA 6 Tráiler 3 | ¿Cuándo? Rumores | 2026',
      pt: 'GTA 6 Trailer 3 | Quando? Rumores | 2026',
      it: 'GTA 6 Trailer 3 | Quando? Voci e indizi | 2026',
      ko: 'GTA 6 트레일러 3 | 언제? 루머 & 단서 | 2026',
      de: 'GTA 6 Trailer 3 | When? Rumors & Clues | 2026',
    },
    seoDescription: {
      fr: 'Quand sort le trailer 3 de GTA 6 ? Indices : roadmap GTA Online, fuites PlayStation, marketing été 2026. Rockstar Games.',
      en: 'When is GTA 6 trailer 3? Clues: GTA Online roadmap, PlayStation leaks, summer 2026 marketing. Rockstar Games.',
      es: '¿Cuándo sale el tráiler 3 de GTA 6? Pistas del roadmap y marketing. Rockstar Games.',
      pt: 'Quando sai o trailer 3 de GTA 6? Pistas do roadmap e marketing. Rockstar Games.',
      it: 'Quando esce il trailer 3 di GTA 6? Indizi dal roadmap e marketing. Rockstar Games.',
      ko: 'GTA 6 트레일러 3은 언제? 로드맵과 마케팅 단서. 록스타 게임즈.',
      de: 'When is GTA 6 trailer 3? Clues: GTA Online roadmap, PlayStation leaks, summer 2026 marketing. Rockstar Games.',
    },
    content: {
      fr: `Le dernier trailer de GTA 6 — le second — est sorti en 2024, et depuis, le silence de Rockstar alimente les spéculations. Quand verrons-nous le troisième trailer ?

## Le silence de Rockstar

Rockstar Games est connu pour sa communication minimaliste. Après deux trailers qui ont battu tous les records de vues sur YouTube, le studio n'a plus rien montré. Ce silence est volontaire : Rockstar maîtrise l'art du teasing et sait que l'attente augmente l'anticipation.

## La fin du roadmap GTA Online

Un indice majeur : le roadmap de contenu de **GTA Online s'arrête au 1er avril 2026**, laissant un vide suspect. Historiquement, les mises à jour de GTA Online ont toujours été planifiées bien à l'avance. Cet arrêt brutal pourrait signifier que Rockstar se prépare à pivoter toute son attention vers GTA 6.

## Les identifiants PlayStation

Des identifiants liés à GTA 6 sont brièvement apparus dans la **base de données PlayStation** avant d'être retirés. Ce type de fuite se produit généralement quand un éditeur prépare la page produit du jeu — signe que les précommandes pourraient bientôt ouvrir.

## La campagne marketing estivale

**Take-Two Interactive** a confirmé qu'une campagne marketing pour GTA 6 débutera pendant l'été 2026. Un reveal printanier (avril-mai) serait légèrement en avance sur ce planning mais pas impossible, vu le niveau d'anticipation.

## Ce que les sources internes disent

Un ancien employé de Rockstar a partagé sur Reddit que le jeu atteint un **niveau de réalisme comparable à The Last of Us Part 2**, mais dans un monde ouvert massif. Si cette affirmation est vraie, le prochain trailer devrait être visuellement spectaculaire.

## Verdict

Le timing le plus probable pour le Trailer 3 est entre **mai et juillet 2026**, coïncidant avec le début de la campagne marketing. Un reveal lors d'un événement gaming majeur (E3, Summer Game Fest) est possible mais Rockstar préfère généralement ses propres canaux.

**Important** : ces analyses sont basées sur des indices et des patterns passés. Rien n'est confirmé tant que Rockstar ne communique pas officiellement.`,

      en: `The last GTA 6 trailer — the second one — dropped in 2024, and since then, Rockstar's silence has fueled speculation. When will we see trailer 3?

## Rockstar's Silence

Rockstar Games is known for minimal communication. After two record-breaking trailers on YouTube, the studio has shown nothing more.

## GTA Online Roadmap End

A major clue: the **GTA Online content roadmap stops at April 1, 2026**, leaving a suspicious gap. This abrupt stop could mean Rockstar is preparing to pivot all attention to GTA 6.

## PlayStation Identifiers

GTA 6 identifiers briefly appeared in the **PlayStation database** before being removed — a sign pre-orders might open soon.

## Summer Marketing Campaign

**Take-Two Interactive** confirmed a GTA 6 marketing campaign starting summer 2026. A spring reveal would be slightly early but possible.

## What Internal Sources Say

A former Rockstar employee shared on Reddit that the game achieves **realism comparable to The Last of Us Part 2** in an open world.

## Verdict

Most likely timing for Trailer 3: **May to July 2026**. A reveal at a major gaming event is possible but Rockstar prefers its own channels.`,

      es: `El último tráiler de GTA 6 salió en 2024. ¿Cuándo veremos el tercero?

## El silencio de Rockstar

Rockstar es conocido por su comunicación mínima. El roadmap de GTA Online se detiene el 1 de abril de 2026. Identificadores de GTA 6 aparecieron brevemente en la base de datos de PlayStation. Take-Two confirmó una campaña de marketing para el verano 2026.

## Veredicto

El momento más probable: mayo a julio 2026. Todo basado en indicios, nada confirmado oficialmente.`,

      pt: `O último trailer de GTA 6 saiu em 2024. Quando veremos o terceiro?

## O silêncio da Rockstar

O roadmap do GTA Online para em 1º de abril de 2026. Identificadores de GTA 6 apareceram brevemente no banco de dados do PlayStation. A Take-Two confirmou campanha de marketing para o verão 2026.

## Veredito

O momento mais provável: maio a julho 2026. Tudo baseado em indícios.`,

      it: `L'ultimo trailer di GTA 6 è uscito nel 2024. Quando vedremo il terzo?

## Il silenzio di Rockstar

La roadmap di GTA Online si ferma al 1° aprile 2026. Identificatori di GTA 6 sono apparsi brevemente nel database PlayStation. Take-Two ha confermato una campagna marketing per l'estate 2026.

## Verdetto

Il momento più probabile: maggio-luglio 2026.`,

      ko: `GTA 6의 마지막 트레일러는 2024년에 공개되었습니다. 세 번째는 언제 볼 수 있을까요?

## 록스타의 침묵

GTA 온라인 로드맵이 2026년 4월 1일에 중단됩니다. GTA 6 식별자가 플레이스테이션 데이터베이스에 잠시 나타났습니다. 테이크투가 2026년 여름 마케팅 캠페인을 확인했습니다.

## 판단

가장 가능성 높은 시기: 2026년 5월~7월.`,
    },
    relatedSlugs: ['gta-6-release-date-everything-we-know', 'gta-6-price-editions-preorder-what-to-expect'],
  },
  // ─── GTA-3 — PRICE & EDITIONS ───
  {
    id: 'price-editions',
    slug: 'gta-6-price-editions-preorder-what-to-expect',
    category: 'GUIDE',
    coverImage: '/gta-vi/vice-city-postcard-landscape.jpg',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-15',
    readingTime: 7,
    tags: [
      { fr: 'prix', en: 'price', es: 'precio', pt: 'preço', it: 'prezzo', ko: '가격', de: 'price' },
      { fr: 'précommande', en: 'preorder', es: 'reserva', pt: 'pré-venda', it: 'preordine', ko: '사전 주문', de: 'preorder' },
      { fr: 'éditions', en: 'editions', es: 'ediciones', pt: 'edições', it: 'edizioni', ko: '에디션', de: 'editions' },
      { fr: 'Game Pass', en: 'Game Pass', es: 'Game Pass', pt: 'Game Pass', it: 'Game Pass', ko: '게임 패스', de: 'Game Pass' },
    ],
    title: {
      fr: 'GTA 6 : prix, éditions et précommandes — à quoi s\'attendre',
      en: 'GTA 6: Price, Editions & Pre-orders — What to Expect',
      es: 'GTA 6: precio, ediciones y reservas — qué esperar',
      pt: 'GTA 6: preço, edições e pré-venda — o que esperar',
      it: 'GTA 6: prezzo, edizioni e preordini — cosa aspettarsi',
      ko: 'GTA 6: 가격, 에디션, 사전 주문 — 기대할 것',
      de: 'GTA 6: Price, Editions & Pre-orders — What to Expect',
    },
    excerpt: {
      fr: 'Analyse des prix estimés, éditions potentielles et précommandes de GTA 6. Ce que les précédents GTA nous apprennent.',
      en: 'Analysis of estimated prices, potential editions and pre-orders for GTA 6. What previous GTAs tell us.',
      es: 'Análisis de precios estimados, ediciones y reservas de GTA 6.',
      pt: 'Análise de preços estimados, edições e pré-vendas de GTA 6.',
      it: 'Analisi dei prezzi stimati, edizioni e preordini di GTA 6.',
      ko: 'GTA 6 예상 가격, 잠재적 에디션, 사전 주문 분석.',
      de: 'Analysis of estimated prices, potential editions and pre-orders for GTA 6. What previous GTAs tell us.',
    },
    seoTitle: {
      fr: 'Prix GTA 6 | Éditions & Précommande | Guide 2026',
      en: 'GTA 6 Price | Editions & Pre-order | Guide 2026',
      es: 'Precio GTA 6 | Ediciones y Reserva | Guía 2026',
      pt: 'Preço GTA 6 | Edições e Pré-venda | Guia 2026',
      it: 'Prezzo GTA 6 | Edizioni e Preordine | Guida 2026',
      ko: 'GTA 6 가격 | 에디션 & 사전 주문 | 가이드 2026',
      de: 'GTA 6 Price | Editions & Pre-order | Guide 2026',
    },
    seoDescription: {
      fr: 'Prix et éditions de GTA 6 : estimation 69,99 $, éditions standard/spéciale/collector. Précommandes et Game Pass. Rockstar Games 2026.',
      en: 'GTA 6 price and editions: estimated $69.99, standard/special/collector editions. Pre-orders and Game Pass. Rockstar Games 2026.',
      es: 'Precio y ediciones de GTA 6: estimación 69,99 $. Reservas y Game Pass. Rockstar Games 2026.',
      pt: 'Preço e edições de GTA 6: estimativa $69,99. Pré-vendas e Game Pass. Rockstar Games 2026.',
      it: 'Prezzo ed edizioni di GTA 6: stima $69,99. Preordini e Game Pass. Rockstar Games 2026.',
      ko: 'GTA 6 가격과 에디션: 예상 $69.99. 사전 주문과 게임 패스. 록스타 게임즈 2026.',
      de: 'GTA 6 price and editions: estimated $69.99, standard/special/collector editions. Pre-orders and Game Pass. Rockstar Games 2026.',
    },
    content: {
      fr: `Rockstar Games n'a encore annoncé aucun prix officiel ni ouvert les précommandes pour GTA 6. Voici ce que les analystes prévoient et ce que l'histoire de la franchise nous enseigne.

## Prix estimé

Les analystes du secteur s'accordent sur un prix de **69,99 $** (environ 69,99 €) pour l'édition standard de GTA 6. Ce prix est devenu la norme pour les jeux AAA next-gen depuis 2022. Certains spéculent sur un prix potentiellement supérieur — jusqu'à 79,99 $ — étant donné l'envergure exceptionnelle du projet, mais rien ne le confirme.

## Précommandes

Les précommandes de GTA 6 **ne sont pas encore ouvertes**. Compte tenu de la campagne marketing prévue pour l'été 2026, il est probable que les précommandes ouvrent entre mai et août 2026. Les fuites d'identifiants PlayStation suggèrent que la page produit est en préparation.

## Éditions probables

En se basant sur le schéma de GTA 5, on peut s'attendre à trois éditions :

**Standard** (~69,99 $) : Le jeu de base, sans bonus supplémentaire. Suffisant pour l'immense majorité des joueurs.

**Spéciale** (~89,99-99,99 $) : Le jeu plus des bonus numériques — argent in-game, véhicules exclusifs, accès anticipé à du contenu GTA Online 2.

**Collector** (~149,99-199,99 $) : Tout le contenu numérique plus des objets physiques — SteelBook, carte en tissu de Leonida, figurine, art book.

## Pas de Game Pass day one

Take-Two Interactive, la maison-mère de Rockstar, a clairement indiqué que GTA 6 ne sera **pas disponible sur Game Pass au lancement**. Le modèle économique de GTA repose sur la vente unitaire à plein tarif. Avec des revenus projetés de plus de 3 milliards de dollars au lancement, un accord Game Pass serait économiquement contre-productif.

## Version PC

La version PC arrivera probablement **après les consoles**, suivant le pattern habituel de Rockstar. GTA 5 avait mis 18 mois à arriver sur PC. Red Dead Redemption 2 avait pris un an. Pour GTA 6, comptez probablement 2027-2028.

**Rappel important** : toutes ces informations sont des estimations basées sur les patterns passés et les analyses du marché. Rien n'est confirmé officiellement par Rockstar Games.`,

      en: `Rockstar Games hasn't announced any official pricing or opened pre-orders for GTA 6 yet. Here's what analysts predict and what franchise history tells us.

## Estimated Price

Industry analysts agree on a **$69.99** standard edition price. Some speculate potentially higher — up to $79.99 — given the project's exceptional scale, but nothing confirms this.

## Pre-orders

GTA 6 pre-orders **aren't open yet**. Given the summer 2026 marketing campaign, pre-orders likely open between May and August 2026.

## Likely Editions

Based on GTA 5's pattern, expect three editions: Standard (~$69.99), Special (~$89.99-99.99), and Collector (~$149.99-199.99).

## No Game Pass Day One

Take-Two has clearly indicated GTA 6 **won't be on Game Pass at launch**. With projected revenues of $3 billion+, a Game Pass deal would be counterproductive.

## PC Version

PC will likely arrive **after consoles**, following Rockstar's typical pattern.`,

      es: `Rockstar no ha anunciado precio oficial ni reservas. Precio estimado: **69,99 $**. Sin Game Pass al lanzamiento. PC probablemente después.`,
      pt: `A Rockstar não anunciou preço oficial nem pré-vendas. Preço estimado: **$69,99**. Sem Game Pass no lançamento. PC provavelmente depois.`,
      it: `Rockstar non ha annunciato prezzo ufficiale né preordini. Prezzo stimato: **$69,99**. Niente Game Pass al lancio. PC probabilmente dopo.`,
      ko: `록스타는 공식 가격이나 사전 주문을 발표하지 않았습니다. 예상 가격: **$69.99**. 출시 시 게임 패스 없음. PC는 나중에.`,
    },
    relatedSlugs: ['gta-6-release-date-everything-we-know', 'gta-6-xbox-game-pass-day-one-unlikely'],
  },
  // ─── GTA-4 — GAMING CALENDAR IMPACT ───
  {
    id: 'gaming-calendar-impact',
    slug: 'gta-6-impact-2026-gaming-calendar-empty-q4',
    category: 'NEWS',
    coverImage: '/gta-vi/jason-lucia-02-logos-landscape.jpg',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-15',
    readingTime: 10,
    tags: [
      { fr: 'industrie', en: 'industry', es: 'industria', pt: 'indústria', it: 'industria', ko: '산업', de: 'industry' },
      { fr: 'calendrier', en: 'calendar', es: 'calendario', pt: 'calendário', it: 'calendario', ko: '캘린더', de: 'calendar' },
      { fr: 'Q4', en: 'Q4', es: 'Q4', pt: 'Q4', it: 'Q4', ko: 'Q4', de: 'Q4' },
      { fr: 'impact', en: 'impact', es: 'impacto', pt: 'impacto', it: 'impatto', ko: '영향', de: 'impact' },
    ],
    title: {
      fr: 'GTA 6 et le calendrier gaming 2026 : le Q4 fantôme',
      en: 'GTA 6 and the 2026 Gaming Calendar: The Ghost Q4',
      es: 'GTA 6 y el calendario gaming 2026: el Q4 fantasma',
      pt: 'GTA 6 e o calendário gaming 2026: o Q4 fantasma',
      it: 'GTA 6 e il calendario gaming 2026: il Q4 fantasma',
      ko: 'GTA 6과 2026 게이밍 캘린더: 유령 Q4',
      de: 'GTA 6 and the 2026 Gaming Calendar: The Ghost Q4',
    },
    excerpt: {
      fr: 'Comment GTA 6 a vidé le Q4 2026 : aucun AAA majeur n\'ose sortir en même temps que Rockstar. Analyse de l\'effet iceberg.',
      en: 'How GTA 6 emptied Q4 2026: no major AAA dares release alongside Rockstar. Analysis of the iceberg effect.',
      es: 'Cómo GTA 6 vació el Q4 2026. Análisis del efecto iceberg.',
      pt: 'Como GTA 6 esvaziou o Q4 2026. Análise do efeito iceberg.',
      it: 'Come GTA 6 ha svuotato il Q4 2026. Analisi dell\'effetto iceberg.',
      ko: 'GTA 6이 2026년 Q4를 비운 방법. 아이스버그 효과 분석.',
      de: 'How GTA 6 emptied Q4 2026: no major AAA dares release alongside Rockstar. Analysis of the iceberg effect.',
    },
    seoTitle: {
      fr: 'GTA 6 impact calendrier 2026 | Q4 vide | Analyse',
      en: 'GTA 6 2026 Calendar Impact | Empty Q4 | Analysis',
      es: 'GTA 6 impacto calendario 2026 | Q4 vacío | Análisis',
      pt: 'GTA 6 impacto calendário 2026 | Q4 vazio | Análise',
      it: 'GTA 6 impatto calendario 2026 | Q4 vuoto | Analisi',
      ko: 'GTA 6 2026 캘린더 영향 | 빈 Q4 | 분석',
      de: 'GTA 6 2026 Calendar Impact | Empty Q4 | Analysis',
    },
    seoDescription: {
      fr: 'L\'impact de GTA 6 sur le calendrier gaming 2026. Q4 vide, effet iceberg, reports en cascade. Analyse complète.',
      en: 'GTA 6 impact on 2026 gaming calendar. Empty Q4, iceberg effect, cascading delays. Complete analysis.',
      es: 'Impacto de GTA 6 en el calendario 2026. Q4 vacío y efecto iceberg.',
      pt: 'Impacto do GTA 6 no calendário 2026. Q4 vazio e efeito iceberg.',
      it: 'Impatto di GTA 6 sul calendario 2026. Q4 vuoto ed effetto iceberg.',
      ko: 'GTA 6의 2026 게이밍 캘린더 영향. 빈 Q4와 아이스버그 효과.',
      de: 'GTA 6 impact on 2026 gaming calendar. Empty Q4, iceberg effect, cascading delays. Complete analysis.',
    },
    content: {
      fr: `GTA 6 ne se contente pas d'être le jeu le plus attendu de 2026 — il a littéralement redessiné le calendrier de sorties de toute l'industrie. Le quatrième trimestre 2026 ressemble à un désert, et c'est entièrement la faute de Rockstar.

## Un Q4 fantôme

Le Q4 2026 (octobre-décembre) est **quasi vide** d'un point de vue AAA. Aucun éditeur majeur n'a annoncé de date de sortie dans cette fenêtre. C'est sans précédent pour la période habituellement la plus chargée de l'année — celle des fêtes de fin d'année, qui représente environ **40% des ventes annuelles** de jeux vidéo.

## Un début d'année surchargé

En contraste, la période janvier-septembre 2026 est exceptionnellement chargée. Crimson Desert (mars), Marathon (Bungie), Saros, Forza Horizon 6 — les éditeurs ont concentré leurs sorties bien avant la fenêtre de GTA 6.

**Marvel's Wolverine** (septembre) et **Fable** (automne) se sont positionnés stratégiquement juste avant GTA 6, espérant capturer l'attention des joueurs avant que Rockstar n'absorbe tout.

## L'effet domino des reports

Les deux reports successifs de GTA 6 ont forcé les éditeurs à **replanifier deux fois**. Quand le jeu était prévu pour 2025, certains avaient planifié leurs sorties en conséquence. Le premier report à mai 2026 a provoqué une première vague de réorganisation. Le second report à novembre a vidé le Q4.

Même des jeux sans date confirmée — comme **The Elder Scrolls VI** et **Marvel 1943: Rise of Hydra** — sont désormais attendus en 2027, leurs éditeurs préférant éviter entièrement le voisinage de GTA 6.

## L'effet iceberg

Les analystes de l'industrie parlent de "l'effet iceberg" : GTA 6 **absorbe tout le budget gaming des joueurs**. Quand un joueur sait qu'il va dépenser 70-100 $ pour GTA 6 en novembre, il réduit ses achats d'octobre et hésite sur les sorties de décembre. L'impact financier dépasse largement la seule semaine de sortie.

## Le risque du report fantôme

Et si Rockstar reporte à nouveau ? Le scénario est improbable mais pas impossible. Si GTA 6 glisse à 2027, le Q4 2026 sera vide pour rien — et les éditeurs qui ont évité cette fenêtre auront perdu une opportunité. C'est le paradoxe : GTA 6 domine le Q4 2026 même s'il n'y est pas encore officiellement.`,

      en: `GTA 6 isn't just the most anticipated game of 2026 — it has literally redrawn the entire industry's release calendar. Q4 2026 looks like a desert, and it's entirely Rockstar's doing.

## A Ghost Q4

Q4 2026 (October-December) is **nearly empty** from a AAA perspective. No major publisher has announced a release date in this window. This is unprecedented for the usually busiest period — the holiday season represents about **40% of annual game sales**.

## An Overloaded Start

January-September 2026 is exceptionally packed. Publishers have concentrated releases well before GTA 6's window.

## The Domino Effect

GTA 6's two successive delays forced publishers to **replan twice**. Even undated games like Elder Scrolls VI are now expected in 2027.

## The Iceberg Effect

GTA 6 **absorbs players' entire gaming budget**. The financial impact extends far beyond launch week.

## The Ghost Delay Risk

If Rockstar delays again, Q4 will be empty for nothing.`,

      es: `GTA 6 ha rediseñado el calendario de la industria. El Q4 2026 está casi vacío. Los editores concentraron sus lanzamientos antes de noviembre. El "efecto iceberg" absorbe todo el presupuesto de los jugadores.`,
      pt: `GTA 6 redesenhou o calendário da indústria. O Q4 2026 está quase vazio. As editoras concentraram seus lançamentos antes de novembro. O "efeito iceberg" absorve todo o orçamento dos jogadores.`,
      it: `GTA 6 ha ridisegnato il calendario dell'industria. Il Q4 2026 è quasi vuoto. Gli editori hanno concentrato le uscite prima di novembre. L'"effetto iceberg" assorbe tutto il budget dei giocatori.`,
      ko: `GTA 6은 업계 출시 캘린더를 재편했습니다. 2026년 Q4는 거의 비어 있습니다. 퍼블리셔들은 11월 전에 출시를 집중했습니다. "아이스버그 효과"가 플레이어의 전체 예산을 흡수합니다.`,
    },
    relatedSlugs: ['gta-6-release-date-everything-we-know', 'gta-6-trailer-3-when-next-reveal-rumors-2026'],
  },
  // ─── GTA-5 — GAME PASS ───
  {
    id: 'game-pass',
    slug: 'gta-6-xbox-game-pass-day-one-unlikely',
    category: 'NEWS',
    coverImage: '/gta-vi/cal-hampton-landscape.jpg',
    author: 'GTA VI Wiki',
    publishedAt: '2026-03-15',
    readingTime: 6,
    tags: [
      { fr: 'Game Pass', en: 'Game Pass', es: 'Game Pass', pt: 'Game Pass', it: 'Game Pass', ko: '게임 패스', de: 'Game Pass' },
      { fr: 'Xbox', en: 'Xbox', es: 'Xbox', pt: 'Xbox', it: 'Xbox', ko: 'Xbox', de: 'Xbox' },
      { fr: 'prix', en: 'price', es: 'precio', pt: 'preço', it: 'prezzo', ko: '가격', de: 'price' },
      { fr: 'abonnement', en: 'subscription', es: 'suscripción', pt: 'assinatura', it: 'abbonamento', ko: '구독', de: 'subscription' },
    ],
    title: {
      fr: 'GTA 6 sur Game Pass ? Pourquoi c\'est très improbable',
      en: 'GTA 6 on Game Pass? Why It\'s Very Unlikely',
      es: 'GTA 6 en Game Pass? Por qué es muy improbable',
      pt: 'GTA 6 no Game Pass? Por que é muito improvável',
      it: 'GTA 6 su Game Pass? Perché è molto improbabile',
      ko: 'GTA 6 게임 패스? 왜 매우 가능성이 낮은지',
      de: 'GTA 6 on Game Pass? Why It\'s Very Unlikely',
    },
    excerpt: {
      fr: 'GTA 6 sera-t-il sur Xbox Game Pass au lancement ? Analyse des raisons économiques et stratégiques qui rendent cette hypothèse quasi impossible.',
      en: 'Will GTA 6 be on Xbox Game Pass at launch? Analysis of economic and strategic reasons making this hypothesis nearly impossible.',
      es: '¿Estará GTA 6 en Game Pass al lanzamiento? Análisis económico.',
      pt: 'GTA 6 estará no Game Pass no lançamento? Análise econômica.',
      it: 'GTA 6 sarà su Game Pass al lancio? Analisi economica.',
      ko: 'GTA 6이 출시 시 게임 패스에? 경제적 분석.',
      de: 'Will GTA 6 be on Xbox Game Pass at launch? Analysis of economic and strategic reasons making this hypothesis nearly impossible.',
    },
    seoTitle: {
      fr: 'GTA 6 Game Pass | Improbable au lancement | Analyse',
      en: 'GTA 6 Game Pass | Unlikely at Launch | Analysis',
      es: 'GTA 6 Game Pass | Improbable al lanzamiento | Análisis',
      pt: 'GTA 6 Game Pass | Improvável no lançamento | Análise',
      it: 'GTA 6 Game Pass | Improbabile al lancio | Analisi',
      ko: 'GTA 6 게임 패스 | 출시 시 가능성 낮음 | 분석',
      de: 'GTA 6 Game Pass | Unlikely at Launch | Analysis',
    },
    seoDescription: {
      fr: 'GTA 6 sur Game Pass day one ? Improbable. Take-Two mise sur la vente plein tarif. Revenus projetés de 3 milliards $+. Analyse complète.',
      en: 'GTA 6 on Game Pass day one? Unlikely. Take-Two banks on full-price sales. Projected $3B+ revenue. Complete analysis.',
      es: 'GTA 6 en Game Pass al lanzamiento? Improbable. Take-Two apuesta por venta a precio completo.',
      pt: 'GTA 6 no Game Pass no lançamento? Improvável. Take-Two aposta em vendas a preço cheio.',
      it: 'GTA 6 su Game Pass al lancio? Improbabile. Take-Two punta sulla vendita a prezzo pieno.',
      ko: 'GTA 6 게임 패스 출시 시? 가능성 낮음. 테이크투는 정가 판매에 주력.',
      de: 'GTA 6 on Game Pass day one? Unlikely. Take-Two banks on full-price sales. Projected $3B+ revenue. Complete analysis.',
    },
    content: {
      fr: `La question revient régulièrement : GTA 6 sera-t-il disponible sur Xbox Game Pass dès le jour de sa sortie ? La réponse courte est non, et voici pourquoi.

## Le modèle économique de Take-Two

Take-Two Interactive, la maison-mère de Rockstar Games, **n'a jamais mis un GTA sur Game Pass au lancement**. Le modèle économique de la franchise repose entièrement sur la vente unitaire à plein tarif. GTA 5 a vendu plus de 200 millions d'exemplaires en générant des milliards de dollars — pourquoi changer une formule qui fonctionne ?

## Les chiffres parlent d'eux-mêmes

Les revenus projetés de GTA 6 sont astronomiques : les analystes anticipent **plus de 3 milliards de dollars** de revenus dans les premières semaines. Aucun accord Game Pass ne pourrait compenser ces chiffres. Microsoft devrait offrir une somme colossale pour convaincre Take-Two, et même le budget de Game Pass a ses limites.

## La position officielle de Take-Two

Take-Two a déclaré travailler **"occasionnellement"** avec les services d'abonnement, mais **"seulement quand c'est un bon deal économique"**. Pour un jeu comme GTA 6, dont les ventes unitaires seront records, le calcul économique ne penche pas en faveur d'un accord d'abonnement au lancement.

## GTA 6 pourrait rejoindre Game Pass... plus tard

Cela ne signifie pas que GTA 6 ne sera jamais sur Game Pass. GTA 5 a fini par rejoindre le service des années après sa sortie, quand les ventes unitaires avaient ralenti et qu'un afflux de nouveaux joueurs via l'abonnement avait un intérêt économique (notamment pour GTA Online).

GTA 6 pourrait suivre le même schéma : arrivée sur Game Pass 2 à 3 ans après le lancement, quand les revenus unitaires auront atteint un plateau.

## Confirmé sur Xbox, plein tarif

GTA 6 est **confirmé sur Xbox Series X|S**. Les joueurs Xbox pourront y jouer — ils devront simplement l'acheter au prix fort, comme tout le monde. C'est un choix économique rationnel de la part de Take-Two, pas une exclusion de la plateforme.

## Résumé

| Question | Réponse |
|----------|---------|
| GTA 6 day one sur Game Pass ? | Très improbable |
| GTA 6 sur Xbox ? | Oui, confirmé |
| GTA 6 sur Game Pass un jour ? | Possible, des années plus tard |
| Pourquoi pas Game Pass ? | Revenus unitaires trop importants |`,

      en: `The question keeps coming back: will GTA 6 be on Xbox Game Pass on day one? The short answer is no.

## Take-Two's Business Model

Take-Two has **never put a GTA on Game Pass at launch**. GTA 5 sold over 200 million copies generating billions — why change what works?

## The Numbers Speak

Projected revenues exceed **$3 billion** in the first weeks. No Game Pass deal could compensate.

## Take-Two's Official Position

Take-Two works **"occasionally"** with subscriptions but **"only when it's a good economic deal."** For GTA 6, the math doesn't favor a subscription deal.

## GTA 6 Could Join Game Pass... Later

GTA 5 eventually joined the service years after launch. GTA 6 could follow the same pattern: Game Pass 2-3 years after launch.

## Confirmed on Xbox, Full Price

GTA 6 is **confirmed on Xbox Series X|S**. Xbox players will just need to buy it at full price.`,

      es: `¿GTA 6 en Game Pass al lanzamiento? Muy improbable. Take-Two nunca puso un GTA en Game Pass. Los ingresos proyectados superan los 3.000 millones de dólares. El juego está confirmado en Xbox, a precio completo.`,
      pt: `GTA 6 no Game Pass no lançamento? Muito improvável. A Take-Two nunca colocou um GTA no Game Pass. As receitas projetadas superam $3 bilhões. O jogo está confirmado no Xbox, a preço cheio.`,
      it: `GTA 6 su Game Pass al lancio? Molto improbabile. Take-Two non ha mai messo un GTA su Game Pass. I ricavi previsti superano i 3 miliardi di dollari. Il gioco è confermato su Xbox, a prezzo pieno.`,
      ko: `GTA 6 출시 시 게임 패스? 매우 가능성 낮음. 테이크투는 GTA를 게임 패스에 출시한 적이 없습니다. 예상 수익 30억 달러 이상. Xbox에서 확정, 정가 판매.`,
    },
    relatedSlugs: ['gta-6-release-date-everything-we-know', 'gta-6-price-editions-preorder-what-to-expect'],
  },
];
