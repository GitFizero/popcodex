import type { Translations } from '@/crimson-desert-wiki/context/I18nContext';

// Images
const hernandCity = '/crimson-desert/hernand-city.jpg';
const hernandStreet = '/crimson-desert/hernand-street.jpg';
const hernandSquare = '/crimson-desert/hernand-square.jpg';
const pailuneHomeland = '/crimson-desert/pailune-homeland.jpg';
const pailuneRuins = '/crimson-desert/pailune-ruins.jpg';
const forestBridge = '/crimson-desert/forest-bridge.jpg';
const delesyieCastle = '/crimson-desert/delesyie-castle.jpg';
const cathedral = '/crimson-desert/cathedral.jpg';
const villageChurch = '/crimson-desert/village-church.jpg';
const pywelGardens = '/crimson-desert/pywel-gardens.jpg';
const demenissTower = '/crimson-desert/demeniss-tower.jpg';
const cliffFortress = '/crimson-desert/cliff-fortress.jpg';
const mountainCity = '/crimson-desert/mountain-city.jpg';
const mountainCastle = '/crimson-desert/mountain-castle.jpg';
const lakeVillage = '/crimson-desert/lake-village.jpg';
const pywelPanorama = '/crimson-desert/pywel-panorama.jpg';

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
  quests: { fr: string[]; en: string[]; es?: string[]; it?: string[]; ko?: string[] };
  mapPosition: { x: number; y: number };
  image?: string;
  gallery?: string[];
}

