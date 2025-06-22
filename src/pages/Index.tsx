
import React, { useState } from 'react';
import { Product, SelectedBundle } from '@/types/Product';
import StartScreen from '@/components/StartScreen';
import SwipeScreen from '@/components/SwipeScreen';
import FinalScreen from '@/components/FinalScreen';
import ThankYouScreen from '@/components/ThankYouScreen';

type AppState = 'start' | 'backpack' | 'powerbank' | 'bottle' | 'final' | 'thankyou';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('start');
  const [selectedBundle, setSelectedBundle] = useState<SelectedBundle>({});

  const handleStart = () => {
    setCurrentState('backpack');
    setSelectedBundle({});
  };

  const handleProductSelected = (product: Product) => {
    const newBundle = { ...selectedBundle };
    
    switch (product.category) {
      case 'backpack':
        newBundle.backpack = product;
        setSelectedBundle(newBundle);
        setCurrentState('powerbank');
        break;
      case 'powerbank':
        newBundle.powerbank = product;
        setSelectedBundle(newBundle);
        setCurrentState('bottle');
        break;
      case 'bottle':
        newBundle.bottle = product;
        setSelectedBundle(newBundle);
        setCurrentState('final');
        break;
    }
  };

  const handleThankYou = () => {
    setCurrentState('thankyou');
  };

  const handleRestart = () => {
    setCurrentState('start');
    setSelectedBundle({});
  };

  const getStepNumber = (state: AppState): number => {
    switch (state) {
      case 'backpack': return 1;
      case 'powerbank': return 2;
      case 'bottle': return 3;
      default: return 1;
    }
  };

  console.log('Current state:', currentState);
  console.log('Selected bundle:', selectedBundle);

  return (
    <div className="min-h-screen bg-transa-bg">
      {currentState === 'start' && (
        <StartScreen onStart={handleStart} />
      )}
      
      {(currentState === 'backpack' || currentState === 'powerbank' || currentState === 'bottle') && (
        <SwipeScreen 
          category={currentState}
          step={getStepNumber(currentState)}
          onProductSelected={handleProductSelected}
        />
      )}
      
      {currentState === 'final' && (
        <FinalScreen 
          bundle={selectedBundle}
          onThankYou={handleThankYou}
          onRestart={handleRestart}
        />
      )}
      
      {currentState === 'thankyou' && (
        <ThankYouScreen 
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default Index;
