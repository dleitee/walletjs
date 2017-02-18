import { Money } from '../src'

test('should be returned a Money object', () => {
  expect(Money.fromString('100')).toMatchObject({ value: 10000 })
})

test('should be returned a Money object with value = 0', () => {
  expect(Money.fromString()).toMatchObject({ value: 0, locale: 'en' })
})

test('should be returned a Money object with value = 100 and locale pt-BR', () => {
  expect(Money.fromString(1, { locale: 'pt-BR' })).toMatchObject({ value: 100, locale: 'pt-BR' })
})
