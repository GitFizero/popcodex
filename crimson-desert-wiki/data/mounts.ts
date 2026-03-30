import type { Translations } from '@/crimson-desert-wiki/context/I18nContext';

export interface Mount {
  id: string;
  name: Translations;
  description: Translations;
  staminaRequired: number | null;
  location: Translations;
  speed: number | null;
  known: boolean;
}

export const mounts: Mount[] = [
  {
    id: 'white-bear',
    name: { fr: 'Ours Blanc', en: 'White Bear', es: 'Oso Blanco', it: 'Orso Bianco', ko: '백곰' },
    description: {
      fr: 'Monture invoquable ajoutée avec le patch 1.01.00. Imposant ours des neiges de Pailune, lent mais très résistant.',
      en: 'Summonable mount added in patch 1.01.00. Imposing snow bear from Pailune, slow but highly durable.',
      es: 'Montura invocable añadida en el parche 1.01.00. Imponente oso de las nieves de Pailune, lento pero muy resistente.',
      it: 'Cavalcatura evocabile aggiunta nella patch 1.01.00. Imponente orso delle nevi di Pailune, lento ma molto resistente.',
      ko: '패치 1.01.00에 추가된 소환 가능 탈것. 파일룬의 거대한 설곰, 느리지만 매우 튼튼합니다.',
    },
    staminaRequired: null,
    location: { fr: 'Pailune — Quête de capture', en: 'Pailune — Capture quest', es: 'Pailune — Misión de captura', it: 'Pailune — Missione di cattura', ko: '파일룬 — 포획 퀘스트' },
    speed: 3,
    known: true,
  },
  {
    id: 'silver-fang',
    name: { fr: 'Croc d\'Argent', en: 'Silver Fang', es: 'Colmillo de Plata', it: 'Zanna d\'Argento', ko: '은빛 송곳니' },
    description: {
      fr: 'Monture invoquable ajoutée avec le patch 1.01.00. Loup gris rapide et agile, idéal pour l\'exploration.',
      en: 'Summonable mount added in patch 1.01.00. Fast and agile grey wolf, ideal for exploration.',
      es: 'Montura invocable añadida en el parche 1.01.00. Lobo gris rápido y ágil, ideal para la exploración.',
      it: 'Cavalcatura evocabile aggiunta nella patch 1.01.00. Lupo grigio veloce e agile, ideale per l\'esplorazione.',
      ko: '패치 1.01.00에 추가된 소환 가능 탈것. 빠르고 민첩한 회색 늑대, 탐험에 적합합니다.',
    },
    staminaRequired: null,
    location: { fr: 'Pailune — Quête de capture', en: 'Pailune — Capture quest', es: 'Pailune — Misión de captura', it: 'Pailune — Missione di cattura', ko: '파일룬 — 포획 퀘스트' },
    speed: 8,
    known: true,
  },
  {
    id: 'snowwhite-deer',
    name: { fr: 'Cerf Blanc des Neiges', en: 'Snowwhite Deer', es: 'Ciervo Blanco de las Nieves', it: 'Cervo Bianco delle Nevi', ko: '눈백록' },
    description: {
      fr: 'Monture invoquable ajoutée avec le patch 1.01.00. Cervidé majestueux à la course fluide, excellent en terrain montagneux.',
      en: 'Summonable mount added in patch 1.01.00. Majestic deer with smooth stride, excellent in mountainous terrain.',
      es: 'Montura invocable añadida en el parche 1.01.00. Ciervo majestuoso con un paso fluido, excelente en terreno montañoso.',
      it: 'Cavalcatura evocabile aggiunta nella patch 1.01.00. Cervo maestoso con un passo fluido, eccellente in terreno montuoso.',
      ko: '패치 1.01.00에 추가된 소환 가능 탈것. 부드러운 걸음의 장엄한 사슴, 산악 지형에 탁월합니다.',
    },
    staminaRequired: null,
    location: { fr: 'Pailune — Quête de capture', en: 'Pailune — Capture quest', es: 'Pailune — Misión de captura', it: 'Pailune — Missione di cattura', ko: '파일룬 — 포획 퀘스트' },
    speed: 6,
    known: true,
  },
  {
    id: 'roc',
    name: { fr: 'Roc', en: 'Roc', es: 'Roc', it: 'Roc', ko: '록' },
    description: {
      fr: 'Monture invoquable ajoutée avec le patch 1.01.00. Oiseau géant volant permettant de traverser de grandes distances par les airs.',
      en: 'Summonable mount added in patch 1.01.00. Giant flying bird allowing long-distance aerial traversal.',
      es: 'Montura invocable añadida en el parche 1.01.00. Ave gigante voladora que permite recorrer grandes distancias por el aire.',
      it: 'Cavalcatura evocabile aggiunta nella patch 1.01.00. Uccello gigante volante che permette di attraversare grandi distanze per aria.',
      ko: '패치 1.01.00에 추가된 소환 가능 탈것. 장거리 공중 이동이 가능한 거대한 비행 조류.',
    },
    staminaRequired: null,
    location: { fr: 'Délésyie — Quête spéciale', en: 'Delesyia — Special quest', es: 'Délésyie — Misión especial', it: 'Délésyie — Missione speciale', ko: '델레시에 — 특별 퀘스트' },
    speed: 9,
    known: true,
  },
  {
    id: 'horse',
    name: { fr: 'Cheval', en: 'Horse', es: 'Caballo', it: 'Cavallo', ko: '말' },
    description: {
      fr: 'Monture par défaut disponible dès le début du jeu. Polyvalent et fiable pour explorer Pywel.',
      en: 'Default mount available from the start. Versatile and reliable for exploring Pywel.',
      es: 'Montura predeterminada disponible desde el inicio. Versátil y fiable para explorar Pywel.',
      it: 'Cavalcatura predefinita disponibile dall\'inizio. Versatile e affidabile per esplorare Pywel.',
      ko: '게임 시작부터 사용 가능한 기본 탈것. 파이웰 탐험에 다재다능하고 믿을 수 있습니다.',
    },
    staminaRequired: null,
    location: { fr: 'Hernand — Écuries', en: 'Hernand — Stables', es: 'Hernand — Establos', it: 'Hernand — Stalle', ko: '에르난드 — 마구간' },
    speed: 7,
    known: true,
  },
];

export const TOTAL_MOUNTS = 29;
