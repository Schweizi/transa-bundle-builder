
import React from 'react';
import { motion } from 'framer-motion';
import { SelectedBundle } from '@/types/Product';
import { Button } from '@/components/ui/button';
import { Users, Gift, Star } from 'lucide-react';

interface ResultScreenProps {
  bundle: SelectedBundle;
  onShowInterest: () => void;
  onRestart: () => void;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ bundle, onShowInterest, onRestart }) => {
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
          <div className="flex justify-center mb-6">
            <div className="bg-transa-turquoise/10 p-6 rounded-full">
              <Star className="w-16 h-16 text-transa-turquoise" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-transa-text mb-4">
            Deine Auswahl ist 
            <span className="text-transa-turquoise block">eingegangen!</span>
          </h1>
          <p className="text-lg text-transa-text/70 mb-6">
            Danke für deine Teilnahme am Explorer Kit Konfigurator
          </p>
        </motion.div>

        {/* Ausgewählte Produkte anzeigen */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-transa-text mb-4">Deine Auswahl:</h2>
          <div className="grid grid-cols-3 gap-4">
            {bundle.backpack && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 p-4 bg-gray-50 rounded-lg">
                  <img src={bundle.backpack.image} alt={bundle.backpack.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-sm font-medium text-transa-text">{bundle.backpack.name}</p>
              </div>
            )}
            {bundle.powerbank && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 p-4 bg-gray-50 rounded-lg">
                  <img src={bundle.powerbank.image} alt={bundle.powerbank.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-sm font-medium text-transa-text">{bundle.powerbank.name}</p>
              </div>
            )}
            {bundle.bottle && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-2 p-4 bg-gray-50 rounded-lg">
                  <img src={bundle.bottle.image} alt={bundle.bottle.name} className="w-full h-full object-contain" />
                </div>
                <p className="text-sm font-medium text-transa-text">{bundle.bottle.name}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Community Info */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <Users className="w-12 h-12 text-transa-turquoise" />
          </div>
          
          <h2 className="text-2xl font-bold text-transa-text mb-4">
            Community Abstimmung läuft
          </h2>
          
          <p className="text-transa-text/70 mb-6 leading-relaxed">
            Deine Produktkombination wurde erfasst! Die Community wird über alle eingegangenen 
            Bundle-Kombinationen abstimmen. Das Gewinner-Bundle wird dann zu einem 
            <strong className="text-transa-turquoise"> Spezialpreis </strong> 
            für alle Teilnehmer verfügbar gemacht.
          </p>
          
          <div className="flex justify-center mb-6">
            <div className="bg-transa-turquoise/10 p-4 rounded-lg">
              <Gift className="w-8 h-8 text-transa-turquoise mx-auto mb-2" />
              <p className="text-sm font-semibold text-transa-turquoise">
                Exklusiver Community-Preis
              </p>
            </div>
          </div>
          
          <p className="text-sm text-transa-text/60">
            Wir informieren dich, sobald die Abstimmung beendet ist und das 
            Gewinner-Bundle feststeht!
          </p>
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
            Über Ergebnisse informiert werden
          </Button>
          
          <Button 
            onClick={onRestart}
            variant="outline"
            className="w-full max-w-md py-3 text-transa-text border-transa-text/30 hover:bg-transa-text/5 rounded-xl transition-all duration-300"
          >
            Nochmal eine Auswahl treffen
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultScreen;
