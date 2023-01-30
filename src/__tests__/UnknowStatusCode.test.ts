import { handler } from '../index';

test('Expected Unknow status code', () => {
    expect(handler(999)).toBe('An unknown error has occurred');
});
