import { Money } from '../src'

test('should be returned an string = 100.00', () => {
  const amount = Money.init(100)
  expect(amount.toString()).toBe('100.00')
})

test('should be returned an string = 2,000.00', () => {
  const amount = Money.init(2000)
  expect(amount.toString()).toBe('2,000.00')
})

test('should be returned an string = 2.000,00', () => {
  const amount = Money.init(2000, { locale: 'de-DE' })
  expect(amount.toString()).toBe('2.000,00')
})
