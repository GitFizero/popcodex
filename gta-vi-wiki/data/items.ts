import type { Translations } from '@/gta-vi-wiki/context/I18nContext';

export type ItemRarity = 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY';
export type ItemType = 'WEAPON' | 'ARMOR' | 'CONSUMABLE' | 'MATERIAL' | 'KEY_ITEM';

export interface Item {
  id: string;
  name: Translations;
  type: ItemType;
  rarity: ItemRarity;
  description: Translations;
  acquisition: Translations;
  stats?: Record<string, number>;
  image?: string;
}

export const items: Item[] = [];

export const itemTypeLabels: Record<ItemType, Translations> = {
  WEAPON: { fr: 'Arme', en: 'Weapon', es: 'Arma' },
  ARMOR: { fr: 'Protection', en: 'Protection', es: 'Proteccion' },
  CONSUMABLE: { fr: 'Consommable', en: 'Consumable', es: 'Consumible' },
  MATERIAL: { fr: 'Materiau', en: 'Material', es: 'Material' },
  KEY_ITEM: { fr: 'Objet cle', en: 'Key Item', es: 'Objeto clave' },
};

export const rarityColors: Record<ItemRarity, string> = {
  COMMON: 'text-text-secondary border-border',
  UNCOMMON: 'text-green-400 border-green-400/30',
  RARE: 'text-blue-400 border-blue-400/30',
  EPIC: 'text-purple-400 border-purple-400/30',
  LEGENDARY: 'text-yellow-400 border-yellow-400/30',
};
