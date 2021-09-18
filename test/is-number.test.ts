import isNumber from '../src/is-number';

test('null to isNumber', () => {
    expect(isNumber(null)).toBe(false);
});

test('undefined to isNumber', () => {
    expect(isNumber(undefined)).toBe(false);
});

test('"" to isNumber', () => {
    expect(isNumber("")).toBe(false);
});

test('Infinity to isNumber', () => {
    expect(isNumber(Infinity)).toBe(false);
});

test('true to isNumber', () => {
    expect(isNumber(true)).toBe(false);
});

test('1.0.0.0 to isNumber', () => {
    expect(isNumber('1.0.0.0')).toBe(false);
});

test('abcdef to isNumber', () => {
    expect(isNumber('abcdef')).toBe(false);
});

test('20.a to isNumber', () => {
    expect(isNumber('20.a')).toBe(false);
});

test('-.1 to isNumber', () => {
    expect(isNumber(-.1)).toBe(true);
});

test('1000_1000_1000 to isNumber', () => {
    expect(isNumber(1000_1000_1000)).toBe(true);
});

