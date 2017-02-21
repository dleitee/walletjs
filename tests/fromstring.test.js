import { Money } from '../src'

test('should be returned a Money object', () => {
  expect(Money.fromString('100').toString()).toBe('100.00')
})

test('should be returned a Money object with value = 0', () => {
  expect(Money.fromString().toString()).toBe('0.00')
})

test('should be returned a Money object with value = 100 and locale pt-BR', () => {
  expect(Money.fromString(1, { locale: 'pt-BR' }).toString()).toBe('1,00')
})
