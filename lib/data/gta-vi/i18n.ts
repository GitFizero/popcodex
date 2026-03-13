'use client';

import { useMemo } from 'react';

export type Lang = 'fr' | 'en' | 'es' | 'it';

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    // Nav
    'nav.home': 'ACCUEIL',
    'nav.story': 'HISTOIRE',
    'nav.characters': 'PERSONNAGES',
    'nav.vicecity': 'VICE CITY',
    'nav.map': 'CARTE',
    'nav.leonida': 'LEONIDA',
    'nav.gameplay': 'GAMEPLAY',
    'nav.about': 'À PROPOS',
    'nav.fansite': 'FAN SITE',
    'nav.gallery': 'GALERIE',
    'nav.trailers': 'TRAILERS',
    'nav.buy': 'ACHETER',

    // Hero
    'hero.eyebrow': 'ROCKSTAR GAMES · 2026',
    'hero.tagline': 'Le côté le plus sombre de l\'endroit le plus ensoleillé d\'Amérique.',
    'hero.unofficial': 'ENCYCLOPÉDIE FAN NON-OFFICIELLE',
    'hero.explore': 'EXPLORER LE WIKI',
    'hero.characters': 'VOIR LES PERSONNAGES',
    'hero.scroll': 'DÉFILER',

    // Synopsis
    'synopsis.title': 'SYNOPSIS OFFICIEL',
    'synopsis.text': '"Jason et Lucia ont toujours su que les dés étaient pipés contre eux. Mais quand un coup facile tourne mal, ils se retrouvent du côté le plus sombre de l\'endroit le plus ensoleillé d\'Amérique, au cœur d\'une conspiration criminelle qui s\'étend à travers l\'état de Leonida — forcés de se reposer l\'un sur l\'autre plus que jamais s\'ils veulent s\'en sortir vivants."',
    'synopsis.credit': '— Synopsis Officiel, rockstargames.com',
    'synopsis.closing': '"Quand le soleil se couche et que le néon s\'allume, chacun a quelque chose à gagner — et plus encore à perdre."',

    // Blog
    'blog.subtitle': 'Guides, analyses et actualités sur Grand Theft Auto VI',
    'blog.read': 'LIRE',
    'blog.morecoming': 'D\'AUTRES ARTICLES ARRIVENT BIENTÔT...',

    // Countdown
    'countdown.title': 'SORTIE DANS',
    'countdown.days': 'JOURS',
    'countdown.hours': 'HEURES',
    'countdown.minutes': 'MINUTES',
    'countdown.seconds': 'SECONDES',

    // Stats
    'stats.protagonists': 'Protagonistes jouables',
    'stats.first': 'Protagoniste féminine',
    'stats.characters': 'Personnages confirmés',
    'stats.zones': 'Zones de Leonida',
    'stats.views': 'Vues Trailer 2 en 24h',

    // Characters
    'characters.title': 'PERSONNAGES',
    'characters.meet': 'RENCONTREZ LEONIDA',
    'characters.all': 'TOUS',
    'characters.protagonists': 'PROTAGONISTES',
    'characters.secondary': 'SECONDAIRES',
    'characters.bio': 'BIO',
    'characters.stats': 'STATS',
    'characters.relations': 'RELATIONS',
    'characters.citations': 'CITATIONS',
    'characters.dossier': 'DOSSIER',
    'characters.playable': 'JOUABLE',

    // Story
    'story.title': 'L\'HISTOIRE',
    'story.timeline': 'CHRONOLOGIE',
    'story.network': 'RÉSEAU DE PERSONNAGES',

    // Locations
    'locations.title': 'VICE CITY & LEONIDA',
    'locations.subtitle': 'L\'état le plus dangereux d\'Amérique',
    'locations.all': 'TOUTES LES ZONES',
    'locations.characters': 'PERSONNAGES',
    'locations.features': 'CARACTÉRISTIQUES',

    // Gameplay
    'gameplay.title': 'MAÎTRISEZ VICE CITY',
    'gameplay.dual': 'SYSTÈME DUAL PROTAGONISTE',
    'gameplay.conspiracy': 'CONSPIRATION CRIMINELLE',
    'gameplay.wanted': 'NIVEAU DE RECHERCHE',
    'gameplay.vehicles': 'CLASSES DE VÉHICULES',
    'gameplay.social': 'RÉSEAUX SOCIAUX IN-GAME',
    'gameplay.radio': 'STATIONS RADIO',
    'gameplay.speculative': 'CONTENU SPÉCULATIF — NON CONFIRMÉ OFFICIELLEMENT',

    // Leonida/Lore
    'lore.title': 'THE VICE CITY HERALD',
    'lore.subtitle': 'L\'ENCYCLOPÉDIE NON-OFFICIELLE DE GTA VI',
    'lore.entities': 'ENTITÉS OFFICIELLES',
    'lore.factions': 'FACTIONS',
    'lore.official': 'OFFICIEL',
    'lore.trailer': 'TRAILER',
    'lore.speculative': 'SPÉCULATIF',

    // About
    'about.legal': 'AVIS LÉGAL IMPORTANT',
    'about.unofficial': 'fan wiki NON OFFICIEL',
    'about.notaffiliated': 'PAS affilié, sponsorisé, approuvé, ni associé',
    'about.title': 'À PROPOS DU PROJET',
    'about.sources': 'SOURCES',
    'about.badges': 'SYSTÈME DE BADGES',

    // Contact
    'nav.contact': 'CONTACT',
    'contact.title': 'CONTACTEZ-NOUS',
    'contact.subtitle': 'Une question, une suggestion ou une demande ? N\'hésitez pas à nous écrire.',
    'contact.email': 'EMAIL',
    'contact.general': 'QUESTIONS GÉNÉRALES',
    'contact.generalDesc': 'Pour toute question sur le wiki, nos contenus ou le projet Leonida Wiki, envoyez-nous un email. Nous répondons généralement sous 48 heures.',
    'contact.corrections': 'CORRECTIONS & SUGGESTIONS',
    'contact.correctionsDesc': 'Vous avez repéré une erreur ou souhaitez suggérer un ajout ? Indiquez-nous la page concernée et la correction à apporter.',
    'contact.copyright': 'DROITS D\'AUTEUR',
    'contact.copyrightDesc': 'Si vous êtes titulaire de droits et souhaitez signaler un contenu, contactez-nous avec les détails. Nous traiterons votre demande dans les plus brefs délais.',

    // Ticker
    'ticker.text': '📡 GTA VI — 19 NOVEMBRE 2026 · PS5 & XBOX SERIES X|S · LUCIA CAMINOS & JASON DUVAL — DUO PROTAGONISTE · VICE CITY & L\'ÉTAT DE LEONIDA · SITE FAN NON-OFFICIEL · ',

    // Footer
    'footer.disclaimer': 'GTA VI FAN WIKI · NON AFFILIÉ À ROCKSTAR GAMES OU TAKE-TWO INTERACTIVE',

    // Eyefind
    'eyefind.title': '[EYEFIND FEED]',
    'eyefind.disclaimer': 'RÉSEAU SOCIAL FICTIF · SATIRE',

    // Timeline
    'timeline.title': 'TIMELINE DES TRAILERS',

    // Inline common
    'inline.chapter': 'CHAPITRE',
    'inline.notRevealed': 'NON RÉVÉLÉ',
    'inline.availableAtRelease': 'Disponible à la sortie du jeu · 19 Nov 2026',
    'inline.exploreMap': 'Explorer la carte →',
    'inline.officialContent': 'CONTENU OFFICIEL',
    'inline.gallery': 'GALERIE',
    'inline.galleryDesc': 'Découvrez les artworks officiels de GTA VI publiés par Rockstar Games.',
    'inline.filterAll': 'Tout',
    'inline.filterProtagonists': 'Protagonistes',
    'inline.filterCharacters': 'Personnages',
    'inline.filterScenery': 'Décors',
    'inline.copyrightFull': '© Rockstar Games. Tous les artworks sont la propriété de Rockstar Games et Take-Two Interactive. Site fan non officiel.',
    'inline.officialTrailers': 'TRAILERS OFFICIELS',
    'inline.trailersDesc': 'Toutes les bandes-annonces officielles de Grand Theft Auto VI par Rockstar Games.',
    'inline.home': 'Accueil',
    'inline.trailers': 'Trailers',
    'inline.copyrightTrailers': '© Rockstar Games. Vidéos officielles de rockstargames.com. Site fan non-officiel.',
    'inline.thisIsAn': 'Ce site est un',
    'inline.dedicatedTo': 'dédié à Grand Theft Auto VI.',
    'inline.allNamesProperty': 'Grand Theft Auto VI, GTA VI, Vice City, Leonida, et tous les noms associés sont la propriété exclusive de Rockstar Games et Take-Two Interactive Software, Inc.',
    'inline.thisIsNot': 'Ce site n\'est',
    'inline.inAnyWay': 'de quelque manière que ce soit à Rockstar Games ou Take-Two Interactive.',
    'inline.aboutProject': 'Ce fan wiki a été créé par des passionnés de la franchise Grand Theft Auto dans l\'attente de la sortie de GTA VI, prévue le 19 novembre 2026.',
    'inline.officialSite': 'Site officiel',
    'inline.officialSources': 'Sources officielles Rockstar',
    'inline.trailerElements': 'Éléments des trailers',
    'inline.communityTheories': 'Théories de la communauté',
    'inline.closeCombat': 'Combat rapproché · Survivaliste',
    'inline.militaryTraining': 'Formation militaire · Tireur',
    'inline.socialMediaGameplay': 'Les actions du joueur peuvent devenir virales. Les conséquences sur les réseaux sociaux affectent le gameplay.',
    'inline.master': 'MAÎTRISEZ ',
    'inline.quietDay': 'Journée tranquille',
    'inline.localPatrol': 'Patrouille locale',
    'inline.vcpdPursuit': 'Poursuite VCPD',
    'inline.specialUnits': 'Unités spéciales',
    'inline.federalIntervention': 'Intervention fédérale',
    'inline.totalMobilization': 'Mobilisation totale',
    'inline.theDuo': 'LE DUO',
    'inline.boobieEmpire': "L'EMPIRE DE BOOBIE",
    'inline.keysNetwork': 'LE RÉSEAU DES KEYS',
    'inline.raulCrew': "L'ÉQUIPE DE RAUL",
    'inline.drugSmuggling': 'Trafic de drogue, basé aux Keys',
    'inline.heistCrew': 'Équipe de braquage professionnelle',
    'inline.luciasPrison': 'Prison de Lucia. Lieu clé.',
    'inline.smugglingCover': 'Couverture pour le trafic. Résidence de Jason.',
    'inline.stateOfLeonida': "L'ÉTAT DE LEONIDA",
    'inline.darkestSide': "Le côté le plus sombre de l'endroit le plus ensoleillé d'Amérique.",
    'inline.penitentiary': "Le Pénitencier de Leonida. La liberté. Le plan.",
    'inline.theKeys': "Les Keys. L'armée abandonnée. Le trafic local.",
    'inline.scoreGoneWrong': 'LE COUP QUI TOURNE MAL',
    'inline.leonidaConspiracy': 'LA CONSPIRATION DE LEONIDA',
    'inline.luciaDesc': "Son père lui a appris à se battre dès qu'elle a pu marcher. La vie n'a cessé de la frapper depuis.",
    'inline.jasonDesc': "Jason a grandi parmi les arnaqueurs. Après un passage dans l'armée, il s'est retrouvé dans les Keys.",
    'inline.dec2023': '5 DÉC 2023',
    'inline.may2025': '6 MAI 2025',
    'inline.views': 'vues',
    'inline.summer2026': 'ÉTÉ 2026',
    'inline.pending': 'EN ATTENTE',
    'inline.release': 'SORTIE',
    'inline.nov2026': '19 NOV 2026',
    // CharacterDetail
    'inline.allCharacters': 'Tous les personnages',
    'inline.videoClip': 'Extrait vidéo',
    'inline.biography': 'BIOGRAPHIE',
    'inline.quotes': 'CITATIONS',
    'inline.information': 'Informations',
    'inline.whoIs': 'Qui est {name} dans GTA 6 ?',
    'inline.statsOf': 'Stats de {name}',
    'inline.relationsOf': 'Relations de {name}',
    'inline.quotesOf': 'Citations de {name}',
    'inline.statsNotAvailable': 'Stats non disponibles.',
    'inline.dossierNotAvailable': 'Dossier non disponible.',
    'inline.relatedCharacters': 'Personnages liés',
    'inline.copyrightCharacter': '© Rockstar Games. Toutes les informations proviennent de rockstargames.com/VI. Site fan non-officiel, non affilié à Rockstar Games ou Take-Two Interactive.',
    'inline.viewFullPage': 'VOIR LA PAGE COMPLÈTE DE {name}',
    'inline.playable': 'JOUABLE',
    'inline.characters': 'Personnages',
    'inline.scoreQuote': '"Un coup facile qui tourne mal."',
    'inline.conspiracyQuote': '"Une conspiration criminelle qui s\'étend à travers tout l\'état de Leonida."',
    'inline.duoDesc': '"Forcés de se reposer l\'un sur l\'autre plus que jamais"',
    'inline.boobieEmpireDesc': 'Immobilier + strip club + Only Raw Records',
    'inline.fanTheories': 'Théories de fans',
    'inline.mapComingSoon': 'CARTE BIENTÔT DÉVOILÉE',
    'inline.mapComingSoonDesc': 'La carte officielle de l\'état de Leonida n\'a pas encore été dévoilée par Rockstar Games. Elle sera ajoutée ici dès sa publication.',
  },
  en: {
    // Nav
    'nav.home': 'HOME',
    'nav.story': 'STORY',
    'nav.characters': 'CHARACTERS',
    'nav.vicecity': 'VICE CITY',
    'nav.map': 'MAP',
    'nav.leonida': 'LEONIDA',
    'nav.gameplay': 'GAMEPLAY',
    'nav.about': 'ABOUT',
    'nav.fansite': 'FAN SITE',
    'nav.gallery': 'GALLERY',
    'nav.trailers': 'TRAILERS',
    'nav.buy': 'BUY',

    // Hero
    'hero.eyebrow': 'ROCKSTAR GAMES · 2026',
    'hero.tagline': 'The darkest side of the sunniest place in America.',
    'hero.unofficial': 'UNOFFICIAL FAN ENCYCLOPEDIA',
    'hero.explore': 'EXPLORE THE WIKI',
    'hero.characters': 'VIEW CHARACTERS',
    'hero.scroll': 'SCROLL',

    // Synopsis
    'synopsis.title': 'OFFICIAL SYNOPSIS',
    'synopsis.text': '"Jason and Lucia have always known the deck is stacked against them. But when an easy score goes wrong, they find themselves on the darkest side of the sunniest place in America, in the middle of a criminal conspiracy stretching across the state of Leonida — forced to rely on each other more than ever if they want to make it out alive."',
    'synopsis.credit': '— Official Synopsis, rockstargames.com',
    'synopsis.closing': '"When the sun fades and the neon glows, everyone has something to gain — and more to lose."',

    // Blog
    'blog.subtitle': 'Guides, analysis and news about Grand Theft Auto VI',
    'blog.read': 'READ',
    'blog.morecoming': 'MORE ARTICLES COMING SOON...',

    // Countdown
    'countdown.title': 'RELEASE IN',
    'countdown.days': 'DAYS',
    'countdown.hours': 'HOURS',
    'countdown.minutes': 'MINUTES',
    'countdown.seconds': 'SECONDS',

    // Stats
    'stats.protagonists': 'Playable protagonists',
    'stats.first': 'First female protagonist',
    'stats.characters': 'Confirmed characters',
    'stats.zones': 'Leonida zones',
    'stats.views': 'Trailer 2 views in 24h',

    // Characters
    'characters.title': 'CHARACTERS',
    'characters.meet': 'MEET LEONIDA',
    'characters.all': 'ALL',
    'characters.protagonists': 'PROTAGONISTS',
    'characters.secondary': 'SECONDARY',
    'characters.bio': 'BIO',
    'characters.stats': 'STATS',
    'characters.relations': 'RELATIONS',
    'characters.citations': 'QUOTES',
    'characters.dossier': 'DOSSIER',
    'characters.playable': 'PLAYABLE',

    // Story
    'story.title': 'THE STORY',
    'story.timeline': 'TIMELINE',
    'story.network': 'CHARACTER NETWORK',

    // Locations
    'locations.title': 'VICE CITY & LEONIDA',
    'locations.subtitle': 'The most dangerous state in America',
    'locations.all': 'ALL ZONES',
    'locations.characters': 'CHARACTERS',
    'locations.features': 'FEATURES',

    // Gameplay
    'gameplay.title': 'MASTER VICE CITY',
    'gameplay.dual': 'DUAL PROTAGONIST SYSTEM',
    'gameplay.conspiracy': 'CRIMINAL CONSPIRACY',
    'gameplay.wanted': 'WANTED LEVEL',
    'gameplay.vehicles': 'VEHICLE CLASSES',
    'gameplay.social': 'IN-GAME SOCIAL MEDIA',
    'gameplay.radio': 'RADIO STATIONS',
    'gameplay.speculative': 'SPECULATIVE CONTENT — NOT OFFICIALLY CONFIRMED',

    // Leonida/Lore
    'lore.title': 'THE VICE CITY HERALD',
    'lore.subtitle': 'THE UNOFFICIAL GTA VI ENCYCLOPEDIA',
    'lore.entities': 'OFFICIAL ENTITIES',
    'lore.factions': 'FACTIONS',
    'lore.official': 'OFFICIAL',
    'lore.trailer': 'TRAILER',
    'lore.speculative': 'SPECULATIVE',

    // About
    'about.legal': 'IMPORTANT LEGAL NOTICE',
    'about.unofficial': 'UNOFFICIAL fan wiki',
    'about.notaffiliated': 'NOT affiliated, sponsored, endorsed, or associated',
    'about.title': 'ABOUT THE PROJECT',
    'about.sources': 'SOURCES',
    'about.badges': 'BADGE SYSTEM',

    // Contact
    'nav.contact': 'CONTACT',
    'contact.title': 'CONTACT US',
    'contact.subtitle': 'Have a question, suggestion or request? Feel free to reach out.',
    'contact.email': 'EMAIL',
    'contact.general': 'GENERAL INQUIRIES',
    'contact.generalDesc': 'For any questions about the wiki, our content or the Leonida Wiki project, send us an email. We typically respond within 48 hours.',
    'contact.corrections': 'CORRECTIONS & SUGGESTIONS',
    'contact.correctionsDesc': 'Spotted an error or want to suggest an addition? Let us know the page and the correction needed.',
    'contact.copyright': 'COPYRIGHT',
    'contact.copyrightDesc': 'If you are a rights holder and wish to report content, contact us with details. We will process your request promptly.',

    // Ticker
    'ticker.text': '📡 GTA VI — NOVEMBER 19, 2026 · PS5 & XBOX SERIES X|S · LUCIA CAMINOS & JASON DUVAL — DUAL PROTAGONISTS · VICE CITY & THE STATE OF LEONIDA · UNOFFICIAL FAN SITE · ',

    // Footer
    'footer.disclaimer': 'GTA VI FAN WIKI · NOT AFFILIATED WITH ROCKSTAR GAMES OR TAKE-TWO INTERACTIVE',

    // Eyefind
    'eyefind.title': '[EYEFIND FEED]',
    'eyefind.disclaimer': 'FICTIONAL SOCIAL NETWORK · SATIRE',

    // Timeline
    'timeline.title': 'TRAILER TIMELINE',

    // Inline common
    'inline.chapter': 'CHAPTER',
    'inline.notRevealed': 'NOT REVEALED',
    'inline.availableAtRelease': 'Available at game release · Nov 19, 2026',
    'inline.exploreMap': 'Explore the map →',
    'inline.officialContent': 'OFFICIAL CONTENT',
    'inline.gallery': 'GALLERY',
    'inline.galleryDesc': 'Discover the official GTA VI artworks released by Rockstar Games.',
    'inline.filterAll': 'All',
    'inline.filterProtagonists': 'Protagonists',
    'inline.filterCharacters': 'Characters',
    'inline.filterScenery': 'Scenery',
    'inline.copyrightFull': '© Rockstar Games. All artworks are property of Rockstar Games and Take-Two Interactive. Unofficial fan site.',
    'inline.officialTrailers': 'OFFICIAL TRAILERS',
    'inline.trailersDesc': 'All official Grand Theft Auto VI trailers by Rockstar Games.',
    'inline.home': 'Home',
    'inline.trailers': 'Trailers',
    'inline.copyrightTrailers': '© Rockstar Games. Official videos from rockstargames.com. Unofficial fan site.',
    'inline.thisIsAn': 'This site is an',
    'inline.dedicatedTo': 'dedicated to Grand Theft Auto VI.',
    'inline.allNamesProperty': 'Grand Theft Auto VI, GTA VI, Vice City, Leonida, and all associated names are the exclusive property of Rockstar Games and Take-Two Interactive Software, Inc.',
    'inline.thisIsNot': 'This site is',
    'inline.inAnyWay': 'in any way with Rockstar Games or Take-Two Interactive.',
    'inline.aboutProject': 'This fan wiki was created by Grand Theft Auto franchise enthusiasts while awaiting the release of GTA VI, scheduled for November 19, 2026.',
    'inline.officialSite': 'Official site',
    'inline.officialSources': 'Official Rockstar sources',
    'inline.trailerElements': 'Trailer elements',
    'inline.communityTheories': 'Community theories',
    'inline.closeCombat': 'Close combat · Survivalist',
    'inline.militaryTraining': 'Military training · Marksman',
    'inline.socialMediaGameplay': 'Player actions can go viral. Social media consequences affect gameplay.',
    'inline.master': 'MASTER ',
    'inline.quietDay': 'Quiet day',
    'inline.localPatrol': 'Local patrol',
    'inline.vcpdPursuit': 'VCPD pursuit',
    'inline.specialUnits': 'Special units',
    'inline.federalIntervention': 'Federal intervention',
    'inline.totalMobilization': 'Total mobilization',
    'inline.theDuo': 'THE DUO',
    'inline.boobieEmpire': "BOOBIE'S EMPIRE",
    'inline.keysNetwork': 'THE KEYS NETWORK',
    'inline.raulCrew': "RAUL'S CREW",
    'inline.drugSmuggling': 'Drug smuggling, Keys-based',
    'inline.heistCrew': 'Professional heist crew',
    'inline.luciasPrison': "Lucia's prison. Key location.",
    'inline.smugglingCover': "Cover for smuggling. Jason's residence.",
    'inline.stateOfLeonida': 'THE STATE OF LEONIDA',
    'inline.darkestSide': 'The darkest side of the sunniest place in America.',
    'inline.penitentiary': 'Leonida Penitentiary. Freedom. The plan.',
    'inline.theKeys': 'The Keys. The Army left behind. Local drug trade.',
    'inline.scoreGoneWrong': 'THE SCORE GONE WRONG',
    'inline.leonidaConspiracy': 'THE LEONIDA CONSPIRACY',
    'inline.luciaDesc': 'Her father taught her to fight as soon as she could walk. Life has been coming at her swinging ever since.',
    'inline.jasonDesc': 'Jason grew up around grifters and crooks. After a stint in the Army, he found himself in the Keys.',
    'inline.dec2023': 'DEC 5, 2023',
    'inline.may2025': 'MAY 6, 2025',
    'inline.views': 'views',
    'inline.summer2026': 'SUMMER 2026',
    'inline.pending': 'PENDING',
    'inline.release': 'RELEASE',
    'inline.nov2026': 'NOV 19, 2026',
    'inline.allCharacters': 'All characters',
    'inline.videoClip': 'Video Clip',
    'inline.biography': 'BIOGRAPHY',
    'inline.quotes': 'QUOTES',
    'inline.information': 'Information',
    'inline.whoIs': 'Who is {name} in GTA 6?',
    'inline.statsOf': "{name}'s Stats",
    'inline.relationsOf': "{name}'s Relations",
    'inline.quotesOf': "{name}'s Quotes",
    'inline.statsNotAvailable': 'Stats not available.',
    'inline.dossierNotAvailable': 'Dossier not available.',
    'inline.relatedCharacters': 'Related Characters',
    'inline.copyrightCharacter': '© Rockstar Games. All information sourced from rockstargames.com/VI. Unofficial fan site, not affiliated with Rockstar Games or Take-Two Interactive.',
    'inline.viewFullPage': "VIEW {name}'S FULL PAGE",
    'inline.playable': 'PLAYABLE',
    'inline.characters': 'Characters',
    'inline.scoreQuote': '"An easy score goes wrong."',
    'inline.conspiracyQuote': '"A criminal conspiracy stretching across the state of Leonida."',
    'inline.duoDesc': '"Forced to rely on each other more than ever"',
    'inline.boobieEmpireDesc': 'Real estate + strip club + Only Raw Records',
    'inline.fanTheories': 'Fan theories',
    'inline.mapComingSoon': 'MAP COMING SOON',
    'inline.mapComingSoonDesc': 'The official map of the state of Leonida has not yet been revealed by Rockstar Games. It will be added here as soon as it is published.',
  },
  es: {
    // Nav
    'nav.home': 'INICIO',
    'nav.story': 'HISTORIA',
    'nav.characters': 'PERSONAJES',
    'nav.vicecity': 'VICE CITY',
    'nav.map': 'MAPA',
    'nav.leonida': 'LEONIDA',
    'nav.gameplay': 'GAMEPLAY',
    'nav.about': 'ACERCA DE',
    'nav.fansite': 'FAN SITE',
    'nav.gallery': 'GALERÍA',
    'nav.trailers': 'TRÁILERS',
    'nav.buy': 'COMPRAR',

    // Hero
    'hero.eyebrow': 'ROCKSTAR GAMES · 2026',
    'hero.tagline': 'El lado más oscuro del lugar más soleado de América.',
    'hero.unofficial': 'ENCICLOPEDIA FAN NO OFICIAL',
    'hero.explore': 'EXPLORAR LA WIKI',
    'hero.characters': 'VER PERSONAJES',
    'hero.scroll': 'DESPLAZAR',

    // Synopsis
    'synopsis.title': 'SINOPSIS OFICIAL',
    'synopsis.text': '"Jason y Lucia siempre supieron que las cartas estaban marcadas en su contra. Pero cuando un golpe fácil sale mal, se encuentran en el lado más oscuro del lugar más soleado de América, en medio de una conspiración criminal que se extiende por el estado de Leonida — obligados a confiar el uno en el otro más que nunca si quieren salir con vida."',
    'synopsis.credit': '— Sinopsis Oficial, rockstargames.com',
    'synopsis.closing': '"Cuando el sol se oculta y el neón se enciende, todos tienen algo que ganar — y mucho más que perder."',

    // Blog
    'blog.subtitle': 'Guías, análisis y noticias sobre Grand Theft Auto VI',
    'blog.read': 'LEER',
    'blog.morecoming': 'MÁS ARTÍCULOS PRÓXIMAMENTE...',

    // Countdown
    'countdown.title': 'LANZAMIENTO EN',
    'countdown.days': 'DÍAS',
    'countdown.hours': 'HORAS',
    'countdown.minutes': 'MINUTOS',
    'countdown.seconds': 'SEGUNDOS',

    // Stats
    'stats.protagonists': 'Protagonistas jugables',
    'stats.first': 'Protagonista femenina',
    'stats.characters': 'Personajes confirmados',
    'stats.zones': 'Zonas de Leonida',
    'stats.views': 'Vistas Tráiler 2 en 24h',

    // Characters
    'characters.title': 'PERSONAJES',
    'characters.meet': 'CONOCE LEONIDA',
    'characters.all': 'TODOS',
    'characters.protagonists': 'PROTAGONISTAS',
    'characters.secondary': 'SECUNDARIOS',
    'characters.bio': 'BIO',
    'characters.stats': 'STATS',
    'characters.relations': 'RELACIONES',
    'characters.citations': 'CITAS',
    'characters.dossier': 'EXPEDIENTE',
    'characters.playable': 'JUGABLE',

    // Story
    'story.title': 'LA HISTORIA',
    'story.timeline': 'CRONOLOGÍA',
    'story.network': 'RED DE PERSONAJES',

    // Locations
    'locations.title': 'VICE CITY & LEONIDA',
    'locations.subtitle': 'El estado más peligroso de América',
    'locations.all': 'TODAS LAS ZONAS',
    'locations.characters': 'PERSONAJES',
    'locations.features': 'CARACTERÍSTICAS',

    // Gameplay
    'gameplay.title': 'DOMINA VICE CITY',
    'gameplay.dual': 'SISTEMA DUAL DE PROTAGONISTAS',
    'gameplay.conspiracy': 'CONSPIRACIÓN CRIMINAL',
    'gameplay.wanted': 'NIVEL DE BÚSQUEDA',
    'gameplay.vehicles': 'CLASES DE VEHÍCULOS',
    'gameplay.social': 'REDES SOCIALES IN-GAME',
    'gameplay.radio': 'EMISORAS DE RADIO',
    'gameplay.speculative': 'CONTENIDO ESPECULATIVO — NO CONFIRMADO OFICIALMENTE',

    // Leonida/Lore
    'lore.title': 'THE VICE CITY HERALD',
    'lore.subtitle': 'LA ENCICLOPEDIA NO OFICIAL DE GTA VI',
    'lore.entities': 'ENTIDADES OFICIALES',
    'lore.factions': 'FACCIONES',
    'lore.official': 'OFICIAL',
    'lore.trailer': 'TRÁILER',
    'lore.speculative': 'ESPECULATIVO',

    // About
    'about.legal': 'AVISO LEGAL IMPORTANTE',
    'about.unofficial': 'wiki fan NO OFICIAL',
    'about.notaffiliated': 'NO afiliado, patrocinado, respaldado ni asociado',
    'about.title': 'ACERCA DEL PROYECTO',
    'about.sources': 'FUENTES',
    'about.badges': 'SISTEMA DE INSIGNIAS',

    // Contact
    'nav.contact': 'CONTACTO',
    'contact.title': 'CONTÁCTENOS',
    'contact.subtitle': '¿Tiene una pregunta, sugerencia o solicitud? No dude en escribirnos.',
    'contact.email': 'EMAIL',
    'contact.general': 'CONSULTAS GENERALES',
    'contact.generalDesc': 'Para cualquier pregunta sobre el wiki, nuestro contenido o el proyecto Leonida Wiki, envíenos un email. Normalmente respondemos en 48 horas.',
    'contact.corrections': 'CORRECCIONES Y SUGERENCIAS',
    'contact.correctionsDesc': '¿Ha encontrado un error o desea sugerir un contenido? Indíquenos la página y la corrección necesaria.',
    'contact.copyright': 'DERECHOS DE AUTOR',
    'contact.copyrightDesc': 'Si es titular de derechos y desea reportar un contenido, contáctenos con los detalles. Procesaremos su solicitud con prontitud.',

    // Ticker
    'ticker.text': '📡 GTA VI — 19 DE NOVIEMBRE DE 2026 · PS5 & XBOX SERIES X|S · LUCIA CAMINOS & JASON DUVAL — DUO PROTAGONISTA · VICE CITY Y EL ESTADO DE LEONIDA · SITIO FAN NO OFICIAL · ',

    // Footer
    'footer.disclaimer': 'GTA VI FAN WIKI · NO AFILIADO A ROCKSTAR GAMES NI TAKE-TWO INTERACTIVE',

    // Eyefind
    'eyefind.title': '[EYEFIND FEED]',
    'eyefind.disclaimer': 'RED SOCIAL FICTICIA · SÁTIRA',

    // Timeline
    'timeline.title': 'CRONOLOGÍA DE TRÁILERS',

    // Inline
    'inline.chapter': 'CAPÍTULO',
    'inline.notRevealed': 'NO REVELADO',
    'inline.availableAtRelease': 'Disponible en el lanzamiento · 19 Nov 2026',
    'inline.exploreMap': 'Explorar el mapa →',
    'inline.officialContent': 'CONTENIDO OFICIAL',
    'inline.gallery': 'GALERÍA',
    'inline.galleryDesc': 'Descubre los artworks oficiales de GTA VI publicados por Rockstar Games.',
    'inline.filterAll': 'Todo',
    'inline.filterProtagonists': 'Protagonistas',
    'inline.filterCharacters': 'Personajes',
    'inline.filterScenery': 'Escenarios',
    'inline.copyrightFull': '© Rockstar Games. Todos los artworks son propiedad de Rockstar Games y Take-Two Interactive. Sitio fan no oficial.',
    'inline.officialTrailers': 'TRÁILERS OFICIALES',
    'inline.trailersDesc': 'Todos los tráilers oficiales de Grand Theft Auto VI por Rockstar Games.',
    'inline.home': 'Inicio',
    'inline.trailers': 'Tráilers',
    'inline.copyrightTrailers': '© Rockstar Games. Vídeos oficiales de rockstargames.com. Sitio fan no oficial.',
    'inline.thisIsAn': 'Este sitio es una',
    'inline.dedicatedTo': 'dedicada a Grand Theft Auto VI.',
    'inline.allNamesProperty': 'Grand Theft Auto VI, GTA VI, Vice City, Leonida y todos los nombres asociados son propiedad exclusiva de Rockstar Games y Take-Two Interactive Software, Inc.',
    'inline.thisIsNot': 'Este sitio',
    'inline.inAnyWay': 'de ninguna manera a Rockstar Games o Take-Two Interactive.',
    'inline.aboutProject': 'Esta wiki fan fue creada por entusiastas de la franquicia Grand Theft Auto mientras esperan el lanzamiento de GTA VI, previsto para el 19 de noviembre de 2026.',
    'inline.officialSite': 'Sitio oficial',
    'inline.officialSources': 'Fuentes oficiales de Rockstar',
    'inline.trailerElements': 'Elementos de tráilers',
    'inline.communityTheories': 'Teorías de la comunidad',
    'inline.closeCombat': 'Combate cuerpo a cuerpo · Superviviente',
    'inline.militaryTraining': 'Entrenamiento militar · Tirador',
    'inline.socialMediaGameplay': 'Las acciones del jugador pueden volverse virales. Las consecuencias en redes sociales afectan el gameplay.',
    'inline.master': 'DOMINA ',
    'inline.quietDay': 'Día tranquilo',
    'inline.localPatrol': 'Patrulla local',
    'inline.vcpdPursuit': 'Persecución VCPD',
    'inline.specialUnits': 'Unidades especiales',
    'inline.federalIntervention': 'Intervención federal',
    'inline.totalMobilization': 'Movilización total',
    'inline.theDuo': 'EL DÚO',
    'inline.boobieEmpire': 'EL IMPERIO DE BOOBIE',
    'inline.keysNetwork': 'LA RED DE LAS KEYS',
    'inline.raulCrew': 'EL EQUIPO DE RAUL',
    'inline.drugSmuggling': 'Tráfico de drogas, basado en las Keys',
    'inline.heistCrew': 'Equipo de atracos profesional',
    'inline.luciasPrison': 'Prisión de Lucia. Lugar clave.',
    'inline.smugglingCover': 'Cobertura para el tráfico. Residencia de Jason.',
    'inline.stateOfLeonida': 'EL ESTADO DE LEONIDA',
    'inline.darkestSide': 'El lado más oscuro del lugar más soleado de América.',
    'inline.penitentiary': 'La Penitenciaría de Leonida. La libertad. El plan.',
    'inline.theKeys': 'Las Keys. El ejército abandonado. El tráfico local.',
    'inline.scoreGoneWrong': 'EL GOLPE QUE SALE MAL',
    'inline.leonidaConspiracy': 'LA CONSPIRACIÓN DE LEONIDA',
    'inline.luciaDesc': 'Su padre le enseñó a pelear desde que podía caminar. La vida no ha dejado de golpearla desde entonces.',
    'inline.jasonDesc': 'Jason creció entre estafadores y criminales. Tras un paso por el ejército, terminó en las Keys.',
    'inline.dec2023': '5 DIC 2023',
    'inline.may2025': '6 MAY 2025',
    'inline.views': 'vistas',
    'inline.summer2026': 'VERANO 2026',
    'inline.pending': 'PENDIENTE',
    'inline.release': 'LANZAMIENTO',
    'inline.nov2026': '19 NOV 2026',
    'inline.allCharacters': 'Todos los personajes',
    'inline.videoClip': 'Vídeo',
    'inline.biography': 'BIOGRAFÍA',
    'inline.quotes': 'CITAS',
    'inline.information': 'Información',
    'inline.whoIs': '¿Quién es {name} en GTA 6?',
    'inline.statsOf': 'Stats de {name}',
    'inline.relationsOf': 'Relaciones de {name}',
    'inline.quotesOf': 'Citas de {name}',
    'inline.statsNotAvailable': 'Stats no disponibles.',
    'inline.dossierNotAvailable': 'Expediente no disponible.',
    'inline.relatedCharacters': 'Personajes relacionados',
    'inline.copyrightCharacter': '© Rockstar Games. Toda la información proviene de rockstargames.com/VI. Sitio fan no oficial, no afiliado a Rockstar Games ni Take-Two Interactive.',
    'inline.viewFullPage': 'VER LA PÁGINA COMPLETA DE {name}',
    'inline.playable': 'JUGABLE',
    'inline.characters': 'Personajes',
    'inline.scoreQuote': '"Un golpe fácil que sale mal."',
    'inline.conspiracyQuote': '"Una conspiración criminal que se extiende por todo el estado de Leonida."',
    'inline.duoDesc': '"Obligados a confiar el uno en el otro más que nunca"',
    'inline.boobieEmpireDesc': 'Inmobiliaria + club de striptease + Only Raw Records',
    'inline.fanTheories': 'Teorías de fans',
    'inline.mapComingSoon': 'MAPA PRÓXIMAMENTE',
    'inline.mapComingSoonDesc': 'El mapa oficial del estado de Leonida aún no ha sido revelado por Rockstar Games. Se añadirá aquí en cuanto sea publicado.',
  },
  it: {
    // Nav
    'nav.home': 'HOME',
    'nav.story': 'STORIA',
    'nav.characters': 'PERSONAGGI',
    'nav.vicecity': 'VICE CITY',
    'nav.map': 'MAPPA',
    'nav.leonida': 'LEONIDA',
    'nav.gameplay': 'GAMEPLAY',
    'nav.about': 'INFO',
    'nav.fansite': 'FAN SITE',
    'nav.gallery': 'GALLERIA',
    'nav.trailers': 'TRAILER',
    'nav.buy': 'ACQUISTA',

    // Hero
    'hero.eyebrow': 'ROCKSTAR GAMES · 2026',
    'hero.tagline': 'Il lato più oscuro del posto più soleggiato d\'America.',
    'hero.unofficial': 'ENCICLOPEDIA FAN NON UFFICIALE',
    'hero.explore': 'ESPLORA IL WIKI',
    'hero.characters': 'VEDI PERSONAGGI',
    'hero.scroll': 'SCORRI',

    // Synopsis
    'synopsis.title': 'SINOSSI UFFICIALE',
    'synopsis.text': '"Jason e Lucia hanno sempre saputo che le carte erano truccate contro di loro. Ma quando un colpo facile va storto, si ritrovano nel lato più oscuro del posto più soleggiato d\'America, nel mezzo di una cospirazione criminale che si estende attraverso lo stato di Leonida — costretti a fare affidamento l\'uno sull\'altra più che mai se vogliono uscirne vivi."',
    'synopsis.credit': '— Sinossi Ufficiale, rockstargames.com',
    'synopsis.closing': '"Quando il sole tramonta e il neon si accende, tutti hanno qualcosa da guadagnare — e ancora di più da perdere."',

    // Blog
    'blog.subtitle': 'Guide, analisi e notizie su Grand Theft Auto VI',
    'blog.read': 'LEGGI',
    'blog.morecoming': 'ALTRI ARTICOLI IN ARRIVO...',

    // Countdown
    'countdown.title': 'USCITA TRA',
    'countdown.days': 'GIORNI',
    'countdown.hours': 'ORE',
    'countdown.minutes': 'MINUTI',
    'countdown.seconds': 'SECONDI',

    // Stats
    'stats.protagonists': 'Protagonisti giocabili',
    'stats.first': 'Protagonista femminile',
    'stats.characters': 'Personaggi confermati',
    'stats.zones': 'Zone di Leonida',
    'stats.views': 'Visualizzazioni Trailer 2 in 24h',

    // Characters
    'characters.title': 'PERSONAGGI',
    'characters.meet': 'SCOPRI LEONIDA',
    'characters.all': 'TUTTI',
    'characters.protagonists': 'PROTAGONISTI',
    'characters.secondary': 'SECONDARI',
    'characters.bio': 'BIO',
    'characters.stats': 'STATS',
    'characters.relations': 'RELAZIONI',
    'characters.citations': 'CITAZIONI',
    'characters.dossier': 'DOSSIER',
    'characters.playable': 'GIOCABILE',

    // Story
    'story.title': 'LA STORIA',
    'story.timeline': 'CRONOLOGIA',
    'story.network': 'RETE DEI PERSONAGGI',

    // Locations
    'locations.title': 'VICE CITY & LEONIDA',
    'locations.subtitle': 'Lo stato più pericoloso d\'America',
    'locations.all': 'TUTTE LE ZONE',
    'locations.characters': 'PERSONAGGI',
    'locations.features': 'CARATTERISTICHE',

    // Gameplay
    'gameplay.title': 'PADRONEGGIA VICE CITY',
    'gameplay.dual': 'SISTEMA DOPPIO PROTAGONISTA',
    'gameplay.conspiracy': 'COSPIRAZIONE CRIMINALE',
    'gameplay.wanted': 'LIVELLO DI RICERCA',
    'gameplay.vehicles': 'CLASSI DI VEICOLI',
    'gameplay.social': 'SOCIAL MEDIA IN-GAME',
    'gameplay.radio': 'STAZIONI RADIO',
    'gameplay.speculative': 'CONTENUTO SPECULATIVO — NON CONFERMATO UFFICIALMENTE',

    // Leonida/Lore
    'lore.title': 'THE VICE CITY HERALD',
    'lore.subtitle': 'L\'ENCICLOPEDIA NON UFFICIALE DI GTA VI',
    'lore.entities': 'ENTITÀ UFFICIALI',
    'lore.factions': 'FAZIONI',
    'lore.official': 'UFFICIALE',
    'lore.trailer': 'TRAILER',
    'lore.speculative': 'SPECULATIVO',

    // About
    'about.legal': 'AVVISO LEGALE IMPORTANTE',
    'about.unofficial': 'wiki fan NON UFFICIALE',
    'about.notaffiliated': 'NON affiliato, sponsorizzato, approvato né associato',
    'about.title': 'INFORMAZIONI SUL PROGETTO',
    'about.sources': 'FONTI',
    'about.badges': 'SISTEMA DI BADGE',

    // Contact
    'nav.contact': 'CONTATTO',
    'contact.title': 'CONTATTACI',
    'contact.subtitle': 'Hai una domanda, un suggerimento o una richiesta? Non esitare a scriverci.',
    'contact.email': 'EMAIL',
    'contact.general': 'RICHIESTE GENERALI',
    'contact.generalDesc': 'Per qualsiasi domanda sul wiki, i nostri contenuti o il progetto Leonida Wiki, inviaci un\'email. Rispondiamo generalmente entro 48 ore.',
    'contact.corrections': 'CORREZIONI E SUGGERIMENTI',
    'contact.correctionsDesc': 'Hai trovato un errore o vuoi suggerire un\'aggiunta? Indicaci la pagina e la correzione necessaria.',
    'contact.copyright': 'DIRITTI D\'AUTORE',
    'contact.copyrightDesc': 'Se sei titolare di diritti e desideri segnalare un contenuto, contattaci con i dettagli. Processeremo la tua richiesta tempestivamente.',

    // Ticker
    'ticker.text': '📡 GTA VI — 19 NOVEMBRE 2026 · PS5 & XBOX SERIES X|S · LUCIA CAMINOS & JASON DUVAL — DOPPIO PROTAGONISTA · VICE CITY E LO STATO DI LEONIDA · SITO FAN NON UFFICIALE · ',

    // Footer
    'footer.disclaimer': 'GTA VI FAN WIKI · NON AFFILIATO A ROCKSTAR GAMES O TAKE-TWO INTERACTIVE',

    // Eyefind
    'eyefind.title': '[EYEFIND FEED]',
    'eyefind.disclaimer': 'SOCIAL NETWORK FITTIZIO · SATIRA',

    // Timeline
    'timeline.title': 'CRONOLOGIA DEI TRAILER',

    // Inline
    'inline.chapter': 'CAPITOLO',
    'inline.notRevealed': 'NON RIVELATO',
    'inline.availableAtRelease': 'Disponibile all\'uscita del gioco · 19 Nov 2026',
    'inline.exploreMap': 'Esplora la mappa →',
    'inline.officialContent': 'CONTENUTO UFFICIALE',
    'inline.gallery': 'GALLERIA',
    'inline.galleryDesc': 'Scopri gli artwork ufficiali di GTA VI pubblicati da Rockstar Games.',
    'inline.filterAll': 'Tutto',
    'inline.filterProtagonists': 'Protagonisti',
    'inline.filterCharacters': 'Personaggi',
    'inline.filterScenery': 'Scenari',
    'inline.copyrightFull': '© Rockstar Games. Tutti gli artwork sono proprietà di Rockstar Games e Take-Two Interactive. Sito fan non ufficiale.',
    'inline.officialTrailers': 'TRAILER UFFICIALI',
    'inline.trailersDesc': 'Tutti i trailer ufficiali di Grand Theft Auto VI di Rockstar Games.',
    'inline.home': 'Home',
    'inline.trailers': 'Trailer',
    'inline.copyrightTrailers': '© Rockstar Games. Video ufficiali da rockstargames.com. Sito fan non ufficiale.',
    'inline.thisIsAn': 'Questo sito è una',
    'inline.dedicatedTo': 'dedicata a Grand Theft Auto VI.',
    'inline.allNamesProperty': 'Grand Theft Auto VI, GTA VI, Vice City, Leonida e tutti i nomi associati sono proprietà esclusiva di Rockstar Games e Take-Two Interactive Software, Inc.',
    'inline.thisIsNot': 'Questo sito',
    'inline.inAnyWay': 'in alcun modo a Rockstar Games o Take-Two Interactive.',
    'inline.aboutProject': 'Questa wiki fan è stata creata da appassionati della serie Grand Theft Auto in attesa dell\'uscita di GTA VI, prevista per il 19 novembre 2026.',
    'inline.officialSite': 'Sito ufficiale',
    'inline.officialSources': 'Fonti ufficiali Rockstar',
    'inline.trailerElements': 'Elementi dai trailer',
    'inline.communityTheories': 'Teorie della community',
    'inline.closeCombat': 'Combattimento ravvicinato · Sopravvivenza',
    'inline.militaryTraining': 'Addestramento militare · Tiratore',
    'inline.socialMediaGameplay': 'Le azioni del giocatore possono diventare virali. Le conseguenze sui social media influenzano il gameplay.',
    'inline.master': 'PADRONEGGIA ',
    'inline.quietDay': 'Giornata tranquilla',
    'inline.localPatrol': 'Pattuglia locale',
    'inline.vcpdPursuit': 'Inseguimento VCPD',
    'inline.specialUnits': 'Unità speciali',
    'inline.federalIntervention': 'Intervento federale',
    'inline.totalMobilization': 'Mobilitazione totale',
    'inline.theDuo': 'IL DUO',
    'inline.boobieEmpire': "L'IMPERO DI BOOBIE",
    'inline.keysNetwork': 'LA RETE DELLE KEYS',
    'inline.raulCrew': 'LA SQUADRA DI RAUL',
    'inline.drugSmuggling': 'Traffico di droga, basato nelle Keys',
    'inline.heistCrew': 'Squadra di rapine professionista',
    'inline.luciasPrison': 'Prigione di Lucia. Luogo chiave.',
    'inline.smugglingCover': 'Copertura per il traffico. Residenza di Jason.',
    'inline.stateOfLeonida': 'LO STATO DI LEONIDA',
    'inline.darkestSide': 'Il lato più oscuro del posto più soleggiato d\'America.',
    'inline.penitentiary': 'Il Penitenziario di Leonida. La libertà. Il piano.',
    'inline.theKeys': 'Le Keys. L\'esercito abbandonato. Il traffico locale.',
    'inline.scoreGoneWrong': 'IL COLPO CHE VA STORTO',
    'inline.leonidaConspiracy': 'LA COSPIRAZIONE DI LEONIDA',
    'inline.luciaDesc': 'Suo padre le ha insegnato a combattere da quando sapeva camminare. La vita non ha mai smesso di colpirla.',
    'inline.jasonDesc': 'Jason è cresciuto tra truffatori e criminali. Dopo un periodo nell\'esercito, si è ritrovato nelle Keys.',
    'inline.dec2023': '5 DIC 2023',
    'inline.may2025': '6 MAG 2025',
    'inline.views': 'visualizzazioni',
    'inline.summer2026': 'ESTATE 2026',
    'inline.pending': 'IN ATTESA',
    'inline.release': 'USCITA',
    'inline.nov2026': '19 NOV 2026',
    'inline.allCharacters': 'Tutti i personaggi',
    'inline.videoClip': 'Video',
    'inline.biography': 'BIOGRAFIA',
    'inline.quotes': 'CITAZIONI',
    'inline.information': 'Informazioni',
    'inline.whoIs': 'Chi è {name} in GTA 6?',
    'inline.statsOf': 'Stats di {name}',
    'inline.relationsOf': 'Relazioni di {name}',
    'inline.quotesOf': 'Citazioni di {name}',
    'inline.statsNotAvailable': 'Stats non disponibili.',
    'inline.dossierNotAvailable': 'Dossier non disponibile.',
    'inline.relatedCharacters': 'Personaggi correlati',
    'inline.copyrightCharacter': '© Rockstar Games. Tutte le informazioni provengono da rockstargames.com/VI. Sito fan non ufficiale, non affiliato a Rockstar Games o Take-Two Interactive.',
    'inline.viewFullPage': 'VEDI LA PAGINA COMPLETA DI {name}',
    'inline.playable': 'GIOCABILE',
    'inline.characters': 'Personaggi',
    'inline.scoreQuote': '"Un colpo facile che va storto."',
    'inline.conspiracyQuote': '"Una cospirazione criminale che si estende attraverso lo stato di Leonida."',
    'inline.duoDesc': '"Costretti a fare affidamento l\'uno sull\'altra più che mai"',
    'inline.boobieEmpireDesc': 'Immobiliare + strip club + Only Raw Records',
    'inline.fanTheories': 'Teorie dei fan',
    'inline.mapComingSoon': 'MAPPA IN ARRIVO',
    'inline.mapComingSoonDesc': 'La mappa ufficiale dello stato di Leonida non è ancora stata rivelata da Rockstar Games. Sarà aggiunta qui non appena pubblicata.',
  },
};

/** Translate a record keyed by language */
export function tr<T>(map: Partial<Record<Lang, T>>, lang: Lang): T {
  return (map[lang] || map['en'] || map['fr'])!;
}

/** Hook matching the original useLanguage() API */
export function useGtaI18n(locale: string) {
  const lang = (['fr', 'en', 'es', 'it'].includes(locale) ? locale : 'en') as Lang;

  const t = useMemo(() => {
    return (key: string): string => {
      return translations[lang]?.[key] || translations['en']?.[key] || key;
    };
  }, [lang]);

  return { t, lang, tr: <T>(map: Partial<Record<Lang, T>>) => tr(map, lang) };
}

export { translations };
