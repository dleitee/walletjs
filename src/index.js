import Intl from 'intl'

import isNumber from './helpers/isnumber'
import { CURRENCY_USD } from './currency'
import { DISPLAY_SYMBOL } from './display'

const normalize = value => Math.round(value * 100)

const denormalize = value => (value / 100)

const DEFAULT_LOCALE = 'en'

const DEFAULT_CURRENCY = CURRENCY_USD

const DEFAULT_CURRENCY_DISPLAY = DISPLAY_SYMBOL

const DEFAULT_OPTIONS = { minimumFractionDigits: 2 }

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
