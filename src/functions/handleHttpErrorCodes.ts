export const handleHttpErrorCodes = (code: number) => {
    let message = 'An unknown error has occurred';

    switch (code) {
        case 301:
            message = 'Document moved permanently.';
            break;
        case 302:
            message = 'Temporarily moved document';
            break;
        case 303:
            message = 'Redirects do not link to the requested resource itself, but to another page';
            break;
        case 304:
            message = 'Not modified';
            break;
        case 305:
            message = 'The resource requested by the client is only available through a proxy';
            break;
        case 307:
            message = 'Temporary redirect';
            break;
        case 308:
            message = 'Permanent redirect';
            break;
        case 400:
            message =
                'The server cannot or will not process the request due to what is perceived to be a client error.';
            break;
        case 401:
            message = 'Unauthorized access. Try logging in again!';
            break;
        case 402:
            message = 'The request cannot be processed until the customer makes a payment';
            break;
        case 403:
            message = 'Access denied';
            break;
        case 404:
            message = 'We were unable to find the resource you are looking for. Try again';
            break;
        case 405:
            message = 'The target resource does not support the method used';
            break;
        case 406:
            message =
                "The server cannot produce a response that matches the list of acceptable values ​​defined in the request's proactive content negotiation headers, what's more, the server is unwilling to provide a default representation.";
            break;
        case 407:
            message =
                'The request was not applied because it does not have valid authentication credentials for a proxy server that is between the app and the server that can access the requested resource.';
            break;
        case 408:
            message = 'Wait timeout exceeded!';
            break;
        case 409:
            message = 'There was a conflict in the request. Try again!';
            break;
        case 410:
            message =
                'Access to the target resource is no longer available on the source server and this condition is likely to be permanent.';
            break;
        case 411:
            message = 'The server refused to accept the request without a Content-Length header set';
            break;
        case 412:
            message = 'Access to the target resource is denied';
            break;
        case 413:
            message = 'The request is greater than the limits defined by the server';
            break;
        case 414:
            message = 'The URI requested by the client is longer than the server is willing to interpret.';
            break;
        case 415:
            message = 'The server refuses to accept the request because the payload format is in an unsupported format';
            break;
        case 416:
            message = 'The server cannot service the requested ranges';
            break;
        case 417:
            message = 'The expectation provided in the Expect header of the request could not be met.';
            break;
        case 418:
            message = 'The server refuses to process the request!';
            break;
        case 419:
            message = 'Insufficient space on requested resource';
            break;
        case 420:
            message = 'The method failed. Try again';
            break;
        case 421:
            message = 'The request was directed to a server that is unable to produce a response';
            break;
        case 422:
            message = 'The request was well worded but could not be followed up due to errors in the form.';
            break;
        case 423:
            message = 'Feature blocked';
            break;
        case 424:
            message = 'The request failed due to a previous request failing!';
            break;
        case 428:
            message = 'The origin server requires the request to be conditional!';
            break;
        case 429:
            message = 'Keep calm. You are sending too many requests to the server!';
            break;
        case 431:
            message = 'The server is unwilling to process the request because its header fields are too large';
            break;
        case 451:
            message = 'The user agent has requested a feature that cannot legally be provided.';
            break;
        case 500:
            message = 'Internal server error';
            break;
        case 501:
            message = 'The request method is not supported by the server and cannot be handled.';
            break;
        case 502:
            message =
                'The server, while working as a gateway to get a response needed to handle the request, got an invalid response.';
            break;
        case 503:
            message = 'Service currently unavailable';
            break;
        case 504:
            message = 'The server is acting as a gateway and cannot get a response in time.';
            break;
        case 505:
            message = 'The HTTP version used in the request is not supported by the server.';
            break;
        case 507:
            message = 'Insufficient server storage';
            break;
        case 511:
            message = 'The client needs to authenticate to gain access to the network.';
            break;
    }

    return message;
};
