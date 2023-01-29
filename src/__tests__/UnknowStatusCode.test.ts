import { handleHTTPErrorCodes } from '../index';

test('Expected Unknow status code', () => {
    expect(handleHTTPErrorCodes(999)).toBe('An unknown error has occurred');
});
