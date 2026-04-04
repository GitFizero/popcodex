import type { Translations } from '@/crimson-desert-wiki/context/I18nContext';

export type MarkerCategory =
  | 'fast_travel'
  | 'bosses'
  | 'quests'
  | 'resources'
  | 'mounts'
  | 'secrets'
  | 'vendors'
  | 'collectibles'
  | 'skills'
  | 'cities';

export interface MapMarker {
  id: string;
  category: MarkerCategory;
  name: Translations;
  description: Translations;
  position: [number, number]; // [y, x] in % of image dimensions
  regionId?: string;
}

export interface MarkerCategoryMeta {
  id: MarkerCategory;
  label: Translations;
  color: string;
  emoji: string;
  defaultVisible: boolean;
}

export const markerCategories: MarkerCategoryMeta[] = [
  { id: 'cities', label: { fr: 'Villes & Villages', en: 'Cities & Villages', de: 'Städte & Dörfer' }, color: '#C9A84C', emoji: '🏰', defaultVisible: true },
  { id: 'fast_travel', label: { fr: 'Voyage rapide', en: 'Fast Travel', de: 'Schnellreise' }, color: '#4A90D9', emoji: '🔵', defaultVisible: true },
  { id: 'bosses', label: { fr: 'Boss', en: 'Bosses', de: 'Bosse' }, color: '#E74C3C', emoji: '💀', defaultVisible: true },
  { id: 'quests', label: { fr: 'Quêtes', en: 'Quests', de: 'Quests' }, color: '#F39C12', emoji: '📜', defaultVisible: false },
  { id: 'resources', label: { fr: 'Ressources', en: 'Resources', de: 'Ressourcen' }, color: '#27AE60', emoji: '⛏', defaultVisible: false },
  { id: 'mounts', label: { fr: 'Montures', en: 'Mounts', de: 'Reittiere' }, color: '#8E44AD', emoji: '🐴', defaultVisible: false },
  { id: 'secrets', label: { fr: 'Secrets', en: 'Secrets', de: 'Geheimnisse' }, color: '#E91E63', emoji: '🔮', defaultVisible: false },
  { id: 'vendors', label: { fr: 'Marchands', en: 'Vendors', de: 'Händler' }, color: '#00BCD4', emoji: '🛒', defaultVisible: false },
  { id: 'collectibles', label: { fr: 'Collectibles', en: 'Collectibles', de: 'Sammelobjekte' }, color: '#FF9800', emoji: '🔔', defaultVisible: false },
  { id: 'skills', label: { fr: 'Compétences', en: 'Skills', de: 'Fähigkeiten' }, color: '#9C27B0', emoji: '⚡', defaultVisible: false },
];

