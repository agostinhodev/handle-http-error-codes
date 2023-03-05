import handleHttpError from '../index';

test('Expected 404', () => {
    expect(
        handleHttpError(
            {
                cause: undefined,
                code: '404',
                config: undefined,
                message: 'Axios config error message for test',
                name: '404 - Axios not found',
                request: {},
                response: {
                    data: {
                        amausmasuasuamsuasaus: 'ahsuahusaushasu',
                    },
                    config: {
                        headers: '',
                    },
                    status: 404,
                    headers: {},
                    statusText: '404-axios',
                    request: {},
                },
                stack: 'stack trace',
                status: 404,
            },
            'pt-BR',
        ),
    ).toBe('We were unable to find the resource you are looking for. Try again');
});
