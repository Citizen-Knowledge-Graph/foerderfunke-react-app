import { create } from "zustand";

const getDefaultLanguage = () => {
  const storedLang = localStorage.getItem('language');
  if (storedLang) return storedLang;
  const browserLang = navigator.language || navigator.userLanguage;
  if (!browserLang) return 'en';
  return browserLang.split('-')[0].toLowerCase() === 'de' ? 'de' : 'en';
};

export const useLanguageStore = create((set) => ({
  language: getDefaultLanguage(),
  setLanguage: (lang) => {
    localStorage.setItem('language', lang);
    set({ language: lang });
  },
}));