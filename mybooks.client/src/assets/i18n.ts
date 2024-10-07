import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        // Using simple hardcoded resources for simple example
        resources: {
            en: {
                translation: {
                    home: {
                        j1: {
                            readMore: 'Read More',
                            haveFun: 'Have Fun',
                            explanation: 'Providing tools to meet your reading goals.',
                            signupBtn: 'Sign up',
                        },
                        j2: {
                            readingCompanion: 'Reading Companion',
                            explanation: 'blah blah look at this cool example',
                        },
                        j3: {
                            manageLibrary: 'Manage Your Library',
                            explanation: 'blah blah keep track of your books and progress',
                        }
                    }
                },
            },
            es: {
                translation: {
                    home: {
                        j1: {
                            readMore: 'Hola',
                            haveFun: 'Heya',
                            explanation: 'I love spanish',
                        },
                    }
                },
            },
        },
    })

export default i18n