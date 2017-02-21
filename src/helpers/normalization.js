import Big from 'big.js'

const fraction = (currencyFractionals) => {
  if (currencyFractionals === 0) {
    return 1
  }
  return 10 ** currencyFractionals
}

export const normalize = (currencyFractionals, value) =>
  Big(value).times(fraction(currencyFractionals))

export const denormalize = (currencyFractionals, value) =>
  value.div(fraction(currencyFractionals)).toFixed(currencyFractionals)
