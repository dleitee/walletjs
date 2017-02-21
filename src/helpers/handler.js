import { Money } from '../'

export default (handler, wallet) =>
  new Money(handler(), {
    locale: wallet.locale,
    currency: wallet.currency,
    currencyFractionals: wallet.currencyFractionals,
    normalized: true,
  })
