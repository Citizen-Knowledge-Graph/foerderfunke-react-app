import {createContext} from 'react';

const LanguageContext = createContext({
    language: 'en',
    setLanguage: (lang) => {},
});

export default LanguageContext;
