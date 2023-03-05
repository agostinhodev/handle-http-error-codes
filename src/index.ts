import axios, { AxiosError } from 'axios';
import i18next from 'i18next';

import checkDataInstance from './functions/checkInstance';
import handleGenericError from './functions/handleGenericError';
import { initI18next } from './translations';

import { DefaultApiError, Fallback, FallbackApi1, FallbackApi2, MessageFallback, SimpleFallback } from './types/Errors';
import { Language } from './types/Language';

const handleHttpError = (error: AxiosError | unknown, language: Language) => {
    initI18next(language);

    if (error === null || error === undefined) return i18next.t('error.unrecoverableErrorNull');

    if (axios.isAxiosError(error)) {
        // here we have a type guard check, error inside this if will be treated as AxiosError
        const response = error?.response;
        const request = error?.request;

        if (error.code === 'ERR_NETWORK') return i18next.t('error.networkError');

        if (error.code === 'ERR_CANCELED') return i18next.t('error.cancelledRequest');

        if (response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx the http status code mentioned above
            const statusCode = response?.status;
            const data:
                | DefaultApiError
                | FallbackApi1
                | FallbackApi2
                | SimpleFallback
                | Fallback
                | unknown
                | undefined
                | MessageFallback = response?.data;

            if (checkDataInstance(data, 'default')) return (data as DefaultApiError).error.message;

            if (checkDataInstance(data, 'fallback1')) return (data as FallbackApi1).message;

            if (checkDataInstance(data, 'fallback2')) return (data as FallbackApi2).description;

            if (checkDataInstance(data, 'simple')) return (data as SimpleFallback).message;

            if (checkDataInstance(data, 'error')) return (data as Fallback).error;

            if (checkDataInstance(data, 'errorMessage')) return (data as MessageFallback).errorMessage;

            if (statusCode >= 300 && statusCode <= 599) return i18next.t(`error.httpStatusCodes.${statusCode}`);
        } else if (request) {
            // The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js

            return i18next.t('error.noResponseReceived');
        }

        return i18next.t('error.failedRequestAndResponse');
    }
    return handleGenericError(error);
};

export default handleHttpError;
