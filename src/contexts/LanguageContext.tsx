
import React, { createContext, useState, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface Texts {
  dashboard: string;
  welcomeMessage: string;
  openModule: string;
  settings: string;
  profile: string;
  logout: string;
  language: string;
}

interface LanguageContextType {
  language: Language;
  direction: Direction;
  texts: Texts;
  toggleLanguage: () => void;
}

const englishTexts: Texts = {
  dashboard: 'Dashboard',
  welcomeMessage: 'Welcome to Al-Batar Company Dashboard',
  openModule: 'Open Module',
  settings: 'Settings',
  profile: 'Profile',
  logout: 'Logout',
  language: 'Language',
};

const arabicTexts: Texts = {
  dashboard: 'لوحة التحكم',
  welcomeMessage: 'مرحبًا بك في لوحة تحكم شركة البتار',
  openModule: 'فتح الوحدة',
  settings: 'الإعدادات',
  profile: 'الملف الشخصي',
  logout: 'تسجيل الخروج',
  language: 'اللغة',
};

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  direction: 'ltr',
  texts: englishTexts,
  toggleLanguage: () => {},
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');
  const [texts, setTexts] = useState<Texts>(englishTexts);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  useEffect(() => {
    if (language === 'ar') {
      setDirection('rtl');
      setTexts(arabicTexts);
      document.documentElement.dir = 'rtl';
    } else {
      setDirection('ltr');
      setTexts(englishTexts);
      document.documentElement.dir = 'ltr';
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, direction, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
