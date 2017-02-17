import Wallet from '../'

export default (handler, wallet) =>
  new Wallet(handler(wallet.value), wallet.locale, wallet.currency)
