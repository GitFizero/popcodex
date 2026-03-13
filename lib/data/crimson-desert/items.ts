import type { Translations } from './i18n';

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

// Item details have not been officially confirmed by Pearl Abyss.
// This array will be populated when official information is available.
export const items: Item[] = [];

export const itemTypeLabels: Record<ItemType, Translations> = {
  WEAPON: { fr: 'Arme', en: 'Weapon', es: 'Arma', it: 'Arma', ko: '무기' },
  ARMOR: { fr: 'Armure', en: 'Armor', es: 'Armadura', it: 'Armatura', ko: '방어구' },
  CONSUMABLE: { fr: 'Consommable', en: 'Consumable', es: 'Consumible', it: 'Consumabile', ko: '소모품' },
  MATERIAL: { fr: 'Matériau', en: 'Material', es: 'Material', it: 'Materiale', ko: '재료' },
  KEY_ITEM: { fr: 'Objet clé', en: 'Key Item', es: 'Objeto clave', it: 'Oggetto chiave', ko: '핵심 아이템' },
};

export const rarityColors: Record<ItemRarity, string> = {
  COMMON: 'text-text-secondary border-border',
  UNCOMMON: 'text-green-400 border-green-400/30',
  RARE: 'text-blue-400 border-blue-400/30',
  EPIC: 'text-purple-400 border-purple-400/30',
  LEGENDARY: 'text-gold-bright border-gold-mid/50',
};
