import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

export interface SkillNode {
  id: string;
  name: Translations;
  description: Translations;
  type: 'combat' | 'stealth' | 'driving' | 'passive';
  level: number;
  unlocked: boolean;
  keystone: boolean;
  x: number;
  y: number;
  connections: string[];
}

export const skillTree: SkillNode[] = [];

export const typeLabels: Record<string, Translations> = {
  combat: { fr: 'COMBAT', en: 'COMBAT', es: 'COMBATE' },
  stealth: { fr: 'FURTIVITE', en: 'STEALTH', es: 'SIGILO' },
  driving: { fr: 'CONDUITE', en: 'DRIVING', es: 'CONDUCCION' },
  passive: { fr: 'PASSIF', en: 'PASSIVE', es: 'PASIVO' },
};
