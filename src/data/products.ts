
import { Product } from '@/types/Product';

export const products: Product[] = [
  // Backpacks
  {
    id: 'backpack-1',
    name: 'Explorer Pro 45L',
    description: 'Robuster Trekkingrucksack für mehrtägige Touren',
    image: 'https://images.unsplash.com/photo-1577982886439-54b294318d17?w=500&h=600&fit=crop',
    category: 'backpack'
  },
  {
    id: 'backpack-2',
    name: 'Urban Adventure 30L',
    description: 'Vielseitiger Rucksack für Stadt und Natur',
    image: 'https://images.unsplash.com/photo-1621961238992-992815a519a7?w=500&h=600&fit=crop',
    category: 'backpack'
  },
  {
    id: 'backpack-3',
    name: 'Summit Peak 60L',
    description: 'Großvolumiger Rucksack für Expeditionen',
    image: 'https://images.unsplash.com/photo-1588721936?w=500&h=600&fit=crop',
    category: 'backpack'
  },
  
  // Powerbanks
  {
    id: 'powerbank-1',
    name: 'Solar Power 20000mAh',
    description: 'Solarbetriebene Powerbank für lange Touren',
    image: 'https://images.unsplash.com/photo-1616448378583-04b383733221?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  {
    id: 'powerbank-2',
    name: 'Compact Charge 10000mAh',
    description: 'Leichte und kompakte Energiereserve',
    image: 'https://images.unsplash.com/photo-1609592043331-8e6c96bdbc72?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  {
    id: 'powerbank-3',
    name: 'Rugged Power 25000mAh',
    description: 'Wasserdichte Powerbank für extreme Bedingungen',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  
  // Bottles
  {
    id: 'bottle-1',
    name: 'Thermo Steel 750ml',
    description: 'Isolierte Edelstahlflasche für optimale Temperatur',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=600&fit=crop',
    category: 'bottle'
  },
  {
    id: 'bottle-2',
    name: 'Ultra Light 500ml',
    description: 'Ultraleichte Flasche für Gewichtsbewusste',
    image: 'https://images.unsplash.com/photo-1544940244-6545dbd71280?w=500&h=600&fit=crop',
    category: 'bottle'
  },
  {
    id: 'bottle-3',
    name: 'Adventure Hydro 1L',
    description: 'Große Trinkflasche für den ganzen Tag',
    image: 'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?w=500&h=600&fit=crop',
    category: 'bottle'
  }
];

export const getProductsByCategory = (category: 'backpack' | 'powerbank' | 'bottle'): Product[] => {
  return products.filter(product => product.category === category);
};
