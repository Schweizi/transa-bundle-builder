
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SelectedBundle, ContactForm as ContactFormType } from '@/types/Product';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Star } from 'lucide-react';

interface FinalScreenProps {
  bundle: SelectedBundle;
  onThankYou: () => void;
  onRestart: () => void;
}

const FinalScreen: React.FC<FinalScreenProps> = ({ bundle, onThankYou, onRestart }) => {
  const [form, setForm] = useState<ContactFormType>({
    firstName: '',
    lastName: '',
    email: '',
    newsletter: false
  });

  const [errors, setErrors] = useState<Partial<ContactFormType>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactFormType> = {};
    
    if (!form.firstName.trim()) {
      newErrors.firstName = 'Vorname ist erforderlich';
    }
    
    if (!form.lastName.trim()) {
      newErrors.lastName = 'Name ist erforderlich';
    }
    
    if (!form.email.trim()) {
      newErrors.email = 'E-Mail-Adresse ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Generate mailto link
    const recipient = 'cas-test@transa.ch';
    const subject = encodeURIComponent('Interesse am Essential Explorer Kit');
    
    const bodyParts = [
      'Hallo Transa Team,',
      '',
      'hiermit bekunde ich mein Interesse am Essential Explorer Kit mit folgender Zusammenstellung:',
      '',
      '--- Persönliche Daten ---',
      `Vorname: ${form.firstName}`,
      `Name: ${form.lastName}`,
      `E-Mail: ${form.email}`,
      `Newsletter: ${form.newsletter ? 'Ja, ich möchte den Newsletter erhalten' : 'Nein, ich möchte keinen Newsletter'}`,
      '',
      '--- Ausgewählte Produkte ---',
      bundle.backpack?.name ? `Rucksack: ${bundle.backpack.name}` : '',
      bundle.powerbank?.name ? `Powerbank: ${bundle.powerbank.name}` : '',
      bundle.bottle?.name ? `Trinkflasche: ${bundle.bottle.name}` : '',
      '',
      'Bitte informieren Sie mich über Verfügbarkeit und Preise.',
      '',
      'Freundliche Grüsse'
    ].filter(line => line !== '');
    
    const body = encodeURIComponent(bodyParts.join('\n'));
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
    
    // Navigate to thank you screen
    onThankYou();
  };

  const handleInputChange = (field: keyof ContactFormType, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-transa-bg flex flex-col items-center justify-center px-6 py-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-2xl">
        {/* Header */}
        <motion.div 
          className="text-center mb-8"
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
            <span className="text-transa-turquoise block">perfekt!</span>
          </h1>
          <p className="text-lg text-transa-text/70 mb-6">
            Lass uns deine Kontaktdaten wissen, um dich über das Explorer Kit zu informieren
          </p>
        </motion.div>

        {/* Ausgewählte Produkte */}
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

        {/* Kontaktformular */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-transa-text mb-6">Kontaktdaten</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-transa-text font-semibold">
                Vorname *
              </Label>
              <Input
                id="firstName"
                type="text"
                value={form.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={`bg-white border-2 rounded-xl py-3 px-4 ${
                  errors.firstName ? 'border-transa-red' : 'border-transa-text/20 focus:border-transa-turquoise'
                }`}
                placeholder="Dein Vorname"
              />
              {errors.firstName && (
                <p className="text-transa-red text-sm">{errors.firstName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-transa-text font-semibold">
                Name *
              </Label>
              <Input
                id="lastName"
                type="text"
                value={form.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={`bg-white border-2 rounded-xl py-3 px-4 ${
                  errors.lastName ? 'border-transa-red' : 'border-transa-text/20 focus:border-transa-turquoise'
                }`}
                placeholder="Dein Nachname"
              />
              {errors.lastName && (
                <p className="text-transa-red text-sm">{errors.lastName}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-transa-text font-semibold">
                E-Mail-Adresse *
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`bg-white border-2 rounded-xl py-3 px-4 ${
                  errors.email ? 'border-transa-red' : 'border-transa-text/20 focus:border-transa-turquoise'
                }`}
                placeholder="deine@email.com"
              />
              {errors.email && (
                <p className="text-transa-red text-sm">{errors.email}</p>
              )}
            </div>

            <div className="flex items-start space-x-3 p-4 bg-white/50 rounded-xl">
              <Checkbox
                id="newsletter"
                checked={form.newsletter}
                onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="newsletter" className="text-sm text-transa-text leading-relaxed cursor-pointer">
                Ja, ich möchte den Transa Newsletter erhalten und über neue Produkte und Angebote informiert werden.
              </Label>
            </div>

            <div className="space-y-3 pt-4">
              <Button 
                type="submit"
                className="w-full py-4 text-lg font-semibold bg-transa-turquoise hover:bg-transa-turquoise/90 text-white rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Absenden
              </Button>
              
              <Button 
                type="button"
                onClick={onRestart}
                variant="outline"
                className="w-full py-3 text-transa-text border-transa-text/30 hover:bg-transa-text/5 rounded-xl transition-all duration-300"
              >
                Nochmal eine Auswahl treffen
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinalScreen;
