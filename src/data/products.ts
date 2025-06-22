
import { Product } from '@/types/Product';

export const products: Product[] = [
  // 3 Rucksäcke
  {
    id: 'backpack-1',
    name: 'Patagonia Arbor Grande',
    description: 'Nachhaltiger 32L Rucksack für Alltag und Outdoor.',
    image: '/lovable-uploads/80791397-b3f6-4bf8-afab-b4da50322988.png',
    category: 'backpack'
  },
  {
    id: 'backpack-2',
    name: 'Patagonia Arbor Classic',
    description: 'Vielseitiger 25L Daypack in auffälligem Design.',
    image: '/lovable-uploads/40b0ec52-3cc2-4b41-be48-fb3aa3c7e56d.png',
    category: 'backpack'
  },
  {
    id: 'backpack-3',
    name: 'RAB Aeon 25',
    description: 'Leichter und flexibler Rucksack für schnelle Touren.',
    image: '/lovable-uploads/c0af86cd-cc86-405f-8013-515448b00c54.png',
    category: 'backpack'
  },
  
  // 3 Powerbanks
  {
    id: 'powerbank-1',
    name: 'Nitecore Carbon Battery 6K',
    description: 'Ultraleichte 6000mAh Powerbank mit Carbon-Design.',
    image: '/lovable-uploads/8ef13881-37e3-4d13-acc3-3861ed7ebf6f.png',
    category: 'powerbank'
  },
  {
    id: 'powerbank-2',
    name: 'Nitecore NB Air 5000mAh',
    description: 'Extrem leichte Carbon-Powerbank für unterwegs.',
    image: '/lovable-uploads/5b83f425-843c-4bdb-b37b-8520a1ba0a05.png',
    category: 'powerbank'
  },
  {
    id: 'powerbank-3',
    name: 'Anker PowerCore 10000',
    description: 'Ein bewährter Klassiker, klein aber leistungsstark.',
    image: 'https://images.unsplash.com/photo-1609592043331-8e6c96bdbc72?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  
  // 3 Trinkflaschen
  {
    id: 'bottle-1',
    name: 'Sigg Shield Therm ONE',
    description: 'Hochwertige Thermosflasche, hält 24h kalt.',
    image: '/lovable-uploads/3c62dbf6-fb67-466c-b98b-be2cc18189b0.png',
    category: 'bottle'
  },
  {
    id: 'bottle-2',
    name: 'Primus TrailBreak Vacuum',
    description: 'Leichte Thermosflasche in verschiedenen Farben.',
    image: '/lovable-uploads/1d4986b6-ea44-4db2-9efd-9fea7ab2b59d.png',
    category: 'bottle'
  },
  {
    id: 'bottle-3',
    name: 'Hydro Flask Standard Mouth',
    description: 'Stylische Isolierflasche mit perfekter Haptik.',
    image: '/lovable-uploads/582e2527-c25e-4e98-b38f-c2b3ed234481.png',
    category: 'bottle'
  }
];

export const getProductsByCategory = (category: 'backpack' | 'powerbank' | 'bottle'): Product[] => {
  return products.filter(product => product.category === category);
};
