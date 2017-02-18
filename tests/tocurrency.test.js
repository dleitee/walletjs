import { Money, CURRENCY_BRL, DISPLAY_CODE, DISPLAY_SYMBOL, DISPLAY_NAME } from '../src'

test('should be returned a currency format', () => {
  const amount = Money.init(100)
  expect(amount.toCurrency()).toBe('$100.00')
  expect(amount.toCurrency(DISPLAY_SYMBOL)).toBe('$100.00')
  expect(amount.toCurrency(DISPLAY_CODE)).toBe('USD100.00')
  expect(amount.toCurrency(DISPLAY_NAME)).toBe('USD100.00')

  const amount2 = Money.init(1000, { currency: CURRENCY_BRL })
  expect(amount2.toCurrency()).toBe('R$1,000.00')
  expect(amount2.toCurrency(DISPLAY_SYMBOL)).toBe('R$1,000.00')
  expect(amount2.toCurrency(DISPLAY_CODE)).toBe('BRL1,000.00')
  expect(amount2.toCurrency(DISPLAY_NAME)).toBe('BRL1,000.00')

  const amount3 = Money.init(100)
  expect(amount3.toCurrency(DISPLAY_SYMBOL)).toBe('$100.00')
})
