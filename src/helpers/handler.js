import { Money } from '../'

export default (handler, wallet) =>
  new Money(handler(wallet.value), {
    locale: wallet.locale,
    currency: wallet.currency,
    currencyFractionals: wallet.currencyFractionals,
    normalized: true,
  })
