import { Money } from '../src'

test('[add] should be returned a Money object with value = 200', () => {
  const initialValue = 100
  const amount = Money.init(initialValue)
  expect(amount.add(100).getValue()).toBe(200)
  expect(amount.getValue()).toBe(initialValue)
})

test('[add] should be returned a Money object with small values', () => {
  const initialValue = 0.2
  const amount = Money.init(initialValue)
  expect(amount.add(0.1).getValue()).toBe(0.3)
  expect(amount.getValue()).toBe(initialValue)
})

test('[add] should be returned a Money object with very small values', () => {
  const initialValue = 0.0000000002
  const amount = Money.init(initialValue, { currencyFractionals: 10 })
  expect(amount.add(0.0000000001).getValue()).toBe(0.0000000003)
  expect(amount.getValue()).toBe(initialValue)
})

test('[add] should be returned a Money object with very very small values', () => {
  const initialValue = 0.00000000000000000009
  const amount = Money.init(initialValue, { currencyFractionals: 20 })
  expect(amount.add('0.00000000000000000009').toString()).toBe('0.00000000000000000018')
  expect(amount.getValue()).toBe(initialValue)
})

test('[add] should be returned a Money object with bigest values', () => {
  const initialValue = 99999999999999
  const amount = Money.init(initialValue)
  expect(amount.add(9999999999999).toString()).toBe('109,999,999,999,998.00')
  expect(amount.getValue()).toBe(initialValue)
})

test('[subtract] should be returned a Money object with value = 200', () => {
  const initialValue = 300
  const amount = Money.init(initialValue)
  expect(amount.subtract(100).getValue()).toBe(200)
  expect(amount.getValue()).toBe(initialValue)
})

test('[subtract] should be returned a Money object with value = 0.1', () => {
  const initialValue = 0.3
  const amount = Money.init(initialValue)
  expect(amount.subtract(0.2).getValue()).toBe(0.1)
  expect(amount.getValue()).toBe(initialValue)
})

test('[subtract] should be returned a Money object with value = 0.1', () => {
  const initialValue = 10100.03
  const amount = Money.init(initialValue)
  expect(amount.subtract(0.2).getValue()).toBe(10099.83)
  expect(amount.getValue()).toBe(initialValue)
})

test('[multiply] with real values', () => {
  const initialValue = 2.02
  const amount = Money.init(initialValue, { currencyFractionals: 2 })
  expect(amount.multiplyBy(3.15).toString()).toBe('6.36')
  expect(amount.getValue()).toBe(initialValue)
})

test('[multiply] with smallest values', () => {
  const initialValue = 200.000000000002
  const amount = Money.init(initialValue, { currencyFractionals: 12 })
  expect(amount.multiplyBy(2).toString()).toBe('400.000000000004')
  expect(amount.getValue()).toBe(initialValue)
})

test('[multiply] with biggest values', () => {
  const initialValue = 9999999999999.99
  const amount = Money.init(initialValue)
  expect(amount.multiplyBy(10).toString()).toBe('99,999,999,999,999.90')
  expect(amount.getValue()).toBe(initialValue)
})

test('[divide] with real values', () => {
  const initialValue = 2.02
  const amount = Money.init(initialValue, { currencyFractionals: 2 })
  expect(amount.divideBy(2).toString()).toBe('1.01')
  expect(amount.getValue()).toBe(initialValue)
})

test('[divide] with smallest values', () => {
  const initialValue = 200.000000000002
  const amount = Money.init(initialValue, { currencyFractionals: 12 })
  expect(amount.divideBy(2).toString()).toBe('100.000000000001')
  expect(amount.getValue()).toBe(initialValue)
})

test('[divide] with biggest values', () => {
  const initialValue = 999999999999999.00
  const amount = Money.init(initialValue)
  expect(amount.divideBy(10).toString()).toBe('99,999,999,999,999.90')
  expect(amount.getValue()).toBe(initialValue)
})
