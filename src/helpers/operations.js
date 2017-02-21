import { normalize } from './normalization'

export function sum(newValue) {
  return normalize(this.currencyFractionals, newValue).add(this.value)
}

export function subtract(newValue) {
  return this.value.minus(normalize(this.currencyFractionals, newValue))
}

export function multiply(factor) {
  return this.value.times(factor)
}

export function divide(factor) {
  return this.value.div(factor)
}
