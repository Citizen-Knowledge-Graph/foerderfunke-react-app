import { useCallback } from 'react';
import { useLanguageStore } from '@/ui/storage/useLanguageStore';
import translations from './translations';

function useTranslation() {
  const language = useLanguageStore((state) => state.language);

  const t = useCallback((key, kwargs = {}) => {
    let value = translations[language] || translations['en'];

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