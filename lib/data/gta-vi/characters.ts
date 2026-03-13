export interface Character {
  id: string;
  name: string;
  role: string;
  type: 'protagonist' | 'secondary' | 'entity';
  colorClass: string;
  neonClass: string;
  badge?: string;
  quotePreview: string;
  bio: string[];
  keyDetail?: string;
  info: Record<string, string>;
  stats?: { force: number; vitesse: number; tir: number; charisme: number; survie: number };
  combatStyle?: string;
  relations: { name: string; type: string; color: string }[];
  citations: string[];
  image?: string;
  imageSquare?: string;
  imageLandscape?: string;
  video?: string;
  dossier?: {
    header: string;
    nom: string;
    statut: string;
    fields: Record<string, string>;
    notes: string;
    stamp: string;
    stampColor: string;
  };
}

export const characters: Character[] = [
  {
    id: 'lucia',
    name: 'Lucia Caminos',
    role: 'Protagoniste · Criminelle',
    type: 'protagonist',
    colorClass: 'neon-pink',
    neonClass: 'neon-pink-text',
    badge: 'JOUABLE',
    quotePreview: '"The only thing that matters is who you know and what you got."',
    bio: [
      "Lucia's father taught her to fight as soon as she could walk. Life has been coming at her swinging ever since. Fighting for her family landed her in the Leonida Penitentiary. Sheer luck got her out.",
      "Lucia's learned her lesson — only smart moves from here.",
      "More than anything, Lucia wants the good life her mom has dreamed of since their days in Liberty City."
    ],
    keyDetail: "A life with Jason could be her way out.",
    image: '/images/gta-vi/jason-lucia-motel-portrait.jpg',
    video: '/videos/gta-vi/lucia-caminos.mp4',
    info: {
      'Nom complet': 'Lucia Caminos',
      'Origine': 'Liberty City (enfance) → Leonida',
      'Statut': 'Libérée du pénitencier',
      'Lieu clé': 'Leonida Penitentiary',
      'Partenaire': 'Jason Duval',
      'Motivation': 'La belle vie que sa mère a toujours rêvée',
      'Style': 'Smart, calculated, lethal'
    },
    stats: { force: 8, vitesse: 9, tir: 7, charisme: 8, survie: 10 },
    combatStyle: 'Combat rapproché · Survivaliste · Stratège',
    relations: [
      { name: 'Jason Duval', type: 'PARTENAIRE / AMOUR', color: 'neon-gold' },
      { name: 'Brian Heder', type: 'CONTACT', color: 'neon-cyan' },
      { name: 'Leonida Penitentiary', type: 'PASSÉ', color: 'text-muted-vice' },
      { name: 'Mère', type: 'FAMILLE (Liberty City)', color: 'vice-coral' }
    ],
    citations: [
      '"The only thing that matters is who you know and what you got."',
      '"A life with Jason could be her way out."',
      '"Fresh out of prison and ready to change the odds in her favor."',
      '"Committed to her plan — no matter what it takes."'
    ],
    dossier: {
      header: 'DÉPARTEMENT DE POLICE DE L\'ÉTAT DE LEONIDA — CONFIDENTIEL',
      nom: 'LUCIA CAMINOS',
      statut: 'EN LIBERTÉ CONDITIONNELLE',
      fields: {
        'Établissement': 'LEONIDA PENITENTIARY',
        'Motif d\'incarcération': '[Classifié — spéculation fan]'
      },
      notes: 'Père inconnu. Mère originaire de Liberty City. Comportement: calculateur. Dangerosité: ÉLEVÉE.',
      stamp: 'LIBÉRÉE',
      stampColor: 'text-neon-green'
    }
  },
  {
    id: 'jason',
    name: 'Jason Duval',
    role: 'Protagoniste · Ex-Militaire',
    type: 'protagonist',
    colorClass: 'neon-cyan',
    neonClass: 'neon-cyan-text',
    badge: 'JOUABLE',
    quotePreview: '"Another day in paradise, right?"',
    bio: [
      "Jason grew up around grifters and crooks. After a stint in the Army trying to shake off his troubled teens, he found himself in the Keys doing what he knows best, working for local drug runners.",
      "It might be time to try something new."
    ],
    keyDetail: "Meeting Lucia could be the best or worst thing to ever happen to him. Jason knows how he'd like it to turn out but right now, it's hard to tell.",
    image: '/images/gta-vi/jason-lucia-01-portrait.jpg',
    video: '/videos/gta-vi/jason-duval.mp4',
    info: {
      'Nom complet': 'Jason Duval',
      'Origine': 'Élevé parmi arnaqueurs et criminels',
      'Parcours': 'Armée → Les Keys → Trafic de drogue',
      'Résidence': 'Propriété de Brian Heder (loyer gratuit)',
      'Partenaire': 'Lucia Caminos',
      'Employeur': 'Brian Heder (trafiquant)',
      'Ambition': 'Une vie facile — si seulement les choses arrêtaient de se compliquer'
    },
    stats: { force: 8, vitesse: 7, tir: 9, charisme: 7, survie: 8 },
    combatStyle: 'Militaire · Tireur d\'élite · Pragmatique',
    relations: [
      { name: 'Lucia Caminos', type: 'PARTENAIRE / AMOUR', color: 'neon-gold' },
      { name: 'Brian Heder', type: 'EMPLOYEUR / LOGEUR', color: 'neon-orange' },
      { name: 'Cal Hampton', type: 'AMI', color: 'neon-cyan' },
      { name: 'Armée', type: 'PASSÉ', color: 'text-muted-vice' }
    ],
    citations: [
      '"If anything happens, I\'m right behind you."',
      '"Another day in paradise, right?"',
      '"Jason wants an easy life, but things just keep getting harder."'
    ],
    dossier: {
      header: 'DÉPARTEMENT DE POLICE — LEONIDA KEYS DIVISION — CONFIDENTIEL',
      nom: 'JASON DUVAL',
      statut: 'NON INCARCÉRÉ — SURVEILLÉ',
      fields: {
        'Antécédents': 'Service militaire / Activités criminelles mineures',
      },
      notes: 'Associé de Brian Heder. Hébergé propriété Keys. Lié à trafic local. Liaison sentimentale: LUCIA CAMINOS.',
      stamp: 'SOUS SURVEILLANCE',
      stampColor: 'text-neon-orange'
    }
  },
  {
    id: 'cal',
    name: 'Cal Hampton',
    role: 'Ami de Jason · Paranoïaque',
    type: 'secondary',
    colorClass: 'neon-orange',
    neonClass: 'neon-orange-text',
    quotePreview: '"What if everything on the internet was true?"',
    image: '/images/gta-vi/cal-hampton-portrait.jpg',
    imageSquare: '/images/gta-vi/cal-hampton-square.jpg',
    imageLandscape: '/images/gta-vi/cal-hampton-landscape.jpg',
    video: '/videos/gta-vi/cal-hampton.mp4',
    bio: [
      "Cal feels safest hanging at home, snooping on Coast Guard comms with a few beers and some private browser tabs open.",
      "Cal is at the low tide of America and happy there. Casual paranoia loves company, but his friend Jason has bigger plans."
    ],
    info: {
      'Rôle': 'Ami de Jason · Associé de Brian Heder',
      'Activité principale': 'Surveillance des communications Coast Guard',
      'Philosophie': 'Paranoïa détendue',
      'Caractère': 'Homebody, complotiste amateur, flemmard attachant'
    },
    relations: [
      { name: 'Jason Duval', type: 'AMI', color: 'neon-cyan' },
      { name: 'Brian Heder', type: 'ASSOCIÉ', color: 'neon-orange' }
    ],
    citations: [
      '"What if everything on the internet was true?"',
      '"There are way too many birds flying around in perfect formation."',
      '"The psychopaths are in charge. Get used to it."'
    ],
    dossier: {
      header: 'SIGNALEMENT KEYS COUNTY',
      nom: 'CAL HAMPTON',
      statut: 'CIVIL NON MENAÇANT',
      fields: {},
      notes: 'Localisé domicile. Activité suspecte: écoute radio maritime. Aucune action requise. Niveau de menace: CAFÉ ET BIÈRE.',
      stamp: 'PAS PRIORITAIRE',
      stampColor: 'text-text-secondary'
    }
  },
  {
    id: 'boobie',
    name: 'Boobie Ike',
    role: 'Vice City Legend · Entrepreneur Criminel',
    type: 'secondary',
    colorClass: 'neon-purple',
    neonClass: 'neon-purple-text',
    quotePreview: '"It\'s all about heart..."',
    image: '/images/gta-vi/boobie-ike-portrait.jpg',
    imageSquare: '/images/gta-vi/boobie-ike-square.jpg',
    imageLandscape: '/images/gta-vi/boobie-ike-landscape.jpg',
    video: '/videos/gta-vi/boobie-ike.mp4',
    bio: [
      "Boobie is a local Vice City legend — and acts like it. One of the few to transform his time in the streets into a legitimate empire spanning real estate, a strip club, and a recording studio — Boobie's all smiles until it's time to talk business.",
      "It's his partnership with the young aspiring music mogul Dre'Quan for Only Raw Records that he's most invested in — now they just need a hit."
    ],
    info: {
      'Nom': 'Boobie Ike',
      'Surnom': '"The Jack of Hearts"',
      'Empire': 'Immobilier + Strip Club + Studio d\'enregistrement',
      'Label': 'Only Raw Records (co-fondateur)',
      'Partenaire business': 'Dre\'Quan Priest',
      'Territoire': 'Vice City',
      'Réputation': 'Légende locale'
    },
    relations: [
      { name: 'Dre\'Quan Priest', type: 'PARTENAIRE BUSINESS', color: 'neon-gold' },
      { name: 'Only Raw Records', type: 'FONDATEUR', color: 'neon-purple' },
      { name: 'Vice City', type: 'HOME', color: 'vice-coral' }
    ],
    citations: [
      '"It\'s all about heart — the Jack of Hearts."',
      '"The club money pay for the studio, and the drug money pay for it all."',
      '"Top quality cuts."'
    ],
    dossier: {
      header: 'VCPD — VICE CITY DIVISION FINANCIÈRE',
      nom: 'BOOBIE IKE (nom légal classifié)',
      statut: 'ENTREPRENEUR "LÉGITIME"',
      fields: {
        'Activités connues': 'Immobilier, divertissement adulte, musique',
        'Activités suspectées': 'Blanchiment d\'argent via label musical'
      },
      notes: 'Réseau criminel transformé en empire business. Difficile à poursuivre. Souriant. Dangereux.',
      stamp: 'SOUS ENQUÊTE FINANCIÈRE',
      stampColor: 'text-neon-yellow'
    }
  },
  {
    id: 'drequan',
    name: 'Dre\'Quan Priest',
    role: 'Producteur · Only Raw Records',
    type: 'secondary',
    colorClass: 'neon-gold',
    neonClass: 'neon-gold-text',
    quotePreview: '"Only Raw... Records"',
    image: '/images/gta-vi/drequan-priest-portrait.jpg',
    imageSquare: '/images/gta-vi/drequan-priest-square.jpg',
    imageLandscape: '/images/gta-vi/drequan-priest-landscape.jpg',
    video: '/videos/gta-vi/drequan-priest.mp4',
    bio: [
      "Dre'Quan was always more of a hustler than a gangster. Even when he was dealing on the streets to make ends meet, breaking into music was the goal.",
      "Now that he's signed the Real Dimez, Dre'Quan's days of booking acts into Boobie's strip club might be numbered as he sets his sights on the Vice City scene."
    ],
    info: {
      'Nom': 'Dre\'Quan Priest',
      'Rôle': 'Producteur · A&R · Entrepreneur',
      'Label': 'Only Raw Records (directeur artistique)',
      'Artiste signé': 'Real Dimez (Bae-Luxe & Roxy)',
      'Partenaire': 'Boobie Ike',
      'Ancienne activité': 'Dealer de rue',
      'Ambition': 'Conquérir la scène musicale de Vice City'
    },
    relations: [
      { name: 'Boobie Ike', type: 'PARTENAIRE / MENTOR', color: 'neon-gold' },
      { name: 'Real Dimez', type: 'ARTISTE SIGNÉ', color: 'neon-pink' },
      { name: 'Only Raw Records', type: 'FONDATEUR', color: 'neon-gold' }
    ],
    citations: [
      '"Only Raw... Records"',
      '"Dancers are like my A&Rs. If the record\'s a hit, DJs gonna be spinnin\' it."',
      '"You\'re with the label now."'
    ]
  },
  {
    id: 'realdimez',
    name: 'Real Dimez',
    role: 'Duo Musical · Influenceuses',
    type: 'secondary',
    colorClass: 'neon-pink',
    neonClass: 'neon-pink-text',
    quotePreview: '"Viral videos. Viral hooks."',
    image: '/images/gta-vi/real-dimez-portrait.jpg',
    imageSquare: '/images/gta-vi/real-dimez-square.jpg',
    imageLandscape: '/images/gta-vi/real-dimez-landscape.jpg',
    video: '/videos/gta-vi/real-dimez.mp4',
    bio: [
      "Bae-Luxe and Roxy aka Real Dimez have been friends since high school — girls with the savvy to turn their time shaking down local dealers into cold, hard cash via spicy rap tracks and a relentless social media presence.",
      "An early hit single with local rapper DWNPLY took Real Dimez to new heights. Now, after five years and a whole lot of trouble, they're signed to Only Raw Records, hoping lightning can strike twice."
    ],
    info: {
      'Membres': 'Bae-Luxe + Roxy',
      'Type': 'Duo musical · Rappeuses',
      'Label': 'Only Raw Records (signées)',
      'Manager': 'Dre\'Quan Priest',
      'Collaboration': 'DWNPLY (rappeur, hit ancien)',
      'Présence': 'Réseaux sociaux intensive',
      'Origine': 'Amies depuis le lycée'
    },
    relations: [
      { name: 'Dre\'Quan Priest', type: 'MANAGER / LABEL', color: 'neon-gold' },
      { name: 'Boobie Ike', type: 'EMPLOYEUR INDIRECT', color: 'neon-purple' },
      { name: 'DWNPLY', type: 'COLLABORATION MUSICALE', color: 'neon-cyan' }
    ],
    citations: [
      '"Viral videos. Viral hooks."',
      '"All my dimes in this club. Meet my twin, make it a dub."',
      '"One hit away from fame."'
    ]
  },
  {
    id: 'raul',
    name: 'Raul Bautista',
    role: 'Braqueur · Vétéran',
    type: 'secondary',
    colorClass: 'neon-cyan',
    neonClass: 'neon-cyan-text',
    quotePreview: '"Experience counts."',
    image: '/images/gta-vi/raul-bautista-portrait.jpg',
    imageSquare: '/images/gta-vi/raul-bautista-square.jpg',
    imageLandscape: '/images/gta-vi/raul-bautista-landscape.jpg',
    video: '/videos/gta-vi/raul-bautista.mp4',
    bio: [
      "Confidence, charm, and cunning — Raul's a seasoned bank robber always on the hunt for talent ready to take the risks that bring the biggest rewards.",
      "Raul's recklessness raises the stakes with every score. Sooner or later, his crew will have to double down or pull their chips from the table."
    ],
    info: {
      'Nom': 'Raul Bautista',
      'Spécialité': 'Braquage de banques',
      'Style': 'Professionnel, charmeur, imprudent',
      'Caractère': 'Vétéran de terrain, chasseur de talents',
      'Zone': 'Ambrosia / Port Gellhorn',
      'Danger': 'Recklessness croissante avec chaque coup'
    },
    relations: [
      { name: 'Lucia & Jason', type: 'RECRUTE / CONTACT', color: 'neon-gold' }
    ],
    citations: [
      '"Experience counts."',
      '"Life is full of surprises, my friend. I think we\'d all be wise to remember that."',
      '"A professional adapts."'
    ],
    dossier: {
      header: 'BUREAU FÉDÉRAL — ÉTAT DE LEONIDA — CLASSIFIÉ',
      nom: 'RAUL BAUTISTA',
      statut: 'RECHERCHÉ',
      fields: {
        'Spécialité': 'Braquages multiples (banques, transports de fonds)',
        'Modus operandi': 'Charme + Recrutement talent + Escalade risques'
      },
      notes: '',
      stamp: 'DANGEREUX — NE PAS APPROCHER',
      stampColor: 'text-destructive'
    }
  },
  {
    id: 'brian',
    name: 'Brian Heder',
    role: 'Trafiquant Vétéran · Les Keys',
    type: 'secondary',
    colorClass: 'neon-orange',
    neonClass: 'neon-orange-text',
    quotePreview: '"Nothing better than a Mudslide at sunset."',
    image: '/images/gta-vi/brian-heder-portrait.jpg',
    imageSquare: '/images/gta-vi/brian-heder-square.jpg',
    imageLandscape: '/images/gta-vi/brian-heder-landscape.jpg',
    video: '/videos/gta-vi/brian-heder.mp4',
    bio: [
      "Brian's a classic drug runner from the golden age of smuggling in the Keys. Still moving product through his boat yard with his third wife, Lori, Brian's been around long enough to let others do his dirty work.",
      "Brian's letting Jason live rent-free at one of his properties — so long as he helps with local shakedowns, and stops by for Lori's sangria once in a while."
    ],
    info: {
      'Nom': 'Brian Heder',
      'Activité': 'Trafic de drogue · Chantier naval (couverture)',
      'Épouse': 'Lori Heder (3ème femme)',
      'Propriété': 'Chantier naval (base d\'opérations)',
      'Lien': 'Employeur de Jason · Ami de Cal',
      'Ère': 'L\'âge d\'or du trafic des Keys',
      'Style': 'Old school, relaxed, délègue le sale boulot'
    },
    relations: [
      { name: 'Jason Duval', type: 'HÉBERGE / EMPLOIE', color: 'neon-cyan' },
      { name: 'Cal Hampton', type: 'ASSOCIÉ', color: 'neon-orange' },
      { name: 'Lori', type: 'ÉPOUSE', color: 'neon-pink' }
    ],
    citations: [
      '"Nothing better than a Mudslide at sunset."',
      '"I hauled so much grass in that plane, I could make the state of Leonida levitate."',
      '"Looks like a Leonida beach bum — moves like a great white shark."'
    ],
    dossier: {
      header: 'DEA LEONIDA — DOSSIER TRAFIC — CONFIDENTIEL',
      nom: 'BRIAN HEDER',
      statut: 'SUSPECT CONNU — NON INCARCÉRÉ',
      fields: {
        'Couverture': 'Brian\'s Boat Yard (chantier naval)',
        'Réseau': 'Trafic maritime Keys → Continent',
        'Conjoint': 'LORI HEDER (3ème épouse)'
      },
      notes: 'Opère depuis années 80. Adapté. Intouchable jusqu\'ici.',
      stamp: 'DOSSIER OUVERT',
      stampColor: 'text-neon-orange'
    }
  }
];

export const entities = [
  {
    id: 'only-raw-records',
    name: 'Only Raw Records',
    type: 'Label Musical · Boobie Ike & Dre\'Quan',
    colorClass: 'neon-gold'
  },
  {
    id: 'leonida-penitentiary',
    name: 'Leonida Penitentiary',
    type: 'Institution · Lieu clé',
    colorClass: 'text-muted-vice'
  }
];
