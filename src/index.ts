import axios, { AxiosError } from 'axios';

import checkDataInstance from './functions/checkInstance';
import handleGenericError from './functions/handleGenericError';
import { handleHttpErrorCodes } from './functions/handleHttpErrorCodes';
import { Errors } from './types/Errors';

const handleHttpError = (error: AxiosError | unknown) => {
    if (error === null || error === undefined) return 'Unrecoverable error!! Error is null!';

    if (axios.isAxiosError(error)) {
        // here we have a type guard check, error inside this if will be treated as AxiosError
        const response = error?.response;
        const request = error?.request;

        if (error.code === 'ERR_NETWORK') return 'Network error';

        if (error.code === 'ERR_CANCELED') return 'The request was canceled';

        if (response) {
            // The request was made and the server responded with a status code that falls out of the range of 2xx the http status code mentioned above
            const statusCode = response?.status;
            const data:
                | Errors.DefaultApiError
                | Errors.FallbackApi1
                | Errors.FallbackApi2
                | Errors.SimpleFallback
                | Errors.Fallback
                | unknown
                | undefined
                | Errors.MessageFallback = response?.data;

            if (checkDataInstance(data, 'default')) return (data as Errors.DefaultApiError).error.message;

            if (checkDataInstance(data, 'fallback1')) return (data as Errors.FallbackApi1).message;

            if (checkDataInstance(data, 'fallback2')) return (data as Errors.FallbackApi2).description;

            if (checkDataInstance(data, 'simple')) return (data as Errors.SimpleFallback).message;

            if (checkDataInstance(data, 'error')) return (data as Errors.Fallback).error;

            if (checkDataInstance(data, 'errorMessage')) return (data as Errors.MessageFallback).errorMessage;

            if (statusCode >= 300 && statusCode <= 599) return handleHttpErrorCodes(statusCode);
        } else if (request) {
            // The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js

            return 'The request was made but no response was received';
        }

        return 'Both the request and the response failed to return';
    }
    return handleGenericError(error);
};

export default handleHttpError;
