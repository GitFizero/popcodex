import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

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
  quests: { fr: string[]; en: string[]; es?: string[] };
  mapPosition: { x: number; y: number };
  image?: string;
  gallery?: string[];
}

export const regions: Region[] = [
  {
    id: 'vice-city',
    name: 'Vice City',
    subtitle: { fr: 'La Metropole Neon', en: 'The Neon Metropolis', es: 'La Metropolis Neon' },
    colorTheme: { primary: '#FF1493', secondary: '#00FFFF' },
    description: {
      fr: "Une metropole tentaculaire inspiree de Miami, baignee de neons et grouillante d'activite criminelle, de la vie nocturne et d'opportunites.",
      en: "A sprawling metropolis inspired by Miami, bathed in neon and teeming with criminal activity, nightlife, and opportunity.",
      es: "Una metropolis tentacular inspirada en Miami, banada en neon y repleta de actividad criminal.",
    },
    overview: {
      fr: "Vice City est le coeur battant de Leonida. Des gratte-ciels de verre d'Ocean Beach aux ruelles colorees de Little Havana, chaque quartier a son propre caractere, ses propres dangers et ses propres opportunites. La ville ne dort jamais et le crime non plus.",
      en: "Vice City is the beating heart of Leonida. From the glass skyscrapers of Ocean Beach to the colorful alleys of Little Havana, every district has its own character, dangers, and opportunities. The city never sleeps, and neither does crime.",
      es: "Vice City es el corazon de Leonida. Desde los rascacielos de Ocean Beach hasta los callejones de Little Havana, cada distrito tiene su propio caracter.",
    },
    locations: [
      { name: { fr: 'Ocean Beach', en: 'Ocean Beach', es: 'Ocean Beach' }, description: { fr: 'Le front de mer luxueux avec ses hotels art deco et ses clubs branches', en: 'The luxurious waterfront with art deco hotels and trendy clubs', es: 'El lujoso frente maritimo con hoteles art deco' }, type: 'DISTRICT' },
      { name: { fr: 'South Beach', en: 'South Beach', es: 'South Beach' }, description: { fr: 'La plage iconique bordee de palmiers et de bars bruyants', en: 'The iconic beach lined with palm trees and rowdy bars', es: 'La playa iconica bordeada de palmeras' }, type: 'DISTRICT' },
      { name: { fr: 'Little Haiti', en: 'Little Haiti', es: 'Little Haiti' }, description: { fr: 'Quartier culturel vibrant avec une scene de rue authentique', en: 'Vibrant cultural district with authentic street scene', es: 'Barrio cultural vibrante' }, type: 'DISTRICT' },
      { name: { fr: 'Little Havana', en: 'Little Havana', es: 'Little Havana' }, description: { fr: 'Quartier cubain anime avec dominos, cigares et gangs de rue', en: 'Lively Cuban district with dominos, cigars, and street gangs', es: 'Barrio cubano animado' }, type: 'DISTRICT' },
      { name: { fr: 'Iles Venetian', en: 'Venetian Islands', es: 'Islas Venecianas' }, description: { fr: 'Iles residentielles exclusives pour les riches et les criminels', en: 'Exclusive residential islands for the wealthy and criminal elite', es: 'Islas residenciales exclusivas' }, type: 'DISTRICT' },
      { name: { fr: 'Crosstown', en: 'Crosstown', es: 'Crosstown' }, description: { fr: 'Le quartier central des affaires, gratte-ciels et corruption', en: 'The central business district — skyscrapers and corruption', es: 'El distrito central de negocios' }, type: 'DISTRICT' },
    ],
    enemies: ['Leonida PD', 'Vice City Cartels', 'Street Gangs', 'Corrupt Politicians'],
    quests: {
      fr: ['Braquage de la First National Bank', 'Course-poursuite sur Ocean Drive', 'Infiltration du club VIP'],
      en: ['First National Bank Heist', 'Ocean Drive Chase', 'VIP Club Infiltration'],
      es: ['Atraco al First National Bank', 'Persecucion en Ocean Drive', 'Infiltracion del club VIP'],
    },
    mapPosition: { x: 65, y: 30 },
  },
  {
    id: 'leonida-keys',
    name: 'Leonida Keys',
    subtitle: { fr: 'Les Iles Tropicales', en: 'The Tropical Islands', es: 'Las Islas Tropicales' },
    colorTheme: { primary: '#00CED1', secondary: '#FFD700' },
    description: {
      fr: "Un chapelet d'iles tropicales inspirees des Florida Keys. Paradis en surface, plaque tournante du trafic de drogue en dessous.",
      en: "A chain of tropical islands inspired by the Florida Keys. Paradise on the surface, drug trafficking hub underneath.",
      es: "Una cadena de islas tropicales inspiradas en los Florida Keys. Paraiso en la superficie, centro de narcotrafico debajo.",
    },
    overview: {
      fr: "Les Leonida Keys sont le point de depart de Jason. Ces iles tropicales semblent paradisiaques avec leurs eaux turquoise et leurs couchers de soleil, mais sous la surface se cache un reseau tentaculaire de trafic de drogue et de contrebande. C'est ici que Jason a grandi, entourre d'arnaqueurs et de trafiquants.",
      en: "The Leonida Keys are Jason's starting location. These tropical islands seem like paradise with their turquoise waters and sunsets, but beneath the surface lies a sprawling network of drug trafficking and smuggling. This is where Jason grew up, surrounded by grifters and runners.",
      es: "Las Leonida Keys son el punto de partida de Jason. Estas islas tropicales parecen un paraiso pero esconden una red de narcotrafico.",
    },
    locations: [
      { name: { fr: 'Key Lento', en: 'Key Lento', es: 'Key Lento' }, description: { fr: 'L\'ile principale des Keys, avec marina et bars de plage', en: 'The main island of the Keys, with marina and beach bars', es: 'La isla principal de las Keys' }, type: 'ISLAND' },
      { name: { fr: 'Chaussee des Keys', en: 'Keys Causeway', es: 'Calzada de las Keys' }, description: { fr: 'Le long pont reliant les iles entre elles', en: 'The long bridge connecting the islands together', es: 'El largo puente que conecta las islas' }, type: 'ROAD' },
    ],
    enemies: ['Drug Runners', 'Coast Guard', 'Rival Smugglers'],
    quests: {
      fr: ['Livraison nocturne en bateau', 'Course sur la Chaussee des Keys'],
      en: ['Nighttime Boat Delivery', 'Keys Causeway Race'],
      es: ['Entrega nocturna en barco', 'Carrera en la Calzada'],
    },
    mapPosition: { x: 80, y: 70 },
  },
  {
    id: 'grassrivers',
    name: 'Grassrivers',
    subtitle: { fr: 'Les Marais Sauvages', en: 'The Wild Swamps', es: 'Los Pantanos Salvajes' },
    colorTheme: { primary: '#2E8B57', secondary: '#8B4513' },
    description: {
      fr: "De vastes marecages inspires des Everglades, avec des alligators, des mangroves et des courses de monster trucks.",
      en: "Vast swamplands inspired by the Everglades, with alligators, mangroves, and monster truck races.",
      es: "Vastos pantanos inspirados en los Everglades, con caimanes, manglares y carreras de monster trucks.",
    },
    overview: {
      fr: "Les Grassrivers sont les terres sauvages de Leonida. Des marecages immenses ou les alligators sont les rois, des mangroves impenetrables et une culture redneck fiere. On y trouve des courses de monster trucks illegales, des camps de chasseurs et des repaires de contrebandiers caches dans la vegetation dense.",
      en: "The Grassrivers are Leonida's wild lands. Massive swamps where alligators rule, impenetrable mangroves, and proud redneck culture. Here you'll find illegal monster truck races, hunter camps, and smuggler hideouts hidden in the dense vegetation.",
      es: "Los Grassrivers son las tierras salvajes de Leonida. Pantanos enormes con caimanes, manglares impenetrables y cultura redneck.",
    },
    locations: [
      { name: { fr: 'Circuit de Monster Trucks', en: 'Monster Truck Circuit', es: 'Circuito de Monster Trucks' }, description: { fr: 'Piste de course illegale dans les marecages', en: 'Illegal racing track in the swamps', es: 'Pista de carreras ilegal en los pantanos' }, type: 'ACTIVITY' },
    ],
    enemies: ['Swamp Dwellers', 'Poachers', 'Moonshiners'],
    quests: {
      fr: ['Course de monster trucks', 'Chasse au gator geant'],
      en: ['Monster Truck Race', 'Giant Gator Hunt'],
      es: ['Carrera de monster trucks', 'Caza del caiman gigante'],
    },
    mapPosition: { x: 40, y: 55 },
  },
  {
    id: 'port-gellhorn',
    name: 'Port Gellhorn',
    subtitle: { fr: 'La Cite Portuaire Decadente', en: 'The Decaying Port City', es: 'La Ciudad Portuaria Decadente' },
    colorTheme: { primary: '#708090', secondary: '#CD853F' },
    description: {
      fr: "Une ville cotiere en declin avec des attractions fermees, des motels louches et une economie souterraine florissante.",
      en: "A decaying coastal city with closed attractions, sketchy motels, and a thriving underground economy.",
      es: "Una ciudad costera en declive con atracciones cerradas, moteles sospechosos y una economia clandestina.",
    },
    overview: {
      fr: "Port Gellhorn etait autrefois une destination touristique florissante, mais les temps ont change. Les attractions sont fermees, les motels sont devenus des repaires de criminels et l'economie legale a cede la place au marche noir. C'est une ville ou tout a un prix et ou personne ne pose de questions.",
      en: "Port Gellhorn was once a thriving tourist destination, but times have changed. Attractions are shuttered, motels have become criminal hideouts, and the legal economy has given way to the black market. It's a city where everything has a price and nobody asks questions.",
      es: "Port Gellhorn fue una vez un destino turistico prospero, pero los tiempos cambiaron. Las atracciones estan cerradas y la economia legal dio paso al mercado negro.",
    },
    locations: [
      { name: { fr: 'Le Vieux Pier', en: 'The Old Pier', es: 'El Viejo Muelle' }, description: { fr: 'Un ponton abandonne servant de lieu de rencontre pour les criminels', en: 'An abandoned pier serving as a meeting place for criminals', es: 'Un muelle abandonado usado por criminales' }, type: 'LANDMARK' },
    ],
    enemies: ['Port Gangs', 'Smugglers', 'Corrupt Dock Workers'],
    quests: {
      fr: ['Recuperation de cargaison au port', 'Poursuivre un informateur'],
      en: ['Port Cargo Recovery', 'Chasing an Informant'],
      es: ['Recuperacion de carga en el puerto', 'Perseguir a un informante'],
    },
    mapPosition: { x: 25, y: 35 },
  },
  {
    id: 'ambrosia',
    name: 'Ambrosia',
    subtitle: { fr: 'La Ville Industrielle', en: 'The Industrial Town', es: 'La Ciudad Industrial' },
    colorTheme: { primary: '#8B7355', secondary: '#CC5500' },
    description: {
      fr: "Une ville industrielle dominee par une raffinerie de sucre, des gangs de motards et une atmosphere de fin du monde.",
      en: "An industrial town dominated by a sugar refinery, biker gangs, and an end-of-the-world atmosphere.",
      es: "Una ciudad industrial dominada por una refineria de azucar, pandillas de motociclistas y una atmosfera apocaliptica.",
    },
    overview: {
      fr: "Ambrosia est le ventre de Leonida. Dominee par une enorme raffinerie de sucre qui sert de couverture a des operations criminelles, la ville est le territoire des gangs de motards. L'air sent le sucre brule et la tension. Les habitants sont durs et les outsiders ne sont pas les bienvenus.",
      en: "Ambrosia is Leonida's underbelly. Dominated by a massive sugar refinery that serves as cover for criminal operations, the town is biker gang territory. The air smells of burnt sugar and tension. The locals are tough and outsiders aren't welcome.",
      es: "Ambrosia es el vientre de Leonida. Dominada por una enorme refineria de azucar que sirve de cobertura para operaciones criminales.",
    },
    locations: [
      { name: { fr: 'Raffinerie de Sucre', en: 'Sugar Refinery', es: 'Refineria de Azucar' }, description: { fr: 'La plus grande usine de la ville, avec des activites cachees', en: 'The largest factory in town, with hidden activities', es: 'La fabrica mas grande de la ciudad' }, type: 'INDUSTRY' },
    ],
    enemies: ['Biker Gangs', 'Refinery Guards', 'Meth Cooks'],
    quests: {
      fr: ['Infiltration de la raffinerie', 'Course de motos'],
      en: ['Refinery Infiltration', 'Motorcycle Race'],
      es: ['Infiltracion de la refineria', 'Carrera de motos'],
    },
    mapPosition: { x: 35, y: 20 },
  },
  {
    id: 'mount-kalaga',
    name: 'Mount Kalaga',
    subtitle: { fr: 'Le Parc National', en: 'The National Park', es: 'El Parque Nacional' },
    colorTheme: { primary: '#228B22', secondary: '#8B6914' },
    description: {
      fr: "Un parc national montagneux avec chasse, peche, mystiques hillbilly et paysages a couper le souffle.",
      en: "A mountainous national park with hunting, fishing, hillbilly mystics, and breathtaking landscapes.",
      es: "Un parque nacional montanoso con caza, pesca, misticos hillbilly y paisajes impresionantes.",
    },
    overview: {
      fr: "Mount Kalaga est la frontiere sauvage de Leonida. Un parc national montagneux ou la nature reprend ses droits. On y chasse, on y peche et on y croise des mystiques hillbilly qui pretendent connaitre les secrets de la montagne. C'est aussi un refuge pour ceux qui veulent echapper a la loi.",
      en: "Mount Kalaga is Leonida's wild frontier. A mountainous national park where nature reclaims its rights. You hunt, fish, and encounter hillbilly mystics who claim to know the mountain's secrets. It's also a refuge for those looking to escape the law.",
      es: "Mount Kalaga es la frontera salvaje de Leonida. Un parque nacional montanoso donde la naturaleza manda.",
    },
    locations: [
      { name: { fr: 'Le Sommet', en: 'The Summit', es: 'La Cumbre' }, description: { fr: 'Le point le plus haut de Leonida avec une vue panoramique', en: 'The highest point in Leonida with a panoramic view', es: 'El punto mas alto de Leonida con vista panoramica' }, type: 'LANDMARK' },
    ],
    enemies: ['Mountain Militia', 'Hillbilly Mystics', 'Wildlife'],
    quests: {
      fr: ['Chasse au cerf legendaire', 'Randonnee au sommet'],
      en: ['Legendary Deer Hunt', 'Summit Hike'],
      es: ['Caza del ciervo legendario', 'Excursion a la cumbre'],
    },
    mapPosition: { x: 20, y: 65 },
  },
];
