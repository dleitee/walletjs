import Intl from 'intl'

import { isNumber, getValue, isValidCurrencyFractionals } from './helpers/utils'
import handleWallet from './helpers/handler'
import { normalize, denormalize } from './helpers/normalization'
import { sum, subtract } from './helpers/operations'
import { CURRENCY_USD } from './currency'
import { DISPLAY_SYMBOL } from './display'

const DEFAULT_LOCALE = 'en'

const DEFAULT_CURRENCY = CURRENCY_USD

const DEFAULT_CURRENCY_DISPLAY = DISPLAY_SYMBOL

const DEFAULT_CURRENCY_FRACTIONALS = 2

/** Class representing a Wallet. */
export default class Wallet {

  /**
  * Create a new Wallet object with the initial value.
  * @param {number} value - The value to put on wallet
  * @param {number} [locale=en] - The locale for this wallet
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
  * Create a new Wallet object with the initial value.
  * @param {number} value - A value to put on wallet
  * @param {number} [locale=en] - The locale for this wallet
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @return {Wallet} The wallet with value
  */
  static init = (value = 0, { ...options } = {}) => new Wallet(value, options)

  /**
  * Create a new Wallet object from String value
  * @param {string} string - A value to put on wallet
  * @param {number} [locale=en] - The locale for this wallet
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @return {Wallet} The wallet with value
  */
  static fromString = (string = '0', { ...options } = {}) => {
    const value = Number.parseFloat(string)
    return new Wallet(value, options)
  }

  /**
   * Adds a value to wallet
   * @param {number} value - A value to put on wallet
   * @return {Wallet} The wallet with new value
   */
  add = value => handleWallet(sum.bind(this, this.currencyFractionals, value), this)

  /**
   * Subtract a value to wallet
   * @param {number} value - A value to remove from wallet
   * @return {Wallet} The wallet with new value
   */
  subtract = value => handleWallet(subtract.bind(this, this.currencyFractionals, value), this)

  /**
  * Return a formatted currency of Wallet
  * @param {number} [currencyDisplay=symbol] - How to display the currency in currency formatting.
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @return {string} currency number of wallet
  */
  toCurrency = (currencyDisplay = DEFAULT_CURRENCY_DISPLAY, { currency } = {}) => {
    const options = {
      ...this.DEFAULT_INTL_OPTIONS,
      style: 'currency',
      currency: currency || this.currency,
      currencyDisplay,
    }
    const intl = new Intl.NumberFormat(this.locale, options)
    return intl.format(denormalize(this.currencyFractionals, this.value))
  }

  /**
  * Formatted value of Wallet
  * @return {string} formatted number of wallet
  */
  toString = () => {
    const intl = new Intl.NumberFormat(this.locale, this.DEFAULT_INTL_OPTIONS)
    return intl.format(denormalize(this.currencyFractionals, this.value))
  }
}

export * from './display'

export * from './currency'
