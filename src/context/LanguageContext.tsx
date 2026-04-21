'use client';
import { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextProps {
  language: Language;
  toggleLanguage: () => void;
  setLanguage: (lang: Language) => void;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Check localStorage or browser preference on mount
    const savedLang = localStorage.getItem('b7-lang') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      handleLanguageChange(savedLang);
    } else {
      // Default browser check
      const brLang = navigator.language.startsWith('ar') ? 'ar' : 'en';
      handleLanguageChange(brLang);
    }
  }, []);

  const handleLanguageChange = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('b7-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleLanguage = () => {
    handleLanguageChange(language === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage: handleLanguageChange, dir: language === 'ar' ? 'rtl' : 'ltr' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
