import Wallet, { Money } from '../src'

test('add amount to wallet', () => {
  const amount = Money.init(100)
  const wallet = Wallet.init()
  const addWallet = wallet.add(amount)
  expect(addWallet.getAmount(amount.currency).toString()).toBe('100')
  expect(wallet.getAmount('USD')).toBe(0)
})

test('subtract amount to wallet', () => {
  const amount = Money.init(100)
  const wallet = Wallet.init()
  const subtractWallet = wallet.subtract(amount)
  expect(subtractWallet.getAmount(amount.currency).toString()).toBe('-100')
  expect(wallet.getAmount('USD')).toBe(0)
})

test('convertCurrency from USD to BRL', () => {
  const amount = Money.init(100)
  const wallet = Wallet.init(amount)
  const converted = wallet.convertCurrency('USD', 'BRL', 3.0870)
  expect(converted.getAmount('USD').toString()).toBe('0')
  expect(converted.getAmount('BRL').toString()).toBe('308.7')
  expect(wallet.getAmount('USD').toString()).toBe('100')
  expect(wallet.getAmount('BRL')).toBe(0)
})

test('convertCurrency from BRL to USD', () => {
  const amount = Money.init(100, { currency: 'BRL' })
  const wallet = Wallet.init(amount)
  const converted = wallet.convertCurrency('BRL', 'USD', 0.3239)
  expect(converted.getAmount('BRL')).toBe(0)
  expect(converted.getAmount('USD').toString()).toBe('32.39')
  expect(wallet.getAmount('BRL').toString()).toBe('100')
  expect(wallet.getAmount('USD')).toBe(0)
})
