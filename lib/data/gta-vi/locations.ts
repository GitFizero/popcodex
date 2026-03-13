export interface Location {
  id: string;
  name: string;
  color: string;
  neonClass: string;
  description: string;
  characters: string[];
  features: string[];
}

export const locations: Location[] = [
  {
    id: 'vice-city',
    name: 'Vice City',
    color: 'neon-pink',
    neonClass: 'neon-pink-text',
    description: 'The sunniest — and darkest — place in America. Inspirée de Miami, Florida.',
    characters: ['Boobie Ike', 'Dre\'Quan', 'Lucia'],
    features: ['Downtown', 'Clubs', 'Studios', 'Real estate empire']
  },
  {
    id: 'leonida-keys',
    name: 'Leonida Keys',
    color: 'neon-cyan',
    neonClass: 'neon-cyan-text',
    description: 'Au sud de Leonida. Là où les vieux trafiquants coulent des jours tranquilles.',
    characters: ['Jason Duval', 'Brian Heder', 'Cal Hampton'],
    features: ['Boat yards', 'Drug routes', 'Coastal properties']
  },
  {
    id: 'grassrivers',
    name: 'Grassrivers',
    color: 'neon-gold',
    neonClass: 'neon-gold-text',
    description: 'La scène musicale underground de Leonida.',
    characters: ['Dre\'Quan Priest', 'Real Dimez'],
    features: ['Music scene', 'Street culture', 'Clubs']
  },
  {
    id: 'port-gellhorn',
    name: 'Port Gellhorn',
    color: 'neon-orange',
    neonClass: 'neon-orange-text',
    description: 'Le port industriel. Les scores risqués. Les braquages ambitieux.',
    characters: ['Raul Bautista'],
    features: ['Docks', 'Shipping', 'Criminal operations']
  },
  {
    id: 'ambrosia',
    name: 'Ambrosia',
    color: 'neon-purple',
    neonClass: 'neon-purple-text',
    description: 'Le luxe criminel. Là où les gros paris se jouent.',
    characters: ['Raul Bautista'],
    features: ['Luxury', 'High-stakes operations', 'Wealth']
  },
  {
    id: 'mount-kalaga',
    name: 'Mount Kalaga',
    color: 'neon-orange',
    neonClass: 'neon-orange-text',
    description: 'L\'arrière-pays de Leonida. Loin de tout. Proche de rien de légal.',
    characters: ['Brian Heder'],
    features: ['Rural', 'Remote', 'Secluded criminal operations']
  }
];
