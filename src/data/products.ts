
import { Product } from '@/types/Product';

export const products: Product[] = [
  // 5 Rucksäcke
  {
    id: 'backpack-1',
    name: 'Explorer Pro 55L',
    description: 'Für anspruchsvolle Hochtouren mit viel Ausrüstung.',
    image: 'backpack',
    category: 'backpack'
  },
  {
    id: 'backpack-2',
    name: 'Trailblazer 35L',
    description: 'Der perfekte Allrounder für Tages- und Wochenendwanderungen.',
    image: 'backpack',
    category: 'backpack'
  },
  {
    id: 'backpack-3',
    name: 'City Commuter 22L',
    description: 'Stilvoll und funktional für den urbanen Alltag.',
    image: 'backpack',
    category: 'backpack'
  },
  {
    id: 'backpack-4',
    name: 'SpeedLite 18L',
    description: 'Ultraleicht für Trailrunning und schnelle Aufstiege.',
    image: 'backpack',
    category: 'backpack'
  },
  {
    id: 'backpack-5',
    name: 'Voyager 70L',
    description: 'Für lange Reisen und Backpacker-Abenteuer weltweit.',
    image: 'backpack',
    category: 'backpack'
  },
  
  // 5 Powerbanks
  {
    id: 'powerbank-1',
    name: 'Solar Charge 20000mAh',
    description: 'Mit Solarpanel für Unabhängigkeit auf langen Touren.',
    image: 'battery',
    category: 'powerbank'
  },
  {
    id: 'powerbank-2',
    name: 'Pocket Rocket 10000mAh',
    description: 'Kompakt und leicht, passt in jede Hosentasche.',
    image: 'battery',
    category: 'powerbank'
  },
  {
    id: 'powerbank-3',
    name: 'Endurance Max 25000mAh',
    description: 'Maximale Kapazität für mehrere Ladezyklen.',
    image: 'battery',
    category: 'powerbank'
  },
  {
    id: 'powerbank-4',
    name: 'Rugged Armor 15000mAh',
    description: 'Stossfest und wasserdicht für extreme Bedingungen.',
    image: 'battery',
    category: 'powerbank'
  },
  {
    id: 'powerbank-5',
    name: 'Wireless Power 10000mAh',
    description: 'Kabelloses Laden für kompatible Smartphones.',
    image: 'battery',
    category: 'powerbank'
  },
  
  // 5 Trinkflaschen
  {
    id: 'bottle-1',
    name: 'Thermo Steel 1L',
    description: 'Hält Getränke 12h heiss oder 24h kalt. Robust.',
    image: 'cup',
    category: 'bottle'
  },
  {
    id: 'bottle-2',
    name: 'Trail Squeeze 750ml',
    description: 'Leichte, quetschbare Flasche mit Beissventil.',
    image: 'cup',
    category: 'bottle'
  },
  {
    id: 'bottle-3',
    name: 'Crystal Glass 500ml',
    description: 'Geschmacksneutral und stylisch aus Borosilikatglas.',
    image: 'cup',
    category: 'bottle'
  },
  {
    id: 'bottle-4',
    name: 'FilterFlow Active 800ml',
    description: 'Integrierter Wasserfilter für sauberes Wasser unterwegs.',
    image: 'cup',
    category: 'bottle'
  },
  {
    id: 'bottle-5',
    name: 'Minimalist Tritan 1.2L',
    description: 'Grosse, leichte und bruchsichere Kunststoffflasche.',
    image: 'cup',
    category: 'bottle'
  }
];

export const getProductsByCategory = (category: 'backpack' | 'powerbank' | 'bottle'): Product[] => {
  return products.filter(product => product.category === category);
};
