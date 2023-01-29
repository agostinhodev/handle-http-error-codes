import handleHTTPErrorCodes from '../index';

test('Expected 404', () => {
    expect(handleHTTPErrorCodes(404)).toBe('We were unable to find the resource you are looking for. Try again');
});
