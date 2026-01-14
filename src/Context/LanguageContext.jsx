import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export const languages = [
    { code: 'en', label: 'ENG', flag: '🇬🇧', currency: 'GBP' },
    { code: 'us', label: 'USA', flag: '🇺🇸', currency: 'USD' },
    { code: 'sv', label: 'SWE', flag: '🇸🇪', currency: 'SEK' },
    { code: 'es', label: 'ESP', flag: '🇪🇸', currency: 'EUR' },
    { code: 'fr', label: 'FRE', flag: '🇫🇷', currency: 'EUR' },
    { code: 'de', label: 'GER', flag: '🇩🇪', currency: 'EUR' },
    { code: 'pt', label: 'POR', flag: '🇵🇹', currency: 'EUR' }
];

export function LanguageProvider({ children }) {

    const getInitialLang = () => {
        const saved = localStorage.getItem("lang");
        if (saved) return JSON.parse(saved);

        const browserLang = navigator.language.split("-")[0];
        return languages.find(l => l.code === browserLang) || languages[1];
    };

    const [activeLang, setActiveLang] = useState(getInitialLang);
    const [activeCurrency, setActiveCurrency] = useState(
        getInitialLang().currency
    );

    const changeLanguage = (lang) => {
        setActiveLang(lang);
        setActiveCurrency(lang.currency);
        localStorage.setItem("lang", JSON.stringify(lang));
    };

    return (
        <LanguageContext.Provider
            value={{
                languages,
                activeLang,
                activeCurrency,
                changeLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}



export const useLanguage = () => useContext(LanguageContext);
