// @ts-nocheck
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18n } from '@/crimson-desert-wiki/context/I18nContext';
import type { Lang } from '@/crimson-desert-wiki/context/I18nContext';
import RevealOnScroll from '@/crimson-desert-wiki/components/RevealOnScroll';
import GoldDivider from '@/crimson-desert-wiki/components/GoldDivider';
import SEOHead from '@/crimson-desert-wiki/components/SEOHead';
import { seo } from '@/crimson-desert-wiki/lib/seo';

const combatAction = '/crimson-desert/combat-action.jpg';
const combatBlock = '/crimson-desert/combat-block.jpg';

type L = Record<Lang, string>;

interface WeaponInfo {
  id: string;
  name: L;
  category: L;
  description: L;
  playstyle: L;
  icon: string;
}

const weapons: WeaponInfo[] = [
  {
    id: 'sword-shield',
    name: { fr: 'Épée et bouclier', en: 'Sword & Shield', es: 'Espada y escudo', it: 'Spada e scudo', ko: '검과 방패', pt: 'Espada e escudo' },
    category: { fr: 'Mêlée — Équilibré', en: 'Melee — Balanced', es: 'Cuerpo a cuerpo — Equilibrado', it: 'Mischia — Equilibrato', ko: '근접 — 균형', pt: 'Corpo a corpo — Equilibrado' },
    description: {
      fr: "La combinaison classique offrant un gameplay équilibré entre attaque et défense. Le bouclier permet de bloquer et de parer les coups ennemis, tandis que l'épée offre des combos rapides et polyvalents.",
      en: 'The classic combination offering balanced gameplay between offense and defense. The shield allows blocking and parrying enemy strikes, while the sword delivers quick, versatile combos.',
      es: 'La combinación clásica que ofrece un juego equilibrado entre ataque y defensa. El escudo permite bloquear y desviar golpes enemigos, mientras la espada ofrece combos rápidos y versátiles.',
      it: "La combinazione classica che offre un gameplay equilibrato tra attacco e difesa. Lo scudo permette di bloccare e parare i colpi nemici, mentre la spada offre combo rapide e versatili.",
      ko: '공격과 방어 사이의 균형 잡힌 게임플레이를 제공하는 클래식 조합. 방패로 적의 공격을 막고 패리하며, 검으로 빠르고 다양한 콤보를 연결합니다.',
      pt: 'A combinação clássica oferecendo jogabilidade equilibrada entre ataque e defesa. O escudo permite bloquear e aparar golpes inimigos, enquanto a espada oferece combos rápidos e versáteis.',
    },
    playstyle: {
      fr: "Idéal pour les joueurs qui découvrent le système de combat. Versatile face à tous les types d'ennemis.",
      en: "Ideal for players new to the combat system. Versatile against all enemy types.",
      es: 'Ideal para jugadores que descubren el sistema de combate. Versátil contra todo tipo de enemigos.',
      it: "Ideale per i giocatori che scoprono il sistema di combattimento. Versatile contro tutti i tipi di nemici.",
      ko: '전투 시스템을 처음 접하는 플레이어에게 이상적. 모든 유형의 적에게 다재다능.',
      pt: 'Ideal para jogadores novos no sistema de combate. Versátil contra todos os tipos de inimigos.',
    },
    icon: '🗡️',
  },
  {
    id: 'spear',
    name: { fr: 'Lance', en: 'Spear', es: 'Lanza', it: 'Lancia', ko: '창', pt: 'Lança' },
    category: { fr: 'Mêlée — Portée', en: 'Melee — Range', es: 'Cuerpo a cuerpo — Alcance', it: 'Mischia — Portata', ko: '근접 — 사거리', pt: 'Corpo a corpo — Alcance' },
    description: {
      fr: "Les lances excellent dans le contrôle de la distance. Leur portée supérieure permet de frapper les ennemis tout en restant hors de leur zone d'attaque.",
      en: "Spears excel at distance control. Their superior reach lets you strike enemies while staying outside their attack range.",
      es: 'Las lanzas destacan en el control de la distancia. Su alcance superior permite golpear a los enemigos manteniéndose fuera de su zona de ataque.',
      it: "Le lance eccellono nel controllo della distanza. La loro portata superiore permette di colpire i nemici rimanendo fuori dalla loro zona d'attacco.",
      ko: '창은 거리 조절에 탁월합니다. 뛰어난 사거리로 적의 공격 범위 밖에서 공격할 수 있습니다.',
      pt: 'Lanças se destacam no controle de distância. Seu alcance superior permite atingir inimigos enquanto permanece fora da zona de ataque deles.',
    },
    playstyle: {
      fr: "Style tactique et mesuré, avec des attaques de poussée puissantes. Excellent en combat de groupe.",
      en: "Tactical, measured style with powerful thrust attacks. Excellent in group fights.",
      es: 'Estilo táctico y medido, con poderosos ataques de empuje. Excelente en combates grupales.',
      it: "Stile tattico e misurato, con potenti attacchi di affondo. Eccellente negli scontri di gruppo.",
      ko: '강력한 찌르기 공격을 활용한 전술적이고 신중한 스타일. 그룹 전투에서 탁월.',
      pt: 'Estilo tático e medido, com poderosos ataques de estocada. Excelente em combates em grupo.',
    },
    icon: '🔱',
  },
  {
    id: 'greatsword',
    name: { fr: 'Grande épée', en: 'Greatsword', es: 'Espadón', it: 'Spadone', ko: '대검', pt: 'Espadão' },
    category: { fr: 'Mêlée — Puissance', en: 'Melee — Power', es: 'Cuerpo a cuerpo — Potencia', it: 'Mischia — Potenza', ko: '근접 — 파워', pt: 'Corpo a corpo — Poder' },
    description: {
      fr: "Les grandes épées sacrifient la vitesse pour une puissance brute dévastatrice. Chaque frappe inflige des dégâts massifs et peut déstabiliser les ennemis les plus coriaces.",
      en: "Greatswords sacrifice speed for devastating raw power. Every strike deals massive damage and can stagger even the toughest enemies.",
      es: 'Los espadones sacrifican velocidad por un poder bruto devastador. Cada golpe inflige daño masivo y puede desestabilizar a los enemigos más resistentes.',
      it: "Gli spadoni sacrificano la velocità per una potenza bruta devastante. Ogni colpo infligge danni massicci e può destabilizzare anche i nemici più coriacei.",
      ko: '대검은 속도를 희생하고 파괴적인 순수 파워를 제공합니다. 모든 공격이 막대한 피해를 주며 가장 강인한 적도 비틀거리게 합니다.',
      pt: 'Espadões sacrificam velocidade por poder bruto devastador. Cada golpe causa dano massivo e pode desestabilizar até os inimigos mais resistentes.',
    },
    playstyle: {
      fr: "Le timing est crucial : les ouvertures sont courtes, mais une attaque bien placée peut changer le cours d'un affrontement.",
      en: "Timing is critical: openings are short, but a well-placed hit can turn the tide of battle.",
      es: 'El timing es crucial: las aperturas son cortas, pero un ataque bien colocado puede cambiar el rumbo del enfrentamiento.',
      it: "Il tempismo è fondamentale: le finestre d'attacco sono brevi, ma un colpo ben piazzato può cambiare le sorti dello scontro.",
      ko: '타이밍이 중요합니다: 공격 기회는 짧지만, 잘 배치된 공격 하나가 전투의 흐름을 바꿀 수 있습니다.',
      pt: 'O timing é crucial: as aberturas são curtas, mas um golpe bem colocado pode mudar o rumo da batalha.',
    },
    icon: '⚔️',
  },
  {
    id: 'axe',
    name: { fr: 'Hache', en: 'Axe', es: 'Hacha', it: 'Ascia', ko: '도끼', pt: 'Machado' },
    category: { fr: 'Mêlée — Agression', en: 'Melee — Aggression', es: 'Cuerpo a cuerpo — Agresión', it: 'Mischia — Aggressione', ko: '근접 — 공격적', pt: 'Corpo a corpo — Agressão' },
    description: {
      fr: "Les haches incarnent l'agressivité pure. Elles offrent des dégâts élevés avec un rythme de combat soutenu.",
      en: "Axes embody pure aggression. They deliver high damage with a relentless combat tempo.",
      es: 'Las hachas encarnan la agresividad pura. Ofrecen daño elevado con un ritmo de combate sostenido.',
      it: "Le asce incarnano l'aggressività pura. Offrono danni elevati con un ritmo di combattimento sostenuto.",
      ko: '도끼는 순수한 공격성을 구현합니다. 끊임없는 전투 템포로 높은 피해를 줍니다.',
      pt: 'Machados incorporam pura agressividade. Oferecem dano elevado com um ritmo de combate implacável.',
    },
    playstyle: {
      fr: "Combos brutales et satisfaisantes. Particulièrement efficaces contre les ennemis en armure.",
      en: "Brutal and satisfying combos. Particularly effective against armored enemies.",
      es: 'Combos brutales y satisfactorios. Particularmente efectivas contra enemigos con armadura.',
      it: "Combo brutali e soddisfacenti. Particolarmente efficaci contro i nemici corazzati.",
      ko: '잔인하고 만족스러운 콤보. 특히 갑옷 입은 적에게 효과적.',
      pt: 'Combos brutais e satisfatórios. Particularmente eficazes contra inimigos blindados.',
    },
    icon: '🪓',
  },
  {
    id: 'dual-blades',
    name: { fr: 'Doubles lames', en: 'Dual Blades', es: 'Dobles espadas', it: 'Doppie lame', ko: '쌍검', pt: 'Lâminas duplas' },
    category: { fr: 'Mêlée — Vitesse', en: 'Melee — Speed', es: 'Cuerpo a cuerpo — Velocidad', it: 'Mischia — Velocità', ko: '근접 — 속도', pt: 'Corpo a corpo — Velocidade' },
    description: {
      fr: "Les doubles lames privilégient la vitesse et l'agilité. Ce style permet d'enchaîner les attaques à un rythme effréné.",
      en: "Dual blades prioritize speed and agility. This style allows chaining attacks at a frantic pace.",
      es: 'Las dobles espadas priorizan la velocidad y la agilidad. Este estilo permite encadenar ataques a un ritmo frenético.',
      it: "Le doppie lame privilegiano velocità e agilità. Questo stile permette di concatenare attacchi a ritmo frenetico.",
      ko: '쌍검은 속도와 민첩성을 우선시합니다. 이 스타일은 광적인 속도로 공격을 연결할 수 있습니다.',
      pt: 'Lâminas duplas priorizam velocidade e agilidade. Este estilo permite encadear ataques em ritmo frenético.',
    },
    playstyle: {
      fr: "Idéal pour l'esquive et le repositionnement rapide. Chaque coup individuel inflige moins de dégâts mais les enchaînements compensent.",
      en: "Ideal for dodging and quick repositioning. Each individual strike deals less damage but combos compensate.",
      es: 'Ideal para la esquiva y el reposicionamiento rápido. Cada golpe individual inflige menos daño pero los encadenamientos compensan.',
      it: "Ideale per schivate e riposizionamento rapido. Ogni singolo colpo infligge meno danni ma le combo compensano.",
      ko: '회피와 빠른 재배치에 이상적. 개별 공격은 적은 피해를 주지만 콤보가 보상합니다.',
      pt: 'Ideal para esquiva e reposicionamento rápido. Cada golpe individual causa menos dano, mas os combos compensam.',
    },
    icon: '🔪',
  },
  {
    id: 'bow',
    name: { fr: 'Arc', en: 'Bow', es: 'Arco', it: 'Arco', ko: '활', pt: 'Arco' },
    category: { fr: 'Distance — Précision', en: 'Ranged — Precision', es: 'Distancia — Precisión', it: 'Distanza — Precisione', ko: '원거리 — 정밀', pt: 'Distância — Precisão' },
    description: {
      fr: "L'arc est l'arme de choix pour les combats à distance. Il permet de toucher les ennemis avant qu'ils ne puissent réagir.",
      en: "The bow is the weapon of choice for ranged combat. It allows engaging enemies before they can react.",
      es: 'El arco es el arma elegida para el combate a distancia. Permite alcanzar a los enemigos antes de que puedan reaccionar.',
      it: "L'arco è l'arma d'elezione per il combattimento a distanza. Permette di colpire i nemici prima che possano reagire.",
      ko: '활은 원거리 전투를 위한 최적의 무기입니다. 적이 반응하기 전에 공격할 수 있습니다.',
      pt: 'O arco é a arma ideal para combate à distância. Permite atingir inimigos antes que possam reagir.',
    },
    playstyle: {
      fr: "Tirs de précision sur les points faibles des ennemis et des boss. Avantage stratégique en terrain ouvert.",
      en: "Precision shots targeting enemy and boss weak points. Strategic advantage in open terrain.",
      es: 'Disparos de precisión a los puntos débiles de enemigos y jefes. Ventaja estratégica en terreno abierto.',
      it: "Tiri di precisione sui punti deboli di nemici e boss. Vantaggio strategico in terreno aperto.",
      ko: '적과 보스의 약점을 노리는 정밀 사격. 개방된 지형에서 전략적 이점.',
      pt: 'Tiros de precisão nos pontos fracos de inimigos e chefes. Vantagem estratégica em terreno aberto.',
    },
    icon: '🏹',
  },
  {
    id: 'musket',
    name: { fr: 'Mousquet', en: 'Musket', es: 'Mosquete', it: 'Moschetto', ko: '머스킷', pt: 'Mosquete' },
    category: { fr: 'Distance — Puissance', en: 'Ranged — Power', es: 'Distancia — Potencia', it: 'Distanza — Potenza', ko: '원거리 — 파워', pt: 'Distância — Poder' },
    description: {
      fr: "Le mousquet représente une option à distance unique dans l'univers médiéval-fantastique. Plus puissant que l'arc par tir, il offre des dégâts concentrés sur un seul impact.",
      en: "The musket represents a unique ranged option in the medieval-fantasy setting. More powerful than the bow per shot, it delivers concentrated damage in a single impact.",
      es: 'El mosquete representa una opción a distancia única en el universo medieval-fantástico. Más poderoso que el arco por disparo, ofrece daño concentrado en un solo impacto.',
      it: "Il moschetto rappresenta un'opzione a distanza unica nell'universo medievale-fantastico. Più potente dell'arco per singolo colpo, offre danni concentrati in un solo impatto.",
      ko: '머스킷은 중세 판타지 세계에서 독특한 원거리 옵션입니다. 활보다 한 발당 더 강력하며, 단일 충격에 집중된 피해를 줍니다.',
      pt: 'O mosquete representa uma opção de distância única no cenário medieval-fantástico. Mais poderoso que o arco por disparo, oferece dano concentrado em um único impacto.',
    },
    playstyle: {
      fr: "Arme de précision avec un temps de rechargement plus long. Idéale pour ouvrir un combat ou punir les ouvertures.",
      en: "Precision weapon with longer reload time. Ideal for opening a fight or punishing openings.",
      es: 'Arma de precisión con tiempo de recarga más largo. Ideal para abrir un combate o castigar las aperturas del enemigo.',
      it: "Arma di precisione con tempo di ricarica più lungo. Ideale per aprire un combattimento o punire le aperture del nemico.",
      ko: '재장전 시간이 더 긴 정밀 무기. 전투를 시작하거나 빈틈을 노리는 데 이상적.',
      pt: 'Arma de precisão com tempo de recarga mais longo. Ideal para abrir um combate ou punir aberturas.',
    },
    icon: '🔫',
  },
  {
    id: 'unarmed',
    name: { fr: 'Mains nues et prises', en: 'Unarmed & Grapples', es: 'Puños y agarres', it: 'Mani nude e prese', ko: '맨손 전투와 그래플', pt: 'Desarmado e agarrões' },
    category: { fr: 'Mêlée — Physique', en: 'Melee — Physical', es: 'Cuerpo a cuerpo — Físico', it: 'Mischia — Fisico', ko: '근접 — 물리', pt: 'Corpo a corpo — Físico' },
    description: {
      fr: "Le combat à mains nues et les prises ajoutent une dimension physique brute au système de combat. Les démonstrations montrent Kliff saisissant ses ennemis pour les projeter, les plaquer au sol ou les précipiter du haut des falaises.",
      en: "Unarmed combat and grappling add a raw physical dimension. Gameplay demonstrations show Kliff grabbing enemies to throw them, slam them to the ground, or hurl them off cliffsides.",
      es: 'El combate a puño limpio y los agarres añaden una dimensión física bruta. Las demostraciones muestran a Kliff agarrando enemigos para lanzarlos, estrellarlos contra el suelo o precipitarlos desde acantilados.',
      it: "Il combattimento a mani nude e le prese aggiungono una dimensione fisica bruta. Le dimostrazioni mostrano Kliff che afferra i nemici per scagliarli, schiacciarli al suolo o precipitarli dalle scogliere.",
      ko: '맨손 전투와 그래플은 원시적인 물리적 차원을 추가합니다. 게임플레이 시연에서 클리프가 적을 잡아 던지고, 바닥에 내리치고, 절벽에서 떨어뜨리는 모습을 보여줍니다.',
      pt: 'Combate desarmado e agarrões adicionam uma dimensão física bruta. Demonstrações de gameplay mostram Kliff agarrando inimigos para arremessá-los, esmagá-los no chão ou jogá-los de penhascos.',
    },
    playstyle: {
      fr: "Intègre pleinement la physique de l'environnement. Moments de combat spectaculaires et imprévisibles.",
      en: "Fully integrates environmental physics. Spectacular and unpredictable combat moments.",
      es: 'Integra plenamente la física del entorno. Momentos de combate espectaculares e impredecibles.',
      it: "Integra pienamente la fisica dell'ambiente. Momenti di combattimento spettacolari e imprevedibili.",
      ko: '환경 물리를 완전히 통합. 화려하고 예측 불가능한 전투 순간.',
      pt: 'Integra plenamente a física do ambiente. Momentos de combate espetaculares e imprevisíveis.',
    },
    icon: '👊',
  },
];

