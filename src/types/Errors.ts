export type DefaultApiError = {
    error: {
        error_code: string;
        message: string;
        errors: Array<{
            message: string;
            call_stack: string;
        }>;
    };
};

export type Fallback = {
    error: string;
};

export type MessageFallback = {
    errorMessage: string;
};

export type FallbackApi1 = {
    statusCode: number;
    message: string;
};

export type FallbackApi2 = {
    statusCode: number;
    description: string;
};

export type SimpleFallback = {
    message: string;
};

export type InstanceTypes = 'default' | 'fallback1' | 'fallback2' | 'simple' | 'error' | 'errorMessage';
