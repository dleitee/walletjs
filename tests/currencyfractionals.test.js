import { Money } from '../src'

test('default currencyFractionals', () => {
  expect(Money.init(100).getValue()).toBe('100.00')
})

test('with currencyFractionals = 3', () => {
  expect(Money.init(100, { currencyFractionals: 3 }).getValue()).toBe('100.000')
})

test('with currencyFractionals = 0', () => {
  expect(Money.init(100, { currencyFractionals: 0 }).getValue()).toBe('100')
})

test('with currencyFractionals < 0', () => {
  expect(() => Money.init(100, { currencyFractionals: -1 })).toThrow(Error)
})
