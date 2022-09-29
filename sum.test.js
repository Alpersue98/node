const sum = require('./sum');

test('I have 10 apples and Max eats 3, now i only have 7 apples left.', () => {
    expect(sub(10, 3)).toBe(7);
});
