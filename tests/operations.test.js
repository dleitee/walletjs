import wallet from '../src'

test('[add] should be returned an wallet object with value = 200', () => {
  const amount = wallet.init(100)
  expect(amount.add(100)).toMatchObject({ value: 20000 })
  expect(amount).toMatchObject({ value: 10000 })
})

test('[subtract] should be returned an wallet object with value = 200', () => {
  const amount = wallet.init(300)
  expect(amount.subtract(100)).toMatchObject({ value: 20000 })
  expect(amount).toMatchObject({ value: 30000 })
})
