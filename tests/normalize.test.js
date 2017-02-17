import wallet from '../src'

test('should be returned an wallet object with value = 1020', () => {
  expect(wallet.init(10.20)).toMatchObject({ value: 1020 })
})

test('should be returned an wallet object with value = 1022', () => {
  expect(wallet.init(10.224)).toMatchObject({ value: 1022 })
})

test('should be returned an wallet object with value = 1023', () => {
  expect(wallet.init(10.225)).toMatchObject({ value: 1023 })
})

test('should be returned an wallet object with value = 1024', () => {
  expect(wallet.init(10.236)).toMatchObject({ value: 1024 })
})
