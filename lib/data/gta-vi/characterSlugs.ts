import type { Lang } from './i18n';

export interface CharacterSEO {
  slug: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

export const characterSEO: Record<string, CharacterSEO> = {
  lucia: {
    slug: 'lucia-caminos',
    title: {
      fr: 'Lucia Caminos GTA 6 | Biographie, Histoire et Citations | Wiki Fan',
      en: 'Lucia Caminos GTA 6 | Biography, Story & Quotes | Fan Wiki',
      es: 'Lucia Caminos GTA 6 | Biografía, Historia y Citas | Wiki Fan',
      it: 'Lucia Caminos GTA 6 | Biografia, Storia e Citazioni | Wiki Fan',
    },
    description: {
      fr: 'Lucia Caminos est la protagoniste principale de GTA VI. Première femme protagoniste obligatoire de la franchise. Sortie du Leonida Penitentiary, elle veut la belle vie que rêvait sa mère depuis Liberty City.',
      en: 'Lucia Caminos is the main protagonist of GTA VI. The first mandatory female protagonist in the franchise. Released from Leonida Penitentiary, she wants the good life her mother dreamed of since Liberty City.',
      es: 'Lucia Caminos es la protagonista principal de GTA VI. Primera mujer protagonista obligatoria de la franquicia. Liberada del Leonida Penitentiary, quiere la buena vida que soñaba su madre desde Liberty City.',
      it: 'Lucia Caminos è la protagonista principale di GTA VI. Prima donna protagonista obbligatoria del franchise. Uscita dal Leonida Penitentiary, vuole la bella vita che sognava sua madre da Liberty City.',
    },
  },
  jason: {
    slug: 'jason-duval',
    title: {
      fr: 'Jason Duval GTA 6 | Biographie, Histoire et Citations | Wiki Fan',
      en: 'Jason Duval GTA 6 | Biography, Story & Quotes | Fan Wiki',
      es: 'Jason Duval GTA 6 | Biografía, Historia y Citas | Wiki Fan',
      it: 'Jason Duval GTA 6 | Biografia, Storia e Citazioni | Wiki Fan',
    },
    description: {
      fr: 'Jason Duval est le co-protagoniste de GTA VI. Ex-militaire installé dans les Leonida Keys, il travaille pour Brian Heder. Sa rencontre avec Lucia pourrait tout changer.',
      en: 'Jason Duval is the co-protagonist of GTA VI. An ex-military man settled in the Leonida Keys, he works for Brian Heder. Meeting Lucia could change everything.',
      es: 'Jason Duval es el co-protagonista de GTA VI. Ex-militar instalado en los Leonida Keys, trabaja para Brian Heder. Su encuentro con Lucia podría cambiarlo todo.',
      it: 'Jason Duval è il co-protagonista di GTA VI. Ex-militare stabilitosi nei Leonida Keys, lavora per Brian Heder. Il suo incontro con Lucia potrebbe cambiare tutto.',
    },
  },
  cal: {
    slug: 'cal-hampton',
    title: {
      fr: 'Cal Hampton GTA 6 | Personnage, Biographie et Citations | Wiki Fan',
      en: 'Cal Hampton GTA 6 | Character, Biography & Quotes | Fan Wiki',
      es: 'Cal Hampton GTA 6 | Personaje, Biografía y Citas | Wiki Fan',
      it: 'Cal Hampton GTA 6 | Personaggio, Biografia e Citazioni | Wiki Fan',
    },
    description: {
      fr: "Cal Hampton est l'ami de Jason Duval dans GTA VI. Associé de Brian Heder, il passe ses journées à surveiller les communications Coast Guard. Paranoïaque et attachant.",
      en: "Cal Hampton is Jason Duval's friend in GTA VI. An associate of Brian Heder, he spends his days monitoring Coast Guard comms. Paranoid and endearing.",
      es: "Cal Hampton es el amigo de Jason Duval en GTA VI. Asociado de Brian Heder, pasa sus días monitoreando las comunicaciones de la Coast Guard. Paranoico y entrañable.",
      it: "Cal Hampton è l'amico di Jason Duval in GTA VI. Associato di Brian Heder, passa le giornate a monitorare le comunicazioni della Coast Guard. Paranoico e affascinante.",
    },
  },
  boobie: {
    slug: 'boobie-ike',
    title: {
      fr: 'Boobie Ike GTA 6 | Légende de Vice City, Empire et Citations | Wiki Fan',
      en: 'Boobie Ike GTA 6 | Vice City Legend, Empire & Quotes | Fan Wiki',
      es: 'Boobie Ike GTA 6 | Leyenda de Vice City, Imperio y Citas | Wiki Fan',
      it: 'Boobie Ike GTA 6 | Leggenda di Vice City, Impero e Citazioni | Wiki Fan',
    },
    description: {
      fr: "Boobie Ike est une légende de Vice City dans GTA VI. Son empire couvre l'immobilier, un strip club et Only Raw Records avec Dre'Quan.",
      en: "Boobie Ike is a Vice City legend in GTA VI. His empire spans real estate, a strip club, and Only Raw Records with Dre'Quan.",
      es: "Boobie Ike es una leyenda de Vice City en GTA VI. Su imperio abarca bienes raíces, un club de striptease y Only Raw Records con Dre'Quan.",
      it: "Boobie Ike è una leggenda di Vice City in GTA VI. Il suo impero comprende immobili, uno strip club e Only Raw Records con Dre'Quan.",
    },
  },
  drequan: {
    slug: 'drequan-priest',
    title: {
      fr: "Dre'Quan Priest GTA 6 | Producteur, Only Raw Records | Wiki Fan",
      en: "Dre'Quan Priest GTA 6 | Producer, Only Raw Records | Fan Wiki",
      es: "Dre'Quan Priest GTA 6 | Productor, Only Raw Records | Wiki Fan",
      it: "Dre'Quan Priest GTA 6 | Produttore, Only Raw Records | Wiki Fan",
    },
    description: {
      fr: "Dre'Quan Priest est le producteur musical de GTA VI, co-fondateur d'Only Raw Records avec Boobie Ike. Il vient de signer Real Dimez.",
      en: "Dre'Quan Priest is the music producer in GTA VI, co-founder of Only Raw Records with Boobie Ike. He just signed Real Dimez.",
      es: "Dre'Quan Priest es el productor musical de GTA VI, co-fundador de Only Raw Records con Boobie Ike. Acaba de fichar a Real Dimez.",
      it: "Dre'Quan Priest è il produttore musicale di GTA VI, co-fondatore di Only Raw Records con Boobie Ike. Ha appena firmato Real Dimez.",
    },
  },
  realdimez: {
    slug: 'real-dimez',
    title: {
      fr: 'Real Dimez GTA 6 | Bae-Luxe et Roxy, Duo Musical | Wiki Fan',
      en: 'Real Dimez GTA 6 | Bae-Luxe & Roxy, Music Duo | Fan Wiki',
      es: 'Real Dimez GTA 6 | Bae-Luxe y Roxy, Dúo Musical | Wiki Fan',
      it: 'Real Dimez GTA 6 | Bae-Luxe e Roxy, Duo Musicale | Wiki Fan',
    },
    description: {
      fr: 'Real Dimez (Bae-Luxe et Roxy) est le duo musical de GTA VI, signé sur Only Raw Records. Amies depuis le lycée, elles ont collaboré avec le rappeur DWNPLY.',
      en: 'Real Dimez (Bae-Luxe & Roxy) is the music duo in GTA VI, signed to Only Raw Records. Friends since high school, they collaborated with rapper DWNPLY.',
      es: 'Real Dimez (Bae-Luxe y Roxy) es el dúo musical de GTA VI, firmado en Only Raw Records. Amigas desde el instituto, colaboraron con el rapero DWNPLY.',
      it: 'Real Dimez (Bae-Luxe e Roxy) è il duo musicale di GTA VI, sotto contratto con Only Raw Records. Amiche fin dal liceo, hanno collaborato con il rapper DWNPLY.',
    },
  },
  raul: {
    slug: 'raul-bautista',
    title: {
      fr: 'Raul Bautista GTA 6 | Braqueur, Biographie et Citations | Wiki Fan',
      en: 'Raul Bautista GTA 6 | Bank Robber, Biography & Quotes | Fan Wiki',
      es: 'Raul Bautista GTA 6 | Atracador, Biografía y Citas | Wiki Fan',
      it: 'Raul Bautista GTA 6 | Rapinatore, Biografia e Citazioni | Wiki Fan',
    },
    description: {
      fr: 'Raul Bautista est un braqueur de banques vétéran dans GTA VI. Confiant, charmeur et imprudent, il recrute des talents pour ses coups.',
      en: 'Raul Bautista is a veteran bank robber in GTA VI. Confident, charming, and reckless, he recruits talent for his heists.',
      es: 'Raul Bautista es un atracador de bancos veterano en GTA VI. Seguro de sí mismo, encantador e imprudente, recluta talentos para sus golpes.',
      it: 'Raul Bautista è un rapinatore di banche veterano in GTA VI. Sicuro di sé, affascinante e imprudente, recluta talenti per i suoi colpi.',
    },
  },
  brian: {
    slug: 'brian-heder',
    title: {
      fr: 'Brian Heder GTA 6 | Trafiquant des Keys, Biographie | Wiki Fan',
      en: 'Brian Heder GTA 6 | Keys Drug Runner, Biography | Fan Wiki',
      es: 'Brian Heder GTA 6 | Traficante de los Keys, Biografía | Wiki Fan',
      it: 'Brian Heder GTA 6 | Trafficante dei Keys, Biografia | Wiki Fan',
    },
    description: {
      fr: "Brian Heder est un vétéran du trafic de drogue des Leonida Keys dans GTA VI. Il héberge Jason Duval dans une de ses propriétés en échange de services.",
      en: "Brian Heder is a veteran drug runner from the Leonida Keys in GTA VI. He houses Jason Duval at one of his properties in exchange for services.",
      es: "Brian Heder es un veterano narcotraficante de los Leonida Keys en GTA VI. Aloja a Jason Duval en una de sus propiedades a cambio de servicios.",
      it: "Brian Heder è un veterano del traffico di droga dei Leonida Keys in GTA VI. Ospita Jason Duval in una delle sue proprietà in cambio di servizi.",
    },
  },
};

export function getCharacterBySlug(slug: string) {
  return Object.entries(characterSEO).find(([_, seo]) => seo.slug === slug);
}
