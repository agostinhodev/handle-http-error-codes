import { Errors } from '../types/Errors';
import checkObjectProps from './checkObjectProps';

const checkDataInstance = (data: object | unknown, instance: Errors.InstanceTypes) => {
    if (data && typeof data === 'object') {
        if (instance === 'default')
            return (
                'error' in data &&
                checkObjectProps(data, 'error.error_code') &&
                checkObjectProps(data, 'error.message') &&
                checkObjectProps(data, 'error.errors')
            );
        if (instance === 'fallback1') return 'statusCode' in data && 'message' in data;

        if (instance === 'fallback2') return 'statusCode' in data && 'description' in data;

        if (instance === 'simple') return 'message' in data;

        if (instance === 'error')
            return 'error' in data && typeof data.error === 'string' && data.error.trim().length > 0;

        if (instance === 'errorMessage')
            return 'errorMessage' in data && typeof data.errorMessage === 'string' && data.errorMessage.length > 0;
    }

    return false;
};

export default checkDataInstance;
