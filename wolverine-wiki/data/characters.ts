import type { Translations } from '@/wolverine-wiki/context/I18nContext';

export interface CharacterAbility {
  name: Translations;
  description: Translations;
  type: 'PHYSICAL' | 'MUTANT' | 'WEAPON';
  level: number;
}

export interface CharacterQuote {
  text: Translations;
  context: Translations;
}

export interface CharacterRelation {
  characterId: string;
  type: 'ALLY' | 'RIVAL' | 'MENTOR' | 'UNKNOWN';
  description: Translations;
}

export interface Character {
  id: string;
  name: string;
  role: Translations;
  faction: string;
  origin: Translations;
  weapon: Translations;
  affiliation: Translations;
  status: Translations;
  playable: boolean;
  type: 'PLAYABLE' | 'COMPANION' | 'NPC';
  colorTheme: string;
  bio: Translations;
  signatureQuote: Translations;
  strength: number;
  speed: number;
  magic: number;
  weapons: { name: Translations; mastery: number }[];
  combatStyle: Translations;
  abilities: CharacterAbility[];
  quotes: CharacterQuote[];
  relations: CharacterRelation[];
  loreEntries: string[];
  image?: string;
}

export const characters: Character[] = [
  {
    id: 'logan',
    name: 'Logan / Wolverine',
    role: { fr: 'Mutant / Anti-héros', en: 'Mutant / Anti-hero' },
    faction: 'X-Men',
    origin: { fr: 'Alberta, Canada', en: 'Alberta, Canada' },
    weapon: { fr: "Griffes d'adamantium", en: 'Adamantium Claws' },
    affiliation: { fr: 'X-Men / Ancien Weapon X', en: 'X-Men / Former Weapon X' },
    status: { fr: 'Actif', en: 'Active' },
    playable: true,
    type: 'PLAYABLE',
    colorTheme: '#EAB308',
    bio: {
      fr: "Né James Howlett mais connu sous le nom de Logan, Wolverine est un mutant dont le facteur guérisseur lui confère une longévité extraordinaire et la capacité de survivre à presque toutes les blessures. Cobaye du programme Weapon X, son squelette a été recouvert d'adamantium indestructible et ses griffes osseuses naturelles sont devenues des lames capables de trancher n'importe quel matériau.\n\nHanté par des décennies de souvenirs fragmentés et manipulés, Logan parcourt le monde entre missions pour les X-Men et quête personnelle de vérité. Sous son extérieur brutal se cache un homme déchiré entre sa nature animale — la Rage du Berserker — et son désir de rédemption.",
      en: "Born James Howlett but known as Logan, Wolverine is a mutant whose healing factor grants him extraordinary longevity and the ability to survive nearly any wound. A test subject of the Weapon X program, his skeleton was bonded with indestructible adamantium and his natural bone claws became blades capable of cutting through any material.\n\nHaunted by decades of fragmented and manipulated memories, Logan roams between X-Men missions and his personal quest for truth. Beneath his brutal exterior lies a man torn between his animal nature — the Berserker Rage — and his desire for redemption.",
    },
    signatureQuote: { fr: "Je suis le meilleur dans ce que je fais. Mais ce que je fais n'est pas très joli.", en: "I'm the best there is at what I do. But what I do best isn't very nice." },
    strength: 90,
    speed: 75,
    magic: 10,
    weapons: [
      { name: { fr: "Griffes d'adamantium", en: 'Adamantium Claws' }, mastery: 100 },
      { name: { fr: 'Combat à mains nues', en: 'Hand-to-hand Combat' }, mastery: 95 },
      { name: { fr: 'Katana', en: 'Katana' }, mastery: 70 },
    ],
    combatStyle: {
      fr: "Logan est un combattant féroce au corps-à-corps qui utilise ses griffes d'adamantium rétractables comme armes principales. Son facteur guérisseur lui permet d'adopter un style agressif et sans retenue, se lançant dans la mêlée sans crainte des blessures. En mode Berserker, ses attaques deviennent plus rapides et plus dévastatrices, mais au prix de son contrôle.",
      en: "Logan is a ferocious close-quarters combatant who uses his retractable adamantium claws as primary weapons. His healing factor enables an aggressive, uninhibited fighting style, throwing himself into the fray without fear of injury. In Berserker mode, his attacks become faster and more devastating, but at the cost of control.",
    },
    abilities: [
      { name: { fr: 'Rage du Berserker', en: 'Berserker Rage' }, description: { fr: "Déchaîne la nature animale de Logan, augmentant vitesse et dégâts.", en: "Unleashes Logan's animal nature, boosting speed and damage." }, type: 'MUTANT', level: 3 },
      { name: { fr: 'Facteur Guérisseur', en: 'Healing Factor' }, description: { fr: 'Régénération en temps réel qui restaure la santé progressivement.', en: 'Real-time regeneration that gradually restores health.' }, type: 'MUTANT', level: 3 },
      { name: { fr: 'Sens Surdéveloppés', en: 'Feral Senses' }, description: { fr: 'Détecte les ennemis à travers les murs et piste les odeurs.', en: 'Detects enemies through walls and tracks scents.' }, type: 'MUTANT', level: 2 },
      { name: { fr: "Frappe d'Adamantium", en: 'Adamantium Strike' }, description: { fr: 'Attaque lourde avec les griffes qui traverse les défenses ennemies.', en: 'Heavy claw attack that pierces enemy defenses.' }, type: 'WEAPON', level: 2 },
    ],
    quotes: [
      { text: { fr: "Je suis le meilleur dans ce que je fais.", en: "I'm the best there is at what I do." }, context: { fr: 'Citation emblématique', en: 'Iconic quote' } },
      { text: { fr: "Ne m'appelle pas James.", en: "Don't call me James." }, context: { fr: 'Quand on mentionne son vrai nom', en: 'When his real name is mentioned' } },
      { text: { fr: "Les griffes, c'est pas un choix. C'est ce que je suis.", en: "The claws aren't a choice. They're what I am." }, context: { fr: 'Réflexion personnelle', en: 'Personal reflection' } },
    ],
    relations: [
      { characterId: 'mystique', type: 'RIVAL', description: { fr: "Relation complexe mêlant manipulation et confrontation.", en: 'Complex relationship mixing manipulation and confrontation.' } },
      { characterId: 'omega-red', type: 'RIVAL', description: { fr: 'Ennemi mortel lié au programme Weapon X.', en: 'Deadly enemy linked to the Weapon X program.' } },
    ],
    loreEntries: ['weapon-x', 'adamantium', 'x-men', 'berserker-rage'],
    image: '/wolverine/char-logan.jpg',
  },
  {
    id: 'mystique',
    name: 'Mystique',
    role: { fr: 'Métamorphe / Espionne', en: 'Shape-shifter / Spy' },
    faction: 'Independent',
    origin: { fr: 'Inconnu', en: 'Unknown' },
    weapon: { fr: 'Armes à feu, Combat rapproché', en: 'Firearms, Close Combat' },
    affiliation: { fr: 'Brotherhood of Mutants / Indépendante', en: 'Brotherhood of Mutants / Independent' },
    status: { fr: 'Active', en: 'Active' },
    playable: false,
    type: 'NPC',
    colorTheme: '#3B82F6',
    bio: {
      fr: "Raven Darkhölme, alias Mystique, est une métamorphe mutante capable de prendre l'apparence de n'importe qui. Maîtresse de l'espionnage et de la manipulation, elle poursuit ses propres objectifs qui s'alignent tantôt avec les héros, tantôt avec les vilains.\n\nSon passé avec Logan est long et compliqué — alliée occasionnelle, ennemie fréquente, toujours imprévisible. Dans Madripoor, elle tire les ficelles d'un réseau criminel tentaculaire.",
      en: "Raven Darkhölme, a.k.a. Mystique, is a mutant shape-shifter capable of assuming anyone's appearance. A master of espionage and manipulation, she pursues her own agenda that sometimes aligns with heroes, sometimes with villains.\n\nHer history with Logan is long and complicated — occasional ally, frequent enemy, always unpredictable. In Madripoor, she pulls the strings of a sprawling criminal network.",
    },
    signatureQuote: { fr: "Les gens comme nous ne méritent pas la confiance.", en: "People like us don't deserve trust." },
    strength: 50,
    speed: 70,
    magic: 60,
    weapons: [
      { name: { fr: 'Armes à feu', en: 'Firearms' }, mastery: 85 },
      { name: { fr: 'Combat rapproché', en: 'Close Combat' }, mastery: 75 },
    ],
    combatStyle: {
      fr: "Mystique combine transformation et combat rapproché, changeant de forme pour déstabiliser ses adversaires. Elle utilise l'environnement à son avantage et préfère la ruse à la force brute.",
      en: "Mystique combines shape-shifting with close combat, changing form to destabilize opponents. She uses the environment to her advantage and prefers cunning over brute force.",
    },
    abilities: [
      { name: { fr: 'Métamorphose', en: 'Shape-shifting' }, description: { fr: "Peut prendre l'apparence de n'importe qui.", en: 'Can assume the appearance of anyone.' }, type: 'MUTANT', level: 3 },
    ],
    quotes: [
      { text: { fr: "Tu ne sais jamais à qui tu parles vraiment.", en: "You never really know who you're talking to." }, context: { fr: 'Confrontation avec Logan', en: 'Confrontation with Logan' } },
    ],
    relations: [
      { characterId: 'logan', type: 'RIVAL', description: { fr: 'Relation d\'amour-haine avec Wolverine.', en: 'Love-hate relationship with Wolverine.' } },
    ],
    loreEntries: ['madripoor', 'brotherhood'],
    image: '/wolverine/char-mystique.jpg',
  },
  {
    id: 'omega-red',
    name: 'Omega Red',
    role: { fr: 'Super-soldat / Antagoniste', en: 'Super-soldier / Antagonist' },
    faction: 'Weapon X',
    origin: { fr: 'Russie', en: 'Russia' },
    weapon: { fr: 'Tentacules de carbonadium', en: 'Carbonadium Tentacles' },
    affiliation: { fr: 'Ancien programme soviétique / Weapon X', en: 'Former Soviet program / Weapon X' },
    status: { fr: 'Actif', en: 'Active' },
    playable: false,
    type: 'NPC',
    colorTheme: '#DC2626',
    bio: {
      fr: "Arkady Rossovich, alias Omega Red, est un super-soldat soviétique transformé en arme vivante. Ses tentacules de carbonadium drainent la force vitale de ses victimes et sont pratiquement indestructibles. Ancien rival de Logan dans le cadre du programme Weapon X, il est animé par une soif de vengeance inextinguible.\n\nSon corps exige un apport constant de force vitale pour survivre, le forçant à tuer régulièrement. C'est l'un des adversaires les plus dangereux que Wolverine ait jamais affronté.",
      en: "Arkady Rossovich, a.k.a. Omega Red, is a Soviet super-soldier transformed into a living weapon. His carbonadium tentacles drain the life force of his victims and are virtually indestructible. A former rival of Logan within the Weapon X program, he is driven by an unquenchable thirst for vengeance.\n\nHis body demands a constant supply of life force to survive, forcing him to kill regularly. He is one of the most dangerous adversaries Wolverine has ever faced.",
    },
    signatureQuote: { fr: "Ta guérison ne te sauvera pas éternellement, Logan.", en: "Your healing won't save you forever, Logan." },
    strength: 88,
    speed: 60,
    magic: 40,
    weapons: [
      { name: { fr: 'Tentacules de carbonadium', en: 'Carbonadium Tentacles' }, mastery: 95 },
      { name: { fr: 'Combat à mains nues', en: 'Hand-to-hand Combat' }, mastery: 80 },
    ],
    combatStyle: {
      fr: "Omega Red utilise ses tentacules de carbonadium pour attaquer à distance et drainer la force vitale de ses ennemis. Son style de combat est méthodique et implacable, forçant ses adversaires à s'épuiser avant de porter le coup final.",
      en: "Omega Red uses his carbonadium tentacles for ranged attacks and to drain life force from enemies. His combat style is methodical and relentless, forcing opponents to exhaust themselves before delivering the final blow.",
    },
    abilities: [
      { name: { fr: 'Drain Vital', en: 'Life Drain' }, description: { fr: 'Absorbe la force vitale des ennemis proches.', en: 'Absorbs the life force of nearby enemies.' }, type: 'MUTANT', level: 3 },
      { name: { fr: 'Tentacules de Carbonadium', en: 'Carbonadium Coils' }, description: { fr: 'Attaque à distance avec des tentacules quasi-indestructibles.', en: 'Ranged attack with near-indestructible tentacles.' }, type: 'WEAPON', level: 3 },
    ],
    quotes: [
      { text: { fr: "Je sens ta peur, Logan. Elle a un goût délicieux.", en: "I can taste your fear, Logan. It's delicious." }, context: { fr: 'Combat contre Wolverine', en: 'Combat against Wolverine' } },
    ],
    relations: [
      { characterId: 'logan', type: 'RIVAL', description: { fr: 'Ennemi juré depuis le programme Weapon X.', en: 'Sworn enemy since the Weapon X program.' } },
    ],
    loreEntries: ['weapon-x', 'carbonadium'],
    image: '/wolverine/char-omega-red.jpg',
  },
  {
    id: 'reavers',
    name: 'The Reavers',
    role: { fr: 'Mercenaires Cyborg', en: 'Cyborg Mercenaries' },
    faction: 'Reavers',
    origin: { fr: 'Divers', en: 'Various' },
    weapon: { fr: 'Implants cybernétiques, armes lourdes', en: 'Cybernetic implants, heavy weapons' },
    affiliation: { fr: 'Donald Pierce / Hellfire Club', en: 'Donald Pierce / Hellfire Club' },
    status: { fr: 'Actifs', en: 'Active' },
    playable: false,
    type: 'NPC',
    colorTheme: '#A1A1AA',
    bio: {
      fr: "Les Reavers sont un groupe de mercenaires cyborgs menés par Donald Pierce, un membre du Hellfire Club obsédé par l'élimination des mutants. Chaque Reaver a été amélioré avec des implants cybernétiques avancés — bras mécaniques, armes intégrées, armure renforcée — les rendant bien plus dangereux que des soldats ordinaires.\n\nIls ont un compte personnel à régler avec Wolverine, qui a détruit leur base australienne et tué plusieurs de leurs membres originaux. Leur haine des mutants n'a d'égale que leur ingéniosité technologique.",
      en: "The Reavers are a group of cyborg mercenaries led by Donald Pierce, a Hellfire Club member obsessed with eliminating mutants. Each Reaver has been enhanced with advanced cybernetic implants — mechanical arms, integrated weapons, reinforced armor — making them far more dangerous than ordinary soldiers.\n\nThey have a personal score to settle with Wolverine, who destroyed their Australian base and killed several original members. Their hatred of mutants is matched only by their technological ingenuity.",
    },
    signatureQuote: { fr: "Les mutants sont une abomination. Nous sommes l'évolution.", en: "Mutants are an abomination. We are evolution." },
    strength: 80,
    speed: 55,
    magic: 0,
    weapons: [
      { name: { fr: 'Implants cybernétiques', en: 'Cybernetic Implants' }, mastery: 90 },
      { name: { fr: 'Armes lourdes', en: 'Heavy Weapons' }, mastery: 85 },
    ],
    combatStyle: {
      fr: "Les Reavers combinent force cybernétique et armes lourdes. Ils attaquent en groupe coordonné, utilisant des tactiques militaires et leurs améliorations technologiques pour submerger leurs ennemis.",
      en: "The Reavers combine cybernetic strength with heavy weapons. They attack in coordinated groups, using military tactics and their technological enhancements to overwhelm their enemies.",
    },
    abilities: [
      { name: { fr: 'Armure Cybernétique', en: 'Cybernetic Armor' }, description: { fr: 'Résistance accrue aux dégâts physiques.', en: 'Increased resistance to physical damage.' }, type: 'WEAPON', level: 2 },
      { name: { fr: 'Arsenal Intégré', en: 'Integrated Arsenal' }, description: { fr: 'Armes à feu et lames intégrées au corps.', en: 'Firearms and blades integrated into the body.' }, type: 'WEAPON', level: 2 },
    ],
    quotes: [
      { text: { fr: "Pierce nous a promis un monde sans freaks.", en: "Pierce promised us a world without freaks." }, context: { fr: "Dialogue d'un Reaver", en: 'Reaver dialogue' } },
    ],
    relations: [
      { characterId: 'logan', type: 'RIVAL', description: { fr: 'Ennemis jurés de Wolverine.', en: 'Sworn enemies of Wolverine.' } },
    ],
    loreEntries: ['reavers-faction', 'hellfire-club'],
    image: '/wolverine/char-reavers.jpg',
  },
];

