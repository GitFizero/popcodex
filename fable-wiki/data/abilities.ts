import type { Translations } from '@/fable-wiki/context/I18nContext';

export interface SkillNode {
  id: string;
  name: Translations;
  description: Translations;
  type: 'combat' | 'magic' | 'exploration' | 'passive';
  level: number;
  unlocked: boolean;
  keystone: boolean;
  x: number;
  y: number;
  connections: string[];
}

export const skillTree: SkillNode[] = [];

export const typeLabels: Record<string, Translations> = {
  combat: { fr: 'COMBAT', en: 'COMBAT' },
  magic: { fr: 'MAGIE', en: 'MAGIC' },
  exploration: { fr: 'EXPLORATION', en: 'EXPLORATION' },
  passive: { fr: 'PASSIF', en: 'PASSIVE' },
};
