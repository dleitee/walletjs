import { Money } from '../'

export default (handler, money) =>
  new Money(handler(), {
    locale: money.locale,
    currency: money.currency,
    currencyFractionals: money.currencyFractionals,
    normalized: true,
  })
