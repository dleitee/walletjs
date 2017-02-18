import { Money } from '../src'

test('default currencyFractionals', () => {
  expect(Money.init(100)).toMatchObject({ value: 10000 })
})

test('with currencyFractionals = 3', () => {
  expect(Money.init(100, { currencyFractionals: 3 })).toMatchObject({ value: 100000 })
})

test('with currencyFractionals = 0', () => {
  expect(Money.init(100, { currencyFractionals: 0 })).toMatchObject({ value: 100 })
})

test('with currencyFractionals < 0', () => {
  expect(() => Money.init(100, { currencyFractionals: -1 })).toThrow(Error)
})
