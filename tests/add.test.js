import wallet from '../src'

test('should be returned an wallet object with value = 200', () => {
  const amount = wallet.init(100)
  expect(amount.add(100)).toMatchObject({ value: 20000 })
  expect(amount).toMatchObject({ value: 10000 })
})
