
let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2, 
    "GBP": 0.8, 
}

const sum = (a , b) => {
    return a + b
}

const fromDollarToYen = (usd) => {
    console.log(usd)
    return usd * oneEuroIs["JPY"]
}

const fromEuroToDollar = (eur) => {
    return eur * oneEuroIs["USD"]
}

const fromYenToPound = (yen) => {
    return yen * oneEuroIs["GBP"]
}

console.log(fromDollarToYen(10))

module.exports = { 
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
}