const sectionTexts = {
  intro: {
    fr: "Crimson Desert propose 8 types d'armes confirmés, chacun avec son propre style de combat. Le jeu de Pearl Abyss mise sur la fluidité, les transitions dynamiques entre armes en plein combat, et l'interaction avec l'environnement.",
    en: "Crimson Desert features 8 confirmed weapon types, each with its own combat style. Pearl Abyss's game emphasizes fluid weapon usage, dynamic mid-combat weapon switching, and environmental interaction.",
    es: 'Crimson Desert presenta 8 tipos de armas confirmados, cada uno con su propio estilo de combate. El juego de Pearl Abyss apuesta por la fluidez, las transiciones dinámicas entre armas y la interacción con el entorno.',
    it: "Crimson Desert presenta 8 tipi di armi confermati, ciascuno con il proprio stile di combattimento. Il gioco di Pearl Abyss punta sulla fluidità, le transizioni dinamiche tra armi e l'interazione con l'ambiente.",
    ko: '크림슨 디저트는 각각 고유한 전투 스타일을 가진 8가지 확인된 무기 유형을 제공합니다. 펄어비스의 게임은 유연한 무기 사용, 전투 중 동적 무기 전환, 환경과의 상호작용을 강조합니다.',
    pt: 'Crimson Desert apresenta 8 tipos de armas confirmados, cada um com seu próprio estilo de combate. O jogo da Pearl Abyss enfatiza o uso fluido de armas, troca dinâmica de armas durante o combate e interação com o ambiente.',
  } as L,
  switchingTitle: {
    fr: 'Changement d\'arme en combat',
    en: 'Mid-Combat Weapon Switching',
    es: 'Cambio de arma en combate',
    it: 'Cambio arma in combattimento',
    ko: '전투 중 무기 전환',
    pt: 'Troca de arma durante o combate',
  } as L,
  switchingDesc: {
    fr: "L'une des mécaniques les plus remarquables de Crimson Desert est la possibilité de changer d'arme en plein combat. Les séquences de gameplay montrent des transitions fluides d'une épée à un arc, ou d'une grande épée à des doubles lames, sans rupture de rythme. Cette mécanique encourage l'expérimentation et l'adaptation en temps réel.",
    en: "One of Crimson Desert's most remarkable mechanics is the ability to switch weapons mid-combat. Gameplay sequences show fluid transitions from sword to bow, or from greatsword to dual blades, without breaking rhythm. This mechanic encourages experimentation and real-time adaptation.",
    es: 'Una de las mecánicas más destacadas de Crimson Desert es la posibilidad de cambiar de arma en pleno combate. Las secuencias de gameplay muestran transiciones fluidas de espada a arco, o de espadón a dobles espadas, sin romper el ritmo.',
    it: "Una delle meccaniche più notevoli di Crimson Desert è la possibilità di cambiare arma durante il combattimento. Le sequenze di gameplay mostrano transizioni fluide dalla spada all'arco, o dallo spadone alle doppie lame, senza interruzione del ritmo.",
    ko: '크림슨 디저트의 가장 주목할 만한 메카닉 중 하나는 전투 중 무기를 전환할 수 있는 능력입니다. 게임플레이 시퀀스에서 검에서 활로, 또는 대검에서 쌍검으로 리듬을 깨지 않고 유연하게 전환하는 모습을 보여줍니다.',
  } as L,
  envTitle: {
    fr: "Interaction avec l'environnement",
    en: 'Environmental Interaction',
    es: 'Interacción con el entorno',
    it: "Interazione con l'ambiente",
    ko: '환경 상호작용',
  } as L,
  envDesc: {
    fr: "Le système de combat repose sur un moteur physique avancé. Les armes lourdes font chanceler les ennemis, les objets de l'environnement peuvent être utilisés comme armes improvisées, et le terrain influence directement le déroulement des combats.",
    en: "The combat system relies on an advanced physics engine. Heavy weapons stagger enemies, environmental objects can serve as improvised weapons, and terrain directly influences how fights unfold.",
    es: 'El sistema de combate se apoya en un motor de físicas avanzado. Las armas pesadas hacen tambalear a los enemigos, los objetos del entorno pueden usarse como armas improvisadas y el terreno influye directamente en el desarrollo de los combates.',
    it: "Il sistema di combattimento si basa su un motore fisico avanzato. Le armi pesanti fanno barcollare i nemici, gli oggetti dell'ambiente possono essere usati come armi improvvisate e il terreno influenza direttamente lo svolgimento dei combattimenti.",
    ko: '전투 시스템은 고급 물리 엔진에 의존합니다. 무거운 무기는 적을 비틀거리게 하고, 환경 오브젝트를 즉석 무기로 사용할 수 있으며, 지형이 전투 전개에 직접 영향을 미칩니다.',
  } as L,
  sourceNote: {
    fr: "Toutes les informations sur cette page proviennent de séquences de gameplay officielles et de communications de Pearl Abyss.",
    en: 'All information on this page comes from official gameplay footage and Pearl Abyss communications.',
    es: 'Toda la información de esta página proviene de secuencias de gameplay oficiales y comunicaciones de Pearl Abyss.',
    it: 'Tutte le informazioni di questa pagina provengono da sequenze di gameplay ufficiali e comunicazioni di Pearl Abyss.',
    ko: '이 페이지의 모든 정보는 공식 게임플레이 영상과 펄어비스 공식 발표에서 가져왔습니다.',
  } as L,
};

