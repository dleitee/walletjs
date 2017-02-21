import Wallet, { Money } from '../src'

test('should be returned a Wallet object', () => {
  expect(new Wallet()).toMatchObject({ })
  expect(Wallet.init()).toMatchObject({ })
})

test('should be returned a Wallet object with Money', () => {
  const amount = Money.init(100)
  const wallet = Wallet.init(amount)
  expect(wallet.getAmount(amount.currency).toString()).toBe('100')
})

test('should be returned a Wallet object with multiple Money', () => {
  const amount1 = Money.init(100)
  const amount2 = Money.init(200)
  const amount3 = Money.init(300)
  const wallet = Wallet.init(amount1, amount2, amount3)
  expect(wallet.getAmount(amount1.currency).toString()).toBe('600')
})

test('should be returned a Wallet object with multiple Money and two currencies', () => {
  const amount1 = Money.init(100, { currency: 'BRL' })
  const amount2 = Money.init(200)
  const amount3 = Money.init(300)
  const wallet = Wallet.init(amount1, amount2, amount3)
  expect(wallet.getAmount(amount1.currency).toString()).toBe('100')
  expect(wallet.getAmount(amount2.currency).toString()).toBe('500')
})
