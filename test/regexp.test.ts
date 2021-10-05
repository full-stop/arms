import regexp from '../src/regexp';

describe('verify email', () => {
    test('xxx_yy@163.com', () => {
        expect(regexp.email.test('xxx_yy@163.com')).toBeTruthy();
    })
})