import type { Translations } from '@/fable-wiki/context/I18nContext';

export type BlogCategory = 'GUIDE' | 'LORE' | 'NEWS' | 'ANALYSIS';

export interface BlogArticle {
  id: string;
  slug: string;
  category: BlogCategory;
  title: Translations;
  excerpt: Translations;
  content: Translations;
  coverImage: string;
  author: string;
  publishedAt: string;
  readingTime: number;
  tags: { fr: string; en: string; es?: string; pt?: string; it?: string; ko?: string }[];
  seoTitle: Translations;
  seoDescription: Translations;
  relatedSlugs?: string[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: 'style-weaving',
    slug: 'combat-system-style-weaving-explained',
    category: 'GUIDE',
    coverImage: '',
    author: 'Albion Wiki',
    publishedAt: '2026-03-10',
    readingTime: 8,
    tags: [
      { fr: 'combat', en: 'combat' },
      { fr: 'guide', en: 'guide' },
      { fr: 'mecaniques', en: 'mechanics' },
    ],
    title: {
      fr: 'Systeme de Combat : Le Style-Weaving Explique',
      en: 'Combat System: Style-Weaving Explained',
    },
    excerpt: {
      fr: "Guide complet du systeme de style-weaving de Fable : comment combiner Force, Adresse et Volonte pour des combos devastateurs.",
      en: "Complete guide to Fable's style-weaving system: how to combine Strength, Skill, and Will for devastating combos.",
    },
    seoTitle: {
      fr: 'Style-Weaving Fable | Systeme de Combat Complet | Guide 2026',
      en: 'Style-Weaving Fable | Complete Combat System | Guide 2026',
    },
    seoDescription: {
      fr: "Guide du style-weaving de Fable : Force, Adresse, Volonte. Combos, enchainements et strategies de combat. Playground Games 2026.",
      en: 'Fable style-weaving guide: Strength, Skill, Will. Combos, chains, and combat strategies. Playground Games 2026.',
    },
    content: {
      fr: `Le style-weaving est le systeme de combat signature de Fable. Il represente une evolution majeure par rapport aux jeux precedents de la serie, permettant aux joueurs de basculer fluidement entre les trois disciplines heroiques en plein combat.

## Les Trois Piliers

Le combat dans Fable repose sur trois disciplines fondamentales :

**La Force (Strength)** — Le combat de melee. Epees, haches, marteaux. Chaque arme a son propre arbre de combos et de capacites. La Force est ideale pour le combat rapproche et les degats eleves.

**L'Adresse (Skill)** — Le combat a distance. L'arc est l'arme principale, mais l'Adresse influence aussi la vitesse, l'esquive et la furtivite. Parfait pour les joueurs tactiques.

**La Volonte (Will)** — La magie pure. Boules de feu, eclairs, guerison, boucliers magiques. La Volonte offre la plus grande variete de capacites mais demande une gestion de mana.

## Comment fonctionne le Style-Weaving ?

Le style-weaving permet de passer d'une discipline a l'autre en plein combat sans interruption. Par exemple :

1. Commencez par une attaque a l'epee (Force)
2. Enchainez avec un tir a l'arc (Adresse)
3. Terminez avec une boule de feu (Volonte)

Le tout en une seule sequence fluide. Le systeme recompense les joueurs qui maitrisent les trois piliers en offrant des bonus de combo et des attaques speciales.

## Conseils pour Debutants

- Commencez par maitriser une discipline avant de les combiner
- Les enchainements Force → Volonte sont les plus accessibles
- L'Adresse est ideale pour ouvrir un combat avant de passer en melee
- Experimentez ! Le style-weaving encourage la creativite`,
      en: `Style-weaving is Fable's signature combat system. It represents a major evolution from previous games in the series, allowing players to fluidly switch between three heroic disciplines mid-combat.

## The Three Pillars

Combat in Fable rests on three fundamental disciplines:

**Strength** — Melee combat. Swords, axes, hammers. Each weapon has its own combo tree and abilities. Strength is ideal for close-range combat and high damage.

**Skill** — Ranged combat. The bow is the primary weapon, but Skill also influences speed, evasion, and stealth. Perfect for tactical players.

**Will** — Pure magic. Fireballs, lightning, healing, magical shields. Will offers the greatest variety of abilities but requires mana management.

## How Does Style-Weaving Work?

Style-weaving allows switching between disciplines mid-combat without interruption. For example:

1. Start with a sword attack (Strength)
2. Chain into a bow shot (Skill)
3. Finish with a fireball (Will)

All in one fluid sequence. The system rewards players who master all three pillars by offering combo bonuses and special attacks.

## Beginner Tips

- Start by mastering one discipline before combining them
- Strength into Will chains are the most accessible
- Skill is ideal for opening a fight before switching to melee
- Experiment! Style-weaving encourages creativity`,
    },
    relatedSlugs: ['albion-reborn-all-confirmed-locations'],
  },
  {
    id: 'locations',
    slug: 'albion-reborn-all-confirmed-locations',
    category: 'LORE',
    coverImage: '',
    author: 'Albion Wiki',
    publishedAt: '2026-03-10',
    readingTime: 7,
    tags: [
      { fr: 'monde', en: 'world' },
      { fr: 'lore', en: 'lore' },
      { fr: 'exploration', en: 'exploration' },
    ],
    title: {
      fr: 'Albion Renait : Toutes les Locations Confirmees',
      en: 'Albion Reborn: All Confirmed Locations',
    },
    excerpt: {
      fr: "Decouvrez toutes les regions confirmees du nouveau Fable : Bowerstone, Briar Hill, Bloodstone, Fairfax Castle et les Terres Sauvages.",
      en: 'Discover all confirmed regions in the new Fable: Bowerstone, Briar Hill, Bloodstone, Fairfax Castle, and the Wilds.',
    },
    seoTitle: {
      fr: 'Locations Fable 2026 | Toutes les Regions Confirmees | Albion',
      en: 'Fable 2026 Locations | All Confirmed Regions | Albion',
    },
    seoDescription: {
      fr: 'Toutes les locations confirmees de Fable : Bowerstone, Briar Hill, Bloodstone, Fairfax Castle, Terres Sauvages. Playground Games 2026.',
      en: 'All confirmed Fable locations: Bowerstone, Briar Hill, Bloodstone, Fairfax Castle, The Wilds. Playground Games 2026.',
    },
    content: {
      fr: `Albion renait sous les doigts experts de Playground Games. Le monde ouvert du nouveau Fable promet d'etre le plus vaste et le plus detaille de la serie. Voici toutes les locations confirmees.

## Bowerstone — La Capitale

Bowerstone est de retour comme la capitale d'Albion. La ville est plus grande et plus vivante que jamais, avec un marche anime, la Guilde des Heros au centre, et des quartiers diversifies. C'est le point de depart principal de l'aventure.

## Briar Hill — Le Village Natal

Le paisible village d'enfance du Heros. Apres la petrification par l'Etranger, Briar Hill reste fige dans le temps, servant de motivation emotionnelle tout au long du jeu.

## Bloodstone — Le Repaire des Pirates

La region la plus dangereuse d'Albion revient avec ses cotes escarpees, ses grottes de contrebandiers et son atmosphere sombre. Attendez-vous a des rencontres avec des pirates, des Balverines et pire encore.

## Fairfax Castle — Le Siege du Pouvoir

L'ancienne forteresse dominant les plaines centrales d'Albion. Ses souterrains cachent des secrets de l'Ancien Royaume et des artefacts de puissance incommensurable.

## Les Terres Sauvages — Nature Indomptee

Les forets anciennes et indomptees d'Albion, territoire des Balverines et des Hobbes. C'est ici que vous rencontrerez Dave, le geant interprete par Richard Ayoade.`,
      en: `Albion is reborn under the expert hands of Playground Games. The open world of the new Fable promises to be the most vast and detailed in the series. Here are all confirmed locations.

## Bowerstone — The Capital

Bowerstone returns as Albion's capital. The city is larger and more alive than ever, with a bustling market, the Heroes' Guild at its center, and diverse districts. It serves as the main starting point for the adventure.

## Briar Hill — The Home Village

The Hero's peaceful childhood village. After the Stranger's petrification, Briar Hill remains frozen in time, serving as emotional motivation throughout the game.

## Bloodstone — The Pirate Den

Albion's most dangerous region returns with its rugged coasts, smuggler caves, and dark atmosphere. Expect encounters with pirates, Balverines, and worse.

## Fairfax Castle — The Seat of Power

The ancient fortress dominating Albion's central plains. Its dungeons hide Old Kingdom secrets and artifacts of immeasurable power.

## The Wilds — Untamed Nature

Albion's ancient, untamed forests — territory of Balverines and Hobbes. This is where you'll meet Dave, the giant voiced by Richard Ayoade.`,
    },
    relatedSlugs: ['combat-system-style-weaving-explained'],
  },
  {
    id: 'reputation',
    slug: 'character-reputation-system-how-it-works',
    category: 'ANALYSIS',
    coverImage: '',
    author: 'Albion Wiki',
    publishedAt: '2026-03-10',
    readingTime: 6,
    tags: [
      { fr: 'reputation', en: 'reputation' },
      { fr: 'mecaniques', en: 'mechanics' },
      { fr: 'choix moraux', en: 'moral choices' },
    ],
    title: {
      fr: 'Systeme de Reputation : Comment Ca Fonctionne',
      en: 'Character Reputation System: How It Works',
    },
    excerpt: {
      fr: "Le systeme de reputation de Fable : comment vos choix moraux affectent l'apparence du Heros, les reactions des PNJ et la fin du jeu.",
      en: "Fable's reputation system: how your moral choices affect the Hero's appearance, NPC reactions, and the game's ending.",
    },
    seoTitle: {
      fr: 'Systeme de Reputation Fable | Choix Moraux & Consequences | Guide',
      en: 'Fable Reputation System | Moral Choices & Consequences | Guide',
    },
    seoDescription: {
      fr: 'Guide du systeme de reputation de Fable : choix moraux, apparence du heros, reactions PNJ et fins multiples. Playground Games 2026.',
      en: "Fable reputation system guide: moral choices, hero appearance, NPC reactions, and multiple endings. Playground Games 2026.",
    },
    content: {
      fr: `Le systeme de reputation est au coeur de l'experience Fable. Chaque choix que vous faites a des consequences qui faconnent votre Heros et le monde d'Albion.

## Comment ca fonctionne

Vos actions influencent deux axes principaux :

**Bien vs Mal** — Aider les innocents, donner de l'or, combattre les creatures malefiques augmente votre reputation de bien. Voler, tuer des innocents, extorquer les marchands penche vers le mal.

**Pur vs Corrompu** — Ce second axe mesure l'altruisme vs l'egoisme. Vous pouvez etre un heros bon mais corrompu, ou un villain pur.

## Impact sur l'apparence

L'apparence de votre Heros change physiquement en fonction de vos choix :
- Heros bon : aura lumineuse, yeux clairs, papillons
- Heros mauvais : cornes, yeux rouges, ombres
- Heros pur : apparence angelique
- Heros corrompu : apparence decadente

## Impact sur le monde

Les PNJ reagissent differemment selon votre reputation. Les citoyens vous adoreront ou vous fuiront. Les marchands ajusteront leurs prix. Certaines quetes ne sont accessibles qu'avec une certaine reputation.

## Le Choix Final

La reputation accumulee influence directement le chapitre final et la fin du jeu, offrant des conclusions significativement differentes.`,
      en: `The reputation system is at the heart of the Fable experience. Every choice you make has consequences that shape your Hero and the world of Albion.

## How It Works

Your actions influence two main axes:

**Good vs Evil** — Helping innocents, giving gold, fighting evil creatures increases your good reputation. Stealing, killing innocents, extorting merchants leans toward evil.

**Pure vs Corrupt** — This second axis measures altruism vs selfishness. You can be a good but corrupt hero, or a pure villain.

## Impact on Appearance

Your Hero's appearance physically changes based on your choices:
- Good hero: luminous aura, clear eyes, butterflies
- Evil hero: horns, red eyes, shadows
- Pure hero: angelic appearance
- Corrupt hero: decadent appearance

## Impact on the World

NPCs react differently based on your reputation. Citizens will adore or flee from you. Merchants will adjust their prices. Some quests are only accessible with certain reputations.

## The Final Choice

Accumulated reputation directly influences the final chapter and game ending, offering significantly different conclusions.`,
    },
    relatedSlugs: ['combat-system-style-weaving-explained'],
  },
  {
    id: 'creatures',
    slug: 'creatures-of-albion-balverines-hobbes-more',
    category: 'LORE',
    coverImage: '',
    author: 'Albion Wiki',
    publishedAt: '2026-03-10',
    readingTime: 7,
    tags: [
      { fr: 'creatures', en: 'creatures' },
      { fr: 'lore', en: 'lore' },
      { fr: 'bestiaire', en: 'bestiary' },
    ],
    title: {
      fr: 'Creatures d\'Albion : Balverines, Hobbes & Plus',
      en: 'Creatures of Albion: Balverines, Hobbes & More',
    },
    excerpt: {
      fr: "Guide complet des creatures d'Albion : Balverines, Hobbes, Hommes Creux, Trolls et plus encore.",
      en: "Complete guide to Albion's creatures: Balverines, Hobbes, Hollow Men, Trolls and more.",
    },
    seoTitle: {
      fr: 'Creatures Fable | Balverines, Hobbes, Trolls | Bestiaire Complet',
      en: 'Fable Creatures | Balverines, Hobbes, Trolls | Complete Bestiary',
    },
    seoDescription: {
      fr: "Bestiaire complet de Fable : Balverines, Hobbes, Hommes Creux, Trolls. Origines, comportements et strategies. Playground Games 2026.",
      en: 'Complete Fable bestiary: Balverines, Hobbes, Hollow Men, Trolls. Origins, behaviors, and strategies. Playground Games 2026.',
    },
    content: {
      fr: `Albion regorge de creatures fascinantes et terrifiantes. Voici le bestiaire complet du nouveau Fable.

## Balverines

Les Balverines sont les loups-garous d'Albion. Creatures terrifiantes hantant les forets, elles chassent en meute sous la lumiere de la lune. Leur morsure peut transformer n'importe qui en l'un des leurs. Les Balverines Blanches sont les plus dangereuses.

**Strategie** : Utilisez des armes en argent si disponibles. Gardez vos distances avec l'arc, et n'oubliez pas que le feu les ralentit.

## Hobbes

Les Hobbes sont des creatures gobelines vivant dans des terriers souterrains. Selon la legende, ils etaient autrefois des enfants transformes par une magie cruelle. Faibles seuls mais dangereux en groupe.

**Strategie** : Attaques de zone avec la Volonte. Mefiez-vous de leurs pieges souterrains.

## Hommes Creux (Hollow Men)

Morts-vivants spectraux hantant les ruines et les cimetieres. Ils emergent du sol et sont particulierement actifs la nuit.

**Strategie** : La magie de lumiere est efficace. Les attaques physiques fonctionnent mais sont moins efficientes.

## Trolls

Creatures massives de roche et de terre. Extremement resistantes, elles se regenerent si on ne les acheve pas rapidement.

**Strategie** : Visez les points faibles lumineux sur leur corps. Combinez Force et Volonte pour un maximum d'efficacite.`,
      en: `Albion teems with fascinating and terrifying creatures. Here is the complete bestiary for the new Fable.

## Balverines

Balverines are Albion's werewolves. Terrifying creatures haunting forests, they hunt in packs under moonlight. Their bite can transform anyone into one of their kind. White Balverines are the most dangerous.

**Strategy**: Use silver weapons if available. Keep your distance with the bow, and remember that fire slows them down.

## Hobbes

Hobbes are goblin-like creatures living in underground burrows. According to legend, they were once children transformed by cruel magic. Weak alone but dangerous in groups.

**Strategy**: Area attacks with Will. Watch out for their underground traps.

## Hollow Men

Spectral undead haunting ruins and graveyards. They emerge from the ground and are particularly active at night.

**Strategy**: Light magic is effective. Physical attacks work but are less efficient.

## Trolls

Massive creatures of rock and earth. Extremely resilient, they regenerate if not finished off quickly.

**Strategy**: Aim for glowing weak points on their body. Combine Strength and Will for maximum effectiveness.`,
    },
    relatedSlugs: ['albion-reborn-all-confirmed-locations'],
  },
];
