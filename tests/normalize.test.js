import { Money } from '../src'

test('should be returned a Money object with value = 1020', () => {
  expect(Money.init(10.20)).toMatchObject({ value: 1020 })
})

test('should be returned a Money object with value = 1022', () => {
  expect(Money.init(10.224)).toMatchObject({ value: 1022 })
})

test('should be returned a Money object with value = 1023', () => {
  expect(Money.init(10.225)).toMatchObject({ value: 1023 })
})

test('should be returned a Money object with value = 1024', () => {
  expect(Money.init(10.236)).toMatchObject({ value: 1024 })
})
