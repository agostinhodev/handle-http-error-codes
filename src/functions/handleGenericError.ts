import i18next from 'i18next';

export const handleGenericError = (error: unknown) => {
    let finalMessage = i18next.t('error.generic');

    if (typeof error === 'string') {
        finalMessage = error;
    } else if (error instanceof Error) {
        finalMessage = error.message;
    }

    return finalMessage;
};