// Positions are [y%, x%] based on the map image (top-left = [0,0], bottom-right = [100,100])
// These coordinates are calibrated from the actual Pywel map image
export const mapMarkers: MapMarker[] = [
  // ──── HERNAND REGION ────
  { id: 'hernand-city', category: 'cities', name: { fr: 'Ville de Hernand', en: 'Hernand City', de: 'Stadt Hernand' }, description: { fr: 'Capitale marchande de Pywel. Tavernes, banque, forgerons et marchands.', en: 'Trade capital of Pywel. Taverns, bank, blacksmiths and merchants.' }, position: [72, 25], regionId: 'hernand' },
  { id: 'hernand-bank', category: 'vendors', name: { fr: 'Banque de Hernand', en: 'Hernand Bank', de: 'Bank von Hernand' }, description: { fr: 'Investir ses lingots d\'or et louer un coffre-fort.', en: 'Invest gold bars and rent a safe.' }, position: [71, 24], regionId: 'hernand' },
  { id: 'hernand-tavern', category: 'quests', name: { fr: 'Taverne de Hernand', en: 'Hernand Tavern', de: 'Taverne von Hernand' }, description: { fr: 'Jouer au Duo pour gagner de l\'argent. Contrats de primes.', en: 'Play Duo to earn money. Bounty contracts.' }, position: [73, 25], regionId: 'hernand' },
  { id: 'cretelion-manor', category: 'secrets', name: { fr: 'Manoir de Crêtelion', en: 'Crêtelion Manor', de: 'Herrenhaus Crêtelion' }, description: { fr: 'Contient un lingot d\'or (500 pièces d\'argent).', en: 'Contains a gold bar (500 silver).' }, position: [70, 23], regionId: 'hernand' },
  { id: 'goldleaf-guild', category: 'quests', name: { fr: 'Guilde Feuille d\'Or', en: 'Goldleaf Guildhouse', de: 'Goldblatt-Gildenhaus' }, description: { fr: 'Quêtes de commission et récompenses d\'inventaire.', en: 'Commission quests and inventory rewards.' }, position: [74, 26], regionId: 'hernand' },
  { id: 'pororin-village', category: 'cities', name: { fr: 'Village de Pororin', en: 'Pororin Village', de: 'Dorf Pororin' }, description: { fr: 'Petit village au sud avec un Abyss Nexus à proximité.', en: 'Small village south with a nearby Abyss Nexus.' }, position: [76, 24], regionId: 'hernand' },
  { id: 'scholastone', category: 'fast_travel', name: { fr: 'Scholastone', en: 'Scholastone', de: 'Scholastone' }, description: { fr: 'Ruines anciennes avec un Abyss Nexus.', en: 'Ancient ruins with an Abyss Nexus.' }, position: [69, 28], regionId: 'hernand' },
  { id: 'hernand-stables', category: 'mounts', name: { fr: 'Écuries de Hernand', en: 'Hernand Stables', de: 'Ställe von Hernand' }, description: { fr: 'Achat et gestion de montures. Point de voyage rapide.', en: 'Mount purchase and management. Fast travel point.' }, position: [68, 25], regionId: 'hernand' },
  { id: 'howling-hill', category: 'fast_travel', name: { fr: 'Camp de Howling Hill', en: 'Howling Hill Camp', de: 'Lager am Heulhügel' }, description: { fr: 'Campement de base des Greymanes à Hernand.', en: 'Greymane base camp in Hernand.' }, position: [66, 22], regionId: 'hernand' },
  { id: 'lioncrest-manor', category: 'secrets', name: { fr: 'Manoir de Lioncrest', en: 'Lioncrest Manor', de: 'Herrenhaus Lioncrest' }, description: { fr: 'Brass Wardens Plate, Bouclier Rhonid et un lingot d\'or.', en: 'Brass Wardens Plate, Rhonid Shield and a gold bar.' }, position: [71, 27], regionId: 'hernand' },
  { id: 'reed-devil', category: 'bosses', name: { fr: 'Reed Devil', en: 'Reed Devil', de: 'Reed Devil' }, description: { fr: 'Boss de zone dans les marais de Hernand.', en: 'Area boss in the Hernand marshes.' }, position: [75, 28], regionId: 'hernand' },
  { id: 'kailok', category: 'bosses', name: { fr: 'Kailok Hornsplitter', en: 'Kailok Hornsplitter', de: 'Kailok Hornsplitter' }, description: { fr: 'Boss des collines de Hernand.', en: 'Boss of the Hernand hills.' }, position: [68, 20], regionId: 'hernand' },

  // ──── PAILUNE REGION ────
  { id: 'greymane-stronghold', category: 'cities', name: { fr: 'Forteresse Greymane', en: 'Greymane Stronghold', de: 'Greymane-Festung' }, description: { fr: 'Ancienne forteresse en ruines depuis la Nuit des Ours Noirs.', en: 'Former fortress in ruins since the Night of the Black Bears.' }, position: [42, 18], regionId: 'pailune' },
  { id: 'beighen-village', category: 'cities', name: { fr: 'Village de Beighen', en: 'Beighen Village', de: 'Dorf Beighen' }, description: { fr: 'Village nordique dans les collines enneigées.', en: 'Nordic village in snowy hills.' }, position: [38, 15], regionId: 'pailune' },
  { id: 'calphade', category: 'cities', name: { fr: 'Calphade', en: 'Calphade', de: 'Calphade' }, description: { fr: 'Ville fortifiée des hauts plateaux.', en: 'Fortified highland town.' }, position: [35, 20], regionId: 'pailune' },
  { id: 'haunted-hill', category: 'fast_travel', name: { fr: 'Colline Hantée', en: 'Haunted Hill', de: 'Spukhügel' }, description: { fr: 'Passage sinistre avec un Abyss Nexus.', en: 'Sinister passage with an Abyss Nexus.' }, position: [40, 22], regionId: 'pailune' },
  { id: 'steel-mountains', category: 'resources', name: { fr: 'Montagnes d\'Acier', en: 'Steel Mountains', de: 'Stahlberge' }, description: { fr: 'Filons de fer et de cuivre. Zone de farming.', en: 'Iron and copper ore veins. Farming zone.' }, position: [28, 10], regionId: 'pailune' },
  { id: 'elowen-home', category: 'quests', name: { fr: 'Maison d\'Elowen', en: 'Elowen\'s Home' }, description: { fr: 'Première Sorcière (NPC). Point de voyage rapide.', en: 'First Witch NPC. Fast travel point.', de: 'Erste Hexen-NPC. Schnellreisepunkt.' }, position: [44, 16], regionId: 'pailune' },
  { id: 'silver-wolf-mountain', category: 'fast_travel', name: { fr: 'Montagne du Loup d\'Argent', en: 'Silver Wolf Mountain', de: 'Silberwolf-Berg' }, description: { fr: 'Point de voyage rapide en altitude.', en: 'High-altitude fast travel point.' }, position: [32, 12], regionId: 'pailune' },
  { id: 'staglord', category: 'bosses', name: { fr: 'Staglord', en: 'Staglord', de: 'Staglord' }, description: { fr: 'Roi déchu des neiges. Vulnérable au feu.', en: 'Fallen Snow King. Vulnerable to fire.' }, position: [36, 17], regionId: 'pailune' },
  { id: 'white-horn', category: 'bosses', name: { fr: 'White Horn', en: 'White Horn', de: 'White Horn' }, description: { fr: 'Boss créature des neiges de Pailune.', en: 'Snow creature boss of Pailune.' }, position: [30, 19], regionId: 'pailune' },

  // ──── DEMENISS REGION ────
  { id: 'house-thorel', category: 'cities', name: { fr: 'Maison Thorel', en: 'House Thorel', de: 'Haus Thorel' }, description: { fr: 'Grande maison noble, centre du pouvoir militaire.', en: 'Great noble house, center of military power.' }, position: [62, 45], regionId: 'demeniss' },
  { id: 'house-byron', category: 'cities', name: { fr: 'Maison Byron', en: 'House Byron', de: 'Haus Byron' }, description: { fr: 'Maison rivale de Thorel.', en: 'Rival house to Thorel.', de: 'Rivalisierendes Haus zu Thorel.' }, position: [65, 48], regionId: 'demeniss' },
  { id: 'battlefields', category: 'quests', name: { fr: 'Champs de bataille', en: 'Battlefields', de: 'Schlachtfelder' }, description: { fr: 'Plaines marquées par des siècles de conflits.', en: 'Plains scarred by centuries of conflict.' }, position: [60, 46], regionId: 'demeniss' },
  { id: 'border-fort', category: 'fast_travel', name: { fr: 'Fort de la Frontière', en: 'Border Fort', de: 'Grenzfestung' }, description: { fr: 'Fortification stratégique. Zone de quêtes de faction.', en: 'Strategic fortification. Faction quest zone.' }, position: [58, 50], regionId: 'demeniss' },
  { id: 'raventine-monastery', category: 'secrets', name: { fr: 'Monastère Raventine', en: 'Raventine Monastery', de: 'Raventine-Kloster' }, description: { fr: 'Lié à l\'histoire de Hexe Marie. Magie noire.', en: 'Tied to Hexe Marie\'s story. Dark magic.' }, position: [64, 42], regionId: 'demeniss' },
  { id: 'cassius-morten', category: 'bosses', name: { fr: 'Cassius Morten', en: 'Cassius Morten', de: 'Cassius Morten' }, description: { fr: 'Le chevalier cramoisi. Boss de quête principale.', en: 'The crimson knight. Main quest boss.' }, position: [61, 44], regionId: 'demeniss' },
  { id: 'fortain', category: 'bosses', name: { fr: 'Fortain', en: 'Fortain', de: 'Fortain' }, description: { fr: 'Le géant maudit.', en: 'The cursed giant.', de: 'Der verfluchte Riese.' }, position: [63, 50], regionId: 'demeniss' },
  { id: 'golden-plains', category: 'fast_travel', name: { fr: 'Plaines Dorées', en: 'Golden Plains', de: 'Goldene Ebenen' }, description: { fr: 'Abyss Nexus au centre de Déméniss.', en: 'Abyss Nexus in the center of Demeniss.' }, position: [66, 46], regionId: 'demeniss' },

  // ──── DELESYIE REGION ────
  { id: 'gorthak', category: 'cities', name: { fr: 'Gorthak (Bastion Orque)', en: 'Gorthak (Orc Bastion)', de: 'Gorthak (Ork-Bastion)' }, description: { fr: 'Bastion des Orques Flamme de Fer. Institut de recherche.', en: 'Ironflame Orc Bastion. Research institute.' }, position: [78, 52], regionId: 'delesyie' },
  { id: 'dewhaven-keep', category: 'cities', name: { fr: 'Fort de Dewhaven', en: 'Dewhaven Keep', de: 'Festung Dewhaven' }, description: { fr: 'Forteresse avec institut de recherche.', en: 'Fortress with research institute.' }, position: [85, 55], regionId: 'delesyie' },
  { id: 'delesyia-castle-road', category: 'fast_travel', name: { fr: 'Route du Château', en: 'Castle Road', de: 'Schlossstraße' }, description: { fr: 'Points de voyage rapide vers le château.', en: 'Fast travel points to the castle.' }, position: [82, 50], regionId: 'delesyie' },
  { id: 'mechanical-lab', category: 'secrets', name: { fr: 'Laboratoire Mécanique', en: 'Mechanical Laboratory', de: 'Mechanisches Labor' }, description: { fr: 'Centre de recherche. Créatures mécaniques et robots.', en: 'Research center. Mechanical creatures and robots.' }, position: [80, 54], regionId: 'delesyie' },
  { id: 'golden-star-arena', category: 'bosses', name: { fr: 'Golden Star (Dragon)', en: 'Golden Star (Dragon)', de: 'Golden Star (Drache)' }, description: { fr: 'Dragon mécanique. Un des boss les plus spectaculaires.', en: 'Mechanical dragon. One of the most spectacular bosses.' }, position: [76, 56], regionId: 'delesyie' },
  { id: 'tenebrum', category: 'bosses', name: { fr: 'Tenebrum', en: 'Tenebrum', de: 'Tenebrum' }, description: { fr: 'Boss mystérieux de Délésyie.', en: 'Mysterious boss of Delesyia.' }, position: [84, 48], regionId: 'delesyie' },

  // ──── CRIMSON DESERT / DESERT POURPRE ────
  { id: 'tashkalp', category: 'cities', name: { fr: 'Tashkalp', en: 'Tashkalp', de: 'Tashkalp' }, description: { fr: 'Grande région désertique avec trois points de voyage rapide.', en: 'Large desert region with three fast travel points.' }, position: [40, 50], regionId: 'desert-pourpre' },
  { id: 'tommaso', category: 'cities', name: { fr: 'Tommaso', en: 'Tommaso', de: 'Tommaso' }, description: { fr: 'Plus grande ville du Tashkalp. Marchands et services.', en: 'Largest town in Tashkalp. Merchants and services.' }, position: [42, 48], regionId: 'desert-pourpre' },
  { id: 'varnia', category: 'cities', name: { fr: 'Varnia', en: 'Varnia', de: 'Varnia' }, description: { fr: 'Ville frontière au nord-est. Dernière escale.', en: 'Border town in the northeast. Last stop.' }, position: [18, 72], regionId: 'desert-pourpre' },
  { id: 'spire-of-sun', category: 'secrets', name: { fr: 'Spire du Soleil', en: 'Spire of the Sun', de: 'Sonnensäule' }, description: { fr: 'Monument ancien. Attention : boss Crookrock Walker.', en: 'Ancient monument. Warning: Crookrock Walker boss.' }, position: [35, 55], regionId: 'desert-pourpre' },
  { id: 'urdavah', category: 'cities', name: { fr: 'Urdavah', en: 'Urdavah', de: 'Urdavah' }, description: { fr: 'Cité en altitude avec institut de recherche.', en: 'High-altitude city with research institute.' }, position: [32, 42], regionId: 'desert-pourpre' },
  { id: 'forebearers-barrens', category: 'resources', name: { fr: 'Landes du Précurseur', en: 'Forebearer\'s Barrens' }, description: { fr: 'Ruines anciennes et Abyss Nexus. Farming haut niveau.', en: 'Ancient ruins and Abyss Nexus. High-level farming.', de: 'Alte Ruinen und Abyss Nexus. Farming auf hohem Niveau.' }, position: [35, 40], regionId: 'desert-pourpre' },
  { id: 'kearush', category: 'bosses', name: { fr: 'Kearush (Boss Final)', en: 'Kearush (Final Boss)', de: 'Kearush (Endboss)' }, description: { fr: 'Le combat final du jeu.', en: 'The game\'s final fight.' }, position: [44, 55], regionId: 'desert-pourpre' },
  { id: 'crookrock-walker', category: 'bosses', name: { fr: 'Crookrock Walker', en: 'Crookrock Walker', de: 'Crookrock Walker' }, description: { fr: 'Boss monde ouvert près de la Spire du Soleil.', en: 'Open-world boss near the Spire of the Sun.' }, position: [37, 57], regionId: 'desert-pourpre' },

  // ──── TRITANUS SOUND (water region between Pailune and Crimson Desert) ────
  { id: 'tritanus-nexus', category: 'fast_travel', name: { fr: 'Tritanus Sound', en: 'Tritanus Sound', de: 'Tritanus-Sund' }, description: { fr: 'Abyss Nexus côtier entre Pailune et le Désert.', en: 'Coastal Abyss Nexus between Pailune and the Desert.' }, position: [28, 35], regionId: 'desert-pourpre' },

  // ──── LAKE AMATA (northeast) ────
  { id: 'lake-amata', category: 'fast_travel', name: { fr: 'Lac Amata', en: 'Lake Amata', de: 'Amata-See' }, description: { fr: 'Lac au nord-est de la carte. Point de voyage rapide.', en: 'Lake in the northeast. Fast travel point.' }, position: [15, 65], regionId: 'desert-pourpre' },

  // ──── ADDITIONAL HERNAND MARKERS ────
  { id: 'hernand-blacksmith', category: 'vendors', name: { fr: 'Forgeron de Hernand', en: 'Hernand Blacksmith', de: 'Schmied von Hernand' }, description: { fr: 'Forge d\'armes et armures. Amélioration d\'équipement.', en: 'Weapon and armor forge. Equipment upgrades.' }, position: [73, 23], regionId: 'hernand' },
  { id: 'hernand-nexus', category: 'fast_travel', name: { fr: 'Abyss Nexus de Hernand', en: 'Hernand Abyss Nexus', de: 'Hernand-Abyss-Nexus' }, description: { fr: 'Point de téléportation principal de Hernand.', en: 'Main teleportation point in Hernand.' }, position: [72, 26], regionId: 'hernand' },
  { id: 'hernand-herb-garden', category: 'resources', name: { fr: 'Jardin d\'herbes', en: 'Herb Garden', de: 'Kräutergarten' }, description: { fr: 'Plantes médicinales et ingrédients d\'alchimie.', en: 'Medicinal plants and alchemy ingredients.' }, position: [70, 20], regionId: 'hernand' },
  { id: 'marsh-cave', category: 'secrets', name: { fr: 'Grotte des Marais', en: 'Marsh Cave', de: 'Sumpfhöhle' }, description: { fr: 'Grotte cachée avec un coffre au trésor. Attention aux monstres.', en: 'Hidden cave with a treasure chest. Beware of monsters.' }, position: [77, 27], regionId: 'hernand' },
  { id: 'hernand-arena', category: 'quests', name: { fr: 'Arène de Hernand', en: 'Hernand Arena', de: 'Arena von Hernand' }, description: { fr: 'Combats d\'arène pour des récompenses exclusives.', en: 'Arena fights for exclusive rewards.' }, position: [74, 22], regionId: 'hernand' },
  { id: 'wild-horse-plains', category: 'mounts', name: { fr: 'Plaines des Chevaux Sauvages', en: 'Wild Horse Plains', de: 'Wildpferde-Ebene' }, description: { fr: 'Capturer des chevaux sauvages ici.', en: 'Capture wild horses here.' }, position: [67, 18], regionId: 'hernand' },

  // ──── ADDITIONAL PAILUNE MARKERS ────
  { id: 'pailune-nexus', category: 'fast_travel', name: { fr: 'Abyss Nexus de Pailune', en: 'Pailune Abyss Nexus', de: 'Pailune-Abyss-Nexus' }, description: { fr: 'Point de voyage rapide principal de Pailune.', en: 'Main fast travel point in Pailune.' }, position: [40, 14], regionId: 'pailune' },
  { id: 'snow-wolf-den', category: 'mounts', name: { fr: 'Tanière du Loup des Neiges', en: 'Snow Wolf Den', de: 'Schneewolfhöhle' }, description: { fr: 'Loup des neiges apprivoisable. Monture rare.', en: 'Tameable snow wolf. Rare mount.' }, position: [30, 14], regionId: 'pailune' },
  { id: 'frozen-waterfall', category: 'collectibles', name: { fr: 'Cascade Gelée', en: 'Frozen Waterfall', de: 'Gefrorener Wasserfall' }, description: { fr: 'Collectible caché derrière la cascade gelée.', en: 'Hidden collectible behind the frozen waterfall.' }, position: [34, 16], regionId: 'pailune' },
  { id: 'pailune-ore-deposit', category: 'resources', name: { fr: 'Gisement de Minerai', en: 'Ore Deposit', de: 'Erzvorkommen' }, description: { fr: 'Minerais rares : mithril et adamantite.', en: 'Rare ores: mithril and adamantite.' }, position: [36, 11], regionId: 'pailune' },
  { id: 'greymane-training', category: 'skills', name: { fr: 'Camp d\'entraînement Greymane', en: 'Greymane Training Camp', de: 'Greymane-Ausbildungslager' }, description: { fr: 'Apprendre de nouvelles compétences de combat.', en: 'Learn new combat skills.' }, position: [43, 20], regionId: 'pailune' },
  { id: 'queen-stoneback', category: 'bosses', name: { fr: 'Queen Stoneback Crab', en: 'Queen Stoneback Crab', de: 'Königin Steinrücken-Krabbe' }, description: { fr: 'Boss colossal côtier. Très difficile.', en: 'Colossal coastal boss. Very difficult.' }, position: [45, 10], regionId: 'pailune' },

  // ──── ADDITIONAL DEMENISS MARKERS ────
  { id: 'demeniss-nexus', category: 'fast_travel', name: { fr: 'Abyss Nexus de Déméniss', en: 'Demeniss Abyss Nexus', de: 'Demeniss-Abyss-Nexus' }, description: { fr: 'Point de voyage rapide central.', en: 'Central fast travel point.' }, position: [63, 46], regionId: 'demeniss' },
  { id: 'war-memorial', category: 'collectibles', name: { fr: 'Mémorial de Guerre', en: 'War Memorial', de: 'Kriegsdenkmal' }, description: { fr: 'Artéfact Abysse scellé. Lore sur les guerres anciennes.', en: 'Sealed Abyss Artifact. Lore about ancient wars.' }, position: [59, 48], regionId: 'demeniss' },
  { id: 'hexe-marie-shrine', category: 'secrets', name: { fr: 'Sanctuaire d\'Hexe Marie', en: 'Hexe Marie Shrine', de: 'Hexe-Marie-Schrein' }, description: { fr: 'Lieu maudit lié à la sorcière. Boss optionnel.', en: 'Cursed site linked to the witch. Optional boss.' }, position: [62, 40], regionId: 'demeniss' },
  { id: 'demeniss-vendor', category: 'vendors', name: { fr: 'Marchand ambulant', en: 'Traveling Merchant', de: 'Reisender Händler' }, description: { fr: 'Vend des objets rares et des recettes.', en: 'Sells rare items and recipes.' }, position: [65, 44], regionId: 'demeniss' },

  // ──── ADDITIONAL DELESYIE MARKERS ────
  { id: 'delesyie-nexus', category: 'fast_travel', name: { fr: 'Abyss Nexus de Délésyie', en: 'Delesyia Abyss Nexus', de: 'Delesyia-Abyss-Nexus' }, description: { fr: 'Voyage rapide vers la zone technologique.', en: 'Fast travel to the tech zone.' }, position: [80, 52], regionId: 'delesyie' },
  { id: 'orc-marketplace', category: 'vendors', name: { fr: 'Marché des Orques', en: 'Orc Marketplace', de: 'Ork-Marktplatz' }, description: { fr: 'Marchands orques avec équipement unique.', en: 'Orc merchants with unique equipment.' }, position: [79, 50], regionId: 'delesyie' },
  { id: 'automaton-graveyard', category: 'secrets', name: { fr: 'Cimetière d\'Automates', en: 'Automaton Graveyard', de: 'Automaten-Friedhof' }, description: { fr: 'Vestiges de machines anciennes. Butin rare.', en: 'Remains of ancient machines. Rare loot.' }, position: [82, 56], regionId: 'delesyie' },
  { id: 'delesyie-skill-master', category: 'skills', name: { fr: 'Maître de Compétences', en: 'Skill Master', de: 'Fähigkeitsmeister' }, description: { fr: 'Débloquer des compétences avancées.', en: 'Unlock advanced skills.' }, position: [83, 52], regionId: 'delesyie' },

  // ──── ADDITIONAL CRIMSON DESERT MARKERS ────
  { id: 'desert-oasis', category: 'resources', name: { fr: 'Oasis du Désert', en: 'Desert Oasis', de: 'Wüstenoase' }, description: { fr: 'Source d\'eau et plantes rares dans le désert.', en: 'Water source and rare plants in the desert.' }, position: [35, 52], regionId: 'desert-pourpre' },
  { id: 'ancient-ruins', category: 'secrets', name: { fr: 'Ruines Anciennes', en: 'Ancient Ruins', de: 'Antike Ruinen' }, description: { fr: 'Ruines pré-civilisation. Puzzles et trésors.', en: 'Pre-civilization ruins. Puzzles and treasures.' }, position: [30, 45], regionId: 'desert-pourpre' },
  { id: 'desert-nexus-north', category: 'fast_travel', name: { fr: 'Nexus du Désert Nord', en: 'North Desert Nexus', de: 'Nord-Wüsten-Nexus' }, description: { fr: 'Abyss Nexus au nord du Désert Pourpre.', en: 'Abyss Nexus in the northern Crimson Desert.' }, position: [22, 50], regionId: 'desert-pourpre' },
  { id: 'sandstorm-altar', category: 'collectibles', name: { fr: 'Autel de la Tempête de Sable', en: 'Sandstorm Altar', de: 'Sandsturm-Altar' }, description: { fr: 'Artéfact Abysse rare. Déclenche un événement météo.', en: 'Rare Abyss Artifact. Triggers a weather event.' }, position: [33, 58], regionId: 'desert-pourpre' },
  { id: 'desert-camel-merchant', category: 'mounts', name: { fr: 'Marchand de Chameaux', en: 'Camel Merchant', de: 'Kamelhändler' }, description: { fr: 'Acheter et équiper des chameaux pour le désert.', en: 'Buy and equip camels for the desert.' }, position: [42, 52], regionId: 'desert-pourpre' },
  { id: 'vellua', category: 'cities', name: { fr: 'Vellua', en: 'Vellua', de: 'Vellua' }, description: { fr: 'Port fortifié sur la côte est. Commerce maritime.', en: 'Fortified port on the east coast. Maritime trade.' }, position: [50, 68], regionId: 'desert-pourpre' },
  { id: 'desert-bell-tower', category: 'collectibles', name: { fr: 'Clocher du Désert', en: 'Desert Bell Tower', de: 'Wüsten-Glockenturm' }, description: { fr: 'Cloche cachée pour révéler la carte de la région.', en: 'Hidden bell to reveal the region map.' }, position: [38, 55], regionId: 'desert-pourpre' },

  // ──── COASTAL / OCEAN MARKERS ────
  { id: 'coastal-watchtower', category: 'fast_travel', name: { fr: 'Tour de Guet Côtière', en: 'Coastal Watchtower', de: 'Küsten-Wachturm' }, description: { fr: 'Point de vue panoramique et voyage rapide.', en: 'Panoramic viewpoint and fast travel.' }, position: [55, 65], regionId: 'delesyie' },
  { id: 'shipwreck-cove', category: 'secrets', name: { fr: 'Crique du Naufrage', en: 'Shipwreck Cove', de: 'Schiffswrack-Bucht' }, description: { fr: 'Épave avec un coffre au trésor légendaire.', en: 'Wreck with a legendary treasure chest.' }, position: [60, 62], regionId: 'demeniss' },
];