const WeaponsPage = () => {
  const { lang } = useI18n();
  const [expanded, setExpanded] = useState<string | null>(null);

  const pageTitle = {
    fr: 'ARMES DE CRIMSON DESERT',
    en: 'CRIMSON DESERT WEAPONS',
    es: 'ARMAS DE CRIMSON DESERT',
    it: 'ARMI DI CRIMSON DESERT',
    ko: '크림슨 디저트 무기',
  } as L;

  const subtitle = {
    fr: '8 types d\'armes confirmés',
    en: '8 confirmed weapon types',
    es: '8 tipos de armas confirmados',
    it: '8 tipi di armi confermati',
    ko: '8가지 확인된 무기 유형',
  } as L;

  const meleeLabel = { fr: 'ARMES DE MÊLÉE', en: 'MELEE WEAPONS', es: 'ARMAS CUERPO A CUERPO', it: 'ARMI DA MISCHIA', ko: '근접 무기' } as L;
  const rangedLabel = { fr: 'ARMES À DISTANCE', en: 'RANGED WEAPONS', es: 'ARMAS A DISTANCIA', it: 'ARMI A DISTANZA', ko: '원거리 무기' } as L;
  const mechanicsLabel = { fr: 'MÉCANIQUES DE COMBAT', en: 'COMBAT MECHANICS', es: 'MECÁNICAS DE COMBATE', it: 'MECCANICHE DI COMBATTIMENTO', ko: '전투 메카닉' } as L;

  const meleeWeapons = weapons.filter(w => !['bow', 'musket'].includes(w.id));
  const rangedWeapons = weapons.filter(w => ['bow', 'musket'].includes(w.id));

  const blogLink = { fr: 'Lire le guide complet des armes →', en: 'Read the full weapons guide →', es: 'Leer la guía completa de armas →', it: 'Leggi la guida completa alle armi →', ko: '무기 가이드 전체 읽기 →' } as L;
  const combatLink = { fr: 'Voir la page Combat →', en: 'See the Combat page →', es: 'Ver la página de Combate →', it: 'Vedi la pagina Combattimento →', ko: '전투 페이지 보기 →' } as L;

  return (
    <main id="main-content" className="relative z-10 min-h-screen pt-20">
      <SEOHead
        title={seo.weapons.title[lang]}
        description={seo.weapons.desc[lang]}
        path="/weapons"
        lang={lang}
        breadcrumbs={[
          { name: seo.breadcrumb.home[lang], path: '/' },
          { name: seo.breadcrumb.weapons[lang], path: '/weapons' },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero */}
        <RevealOnScroll>
          <div className="text-center mb-8 sm:mb-12 relative h-[200px] sm:h-[300px] flex items-center justify-center rounded-lg overflow-hidden border border-border">
            <img src={combatAction} alt="Crimson Desert weapons combat — © Pearl Abyss" className="absolute inset-0 w-full h-full object-cover opacity-40" loading="eager" width={1200} height={300} fetchPriority="high" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-void via-transparent to-bg-void" />
            <div className="relative z-10 px-4">
              <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl text-gold-bright drop-shadow-[0_0_20px_rgba(0,0,0,1)]">
                {pageTitle[lang]}
              </h1>
              <p className="mt-3 font-ui text-xs sm:text-sm tracking-[0.2em] text-text-secondary">
                {subtitle[lang]}
              </p>
              <div className="mt-4 mx-auto h-px bg-gradient-to-r from-transparent via-gold-mid to-transparent" style={{ width: 'min(300px, 80%)' }} />
            </div>
          </div>
        </RevealOnScroll>

        {/* Intro */}
        <RevealOnScroll>
          <p className="font-body text-sm sm:text-base text-text-secondary leading-relaxed max-w-3xl mx-auto text-center mb-10">
            {sectionTexts.intro[lang]}
          </p>
        </RevealOnScroll>

        {/* Melee Weapons */}
        <RevealOnScroll><GoldDivider variant="section" title={meleeLabel[lang]} /></RevealOnScroll>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
          {meleeWeapons.map(w => (
            <RevealOnScroll key={w.id}>
              <button
                onClick={() => setExpanded(expanded === w.id ? null : w.id)}
                className={`w-full text-left bg-card-bg border rounded-lg p-5 transition-all duration-300 hover:border-gold-mid hover:shadow-[0_0_20px_hsl(var(--gold-glow)/0.15)] ${expanded === w.id ? 'border-gold-mid shadow-[0_0_20px_hsl(var(--gold-glow)/0.2)]' : 'border-border'}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{w.icon}</span>
                  <div>
                    <h2 className="font-heading text-base sm:text-lg text-text-primary">{w.name[lang]}</h2>
                    <span className="font-ui text-[0.6rem] tracking-wider text-gold-mid">{w.category[lang]}</span>
                  </div>
                  <span className={`ml-auto text-text-muted-custom transition-transform duration-300 ${expanded === w.id ? 'rotate-180' : ''}`}>▾</span>
                </div>
                <p className="font-body text-sm text-text-secondary leading-relaxed">{w.description[lang]}</p>
                {expanded === w.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-body text-sm text-text-muted-custom italic">{w.playstyle[lang]}</p>
                  </div>
                )}
              </button>
            </RevealOnScroll>
          ))}
        </div>

        {/* Ranged Weapons */}
        <RevealOnScroll><GoldDivider variant="section" title={rangedLabel[lang]} /></RevealOnScroll>
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 mb-12">
          {rangedWeapons.map(w => (
            <RevealOnScroll key={w.id}>
              <button
                onClick={() => setExpanded(expanded === w.id ? null : w.id)}
                className={`w-full text-left bg-card-bg border rounded-lg p-5 transition-all duration-300 hover:border-gold-mid hover:shadow-[0_0_20px_hsl(var(--gold-glow)/0.15)] ${expanded === w.id ? 'border-gold-mid shadow-[0_0_20px_hsl(var(--gold-glow)/0.2)]' : 'border-border'}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{w.icon}</span>
                  <div>
                    <h2 className="font-heading text-base sm:text-lg text-text-primary">{w.name[lang]}</h2>
                    <span className="font-ui text-[0.6rem] tracking-wider text-gold-mid">{w.category[lang]}</span>
                  </div>
                  <span className={`ml-auto text-text-muted-custom transition-transform duration-300 ${expanded === w.id ? 'rotate-180' : ''}`}>▾</span>
                </div>
                <p className="font-body text-sm text-text-secondary leading-relaxed">{w.description[lang]}</p>
                {expanded === w.id && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-body text-sm text-text-muted-custom italic">{w.playstyle[lang]}</p>
                  </div>
                )}
              </button>
            </RevealOnScroll>
          ))}
        </div>

        {/* Combat Mechanics */}
        <RevealOnScroll><GoldDivider variant="section" title={mechanicsLabel[lang]} /></RevealOnScroll>
        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          <RevealOnScroll>
            <div className="bg-card-bg border border-border rounded-lg p-6 h-full">
              <h3 className="font-heading text-base text-gold-bright mb-3">{sectionTexts.switchingTitle[lang]}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{sectionTexts.switchingDesc[lang]}</p>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="bg-card-bg border border-border rounded-lg p-6 h-full">
              <h3 className="font-heading text-base text-gold-bright mb-3">{sectionTexts.envTitle[lang]}</h3>
              <p className="font-body text-sm text-text-secondary leading-relaxed">{sectionTexts.envDesc[lang]}</p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Image */}
        <RevealOnScroll>
          <div className="rounded-lg overflow-hidden border border-border mb-8">
            <img src={combatBlock} alt="Crimson Desert combat blocking — © Pearl Abyss" className="w-full h-48 sm:h-64 object-cover" loading="lazy" width={1200} height={256} decoding="async" />
          </div>
        </RevealOnScroll>

        {/* Links */}
        <RevealOnScroll>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link to="/blog/all-weapons-combat-styles-crimson-desert" className="btn-outline text-sm">{blogLink[lang]}</Link>
            <Link to="/combat" className="btn-outline text-sm">{combatLink[lang]}</Link>
          </div>
        </RevealOnScroll>

        {/* Source note */}
        <RevealOnScroll>
          <p className="font-ui text-[0.6rem] tracking-wider text-text-muted-custom text-center mt-8">
            {sectionTexts.sourceNote[lang]}
          </p>
        </RevealOnScroll>
      </div>
    </main>
  );
};

export default WeaponsPage;
