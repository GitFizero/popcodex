import type { Translations } from '@/fable-wiki/context/I18nContext';

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
    id: 'bowerstone',
    name: 'Bowerstone',
    subtitle: { fr: 'Capitale d\'Albion', en: 'Capital of Albion' },
    colorTheme: { primary: '#22C55E', secondary: '#FACC15' },
    description: {
      fr: "Bowerstone est la capitale et plus grande ville d'Albion. Centre du commerce, de la politique et de la Guilde des Heros, c'est ici que le Heros commence veritablement son aventure.",
      en: "Bowerstone is the capital and largest city of Albion. Hub of commerce, politics, and the Heroes' Guild, this is where the Hero truly begins their adventure.",
    },
    overview: {
      fr: "Bowerstone est le coeur battant d'Albion. Ses rues paves serpentent entre des batiments medievaux et des echoppes animees. La Guilde des Heros se dresse au centre de la ville, attirant des aspirants heros de tout le royaume. Le marche de Bowerstone est repute dans tout Albion pour ses armes, armures et potions.",
      en: "Bowerstone is the beating heart of Albion. Its cobblestone streets wind between medieval buildings and bustling shops. The Heroes' Guild stands at the city center, drawing aspiring heroes from across the realm. Bowerstone Market is renowned throughout Albion for its weapons, armor, and potions.",
    },
    locations: [
      { name: { fr: 'Guilde des Heros', en: "Heroes' Guild" }, description: { fr: "Centre d'entrainement et quartier general des heros d'Albion.", en: 'Training center and headquarters for the heroes of Albion.' }, type: 'LANDMARK' },
      { name: { fr: 'Marche de Bowerstone', en: 'Bowerstone Market' }, description: { fr: 'Le plus grand marche d\'Albion, ou l\'on trouve de tout.', en: 'The largest market in Albion, where anything can be found.' }, type: 'COMMERCE' },
    ],
    enemies: ['Bandits', 'Hobbes'],
    quests: { fr: ['Rejoindre la Guilde', 'Le Marche Noir'], en: ['Join the Guild', 'The Black Market'] },
    mapPosition: { x: 50, y: 40 },
    image: '/fable/screenshots/fable-bowerstone.jpg',
  },
  {
    id: 'briar-hill',
    name: 'Briar Hill',
    subtitle: { fr: 'Village natal du Heros', en: "The Hero's Home Village" },
    colorTheme: { primary: '#90EE90', secondary: '#8B4513' },
    description: {
      fr: "Briar Hill est un paisible village de campagne ou le Heros a grandi. Sa tranquillite est brisee lorsque l'Etranger transforme ses habitants en pierre.",
      en: "Briar Hill is a peaceful countryside village where the Hero grew up. Its tranquility is shattered when the Stranger turns its inhabitants to stone.",
    },
    overview: {
      fr: "Briar Hill etait autrefois l'un des villages les plus paisibles d'Albion. Nichee entre des collines verdoyantes et des forets anciennes, la communaute vivait en harmonie avec la nature. C'est ici que le Heros a decouvert ses premiers pouvoirs heroiques durant son enfance. Apres la petrification, le village reste fige dans le temps, un rappel constant de ce qui a ete perdu.",
      en: "Briar Hill was once one of the most peaceful villages in Albion. Nestled between rolling green hills and ancient forests, the community lived in harmony with nature. It is here that the Hero first discovered heroic powers during childhood. After the petrification, the village remains frozen in time, a constant reminder of what was lost.",
    },
    locations: [
      { name: { fr: 'Maison du Heros', en: "Hero's Home" }, description: { fr: 'La maison d\'enfance du Heros.', en: "The Hero's childhood home." }, type: 'LANDMARK' },
      { name: { fr: 'Place du Village', en: 'Village Square' }, description: { fr: 'Le coeur du village, maintenant petrifie.', en: 'The heart of the village, now petrified.' }, type: 'LANDMARK' },
    ],
    enemies: [],
    quests: { fr: ['L\'Enfance du Heros', 'La Petrification'], en: ["The Hero's Childhood", 'The Petrification'] },
    mapPosition: { x: 30, y: 25 },
    image: '/fable/screenshots/fable-hamlet.jpg',
  },
  {
    id: 'bloodstone',
    name: 'Bloodstone',
    subtitle: { fr: 'Havre des Pirates', en: 'Pirate Haven' },
    colorTheme: { primary: '#8B0000', secondary: '#800080' },
    description: {
      fr: "Bloodstone est une region sombre et dangereuse, repaire de pirates et de brigands. Seuls les plus braves — ou les plus desesperes — s'y aventurent.",
      en: "Bloodstone is a dark and treacherous region, a den of pirates and brigands. Only the bravest — or most desperate — venture here.",
    },
    overview: {
      fr: "Bloodstone est la region la plus dangereuse d'Albion. Ses cotes escarpees cachent des grottes de contrebandiers et des repaires de pirates. La ville elle-meme est un nid de vice, ou la loi n'a aucune emprise. C'est pourtant ici que se trouvent certains des secrets les plus precieux d'Albion, pour ceux qui osent les chercher.",
      en: "Bloodstone is Albion's most dangerous region. Its rugged coasts hide smuggler caves and pirate lairs. The town itself is a den of vice, where law holds no sway. Yet it is here that some of Albion's most precious secrets can be found, for those who dare to seek them.",
    },
    locations: [
      { name: { fr: 'Port des Pirates', en: 'Pirate Docks' }, description: { fr: 'Le port principal de Bloodstone, toujours anime.', en: 'The main port of Bloodstone, always bustling.' }, type: 'COMMERCE' },
    ],
    enemies: ['Pirates', 'Balverines', 'Bandits'],
    quests: { fr: ['L\'Or des Pirates'], en: ["Pirate's Gold"] },
    mapPosition: { x: 75, y: 70 },
    image: '/fable/region-northcoast.jpg',
  },
  {
    id: 'fairfax',
    name: 'Fairfax Castle',
    subtitle: { fr: 'Siege du Pouvoir', en: 'Seat of Power' },
    colorTheme: { primary: '#DAA520', secondary: '#4A4A4A' },
    description: {
      fr: "Fairfax Castle est une forteresse ancienne, siege du pouvoir politique d'Albion. Ses murs recèlent des secrets datant de l'Ancien Royaume.",
      en: "Fairfax Castle is an ancient fortress, the seat of Albion's political power. Its walls hold secrets dating back to the Old Kingdom.",
    },
    overview: {
      fr: "Dominant les plaines centrales d'Albion, le Chateau de Fairfax est un monument a la puissance et a l'ambition. Construit sur les ruines d'une structure de l'Ancien Royaume, le chateau a ete le theatre de nombreuses batailles et intrigues politiques au fil des siecles. Ses souterrains, dit-on, cachent des artefacts d'une puissance inimaginable.",
      en: "Dominating the central plains of Albion, Fairfax Castle is a monument to power and ambition. Built on the ruins of an Old Kingdom structure, the castle has been the stage for numerous battles and political intrigues over the centuries. Its dungeons, it is said, hide artifacts of unimaginable power.",
    },
    locations: [
      { name: { fr: 'Salle du Trone', en: 'Throne Room' }, description: { fr: 'Le centre du pouvoir d\'Albion.', en: "The center of Albion's power." }, type: 'LANDMARK' },
      { name: { fr: 'Souterrains', en: 'Dungeons' }, description: { fr: 'Des passages secrets datant de l\'Ancien Royaume.', en: 'Secret passages dating from the Old Kingdom.' }, type: 'DUNGEON' },
    ],
    enemies: ['Hollow Men', 'Guards'],
    quests: { fr: ['Le Secret de Fairfax'], en: ["Fairfax's Secret"] },
    mapPosition: { x: 55, y: 30 },
    image: '/fable/region-garden.jpg',
  },
  {
    id: 'the-wilds',
    name: 'The Wilds',
    subtitle: { fr: 'Forets Indomptees', en: 'Untamed Forests' },
    colorTheme: { primary: '#006400', secondary: '#2F4F4F' },
    description: {
      fr: "Les Terres Sauvages sont des forets anciennes et indomptees, territoire des Balverines et des Hobbes. Peu d'aventuriers en reviennent.",
      en: "The Wilds are ancient, untamed forests — territory of Balverines and Hobbes. Few adventurers return from them.",
    },
    overview: {
      fr: "Les Terres Sauvages representent la nature indomptee d'Albion. Ces forets anciennes abritent des creatures terrifiantes comme les Balverines, loups-garous d'Albion, et les Hobbes, creatures gobelines vivant dans des terriers souterrains. Les arbres millennaires cachent des temples oublies et des portails vers des dimensions inconnues.",
      en: "The Wilds represent the untamed nature of Albion. These ancient forests are home to terrifying creatures like Balverines, Albion's werewolves, and Hobbes, goblin-like creatures dwelling in underground burrows. Ancient trees hide forgotten temples and portals to unknown dimensions.",
    },
    locations: [
      { name: { fr: 'Grotte des Balverines', en: 'Balverine Cave' }, description: { fr: 'Le repaire principal des Balverines.', en: 'The main lair of the Balverines.' }, type: 'DUNGEON' },
      { name: { fr: 'Terriers des Hobbes', en: 'Hobbe Burrows' }, description: { fr: 'Le reseau souterrain des Hobbes.', en: 'The underground network of the Hobbes.' }, type: 'DUNGEON' },
    ],
    enemies: ['Balverines', 'Hobbes', 'Trolls'],
    quests: { fr: ['La Chasse au Balverine', 'Le Roi des Hobbes'], en: ['The Balverine Hunt', 'The Hobbe King'] },
    mapPosition: { x: 25, y: 60 },
    image: '/fable/region-forest.jpg',
  },
];
