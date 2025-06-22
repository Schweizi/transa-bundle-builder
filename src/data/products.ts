
import { Product } from '@/types/Product';

export const products: Product[] = [
  // 3 Rucksäcke
  {
    id: 'backpack-1',
    name: 'Vaude CityGo 23 II',
    description: 'Moderner Stadtrucksack mit vielseitigen Features.',
    image: 'https://storage.googleapis.com/lovable-public-assets/project-data/df1b5588-8322-4cb6-986b-797ba92de181/Rucksack%20Vaude%20CityGo%2023%20II.jpg',
    category: 'backpack'
  },
  {
    id: 'backpack-2',
    name: 'RAB Aeon 25',
    description: 'Leichter und flexibler Rucksack für schnelle Touren.',
    image: 'https://storage.googleapis.com/lovable-public-assets/project-data/df1b5588-8322-4cb6-986b-797ba92de181/Rucksack%20RAB%20Aeon%2025.jpg',
    category: 'backpack'
  },
  {
    id: 'backpack-3',
    name: 'The North Face Base Camp',
    description: 'Extrem robuster und wasserabweisender Tagesrucksack.',
    image: 'https://storage.googleapis.com/lovable-public-assets/project-data/df1b5588-8322-4cb6-986b-797ba92de181/Rucksack%20The%20North%20Face%20Base%20Camp%20Daypack.jpg',
    category: 'backpack'
  },
  
  // 3 Powerbanks
  {
    id: 'powerbank-1',
    name: 'Nitecore NB Air 5000mAh',
    description: 'Extrem leichte Carbon-Powerbank für unterwegs.',
    image: 'https://storage.googleapis.com/lovable-public-assets/project-data/df1b5588-8322-4cb6-986b-797ba92de181/Nitecore%20Powerbank%20NB%20Air%205000mAh.jpg',
    category: 'powerbank'
  },
  {
    id: 'powerbank-2',
    name: 'Nitecore Carbon Battery 6K',
    description: 'Kompakte 6000mAh Energie für deine Geräte.',
    image: 'https://storage.googleapis.com/lovable-public-assets/project-data/df1b5588-8322-4cb6-986b-797ba92de181/Nitecore%20Powerbank%20Carbon%20Battery.jpg',
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
    image: 'https://storage.googleapis.com/lovable-public-assets/project-data/df1b5588-8322-4cb6-986b-797ba92de181/Flasche%20Sigg%20Shield%20Therm%20ONE.jpg',
    category: 'bottle'
  },
  {
    id: 'bottle-2',
    name: 'Nalgene Weithals 1L',
    description: 'Der unzerstörbare Klassiker für jedes Abenteuer.',
    image: 'https://images.unsplash.com/photo-1571770095004-6b61b1cf308a?w=500&h=600&fit=crop',
    category: 'bottle'
  },
  {
    id: 'bottle-3',
    name: 'Hydro Flask Standard Mouth',
    description: 'Stylische Isolierflasche mit perfekter Haptik.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=600&fit=crop',
    category: 'bottle'
  }
];

export const getProductsByCategory = (category: 'backpack' | 'powerbank' | 'bottle'): Product[] => {
  return products.filter(product => product.category === category);
};
