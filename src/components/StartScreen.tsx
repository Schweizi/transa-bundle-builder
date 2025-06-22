
import React from 'react';
import { Button } from '@/components/ui/button';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-transa-bg flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md w-full space-y-8">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-transa-turquoise mb-2">TRANSA</h1>
          <div className="w-16 h-1 bg-transa-yellow mx-auto"></div>
        </div>
        
        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-transa-text leading-tight">
          Stelle dein<br />
          <span className="text-transa-turquoise">Explorer Kit</span><br />
          zusammen
        </h2>
        
        {/* Description */}
        <p className="text-lg text-transa-text/80 leading-relaxed">
          Entdecke dein perfektes 3-teiliges Outdoor-Bundle durch eine spielerische Auswahl. 
          Swipe dich durch unsere Produkte und stelle dein persönliches Kit zusammen!
        </p>
        
        {/* Start Button */}
        <Button 
          onClick={onStart}
          className="w-full py-4 text-lg font-semibold bg-transa-turquoise hover:bg-transa-turquoise/90 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Jetzt starten
        </Button>
        
        {/* Additional info */}
        <p className="text-sm text-transa-text/60">
          3 einfache Schritte • Personalisiert • Unverbindlich
        </p>
      </div>
    </div>
  );
};

export default StartScreen;
