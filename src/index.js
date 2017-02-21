import Money from './money'
import Map from './helpers/map'

/** Class representing a Wallet. */
export default class Wallet {

  /**
  * Create a new Wallet object.
  * @param {Map} amount - A key/value Map with currency/value
  */
  constructor(amount = new Map()) {
    this.amount = amount
  }

  /**
  * Returns a new Wallet with initial money
  * @param {Money []} arrayOfMoney - An array of money
  * @return {Wallet}
  */
  static init = (...arrayOfMoney) =>
    arrayOfMoney.reduce((wallet, money) => wallet.add(money), new Wallet())

  /**
  * Returns an amount by currency.
  * @param {string} currency - A money currency
  * @return {number}
  */
  getAmount = currency => this.amount.get(currency) || 0

  /**
  * Returns a new Wallet with added Money.
  * @param {Money} money - The money that will be added.
  * @return {Wallet}
  */
  add = (money) => {
    const currency = money.currency
    const current = this.getAmount(currency)
    return new Wallet(this.amount.set(currency, money.add(current).getValue()))
  }

  /**
  * Returns a new Wallet with subtracted Money.
  * @param {Money} money - The money that will be subtracted.
  * @return {Wallet}
  */
  subtract = (money) => {
    const currency = money.currency
    const current = Money.init(this.getAmount(currency))
    return new Wallet(this.amount.set(currency, current.subtract(money).getValue()))
  }

  /**
   * Convert money with currency {from} in currency {true} using {exchangeRate}
   * @param {currency} from
   * @param {currency} to
   * @param {number} exchangeRate
   * @return {Wallet}
   */
  convertCurrency = (from, to, exchangeRate) => {
    const fromAmount = Money.init(this.getAmount(from), { currency: from })
    const converted = fromAmount.multiplyBy(exchangeRate).getValue()
    return new Wallet(this.amount.set(from, 0).set(to, converted))
  }
}

export { Money }
export * from './display'
export * from './currency'
