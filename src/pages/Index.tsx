
import React, { useState } from 'react';
import { Product, Vote } from '@/types/Product';
import StartScreen from '@/components/StartScreen';
import SwipeScreen from '@/components/SwipeScreen';
import FinalScreen from '@/components/FinalScreen';
import ThankYouScreen from '@/components/ThankYouScreen';

type AppState = 'start' | 'voting' | 'final' | 'thankyou';

const Index = () => {
  const [currentState, setCurrentState] = useState<AppState>('start');
  const [votes, setVotes] = useState<Vote[]>([]);
  const [progress, setProgress] = useState({
    categoryIndex: 0,
    productIndex: 0
  });

  const categories: Array<'backpack' | 'powerbank' | 'bottle'> = ['backpack', 'powerbank', 'bottle'];

  const handleStart = () => {
    setCurrentState('voting');
    setVotes([]);
    setProgress({ categoryIndex: 0, productIndex: 0 });
  };

  const handleVote = (product: Product, vote: 'yes' | 'no') => {
    const newVote: Vote = {
      productId: product.id,
      productName: product.name,
      category: product.category,
      vote: vote
    };
    
    const newVotes = [...votes, newVote];
    setVotes(newVotes);

    // Calculate next position
    let nextProductIndex = progress.productIndex + 1;
    let nextCategoryIndex = progress.categoryIndex;

    if (nextProductIndex >= 3) {
      // Move to next category
      nextProductIndex = 0;
      nextCategoryIndex += 1;
    }

    if (nextCategoryIndex >= 3) {
      // All categories done, go to final screen
      setCurrentState('final');
    } else {
      // Update progress
      setProgress({
        categoryIndex: nextCategoryIndex,
        productIndex: nextProductIndex
      });
    }
  };

  const handleThankYou = () => {
    setCurrentState('thankyou');
  };

  const handleRestart = () => {
    setCurrentState('start');
    setVotes([]);
    setProgress({ categoryIndex: 0, productIndex: 0 });
  };

  const getStepNumber = (): number => progress.categoryIndex + 1;

  console.log('Current state:', currentState);
  console.log('Current votes:', votes);
  console.log('Progress:', progress);

  return (
    <div className="min-h-screen bg-transa-bg">
      {currentState === 'start' && (
        <StartScreen onStart={handleStart} />
      )}
      
      {currentState === 'voting' && (
        <SwipeScreen 
          category={categories[progress.categoryIndex]}
          step={getStepNumber()}
          productIndex={progress.productIndex}
          onVoteSubmitted={handleVote}
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