export const regions: Region[] = [
  {
    id: 'hernand',
    name: 'Hernand',
    subtitle: { fr: 'La Cité Marchande', en: 'The Trade City', ko: '교역 도시' },
    colorTheme: { primary: '#C9A84C', secondary: '#8A7060' },
    description: {
      fr: "Une cité commerçante animée servant de carrefour de Pywel, où marchands, mercenaires et secrets convergent.",
      en: "A bustling trade city serving as the crossroads of Pywel, where merchants, mercenaries, and secrets converge.",
      ko: "상인, 용병, 비밀이 모여드는 파이웰의 교차로 역할을 하는 활기찬 교역 도시.",
    },
    overview: {
      fr: "Hernand est le cœur battant du commerce de Pywel. Nichée entre des chaînes de montagnes protectrices et des plaines fertiles, la ville s'est enrichie grâce aux routes commerciales qui relient les régions du continent.",
      en: "Hernand is the beating heart of Pywel's commerce. Nestled between protective mountain ranges and fertile plains, the city has grown on trade routes connecting the continent's regions.",
      ko: "에르난드는 파이웰 상업의 심장부입니다. 보호적인 산맥과 비옥한 평원 사이에 자리 잡은 이 도시는 대륙의 지역들을 연결하는 교역로를 따라 성장했습니다.",
    },
    locations: [
      { name: { fr: 'Ville de Hernand', en: 'Hernand City' }, description: { fr: 'La capitale marchande de Pywel, centre névralgique du commerce et des guildes. Tavernes, banque, forgerons et marchands.', en: 'The trade capital of Pywel, nerve center of commerce and guilds. Taverns, bank, blacksmiths and merchants.' }, type: 'City' },
      { name: { fr: 'Banque de Hernand', en: 'Hernand Bank' }, description: { fr: 'Institution financière où investir ses lingots d\'or et louer un coffre-fort. Située à l\'ouest de l\'auberge.', en: 'Financial institution to invest gold bars and rent a safe. Located west of the inn.' }, type: 'Service' },
      { name: { fr: 'Taverne de Hernand', en: 'Hernand Tavern' }, description: { fr: 'Lieu de repos où jouer au Duo (jeu de cartes) pour gagner de l\'argent et accepter des contrats de primes.', en: 'Rest spot where you can play Duo (card game) to earn money and accept bounty contracts.' }, type: 'Service' },
      { name: { fr: 'Manoir de Crêtelion', en: 'Crêtelion Manor' }, description: { fr: 'Manoir caché derrière le stand d\'archerie. Contient un lingot d\'or valant 500 pièces d\'argent.', en: 'Manor hidden behind the archery stand. Contains a gold bar worth 500 silver coins.' }, type: 'Secret' },
      { name: { fr: 'Guilde Feuille d\'Or', en: 'Goldleaf Guildhouse' }, description: { fr: 'Quartier général de la guilde marchande. Quêtes de commission et récompenses d\'inventaire.', en: 'Merchant guild headquarters. Commission quests and inventory rewards.' }, type: 'Guild' },
      { name: { fr: 'Village de Pororin', en: 'Pororin Village' }, description: { fr: 'Petit village au sud de la Guilde, avec un Abyss Nexus à proximité pour le voyage rapide.', en: 'Small village south of the Guild, with a nearby Abyss Nexus for fast travel.' }, type: 'Village' },
      { name: { fr: 'Scholastone', en: 'Scholastone' }, description: { fr: 'Ruines anciennes à l\'est de Hernand. Un Abyss Nexus se trouve dans les ruines extérieures.', en: 'Ancient ruins east of Hernand. An Abyss Nexus can be found in the outer ruins.' }, type: 'Ruins' },
      { name: { fr: 'Écuries de Hernand', en: 'Hernand Stables' }, description: { fr: 'Point de voyage rapide le plus proche de la ville, au nord. Achat et gestion de montures.', en: 'Closest fast travel point to the city, to the north. Mount purchase and management.' }, type: 'Fast Travel' },
    ],
    enemies: ['Bandits de Hernand', 'Gobelins des collines', 'Loups des plaines', 'Reed Devil (Boss)', 'Kailok Hornsplitter (Boss)', 'Matthias (Boss)'],
    quests: { fr: ['Commissions de Hernand (x3 emplacements inventaire)', 'Le lingot d\'or du Manoir', 'Primes : chasse aux criminels', 'Le concours d\'archerie', 'Quête de la Guilde Feuille d\'Or'], en: ['Hernand Commissions (x3 inventory slots)', 'The Manor Gold Bar', 'Bounties: Criminal Hunting', 'The Archery Contest', 'Goldleaf Guild Quest'] },
    mapPosition: { x: 45, y: 35 },
    image: hernandSquare,
    gallery: [hernandCity, hernandStreet],
  },
  {
    id: 'pailune',
    name: 'Pailune',
    subtitle: { fr: 'Patrie des Greymanes', en: 'Homeland of the Greymanes', ko: '그레이메인의 고향' },
    colorTheme: { primary: '#2D5A27', secondary: '#C9A84C' },
    description: {
      fr: "Autrefois patrie florissante des mercenaires Greymanes, désormais une ruine — un monument à la Nuit des Ours Noirs.",
      en: "Once a thriving homeland of the Greymane mercenaries, now a ruin — a monument to the Night of the Black Bears.",
      ko: "한때 그레이메인 용병들의 번성한 고향이었으나, 이제는 폐허 — 검은 곰의 밤을 기억하는 기념비.",
    },
    overview: {
      fr: "Pailune était autrefois la région la plus paisible de Pywel — des collines verdoyantes parsemées de campements Greymanes. La Nuit des Ours Noirs a tout changé.",
      en: "Pailune was once Pywel's most peaceful region — rolling green hills dotted with Greymane settlements. The Night of the Black Bears changed everything.",
      ko: "파일룬은 한때 파이웰에서 가장 평화로운 지역이었습니다 — 그레이메인 정착지가 점점이 있는 완만한 푸른 언덕. 검은 곰의 밤이 모든 것을 바꿔 놓았습니다.",
    },
    locations: [
      { name: { fr: 'Forteresse Greymane', en: 'Greymane Stronghold' }, description: { fr: 'L\'ancienne forteresse des mercenaires Greymanes, désormais en ruines depuis la Nuit des Ours Noirs.', en: 'The former Greymane mercenary fortress, now in ruins since the Night of the Black Bears.' }, type: 'Ruins' },
      { name: { fr: 'Village de Beighen', en: 'Beighen Village' }, description: { fr: 'Village nordique niché dans les collines enneigées. Un Abyss Nexus se trouve au nord-ouest.', en: 'Nordic village nestled in snowy hills. An Abyss Nexus is located to the northwest.' }, type: 'Village' },
      { name: { fr: 'Calphade', en: 'Calphade' }, description: { fr: 'Ville fortifiée des hauts plateaux. Point de voyage rapide à l\'ouest de la ville.', en: 'Fortified highland town. Fast travel point to the west of the city.' }, type: 'City' },
      { name: { fr: 'Colline Hantée', en: 'Haunted Hill' }, description: { fr: 'Passage sinistre sur la route de Calphade. Un téléporteur Abyss Nexus s\'y trouve.', en: 'Sinister passage on the road to Calphade. An Abyss Nexus teleporter is located here.' }, type: 'Fast Travel' },
      { name: { fr: 'Montagnes d\'Acier', en: 'Steel Mountains' }, description: { fr: 'Chaîne montagneuse riche en filons de minerai de fer et de cuivre. Zone de farming de ressources.', en: 'Mountain range rich in iron and copper ore veins. Resource farming zone.' }, type: 'Resources' },
      { name: { fr: 'Maison d\'Elowen', en: 'Elowen\'s Home' }, description: { fr: 'Demeure de la première Sorcière (NPC). Point de voyage rapide à l\'extérieur.', en: 'Home of the first Witch NPC. Fast travel point outside.' }, type: 'NPC' },
    ],
    enemies: ['Staglord (Boss)', 'White Horn (Boss)', 'Ours Noirs', 'Wargs des neiges', 'Brigands du Nord', 'Trolls des montagnes'],
    quests: { fr: ['L\'héritage des Greymanes', 'Le Staglord : roi déchu des neiges', 'Chasse au White Horn (vulnérable au feu)', 'Restauration de la forteresse', 'Les filons des Montagnes d\'Acier'], en: ['The Greymane Legacy', 'The Staglord: Fallen Snow King', 'White Horn Hunt (vulnerable to fire)', 'Fortress Restoration', 'Steel Mountains Ore Veins'] },
    mapPosition: { x: 25, y: 25 },
    image: pailuneHomeland,
    gallery: [forestBridge, villageChurch, lakeVillage],
  },
  {
    id: 'demeniss',
    name: 'Déméniss',
    subtitle: { fr: 'Territoire Contesté', en: 'Contested Territory', ko: '분쟁 지역' },
    colorTheme: { primary: '#6A6A6A', secondary: '#8B1A1A' },
    description: {
      fr: "Un territoire déchiré par la guerre où chaque faction se bat pour le contrôle.",
      en: "A war-torn borderland where every faction vies for control.",
      ko: "모든 세력이 지배권을 놓고 다투는 전쟁으로 폐허가 된 변경 지역.",
    },
    overview: {
      fr: "Déméniss est le no man's land de Pywel. Situé à la convergence de multiples frontières territoriales, il a été disputé pendant des siècles.",
      en: "Déméniss is the no-man's-land of Pywel. Located at the convergence of multiple territorial boundaries, it has been fought over for centuries.",
      ko: "데메니스는 파이웰의 무인지대입니다. 여러 영토의 경계가 만나는 곳에 위치하여 수세기 동안 분쟁의 대상이었습니다.",
    },
    locations: [
      { name: { fr: 'Maison Thorel', en: 'House Thorel' }, description: { fr: 'L\'une des grandes maisons nobles de Déméniss, centre du pouvoir militaire de Pywel.', en: 'One of the great noble houses of Demeniss, center of Pywel\'s military power.' }, type: 'Stronghold' },
      { name: { fr: 'Maison Byron', en: 'House Byron' }, description: { fr: 'Maison rivale de Thorel. Les intrigues politiques entre les deux maisons façonnent le destin de la région.', en: 'Rival house to Thorel. Political intrigue between the two houses shapes the region\'s fate.' }, type: 'Stronghold' },
      { name: { fr: 'Champs de bataille', en: 'Battlefields' }, description: { fr: 'Vastes plaines marquées par des siècles de conflits. Ennemis nombreux et butin abondant.', en: 'Vast plains scarred by centuries of conflict. Many enemies and abundant loot.' }, type: 'Combat Zone' },
      { name: { fr: 'Fort de la Frontière', en: 'Border Fort' }, description: { fr: 'Fortification stratégique à la convergence des territoires. Zone de quêtes de faction.', en: 'Strategic fortification at the convergence of territories. Faction quest zone.' }, type: 'Stronghold' },
      { name: { fr: 'Monastère Raventine', en: 'Raventine Monastery' }, description: { fr: 'Ancien monastère lié à l\'histoire de Hexe Marie et de son enfant. Lieu sinistre chargé de magie noire.', en: 'Ancient monastery tied to the story of Hexe Marie and her child. Sinister place charged with dark magic.' }, type: 'Ruins' },
    ],
    enemies: ['Cassius Morten (Boss)', 'Fortain (Boss)', 'Chevaliers de Thorel', 'Soldats de Byron', 'Mercenaires errants', 'Esprits guerriers maudits'],
    quests: { fr: ['Conflit Thorel vs Byron', 'L\'arène des chevaliers', 'La quête de Cassius Morten (chevalier cramoisi)', 'Fortain : le géant maudit', 'Missions de faction : réputation'], en: ['Thorel vs Byron Conflict', 'The Knight\'s Arena', 'Cassius Morten Quest (crimson knight)', 'Fortain: The Cursed Giant', 'Faction Missions: Reputation'] },
    mapPosition: { x: 55, y: 50 },
    image: cliffFortress,
    gallery: [demenissTower, mountainCastle],
  },
  {
    id: 'delesyie',
    name: 'Délésyie',
    subtitle: { fr: 'La Région Mystérieuse', en: 'The Mysterious Region', ko: '신비로운 지역' },
    colorTheme: { primary: '#1A6B6B', secondary: '#C0C0C0' },
    description: {
      fr: "Enveloppée d'une brume perpétuelle, Délésyie cache des ruines anciennes et des artefacts d'une puissance immense.",
      en: "Shrouded in perpetual mist, Délésyie hides ancient ruins and artifacts of immense power.",
      ko: "영원한 안개에 싸인 델레시에는 고대 유적과 거대한 힘의 유물을 숨기고 있습니다.",
    },
    overview: {
      fr: "Délésyie existe à la lisière du monde connu, là où le voile entre la réalité et l'Abysse s'amincit. Des brumes argentées perpétuelles obscurcissent ses pics montagneux.",
      en: "Délésyie exists at the edge of the known world, where the veil between reality and the Abysse grows thin. Perpetual silver mists obscure its mountain peaks.",
      ko: "델레시에는 알려진 세계의 끝에 존재하며, 현실과 심연 사이의 경계가 희미해지는 곳입니다. 영원한 은빛 안개가 산봉우리를 가리고 있습니다.",
    },
    locations: [
      { name: { fr: 'Gorthak (Bastion Orque)', en: 'Gorthak (Orc Bastion)' }, description: { fr: 'Bastion des Orques Flamme de Fer. Trois Abyss Nexus à proximité. Institut de recherche.', en: 'Bastion of the Ironflame Orcs. Three Abyss Nexus nearby. Research institute.' }, type: 'City' },
      { name: { fr: 'Fort de Dewhaven', en: 'Dewhaven Keep' }, description: { fr: 'Forteresse abritant un institut de recherche. Abyss Nexus juste à l\'extérieur.', en: 'Fortress housing a research institute. Abyss Nexus right outside.' }, type: 'Stronghold' },
      { name: { fr: 'Route du Château de Délésyie', en: 'Delesyia Castle Road' }, description: { fr: 'Plusieurs points de voyage rapide le long des collines et forêts menant au château.', en: 'Multiple fast travel points along the hills and forests leading to the castle.' }, type: 'Fast Travel' },
      { name: { fr: 'Laboratoire Mécanique', en: 'Mechanical Laboratory' }, description: { fr: 'Centre de recherche technologique avancée. Créatures mécaniques et robots.', en: 'Advanced technological research center. Mechanical creatures and robots.' }, type: 'Dungeon' },
      { name: { fr: 'Arène de Golden Star', en: 'Golden Star Arena' }, description: { fr: 'Zone de combat du dragon mécanique Golden Star. Un des boss les plus spectaculaires du jeu.', en: 'Combat zone of the mechanical dragon Golden Star. One of the game\'s most spectacular bosses.' }, type: 'Boss Arena' },
    ],
    enemies: ['Golden Star (Boss — Dragon mécanique)', 'Tenebrum (Boss)', 'Automates de combat', 'Créatures mécaniques', 'Gardiens du laboratoire', 'Orques Flamme de Fer'],
    quests: { fr: ['L\'éveil de Golden Star (dragon mécanique)', 'Recherches de l\'institut de Dewhaven', 'Alliance avec les Orques Flamme de Fer', 'Le secret de Tenebrum', 'Exploration des îles célestes'], en: ['Golden Star Awakening (mechanical dragon)', 'Dewhaven Institute Research', 'Ironflame Orc Alliance', 'The Secret of Tenebrum', 'Sky Islands Exploration'] },
    mapPosition: { x: 70, y: 20 },
    image: cathedral,
    gallery: [delesyieCastle, mountainCity],
  },
  {
    id: 'desert-pourpre',
    name: 'Désert Pourpre',
    subtitle: { fr: 'Le Désert Écarlate', en: 'The Crimson Desert', ko: '진홍 사막' },
    colorTheme: { primary: '#C0392B', secondary: '#E84A1A' },
    description: {
      fr: "Le vaste désert aux sables cramoisis qui donne son nom au jeu.",
      en: "The vast desert of crimson sands that gives the game its name.",
      ko: "게임 이름의 유래가 된 진홍빛 모래의 광활한 사막.",
    },
    overview: {
      fr: "Le Désert Pourpre — le Désert Écarlate qui donne son nom au jeu. Cette vaste étendue de sable rouge rouille est à la fois belle et mortelle.",
      en: "The Désert Pourpre — the Crimson Desert that gives the game its name. This vast expanse of rust-red sand is both beautiful and lethal.",
      ko: "진홍 사막 — 게임 이름의 유래가 된 사막. 이 광활한 적갈색 모래 사막은 아름다우면서도 치명적입니다.",
    },
    locations: [
      { name: { fr: 'Tashkalp', en: 'Tashkalp' }, description: { fr: 'Grande région désertique avec la ville de Tommaso entourée de trois points de voyage rapide.', en: 'Large desert region with the town of Tommaso surrounded by three fast travel points.' }, type: 'Region' },
      { name: { fr: 'Tommaso', en: 'Tommaso' }, description: { fr: 'Plus grande ville du Tashkalp. Marchands, services et quêtes de faction du désert.', en: 'Largest town in Tashkalp. Merchants, services and desert faction quests.' }, type: 'City' },
      { name: { fr: 'Varnia', en: 'Varnia' }, description: { fr: 'Ville frontière à l\'extrême nord-est de la carte. Dernière escale avant les terres sauvages.', en: 'Border town at the far northeast edge of the map. Last stop before the wild lands.' }, type: 'City' },
      { name: { fr: 'Spire du Soleil', en: 'Spire of the Sun' }, description: { fr: 'Monument ancien avec des téléporteurs à proximité. Attention : un boss Crookrock Walker rôde.', en: 'Ancient monument with nearby teleporters. Warning: a Crookrock Walker boss lurks.' }, type: 'Landmark' },
      { name: { fr: 'Urdavah', en: 'Urdavah' }, description: { fr: 'Cité en altitude avec un institut de recherche. Trois points de voyage rapide en montagne (accessibles en vol plané).', en: 'High-altitude city with a research institute. Three mountain fast travel points (reachable by gliding).' }, type: 'City' },
      { name: { fr: 'Landes du Précurseur', en: 'Forebearer\'s Barrens' }, description: { fr: 'Étendues arides parsemées de ruines anciennes et d\'Abyss Nexus. Zone de farming de haut niveau.', en: 'Arid expanses dotted with ancient ruins and Abyss Nexus. High-level farming zone.' }, type: 'Region' },
    ],
    enemies: ['Kearush (Boss final)', 'Crookrock Walker (Boss monde)', 'Brigands du désert', 'Scorpions géants', 'Nomades hostiles', 'Créatures des sables'],
    quests: { fr: ['Le dernier combat : Kearush (boss final)', 'Les secrets de la Spire du Soleil', 'Commerce caravannier de Tommaso', 'L\'institut de recherche d\'Urdavah', 'Exploration des Landes du Précurseur'], en: ['The Final Fight: Kearush (final boss)', 'Secrets of the Spire of the Sun', 'Tommaso Caravan Trade', 'Urdavah Research Institute', 'Forebearer\'s Barrens Exploration'] },
    mapPosition: { x: 60, y: 75 },
    image: pywelGardens,
    gallery: [pywelPanorama],
  },
];

// Export images for use elsewhere
export const regionImages = {
  hernandCity,
  hernandStreet,
  hernandSquare,
  pailuneHomeland,
  pailuneRuins,
  forestBridge,
  delesyieCastle,
  cathedral,
  villageChurch,
  pywelGardens,
  demenissTower,
  cliffFortress,
  mountainCity,
  mountainCastle,
  lakeVillage,
  pywelPanorama,
};
