import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

export interface Vehicle {
  id: string;
  name: Translations;
  description: Translations;
  topSpeed: number | null;
  location: Translations;
  handling: number | null;
  known: boolean;
}

export const vehicles: Vehicle[] = [];

export const TOTAL_VEHICLES = 200;
