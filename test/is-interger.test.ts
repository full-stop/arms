import isInteger from '../src/is-integer'

test('true', () => {
    expect(isInteger(1)).toBeTruthy();
});

test('false', () => {
    expect(isInteger(1.1)).toBeFalsy();
});

test('-1 of true', () => {
    expect(isInteger(-1)).toBeTruthy();
})

test('0 of interger', () => {
    expect(isInteger(0)).toBeTruthy();
})

test('0.1 of false', () => {
    expect(isInteger(0.1)).toBeFalsy();
})

test('.1 of fase', () => {
    expect(isInteger(.1)).toBeFalsy();
})