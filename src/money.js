import Intl from 'intl'

import { getValue, isValidCurrencyFractionals } from './helpers/utils'
import handleMoney from './helpers/handler'
import { normalize, denormalize } from './helpers/normalization'
import { sum, subtract, multiply, divide } from './helpers/operations'
import { CURRENCY_USD } from './currency'
import { DISPLAY_SYMBOL } from './display'

const DEFAULT_LOCALE = 'en'

const DEFAULT_CURRENCY = CURRENCY_USD

const DEFAULT_CURRENCY_DISPLAY = DISPLAY_SYMBOL

const DEFAULT_CURRENCY_FRACTIONALS = 2

/** Class representing a Money. */
export default class Money {

  /**
  * Create a new Money object with the initial value.
  * @param {number} value - The value to put on money
  * @param {number} [locale=en] - The locale for this money
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @param {number} [currencyFractionals=2] - The currency fractionals to use in currency formatting
  */
  constructor(value, {
    locale = DEFAULT_LOCALE, currency = DEFAULT_CURRENCY, normalized = false, ...options
  } = {}) {
    this.currencyFractionals = getValue(options.currencyFractionals, DEFAULT_CURRENCY_FRACTIONALS)
    isValidCurrencyFractionals(this.currencyFractionals)
    this.DEFAULT_INTL_OPTIONS = {
      minimumFractionDigits: this.currencyFractionals,
      maximumFractionDigits: this.currencyFractionals,
    }
    this.value = normalized ? value : normalize(this.currencyFractionals, value)
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
  static fromString = (string = '0', { ...options } = {}) => new Money(string, options)

  /**
   * Adds a value to money
   * @param {number} value - A value to put on money
   * @return {Money} The money with new value
   */
  add = value => handleMoney(sum.bind(this, value), this)

  /**
   * Subtract a value to money
   * @param {number} value - A value to remove from money
   * @return {Money} The money with new value
   */
  subtract = value => handleMoney(subtract.bind(this, value), this)

  /**
   * Multiply your money by value
   * @param {number} value - A value to multiply
   * @return {Money} The money with new value
   */
  multiplyBy = value => handleMoney(multiply.bind(this, value), this)

  /**
   * Divide your money by value
   * @param {number} value - A value to divide
   * @return {Money} The money with new value
   */
  divideBy = value => handleMoney(divide.bind(this, value), this)

  /**
   * Get current value
   * @return {number} The value on Money
   */
  getValue = () => denormalize(this.currencyFractionals, this.value)

  /**
   * Get money locale
   * @return {string}
   */
  getLocale = () => this.locale

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
