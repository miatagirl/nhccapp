import React from 'react';
import { motion } from 'framer-motion';
import { Languages } from 'lucide-react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
    { code: 'pt' as Language, name: 'Português', flag: '🇧🇷' },
    { code: 'fil' as Language, name: 'Filipino', flag: '🇵🇭' }
  ];

  return (
    <div className="flex items-center space-x-2 bg-white/10 rounded-lg p-2">
      <Languages size={18} className="text-white" />
      <div className="flex space-x-1">
        {languages.map((lang) => (
          <motion.button
            key={lang.code}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 flex items-center space-x-1 ${
              language === lang.code
                ? 'bg-white text-nhcc-navy shadow-md'
                : 'text-white hover:bg-white/20'
            }`}
            title={lang.name}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.name}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};