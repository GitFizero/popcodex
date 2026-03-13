import type { Translations } from '@/crimson-desert-wiki/context/I18nContext';

export interface Mount {
  id: string;
  name: Translations;
  description: Translations;
  staminaRequired: number | null;
  location: Translations;
  speed: number | null;
  known: boolean;
}

// Mount details have not been officially confirmed by Pearl Abyss.
// Mounts are confirmed to exist in the game but specific details are unknown.
export const mounts: Mount[] = [];

export const TOTAL_MOUNTS = 29;
