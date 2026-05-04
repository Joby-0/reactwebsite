import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const languages = [
    { code: 'EN', label: 'ENG', flag: '🇬🇧', currency: 'GBP' },
    { code: 'US', label: 'USA', flag: '🇺🇸', currency: 'USD' },
    { code: 'SE', label: 'SWE', flag: '🇸🇪', currency: 'SEK' },
    { code: 'ES', label: 'ESP', flag: '🇪🇸', currency: 'EUR' },
    { code: 'FR', label: 'FRE', flag: '🇫🇷', currency: 'EUR' },
    { code: 'DE', label: 'GER', flag: '🇩🇪', currency: 'EUR' },
    { code: 'PT', label: 'POR', flag: '🇵🇹', currency: 'EUR' }
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
    const [activeCode, setActiveCang] = useState(getInitialLang().code);


    const changeLanguage = (lang) => {
        setActiveLang(lang);
        setActiveCurrency(lang.currency);
        setActiveCang(lang.code)
        localStorage.setItem("lang", JSON.stringify(lang));
    };

    return (
        <LanguageContext.Provider
            value={{
                languages,
                activeLang,
                activeCurrency,
                activeCode,
                changeLanguage
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}



export const useLanguage = () => useContext(LanguageContext);
