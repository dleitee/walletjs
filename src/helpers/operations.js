import { normalize } from './normalization'

export const sum = (currencyFractionals, newValue, oldValue) =>
  normalize(currencyFractionals, newValue) + oldValue

export const subtract = (currencyFractionals, newValue, oldValue) =>
  oldValue - normalize(currencyFractionals, newValue)
