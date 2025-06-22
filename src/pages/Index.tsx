
import React, { useState } from 'react';
import { Product, SelectedBundle } from '@/types/Product';
import StartScreen from '@/components/StartScreen';
import SwipeScreen from '@/components/SwipeScreen';
import ResultScreen from '@/components/ResultScreen';
import ContactForm from '@/components/ContactForm';

type AppState = 'start' | 'backpack' | 'powerbank' | 'bottle' | 'result' | 'contact';

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
        setCurrentState('result');
        break;
    }
  };

  const handleShowInterest = () => {
    setCurrentState('contact');
  };

  const handleRestart = () => {
    setCurrentState('start');
    setSelectedBundle({});
  };

  const handleBackToResult = () => {
    setCurrentState('result');
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
      
      {currentState === 'result' && (
        <ResultScreen 
          bundle={selectedBundle}
          onShowInterest={handleShowInterest}
          onRestart={handleRestart}
        />
      )}
      
      {currentState === 'contact' && (
        <ContactForm 
          bundle={selectedBundle}
          onBack={handleBackToResult}
        />
      )}
    </div>
  );
};

export default Index;
