import i18next from 'i18next';

import en from './en.json';
import ptBr from './pt-br.json';

const resources = {
    en,
    'pt-br': ptBr,
};

export const initI18next = () => {
    return i18next.init({
        compatibilityJSON: 'v3',
        fallbackLng: 'en',
        debug: false,
        resources,
    });
};

export default i18next;
