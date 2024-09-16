import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';
import translations from './translations';

function useTranslation() {
    const { language } = useContext(LanguageContext);

    const t = (key) => {
        return translations[language][key] || key;
    };

    return { t, language };
}

export default useTranslation;
