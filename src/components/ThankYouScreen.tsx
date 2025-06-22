
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Heart } from 'lucide-react';

interface ThankYouScreenProps {
  onRestart: () => void;
}

const ThankYouScreen: React.FC<ThankYouScreenProps> = ({ onRestart }) => {
  return (
    <motion.div 
      className="min-h-screen bg-transa-bg flex flex-col items-center justify-center px-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-md text-center">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-8 rounded-full">
              <CheckCircle className="w-20 h-20 text-green-600" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-transa-text mb-4">
            Vielen Dank!
          </h1>
          
          <div className="flex justify-center mb-4">
            <Heart className="w-6 h-6 text-transa-turquoise" />
          </div>
          
          <p className="text-lg text-transa-text/70 mb-6 leading-relaxed">
            Dein Interesse am Essential Explorer Kit ist bei uns eingegangen. 
            Wir werden dich über die Community-Abstimmung und den Spezialpreis informieren!
          </p>
        </motion.div>

        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-xl font-bold text-transa-text mb-4">
            Wie geht es weiter?
          </h2>
          <ul className="text-transa-text/70 text-left space-y-2">
            <li>• Die Community stimmt über alle Bundle-Kombinationen ab</li>
            <li>• Das Gewinner-Bundle wird zum Spezialpreis angeboten</li>
            <li>• Du erhältst eine E-Mail, sobald die Abstimmung beendet ist</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Button 
            onClick={onRestart}
            className="w-full py-4 text-lg font-semibold bg-transa-turquoise hover:bg-transa-turquoise/90 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Erneut starten
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ThankYouScreen;
