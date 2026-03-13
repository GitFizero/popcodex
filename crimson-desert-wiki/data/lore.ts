import type { Translations } from '@/crimson-desert-wiki/context/I18nContext';

const charKliff = '/crimson-desert/char-kliff.jpg';
const charDamiane = '/crimson-desert/char-damiane.jpg';
const charOongka = '/crimson-desert/char-oongka.jpg';
const charHexe = '/crimson-desert/char-hexe-marie.jpg';
const hernandCity = '/crimson-desert/hernand-city.jpg';
const pailuneRuins = '/crimson-desert/pailune-ruins.jpg';
const pywelPanorama = '/crimson-desert/pywel-panorama.jpg';
const delesyieCastle = '/crimson-desert/delesyie-castle.jpg';
const demenissTower = '/crimson-desert/demeniss-tower.jpg';
const envCanyon = '/crimson-desert/env-canyon.jpg';
const envTemple = '/crimson-desert/env-temple.jpg';
const combatAction = '/crimson-desert/combat-action.jpg';
const combatGoblin = '/crimson-desert/combat-goblin.jpg';
const charactersGroup = '/crimson-desert/characters-group.jpg';
const kliffForest = '/crimson-desert/kliff-forest.jpg';

export interface LoreEntry {
  id: string;
  title: string;
  category: 'CHARACTER' | 'LOCATION' | 'FACTION' | 'ITEM' | 'EVENT';
  excerpt: Translations;
  content: Translations;
  relatedEntries: string[];
  mentions: string[];
  lastUpdated: string;
  readingTime: string;
  image?: string;
}

