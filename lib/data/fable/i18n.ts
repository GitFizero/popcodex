'use client';

import { useMemo } from 'react';

export type Lang = 'fr' | 'en' | 'es' | 'pt' | 'it' | 'ko';

export function tr(obj: Record<string, string>, lang: Lang): string {
  return obj[lang] || obj.en || obj.fr || '';
}

const translations: Record<Lang, Record<string, string>> = {
  fr: {
    'nav.home': 'ACCUEIL',
    'nav.story': 'HISTOIRE',
    'nav.characters': 'PERSONNAGES',
    'nav.locations': 'LIEUX',
    'nav.creatures': 'CRÉATURES',
    'nav.gameplay': 'GAMEPLAY',
    'nav.classes': 'CLASSES',
    'nav.lore': 'LORE',
    'nav.gallery': 'GALERIE',
    'nav.blog': 'BLOG',
    'nav.about': 'À PROPOS',
    'nav.search': 'Rechercher',
    'hero.eyebrow': 'PLAYGROUND GAMES · 2026',
    'hero.subtitle': 'ENCYCLOPÉDIE FAN NON OFFICIELLE',
    'hero.cta.explore': 'EXPLORER LE WIKI',
    'hero.cta.characters': 'DÉCOUVRIR ALBION',
    'hero.scroll': 'DÉFILER',
    'stats.characters': 'Personnages',
    'stats.locations': 'Lieux d\'Albion',
    'stats.creatures': 'Créatures',
    'stats.years': 'Ans de développement',
    'featured.story.title': "L'HISTOIRE",
    'featured.story.desc': "Définissez votre propre héroïsme dans un RPG d'action en monde ouvert où chaque choix façonne votre destin.",
    'featured.characters.title': 'PERSONNAGES',
    'featured.characters.desc': "Des protagonistes personnalisables aux PNJ mémorables, découvrez les habitants d'Albion.",
    'featured.world.title': 'ALBION',
    'featured.world.desc': "Explorez les terres enchantées d'Albion où les fins de conte de fées ne sont jamais garanties.",
    'featured.explore': 'EXPLORER',
    'footer.desc': "Wiki fan non officiel dédié au reboot de Fable par Playground Games.",
    'footer.disclaimer': "Ce site est un projet fan non officiel. Fable et tous les personnages et éléments associés sont des marques déposées de Xbox Game Studios / Microsoft Corporation.",
    'footer.made_with': 'Fait avec passion par la communauté PopCodex.',
    'footer.images_credit': 'Images © Xbox Game Studios / Playground Games / Microsoft. Utilisées à titre illustratif.',
    'search.placeholder': 'Rechercher un personnage, lieu, créature…',
    'search.no_results': 'Aucun résultat pour',
    'search.navigate': 'naviguer',
    'search.select': 'sélectionner',
    'search.close': 'fermer',
  },
  en: {
    'nav.home': 'HOME',
    'nav.story': 'STORY',
    'nav.characters': 'CHARACTERS',
    'nav.locations': 'LOCATIONS',
    'nav.creatures': 'CREATURES',
    'nav.gameplay': 'GAMEPLAY',
    'nav.classes': 'CLASSES',
    'nav.lore': 'LORE',
    'nav.gallery': 'GALLERY',
    'nav.blog': 'BLOG',
    'nav.about': 'ABOUT',
    'nav.search': 'Search',
    'hero.eyebrow': 'PLAYGROUND GAMES · 2026',
    'hero.subtitle': 'UNOFFICIAL FAN ENCYCLOPEDIA',
    'hero.cta.explore': 'EXPLORE THE WIKI',
    'hero.cta.characters': 'DISCOVER ALBION',
    'hero.scroll': 'SCROLL',
    'stats.characters': 'Characters',
    'stats.locations': 'Albion locations',
    'stats.creatures': 'Creatures',
    'stats.years': 'Years in development',
    'featured.story.title': 'THE STORY',
    'featured.story.desc': "Define your own heroism in an open-world action RPG where each choice shapes your journey.",
    'featured.characters.title': 'CHARACTERS',
    'featured.characters.desc': "From customizable protagonists to memorable NPCs, discover the inhabitants of Albion.",
    'featured.world.title': 'ALBION',
    'featured.world.desc': "Explore the enchanted lands of Albion where fairytale endings are never guaranteed.",
    'featured.explore': 'EXPLORE',
    'footer.desc': "Unofficial fan wiki dedicated to the Fable reboot by Playground Games.",
    'footer.disclaimer': "This is an unofficial fan project. Fable and all associated characters and elements are trademarks of Xbox Game Studios / Microsoft Corporation.",
    'footer.made_with': 'Made with passion by the PopCodex community.',
    'footer.images_credit': 'Images © Xbox Game Studios / Playground Games / Microsoft. Used for illustrative purposes.',
    'search.placeholder': 'Search a character, location, creature…',
    'search.no_results': 'No results for',
    'search.navigate': 'navigate',
    'search.select': 'select',
    'search.close': 'close',
  },
  es: {
    'nav.home': 'INICIO', 'nav.story': 'HISTORIA', 'nav.characters': 'PERSONAJES', 'nav.locations': 'LUGARES',
    'nav.creatures': 'CRIATURAS', 'nav.gameplay': 'GAMEPLAY', 'nav.classes': 'CLASES', 'nav.lore': 'LORE',
    'nav.gallery': 'GALERÍA', 'nav.blog': 'BLOG', 'nav.about': 'ACERCA DE', 'nav.search': 'Buscar',
    'footer.desc': "Wiki fan no oficial dedicado al reboot de Fable por Playground Games.",
    'footer.disclaimer': "Este es un proyecto fan no oficial. Fable y todos los personajes asociados son marcas registradas de Xbox Game Studios / Microsoft Corporation.",
    'footer.made_with': 'Hecho con pasión por la comunidad PopCodex.',
  },
  pt: {
    'nav.home': 'INÍCIO', 'nav.story': 'HISTÓRIA', 'nav.characters': 'PERSONAGENS', 'nav.locations': 'LOCAIS',
    'nav.creatures': 'CRIATURAS', 'nav.gameplay': 'GAMEPLAY', 'nav.classes': 'CLASSES', 'nav.lore': 'LORE',
    'nav.gallery': 'GALERIA', 'nav.blog': 'BLOG', 'nav.about': 'SOBRE', 'nav.search': 'Pesquisar',
    'footer.desc': "Wiki fan não oficial dedicado ao reboot de Fable pela Playground Games.",
    'footer.disclaimer': "Este é um projeto fan não oficial. Fable e todos os personagens associados são marcas registadas da Xbox Game Studios / Microsoft Corporation.",
    'footer.made_with': 'Feito com paixão pela comunidade PopCodex.',
  },
  it: {
    'nav.home': 'HOME', 'nav.story': 'STORIA', 'nav.characters': 'PERSONAGGI', 'nav.locations': 'LUOGHI',
    'nav.creatures': 'CREATURE', 'nav.gameplay': 'GAMEPLAY', 'nav.classes': 'CLASSI', 'nav.lore': 'LORE',
    'nav.gallery': 'GALLERIA', 'nav.blog': 'BLOG', 'nav.about': 'INFO', 'nav.search': 'Cerca',
    'footer.desc': "Wiki fan non ufficiale dedicato al reboot di Fable di Playground Games.",
    'footer.disclaimer': "Questo è un progetto fan non ufficiale. Fable e tutti i personaggi associati sono marchi di Xbox Game Studios / Microsoft Corporation.",
    'footer.made_with': 'Fatto con passione dalla community PopCodex.',
  },
  ko: {
    'nav.home': '홈', 'nav.story': '스토리', 'nav.characters': '캐릭터', 'nav.locations': '장소',
    'nav.creatures': '크리처', 'nav.gameplay': '게임플레이', 'nav.classes': '클래스', 'nav.lore': '로어',
    'nav.gallery': '갤러리', 'nav.blog': '블로그', 'nav.about': '소개', 'nav.search': '검색',
    'footer.desc': "Playground Games의 Fable 리부트에 대한 비공식 팬 위키.",
    'footer.disclaimer': "비공식 팬 프로젝트입니다. Fable과 모든 관련 캐릭터 및 요소는 Xbox Game Studios / Microsoft Corporation의 상표입니다.",
    'footer.made_with': 'PopCodex 커뮤니티가 열정으로 만듦.',
  },
};

export function useFableI18n(locale: string) {
  const lang = (['fr', 'en', 'es', 'pt', 'it', 'ko'].includes(locale) ? locale : 'en') as Lang;
  const t = useMemo(() => {
    const dict = translations[lang] || translations.en;
    const fallback = translations.en;
    return (key: string) => dict[key] || fallback[key] || key;
  }, [lang]);
  return { t, lang };
}
