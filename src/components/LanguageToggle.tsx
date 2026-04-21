'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors border border-gray-200 dark:border-zinc-700 flex items-center justify-center font-bold text-sm w-10 h-10"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'ع' : 'EN'}
    </button>
  );
}
