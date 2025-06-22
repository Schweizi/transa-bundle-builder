
import React from 'react';
import { SelectedBundle } from '@/types/Product';
import { Button } from '@/components/ui/button';

interface ResultScreenProps {
  bundle: SelectedBundle;
  onShowInterest: () => void;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ bundle, onShowInterest, onRestart }) => {
  const products = [
    { label: 'Rucksack', product: bundle.backpack },
    { label: 'Powerbank', product: bundle.powerbank },
    { label: 'Trinkflasche', product: bundle.bottle }
  ];

  return (
    <div className="min-h-screen bg-transa-bg flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl text-center">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-transa-text mb-4">
            Dein persönliches 
            <span className="text-transa-turquoise block">Explorer Kit!</span>
          </h1>
          <p className="text-lg text-transa-text/70">
            Perfekt zusammengestellt für deine nächsten Abenteuer
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {products.map(({ label, product }) => (
            product && (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-xs font-semibold text-transa-turquoise uppercase tracking-wide mb-1">
                    {label}
                  </div>
                  <h3 className="font-bold text-transa-text mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-transa-text/70">
                    {product.description}
                  </p>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Button 
            onClick={onShowInterest}
            className="w-full max-w-md py-4 text-lg font-semibold bg-transa-turquoise hover:bg-transa-turquoise/90 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Interesse bekunden & informiert werden
          </Button>
          
          <Button 
            onClick={onRestart}
            variant="outline"
            className="w-full max-w-md py-3 text-transa-text border-transa-text/30 hover:bg-transa-text/5 rounded-xl transition-all duration-300"
          >
            Nochmal wählen
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultScreen;
