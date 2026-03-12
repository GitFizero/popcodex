import { FranchiseId } from './franchise-config';

export interface ArticleData {
  slug: string;
  franchise: FranchiseId;
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

export const articles: ArticleData[] = [
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
    },
    excerpt: {
      fr: 'Lucia Caminos est la première protagoniste féminine de l\'histoire de Grand Theft Auto. Co-protagoniste de GTA VI aux côtés de Jason Duval, elle incarne un tournant majeur pour la franchise.',
      en: 'Lucia Caminos is the first female protagonist in Grand Theft Auto history. Co-protagonist of GTA VI alongside Jason Duval, she represents a major turning point for the franchise.',
      es: 'Lucia Caminos es la primera protagonista femenina en la historia de Grand Theft Auto. Co-protagonista de GTA VI junto a Jason Duval, representa un punto de inflexión para la franquicia.',
      pt: 'Lucia Caminos é a primeira protagonista feminina da história de Grand Theft Auto. Co-protagonista de GTA VI ao lado de Jason Duval, ela representa um ponto de virada para a franquia.',
      it: 'Lucia Caminos è la prima protagonista femminile nella storia di Grand Theft Auto. Co-protagonista di GTA VI insieme a Jason Duval, rappresenta una svolta importante per il franchise.',
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
    },
    excerpt: {
      fr: 'Jason Duval est le second protagoniste de GTA VI. Partenaire de crime de Lucia Caminos, il forme avec elle un duo inspiré de Bonnie et Clyde dans le State of Leonida.',
      en: 'Jason Duval is the second protagonist of GTA VI. Lucia Caminos\' crime partner, he forms with her a duo inspired by Bonnie and Clyde in the State of Leonida.',
      es: 'Jason Duval es el segundo protagonista de GTA VI, compañero de crimen de Lucia Caminos.',
      pt: 'Jason Duval é o segundo protagonista de GTA VI, parceiro de crime de Lucia Caminos.',
      it: 'Jason Duval è il secondo protagonista di GTA VI, partner criminale di Lucia Caminos.',
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
    },
    excerpt: {
      fr: 'Vice City est le hub urbain principal de GTA VI, une métropole fictive inspirée de Miami située dans le State of Leonida. C\'est le cœur de l\'action du jeu.',
      en: 'Vice City is the main urban hub of GTA VI, a fictional metropolis inspired by Miami located in the State of Leonida.',
      es: 'Vice City es el centro urbano principal de GTA VI, una metrópolis ficticia inspirada en Miami.',
      pt: 'Vice City é o centro urbano principal de GTA VI, uma metrópole fictícia inspirada em Miami.',
      it: 'Vice City è il centro urbano principale di GTA VI, una metropoli fittizia ispirata a Miami.',
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
    },
    excerpt: {
      fr: 'Le State of Leonida est l\'État fictif de GTA VI, inspiré de la Floride. Il comprend Vice City, les Leonida Keys, les Grassrivers et de vastes zones rurales.',
      en: 'The State of Leonida is GTA VI\'s fictional state, inspired by Florida. It includes Vice City, the Leonida Keys, the Grassrivers and vast rural areas.',
      es: 'El State of Leonida es el estado ficticio de GTA VI, inspirado en Florida.',
      pt: 'O State of Leonida é o estado fictício de GTA VI, inspirado na Flórida.',
      it: 'Lo State of Leonida è lo stato fittizio di GTA VI, ispirato alla Florida.',
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
    },
    excerpt: {
      fr: 'Les Leonida Keys sont un archipel tropical du State of Leonida dans GTA VI, inspiré des Florida Keys.',
      en: 'The Leonida Keys are a tropical archipelago in the State of Leonida in GTA VI, inspired by the Florida Keys.',
      es: 'Las Leonida Keys son un archipiélago tropical del State of Leonida en GTA VI.',
      pt: 'As Leonida Keys são um arquipélago tropical do State of Leonida em GTA VI.',
      it: 'Le Leonida Keys sono un arcipelago tropicale dello State of Leonida in GTA VI.',
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
    },
    excerpt: {
      fr: 'Les Grassrivers sont la zone marécageuse de GTA VI, inspirée des Everglades de Floride. Un environnement sauvage et dangereux.',
      en: 'The Grassrivers are GTA VI\'s swamp area, inspired by Florida\'s Everglades. A wild and dangerous environment.',
      es: 'Los Grassrivers son la zona pantanosa de GTA VI, inspirada en los Everglades.',
      pt: 'Os Grassrivers são a zona pantanosa de GTA VI, inspirada nos Everglades.',
      it: 'I Grassrivers sono la zona paludosa di GTA VI, ispirata alle Everglades.',
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
    title: { fr: 'Albion', en: 'Albion', es: 'Albion', pt: 'Albion', it: 'Albion' },
    excerpt: {
      fr: 'Albion est le monde ouvert du reboot de Fable par Playground Games. Un royaume fantastique peuplé de créatures et de héros, redessiné pour la nouvelle génération.',
      en: 'Albion is the open world of Fable\'s reboot by Playground Games. A fantasy kingdom populated by creatures and heroes, redesigned for the new generation.',
      es: 'Albion es el mundo abierto del reboot de Fable. Un reino de fantasía rediseñado para la nueva generación.',
      pt: 'Albion é o mundo aberto do reboot de Fable. Um reino de fantasia redesenhado para a nova geração.',
      it: 'Albion è il mondo aperto del reboot di Fable. Un regno fantastico ridisegnato per la nuova generazione.',
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
    },
    excerpt: {
      fr: 'Le Style Weaving est le système de combat innovant de Fable, permettant de tisser fluidement entre mêlée, distance et magie.',
      en: 'Style Weaving is Fable\'s innovative combat system, allowing players to fluidly weave between melee, ranged and magic combat.',
      es: 'El Style Weaving es el innovador sistema de combate de Fable.',
      pt: 'O Style Weaving é o inovador sistema de combate de Fable.',
      it: 'Il Style Weaving è l\'innovativo sistema di combattimento di Fable.',
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
    },
    excerpt: {
      fr: 'Logan, alias Wolverine, est le protagoniste de Marvel\'s Wolverine par Insomniac Games. Un mutant doté de griffes d\'adamantium et d\'un facteur de guérison surhumain.',
      en: 'Logan, aka Wolverine, is the protagonist of Marvel\'s Wolverine by Insomniac Games. A mutant with adamantium claws and a superhuman healing factor.',
      es: 'Logan, alias Wolverine, es el protagonista de Marvel\'s Wolverine de Insomniac Games.',
      pt: 'Logan, também conhecido como Wolverine, é o protagonista de Marvel\'s Wolverine da Insomniac Games.',
      it: 'Logan, alias Wolverine, è il protagonista di Marvel\'s Wolverine di Insomniac Games.',
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
    },
    excerpt: {
      fr: 'Omega Red est l\'un des vilains confirmés de Marvel\'s Wolverine. Super-soldat soviétique doté de tentacules de carbonadium.',
      en: 'Omega Red is one of the confirmed villains in Marvel\'s Wolverine. A Soviet super-soldier with carbonadium tentacles.',
      es: 'Omega Red es uno de los villanos confirmados en Marvel\'s Wolverine.',
      pt: 'Omega Red é um dos vilões confirmados em Marvel\'s Wolverine.',
      it: 'Omega Red è uno dei cattivi confermati in Marvel\'s Wolverine.',
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
