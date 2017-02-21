export const isValidCurrencyFractionals = (value) => {
  if (value < 0) {
    throw new Error('currency fractionals should be more than or equal to 0')
  }
}

export const getValue = (value, defaultValue) => {
  if (typeof value === 'undefined' || value === null) {
    return defaultValue
  }

  return value
}
