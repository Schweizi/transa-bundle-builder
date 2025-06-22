
import React, { useState } from 'react';
import { Product, Vote } from '@/types/Product';
import StartScreen from '@/components/StartScreen';
import SwipeScreen from '@/components/SwipeScreen';
import FinalScreen from '@/components/FinalScreen';
import ThankYouScreen from '@/components/ThankYouScreen';

type AppState = 'start' | 'backpack' | 'powerbank' | 'bottle' | 'final' | 'thankyou';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('start');
  const [votes, setVotes] = useState<Vote[]>([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handleStart = () => {
    setCurrentState('backpack');
    setVotes([]);
    setCurrentCategoryIndex(0);
  };

  const handleVoteSubmitted = (product: Product, vote: 'yes' | 'no') => {
    const newVote: Vote = {
      productId: product.id,
      productName: product.name,
      category: product.category,
      vote: vote
    };
    
    const newVotes = [...votes, newVote];
    setVotes(newVotes);

    // Prüfe ob alle 3 Produkte einer Kategorie bewertet wurden
    const votesInCurrentCategory = newVotes.filter(v => v.category === product.category);
    
    if (votesInCurrentCategory.length === 3) {
      // Wechsle zur nächsten Kategorie oder zum finalen Screen
      if (currentState === 'backpack') {
        setCurrentState('powerbank');
        setCurrentCategoryIndex(0);
      } else if (currentState === 'powerbank') {
        setCurrentState('bottle');
        setCurrentCategoryIndex(0);
      } else if (currentState === 'bottle') {
        setCurrentState('final');
      }
    } else {
      // Gehe zum nächsten Produkt in derselben Kategorie
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    }
  };

  const handleThankYou = () => {
    setCurrentState('thankyou');
  };

  const handleRestart = () => {
    setCurrentState('start');
    setVotes([]);
    setCurrentCategoryIndex(0);
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
  console.log('Current votes:', votes);
  console.log('Current category index:', currentCategoryIndex);

  return (
    <div className="min-h-screen bg-transa-bg">
      {currentState === 'start' && (
        <StartScreen onStart={handleStart} />
      )}
      
      {(currentState === 'backpack' || currentState === 'powerbank' || currentState === 'bottle') && (
        <SwipeScreen 
          category={currentState}
          step={getStepNumber(currentState)}
          productIndex={currentCategoryIndex}
          onVoteSubmitted={handleVoteSubmitted}
        />
      )}
      
      {currentState === 'final' && (
        <FinalScreen 
          votes={votes}
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
