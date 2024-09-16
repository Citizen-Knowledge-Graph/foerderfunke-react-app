import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function useTranslation() {
    const { language } = useContext(LanguageContext);

    const t = (key) => {
        let value = translations[language] || translations['en'];
        for (let k of key.split('.')) {
            if (!value) return key;
            value = value[k];
        }
        return value;
    };

    return { t, language };
}

export default useTranslation;
