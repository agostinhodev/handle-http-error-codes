const checkObjectProps = (object: unknown, key: string) =>
    key
        .split('.')
        .reduce(
            (o, x) =>
                typeof o === undefined || o === null
                    ? o
                    : (o as Array<unknown>)[x as keyof typeof o],
            object,
        );

export default checkObjectProps;
