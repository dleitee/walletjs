import { Money } from '../src'

test('should be returned a Money object', () => {
  expect(Money.init(100).getValue()).toBe('100.00')
})

test('should be returned a Money object with value = 0', () => {
  expect(Money.init().getValue()).toBe('0.00')
})

test('should be returned a Money object with value = 100 and locale pt-BR', () => {
  expect(Money.init(1, { locale: 'pt-BR' }).getValue()).toBe('1.00')
})

test('should be returned an exception when value is a NaN', () => {
  expect(() => Money.init(NaN)).toThrow(Error)
})

test('should be returned an exception when value is an object', () => {
  expect(() => Money.init({})).toThrow(Error)
})

test('should be returned an exception when value is an array', () => {
  expect(() => Money.init([])).toThrow(Error)
})
