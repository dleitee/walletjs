import { denormalize } from './normalization'

export const sum = (currencyFractionals, newValue, oldValue) =>
  newValue + denormalize(currencyFractionals, oldValue)

export const subtract = (currencyFractionals, newValue, oldValue) =>
  denormalize(currencyFractionals, oldValue) - newValue
