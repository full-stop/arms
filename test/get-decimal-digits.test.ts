import getDecimalDigits from '../src/get-decimal-digits';

test('3', () => {
    expect(getDecimalDigits(3)).toBe(0);
})

test('3.1', () => {
    expect(getDecimalDigits(3.1)).toBe(1);
})

test('3.12', () => {
    expect(getDecimalDigits(3.12)).toBe(2);
})

test('0.123', () => {
    expect(getDecimalDigits(0.123)).toBe(3);
})

test('.1234', () => {
    expect(getDecimalDigits(.1234)).toBe(4);
})

test('3.1415926', () => {
    expect(getDecimalDigits(3.1415926)).toBe(7);
})

test('3.141_159_26', () => {
    expect(getDecimalDigits(3.141_592_6)).toBe(7)
})