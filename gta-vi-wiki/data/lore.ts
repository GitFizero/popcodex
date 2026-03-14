import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

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
  {
    id: 'lucia-backstory',
    title: 'Lucia Caminos',
    category: 'CHARACTER',
    excerpt: {
      fr: "Premiere protagoniste feminine de GTA, originaire de Liberty City.",
      en: "First female GTA protagonist, originally from Liberty City.",
      es: "Primera protagonista femenina de GTA, originaria de Liberty City.",
    },
    content: {
      fr: "Lucia Caminos est originaire de Liberty City, ou elle a grandi dans un quartier difficile. Forcee de defendre sa famille contre des menaces violentes, elle a ete arretee et condamnee a une peine de prison au penitencier de Leonida. En prison, Lucia a affine son intelligence et sa determination, apprenant a survivre dans un environnement hostile.\n\nApres sa liberation, elle arrive a Vice City sans rien et doit tout reconstruire. Sa rencontre avec Jason Duval marque le debut d'une ascension fulgurante dans le monde criminel de Leonida. Lucia est definie par sa determination indomptable, son intelligence tactique et sa capacite a garder son sang-froid dans les situations les plus dangereuses.",
      en: "Lucia Caminos is originally from Liberty City, where she grew up in a tough neighborhood. Forced to defend her family against violent threats, she was arrested and sentenced to serve time at Leonida Penitentiary. In prison, Lucia sharpened her intelligence and determination, learning to survive in a hostile environment.\n\nAfter her release, she arrives in Vice City with nothing and must rebuild from scratch. Her meeting with Jason Duval marks the beginning of a meteoric rise through Leonida's criminal underworld. Lucia is defined by her indomitable determination, tactical intelligence, and ability to keep her cool in the most dangerous situations.",
      es: "Lucia Caminos es originaria de Liberty City. Forzada a defender a su familia, fue arrestada y condenada a prision en el penitenciario de Leonida. Tras su liberacion, llega a Vice City y conoce a Jason Duval.",
    },
    relatedEntries: ['jason-military', 'leonida-penitentiary', 'vice-city-districts'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-13',
    readingTime: '4 min',
  },
  {
    id: 'jason-military',
    title: 'Jason Duval',
    category: 'CHARACTER',
    excerpt: {
      fr: "Ex-militaire devenu criminel dans les Keys de Leonida.",
      en: "Ex-military turned criminal in the Leonida Keys.",
      es: "Exmilitar convertido en criminal en las Keys de Leonida.",
    },
    content: {
      fr: "Jason Duval a grandi dans les Leonida Keys, entoure d'arnaqueurs et de petits criminels. Apres un passage dans l'armee qui lui a appris la discipline et le maniement des armes, Jason est revenu dans les Keys incapable de se reintegrer dans la societe civile. Il a commence a travailler comme coursier pour les trafiquants de drogue locaux, notamment Brian Heder.\n\nImpulsif mais dote d'un sens aigu de la rue, Jason est un survivant ne. Sa rencontre avec Lucia transforme sa petite criminalite en quelque chose de beaucoup plus ambitieux. Malgre son impulsivite, Jason est profondement loyal envers ceux qu'il considere comme ses proches.",
      en: "Jason Duval grew up in the Leonida Keys, surrounded by grifters and petty criminals. After a stint in the military that taught him discipline and weapons handling, Jason returned to the Keys unable to reintegrate into civilian life. He began working as a runner for local drug traffickers, notably Brian Heder.\n\nImpulsive but street-smart, Jason is a born survivor. His meeting with Lucia transforms his petty crime into something far more ambitious. Despite his impulsiveness, Jason is deeply loyal to those he considers close.",
      es: "Jason Duval crecio en las Leonida Keys, rodeado de estafadores. Tras su paso por el ejercito, volvio a las Keys y comenzo a trabajar para narcotraficantes locales.",
    },
    relatedEntries: ['lucia-backstory', 'keys-drug-trade', 'leonida-keys-lore'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-13',
    readingTime: '4 min',
  },
  {
    id: 'leonida-underworld',
    title: 'Leonida Criminal Underworld',
    category: 'FACTION',
    excerpt: {
      fr: "Le monde criminel tentaculaire de l'etat de Leonida.",
      en: "The sprawling criminal underworld of the state of Leonida.",
      es: "El extenso mundo criminal del estado de Leonida.",
    },
    content: {
      fr: "Le monde criminel de Leonida est un ecosysteme complexe de cartels, de gangs de rue, de trafiquants de drogue et de cols blancs corrompus. Vice City est au centre de tout, avec ses clubs, ses banques et ses reseaux d'influence. Les Keys servent de plaque tournante pour le trafic de drogue maritime, tandis que les Grassrivers et Ambrosia abritent des operations plus rustiques mais tout aussi dangereuses.\n\nLa police de Leonida est profondement corrompue, avec des officiers qui protegent les criminels en echange de pots-de-vin. Cette corruption systémique est l'un des themes centraux de l'histoire de GTA VI.",
      en: "Leonida's criminal underworld is a complex ecosystem of cartels, street gangs, drug traffickers, and corrupt white-collar criminals. Vice City is at the center of it all, with its clubs, banks, and networks of influence. The Keys serve as a hub for maritime drug trafficking, while Grassrivers and Ambrosia house more rustic but equally dangerous operations.\n\nThe Leonida police force is deeply corrupt, with officers protecting criminals in exchange for bribes. This systemic corruption is one of the central themes of GTA VI's story.",
      es: "El mundo criminal de Leonida es un ecosistema de carteles, pandillas, narcotraficantes y corruptos. Vice City esta en el centro de todo.",
    },
    relatedEntries: ['leonida-pd', 'vice-city-districts', 'keys-drug-trade'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '5 min',
  },
  {
    id: 'vice-city-districts',
    title: 'Vice City Districts',
    category: 'LOCATION',
    excerpt: {
      fr: "Les quartiers emblematiques de Vice City et leurs specificites.",
      en: "The iconic districts of Vice City and their unique characteristics.",
      es: "Los barrios emblematicos de Vice City y sus caracteristicas.",
    },
    content: {
      fr: "Vice City est divisee en plusieurs quartiers distincts, chacun avec sa propre atmosphere et ses propres opportunites criminelles :\n\nOcean Beach — Le front de mer luxueux ou les riches et les celebrites se melent aux trafiquants. Hotels art deco, clubs exclusifs et yachts de milliardaires.\n\nSouth Beach — La plage iconique bordee de palmiers. Vie nocturne debridee et commerce de drogue en plein air.\n\nLittle Haiti — Quartier culturel vibrant avec ses botancas et ses gangs haitiens qui controlent le commerce local.\n\nLittle Havana — Le coeur cubain de Vice City. Dominos dans la rue, cigares et reseau criminel latino-americain.\n\nVenetian Islands — Iles residentielles exclusives ou vivent les barons du crime et les politiciens corrompus.\n\nCrosstown — Le quartier central des affaires, gratte-ciels et siege des entreprises qui blanchissent l'argent sale.",
      en: "Vice City is divided into several distinct districts, each with its own atmosphere and criminal opportunities:\n\nOcean Beach — The luxurious waterfront where the rich and famous mingle with traffickers. Art deco hotels, exclusive clubs, and billionaire yachts.\n\nSouth Beach — The iconic palm-lined beach. Wild nightlife and open-air drug trade.\n\nLittle Haiti — Vibrant cultural district with botanicas and Haitian gangs who control local commerce.\n\nLittle Havana — The Cuban heart of Vice City. Street dominos, cigars, and the Latin American criminal network.\n\nVenetian Islands — Exclusive residential islands where crime bosses and corrupt politicians live.\n\nCrosstown — The central business district, skyscrapers and headquarters of companies laundering dirty money.",
      es: "Vice City esta dividida en varios barrios distintos: Ocean Beach, South Beach, Little Haiti, Little Havana, Islas Venecianas y Crosstown.",
    },
    relatedEntries: ['leonida-underworld', 'only-raw-records', 'leonida-pd'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '5 min',
  },
  {
    id: 'only-raw-records',
    title: 'Only Raw Records',
    category: 'FACTION',
    excerpt: {
      fr: "Label musical et empire commercial de Vice City dirige par Boobie Ike et Dre'Quan Priest.",
      en: "Music label and Vice City business empire run by Boobie Ike and Dre'Quan Priest.",
      es: "Sello musical e imperio comercial de Vice City.",
    },
    content: {
      fr: "Only Raw Records est bien plus qu'un simple label musical. Fonde par Boobie Ike et co-dirige par Dre'Quan Priest, l'entreprise est une facade pour un empire commercial qui s'etend dans la musique, l'immobilier et des activites nettement moins legales. Leur artiste vedette, le duo Real Dimez (compose de Bae-Luxe et Roxy), represente la scene musicale vibrante de Vice City.\n\nOnly Raw Records est un microcosme de Vice City elle-meme : glamour en surface, corruption en dessous.",
      en: "Only Raw Records is much more than a simple music label. Founded by Boobie Ike and co-run by Dre'Quan Priest, the company is a front for a business empire spanning music, real estate, and distinctly less legal ventures. Their flagship artist, the duo Real Dimez (consisting of Bae-Luxe and Roxy), represents Vice City's vibrant music scene.\n\nOnly Raw Records is a microcosm of Vice City itself: glamour on the surface, corruption underneath.",
      es: "Only Raw Records es mas que un sello musical. Fundado por Boobie Ike, es una fachada para un imperio comercial.",
    },
    relatedEntries: ['vice-city-districts', 'leonida-underworld'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
  {
    id: 'leonida-pd',
    title: 'Leonida Police Department',
    category: 'FACTION',
    excerpt: {
      fr: "La police corrompue de Leonida, un ennemi aussi dangereux que les criminels.",
      en: "Leonida's corrupt police force, an enemy as dangerous as the criminals.",
      es: "La policia corrupta de Leonida, un enemigo tan peligroso como los criminales.",
    },
    content: {
      fr: "Le departement de police de Leonida est l'une des institutions les plus corrompues de l'univers GTA. Des officiers de patrouille aux commissaires, la corruption s'infiltre a tous les niveaux. Les flics corrompus protegent les trafiquants, ecrasent les petits criminels qui ne paient pas et utilisent leur badge comme un permis de voler.\n\nL'antagoniste principal de GTA VI est un flic corrompu de haut rang qui utilise les criminels comme des pions dans son propre jeu de pouvoir. La confrontation avec cette corruption institutionnelle est l'un des arcs narratifs les plus importants du jeu.",
      en: "The Leonida Police Department is one of the most corrupt institutions in the GTA universe. From patrol officers to commissioners, corruption infiltrates every level. Corrupt cops protect traffickers, crush small-time criminals who don't pay up, and use their badges as a license to steal.\n\nGTA VI's main antagonist is a high-ranking corrupt cop who uses criminals as pawns in his own power game. The confrontation with this institutional corruption is one of the game's most important narrative arcs.",
      es: "El departamento de policia de Leonida es una de las instituciones mas corruptas del universo GTA.",
    },
    relatedEntries: ['leonida-underworld', 'vice-city-districts'],
    mentions: ['chapter-4', 'chapter-5'],
    lastUpdated: '2026-03-13',
    readingTime: '4 min',
  },
  {
    id: 'leonida-penitentiary',
    title: 'Leonida Penitentiary',
    category: 'LOCATION',
    excerpt: {
      fr: "La prison d'etat de Leonida, ou l'histoire de Lucia commence.",
      en: "Leonida's state prison, where Lucia's story begins.",
      es: "La prision estatal de Leonida, donde comienza la historia de Lucia.",
    },
    content: {
      fr: "Le penitencier de Leonida est une prison d'etat situee a la peripherie de Vice City. C'est ici que Lucia Caminos a ete emprisonnee apres avoir defendu sa famille contre des menaces violentes a Liberty City. La prison est surpeuplee, violente et corrompue, un reflet de l'etat de Leonida lui-meme.\n\nLa liberation de Lucia du penitencier marque le debut de l'histoire de GTA VI. C'est dans cette prison qu'elle a forge la determination et l'intelligence tactique qui feront d'elle l'une des criminelles les plus redoutees de Leonida.",
      en: "Leonida Penitentiary is a state prison located on the outskirts of Vice City. This is where Lucia Caminos was imprisoned after defending her family against violent threats in Liberty City. The prison is overcrowded, violent, and corrupt — a reflection of the state of Leonida itself.\n\nLucia's release from the penitentiary marks the beginning of GTA VI's story. It was in this prison that she forged the determination and tactical intelligence that would make her one of Leonida's most feared criminals.",
      es: "El penitenciario de Leonida es una prision estatal donde Lucia fue encarcelada. Su liberacion marca el inicio de GTA VI.",
    },
    relatedEntries: ['lucia-backstory', 'leonida-pd'],
    mentions: ['chapter-1'],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
  {
    id: 'keys-drug-trade',
    title: 'The Keys Drug Trade',
    category: 'EVENT',
    excerpt: {
      fr: "Le reseau de trafic de drogue des Leonida Keys.",
      en: "The Leonida Keys drug trafficking network.",
      es: "La red de narcotrafico de las Leonida Keys.",
    },
    content: {
      fr: "Les Leonida Keys sont le point d'entree principal de la drogue dans l'etat de Leonida. Grace a leur position geographique entre l'Amerique du Sud et le continent nord-americain, les iles servent de plaque tournante pour le trafic maritime de cocaine et d'autres substances. Brian Heder est l'un des nombreux trafiquants qui operent dans les Keys, utilisant ses proprietes locatives comme couverture.\n\nC'est dans ce milieu que Jason Duval a grandi et a fait ses premiers pas dans le crime, d'abord comme coursier pour les trafiquants, puis comme acteur a part entiere.",
      en: "The Leonida Keys are the main entry point for drugs into the state of Leonida. Thanks to their geographic position between South America and the North American continent, the islands serve as a hub for maritime trafficking of cocaine and other substances. Brian Heder is one of many traffickers operating in the Keys, using his rental properties as cover.\n\nThis is the environment where Jason Duval grew up and took his first steps into crime, first as a runner for traffickers, then as a full player.",
      es: "Las Leonida Keys son el principal punto de entrada de drogas en Leonida. Es aqui donde Jason crecio y comenzo en el crimen.",
    },
    relatedEntries: ['jason-military', 'leonida-underworld'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
  {
    id: 'grassrivers-wildlife',
    title: 'Grassrivers Wildlife',
    category: 'LOCATION',
    excerpt: {
      fr: "La faune sauvage des marecages de Grassrivers.",
      en: "The wildlife of the Grassrivers swamps.",
      es: "La fauna de los pantanos de Grassrivers.",
    },
    content: {
      fr: "Les marecages de Grassrivers abritent une faune diverse et souvent dangereuse. Les alligators sont les predateurs dominants, mais on y trouve aussi des pythons birman envahissants, des lamantins, des pantherres de Floride et une multitude d'oiseaux tropicaux. Cette region est aussi connue pour ses courses de monster trucks illegales et ses camps de chasseurs.\n\nLes Grassrivers offrent un contraste saisissant avec le glamour de Vice City, representant le cote rural et sauvage de Leonida.",
      en: "The Grassrivers swamps are home to diverse and often dangerous wildlife. Alligators are the dominant predators, but you'll also find invasive Burmese pythons, manatees, Florida panthers, and a multitude of tropical birds. This region is also known for its illegal monster truck races and hunter camps.\n\nThe Grassrivers offer a striking contrast to Vice City's glamour, representing Leonida's rural and wild side.",
      es: "Los pantanos de Grassrivers albergan fauna diversa y peligrosa, incluyendo caimanes, pitones y panteras de Florida.",
    },
    relatedEntries: ['leonida-underworld'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
  {
    id: 'mount-kalaga-legends',
    title: 'Mount Kalaga Legends',
    category: 'LOCATION',
    excerpt: {
      fr: "Les legendes et mysteres de Mount Kalaga.",
      en: "The legends and mysteries of Mount Kalaga.",
      es: "Las leyendas y misterios de Mount Kalaga.",
    },
    content: {
      fr: "Mount Kalaga est entoure de legendes locales. Les mystiques hillbilly qui vivent dans les montagnes pretendent connaitre des secrets anciens sur la region. Certains parlent de tresors caches, d'autres de creatures etranges qui rodent dans les forets denses. Le parc national attire aussi bien les randonneurs que les fugitifs cherchant a echapper a la loi.\n\nLa montagne offre des activites de chasse et de peche, ainsi que des paysages a couper le souffle qui contrastent avec l'urbanisme frenetique de Vice City.",
      en: "Mount Kalaga is surrounded by local legends. The hillbilly mystics who live in the mountains claim to know ancient secrets about the region. Some speak of hidden treasures, others of strange creatures that prowl the dense forests. The national park attracts hikers as well as fugitives looking to escape the law.\n\nThe mountain offers hunting and fishing activities, as well as breathtaking landscapes that contrast with Vice City's frenetic urbanism.",
      es: "Mount Kalaga esta rodeado de leyendas locales. Los misticos hillbilly afirman conocer secretos antiguos de la region.",
    },
    relatedEntries: ['grassrivers-wildlife'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
  {
    id: 'leonida-keys-lore',
    title: 'Leonida Keys',
    category: 'LOCATION',
    excerpt: {
      fr: "Les iles tropicales de Leonida, paradis et plaque tournante du crime.",
      en: "Leonida's tropical islands, paradise and crime hub.",
      es: "Las islas tropicales de Leonida, paraiso y centro del crimen.",
    },
    content: {
      fr: "Les Leonida Keys sont un archipel d'iles tropicales situees au sud de l'etat de Leonida. Inspirees des Florida Keys, ces iles offrent des paysages paradisiaques — eaux turquoise, couchers de soleil spectaculaires, mangroves luxuriantes. Mais sous cette facade idyllique se cache un reseau criminel actif.\n\nJason Duval y a grandi, entoure de figures comme Brian Heder qui utilisent les iles comme base pour le trafic de drogue maritime. La Chaussee des Keys, un long pont reliant les iles, est un lieu emblematique du jeu.",
      en: "The Leonida Keys are an archipelago of tropical islands located south of the state of Leonida. Inspired by the Florida Keys, these islands offer paradisiacal landscapes — turquoise waters, spectacular sunsets, lush mangroves. But beneath this idyllic facade lies an active criminal network.\n\nJason Duval grew up here, surrounded by figures like Brian Heder who use the islands as a base for maritime drug trafficking. The Keys Causeway, a long bridge connecting the islands, is an iconic location in the game.",
      es: "Las Leonida Keys son un archipielago de islas tropicales al sur de Leonida. Jason crecio aqui.",
    },
    relatedEntries: ['jason-military', 'keys-drug-trade'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
  {
    id: 'port-gellhorn-lore',
    title: 'Port Gellhorn',
    category: 'LOCATION',
    excerpt: {
      fr: "La ville portuaire en declin, plaque tournante du marche noir.",
      en: "The decaying port city, black market hub.",
      es: "La ciudad portuaria en declive, centro del mercado negro.",
    },
    content: {
      fr: "Port Gellhorn etait autrefois une destination touristique florissante, avec des parcs d'attractions et des resorts populaires. Mais la recession economique et les ouragans ont devaste la ville. Aujourd'hui, les attractions sont fermees, les motels sont devenus des planques et l'economie souterraine est la seule qui fonctionne.\n\nC'est un lieu ou les criminels se cachent, ou les marchandises volees changent de mains et ou les deals se font dans l'ombre. Port Gellhorn represente le declin du reve americain dans l'univers de GTA VI.",
      en: "Port Gellhorn was once a thriving tourist destination with amusement parks and popular resorts. But economic recession and hurricanes devastated the city. Today, attractions are closed, motels have become hideouts, and the underground economy is the only one that works.\n\nIt's a place where criminals hide, stolen goods change hands, and deals are done in the shadows. Port Gellhorn represents the decline of the American dream in GTA VI's universe.",
      es: "Port Gellhorn fue un destino turistico prospero, pero la recesion y los huracanes devastaron la ciudad.",
    },
    relatedEntries: ['leonida-underworld'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
  {
    id: 'ambrosia-lore',
    title: 'Ambrosia',
    category: 'LOCATION',
    excerpt: {
      fr: "La ville industrielle controlee par les gangs de motards.",
      en: "The industrial town controlled by biker gangs.",
      es: "La ciudad industrial controlada por pandillas de motociclistas.",
    },
    content: {
      fr: "Ambrosia est une ville industrielle dominee par une enorme raffinerie de sucre. La raffinerie est le principal employeur de la ville mais sert aussi de couverture pour des operations criminelles. Les gangs de motards controlent le territoire, faisant respecter leurs propres lois.\n\nL'atmosphere d'Ambrosia est lourde et oppressante — l'air sent le sucre brule en permanence et la tension est palpable. Les habitants sont durs, les outsiders sont mal vus et les regles de la ville sont dictees par les plus forts.",
      en: "Ambrosia is an industrial town dominated by a massive sugar refinery. The refinery is the town's main employer but also serves as cover for criminal operations. Biker gangs control the territory, enforcing their own laws.\n\nAmbrosia's atmosphere is heavy and oppressive — the air permanently smells of burnt sugar and the tension is palpable. The locals are tough, outsiders are unwelcome, and the town's rules are dictated by the strongest.",
      es: "Ambrosia es una ciudad industrial dominada por una enorme refineria de azucar. Los gangs de motociclistas controlan el territorio.",
    },
    relatedEntries: ['leonida-underworld'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
  {
    id: 'cal-hampton-lore',
    title: 'Cal Hampton',
    category: 'CHARACTER',
    excerpt: {
      fr: "L'ami paranoiaque mais loyal de Jason.",
      en: "Jason's paranoid but loyal friend.",
      es: "El amigo paranoico pero leal de Jason.",
    },
    content: {
      fr: "Cal Hampton est l'ami le plus proche de Jason Duval. Paranoiaque, nerveux et constamment inquiet de se faire prendre par la police, Cal est neanmoins un allie fidele. Il aide Jason dans ses operations et sert souvent de guetteur ou de conducteur malgre ses protestations nerveuses.\n\nCal represente le contrepoint humoristique et humain du duo Lucia-Jason, apportant un element de legerete dans un monde autrement sombre et dangereux.",
      en: "Cal Hampton is Jason Duval's closest friend. Paranoid, nervous, and constantly worried about getting caught by the police, Cal is nonetheless a loyal ally. He helps Jason in his operations and often serves as lookout or driver despite his nervous protests.\n\nCal represents the humorous and human counterpoint to the Lucia-Jason duo, bringing a lightness to an otherwise dark and dangerous world.",
      es: "Cal Hampton es el amigo mas cercano de Jason. Paranoico y nervioso, pero un aliado fiel.",
    },
    relatedEntries: ['jason-military'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '2 min',
  },
  {
    id: 'boobie-ike-lore',
    title: 'Boobie Ike',
    category: 'CHARACTER',
    excerpt: {
      fr: "Magnat de Vice City et fondateur de Only Raw Records.",
      en: "Vice City mogul and founder of Only Raw Records.",
      es: "Magnate de Vice City y fundador de Only Raw Records.",
    },
    content: {
      fr: "Boobie Ike est l'un des personnages les plus influents de Vice City. Fondateur de Only Raw Records, il a bati un empire qui s'etend de la musique a l'immobilier en passant par des activites criminelles. Charismatique et impitoyable, Boobie Ike represente le pouvoir et la corruption qui definissent Vice City.\n\nSon partenariat avec Dre'Quan Priest donne a Only Raw Records une facade de legitimite culturelle, tandis que leurs activites souterraines financent leur empire croissant.",
      en: "Boobie Ike is one of Vice City's most influential characters. Founder of Only Raw Records, he has built an empire spanning music, real estate, and criminal activities. Charismatic and ruthless, Boobie Ike represents the power and corruption that define Vice City.\n\nHis partnership with Dre'Quan Priest gives Only Raw Records a facade of cultural legitimacy, while their underground activities finance their growing empire.",
      es: "Boobie Ike es uno de los personajes mas influyentes de Vice City. Fundador de Only Raw Records.",
    },
    relatedEntries: ['only-raw-records', 'vice-city-districts'],
    mentions: [],
    lastUpdated: '2026-03-13',
    readingTime: '3 min',
  },
];
