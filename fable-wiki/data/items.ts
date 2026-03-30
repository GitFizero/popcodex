import type { Translations } from '@/fable-wiki/context/I18nContext';

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
  WEAPON: { fr: 'Arme', en: 'Weapon' },
  ARMOR: { fr: 'Armure', en: 'Armor' },
  CONSUMABLE: { fr: 'Consommable', en: 'Consumable' },
  MATERIAL: { fr: 'Materiau', en: 'Material' },
  KEY_ITEM: { fr: 'Objet cle', en: 'Key Item' },
};

export const rarityColors: Record<ItemRarity, string> = {
  COMMON: 'text-text-secondary border-border',
  UNCOMMON: 'text-green-400 border-green-400/30',
  RARE: 'text-blue-400 border-blue-400/30',
  EPIC: 'text-purple-400 border-purple-400/30',
  LEGENDARY: 'text-gold-bright border-gold-mid/50',
};
