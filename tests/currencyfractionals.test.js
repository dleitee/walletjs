import wallet from '../src'

test('should be returned an wallet object', () => {
  expect(wallet.init(100, { currencyFractionals: 3 })).toMatchObject({ value: 100000 })
})

test('should be returned an wallet object', () => {
  expect(wallet.init(100, { currencyFractionals: 0 })).toMatchObject({ value: 100 })
})

test('should be returned an wallet object', () => {
  expect(() => wallet.init(100, { currencyFractionals: -1 })).toThrow(Error)
})
