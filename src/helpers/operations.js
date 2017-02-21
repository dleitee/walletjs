import { normalize } from './normalization'

export function sum(newValue) {
  return normalize(this.currencyFractionals, newValue) + this.value
}

export function subtract(newValue) {
  return this.value - normalize(this.currencyFractionals, newValue)
}

export function multiply(factor) {
  return this.value * factor
}

export function divide(factor) {
  return this.value / factor
}
