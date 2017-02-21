import { Money } from '../src'

test('should be returned a Money object', () => {
  expect(Money.fromString('100').getValue()).toBe('100.00')
})

test('should be returned a Money object with value = 0', () => {
  expect(Money.fromString().getValue()).toBe('0.00')
})

test('should be returned a Money object with value = 100 and locale pt-BR', () => {
  const money = Money.fromString(1, { locale: 'pt-BR' })
  expect(money.getValue()).toBe('1.00')
  expect(money.getLocale()).toBe('pt-BR')
})
