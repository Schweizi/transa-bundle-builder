
import React, { useState } from 'react';
import { ContactForm as ContactFormType, SelectedBundle } from '@/types/Product';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';

interface ContactFormProps {
  bundle: SelectedBundle;
  onBack: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ bundle, onBack }) => {
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
      bundle.backpack ? `Rucksack: ${bundle.backpack.name}` : '',
      bundle.powerbank ? `Powerbank: ${bundle.powerbank.name}` : '',
      bundle.bottle ? `Trinkflasche: ${bundle.bottle.name}` : '',
      '',
      'Bitte informieren Sie mich über Verfügbarkeit und Preise.',
      '',
      'Freundliche Grüsse'
    ].filter(line => line !== undefined);
    
    const body = encodeURIComponent(bodyParts.join('\n'));
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
  };

  const handleInputChange = (field: keyof ContactFormType, value: string | boolean) => {
    setForm(prev => ({ ...prev, [field]: value }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen bg-transa-bg flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-transa-text mb-2">
            Fast geschafft!
          </h2>
          <p className="text-transa-text/70">
            Teile uns deine Kontaktdaten mit und wir informieren dich über dein Explorer Kit.
          </p>
        </div>

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
              onClick={onBack}
              variant="outline"
              className="w-full py-3 text-transa-text border-transa-text/30 hover:bg-transa-text/5 rounded-xl transition-all duration-300"
            >
              Zurück zur Auswahl
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
