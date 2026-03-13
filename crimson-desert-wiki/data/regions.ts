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
    locations: [],
    enemies: [],
    quests: { fr: [], en: [] },
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
    locations: [],
    enemies: [],
    quests: { fr: [], en: [] },
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
    locations: [],
    enemies: [],
    quests: { fr: [], en: [] },
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
    locations: [],
    enemies: [],
    quests: { fr: [], en: [] },
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
    locations: [],
    enemies: [],
    quests: { fr: [], en: [] },
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
