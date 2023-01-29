import handleHTTPErrorCodes from '../index';

test('Expected status codes', () => {
    expect(handleHTTPErrorCodes(404)).toBe('We were unable to find the resource you are looking for. Try again');
});
