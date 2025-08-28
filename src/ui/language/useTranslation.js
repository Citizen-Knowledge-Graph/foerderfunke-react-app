import { useCallback } from 'react';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import translations from './translations';

export const LANG_OPTIONS = [
    { code: "de", short: "DE", label: "Deutsch" },
    { code: "de_es", short: "DE+E", label: "Deutsch (Einfache Sprache)" },
    // { code: "de_ls", short: "DE+L", label: "Deutsch (Leichte Sprache)" },
    { code: "en", short: "EN", label: "English" },
];

export const pickLang = (obj, lang, fallback) => {
    if (!obj || typeof obj !== "object") return fallback;
    if (obj[lang] !== undefined) return obj[lang];
    if (lang && lang.startsWith("de") && obj["de"] !== undefined) return obj["de"];
    if (obj["en"] !== undefined) return obj["en"];
    return fallback;
};

function useTranslation() {
  const language = useLanguageStore((state) => state.language);

  const t = useCallback((key, kwargs = {}) => {
      let value = translations[language]
          || (language.startsWith("de") && translations["de"])
          || translations["en"];

    for (let k of key.split('.')) {
      if (!value) return key;
      value = value[k];
    }

    Object.keys(kwargs).forEach((placeholder) => {
      value = value.replace(`{{${placeholder}}}`, kwargs[placeholder]);
    });

    return value || key;
  }, [language]);

  return { t, language };
}

export default useTranslation;