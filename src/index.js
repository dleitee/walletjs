import Intl from 'intl'

import isNumber from './helpers/isnumber'
import handleWallet from './helpers/handler'
import { CURRENCY_USD } from './currency'
import { DISPLAY_SYMBOL } from './display'

const normalize = value => Math.round(value * 100)

const denormalize = value => (value / 100)

const DEFAULT_LOCALE = 'en'

const DEFAULT_CURRENCY = CURRENCY_USD

const DEFAULT_CURRENCY_DISPLAY = DISPLAY_SYMBOL

const DEFAULT_OPTIONS = { minimumFractionDigits: 2, maximumFractionDigits: 2 }

const sum = (newValue, oldValue) => newValue + denormalize(oldValue)

const subtract = (newValue, oldValue) => denormalize(oldValue) - newValue

/** Class representing a Wallet. */
export default class Wallet {

  /**
  * Create a new Wallet object with the initial value.
  * @param {number} value - The value to put on wallet
  * @param {number} [locale=en] - The locale for this wallet
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  */
  constructor(value, locale = DEFAULT_LOCALE, currency = DEFAULT_CURRENCY) {
    if (!isNumber(value)) {
      throw new Error('Value should be a number')
    }

    this.value = normalize(value)
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
  static init = (value = 0, { locale, currency } = {}) => new Wallet(value, locale, currency)

  /**
  * Create a new Wallet object from String value
  * @param {string} string - A value to put on wallet
  * @param {number} [locale=en] - The locale for this wallet
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @return {Wallet} The wallet with value
  */
  static fromString = (string = '0', { locale, currency } = {}) => {
    const value = Number.parseFloat(string)
    return new Wallet(value, locale, currency)
  }

  /**
   * Adds a value to wallet
   * @param {number} value - A value to put on wallet
   * @return {Wallet} The wallet with new value
   */
  add = value => handleWallet(sum.bind(this, value), this)

  /**
   * Subtract a value to wallet
   * @param {number} value - A value to remove from wallet
   * @return {Wallet} The wallet with new value
   */
  subtract = value => handleWallet(subtract.bind(this, value), this)

  /**
  * Return a formatted currency of Wallet
  * @param {number} [currencyDisplay=symbol] - How to display the currency in currency formatting.
  * @param {number} [currency=USD] - The currency to use in currency formatting.
  * @return {string} currency number of wallet
  */
  toCurrency = (currencyDisplay = DEFAULT_CURRENCY_DISPLAY, { currency } = {}) => {
    const options = {
      ...DEFAULT_OPTIONS,
      style: 'currency',
      currency: currency || this.currency,
      currencyDisplay,
    }
    const intl = new Intl.NumberFormat(this.locale, options)
    return intl.format(denormalize(this.value))
  }

  /**
  * Formatted value of Wallet
  * @return {string} formatted number of wallet
  */
  toString = () => {
    const intl = new Intl.NumberFormat(this.locale, DEFAULT_OPTIONS)
    return intl.format(denormalize(this.value))
  }
}

export * from './display'

export * from './currency'
