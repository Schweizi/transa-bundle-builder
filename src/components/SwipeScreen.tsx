
import React from 'react';
import { Product } from '@/types/Product';
import { getProductsByCategory } from '@/data/products';
import ProductCard from './ProductCard';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';
import { Heart, X } from 'lucide-react';

interface SwipeScreenProps {
  category: 'backpack' | 'powerbank' | 'bottle';
  step: number;
  productIndex: number;
  onVoteSubmitted: (product: Product, vote: 'yes' | 'no') => void;
}

const categoryTitles = {
  backpack: 'Bewerte die Rucksäcke',
  powerbank: 'Bewerte die Powerbanks',
  bottle: 'Bewerte die Trinkflaschen'
};

const SwipeScreen: React.FC<SwipeScreenProps> = ({ category, step, productIndex, onVoteSubmitted }) => {
  const products = getProductsByCategory(category);
  const currentProduct = products[productIndex];

  const handleVote = (vote: 'yes' | 'no') => {
    if (currentProduct) {
      onVoteSubmitted(currentProduct, vote);
    }
  };

  if (!products || products.length === 0 || !currentProduct) {
    return <div>Keine Produkte in dieser Kategorie.</div>;
  }

  const progressInCategory = ((productIndex + 1) / 3) * 100;

  return (
    <div className="min-h-screen bg-transa-bg flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <ProgressBar currentStep={step} totalSteps={3} />
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-transa-text mb-2">
            Schritt {step}/3: {categoryTitles[category]}
          </h2>
          <p className="text-transa-text/70 mb-2">
            Swipe nach rechts für "Ja" oder nach links für "Nein"
          </p>
          <div className="text-sm text-transa-text/50">
            Produkt {productIndex + 1} von 3 in dieser Kategorie
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1 mt-2">
            <div 
              className="bg-transa-turquoise h-1 rounded-full transition-all duration-300"
              style={{ width: `${progressInCategory}%` }}
            />
          </div>
        </div>
        
        <div className="flex justify-center items-center h-96 mb-8">
          <ProductCard 
            key={currentProduct.id}
            product={currentProduct}
            onSwipe={(direction) => handleVote(direction === 'right' ? 'yes' : 'no')}
          />
        </div>
        
        <div className="flex justify-center space-x-6">
          <Button
            onClick={() => handleVote('no')}
            className="w-16 h-16 rounded-full bg-transa-red hover:bg-transa-red/90 text-white shadow-lg"
          >
            <X size={24} />
          </Button>
          
          <Button
            onClick={() => handleVote('yes')}
            className="w-16 h-16 rounded-full bg-transa-turquoise hover:bg-transa-turquoise/90 text-white shadow-lg"
          >
            <Heart size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SwipeScreen;
