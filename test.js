const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js')


test('add 10 + 5 to equal 15', () => {
    const total = sum(10,5)

    expect(total).toBe(15);
})

test('One euro should be 1.206 dollars', () => {
    const dollar = fromEuroToDollar(3)

    const expected = 3 * 1.2

    expect(fromEuroToDollar(3)).toBe(expected)
})

test('1.2 dollar should be 127.9 yen', () => {
    const yen = fromDollarToYen(3)

    const expected = 3 * 127.9

    expect(fromDollarToYen(3)).toBe(expected)
})

test('127.0 yen should be 0.8 pound', () => {
    const dollar = fromYenToPound(3)

    const expected = 3 * 0.8

    expect(fromYenToPound(3)).toBe(expected)
})