export const loreEntries: LoreEntry[] = [
  // ── PERSONNAGES ──────────────────────────────────────────────
  {
    id: 'kliff',
    title: 'Kliff',
    category: 'CHARACTER',
    image: charKliff,
    excerpt: {
      fr: 'Chef des Crinières Grises et personnage principal de Crimson Desert.',
      en: 'Leader of the Greymanes and main character of Crimson Desert.',
      ko: '그레이메인의 리더이자 크림슨 디저트의 주인공.',
    },
    content: {
      fr: "Autrefois le chef incontesté des Crinières Grises, le monde de Kliff a été brisé en une seule nuit lorsque les Ours Noirs se sont abattus sur Pailune. Poussé par la vengeance et un sens du devoir inébranlable envers ses compagnons dispersés, il traverse le continent déchiré par la guerre de Pywel pour réunir sa bande et découvrir la vérité derrière la menace croissante de l'Abysse.\n\nKliff est un combattant polyvalent de première ligne qui manie l'épée longue, la lance et l'arc — basculant entre les styles d'armes en plein combat.",
      en: "Once the unquestioned leader of the Greymanes, Kliff's world was shattered in a single night when the Black Bears descended upon Pailune. Driven by vengeance and an unyielding sense of duty to his scattered companions, he traverses the war-torn continent of Pywel seeking to reunite his band and uncover the truth behind the rising Abysse threat.\n\nKliff is a versatile front-line fighter wielding longsword, lance, and bow — seamlessly switching between weapon styles mid-combat.",
      ko: "한때 그레이메인의 확고한 리더였던 클리프의 세계는 검은 곰 부대가 파일룬을 습격한 단 하룻밤에 산산조각이 났습니다. 복수심과 흩어진 동료들에 대한 확고한 의무감에 이끌려, 전쟁으로 폐허가 된 파이웰 대륙을 횡단하며 동료들을 재결집하고 심연의 위협 뒤에 숨겨진 진실을 밝히려 합니다.\n\n클리프는 장검, 창, 활을 사용하는 다재다능한 전방 전투원으로, 전투 중 끊김 없이 무기 스타일을 전환합니다.",
    },
    relatedEntries: ['greymanes', 'damiane', 'oongka', 'pailune', 'night-of-black-bears'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-08',
    readingTime: '3 min',
  },
  {
    id: 'damiane',
    title: 'Damiane',
    category: 'CHARACTER',
    image: charDamiane,
    excerpt: {
      fr: 'Combattante agile des Crinières Grises, spécialisée dans les doubles lames.',
      en: 'Agile Greymane fighter specializing in dual blades.',
      ko: '쌍검에 특화된 그레이메인의 민첩한 전투원.',
    },
    content: {
      fr: "Personnage jouable de Crimson Desert et membre des Crinières Grises. Combattante agile spécialisée dans les doubles lames. Son passé reste entouré de mystère.",
      en: "Playable character in Crimson Desert and member of the Greymanes. Agile fighter specializing in dual blades. Her past remains shrouded in mystery.",
      ko: "크림슨 디저트의 플레이어블 캐릭터이자 그레이메인의 일원. 쌍검에 특화된 민첩한 전투원. 그녀의 과거는 여전히 미스터리에 싸여 있습니다.",
    },
    relatedEntries: ['kliff', 'oongka', 'greymanes', 'pailune'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
  {
    id: 'oongka',
    title: 'Oongka',
    category: 'CHARACTER',
    image: charOongka,
    excerpt: {
      fr: 'Colosse des Crinières Grises, spécialisé dans les armes lourdes et le combat à mains nues.',
      en: 'Greymane colossus specializing in heavy weapons and unarmed combat.',
      ko: '대형 무기와 맨손 전투에 특화된 그레이메인의 거인.',
    },
    content: {
      fr: "Personnage jouable de Crimson Desert et membre des Crinières Grises. Colosse brutal spécialisé dans les armes lourdes (spadons, haches) et le combat à mains nues avec prises.",
      en: "Playable character in Crimson Desert and member of the Greymanes. Brutal colossus specializing in heavy weapons (greatswords, axes) and unarmed combat with grapples.",
      ko: "크림슨 디저트의 플레이어블 캐릭터이자 그레이메인의 일원. 대형 무기(대검, 도끼)와 그래플을 활용한 맨손 전투에 특화된 거대한 전사.",
    },
    relatedEntries: ['kliff', 'damiane', 'greymanes'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
  {
    id: 'hexe-marie',
    title: 'Hexe Marie',
    category: 'CHARACTER',
    image: charHexe,
    excerpt: {
      fr: 'Une sorcière mystérieuse drapée de plumes de corbeau dont la magie plie la réalité.',
      en: 'A mysterious sorceress draped in raven feathers whose magic bends reality.',
      ko: '까마귀 깃털을 두른 신비로운 마녀. 그녀의 마법은 현실을 왜곡합니다.',
    },
    content: {
      fr: "Hexe Marie est une sorcière mystérieuse drapée de plumes de corbeau. Sa magie plie la réalité elle-même, défiant les lois connues du monde de Pywel.\n\nSon affiliation reste inconnue — elle ne semble servir aucune faction, poursuivant ses propres objectifs énigmatiques.",
      en: "Hexe Marie is a mysterious sorceress draped in raven feathers. Her magic bends reality itself, defying the known laws of Pywel.\n\nHer affiliation remains unknown — she seems to serve no faction, pursuing her own enigmatic goals.",
      ko: "Hexe Marie는 까마귀 깃털을 두른 신비로운 마녀입니다. 그녀의 마법은 파이웰의 알려진 법칙을 거스르며 현실 자체를 왜곡합니다.\n\n그녀의 소속은 알려지지 않았으며, 어떤 세력에도 속하지 않고 자신만의 수수께끼 같은 목표를 추구하는 것으로 보입니다.",
    },
    relatedEntries: ['the-abysse'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },

  // ── FACTIONS ─────────────────────────────────────────────────
  {
    id: 'greymanes',
    title: 'Les Greymanes',
    category: 'FACTION',
    image: charactersGroup,
    excerpt: {
      fr: 'Une bande de mercenaires liés par la loyauté plutôt que par l\'argent.',
      en: 'A mercenary band bound by loyalty rather than coin.',
      ko: '돈이 아닌 충성으로 결속된 용병단.',
    },
    content: {
      fr: "Les Greymanes (Crinières Grises) comptent parmi les compagnies de mercenaires les plus respectées de tout Pywel. Ils suivent un code d'honneur strict — ils n'acceptent jamais de contrats qui nuisent à des innocents, et ils tiennent toujours leur parole.\n\nLa Nuit des Ours Noirs a réduit leurs effectifs à une poignée de survivants éparpillés. Kliff, Damiane et Oongka sont parmi les rares membres à avoir survécu à l'attaque.\n\nMembres connus : Kliff (chef), Damiane (combattante), Oongka (colosse).",
      en: "The Greymanes are among the most respected mercenary companies in all of Pywel. They follow a strict code of honor — never accepting contracts that harm innocents, and always keeping their word.\n\nThe Night of the Black Bears reduced their numbers to a handful of scattered survivors. Kliff, Damiane, and Oongka are among the few who survived the attack.\n\nKnown members: Kliff (leader), Damiane (fighter), Oongka (colossus).",
      ko: "그레이메인은 파이웰 전역에서 가장 존경받는 용병단 중 하나입니다. 엄격한 명예 규범을 따르며, 무고한 사람에게 피해를 주는 계약은 절대 받지 않고, 항상 약속을 지킵니다.\n\n검은 곰의 밤으로 인해 소수의 생존자만 남아 흩어졌습니다. 클리프, 다미안, 웅카는 공격에서 살아남은 몇 안 되는 멤버들입니다.\n\n알려진 멤버: 클리프 (리더), 다미안 (전투원), 웅카 (거인).",
    },
    relatedEntries: ['kliff', 'damiane', 'oongka', 'pailune', 'night-of-black-bears'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-08',
    readingTime: '3 min',
  },
  {
    id: 'black-bears',
    title: 'Les Ours Noirs',
    category: 'FACTION',
    image: combatGoblin,
    excerpt: {
      fr: 'Une force militaire impitoyable, antagoniste principal de Crimson Desert.',
      en: 'A ruthless military force, the main antagonist of Crimson Desert.',
      ko: '무자비한 군사 세력. 크림슨 디저트의 주요 적대 세력.',
    },
    content: {
      fr: "Les Ours Noirs sont la faction antagoniste principale de Crimson Desert. Force militaire impitoyable, ils sont responsables de l'attaque dévastatrice sur Pailune qui a dispersé les Crinières Grises.\n\nLeurs ambitions et motivations profondes restent à découvrir au fil de l'histoire.",
      en: "The Black Bears are the main antagonist faction in Crimson Desert. A ruthless military force, they are responsible for the devastating attack on Pailune that scattered the Greymanes.\n\nTheir deeper ambitions and motivations remain to be discovered throughout the story.",
      ko: "검은 곰 부대는 크림슨 디저트의 주요 적대 세력입니다. 무자비한 군사 세력으로, 그레이메인을 흩어버린 파일룬에 대한 파괴적인 공격의 주범입니다.\n\n그들의 더 깊은 야망과 동기는 스토리를 통해 밝혀질 것입니다.",
    },
    relatedEntries: ['night-of-black-bears', 'the-abysse', 'greymanes'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },

  // ── LIEUX ────────────────────────────────────────────────────
  {
    id: 'pywel',
    title: 'Pywel',
    category: 'LOCATION',
    image: pywelPanorama,
    excerpt: {
      fr: "Le continent où se déroule l'histoire de Crimson Desert.",
      en: 'The continent where the story of Crimson Desert takes place.',
      ko: '크림슨 디저트의 이야기가 펼쳐지는 대륙.',
    },
    content: {
      fr: "Pywel est le vaste continent où se déroule l'intégralité de l'aventure de Crimson Desert. Des collines verdoyantes de Pailune aux sables rouges du Désert Pourpre, en passant par les cités commerçantes florissantes comme Hernand et les ruines mystérieuses de Délésyie, Pywel offre une diversité de paysages et de cultures remarquable.\n\nRégions connues : Hernand, Pailune, Déméniss, Délésyie, Désert Pourpre.",
      en: "Pywel is the vast continent where the entirety of Crimson Desert's adventure takes place. From the green hills of Pailune to the red sands of the Désert Pourpre, through thriving trade cities like Hernand and the mysterious ruins of Délésyie, Pywel offers a remarkable diversity of landscapes and cultures.\n\nKnown regions: Hernand, Pailune, Déméniss, Délésyie, Désert Pourpre.",
      ko: "파이웰은 크림슨 디저트의 모든 모험이 펼쳐지는 광활한 대륙입니다. 파일룬의 푸른 언덕에서 진홍 사막의 붉은 모래까지, 에르난드 같은 번화한 교역 도시와 델레시에의 신비로운 유적까지, 파이웰은 놀라운 다양성의 경관과 문화를 제공합니다.\n\n알려진 지역: 에르난드, 파일룬, 데메니스, 델레시에, 진홍 사막.",
    },
    relatedEntries: ['hernand', 'pailune', 'demeniss', 'delesyie', 'desert-pourpre'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
  {
    id: 'hernand',
    title: 'Hernand',
    category: 'LOCATION',
    image: hernandCity,
    excerpt: {
      fr: "La grande cité marchande, carrefour du commerce de Pywel.",
      en: "The great trade city, hub of Pywel's commerce.",
      ko: '파이웰 상업의 중심지인 대규모 교역 도시.',
    },
    content: {
      fr: "Hernand est le cœur battant du commerce de Pywel. Nichée entre des chaînes de montagnes protectrices et des plaines fertiles, la ville s'est enrichie grâce aux routes commerciales qui relient les régions du continent.",
      en: "Hernand is the beating heart of Pywel's commerce. Nestled between protective mountain ranges and fertile plains, the city has grown on trade routes connecting the continent's regions.",
      ko: "에르난드는 파이웰 상업의 심장부입니다. 보호적인 산맥과 비옥한 평원 사이에 자리 잡은 이 도시는 대륙의 지역들을 연결하는 교역로를 따라 성장했습니다.",
    },
    relatedEntries: ['kliff', 'pywel'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
  {
    id: 'pailune',
    title: 'Pailune',
    category: 'LOCATION',
    image: pailuneRuins,
    excerpt: {
      fr: 'La patrie déchue des Greymanes, désormais un paysage de désolation.',
      en: 'The fallen homeland of the Greymanes, now a scarred wasteland.',
      ko: '그레이메인의 몰락한 고향. 이제는 폐허가 된 황무지.',
    },
    content: {
      fr: "Pailune était autrefois la région la plus paisible de Pywel — des collines verdoyantes parsemées de campements Greymanes. La Nuit des Ours Noirs a transformé Pailune en terre désolée.",
      en: "Pailune was once Pywel's most peaceful region — rolling green hills dotted with Greymane settlements. The Night of the Black Bears transformed Pailune into a wasteland.",
      ko: "파일룬은 한때 파이웰에서 가장 평화로운 지역이었습니다 — 그레이메인 정착지가 점점이 있는 완만한 녹색 언덕. 검은 곰의 밤이 파일룬을 황무지로 바꿔 놓았습니다.",
    },
    relatedEntries: ['greymanes', 'night-of-black-bears', 'kliff'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
  {
    id: 'demeniss',
    title: 'Déméniss',
    category: 'LOCATION',
    image: demenissTower,
    excerpt: {
      fr: 'Territoire contesté où chaque faction se bat pour le contrôle.',
      en: 'Contested territory where every faction vies for control.',
      ko: '모든 세력이 지배권을 놓고 다투는 분쟁 지역.',
    },
    content: {
      fr: "Déméniss est le no man's land de Pywel. Situé à la convergence de multiples frontières territoriales, il a été disputé pendant des siècles.",
      en: "Déméniss is the no-man's-land of Pywel. Located at the convergence of multiple territorial boundaries, it has been fought over for centuries.",
      ko: "데메니스는 파이웰의 무인지대입니다. 여러 영토의 경계가 만나는 곳에 위치하여 수세기 동안 분쟁의 대상이었습니다.",
    },
    relatedEntries: ['black-bears', 'greymanes'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
  {
    id: 'delesyie',
    title: 'Délésyie',
    category: 'LOCATION',
    image: delesyieCastle,
    excerpt: {
      fr: 'Région mystérieuse enveloppée de brume, cachant des ruines anciennes.',
      en: 'Mysterious mist-shrouded region hiding ancient ruins.',
      ko: '고대 유적을 감추고 있는 안개에 싸인 신비로운 지역.',
    },
    content: {
      fr: "Délésyie existe à la lisière du monde connu, là où le voile entre la réalité et l'Abysse s'amincit. Des brumes argentées perpétuelles obscurcissent ses pics montagneux, et des ruines anciennes précèdent toute civilisation connue.",
      en: "Délésyie exists at the edge of the known world, where the veil between reality and the Abysse grows thin. Perpetual silver mists obscure its mountain peaks, and ancient ruins predate any known civilization.",
      ko: "델레시에는 알려진 세계의 끝에 존재하며, 현실과 심연 사이의 경계가 희미해지는 곳입니다. 영원한 은빛 안개가 산봉우리를 가리고, 고대 유적은 알려진 어떤 문명보다 오래되었습니다.",
    },
    relatedEntries: ['the-abysse'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
  {
    id: 'desert-pourpre',
    title: 'Désert Pourpre',
    category: 'LOCATION',
    image: envCanyon,
    excerpt: {
      fr: 'Le Désert Écarlate qui donne son nom au jeu.',
      en: 'The Crimson Desert that gives the game its name.',
      ko: '게임 이름의 유래가 된 진홍 사막.',
    },
    content: {
      fr: "Le Désert Pourpre — le Désert Écarlate qui donne son nom au jeu — est la région la plus dangereuse et mystérieuse de tout Pywel. Ses sables sont d'un rouge rouille profond.",
      en: "The Désert Pourpre — the Crimson Desert that gives the game its name — is the most dangerous and mysterious region in all of Pywel. Its sands are a deep rust-red.",
      ko: "진홍 사막 — 게임 이름의 유래가 된 사막 — 은 파이웰 전체에서 가장 위험하고 신비로운 지역입니다. 그 모래는 깊은 적갈색입니다.",
    },
    relatedEntries: ['the-abysse', 'kliff'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
  {
    id: 'the-abysse',
    title: "L'Abysse",
    category: 'LOCATION',
    image: envTemple,
    excerpt: {
      fr: "Une force surnaturelle mystérieuse menaçant le continent de Pywel.",
      en: 'A mysterious supernatural force threatening the continent of Pywel.',
      ko: '파이웰 대륙을 위협하는 신비로운 초자연적 힘.',
    },
    content: {
      fr: "L'Abysse est une force surnaturelle mystérieuse qui corrompt la terre, crée des créatures monstrueuses et menace le continent de Pywel. Elle est considérée comme la source de la magie élémentaire dans le jeu.\n\nLes détails sur sa nature et ses origines restent à découvrir au fil de l'histoire de Crimson Desert.",
      en: "The Abysse is a mysterious supernatural force that corrupts the land, creates monstrous creatures, and threatens the continent of Pywel. It is considered the source of elemental magic in the game.\n\nDetails about its nature and origins remain to be discovered throughout Crimson Desert's story.",
      ko: "심연은 대지를 타락시키고, 괴물을 만들어내며, 파이웰 대륙을 위협하는 신비로운 초자연적 힘입니다. 게임 내 원소 마법의 원천으로 여겨집니다.\n\n그 본질과 기원에 대한 세부 사항은 크림슨 디저트의 스토리를 통해 밝혀질 것입니다.",
    },
    relatedEntries: ['desert-pourpre', 'black-bears'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },

  // ── ÉVÉNEMENTS ───────────────────────────────────────────────
  {
    id: 'night-of-black-bears',
    title: 'Nuit des Ours Noirs',
    category: 'EVENT',
    image: combatAction,
    excerpt: {
      fr: "L'attaque surprise dévastatrice qui a dispersé les Greymanes.",
      en: 'The devastating surprise attack that scattered the Greymanes.',
      ko: '그레이메인을 흩어버린 파괴적인 기습 공격.',
    },
    content: {
      fr: "La Nuit des Ours Noirs est l'événement déclencheur de toute l'histoire de Crimson Desert. Les Ours Noirs ont lancé une attaque dévastatrice sur Pailune, dispersant les Crinières Grises et détruisant leur foyer.\n\nCet événement lance Kliff dans sa quête pour réunir ses compagnons et découvrir la vérité derrière l'attaque.",
      en: "The Night of the Black Bears is the inciting event of the entire Crimson Desert story. The Black Bears launched a devastating attack on Pailune, scattering the Greymanes and destroying their home.\n\nThis event launches Kliff on his quest to reunite his companions and discover the truth behind the attack.",
      ko: "검은 곰의 밤은 크림슨 디저트 전체 스토리의 발단이 되는 사건입니다. 검은 곰 부대가 파일룬에 파괴적인 공격을 감행하여 그레이메인을 흩어버리고 그들의 고향을 파괴했습니다.\n\n이 사건으로 클리프는 동료들을 재결집하고 공격 뒤에 숨겨진 진실을 밝히기 위한 여정을 시작합니다.",
    },
    relatedEntries: ['greymanes', 'black-bears', 'pailune', 'kliff'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },

  // ── SYSTÈMES ────────────────────────────────────────────────
  {
    id: 'elemental-magic',
    title: 'Système de Magie Élémentaire',
    category: 'ITEM',
    image: kliffForest,
    excerpt: {
      fr: 'Les trois forces élémentaires du combat : Feu, Glace et Vent.',
      en: 'The three elemental combat forces: Fire, Ice, and Wind.',
      ko: '전투의 세 가지 원소 힘: 불, 얼음, 바람.',
    },
    content: {
      fr: "La magie à Pywel est canalisée à travers trois éléments primordiaux : le Feu, la Glace et le Vent. Ce système de magie élémentaire peut être combiné avec les attaques physiques pour créer des synergies puissantes en combat.",
      en: "Magic in Pywel is channeled through three primal elements: Fire, Ice, and Wind. This elemental magic system can be combined with physical attacks to create powerful synergies in combat.",
      ko: "파이웰의 마법은 세 가지 원초적 원소를 통해 발현됩니다: 불, 얼음, 바람. 이 원소 마법 시스템은 물리 공격과 결합하여 전투에서 강력한 시너지를 만들어낼 수 있습니다.",
    },
    relatedEntries: ['kliff', 'damiane', 'oongka'],
    mentions: [],
    lastUpdated: '2026-03-08',
    readingTime: '2 min',
  },
];
