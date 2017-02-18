import { Money } from '../'

export default (handler, wallet) =>
  new Money(handler(wallet.value), wallet.locale, wallet.currency)
