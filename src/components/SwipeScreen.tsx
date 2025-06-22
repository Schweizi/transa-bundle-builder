
import React, { useState, useEffect } from 'react';
import { Product } from '@/types/Product';
import { getProductsByCategory } from '@/data/products';
import ProductCard from './ProductCard';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';
import { Heart, X } from 'lucide-react';

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
  const [products] = useState<Product[]>(getProductsByCategory(category));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentProduct = products[currentIndex];

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (direction === 'right') {
      // Product selected
      setTimeout(() => {
        onProductSelected(currentProduct);
      }, 300);
    } else {
      // Product rejected, show next
      setTimeout(() => {
        if (currentIndex < products.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0); // Loop back to first product
        }
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleButtonClick = (direction: 'left' | 'right') => {
    handleSwipe(direction);
  };

  useEffect(() => {
    setCurrentIndex(0);
    setIsAnimating(false);
  }, [category]);

  if (!currentProduct) {
    return null;
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
        
        <div className="flex justify-center mb-8">
          <ProductCard 
            product={currentProduct}
            onSwipe={handleSwipe}
            isAnimating={isAnimating}
          />
        </div>
        
        <div className="flex justify-center space-x-6">
          <Button
            onClick={() => handleButtonClick('left')}
            disabled={isAnimating}
            className="w-16 h-16 rounded-full bg-transa-red hover:bg-transa-red/90 text-white shadow-lg transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
          >
            <X size={24} />
          </Button>
          
          <Button
            onClick={() => handleButtonClick('right')}
            disabled={isAnimating}
            className="w-16 h-16 rounded-full bg-transa-turquoise hover:bg-transa-turquoise/90 text-white shadow-lg transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:hover:scale-100"
          >
            <Heart size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SwipeScreen;
