import handleHttpError from '../index';

test('Expected 404', () => {
    expect(handleHttpError({}, 'en')).toBe(
        'The operation could not be processed at this time. Please try again later.',
    );
});
