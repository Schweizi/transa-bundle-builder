
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/Product';
import { getProductsByCategory } from '@/data/products';
import ProductCard from './ProductCard';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';
import { Heart, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

interface SwipeScreenProps {
  category: 'backpack' | 'powerbank' | 'bottle';
  step: number;
  onProductSelected: (product: Product) => void;
}

const categoryTitles = {
  backpack: 'Wähle deinen Rucksack',
  powerbank: 'Wähle deine Powerbank',
  bottle: 'Wähle deine Trinkflasche'
};

const SwipeScreen: React.FC<SwipeScreenProps> = ({ category, step, onProductSelected }) => {
  const products = getProductsByCategory(category);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [category]);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (direction === 'right') {
      onProductSelected(products[currentIndex]);
    } else {
      // Direkt und synchron zum nächsten Produkt wechseln
      if (currentIndex < products.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(0); 
      }
    }
  };

  if (!products || products.length === 0) {
    return <div>Keine Produkte in dieser Kategorie.</div>;
  }

  return (
    <div className="min-h-screen bg-transa-bg flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <ProgressBar currentStep={step} totalSteps={3} />
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-transa-text mb-2">
            Schritt {step}/3: {categoryTitles[category]}
          </h2>
          <p className="text-transa-text/70">
            Swipe nach rechts für "Ja" oder nach links für "Nein"
          </p>
        </div>
        
        <div className="flex justify-center items-center h-96 mb-8">
          <AnimatePresence>
            <ProductCard 
              key={products[currentIndex].id}
              product={products[currentIndex]}
              onSwipe={handleSwipe}
            />
          </AnimatePresence>
        </div>
        
        <div className="flex justify-center space-x-6">
          <Button
            onClick={() => handleSwipe('left')}
            className="w-16 h-16 rounded-full bg-transa-red hover:bg-transa-red/90 text-white shadow-lg"
          >
            <X size={24} />
          </Button>
          
          <Button
            onClick={() => handleSwipe('right')}
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
