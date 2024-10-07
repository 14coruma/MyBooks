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
                    nav: {
                        home: "Home",
                        features: "Features",
                        signIn: "Sign in"
                    },
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
                    nav: {
                        home: "Hogar",
                        features: "Caracter\u00edsticas",
                        signIn: "Acceso"
                    },
                    home: {
                        j1: {
                            readMore: 'Leer m\u00e1s',
                            haveFun: 'Divertirse',
                            explanation: 'Proporcionar herramientas para alcanzar sus objetivos de lectura.',
                            signupBtn: 'Inscribirse',
                        },
                        j2: {
                            readingCompanion: 'Compa\u00f1ero de lectura',
                        },
                        j3: {
                            manageLibrary: 'Administre su biblioteca',
                        }
                    }
                },
            },
        },
    })

export default i18n