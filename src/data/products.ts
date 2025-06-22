
import { Product } from '@/types/Product';

export const products: Product[] = [
  // 3 Rucksäcke
  {
    id: 'backpack-1',
    name: 'Vaude CityGo 23 II',
    description: 'Moderner Stadtrucksack mit vielseitigen Features.',
    image: '/lovable-uploads/618a81d0-824a-498d-8feb-dd23117af366.png',
    category: 'backpack'
  },
  {
    id: 'backpack-2',
    name: 'RAB Aeon 25',
    description: 'Leichter und flexibler Rucksack für schnelle Touren.',
    image: '/lovable-uploads/a9e08632-36ba-48f9-b095-a9436e267643.png',
    category: 'backpack'
  },
  {
    id: 'backpack-3',
    name: 'The North Face Base Camp',
    description: 'Extrem robuster und wasserabweisender Tagesrucksack.',
    image: '/lovable-uploads/40b0ec52-3cc2-4b41-be48-fb3aa3c7e56d.png',
    category: 'backpack'
  },
  
  // 3 Powerbanks
  {
    id: 'powerbank-1',
    name: 'Nitecore NB Air 5000mAh',
    description: 'Extrem leichte Carbon-Powerbank für unterwegs.',
    image: '/lovable-uploads/8e264756-bb22-4d5f-894c-ed180eceb943.png',
    category: 'powerbank'
  },
  {
    id: 'powerbank-2',
    name: 'Nitecore Carbon Battery 6K',
    description: 'Kompakte 6000mAh Energie für deine Geräte.',
    image: '/lovable-uploads/a4040e73-6cdd-4b13-87c9-7f83a3ad2c0d.png',
    category: 'powerbank'
  },
   {
    id: 'powerbank-3',
    name: 'Anker PowerCore 10000',
    description: 'Ein bewährter Klassiker, klein aber leistungsstark.',
    image: '/lovable-uploads/0ac72ead-b902-49aa-a89e-57fc2d90fdfd.png',
    category: 'powerbank'
  },
  
  // 3 Trinkflaschen
  {
    id: 'bottle-1',
    name: 'Sigg Shield Therm ONE',
    description: 'Hochwertige Thermosflasche, hält 24h kalt.',
    image: '/lovable-uploads/502d89e3-75b5-4f42-9fe2-0c80a9d3a239.png',
    category: 'bottle'
  },
  {
    id: 'bottle-2',
    name: 'Nalgene Weithals 1L',
    description: 'Der unzerstörbare Klassiker für jedes Abenteuer.',
    image: '/lovable-uploads/327c5f48-1bd6-4dab-8b2f-e1aa180812e2.png',
    category: 'bottle'
  },
  {
    id: 'bottle-3',
    name: 'Hydro Flask Standard Mouth',
    description: 'Stylische Isolierflasche mit perfekter Haptik.',
    image: '/lovable-uploads/0d3032dd-4edd-4199-b21d-8e3d6a1bd3fa.png',
    category: 'bottle'
  }
];

export const getProductsByCategory = (category: 'backpack' | 'powerbank' | 'bottle'): Product[] => {
  return products.filter(product => product.category === category);
};
