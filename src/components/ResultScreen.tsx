
import React from 'react';
import { motion } from 'framer-motion';
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
    <motion.div 
      className="min-h-screen bg-transa-bg flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-2xl text-center">
        {/* Header */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-transa-text mb-4">
            Dein persönliches 
            <span className="text-transa-turquoise block">Explorer Kit!</span>
          </h1>
          <p className="text-lg text-transa-text/70">
            Perfekt zusammengestellt für deine nächsten Abenteuer
          </p>
        </motion.div>

        {/* Product Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {products.map(({ label, product }, index) => (
            product && (
              <motion.div 
                key={product.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              >
                <div className="aspect-square overflow-hidden p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
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
              </motion.div>
            )
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
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
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultScreen;
