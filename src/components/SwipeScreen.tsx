
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/types/Product';
import { getProductsByCategory } from '@/data/products';
import ProductCard from './ProductCard';
import ProgressBar from './ProgressBar';
import { Button } from '@/components/ui/button';
import { Heart, X, RotateCcw } from 'lucide-react';

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
  const products = getProductsByCategory(category); // Fixed: removed useState to update on category change
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const currentProduct = products[currentIndex];
  const allProductsViewed = currentIndex >= products.length; // Check if all products were viewed

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating || allProductsViewed) return;
    
    setIsAnimating(true);
    
    if (direction === 'right') {
      // Product selected - store it and proceed to next category
      setSelectedProduct(currentProduct);
      setTimeout(() => {
        onProductSelected(currentProduct);
      }, 600);
    } else {
      // Product rejected - show next product in same category
      setTimeout(() => {
        if (currentIndex < products.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          // All products viewed, show reset option
          setCurrentIndex(products.length); // Set to beyond array to trigger allProductsViewed
        }
        setIsAnimating(false);
      }, 300);
    }
  };

  const handleButtonClick = (direction: 'left' | 'right') => {
    handleSwipe(direction);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setIsAnimating(false);
  };

  useEffect(() => {
    setCurrentIndex(0);
    setIsAnimating(false);
    setSelectedProduct(null);
  }, [category]);

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
        
        <div className="flex justify-center mb-8 h-96">
          {allProductsViewed ? (
            <div className="flex flex-col items-center justify-center text-center">
              <p className="text-transa-text mb-4">
                Alle Produkte dieser Kategorie angesehen!
              </p>
              <Button
                onClick={handleReset}
                className="bg-transa-turquoise hover:bg-transa-turquoise/90 text-white px-6 py-2 rounded-xl"
              >
                <RotateCcw className="mr-2" size={16} />
                Auswahl zurücksetzen
              </Button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {!selectedProduct && currentProduct && (
                <motion.div
                  key={currentProduct.id}
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ 
                    x: isAnimating ? (Math.random() > 0.5 ? 300 : -300) : 0,
                    rotate: isAnimating ? (Math.random() > 0.5 ? 15 : -15) : 0,
                    opacity: 0,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <ProductCard 
                    product={currentProduct}
                    onSwipe={handleSwipe}
                    isAnimating={isAnimating}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
        
        {!allProductsViewed && (
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
        )}
      </div>
    </div>
  );
};

export default SwipeScreen;
