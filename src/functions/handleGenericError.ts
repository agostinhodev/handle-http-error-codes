const handleGenericError = (error: unknown) => {
    let finalMessage = 'The operation could not be processed at this time. Please try again later.';

    if (typeof error === 'string') {
        finalMessage = error;
    } else if (error instanceof Error) {
        finalMessage = error.message;
    }

    return finalMessage;
};

export default handleGenericError;
