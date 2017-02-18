import { Money } from '../src'

test('should be returned a Money object', () => {
  expect(Money.init(100)).toMatchObject({ value: 10000 })
})

test('should be returned a Money object with value = 0', () => {
  expect(Money.init()).toMatchObject({ value: 0, locale: 'en' })
})

test('should be returned a Money object with value = 100 and locale pt-BR', () => {
  expect(Money.init(1, { locale: 'pt-BR' })).toMatchObject({ value: 100, locale: 'pt-BR' })
})

test('should be returned an exception when value is a string', () => {
  expect(() => Money.init('100')).toThrow(Error)
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
