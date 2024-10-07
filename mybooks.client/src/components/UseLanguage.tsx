import { useState } from "react";
import i18n from "../assets/i18n";

const useLanguage = () => {
    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
        setCurrentLanguage(language);
    };
    return { currentLanguage, changeLanguage };
};

export default useLanguage;
