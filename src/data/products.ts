
import { Product } from '@/types/Product';

export const products: Product[] = [
  // 5 Rucksäcke
  {
    id: 'backpack-1',
    name: 'Explorer Pro 55L',
    description: 'Für anspruchsvolle Hochtouren mit viel Ausrüstung.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop',
    category: 'backpack'
  },
  {
    id: 'backpack-2',
    name: 'Trailblazer 35L',
    description: 'Der perfekte Allrounder für Tages- und Wochenendwanderungen.',
    image: 'https://images.unsplash.com/photo-1588721936551-3b5a1425e2ce?w=500&h=600&fit=crop',
    category: 'backpack'
  },
  {
    id: 'backpack-3',
    name: 'City Commuter 22L',
    description: 'Stilvoll und funktional für den urbanen Alltag.',
    image: 'https://images.unsplash.com/photo-1621961238992-992815a519a7?w=500&h=600&fit=crop',
    category: 'backpack'
  },
  {
    id: 'backpack-4',
    name: 'SpeedLite 18L',
    description: 'Ultraleicht für Trailrunning und schnelle Aufstiege.',
    image: 'https://images.unsplash.com/photo-1590555288969-e3745a331535?w=500&h=600&fit=crop',
    category: 'backpack'
  },
  {
    id: 'backpack-5',
    name: 'Voyager 70L',
    description: 'Für lange Reisen und Backpacker-Abenteuer weltweit.',
    image: 'https://images.unsplash.com/photo-1577982886439-54b294318d17?w=500&h=600&fit=crop',
    category: 'backpack'
  },
  
  // 5 Powerbanks
  {
    id: 'powerbank-1',
    name: 'Solar Charge 20000mAh',
    description: 'Mit Solarpanel für Unabhängigkeit auf langen Touren.',
    image: 'https://images.unsplash.com/photo-1616448378583-04b383733221?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  {
    id: 'powerbank-2',
    name: 'Pocket Rocket 10000mAh',
    description: 'Kompakt und leicht, passt in jede Hosentasche.',
    image: 'https://images.unsplash.com/photo-1609592043331-8e6c96bdbc72?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  {
    id: 'powerbank-3',
    name: 'Endurance Max 25000mAh',
    description: 'Maximale Kapazität für mehrere Ladezyklen.',
    image: 'https://images.unsplash.com/photo-1628156714025-a1c7b7b35520?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  {
    id: 'powerbank-4',
    name: 'Rugged Armor 15000mAh',
    description: 'Stossfest und wasserdicht für extreme Bedingungen.',
    image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  {
    id: 'powerbank-5',
    name: 'Wireless Power 10000mAh',
    description: 'Kabelloses Laden für kompatible Smartphones.',
    image: 'https://images.unsplash.com/photo-1631553149697-7e26b01b6352?w=500&h=600&fit=crop',
    category: 'powerbank'
  },
  
  // 5 Trinkflaschen
  {
    id: 'bottle-1',
    name: 'Thermo Steel 1L',
    description: 'Hält Getränke 12h heiss oder 24h kalt. Robust.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=600&fit=crop',
    category: 'bottle'
  },
  {
    id: 'bottle-2',
    name: 'Trail Squeeze 750ml',
    description: 'Leichte, quetschbare Flasche mit Beissventil.',
    image: 'https://images.unsplash.com/photo-1613243301389-43c2a42d9921?w=500&h=600&fit=crop',
    category: 'bottle'
  },
  {
    id: 'bottle-3',
    name: 'Crystal Glass 500ml',
    description: 'Geschmacksneutral und stylisch aus Borosilikatglas.',
    image: 'https://images.unsplash.com/photo-1627933132335-e6245c7a452a?w=500&h=600&fit=crop',
    category: 'bottle'
  },
  {
    id: 'bottle-4',
    name: 'FilterFlow Active 800ml',
    description: 'Integrierter Wasserfilter für sauberes Wasser.',
    image: 'https://images.unsplash.com/photo-1551767988-31a618a8e3d6?w=500&h=600&fit=crop',
    category: 'bottle'
  },
  {
    id: 'bottle-5',
    name: 'Minimalist Tritan 1.2L',
    description: 'Grosse, leichte und bruchsichere Kunststoffflasche.',
    image: 'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?w=500&h=600&fit=crop',
    category: 'bottle'
  }
];

export const getProductsByCategory = (category: 'backpack' | 'powerbank' | 'bottle'): Product[] => {
  return products.filter(product => product.category === category);
};
