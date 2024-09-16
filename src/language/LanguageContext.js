import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const getDefaultLanguage = () => {
    let lang = localStorage.getItem('language');
    if (lang) return lang;
    lang = navigator.language || navigator.userLanguage;
    if (!lang) return 'en';
    return lang.split('-')[0].toLowerCase() === 'de' ? 'de' : 'en';
}

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(getDefaultLanguage());

    const handleSetLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