export const npcs = [
  { id: 'professor-x', name: 'Professor X', faction: { fr: 'X-Men', en: 'X-Men' }, role: { fr: 'Mentor / Télépathe', en: 'Mentor / Telepath' }, lore: { fr: "Charles Xavier, fondateur des X-Men. Télépathe le plus puissant du monde, il guide Logan malgré leurs désaccords fréquents.", en: "Charles Xavier, founder of the X-Men. The world's most powerful telepath, he guides Logan despite their frequent disagreements." }, status: 'DOCUMENTED', image: '/wolverine/npc-professor-x.jpg' },
  { id: 'jean-grey', name: 'Jean Grey', faction: { fr: 'X-Men', en: 'X-Men' }, role: { fr: 'Télépathe / Télékinésiste', en: 'Telepath / Telekinetic' }, lore: { fr: "Jean Grey, membre fondatrice des X-Men. Sa connexion émotionnelle avec Logan est un fil rouge de l'histoire.", en: "Jean Grey, founding member of the X-Men. Her emotional connection with Logan is a running thread through the story." }, status: 'DOCUMENTED', image: '/wolverine/npc-jean-grey.jpg' },
  { id: 'donald-pierce', name: 'Donald Pierce', faction: { fr: 'Reavers / Hellfire Club', en: 'Reavers / Hellfire Club' }, role: { fr: 'Leader des Reavers', en: 'Reavers Leader' }, lore: { fr: "Leader cyborg des Reavers et membre du Hellfire Club. Obsédé par l'éradication des mutants.", en: "Cyborg leader of the Reavers and Hellfire Club member. Obsessed with mutant eradication." }, status: 'DOCUMENTED', image: '/wolverine/npc-donald-pierce.jpg' },
  { id: 'lady-deathstrike', name: 'Lady Deathstrike', faction: { fr: 'Indépendante', en: 'Independent' }, role: { fr: 'Cyborg / Assassin', en: 'Cyborg / Assassin' }, lore: { fr: "Yuriko Oyama, dotée de griffes d'adamantium et d'un squelette renforcé. Obsédée par la destruction de Wolverine.", en: "Yuriko Oyama, equipped with adamantium claws and a reinforced skeleton. Obsessed with destroying Wolverine." }, status: 'DOCUMENTED', image: '/wolverine/npc-lady-deathstrike.jpg' },
];

export type NPC = typeof npcs[number];
