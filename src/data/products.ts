
import { Product } from '@/types/Product';

export const products: Product[] = [
  // 3 Rucksäcke
  {
    id: 'backpack-1',
    name: 'Explorer Pro 55L',
    description: 'Für anspruchsvolle Hochtouren mit viel Ausrüstung.',
    image: '/lovable-uploads/531ee38c-183f-4c63-bb07-cc9cf6413c22.png',
    category: 'backpack'
  },
  {
    id: 'backpack-2',
    name: 'Trailblazer 35L',
    description: 'Der perfekte Allrounder für Tages- und Wochenendwanderungen.',
    image: '/lovable-uploads/7fe0fdf1-aecc-4274-b1f9-7f0fb03fa256.png',
    category: 'backpack'
  },
  {
    id: 'backpack-3',
    name: 'City Commuter 22L',
    description: 'Stilvoll und funktional für den urbanen Alltag.',
    image: '/lovable-uploads/264ce704-118f-40aa-8e34-e02aa4f2c73d.png',
    category: 'backpack'
  },
  
  // 3 Powerbanks
  {
    id: 'powerbank-1',
    name: 'Solar Charge 20000mAh',
    description: 'Mit Solarpanel für Unabhängigkeit auf langen Touren.',
    image: '/lovable-uploads/327c5f48-1bd6-4dab-8b2f-e1aa180812e2.png',
    category: 'powerbank'
  },
  {
    id: 'powerbank-2',
    name: 'Pocket Rocket 10000mAh',
    description: 'Kompakt und leicht, passt in jede Hosentasche.',
    image: '/lovable-uploads/aedeccef-cb1e-48ea-9904-21110ad8671d.png',
    category: 'powerbank'
  },
  {
    id: 'powerbank-3',
    name: 'Endurance Max 25000mAh',
    description: 'Maximale Kapazität für mehrere Ladezyklen.',
    image: '/lovable-uploads/e6ca1939-0c51-4f9f-9d56-9a525323ce22.png',
    category: 'powerbank'
  },
  
  // 3 Trinkflaschen
  {
    id: 'bottle-1',
    name: 'Thermo Steel 1L',
    description: 'Hält Getränke 12h heiss oder 24h kalt. Robust.',
    image: '/lovable-uploads/406643ec-d587-459c-a292-496310730a09.png',
    category: 'bottle'
  },
  {
    id: 'bottle-2',
    name: 'Trail Squeeze 750ml',
    description: 'Leichte, quetschbare Flasche mit Beissventil.',
    image: '/lovable-uploads/0ac72ead-b902-49aa-a89e-57fc2d90fdfd.png',
    category: 'bottle'
  },
  {
    id: 'bottle-3',
    name: 'Crystal Glass 500ml',
    description: 'Geschmacksneutral und stylisch aus Borosilikatglas.',
    image: '/lovable-uploads/8d0e5c33-8e50-4fa2-9e3d-e8f24a930b29.png',
    category: 'bottle'
  }
];

export const getProductsByCategory = (category: 'backpack' | 'powerbank' | 'bottle'): Product[] => {
  return products.filter(product => product.category === category);
};
