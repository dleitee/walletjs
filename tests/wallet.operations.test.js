import Wallet, { Money } from '../src'

test('add amount to wallet', () => {
  const amount = Money.init(100)
  const wallet = Wallet.init()
  const addWallet = wallet.add(amount)
  expect(addWallet.getAmount(amount.currency)).toBe(100)
  expect(wallet.getAmount('USD')).toBe(0)
})

test('subtract amount to wallet', () => {
  const amount = Money.init(100)
  const wallet = Wallet.init()
  const subtractWallet = wallet.subtract(amount)
  expect(subtractWallet.getAmount(amount.currency)).toBe(-100)
  expect(wallet.getAmount('USD')).toBe(0)
})
