import handleHttpError from '../index';

test('Expected 404', () => {
    expect(handleHttpError({}, 'pt-br')).toBe('We were unable to find the resource you are looking for. Try again');
});
