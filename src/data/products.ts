
import { Product } from '@/types/Product';

export const products: Product[] = [
  // 3 Rucksäcke
  {
    id: 'backpack-1',
    name: 'Patagonia Arbor Grande',
    description: 'Nachhaltiger 32L Rucksack für Alltag und Outdoor.',
    image: '/lovable-uploads/502d89e3-75b5-4f42-9fe2-0c80a9d3a239.png',
    category: 'backpack'
  },
  {
    id: 'backpack-2',
    name: 'The North Face Berkeley',
    description: 'Vielseitiger 25L Daypack in auffälligem Design.',
    image: '/lovable-uploads/a044632d-5e15-4c3c-aacb-331ffef3e5ae.png',
    category: 'backpack'
  },
  {
    id: 'backpack-3',
    name: 'Vaude CityGo 30',
    description: 'Umweltfreundlicher 30L Rucksack für urbane Abenteuer.',
    image: '/lovable-uploads/a4040e73-6cdd-4b13-87c9-7f83a3ad2c0d.png',
    category: 'backpack'
  },
  
  // 3 Powerbanks
  {
    id: 'powerbank-1',
    name: 'Nitecore Carbon 6K',
    description: 'Ultraleichte 6000mAh Powerbank mit Carbon-Design.',
    image: '/lovable-uploads/8e264756-bb22-4d5f-894c-ed180eceb943.png',
    category: 'powerbank'
  },
  {
    id: 'powerbank-2',
    name: 'Nitecore NB Lite',
    description: 'Kompakte 15000mAh Powerbank für längere Touren.',
    image: '/lovable-uploads/ea2e002b-1741-40a2-9747-289c949f1ddd.png',
    category: 'powerbank'
  },
  {
    id: 'powerbank-3',
    name: 'Sunslice Gravity 27',
    description: 'Große 27000mAh Kapazität für maximale Ausdauer.',
    image: '/lovable-uploads/0d3032dd-4edd-4199-b21d-8e3d6a1bd3fa.png',
    category: 'powerbank'
  },
  
  // 3 Trinkflaschen
  {
    id: 'bottle-1',
    name: 'Hydro Flask Standard',
    description: 'Klassische Isolierflasche - hält 12h heiß, 24h kalt.',
    image: '/lovable-uploads/6de68ac4-6347-4332-9541-acebe4efc49a.png',
    category: 'bottle'
  },
  {
    id: 'bottle-2',
    name: 'Primus TrailBreak Vacuum',
    description: 'Leichte Thermosflasche in verschiedenen Farben.',
    image: '/lovable-uploads/a9e08632-36ba-48f9-b095-a9436e267643.png',
    category: 'bottle'
  },
  {
    id: 'bottle-3',
    name: 'SIGG Explorer',
    description: 'Robuste Einhandflasche mit ergonomischem Design.',
    image: '/lovable-uploads/ce712e2d-0c06-47c4-a8a0-400aece2741f.png',
    category: 'bottle'
  }
];

export const getProductsByCategory = (category: 'backpack' | 'powerbank' | 'bottle'): Product[] => {
  return products.filter(product => product.category === category);
};
