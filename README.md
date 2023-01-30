# Handle HTTP error codes

The purpose of this package is to be an alternative when you are using an HTTP call and the web service or API does not return the error message.

Some web apis often return the status code to the client, however they don't return a content or error object so that our client can make some decision. However, most of them return the status code of the request.

So, this package will return a generic message according HTTP Status code

## Install

You can install it using Npm

```bash
npm install handle-http-error-codes
```

or if you are using Yarn

```bash
yarn add handle-http-error-codes
```

## How to use

1. Import the package as following:

```javascript
import { handler } from 'handle-http-error-codes';
```

2. Configure the `catch` block to handle the status code and generate a generic error message

```javascript
import { handler } from 'handle-http-error-codes';
import axios from 'axios';

const options = { method: 'GET', url: 'https://mock.codes/400' };

axios
    .request(options)
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        let errorMessage = handler(error.response.status);

        console.error(errorMessage);
    });
```

In the example above we call a fake api to generate a `400 - Bad request` status code. In this package, the generic message for this status code will be outputted as the following:

`The server cannot or will not process the request due to what is perceived to be a client error.`

# Contributing

1. This is a experimental package, so I will be happy if you could help me to improve it!

2. Please fork it and submit a Pull Request. I will analyze your propouse and maybe if is relevant, I can merge it!
