const fraction = (currencyFractionals) => {
  if (currencyFractionals === 0) {
    return 1
  }
  return 10 ** currencyFractionals
}

export const normalize = (currencyFractionals, value) =>
  Math.round(value * fraction(currencyFractionals))

export const denormalize = (currencyFractionals, value) => (value / fraction(currencyFractionals))
