import type { Translations } from '@/wolverine-wiki/context/I18nContext';

export interface Location {
  name: Translations;
  description: Translations;
  type: string;
}

export interface Region {
  id: string;
  name: string;
  subtitle: Translations;
  colorTheme: { primary: string; secondary: string };
  description: Translations;
  overview: Translations;
  locations: Location[];
  enemies: string[];
  quests: { fr: string[]; en: string[] };
  mapPosition: { x: number; y: number };
  image?: string;
  gallery?: string[];
}

export const regions: Region[] = [
  {
    id: 'madripoor',
    name: 'Madripoor',
    subtitle: { fr: "Paradis Criminel", en: "Criminal Paradise" },
    colorTheme: { primary: '#EAB308', secondary: '#DC2626' },
    description: {
      fr: "Une île-nation divisée entre l'opulence de Hightown et la misère de Lowtown, repaire de criminels et de mercenaires du monde entier.",
      en: "An island nation divided between the opulence of Hightown and the squalor of Lowtown, a haven for criminals and mercenaries worldwide.",
    },
    overview: {
      fr: "Madripoor est le cœur battant du crime international dans l'univers Marvel. Divisée entre Hightown — quartier luxueux contrôlé par des magnats et des seigneurs du crime — et Lowtown — labyrinthe de ruelles sombres peuplées de mercenaires et de désespérés — l'île est un terrain de jeu dangereux où Logan a opéré sous le pseudonyme de 'Patch' pendant des années. Les bars enfumés, les combats clandestins et les trafics en tout genre définissent cette région.",
      en: "Madripoor is the beating heart of international crime in the Marvel universe. Divided between Hightown — a luxurious district controlled by moguls and crime lords — and Lowtown — a labyrinth of dark alleys populated by mercenaries and the desperate — the island is a dangerous playground where Logan operated under the alias 'Patch' for years. Smoky bars, underground fights, and trafficking of all kinds define this region.",
    },
    locations: [
      { name: { fr: 'Princess Bar', en: 'Princess Bar' }, description: { fr: "Le bar légendaire de Lowtown où Logan était connu sous le nom de Patch.", en: "The legendary Lowtown bar where Logan was known as Patch." }, type: 'BAR' },
      { name: { fr: 'Hightown Casino', en: 'Hightown Casino' }, description: { fr: "Casino luxueux servant de couverture aux opérations criminelles.", en: "Luxury casino serving as a front for criminal operations." }, type: 'BUILDING' },
      { name: { fr: "Docks de Lowtown", en: 'Lowtown Docks' }, description: { fr: "Zone portuaire dangereuse, plaque tournante du trafic.", en: "Dangerous port area, hub of trafficking." }, type: 'DISTRICT' },
    ],
    enemies: ['Madripoor Thugs', 'Tyger Tiger Enforcers', 'Lowtown Gangs', 'Hydra Agents'],
    quests: {
      fr: ['Le fantôme de Patch', 'Réseau de Mystique', 'Combat au Princess Bar', 'Le seigneur du crime'],
      en: ["Patch's Ghost", "Mystique's Network", 'Fight at the Princess Bar', 'The Crime Lord'],
    },
    mapPosition: { x: 70, y: 60 },
    image: '/wolverine/region-madripoor.jpg',
    gallery: ['/wolverine/madripoor-lowtown.jpg', '/wolverine/madripoor-hightown.jpg'],
  },
  {
    id: 'alkali-lake',
    name: 'Alkali Lake',
    subtitle: { fr: 'Berceau de Weapon X', en: 'Birthplace of Weapon X' },
    colorTheme: { primary: '#6B7280', secondary: '#1F2937' },
    description: {
      fr: "L'installation secrète au cœur des Rocheuses canadiennes où Logan a été transformé en Weapon X.",
      en: "The secret facility deep in the Canadian Rockies where Logan was transformed into Weapon X.",
    },
    overview: {
      fr: "Alkali Lake est le site de l'installation militaire la plus secrète du programme Weapon X. Cachée sous un barrage dans les montagnes Rocheuses canadiennes, cette base souterraine est l'endroit où le squelette de Logan a été recouvert d'adamantium. Les couloirs abandonnés sont hantés par les échos des expériences passées, les cuves de rétention brisées et les dossiers classificés. La nature sauvage environnante — forêts denses, rivières glaciales, montagnes escarpées — contraste avec l'horreur des laboratoires souterrains.",
      en: "Alkali Lake is the site of the most secret military installation of the Weapon X program. Hidden beneath a dam in the Canadian Rockies, this underground base is where Logan's skeleton was bonded with adamantium. The abandoned corridors are haunted by echoes of past experiments, broken containment tanks, and classified files. The surrounding wilderness — dense forests, glacial rivers, rugged mountains — contrasts with the horror of the underground laboratories.",
    },
    locations: [
      { name: { fr: 'Laboratoire Principal', en: 'Main Laboratory' }, description: { fr: "La salle où l'adamantium a été fusionné au squelette de Logan.", en: "The room where adamantium was bonded to Logan's skeleton." }, type: 'LABORATORY' },
      { name: { fr: 'Salle de Rétention', en: 'Containment Room' }, description: { fr: "Cellules de rétention pour les sujets d'expérience.", en: "Containment cells for test subjects." }, type: 'FACILITY' },
      { name: { fr: 'Barrage', en: 'Dam' }, description: { fr: "Le barrage dissimulant l'entrée de l'installation.", en: "The dam concealing the facility entrance." }, type: 'STRUCTURE' },
    ],
    enemies: ['Weapon X Guards', 'Automated Defense Systems', 'Failed Experiments', 'Weapon X Drones'],
    quests: {
      fr: ['Souvenirs perdus', 'Les dossiers Weapon X', 'Évasion du laboratoire', "L'héritage du Professeur"],
      en: ['Lost Memories', 'The Weapon X Files', 'Laboratory Escape', "The Professor's Legacy"],
    },
    mapPosition: { x: 30, y: 20 },
    image: '/wolverine/region-alkali-lake.jpg',
    gallery: ['/wolverine/alkali-lab.jpg', '/wolverine/alkali-exterior.jpg'],
  },
  {
    id: 'westchester',
    name: 'Westchester',
    subtitle: { fr: "Manoir Xavier / École pour Surdoués", en: "Xavier Mansion / School for Gifted" },
    colorTheme: { primary: '#3B82F6', secondary: '#1E40AF' },
    description: {
      fr: "Le manoir Xavier et l'école pour jeunes surdoués, quartier général des X-Men et refuge pour les mutants.",
      en: "Xavier Mansion and the School for Gifted Youngsters, X-Men headquarters and mutant sanctuary.",
    },
    overview: {
      fr: "Westchester, dans l'État de New York, abrite le manoir Xavier — quartier général des X-Men et école pour jeunes mutants. Sous le bâtiment victorien se cachent les installations souterraines les plus avancées : le Cerebro, la Salle des Dangers, le hangar du Blackbird. Pour Logan, c'est le lieu le plus proche d'un foyer qu'il ait jamais eu, même s'il ne l'admettra jamais. Les terrains paisibles du manoir contrastent avec les missions dangereuses qui partent de ses sous-sols.",
      en: "Westchester, New York State, houses Xavier Mansion — X-Men headquarters and school for young mutants. Beneath the Victorian building lie the most advanced underground facilities: Cerebro, the Danger Room, the Blackbird hangar. For Logan, it's the closest thing to a home he's ever had, though he'd never admit it. The mansion's peaceful grounds contrast with the dangerous missions launched from its basement.",
    },
    locations: [
      { name: { fr: 'Salle des Dangers', en: 'Danger Room' }, description: { fr: "Simulateur d'entraînement holographique pour les X-Men.", en: "Holographic training simulator for the X-Men." }, type: 'TRAINING' },
      { name: { fr: 'Cerebro', en: 'Cerebro' }, description: { fr: "Machine amplifiant les pouvoirs télépathiques de Xavier.", en: "Machine amplifying Xavier's telepathic powers." }, type: 'TECHNOLOGY' },
      { name: { fr: 'Hangar du Blackbird', en: 'Blackbird Hangar' }, description: { fr: "Hangar souterrain abritant le jet des X-Men.", en: "Underground hangar housing the X-Men jet." }, type: 'HANGAR' },
    ],
    enemies: ['Danger Room Simulations', 'Sentinel Drones'],
    quests: {
      fr: ['Retour au manoir', "Entraînement dans la Salle des Dangers", "Le message de Xavier"],
      en: ['Return to the Mansion', 'Danger Room Training', "Xavier's Message"],
    },
    mapPosition: { x: 50, y: 35 },
    image: '/wolverine/region-westchester.jpg',
    gallery: ['/wolverine/xavier-mansion.jpg', '/wolverine/danger-room.jpg'],
  },
  {
    id: 'savage-land',
    name: 'Savage Land',
    subtitle: { fr: "Terre Préhistorique Cachée", en: "Hidden Prehistoric Land" },
    colorTheme: { primary: '#16A34A', secondary: '#166534' },
    description: {
      fr: "Une région tropicale cachée en Antarctique, peuplée de dinosaures et de tribus primitives.",
      en: "A tropical region hidden in Antarctica, populated by dinosaurs and primitive tribes.",
    },
    overview: {
      fr: "La Terre Sauvage est un écosystème préhistorique caché sous le glacier antarctique, maintenu par une technologie extraterrestre ancienne. Dinosaures, tribus guerrières et végétation luxuriante coexistent dans cet environnement unique. Logan y a combattu à plusieurs reprises, utilisant ses instincts primaires dans un monde où la civilisation n'a plus cours. Les ruines d'une technologie alien parsèment le paysage, témoignant d'une présence mystérieuse et ancienne.",
      en: "The Savage Land is a prehistoric ecosystem hidden beneath the Antarctic glacier, maintained by ancient alien technology. Dinosaurs, warrior tribes, and lush vegetation coexist in this unique environment. Logan has fought here multiple times, using his primal instincts in a world where civilization holds no sway. Ruins of alien technology dot the landscape, evidence of a mysterious ancient presence.",
    },
    locations: [
      { name: { fr: "Village des Fall People", en: "Fall People Village" }, description: { fr: "Tribu primitive alliée des X-Men.", en: "Primitive tribe allied with the X-Men." }, type: 'VILLAGE' },
      { name: { fr: 'Ruines Alien', en: 'Alien Ruins' }, description: { fr: "Vestiges de la technologie qui maintient la Terre Sauvage.", en: "Remnants of the technology maintaining the Savage Land." }, type: 'RUINS' },
      { name: { fr: 'Marais des Ptéranodons', en: 'Pteranodon Marshes' }, description: { fr: "Zone marécageuse dangereuse survolée par des ptéranodons.", en: "Dangerous swamp area patrolled by pteranodons." }, type: 'WILDERNESS' },
    ],
    enemies: ['Raptors', 'Pteranodons', 'Savage Land Mutates', 'T-Rex'],
    quests: {
      fr: ["La chasse primale", "Ruines de l'ancien monde", "Alliance tribale"],
      en: ['The Primal Hunt', 'Ruins of the Ancient World', 'Tribal Alliance'],
    },
    mapPosition: { x: 50, y: 80 },
    image: '/wolverine/region-savage-land.jpg',
    gallery: ['/wolverine/savage-land-jungle.jpg', '/wolverine/savage-land-ruins.jpg'],
  },
  {
    id: 'weapon-x-facility',
    name: 'Weapon X Facility',
    subtitle: { fr: "Le Complexe Secret", en: "The Secret Complex" },
    colorTheme: { primary: '#DC2626', secondary: '#991B1B' },
    description: {
      fr: "Le complexe souterrain actif du programme Weapon X, plus avancé et plus dangereux qu'Alkali Lake.",
      en: "The active underground complex of the Weapon X program, more advanced and more dangerous than Alkali Lake.",
    },
    overview: {
      fr: "Le Complexe Weapon X est la dernière itération du programme qui a créé Wolverine. Contrairement à Alkali Lake, cette installation est pleinement opérationnelle et abrite les dernières expériences sur des sujets mutants. Des couloirs stériles et blancs mènent à des salles d'opération high-tech, des cuves de stase et des arènes de test. C'est ici qu'Omega Red a été réactivé et que de nouvelles armes biologiques sont en développement. La sécurité est maximale : gardes armés, drones, tourelles automatisées et sujets d'expérience lâchés comme mesure de dernier recours.",
      en: "The Weapon X Complex is the latest iteration of the program that created Wolverine. Unlike Alkali Lake, this facility is fully operational and houses the latest experiments on mutant subjects. Sterile white corridors lead to high-tech operating rooms, stasis pods, and testing arenas. This is where Omega Red was reactivated and where new biological weapons are in development. Security is maximum: armed guards, drones, automated turrets, and test subjects released as a last resort measure.",
    },
    locations: [
      { name: { fr: 'Salle du Directeur', en: "Director's Chamber" }, description: { fr: "Centre de commandement du programme Weapon X.", en: "Command center of the Weapon X program." }, type: 'COMMAND' },
      { name: { fr: 'Cuves de Stase', en: 'Stasis Pods' }, description: { fr: "Rangées de cuves contenant des sujets d'expérience.", en: "Rows of pods containing test subjects." }, type: 'LABORATORY' },
      { name: { fr: 'Arène de Test', en: 'Testing Arena' }, description: { fr: "Arène où les sujets sont forcés de combattre.", en: "Arena where subjects are forced to fight." }, type: 'ARENA' },
    ],
    enemies: ['Weapon X Soldiers', 'Enhanced Subjects', 'Omega Red', 'Automated Defenses', 'X-24 Prototypes'],
    quests: {
      fr: ["Infiltration du complexe", "Libérer les prisonniers", "Affrontement final avec Omega Red", "Les secrets du Directeur"],
      en: ['Complex Infiltration', 'Free the Prisoners', 'Final Showdown with Omega Red', "The Director's Secrets"],
    },
    mapPosition: { x: 25, y: 50 },
    image: '/wolverine/region-weapon-x.jpg',
    gallery: ['/wolverine/weapon-x-lab.jpg', '/wolverine/weapon-x-corridor.jpg'],
  },
];

export const regionImages = {
  madripoor: '/wolverine/region-madripoor.jpg',
  alkaliLake: '/wolverine/region-alkali-lake.jpg',
  westchester: '/wolverine/region-westchester.jpg',
  savageLand: '/wolverine/region-savage-land.jpg',
  weaponXFacility: '/wolverine/region-weapon-x.jpg',
};
