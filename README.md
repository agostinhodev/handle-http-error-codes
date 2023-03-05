# Handle HTTP Errors (Messages and Codes)

Both axios and fetch api do not provide an out-of-the-box solution for handling thrown errors. This means that you are left to implement a 'Do It Yourself' approach where you must manually perform all the necessary checks and validations to ensure that the API returns the correct error and that you can properly manage it. As you can imagine, this can be quite tedious and time-consuming.

So, if you have caught an error using Axios or Fetch, this package can assist you in handling it. Its purpose is to aid in the management of HTTP errors that have been captured as exceptions.

Let us take care of handling HTTP errors for you. :)

# Installation

You can install it using Npm

```bash
npm install handle-http-error-codes
```

or if you are using Yarn

```bash
yarn add handle-http-error-codes
```

# Usage

The function **handleHttpError** accepts two parameters:

1. The `error` object, which can be of any type.
2. The `language` you want to use for translating the default error messages. Currently, we only support two languages: **pt-BR** and **en**.

## Axios

1. Import the package as following:

```javascript
import { handleHttpError } from 'handle-http-error-codes';
```

2. Update the `catch` block configuration to work with `handleHttpError`.

```javascript
import { handleHttpError } from 'handle-http-error-codes';
import axios from 'axios';

const options = { method: 'GET', url: 'https://mock.codes/400' };

axios
    .request(options)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        //Call the function here with the error object and the desired language to generate localized error messages from the library.
        const finalErrorMessage = handleHttpError(error, 'pt-BR');

        //You will get a handled message
        console.error(finalErrorMessage);
    });
```

## Fetch Api

1. The function can also be used with the fetch API, as shown below.

```javascript
import { handleHttpError } from 'handle-http-error-codes';

const options = { method: 'GET' };

fetch('https://mock.codes/400', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => {
        const finalErrorMessage = handleHttpError(error, 'pt-BR');

        //You will get a handled message
        console.error(finalErrorMessage);
    });
```

# How it works

The **handleHttpError** function aims to handle and identify common API responses that may arise when making an HTTP request. It attempts to extract the data response from error objects and deal with situations where the API does not provide any response.

1. The `error` parameter can be of either the `AxiosError` or `unknown` type. An AxiosError is an object returned by Axios when there is an error with a network request. The unknown type indicates that the function can accept any data type, thereby allowing it to also accept the error object returned by the Fetch API due to its adaptable nature.

2. The `language` parameter has a data type of `Language`, and it accepts both **en** and **pt-BR** language codes.

3. The **handleHttpError** function deals with potential errors that may arise when making an HTTP request using either the Axios library or the Fetch API. Initially, it checks whether the error is null or undefined. If this is the case, the function returns a localized error message that pertains to an unrecoverable null error..

4. Afterwards, the **handleHttpError** function utilizes the axios.isAxiosError method to ascertain whether the error is an instance of AxiosError. In the event that the error is indeed an instance of AxiosError, the code goes ahead to extract the response and request properties from the error object.

5. In the scenario whereby the error code corresponds to **ERR_NETWORK**, the function produces a localized error message for network issues. Similarly, if the error code matches **ERR_CANCELED**, it returns a localized message designed for cancelled requests.

6. When a response object is present, the **handleHttpError** function proceeds to examine it in order to extract the data object.

7. After analyzing the response object, handleHttpError examines the data object for various instances of error objects and returns the relevant error message or error object. In the absence of a response object, if there is a request object, it returns a localized error message for not receiving a response. We have established a set of default response types from APIs. Therefore, if the API returns data in any of the below types, note that **handleHttpError** can recognize the response in the data object and return the corresponding string

```typescript
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
```

8. If the data object returned by the API is not valid and the HTTP status code falls within the range of 300 to 599, then **handleHttpError** will return a localized error message that corresponds to that HTTP status code.

9. If the error object doesn't belong to the AxiosError class, then it is forwarded to the `handleGenericError`function for further handling.

10. The `handleGenericError` function accepts an error object and returns a message that can be shown to the user. It uses the i18next library to get a localized generic error message and assigns it to the variable finalMessage. Next, it checks the data type of the error parameter. If the error is a string, the function sets finalMessage to the string value of the error. If the error is an instance of the Error class, the function sets finalMessage to the error message contained in the message property of the Error object. Finally, the function returns the finalMessage variable, which could be either the generic error message or a specific error message corresponding to the error object passed as an argument.

# Adding support for your API's error response type.

As previously mentioned, we have created 6 types of API error responses based on the most commonly used patterns in the world and popular frameworks in the market.

However, if you are using a different error response pattern that is not included in our existing types and you would like to contribute by adding support for it, we welcome you to fork this repository and submit a pull request with your changes.

# Translation

At the moment, we only support two languages: Brazilian Portuguese and English. If you would like to contribute to our i18n dictionary by providing translations for your language, please feel free to fork this repository and submit a pull request. We would greatly appreciate your contributions!
