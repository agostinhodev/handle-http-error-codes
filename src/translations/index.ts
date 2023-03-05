import i18next from 'i18next';
import { Language } from '../types/Language';

import en from './en.json';
import ptBr from './pt-br.json';

const resources = {
    en,
    'pt-BR': ptBr,
};

export const initI18next = (language: Language) => {
    return i18next.init({
        lng: language,
        compatibilityJSON: 'v3',
        debug: false,
        resources,
    });
};

export default i18next;
