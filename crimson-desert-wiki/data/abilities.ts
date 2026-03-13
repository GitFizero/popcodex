import type { Translations } from '@/crimson-desert-wiki/context/I18nContext';

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

// Skill tree details have not been officially confirmed by Pearl Abyss.
// This array will be populated when official information is available.
export const skillTree: SkillNode[] = [];

export const typeLabels: Record<string, Translations> = {
  combat: { fr: 'COMBAT', en: 'COMBAT', ko: '전투' },
  magic: { fr: 'MAGIE', en: 'MAGIC', ko: '마법' },
  exploration: { fr: 'EXPLORATION', en: 'EXPLORATION', ko: '탐험' },
  passive: { fr: 'PASSIF', en: 'PASSIVE', ko: '패시브' },
};
