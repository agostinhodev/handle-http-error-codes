import { handler } from '../index';

test('Expected 404', () => {
    expect(handler(404)).toBe('We were unable to find the resource you are looking for. Try again');
});
