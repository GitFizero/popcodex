import { FranchiseId } from './franchise-config';

export interface ArticleData {
  slug: string;
  franchise: string;
  category: string;
  title: Record<string, string>;
  excerpt: Record<string, string>;
  content: Record<string, string>;
  infobox?: Record<string, string>;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readTime: number;
  tags?: string[];
  relatedSlugs?: string[];
}

// Base articles (will be merged with franchise-specific imports)
const baseArticles: ArticleData[] = [
  {
    slug: 'lucia-caminos',
    franchise: 'gta-vi',
    category: 'personnages',
    title: {
      fr: 'Lucia Caminos',
      en: 'Lucia Caminos',
      es: 'Lucia Caminos',
      pt: 'Lucia Caminos',
      it: 'Lucia Caminos',
      ko: 'Lucia Caminos',
    },
    excerpt: {
      fr: 'Lucia Caminos est la première protagoniste féminine de l\'histoire de Grand Theft Auto. Co-protagoniste de GTA VI aux côtés de Jason Duval, elle incarne un tournant majeur pour la franchise.',
      en: 'Lucia Caminos is the first female protagonist in Grand Theft Auto history. Co-protagonist of GTA VI alongside Jason Duval, she represents a major turning point for the franchise.',
      es: 'Lucia Caminos es la primera protagonista femenina en la historia de Grand Theft Auto. Co-protagonista de GTA VI junto a Jason Duval, representa un punto de inflexión para la franquicia.',
      pt: 'Lucia Caminos é a primeira protagonista feminina da história de Grand Theft Auto. Co-protagonista de GTA VI ao lado de Jason Duval, ela representa um ponto de virada para a franquia.',
      it: 'Lucia Caminos è la prima protagonista femminile nella storia di Grand Theft Auto. Co-protagonista di GTA VI insieme a Jason Duval, rappresenta una svolta importante per il franchise.',
      ko: 'Lucia Caminos는 Grand Theft Auto 역사상 최초의 여성 주인공입니다. Jason Duval과 함께 GTA VI의 공동 주인공으로, 프랜차이즈의 중요한 전환점을 나타냅니다.',
    },
    content: {
      fr: `## Qui est Lucia Caminos ?

Lucia Caminos est l'une des deux protagonistes de Grand Theft Auto VI, le prochain opus majeur de Rockstar Games. Elle est la première femme à tenir le rôle de personnage jouable principal dans l'histoire de la franchise GTA, marquant une évolution significative pour la série.

Lucia est une jeune femme d'origine latino-américaine vivant dans le State of Leonida, une version fictive de la Floride. Son histoire s'entremêle avec celle de Jason Duval, le second protagoniste du jeu, dans une relation inspirée du couple criminel Bonnie et Clyde.

## Apparence et personnalité

Lucia est présentée comme une jeune femme déterminée et résiliente. Dans les trailers révélés par Rockstar Games, elle apparaît comme un personnage complexe, naviguant entre vulnérabilité et force dans un monde criminel impitoyable.

Son design visuel reflète le réalisme accru de GTA VI, avec une attention particulière portée aux expressions faciales et au langage corporel. Rockstar Games a utilisé des technologies de motion capture avancées pour donner vie au personnage.

## Rôle dans l'histoire

L'intrigue de GTA VI suit Lucia et Jason dans leur ascension au sein du monde criminel du State of Leonida. Leur relation constitue le cœur émotionnel du récit, ajoutant une dimension humaine aux activités illicites qui caractérisent la série.

Les premiers trailers suggèrent que Lucia commence le jeu dans une position difficile — possiblement en sortie de prison — et que son parcours l'amène à s'impliquer de plus en plus profondément dans le crime organisé de Vice City et de ses environs.

## Signification culturelle

L'introduction de Lucia comme première protagoniste féminine de GTA représente un moment charnière pour la franchise et l'industrie du jeu vidéo. Ce choix a été largement salué par la critique et les joueurs, qui y voient un signe de maturation de la série.

Rockstar Games a pris soin de créer un personnage qui ne se résume pas à son genre, mais qui apporte une perspective narrative nouvelle et enrichissante à l'univers de GTA.

## Questions fréquentes

### Lucia est-elle le seul personnage jouable de GTA VI ?

Non, Lucia partage le rôle de protagoniste avec Jason Duval. Les joueurs pourront alterner entre les deux personnages au cours de l'aventure, similairement au système introduit dans GTA V avec ses trois protagonistes.

### Quelle est l'origine du nom Lucia Caminos ?

Le nom complet de Lucia n'a pas été officiellement détaillé par Rockstar Games au-delà de ce qui apparaît dans les trailers. Le prénom Lucia est d'origine latine, signifiant "lumière", tandis que Caminos signifie "chemins" en espagnol.`,
      en: `## Who is Lucia Caminos?

Lucia Caminos is one of the two protagonists of Grand Theft Auto VI, Rockstar Games' next major installment. She is the first woman to hold the role of main playable character in the history of the GTA franchise, marking a significant evolution for the series.

Lucia is a young woman of Latin American origin living in the State of Leonida, a fictional version of Florida. Her story intertwines with that of Jason Duval, the game's second protagonist, in a relationship inspired by the criminal couple Bonnie and Clyde.

## Appearance and personality

Lucia is presented as a determined and resilient young woman. In the trailers revealed by Rockstar Games, she appears as a complex character, navigating between vulnerability and strength in a ruthless criminal world.

Her visual design reflects the increased realism of GTA VI, with particular attention paid to facial expressions and body language. Rockstar Games used advanced motion capture technologies to bring the character to life.

## Role in the story

GTA VI's plot follows Lucia and Jason in their rise within the criminal underworld of the State of Leonida. Their relationship forms the emotional core of the narrative, adding a human dimension to the illicit activities that characterize the series.

Early trailers suggest that Lucia begins the game in a difficult position—possibly leaving prison—and that her journey leads her to become increasingly involved in the organized crime of Vice City and its surroundings.

## Cultural significance

The introduction of Lucia as GTA's first female protagonist represents a pivotal moment for the franchise and the video game industry. This choice has been widely praised by critics and players, who see it as a sign of the series' maturation.

Rockstar Games has taken care to create a character who is not defined solely by her gender, but who brings a new and enriching narrative perspective to the GTA universe.

## Frequently asked questions

### Is Lucia the only playable character in GTA VI?

No, Lucia shares the protagonist role with Jason Duval. Players will be able to switch between the two characters during the adventure, similar to the system introduced in GTA V with its three protagonists.

### What is the origin of the name Lucia Caminos?

Lucia's full name has not been officially detailed by Rockstar Games beyond what appears in the trailers. The first name Lucia is of Latin origin, meaning "light," while Caminos means "paths" in Spanish.`,
      es: `## ¿Quién es Lucia Caminos?

Lucia Caminos es una de las dos protagonistas de Grand Theft Auto VI. Es la primera mujer protagonista jugable en la historia de la franquicia GTA.`,
      pt: `## Quem é Lucia Caminos?

Lucia Caminos é uma das duas protagonistas de Grand Theft Auto VI. Ela é a primeira mulher protagonista jogável na história da franquia GTA.`,
      it: `## Chi è Lucia Caminos?

Lucia Caminos è una delle due protagoniste di Grand Theft Auto VI. È la prima donna protagonista giocabile nella storia del franchise GTA.`,
      ko: `## Lucia Caminos는 누구인가?

Lucia Caminos는 Rockstar Games의 차기 대작 Grand Theft Auto VI의 두 주인공 중 한 명입니다. GTA 프랜차이즈 역사상 최초의 여성 플레이어블 캐릭터로, 시리즈의 중요한 진화를 의미합니다.

Lucia는 플로리다를 모티브로 한 가상의 주 State of Leonida에 거주하는 라틴 아메리카계 여성입니다. 그녀의 스토리는 게임의 또 다른 주인공인 Jason Duval과 얽히며, 보니와 클라이드에서 영감을 받은 범죄 듀오를 형성합니다.

## 외모와 성격

Lucia는 결단력 있고 강인한 여성으로 묘사됩니다. Rockstar Games가 공개한 트레일러에서 그녀는 무자비한 범죄 세계에서 취약함과 강인함 사이를 오가는 복잡한 캐릭터로 등장합니다.

## 스토리에서의 역할

GTA VI의 줄거리는 Lucia와 Jason이 State of Leonida의 범죄 세계에서 성장해 나가는 과정을 따릅니다. 그들의 관계는 내러티브의 감정적 핵심을 이루며, 시리즈를 특징짓는 불법 활동에 인간적인 차원을 더합니다.`,
    },
    infobox: {
      'Nom complet': 'Lucia Caminos',
      'Genre': 'Féminin',
      'Origine': 'Latino-américaine',
      'Statut': 'En vie',
      'Jeu': 'Grand Theft Auto VI',
      'Localisation': 'State of Leonida',
      'Doublage': 'Non confirmé',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-01-15',
    updatedAt: '2026-03-10',
    readTime: 6,
    tags: ['protagoniste', 'personnage-principal', 'gta-vi'],
    relatedSlugs: ['jason-duval', 'vice-city', 'state-of-leonida'],
  },
  {
    slug: 'jason-duval',
    franchise: 'gta-vi',
    category: 'personnages',
    title: {
      fr: 'Jason Duval',
      en: 'Jason Duval',
      es: 'Jason Duval',
      pt: 'Jason Duval',
      it: 'Jason Duval',
      ko: 'Jason Duval',
    },
    excerpt: {
      fr: 'Jason Duval est le second protagoniste de GTA VI. Partenaire de crime de Lucia Caminos, il forme avec elle un duo inspiré de Bonnie et Clyde dans le State of Leonida.',
      en: 'Jason Duval is the second protagonist of GTA VI. Lucia Caminos\' crime partner, he forms with her a duo inspired by Bonnie and Clyde in the State of Leonida.',
      es: 'Jason Duval es el segundo protagonista de GTA VI, compañero de crimen de Lucia Caminos.',
      pt: 'Jason Duval é o segundo protagonista de GTA VI, parceiro de crime de Lucia Caminos.',
      it: 'Jason Duval è il secondo protagonista di GTA VI, partner criminale di Lucia Caminos.',
      ko: 'Jason Duval은 GTA VI의 두 번째 주인공입니다. Lucia Caminos의 범죄 파트너로, State of Leonida에서 보니와 클라이드에서 영감을 받은 듀오를 형성합니다.',
    },
    content: {
      fr: `## Qui est Jason Duval ?

Jason Duval est l'un des deux protagonistes jouables de Grand Theft Auto VI. Aux côtés de Lucia Caminos, il forme un duo de criminels dont la dynamique rappelle celle du célèbre couple Bonnie et Clyde.

Jason est un homme de type caucasien, apparemment originaire du State of Leonida. Les trailers de GTA VI le présentent comme un personnage charismatique mais impulsif, contrastant avec le caractère plus mesuré de Lucia.

## Personnalité et caractéristiques

D'après les éléments révélés dans les trailers officiels, Jason semble être un personnage au tempérament plus impétueux que Lucia. Il représente l'archétype du personnage GTA traditionnel — un criminel séduisant et téméraire — tout en bénéficiant d'une écriture plus nuancée que les protagonistes des opus précédents.

Sa relation avec Lucia constitue l'un des piliers narratifs du jeu. Rockstar Games a laissé entendre que cette dynamique de duo apportera une profondeur inédite à l'expérience GTA.

## Rôle dans l'histoire

Jason et Lucia partagent une trajectoire criminelle ascendante dans le monde interlope du State of Leonida. Leur association les mène des petits larcins aux opérations de grande envergure dans Vice City et ses environs.

Les premiers éléments narratifs suggèrent que Jason joue un rôle clé dans l'initiation de Lucia au monde du crime organisé, bien que la nature exacte de leur rencontre reste à découvrir.

## Gameplay

Comme dans GTA V avec Trevor, Michael et Franklin, les joueurs pourront alterner entre Jason et Lucia au cours du jeu. Chaque personnage devrait offrir des missions spécifiques et un style de jeu potentiellement différent, enrichissant la rejouabilité.

## Questions fréquentes

### Jason Duval est-il jouable dès le début du jeu ?

Les détails exacts de la structure du jeu n'ont pas été entièrement révélés. Rockstar Games a confirmé que les deux personnages seront jouables, mais le moment exact où le joueur peut alterner entre eux reste à préciser.

### Quel est le lien entre Jason et les personnages de GTA V ?

Aucun lien direct entre Jason Duval et les protagonistes de GTA V (Michael, Trevor, Franklin) n'a été confirmé à ce jour. GTA VI se déroule dans un cadre géographique différent (Leonida vs Los Santos).`,
      en: `## Who is Jason Duval?

Jason Duval is one of the two playable protagonists of Grand Theft Auto VI. Alongside Lucia Caminos, he forms a criminal duo whose dynamic recalls the famous couple Bonnie and Clyde.

Jason is a Caucasian man, apparently from the State of Leonida. The GTA VI trailers present him as a charismatic but impulsive character, contrasting with Lucia's more measured temperament.

## Personality and characteristics

Based on elements revealed in official trailers, Jason seems to be a more impetuous character than Lucia. He represents the archetype of the traditional GTA character—a charming and reckless criminal—while benefiting from more nuanced writing than previous installments' protagonists.

## Role in the story

Jason and Lucia share an ascending criminal trajectory in the underworld of the State of Leonida. Their partnership leads them from petty theft to large-scale operations in Vice City and its surroundings.

## Frequently asked questions

### Is Jason Duval playable from the beginning of the game?

The exact details of the game's structure have not been fully revealed. Rockstar Games has confirmed that both characters will be playable, but the exact moment when players can switch between them remains to be clarified.`,
      es: 'Jason Duval es el segundo protagonista de GTA VI.',
      pt: 'Jason Duval é o segundo protagonista de GTA VI.',
      it: 'Jason Duval è il secondo protagonista di GTA VI.',
      ko: `## Jason Duval은 누구인가?

Jason Duval은 Grand Theft Auto VI의 두 명의 플레이어블 주인공 중 한 명입니다. Lucia Caminos와 함께 보니와 클라이드를 연상시키는 범죄 듀오를 형성합니다.

Jason은 백인 남성으로, State of Leonida 출신으로 보입니다. GTA VI 트레일러에서 그는 카리스마 있지만 충동적인 캐릭터로 묘사되며, Lucia의 보다 신중한 기질과 대조를 이룹니다.

## 성격과 특징

공식 트레일러에서 공개된 내용에 따르면, Jason은 Lucia보다 더 충동적인 캐릭터입니다. 그는 전형적인 GTA 캐릭터의 원형인 매력적이고 무모한 범죄자를 대표하면서도, 이전 작품의 주인공들보다 더 세밀한 캐릭터 묘사를 보여줍니다.

## 스토리에서의 역할

Jason과 Lucia는 State of Leonida의 범죄 세계에서 함께 성장해 나갑니다. 그들의 파트너십은 소규모 범죄에서 Vice City와 그 주변의 대규모 작전으로 이어집니다.`,
    },
    infobox: {
      'Nom complet': 'Jason Duval',
      'Genre': 'Masculin',
      'Origine': 'Américaine',
      'Statut': 'En vie',
      'Jeu': 'Grand Theft Auto VI',
      'Localisation': 'State of Leonida',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-01-15',
    updatedAt: '2026-03-08',
    readTime: 5,
    tags: ['protagoniste', 'personnage-principal', 'gta-vi'],
    relatedSlugs: ['lucia-caminos', 'vice-city', 'state-of-leonida'],
  },
  {
    slug: 'vice-city',
    franchise: 'gta-vi',
    category: 'lieux',
    title: {
      fr: 'Vice City',
      en: 'Vice City',
      es: 'Vice City',
      pt: 'Vice City',
      it: 'Vice City',
      ko: 'Vice City',
    },
    excerpt: {
      fr: 'Vice City est le hub urbain principal de GTA VI, une métropole fictive inspirée de Miami située dans le State of Leonida. C\'est le cœur de l\'action du jeu.',
      en: 'Vice City is the main urban hub of GTA VI, a fictional metropolis inspired by Miami located in the State of Leonida.',
      es: 'Vice City es el centro urbano principal de GTA VI, una metrópolis ficticia inspirada en Miami.',
      pt: 'Vice City é o centro urbano principal de GTA VI, uma metrópole fictícia inspirada em Miami.',
      it: 'Vice City è il centro urbano principale di GTA VI, una metropoli fittizia ispirata a Miami.',
      ko: 'Vice City는 GTA VI의 주요 도시 허브로, State of Leonida에 위치한 마이애미에서 영감을 받은 가상의 대도시입니다.',
    },
    content: {
      fr: `## Qu'est-ce que Vice City dans GTA VI ?

Vice City est la principale zone urbaine de Grand Theft Auto VI, située au sein du State of Leonida. Inspirée de Miami et de sa région métropolitaine, Vice City fait son grand retour dans la franchise après sa première apparition dans GTA: Vice City en 2002 et GTA: Vice City Stories en 2006.

Dans GTA VI, Vice City a été entièrement reconstruite avec le moteur RAGE nouvelle génération de Rockstar Games, offrant un niveau de détail et de réalisme sans précédent dans un jeu vidéo en monde ouvert.

## Géographie et structure urbaine

Vice City dans GTA VI est considérablement plus grande et plus détaillée que ses itérations précédentes. La ville s'étend le long de la côte est du State of Leonida et comprend plusieurs quartiers distincts, chacun avec son ambiance et son architecture propres.

La ville reproduit fidèlement l'atmosphère de Miami, avec ses gratte-ciels art déco de South Beach, ses quartiers résidentiels luxueux, ses zones commerciales animées et ses quartiers plus modestes. Le contraste social est un thème central de l'environnement urbain.

## Points d'intérêt

Vice City regorge de lieux emblématiques qui servent à la fois de décor et d'éléments de gameplay :

- Le front de mer inspiré d'Ocean Drive, avec ses bâtiments art déco colorés
- Les quartiers résidentiels haut de gamme inspirés de Star Island et Fisher Island
- Le centre-ville avec ses gratte-ciels modernes
- Les zones portuaires et industrielles
- Les centres commerciaux et lieux de divertissement

## Ambiance et atmosphère

Rockstar Games a porté une attention particulière à l'atmosphère de Vice City dans GTA VI. La ville pulse au rythme de la culture latino-américaine, avec une bande-son qui reflète la diversité musicale de Miami. Les conditions météorologiques dynamiques — incluant des ouragans — ajoutent un réalisme supplémentaire à l'expérience.

L'éclairage naturel joue un rôle crucial dans l'identité visuelle de la ville, avec des couchers de soleil spectaculaires sur l'océan et des néons qui illuminent les nuits de Vice City.

## Questions fréquentes

### Vice City de GTA VI est-elle plus grande que Los Santos de GTA V ?

Bien que les dimensions exactes n'aient pas été officiellement communiquées, le State of Leonida dans son ensemble (incluant Vice City) est estimé environ 70% plus grand que la carte de GTA V.

### Peut-on explorer Vice City librement dès le début du jeu ?

Rockstar Games n'a pas communiqué sur d'éventuelles restrictions de carte au lancement du jeu. La tendance des derniers GTA suggère une carte principalement ouverte dès le début.`,
      en: `## What is Vice City in GTA VI?

Vice City is the main urban area of Grand Theft Auto VI, located within the State of Leonida. Inspired by Miami and its metropolitan area, Vice City makes its grand return to the franchise after its first appearance in GTA: Vice City in 2002 and GTA: Vice City Stories in 2006.

In GTA VI, Vice City has been entirely rebuilt with Rockstar Games' new-generation RAGE engine, offering an unprecedented level of detail and realism in an open-world video game.

## Geography and urban structure

Vice City in GTA VI is considerably larger and more detailed than its previous iterations. The city stretches along the east coast of the State of Leonida and includes several distinct neighborhoods, each with its own atmosphere and architecture.

## Points of interest

Vice City is full of iconic locations that serve as both scenery and gameplay elements:

- The waterfront inspired by Ocean Drive, with its colorful art deco buildings
- High-end residential neighborhoods inspired by Star Island and Fisher Island
- Downtown with its modern skyscrapers
- Port and industrial areas
- Shopping centers and entertainment venues

## Frequently asked questions

### Is Vice City in GTA VI bigger than Los Santos in GTA V?

While exact dimensions have not been officially communicated, the State of Leonida as a whole (including Vice City) is estimated to be approximately 70% larger than the GTA V map.`,
      es: 'Vice City es la principal zona urbana de GTA VI, ubicada en el State of Leonida.',
      pt: 'Vice City é a principal zona urbana de GTA VI, localizada no State of Leonida.',
      it: 'Vice City è la principale zona urbana di GTA VI, situata nello State of Leonida.',
      ko: `## GTA VI의 Vice City란?

Vice City는 State of Leonida에 위치한 Grand Theft Auto VI의 주요 도시 지역입니다. 마이애미와 그 수도권에서 영감을 받은 Vice City는 2002년 GTA: Vice City와 2006년 GTA: Vice City Stories에 처음 등장한 이후 프랜차이즈에 화려하게 복귀합니다.

GTA VI에서 Vice City는 Rockstar Games의 차세대 RAGE 엔진으로 완전히 재구축되어, 오픈 월드 비디오 게임에서 전례 없는 수준의 디테일과 사실감을 제공합니다.

## 지리와 도시 구조

GTA VI의 Vice City는 이전 버전보다 훨씬 크고 상세합니다. 도시는 State of Leonida의 동쪽 해안을 따라 뻗어 있으며, 각각 고유한 분위기와 건축 양식을 가진 여러 구역으로 구성되어 있습니다.

## 주요 명소

- Ocean Drive에서 영감을 받은 해안가와 화려한 아르데코 건물들
- Star Island과 Fisher Island에서 영감을 받은 고급 주거 지역
- 현대적 고층 빌딩이 있는 다운타운
- 항구 및 산업 지역
- 쇼핑 센터 및 엔터테인먼트 시설`,
    },
    infobox: {
      'Type': 'Ville',
      'Inspiration': 'Miami, Floride',
      'État': 'State of Leonida',
      'Jeu': 'Grand Theft Auto VI',
      'Apparitions': 'GTA: Vice City, GTA: VCS, GTA VI',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-01-20',
    updatedAt: '2026-03-05',
    readTime: 7,
    tags: ['ville', 'lieu-principal', 'gta-vi'],
    relatedSlugs: ['state-of-leonida', 'lucia-caminos', 'jason-duval'],
  },
  {
    slug: 'state-of-leonida',
    franchise: 'gta-vi',
    category: 'lieux',
    title: {
      fr: 'State of Leonida',
      en: 'State of Leonida',
      es: 'State of Leonida',
      pt: 'State of Leonida',
      it: 'State of Leonida',
      ko: 'State of Leonida',
    },
    excerpt: {
      fr: 'Le State of Leonida est l\'État fictif de GTA VI, inspiré de la Floride. Il comprend Vice City, les Leonida Keys, les Grassrivers et de vastes zones rurales.',
      en: 'The State of Leonida is GTA VI\'s fictional state, inspired by Florida. It includes Vice City, the Leonida Keys, the Grassrivers and vast rural areas.',
      es: 'El State of Leonida es el estado ficticio de GTA VI, inspirado en Florida.',
      pt: 'O State of Leonida é o estado fictício de GTA VI, inspirado na Flórida.',
      it: 'Lo State of Leonida è lo stato fittizio di GTA VI, ispirato alla Florida.',
      ko: 'State of Leonida는 플로리다에서 영감을 받은 GTA VI의 가상 주입니다. Vice City, Leonida Keys, Grassrivers 및 광활한 농촌 지역을 포함합니다.',
    },
    content: {
      fr: `## Qu'est-ce que le State of Leonida ?

Le State of Leonida est l'État fictif dans lequel se déroule Grand Theft Auto VI. Largement inspiré de l'État de Floride aux États-Unis, il constitue le monde ouvert le plus vaste jamais créé par Rockstar Games.

Leonida comprend une diversité de paysages remarquable : des plages tropicales de Vice City aux marécages des Grassrivers, en passant par les îles paradisiaques des Leonida Keys et les zones rurales de l'intérieur des terres.

## Géographie

Le State of Leonida reproduit la diversité géographique de la Floride à une échelle impressionnante. La carte est estimée environ 70% plus grande que celle de GTA V, incluant :

- **Vice City** : La métropole principale, inspirée de Miami
- **Leonida Keys** : Un archipel tropical inspiré des Florida Keys
- **Grassrivers** : Une vaste zone marécageuse inspirée des Everglades
- **Port Gellhorn** : Une ville côtière secondaire
- **Mount Kalaga National Park** : Une zone naturelle protégée
- **Zones rurales** : Petites villes, fermes et communautés isolées

## Climat et météo

Le State of Leonida bénéficie d'un climat subtropical qui se traduit en jeu par un système météorologique dynamique avancé. Les joueurs pourront expérimenter :

- Des journées ensoleillées et humides
- Des orages tropicaux violents
- Des ouragans (possiblement des événements scénarisés)
- Des variations de température et de luminosité réalistes

## Questions fréquentes

### La carte de Leonida est-elle plus grande que celle de GTA V ?

Oui. Selon les estimations basées sur les trailers et les informations disponibles, le State of Leonida serait environ 70% plus grand que la carte de GTA V (Los Santos et Blaine County combinés).

### Tous les endroits de Leonida sont-ils accessibles dès le début ?

Les détails concernant la progression et l'accès à la carte n'ont pas été entièrement confirmés par Rockstar Games.`,
      en: `## What is the State of Leonida?

The State of Leonida is the fictional state in which Grand Theft Auto VI takes place. Broadly inspired by the state of Florida in the United States, it constitutes the most vast open world ever created by Rockstar Games.

## Geography

The State of Leonida reproduces Florida's geographic diversity on an impressive scale. The map is estimated to be approximately 70% larger than GTA V's, including:

- **Vice City**: The main metropolis, inspired by Miami
- **Leonida Keys**: A tropical archipelago inspired by the Florida Keys
- **Grassrivers**: A vast swamp area inspired by the Everglades
- **Port Gellhorn**: A secondary coastal city
- **Mount Kalaga National Park**: A protected natural area
- **Rural zones**: Small towns, farms and isolated communities`,
      es: 'El State of Leonida es el estado ficticio de GTA VI, inspirado en Florida.',
      pt: 'O State of Leonida é o estado fictício de GTA VI, inspirado na Flórida.',
      it: 'Lo State of Leonida è lo stato fittizio di GTA VI, ispirato alla Florida.',
      ko: `## State of Leonida란?

State of Leonida는 Grand Theft Auto VI의 배경이 되는 가상의 주입니다. 미국 플로리다 주에서 광범위하게 영감을 받았으며, Rockstar Games가 만든 역대 가장 방대한 오픈 월드를 구성합니다.

## 지리

State of Leonida는 인상적인 규모로 플로리다의 지리적 다양성을 재현합니다. 맵은 GTA V보다 약 70% 더 큰 것으로 추정되며, 다음을 포함합니다:

- **Vice City**: 마이애미에서 영감을 받은 주요 대도시
- **Leonida Keys**: 플로리다 키스에서 영감을 받은 열대 군도
- **Grassrivers**: 에버글레이즈에서 영감을 받은 광활한 습지 지역
- **Port Gellhorn**: 부차적인 해안 도시
- **Mount Kalaga National Park**: 보호 자연 구역
- **농촌 지역**: 소도시, 농장 및 고립된 커뮤니티`,
    },
    infobox: {
      'Type': 'État fictif',
      'Inspiration': 'Floride, États-Unis',
      'Ville principale': 'Vice City',
      'Jeu': 'Grand Theft Auto VI',
      'Superficie estimée': '~70% plus grande que GTA V',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-01-22',
    updatedAt: '2026-03-01',
    readTime: 5,
    tags: ['carte', 'monde-ouvert', 'gta-vi'],
    relatedSlugs: ['vice-city', 'leonida-keys', 'grassrivers'],
  },
  {
    slug: 'leonida-keys',
    franchise: 'gta-vi',
    category: 'lieux',
    title: {
      fr: 'Leonida Keys',
      en: 'Leonida Keys',
      es: 'Leonida Keys',
      pt: 'Leonida Keys',
      it: 'Leonida Keys',
      ko: 'Leonida Keys',
    },
    excerpt: {
      fr: 'Les Leonida Keys sont un archipel tropical du State of Leonida dans GTA VI, inspiré des Florida Keys.',
      en: 'The Leonida Keys are a tropical archipelago in the State of Leonida in GTA VI, inspired by the Florida Keys.',
      es: 'Las Leonida Keys son un archipiélago tropical del State of Leonida en GTA VI.',
      pt: 'As Leonida Keys são um arquipélago tropical do State of Leonida em GTA VI.',
      it: 'Le Leonida Keys sono un arcipelago tropicale dello State of Leonida in GTA VI.',
      ko: 'Leonida Keys는 GTA VI의 State of Leonida에 있는 열대 군도로, 플로리다 키스에서 영감을 받았습니다.',
    },
    content: {
      fr: `## Que sont les Leonida Keys ?

Les Leonida Keys constituent un archipel d'îles tropicales situé au sud du State of Leonida dans Grand Theft Auto VI. Directement inspirées des célèbres Florida Keys, ces îles offrent un contraste saisissant avec l'urbanisme dense de Vice City.

Cet archipel représente l'une des zones les plus visuellement spectaculaires du jeu, avec ses eaux turquoise, ses plages de sable blanc et sa végétation tropicale luxuriante. Les Leonida Keys incarnent le côté paradisiaque du State of Leonida.

## Géographie et environnement

Les Leonida Keys s'étendent en chapelet au sud de la péninsule de Leonida, reliées entre elles et au continent par des ponts et des chaussées. La zone comprend plusieurs îles de tailles variées, chacune avec ses propres caractéristiques.

L'environnement aquatique joue un rôle central dans cette zone, avec des récifs coralliens, des fonds marins détaillés et une faune marine diversifiée. Les eaux des Keys offrent certaines des vues sous-marines les plus impressionnantes du jeu.

## Activités et gameplay

Les Leonida Keys devraient proposer des activités spécifiques liées à leur environnement insulaire :

- Navigation et sports nautiques
- Plongée sous-marine et exploration des fonds marins
- Missions liées au trafic maritime
- Interactions avec les communautés locales des Keys

## Questions fréquentes

### Les Leonida Keys sont-elles accessibles en voiture ?

Oui, les Keys principales devraient être accessibles par la route via des ponts, similairement aux véritables Florida Keys qui sont reliées par l'Overseas Highway. Les îles plus isolées nécessiteront probablement un bateau ou un avion.`,
      en: `## What are the Leonida Keys?

The Leonida Keys are a tropical island archipelago located south of the State of Leonida in Grand Theft Auto VI. Directly inspired by the famous Florida Keys, these islands offer a striking contrast to Vice City's dense urbanism.

This archipelago represents one of the most visually spectacular areas of the game, with its turquoise waters, white sand beaches and lush tropical vegetation.`,
      es: 'Las Leonida Keys son un archipiélago tropical inspirado en los Florida Keys.',
      pt: 'As Leonida Keys são um arquipélago tropical inspirado nas Florida Keys.',
      it: 'Le Leonida Keys sono un arcipelago tropicale ispirato alle Florida Keys.',
      ko: `## Leonida Keys란?

Leonida Keys는 Grand Theft Auto VI에서 State of Leonida 남쪽에 위치한 열대 섬 군도입니다. 유명한 플로리다 키스에서 직접 영감을 받은 이 섬들은 Vice City의 밀집된 도시 환경과 뚜렷한 대조를 이룹니다.

이 군도는 게임에서 시각적으로 가장 인상적인 지역 중 하나로, 청록색 바다, 하얀 모래 해변, 무성한 열대 식물이 특징입니다.

## 활동 및 게임플레이

Leonida Keys에서는 섬 환경과 관련된 다양한 활동을 즐길 수 있습니다:

- 항해 및 수상 스포츠
- 스쿠버 다이빙 및 해저 탐험
- 해상 밀수와 관련된 미션
- Keys 지역 주민들과의 상호작용`,
    },
    infobox: {
      'Type': 'Archipel',
      'Inspiration': 'Florida Keys',
      'État': 'State of Leonida',
      'Jeu': 'Grand Theft Auto VI',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-02-01',
    updatedAt: '2026-03-01',
    readTime: 4,
    tags: ['lieu', 'archipel', 'gta-vi'],
    relatedSlugs: ['state-of-leonida', 'vice-city', 'grassrivers'],
  },
  {
    slug: 'grassrivers',
    franchise: 'gta-vi',
    category: 'lieux',
    title: {
      fr: 'Grassrivers',
      en: 'Grassrivers',
      es: 'Grassrivers',
      pt: 'Grassrivers',
      it: 'Grassrivers',
      ko: 'Grassrivers',
    },
    excerpt: {
      fr: 'Les Grassrivers sont la zone marécageuse de GTA VI, inspirée des Everglades de Floride. Un environnement sauvage et dangereux.',
      en: 'The Grassrivers are GTA VI\'s swamp area, inspired by Florida\'s Everglades. A wild and dangerous environment.',
      es: 'Los Grassrivers son la zona pantanosa de GTA VI, inspirada en los Everglades.',
      pt: 'Os Grassrivers são a zona pantanosa de GTA VI, inspirada nos Everglades.',
      it: 'I Grassrivers sono la zona paludosa di GTA VI, ispirata alle Everglades.',
      ko: 'Grassrivers는 플로리다의 에버글레이즈에서 영감을 받은 GTA VI의 습지 지역입니다. 야생적이고 위험한 환경입니다.',
    },
    content: {
      fr: `## Que sont les Grassrivers ?

Les Grassrivers sont une vaste zone marécageuse du State of Leonida dans Grand Theft Auto VI. Inspirée des Everglades de Floride, cette région sauvage offre un environnement radicalement différent de Vice City et des Leonida Keys.

Les Grassrivers représentent le côté sauvage et inexploré du State of Leonida, avec ses marais étendus, sa faune dangereuse et ses communautés isolées vivant en marge de la société.

## Environnement et faune

La zone des Grassrivers est caractérisée par un paysage de zones humides à perte de vue, parsemé de mangroves, de cyprès et de végétation subtropicale dense. L'eau est omniprésente, rendant la navigation terrestre traditionnelle difficile.

La faune des Grassrivers devrait inclure des alligators, serpents et autres animaux sauvages, ajoutant un élément de danger naturel absent des zones urbaines. Rockstar Games a démontré dans Red Dead Redemption 2 sa capacité à créer des écosystèmes animaux réalistes.

## Communautés et personnages

Les Grassrivers abritent des communautés atypiques et isolées qui vivent selon leurs propres règles, en marge de la loi et de la société urbaine de Vice City. Ces populations rurales et marginales pourraient être impliquées dans des activités illicites spécifiques comme le trafic de drogue ou les combats clandestins.

## Rôle dans le gameplay

Les Grassrivers offrent un terrain de jeu unique avec des mécaniques potentiellement spécifiques :

- Navigation en aéroglisseur ou en bateau à fond plat
- Chasse et interaction avec la faune
- Missions liées aux communautés rurales isolées
- Cachettes et planques loin de la civilisation

## Questions fréquentes

### Les Grassrivers sont-ils grands par rapport au reste de la carte ?

Les Grassrivers constituent une portion significative du State of Leonida, reflétant l'importance des Everglades dans la géographie réelle de la Floride. La zone exacte n'a pas été communiquée par Rockstar Games.`,
      en: `## What are the Grassrivers?

The Grassrivers are a vast swamp area of the State of Leonida in Grand Theft Auto VI. Inspired by Florida's Everglades, this wild region offers a radically different environment from Vice City and the Leonida Keys.

The Grassrivers represent the wild and unexplored side of the State of Leonida, with its extensive marshes, dangerous wildlife and isolated communities living on the margins of society.`,
      es: 'Los Grassrivers son una zona pantanosa del State of Leonida, inspirada en los Everglades.',
      pt: 'Os Grassrivers são uma zona pantanosa do State of Leonida, inspirada nos Everglades.',
      it: 'I Grassrivers sono una zona paludosa dello State of Leonida, ispirata alle Everglades.',
      ko: `## Grassrivers란?

Grassrivers는 Grand Theft Auto VI의 State of Leonida에 있는 광활한 습지 지역입니다. 플로리다의 에버글레이즈에서 영감을 받은 이 야생 지역은 Vice City와 Leonida Keys와는 근본적으로 다른 환경을 제공합니다.

Grassrivers는 State of Leonida의 야생적이고 미개척된 면을 대표하며, 광대한 늪지대, 위험한 야생 동물, 사회의 주변부에서 살아가는 고립된 커뮤니티가 특징입니다.

## 게임플레이에서의 역할

Grassrivers는 독특한 게임 메카닉을 제공합니다:

- 에어보트 또는 평저선을 이용한 이동
- 사냥 및 야생 동물과의 상호작용
- 고립된 농촌 커뮤니티 관련 미션
- 문명에서 떨어진 은신처`,
    },
    infobox: {
      'Type': 'Zone marécageuse',
      'Inspiration': 'Everglades, Floride',
      'État': 'State of Leonida',
      'Jeu': 'Grand Theft Auto VI',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-02-05',
    updatedAt: '2026-02-28',
    readTime: 4,
    tags: ['lieu', 'zone-sauvage', 'gta-vi'],
    relatedSlugs: ['state-of-leonida', 'vice-city', 'leonida-keys'],
  },
  // Fable articles
  {
    slug: 'albion',
    franchise: 'fable',
    category: 'lieux',
    title: { fr: 'Albion', en: 'Albion', es: 'Albion', pt: 'Albion', it: 'Albion', ko: 'Albion' },
    excerpt: {
      fr: 'Albion est le monde ouvert du reboot de Fable par Playground Games. Un royaume fantastique peuplé de créatures et de héros, redessiné pour la nouvelle génération.',
      en: 'Albion is the open world of Fable\'s reboot by Playground Games. A fantasy kingdom populated by creatures and heroes, redesigned for the new generation.',
      es: 'Albion es el mundo abierto del reboot de Fable. Un reino de fantasía rediseñado para la nueva generación.',
      pt: 'Albion é o mundo aberto do reboot de Fable. Um reino de fantasia redesenhado para a nova geração.',
      it: 'Albion è il mondo aperto del reboot di Fable. Un regno fantastico ridisegnato per la nuova generazione.',
      ko: 'Albion은 Playground Games가 개발한 Fable 리부트의 오픈 월드입니다. 크리처와 영웅들이 가득한 판타지 왕국으로, 차세대를 위해 재설계되었습니다.',
    },
    content: {
      fr: `## Qu'est-ce qu'Albion ?

Albion est le monde fictif dans lequel se déroule le reboot de Fable, développé par Playground Games. Ce royaume fantastique de légendes fait son retour après la trilogie originale de Lionhead Studios, entièrement repensé et reconstruit avec le moteur ForzaTech.

Pour la première fois dans l'histoire de la franchise Fable, Albion se présente comme un véritable monde ouvert continu, offrant aux joueurs une liberté d'exploration sans précédent dans cet univers de fantasy.

## Un monde vivant

L'une des promesses les plus ambitieuses de Playground Games concerne la vie qui anime Albion. Le studio a développé un système de population avancé comprenant plus de 1 000 PNJ handcrafted, chacun doté d'un nom, d'un métier et de routines quotidiennes uniques.

Cette approche confère à Albion une authenticité remarquable : les villageois se souviennent des actions du joueur, les rumeurs se propagent de ville en ville, et la réputation du héros influence concrètement la façon dont le monde réagit à sa présence.

## Régions principales

Albion se divise en plusieurs régions distinctes, chacune avec son identité visuelle, sa faune et ses défis :

- **Forêts enchantées** : Des bois mystérieux abritant des créatures magiques
- **Prairies et terres agricoles** : Des zones paisibles ponctuées de villages
- **Montagnes et cavernes** : Des zones verticales cachant des trésors et des dangers
- **Zones côtières** : Des falaises et des plages battues par les vents
- **Marécages sombres** : Des territoires hostiles peuplés de créatures dangereuses

## Questions fréquentes

### Albion est-il le même que dans les anciens jeux Fable ?

C'est un reboot, donc Albion est réimaginé pour ce nouveau chapitre. Les lieux emblématiques de la franchise pourraient revenir sous une forme nouvelle, mais il ne s'agit pas d'une continuation directe de la trilogie originale.`,
      en: `## What is Albion?

Albion is the fictional world in which Fable's reboot takes place, developed by Playground Games. This legendary fantasy kingdom returns after Lionhead Studios' original trilogy, entirely reimagined and rebuilt with the ForzaTech engine.

For the first time in the Fable franchise's history, Albion presents itself as a true continuous open world, offering players unprecedented freedom of exploration in this fantasy universe.`,
      es: 'Albion es el mundo ficticio de Fable, rediseñado por Playground Games.',
      pt: 'Albion é o mundo fictício de Fable, redesenhado pela Playground Games.',
      it: 'Albion è il mondo fittizio di Fable, ridisegnato da Playground Games.',
      ko: `## Albion이란?

Albion은 Playground Games가 개발한 Fable 리부트의 배경이 되는 가상 세계입니다. 이 전설적인 판타지 왕국은 Lionhead Studios의 오리지널 3부작 이후 ForzaTech 엔진으로 완전히 재구상되고 재구축되어 돌아옵니다.

Fable 프랜차이즈 역사상 처음으로 Albion은 진정한 연속적 오픈 월드로 구현되어, 이 판타지 세계에서 전례 없는 탐험의 자유를 제공합니다.

## 살아있는 세계

Playground Games의 가장 야심찬 약속 중 하나는 Albion을 살아 숨 쉬게 만드는 것입니다. 스튜디오는 1,000명 이상의 핸드크래프트된 NPC를 포함하는 고급 인구 시스템을 개발했으며, 각 NPC는 고유한 이름, 직업, 일상 루틴을 가지고 있습니다.`,
    },
    infobox: {
      'Type': 'Monde ouvert',
      'Jeu': 'Fable (Reboot)',
      'Développeur': 'Playground Games',
      'PNJ': '1 000+ handcrafted',
      'Moteur': 'ForzaTech',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-02-10',
    updatedAt: '2026-03-05',
    readTime: 5,
    tags: ['monde-ouvert', 'fable', 'albion'],
    relatedSlugs: ['style-weaving', 'systeme-moralite'],
  },
  {
    slug: 'style-weaving',
    franchise: 'fable',
    category: 'gameplay',
    title: {
      fr: 'Système de combat Style Weaving',
      en: 'Style Weaving Combat System',
      es: 'Sistema de combate Style Weaving',
      pt: 'Sistema de combate Style Weaving',
      it: 'Sistema di combattimento Style Weaving',
      ko: 'Style Weaving 전투 시스템',
    },
    excerpt: {
      fr: 'Le Style Weaving est le système de combat innovant de Fable, permettant de tisser fluidement entre mêlée, distance et magie.',
      en: 'Style Weaving is Fable\'s innovative combat system, allowing players to fluidly weave between melee, ranged and magic combat.',
      es: 'El Style Weaving es el innovador sistema de combate de Fable.',
      pt: 'O Style Weaving é o inovador sistema de combate de Fable.',
      it: 'Il Style Weaving è l\'innovativo sistema di combattimento di Fable.',
      ko: 'Style Weaving은 Fable의 혁신적인 전투 시스템으로, 근접전, 원거리전, 마법 사이를 유연하게 전환할 수 있습니다.',
    },
    content: {
      fr: `## Qu'est-ce que le Style Weaving ?

Le Style Weaving est le nom donné au système de combat du reboot de Fable développé par Playground Games. Ce système innovant permet aux joueurs de passer fluidement entre trois styles de combat — mêlée, distance et magie — au cours d'un même enchaînement, créant un gameplay dynamique et expressif.

## Les trois piliers du combat

### Combat de mêlée
Le combat rapproché propose une variété d'armes blanches, des épées aux marteaux, chacune avec son propre set de mouvements et sa cadence. Les enchaînements de mêlée servent de base au rythme du combat.

### Combat à distance
L'arc et d'autres armes de jet permettent d'engager les ennemis à distance, de créer de l'espace ou de toucher des points faibles spécifiques. Le tir peut être intégré au milieu d'un combo de mêlée.

### Magie
Les sorts constituent le troisième pilier et ajoutent une dimension spectaculaire au combat. La magie peut être utilisée offensivement, défensivement ou comme complément aux deux autres styles.

## La fluidité comme maître-mot

Ce qui distingue le Style Weaving des systèmes de combat traditionnels, c'est la fluidité avec laquelle le joueur peut passer d'un style à l'autre. Il n'y a pas de menu de sélection ou de temps de transition — les trois styles se mêlent naturellement dans un flux continu d'actions.

## Questions fréquentes

### Le Style Weaving est-il difficile à maîtriser ?

Playground Games a conçu le système pour être accessible aux débutants tout en offrant une profondeur stratégique aux joueurs expérimentés. Les bases sont simples, mais la maîtrise des combos inter-styles demande de la pratique.`,
      en: `## What is Style Weaving?

Style Weaving is the name given to the combat system in Fable's reboot by Playground Games. This innovative system allows players to fluidly switch between three combat styles—melee, ranged and magic—within a single combo chain, creating dynamic and expressive gameplay.`,
      es: 'El Style Weaving es el sistema de combate de Fable.',
      pt: 'O Style Weaving é o sistema de combate de Fable.',
      it: 'Il Style Weaving è il sistema di combattimento di Fable.',
      ko: `## Style Weaving이란?

Style Weaving은 Playground Games가 개발한 Fable 리부트의 전투 시스템 명칭입니다. 이 혁신적인 시스템은 플레이어가 하나의 콤보 체인 안에서 근접전, 원거리전, 마법이라는 세 가지 전투 스타일 사이를 유연하게 전환할 수 있게 해줍니다.

## 전투의 세 가지 축

### 근접 전투
근접전은 검부터 망치까지 다양한 근접 무기를 제공하며, 각각 고유한 모션 세트와 리듬을 가지고 있습니다.

### 원거리 전투
활과 기타 투척 무기로 적을 먼 거리에서 공격하거나 특정 약점을 노릴 수 있습니다.

### 마법
마법은 세 번째 축으로, 전투에 스펙타클한 요소를 더합니다. 공격, 방어, 또는 다른 두 스타일의 보조 수단으로 사용할 수 있습니다.`,
    },
    infobox: {
      'Type': 'Système de gameplay',
      'Jeu': 'Fable (Reboot)',
      'Styles': 'Mêlée, Distance, Magie',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-02-15',
    updatedAt: '2026-03-01',
    readTime: 4,
    tags: ['gameplay', 'combat', 'fable'],
    relatedSlugs: ['albion', 'systeme-moralite'],
  },
  // Wolverine articles
  {
    slug: 'logan',
    franchise: 'wolverine',
    category: 'personnages',
    title: {
      fr: 'Logan / Wolverine',
      en: 'Logan / Wolverine',
      es: 'Logan / Wolverine',
      pt: 'Logan / Wolverine',
      it: 'Logan / Wolverine',
      ko: 'Logan / Wolverine',
    },
    excerpt: {
      fr: 'Logan, alias Wolverine, est le protagoniste de Marvel\'s Wolverine par Insomniac Games. Un mutant doté de griffes d\'adamantium et d\'un facteur de guérison surhumain.',
      en: 'Logan, aka Wolverine, is the protagonist of Marvel\'s Wolverine by Insomniac Games. A mutant with adamantium claws and a superhuman healing factor.',
      es: 'Logan, alias Wolverine, es el protagonista de Marvel\'s Wolverine de Insomniac Games.',
      pt: 'Logan, também conhecido como Wolverine, é o protagonista de Marvel\'s Wolverine da Insomniac Games.',
      it: 'Logan, alias Wolverine, è il protagonista di Marvel\'s Wolverine di Insomniac Games.',
      ko: 'Logan(일명 Wolverine)은 Insomniac Games가 개발한 Marvel\'s Wolverine의 주인공입니다. 아다만티움 발톱과 초인적인 치유 능력을 가진 뮤턴트입니다.',
    },
    content: {
      fr: `## Qui est Logan dans Marvel's Wolverine ?

Logan, plus connu sous son nom de code Wolverine, est le protagoniste du jeu Marvel's Wolverine développé par Insomniac Games pour la PlayStation 5. Dans cette version, Logan est interprété par Liam McIntyre et évolue dans la Terre-1048, le même univers partagé que les jeux Marvel's Spider-Man.

Wolverine est l'un des mutants les plus emblématiques de l'univers Marvel. Doté d'un squelette renforcé à l'adamantium, de griffes rétractables indestructibles et d'un facteur de guérison surhumain, il est un combattant redoutable au passé tourmenté.

## Pouvoirs et capacités

### Facteur de guérison
Le pouvoir mutant principal de Logan est son facteur de guérison. Cette capacité lui permet de récupérer de blessures qui seraient fatales pour un humain normal, incluant les blessures par balle, les lacérations profondes et même la régénération de tissus organiques.

### Squelette d'adamantium
Le squelette de Logan a été recouvert d'adamantium, un métal fictif quasiment indestructible, lors du programme Arme X. Ce renforcement rend ses os incassables et lui confère une résistance physique exceptionnelle.

### Griffes d'adamantium
Trois griffes rétractables émergent de chaque main de Logan. Recouvertes d'adamantium, ces griffes peuvent trancher pratiquement n'importe quel matériau. Elles constituent son arme principale et sont emblématiques du personnage.

### Sens surdéveloppés
Logan possède des sens surhumains, notamment un odorat et une ouïe exceptionnels, qui lui permettent de traquer ses proies et de détecter les dangers.

## Dans le jeu

Marvel's Wolverine d'Insomniac Games présente Logan comme un narrateur non fiable, ajoutant une dimension psychologique complexe à l'aventure. Le jeu adopte un ton mature et violent, reflétant la nature brutale du personnage.

Le gameplay met l'accent sur le combat au corps à corps intense, utilisant les griffes d'adamantium comme arme principale. Le facteur de guérison de Logan est intégré directement aux mécaniques de jeu.

## Questions fréquentes

### Qui interprète Logan dans Marvel's Wolverine ?

Liam McIntyre prête sa voix et ses mouvements à Logan dans le jeu d'Insomniac Games.

### Marvel's Wolverine est-il connecté aux jeux Spider-Man ?

Oui, le jeu se déroule dans la Terre-1048, le même univers partagé que Marvel's Spider-Man, Marvel's Spider-Man: Miles Morales et Marvel's Spider-Man 2.`,
      en: `## Who is Logan in Marvel's Wolverine?

Logan, better known by his codename Wolverine, is the protagonist of Marvel's Wolverine developed by Insomniac Games for PlayStation 5. In this version, Logan is portrayed by Liam McIntyre and exists in Earth-1048, the same shared universe as the Marvel's Spider-Man games.

Wolverine is one of the most iconic mutants in the Marvel universe. Equipped with an adamantium-reinforced skeleton, indestructible retractable claws and a superhuman healing factor, he is a formidable fighter with a troubled past.`,
      es: 'Logan, alias Wolverine, es el protagonista de Marvel\'s Wolverine de Insomniac Games.',
      pt: 'Logan, alias Wolverine, é o protagonista de Marvel\'s Wolverine da Insomniac Games.',
      it: 'Logan, alias Wolverine, è il protagonista di Marvel\'s Wolverine di Insomniac Games.',
      ko: `## Marvel's Wolverine의 Logan은 누구인가?

Logan은 코드네임 Wolverine으로 더 잘 알려진 캐릭터로, Insomniac Games가 PlayStation 5용으로 개발한 Marvel's Wolverine의 주인공입니다. 이 버전에서 Logan은 Liam McIntyre가 연기하며, Marvel's Spider-Man 게임과 동일한 공유 우주인 Earth-1048에 존재합니다.

Wolverine은 마블 유니버스에서 가장 상징적인 뮤턴트 중 한 명입니다. 아다만티움으로 강화된 골격, 파괴 불가능한 수축형 발톱, 초인적인 치유 인자를 갖추고 있어 고통스러운 과거를 가진 강력한 전사입니다.

## 능력

### 치유 인자
Logan의 주요 뮤턴트 능력은 치유 인자입니다. 이 능력은 일반 인간에게는 치명적인 부상에서도 회복할 수 있게 해줍니다.

### 아다만티움 골격과 발톱
Logan의 골격은 거의 파괴 불가능한 가상의 금속인 아다만티움으로 코팅되어 있습니다. 각 손에서 세 개의 수축형 발톱이 나오며, 거의 모든 물질을 절단할 수 있습니다.`,
    },
    infobox: {
      'Nom réel': 'James Howlett / Logan',
      'Alias': 'Wolverine',
      'Espèce': 'Mutant',
      'Univers': 'Terre-1048',
      'Acteur': 'Liam McIntyre',
      'Jeu': "Marvel's Wolverine",
      'Développeur': 'Insomniac Games',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-02-20',
    updatedAt: '2026-03-10',
    readTime: 6,
    tags: ['protagoniste', 'mutant', 'wolverine', 'marvel'],
    relatedSlugs: ['omega-red', 'terre-1048'],
  },
  {
    slug: 'omega-red',
    franchise: 'wolverine',
    category: 'ennemis',
    title: {
      fr: 'Omega Red',
      en: 'Omega Red',
      es: 'Omega Red',
      pt: 'Omega Red',
      it: 'Omega Red',
      ko: 'Omega Red',
    },
    excerpt: {
      fr: 'Omega Red est l\'un des vilains confirmés de Marvel\'s Wolverine. Super-soldat soviétique doté de tentacules de carbonadium.',
      en: 'Omega Red is one of the confirmed villains in Marvel\'s Wolverine. A Soviet super-soldier with carbonadium tentacles.',
      es: 'Omega Red es uno de los villanos confirmados en Marvel\'s Wolverine.',
      pt: 'Omega Red é um dos vilões confirmados em Marvel\'s Wolverine.',
      it: 'Omega Red è uno dei cattivi confermati in Marvel\'s Wolverine.',
      ko: 'Omega Red는 Marvel\'s Wolverine에서 확인된 빌런 중 한 명입니다. 카보나디움 촉수를 가진 소련의 슈퍼 솔저입니다.',
    },
    content: {
      fr: `## Qui est Omega Red ?

Omega Red, de son vrai nom Arkady Rossovich, est l'un des antagonistes confirmés de Marvel's Wolverine par Insomniac Games. Ce super-soldat soviétique est l'un des ennemis les plus redoutables de Wolverine dans les comics Marvel et fait ici ses débuts vidéoludiques dans un rôle majeur.

## Origines et pouvoirs

Omega Red est le produit d'un programme soviétique de super-soldats, le pendant russe du programme Arme X qui a créé Wolverine. Il possède plusieurs capacités surhumaines :

- **Tentacules de carbonadium** : Deux tentacules rétractables logés dans ses bras, faits de carbonadium (un métal similaire à l'adamantium mais légèrement plus malléable). Il peut les utiliser comme armes offensives et pour drainer l'énergie vitale de ses victimes.
- **Facteur de mort** : Omega Red émet des phéromones mortelles, appelées "spores de mort", qui affaiblissent et peuvent tuer les personnes à proximité.
- **Force surhumaine** : Sa force physique dépasse de loin celle d'un humain normal.
- **Résistance accrue** : Son corps est plus résistant aux dégâts que celui d'un humain ordinaire.

## Rôle dans Marvel's Wolverine

Les détails exacts du rôle d'Omega Red dans le jeu d'Insomniac Games n'ont pas été entièrement révélés. Sa présence a été confirmée, faisant de lui l'un des antagonistes majeurs que Logan devra affronter.

## Questions fréquentes

### Omega Red est-il plus fort que Wolverine ?

Dans les comics, Omega Red est un adversaire de taille pour Wolverine. Ses tentacules de carbonadium et son facteur de mort le rendent particulièrement dangereux, même pour un mutant doté du facteur de guérison de Logan.`,
      en: `## Who is Omega Red?

Omega Red, real name Arkady Rossovich, is one of the confirmed antagonists in Marvel's Wolverine by Insomniac Games. This Soviet super-soldier is one of Wolverine's most formidable enemies in Marvel comics and makes his video game debut here in a major role.`,
      es: 'Omega Red es uno de los antagonistas confirmados en Marvel\'s Wolverine.',
      pt: 'Omega Red é um dos antagonistas confirmados em Marvel\'s Wolverine.',
      it: 'Omega Red è uno degli antagonisti confermati in Marvel\'s Wolverine.',
      ko: `## Omega Red는 누구인가?

Omega Red(본명 Arkady Rossovich)는 Insomniac Games의 Marvel's Wolverine에서 확인된 적대자 중 한 명입니다. 이 소련 슈퍼 솔저는 마블 코믹스에서 Wolverine의 가장 강력한 적 중 하나이며, 여기서 처음으로 비디오 게임에서 주요 역할로 등장합니다.

## 기원과 능력

Omega Red는 Wolverine을 만든 Weapon X 프로그램의 러시아판인 소련 슈퍼 솔저 프로그램의 산물입니다. 그는 여러 초인적 능력을 보유하고 있습니다:

- **카보나디움 촉수**: 팔 안에 수납된 두 개의 수축형 촉수로, 공격 무기로 사용하거나 피해자의 생명 에너지를 흡수할 수 있습니다.
- **죽음의 인자**: Omega Red는 주변 사람들을 약화시키고 죽일 수 있는 치명적인 페로몬을 방출합니다.
- **초인적 힘**: 일반 인간을 훨씬 뛰어넘는 물리적 힘을 가지고 있습니다.`,
    },
    infobox: {
      'Nom réel': 'Arkady Rossovich',
      'Alias': 'Omega Red',
      'Espèce': 'Mutant',
      'Origine': 'URSS',
      'Armes': 'Tentacules de carbonadium',
      'Jeu': "Marvel's Wolverine",
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-02-25',
    updatedAt: '2026-03-05',
    readTime: 4,
    tags: ['vilain', 'ennemi', 'wolverine', 'marvel'],
    relatedSlugs: ['logan'],
  },
  // ──────────────────────────────────────────────
  //  WOLVERINE — PERSONNAGES & LIEUX
  // ──────────────────────────────────────────────
  {
    slug: 'mystique',
    franchise: 'wolverine',
    category: 'personnages',
    title: {
      fr: 'Mystique',
      en: 'Mystique',
      es: 'Mystique',
      pt: 'Mystique',
      it: 'Mystique',
      ko: '미스틱',
    },
    excerpt: {
      fr: "Mystique est une vilaine confirmée de Marvel's Wolverine. Métamorphe redoutable, elle joue un rôle central dans l'intrigue du jeu d'Insomniac Games.",
      en: "Mystique is a confirmed villain in Marvel's Wolverine. A formidable shapeshifter, she plays a central role in Insomniac Games' storyline.",
      es: "Mystique es una villana confirmada en Marvel's Wolverine. Una formidable metamorfa, desempeña un papel central en la trama del juego de Insomniac Games.",
      pt: "Mystique é uma vilã confirmada em Marvel's Wolverine. Uma metamorfa formidável, ela desempenha um papel central na história do jogo da Insomniac Games.",
      it: "Mystique è una villain confermata in Marvel's Wolverine. Formidabile metamorfa, gioca un ruolo centrale nella trama del gioco di Insomniac Games.",
      ko: "미스틱은 마블 울버린의 확정 빌런입니다. 강력한 변신 능력을 가진 그녀는 인섬니악 게임즈의 스토리라인에서 핵심적인 역할을 합니다.",
    },
    content: {
      fr: `## Mystique — Métamorphe et manipulatrice

Raven Darkhölme, alias Mystique, est l'une des vilaines principales confirmées de Marvel's Wolverine. Sa capacité de **métamorphose** lui permet de prendre l'apparence de n'importe quel être humain, copiant leur voix, leurs traits et même leurs empreintes digitales. Dans le jeu d'Insomniac Games, elle utilise ce pouvoir pour infiltrer et manipuler, rendant chaque rencontre imprévisible.

## Rôle dans l'histoire

Mystique joue un rôle clé dans l'intrigue de Marvel's Wolverine. Fidèle à son personnage dans les comics, elle oscille entre alliée et ennemie, ses motivations restant floues jusqu'au dénouement. Son histoire est profondément liée à celle de Logan, avec qui elle partage un passé tumultueux. Elle est impliquée dans les machinations qui se trament dans les ruelles de Madripoor.

## Relation avec les X-Men

Dans l'univers Marvel d'Insomniac, Mystique entretient des relations complexes avec les X-Men. Mère biologique de Nightcrawler et mère adoptive de Rogue dans les comics, ses liens familiaux ajoutent des couches de tension dramatique. Sa rivalité avec Wolverine est particulièrement intense, leurs confrontations oscillant entre combat brutal et jeu psychologique.

## Pouvoirs et capacités

- **Métamorphose complète** : changement d'apparence instantané et parfait
- **Combattante experte** : maîtrise de multiples arts martiaux
- **Vieillissement ralenti** : apparence jeune malgré son âge réel
- **Infiltratrice de génie** : capable de maintenir une couverture pendant des années`,
      en: `## Mystique — Shapeshifter and Manipulator

Raven Darkhölme, aka Mystique, is one of the confirmed main villains in Marvel's Wolverine. Her **shapeshifting** ability allows her to assume the appearance of any human, copying their voice, features and even fingerprints. In Insomniac Games' title, she uses this power to infiltrate and manipulate, making every encounter unpredictable.

## Role in the Story

Mystique plays a key role in Marvel's Wolverine storyline. True to her comic book character, she oscillates between ally and enemy, her motivations remaining unclear until the climax. Her history is deeply tied to Logan's, sharing a tumultuous past. She is involved in the schemes unfolding in the alleys of Madripoor.

## Relationship with the X-Men

In Insomniac's Marvel universe, Mystique maintains complex relationships with the X-Men. Biological mother of Nightcrawler and adoptive mother of Rogue in the comics, her family ties add layers of dramatic tension. Her rivalry with Wolverine is particularly intense, their confrontations oscillating between brutal combat and psychological games.

## Powers and Abilities

- **Complete shapeshifting**: instant and perfect appearance changes
- **Expert combatant**: mastery of multiple martial arts
- **Slowed aging**: youthful appearance despite her true age
- **Master infiltrator**: capable of maintaining cover for years`,
      es: `## Mystique — Metamorfa y manipuladora

Raven Darkhölme, alias Mystique, es una de las villanas principales confirmadas en Marvel's Wolverine. Su capacidad de **metamorfosis** le permite adoptar la apariencia de cualquier ser humano. En el juego de Insomniac Games, utiliza este poder para infiltrarse y manipular.

## Papel en la historia

Mystique desempeña un papel clave en la trama. Oscila entre aliada y enemiga, sus motivaciones permanecen ambiguas. Su historia está profundamente ligada a la de Logan, con quien comparte un pasado tumultuoso en Madripoor.

## Poderes y habilidades

- **Metamorfosis completa**: cambio de apariencia instantáneo
- **Combatiente experta**: dominio de múltiples artes marciales
- **Envejecimiento ralentizado**: apariencia joven pese a su edad real
- **Infiltradora maestra**: capaz de mantener una cobertura durante años`,
      pt: `## Mystique — Metamorfa e manipuladora

Raven Darkhölme, alias Mystique, é uma das vilãs principais confirmadas em Marvel's Wolverine. Sua capacidade de **metamorfose** permite assumir a aparência de qualquer ser humano. No jogo da Insomniac Games, ela usa esse poder para infiltrar e manipular.

## Papel na história

Mystique desempenha um papel chave na trama. Oscila entre aliada e inimiga, com motivações ambíguas. Sua história está profundamente ligada à de Logan, com quem compartilha um passado tumultuado em Madripoor.

## Poderes e habilidades

- **Metamorfose completa**: mudança de aparência instantânea
- **Combatente especialista**: domínio de múltiplas artes marciais
- **Envelhecimento retardado**: aparência jovem apesar da idade real
- **Infiltradora mestra**: capaz de manter cobertura por anos`,
      it: `## Mystique — Metamorfa e manipolatrice

Raven Darkhölme, alias Mystique, è una delle villain principali confermate in Marvel's Wolverine. La sua capacità di **metamorfosi** le permette di assumere l'aspetto di qualsiasi essere umano. Nel gioco di Insomniac Games, usa questo potere per infiltrarsi e manipolare.

## Ruolo nella storia

Mystique gioca un ruolo chiave nella trama. Oscilla tra alleata e nemica, le sue motivazioni restano ambigue. La sua storia è profondamente legata a quella di Logan, con cui condivide un passato tumultuoso a Madripoor.

## Poteri e abilità

- **Metamorfosi completa**: cambio d'aspetto istantaneo
- **Combattente esperta**: padronanza di molteplici arti marziali
- **Invecchiamento rallentato**: aspetto giovane nonostante l'età reale
- **Infiltratrice maestra**: capace di mantenere copertura per anni`,
      ko: `## 미스틱 — 변신술사이자 조종자

레이븐 다크홀름, 일명 미스틱은 마블 울버린의 확정 메인 빌런 중 한 명입니다. **변신** 능력으로 모든 인간의 외모를 완벽하게 복제할 수 있습니다. 인섬니악 게임즈의 작품에서 이 능력을 이용해 침투하고 조종합니다.

## 스토리에서의 역할

미스틱은 스토리라인에서 핵심적인 역할을 합니다. 아군과 적 사이를 오가며 동기가 불분명합니다. 마드리푸르의 뒷골목에서 벌어지는 음모에 관여합니다.

## 능력

- **완전한 변신**: 즉각적이고 완벽한 외모 변환
- **전문 전투원**: 다양한 무술 숙달
- **노화 지연**: 실제 나이에 비해 젊은 외모
- **잠입 전문가**: 수년간 위장 유지 가능`,
    },
    infobox: {
      'Alias': 'Raven Darkhölme',
      'Espèce': 'Mutante',
      'Pouvoir': 'Métamorphose',
      'Affiliation': 'Variable (Brotherhood / indépendante)',
      'Jeu': "Marvel's Wolverine",
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-03-14',
    updatedAt: '2026-03-14',
    readTime: 5,
    tags: ['vilaine', 'personnage', 'wolverine', 'marvel', 'x-men'],
    relatedSlugs: ['logan', 'omega-red', 'madripoor'],
  },
  {
    slug: 'madripoor',
    franchise: 'wolverine',
    category: 'lieux',
    title: {
      fr: 'Madripoor',
      en: 'Madripoor',
      es: 'Madripoor',
      pt: 'Madripoor',
      it: 'Madripoor',
      ko: '마드리푸르',
    },
    excerpt: {
      fr: "Madripoor est l'île fictive servant de lieu principal à Marvel's Wolverine. Divisée entre Hightown et Lowtown, elle est un carrefour de crime et de pouvoir dans l'univers Insomniac.",
      en: "Madripoor is the fictional island serving as the main setting of Marvel's Wolverine. Split between Hightown and Lowtown, it's a crossroads of crime and power in Insomniac's universe.",
      es: "Madripoor es la isla ficticia que sirve como escenario principal de Marvel's Wolverine. Dividida entre Hightown y Lowtown, es un cruce de crimen y poder en el universo Insomniac.",
      pt: "Madripoor é a ilha fictícia que serve como cenário principal de Marvel's Wolverine. Dividida entre Hightown e Lowtown, é uma encruzilhada de crime e poder no universo Insomniac.",
      it: "Madripoor è l'isola fittizia che funge da ambientazione principale di Marvel's Wolverine. Divisa tra Hightown e Lowtown, è un crocevia di crimine e potere nell'universo Insomniac.",
      ko: "마드리푸르는 마블 울버린의 주요 배경이 되는 가상의 섬입니다. 하이타운과 로우타운으로 나뉘며, 인섬니악 유니버스에서 범죄와 권력의 교차로입니다.",
    },
    content: {
      fr: `## Madripoor — L'île du crime

Madripoor est une île-nation fictive du sud-est asiatique, servant de cadre principal à Marvel's Wolverine. Connue dans les comics Marvel comme un refuge pour criminels, mercenaires et figures de l'ombre, elle est le théâtre idéal pour les aventures brutales de Logan.

## La dualité Hightown / Lowtown

L'île est divisée en deux zones radicalement opposées :

**Hightown** est le quartier opulent de Madripoor, avec ses gratte-ciels luxueux, ses casinos et ses résidences de milliardaires. Derrière cette façade brillante se cachent les véritables maîtres de l'île : magnats du crime, seigneurs de guerre et politiciens corrompus.

**Lowtown** est le ventre sombre de l'île. Ruelles étroites, marchés noirs, bars clandestins et combats illégaux définissent ce quartier. C'est ici que Logan se sent le plus chez lui, naviguant dans un monde de violence et de survie. Le Princess Bar, un lieu emblématique des comics, devrait y figurer.

## Importance dans le lore Wolverine

Madripoor est intrinsèquement liée à l'histoire de Wolverine dans les comics. Logan y a opéré sous l'alias « Patch » pendant des années, portant un cache-œil pour dissimuler son identité. L'île représente une période clé de sa vie, entre ses missions avec les X-Men et ses aventures solitaires.

## Connexion avec l'univers Insomniac

Dans l'univers partagé d'Insomniac (Spider-Man, Spider-Man 2), Madripoor a déjà été mentionnée. Marvel's Wolverine approfondit cette connexion, intégrant l'île dans un univers Marvel cohérent. Des références aux événements de Spider-Man 2 et à d'autres héros Marvel sont attendues.`,
      en: `## Madripoor — The Island of Crime

Madripoor is a fictional island nation in Southeast Asia, serving as the main setting for Marvel's Wolverine. Known in Marvel comics as a haven for criminals, mercenaries and shadowy figures, it provides the perfect backdrop for Logan's brutal adventures.

## The Hightown / Lowtown Duality

The island is divided into two radically opposed zones:

**Hightown** is Madripoor's opulent district, featuring luxurious skyscrapers, casinos and billionaire residences. Behind this gleaming facade lurk the island's true masters: crime lords, warlords and corrupt politicians.

**Lowtown** is the island's dark underbelly. Narrow alleys, black markets, underground bars and illegal fights define this district. This is where Logan feels most at home, navigating a world of violence and survival. The Princess Bar, an iconic comic book location, is expected to feature prominently.

## Importance in Wolverine Lore

Madripoor is intrinsically linked to Wolverine's comic book history. Logan operated there under the alias "Patch" for years, wearing an eyepatch to conceal his identity. The island represents a key period in his life, between his X-Men missions and solo adventures.

## Connection to Insomniac's Universe

In Insomniac's shared universe (Spider-Man, Spider-Man 2), Madripoor has already been mentioned. Marvel's Wolverine deepens this connection, integrating the island into a cohesive Marvel universe. References to Spider-Man 2 events and other Marvel heroes are expected.`,
      es: `## Madripoor — La isla del crimen

Madripoor es una isla-nación ficticia del sudeste asiático, escenario principal de Marvel's Wolverine. Conocida en los cómics como refugio de criminales y mercenarios, es el telón de fondo perfecto para las aventuras brutales de Logan.

## La dualidad Hightown / Lowtown

**Hightown** es el distrito opulento con rascacielos lujosos, casinos y residencias de millonarios. Detrás de esta fachada brillante se esconden los verdaderos amos de la isla.

**Lowtown** es el vientre oscuro de la isla. Callejones estrechos, mercados negros y peleas ilegales definen este barrio. Es aquí donde Logan se siente como en casa.

## Importancia en el lore Wolverine

Madripoor está intrínsecamente ligada a la historia de Wolverine en los cómics. Logan operó allí bajo el alias "Patch" durante años.

## Conexión con el universo Insomniac

En el universo compartido de Insomniac (Spider-Man, Spider-Man 2), Madripoor ya ha sido mencionada. Marvel's Wolverine profundiza esta conexión.`,
      pt: `## Madripoor — A ilha do crime

Madripoor é uma ilha-nação fictícia do sudeste asiático, cenário principal de Marvel's Wolverine. Conhecida nos quadrinhos como refúgio de criminosos e mercenários, é o cenário perfeito para as aventuras brutais de Logan.

## A dualidade Hightown / Lowtown

**Hightown** é o distrito opulento com arranha-céus luxuosos, cassinos e residências de bilionários. Por trás dessa fachada brilhante escondem-se os verdadeiros senhores da ilha.

**Lowtown** é o ventre sombrio da ilha. Becos estreitos, mercados negros e lutas ilegais definem este bairro. É aqui que Logan se sente em casa.

## Importância no lore Wolverine

Madripoor está intrinsecamente ligada à história de Wolverine nos quadrinhos. Logan operou lá sob o pseudônimo "Patch" durante anos.

## Conexão com o universo Insomniac

No universo compartilhado da Insomniac (Spider-Man, Spider-Man 2), Madripoor já foi mencionada. Marvel's Wolverine aprofunda essa conexão.`,
      it: `## Madripoor — L'isola del crimine

Madripoor è un'isola-nazione fittizia del sud-est asiatico, ambientazione principale di Marvel's Wolverine. Conosciuta nei fumetti come rifugio per criminali e mercenari, è lo sfondo perfetto per le avventure brutali di Logan.

## La dualità Hightown / Lowtown

**Hightown** è il distretto opulento con grattacieli lussuosi, casinò e residenze miliardarie. Dietro questa facciata luccicante si nascondono i veri padroni dell'isola.

**Lowtown** è il ventre oscuro dell'isola. Vicoli stretti, mercati neri e combattimenti illegali definiscono questo quartiere. È qui che Logan si sente a casa.

## Importanza nel lore Wolverine

Madripoor è intrinsecamente legata alla storia di Wolverine nei fumetti. Logan operò lì sotto l'alias "Patch" per anni.

## Connessione con l'universo Insomniac

Nell'universo condiviso di Insomniac (Spider-Man, Spider-Man 2), Madripoor è già stata menzionata. Marvel's Wolverine approfondisce questa connessione.`,
      ko: `## 마드리푸르 — 범죄의 섬

마드리푸르는 동남아시아의 가상 섬나라로, 마블 울버린의 주요 배경입니다. 마블 코믹스에서 범죄자와 용병의 은신처로 알려져 있으며, 로건의 잔혹한 모험에 완벽한 무대입니다.

## 하이타운 / 로우타운의 이중성

**하이타운**은 호화로운 고층 빌딩, 카지노, 억만장자 저택이 있는 부유한 지구입니다. 화려한 외관 뒤에는 섬의 진정한 지배자들이 숨어 있습니다.

**로우타운**은 섬의 어두운 이면입니다. 좁은 골목, 암시장, 불법 싸움이 이 지구를 정의합니다. 로건이 가장 편안함을 느끼는 곳입니다.

## 울버린 로어에서의 중요성

마드리푸르는 코믹스에서 울버린의 역사와 깊이 연결되어 있습니다. 로건은 "패치"라는 가명으로 수년간 활동했습니다.

## 인섬니악 유니버스와의 연결

인섬니악의 공유 유니버스(스파이더맨, 스파이더맨 2)에서 마드리푸르는 이미 언급되었습니다. 마블 울버린은 이 연결을 심화합니다.`,
    },
    infobox: {
      'Type': 'Île-nation fictive',
      'Région': 'Sud-est asiatique',
      'Zones': 'Hightown / Lowtown',
      'Alias de Logan': 'Patch',
      'Jeu': "Marvel's Wolverine",
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-03-14',
    updatedAt: '2026-03-14',
    readTime: 5,
    tags: ['lieu', 'wolverine', 'marvel', 'madripoor', 'insomniac'],
    relatedSlugs: ['logan', 'mystique', 'omega-red'],
  },
  // ──────────────────────────────────────────────
  //  FABLE — PERSONNAGES & GAMEPLAY
  // ──────────────────────────────────────────────
  {
    slug: 'heros-briar-hill',
    franchise: 'fable',
    category: 'personnages',
    title: {
      fr: 'Le Héros de Briar Hill',
      en: 'The Hero of Briar Hill',
      es: 'El Héroe de Briar Hill',
      pt: 'O Herói de Briar Hill',
      it: "L'Eroe di Briar Hill",
      ko: '브라이어 힐의 영웅',
    },
    excerpt: {
      fr: "Le personnage jouable de Fable grandit à Briar Hill avant de découvrir ses pouvoirs héroïques. Une malédiction transforme son village en pierre, le poussant à partir en quête de réponses.",
      en: "Fable's playable character grows up in Briar Hill before discovering their heroic powers. A curse turns their village to stone, driving them to seek answers.",
      es: 'El personaje jugable de Fable crece en Briar Hill antes de descubrir sus poderes heroicos. Una maldición convierte su aldea en piedra, impulsándolo a buscar respuestas.',
      pt: 'O personagem jogável de Fable cresce em Briar Hill antes de descobrir seus poderes heroicos. Uma maldição transforma sua aldeia em pedra, levando-o a buscar respostas.',
      it: "Il personaggio giocabile di Fable cresce a Briar Hill prima di scoprire i suoi poteri eroici. Una maledizione trasforma il villaggio in pietra, spingendolo a cercare risposte.",
      ko: '페이블의 플레이어 캐릭터는 브라이어 힐에서 자라며 영웅적 능력을 발견합니다. 저주가 마을을 돌로 변하게 하고, 답을 찾기 위한 여정이 시작됩니다.',
    },
    content: {
      fr: `## Origines à Briar Hill

Le héros de Fable commence son aventure dans le petit village pastoral de **Briar Hill**, niché dans les collines verdoyantes d'Albion. Élevé par sa grand-mère aimante, le protagoniste mène une vie simple et paisible, ignorant tout du destin héroïque qui l'attend. Le village est un havre de paix, isolé des dangers du monde extérieur.

## La découverte des pouvoirs

Au fil de l'enfance, le héros commence à manifester des **capacités extraordinaires** — des éclairs de magie incontrôlée, une force surhumaine dans les moments de stress, une connexion mystérieuse avec la nature d'Albion. Ces pouvoirs héroïques, héritage d'une lignée ancienne, s'éveillent progressivement et attirent l'attention de forces bienveillantes comme malveillantes.

## Le saut temporel

Un **saut temporel** fait avancer l'histoire de plusieurs années. Le héros, désormais adulte, a appris à mieux maîtriser ses dons mais reste à Briar Hill, tiraillé entre le devoir d'explorer son potentiel et l'attachement à sa vie paisible et à sa grand-mère.

## La malédiction de pierre

L'événement déclencheur du jeu survient lorsqu'une **malédiction dévastatrice** s'abat sur Briar Hill. Du jour au lendemain, les habitants du village — y compris la grand-mère du héros — sont transformés en pierre. Le village entier est figé dans un instant de terreur silencieuse. Seul le héros est épargné, protégé par ses pouvoirs naissants.

## Le départ en quête

Dévasté mais déterminé, le héros quitte les ruines pétrifiées de Briar Hill pour enquêter sur l'origine de la malédiction. Son voyage à travers Albion le mènera à découvrir les forces anciennes qui menacent le royaume, à rencontrer des alliés improbables et à affronter des ennemis redoutables. La quête pour sauver sa grand-mère et son village devient le moteur d'une aventure épique à travers tout Albion.`,
      en: `## Origins in Briar Hill

Fable's hero begins their adventure in the small pastoral village of **Briar Hill**, nestled in Albion's verdant hills. Raised by their loving grandmother, the protagonist leads a simple, peaceful life, unaware of the heroic destiny that awaits. The village is a haven of peace, isolated from the dangers of the outside world.

## Discovering Powers

Throughout childhood, the hero begins manifesting **extraordinary abilities** — flashes of uncontrolled magic, superhuman strength in moments of stress, a mysterious connection with Albion's nature. These heroic powers, inherited from an ancient lineage, gradually awaken and attract attention from both benevolent and malevolent forces.

## The Time Skip

A **time skip** advances the story by several years. The hero, now an adult, has learned to better control their gifts but remains in Briar Hill, torn between the duty to explore their potential and attachment to their peaceful life and grandmother.

## The Stone Curse

The game's inciting event occurs when a **devastating curse** strikes Briar Hill. Overnight, the villagers — including the hero's grandmother — are turned to stone. The entire village is frozen in a moment of silent terror. Only the hero is spared, protected by their nascent powers.

## The Quest Begins

Devastated but determined, the hero leaves the petrified ruins of Briar Hill to investigate the curse's origin. Their journey across Albion will lead them to discover ancient forces threatening the realm, meet unlikely allies and face formidable enemies.`,
      es: `## Orígenes en Briar Hill

El héroe de Fable comienza su aventura en la pequeña aldea pastoral de **Briar Hill**, en las colinas verdes de Albion. Criado por su abuela, lleva una vida simple ignorando su destino heroico.

## Descubrimiento de poderes

El héroe comienza a manifestar **capacidades extraordinarias**: destellos de magia, fuerza sobrehumana y una conexión misteriosa con la naturaleza de Albion. Estos poderes heredados se despiertan gradualmente.

## El salto temporal

Un **salto temporal** avanza la historia varios años. El héroe, ahora adulto, ha aprendido a controlar mejor sus dones pero permanece en Briar Hill.

## La maldición de piedra

Una **maldición devastadora** cae sobre Briar Hill. Los habitantes — incluyendo la abuela del héroe — se transforman en piedra. Solo el héroe es perdonado, protegido por sus poderes.

## La partida

Devastado pero determinado, el héroe deja las ruinas petrificadas para investigar el origen de la maldición a través de Albion.`,
      pt: `## Origens em Briar Hill

O herói de Fable começa sua aventura na pequena aldeia pastoral de **Briar Hill**, nas colinas verdes de Albion. Criado pela avó, leva uma vida simples ignorando seu destino heroico.

## Descoberta dos poderes

O herói começa a manifestar **capacidades extraordinárias**: lampejos de magia, força sobre-humana e uma conexão misteriosa com a natureza de Albion.

## O salto temporal

Um **salto temporal** avança a história vários anos. O herói, agora adulto, aprendeu a controlar melhor seus dons mas permanece em Briar Hill.

## A maldição de pedra

Uma **maldição devastadora** atinge Briar Hill. Os habitantes — incluindo a avó do herói — são transformados em pedra. Só o herói é poupado.

## A partida

Devastado mas determinado, o herói deixa as ruínas petrificadas para investigar a origem da maldição através de Albion.`,
      it: `## Origini a Briar Hill

L'eroe di Fable inizia la sua avventura nel piccolo villaggio pastorale di **Briar Hill**, nelle verdi colline di Albion. Cresciuto dalla nonna, conduce una vita semplice ignorando il suo destino eroico.

## Scoperta dei poteri

L'eroe inizia a manifestare **capacità straordinarie**: lampi di magia, forza sovrumana e una connessione misteriosa con la natura di Albion.

## Il salto temporale

Un **salto temporale** porta la storia avanti di diversi anni. L'eroe, ormai adulto, ha imparato a controllare meglio i suoi doni ma resta a Briar Hill.

## La maledizione di pietra

Una **maledizione devastante** colpisce Briar Hill. Gli abitanti — inclusa la nonna dell'eroe — vengono trasformati in pietra. Solo l'eroe viene risparmiato.

## La partenza

Devastato ma determinato, l'eroe lascia le rovine pietrificate per indagare sull'origine della maledizione attraverso Albion.`,
      ko: `## 브라이어 힐에서의 시작

페이블의 영웅은 알비온의 푸른 언덕에 자리한 작은 목가적 마을 **브라이어 힐**에서 모험을 시작합니다. 할머니의 손에 자란 주인공은 영웅적 운명을 모른 채 평화로운 삶을 살아갑니다.

## 능력의 발견

성장하면서 영웅은 **비범한 능력**을 발현하기 시작합니다: 제어되지 않는 마법의 섬광, 초인적 힘, 알비온의 자연과의 신비로운 연결.

## 시간 건너뛰기

**시간 건너뛰기**로 이야기가 수년 앞으로 진행됩니다. 성인이 된 영웅은 능력을 더 잘 제어할 수 있지만 여전히 브라이어 힐에 남아 있습니다.

## 돌의 저주

**파괴적인 저주**가 브라이어 힐을 덮칩니다. 할머니를 포함한 마을 주민들이 돌로 변합니다. 영웅만이 초기 능력에 의해 보호받아 살아남습니다.

## 여정의 시작

황폐하지만 결연한 영웅은 저주의 기원을 조사하기 위해 석화된 폐허를 떠나 알비온을 횡단합니다.`,
    },
    infobox: {
      'Village': 'Briar Hill',
      'Famille': 'Grand-mère (maudite en pierre)',
      'Pouvoirs': 'Magie héroïque héréditaire',
      'Jeu': 'Fable (Playground Games)',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-03-14',
    updatedAt: '2026-03-14',
    readTime: 5,
    tags: ['personnage', 'fable', 'heros', 'briar-hill', 'albion'],
    relatedSlugs: ['albion', 'systeme-moralite', 'style-weaving'],
  },
  {
    slug: 'systeme-moralite',
    franchise: 'fable',
    category: 'gameplay',
    title: {
      fr: 'Système de moralité',
      en: 'Morality System',
      es: 'Sistema de moralidad',
      pt: 'Sistema de moralidade',
      it: 'Sistema di moralità',
      ko: '도덕 시스템',
    },
    excerpt: {
      fr: "Le nouveau système de moralité de Fable, révélé au Xbox Developer Direct de janvier 2026, réinvente la façon dont les choix du joueur impactent Albion et ses habitants.",
      en: "Fable's new morality system, revealed at the January 2026 Xbox Developer Direct, reimagines how player choices impact Albion and its inhabitants.",
      es: 'El nuevo sistema de moralidad de Fable, revelado en el Xbox Developer Direct de enero de 2026, reinventa cómo las decisiones del jugador impactan Albion y sus habitantes.',
      pt: 'O novo sistema de moralidade de Fable, revelado no Xbox Developer Direct de janeiro de 2026, reinventa como as escolhas do jogador impactam Albion e seus habitantes.',
      it: 'Il nuovo sistema di moralità di Fable, rivelato all\'Xbox Developer Direct di gennaio 2026, reinventa il modo in cui le scelte del giocatore impattano Albion e i suoi abitanti.',
      ko: '2026년 1월 Xbox Developer Direct에서 공개된 페이블의 새로운 도덕 시스템은 플레이어의 선택이 알비온과 주민들에게 미치는 영향을 재구상합니다.',
    },
    content: {
      fr: `## Un système réinventé

Le système de moralité de Fable a été **entièrement repensé** par Playground Games, comme révélé lors du Xbox Developer Direct de janvier 2026. Contrairement aux anciens Fable où le système était relativement binaire (bon/mauvais avec des conséquences cosmétiques comme des cornes ou un halo), le nouveau système promet une approche bien plus nuancée et profonde.

## Évolution par rapport aux anciens Fable

Dans les Fable originaux de Lionhead Studios, la moralité se manifestait principalement par des **changements d'apparence** : un héros vertueux brillait d'une aura dorée et attirait les papillons, tandis qu'un héros maléfique développait des cornes, des yeux rouges et une peau pâle. Le nouveau Fable conserve cette tradition visuelle mais l'enrichit considérablement.

## Impact sur le monde d'Albion

Les choix moraux du joueur ont désormais des **conséquences tangibles sur le monde** :

- **Les villages évoluent** : un village prospère sous un héros bienveillant, tandis qu'il dépérit sous un héros tyrannique
- **La faune et la flore réagissent** : la nature d'Albion reflète la moralité dominante du héros
- **Les factions s'adaptent** : certains groupes deviennent alliés ou ennemis selon les choix
- **Les quêtes changent** : des embranchements narratifs différents s'ouvrent selon l'alignement moral

## Impact sur les PNJ

Les PNJ réagissent de manière **dynamique et mémorable** aux choix du joueur :

- Les habitants fuient ou accourent selon la réputation du héros
- Les marchands ajustent leurs prix et leur inventaire
- Des PNJ alliés peuvent devenir hostiles après certaines décisions
- Des romances et amitiés se nouent ou se brisent selon la moralité

## Zones grises et dilemmes

Playground Games a insisté sur l'importance des **zones grises morales**. Plutôt que des choix évidents entre bien et mal, le jeu présente des dilemmes complexes où les deux options ont des conséquences positives et négatives. Le joueur est confronté à des décisions véritablement difficiles qui façonnent son aventure de manière unique.`,
      en: `## A Reimagined System

Fable's morality system has been **completely redesigned** by Playground Games, as revealed at the January 2026 Xbox Developer Direct. Unlike previous Fable games where the system was relatively binary (good/evil with cosmetic consequences like horns or a halo), the new system promises a far more nuanced and deep approach.

## Evolution from Previous Fable Games

In Lionhead Studios' original Fable titles, morality primarily manifested through **appearance changes**: a virtuous hero glowed with a golden aura and attracted butterflies, while an evil hero grew horns, red eyes and pale skin. The new Fable preserves this visual tradition but enriches it considerably.

## Impact on Albion

Player moral choices now have **tangible consequences on the world**:

- **Villages evolve**: a village thrives under a benevolent hero, while it withers under a tyrannical one
- **Flora and fauna react**: Albion's nature reflects the hero's dominant morality
- **Factions adapt**: certain groups become allies or enemies based on choices
- **Quests change**: different narrative branches open based on moral alignment

## Impact on NPCs

NPCs react **dynamically and memorably** to player choices:

- Inhabitants flee or flock depending on the hero's reputation
- Merchants adjust prices and inventory
- Allied NPCs can become hostile after certain decisions
- Romances and friendships form or break based on morality

## Gray Areas and Dilemmas

Playground Games emphasized the importance of **moral gray areas**. Rather than obvious good-vs-evil choices, the game presents complex dilemmas where both options have positive and negative consequences.`,
      es: `## Un sistema reinventado

El sistema de moralidad de Fable ha sido **completamente rediseñado** por Playground Games, como se reveló en el Xbox Developer Direct de enero de 2026. A diferencia de los Fable anteriores con un sistema relativamente binario, el nuevo sistema promete un enfoque mucho más matizado.

## Evolución respecto a los Fable anteriores

En los Fable originales, la moralidad se manifestaba principalmente mediante **cambios de apariencia**: aura dorada y mariposas para el héroe virtuoso, cuernos y ojos rojos para el malvado. El nuevo Fable conserva esta tradición pero la enriquece.

## Impacto en Albion

- **Las aldeas evolucionan** según las acciones del héroe
- **La fauna y flora reaccionan** a la moralidad dominante
- **Las facciones se adaptan** según las decisiones
- **Las misiones cambian** con diferentes ramificaciones narrativas

## Impacto en los PNJ

Los PNJ reaccionan dinámicamente: huyen o se acercan, los comerciantes ajustan precios, aliados pueden volverse hostiles tras ciertas decisiones.`,
      pt: `## Um sistema reinventado

O sistema de moralidade de Fable foi **completamente redesenhado** pela Playground Games, como revelado no Xbox Developer Direct de janeiro de 2026. Diferente dos Fable anteriores com um sistema relativamente binário, o novo sistema promete uma abordagem muito mais nuançada.

## Evolução em relação aos Fable anteriores

Nos Fable originais, a moralidade se manifestava principalmente por **mudanças de aparência**: aura dourada e borboletas para o herói virtuoso, chifres e olhos vermelhos para o malvado. O novo Fable preserva essa tradição mas a enriquece.

## Impacto em Albion

- **As vilas evoluem** de acordo com as ações do herói
- **A fauna e flora reagem** à moralidade dominante
- **As facções se adaptam** conforme as decisões
- **As missões mudam** com ramificações narrativas diferentes

## Impacto nos NPCs

Os NPCs reagem dinamicamente: fogem ou se aproximam, comerciantes ajustam preços, aliados podem se tornar hostis após certas decisões.`,
      it: `## Un sistema reinventato

Il sistema di moralità di Fable è stato **completamente riprogettato** da Playground Games, come rivelato all'Xbox Developer Direct di gennaio 2026. A differenza dei Fable precedenti con un sistema relativamente binario, il nuovo sistema promette un approccio molto più sfumato.

## Evoluzione rispetto ai Fable precedenti

Nei Fable originali, la moralità si manifestava principalmente attraverso **cambiamenti estetici**: aura dorata e farfalle per l'eroe virtuoso, corna e occhi rossi per il malvagio. Il nuovo Fable preserva questa tradizione ma la arricchisce.

## Impatto su Albion

- **I villaggi evolvono** in base alle azioni dell'eroe
- **Flora e fauna reagiscono** alla moralità dominante
- **Le fazioni si adattano** in base alle scelte
- **Le quest cambiano** con diverse ramificazioni narrative

## Impatto sugli NPC

Gli NPC reagiscono dinamicamente: fuggono o accorrono, i mercanti aggiustano i prezzi, alleati possono diventare ostili dopo certe decisioni.`,
      ko: `## 재구상된 시스템

페이블의 도덕 시스템은 2026년 1월 Xbox Developer Direct에서 공개된 것처럼 Playground Games에 의해 **완전히 재설계**되었습니다. 비교적 이분법적이었던 이전 페이블과 달리, 새로운 시스템은 훨씬 더 미묘한 접근을 약속합니다.

## 이전 페이블과의 변화

원작 페이블에서 도덕성은 주로 **외모 변화**로 나타났습니다: 선한 영웅은 황금 오라와 나비, 악한 영웅은 뿔과 붉은 눈. 새 페이블은 이 전통을 유지하되 크게 풍부하게 합니다.

## 알비온에 미치는 영향

- **마을이 진화**: 영웅의 행동에 따라 번영하거나 쇠퇴
- **동식물이 반응**: 지배적인 도덕성을 반영
- **세력이 적응**: 선택에 따라 동맹 또는 적
- **퀘스트가 변화**: 도덕 성향에 따라 다른 분기

## NPC에 미치는 영향

NPC가 동적으로 반응: 도망하거나 모여들고, 상인이 가격 조정, 동맹이 적대적으로 변할 수 있음.`,
    },
    infobox: {
      'Révélé': 'Xbox Developer Direct (janvier 2026)',
      'Studio': 'Playground Games',
      'Type': 'Système de choix moraux dynamiques',
      'Jeu': 'Fable',
    },
    author: "L'équipe PopCodex",
    publishedAt: '2026-03-14',
    updatedAt: '2026-03-14',
    readTime: 6,
    tags: ['gameplay', 'fable', 'moralite', 'choix', 'albion'],
    relatedSlugs: ['albion', 'heros-briar-hill', 'style-weaving'],
  },
];

// Import franchise-specific articles (will be populated by migration)
let gtaViArticles: ArticleData[] = [];
let crimsonDesertArticles: ArticleData[] = [];
let wolverineArticles: ArticleData[] = [];
let fableArticles: ArticleData[] = [];
try { gtaViArticles = require('./articles-gta-vi').gtaViArticles || []; } catch {}
try { crimsonDesertArticles = require('./articles-crimson-desert').crimsonDesertArticles || []; } catch {}
try { wolverineArticles = require('./articles-wolverine').wolverineArticles || []; } catch {}
try { fableArticles = require('./articles-fable').fableArticles || []; } catch {}

export const articles: ArticleData[] = [
  ...baseArticles,
  ...gtaViArticles,
  ...crimsonDesertArticles,
  ...wolverineArticles,
  ...fableArticles,
];

export function getArticlesByFranchise(franchise: string): ArticleData[] {
  return articles.filter(a => a.franchise === franchise);
}

export function getArticlesByCategory(franchise: string, category: string): ArticleData[] {
  return articles.filter(a => a.franchise === franchise && a.category === category);
}

export function getArticleBySlug(franchise: string, slug: string): ArticleData | undefined {
  return articles.find(a => a.franchise === franchise && a.slug === slug);
}

export function getRecentArticles(limit: number = 5): ArticleData[] {
  return [...articles].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()).slice(0, limit);
}

export function getCategoryForArticle(franchise: FranchiseId, categorySlug: string, locale: string): string | undefined {
  const { franchises } = require('./franchise-config');
  const config = franchises[franchise];
  if (!config) return undefined;
  const cat = config.categories.find((c: { slug: Record<string, string> }) => c.slug[locale] === categorySlug || c.slug['fr'] === categorySlug);
  return cat?.slug[locale] || cat?.slug['fr'];
}
