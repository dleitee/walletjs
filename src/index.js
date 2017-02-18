import Intl from 'intl'

import { isNumber, getValue, isValidCurrencyFractionals } from './helpers/utils'
import handleMoney from './helpers/handler'
import { normalize, denormalize } from './helpers/normalization'
import { sum, subtract } from './helpers/operations'
import { CURRENCY_USD } from './currency'
import { DISPLAY_SYMBOL } from './display'

const DEFAULT_LOCALE = 'en'

const DEFAULT_CURRENCY = CURRENCY_USD

const DEFAULT_CURRENCY_DISPLAY = DISPLAY_SYMBOL

const DEFAULT_CURRENCY_FRACTIONALS = 2

/** Class representing a Money. */
export class Money {

  /**
  * Create a new Money object with the initial value.
  * @param {number} value - The value to put on money
  * @param {number} [locale=en] - The locale for this money
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @param {number} [currencyFractionals=2] - The currency fractionals to use in currency formatting
  */
  constructor(value, { locale = DEFAULT_LOCALE, currency = DEFAULT_CURRENCY, ...options } = {}) {
    if (!isNumber(value)) {
      throw new Error('Value should be a number')
    }

    this.currencyFractionals = getValue(options.currencyFractionals, DEFAULT_CURRENCY_FRACTIONALS)
    isValidCurrencyFractionals(this.currencyFractionals)
    this.DEFAULT_INTL_OPTIONS = {
      minimumFractionDigits: this.currencyFractionals,
      maximumFractionDigits: this.currencyFractionals,
    }
    this.value = normalize(this.currencyFractionals, value)
    this.locale = locale
    this.currency = currency
  }

  /**
  * Create a new Money object with the initial value.
  * @param {number} value - A value to put on money
  * @param {number} [locale=en] - The locale for this money
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @param {number} [currencyFractionals=2] - The currency fractionals to use in currency formatting
  * @return {Money} The money with value
  */
  static init = (value = 0, { ...options } = {}) => new Money(value, options)

  /**
  * Create a new Money object from String value
  * @param {string} string - A value to put on money
  * @param {number} [locale=en] - The locale for this money
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @return {Money} The money with value
  */
  static fromString = (string = '0', { ...options } = {}) => {
    const value = Number.parseFloat(string)
    return new Money(value, options)
  }

  /**
   * Adds a value to money
   * @param {number} value - A value to put on money
   * @return {Money} The money with new value
   */
  add = value => handleMoney(sum.bind(this, this.currencyFractionals, value), this)

  /**
   * Subtract a value to money
   * @param {number} value - A value to remove from money
   * @return {Money} The money with new value
   */
  subtract = value => handleMoney(subtract.bind(this, this.currencyFractionals, value), this)

  /**
  * Return a formatted currency of Money
  * @param {number} [currencyDisplay=symbol] - How to display the currency in currency formatting.
  * @return {string} currency number of money
  */
  toCurrency = (currencyDisplay = DEFAULT_CURRENCY_DISPLAY) => {
    const options = {
      ...this.DEFAULT_INTL_OPTIONS,
      style: 'currency',
      currency: this.currency,
      currencyDisplay,
    }
    const intl = new Intl.NumberFormat(this.locale, options)
    return intl.format(denormalize(this.currencyFractionals, this.value))
  }

  /**
  * Formatted value of Money
  * @return {string} formatted number of money
  */
  toString = () => {
    const intl = new Intl.NumberFormat(this.locale, this.DEFAULT_INTL_OPTIONS)
    return intl.format(denormalize(this.currencyFractionals, this.value))
  }
}

export * from './display'

export * from './currency'
