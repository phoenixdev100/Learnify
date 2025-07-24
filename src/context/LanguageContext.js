import React, { createContext, useContext, useState, useEffect } from 'react';
import translations from '../translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const languageToLocale = {
  english: 'en',
  spanish: 'es',
  french: 'fr',
  german: 'de',
  japanese: 'ja'
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(
    localStorage.getItem('language') || 'english'
  );

  useEffect(() => {
    localStorage.setItem('language', currentLanguage);
    document.documentElement.lang = languageToLocale[currentLanguage] || 'en';
    document.documentElement.dir = currentLanguage === 'arabic' ? 'rtl' : 'ltr';
  }, [currentLanguage]);

  const t = (key) => {
    if (!translations[currentLanguage]) {
      console.warn(`Translation not found for language: ${currentLanguage}`);
      return translations.english[key] || key;
    }
    
    if (!translations[currentLanguage][key]) {
      console.warn(`Translation key not found: ${key}`);
      return translations.english[key] || key;
    }
    
    return translations[currentLanguage][key];
  };

  const value = {
    currentLanguage,
    setCurrentLanguage,
    t,
    availableLanguages: Object.keys(translations),
    languageToLocale
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
