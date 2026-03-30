import type { Translations } from '@/fable-wiki/context/I18nContext';

export interface Mount {
  id: string;
  name: Translations;
  description: Translations;
  staminaRequired: number | null;
  location: Translations;
  speed: number | null;
  known: boolean;
}

// Mount details have not been officially confirmed by Playground Games.
export const mounts: Mount[] = [];

export const TOTAL_MOUNTS = 0;
